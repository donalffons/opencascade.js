declare const libName = "./modules/TKLCAF.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class TDocStd_Application extends CDF_Application {
  constructor()
  IsDriverLoaded(): Standard_Boolean;
  Resources(): any;
  ResourcesName(): Standard_CString;
  DefineFormat(theFormat: TCollection_AsciiString, theDescription: TCollection_AsciiString, theExtension: TCollection_AsciiString, theReader: any, theWriter: any): void;
  ReadingFormats(theFormats: TColStd_SequenceOfAsciiString): void;
  WritingFormats(theFormats: TColStd_SequenceOfAsciiString): void;
  NbDocuments(): Standard_Integer;
  GetDocument(index: Standard_Integer, aDoc: any): void;
  NewDocument(format: TCollection_ExtendedString, aDoc: any): void;
  InitDocument(aDoc: any): void;
  Close(aDoc: any): void;
  IsInSession(path: TCollection_ExtendedString): Standard_Integer;
  Open_1(path: TCollection_ExtendedString, aDoc: any, theRange: Message_ProgressRange): PCDM_ReaderStatus;
  Open_2(theIStream: Standard_IStream, theDoc: any, theRange: Message_ProgressRange): PCDM_ReaderStatus;
  SaveAs_1(aDoc: any, path: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  SaveAs_2(theDoc: any, theOStream: Standard_OStream, theRange: Message_ProgressRange): PCDM_StoreStatus;
  Save_1(aDoc: any, theRange: Message_ProgressRange): PCDM_StoreStatus;
  SaveAs_3(aDoc: any, path: TCollection_ExtendedString, theStatusMessage: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  SaveAs_4(theDoc: any, theOStream: Standard_OStream, theStatusMessage: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  Save_2(aDoc: any, theStatusMessage: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  OnOpenTransaction(theDoc: any): void;
  OnCommitTransaction(theDoc: any): void;
  OnAbortTransaction(theDoc: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class AppStdL_Application extends TDocStd_Application {
  constructor();
  ResourcesName(): Standard_CString;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_Label {
  constructor()
  Nullify(): void;
  Data(): any;
  Tag(): Standard_Integer;
  Father(): TDF_Label;
  IsNull(): Standard_Boolean;
  Imported(aStatus: Standard_Boolean): void;
  IsImported(): Standard_Boolean;
  IsEqual(aLabel: TDF_Label): Standard_Boolean;
  IsDifferent(aLabel: TDF_Label): Standard_Boolean;
  IsRoot(): Standard_Boolean;
  IsAttribute(anID: Standard_GUID): Standard_Boolean;
  AddAttribute(anAttribute: any, append: Standard_Boolean): void;
  ForgetAttribute_1(anAttribute: any): void;
  ForgetAttribute_2(aguid: Standard_GUID): Standard_Boolean;
  ForgetAllAttributes(clearChildren: Standard_Boolean): void;
  ResumeAttribute(anAttribute: any): void;
  FindAttribute_1(anID: Standard_GUID, anAttribute: any): Standard_Boolean;
  FindAttribute_3(anID: Standard_GUID, aTransaction: Standard_Integer, anAttribute: any): Standard_Boolean;
  MayBeModified(): Standard_Boolean;
  AttributesModified(): Standard_Boolean;
  HasAttribute(): Standard_Boolean;
  NbAttributes(): Standard_Integer;
  Depth(): Standard_Integer;
  IsDescendant(aLabel: TDF_Label): Standard_Boolean;
  Root(): TDF_Label;
  HasChild(): Standard_Boolean;
  NbChildren(): Standard_Integer;
  FindChild(aTag: Standard_Integer, create: Standard_Boolean): TDF_Label;
  NewChild(): TDF_Label;
  Transaction(): Standard_Integer;
  HasLowerNode(otherLabel: TDF_Label): Standard_Boolean;
  HasGreaterNode(otherLabel: TDF_Label): Standard_Boolean;
  ExtendedDump(anOS: Standard_OStream, aFilter: TDF_IDFilter, aMap: TDF_AttributeIndexedMap): void;
  EntryDump(anOS: Standard_OStream): void;
}

export declare class TDF_Attribute extends Standard_Transient {
  ID(): Standard_GUID;
  SetID_1(a0: Standard_GUID): void;
  SetID_2(): void;
  Label(): TDF_Label;
  Transaction(): Standard_Integer;
  UntilTransaction(): Standard_Integer;
  IsValid(): Standard_Boolean;
  IsNew(): Standard_Boolean;
  IsForgotten(): Standard_Boolean;
  IsAttribute(anID: Standard_GUID): Standard_Boolean;
  FindAttribute_1(anID: Standard_GUID, anAttribute: any): Standard_Boolean;
  AddAttribute(other: any): void;
  ForgetAttribute(aguid: Standard_GUID): Standard_Boolean;
  ForgetAllAttributes(clearChildren: Standard_Boolean): void;
  AfterAddition(): void;
  BeforeRemoval(): void;
  BeforeForget(): void;
  AfterResume(): void;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  BeforeUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  AfterUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  BeforeCommitTransaction(): void;
  Backup_1(): void;
  IsBackuped(): Standard_Boolean;
  BackupCopy(): any;
  Restore(anAttribute: any): void;
  DeltaOnAddition(): any;
  DeltaOnForget(): any;
  DeltaOnResume(): any;
  DeltaOnModification_1(anOldAttribute: any): any;
  DeltaOnModification_2(aDelta: any): void;
  DeltaOnRemoval(): any;
  NewEmpty(): any;
  Paste(intoAttribute: any, aRelocationTable: any): void;
  References(aDataSet: any): void;
  ExtendedDump(anOS: Standard_OStream, aFilter: TDF_IDFilter, aMap: TDF_AttributeIndexedMap): void;
  Forget(aTransaction: Standard_Integer): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_TagSource extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  NewChild_1(L: TDF_Label): TDF_Label;
  NewTag(): Standard_Integer;
  NewChild_2(): TDF_Label;
  Get(): Standard_Integer;
  Set_2(T: Standard_Integer): void;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_Data extends Standard_Transient {
  constructor()
  Root(): TDF_Label;
  Transaction(): Standard_Integer;
  Time(): Standard_Integer;
  IsApplicable(aDelta: any): Standard_Boolean;
  Undo(aDelta: any, withDelta: Standard_Boolean): any;
  Destroy(): void;
  NotUndoMode(): Standard_Boolean;
  AllowModification(isAllowed: Standard_Boolean): void;
  IsModificationAllowed(): Standard_Boolean;
  LabelNodeAllocator(): TDF_HAllocator;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_Transaction {
  Initialize(aDF: any): void;
  Open(): Standard_Integer;
  Commit(withDelta: Standard_Boolean): any;
  Abort(): void;
  Data(): any;
  Transaction(): Standard_Integer;
  Name(): TCollection_AsciiString;
  IsOpen(): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class TDF_Transaction_1 extends TDF_Transaction {
    constructor(aName: TCollection_AsciiString);
  }

  export declare class TDF_Transaction_2 extends TDF_Transaction {
    constructor(aDF: any, aName: TCollection_AsciiString);
  }

export declare class TFunction_Driver extends Standard_Transient {
  Init(L: TDF_Label): void;
  Label(): TDF_Label;
  Validate(log: any): void;
  MustExecute(log: any): Standard_Boolean;
  Execute(log: any): Standard_Integer;
  Arguments(args: TDF_LabelList): void;
  Results(res: TDF_LabelList): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_ChildIterator {
  Initialize(aLabel: TDF_Label, allLevels: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  NextBrother(): void;
  Value(): TDF_Label;
}

  export declare class TDF_ChildIterator_1 extends TDF_ChildIterator {
    constructor();
  }

  export declare class TDF_ChildIterator_2 extends TDF_ChildIterator {
    constructor(aLabel: TDF_Label, allLevels: Standard_Boolean);
  }

export declare class TDF_LabelMapHasher {
  constructor();
  HashCode(theLabel: TDF_Label, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(aLab1: TDF_Label, aLab2: TDF_Label): Standard_Boolean;
}

export declare class TDataStd_IntegerArray extends TDF_Attribute {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, lower: Standard_Integer, upper: Standard_Integer, isDelta: Standard_Boolean): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID, lower: Standard_Integer, upper: Standard_Integer, isDelta: Standard_Boolean): any;
  Init(lower: Standard_Integer, upper: Standard_Integer): void;
  SetValue(Index: Standard_Integer, Value: Standard_Integer): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  Value(Index: Standard_Integer): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  Length(): Standard_Integer;
  ChangeArray(newArray: any, isCheckItems: Standard_Boolean): void;
  Array(): any;
  GetDelta(): Standard_Boolean;
  SetDelta(isDelta: Standard_Boolean): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DeltaOnModification(anOldAttribute: any): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class TDataStd_RealArray extends TDF_Attribute {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, lower: Standard_Integer, upper: Standard_Integer, isDelta: Standard_Boolean): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID, lower: Standard_Integer, upper: Standard_Integer, isDelta: Standard_Boolean): any;
  Init(lower: Standard_Integer, upper: Standard_Integer): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  SetValue(Index: Standard_Integer, Value: Standard_Real): void;
  Value(Index: Standard_Integer): Standard_Real;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  Length(): Standard_Integer;
  ChangeArray(newArray: any, isCheckItems: Standard_Boolean): void;
  Array(): any;
  GetDelta(): Standard_Boolean;
  SetDelta(isDelta: Standard_Boolean): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DeltaOnModification(anOldAttribute: any): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class TDataStd_ByteArray extends TDF_Attribute {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, lower: Standard_Integer, upper: Standard_Integer, isDelta: Standard_Boolean): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID, lower: Standard_Integer, upper: Standard_Integer, isDelta: Standard_Boolean): any;
  Init(lower: Standard_Integer, upper: Standard_Integer): void;
  SetValue(index: Standard_Integer, value: Standard_Byte): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  Value(Index: Standard_Integer): Standard_Byte;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  Length(): Standard_Integer;
  InternalArray(): any;
  ChangeArray(newArray: any, isCheckItems: Standard_Boolean): void;
  GetDelta(): Standard_Boolean;
  SetDelta(isDelta: Standard_Boolean): void;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  NewEmpty(): any;
  Paste(into: any, RT: any): void;
  DeltaOnModification(anOldAttribute: any): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class TDataStd_ExtStringArray extends TDF_Attribute {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, lower: Standard_Integer, upper: Standard_Integer, isDelta: Standard_Boolean): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID, lower: Standard_Integer, upper: Standard_Integer, isDelta: Standard_Boolean): any;
  Init(lower: Standard_Integer, upper: Standard_Integer): void;
  SetValue(Index: Standard_Integer, Value: TCollection_ExtendedString): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  Value(Index: Standard_Integer): TCollection_ExtendedString;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  Length(): Standard_Integer;
  ChangeArray(newArray: any, isCheckItems: Standard_Boolean): void;
  Array(): any;
  GetDelta(): Standard_Boolean;
  SetDelta(isDelta: Standard_Boolean): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DeltaOnModification(anOldAttribute: any): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class TDataStd_BooleanArray extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, lower: Standard_Integer, upper: Standard_Integer): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID, lower: Standard_Integer, upper: Standard_Integer): any;
  Init(lower: Standard_Integer, upper: Standard_Integer): void;
  SetValue(index: Standard_Integer, value: Standard_Boolean): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  Value(Index: Standard_Integer): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  Length(): Standard_Integer;
  InternalArray(): any;
  SetInternalArray(values: any): void;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  NewEmpty(): any;
  Paste(into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_ReferenceArray extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, lower: Standard_Integer, upper: Standard_Integer): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID, lower: Standard_Integer, upper: Standard_Integer): any;
  Init(lower: Standard_Integer, upper: Standard_Integer): void;
  SetValue(index: Standard_Integer, value: TDF_Label): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  Value(Index: Standard_Integer): TDF_Label;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  Length(): Standard_Integer;
  InternalArray(): any;
  SetInternalArray(values: any, isCheckItems: Standard_Boolean): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  References(DS: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_IntegerList extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID): any;
  IsEmpty(): Standard_Boolean;
  Extent(): Standard_Integer;
  Prepend(value: Standard_Integer): void;
  Append(value: Standard_Integer): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  InsertBefore(value: Standard_Integer, before_value: Standard_Integer): Standard_Boolean;
  InsertBeforeByIndex(index: Standard_Integer, before_value: Standard_Integer): Standard_Boolean;
  InsertAfter(value: Standard_Integer, after_value: Standard_Integer): Standard_Boolean;
  InsertAfterByIndex(index: Standard_Integer, after_value: Standard_Integer): Standard_Boolean;
  Remove(value: Standard_Integer): Standard_Boolean;
  RemoveByIndex(index: Standard_Integer): Standard_Boolean;
  Clear(): void;
  First(): Standard_Integer;
  Last(): Standard_Integer;
  List(): TColStd_ListOfInteger;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_RealList extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID): any;
  IsEmpty(): Standard_Boolean;
  Extent(): Standard_Integer;
  Prepend(value: Standard_Real): void;
  Append(value: Standard_Real): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  InsertBefore(value: Standard_Real, before_value: Standard_Real): Standard_Boolean;
  InsertBeforeByIndex(index: Standard_Integer, before_value: Standard_Real): Standard_Boolean;
  InsertAfter(value: Standard_Real, after_value: Standard_Real): Standard_Boolean;
  InsertAfterByIndex(index: Standard_Integer, after_value: Standard_Real): Standard_Boolean;
  Remove(value: Standard_Real): Standard_Boolean;
  RemoveByIndex(index: Standard_Integer): Standard_Boolean;
  Clear(): void;
  First(): Standard_Real;
  Last(): Standard_Real;
  List(): TColStd_ListOfReal;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_ExtStringList extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID): any;
  IsEmpty(): Standard_Boolean;
  Extent(): Standard_Integer;
  Prepend(value: TCollection_ExtendedString): void;
  Append(value: TCollection_ExtendedString): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  InsertBefore_1(value: TCollection_ExtendedString, before_value: TCollection_ExtendedString): Standard_Boolean;
  InsertBefore_2(index: Standard_Integer, before_value: TCollection_ExtendedString): Standard_Boolean;
  InsertAfter_1(value: TCollection_ExtendedString, after_value: TCollection_ExtendedString): Standard_Boolean;
  InsertAfter_2(index: Standard_Integer, after_value: TCollection_ExtendedString): Standard_Boolean;
  Remove_1(value: TCollection_ExtendedString): Standard_Boolean;
  Remove_2(index: Standard_Integer): Standard_Boolean;
  Clear(): void;
  First(): TCollection_ExtendedString;
  Last(): TCollection_ExtendedString;
  List(): TDataStd_ListOfExtendedString;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_BooleanList extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID): any;
  IsEmpty(): Standard_Boolean;
  Extent(): Standard_Integer;
  Prepend(value: Standard_Boolean): void;
  Append(value: Standard_Boolean): void;
  Clear(): void;
  First(): Standard_Boolean;
  Last(): Standard_Boolean;
  List(): TDataStd_ListOfByte;
  InsertBefore(index: Standard_Integer, before_value: Standard_Boolean): Standard_Boolean;
  InsertAfter(index: Standard_Integer, after_value: Standard_Boolean): Standard_Boolean;
  Remove(index: Standard_Integer): Standard_Boolean;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_ReferenceList extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, theGuid: Standard_GUID): any;
  IsEmpty(): Standard_Boolean;
  Extent(): Standard_Integer;
  Prepend(value: TDF_Label): void;
  Append(value: TDF_Label): void;
  SetID_1(theGuid: Standard_GUID): void;
  SetID_2(): void;
  InsertBefore_1(value: TDF_Label, before_value: TDF_Label): Standard_Boolean;
  InsertBefore_2(index: Standard_Integer, before_value: TDF_Label): Standard_Boolean;
  InsertAfter_1(value: TDF_Label, after_value: TDF_Label): Standard_Boolean;
  InsertAfter_2(index: Standard_Integer, after_value: TDF_Label): Standard_Boolean;
  Remove_1(value: TDF_Label): Standard_Boolean;
  Remove_2(index: Standard_Integer): Standard_Boolean;
  Clear(): void;
  First(): TDF_Label;
  Last(): TDF_Label;
  List(): TDF_LabelList;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  References(DS: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_IntPackedMap extends TDF_Attribute {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetID(): Standard_GUID;
  Set(label: TDF_Label, isDelta: Standard_Boolean): any;
  ChangeMap_1(theMap: any): Standard_Boolean;
  ChangeMap_2(theMap: TColStd_PackedMapOfInteger): Standard_Boolean;
  GetMap(): TColStd_PackedMapOfInteger;
  GetHMap(): any;
  Clear(): Standard_Boolean;
  Add(theKey: Standard_Integer): Standard_Boolean;
  Remove(theKey: Standard_Integer): Standard_Boolean;
  Contains(theKey: Standard_Integer): Standard_Boolean;
  Extent(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  GetDelta(): Standard_Boolean;
  SetDelta(isDelta: Standard_Boolean): void;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  NewEmpty(): any;
  Paste(into: any, RT: any): void;
  DeltaOnModification(anOldAttribute: any): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class TDF_DerivedAttribute {
  constructor();
  Register(theNewAttributeFunction: any, theNameSpace: Standard_CString, theTypeName: Standard_CString): any;
  Attribute(theType: Standard_CString): any;
  TypeName(theType: Standard_CString): TCollection_AsciiString;
  Attributes(theList: any): void;
}

export declare class TDataStd_Expression extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set(label: TDF_Label): any;
  Name(): TCollection_ExtendedString;
  SetExpression(E: TCollection_ExtendedString): void;
  GetExpression(): TCollection_ExtendedString;
  GetVariables(): TDF_AttributeList;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_Relation extends TDataStd_Expression {
  constructor()
  GetID(): Standard_GUID;
  Set(label: TDF_Label): any;
  SetRelation(E: TCollection_ExtendedString): void;
  GetRelation(): TCollection_ExtendedString;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TFunction_Function extends TDF_Attribute {
  constructor()
  Set_1(L: TDF_Label): any;
  Set_2(L: TDF_Label, DriverID: Standard_GUID): any;
  GetID(): Standard_GUID;
  GetDriverGUID(): Standard_GUID;
  SetDriverGUID(guid: Standard_GUID): void;
  Failed(): Standard_Boolean;
  SetFailure(mode: Standard_Integer): void;
  GetFailure(): Standard_Integer;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  Paste(into: any, RT: any): void;
  NewEmpty(): any;
  References(aDataSet: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_NamedData extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set(label: TDF_Label): any;
  HasIntegers(): Standard_Boolean;
  HasInteger(theName: TCollection_ExtendedString): Standard_Boolean;
  GetInteger(theName: TCollection_ExtendedString): Standard_Integer;
  SetInteger(theName: TCollection_ExtendedString, theInteger: Standard_Integer): void;
  GetIntegersContainer(): TColStd_DataMapOfStringInteger;
  ChangeIntegers(theIntegers: TColStd_DataMapOfStringInteger): void;
  HasReals(): Standard_Boolean;
  HasReal(theName: TCollection_ExtendedString): Standard_Boolean;
  GetReal(theName: TCollection_ExtendedString): Standard_Real;
  SetReal(theName: TCollection_ExtendedString, theReal: Standard_Real): void;
  GetRealsContainer(): TDataStd_DataMapOfStringReal;
  ChangeReals(theReals: TDataStd_DataMapOfStringReal): void;
  HasStrings(): Standard_Boolean;
  HasString(theName: TCollection_ExtendedString): Standard_Boolean;
  GetString(theName: TCollection_ExtendedString): TCollection_ExtendedString;
  SetString(theName: TCollection_ExtendedString, theString: TCollection_ExtendedString): void;
  GetStringsContainer(): TDataStd_DataMapOfStringString;
  ChangeStrings(theStrings: TDataStd_DataMapOfStringString): void;
  HasBytes(): Standard_Boolean;
  HasByte(theName: TCollection_ExtendedString): Standard_Boolean;
  GetByte(theName: TCollection_ExtendedString): Standard_Byte;
  SetByte(theName: TCollection_ExtendedString, theByte: Standard_Byte): void;
  GetBytesContainer(): TDataStd_DataMapOfStringByte;
  ChangeBytes(theBytes: TDataStd_DataMapOfStringByte): void;
  HasArraysOfIntegers(): Standard_Boolean;
  HasArrayOfIntegers(theName: TCollection_ExtendedString): Standard_Boolean;
  GetArrayOfIntegers(theName: TCollection_ExtendedString): any;
  SetArrayOfIntegers(theName: TCollection_ExtendedString, theArrayOfIntegers: any): void;
  GetArraysOfIntegersContainer(): TDataStd_DataMapOfStringHArray1OfInteger;
  ChangeArraysOfIntegers(theArraysOfIntegers: TDataStd_DataMapOfStringHArray1OfInteger): void;
  HasArraysOfReals(): Standard_Boolean;
  HasArrayOfReals(theName: TCollection_ExtendedString): Standard_Boolean;
  GetArrayOfReals(theName: TCollection_ExtendedString): any;
  SetArrayOfReals(theName: TCollection_ExtendedString, theArrayOfReals: any): void;
  GetArraysOfRealsContainer(): TDataStd_DataMapOfStringHArray1OfReal;
  ChangeArraysOfReals(theArraysOfReals: TDataStd_DataMapOfStringHArray1OfReal): void;
  Clear(): void;
  HasDeferredData(): Standard_Boolean;
  LoadDeferredData(theToKeepDeferred: Standard_Boolean): Standard_Boolean;
  UnloadDeferredData(): Standard_Boolean;
  clear(): void;
  setInteger(theName: TCollection_ExtendedString, theInteger: Standard_Integer): void;
  setReal(theName: TCollection_ExtendedString, theReal: Standard_Real): void;
  setString(theName: TCollection_ExtendedString, theString: TCollection_ExtendedString): void;
  setByte(theName: TCollection_ExtendedString, theByte: Standard_Byte): void;
  setArrayOfIntegers(theName: TCollection_ExtendedString, theArrayOfIntegers: any): void;
  setArrayOfReals(theName: TCollection_ExtendedString, theArrayOfReals: any): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_Real extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, value: Standard_Real): any;
  Set_2(label: TDF_Label, guid: Standard_GUID, value: Standard_Real): any;
  SetDimension(DIM: TDataStd_RealEnum): void;
  GetDimension(): TDataStd_RealEnum;
  Set_3(V: Standard_Real): void;
  SetID_1(guid: Standard_GUID): void;
  SetID_2(): void;
  Get(): Standard_Real;
  IsCaptured(): Standard_Boolean;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_TreeNode extends TDF_Attribute {
  constructor()
  Find(L: TDF_Label, T: any): Standard_Boolean;
  Set_1(L: TDF_Label): any;
  Set_2(L: TDF_Label, ExplicitTreeID: Standard_GUID): any;
  GetDefaultTreeID(): Standard_GUID;
  Append(Child: any): Standard_Boolean;
  Prepend(Child: any): Standard_Boolean;
  InsertBefore(Node: any): Standard_Boolean;
  InsertAfter(Node: any): Standard_Boolean;
  Remove(): Standard_Boolean;
  Depth(): Standard_Integer;
  NbChildren(allLevels: Standard_Boolean): Standard_Integer;
  IsAscendant(of: any): Standard_Boolean;
  IsDescendant(of: any): Standard_Boolean;
  IsRoot(): Standard_Boolean;
  Root(): any;
  IsFather(of: any): Standard_Boolean;
  IsChild(of: any): Standard_Boolean;
  HasFather(): Standard_Boolean;
  Father(): any;
  HasNext(): Standard_Boolean;
  Next(): any;
  HasPrevious(): Standard_Boolean;
  Previous(): any;
  HasFirst(): Standard_Boolean;
  First(): any;
  HasLast(): Standard_Boolean;
  Last(): any;
  FindLast(): any;
  SetTreeID(explicitID: Standard_GUID): void;
  SetFather(F: any): void;
  SetNext(F: any): void;
  SetPrevious(F: any): void;
  SetFirst(F: any): void;
  SetLast(F: any): void;
  AfterAddition(): void;
  BeforeForget(): void;
  AfterResume(): void;
  BeforeUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  AfterUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  Paste(into: any, RT: any): void;
  NewEmpty(): any;
  References(aDataSet: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_Integer extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, value: Standard_Integer): any;
  Set_2(label: TDF_Label, guid: Standard_GUID, value: Standard_Integer): any;
  Set_3(V: Standard_Integer): void;
  SetID_1(guid: Standard_GUID): void;
  SetID_2(): void;
  Get(): Standard_Integer;
  IsCaptured(): Standard_Boolean;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_Reference extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(I: TDF_Label, Origin: TDF_Label): any;
  Set_2(Origin: TDF_Label): void;
  Get(): TDF_Label;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  References(DS: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_UAttribute extends TDF_Attribute {
  constructor()
  Set(label: TDF_Label, LocalID: Standard_GUID): any;
  SetID(LocalID: Standard_GUID): void;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  NewEmpty(): any;
  Paste(into: any, RT: any): void;
  References(DS: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_GenericExtString extends TDF_Attribute {
  Set(S: TCollection_ExtendedString): void;
  SetID(guid: Standard_GUID): void;
  Get(): TCollection_ExtendedString;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  Paste(into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_Name extends TDataStd_GenericExtString {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, string: TCollection_ExtendedString): any;
  Set_2(label: TDF_Label, guid: Standard_GUID, string: TCollection_ExtendedString): any;
  Set_3(S: TCollection_ExtendedString): void;
  SetID_1(guid: Standard_GUID): void;
  SetID_2(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataStd_Comment extends TDataStd_GenericExtString {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, string: TCollection_ExtendedString): any;
  Set_3(S: TCollection_ExtendedString): void;
  SetID_1(guid: Standard_GUID): void;
  SetID_2(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataStd_AsciiString extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label, string: TCollection_AsciiString): any;
  Set_2(label: TDF_Label, guid: Standard_GUID, string: TCollection_AsciiString): any;
  Set_3(S: TCollection_AsciiString): void;
  SetID_1(guid: Standard_GUID): void;
  SetID_2(): void;
  Get(): TCollection_AsciiString;
  IsEmpty(): Standard_Boolean;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  NewEmpty(): any;
  Paste(into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_Variable extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Name_1(string: TCollection_ExtendedString): void;
  Name_2(): TCollection_ExtendedString;
  Set_2(value: Standard_Real): void;
  Set_3(value: Standard_Real, dimension: TDataStd_RealEnum): void;
  IsValued(): Standard_Boolean;
  Get(): Standard_Real;
  Real(): any;
  IsAssigned(): Standard_Boolean;
  Assign(): any;
  Desassign(): void;
  Expression(): any;
  IsCaptured(): Standard_Boolean;
  IsConstant(): Standard_Boolean;
  Unit_1(unit: TCollection_AsciiString): void;
  Unit_2(): TCollection_AsciiString;
  Constant(status: Standard_Boolean): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  References(DS: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_GenericEmpty extends TDF_Attribute {
  Restore(a0: any): void;
  Paste(a0: any, a1: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_Directory extends TDataStd_GenericEmpty {
  constructor()
  Find(current: TDF_Label, D: any): Standard_Boolean;
  New(label: TDF_Label): any;
  AddDirectory(dir: any): any;
  MakeObjectLabel(dir: any): TDF_Label;
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataStd_Tick extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set(label: TDF_Label): any;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataStd_NoteBook extends TDataStd_GenericEmpty {
  constructor()
  Find(current: TDF_Label, N: any): Standard_Boolean;
  New(label: TDF_Label): any;
  GetID(): Standard_GUID;
  Append_1(value: Standard_Real, isExported: Standard_Boolean): any;
  Append_2(value: Standard_Integer, isExported: Standard_Boolean): any;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDocStd_XLink extends TDF_Attribute {
  constructor()
  Set(atLabel: TDF_Label): any;
  Update(): any;
  ID(): Standard_GUID;
  GetID(): Standard_GUID;
  DocumentEntry_1(aDocEntry: TCollection_AsciiString): void;
  DocumentEntry_2(): TCollection_AsciiString;
  LabelEntry_1(aLabel: TDF_Label): void;
  LabelEntry_2(aLabEntry: TCollection_AsciiString): void;
  LabelEntry_3(): TCollection_AsciiString;
  AfterAddition(): void;
  BeforeRemoval(): void;
  BeforeUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  AfterUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  BackupCopy(): any;
  Restore(anAttribute: any): void;
  NewEmpty(): any;
  Paste(intoAttribute: any, aRelocationTable: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF {
  constructor();
  LowestID(): Standard_GUID;
  UppestID(): Standard_GUID;
  AddLinkGUIDToProgID(ID: Standard_GUID, ProgID: TCollection_ExtendedString): void;
  GUIDFromProgID(ProgID: TCollection_ExtendedString, ID: Standard_GUID): Standard_Boolean;
  ProgIDFromGUID(ID: Standard_GUID, ProgID: TCollection_ExtendedString): Standard_Boolean;
}

export declare class TDF_AttributeDelta extends Standard_Transient {
  Apply(): void;
  Label(): TDF_Label;
  Attribute(): any;
  ID(): Standard_GUID;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_AttributeIterator {
  Initialize(aLabel: TDF_Label, withoutForgotten: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  PtrValue(): TDF_Attribute;
}

  export declare class TDF_AttributeIterator_1 extends TDF_AttributeIterator {
    constructor();
  }

  export declare class TDF_AttributeIterator_2 extends TDF_AttributeIterator {
    constructor(aLabel: TDF_Label, withoutForgotten: Standard_Boolean);
  }

  export declare class TDF_AttributeIterator_3 extends TDF_AttributeIterator {
    constructor(aLabelNode: TDF_LabelNodePtr, withoutForgotten: Standard_Boolean);
  }

export declare class TDF_ChildIDIterator {
  Initialize(aLabel: TDF_Label, anID: Standard_GUID, allLevels: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  NextBrother(): void;
  Value(): any;
}

  export declare class TDF_ChildIDIterator_1 extends TDF_ChildIDIterator {
    constructor();
  }

  export declare class TDF_ChildIDIterator_2 extends TDF_ChildIDIterator {
    constructor(aLabel: TDF_Label, anID: Standard_GUID, allLevels: Standard_Boolean);
  }

export declare class TDF_ClosureMode {
  constructor(aMode: Standard_Boolean)
  Descendants_1(aStatus: Standard_Boolean): void;
  Descendants_2(): Standard_Boolean;
  References_1(aStatus: Standard_Boolean): void;
  References_2(): Standard_Boolean;
}

export declare class TDF_ClosureTool {
  constructor();
  Closure_1(aDataSet: any): void;
  Closure_2(aDataSet: any, aFilter: TDF_IDFilter, aMode: TDF_ClosureMode): void;
  Closure_3(aLabel: TDF_Label, aLabMap: TDF_LabelMap, anAttMap: TDF_AttributeMap, aFilter: TDF_IDFilter, aMode: TDF_ClosureMode): void;
}

export declare class TDF_ComparisonTool {
  constructor();
  Compare_1(aSourceDataSet: any, aTargetDataSet: any, aFilter: TDF_IDFilter, aRelocationTable: any): void;
  SourceUnbound(aRefDataSet: any, aRelocationTable: any, aFilter: TDF_IDFilter, aDiffDataSet: any, anOption: Standard_Integer): Standard_Boolean;
  TargetUnbound(aRefDataSet: any, aRelocationTable: any, aFilter: TDF_IDFilter, aDiffDataSet: any, anOption: Standard_Integer): Standard_Boolean;
  Cut(aDataSet: any): void;
  IsSelfContained(aLabel: TDF_Label, aDataSet: any): Standard_Boolean;
}

export declare class TDF_IDFilter {
  constructor(ignoreMode: Standard_Boolean)
  IgnoreAll_1(ignore: Standard_Boolean): void;
  IgnoreAll_2(): Standard_Boolean;
  Keep_1(anID: Standard_GUID): void;
  Keep_2(anIDList: TDF_IDList): void;
  Ignore_1(anID: Standard_GUID): void;
  Ignore_2(anIDList: TDF_IDList): void;
  IsKept_1(anID: Standard_GUID): Standard_Boolean;
  IsKept_2(anAtt: any): Standard_Boolean;
  IsIgnored_1(anID: Standard_GUID): Standard_Boolean;
  IsIgnored_2(anAtt: any): Standard_Boolean;
  IDList(anIDList: TDF_IDList): void;
  Copy(fromFilter: TDF_IDFilter): void;
  Dump(anOS: Standard_OStream): void;
  Assign(theFilter: TDF_IDFilter): void;
}

export declare class TDF_CopyLabel {
  Load(aSource: TDF_Label, aTarget: TDF_Label): void;
  UseFilter(aFilter: TDF_IDFilter): void;
  ExternalReferences_1(Lab: TDF_Label, aExternals: TDF_AttributeMap, aFilter: TDF_IDFilter): Standard_Boolean;
  ExternalReferences_2(aRefLab: TDF_Label, Lab: TDF_Label, aExternals: TDF_AttributeMap, aFilter: TDF_IDFilter, aDataSet: any): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  RelocationTable(): any;
}

  export declare class TDF_CopyLabel_1 extends TDF_CopyLabel {
    constructor();
  }

  export declare class TDF_CopyLabel_2 extends TDF_CopyLabel {
    constructor(aSource: TDF_Label, aTarget: TDF_Label);
  }

export declare class TDF_CopyTool {
  constructor();
  Copy_1(aSourceDataSet: any, aRelocationTable: any): void;
  Copy_2(aSourceDataSet: any, aRelocationTable: any, aPrivilegeFilter: TDF_IDFilter): void;
  Copy_3(aSourceDataSet: any, aRelocationTable: any, aPrivilegeFilter: TDF_IDFilter, aRefFilter: TDF_IDFilter, setSelfContained: Standard_Boolean): void;
}

export declare class TDF_DataSet extends Standard_Transient {
  constructor()
  Clear(): void;
  IsEmpty(): Standard_Boolean;
  AddLabel(aLabel: TDF_Label): void;
  ContainsLabel(aLabel: TDF_Label): Standard_Boolean;
  Labels(): TDF_LabelMap;
  AddAttribute(anAttribute: any): void;
  ContainsAttribute(anAttribute: any): Standard_Boolean;
  Attributes(): TDF_AttributeMap;
  AddRoot(aLabel: TDF_Label): void;
  Roots(): TDF_LabelList;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_DeltaOnModification extends TDF_AttributeDelta {
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_DefaultDeltaOnModification extends TDF_DeltaOnModification {
  constructor(anAttribute: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_DeltaOnRemoval extends TDF_AttributeDelta {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_DefaultDeltaOnRemoval extends TDF_DeltaOnRemoval {
  constructor(anAttribute: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_Delta extends Standard_Transient {
  constructor()
  IsEmpty(): Standard_Boolean;
  IsApplicable(aCurrentTime: Standard_Integer): Standard_Boolean;
  BeginTime(): Standard_Integer;
  EndTime(): Standard_Integer;
  Labels(aLabelList: TDF_LabelList): void;
  AttributeDeltas(): TDF_AttributeDeltaList;
  Name(): TCollection_ExtendedString;
  SetName(theName: TCollection_ExtendedString): void;
  Dump(OS: Standard_OStream): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_DeltaOnAddition extends TDF_AttributeDelta {
  constructor(anAtt: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_DeltaOnForget extends TDF_AttributeDelta {
  constructor(anAtt: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_DeltaOnResume extends TDF_AttributeDelta {
  constructor(anAtt: any)
  Apply(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_RelocationTable extends Standard_Transient {
  constructor(selfRelocate: Standard_Boolean)
  SelfRelocate_1(selfRelocate: Standard_Boolean): void;
  SelfRelocate_2(): Standard_Boolean;
  AfterRelocate_1(afterRelocate: Standard_Boolean): void;
  AfterRelocate_2(): Standard_Boolean;
  SetRelocation_1(aSourceLabel: TDF_Label, aTargetLabel: TDF_Label): void;
  HasRelocation_1(aSourceLabel: TDF_Label, aTargetLabel: TDF_Label): Standard_Boolean;
  SetRelocation_2(aSourceAttribute: any, aTargetAttribute: any): void;
  HasRelocation_2(aSourceAttribute: any, aTargetAttribute: any): Standard_Boolean;
  SetTransientRelocation(aSourceTransient: any, aTargetTransient: any): void;
  HasTransientRelocation(aSourceTransient: any, aTargetTransient: any): Standard_Boolean;
  Clear(): void;
  TargetLabelMap(aLabelMap: TDF_LabelMap): void;
  TargetAttributeMap(anAttributeMap: TDF_AttributeMap): void;
  LabelTable(): TDF_LabelDataMap;
  AttributeTable(): TDF_AttributeDataMap;
  TransientTable(): TColStd_IndexedDataMapOfTransientTransient;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDF_Tool {
  constructor();
  NbLabels(aLabel: TDF_Label): Standard_Integer;
  NbAttributes_1(aLabel: TDF_Label): Standard_Integer;
  NbAttributes_2(aLabel: TDF_Label, aFilter: TDF_IDFilter): Standard_Integer;
  IsSelfContained_1(aLabel: TDF_Label): Standard_Boolean;
  IsSelfContained_2(aLabel: TDF_Label, aFilter: TDF_IDFilter): Standard_Boolean;
  OutReferers_1(theLabel: TDF_Label, theAtts: TDF_AttributeMap): void;
  OutReferers_2(aLabel: TDF_Label, aFilterForReferers: TDF_IDFilter, aFilterForReferences: TDF_IDFilter, atts: TDF_AttributeMap): void;
  OutReferences_1(aLabel: TDF_Label, atts: TDF_AttributeMap): void;
  OutReferences_2(aLabel: TDF_Label, aFilterForReferers: TDF_IDFilter, aFilterForReferences: TDF_IDFilter, atts: TDF_AttributeMap): void;
  RelocateLabel(aSourceLabel: TDF_Label, fromRoot: TDF_Label, toRoot: TDF_Label, aTargetLabel: TDF_Label, create: Standard_Boolean): void;
  Entry(aLabel: TDF_Label, anEntry: TCollection_AsciiString): void;
  TagList_1(aLabel: TDF_Label, aTagList: TColStd_ListOfInteger): void;
  TagList_2(anEntry: TCollection_AsciiString, aTagList: TColStd_ListOfInteger): void;
  Label_1(aDF: any, anEntry: TCollection_AsciiString, aLabel: TDF_Label, create: Standard_Boolean): void;
  Label_2(aDF: any, anEntry: Standard_CString, aLabel: TDF_Label, create: Standard_Boolean): void;
  Label_3(aDF: any, aTagList: TColStd_ListOfInteger, aLabel: TDF_Label, create: Standard_Boolean): void;
  CountLabels(aLabelList: TDF_LabelList, aLabelMap: TDF_LabelIntegerMap): void;
  DeductLabels(aLabelList: TDF_LabelList, aLabelMap: TDF_LabelIntegerMap): void;
  DeepDump_1(anOS: Standard_OStream, aDF: any): void;
  ExtendedDeepDump_1(anOS: Standard_OStream, aDF: any, aFilter: TDF_IDFilter): void;
  DeepDump_2(anOS: Standard_OStream, aLabel: TDF_Label): void;
  ExtendedDeepDump_2(anOS: Standard_OStream, aLabel: TDF_Label, aFilter: TDF_IDFilter): void;
}

export declare class TDataStd {
  constructor();
  IDList(anIDList: TDF_IDList): void;
}

export declare class TDataStd_ChildNodeIterator {
  Initialize(aTreeNode: any, allLevels: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  NextBrother(): void;
  Value(): any;
}

  export declare class TDataStd_ChildNodeIterator_1 extends TDataStd_ChildNodeIterator {
    constructor();
  }

  export declare class TDataStd_ChildNodeIterator_2 extends TDataStd_ChildNodeIterator {
    constructor(aTreeNode: any, allLevels: Standard_Boolean);
  }

export declare class TDataStd_Current extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set(L: TDF_Label): void;
  Get(acces: TDF_Label): TDF_Label;
  Has(acces: TDF_Label): Standard_Boolean;
  SetLabel(current: TDF_Label): void;
  GetLabel(): TDF_Label;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_DeltaOnModificationOfByteArray extends TDF_DeltaOnModification {
  constructor(Arr: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_DeltaOnModificationOfExtStringArray extends TDF_DeltaOnModification {
  constructor(Arr: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_DeltaOnModificationOfIntArray extends TDF_DeltaOnModification {
  constructor(Arr: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_DeltaOnModificationOfIntPackedMap extends TDF_DeltaOnModification {
  constructor(Arr: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_DeltaOnModificationOfRealArray extends TDF_DeltaOnModification {
  constructor(Arr: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataStd_HDataMapOfStringByte extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Map(): TDataStd_DataMapOfStringByte;
  ChangeMap(): TDataStd_DataMapOfStringByte;
}

  export declare class TDataStd_HDataMapOfStringByte_1 extends TDataStd_HDataMapOfStringByte {
    constructor(NbBuckets: Standard_Integer);
  }

  export declare class TDataStd_HDataMapOfStringByte_2 extends TDataStd_HDataMapOfStringByte {
    constructor(theOther: TDataStd_DataMapOfStringByte);
  }

export declare class TDataStd_HDataMapOfStringHArray1OfInteger extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Map(): TDataStd_DataMapOfStringHArray1OfInteger;
  ChangeMap(): TDataStd_DataMapOfStringHArray1OfInteger;
}

  export declare class TDataStd_HDataMapOfStringHArray1OfInteger_1 extends TDataStd_HDataMapOfStringHArray1OfInteger {
    constructor(NbBuckets: Standard_Integer);
  }

  export declare class TDataStd_HDataMapOfStringHArray1OfInteger_2 extends TDataStd_HDataMapOfStringHArray1OfInteger {
    constructor(theOther: TDataStd_DataMapOfStringHArray1OfInteger);
  }

export declare class TDataStd_HDataMapOfStringHArray1OfReal extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Map(): TDataStd_DataMapOfStringHArray1OfReal;
  ChangeMap(): TDataStd_DataMapOfStringHArray1OfReal;
}

  export declare class TDataStd_HDataMapOfStringHArray1OfReal_1 extends TDataStd_HDataMapOfStringHArray1OfReal {
    constructor(NbBuckets: Standard_Integer);
  }

  export declare class TDataStd_HDataMapOfStringHArray1OfReal_2 extends TDataStd_HDataMapOfStringHArray1OfReal {
    constructor(theOther: TDataStd_DataMapOfStringHArray1OfReal);
  }

export declare class TDataStd_HDataMapOfStringInteger extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Map(): TColStd_DataMapOfStringInteger;
  ChangeMap(): TColStd_DataMapOfStringInteger;
}

  export declare class TDataStd_HDataMapOfStringInteger_1 extends TDataStd_HDataMapOfStringInteger {
    constructor(NbBuckets: Standard_Integer);
  }

  export declare class TDataStd_HDataMapOfStringInteger_2 extends TDataStd_HDataMapOfStringInteger {
    constructor(theOther: TColStd_DataMapOfStringInteger);
  }

export declare class TDataStd_HDataMapOfStringReal extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Map(): TDataStd_DataMapOfStringReal;
  ChangeMap(): TDataStd_DataMapOfStringReal;
}

  export declare class TDataStd_HDataMapOfStringReal_1 extends TDataStd_HDataMapOfStringReal {
    constructor(NbBuckets: Standard_Integer);
  }

  export declare class TDataStd_HDataMapOfStringReal_2 extends TDataStd_HDataMapOfStringReal {
    constructor(theOther: TDataStd_DataMapOfStringReal);
  }

export declare class TDataStd_HDataMapOfStringString extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Map(): TDataStd_DataMapOfStringString;
  ChangeMap(): TDataStd_DataMapOfStringString;
}

  export declare class TDataStd_HDataMapOfStringString_1 extends TDataStd_HDataMapOfStringString {
    constructor(NbBuckets: Standard_Integer);
  }

  export declare class TDataStd_HDataMapOfStringString_2 extends TDataStd_HDataMapOfStringString {
    constructor(theOther: TDataStd_DataMapOfStringString);
  }

export declare class TDocStd {
  constructor();
  IDList(anIDList: TDF_IDList): void;
}

export declare class TDocStd_Document extends CDM_Document {
  constructor(astorageformat: TCollection_ExtendedString)
  Get(L: TDF_Label): any;
  IsSaved(): Standard_Boolean;
  IsChanged(): Standard_Boolean;
  SetSaved(): void;
  SetSavedTime(theTime: Standard_Integer): void;
  GetSavedTime(): Standard_Integer;
  GetName(): TCollection_ExtendedString;
  GetPath(): TCollection_ExtendedString;
  SetData(data: any): void;
  GetData(): any;
  Main(): TDF_Label;
  IsEmpty(): Standard_Boolean;
  IsValid(): Standard_Boolean;
  SetModified(L: TDF_Label): void;
  PurgeModified(): void;
  GetModified(): TDF_LabelMap;
  NewCommand(): void;
  HasOpenCommand(): Standard_Boolean;
  OpenCommand(): void;
  CommitCommand(): Standard_Boolean;
  AbortCommand(): void;
  GetUndoLimit(): Standard_Integer;
  SetUndoLimit(L: Standard_Integer): void;
  ClearUndos(): void;
  ClearRedos(): void;
  GetAvailableUndos(): Standard_Integer;
  Undo(): Standard_Boolean;
  GetAvailableRedos(): Standard_Integer;
  Redo(): Standard_Boolean;
  GetUndos(): TDF_DeltaList;
  GetRedos(): TDF_DeltaList;
  RemoveFirstUndo(): void;
  InitDeltaCompaction(): Standard_Boolean;
  PerformDeltaCompaction(): Standard_Boolean;
  UpdateReferences(aDocEntry: TCollection_AsciiString): void;
  Recompute(): void;
  Update(aToDocument: any, aReferenceIdentifier: Standard_Integer, aModifContext: Standard_Address): void;
  StorageFormat(): TCollection_ExtendedString;
  SetEmptyLabelsSavingMode(isAllowed: Standard_Boolean): void;
  EmptyLabelsSavingMode(): Standard_Boolean;
  ChangeStorageFormat(newStorageFormat: TCollection_ExtendedString): void;
  SetNestedTransactionMode(isAllowed: Standard_Boolean): void;
  IsNestedTransactionMode(): Standard_Boolean;
  SetModificationMode(theTransactionOnly: Standard_Boolean): void;
  ModificationMode(): Standard_Boolean;
  BeforeClose(): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDocStd_ApplicationDelta extends Standard_Transient {
  constructor()
  GetDocuments(): TDocStd_SequenceOfDocument;
  GetName(): TCollection_ExtendedString;
  SetName(theName: TCollection_ExtendedString): void;
  Dump(anOS: Standard_OStream): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDocStd_CompoundDelta extends TDF_Delta {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDocStd_Context {
  constructor()
  SetModifiedReferences(Mod: Standard_Boolean): void;
  ModifiedReferences(): Standard_Boolean;
}

export declare class TDocStd_Modified extends TDF_Attribute {
  constructor()
  IsEmpty_1(access: TDF_Label): Standard_Boolean;
  Add(alabel: TDF_Label): Standard_Boolean;
  Remove(alabel: TDF_Label): Standard_Boolean;
  Contains(alabel: TDF_Label): Standard_Boolean;
  Get_1(access: TDF_Label): TDF_LabelMap;
  Clear_1(access: TDF_Label): void;
  GetID(): Standard_GUID;
  IsEmpty_2(): Standard_Boolean;
  Clear_2(): void;
  AddLabel(L: TDF_Label): Standard_Boolean;
  RemoveLabel(L: TDF_Label): Standard_Boolean;
  Get_2(): TDF_LabelMap;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDocStd_MultiTransactionManager extends Standard_Transient {
  constructor()
  SetUndoLimit(theLimit: Standard_Integer): void;
  GetUndoLimit(): Standard_Integer;
  Undo(): void;
  Redo(): void;
  GetAvailableUndos(): TDocStd_SequenceOfApplicationDelta;
  GetAvailableRedos(): TDocStd_SequenceOfApplicationDelta;
  OpenCommand(): void;
  AbortCommand(): void;
  CommitCommand_1(): Standard_Boolean;
  CommitCommand_2(theName: TCollection_ExtendedString): Standard_Boolean;
  HasOpenCommand(): Standard_Boolean;
  RemoveLastUndo(): void;
  DumpTransaction(theOS: Standard_OStream): void;
  AddDocument(theDoc: any): void;
  RemoveDocument(theDoc: any): void;
  Documents(): TDocStd_SequenceOfDocument;
  SetNestedTransactionMode(isAllowed: Standard_Boolean): void;
  IsNestedTransactionMode(): Standard_Boolean;
  SetModificationMode(theTransactionOnly: Standard_Boolean): void;
  ModificationMode(): Standard_Boolean;
  ClearUndos(): void;
  ClearRedos(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDocStd_Owner extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  SetDocument_1(indata: any, doc: any): void;
  SetDocument_2(indata: any, doc: TDocStd_Document): void;
  GetDocument_1(ofdata: any): any;
  SetDocument_3(document: any): void;
  SetDocument_4(document: TDocStd_Document): void;
  GetDocument_2(): any;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDocStd_PathParser {
  constructor(path: TCollection_ExtendedString)
  Parse(): void;
  Trek(): TCollection_ExtendedString;
  Name(): TCollection_ExtendedString;
  Extension(): TCollection_ExtendedString;
  Path(): TCollection_ExtendedString;
  Length(): Standard_Integer;
}

export declare class TDocStd_XLinkIterator {
  Initialize(D: any): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TDocStd_XLinkPtr;
}

  export declare class TDocStd_XLinkIterator_1 extends TDocStd_XLinkIterator {
    constructor();
  }

  export declare class TDocStd_XLinkIterator_2 extends TDocStd_XLinkIterator {
    constructor(D: any);
  }

export declare class TDocStd_XLinkRoot extends TDF_Attribute {
  GetID(): Standard_GUID;
  Set(aDF: any): any;
  Insert(anXLinkPtr: TDocStd_XLinkPtr): void;
  Remove(anXLinkPtr: TDocStd_XLinkPtr): void;
  ID(): Standard_GUID;
  BackupCopy(): any;
  Restore(anAttribute: any): void;
  NewEmpty(): any;
  Paste(intoAttribute: any, aRelocationTable: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDocStd_XLinkTool {
  constructor()
  CopyWithLink(intarget: TDF_Label, fromsource: TDF_Label): void;
  UpdateLink(L: TDF_Label): void;
  Copy(intarget: TDF_Label, fromsource: TDF_Label): void;
  IsDone(): Standard_Boolean;
  DataSet(): any;
  RelocationTable(): any;
}

export declare class TFunction_DriverTable extends Standard_Transient {
  constructor()
  Get(): any;
  AddDriver(guid: Standard_GUID, driver: any, thread: Standard_Integer): Standard_Boolean;
  HasDriver(guid: Standard_GUID, thread: Standard_Integer): Standard_Boolean;
  FindDriver(guid: Standard_GUID, driver: any, thread: Standard_Integer): Standard_Boolean;
  RemoveDriver(guid: Standard_GUID, thread: Standard_Integer): Standard_Boolean;
  Clear(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TFunction_GraphNode extends TDF_Attribute {
  constructor()
  Set(L: TDF_Label): any;
  GetID(): Standard_GUID;
  AddPrevious_1(funcID: Standard_Integer): Standard_Boolean;
  AddPrevious_2(func: TDF_Label): Standard_Boolean;
  RemovePrevious_1(funcID: Standard_Integer): Standard_Boolean;
  RemovePrevious_2(func: TDF_Label): Standard_Boolean;
  GetPrevious(): TColStd_MapOfInteger;
  RemoveAllPrevious(): void;
  AddNext_1(funcID: Standard_Integer): Standard_Boolean;
  AddNext_2(func: TDF_Label): Standard_Boolean;
  RemoveNext_1(funcID: Standard_Integer): Standard_Boolean;
  RemoveNext_2(func: TDF_Label): Standard_Boolean;
  GetNext(): TColStd_MapOfInteger;
  RemoveAllNext(): void;
  GetStatus(): TFunction_ExecutionStatus;
  SetStatus(status: TFunction_ExecutionStatus): void;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  Paste(into: any, RT: any): void;
  NewEmpty(): any;
  References(aDataSet: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TFunction_IFunction {
  NewFunction(L: TDF_Label, ID: Standard_GUID): Standard_Boolean;
  DeleteFunction(L: TDF_Label): Standard_Boolean;
  UpdateDependencies_1(Access: TDF_Label): Standard_Boolean;
  Init(L: TDF_Label): void;
  Label(): TDF_Label;
  UpdateDependencies_2(): Standard_Boolean;
  Arguments(args: TDF_LabelList): void;
  Results(res: TDF_LabelList): void;
  GetPrevious(prev: TDF_LabelList): void;
  GetNext(prev: TDF_LabelList): void;
  GetStatus(): TFunction_ExecutionStatus;
  SetStatus(status: TFunction_ExecutionStatus): void;
  GetAllFunctions(): TFunction_DoubleMapOfIntegerLabel;
  GetLogbook(): any;
  GetDriver(thread: Standard_Integer): any;
  GetGraphNode(): any;
}

  export declare class TFunction_IFunction_1 extends TFunction_IFunction {
    constructor();
  }

  export declare class TFunction_IFunction_2 extends TFunction_IFunction {
    constructor(L: TDF_Label);
  }

export declare class TFunction_Iterator {
  Init(Access: TDF_Label): void;
  SetUsageOfExecutionStatus(usage: Standard_Boolean): void;
  GetUsageOfExecutionStatus(): Standard_Boolean;
  GetMaxNbThreads(): Standard_Integer;
  Current(): TDF_LabelList;
  More(): Standard_Boolean;
  Next(): void;
  GetStatus(func: TDF_Label): TFunction_ExecutionStatus;
  SetStatus(func: TDF_Label, status: TFunction_ExecutionStatus): void;
}

  export declare class TFunction_Iterator_1 extends TFunction_Iterator {
    constructor();
  }

  export declare class TFunction_Iterator_2 extends TFunction_Iterator {
    constructor(Access: TDF_Label);
  }

export declare class TFunction_Logbook extends TDF_Attribute {
  constructor()
  Set(Access: TDF_Label): any;
  GetID(): Standard_GUID;
  Clear(): void;
  IsEmpty(): Standard_Boolean;
  SetTouched(L: TDF_Label): void;
  SetImpacted(L: TDF_Label, WithChildren: Standard_Boolean): void;
  SetValid_1(L: TDF_Label, WithChildren: Standard_Boolean): void;
  SetValid_2(Ls: TDF_LabelMap): void;
  IsModified(L: TDF_Label, WithChildren: Standard_Boolean): Standard_Boolean;
  GetTouched(): TDF_LabelMap;
  GetImpacted(): TDF_LabelMap;
  GetValid_1(): TDF_LabelMap;
  GetValid_2(Ls: TDF_LabelMap): void;
  Done(status: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  Paste(into: any, RT: any): void;
  NewEmpty(): any;
}

export declare class TFunction_Scope extends TDF_Attribute {
  constructor()
  Set(Access: TDF_Label): any;
  GetID(): Standard_GUID;
  AddFunction(L: TDF_Label): Standard_Boolean;
  RemoveFunction_1(L: TDF_Label): Standard_Boolean;
  RemoveFunction_2(ID: Standard_Integer): Standard_Boolean;
  RemoveAllFunctions(): void;
  HasFunction_1(ID: Standard_Integer): Standard_Boolean;
  HasFunction_2(L: TDF_Label): Standard_Boolean;
  GetFunction_1(L: TDF_Label): Standard_Integer;
  GetFunction_2(ID: Standard_Integer): TDF_Label;
  GetLogbook(): any;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  Paste(into: any, RT: any): void;
  NewEmpty(): any;
  GetFunctions(): TFunction_DoubleMapOfIntegerLabel;
  ChangeFunctions(): TFunction_DoubleMapOfIntegerLabel;
  SetFreeID(ID: Standard_Integer): void;
  GetFreeID(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_TDocStd_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_Application): void;
  get(): TDocStd_Application;
}

  export declare class Handle_TDocStd_Application_1 extends Handle_TDocStd_Application {
    constructor();
  }

  export declare class Handle_TDocStd_Application_2 extends Handle_TDocStd_Application {
    constructor(thePtr: TDocStd_Application);
  }

  export declare class Handle_TDocStd_Application_3 extends Handle_TDocStd_Application {
    constructor(theHandle: Handle_TDocStd_Application);
  }

  export declare class Handle_TDocStd_Application_4 extends Handle_TDocStd_Application {
    constructor(theHandle: Handle_TDocStd_Application);
  }

export declare class Handle_AppStdL_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppStdL_Application): void;
  get(): AppStdL_Application;
}

  export declare class Handle_AppStdL_Application_1 extends Handle_AppStdL_Application {
    constructor();
  }

  export declare class Handle_AppStdL_Application_2 extends Handle_AppStdL_Application {
    constructor(thePtr: AppStdL_Application);
  }

  export declare class Handle_AppStdL_Application_3 extends Handle_AppStdL_Application {
    constructor(theHandle: Handle_AppStdL_Application);
  }

  export declare class Handle_AppStdL_Application_4 extends Handle_AppStdL_Application {
    constructor(theHandle: Handle_AppStdL_Application);
  }

export declare class Handle_TDF_Attribute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_Attribute): void;
  get(): TDF_Attribute;
}

  export declare class Handle_TDF_Attribute_1 extends Handle_TDF_Attribute {
    constructor();
  }

  export declare class Handle_TDF_Attribute_2 extends Handle_TDF_Attribute {
    constructor(thePtr: TDF_Attribute);
  }

  export declare class Handle_TDF_Attribute_3 extends Handle_TDF_Attribute {
    constructor(theHandle: Handle_TDF_Attribute);
  }

  export declare class Handle_TDF_Attribute_4 extends Handle_TDF_Attribute {
    constructor(theHandle: Handle_TDF_Attribute);
  }

export declare class Handle_TDF_TagSource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_TagSource): void;
  get(): TDF_TagSource;
}

  export declare class Handle_TDF_TagSource_1 extends Handle_TDF_TagSource {
    constructor();
  }

  export declare class Handle_TDF_TagSource_2 extends Handle_TDF_TagSource {
    constructor(thePtr: TDF_TagSource);
  }

  export declare class Handle_TDF_TagSource_3 extends Handle_TDF_TagSource {
    constructor(theHandle: Handle_TDF_TagSource);
  }

  export declare class Handle_TDF_TagSource_4 extends Handle_TDF_TagSource {
    constructor(theHandle: Handle_TDF_TagSource);
  }

export declare class Handle_TDF_Data {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_Data): void;
  get(): TDF_Data;
}

  export declare class Handle_TDF_Data_1 extends Handle_TDF_Data {
    constructor();
  }

  export declare class Handle_TDF_Data_2 extends Handle_TDF_Data {
    constructor(thePtr: TDF_Data);
  }

  export declare class Handle_TDF_Data_3 extends Handle_TDF_Data {
    constructor(theHandle: Handle_TDF_Data);
  }

  export declare class Handle_TDF_Data_4 extends Handle_TDF_Data {
    constructor(theHandle: Handle_TDF_Data);
  }

export declare class TDF_LabelList extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TDF_LabelList): TDF_LabelList;
  Clear(theAllocator: TDF_HAllocator): void;
  First_1(): TDF_Label;
  First_2(): TDF_Label;
  Last_1(): TDF_Label;
  Last_2(): TDF_Label;
  Append_1(theItem: TDF_Label): TDF_Label;
  Append_3(theOther: TDF_LabelList): void;
  Prepend_1(theItem: TDF_Label): TDF_Label;
  Prepend_2(theOther: TDF_LabelList): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TDF_LabelList_1 extends TDF_LabelList {
    constructor();
  }

  export declare class TDF_LabelList_2 extends TDF_LabelList {
    constructor(theAllocator: TDF_HAllocator);
  }

  export declare class TDF_LabelList_3 extends TDF_LabelList {
    constructor(theOther: TDF_LabelList);
  }

export declare class Handle_TFunction_Driver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TFunction_Driver): void;
  get(): TFunction_Driver;
}

  export declare class Handle_TFunction_Driver_1 extends Handle_TFunction_Driver {
    constructor();
  }

  export declare class Handle_TFunction_Driver_2 extends Handle_TFunction_Driver {
    constructor(thePtr: TFunction_Driver);
  }

  export declare class Handle_TFunction_Driver_3 extends Handle_TFunction_Driver {
    constructor(theHandle: Handle_TFunction_Driver);
  }

  export declare class Handle_TFunction_Driver_4 extends Handle_TFunction_Driver {
    constructor(theHandle: Handle_TFunction_Driver);
  }

export declare class TDF_LabelSequence extends NCollection_BaseSequence {
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
  delNode(theNode: NCollection_SeqNode, theAl: TDF_HAllocator): void;
  Clear(theAllocator: TDF_HAllocator): void;
  Assign(theOther: TDF_LabelSequence): TDF_LabelSequence;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: TDF_Label): void;
  Append_2(theSeq: TDF_LabelSequence): void;
  Prepend_1(theItem: TDF_Label): void;
  Prepend_2(theSeq: TDF_LabelSequence): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: TDF_Label): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: TDF_Label): void;
  Split(theIndex: Standard_Integer, theSeq: TDF_LabelSequence): void;
  First(): TDF_Label;
  ChangeFirst(): TDF_Label;
  Last(): TDF_Label;
  ChangeLast(): TDF_Label;
  Value(theIndex: Standard_Integer): TDF_Label;
  ChangeValue(theIndex: Standard_Integer): TDF_Label;
  SetValue(theIndex: Standard_Integer, theItem: TDF_Label): void;
}

  export declare class TDF_LabelSequence_1 extends TDF_LabelSequence {
    constructor();
  }

  export declare class TDF_LabelSequence_2 extends TDF_LabelSequence {
    constructor(theAllocator: TDF_HAllocator);
  }

  export declare class TDF_LabelSequence_3 extends TDF_LabelSequence {
    constructor(theOther: TDF_LabelSequence);
  }

export declare class Handle_TDataStd_IntegerArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_IntegerArray): void;
  get(): TDataStd_IntegerArray;
}

  export declare class Handle_TDataStd_IntegerArray_1 extends Handle_TDataStd_IntegerArray {
    constructor();
  }

  export declare class Handle_TDataStd_IntegerArray_2 extends Handle_TDataStd_IntegerArray {
    constructor(thePtr: TDataStd_IntegerArray);
  }

  export declare class Handle_TDataStd_IntegerArray_3 extends Handle_TDataStd_IntegerArray {
    constructor(theHandle: Handle_TDataStd_IntegerArray);
  }

  export declare class Handle_TDataStd_IntegerArray_4 extends Handle_TDataStd_IntegerArray {
    constructor(theHandle: Handle_TDataStd_IntegerArray);
  }

export declare class Handle_TDataStd_RealArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_RealArray): void;
  get(): TDataStd_RealArray;
}

  export declare class Handle_TDataStd_RealArray_1 extends Handle_TDataStd_RealArray {
    constructor();
  }

  export declare class Handle_TDataStd_RealArray_2 extends Handle_TDataStd_RealArray {
    constructor(thePtr: TDataStd_RealArray);
  }

  export declare class Handle_TDataStd_RealArray_3 extends Handle_TDataStd_RealArray {
    constructor(theHandle: Handle_TDataStd_RealArray);
  }

  export declare class Handle_TDataStd_RealArray_4 extends Handle_TDataStd_RealArray {
    constructor(theHandle: Handle_TDataStd_RealArray);
  }

export declare class Handle_TDataStd_ByteArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_ByteArray): void;
  get(): TDataStd_ByteArray;
}

  export declare class Handle_TDataStd_ByteArray_1 extends Handle_TDataStd_ByteArray {
    constructor();
  }

  export declare class Handle_TDataStd_ByteArray_2 extends Handle_TDataStd_ByteArray {
    constructor(thePtr: TDataStd_ByteArray);
  }

  export declare class Handle_TDataStd_ByteArray_3 extends Handle_TDataStd_ByteArray {
    constructor(theHandle: Handle_TDataStd_ByteArray);
  }

  export declare class Handle_TDataStd_ByteArray_4 extends Handle_TDataStd_ByteArray {
    constructor(theHandle: Handle_TDataStd_ByteArray);
  }

export declare class Handle_TDataStd_ExtStringArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_ExtStringArray): void;
  get(): TDataStd_ExtStringArray;
}

  export declare class Handle_TDataStd_ExtStringArray_1 extends Handle_TDataStd_ExtStringArray {
    constructor();
  }

  export declare class Handle_TDataStd_ExtStringArray_2 extends Handle_TDataStd_ExtStringArray {
    constructor(thePtr: TDataStd_ExtStringArray);
  }

  export declare class Handle_TDataStd_ExtStringArray_3 extends Handle_TDataStd_ExtStringArray {
    constructor(theHandle: Handle_TDataStd_ExtStringArray);
  }

  export declare class Handle_TDataStd_ExtStringArray_4 extends Handle_TDataStd_ExtStringArray {
    constructor(theHandle: Handle_TDataStd_ExtStringArray);
  }

export declare class Handle_TDataStd_BooleanArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_BooleanArray): void;
  get(): TDataStd_BooleanArray;
}

  export declare class Handle_TDataStd_BooleanArray_1 extends Handle_TDataStd_BooleanArray {
    constructor();
  }

  export declare class Handle_TDataStd_BooleanArray_2 extends Handle_TDataStd_BooleanArray {
    constructor(thePtr: TDataStd_BooleanArray);
  }

  export declare class Handle_TDataStd_BooleanArray_3 extends Handle_TDataStd_BooleanArray {
    constructor(theHandle: Handle_TDataStd_BooleanArray);
  }

  export declare class Handle_TDataStd_BooleanArray_4 extends Handle_TDataStd_BooleanArray {
    constructor(theHandle: Handle_TDataStd_BooleanArray);
  }

export declare class TDataStd_LabelArray1 {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TDF_Label): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TDataStd_LabelArray1): TDataStd_LabelArray1;
  Move(theOther: TDataStd_LabelArray1): TDataStd_LabelArray1;
  First(): TDF_Label;
  ChangeFirst(): TDF_Label;
  Last(): TDF_Label;
  ChangeLast(): TDF_Label;
  Value(theIndex: Standard_Integer): TDF_Label;
  ChangeValue(theIndex: Standard_Integer): TDF_Label;
  SetValue(theIndex: Standard_Integer, theItem: TDF_Label): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TDataStd_LabelArray1_1 extends TDataStd_LabelArray1 {
    constructor();
  }

  export declare class TDataStd_LabelArray1_2 extends TDataStd_LabelArray1 {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TDataStd_LabelArray1_3 extends TDataStd_LabelArray1 {
    constructor(theOther: TDataStd_LabelArray1);
  }

  export declare class TDataStd_LabelArray1_4 extends TDataStd_LabelArray1 {
    constructor(theOther: TDataStd_LabelArray1);
  }

  export declare class TDataStd_LabelArray1_5 extends TDataStd_LabelArray1 {
    constructor(theBegin: TDF_Label, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TDataStd_HLabelArray1 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_HLabelArray1): void;
  get(): TDataStd_HLabelArray1;
}

  export declare class Handle_TDataStd_HLabelArray1_1 extends Handle_TDataStd_HLabelArray1 {
    constructor();
  }

  export declare class Handle_TDataStd_HLabelArray1_2 extends Handle_TDataStd_HLabelArray1 {
    constructor(thePtr: TDataStd_HLabelArray1);
  }

  export declare class Handle_TDataStd_HLabelArray1_3 extends Handle_TDataStd_HLabelArray1 {
    constructor(theHandle: Handle_TDataStd_HLabelArray1);
  }

  export declare class Handle_TDataStd_HLabelArray1_4 extends Handle_TDataStd_HLabelArray1 {
    constructor(theHandle: Handle_TDataStd_HLabelArray1);
  }

export declare class Handle_TDataStd_ReferenceArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_ReferenceArray): void;
  get(): TDataStd_ReferenceArray;
}

  export declare class Handle_TDataStd_ReferenceArray_1 extends Handle_TDataStd_ReferenceArray {
    constructor();
  }

  export declare class Handle_TDataStd_ReferenceArray_2 extends Handle_TDataStd_ReferenceArray {
    constructor(thePtr: TDataStd_ReferenceArray);
  }

  export declare class Handle_TDataStd_ReferenceArray_3 extends Handle_TDataStd_ReferenceArray {
    constructor(theHandle: Handle_TDataStd_ReferenceArray);
  }

  export declare class Handle_TDataStd_ReferenceArray_4 extends Handle_TDataStd_ReferenceArray {
    constructor(theHandle: Handle_TDataStd_ReferenceArray);
  }

export declare class Handle_TDataStd_IntegerList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_IntegerList): void;
  get(): TDataStd_IntegerList;
}

  export declare class Handle_TDataStd_IntegerList_1 extends Handle_TDataStd_IntegerList {
    constructor();
  }

  export declare class Handle_TDataStd_IntegerList_2 extends Handle_TDataStd_IntegerList {
    constructor(thePtr: TDataStd_IntegerList);
  }

  export declare class Handle_TDataStd_IntegerList_3 extends Handle_TDataStd_IntegerList {
    constructor(theHandle: Handle_TDataStd_IntegerList);
  }

  export declare class Handle_TDataStd_IntegerList_4 extends Handle_TDataStd_IntegerList {
    constructor(theHandle: Handle_TDataStd_IntegerList);
  }

export declare class Handle_TDataStd_RealList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_RealList): void;
  get(): TDataStd_RealList;
}

  export declare class Handle_TDataStd_RealList_1 extends Handle_TDataStd_RealList {
    constructor();
  }

  export declare class Handle_TDataStd_RealList_2 extends Handle_TDataStd_RealList {
    constructor(thePtr: TDataStd_RealList);
  }

  export declare class Handle_TDataStd_RealList_3 extends Handle_TDataStd_RealList {
    constructor(theHandle: Handle_TDataStd_RealList);
  }

  export declare class Handle_TDataStd_RealList_4 extends Handle_TDataStd_RealList {
    constructor(theHandle: Handle_TDataStd_RealList);
  }

export declare class TDataStd_ListOfExtendedString extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TDataStd_ListOfExtendedString): TDataStd_ListOfExtendedString;
  Clear(theAllocator: TDF_HAllocator): void;
  First_1(): TCollection_ExtendedString;
  First_2(): TCollection_ExtendedString;
  Last_1(): TCollection_ExtendedString;
  Last_2(): TCollection_ExtendedString;
  Append_1(theItem: TCollection_ExtendedString): TCollection_ExtendedString;
  Append_3(theOther: TDataStd_ListOfExtendedString): void;
  Prepend_1(theItem: TCollection_ExtendedString): TCollection_ExtendedString;
  Prepend_2(theOther: TDataStd_ListOfExtendedString): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TDataStd_ListOfExtendedString_1 extends TDataStd_ListOfExtendedString {
    constructor();
  }

  export declare class TDataStd_ListOfExtendedString_2 extends TDataStd_ListOfExtendedString {
    constructor(theAllocator: TDF_HAllocator);
  }

  export declare class TDataStd_ListOfExtendedString_3 extends TDataStd_ListOfExtendedString {
    constructor(theOther: TDataStd_ListOfExtendedString);
  }

export declare class Handle_TDataStd_ExtStringList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_ExtStringList): void;
  get(): TDataStd_ExtStringList;
}

  export declare class Handle_TDataStd_ExtStringList_1 extends Handle_TDataStd_ExtStringList {
    constructor();
  }

  export declare class Handle_TDataStd_ExtStringList_2 extends Handle_TDataStd_ExtStringList {
    constructor(thePtr: TDataStd_ExtStringList);
  }

  export declare class Handle_TDataStd_ExtStringList_3 extends Handle_TDataStd_ExtStringList {
    constructor(theHandle: Handle_TDataStd_ExtStringList);
  }

  export declare class Handle_TDataStd_ExtStringList_4 extends Handle_TDataStd_ExtStringList {
    constructor(theHandle: Handle_TDataStd_ExtStringList);
  }

export declare class TDataStd_ListOfByte extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TDataStd_ListOfByte): TDataStd_ListOfByte;
  Clear(theAllocator: TDF_HAllocator): void;
  First_1(): Standard_Byte;
  First_2(): Standard_Byte;
  Last_1(): Standard_Byte;
  Last_2(): Standard_Byte;
  Append_1(theItem: Standard_Byte): Standard_Byte;
  Append_3(theOther: TDataStd_ListOfByte): void;
  Prepend_1(theItem: Standard_Byte): Standard_Byte;
  Prepend_2(theOther: TDataStd_ListOfByte): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TDataStd_ListOfByte_1 extends TDataStd_ListOfByte {
    constructor();
  }

  export declare class TDataStd_ListOfByte_2 extends TDataStd_ListOfByte {
    constructor(theAllocator: TDF_HAllocator);
  }

  export declare class TDataStd_ListOfByte_3 extends TDataStd_ListOfByte {
    constructor(theOther: TDataStd_ListOfByte);
  }

export declare class Handle_TDataStd_BooleanList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_BooleanList): void;
  get(): TDataStd_BooleanList;
}

  export declare class Handle_TDataStd_BooleanList_1 extends Handle_TDataStd_BooleanList {
    constructor();
  }

  export declare class Handle_TDataStd_BooleanList_2 extends Handle_TDataStd_BooleanList {
    constructor(thePtr: TDataStd_BooleanList);
  }

  export declare class Handle_TDataStd_BooleanList_3 extends Handle_TDataStd_BooleanList {
    constructor(theHandle: Handle_TDataStd_BooleanList);
  }

  export declare class Handle_TDataStd_BooleanList_4 extends Handle_TDataStd_BooleanList {
    constructor(theHandle: Handle_TDataStd_BooleanList);
  }

export declare class Handle_TDataStd_ReferenceList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_ReferenceList): void;
  get(): TDataStd_ReferenceList;
}

  export declare class Handle_TDataStd_ReferenceList_1 extends Handle_TDataStd_ReferenceList {
    constructor();
  }

  export declare class Handle_TDataStd_ReferenceList_2 extends Handle_TDataStd_ReferenceList {
    constructor(thePtr: TDataStd_ReferenceList);
  }

  export declare class Handle_TDataStd_ReferenceList_3 extends Handle_TDataStd_ReferenceList {
    constructor(theHandle: Handle_TDataStd_ReferenceList);
  }

  export declare class Handle_TDataStd_ReferenceList_4 extends Handle_TDataStd_ReferenceList {
    constructor(theHandle: Handle_TDataStd_ReferenceList);
  }

export declare class Handle_TDataStd_IntPackedMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_IntPackedMap): void;
  get(): TDataStd_IntPackedMap;
}

  export declare class Handle_TDataStd_IntPackedMap_1 extends Handle_TDataStd_IntPackedMap {
    constructor();
  }

  export declare class Handle_TDataStd_IntPackedMap_2 extends Handle_TDataStd_IntPackedMap {
    constructor(thePtr: TDataStd_IntPackedMap);
  }

  export declare class Handle_TDataStd_IntPackedMap_3 extends Handle_TDataStd_IntPackedMap {
    constructor(theHandle: Handle_TDataStd_IntPackedMap);
  }

  export declare class Handle_TDataStd_IntPackedMap_4 extends Handle_TDataStd_IntPackedMap {
    constructor(theHandle: Handle_TDataStd_IntPackedMap);
  }

export declare class Handle_TDataStd_Expression {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Expression): void;
  get(): TDataStd_Expression;
}

  export declare class Handle_TDataStd_Expression_1 extends Handle_TDataStd_Expression {
    constructor();
  }

  export declare class Handle_TDataStd_Expression_2 extends Handle_TDataStd_Expression {
    constructor(thePtr: TDataStd_Expression);
  }

  export declare class Handle_TDataStd_Expression_3 extends Handle_TDataStd_Expression {
    constructor(theHandle: Handle_TDataStd_Expression);
  }

  export declare class Handle_TDataStd_Expression_4 extends Handle_TDataStd_Expression {
    constructor(theHandle: Handle_TDataStd_Expression);
  }

export declare class Handle_TDataStd_Relation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Relation): void;
  get(): TDataStd_Relation;
}

  export declare class Handle_TDataStd_Relation_1 extends Handle_TDataStd_Relation {
    constructor();
  }

  export declare class Handle_TDataStd_Relation_2 extends Handle_TDataStd_Relation {
    constructor(thePtr: TDataStd_Relation);
  }

  export declare class Handle_TDataStd_Relation_3 extends Handle_TDataStd_Relation {
    constructor(theHandle: Handle_TDataStd_Relation);
  }

  export declare class Handle_TDataStd_Relation_4 extends Handle_TDataStd_Relation {
    constructor(theHandle: Handle_TDataStd_Relation);
  }

export declare class Handle_TFunction_Function {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TFunction_Function): void;
  get(): TFunction_Function;
}

  export declare class Handle_TFunction_Function_1 extends Handle_TFunction_Function {
    constructor();
  }

  export declare class Handle_TFunction_Function_2 extends Handle_TFunction_Function {
    constructor(thePtr: TFunction_Function);
  }

  export declare class Handle_TFunction_Function_3 extends Handle_TFunction_Function {
    constructor(theHandle: Handle_TFunction_Function);
  }

  export declare class Handle_TFunction_Function_4 extends Handle_TFunction_Function {
    constructor(theHandle: Handle_TFunction_Function);
  }

export declare class TDataStd_DataMapOfStringReal extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDataStd_DataMapOfStringReal): void;
  Assign(theOther: TDataStd_DataMapOfStringReal): TDataStd_DataMapOfStringReal;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_ExtendedString, theItem: Standard_Real): Standard_Boolean;
  Bound(theKey: TCollection_ExtendedString, theItem: Standard_Real): Standard_Real;
  IsBound(theKey: TCollection_ExtendedString): Standard_Boolean;
  UnBind(theKey: TCollection_ExtendedString): Standard_Boolean;
  Seek(theKey: TCollection_ExtendedString): Standard_Real;
  Find_1(theKey: TCollection_ExtendedString): Standard_Real;
  Find_2(theKey: TCollection_ExtendedString, theValue: Standard_Real): Standard_Boolean;
  ChangeSeek(theKey: TCollection_ExtendedString): Standard_Real;
  ChangeFind(theKey: TCollection_ExtendedString): Standard_Real;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDataStd_DataMapOfStringReal_1 extends TDataStd_DataMapOfStringReal {
    constructor();
  }

  export declare class TDataStd_DataMapOfStringReal_2 extends TDataStd_DataMapOfStringReal {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDataStd_DataMapOfStringReal_3 extends TDataStd_DataMapOfStringReal {
    constructor(theOther: TDataStd_DataMapOfStringReal);
  }

export declare class TDataStd_DataMapOfStringString extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDataStd_DataMapOfStringString): void;
  Assign(theOther: TDataStd_DataMapOfStringString): TDataStd_DataMapOfStringString;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_ExtendedString, theItem: TCollection_ExtendedString): Standard_Boolean;
  Bound(theKey: TCollection_ExtendedString, theItem: TCollection_ExtendedString): TCollection_ExtendedString;
  IsBound(theKey: TCollection_ExtendedString): Standard_Boolean;
  UnBind(theKey: TCollection_ExtendedString): Standard_Boolean;
  Seek(theKey: TCollection_ExtendedString): TCollection_ExtendedString;
  Find_1(theKey: TCollection_ExtendedString): TCollection_ExtendedString;
  Find_2(theKey: TCollection_ExtendedString, theValue: TCollection_ExtendedString): Standard_Boolean;
  ChangeSeek(theKey: TCollection_ExtendedString): TCollection_ExtendedString;
  ChangeFind(theKey: TCollection_ExtendedString): TCollection_ExtendedString;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDataStd_DataMapOfStringString_1 extends TDataStd_DataMapOfStringString {
    constructor();
  }

  export declare class TDataStd_DataMapOfStringString_2 extends TDataStd_DataMapOfStringString {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDataStd_DataMapOfStringString_3 extends TDataStd_DataMapOfStringString {
    constructor(theOther: TDataStd_DataMapOfStringString);
  }

export declare class TDataStd_DataMapOfStringByte extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDataStd_DataMapOfStringByte): void;
  Assign(theOther: TDataStd_DataMapOfStringByte): TDataStd_DataMapOfStringByte;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TCollection_ExtendedString, theItem: Standard_Byte): Standard_Boolean;
  Bound(theKey: TCollection_ExtendedString, theItem: Standard_Byte): Standard_Byte;
  IsBound(theKey: TCollection_ExtendedString): Standard_Boolean;
  UnBind(theKey: TCollection_ExtendedString): Standard_Boolean;
  Seek(theKey: TCollection_ExtendedString): Standard_Byte;
  Find_1(theKey: TCollection_ExtendedString): Standard_Byte;
  Find_2(theKey: TCollection_ExtendedString, theValue: Standard_Byte): Standard_Boolean;
  ChangeSeek(theKey: TCollection_ExtendedString): Standard_Byte;
  ChangeFind(theKey: TCollection_ExtendedString): Standard_Byte;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDataStd_DataMapOfStringByte_1 extends TDataStd_DataMapOfStringByte {
    constructor();
  }

  export declare class TDataStd_DataMapOfStringByte_2 extends TDataStd_DataMapOfStringByte {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDataStd_DataMapOfStringByte_3 extends TDataStd_DataMapOfStringByte {
    constructor(theOther: TDataStd_DataMapOfStringByte);
  }

export declare class Handle_TDataStd_NamedData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_NamedData): void;
  get(): TDataStd_NamedData;
}

  export declare class Handle_TDataStd_NamedData_1 extends Handle_TDataStd_NamedData {
    constructor();
  }

  export declare class Handle_TDataStd_NamedData_2 extends Handle_TDataStd_NamedData {
    constructor(thePtr: TDataStd_NamedData);
  }

  export declare class Handle_TDataStd_NamedData_3 extends Handle_TDataStd_NamedData {
    constructor(theHandle: Handle_TDataStd_NamedData);
  }

  export declare class Handle_TDataStd_NamedData_4 extends Handle_TDataStd_NamedData {
    constructor(theHandle: Handle_TDataStd_NamedData);
  }

export declare class Handle_TDataStd_Real {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Real): void;
  get(): TDataStd_Real;
}

  export declare class Handle_TDataStd_Real_1 extends Handle_TDataStd_Real {
    constructor();
  }

  export declare class Handle_TDataStd_Real_2 extends Handle_TDataStd_Real {
    constructor(thePtr: TDataStd_Real);
  }

  export declare class Handle_TDataStd_Real_3 extends Handle_TDataStd_Real {
    constructor(theHandle: Handle_TDataStd_Real);
  }

  export declare class Handle_TDataStd_Real_4 extends Handle_TDataStd_Real {
    constructor(theHandle: Handle_TDataStd_Real);
  }

export declare class Handle_TDataStd_TreeNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_TreeNode): void;
  get(): TDataStd_TreeNode;
}

  export declare class Handle_TDataStd_TreeNode_1 extends Handle_TDataStd_TreeNode {
    constructor();
  }

  export declare class Handle_TDataStd_TreeNode_2 extends Handle_TDataStd_TreeNode {
    constructor(thePtr: TDataStd_TreeNode);
  }

  export declare class Handle_TDataStd_TreeNode_3 extends Handle_TDataStd_TreeNode {
    constructor(theHandle: Handle_TDataStd_TreeNode);
  }

  export declare class Handle_TDataStd_TreeNode_4 extends Handle_TDataStd_TreeNode {
    constructor(theHandle: Handle_TDataStd_TreeNode);
  }

export declare class Handle_TDataStd_Integer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Integer): void;
  get(): TDataStd_Integer;
}

  export declare class Handle_TDataStd_Integer_1 extends Handle_TDataStd_Integer {
    constructor();
  }

  export declare class Handle_TDataStd_Integer_2 extends Handle_TDataStd_Integer {
    constructor(thePtr: TDataStd_Integer);
  }

  export declare class Handle_TDataStd_Integer_3 extends Handle_TDataStd_Integer {
    constructor(theHandle: Handle_TDataStd_Integer);
  }

  export declare class Handle_TDataStd_Integer_4 extends Handle_TDataStd_Integer {
    constructor(theHandle: Handle_TDataStd_Integer);
  }

export declare class Handle_TDF_Reference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_Reference): void;
  get(): TDF_Reference;
}

  export declare class Handle_TDF_Reference_1 extends Handle_TDF_Reference {
    constructor();
  }

  export declare class Handle_TDF_Reference_2 extends Handle_TDF_Reference {
    constructor(thePtr: TDF_Reference);
  }

  export declare class Handle_TDF_Reference_3 extends Handle_TDF_Reference {
    constructor(theHandle: Handle_TDF_Reference);
  }

  export declare class Handle_TDF_Reference_4 extends Handle_TDF_Reference {
    constructor(theHandle: Handle_TDF_Reference);
  }

export declare class Handle_TDataStd_UAttribute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_UAttribute): void;
  get(): TDataStd_UAttribute;
}

  export declare class Handle_TDataStd_UAttribute_1 extends Handle_TDataStd_UAttribute {
    constructor();
  }

  export declare class Handle_TDataStd_UAttribute_2 extends Handle_TDataStd_UAttribute {
    constructor(thePtr: TDataStd_UAttribute);
  }

  export declare class Handle_TDataStd_UAttribute_3 extends Handle_TDataStd_UAttribute {
    constructor(theHandle: Handle_TDataStd_UAttribute);
  }

  export declare class Handle_TDataStd_UAttribute_4 extends Handle_TDataStd_UAttribute {
    constructor(theHandle: Handle_TDataStd_UAttribute);
  }

export declare class Handle_TDataStd_GenericExtString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_GenericExtString): void;
  get(): TDataStd_GenericExtString;
}

  export declare class Handle_TDataStd_GenericExtString_1 extends Handle_TDataStd_GenericExtString {
    constructor();
  }

  export declare class Handle_TDataStd_GenericExtString_2 extends Handle_TDataStd_GenericExtString {
    constructor(thePtr: TDataStd_GenericExtString);
  }

  export declare class Handle_TDataStd_GenericExtString_3 extends Handle_TDataStd_GenericExtString {
    constructor(theHandle: Handle_TDataStd_GenericExtString);
  }

  export declare class Handle_TDataStd_GenericExtString_4 extends Handle_TDataStd_GenericExtString {
    constructor(theHandle: Handle_TDataStd_GenericExtString);
  }

export declare class Handle_TDataStd_Name {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Name): void;
  get(): TDataStd_Name;
}

  export declare class Handle_TDataStd_Name_1 extends Handle_TDataStd_Name {
    constructor();
  }

  export declare class Handle_TDataStd_Name_2 extends Handle_TDataStd_Name {
    constructor(thePtr: TDataStd_Name);
  }

  export declare class Handle_TDataStd_Name_3 extends Handle_TDataStd_Name {
    constructor(theHandle: Handle_TDataStd_Name);
  }

  export declare class Handle_TDataStd_Name_4 extends Handle_TDataStd_Name {
    constructor(theHandle: Handle_TDataStd_Name);
  }

export declare class Handle_TDataStd_Comment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Comment): void;
  get(): TDataStd_Comment;
}

  export declare class Handle_TDataStd_Comment_1 extends Handle_TDataStd_Comment {
    constructor();
  }

  export declare class Handle_TDataStd_Comment_2 extends Handle_TDataStd_Comment {
    constructor(thePtr: TDataStd_Comment);
  }

  export declare class Handle_TDataStd_Comment_3 extends Handle_TDataStd_Comment {
    constructor(theHandle: Handle_TDataStd_Comment);
  }

  export declare class Handle_TDataStd_Comment_4 extends Handle_TDataStd_Comment {
    constructor(theHandle: Handle_TDataStd_Comment);
  }

export declare class Handle_TDataStd_AsciiString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_AsciiString): void;
  get(): TDataStd_AsciiString;
}

  export declare class Handle_TDataStd_AsciiString_1 extends Handle_TDataStd_AsciiString {
    constructor();
  }

  export declare class Handle_TDataStd_AsciiString_2 extends Handle_TDataStd_AsciiString {
    constructor(thePtr: TDataStd_AsciiString);
  }

  export declare class Handle_TDataStd_AsciiString_3 extends Handle_TDataStd_AsciiString {
    constructor(theHandle: Handle_TDataStd_AsciiString);
  }

  export declare class Handle_TDataStd_AsciiString_4 extends Handle_TDataStd_AsciiString {
    constructor(theHandle: Handle_TDataStd_AsciiString);
  }

export declare class Handle_TDataStd_Variable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Variable): void;
  get(): TDataStd_Variable;
}

  export declare class Handle_TDataStd_Variable_1 extends Handle_TDataStd_Variable {
    constructor();
  }

  export declare class Handle_TDataStd_Variable_2 extends Handle_TDataStd_Variable {
    constructor(thePtr: TDataStd_Variable);
  }

  export declare class Handle_TDataStd_Variable_3 extends Handle_TDataStd_Variable {
    constructor(theHandle: Handle_TDataStd_Variable);
  }

  export declare class Handle_TDataStd_Variable_4 extends Handle_TDataStd_Variable {
    constructor(theHandle: Handle_TDataStd_Variable);
  }

export declare class Handle_TDataStd_GenericEmpty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_GenericEmpty): void;
  get(): TDataStd_GenericEmpty;
}

  export declare class Handle_TDataStd_GenericEmpty_1 extends Handle_TDataStd_GenericEmpty {
    constructor();
  }

  export declare class Handle_TDataStd_GenericEmpty_2 extends Handle_TDataStd_GenericEmpty {
    constructor(thePtr: TDataStd_GenericEmpty);
  }

  export declare class Handle_TDataStd_GenericEmpty_3 extends Handle_TDataStd_GenericEmpty {
    constructor(theHandle: Handle_TDataStd_GenericEmpty);
  }

  export declare class Handle_TDataStd_GenericEmpty_4 extends Handle_TDataStd_GenericEmpty {
    constructor(theHandle: Handle_TDataStd_GenericEmpty);
  }

export declare class Handle_TDataStd_Directory {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Directory): void;
  get(): TDataStd_Directory;
}

  export declare class Handle_TDataStd_Directory_1 extends Handle_TDataStd_Directory {
    constructor();
  }

  export declare class Handle_TDataStd_Directory_2 extends Handle_TDataStd_Directory {
    constructor(thePtr: TDataStd_Directory);
  }

  export declare class Handle_TDataStd_Directory_3 extends Handle_TDataStd_Directory {
    constructor(theHandle: Handle_TDataStd_Directory);
  }

  export declare class Handle_TDataStd_Directory_4 extends Handle_TDataStd_Directory {
    constructor(theHandle: Handle_TDataStd_Directory);
  }

export declare class Handle_TDataStd_Tick {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Tick): void;
  get(): TDataStd_Tick;
}

  export declare class Handle_TDataStd_Tick_1 extends Handle_TDataStd_Tick {
    constructor();
  }

  export declare class Handle_TDataStd_Tick_2 extends Handle_TDataStd_Tick {
    constructor(thePtr: TDataStd_Tick);
  }

  export declare class Handle_TDataStd_Tick_3 extends Handle_TDataStd_Tick {
    constructor(theHandle: Handle_TDataStd_Tick);
  }

  export declare class Handle_TDataStd_Tick_4 extends Handle_TDataStd_Tick {
    constructor(theHandle: Handle_TDataStd_Tick);
  }

export declare class Handle_TDataStd_NoteBook {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_NoteBook): void;
  get(): TDataStd_NoteBook;
}

  export declare class Handle_TDataStd_NoteBook_1 extends Handle_TDataStd_NoteBook {
    constructor();
  }

  export declare class Handle_TDataStd_NoteBook_2 extends Handle_TDataStd_NoteBook {
    constructor(thePtr: TDataStd_NoteBook);
  }

  export declare class Handle_TDataStd_NoteBook_3 extends Handle_TDataStd_NoteBook {
    constructor(theHandle: Handle_TDataStd_NoteBook);
  }

  export declare class Handle_TDataStd_NoteBook_4 extends Handle_TDataStd_NoteBook {
    constructor(theHandle: Handle_TDataStd_NoteBook);
  }

export declare class Handle_TDocStd_XLink {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_XLink): void;
  get(): TDocStd_XLink;
}

  export declare class Handle_TDocStd_XLink_1 extends Handle_TDocStd_XLink {
    constructor();
  }

  export declare class Handle_TDocStd_XLink_2 extends Handle_TDocStd_XLink {
    constructor(thePtr: TDocStd_XLink);
  }

  export declare class Handle_TDocStd_XLink_3 extends Handle_TDocStd_XLink {
    constructor(theHandle: Handle_TDocStd_XLink);
  }

  export declare class Handle_TDocStd_XLink_4 extends Handle_TDocStd_XLink {
    constructor(theHandle: Handle_TDocStd_XLink);
  }

export declare class TDF_LabelMap extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDF_LabelMap): void;
  Assign(theOther: TDF_LabelMap): TDF_LabelMap;
  ReSize(N: Standard_Integer): void;
  Add(K: TDF_Label): Standard_Boolean;
  Added(K: TDF_Label): TDF_Label;
  Contains_1(K: TDF_Label): Standard_Boolean;
  Remove(K: TDF_Label): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TDF_LabelMap): Standard_Boolean;
  Contains_2(theOther: TDF_LabelMap): Standard_Boolean;
  Union(theLeft: TDF_LabelMap, theRight: TDF_LabelMap): void;
  Unite(theOther: TDF_LabelMap): Standard_Boolean;
  HasIntersection(theMap: TDF_LabelMap): Standard_Boolean;
  Intersection(theLeft: TDF_LabelMap, theRight: TDF_LabelMap): void;
  Intersect(theOther: TDF_LabelMap): Standard_Boolean;
  Subtraction(theLeft: TDF_LabelMap, theRight: TDF_LabelMap): void;
  Subtract(theOther: TDF_LabelMap): Standard_Boolean;
  Difference(theLeft: TDF_LabelMap, theRight: TDF_LabelMap): void;
  Differ(theOther: TDF_LabelMap): Standard_Boolean;
}

  export declare class TDF_LabelMap_1 extends TDF_LabelMap {
    constructor();
  }

  export declare class TDF_LabelMap_2 extends TDF_LabelMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDF_LabelMap_3 extends TDF_LabelMap {
    constructor(theOther: TDF_LabelMap);
  }

export declare class Handle_TDF_AttributeDelta {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_AttributeDelta): void;
  get(): TDF_AttributeDelta;
}

  export declare class Handle_TDF_AttributeDelta_1 extends Handle_TDF_AttributeDelta {
    constructor();
  }

  export declare class Handle_TDF_AttributeDelta_2 extends Handle_TDF_AttributeDelta {
    constructor(thePtr: TDF_AttributeDelta);
  }

  export declare class Handle_TDF_AttributeDelta_3 extends Handle_TDF_AttributeDelta {
    constructor(theHandle: Handle_TDF_AttributeDelta);
  }

  export declare class Handle_TDF_AttributeDelta_4 extends Handle_TDF_AttributeDelta {
    constructor(theHandle: Handle_TDF_AttributeDelta);
  }

export declare class TDF_IDMap extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDF_IDMap): void;
  Assign(theOther: TDF_IDMap): TDF_IDMap;
  ReSize(N: Standard_Integer): void;
  Add(K: Standard_GUID): Standard_Boolean;
  Added(K: Standard_GUID): Standard_GUID;
  Contains_1(K: Standard_GUID): Standard_Boolean;
  Remove(K: Standard_GUID): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
  IsEqual(theOther: TDF_IDMap): Standard_Boolean;
  Contains_2(theOther: TDF_IDMap): Standard_Boolean;
  Union(theLeft: TDF_IDMap, theRight: TDF_IDMap): void;
  Unite(theOther: TDF_IDMap): Standard_Boolean;
  HasIntersection(theMap: TDF_IDMap): Standard_Boolean;
  Intersection(theLeft: TDF_IDMap, theRight: TDF_IDMap): void;
  Intersect(theOther: TDF_IDMap): Standard_Boolean;
  Subtraction(theLeft: TDF_IDMap, theRight: TDF_IDMap): void;
  Subtract(theOther: TDF_IDMap): Standard_Boolean;
  Difference(theLeft: TDF_IDMap, theRight: TDF_IDMap): void;
  Differ(theOther: TDF_IDMap): Standard_Boolean;
}

  export declare class TDF_IDMap_1 extends TDF_IDMap {
    constructor();
  }

  export declare class TDF_IDMap_2 extends TDF_IDMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDF_IDMap_3 extends TDF_IDMap {
    constructor(theOther: TDF_IDMap);
  }

export declare class TDF_IDList extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TDF_IDList): TDF_IDList;
  Clear(theAllocator: TDF_HAllocator): void;
  First_1(): Standard_GUID;
  First_2(): Standard_GUID;
  Last_1(): Standard_GUID;
  Last_2(): Standard_GUID;
  Append_1(theItem: Standard_GUID): Standard_GUID;
  Append_3(theOther: TDF_IDList): void;
  Prepend_1(theItem: Standard_GUID): Standard_GUID;
  Prepend_2(theOther: TDF_IDList): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TDF_IDList_1 extends TDF_IDList {
    constructor();
  }

  export declare class TDF_IDList_2 extends TDF_IDList {
    constructor(theAllocator: TDF_HAllocator);
  }

  export declare class TDF_IDList_3 extends TDF_IDList {
    constructor(theOther: TDF_IDList);
  }

export declare class TDF_LabelDataMap extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDF_LabelDataMap): void;
  Assign(theOther: TDF_LabelDataMap): TDF_LabelDataMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TDF_Label, theItem: TDF_Label): Standard_Boolean;
  Bound(theKey: TDF_Label, theItem: TDF_Label): TDF_Label;
  IsBound(theKey: TDF_Label): Standard_Boolean;
  UnBind(theKey: TDF_Label): Standard_Boolean;
  Seek(theKey: TDF_Label): TDF_Label;
  Find_1(theKey: TDF_Label): TDF_Label;
  Find_2(theKey: TDF_Label, theValue: TDF_Label): Standard_Boolean;
  ChangeSeek(theKey: TDF_Label): TDF_Label;
  ChangeFind(theKey: TDF_Label): TDF_Label;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDF_LabelDataMap_1 extends TDF_LabelDataMap {
    constructor();
  }

  export declare class TDF_LabelDataMap_2 extends TDF_LabelDataMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDF_LabelDataMap_3 extends TDF_LabelDataMap {
    constructor(theOther: TDF_LabelDataMap);
  }

export declare class TDF_LabelIntegerMap extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDF_LabelIntegerMap): void;
  Assign(theOther: TDF_LabelIntegerMap): TDF_LabelIntegerMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TDF_Label, theItem: Standard_Integer): Standard_Boolean;
  Bound(theKey: TDF_Label, theItem: Standard_Integer): Standard_Integer;
  IsBound(theKey: TDF_Label): Standard_Boolean;
  UnBind(theKey: TDF_Label): Standard_Boolean;
  Seek(theKey: TDF_Label): Standard_Integer;
  Find_1(theKey: TDF_Label): Standard_Integer;
  Find_2(theKey: TDF_Label, theValue: Standard_Integer): Standard_Boolean;
  ChangeSeek(theKey: TDF_Label): Standard_Integer;
  ChangeFind(theKey: TDF_Label): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDF_LabelIntegerMap_1 extends TDF_LabelIntegerMap {
    constructor();
  }

  export declare class TDF_LabelIntegerMap_2 extends TDF_LabelIntegerMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDF_LabelIntegerMap_3 extends TDF_LabelIntegerMap {
    constructor(theOther: TDF_LabelIntegerMap);
  }

export declare class Handle_TDF_DataSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DataSet): void;
  get(): TDF_DataSet;
}

  export declare class Handle_TDF_DataSet_1 extends Handle_TDF_DataSet {
    constructor();
  }

  export declare class Handle_TDF_DataSet_2 extends Handle_TDF_DataSet {
    constructor(thePtr: TDF_DataSet);
  }

  export declare class Handle_TDF_DataSet_3 extends Handle_TDF_DataSet {
    constructor(theHandle: Handle_TDF_DataSet);
  }

  export declare class Handle_TDF_DataSet_4 extends Handle_TDF_DataSet {
    constructor(theHandle: Handle_TDF_DataSet);
  }

export declare class Handle_TDF_DeltaOnModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnModification): void;
  get(): TDF_DeltaOnModification;
}

  export declare class Handle_TDF_DeltaOnModification_1 extends Handle_TDF_DeltaOnModification {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnModification_2 extends Handle_TDF_DeltaOnModification {
    constructor(thePtr: TDF_DeltaOnModification);
  }

  export declare class Handle_TDF_DeltaOnModification_3 extends Handle_TDF_DeltaOnModification {
    constructor(theHandle: Handle_TDF_DeltaOnModification);
  }

  export declare class Handle_TDF_DeltaOnModification_4 extends Handle_TDF_DeltaOnModification {
    constructor(theHandle: Handle_TDF_DeltaOnModification);
  }

export declare class Handle_TDF_DefaultDeltaOnModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DefaultDeltaOnModification): void;
  get(): TDF_DefaultDeltaOnModification;
}

  export declare class Handle_TDF_DefaultDeltaOnModification_1 extends Handle_TDF_DefaultDeltaOnModification {
    constructor();
  }

  export declare class Handle_TDF_DefaultDeltaOnModification_2 extends Handle_TDF_DefaultDeltaOnModification {
    constructor(thePtr: TDF_DefaultDeltaOnModification);
  }

  export declare class Handle_TDF_DefaultDeltaOnModification_3 extends Handle_TDF_DefaultDeltaOnModification {
    constructor(theHandle: Handle_TDF_DefaultDeltaOnModification);
  }

  export declare class Handle_TDF_DefaultDeltaOnModification_4 extends Handle_TDF_DefaultDeltaOnModification {
    constructor(theHandle: Handle_TDF_DefaultDeltaOnModification);
  }

export declare class Handle_TDF_DeltaOnRemoval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnRemoval): void;
  get(): TDF_DeltaOnRemoval;
}

  export declare class Handle_TDF_DeltaOnRemoval_1 extends Handle_TDF_DeltaOnRemoval {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnRemoval_2 extends Handle_TDF_DeltaOnRemoval {
    constructor(thePtr: TDF_DeltaOnRemoval);
  }

  export declare class Handle_TDF_DeltaOnRemoval_3 extends Handle_TDF_DeltaOnRemoval {
    constructor(theHandle: Handle_TDF_DeltaOnRemoval);
  }

  export declare class Handle_TDF_DeltaOnRemoval_4 extends Handle_TDF_DeltaOnRemoval {
    constructor(theHandle: Handle_TDF_DeltaOnRemoval);
  }

export declare class Handle_TDF_DefaultDeltaOnRemoval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DefaultDeltaOnRemoval): void;
  get(): TDF_DefaultDeltaOnRemoval;
}

  export declare class Handle_TDF_DefaultDeltaOnRemoval_1 extends Handle_TDF_DefaultDeltaOnRemoval {
    constructor();
  }

  export declare class Handle_TDF_DefaultDeltaOnRemoval_2 extends Handle_TDF_DefaultDeltaOnRemoval {
    constructor(thePtr: TDF_DefaultDeltaOnRemoval);
  }

  export declare class Handle_TDF_DefaultDeltaOnRemoval_3 extends Handle_TDF_DefaultDeltaOnRemoval {
    constructor(theHandle: Handle_TDF_DefaultDeltaOnRemoval);
  }

  export declare class Handle_TDF_DefaultDeltaOnRemoval_4 extends Handle_TDF_DefaultDeltaOnRemoval {
    constructor(theHandle: Handle_TDF_DefaultDeltaOnRemoval);
  }

export declare class Handle_TDF_Delta {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_Delta): void;
  get(): TDF_Delta;
}

  export declare class Handle_TDF_Delta_1 extends Handle_TDF_Delta {
    constructor();
  }

  export declare class Handle_TDF_Delta_2 extends Handle_TDF_Delta {
    constructor(thePtr: TDF_Delta);
  }

  export declare class Handle_TDF_Delta_3 extends Handle_TDF_Delta {
    constructor(theHandle: Handle_TDF_Delta);
  }

  export declare class Handle_TDF_Delta_4 extends Handle_TDF_Delta {
    constructor(theHandle: Handle_TDF_Delta);
  }

export declare class Handle_TDF_DeltaOnAddition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnAddition): void;
  get(): TDF_DeltaOnAddition;
}

  export declare class Handle_TDF_DeltaOnAddition_1 extends Handle_TDF_DeltaOnAddition {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnAddition_2 extends Handle_TDF_DeltaOnAddition {
    constructor(thePtr: TDF_DeltaOnAddition);
  }

  export declare class Handle_TDF_DeltaOnAddition_3 extends Handle_TDF_DeltaOnAddition {
    constructor(theHandle: Handle_TDF_DeltaOnAddition);
  }

  export declare class Handle_TDF_DeltaOnAddition_4 extends Handle_TDF_DeltaOnAddition {
    constructor(theHandle: Handle_TDF_DeltaOnAddition);
  }

export declare class Handle_TDF_DeltaOnForget {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnForget): void;
  get(): TDF_DeltaOnForget;
}

  export declare class Handle_TDF_DeltaOnForget_1 extends Handle_TDF_DeltaOnForget {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnForget_2 extends Handle_TDF_DeltaOnForget {
    constructor(thePtr: TDF_DeltaOnForget);
  }

  export declare class Handle_TDF_DeltaOnForget_3 extends Handle_TDF_DeltaOnForget {
    constructor(theHandle: Handle_TDF_DeltaOnForget);
  }

  export declare class Handle_TDF_DeltaOnForget_4 extends Handle_TDF_DeltaOnForget {
    constructor(theHandle: Handle_TDF_DeltaOnForget);
  }

export declare class Handle_TDF_DeltaOnResume {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_DeltaOnResume): void;
  get(): TDF_DeltaOnResume;
}

  export declare class Handle_TDF_DeltaOnResume_1 extends Handle_TDF_DeltaOnResume {
    constructor();
  }

  export declare class Handle_TDF_DeltaOnResume_2 extends Handle_TDF_DeltaOnResume {
    constructor(thePtr: TDF_DeltaOnResume);
  }

  export declare class Handle_TDF_DeltaOnResume_3 extends Handle_TDF_DeltaOnResume {
    constructor(theHandle: Handle_TDF_DeltaOnResume);
  }

  export declare class Handle_TDF_DeltaOnResume_4 extends Handle_TDF_DeltaOnResume {
    constructor(theHandle: Handle_TDF_DeltaOnResume);
  }

export declare class TDF_GUIDProgIDMap extends NCollection_BaseMap {
  Exchange(theOther: TDF_GUIDProgIDMap): void;
  Assign(theOther: TDF_GUIDProgIDMap): TDF_GUIDProgIDMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey1: Standard_GUID, theKey2: TCollection_ExtendedString): void;
  AreBound(theKey1: Standard_GUID, theKey2: TCollection_ExtendedString): Standard_Boolean;
  IsBound1(theKey1: Standard_GUID): Standard_Boolean;
  IsBound2(theKey2: TCollection_ExtendedString): Standard_Boolean;
  UnBind1(theKey1: Standard_GUID): Standard_Boolean;
  UnBind2(theKey2: TCollection_ExtendedString): Standard_Boolean;
  Find1_1(theKey1: Standard_GUID): TCollection_ExtendedString;
  Find1_2(theKey1: Standard_GUID, theKey2: TCollection_ExtendedString): Standard_Boolean;
  Seek1(theKey1: Standard_GUID): TCollection_ExtendedString;
  Find2_1(theKey2: TCollection_ExtendedString): Standard_GUID;
  Find2_2(theKey2: TCollection_ExtendedString, theKey1: Standard_GUID): Standard_Boolean;
  Seek2(theKey2: TCollection_ExtendedString): Standard_GUID;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDF_GUIDProgIDMap_1 extends TDF_GUIDProgIDMap {
    constructor();
  }

  export declare class TDF_GUIDProgIDMap_2 extends TDF_GUIDProgIDMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDF_GUIDProgIDMap_3 extends TDF_GUIDProgIDMap {
    constructor(theOther: TDF_GUIDProgIDMap);
  }

export declare class TDF_LabelDoubleMap extends NCollection_BaseMap {
  Exchange(theOther: TDF_LabelDoubleMap): void;
  Assign(theOther: TDF_LabelDoubleMap): TDF_LabelDoubleMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey1: TDF_Label, theKey2: TDF_Label): void;
  AreBound(theKey1: TDF_Label, theKey2: TDF_Label): Standard_Boolean;
  IsBound1(theKey1: TDF_Label): Standard_Boolean;
  IsBound2(theKey2: TDF_Label): Standard_Boolean;
  UnBind1(theKey1: TDF_Label): Standard_Boolean;
  UnBind2(theKey2: TDF_Label): Standard_Boolean;
  Find1_1(theKey1: TDF_Label): TDF_Label;
  Find1_2(theKey1: TDF_Label, theKey2: TDF_Label): Standard_Boolean;
  Seek1(theKey1: TDF_Label): TDF_Label;
  Find2_1(theKey2: TDF_Label): TDF_Label;
  Find2_2(theKey2: TDF_Label, theKey1: TDF_Label): Standard_Boolean;
  Seek2(theKey2: TDF_Label): TDF_Label;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDF_LabelDoubleMap_1 extends TDF_LabelDoubleMap {
    constructor();
  }

  export declare class TDF_LabelDoubleMap_2 extends TDF_LabelDoubleMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDF_LabelDoubleMap_3 extends TDF_LabelDoubleMap {
    constructor(theOther: TDF_LabelDoubleMap);
  }

export declare class Handle_TDF_HAttributeArray1 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_HAttributeArray1): void;
  get(): TDF_HAttributeArray1;
}

  export declare class Handle_TDF_HAttributeArray1_1 extends Handle_TDF_HAttributeArray1 {
    constructor();
  }

  export declare class Handle_TDF_HAttributeArray1_2 extends Handle_TDF_HAttributeArray1 {
    constructor(thePtr: TDF_HAttributeArray1);
  }

  export declare class Handle_TDF_HAttributeArray1_3 extends Handle_TDF_HAttributeArray1 {
    constructor(theHandle: Handle_TDF_HAttributeArray1);
  }

  export declare class Handle_TDF_HAttributeArray1_4 extends Handle_TDF_HAttributeArray1 {
    constructor(theHandle: Handle_TDF_HAttributeArray1);
  }

export declare class TDF_LabelIndexedMap extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDF_LabelIndexedMap): void;
  Assign(theOther: TDF_LabelIndexedMap): TDF_LabelIndexedMap;
  ReSize(theExtent: Standard_Integer): void;
  Add(theKey1: TDF_Label): Standard_Integer;
  Contains(theKey1: TDF_Label): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TDF_Label): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TDF_Label): Standard_Boolean;
  FindKey(theIndex: Standard_Integer): TDF_Label;
  FindIndex(theKey1: TDF_Label): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDF_LabelIndexedMap_1 extends TDF_LabelIndexedMap {
    constructor();
  }

  export declare class TDF_LabelIndexedMap_2 extends TDF_LabelIndexedMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDF_LabelIndexedMap_3 extends TDF_LabelIndexedMap {
    constructor(theOther: TDF_LabelIndexedMap);
  }

export declare class Handle_TDF_RelocationTable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_RelocationTable): void;
  get(): TDF_RelocationTable;
}

  export declare class Handle_TDF_RelocationTable_1 extends Handle_TDF_RelocationTable {
    constructor();
  }

  export declare class Handle_TDF_RelocationTable_2 extends Handle_TDF_RelocationTable {
    constructor(thePtr: TDF_RelocationTable);
  }

  export declare class Handle_TDF_RelocationTable_3 extends Handle_TDF_RelocationTable {
    constructor(theHandle: Handle_TDF_RelocationTable);
  }

  export declare class Handle_TDF_RelocationTable_4 extends Handle_TDF_RelocationTable {
    constructor(theHandle: Handle_TDF_RelocationTable);
  }

export declare class Handle_TDataStd_Current {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_Current): void;
  get(): TDataStd_Current;
}

  export declare class Handle_TDataStd_Current_1 extends Handle_TDataStd_Current {
    constructor();
  }

  export declare class Handle_TDataStd_Current_2 extends Handle_TDataStd_Current {
    constructor(thePtr: TDataStd_Current);
  }

  export declare class Handle_TDataStd_Current_3 extends Handle_TDataStd_Current {
    constructor(theHandle: Handle_TDataStd_Current);
  }

  export declare class Handle_TDataStd_Current_4 extends Handle_TDataStd_Current {
    constructor(theHandle: Handle_TDataStd_Current);
  }

export declare class Handle_TDataStd_DeltaOnModificationOfByteArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_DeltaOnModificationOfByteArray): void;
  get(): TDataStd_DeltaOnModificationOfByteArray;
}

  export declare class Handle_TDataStd_DeltaOnModificationOfByteArray_1 extends Handle_TDataStd_DeltaOnModificationOfByteArray {
    constructor();
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfByteArray_2 extends Handle_TDataStd_DeltaOnModificationOfByteArray {
    constructor(thePtr: TDataStd_DeltaOnModificationOfByteArray);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfByteArray_3 extends Handle_TDataStd_DeltaOnModificationOfByteArray {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfByteArray);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfByteArray_4 extends Handle_TDataStd_DeltaOnModificationOfByteArray {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfByteArray);
  }

export declare class Handle_TDataStd_DeltaOnModificationOfExtStringArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_DeltaOnModificationOfExtStringArray): void;
  get(): TDataStd_DeltaOnModificationOfExtStringArray;
}

  export declare class Handle_TDataStd_DeltaOnModificationOfExtStringArray_1 extends Handle_TDataStd_DeltaOnModificationOfExtStringArray {
    constructor();
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfExtStringArray_2 extends Handle_TDataStd_DeltaOnModificationOfExtStringArray {
    constructor(thePtr: TDataStd_DeltaOnModificationOfExtStringArray);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfExtStringArray_3 extends Handle_TDataStd_DeltaOnModificationOfExtStringArray {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfExtStringArray);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfExtStringArray_4 extends Handle_TDataStd_DeltaOnModificationOfExtStringArray {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfExtStringArray);
  }

export declare class Handle_TDataStd_DeltaOnModificationOfIntArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_DeltaOnModificationOfIntArray): void;
  get(): TDataStd_DeltaOnModificationOfIntArray;
}

  export declare class Handle_TDataStd_DeltaOnModificationOfIntArray_1 extends Handle_TDataStd_DeltaOnModificationOfIntArray {
    constructor();
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfIntArray_2 extends Handle_TDataStd_DeltaOnModificationOfIntArray {
    constructor(thePtr: TDataStd_DeltaOnModificationOfIntArray);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfIntArray_3 extends Handle_TDataStd_DeltaOnModificationOfIntArray {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfIntArray);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfIntArray_4 extends Handle_TDataStd_DeltaOnModificationOfIntArray {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfIntArray);
  }

export declare class Handle_TDataStd_DeltaOnModificationOfIntPackedMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_DeltaOnModificationOfIntPackedMap): void;
  get(): TDataStd_DeltaOnModificationOfIntPackedMap;
}

  export declare class Handle_TDataStd_DeltaOnModificationOfIntPackedMap_1 extends Handle_TDataStd_DeltaOnModificationOfIntPackedMap {
    constructor();
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfIntPackedMap_2 extends Handle_TDataStd_DeltaOnModificationOfIntPackedMap {
    constructor(thePtr: TDataStd_DeltaOnModificationOfIntPackedMap);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfIntPackedMap_3 extends Handle_TDataStd_DeltaOnModificationOfIntPackedMap {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfIntPackedMap);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfIntPackedMap_4 extends Handle_TDataStd_DeltaOnModificationOfIntPackedMap {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfIntPackedMap);
  }

export declare class Handle_TDataStd_DeltaOnModificationOfRealArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_DeltaOnModificationOfRealArray): void;
  get(): TDataStd_DeltaOnModificationOfRealArray;
}

  export declare class Handle_TDataStd_DeltaOnModificationOfRealArray_1 extends Handle_TDataStd_DeltaOnModificationOfRealArray {
    constructor();
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfRealArray_2 extends Handle_TDataStd_DeltaOnModificationOfRealArray {
    constructor(thePtr: TDataStd_DeltaOnModificationOfRealArray);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfRealArray_3 extends Handle_TDataStd_DeltaOnModificationOfRealArray {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfRealArray);
  }

  export declare class Handle_TDataStd_DeltaOnModificationOfRealArray_4 extends Handle_TDataStd_DeltaOnModificationOfRealArray {
    constructor(theHandle: Handle_TDataStd_DeltaOnModificationOfRealArray);
  }

export declare class Handle_TDataStd_HDataMapOfStringByte {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_HDataMapOfStringByte): void;
  get(): TDataStd_HDataMapOfStringByte;
}

  export declare class Handle_TDataStd_HDataMapOfStringByte_1 extends Handle_TDataStd_HDataMapOfStringByte {
    constructor();
  }

  export declare class Handle_TDataStd_HDataMapOfStringByte_2 extends Handle_TDataStd_HDataMapOfStringByte {
    constructor(thePtr: TDataStd_HDataMapOfStringByte);
  }

  export declare class Handle_TDataStd_HDataMapOfStringByte_3 extends Handle_TDataStd_HDataMapOfStringByte {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringByte);
  }

  export declare class Handle_TDataStd_HDataMapOfStringByte_4 extends Handle_TDataStd_HDataMapOfStringByte {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringByte);
  }

export declare class Handle_TDataStd_HDataMapOfStringHArray1OfInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_HDataMapOfStringHArray1OfInteger): void;
  get(): TDataStd_HDataMapOfStringHArray1OfInteger;
}

  export declare class Handle_TDataStd_HDataMapOfStringHArray1OfInteger_1 extends Handle_TDataStd_HDataMapOfStringHArray1OfInteger {
    constructor();
  }

  export declare class Handle_TDataStd_HDataMapOfStringHArray1OfInteger_2 extends Handle_TDataStd_HDataMapOfStringHArray1OfInteger {
    constructor(thePtr: TDataStd_HDataMapOfStringHArray1OfInteger);
  }

  export declare class Handle_TDataStd_HDataMapOfStringHArray1OfInteger_3 extends Handle_TDataStd_HDataMapOfStringHArray1OfInteger {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringHArray1OfInteger);
  }

  export declare class Handle_TDataStd_HDataMapOfStringHArray1OfInteger_4 extends Handle_TDataStd_HDataMapOfStringHArray1OfInteger {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringHArray1OfInteger);
  }

export declare class Handle_TDataStd_HDataMapOfStringHArray1OfReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_HDataMapOfStringHArray1OfReal): void;
  get(): TDataStd_HDataMapOfStringHArray1OfReal;
}

  export declare class Handle_TDataStd_HDataMapOfStringHArray1OfReal_1 extends Handle_TDataStd_HDataMapOfStringHArray1OfReal {
    constructor();
  }

  export declare class Handle_TDataStd_HDataMapOfStringHArray1OfReal_2 extends Handle_TDataStd_HDataMapOfStringHArray1OfReal {
    constructor(thePtr: TDataStd_HDataMapOfStringHArray1OfReal);
  }

  export declare class Handle_TDataStd_HDataMapOfStringHArray1OfReal_3 extends Handle_TDataStd_HDataMapOfStringHArray1OfReal {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringHArray1OfReal);
  }

  export declare class Handle_TDataStd_HDataMapOfStringHArray1OfReal_4 extends Handle_TDataStd_HDataMapOfStringHArray1OfReal {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringHArray1OfReal);
  }

export declare class Handle_TDataStd_HDataMapOfStringInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_HDataMapOfStringInteger): void;
  get(): TDataStd_HDataMapOfStringInteger;
}

  export declare class Handle_TDataStd_HDataMapOfStringInteger_1 extends Handle_TDataStd_HDataMapOfStringInteger {
    constructor();
  }

  export declare class Handle_TDataStd_HDataMapOfStringInteger_2 extends Handle_TDataStd_HDataMapOfStringInteger {
    constructor(thePtr: TDataStd_HDataMapOfStringInteger);
  }

  export declare class Handle_TDataStd_HDataMapOfStringInteger_3 extends Handle_TDataStd_HDataMapOfStringInteger {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringInteger);
  }

  export declare class Handle_TDataStd_HDataMapOfStringInteger_4 extends Handle_TDataStd_HDataMapOfStringInteger {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringInteger);
  }

export declare class Handle_TDataStd_HDataMapOfStringReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_HDataMapOfStringReal): void;
  get(): TDataStd_HDataMapOfStringReal;
}

  export declare class Handle_TDataStd_HDataMapOfStringReal_1 extends Handle_TDataStd_HDataMapOfStringReal {
    constructor();
  }

  export declare class Handle_TDataStd_HDataMapOfStringReal_2 extends Handle_TDataStd_HDataMapOfStringReal {
    constructor(thePtr: TDataStd_HDataMapOfStringReal);
  }

  export declare class Handle_TDataStd_HDataMapOfStringReal_3 extends Handle_TDataStd_HDataMapOfStringReal {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringReal);
  }

  export declare class Handle_TDataStd_HDataMapOfStringReal_4 extends Handle_TDataStd_HDataMapOfStringReal {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringReal);
  }

export declare class Handle_TDataStd_HDataMapOfStringString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_HDataMapOfStringString): void;
  get(): TDataStd_HDataMapOfStringString;
}

  export declare class Handle_TDataStd_HDataMapOfStringString_1 extends Handle_TDataStd_HDataMapOfStringString {
    constructor();
  }

  export declare class Handle_TDataStd_HDataMapOfStringString_2 extends Handle_TDataStd_HDataMapOfStringString {
    constructor(thePtr: TDataStd_HDataMapOfStringString);
  }

  export declare class Handle_TDataStd_HDataMapOfStringString_3 extends Handle_TDataStd_HDataMapOfStringString {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringString);
  }

  export declare class Handle_TDataStd_HDataMapOfStringString_4 extends Handle_TDataStd_HDataMapOfStringString {
    constructor(theHandle: Handle_TDataStd_HDataMapOfStringString);
  }

export declare class Handle_TDocStd_Document {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_Document): void;
  get(): TDocStd_Document;
}

  export declare class Handle_TDocStd_Document_1 extends Handle_TDocStd_Document {
    constructor();
  }

  export declare class Handle_TDocStd_Document_2 extends Handle_TDocStd_Document {
    constructor(thePtr: TDocStd_Document);
  }

  export declare class Handle_TDocStd_Document_3 extends Handle_TDocStd_Document {
    constructor(theHandle: Handle_TDocStd_Document);
  }

  export declare class Handle_TDocStd_Document_4 extends Handle_TDocStd_Document {
    constructor(theHandle: Handle_TDocStd_Document);
  }

export declare class Handle_TDocStd_ApplicationDelta {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_ApplicationDelta): void;
  get(): TDocStd_ApplicationDelta;
}

  export declare class Handle_TDocStd_ApplicationDelta_1 extends Handle_TDocStd_ApplicationDelta {
    constructor();
  }

  export declare class Handle_TDocStd_ApplicationDelta_2 extends Handle_TDocStd_ApplicationDelta {
    constructor(thePtr: TDocStd_ApplicationDelta);
  }

  export declare class Handle_TDocStd_ApplicationDelta_3 extends Handle_TDocStd_ApplicationDelta {
    constructor(theHandle: Handle_TDocStd_ApplicationDelta);
  }

  export declare class Handle_TDocStd_ApplicationDelta_4 extends Handle_TDocStd_ApplicationDelta {
    constructor(theHandle: Handle_TDocStd_ApplicationDelta);
  }

export declare class Handle_TDocStd_CompoundDelta {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_CompoundDelta): void;
  get(): TDocStd_CompoundDelta;
}

  export declare class Handle_TDocStd_CompoundDelta_1 extends Handle_TDocStd_CompoundDelta {
    constructor();
  }

  export declare class Handle_TDocStd_CompoundDelta_2 extends Handle_TDocStd_CompoundDelta {
    constructor(thePtr: TDocStd_CompoundDelta);
  }

  export declare class Handle_TDocStd_CompoundDelta_3 extends Handle_TDocStd_CompoundDelta {
    constructor(theHandle: Handle_TDocStd_CompoundDelta);
  }

  export declare class Handle_TDocStd_CompoundDelta_4 extends Handle_TDocStd_CompoundDelta {
    constructor(theHandle: Handle_TDocStd_CompoundDelta);
  }

export declare class TDocStd_LabelIDMapDataMap extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TDocStd_LabelIDMapDataMap): void;
  Assign(theOther: TDocStd_LabelIDMapDataMap): TDocStd_LabelIDMapDataMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TDF_Label, theItem: TDF_IDMap): Standard_Boolean;
  Bound(theKey: TDF_Label, theItem: TDF_IDMap): TDF_IDMap;
  IsBound(theKey: TDF_Label): Standard_Boolean;
  UnBind(theKey: TDF_Label): Standard_Boolean;
  Seek(theKey: TDF_Label): TDF_IDMap;
  Find_1(theKey: TDF_Label): TDF_IDMap;
  Find_2(theKey: TDF_Label, theValue: TDF_IDMap): Standard_Boolean;
  ChangeSeek(theKey: TDF_Label): TDF_IDMap;
  ChangeFind(theKey: TDF_Label): TDF_IDMap;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TDocStd_LabelIDMapDataMap_1 extends TDocStd_LabelIDMapDataMap {
    constructor();
  }

  export declare class TDocStd_LabelIDMapDataMap_2 extends TDocStd_LabelIDMapDataMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TDocStd_LabelIDMapDataMap_3 extends TDocStd_LabelIDMapDataMap {
    constructor(theOther: TDocStd_LabelIDMapDataMap);
  }

export declare class Handle_TDocStd_Modified {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_Modified): void;
  get(): TDocStd_Modified;
}

  export declare class Handle_TDocStd_Modified_1 extends Handle_TDocStd_Modified {
    constructor();
  }

  export declare class Handle_TDocStd_Modified_2 extends Handle_TDocStd_Modified {
    constructor(thePtr: TDocStd_Modified);
  }

  export declare class Handle_TDocStd_Modified_3 extends Handle_TDocStd_Modified {
    constructor(theHandle: Handle_TDocStd_Modified);
  }

  export declare class Handle_TDocStd_Modified_4 extends Handle_TDocStd_Modified {
    constructor(theHandle: Handle_TDocStd_Modified);
  }

export declare class Handle_TDocStd_MultiTransactionManager {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_MultiTransactionManager): void;
  get(): TDocStd_MultiTransactionManager;
}

  export declare class Handle_TDocStd_MultiTransactionManager_1 extends Handle_TDocStd_MultiTransactionManager {
    constructor();
  }

  export declare class Handle_TDocStd_MultiTransactionManager_2 extends Handle_TDocStd_MultiTransactionManager {
    constructor(thePtr: TDocStd_MultiTransactionManager);
  }

  export declare class Handle_TDocStd_MultiTransactionManager_3 extends Handle_TDocStd_MultiTransactionManager {
    constructor(theHandle: Handle_TDocStd_MultiTransactionManager);
  }

  export declare class Handle_TDocStd_MultiTransactionManager_4 extends Handle_TDocStd_MultiTransactionManager {
    constructor(theHandle: Handle_TDocStd_MultiTransactionManager);
  }

export declare class Handle_TDocStd_Owner {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_Owner): void;
  get(): TDocStd_Owner;
}

  export declare class Handle_TDocStd_Owner_1 extends Handle_TDocStd_Owner {
    constructor();
  }

  export declare class Handle_TDocStd_Owner_2 extends Handle_TDocStd_Owner {
    constructor(thePtr: TDocStd_Owner);
  }

  export declare class Handle_TDocStd_Owner_3 extends Handle_TDocStd_Owner {
    constructor(theHandle: Handle_TDocStd_Owner);
  }

  export declare class Handle_TDocStd_Owner_4 extends Handle_TDocStd_Owner {
    constructor(theHandle: Handle_TDocStd_Owner);
  }

export declare class Handle_TDocStd_XLinkRoot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_XLinkRoot): void;
  get(): TDocStd_XLinkRoot;
}

  export declare class Handle_TDocStd_XLinkRoot_1 extends Handle_TDocStd_XLinkRoot {
    constructor();
  }

  export declare class Handle_TDocStd_XLinkRoot_2 extends Handle_TDocStd_XLinkRoot {
    constructor(thePtr: TDocStd_XLinkRoot);
  }

  export declare class Handle_TDocStd_XLinkRoot_3 extends Handle_TDocStd_XLinkRoot {
    constructor(theHandle: Handle_TDocStd_XLinkRoot);
  }

  export declare class Handle_TDocStd_XLinkRoot_4 extends Handle_TDocStd_XLinkRoot {
    constructor(theHandle: Handle_TDocStd_XLinkRoot);
  }

export declare class TFunction_Array1OfDataMapOfGUIDDriver {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: TFunction_DataMapOfGUIDDriver): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TFunction_Array1OfDataMapOfGUIDDriver): TFunction_Array1OfDataMapOfGUIDDriver;
  Move(theOther: TFunction_Array1OfDataMapOfGUIDDriver): TFunction_Array1OfDataMapOfGUIDDriver;
  First(): TFunction_DataMapOfGUIDDriver;
  ChangeFirst(): TFunction_DataMapOfGUIDDriver;
  Last(): TFunction_DataMapOfGUIDDriver;
  ChangeLast(): TFunction_DataMapOfGUIDDriver;
  Value(theIndex: Standard_Integer): TFunction_DataMapOfGUIDDriver;
  ChangeValue(theIndex: Standard_Integer): TFunction_DataMapOfGUIDDriver;
  SetValue(theIndex: Standard_Integer, theItem: TFunction_DataMapOfGUIDDriver): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TFunction_Array1OfDataMapOfGUIDDriver_1 extends TFunction_Array1OfDataMapOfGUIDDriver {
    constructor();
  }

  export declare class TFunction_Array1OfDataMapOfGUIDDriver_2 extends TFunction_Array1OfDataMapOfGUIDDriver {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TFunction_Array1OfDataMapOfGUIDDriver_3 extends TFunction_Array1OfDataMapOfGUIDDriver {
    constructor(theOther: TFunction_Array1OfDataMapOfGUIDDriver);
  }

  export declare class TFunction_Array1OfDataMapOfGUIDDriver_4 extends TFunction_Array1OfDataMapOfGUIDDriver {
    constructor(theOther: TFunction_Array1OfDataMapOfGUIDDriver);
  }

  export declare class TFunction_Array1OfDataMapOfGUIDDriver_5 extends TFunction_Array1OfDataMapOfGUIDDriver {
    constructor(theBegin: TFunction_DataMapOfGUIDDriver, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class TFunction_DataMapOfLabelListOfLabel extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TFunction_DataMapOfLabelListOfLabel): void;
  Assign(theOther: TFunction_DataMapOfLabelListOfLabel): TFunction_DataMapOfLabelListOfLabel;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TDF_Label, theItem: TDF_LabelList): Standard_Boolean;
  Bound(theKey: TDF_Label, theItem: TDF_LabelList): TDF_LabelList;
  IsBound(theKey: TDF_Label): Standard_Boolean;
  UnBind(theKey: TDF_Label): Standard_Boolean;
  Seek(theKey: TDF_Label): TDF_LabelList;
  Find_1(theKey: TDF_Label): TDF_LabelList;
  Find_2(theKey: TDF_Label, theValue: TDF_LabelList): Standard_Boolean;
  ChangeSeek(theKey: TDF_Label): TDF_LabelList;
  ChangeFind(theKey: TDF_Label): TDF_LabelList;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TFunction_DataMapOfLabelListOfLabel_1 extends TFunction_DataMapOfLabelListOfLabel {
    constructor();
  }

  export declare class TFunction_DataMapOfLabelListOfLabel_2 extends TFunction_DataMapOfLabelListOfLabel {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TFunction_DataMapOfLabelListOfLabel_3 extends TFunction_DataMapOfLabelListOfLabel {
    constructor(theOther: TFunction_DataMapOfLabelListOfLabel);
  }

export declare class TFunction_DoubleMapOfIntegerLabel extends NCollection_BaseMap {
  Exchange(theOther: TFunction_DoubleMapOfIntegerLabel): void;
  Assign(theOther: TFunction_DoubleMapOfIntegerLabel): TFunction_DoubleMapOfIntegerLabel;
  ReSize(N: Standard_Integer): void;
  Bind(theKey1: Standard_Integer, theKey2: TDF_Label): void;
  AreBound(theKey1: Standard_Integer, theKey2: TDF_Label): Standard_Boolean;
  IsBound1(theKey1: Standard_Integer): Standard_Boolean;
  IsBound2(theKey2: TDF_Label): Standard_Boolean;
  UnBind1(theKey1: Standard_Integer): Standard_Boolean;
  UnBind2(theKey2: TDF_Label): Standard_Boolean;
  Find1_1(theKey1: Standard_Integer): TDF_Label;
  Find1_2(theKey1: Standard_Integer, theKey2: TDF_Label): Standard_Boolean;
  Seek1(theKey1: Standard_Integer): TDF_Label;
  Find2_1(theKey2: TDF_Label): Standard_Integer;
  Find2_2(theKey2: TDF_Label, theKey1: Standard_Integer): Standard_Boolean;
  Seek2(theKey2: TDF_Label): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: TDF_HAllocator): void;
  Size(): Standard_Integer;
}

  export declare class TFunction_DoubleMapOfIntegerLabel_1 extends TFunction_DoubleMapOfIntegerLabel {
    constructor();
  }

  export declare class TFunction_DoubleMapOfIntegerLabel_2 extends TFunction_DoubleMapOfIntegerLabel {
    constructor(theNbBuckets: Standard_Integer, theAllocator: TDF_HAllocator);
  }

  export declare class TFunction_DoubleMapOfIntegerLabel_3 extends TFunction_DoubleMapOfIntegerLabel {
    constructor(theOther: TFunction_DoubleMapOfIntegerLabel);
  }

export declare class Handle_TFunction_HArray1OfDataMapOfGUIDDriver {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TFunction_HArray1OfDataMapOfGUIDDriver): void;
  get(): TFunction_HArray1OfDataMapOfGUIDDriver;
}

  export declare class Handle_TFunction_HArray1OfDataMapOfGUIDDriver_1 extends Handle_TFunction_HArray1OfDataMapOfGUIDDriver {
    constructor();
  }

  export declare class Handle_TFunction_HArray1OfDataMapOfGUIDDriver_2 extends Handle_TFunction_HArray1OfDataMapOfGUIDDriver {
    constructor(thePtr: TFunction_HArray1OfDataMapOfGUIDDriver);
  }

  export declare class Handle_TFunction_HArray1OfDataMapOfGUIDDriver_3 extends Handle_TFunction_HArray1OfDataMapOfGUIDDriver {
    constructor(theHandle: Handle_TFunction_HArray1OfDataMapOfGUIDDriver);
  }

  export declare class Handle_TFunction_HArray1OfDataMapOfGUIDDriver_4 extends Handle_TFunction_HArray1OfDataMapOfGUIDDriver {
    constructor(theHandle: Handle_TFunction_HArray1OfDataMapOfGUIDDriver);
  }

export declare class Handle_TFunction_DriverTable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TFunction_DriverTable): void;
  get(): TFunction_DriverTable;
}

  export declare class Handle_TFunction_DriverTable_1 extends Handle_TFunction_DriverTable {
    constructor();
  }

  export declare class Handle_TFunction_DriverTable_2 extends Handle_TFunction_DriverTable {
    constructor(thePtr: TFunction_DriverTable);
  }

  export declare class Handle_TFunction_DriverTable_3 extends Handle_TFunction_DriverTable {
    constructor(theHandle: Handle_TFunction_DriverTable);
  }

  export declare class Handle_TFunction_DriverTable_4 extends Handle_TFunction_DriverTable {
    constructor(theHandle: Handle_TFunction_DriverTable);
  }

export declare class Handle_TFunction_GraphNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TFunction_GraphNode): void;
  get(): TFunction_GraphNode;
}

  export declare class Handle_TFunction_GraphNode_1 extends Handle_TFunction_GraphNode {
    constructor();
  }

  export declare class Handle_TFunction_GraphNode_2 extends Handle_TFunction_GraphNode {
    constructor(thePtr: TFunction_GraphNode);
  }

  export declare class Handle_TFunction_GraphNode_3 extends Handle_TFunction_GraphNode {
    constructor(theHandle: Handle_TFunction_GraphNode);
  }

  export declare class Handle_TFunction_GraphNode_4 extends Handle_TFunction_GraphNode {
    constructor(theHandle: Handle_TFunction_GraphNode);
  }

export declare class Handle_TFunction_Logbook {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TFunction_Logbook): void;
  get(): TFunction_Logbook;
}

  export declare class Handle_TFunction_Logbook_1 extends Handle_TFunction_Logbook {
    constructor();
  }

  export declare class Handle_TFunction_Logbook_2 extends Handle_TFunction_Logbook {
    constructor(thePtr: TFunction_Logbook);
  }

  export declare class Handle_TFunction_Logbook_3 extends Handle_TFunction_Logbook {
    constructor(theHandle: Handle_TFunction_Logbook);
  }

  export declare class Handle_TFunction_Logbook_4 extends Handle_TFunction_Logbook {
    constructor(theHandle: Handle_TFunction_Logbook);
  }

export declare class Handle_TFunction_Scope {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TFunction_Scope): void;
  get(): TFunction_Scope;
}

  export declare class Handle_TFunction_Scope_1 extends Handle_TFunction_Scope {
    constructor();
  }

  export declare class Handle_TFunction_Scope_2 extends Handle_TFunction_Scope {
    constructor(thePtr: TFunction_Scope);
  }

  export declare class Handle_TFunction_Scope_3 extends Handle_TFunction_Scope {
    constructor(theHandle: Handle_TFunction_Scope);
  }

  export declare class Handle_TFunction_Scope_4 extends Handle_TFunction_Scope {
    constructor(theHandle: Handle_TFunction_Scope);
  }

export declare type TDataStd_RealEnum = {
  TDataStd_SCALAR: {};
  TDataStd_LENGTH: {};
  TDataStd_ANGULAR: {};
}

export declare type TFunction_ExecutionStatus = {
  TFunction_ES_WrongDefinition: {};
  TFunction_ES_NotExecuted: {};
  TFunction_ES_Executing: {};
  TFunction_ES_Succeeded: {};
  TFunction_ES_Failed: {};
}

export declare type TKLCAFLib = {
  TDocStd_Application: typeof TDocStd_Application;
  TDF_Label: typeof TDF_Label;
  TDF_TagSource: typeof TDF_TagSource;
  TDF_Data: typeof TDF_Data;
  TDF_Transaction_1: typeof TDF_Transaction_1;
  TDF_Transaction_2: typeof TDF_Transaction_2;
  TDF_ChildIterator_1: typeof TDF_ChildIterator_1;
  TDF_ChildIterator_2: typeof TDF_ChildIterator_2;
  TDataStd_IntegerArray: typeof TDataStd_IntegerArray;
  TDataStd_RealArray: typeof TDataStd_RealArray;
  TDataStd_ByteArray: typeof TDataStd_ByteArray;
  TDataStd_ExtStringArray: typeof TDataStd_ExtStringArray;
  TDataStd_BooleanArray: typeof TDataStd_BooleanArray;
  TDataStd_ReferenceArray: typeof TDataStd_ReferenceArray;
  TDataStd_IntegerList: typeof TDataStd_IntegerList;
  TDataStd_RealList: typeof TDataStd_RealList;
  TDataStd_ExtStringList: typeof TDataStd_ExtStringList;
  TDataStd_BooleanList: typeof TDataStd_BooleanList;
  TDataStd_ReferenceList: typeof TDataStd_ReferenceList;
  TDataStd_IntPackedMap: typeof TDataStd_IntPackedMap;
  TDataStd_Expression: typeof TDataStd_Expression;
  TDataStd_Relation: typeof TDataStd_Relation;
  TFunction_Function: typeof TFunction_Function;
  TDataStd_NamedData: typeof TDataStd_NamedData;
  TDataStd_Real: typeof TDataStd_Real;
  TDataStd_TreeNode: typeof TDataStd_TreeNode;
  TDataStd_Integer: typeof TDataStd_Integer;
  TDF_Reference: typeof TDF_Reference;
  TDataStd_UAttribute: typeof TDataStd_UAttribute;
  TDataStd_Name: typeof TDataStd_Name;
  TDataStd_Comment: typeof TDataStd_Comment;
  TDataStd_AsciiString: typeof TDataStd_AsciiString;
  TDataStd_Variable: typeof TDataStd_Variable;
  TDataStd_Directory: typeof TDataStd_Directory;
  TDataStd_Tick: typeof TDataStd_Tick;
  TDataStd_NoteBook: typeof TDataStd_NoteBook;
  TDocStd_XLink: typeof TDocStd_XLink;
  TDF_AttributeIterator_1: typeof TDF_AttributeIterator_1;
  TDF_AttributeIterator_2: typeof TDF_AttributeIterator_2;
  TDF_AttributeIterator_3: typeof TDF_AttributeIterator_3;
  TDF_ChildIDIterator_1: typeof TDF_ChildIDIterator_1;
  TDF_ChildIDIterator_2: typeof TDF_ChildIDIterator_2;
  TDF_ClosureMode: typeof TDF_ClosureMode;
  TDF_IDFilter: typeof TDF_IDFilter;
  TDF_CopyLabel_1: typeof TDF_CopyLabel_1;
  TDF_CopyLabel_2: typeof TDF_CopyLabel_2;
  TDF_DataSet: typeof TDF_DataSet;
  TDF_DefaultDeltaOnModification: typeof TDF_DefaultDeltaOnModification;
  TDF_DefaultDeltaOnRemoval: typeof TDF_DefaultDeltaOnRemoval;
  TDF_Delta: typeof TDF_Delta;
  TDF_DeltaOnAddition: typeof TDF_DeltaOnAddition;
  TDF_DeltaOnForget: typeof TDF_DeltaOnForget;
  TDF_DeltaOnResume: typeof TDF_DeltaOnResume;
  TDF_RelocationTable: typeof TDF_RelocationTable;
  TDataStd_ChildNodeIterator_1: typeof TDataStd_ChildNodeIterator_1;
  TDataStd_ChildNodeIterator_2: typeof TDataStd_ChildNodeIterator_2;
  TDataStd_Current: typeof TDataStd_Current;
  TDataStd_DeltaOnModificationOfByteArray: typeof TDataStd_DeltaOnModificationOfByteArray;
  TDataStd_DeltaOnModificationOfExtStringArray: typeof TDataStd_DeltaOnModificationOfExtStringArray;
  TDataStd_DeltaOnModificationOfIntArray: typeof TDataStd_DeltaOnModificationOfIntArray;
  TDataStd_DeltaOnModificationOfIntPackedMap: typeof TDataStd_DeltaOnModificationOfIntPackedMap;
  TDataStd_DeltaOnModificationOfRealArray: typeof TDataStd_DeltaOnModificationOfRealArray;
  TDataStd_HDataMapOfStringByte_1: typeof TDataStd_HDataMapOfStringByte_1;
  TDataStd_HDataMapOfStringByte_2: typeof TDataStd_HDataMapOfStringByte_2;
  TDataStd_HDataMapOfStringHArray1OfInteger_1: typeof TDataStd_HDataMapOfStringHArray1OfInteger_1;
  TDataStd_HDataMapOfStringHArray1OfInteger_2: typeof TDataStd_HDataMapOfStringHArray1OfInteger_2;
  TDataStd_HDataMapOfStringHArray1OfReal_1: typeof TDataStd_HDataMapOfStringHArray1OfReal_1;
  TDataStd_HDataMapOfStringHArray1OfReal_2: typeof TDataStd_HDataMapOfStringHArray1OfReal_2;
  TDataStd_HDataMapOfStringInteger_1: typeof TDataStd_HDataMapOfStringInteger_1;
  TDataStd_HDataMapOfStringInteger_2: typeof TDataStd_HDataMapOfStringInteger_2;
  TDataStd_HDataMapOfStringReal_1: typeof TDataStd_HDataMapOfStringReal_1;
  TDataStd_HDataMapOfStringReal_2: typeof TDataStd_HDataMapOfStringReal_2;
  TDataStd_HDataMapOfStringString_1: typeof TDataStd_HDataMapOfStringString_1;
  TDataStd_HDataMapOfStringString_2: typeof TDataStd_HDataMapOfStringString_2;
  TDocStd_Document: typeof TDocStd_Document;
  TDocStd_ApplicationDelta: typeof TDocStd_ApplicationDelta;
  TDocStd_CompoundDelta: typeof TDocStd_CompoundDelta;
  TDocStd_Context: typeof TDocStd_Context;
  TDocStd_Modified: typeof TDocStd_Modified;
  TDocStd_MultiTransactionManager: typeof TDocStd_MultiTransactionManager;
  TDocStd_Owner: typeof TDocStd_Owner;
  TDocStd_PathParser: typeof TDocStd_PathParser;
  TDocStd_XLinkIterator_1: typeof TDocStd_XLinkIterator_1;
  TDocStd_XLinkIterator_2: typeof TDocStd_XLinkIterator_2;
  TDocStd_XLinkTool: typeof TDocStd_XLinkTool;
  TFunction_DriverTable: typeof TFunction_DriverTable;
  TFunction_GraphNode: typeof TFunction_GraphNode;
  TFunction_IFunction_1: typeof TFunction_IFunction_1;
  TFunction_IFunction_2: typeof TFunction_IFunction_2;
  TFunction_Iterator_1: typeof TFunction_Iterator_1;
  TFunction_Iterator_2: typeof TFunction_Iterator_2;
  TFunction_Logbook: typeof TFunction_Logbook;
  TFunction_Scope: typeof TFunction_Scope;
  Handle_TDocStd_Application_1: typeof Handle_TDocStd_Application_1;
  Handle_TDocStd_Application_2: typeof Handle_TDocStd_Application_2;
  Handle_TDocStd_Application_3: typeof Handle_TDocStd_Application_3;
  Handle_TDocStd_Application_4: typeof Handle_TDocStd_Application_4;
  Handle_AppStdL_Application_1: typeof Handle_AppStdL_Application_1;
  Handle_AppStdL_Application_2: typeof Handle_AppStdL_Application_2;
  Handle_AppStdL_Application_3: typeof Handle_AppStdL_Application_3;
  Handle_AppStdL_Application_4: typeof Handle_AppStdL_Application_4;
  Handle_TDF_Attribute_1: typeof Handle_TDF_Attribute_1;
  Handle_TDF_Attribute_2: typeof Handle_TDF_Attribute_2;
  Handle_TDF_Attribute_3: typeof Handle_TDF_Attribute_3;
  Handle_TDF_Attribute_4: typeof Handle_TDF_Attribute_4;
  Handle_TDF_TagSource_1: typeof Handle_TDF_TagSource_1;
  Handle_TDF_TagSource_2: typeof Handle_TDF_TagSource_2;
  Handle_TDF_TagSource_3: typeof Handle_TDF_TagSource_3;
  Handle_TDF_TagSource_4: typeof Handle_TDF_TagSource_4;
  Handle_TDF_Data_1: typeof Handle_TDF_Data_1;
  Handle_TDF_Data_2: typeof Handle_TDF_Data_2;
  Handle_TDF_Data_3: typeof Handle_TDF_Data_3;
  Handle_TDF_Data_4: typeof Handle_TDF_Data_4;
  TDF_LabelList_1: typeof TDF_LabelList_1;
  TDF_LabelList_2: typeof TDF_LabelList_2;
  TDF_LabelList_3: typeof TDF_LabelList_3;
  Handle_TFunction_Driver_1: typeof Handle_TFunction_Driver_1;
  Handle_TFunction_Driver_2: typeof Handle_TFunction_Driver_2;
  Handle_TFunction_Driver_3: typeof Handle_TFunction_Driver_3;
  Handle_TFunction_Driver_4: typeof Handle_TFunction_Driver_4;
  TDF_LabelSequence_1: typeof TDF_LabelSequence_1;
  TDF_LabelSequence_2: typeof TDF_LabelSequence_2;
  TDF_LabelSequence_3: typeof TDF_LabelSequence_3;
  Handle_TDataStd_IntegerArray_1: typeof Handle_TDataStd_IntegerArray_1;
  Handle_TDataStd_IntegerArray_2: typeof Handle_TDataStd_IntegerArray_2;
  Handle_TDataStd_IntegerArray_3: typeof Handle_TDataStd_IntegerArray_3;
  Handle_TDataStd_IntegerArray_4: typeof Handle_TDataStd_IntegerArray_4;
  Handle_TDataStd_RealArray_1: typeof Handle_TDataStd_RealArray_1;
  Handle_TDataStd_RealArray_2: typeof Handle_TDataStd_RealArray_2;
  Handle_TDataStd_RealArray_3: typeof Handle_TDataStd_RealArray_3;
  Handle_TDataStd_RealArray_4: typeof Handle_TDataStd_RealArray_4;
  Handle_TDataStd_ByteArray_1: typeof Handle_TDataStd_ByteArray_1;
  Handle_TDataStd_ByteArray_2: typeof Handle_TDataStd_ByteArray_2;
  Handle_TDataStd_ByteArray_3: typeof Handle_TDataStd_ByteArray_3;
  Handle_TDataStd_ByteArray_4: typeof Handle_TDataStd_ByteArray_4;
  Handle_TDataStd_ExtStringArray_1: typeof Handle_TDataStd_ExtStringArray_1;
  Handle_TDataStd_ExtStringArray_2: typeof Handle_TDataStd_ExtStringArray_2;
  Handle_TDataStd_ExtStringArray_3: typeof Handle_TDataStd_ExtStringArray_3;
  Handle_TDataStd_ExtStringArray_4: typeof Handle_TDataStd_ExtStringArray_4;
  Handle_TDataStd_BooleanArray_1: typeof Handle_TDataStd_BooleanArray_1;
  Handle_TDataStd_BooleanArray_2: typeof Handle_TDataStd_BooleanArray_2;
  Handle_TDataStd_BooleanArray_3: typeof Handle_TDataStd_BooleanArray_3;
  Handle_TDataStd_BooleanArray_4: typeof Handle_TDataStd_BooleanArray_4;
  TDataStd_LabelArray1_1: typeof TDataStd_LabelArray1_1;
  TDataStd_LabelArray1_2: typeof TDataStd_LabelArray1_2;
  TDataStd_LabelArray1_3: typeof TDataStd_LabelArray1_3;
  TDataStd_LabelArray1_4: typeof TDataStd_LabelArray1_4;
  TDataStd_LabelArray1_5: typeof TDataStd_LabelArray1_5;
  Handle_TDataStd_HLabelArray1_1: typeof Handle_TDataStd_HLabelArray1_1;
  Handle_TDataStd_HLabelArray1_2: typeof Handle_TDataStd_HLabelArray1_2;
  Handle_TDataStd_HLabelArray1_3: typeof Handle_TDataStd_HLabelArray1_3;
  Handle_TDataStd_HLabelArray1_4: typeof Handle_TDataStd_HLabelArray1_4;
  Handle_TDataStd_ReferenceArray_1: typeof Handle_TDataStd_ReferenceArray_1;
  Handle_TDataStd_ReferenceArray_2: typeof Handle_TDataStd_ReferenceArray_2;
  Handle_TDataStd_ReferenceArray_3: typeof Handle_TDataStd_ReferenceArray_3;
  Handle_TDataStd_ReferenceArray_4: typeof Handle_TDataStd_ReferenceArray_4;
  Handle_TDataStd_IntegerList_1: typeof Handle_TDataStd_IntegerList_1;
  Handle_TDataStd_IntegerList_2: typeof Handle_TDataStd_IntegerList_2;
  Handle_TDataStd_IntegerList_3: typeof Handle_TDataStd_IntegerList_3;
  Handle_TDataStd_IntegerList_4: typeof Handle_TDataStd_IntegerList_4;
  Handle_TDataStd_RealList_1: typeof Handle_TDataStd_RealList_1;
  Handle_TDataStd_RealList_2: typeof Handle_TDataStd_RealList_2;
  Handle_TDataStd_RealList_3: typeof Handle_TDataStd_RealList_3;
  Handle_TDataStd_RealList_4: typeof Handle_TDataStd_RealList_4;
  TDataStd_ListOfExtendedString_1: typeof TDataStd_ListOfExtendedString_1;
  TDataStd_ListOfExtendedString_2: typeof TDataStd_ListOfExtendedString_2;
  TDataStd_ListOfExtendedString_3: typeof TDataStd_ListOfExtendedString_3;
  Handle_TDataStd_ExtStringList_1: typeof Handle_TDataStd_ExtStringList_1;
  Handle_TDataStd_ExtStringList_2: typeof Handle_TDataStd_ExtStringList_2;
  Handle_TDataStd_ExtStringList_3: typeof Handle_TDataStd_ExtStringList_3;
  Handle_TDataStd_ExtStringList_4: typeof Handle_TDataStd_ExtStringList_4;
  TDataStd_ListOfByte_1: typeof TDataStd_ListOfByte_1;
  TDataStd_ListOfByte_2: typeof TDataStd_ListOfByte_2;
  TDataStd_ListOfByte_3: typeof TDataStd_ListOfByte_3;
  Handle_TDataStd_BooleanList_1: typeof Handle_TDataStd_BooleanList_1;
  Handle_TDataStd_BooleanList_2: typeof Handle_TDataStd_BooleanList_2;
  Handle_TDataStd_BooleanList_3: typeof Handle_TDataStd_BooleanList_3;
  Handle_TDataStd_BooleanList_4: typeof Handle_TDataStd_BooleanList_4;
  Handle_TDataStd_ReferenceList_1: typeof Handle_TDataStd_ReferenceList_1;
  Handle_TDataStd_ReferenceList_2: typeof Handle_TDataStd_ReferenceList_2;
  Handle_TDataStd_ReferenceList_3: typeof Handle_TDataStd_ReferenceList_3;
  Handle_TDataStd_ReferenceList_4: typeof Handle_TDataStd_ReferenceList_4;
  Handle_TDataStd_IntPackedMap_1: typeof Handle_TDataStd_IntPackedMap_1;
  Handle_TDataStd_IntPackedMap_2: typeof Handle_TDataStd_IntPackedMap_2;
  Handle_TDataStd_IntPackedMap_3: typeof Handle_TDataStd_IntPackedMap_3;
  Handle_TDataStd_IntPackedMap_4: typeof Handle_TDataStd_IntPackedMap_4;
  Handle_TDataStd_Expression_1: typeof Handle_TDataStd_Expression_1;
  Handle_TDataStd_Expression_2: typeof Handle_TDataStd_Expression_2;
  Handle_TDataStd_Expression_3: typeof Handle_TDataStd_Expression_3;
  Handle_TDataStd_Expression_4: typeof Handle_TDataStd_Expression_4;
  Handle_TDataStd_Relation_1: typeof Handle_TDataStd_Relation_1;
  Handle_TDataStd_Relation_2: typeof Handle_TDataStd_Relation_2;
  Handle_TDataStd_Relation_3: typeof Handle_TDataStd_Relation_3;
  Handle_TDataStd_Relation_4: typeof Handle_TDataStd_Relation_4;
  Handle_TFunction_Function_1: typeof Handle_TFunction_Function_1;
  Handle_TFunction_Function_2: typeof Handle_TFunction_Function_2;
  Handle_TFunction_Function_3: typeof Handle_TFunction_Function_3;
  Handle_TFunction_Function_4: typeof Handle_TFunction_Function_4;
  TDataStd_DataMapOfStringReal_1: typeof TDataStd_DataMapOfStringReal_1;
  TDataStd_DataMapOfStringReal_2: typeof TDataStd_DataMapOfStringReal_2;
  TDataStd_DataMapOfStringReal_3: typeof TDataStd_DataMapOfStringReal_3;
  TDataStd_DataMapOfStringString_1: typeof TDataStd_DataMapOfStringString_1;
  TDataStd_DataMapOfStringString_2: typeof TDataStd_DataMapOfStringString_2;
  TDataStd_DataMapOfStringString_3: typeof TDataStd_DataMapOfStringString_3;
  TDataStd_DataMapOfStringByte_1: typeof TDataStd_DataMapOfStringByte_1;
  TDataStd_DataMapOfStringByte_2: typeof TDataStd_DataMapOfStringByte_2;
  TDataStd_DataMapOfStringByte_3: typeof TDataStd_DataMapOfStringByte_3;
  Handle_TDataStd_NamedData_1: typeof Handle_TDataStd_NamedData_1;
  Handle_TDataStd_NamedData_2: typeof Handle_TDataStd_NamedData_2;
  Handle_TDataStd_NamedData_3: typeof Handle_TDataStd_NamedData_3;
  Handle_TDataStd_NamedData_4: typeof Handle_TDataStd_NamedData_4;
  Handle_TDataStd_Real_1: typeof Handle_TDataStd_Real_1;
  Handle_TDataStd_Real_2: typeof Handle_TDataStd_Real_2;
  Handle_TDataStd_Real_3: typeof Handle_TDataStd_Real_3;
  Handle_TDataStd_Real_4: typeof Handle_TDataStd_Real_4;
  Handle_TDataStd_TreeNode_1: typeof Handle_TDataStd_TreeNode_1;
  Handle_TDataStd_TreeNode_2: typeof Handle_TDataStd_TreeNode_2;
  Handle_TDataStd_TreeNode_3: typeof Handle_TDataStd_TreeNode_3;
  Handle_TDataStd_TreeNode_4: typeof Handle_TDataStd_TreeNode_4;
  Handle_TDataStd_Integer_1: typeof Handle_TDataStd_Integer_1;
  Handle_TDataStd_Integer_2: typeof Handle_TDataStd_Integer_2;
  Handle_TDataStd_Integer_3: typeof Handle_TDataStd_Integer_3;
  Handle_TDataStd_Integer_4: typeof Handle_TDataStd_Integer_4;
  Handle_TDF_Reference_1: typeof Handle_TDF_Reference_1;
  Handle_TDF_Reference_2: typeof Handle_TDF_Reference_2;
  Handle_TDF_Reference_3: typeof Handle_TDF_Reference_3;
  Handle_TDF_Reference_4: typeof Handle_TDF_Reference_4;
  Handle_TDataStd_UAttribute_1: typeof Handle_TDataStd_UAttribute_1;
  Handle_TDataStd_UAttribute_2: typeof Handle_TDataStd_UAttribute_2;
  Handle_TDataStd_UAttribute_3: typeof Handle_TDataStd_UAttribute_3;
  Handle_TDataStd_UAttribute_4: typeof Handle_TDataStd_UAttribute_4;
  Handle_TDataStd_GenericExtString_1: typeof Handle_TDataStd_GenericExtString_1;
  Handle_TDataStd_GenericExtString_2: typeof Handle_TDataStd_GenericExtString_2;
  Handle_TDataStd_GenericExtString_3: typeof Handle_TDataStd_GenericExtString_3;
  Handle_TDataStd_GenericExtString_4: typeof Handle_TDataStd_GenericExtString_4;
  Handle_TDataStd_Name_1: typeof Handle_TDataStd_Name_1;
  Handle_TDataStd_Name_2: typeof Handle_TDataStd_Name_2;
  Handle_TDataStd_Name_3: typeof Handle_TDataStd_Name_3;
  Handle_TDataStd_Name_4: typeof Handle_TDataStd_Name_4;
  Handle_TDataStd_Comment_1: typeof Handle_TDataStd_Comment_1;
  Handle_TDataStd_Comment_2: typeof Handle_TDataStd_Comment_2;
  Handle_TDataStd_Comment_3: typeof Handle_TDataStd_Comment_3;
  Handle_TDataStd_Comment_4: typeof Handle_TDataStd_Comment_4;
  Handle_TDataStd_AsciiString_1: typeof Handle_TDataStd_AsciiString_1;
  Handle_TDataStd_AsciiString_2: typeof Handle_TDataStd_AsciiString_2;
  Handle_TDataStd_AsciiString_3: typeof Handle_TDataStd_AsciiString_3;
  Handle_TDataStd_AsciiString_4: typeof Handle_TDataStd_AsciiString_4;
  Handle_TDataStd_Variable_1: typeof Handle_TDataStd_Variable_1;
  Handle_TDataStd_Variable_2: typeof Handle_TDataStd_Variable_2;
  Handle_TDataStd_Variable_3: typeof Handle_TDataStd_Variable_3;
  Handle_TDataStd_Variable_4: typeof Handle_TDataStd_Variable_4;
  Handle_TDataStd_GenericEmpty_1: typeof Handle_TDataStd_GenericEmpty_1;
  Handle_TDataStd_GenericEmpty_2: typeof Handle_TDataStd_GenericEmpty_2;
  Handle_TDataStd_GenericEmpty_3: typeof Handle_TDataStd_GenericEmpty_3;
  Handle_TDataStd_GenericEmpty_4: typeof Handle_TDataStd_GenericEmpty_4;
  Handle_TDataStd_Directory_1: typeof Handle_TDataStd_Directory_1;
  Handle_TDataStd_Directory_2: typeof Handle_TDataStd_Directory_2;
  Handle_TDataStd_Directory_3: typeof Handle_TDataStd_Directory_3;
  Handle_TDataStd_Directory_4: typeof Handle_TDataStd_Directory_4;
  Handle_TDataStd_Tick_1: typeof Handle_TDataStd_Tick_1;
  Handle_TDataStd_Tick_2: typeof Handle_TDataStd_Tick_2;
  Handle_TDataStd_Tick_3: typeof Handle_TDataStd_Tick_3;
  Handle_TDataStd_Tick_4: typeof Handle_TDataStd_Tick_4;
  Handle_TDataStd_NoteBook_1: typeof Handle_TDataStd_NoteBook_1;
  Handle_TDataStd_NoteBook_2: typeof Handle_TDataStd_NoteBook_2;
  Handle_TDataStd_NoteBook_3: typeof Handle_TDataStd_NoteBook_3;
  Handle_TDataStd_NoteBook_4: typeof Handle_TDataStd_NoteBook_4;
  Handle_TDocStd_XLink_1: typeof Handle_TDocStd_XLink_1;
  Handle_TDocStd_XLink_2: typeof Handle_TDocStd_XLink_2;
  Handle_TDocStd_XLink_3: typeof Handle_TDocStd_XLink_3;
  Handle_TDocStd_XLink_4: typeof Handle_TDocStd_XLink_4;
  TDF_LabelMap_1: typeof TDF_LabelMap_1;
  TDF_LabelMap_2: typeof TDF_LabelMap_2;
  TDF_LabelMap_3: typeof TDF_LabelMap_3;
  Handle_TDF_AttributeDelta_1: typeof Handle_TDF_AttributeDelta_1;
  Handle_TDF_AttributeDelta_2: typeof Handle_TDF_AttributeDelta_2;
  Handle_TDF_AttributeDelta_3: typeof Handle_TDF_AttributeDelta_3;
  Handle_TDF_AttributeDelta_4: typeof Handle_TDF_AttributeDelta_4;
  TDF_IDMap_1: typeof TDF_IDMap_1;
  TDF_IDMap_2: typeof TDF_IDMap_2;
  TDF_IDMap_3: typeof TDF_IDMap_3;
  TDF_IDList_1: typeof TDF_IDList_1;
  TDF_IDList_2: typeof TDF_IDList_2;
  TDF_IDList_3: typeof TDF_IDList_3;
  TDF_LabelDataMap_1: typeof TDF_LabelDataMap_1;
  TDF_LabelDataMap_2: typeof TDF_LabelDataMap_2;
  TDF_LabelDataMap_3: typeof TDF_LabelDataMap_3;
  TDF_LabelIntegerMap_1: typeof TDF_LabelIntegerMap_1;
  TDF_LabelIntegerMap_2: typeof TDF_LabelIntegerMap_2;
  TDF_LabelIntegerMap_3: typeof TDF_LabelIntegerMap_3;
  Handle_TDF_DataSet_1: typeof Handle_TDF_DataSet_1;
  Handle_TDF_DataSet_2: typeof Handle_TDF_DataSet_2;
  Handle_TDF_DataSet_3: typeof Handle_TDF_DataSet_3;
  Handle_TDF_DataSet_4: typeof Handle_TDF_DataSet_4;
  Handle_TDF_DeltaOnModification_1: typeof Handle_TDF_DeltaOnModification_1;
  Handle_TDF_DeltaOnModification_2: typeof Handle_TDF_DeltaOnModification_2;
  Handle_TDF_DeltaOnModification_3: typeof Handle_TDF_DeltaOnModification_3;
  Handle_TDF_DeltaOnModification_4: typeof Handle_TDF_DeltaOnModification_4;
  Handle_TDF_DefaultDeltaOnModification_1: typeof Handle_TDF_DefaultDeltaOnModification_1;
  Handle_TDF_DefaultDeltaOnModification_2: typeof Handle_TDF_DefaultDeltaOnModification_2;
  Handle_TDF_DefaultDeltaOnModification_3: typeof Handle_TDF_DefaultDeltaOnModification_3;
  Handle_TDF_DefaultDeltaOnModification_4: typeof Handle_TDF_DefaultDeltaOnModification_4;
  Handle_TDF_DeltaOnRemoval_1: typeof Handle_TDF_DeltaOnRemoval_1;
  Handle_TDF_DeltaOnRemoval_2: typeof Handle_TDF_DeltaOnRemoval_2;
  Handle_TDF_DeltaOnRemoval_3: typeof Handle_TDF_DeltaOnRemoval_3;
  Handle_TDF_DeltaOnRemoval_4: typeof Handle_TDF_DeltaOnRemoval_4;
  Handle_TDF_DefaultDeltaOnRemoval_1: typeof Handle_TDF_DefaultDeltaOnRemoval_1;
  Handle_TDF_DefaultDeltaOnRemoval_2: typeof Handle_TDF_DefaultDeltaOnRemoval_2;
  Handle_TDF_DefaultDeltaOnRemoval_3: typeof Handle_TDF_DefaultDeltaOnRemoval_3;
  Handle_TDF_DefaultDeltaOnRemoval_4: typeof Handle_TDF_DefaultDeltaOnRemoval_4;
  Handle_TDF_Delta_1: typeof Handle_TDF_Delta_1;
  Handle_TDF_Delta_2: typeof Handle_TDF_Delta_2;
  Handle_TDF_Delta_3: typeof Handle_TDF_Delta_3;
  Handle_TDF_Delta_4: typeof Handle_TDF_Delta_4;
  Handle_TDF_DeltaOnAddition_1: typeof Handle_TDF_DeltaOnAddition_1;
  Handle_TDF_DeltaOnAddition_2: typeof Handle_TDF_DeltaOnAddition_2;
  Handle_TDF_DeltaOnAddition_3: typeof Handle_TDF_DeltaOnAddition_3;
  Handle_TDF_DeltaOnAddition_4: typeof Handle_TDF_DeltaOnAddition_4;
  Handle_TDF_DeltaOnForget_1: typeof Handle_TDF_DeltaOnForget_1;
  Handle_TDF_DeltaOnForget_2: typeof Handle_TDF_DeltaOnForget_2;
  Handle_TDF_DeltaOnForget_3: typeof Handle_TDF_DeltaOnForget_3;
  Handle_TDF_DeltaOnForget_4: typeof Handle_TDF_DeltaOnForget_4;
  Handle_TDF_DeltaOnResume_1: typeof Handle_TDF_DeltaOnResume_1;
  Handle_TDF_DeltaOnResume_2: typeof Handle_TDF_DeltaOnResume_2;
  Handle_TDF_DeltaOnResume_3: typeof Handle_TDF_DeltaOnResume_3;
  Handle_TDF_DeltaOnResume_4: typeof Handle_TDF_DeltaOnResume_4;
  TDF_GUIDProgIDMap_1: typeof TDF_GUIDProgIDMap_1;
  TDF_GUIDProgIDMap_2: typeof TDF_GUIDProgIDMap_2;
  TDF_GUIDProgIDMap_3: typeof TDF_GUIDProgIDMap_3;
  TDF_LabelDoubleMap_1: typeof TDF_LabelDoubleMap_1;
  TDF_LabelDoubleMap_2: typeof TDF_LabelDoubleMap_2;
  TDF_LabelDoubleMap_3: typeof TDF_LabelDoubleMap_3;
  Handle_TDF_HAttributeArray1_1: typeof Handle_TDF_HAttributeArray1_1;
  Handle_TDF_HAttributeArray1_2: typeof Handle_TDF_HAttributeArray1_2;
  Handle_TDF_HAttributeArray1_3: typeof Handle_TDF_HAttributeArray1_3;
  Handle_TDF_HAttributeArray1_4: typeof Handle_TDF_HAttributeArray1_4;
  TDF_LabelIndexedMap_1: typeof TDF_LabelIndexedMap_1;
  TDF_LabelIndexedMap_2: typeof TDF_LabelIndexedMap_2;
  TDF_LabelIndexedMap_3: typeof TDF_LabelIndexedMap_3;
  Handle_TDF_RelocationTable_1: typeof Handle_TDF_RelocationTable_1;
  Handle_TDF_RelocationTable_2: typeof Handle_TDF_RelocationTable_2;
  Handle_TDF_RelocationTable_3: typeof Handle_TDF_RelocationTable_3;
  Handle_TDF_RelocationTable_4: typeof Handle_TDF_RelocationTable_4;
  Handle_TDataStd_Current_1: typeof Handle_TDataStd_Current_1;
  Handle_TDataStd_Current_2: typeof Handle_TDataStd_Current_2;
  Handle_TDataStd_Current_3: typeof Handle_TDataStd_Current_3;
  Handle_TDataStd_Current_4: typeof Handle_TDataStd_Current_4;
  Handle_TDataStd_DeltaOnModificationOfByteArray_1: typeof Handle_TDataStd_DeltaOnModificationOfByteArray_1;
  Handle_TDataStd_DeltaOnModificationOfByteArray_2: typeof Handle_TDataStd_DeltaOnModificationOfByteArray_2;
  Handle_TDataStd_DeltaOnModificationOfByteArray_3: typeof Handle_TDataStd_DeltaOnModificationOfByteArray_3;
  Handle_TDataStd_DeltaOnModificationOfByteArray_4: typeof Handle_TDataStd_DeltaOnModificationOfByteArray_4;
  Handle_TDataStd_DeltaOnModificationOfExtStringArray_1: typeof Handle_TDataStd_DeltaOnModificationOfExtStringArray_1;
  Handle_TDataStd_DeltaOnModificationOfExtStringArray_2: typeof Handle_TDataStd_DeltaOnModificationOfExtStringArray_2;
  Handle_TDataStd_DeltaOnModificationOfExtStringArray_3: typeof Handle_TDataStd_DeltaOnModificationOfExtStringArray_3;
  Handle_TDataStd_DeltaOnModificationOfExtStringArray_4: typeof Handle_TDataStd_DeltaOnModificationOfExtStringArray_4;
  Handle_TDataStd_DeltaOnModificationOfIntArray_1: typeof Handle_TDataStd_DeltaOnModificationOfIntArray_1;
  Handle_TDataStd_DeltaOnModificationOfIntArray_2: typeof Handle_TDataStd_DeltaOnModificationOfIntArray_2;
  Handle_TDataStd_DeltaOnModificationOfIntArray_3: typeof Handle_TDataStd_DeltaOnModificationOfIntArray_3;
  Handle_TDataStd_DeltaOnModificationOfIntArray_4: typeof Handle_TDataStd_DeltaOnModificationOfIntArray_4;
  Handle_TDataStd_DeltaOnModificationOfIntPackedMap_1: typeof Handle_TDataStd_DeltaOnModificationOfIntPackedMap_1;
  Handle_TDataStd_DeltaOnModificationOfIntPackedMap_2: typeof Handle_TDataStd_DeltaOnModificationOfIntPackedMap_2;
  Handle_TDataStd_DeltaOnModificationOfIntPackedMap_3: typeof Handle_TDataStd_DeltaOnModificationOfIntPackedMap_3;
  Handle_TDataStd_DeltaOnModificationOfIntPackedMap_4: typeof Handle_TDataStd_DeltaOnModificationOfIntPackedMap_4;
  Handle_TDataStd_DeltaOnModificationOfRealArray_1: typeof Handle_TDataStd_DeltaOnModificationOfRealArray_1;
  Handle_TDataStd_DeltaOnModificationOfRealArray_2: typeof Handle_TDataStd_DeltaOnModificationOfRealArray_2;
  Handle_TDataStd_DeltaOnModificationOfRealArray_3: typeof Handle_TDataStd_DeltaOnModificationOfRealArray_3;
  Handle_TDataStd_DeltaOnModificationOfRealArray_4: typeof Handle_TDataStd_DeltaOnModificationOfRealArray_4;
  Handle_TDataStd_HDataMapOfStringByte_1: typeof Handle_TDataStd_HDataMapOfStringByte_1;
  Handle_TDataStd_HDataMapOfStringByte_2: typeof Handle_TDataStd_HDataMapOfStringByte_2;
  Handle_TDataStd_HDataMapOfStringByte_3: typeof Handle_TDataStd_HDataMapOfStringByte_3;
  Handle_TDataStd_HDataMapOfStringByte_4: typeof Handle_TDataStd_HDataMapOfStringByte_4;
  Handle_TDataStd_HDataMapOfStringHArray1OfInteger_1: typeof Handle_TDataStd_HDataMapOfStringHArray1OfInteger_1;
  Handle_TDataStd_HDataMapOfStringHArray1OfInteger_2: typeof Handle_TDataStd_HDataMapOfStringHArray1OfInteger_2;
  Handle_TDataStd_HDataMapOfStringHArray1OfInteger_3: typeof Handle_TDataStd_HDataMapOfStringHArray1OfInteger_3;
  Handle_TDataStd_HDataMapOfStringHArray1OfInteger_4: typeof Handle_TDataStd_HDataMapOfStringHArray1OfInteger_4;
  Handle_TDataStd_HDataMapOfStringHArray1OfReal_1: typeof Handle_TDataStd_HDataMapOfStringHArray1OfReal_1;
  Handle_TDataStd_HDataMapOfStringHArray1OfReal_2: typeof Handle_TDataStd_HDataMapOfStringHArray1OfReal_2;
  Handle_TDataStd_HDataMapOfStringHArray1OfReal_3: typeof Handle_TDataStd_HDataMapOfStringHArray1OfReal_3;
  Handle_TDataStd_HDataMapOfStringHArray1OfReal_4: typeof Handle_TDataStd_HDataMapOfStringHArray1OfReal_4;
  Handle_TDataStd_HDataMapOfStringInteger_1: typeof Handle_TDataStd_HDataMapOfStringInteger_1;
  Handle_TDataStd_HDataMapOfStringInteger_2: typeof Handle_TDataStd_HDataMapOfStringInteger_2;
  Handle_TDataStd_HDataMapOfStringInteger_3: typeof Handle_TDataStd_HDataMapOfStringInteger_3;
  Handle_TDataStd_HDataMapOfStringInteger_4: typeof Handle_TDataStd_HDataMapOfStringInteger_4;
  Handle_TDataStd_HDataMapOfStringReal_1: typeof Handle_TDataStd_HDataMapOfStringReal_1;
  Handle_TDataStd_HDataMapOfStringReal_2: typeof Handle_TDataStd_HDataMapOfStringReal_2;
  Handle_TDataStd_HDataMapOfStringReal_3: typeof Handle_TDataStd_HDataMapOfStringReal_3;
  Handle_TDataStd_HDataMapOfStringReal_4: typeof Handle_TDataStd_HDataMapOfStringReal_4;
  Handle_TDataStd_HDataMapOfStringString_1: typeof Handle_TDataStd_HDataMapOfStringString_1;
  Handle_TDataStd_HDataMapOfStringString_2: typeof Handle_TDataStd_HDataMapOfStringString_2;
  Handle_TDataStd_HDataMapOfStringString_3: typeof Handle_TDataStd_HDataMapOfStringString_3;
  Handle_TDataStd_HDataMapOfStringString_4: typeof Handle_TDataStd_HDataMapOfStringString_4;
  Handle_TDocStd_Document_1: typeof Handle_TDocStd_Document_1;
  Handle_TDocStd_Document_2: typeof Handle_TDocStd_Document_2;
  Handle_TDocStd_Document_3: typeof Handle_TDocStd_Document_3;
  Handle_TDocStd_Document_4: typeof Handle_TDocStd_Document_4;
  Handle_TDocStd_ApplicationDelta_1: typeof Handle_TDocStd_ApplicationDelta_1;
  Handle_TDocStd_ApplicationDelta_2: typeof Handle_TDocStd_ApplicationDelta_2;
  Handle_TDocStd_ApplicationDelta_3: typeof Handle_TDocStd_ApplicationDelta_3;
  Handle_TDocStd_ApplicationDelta_4: typeof Handle_TDocStd_ApplicationDelta_4;
  Handle_TDocStd_CompoundDelta_1: typeof Handle_TDocStd_CompoundDelta_1;
  Handle_TDocStd_CompoundDelta_2: typeof Handle_TDocStd_CompoundDelta_2;
  Handle_TDocStd_CompoundDelta_3: typeof Handle_TDocStd_CompoundDelta_3;
  Handle_TDocStd_CompoundDelta_4: typeof Handle_TDocStd_CompoundDelta_4;
  TDocStd_LabelIDMapDataMap_1: typeof TDocStd_LabelIDMapDataMap_1;
  TDocStd_LabelIDMapDataMap_2: typeof TDocStd_LabelIDMapDataMap_2;
  TDocStd_LabelIDMapDataMap_3: typeof TDocStd_LabelIDMapDataMap_3;
  Handle_TDocStd_Modified_1: typeof Handle_TDocStd_Modified_1;
  Handle_TDocStd_Modified_2: typeof Handle_TDocStd_Modified_2;
  Handle_TDocStd_Modified_3: typeof Handle_TDocStd_Modified_3;
  Handle_TDocStd_Modified_4: typeof Handle_TDocStd_Modified_4;
  Handle_TDocStd_MultiTransactionManager_1: typeof Handle_TDocStd_MultiTransactionManager_1;
  Handle_TDocStd_MultiTransactionManager_2: typeof Handle_TDocStd_MultiTransactionManager_2;
  Handle_TDocStd_MultiTransactionManager_3: typeof Handle_TDocStd_MultiTransactionManager_3;
  Handle_TDocStd_MultiTransactionManager_4: typeof Handle_TDocStd_MultiTransactionManager_4;
  Handle_TDocStd_Owner_1: typeof Handle_TDocStd_Owner_1;
  Handle_TDocStd_Owner_2: typeof Handle_TDocStd_Owner_2;
  Handle_TDocStd_Owner_3: typeof Handle_TDocStd_Owner_3;
  Handle_TDocStd_Owner_4: typeof Handle_TDocStd_Owner_4;
  Handle_TDocStd_XLinkRoot_1: typeof Handle_TDocStd_XLinkRoot_1;
  Handle_TDocStd_XLinkRoot_2: typeof Handle_TDocStd_XLinkRoot_2;
  Handle_TDocStd_XLinkRoot_3: typeof Handle_TDocStd_XLinkRoot_3;
  Handle_TDocStd_XLinkRoot_4: typeof Handle_TDocStd_XLinkRoot_4;
  TFunction_Array1OfDataMapOfGUIDDriver_1: typeof TFunction_Array1OfDataMapOfGUIDDriver_1;
  TFunction_Array1OfDataMapOfGUIDDriver_2: typeof TFunction_Array1OfDataMapOfGUIDDriver_2;
  TFunction_Array1OfDataMapOfGUIDDriver_3: typeof TFunction_Array1OfDataMapOfGUIDDriver_3;
  TFunction_Array1OfDataMapOfGUIDDriver_4: typeof TFunction_Array1OfDataMapOfGUIDDriver_4;
  TFunction_Array1OfDataMapOfGUIDDriver_5: typeof TFunction_Array1OfDataMapOfGUIDDriver_5;
  TFunction_DataMapOfLabelListOfLabel_1: typeof TFunction_DataMapOfLabelListOfLabel_1;
  TFunction_DataMapOfLabelListOfLabel_2: typeof TFunction_DataMapOfLabelListOfLabel_2;
  TFunction_DataMapOfLabelListOfLabel_3: typeof TFunction_DataMapOfLabelListOfLabel_3;
  TFunction_DoubleMapOfIntegerLabel_1: typeof TFunction_DoubleMapOfIntegerLabel_1;
  TFunction_DoubleMapOfIntegerLabel_2: typeof TFunction_DoubleMapOfIntegerLabel_2;
  TFunction_DoubleMapOfIntegerLabel_3: typeof TFunction_DoubleMapOfIntegerLabel_3;
  Handle_TFunction_HArray1OfDataMapOfGUIDDriver_1: typeof Handle_TFunction_HArray1OfDataMapOfGUIDDriver_1;
  Handle_TFunction_HArray1OfDataMapOfGUIDDriver_2: typeof Handle_TFunction_HArray1OfDataMapOfGUIDDriver_2;
  Handle_TFunction_HArray1OfDataMapOfGUIDDriver_3: typeof Handle_TFunction_HArray1OfDataMapOfGUIDDriver_3;
  Handle_TFunction_HArray1OfDataMapOfGUIDDriver_4: typeof Handle_TFunction_HArray1OfDataMapOfGUIDDriver_4;
  Handle_TFunction_DriverTable_1: typeof Handle_TFunction_DriverTable_1;
  Handle_TFunction_DriverTable_2: typeof Handle_TFunction_DriverTable_2;
  Handle_TFunction_DriverTable_3: typeof Handle_TFunction_DriverTable_3;
  Handle_TFunction_DriverTable_4: typeof Handle_TFunction_DriverTable_4;
  Handle_TFunction_GraphNode_1: typeof Handle_TFunction_GraphNode_1;
  Handle_TFunction_GraphNode_2: typeof Handle_TFunction_GraphNode_2;
  Handle_TFunction_GraphNode_3: typeof Handle_TFunction_GraphNode_3;
  Handle_TFunction_GraphNode_4: typeof Handle_TFunction_GraphNode_4;
  Handle_TFunction_Logbook_1: typeof Handle_TFunction_Logbook_1;
  Handle_TFunction_Logbook_2: typeof Handle_TFunction_Logbook_2;
  Handle_TFunction_Logbook_3: typeof Handle_TFunction_Logbook_3;
  Handle_TFunction_Logbook_4: typeof Handle_TFunction_Logbook_4;
  Handle_TFunction_Scope_1: typeof Handle_TFunction_Scope_1;
  Handle_TFunction_Scope_2: typeof Handle_TFunction_Scope_2;
  Handle_TFunction_Scope_3: typeof Handle_TFunction_Scope_3;
  Handle_TFunction_Scope_4: typeof Handle_TFunction_Scope_4;
  TDataStd_RealEnum: typeof TDataStd_RealEnum;
  TFunction_ExecutionStatus: typeof TFunction_ExecutionStatus;
};
