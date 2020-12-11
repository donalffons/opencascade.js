declare const libName = "./modules/TKBinL.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class BinLDrivers_VectorOfDocumentSection extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: BinLDrivers_VectorOfDocumentSection, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: BinLDrivers_DocumentSection): BinLDrivers_DocumentSection;
  Appended(): BinLDrivers_DocumentSection;
  Value(theIndex: Standard_Integer): BinLDrivers_DocumentSection;
  First(): BinLDrivers_DocumentSection;
  ChangeFirst(): BinLDrivers_DocumentSection;
  Last(): BinLDrivers_DocumentSection;
  ChangeLast(): BinLDrivers_DocumentSection;
  ChangeValue(theIndex: Standard_Integer): BinLDrivers_DocumentSection;
  SetValue(theIndex: Standard_Integer, theValue: BinLDrivers_DocumentSection): BinLDrivers_DocumentSection;
}

  export declare class BinLDrivers_VectorOfDocumentSection_1 extends BinLDrivers_VectorOfDocumentSection {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class BinLDrivers_VectorOfDocumentSection_2 extends BinLDrivers_VectorOfDocumentSection {
    constructor(theOther: BinLDrivers_VectorOfDocumentSection);
  }

export declare class Handle_BinLDrivers_DocumentRetrievalDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinLDrivers_DocumentRetrievalDriver): void;
  get(): BinLDrivers_DocumentRetrievalDriver;
}

  export declare class Handle_BinLDrivers_DocumentRetrievalDriver_1 extends Handle_BinLDrivers_DocumentRetrievalDriver {
    constructor();
  }

  export declare class Handle_BinLDrivers_DocumentRetrievalDriver_2 extends Handle_BinLDrivers_DocumentRetrievalDriver {
    constructor(thePtr: BinLDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_BinLDrivers_DocumentRetrievalDriver_3 extends Handle_BinLDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_BinLDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_BinLDrivers_DocumentRetrievalDriver_4 extends Handle_BinLDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_BinLDrivers_DocumentRetrievalDriver);
  }

export declare class Handle_BinLDrivers_DocumentStorageDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinLDrivers_DocumentStorageDriver): void;
  get(): BinLDrivers_DocumentStorageDriver;
}

  export declare class Handle_BinLDrivers_DocumentStorageDriver_1 extends Handle_BinLDrivers_DocumentStorageDriver {
    constructor();
  }

  export declare class Handle_BinLDrivers_DocumentStorageDriver_2 extends Handle_BinLDrivers_DocumentStorageDriver {
    constructor(thePtr: BinLDrivers_DocumentStorageDriver);
  }

  export declare class Handle_BinLDrivers_DocumentStorageDriver_3 extends Handle_BinLDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_BinLDrivers_DocumentStorageDriver);
  }

  export declare class Handle_BinLDrivers_DocumentStorageDriver_4 extends Handle_BinLDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_BinLDrivers_DocumentStorageDriver);
  }

export declare class Handle_BinMDF_ADriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDF_ADriver): void;
  get(): BinMDF_ADriver;
}

  export declare class Handle_BinMDF_ADriver_1 extends Handle_BinMDF_ADriver {
    constructor();
  }

  export declare class Handle_BinMDF_ADriver_2 extends Handle_BinMDF_ADriver {
    constructor(thePtr: BinMDF_ADriver);
  }

  export declare class Handle_BinMDF_ADriver_3 extends Handle_BinMDF_ADriver {
    constructor(theHandle: Handle_BinMDF_ADriver);
  }

  export declare class Handle_BinMDF_ADriver_4 extends Handle_BinMDF_ADriver {
    constructor(theHandle: Handle_BinMDF_ADriver);
  }

export declare class Handle_BinMDF_ADriverTable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDF_ADriverTable): void;
  get(): BinMDF_ADriverTable;
}

  export declare class Handle_BinMDF_ADriverTable_1 extends Handle_BinMDF_ADriverTable {
    constructor();
  }

  export declare class Handle_BinMDF_ADriverTable_2 extends Handle_BinMDF_ADriverTable {
    constructor(thePtr: BinMDF_ADriverTable);
  }

  export declare class Handle_BinMDF_ADriverTable_3 extends Handle_BinMDF_ADriverTable {
    constructor(theHandle: Handle_BinMDF_ADriverTable);
  }

  export declare class Handle_BinMDF_ADriverTable_4 extends Handle_BinMDF_ADriverTable {
    constructor(theHandle: Handle_BinMDF_ADriverTable);
  }

export declare class Handle_BinMDF_ReferenceDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDF_ReferenceDriver): void;
  get(): BinMDF_ReferenceDriver;
}

  export declare class Handle_BinMDF_ReferenceDriver_1 extends Handle_BinMDF_ReferenceDriver {
    constructor();
  }

  export declare class Handle_BinMDF_ReferenceDriver_2 extends Handle_BinMDF_ReferenceDriver {
    constructor(thePtr: BinMDF_ReferenceDriver);
  }

  export declare class Handle_BinMDF_ReferenceDriver_3 extends Handle_BinMDF_ReferenceDriver {
    constructor(theHandle: Handle_BinMDF_ReferenceDriver);
  }

  export declare class Handle_BinMDF_ReferenceDriver_4 extends Handle_BinMDF_ReferenceDriver {
    constructor(theHandle: Handle_BinMDF_ReferenceDriver);
  }

export declare class Handle_BinMDF_TagSourceDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDF_TagSourceDriver): void;
  get(): BinMDF_TagSourceDriver;
}

  export declare class Handle_BinMDF_TagSourceDriver_1 extends Handle_BinMDF_TagSourceDriver {
    constructor();
  }

  export declare class Handle_BinMDF_TagSourceDriver_2 extends Handle_BinMDF_TagSourceDriver {
    constructor(thePtr: BinMDF_TagSourceDriver);
  }

  export declare class Handle_BinMDF_TagSourceDriver_3 extends Handle_BinMDF_TagSourceDriver {
    constructor(theHandle: Handle_BinMDF_TagSourceDriver);
  }

  export declare class Handle_BinMDF_TagSourceDriver_4 extends Handle_BinMDF_TagSourceDriver {
    constructor(theHandle: Handle_BinMDF_TagSourceDriver);
  }

export declare class Handle_BinMDataStd_AsciiStringDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_AsciiStringDriver): void;
  get(): BinMDataStd_AsciiStringDriver;
}

  export declare class Handle_BinMDataStd_AsciiStringDriver_1 extends Handle_BinMDataStd_AsciiStringDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_AsciiStringDriver_2 extends Handle_BinMDataStd_AsciiStringDriver {
    constructor(thePtr: BinMDataStd_AsciiStringDriver);
  }

  export declare class Handle_BinMDataStd_AsciiStringDriver_3 extends Handle_BinMDataStd_AsciiStringDriver {
    constructor(theHandle: Handle_BinMDataStd_AsciiStringDriver);
  }

  export declare class Handle_BinMDataStd_AsciiStringDriver_4 extends Handle_BinMDataStd_AsciiStringDriver {
    constructor(theHandle: Handle_BinMDataStd_AsciiStringDriver);
  }

export declare class Handle_BinMDataStd_BooleanArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_BooleanArrayDriver): void;
  get(): BinMDataStd_BooleanArrayDriver;
}

  export declare class Handle_BinMDataStd_BooleanArrayDriver_1 extends Handle_BinMDataStd_BooleanArrayDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_BooleanArrayDriver_2 extends Handle_BinMDataStd_BooleanArrayDriver {
    constructor(thePtr: BinMDataStd_BooleanArrayDriver);
  }

  export declare class Handle_BinMDataStd_BooleanArrayDriver_3 extends Handle_BinMDataStd_BooleanArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_BooleanArrayDriver);
  }

  export declare class Handle_BinMDataStd_BooleanArrayDriver_4 extends Handle_BinMDataStd_BooleanArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_BooleanArrayDriver);
  }

export declare class Handle_BinMDataStd_BooleanListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_BooleanListDriver): void;
  get(): BinMDataStd_BooleanListDriver;
}

  export declare class Handle_BinMDataStd_BooleanListDriver_1 extends Handle_BinMDataStd_BooleanListDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_BooleanListDriver_2 extends Handle_BinMDataStd_BooleanListDriver {
    constructor(thePtr: BinMDataStd_BooleanListDriver);
  }

  export declare class Handle_BinMDataStd_BooleanListDriver_3 extends Handle_BinMDataStd_BooleanListDriver {
    constructor(theHandle: Handle_BinMDataStd_BooleanListDriver);
  }

  export declare class Handle_BinMDataStd_BooleanListDriver_4 extends Handle_BinMDataStd_BooleanListDriver {
    constructor(theHandle: Handle_BinMDataStd_BooleanListDriver);
  }

export declare class Handle_BinMDataStd_ByteArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_ByteArrayDriver): void;
  get(): BinMDataStd_ByteArrayDriver;
}

  export declare class Handle_BinMDataStd_ByteArrayDriver_1 extends Handle_BinMDataStd_ByteArrayDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_ByteArrayDriver_2 extends Handle_BinMDataStd_ByteArrayDriver {
    constructor(thePtr: BinMDataStd_ByteArrayDriver);
  }

  export declare class Handle_BinMDataStd_ByteArrayDriver_3 extends Handle_BinMDataStd_ByteArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_ByteArrayDriver);
  }

  export declare class Handle_BinMDataStd_ByteArrayDriver_4 extends Handle_BinMDataStd_ByteArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_ByteArrayDriver);
  }

export declare class Handle_BinMDataStd_ExpressionDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_ExpressionDriver): void;
  get(): BinMDataStd_ExpressionDriver;
}

  export declare class Handle_BinMDataStd_ExpressionDriver_1 extends Handle_BinMDataStd_ExpressionDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_ExpressionDriver_2 extends Handle_BinMDataStd_ExpressionDriver {
    constructor(thePtr: BinMDataStd_ExpressionDriver);
  }

  export declare class Handle_BinMDataStd_ExpressionDriver_3 extends Handle_BinMDataStd_ExpressionDriver {
    constructor(theHandle: Handle_BinMDataStd_ExpressionDriver);
  }

  export declare class Handle_BinMDataStd_ExpressionDriver_4 extends Handle_BinMDataStd_ExpressionDriver {
    constructor(theHandle: Handle_BinMDataStd_ExpressionDriver);
  }

export declare class Handle_BinMDataStd_ExtStringArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_ExtStringArrayDriver): void;
  get(): BinMDataStd_ExtStringArrayDriver;
}

  export declare class Handle_BinMDataStd_ExtStringArrayDriver_1 extends Handle_BinMDataStd_ExtStringArrayDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_ExtStringArrayDriver_2 extends Handle_BinMDataStd_ExtStringArrayDriver {
    constructor(thePtr: BinMDataStd_ExtStringArrayDriver);
  }

  export declare class Handle_BinMDataStd_ExtStringArrayDriver_3 extends Handle_BinMDataStd_ExtStringArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_ExtStringArrayDriver);
  }

  export declare class Handle_BinMDataStd_ExtStringArrayDriver_4 extends Handle_BinMDataStd_ExtStringArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_ExtStringArrayDriver);
  }

export declare class Handle_BinMDataStd_ExtStringListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_ExtStringListDriver): void;
  get(): BinMDataStd_ExtStringListDriver;
}

  export declare class Handle_BinMDataStd_ExtStringListDriver_1 extends Handle_BinMDataStd_ExtStringListDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_ExtStringListDriver_2 extends Handle_BinMDataStd_ExtStringListDriver {
    constructor(thePtr: BinMDataStd_ExtStringListDriver);
  }

  export declare class Handle_BinMDataStd_ExtStringListDriver_3 extends Handle_BinMDataStd_ExtStringListDriver {
    constructor(theHandle: Handle_BinMDataStd_ExtStringListDriver);
  }

  export declare class Handle_BinMDataStd_ExtStringListDriver_4 extends Handle_BinMDataStd_ExtStringListDriver {
    constructor(theHandle: Handle_BinMDataStd_ExtStringListDriver);
  }

export declare class Handle_BinMDataStd_GenericEmptyDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_GenericEmptyDriver): void;
  get(): BinMDataStd_GenericEmptyDriver;
}

  export declare class Handle_BinMDataStd_GenericEmptyDriver_1 extends Handle_BinMDataStd_GenericEmptyDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_GenericEmptyDriver_2 extends Handle_BinMDataStd_GenericEmptyDriver {
    constructor(thePtr: BinMDataStd_GenericEmptyDriver);
  }

  export declare class Handle_BinMDataStd_GenericEmptyDriver_3 extends Handle_BinMDataStd_GenericEmptyDriver {
    constructor(theHandle: Handle_BinMDataStd_GenericEmptyDriver);
  }

  export declare class Handle_BinMDataStd_GenericEmptyDriver_4 extends Handle_BinMDataStd_GenericEmptyDriver {
    constructor(theHandle: Handle_BinMDataStd_GenericEmptyDriver);
  }

export declare class Handle_BinMDataStd_GenericExtStringDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_GenericExtStringDriver): void;
  get(): BinMDataStd_GenericExtStringDriver;
}

  export declare class Handle_BinMDataStd_GenericExtStringDriver_1 extends Handle_BinMDataStd_GenericExtStringDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_GenericExtStringDriver_2 extends Handle_BinMDataStd_GenericExtStringDriver {
    constructor(thePtr: BinMDataStd_GenericExtStringDriver);
  }

  export declare class Handle_BinMDataStd_GenericExtStringDriver_3 extends Handle_BinMDataStd_GenericExtStringDriver {
    constructor(theHandle: Handle_BinMDataStd_GenericExtStringDriver);
  }

  export declare class Handle_BinMDataStd_GenericExtStringDriver_4 extends Handle_BinMDataStd_GenericExtStringDriver {
    constructor(theHandle: Handle_BinMDataStd_GenericExtStringDriver);
  }

export declare class Handle_BinMDataStd_IntPackedMapDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_IntPackedMapDriver): void;
  get(): BinMDataStd_IntPackedMapDriver;
}

  export declare class Handle_BinMDataStd_IntPackedMapDriver_1 extends Handle_BinMDataStd_IntPackedMapDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_IntPackedMapDriver_2 extends Handle_BinMDataStd_IntPackedMapDriver {
    constructor(thePtr: BinMDataStd_IntPackedMapDriver);
  }

  export declare class Handle_BinMDataStd_IntPackedMapDriver_3 extends Handle_BinMDataStd_IntPackedMapDriver {
    constructor(theHandle: Handle_BinMDataStd_IntPackedMapDriver);
  }

  export declare class Handle_BinMDataStd_IntPackedMapDriver_4 extends Handle_BinMDataStd_IntPackedMapDriver {
    constructor(theHandle: Handle_BinMDataStd_IntPackedMapDriver);
  }

export declare class Handle_BinMDataStd_IntegerArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_IntegerArrayDriver): void;
  get(): BinMDataStd_IntegerArrayDriver;
}

  export declare class Handle_BinMDataStd_IntegerArrayDriver_1 extends Handle_BinMDataStd_IntegerArrayDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_IntegerArrayDriver_2 extends Handle_BinMDataStd_IntegerArrayDriver {
    constructor(thePtr: BinMDataStd_IntegerArrayDriver);
  }

  export declare class Handle_BinMDataStd_IntegerArrayDriver_3 extends Handle_BinMDataStd_IntegerArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_IntegerArrayDriver);
  }

  export declare class Handle_BinMDataStd_IntegerArrayDriver_4 extends Handle_BinMDataStd_IntegerArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_IntegerArrayDriver);
  }

export declare class Handle_BinMDataStd_IntegerDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_IntegerDriver): void;
  get(): BinMDataStd_IntegerDriver;
}

  export declare class Handle_BinMDataStd_IntegerDriver_1 extends Handle_BinMDataStd_IntegerDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_IntegerDriver_2 extends Handle_BinMDataStd_IntegerDriver {
    constructor(thePtr: BinMDataStd_IntegerDriver);
  }

  export declare class Handle_BinMDataStd_IntegerDriver_3 extends Handle_BinMDataStd_IntegerDriver {
    constructor(theHandle: Handle_BinMDataStd_IntegerDriver);
  }

  export declare class Handle_BinMDataStd_IntegerDriver_4 extends Handle_BinMDataStd_IntegerDriver {
    constructor(theHandle: Handle_BinMDataStd_IntegerDriver);
  }

export declare class Handle_BinMDataStd_IntegerListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_IntegerListDriver): void;
  get(): BinMDataStd_IntegerListDriver;
}

  export declare class Handle_BinMDataStd_IntegerListDriver_1 extends Handle_BinMDataStd_IntegerListDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_IntegerListDriver_2 extends Handle_BinMDataStd_IntegerListDriver {
    constructor(thePtr: BinMDataStd_IntegerListDriver);
  }

  export declare class Handle_BinMDataStd_IntegerListDriver_3 extends Handle_BinMDataStd_IntegerListDriver {
    constructor(theHandle: Handle_BinMDataStd_IntegerListDriver);
  }

  export declare class Handle_BinMDataStd_IntegerListDriver_4 extends Handle_BinMDataStd_IntegerListDriver {
    constructor(theHandle: Handle_BinMDataStd_IntegerListDriver);
  }

export declare class Handle_BinMDataStd_NamedDataDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_NamedDataDriver): void;
  get(): BinMDataStd_NamedDataDriver;
}

  export declare class Handle_BinMDataStd_NamedDataDriver_1 extends Handle_BinMDataStd_NamedDataDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_NamedDataDriver_2 extends Handle_BinMDataStd_NamedDataDriver {
    constructor(thePtr: BinMDataStd_NamedDataDriver);
  }

  export declare class Handle_BinMDataStd_NamedDataDriver_3 extends Handle_BinMDataStd_NamedDataDriver {
    constructor(theHandle: Handle_BinMDataStd_NamedDataDriver);
  }

  export declare class Handle_BinMDataStd_NamedDataDriver_4 extends Handle_BinMDataStd_NamedDataDriver {
    constructor(theHandle: Handle_BinMDataStd_NamedDataDriver);
  }

export declare class Handle_BinMDataStd_RealArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_RealArrayDriver): void;
  get(): BinMDataStd_RealArrayDriver;
}

  export declare class Handle_BinMDataStd_RealArrayDriver_1 extends Handle_BinMDataStd_RealArrayDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_RealArrayDriver_2 extends Handle_BinMDataStd_RealArrayDriver {
    constructor(thePtr: BinMDataStd_RealArrayDriver);
  }

  export declare class Handle_BinMDataStd_RealArrayDriver_3 extends Handle_BinMDataStd_RealArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_RealArrayDriver);
  }

  export declare class Handle_BinMDataStd_RealArrayDriver_4 extends Handle_BinMDataStd_RealArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_RealArrayDriver);
  }

export declare class Handle_BinMDataStd_RealDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_RealDriver): void;
  get(): BinMDataStd_RealDriver;
}

  export declare class Handle_BinMDataStd_RealDriver_1 extends Handle_BinMDataStd_RealDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_RealDriver_2 extends Handle_BinMDataStd_RealDriver {
    constructor(thePtr: BinMDataStd_RealDriver);
  }

  export declare class Handle_BinMDataStd_RealDriver_3 extends Handle_BinMDataStd_RealDriver {
    constructor(theHandle: Handle_BinMDataStd_RealDriver);
  }

  export declare class Handle_BinMDataStd_RealDriver_4 extends Handle_BinMDataStd_RealDriver {
    constructor(theHandle: Handle_BinMDataStd_RealDriver);
  }

export declare class Handle_BinMDataStd_RealListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_RealListDriver): void;
  get(): BinMDataStd_RealListDriver;
}

  export declare class Handle_BinMDataStd_RealListDriver_1 extends Handle_BinMDataStd_RealListDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_RealListDriver_2 extends Handle_BinMDataStd_RealListDriver {
    constructor(thePtr: BinMDataStd_RealListDriver);
  }

  export declare class Handle_BinMDataStd_RealListDriver_3 extends Handle_BinMDataStd_RealListDriver {
    constructor(theHandle: Handle_BinMDataStd_RealListDriver);
  }

  export declare class Handle_BinMDataStd_RealListDriver_4 extends Handle_BinMDataStd_RealListDriver {
    constructor(theHandle: Handle_BinMDataStd_RealListDriver);
  }

export declare class Handle_BinMDataStd_ReferenceArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_ReferenceArrayDriver): void;
  get(): BinMDataStd_ReferenceArrayDriver;
}

  export declare class Handle_BinMDataStd_ReferenceArrayDriver_1 extends Handle_BinMDataStd_ReferenceArrayDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_ReferenceArrayDriver_2 extends Handle_BinMDataStd_ReferenceArrayDriver {
    constructor(thePtr: BinMDataStd_ReferenceArrayDriver);
  }

  export declare class Handle_BinMDataStd_ReferenceArrayDriver_3 extends Handle_BinMDataStd_ReferenceArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_ReferenceArrayDriver);
  }

  export declare class Handle_BinMDataStd_ReferenceArrayDriver_4 extends Handle_BinMDataStd_ReferenceArrayDriver {
    constructor(theHandle: Handle_BinMDataStd_ReferenceArrayDriver);
  }

export declare class Handle_BinMDataStd_ReferenceListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_ReferenceListDriver): void;
  get(): BinMDataStd_ReferenceListDriver;
}

  export declare class Handle_BinMDataStd_ReferenceListDriver_1 extends Handle_BinMDataStd_ReferenceListDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_ReferenceListDriver_2 extends Handle_BinMDataStd_ReferenceListDriver {
    constructor(thePtr: BinMDataStd_ReferenceListDriver);
  }

  export declare class Handle_BinMDataStd_ReferenceListDriver_3 extends Handle_BinMDataStd_ReferenceListDriver {
    constructor(theHandle: Handle_BinMDataStd_ReferenceListDriver);
  }

  export declare class Handle_BinMDataStd_ReferenceListDriver_4 extends Handle_BinMDataStd_ReferenceListDriver {
    constructor(theHandle: Handle_BinMDataStd_ReferenceListDriver);
  }

export declare class Handle_BinMDataStd_TreeNodeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_TreeNodeDriver): void;
  get(): BinMDataStd_TreeNodeDriver;
}

  export declare class Handle_BinMDataStd_TreeNodeDriver_1 extends Handle_BinMDataStd_TreeNodeDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_TreeNodeDriver_2 extends Handle_BinMDataStd_TreeNodeDriver {
    constructor(thePtr: BinMDataStd_TreeNodeDriver);
  }

  export declare class Handle_BinMDataStd_TreeNodeDriver_3 extends Handle_BinMDataStd_TreeNodeDriver {
    constructor(theHandle: Handle_BinMDataStd_TreeNodeDriver);
  }

  export declare class Handle_BinMDataStd_TreeNodeDriver_4 extends Handle_BinMDataStd_TreeNodeDriver {
    constructor(theHandle: Handle_BinMDataStd_TreeNodeDriver);
  }

export declare class Handle_BinMDataStd_UAttributeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_UAttributeDriver): void;
  get(): BinMDataStd_UAttributeDriver;
}

  export declare class Handle_BinMDataStd_UAttributeDriver_1 extends Handle_BinMDataStd_UAttributeDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_UAttributeDriver_2 extends Handle_BinMDataStd_UAttributeDriver {
    constructor(thePtr: BinMDataStd_UAttributeDriver);
  }

  export declare class Handle_BinMDataStd_UAttributeDriver_3 extends Handle_BinMDataStd_UAttributeDriver {
    constructor(theHandle: Handle_BinMDataStd_UAttributeDriver);
  }

  export declare class Handle_BinMDataStd_UAttributeDriver_4 extends Handle_BinMDataStd_UAttributeDriver {
    constructor(theHandle: Handle_BinMDataStd_UAttributeDriver);
  }

export declare class Handle_BinMDataStd_VariableDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDataStd_VariableDriver): void;
  get(): BinMDataStd_VariableDriver;
}

  export declare class Handle_BinMDataStd_VariableDriver_1 extends Handle_BinMDataStd_VariableDriver {
    constructor();
  }

  export declare class Handle_BinMDataStd_VariableDriver_2 extends Handle_BinMDataStd_VariableDriver {
    constructor(thePtr: BinMDataStd_VariableDriver);
  }

  export declare class Handle_BinMDataStd_VariableDriver_3 extends Handle_BinMDataStd_VariableDriver {
    constructor(theHandle: Handle_BinMDataStd_VariableDriver);
  }

  export declare class Handle_BinMDataStd_VariableDriver_4 extends Handle_BinMDataStd_VariableDriver {
    constructor(theHandle: Handle_BinMDataStd_VariableDriver);
  }

export declare class Handle_BinMDocStd_XLinkDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMDocStd_XLinkDriver): void;
  get(): BinMDocStd_XLinkDriver;
}

  export declare class Handle_BinMDocStd_XLinkDriver_1 extends Handle_BinMDocStd_XLinkDriver {
    constructor();
  }

  export declare class Handle_BinMDocStd_XLinkDriver_2 extends Handle_BinMDocStd_XLinkDriver {
    constructor(thePtr: BinMDocStd_XLinkDriver);
  }

  export declare class Handle_BinMDocStd_XLinkDriver_3 extends Handle_BinMDocStd_XLinkDriver {
    constructor(theHandle: Handle_BinMDocStd_XLinkDriver);
  }

  export declare class Handle_BinMDocStd_XLinkDriver_4 extends Handle_BinMDocStd_XLinkDriver {
    constructor(theHandle: Handle_BinMDocStd_XLinkDriver);
  }

export declare class Handle_BinMFunction_FunctionDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMFunction_FunctionDriver): void;
  get(): BinMFunction_FunctionDriver;
}

  export declare class Handle_BinMFunction_FunctionDriver_1 extends Handle_BinMFunction_FunctionDriver {
    constructor();
  }

  export declare class Handle_BinMFunction_FunctionDriver_2 extends Handle_BinMFunction_FunctionDriver {
    constructor(thePtr: BinMFunction_FunctionDriver);
  }

  export declare class Handle_BinMFunction_FunctionDriver_3 extends Handle_BinMFunction_FunctionDriver {
    constructor(theHandle: Handle_BinMFunction_FunctionDriver);
  }

  export declare class Handle_BinMFunction_FunctionDriver_4 extends Handle_BinMFunction_FunctionDriver {
    constructor(theHandle: Handle_BinMFunction_FunctionDriver);
  }

export declare class Handle_BinMFunction_GraphNodeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMFunction_GraphNodeDriver): void;
  get(): BinMFunction_GraphNodeDriver;
}

  export declare class Handle_BinMFunction_GraphNodeDriver_1 extends Handle_BinMFunction_GraphNodeDriver {
    constructor();
  }

  export declare class Handle_BinMFunction_GraphNodeDriver_2 extends Handle_BinMFunction_GraphNodeDriver {
    constructor(thePtr: BinMFunction_GraphNodeDriver);
  }

  export declare class Handle_BinMFunction_GraphNodeDriver_3 extends Handle_BinMFunction_GraphNodeDriver {
    constructor(theHandle: Handle_BinMFunction_GraphNodeDriver);
  }

  export declare class Handle_BinMFunction_GraphNodeDriver_4 extends Handle_BinMFunction_GraphNodeDriver {
    constructor(theHandle: Handle_BinMFunction_GraphNodeDriver);
  }

export declare class Handle_BinMFunction_ScopeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BinMFunction_ScopeDriver): void;
  get(): BinMFunction_ScopeDriver;
}

  export declare class Handle_BinMFunction_ScopeDriver_1 extends Handle_BinMFunction_ScopeDriver {
    constructor();
  }

  export declare class Handle_BinMFunction_ScopeDriver_2 extends Handle_BinMFunction_ScopeDriver {
    constructor(thePtr: BinMFunction_ScopeDriver);
  }

  export declare class Handle_BinMFunction_ScopeDriver_3 extends Handle_BinMFunction_ScopeDriver {
    constructor(theHandle: Handle_BinMFunction_ScopeDriver);
  }

  export declare class Handle_BinMFunction_ScopeDriver_4 extends Handle_BinMFunction_ScopeDriver {
    constructor(theHandle: Handle_BinMFunction_ScopeDriver);
  }

export declare type BinLDrivers_Marker = {
  BinLDrivers_ENDATTRLIST: {};
  BinLDrivers_ENDLABEL: {};
}

export declare type TKBinLLib = {
  BinLDrivers_VectorOfDocumentSection_1: typeof BinLDrivers_VectorOfDocumentSection_1;
  BinLDrivers_VectorOfDocumentSection_2: typeof BinLDrivers_VectorOfDocumentSection_2;
  Handle_BinLDrivers_DocumentRetrievalDriver_1: typeof Handle_BinLDrivers_DocumentRetrievalDriver_1;
  Handle_BinLDrivers_DocumentRetrievalDriver_2: typeof Handle_BinLDrivers_DocumentRetrievalDriver_2;
  Handle_BinLDrivers_DocumentRetrievalDriver_3: typeof Handle_BinLDrivers_DocumentRetrievalDriver_3;
  Handle_BinLDrivers_DocumentRetrievalDriver_4: typeof Handle_BinLDrivers_DocumentRetrievalDriver_4;
  Handle_BinLDrivers_DocumentStorageDriver_1: typeof Handle_BinLDrivers_DocumentStorageDriver_1;
  Handle_BinLDrivers_DocumentStorageDriver_2: typeof Handle_BinLDrivers_DocumentStorageDriver_2;
  Handle_BinLDrivers_DocumentStorageDriver_3: typeof Handle_BinLDrivers_DocumentStorageDriver_3;
  Handle_BinLDrivers_DocumentStorageDriver_4: typeof Handle_BinLDrivers_DocumentStorageDriver_4;
  Handle_BinMDF_ADriver_1: typeof Handle_BinMDF_ADriver_1;
  Handle_BinMDF_ADriver_2: typeof Handle_BinMDF_ADriver_2;
  Handle_BinMDF_ADriver_3: typeof Handle_BinMDF_ADriver_3;
  Handle_BinMDF_ADriver_4: typeof Handle_BinMDF_ADriver_4;
  Handle_BinMDF_ADriverTable_1: typeof Handle_BinMDF_ADriverTable_1;
  Handle_BinMDF_ADriverTable_2: typeof Handle_BinMDF_ADriverTable_2;
  Handle_BinMDF_ADriverTable_3: typeof Handle_BinMDF_ADriverTable_3;
  Handle_BinMDF_ADriverTable_4: typeof Handle_BinMDF_ADriverTable_4;
  Handle_BinMDF_ReferenceDriver_1: typeof Handle_BinMDF_ReferenceDriver_1;
  Handle_BinMDF_ReferenceDriver_2: typeof Handle_BinMDF_ReferenceDriver_2;
  Handle_BinMDF_ReferenceDriver_3: typeof Handle_BinMDF_ReferenceDriver_3;
  Handle_BinMDF_ReferenceDriver_4: typeof Handle_BinMDF_ReferenceDriver_4;
  Handle_BinMDF_TagSourceDriver_1: typeof Handle_BinMDF_TagSourceDriver_1;
  Handle_BinMDF_TagSourceDriver_2: typeof Handle_BinMDF_TagSourceDriver_2;
  Handle_BinMDF_TagSourceDriver_3: typeof Handle_BinMDF_TagSourceDriver_3;
  Handle_BinMDF_TagSourceDriver_4: typeof Handle_BinMDF_TagSourceDriver_4;
  Handle_BinMDataStd_AsciiStringDriver_1: typeof Handle_BinMDataStd_AsciiStringDriver_1;
  Handle_BinMDataStd_AsciiStringDriver_2: typeof Handle_BinMDataStd_AsciiStringDriver_2;
  Handle_BinMDataStd_AsciiStringDriver_3: typeof Handle_BinMDataStd_AsciiStringDriver_3;
  Handle_BinMDataStd_AsciiStringDriver_4: typeof Handle_BinMDataStd_AsciiStringDriver_4;
  Handle_BinMDataStd_BooleanArrayDriver_1: typeof Handle_BinMDataStd_BooleanArrayDriver_1;
  Handle_BinMDataStd_BooleanArrayDriver_2: typeof Handle_BinMDataStd_BooleanArrayDriver_2;
  Handle_BinMDataStd_BooleanArrayDriver_3: typeof Handle_BinMDataStd_BooleanArrayDriver_3;
  Handle_BinMDataStd_BooleanArrayDriver_4: typeof Handle_BinMDataStd_BooleanArrayDriver_4;
  Handle_BinMDataStd_BooleanListDriver_1: typeof Handle_BinMDataStd_BooleanListDriver_1;
  Handle_BinMDataStd_BooleanListDriver_2: typeof Handle_BinMDataStd_BooleanListDriver_2;
  Handle_BinMDataStd_BooleanListDriver_3: typeof Handle_BinMDataStd_BooleanListDriver_3;
  Handle_BinMDataStd_BooleanListDriver_4: typeof Handle_BinMDataStd_BooleanListDriver_4;
  Handle_BinMDataStd_ByteArrayDriver_1: typeof Handle_BinMDataStd_ByteArrayDriver_1;
  Handle_BinMDataStd_ByteArrayDriver_2: typeof Handle_BinMDataStd_ByteArrayDriver_2;
  Handle_BinMDataStd_ByteArrayDriver_3: typeof Handle_BinMDataStd_ByteArrayDriver_3;
  Handle_BinMDataStd_ByteArrayDriver_4: typeof Handle_BinMDataStd_ByteArrayDriver_4;
  Handle_BinMDataStd_ExpressionDriver_1: typeof Handle_BinMDataStd_ExpressionDriver_1;
  Handle_BinMDataStd_ExpressionDriver_2: typeof Handle_BinMDataStd_ExpressionDriver_2;
  Handle_BinMDataStd_ExpressionDriver_3: typeof Handle_BinMDataStd_ExpressionDriver_3;
  Handle_BinMDataStd_ExpressionDriver_4: typeof Handle_BinMDataStd_ExpressionDriver_4;
  Handle_BinMDataStd_ExtStringArrayDriver_1: typeof Handle_BinMDataStd_ExtStringArrayDriver_1;
  Handle_BinMDataStd_ExtStringArrayDriver_2: typeof Handle_BinMDataStd_ExtStringArrayDriver_2;
  Handle_BinMDataStd_ExtStringArrayDriver_3: typeof Handle_BinMDataStd_ExtStringArrayDriver_3;
  Handle_BinMDataStd_ExtStringArrayDriver_4: typeof Handle_BinMDataStd_ExtStringArrayDriver_4;
  Handle_BinMDataStd_ExtStringListDriver_1: typeof Handle_BinMDataStd_ExtStringListDriver_1;
  Handle_BinMDataStd_ExtStringListDriver_2: typeof Handle_BinMDataStd_ExtStringListDriver_2;
  Handle_BinMDataStd_ExtStringListDriver_3: typeof Handle_BinMDataStd_ExtStringListDriver_3;
  Handle_BinMDataStd_ExtStringListDriver_4: typeof Handle_BinMDataStd_ExtStringListDriver_4;
  Handle_BinMDataStd_GenericEmptyDriver_1: typeof Handle_BinMDataStd_GenericEmptyDriver_1;
  Handle_BinMDataStd_GenericEmptyDriver_2: typeof Handle_BinMDataStd_GenericEmptyDriver_2;
  Handle_BinMDataStd_GenericEmptyDriver_3: typeof Handle_BinMDataStd_GenericEmptyDriver_3;
  Handle_BinMDataStd_GenericEmptyDriver_4: typeof Handle_BinMDataStd_GenericEmptyDriver_4;
  Handle_BinMDataStd_GenericExtStringDriver_1: typeof Handle_BinMDataStd_GenericExtStringDriver_1;
  Handle_BinMDataStd_GenericExtStringDriver_2: typeof Handle_BinMDataStd_GenericExtStringDriver_2;
  Handle_BinMDataStd_GenericExtStringDriver_3: typeof Handle_BinMDataStd_GenericExtStringDriver_3;
  Handle_BinMDataStd_GenericExtStringDriver_4: typeof Handle_BinMDataStd_GenericExtStringDriver_4;
  Handle_BinMDataStd_IntPackedMapDriver_1: typeof Handle_BinMDataStd_IntPackedMapDriver_1;
  Handle_BinMDataStd_IntPackedMapDriver_2: typeof Handle_BinMDataStd_IntPackedMapDriver_2;
  Handle_BinMDataStd_IntPackedMapDriver_3: typeof Handle_BinMDataStd_IntPackedMapDriver_3;
  Handle_BinMDataStd_IntPackedMapDriver_4: typeof Handle_BinMDataStd_IntPackedMapDriver_4;
  Handle_BinMDataStd_IntegerArrayDriver_1: typeof Handle_BinMDataStd_IntegerArrayDriver_1;
  Handle_BinMDataStd_IntegerArrayDriver_2: typeof Handle_BinMDataStd_IntegerArrayDriver_2;
  Handle_BinMDataStd_IntegerArrayDriver_3: typeof Handle_BinMDataStd_IntegerArrayDriver_3;
  Handle_BinMDataStd_IntegerArrayDriver_4: typeof Handle_BinMDataStd_IntegerArrayDriver_4;
  Handle_BinMDataStd_IntegerDriver_1: typeof Handle_BinMDataStd_IntegerDriver_1;
  Handle_BinMDataStd_IntegerDriver_2: typeof Handle_BinMDataStd_IntegerDriver_2;
  Handle_BinMDataStd_IntegerDriver_3: typeof Handle_BinMDataStd_IntegerDriver_3;
  Handle_BinMDataStd_IntegerDriver_4: typeof Handle_BinMDataStd_IntegerDriver_4;
  Handle_BinMDataStd_IntegerListDriver_1: typeof Handle_BinMDataStd_IntegerListDriver_1;
  Handle_BinMDataStd_IntegerListDriver_2: typeof Handle_BinMDataStd_IntegerListDriver_2;
  Handle_BinMDataStd_IntegerListDriver_3: typeof Handle_BinMDataStd_IntegerListDriver_3;
  Handle_BinMDataStd_IntegerListDriver_4: typeof Handle_BinMDataStd_IntegerListDriver_4;
  Handle_BinMDataStd_NamedDataDriver_1: typeof Handle_BinMDataStd_NamedDataDriver_1;
  Handle_BinMDataStd_NamedDataDriver_2: typeof Handle_BinMDataStd_NamedDataDriver_2;
  Handle_BinMDataStd_NamedDataDriver_3: typeof Handle_BinMDataStd_NamedDataDriver_3;
  Handle_BinMDataStd_NamedDataDriver_4: typeof Handle_BinMDataStd_NamedDataDriver_4;
  Handle_BinMDataStd_RealArrayDriver_1: typeof Handle_BinMDataStd_RealArrayDriver_1;
  Handle_BinMDataStd_RealArrayDriver_2: typeof Handle_BinMDataStd_RealArrayDriver_2;
  Handle_BinMDataStd_RealArrayDriver_3: typeof Handle_BinMDataStd_RealArrayDriver_3;
  Handle_BinMDataStd_RealArrayDriver_4: typeof Handle_BinMDataStd_RealArrayDriver_4;
  Handle_BinMDataStd_RealDriver_1: typeof Handle_BinMDataStd_RealDriver_1;
  Handle_BinMDataStd_RealDriver_2: typeof Handle_BinMDataStd_RealDriver_2;
  Handle_BinMDataStd_RealDriver_3: typeof Handle_BinMDataStd_RealDriver_3;
  Handle_BinMDataStd_RealDriver_4: typeof Handle_BinMDataStd_RealDriver_4;
  Handle_BinMDataStd_RealListDriver_1: typeof Handle_BinMDataStd_RealListDriver_1;
  Handle_BinMDataStd_RealListDriver_2: typeof Handle_BinMDataStd_RealListDriver_2;
  Handle_BinMDataStd_RealListDriver_3: typeof Handle_BinMDataStd_RealListDriver_3;
  Handle_BinMDataStd_RealListDriver_4: typeof Handle_BinMDataStd_RealListDriver_4;
  Handle_BinMDataStd_ReferenceArrayDriver_1: typeof Handle_BinMDataStd_ReferenceArrayDriver_1;
  Handle_BinMDataStd_ReferenceArrayDriver_2: typeof Handle_BinMDataStd_ReferenceArrayDriver_2;
  Handle_BinMDataStd_ReferenceArrayDriver_3: typeof Handle_BinMDataStd_ReferenceArrayDriver_3;
  Handle_BinMDataStd_ReferenceArrayDriver_4: typeof Handle_BinMDataStd_ReferenceArrayDriver_4;
  Handle_BinMDataStd_ReferenceListDriver_1: typeof Handle_BinMDataStd_ReferenceListDriver_1;
  Handle_BinMDataStd_ReferenceListDriver_2: typeof Handle_BinMDataStd_ReferenceListDriver_2;
  Handle_BinMDataStd_ReferenceListDriver_3: typeof Handle_BinMDataStd_ReferenceListDriver_3;
  Handle_BinMDataStd_ReferenceListDriver_4: typeof Handle_BinMDataStd_ReferenceListDriver_4;
  Handle_BinMDataStd_TreeNodeDriver_1: typeof Handle_BinMDataStd_TreeNodeDriver_1;
  Handle_BinMDataStd_TreeNodeDriver_2: typeof Handle_BinMDataStd_TreeNodeDriver_2;
  Handle_BinMDataStd_TreeNodeDriver_3: typeof Handle_BinMDataStd_TreeNodeDriver_3;
  Handle_BinMDataStd_TreeNodeDriver_4: typeof Handle_BinMDataStd_TreeNodeDriver_4;
  Handle_BinMDataStd_UAttributeDriver_1: typeof Handle_BinMDataStd_UAttributeDriver_1;
  Handle_BinMDataStd_UAttributeDriver_2: typeof Handle_BinMDataStd_UAttributeDriver_2;
  Handle_BinMDataStd_UAttributeDriver_3: typeof Handle_BinMDataStd_UAttributeDriver_3;
  Handle_BinMDataStd_UAttributeDriver_4: typeof Handle_BinMDataStd_UAttributeDriver_4;
  Handle_BinMDataStd_VariableDriver_1: typeof Handle_BinMDataStd_VariableDriver_1;
  Handle_BinMDataStd_VariableDriver_2: typeof Handle_BinMDataStd_VariableDriver_2;
  Handle_BinMDataStd_VariableDriver_3: typeof Handle_BinMDataStd_VariableDriver_3;
  Handle_BinMDataStd_VariableDriver_4: typeof Handle_BinMDataStd_VariableDriver_4;
  Handle_BinMDocStd_XLinkDriver_1: typeof Handle_BinMDocStd_XLinkDriver_1;
  Handle_BinMDocStd_XLinkDriver_2: typeof Handle_BinMDocStd_XLinkDriver_2;
  Handle_BinMDocStd_XLinkDriver_3: typeof Handle_BinMDocStd_XLinkDriver_3;
  Handle_BinMDocStd_XLinkDriver_4: typeof Handle_BinMDocStd_XLinkDriver_4;
  Handle_BinMFunction_FunctionDriver_1: typeof Handle_BinMFunction_FunctionDriver_1;
  Handle_BinMFunction_FunctionDriver_2: typeof Handle_BinMFunction_FunctionDriver_2;
  Handle_BinMFunction_FunctionDriver_3: typeof Handle_BinMFunction_FunctionDriver_3;
  Handle_BinMFunction_FunctionDriver_4: typeof Handle_BinMFunction_FunctionDriver_4;
  Handle_BinMFunction_GraphNodeDriver_1: typeof Handle_BinMFunction_GraphNodeDriver_1;
  Handle_BinMFunction_GraphNodeDriver_2: typeof Handle_BinMFunction_GraphNodeDriver_2;
  Handle_BinMFunction_GraphNodeDriver_3: typeof Handle_BinMFunction_GraphNodeDriver_3;
  Handle_BinMFunction_GraphNodeDriver_4: typeof Handle_BinMFunction_GraphNodeDriver_4;
  Handle_BinMFunction_ScopeDriver_1: typeof Handle_BinMFunction_ScopeDriver_1;
  Handle_BinMFunction_ScopeDriver_2: typeof Handle_BinMFunction_ScopeDriver_2;
  Handle_BinMFunction_ScopeDriver_3: typeof Handle_BinMFunction_ScopeDriver_3;
  Handle_BinMFunction_ScopeDriver_4: typeof Handle_BinMFunction_ScopeDriver_4;
  BinLDrivers_Marker: typeof BinLDrivers_Marker;
};
