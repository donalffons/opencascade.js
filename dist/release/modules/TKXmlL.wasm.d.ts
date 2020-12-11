declare const libName = "./modules/TKXmlL.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class XmlObjMgt_RRelocationTable extends TColStd_DataMapOfIntegerTransient {
  constructor();
  GetHeaderData(): Handle_Storage_HeaderData;
  SetHeaderData(theHeaderData: any): void;
  Clear(doReleaseMemory: Standard_Boolean): void;
}

export declare class XmlLDrivers_DocumentRetrievalDriver extends PCDM_RetrievalDriver {
  constructor()
  CreateDocument(): any;
  Read_1(theFileName: TCollection_ExtendedString, theNewDocument: any, theApplication: any, theRange: Message_ProgressRange): void;
  Read_2(theIStream: Standard_IStream, theStorageData: any, theDoc: any, theApplication: any, theRange: Message_ProgressRange): void;
  AttributeDrivers(theMsgDriver: any): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlLDrivers_NamespaceDef {
  Prefix(): TCollection_AsciiString;
  URI(): TCollection_AsciiString;
}

  export declare class XmlLDrivers_NamespaceDef_1 extends XmlLDrivers_NamespaceDef {
    constructor();
  }

  export declare class XmlLDrivers_NamespaceDef_2 extends XmlLDrivers_NamespaceDef {
    constructor(thePrefix: TCollection_AsciiString, theURI: TCollection_AsciiString);
  }

export declare class XmlObjMgt_SRelocationTable extends TColStd_IndexedMapOfTransient {
  constructor();
  GetHeaderData(): any;
  SetHeaderData(theHeaderData: any): void;
  Clear(doReleaseMemory: Standard_Boolean): void;
}

export declare class XmlLDrivers_DocumentStorageDriver extends PCDM_StorageDriver {
  constructor(theCopyright: TCollection_ExtendedString)
  Write_1(theDocument: any, theFileName: TCollection_ExtendedString, theRange: Message_ProgressRange): void;
  Write_2(theDocument: any, theOStream: Standard_OStream, theRange: Message_ProgressRange): void;
  AttributeDrivers(theMsgDriver: any): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlLDrivers {
  constructor();
  Factory(theGUID: Standard_GUID): any;
  CreationDate(): TCollection_AsciiString;
  DefineFormat(theApp: any): void;
  AttributeDrivers(theMsgDriver: any): any;
  StorageVersion(): number;
}

export declare class XmlMDF_ADriver extends Standard_Transient {
  VersionNumber(): Standard_Integer;
  NewEmpty(): any;
  SourceType(): any;
  TypeName(): TCollection_AsciiString;
  Namespace(): TCollection_AsciiString;
  Paste_1(aSource: XmlObjMgt_Persistent, aTarget: any, aRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(aSource: any, aTarget: XmlObjMgt_Persistent, aRelocTable: XmlObjMgt_SRelocationTable): void;
  MessageDriver(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDF {
  constructor();
  FromTo_1(aSource: any, aTarget: XmlObjMgt_Element, aReloc: XmlObjMgt_SRelocationTable, aDrivers: any, theRange: Message_ProgressRange): void;
  FromTo_2(aSource: XmlObjMgt_Element, aTarget: any, aReloc: XmlObjMgt_RRelocationTable, aDrivers: any, theRange: Message_ProgressRange): Standard_Boolean;
  AddDrivers(aDriverTable: any, theMessageDriver: any): void;
}

export declare class XmlMDF_ADriverTable extends Standard_Transient {
  constructor()
  AddDriver(anHDriver: any): void;
  AddDerivedDriver_1(theInstance: any): void;
  AddDerivedDriver_2(theDerivedType: Standard_CString): any;
  CreateDrvMap(theDriverMap: XmlMDF_MapOfDriver): void;
  GetDriver(theType: any, theDriver: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDF_DerivedDriver extends XmlMDF_ADriver {
  constructor(theDerivative: any, theBaseDriver: any)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  TypeName(): TCollection_AsciiString;
  Paste_1(theSource: XmlObjMgt_Persistent, theTarget: any, theRelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(theSource: any, theTarget: XmlObjMgt_Persistent, theRelocTable: XmlObjMgt_SRelocationTable): void;
}

export declare class XmlMDF_ReferenceDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDF_TagSourceDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd {
  constructor();
  AddDrivers(aDriverTable: any, anMsgDrv: any): void;
}

export declare class XmlMDataStd_AsciiStringDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_BooleanArrayDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_BooleanListDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_ByteArrayDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_ExpressionDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_ExtStringArrayDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_ExtStringListDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_GenericEmptyDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  SourceType(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_GenericExtStringDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  SourceType(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_IntPackedMapDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_IntegerArrayDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_IntegerDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_IntegerListDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_NamedDataDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_RealArrayDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_RealDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_RealListDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_ReferenceArrayDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_ReferenceListDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_TreeNodeDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_UAttributeDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDataStd_VariableDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMDocStd {
  constructor();
  AddDrivers(aDriverTable: any, theMessageDriver: any): void;
}

export declare class XmlMDocStd_XLinkDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMFunction {
  constructor();
  AddDrivers(aDriverTable: any, theMessageDriver: any): void;
}

export declare class XmlMFunction_FunctionDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMFunction_GraphNodeDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlMFunction_ScopeDriver extends XmlMDF_ADriver {
  constructor(theMessageDriver: any)
  NewEmpty(): any;
  Paste_1(Source: XmlObjMgt_Persistent, Target: any, RelocTable: XmlObjMgt_RRelocationTable): Standard_Boolean;
  Paste_2(Source: any, Target: XmlObjMgt_Persistent, RelocTable: XmlObjMgt_SRelocationTable): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XmlObjMgt {
  constructor();
  IdString(): XmlObjMgt_DOMString;
  SetExtendedString(theElement: XmlObjMgt_Element, theString: TCollection_ExtendedString): Standard_Boolean;
  GetExtendedString(theElement: XmlObjMgt_Element, theString: TCollection_ExtendedString): Standard_Boolean;
  GetStringValue(theElement: XmlObjMgt_Element): XmlObjMgt_DOMString;
  SetStringValue(theElement: XmlObjMgt_Element, theData: XmlObjMgt_DOMString, isClearText: Standard_Boolean): void;
  GetTagEntryString(theTarget: XmlObjMgt_DOMString, theTagEntry: TCollection_AsciiString): Standard_Boolean;
  SetTagEntryString(theSource: XmlObjMgt_DOMString, theTagEntry: TCollection_AsciiString): void;
  FindChildElement(theSource: XmlObjMgt_Element, theObjId: Standard_Integer): XmlObjMgt_Element;
  FindChildByRef(theSource: XmlObjMgt_Element, theRefName: XmlObjMgt_DOMString): XmlObjMgt_Element;
  FindChildByName(theSource: XmlObjMgt_Element, theName: XmlObjMgt_DOMString): XmlObjMgt_Element;
  GetInteger(theString: Standard_CString, theValue: Standard_Integer): Standard_Boolean;
  GetReal_1(theString: Standard_CString, theValue: Standard_Real): Standard_Boolean;
  GetReal_2(theString: XmlObjMgt_DOMString, theValue: Standard_Real): Standard_Boolean;
}

export declare class XmlObjMgt_Array1 {
  CreateArrayElement(theParent: XmlObjMgt_Element, theName: XmlObjMgt_DOMString): void;
  Element(): XmlObjMgt_Element;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  SetValue(Index: Standard_Integer, Value: XmlObjMgt_Element): void;
  Value(Index: Standard_Integer): XmlObjMgt_Element;
}

  export declare class XmlObjMgt_Array1_1 extends XmlObjMgt_Array1 {
    constructor(Low: Standard_Integer, Up: Standard_Integer);
  }

  export declare class XmlObjMgt_Array1_2 extends XmlObjMgt_Array1 {
    constructor(theParent: XmlObjMgt_Element, theName: XmlObjMgt_DOMString);
  }

export declare class XmlObjMgt_GP {
  constructor();
  Translate_1(aTrsf: gp_Trsf): XmlObjMgt_DOMString;
  Translate_2(aMat: gp_Mat): XmlObjMgt_DOMString;
  Translate_3(anXYZ: gp_XYZ): XmlObjMgt_DOMString;
  Translate_4(aStr: XmlObjMgt_DOMString, T: gp_Trsf): Standard_Boolean;
  Translate_5(aStr: XmlObjMgt_DOMString, T: gp_Mat): Standard_Boolean;
  Translate_6(aStr: XmlObjMgt_DOMString, T: gp_XYZ): Standard_Boolean;
}

export declare class XmlObjMgt_Persistent {
  CreateElement(theParent: XmlObjMgt_Element, theType: XmlObjMgt_DOMString, theID: Standard_Integer): void;
  SetId(theId: Standard_Integer): void;
  Element_1(): XmlObjMgt_Element;
  Element_2(): XmlObjMgt_Element;
  Id(): Standard_Integer;
}

  export declare class XmlObjMgt_Persistent_1 extends XmlObjMgt_Persistent {
    constructor();
  }

  export declare class XmlObjMgt_Persistent_2 extends XmlObjMgt_Persistent {
    constructor(theElement: XmlObjMgt_Element);
  }

  export declare class XmlObjMgt_Persistent_3 extends XmlObjMgt_Persistent {
    constructor(theElement: XmlObjMgt_Element, theRef: XmlObjMgt_DOMString);
  }

export declare class Handle_XmlLDrivers_DocumentRetrievalDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlLDrivers_DocumentRetrievalDriver): void;
  get(): XmlLDrivers_DocumentRetrievalDriver;
}

  export declare class Handle_XmlLDrivers_DocumentRetrievalDriver_1 extends Handle_XmlLDrivers_DocumentRetrievalDriver {
    constructor();
  }

  export declare class Handle_XmlLDrivers_DocumentRetrievalDriver_2 extends Handle_XmlLDrivers_DocumentRetrievalDriver {
    constructor(thePtr: XmlLDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_XmlLDrivers_DocumentRetrievalDriver_3 extends Handle_XmlLDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_XmlLDrivers_DocumentRetrievalDriver);
  }

  export declare class Handle_XmlLDrivers_DocumentRetrievalDriver_4 extends Handle_XmlLDrivers_DocumentRetrievalDriver {
    constructor(theHandle: Handle_XmlLDrivers_DocumentRetrievalDriver);
  }

export declare class XmlLDrivers_SequenceOfNamespaceDef extends NCollection_BaseSequence {
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
  Assign(theOther: XmlLDrivers_SequenceOfNamespaceDef): XmlLDrivers_SequenceOfNamespaceDef;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: XmlLDrivers_NamespaceDef): void;
  Append_2(theSeq: XmlLDrivers_SequenceOfNamespaceDef): void;
  Prepend_1(theItem: XmlLDrivers_NamespaceDef): void;
  Prepend_2(theSeq: XmlLDrivers_SequenceOfNamespaceDef): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: XmlLDrivers_NamespaceDef): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: XmlLDrivers_SequenceOfNamespaceDef): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: XmlLDrivers_SequenceOfNamespaceDef): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: XmlLDrivers_NamespaceDef): void;
  Split(theIndex: Standard_Integer, theSeq: XmlLDrivers_SequenceOfNamespaceDef): void;
  First(): XmlLDrivers_NamespaceDef;
  ChangeFirst(): XmlLDrivers_NamespaceDef;
  Last(): XmlLDrivers_NamespaceDef;
  ChangeLast(): XmlLDrivers_NamespaceDef;
  Value(theIndex: Standard_Integer): XmlLDrivers_NamespaceDef;
  ChangeValue(theIndex: Standard_Integer): XmlLDrivers_NamespaceDef;
  SetValue(theIndex: Standard_Integer, theItem: XmlLDrivers_NamespaceDef): void;
}

  export declare class XmlLDrivers_SequenceOfNamespaceDef_1 extends XmlLDrivers_SequenceOfNamespaceDef {
    constructor();
  }

  export declare class XmlLDrivers_SequenceOfNamespaceDef_2 extends XmlLDrivers_SequenceOfNamespaceDef {
    constructor(theAllocator: any);
  }

  export declare class XmlLDrivers_SequenceOfNamespaceDef_3 extends XmlLDrivers_SequenceOfNamespaceDef {
    constructor(theOther: XmlLDrivers_SequenceOfNamespaceDef);
  }

export declare class Handle_XmlLDrivers_DocumentStorageDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlLDrivers_DocumentStorageDriver): void;
  get(): XmlLDrivers_DocumentStorageDriver;
}

  export declare class Handle_XmlLDrivers_DocumentStorageDriver_1 extends Handle_XmlLDrivers_DocumentStorageDriver {
    constructor();
  }

  export declare class Handle_XmlLDrivers_DocumentStorageDriver_2 extends Handle_XmlLDrivers_DocumentStorageDriver {
    constructor(thePtr: XmlLDrivers_DocumentStorageDriver);
  }

  export declare class Handle_XmlLDrivers_DocumentStorageDriver_3 extends Handle_XmlLDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_XmlLDrivers_DocumentStorageDriver);
  }

  export declare class Handle_XmlLDrivers_DocumentStorageDriver_4 extends Handle_XmlLDrivers_DocumentStorageDriver {
    constructor(theHandle: Handle_XmlLDrivers_DocumentStorageDriver);
  }

export declare class Handle_XmlMDF_ADriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDF_ADriver): void;
  get(): XmlMDF_ADriver;
}

  export declare class Handle_XmlMDF_ADriver_1 extends Handle_XmlMDF_ADriver {
    constructor();
  }

  export declare class Handle_XmlMDF_ADriver_2 extends Handle_XmlMDF_ADriver {
    constructor(thePtr: XmlMDF_ADriver);
  }

  export declare class Handle_XmlMDF_ADriver_3 extends Handle_XmlMDF_ADriver {
    constructor(theHandle: Handle_XmlMDF_ADriver);
  }

  export declare class Handle_XmlMDF_ADriver_4 extends Handle_XmlMDF_ADriver {
    constructor(theHandle: Handle_XmlMDF_ADriver);
  }

export declare class Handle_XmlMDF_ADriverTable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDF_ADriverTable): void;
  get(): XmlMDF_ADriverTable;
}

  export declare class Handle_XmlMDF_ADriverTable_1 extends Handle_XmlMDF_ADriverTable {
    constructor();
  }

  export declare class Handle_XmlMDF_ADriverTable_2 extends Handle_XmlMDF_ADriverTable {
    constructor(thePtr: XmlMDF_ADriverTable);
  }

  export declare class Handle_XmlMDF_ADriverTable_3 extends Handle_XmlMDF_ADriverTable {
    constructor(theHandle: Handle_XmlMDF_ADriverTable);
  }

  export declare class Handle_XmlMDF_ADriverTable_4 extends Handle_XmlMDF_ADriverTable {
    constructor(theHandle: Handle_XmlMDF_ADriverTable);
  }

export declare class Handle_XmlMDF_ReferenceDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDF_ReferenceDriver): void;
  get(): XmlMDF_ReferenceDriver;
}

  export declare class Handle_XmlMDF_ReferenceDriver_1 extends Handle_XmlMDF_ReferenceDriver {
    constructor();
  }

  export declare class Handle_XmlMDF_ReferenceDriver_2 extends Handle_XmlMDF_ReferenceDriver {
    constructor(thePtr: XmlMDF_ReferenceDriver);
  }

  export declare class Handle_XmlMDF_ReferenceDriver_3 extends Handle_XmlMDF_ReferenceDriver {
    constructor(theHandle: Handle_XmlMDF_ReferenceDriver);
  }

  export declare class Handle_XmlMDF_ReferenceDriver_4 extends Handle_XmlMDF_ReferenceDriver {
    constructor(theHandle: Handle_XmlMDF_ReferenceDriver);
  }

export declare class Handle_XmlMDF_TagSourceDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDF_TagSourceDriver): void;
  get(): XmlMDF_TagSourceDriver;
}

  export declare class Handle_XmlMDF_TagSourceDriver_1 extends Handle_XmlMDF_TagSourceDriver {
    constructor();
  }

  export declare class Handle_XmlMDF_TagSourceDriver_2 extends Handle_XmlMDF_TagSourceDriver {
    constructor(thePtr: XmlMDF_TagSourceDriver);
  }

  export declare class Handle_XmlMDF_TagSourceDriver_3 extends Handle_XmlMDF_TagSourceDriver {
    constructor(theHandle: Handle_XmlMDF_TagSourceDriver);
  }

  export declare class Handle_XmlMDF_TagSourceDriver_4 extends Handle_XmlMDF_TagSourceDriver {
    constructor(theHandle: Handle_XmlMDF_TagSourceDriver);
  }

export declare class Handle_XmlMDataStd_AsciiStringDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_AsciiStringDriver): void;
  get(): XmlMDataStd_AsciiStringDriver;
}

  export declare class Handle_XmlMDataStd_AsciiStringDriver_1 extends Handle_XmlMDataStd_AsciiStringDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_AsciiStringDriver_2 extends Handle_XmlMDataStd_AsciiStringDriver {
    constructor(thePtr: XmlMDataStd_AsciiStringDriver);
  }

  export declare class Handle_XmlMDataStd_AsciiStringDriver_3 extends Handle_XmlMDataStd_AsciiStringDriver {
    constructor(theHandle: Handle_XmlMDataStd_AsciiStringDriver);
  }

  export declare class Handle_XmlMDataStd_AsciiStringDriver_4 extends Handle_XmlMDataStd_AsciiStringDriver {
    constructor(theHandle: Handle_XmlMDataStd_AsciiStringDriver);
  }

export declare class Handle_XmlMDataStd_BooleanArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_BooleanArrayDriver): void;
  get(): XmlMDataStd_BooleanArrayDriver;
}

  export declare class Handle_XmlMDataStd_BooleanArrayDriver_1 extends Handle_XmlMDataStd_BooleanArrayDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_BooleanArrayDriver_2 extends Handle_XmlMDataStd_BooleanArrayDriver {
    constructor(thePtr: XmlMDataStd_BooleanArrayDriver);
  }

  export declare class Handle_XmlMDataStd_BooleanArrayDriver_3 extends Handle_XmlMDataStd_BooleanArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_BooleanArrayDriver);
  }

  export declare class Handle_XmlMDataStd_BooleanArrayDriver_4 extends Handle_XmlMDataStd_BooleanArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_BooleanArrayDriver);
  }

export declare class Handle_XmlMDataStd_BooleanListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_BooleanListDriver): void;
  get(): XmlMDataStd_BooleanListDriver;
}

  export declare class Handle_XmlMDataStd_BooleanListDriver_1 extends Handle_XmlMDataStd_BooleanListDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_BooleanListDriver_2 extends Handle_XmlMDataStd_BooleanListDriver {
    constructor(thePtr: XmlMDataStd_BooleanListDriver);
  }

  export declare class Handle_XmlMDataStd_BooleanListDriver_3 extends Handle_XmlMDataStd_BooleanListDriver {
    constructor(theHandle: Handle_XmlMDataStd_BooleanListDriver);
  }

  export declare class Handle_XmlMDataStd_BooleanListDriver_4 extends Handle_XmlMDataStd_BooleanListDriver {
    constructor(theHandle: Handle_XmlMDataStd_BooleanListDriver);
  }

export declare class Handle_XmlMDataStd_ByteArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_ByteArrayDriver): void;
  get(): XmlMDataStd_ByteArrayDriver;
}

  export declare class Handle_XmlMDataStd_ByteArrayDriver_1 extends Handle_XmlMDataStd_ByteArrayDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_ByteArrayDriver_2 extends Handle_XmlMDataStd_ByteArrayDriver {
    constructor(thePtr: XmlMDataStd_ByteArrayDriver);
  }

  export declare class Handle_XmlMDataStd_ByteArrayDriver_3 extends Handle_XmlMDataStd_ByteArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_ByteArrayDriver);
  }

  export declare class Handle_XmlMDataStd_ByteArrayDriver_4 extends Handle_XmlMDataStd_ByteArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_ByteArrayDriver);
  }

export declare class Handle_XmlMDataStd_ExpressionDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_ExpressionDriver): void;
  get(): XmlMDataStd_ExpressionDriver;
}

  export declare class Handle_XmlMDataStd_ExpressionDriver_1 extends Handle_XmlMDataStd_ExpressionDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_ExpressionDriver_2 extends Handle_XmlMDataStd_ExpressionDriver {
    constructor(thePtr: XmlMDataStd_ExpressionDriver);
  }

  export declare class Handle_XmlMDataStd_ExpressionDriver_3 extends Handle_XmlMDataStd_ExpressionDriver {
    constructor(theHandle: Handle_XmlMDataStd_ExpressionDriver);
  }

  export declare class Handle_XmlMDataStd_ExpressionDriver_4 extends Handle_XmlMDataStd_ExpressionDriver {
    constructor(theHandle: Handle_XmlMDataStd_ExpressionDriver);
  }

export declare class Handle_XmlMDataStd_ExtStringArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_ExtStringArrayDriver): void;
  get(): XmlMDataStd_ExtStringArrayDriver;
}

  export declare class Handle_XmlMDataStd_ExtStringArrayDriver_1 extends Handle_XmlMDataStd_ExtStringArrayDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_ExtStringArrayDriver_2 extends Handle_XmlMDataStd_ExtStringArrayDriver {
    constructor(thePtr: XmlMDataStd_ExtStringArrayDriver);
  }

  export declare class Handle_XmlMDataStd_ExtStringArrayDriver_3 extends Handle_XmlMDataStd_ExtStringArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_ExtStringArrayDriver);
  }

  export declare class Handle_XmlMDataStd_ExtStringArrayDriver_4 extends Handle_XmlMDataStd_ExtStringArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_ExtStringArrayDriver);
  }

export declare class Handle_XmlMDataStd_ExtStringListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_ExtStringListDriver): void;
  get(): XmlMDataStd_ExtStringListDriver;
}

  export declare class Handle_XmlMDataStd_ExtStringListDriver_1 extends Handle_XmlMDataStd_ExtStringListDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_ExtStringListDriver_2 extends Handle_XmlMDataStd_ExtStringListDriver {
    constructor(thePtr: XmlMDataStd_ExtStringListDriver);
  }

  export declare class Handle_XmlMDataStd_ExtStringListDriver_3 extends Handle_XmlMDataStd_ExtStringListDriver {
    constructor(theHandle: Handle_XmlMDataStd_ExtStringListDriver);
  }

  export declare class Handle_XmlMDataStd_ExtStringListDriver_4 extends Handle_XmlMDataStd_ExtStringListDriver {
    constructor(theHandle: Handle_XmlMDataStd_ExtStringListDriver);
  }

export declare class Handle_XmlMDataStd_GenericEmptyDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_GenericEmptyDriver): void;
  get(): XmlMDataStd_GenericEmptyDriver;
}

  export declare class Handle_XmlMDataStd_GenericEmptyDriver_1 extends Handle_XmlMDataStd_GenericEmptyDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_GenericEmptyDriver_2 extends Handle_XmlMDataStd_GenericEmptyDriver {
    constructor(thePtr: XmlMDataStd_GenericEmptyDriver);
  }

  export declare class Handle_XmlMDataStd_GenericEmptyDriver_3 extends Handle_XmlMDataStd_GenericEmptyDriver {
    constructor(theHandle: Handle_XmlMDataStd_GenericEmptyDriver);
  }

  export declare class Handle_XmlMDataStd_GenericEmptyDriver_4 extends Handle_XmlMDataStd_GenericEmptyDriver {
    constructor(theHandle: Handle_XmlMDataStd_GenericEmptyDriver);
  }

export declare class Handle_XmlMDataStd_GenericExtStringDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_GenericExtStringDriver): void;
  get(): XmlMDataStd_GenericExtStringDriver;
}

  export declare class Handle_XmlMDataStd_GenericExtStringDriver_1 extends Handle_XmlMDataStd_GenericExtStringDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_GenericExtStringDriver_2 extends Handle_XmlMDataStd_GenericExtStringDriver {
    constructor(thePtr: XmlMDataStd_GenericExtStringDriver);
  }

  export declare class Handle_XmlMDataStd_GenericExtStringDriver_3 extends Handle_XmlMDataStd_GenericExtStringDriver {
    constructor(theHandle: Handle_XmlMDataStd_GenericExtStringDriver);
  }

  export declare class Handle_XmlMDataStd_GenericExtStringDriver_4 extends Handle_XmlMDataStd_GenericExtStringDriver {
    constructor(theHandle: Handle_XmlMDataStd_GenericExtStringDriver);
  }

export declare class Handle_XmlMDataStd_IntPackedMapDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_IntPackedMapDriver): void;
  get(): XmlMDataStd_IntPackedMapDriver;
}

  export declare class Handle_XmlMDataStd_IntPackedMapDriver_1 extends Handle_XmlMDataStd_IntPackedMapDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_IntPackedMapDriver_2 extends Handle_XmlMDataStd_IntPackedMapDriver {
    constructor(thePtr: XmlMDataStd_IntPackedMapDriver);
  }

  export declare class Handle_XmlMDataStd_IntPackedMapDriver_3 extends Handle_XmlMDataStd_IntPackedMapDriver {
    constructor(theHandle: Handle_XmlMDataStd_IntPackedMapDriver);
  }

  export declare class Handle_XmlMDataStd_IntPackedMapDriver_4 extends Handle_XmlMDataStd_IntPackedMapDriver {
    constructor(theHandle: Handle_XmlMDataStd_IntPackedMapDriver);
  }

export declare class Handle_XmlMDataStd_IntegerArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_IntegerArrayDriver): void;
  get(): XmlMDataStd_IntegerArrayDriver;
}

  export declare class Handle_XmlMDataStd_IntegerArrayDriver_1 extends Handle_XmlMDataStd_IntegerArrayDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_IntegerArrayDriver_2 extends Handle_XmlMDataStd_IntegerArrayDriver {
    constructor(thePtr: XmlMDataStd_IntegerArrayDriver);
  }

  export declare class Handle_XmlMDataStd_IntegerArrayDriver_3 extends Handle_XmlMDataStd_IntegerArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_IntegerArrayDriver);
  }

  export declare class Handle_XmlMDataStd_IntegerArrayDriver_4 extends Handle_XmlMDataStd_IntegerArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_IntegerArrayDriver);
  }

export declare class Handle_XmlMDataStd_IntegerDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_IntegerDriver): void;
  get(): XmlMDataStd_IntegerDriver;
}

  export declare class Handle_XmlMDataStd_IntegerDriver_1 extends Handle_XmlMDataStd_IntegerDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_IntegerDriver_2 extends Handle_XmlMDataStd_IntegerDriver {
    constructor(thePtr: XmlMDataStd_IntegerDriver);
  }

  export declare class Handle_XmlMDataStd_IntegerDriver_3 extends Handle_XmlMDataStd_IntegerDriver {
    constructor(theHandle: Handle_XmlMDataStd_IntegerDriver);
  }

  export declare class Handle_XmlMDataStd_IntegerDriver_4 extends Handle_XmlMDataStd_IntegerDriver {
    constructor(theHandle: Handle_XmlMDataStd_IntegerDriver);
  }

export declare class Handle_XmlMDataStd_IntegerListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_IntegerListDriver): void;
  get(): XmlMDataStd_IntegerListDriver;
}

  export declare class Handle_XmlMDataStd_IntegerListDriver_1 extends Handle_XmlMDataStd_IntegerListDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_IntegerListDriver_2 extends Handle_XmlMDataStd_IntegerListDriver {
    constructor(thePtr: XmlMDataStd_IntegerListDriver);
  }

  export declare class Handle_XmlMDataStd_IntegerListDriver_3 extends Handle_XmlMDataStd_IntegerListDriver {
    constructor(theHandle: Handle_XmlMDataStd_IntegerListDriver);
  }

  export declare class Handle_XmlMDataStd_IntegerListDriver_4 extends Handle_XmlMDataStd_IntegerListDriver {
    constructor(theHandle: Handle_XmlMDataStd_IntegerListDriver);
  }

export declare class Handle_XmlMDataStd_NamedDataDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_NamedDataDriver): void;
  get(): XmlMDataStd_NamedDataDriver;
}

  export declare class Handle_XmlMDataStd_NamedDataDriver_1 extends Handle_XmlMDataStd_NamedDataDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_NamedDataDriver_2 extends Handle_XmlMDataStd_NamedDataDriver {
    constructor(thePtr: XmlMDataStd_NamedDataDriver);
  }

  export declare class Handle_XmlMDataStd_NamedDataDriver_3 extends Handle_XmlMDataStd_NamedDataDriver {
    constructor(theHandle: Handle_XmlMDataStd_NamedDataDriver);
  }

  export declare class Handle_XmlMDataStd_NamedDataDriver_4 extends Handle_XmlMDataStd_NamedDataDriver {
    constructor(theHandle: Handle_XmlMDataStd_NamedDataDriver);
  }

export declare class Handle_XmlMDataStd_RealArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_RealArrayDriver): void;
  get(): XmlMDataStd_RealArrayDriver;
}

  export declare class Handle_XmlMDataStd_RealArrayDriver_1 extends Handle_XmlMDataStd_RealArrayDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_RealArrayDriver_2 extends Handle_XmlMDataStd_RealArrayDriver {
    constructor(thePtr: XmlMDataStd_RealArrayDriver);
  }

  export declare class Handle_XmlMDataStd_RealArrayDriver_3 extends Handle_XmlMDataStd_RealArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_RealArrayDriver);
  }

  export declare class Handle_XmlMDataStd_RealArrayDriver_4 extends Handle_XmlMDataStd_RealArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_RealArrayDriver);
  }

export declare class Handle_XmlMDataStd_RealDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_RealDriver): void;
  get(): XmlMDataStd_RealDriver;
}

  export declare class Handle_XmlMDataStd_RealDriver_1 extends Handle_XmlMDataStd_RealDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_RealDriver_2 extends Handle_XmlMDataStd_RealDriver {
    constructor(thePtr: XmlMDataStd_RealDriver);
  }

  export declare class Handle_XmlMDataStd_RealDriver_3 extends Handle_XmlMDataStd_RealDriver {
    constructor(theHandle: Handle_XmlMDataStd_RealDriver);
  }

  export declare class Handle_XmlMDataStd_RealDriver_4 extends Handle_XmlMDataStd_RealDriver {
    constructor(theHandle: Handle_XmlMDataStd_RealDriver);
  }

export declare class Handle_XmlMDataStd_RealListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_RealListDriver): void;
  get(): XmlMDataStd_RealListDriver;
}

  export declare class Handle_XmlMDataStd_RealListDriver_1 extends Handle_XmlMDataStd_RealListDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_RealListDriver_2 extends Handle_XmlMDataStd_RealListDriver {
    constructor(thePtr: XmlMDataStd_RealListDriver);
  }

  export declare class Handle_XmlMDataStd_RealListDriver_3 extends Handle_XmlMDataStd_RealListDriver {
    constructor(theHandle: Handle_XmlMDataStd_RealListDriver);
  }

  export declare class Handle_XmlMDataStd_RealListDriver_4 extends Handle_XmlMDataStd_RealListDriver {
    constructor(theHandle: Handle_XmlMDataStd_RealListDriver);
  }

export declare class Handle_XmlMDataStd_ReferenceArrayDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_ReferenceArrayDriver): void;
  get(): XmlMDataStd_ReferenceArrayDriver;
}

  export declare class Handle_XmlMDataStd_ReferenceArrayDriver_1 extends Handle_XmlMDataStd_ReferenceArrayDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_ReferenceArrayDriver_2 extends Handle_XmlMDataStd_ReferenceArrayDriver {
    constructor(thePtr: XmlMDataStd_ReferenceArrayDriver);
  }

  export declare class Handle_XmlMDataStd_ReferenceArrayDriver_3 extends Handle_XmlMDataStd_ReferenceArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_ReferenceArrayDriver);
  }

  export declare class Handle_XmlMDataStd_ReferenceArrayDriver_4 extends Handle_XmlMDataStd_ReferenceArrayDriver {
    constructor(theHandle: Handle_XmlMDataStd_ReferenceArrayDriver);
  }

export declare class Handle_XmlMDataStd_ReferenceListDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_ReferenceListDriver): void;
  get(): XmlMDataStd_ReferenceListDriver;
}

  export declare class Handle_XmlMDataStd_ReferenceListDriver_1 extends Handle_XmlMDataStd_ReferenceListDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_ReferenceListDriver_2 extends Handle_XmlMDataStd_ReferenceListDriver {
    constructor(thePtr: XmlMDataStd_ReferenceListDriver);
  }

  export declare class Handle_XmlMDataStd_ReferenceListDriver_3 extends Handle_XmlMDataStd_ReferenceListDriver {
    constructor(theHandle: Handle_XmlMDataStd_ReferenceListDriver);
  }

  export declare class Handle_XmlMDataStd_ReferenceListDriver_4 extends Handle_XmlMDataStd_ReferenceListDriver {
    constructor(theHandle: Handle_XmlMDataStd_ReferenceListDriver);
  }

export declare class Handle_XmlMDataStd_TreeNodeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_TreeNodeDriver): void;
  get(): XmlMDataStd_TreeNodeDriver;
}

  export declare class Handle_XmlMDataStd_TreeNodeDriver_1 extends Handle_XmlMDataStd_TreeNodeDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_TreeNodeDriver_2 extends Handle_XmlMDataStd_TreeNodeDriver {
    constructor(thePtr: XmlMDataStd_TreeNodeDriver);
  }

  export declare class Handle_XmlMDataStd_TreeNodeDriver_3 extends Handle_XmlMDataStd_TreeNodeDriver {
    constructor(theHandle: Handle_XmlMDataStd_TreeNodeDriver);
  }

  export declare class Handle_XmlMDataStd_TreeNodeDriver_4 extends Handle_XmlMDataStd_TreeNodeDriver {
    constructor(theHandle: Handle_XmlMDataStd_TreeNodeDriver);
  }

export declare class Handle_XmlMDataStd_UAttributeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_UAttributeDriver): void;
  get(): XmlMDataStd_UAttributeDriver;
}

  export declare class Handle_XmlMDataStd_UAttributeDriver_1 extends Handle_XmlMDataStd_UAttributeDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_UAttributeDriver_2 extends Handle_XmlMDataStd_UAttributeDriver {
    constructor(thePtr: XmlMDataStd_UAttributeDriver);
  }

  export declare class Handle_XmlMDataStd_UAttributeDriver_3 extends Handle_XmlMDataStd_UAttributeDriver {
    constructor(theHandle: Handle_XmlMDataStd_UAttributeDriver);
  }

  export declare class Handle_XmlMDataStd_UAttributeDriver_4 extends Handle_XmlMDataStd_UAttributeDriver {
    constructor(theHandle: Handle_XmlMDataStd_UAttributeDriver);
  }

export declare class Handle_XmlMDataStd_VariableDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDataStd_VariableDriver): void;
  get(): XmlMDataStd_VariableDriver;
}

  export declare class Handle_XmlMDataStd_VariableDriver_1 extends Handle_XmlMDataStd_VariableDriver {
    constructor();
  }

  export declare class Handle_XmlMDataStd_VariableDriver_2 extends Handle_XmlMDataStd_VariableDriver {
    constructor(thePtr: XmlMDataStd_VariableDriver);
  }

  export declare class Handle_XmlMDataStd_VariableDriver_3 extends Handle_XmlMDataStd_VariableDriver {
    constructor(theHandle: Handle_XmlMDataStd_VariableDriver);
  }

  export declare class Handle_XmlMDataStd_VariableDriver_4 extends Handle_XmlMDataStd_VariableDriver {
    constructor(theHandle: Handle_XmlMDataStd_VariableDriver);
  }

export declare class Handle_XmlMDocStd_XLinkDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMDocStd_XLinkDriver): void;
  get(): XmlMDocStd_XLinkDriver;
}

  export declare class Handle_XmlMDocStd_XLinkDriver_1 extends Handle_XmlMDocStd_XLinkDriver {
    constructor();
  }

  export declare class Handle_XmlMDocStd_XLinkDriver_2 extends Handle_XmlMDocStd_XLinkDriver {
    constructor(thePtr: XmlMDocStd_XLinkDriver);
  }

  export declare class Handle_XmlMDocStd_XLinkDriver_3 extends Handle_XmlMDocStd_XLinkDriver {
    constructor(theHandle: Handle_XmlMDocStd_XLinkDriver);
  }

  export declare class Handle_XmlMDocStd_XLinkDriver_4 extends Handle_XmlMDocStd_XLinkDriver {
    constructor(theHandle: Handle_XmlMDocStd_XLinkDriver);
  }

export declare class Handle_XmlMFunction_FunctionDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMFunction_FunctionDriver): void;
  get(): XmlMFunction_FunctionDriver;
}

  export declare class Handle_XmlMFunction_FunctionDriver_1 extends Handle_XmlMFunction_FunctionDriver {
    constructor();
  }

  export declare class Handle_XmlMFunction_FunctionDriver_2 extends Handle_XmlMFunction_FunctionDriver {
    constructor(thePtr: XmlMFunction_FunctionDriver);
  }

  export declare class Handle_XmlMFunction_FunctionDriver_3 extends Handle_XmlMFunction_FunctionDriver {
    constructor(theHandle: Handle_XmlMFunction_FunctionDriver);
  }

  export declare class Handle_XmlMFunction_FunctionDriver_4 extends Handle_XmlMFunction_FunctionDriver {
    constructor(theHandle: Handle_XmlMFunction_FunctionDriver);
  }

export declare class Handle_XmlMFunction_GraphNodeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMFunction_GraphNodeDriver): void;
  get(): XmlMFunction_GraphNodeDriver;
}

  export declare class Handle_XmlMFunction_GraphNodeDriver_1 extends Handle_XmlMFunction_GraphNodeDriver {
    constructor();
  }

  export declare class Handle_XmlMFunction_GraphNodeDriver_2 extends Handle_XmlMFunction_GraphNodeDriver {
    constructor(thePtr: XmlMFunction_GraphNodeDriver);
  }

  export declare class Handle_XmlMFunction_GraphNodeDriver_3 extends Handle_XmlMFunction_GraphNodeDriver {
    constructor(theHandle: Handle_XmlMFunction_GraphNodeDriver);
  }

  export declare class Handle_XmlMFunction_GraphNodeDriver_4 extends Handle_XmlMFunction_GraphNodeDriver {
    constructor(theHandle: Handle_XmlMFunction_GraphNodeDriver);
  }

export declare class Handle_XmlMFunction_ScopeDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XmlMFunction_ScopeDriver): void;
  get(): XmlMFunction_ScopeDriver;
}

  export declare class Handle_XmlMFunction_ScopeDriver_1 extends Handle_XmlMFunction_ScopeDriver {
    constructor();
  }

  export declare class Handle_XmlMFunction_ScopeDriver_2 extends Handle_XmlMFunction_ScopeDriver {
    constructor(thePtr: XmlMFunction_ScopeDriver);
  }

  export declare class Handle_XmlMFunction_ScopeDriver_3 extends Handle_XmlMFunction_ScopeDriver {
    constructor(theHandle: Handle_XmlMFunction_ScopeDriver);
  }

  export declare class Handle_XmlMFunction_ScopeDriver_4 extends Handle_XmlMFunction_ScopeDriver {
    constructor(theHandle: Handle_XmlMFunction_ScopeDriver);
  }

export declare type TKXmlLLib = {
  XmlLDrivers_DocumentRetrievalDriver: typeof XmlLDrivers_DocumentRetrievalDriver;
  XmlLDrivers_NamespaceDef_1: typeof XmlLDrivers_NamespaceDef_1;
  XmlLDrivers_NamespaceDef_2: typeof XmlLDrivers_NamespaceDef_2;
  XmlLDrivers_DocumentStorageDriver: typeof XmlLDrivers_DocumentStorageDriver;
  XmlMDF_ADriverTable: typeof XmlMDF_ADriverTable;
  XmlMDF_DerivedDriver: typeof XmlMDF_DerivedDriver;
  XmlMDF_ReferenceDriver: typeof XmlMDF_ReferenceDriver;
  XmlMDF_TagSourceDriver: typeof XmlMDF_TagSourceDriver;
  XmlMDataStd_AsciiStringDriver: typeof XmlMDataStd_AsciiStringDriver;
  XmlMDataStd_BooleanArrayDriver: typeof XmlMDataStd_BooleanArrayDriver;
  XmlMDataStd_BooleanListDriver: typeof XmlMDataStd_BooleanListDriver;
  XmlMDataStd_ByteArrayDriver: typeof XmlMDataStd_ByteArrayDriver;
  XmlMDataStd_ExpressionDriver: typeof XmlMDataStd_ExpressionDriver;
  XmlMDataStd_ExtStringArrayDriver: typeof XmlMDataStd_ExtStringArrayDriver;
  XmlMDataStd_ExtStringListDriver: typeof XmlMDataStd_ExtStringListDriver;
  XmlMDataStd_GenericEmptyDriver: typeof XmlMDataStd_GenericEmptyDriver;
  XmlMDataStd_GenericExtStringDriver: typeof XmlMDataStd_GenericExtStringDriver;
  XmlMDataStd_IntPackedMapDriver: typeof XmlMDataStd_IntPackedMapDriver;
  XmlMDataStd_IntegerArrayDriver: typeof XmlMDataStd_IntegerArrayDriver;
  XmlMDataStd_IntegerDriver: typeof XmlMDataStd_IntegerDriver;
  XmlMDataStd_IntegerListDriver: typeof XmlMDataStd_IntegerListDriver;
  XmlMDataStd_NamedDataDriver: typeof XmlMDataStd_NamedDataDriver;
  XmlMDataStd_RealArrayDriver: typeof XmlMDataStd_RealArrayDriver;
  XmlMDataStd_RealDriver: typeof XmlMDataStd_RealDriver;
  XmlMDataStd_RealListDriver: typeof XmlMDataStd_RealListDriver;
  XmlMDataStd_ReferenceArrayDriver: typeof XmlMDataStd_ReferenceArrayDriver;
  XmlMDataStd_ReferenceListDriver: typeof XmlMDataStd_ReferenceListDriver;
  XmlMDataStd_TreeNodeDriver: typeof XmlMDataStd_TreeNodeDriver;
  XmlMDataStd_UAttributeDriver: typeof XmlMDataStd_UAttributeDriver;
  XmlMDataStd_VariableDriver: typeof XmlMDataStd_VariableDriver;
  XmlMDocStd_XLinkDriver: typeof XmlMDocStd_XLinkDriver;
  XmlMFunction_FunctionDriver: typeof XmlMFunction_FunctionDriver;
  XmlMFunction_GraphNodeDriver: typeof XmlMFunction_GraphNodeDriver;
  XmlMFunction_ScopeDriver: typeof XmlMFunction_ScopeDriver;
  XmlObjMgt_Array1_1: typeof XmlObjMgt_Array1_1;
  XmlObjMgt_Array1_2: typeof XmlObjMgt_Array1_2;
  XmlObjMgt_Persistent_1: typeof XmlObjMgt_Persistent_1;
  XmlObjMgt_Persistent_2: typeof XmlObjMgt_Persistent_2;
  XmlObjMgt_Persistent_3: typeof XmlObjMgt_Persistent_3;
  Handle_XmlLDrivers_DocumentRetrievalDriver_1: typeof Handle_XmlLDrivers_DocumentRetrievalDriver_1;
  Handle_XmlLDrivers_DocumentRetrievalDriver_2: typeof Handle_XmlLDrivers_DocumentRetrievalDriver_2;
  Handle_XmlLDrivers_DocumentRetrievalDriver_3: typeof Handle_XmlLDrivers_DocumentRetrievalDriver_3;
  Handle_XmlLDrivers_DocumentRetrievalDriver_4: typeof Handle_XmlLDrivers_DocumentRetrievalDriver_4;
  XmlLDrivers_SequenceOfNamespaceDef_1: typeof XmlLDrivers_SequenceOfNamespaceDef_1;
  XmlLDrivers_SequenceOfNamespaceDef_2: typeof XmlLDrivers_SequenceOfNamespaceDef_2;
  XmlLDrivers_SequenceOfNamespaceDef_3: typeof XmlLDrivers_SequenceOfNamespaceDef_3;
  Handle_XmlLDrivers_DocumentStorageDriver_1: typeof Handle_XmlLDrivers_DocumentStorageDriver_1;
  Handle_XmlLDrivers_DocumentStorageDriver_2: typeof Handle_XmlLDrivers_DocumentStorageDriver_2;
  Handle_XmlLDrivers_DocumentStorageDriver_3: typeof Handle_XmlLDrivers_DocumentStorageDriver_3;
  Handle_XmlLDrivers_DocumentStorageDriver_4: typeof Handle_XmlLDrivers_DocumentStorageDriver_4;
  Handle_XmlMDF_ADriver_1: typeof Handle_XmlMDF_ADriver_1;
  Handle_XmlMDF_ADriver_2: typeof Handle_XmlMDF_ADriver_2;
  Handle_XmlMDF_ADriver_3: typeof Handle_XmlMDF_ADriver_3;
  Handle_XmlMDF_ADriver_4: typeof Handle_XmlMDF_ADriver_4;
  Handle_XmlMDF_ADriverTable_1: typeof Handle_XmlMDF_ADriverTable_1;
  Handle_XmlMDF_ADriverTable_2: typeof Handle_XmlMDF_ADriverTable_2;
  Handle_XmlMDF_ADriverTable_3: typeof Handle_XmlMDF_ADriverTable_3;
  Handle_XmlMDF_ADriverTable_4: typeof Handle_XmlMDF_ADriverTable_4;
  Handle_XmlMDF_ReferenceDriver_1: typeof Handle_XmlMDF_ReferenceDriver_1;
  Handle_XmlMDF_ReferenceDriver_2: typeof Handle_XmlMDF_ReferenceDriver_2;
  Handle_XmlMDF_ReferenceDriver_3: typeof Handle_XmlMDF_ReferenceDriver_3;
  Handle_XmlMDF_ReferenceDriver_4: typeof Handle_XmlMDF_ReferenceDriver_4;
  Handle_XmlMDF_TagSourceDriver_1: typeof Handle_XmlMDF_TagSourceDriver_1;
  Handle_XmlMDF_TagSourceDriver_2: typeof Handle_XmlMDF_TagSourceDriver_2;
  Handle_XmlMDF_TagSourceDriver_3: typeof Handle_XmlMDF_TagSourceDriver_3;
  Handle_XmlMDF_TagSourceDriver_4: typeof Handle_XmlMDF_TagSourceDriver_4;
  Handle_XmlMDataStd_AsciiStringDriver_1: typeof Handle_XmlMDataStd_AsciiStringDriver_1;
  Handle_XmlMDataStd_AsciiStringDriver_2: typeof Handle_XmlMDataStd_AsciiStringDriver_2;
  Handle_XmlMDataStd_AsciiStringDriver_3: typeof Handle_XmlMDataStd_AsciiStringDriver_3;
  Handle_XmlMDataStd_AsciiStringDriver_4: typeof Handle_XmlMDataStd_AsciiStringDriver_4;
  Handle_XmlMDataStd_BooleanArrayDriver_1: typeof Handle_XmlMDataStd_BooleanArrayDriver_1;
  Handle_XmlMDataStd_BooleanArrayDriver_2: typeof Handle_XmlMDataStd_BooleanArrayDriver_2;
  Handle_XmlMDataStd_BooleanArrayDriver_3: typeof Handle_XmlMDataStd_BooleanArrayDriver_3;
  Handle_XmlMDataStd_BooleanArrayDriver_4: typeof Handle_XmlMDataStd_BooleanArrayDriver_4;
  Handle_XmlMDataStd_BooleanListDriver_1: typeof Handle_XmlMDataStd_BooleanListDriver_1;
  Handle_XmlMDataStd_BooleanListDriver_2: typeof Handle_XmlMDataStd_BooleanListDriver_2;
  Handle_XmlMDataStd_BooleanListDriver_3: typeof Handle_XmlMDataStd_BooleanListDriver_3;
  Handle_XmlMDataStd_BooleanListDriver_4: typeof Handle_XmlMDataStd_BooleanListDriver_4;
  Handle_XmlMDataStd_ByteArrayDriver_1: typeof Handle_XmlMDataStd_ByteArrayDriver_1;
  Handle_XmlMDataStd_ByteArrayDriver_2: typeof Handle_XmlMDataStd_ByteArrayDriver_2;
  Handle_XmlMDataStd_ByteArrayDriver_3: typeof Handle_XmlMDataStd_ByteArrayDriver_3;
  Handle_XmlMDataStd_ByteArrayDriver_4: typeof Handle_XmlMDataStd_ByteArrayDriver_4;
  Handle_XmlMDataStd_ExpressionDriver_1: typeof Handle_XmlMDataStd_ExpressionDriver_1;
  Handle_XmlMDataStd_ExpressionDriver_2: typeof Handle_XmlMDataStd_ExpressionDriver_2;
  Handle_XmlMDataStd_ExpressionDriver_3: typeof Handle_XmlMDataStd_ExpressionDriver_3;
  Handle_XmlMDataStd_ExpressionDriver_4: typeof Handle_XmlMDataStd_ExpressionDriver_4;
  Handle_XmlMDataStd_ExtStringArrayDriver_1: typeof Handle_XmlMDataStd_ExtStringArrayDriver_1;
  Handle_XmlMDataStd_ExtStringArrayDriver_2: typeof Handle_XmlMDataStd_ExtStringArrayDriver_2;
  Handle_XmlMDataStd_ExtStringArrayDriver_3: typeof Handle_XmlMDataStd_ExtStringArrayDriver_3;
  Handle_XmlMDataStd_ExtStringArrayDriver_4: typeof Handle_XmlMDataStd_ExtStringArrayDriver_4;
  Handle_XmlMDataStd_ExtStringListDriver_1: typeof Handle_XmlMDataStd_ExtStringListDriver_1;
  Handle_XmlMDataStd_ExtStringListDriver_2: typeof Handle_XmlMDataStd_ExtStringListDriver_2;
  Handle_XmlMDataStd_ExtStringListDriver_3: typeof Handle_XmlMDataStd_ExtStringListDriver_3;
  Handle_XmlMDataStd_ExtStringListDriver_4: typeof Handle_XmlMDataStd_ExtStringListDriver_4;
  Handle_XmlMDataStd_GenericEmptyDriver_1: typeof Handle_XmlMDataStd_GenericEmptyDriver_1;
  Handle_XmlMDataStd_GenericEmptyDriver_2: typeof Handle_XmlMDataStd_GenericEmptyDriver_2;
  Handle_XmlMDataStd_GenericEmptyDriver_3: typeof Handle_XmlMDataStd_GenericEmptyDriver_3;
  Handle_XmlMDataStd_GenericEmptyDriver_4: typeof Handle_XmlMDataStd_GenericEmptyDriver_4;
  Handle_XmlMDataStd_GenericExtStringDriver_1: typeof Handle_XmlMDataStd_GenericExtStringDriver_1;
  Handle_XmlMDataStd_GenericExtStringDriver_2: typeof Handle_XmlMDataStd_GenericExtStringDriver_2;
  Handle_XmlMDataStd_GenericExtStringDriver_3: typeof Handle_XmlMDataStd_GenericExtStringDriver_3;
  Handle_XmlMDataStd_GenericExtStringDriver_4: typeof Handle_XmlMDataStd_GenericExtStringDriver_4;
  Handle_XmlMDataStd_IntPackedMapDriver_1: typeof Handle_XmlMDataStd_IntPackedMapDriver_1;
  Handle_XmlMDataStd_IntPackedMapDriver_2: typeof Handle_XmlMDataStd_IntPackedMapDriver_2;
  Handle_XmlMDataStd_IntPackedMapDriver_3: typeof Handle_XmlMDataStd_IntPackedMapDriver_3;
  Handle_XmlMDataStd_IntPackedMapDriver_4: typeof Handle_XmlMDataStd_IntPackedMapDriver_4;
  Handle_XmlMDataStd_IntegerArrayDriver_1: typeof Handle_XmlMDataStd_IntegerArrayDriver_1;
  Handle_XmlMDataStd_IntegerArrayDriver_2: typeof Handle_XmlMDataStd_IntegerArrayDriver_2;
  Handle_XmlMDataStd_IntegerArrayDriver_3: typeof Handle_XmlMDataStd_IntegerArrayDriver_3;
  Handle_XmlMDataStd_IntegerArrayDriver_4: typeof Handle_XmlMDataStd_IntegerArrayDriver_4;
  Handle_XmlMDataStd_IntegerDriver_1: typeof Handle_XmlMDataStd_IntegerDriver_1;
  Handle_XmlMDataStd_IntegerDriver_2: typeof Handle_XmlMDataStd_IntegerDriver_2;
  Handle_XmlMDataStd_IntegerDriver_3: typeof Handle_XmlMDataStd_IntegerDriver_3;
  Handle_XmlMDataStd_IntegerDriver_4: typeof Handle_XmlMDataStd_IntegerDriver_4;
  Handle_XmlMDataStd_IntegerListDriver_1: typeof Handle_XmlMDataStd_IntegerListDriver_1;
  Handle_XmlMDataStd_IntegerListDriver_2: typeof Handle_XmlMDataStd_IntegerListDriver_2;
  Handle_XmlMDataStd_IntegerListDriver_3: typeof Handle_XmlMDataStd_IntegerListDriver_3;
  Handle_XmlMDataStd_IntegerListDriver_4: typeof Handle_XmlMDataStd_IntegerListDriver_4;
  Handle_XmlMDataStd_NamedDataDriver_1: typeof Handle_XmlMDataStd_NamedDataDriver_1;
  Handle_XmlMDataStd_NamedDataDriver_2: typeof Handle_XmlMDataStd_NamedDataDriver_2;
  Handle_XmlMDataStd_NamedDataDriver_3: typeof Handle_XmlMDataStd_NamedDataDriver_3;
  Handle_XmlMDataStd_NamedDataDriver_4: typeof Handle_XmlMDataStd_NamedDataDriver_4;
  Handle_XmlMDataStd_RealArrayDriver_1: typeof Handle_XmlMDataStd_RealArrayDriver_1;
  Handle_XmlMDataStd_RealArrayDriver_2: typeof Handle_XmlMDataStd_RealArrayDriver_2;
  Handle_XmlMDataStd_RealArrayDriver_3: typeof Handle_XmlMDataStd_RealArrayDriver_3;
  Handle_XmlMDataStd_RealArrayDriver_4: typeof Handle_XmlMDataStd_RealArrayDriver_4;
  Handle_XmlMDataStd_RealDriver_1: typeof Handle_XmlMDataStd_RealDriver_1;
  Handle_XmlMDataStd_RealDriver_2: typeof Handle_XmlMDataStd_RealDriver_2;
  Handle_XmlMDataStd_RealDriver_3: typeof Handle_XmlMDataStd_RealDriver_3;
  Handle_XmlMDataStd_RealDriver_4: typeof Handle_XmlMDataStd_RealDriver_4;
  Handle_XmlMDataStd_RealListDriver_1: typeof Handle_XmlMDataStd_RealListDriver_1;
  Handle_XmlMDataStd_RealListDriver_2: typeof Handle_XmlMDataStd_RealListDriver_2;
  Handle_XmlMDataStd_RealListDriver_3: typeof Handle_XmlMDataStd_RealListDriver_3;
  Handle_XmlMDataStd_RealListDriver_4: typeof Handle_XmlMDataStd_RealListDriver_4;
  Handle_XmlMDataStd_ReferenceArrayDriver_1: typeof Handle_XmlMDataStd_ReferenceArrayDriver_1;
  Handle_XmlMDataStd_ReferenceArrayDriver_2: typeof Handle_XmlMDataStd_ReferenceArrayDriver_2;
  Handle_XmlMDataStd_ReferenceArrayDriver_3: typeof Handle_XmlMDataStd_ReferenceArrayDriver_3;
  Handle_XmlMDataStd_ReferenceArrayDriver_4: typeof Handle_XmlMDataStd_ReferenceArrayDriver_4;
  Handle_XmlMDataStd_ReferenceListDriver_1: typeof Handle_XmlMDataStd_ReferenceListDriver_1;
  Handle_XmlMDataStd_ReferenceListDriver_2: typeof Handle_XmlMDataStd_ReferenceListDriver_2;
  Handle_XmlMDataStd_ReferenceListDriver_3: typeof Handle_XmlMDataStd_ReferenceListDriver_3;
  Handle_XmlMDataStd_ReferenceListDriver_4: typeof Handle_XmlMDataStd_ReferenceListDriver_4;
  Handle_XmlMDataStd_TreeNodeDriver_1: typeof Handle_XmlMDataStd_TreeNodeDriver_1;
  Handle_XmlMDataStd_TreeNodeDriver_2: typeof Handle_XmlMDataStd_TreeNodeDriver_2;
  Handle_XmlMDataStd_TreeNodeDriver_3: typeof Handle_XmlMDataStd_TreeNodeDriver_3;
  Handle_XmlMDataStd_TreeNodeDriver_4: typeof Handle_XmlMDataStd_TreeNodeDriver_4;
  Handle_XmlMDataStd_UAttributeDriver_1: typeof Handle_XmlMDataStd_UAttributeDriver_1;
  Handle_XmlMDataStd_UAttributeDriver_2: typeof Handle_XmlMDataStd_UAttributeDriver_2;
  Handle_XmlMDataStd_UAttributeDriver_3: typeof Handle_XmlMDataStd_UAttributeDriver_3;
  Handle_XmlMDataStd_UAttributeDriver_4: typeof Handle_XmlMDataStd_UAttributeDriver_4;
  Handle_XmlMDataStd_VariableDriver_1: typeof Handle_XmlMDataStd_VariableDriver_1;
  Handle_XmlMDataStd_VariableDriver_2: typeof Handle_XmlMDataStd_VariableDriver_2;
  Handle_XmlMDataStd_VariableDriver_3: typeof Handle_XmlMDataStd_VariableDriver_3;
  Handle_XmlMDataStd_VariableDriver_4: typeof Handle_XmlMDataStd_VariableDriver_4;
  Handle_XmlMDocStd_XLinkDriver_1: typeof Handle_XmlMDocStd_XLinkDriver_1;
  Handle_XmlMDocStd_XLinkDriver_2: typeof Handle_XmlMDocStd_XLinkDriver_2;
  Handle_XmlMDocStd_XLinkDriver_3: typeof Handle_XmlMDocStd_XLinkDriver_3;
  Handle_XmlMDocStd_XLinkDriver_4: typeof Handle_XmlMDocStd_XLinkDriver_4;
  Handle_XmlMFunction_FunctionDriver_1: typeof Handle_XmlMFunction_FunctionDriver_1;
  Handle_XmlMFunction_FunctionDriver_2: typeof Handle_XmlMFunction_FunctionDriver_2;
  Handle_XmlMFunction_FunctionDriver_3: typeof Handle_XmlMFunction_FunctionDriver_3;
  Handle_XmlMFunction_FunctionDriver_4: typeof Handle_XmlMFunction_FunctionDriver_4;
  Handle_XmlMFunction_GraphNodeDriver_1: typeof Handle_XmlMFunction_GraphNodeDriver_1;
  Handle_XmlMFunction_GraphNodeDriver_2: typeof Handle_XmlMFunction_GraphNodeDriver_2;
  Handle_XmlMFunction_GraphNodeDriver_3: typeof Handle_XmlMFunction_GraphNodeDriver_3;
  Handle_XmlMFunction_GraphNodeDriver_4: typeof Handle_XmlMFunction_GraphNodeDriver_4;
  Handle_XmlMFunction_ScopeDriver_1: typeof Handle_XmlMFunction_ScopeDriver_1;
  Handle_XmlMFunction_ScopeDriver_2: typeof Handle_XmlMFunction_ScopeDriver_2;
  Handle_XmlMFunction_ScopeDriver_3: typeof Handle_XmlMFunction_ScopeDriver_3;
  Handle_XmlMFunction_ScopeDriver_4: typeof Handle_XmlMFunction_ScopeDriver_4;
};
