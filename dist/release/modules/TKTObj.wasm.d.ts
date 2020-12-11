declare const libName = "./modules/TKTObj.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class TObj_Application extends TDocStd_Application {
  GetInstance(): Handle_TObj_Application;
  Messenger(): any;
  SaveDocument(theSourceDoc: any, theTargetFile: TCollection_ExtendedString): Standard_Boolean;
  LoadDocument(theSourceFile: TCollection_ExtendedString, theTargetDoc: any): Standard_Boolean;
  CreateNewDocument(theDoc: any, theFormat: TCollection_ExtendedString): Standard_Boolean;
  ErrorMessage_1(theMsg: TCollection_ExtendedString, theLevel: Message_Gravity): void;
  ErrorMessage_2(theMsg: TCollection_ExtendedString): void;
  SetVerbose(isVerbose: Standard_Boolean): void;
  IsVerbose(): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  ResourcesName(): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_Assistant {
  constructor();
  FindModel(theName: Standard_CString): any;
  BindModel(theModel: any): void;
  ClearModelMap(): void;
  FindType(theTypeIndex: Standard_Integer): any;
  FindTypeIndex(theType: any): Standard_Integer;
  BindType(theType: any): Standard_Integer;
  ClearTypeMap(): void;
  SetCurrentModel(theModel: any): void;
  GetCurrentModel(): any;
  UnSetCurrentModel(): void;
  GetAppVersion(): Standard_Integer;
}

export declare class TObj_Object extends Standard_Transient {
  GetModel(): any;
  GetChildren(theType: any): any;
  GetChildLabel(): TDF_Label;
  getChildLabel(theRank: Standard_Integer): TDF_Label;
  GetLabel(): TDF_Label;
  GetDataLabel(): TDF_Label;
  GetReferenceLabel(): TDF_Label;
  GetDictionary(): any;
  GetName_1(): any;
  GetName_2(theName: TCollection_ExtendedString): Standard_Boolean;
  GetName_3(theName: TCollection_AsciiString): Standard_Boolean;
  SetName_1(theName: any): Standard_Boolean;
  SetName_2(theName: any): Standard_Boolean;
  SetName_3(name: Standard_CString): Standard_Boolean;
  GetNameForClone(a0: any): any;
  HasReference(theObject: any): Standard_Boolean;
  GetReferences(theType: any): any;
  RemoveAllReferences(): void;
  GetBackReferences(theType: any): any;
  AddBackReference(theObject: any): void;
  RemoveBackReference(theObject: any, theSingleOnly: Standard_Boolean): void;
  RemoveBackReferences(theMode: TObj_DeletingMode): Standard_Boolean;
  ClearBackReferences(): void;
  HasBackReferences(): Standard_Boolean;
  ReplaceReference(theOldObject: any, theNewObject: any): void;
  GetBadReference(theRoot: TDF_Label, theBadReference: TDF_Label): Standard_Boolean;
  RelocateReferences(theFromRoot: TDF_Label, theToRoot: TDF_Label, theUpdateBackRefs: Standard_Boolean): Standard_Boolean;
  CanRemoveReference(theObject: any): Standard_Boolean;
  RemoveReference(theObject: any): void;
  BeforeForgetReference(a0: TDF_Label): void;
  CanDetach(theMode: TObj_DeletingMode): Standard_Boolean;
  Detach_1(theMode: TObj_DeletingMode): Standard_Boolean;
  Detach_2(theLabel: TDF_Label, theMode: TObj_DeletingMode): Standard_Boolean;
  GetObj(theLabel: TDF_Label, theResult: any, isSuper: Standard_Boolean): Standard_Boolean;
  GetFatherObject(theType: any): any;
  IsAlive(): Standard_Boolean;
  Clone(theTargetLabel: TDF_Label, theRelocTable: any): any;
  CopyReferences(theTargetObject: any, theRelocTable: any): void;
  CopyChildren(theTargetLabel: TDF_Label, theRelocTable: any): void;
  GetOrder(): Standard_Integer;
  SetOrder(theIndx: Standard_Integer): Standard_Boolean;
  HasModifications(): Standard_Boolean;
  GetTypeFlags(): Standard_Integer;
  GetFlags(): Standard_Integer;
  SetFlags(theMask: Standard_Integer): void;
  TestFlags(theMask: Standard_Integer): Standard_Boolean;
  ClearFlags(theMask: Standard_Integer): void;
  AfterRetrieval(): void;
  BeforeStoring(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_Persistence {
  CreateNewObject(theType: Standard_CString, theLabel: TDF_Label): any;
  DumpTypes(theOs: Standard_OStream): void;
}

export declare class TObj_Partition extends TObj_Object {
  Create(theLabel: TDF_Label, theSetName: Standard_Boolean): any;
  SetName(theName: any): Standard_Boolean;
  AfterRetrieval(): void;
  NewLabel(): TDF_Label;
  SetNamePrefix(thePrefix: any): void;
  GetNamePrefix(): any;
  GetNewName(theIsToChangeCount: Standard_Boolean): any;
  GetLastIndex(): Standard_Integer;
  SetLastIndex(theIndex: Standard_Integer): void;
  GetPartition(theObject: any): any;
  Update(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_Model extends Standard_Transient {
  SetMessenger(theMsgr: any): void;
  Messenger(): any;
  Load(theFile: TCollection_ExtendedString): Standard_Boolean;
  SaveAs(theFile: TCollection_ExtendedString): Standard_Boolean;
  Save(): Standard_Boolean;
  Close(): Standard_Boolean;
  CloseDocument(theDoc: any): void;
  GetDocumentModel(theLabel: TDF_Label): any;
  GetFile(): any;
  GetObjects(): any;
  GetChildren(): any;
  FindObject(theName: any, theDictionary: any): any;
  GetChecker(): any;
  GetRoot(): any;
  GetMainPartition(): any;
  GetLabel(): TDF_Label;
  GetModelName(): any;
  SetNewName(theObject: any): void;
  IsRegisteredName(theName: any, theDictionary: any): Standard_Boolean;
  RegisterName(theName: any, theLabel: TDF_Label, theDictionary: any): void;
  UnRegisterName(theName: any, theDictionary: any): void;
  HasOpenCommand(): Standard_Boolean;
  OpenCommand(): void;
  CommitCommand(): void;
  AbortCommand(): void;
  IsModified(): Standard_Boolean;
  SetModified(theModified: Standard_Boolean): void;
  GetApplication(): any;
  GetFormat(): TCollection_ExtendedString;
  GetFormatVersion(): Standard_Integer;
  Update(): Standard_Boolean;
  GetGUID(): Standard_GUID;
  GetDictionary(): any;
  GetDocument(): any;
  SetLabel(theLabel: TDF_Label): void;
  Paste(theModel: any, theRelocTable: any): Standard_Boolean;
  NewEmpty(): any;
  CopyReferences(theTarget: any, theRelocTable: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_CheckModel extends Message_Algorithm {
  constructor(theModel: any)
  SetToFix(theToFix: Standard_Boolean): void;
  IsToFix(): Standard_Boolean;
  GetModel(): any;
  Perform(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_HiddenPartition extends TObj_Partition {
  constructor(theLabel: TDF_Label)
  GetTypeFlags(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_ObjectIterator extends Standard_Transient {
  constructor();
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_LabelIterator extends TObj_ObjectIterator {
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  LabelValue(): TDF_Label;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_ModelIterator extends TObj_ObjectIterator {
  constructor(theModel: any)
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_OcafObjectIterator extends TObj_LabelIterator {
  constructor(theLabel: TDF_Label, theType: any, theRecursive: Standard_Boolean, theAllSubChildren: Standard_Boolean)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_ReferenceIterator extends TObj_LabelIterator {
  constructor(theLabel: TDF_Label, theType: any, theRecursive: Standard_Boolean)
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_SequenceIterator extends TObj_ObjectIterator {
  constructor(theObjects: any, theType: any)
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_TIntSparseArray extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  Set(theLabel: TDF_Label): any;
  Size(): Standard_Size;
  GetIterator(): any;
  HasValue(theId: Standard_Size): Standard_Boolean;
  Value(theId: Standard_Size): Standard_Integer;
  SetValue(theId: Standard_Size, theValue: Standard_Integer): void;
  UnsetValue(theId: Standard_Size): void;
  Clear(): void;
  NewEmpty(): any;
  BackupCopy(): any;
  Restore(theDelta: any): void;
  Paste(theInto: any, theRT: any): void;
  BeforeCommitTransaction(): void;
  DeltaOnModification(theDelta: any): void;
  AfterUndo(theDelta: any, toForce: Standard_Boolean): Standard_Boolean;
  SetDoBackup(toDo: Standard_Boolean): void;
  ClearDelta(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_TModel extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  Set(theModel: any): void;
  Model(): any;
  NewEmpty(): any;
  Restore(theWith: any): void;
  Paste(theInto: any, theRT: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_TNameContainer extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  Set_1(theLabel: TDF_Label): any;
  RecordName(theName: any, theLabel: TDF_Label): void;
  RemoveName(theName: any): void;
  IsRegistered(theName: any): Standard_Boolean;
  Clear(): void;
  Set_2(theElem: TObj_DataMapOfNameLabel): void;
  Get(): TObj_DataMapOfNameLabel;
  NewEmpty(): any;
  Restore(theWith: any): void;
  Paste(theInto: any, theRT: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_TObject extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  Set_1(theLabel: TDF_Label, theElem: any): any;
  Set_2(theElem: any): void;
  Get(): any;
  NewEmpty(): any;
  Restore(theWith: any): void;
  Paste(theInto: any, theRT: any): void;
  BeforeForget(): void;
  AfterUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_TReference extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  Set_1(theLabel: TDF_Label, theObject: any, theMaster: any): any;
  Set_2(theObject: any, theMasterLabel: TDF_Label): void;
  Set_3(theLabel: TDF_Label, theMasterLabel: TDF_Label): void;
  Get(): any;
  GetMasterLabel(): TDF_Label;
  GetLabel(): TDF_Label;
  NewEmpty(): any;
  Restore(theWith: any): void;
  Paste(theInto: any, theRT: any): void;
  BeforeForget(): void;
  BeforeUndo(theDelta: any, isForced: Standard_Boolean): Standard_Boolean;
  AfterUndo(theDelta: any, isForced: Standard_Boolean): Standard_Boolean;
  AfterResume(): void;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TObj_TXYZ extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  Set_1(theLabel: TDF_Label, theXYZ: gp_XYZ): any;
  Set_2(theXYZ: gp_XYZ): void;
  Get(): gp_XYZ;
  NewEmpty(): any;
  Restore(theWith: any): void;
  Paste(theInto: any, theRT: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_TObj_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_Application): void;
  get(): TObj_Application;
}

  export declare class Handle_TObj_Application_1 extends Handle_TObj_Application {
    constructor();
  }

  export declare class Handle_TObj_Application_2 extends Handle_TObj_Application {
    constructor(thePtr: TObj_Application);
  }

  export declare class Handle_TObj_Application_3 extends Handle_TObj_Application {
    constructor(theHandle: Handle_TObj_Application);
  }

  export declare class Handle_TObj_Application_4 extends Handle_TObj_Application {
    constructor(theHandle: Handle_TObj_Application);
  }

export declare class Handle_TObj_HSequenceOfObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_HSequenceOfObject): void;
  get(): TObj_HSequenceOfObject;
}

  export declare class Handle_TObj_HSequenceOfObject_1 extends Handle_TObj_HSequenceOfObject {
    constructor();
  }

  export declare class Handle_TObj_HSequenceOfObject_2 extends Handle_TObj_HSequenceOfObject {
    constructor(thePtr: TObj_HSequenceOfObject);
  }

  export declare class Handle_TObj_HSequenceOfObject_3 extends Handle_TObj_HSequenceOfObject {
    constructor(theHandle: Handle_TObj_HSequenceOfObject);
  }

  export declare class Handle_TObj_HSequenceOfObject_4 extends Handle_TObj_HSequenceOfObject {
    constructor(theHandle: Handle_TObj_HSequenceOfObject);
  }

export declare class Handle_TObj_Object {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_Object): void;
  get(): TObj_Object;
}

  export declare class Handle_TObj_Object_1 extends Handle_TObj_Object {
    constructor();
  }

  export declare class Handle_TObj_Object_2 extends Handle_TObj_Object {
    constructor(thePtr: TObj_Object);
  }

  export declare class Handle_TObj_Object_3 extends Handle_TObj_Object {
    constructor(theHandle: Handle_TObj_Object);
  }

  export declare class Handle_TObj_Object_4 extends Handle_TObj_Object {
    constructor(theHandle: Handle_TObj_Object);
  }

export declare class Handle_TObj_Partition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_Partition): void;
  get(): TObj_Partition;
}

  export declare class Handle_TObj_Partition_1 extends Handle_TObj_Partition {
    constructor();
  }

  export declare class Handle_TObj_Partition_2 extends Handle_TObj_Partition {
    constructor(thePtr: TObj_Partition);
  }

  export declare class Handle_TObj_Partition_3 extends Handle_TObj_Partition {
    constructor(theHandle: Handle_TObj_Partition);
  }

  export declare class Handle_TObj_Partition_4 extends Handle_TObj_Partition {
    constructor(theHandle: Handle_TObj_Partition);
  }

export declare class Handle_TObj_Model {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_Model): void;
  get(): TObj_Model;
}

  export declare class Handle_TObj_Model_1 extends Handle_TObj_Model {
    constructor();
  }

  export declare class Handle_TObj_Model_2 extends Handle_TObj_Model {
    constructor(thePtr: TObj_Model);
  }

  export declare class Handle_TObj_Model_3 extends Handle_TObj_Model {
    constructor(theHandle: Handle_TObj_Model);
  }

  export declare class Handle_TObj_Model_4 extends Handle_TObj_Model {
    constructor(theHandle: Handle_TObj_Model);
  }

export declare class Handle_TObj_CheckModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_CheckModel): void;
  get(): TObj_CheckModel;
}

  export declare class Handle_TObj_CheckModel_1 extends Handle_TObj_CheckModel {
    constructor();
  }

  export declare class Handle_TObj_CheckModel_2 extends Handle_TObj_CheckModel {
    constructor(thePtr: TObj_CheckModel);
  }

  export declare class Handle_TObj_CheckModel_3 extends Handle_TObj_CheckModel {
    constructor(theHandle: Handle_TObj_CheckModel);
  }

  export declare class Handle_TObj_CheckModel_4 extends Handle_TObj_CheckModel {
    constructor(theHandle: Handle_TObj_CheckModel);
  }

export declare class Handle_TObj_HiddenPartition {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_HiddenPartition): void;
  get(): TObj_HiddenPartition;
}

  export declare class Handle_TObj_HiddenPartition_1 extends Handle_TObj_HiddenPartition {
    constructor();
  }

  export declare class Handle_TObj_HiddenPartition_2 extends Handle_TObj_HiddenPartition {
    constructor(thePtr: TObj_HiddenPartition);
  }

  export declare class Handle_TObj_HiddenPartition_3 extends Handle_TObj_HiddenPartition {
    constructor(theHandle: Handle_TObj_HiddenPartition);
  }

  export declare class Handle_TObj_HiddenPartition_4 extends Handle_TObj_HiddenPartition {
    constructor(theHandle: Handle_TObj_HiddenPartition);
  }

export declare class Handle_TObj_ObjectIterator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_ObjectIterator): void;
  get(): TObj_ObjectIterator;
}

  export declare class Handle_TObj_ObjectIterator_1 extends Handle_TObj_ObjectIterator {
    constructor();
  }

  export declare class Handle_TObj_ObjectIterator_2 extends Handle_TObj_ObjectIterator {
    constructor(thePtr: TObj_ObjectIterator);
  }

  export declare class Handle_TObj_ObjectIterator_3 extends Handle_TObj_ObjectIterator {
    constructor(theHandle: Handle_TObj_ObjectIterator);
  }

  export declare class Handle_TObj_ObjectIterator_4 extends Handle_TObj_ObjectIterator {
    constructor(theHandle: Handle_TObj_ObjectIterator);
  }

export declare class Handle_TObj_LabelIterator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_LabelIterator): void;
  get(): TObj_LabelIterator;
}

  export declare class Handle_TObj_LabelIterator_1 extends Handle_TObj_LabelIterator {
    constructor();
  }

  export declare class Handle_TObj_LabelIterator_2 extends Handle_TObj_LabelIterator {
    constructor(thePtr: TObj_LabelIterator);
  }

  export declare class Handle_TObj_LabelIterator_3 extends Handle_TObj_LabelIterator {
    constructor(theHandle: Handle_TObj_LabelIterator);
  }

  export declare class Handle_TObj_LabelIterator_4 extends Handle_TObj_LabelIterator {
    constructor(theHandle: Handle_TObj_LabelIterator);
  }

export declare class Handle_TObj_ModelIterator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_ModelIterator): void;
  get(): TObj_ModelIterator;
}

  export declare class Handle_TObj_ModelIterator_1 extends Handle_TObj_ModelIterator {
    constructor();
  }

  export declare class Handle_TObj_ModelIterator_2 extends Handle_TObj_ModelIterator {
    constructor(thePtr: TObj_ModelIterator);
  }

  export declare class Handle_TObj_ModelIterator_3 extends Handle_TObj_ModelIterator {
    constructor(theHandle: Handle_TObj_ModelIterator);
  }

  export declare class Handle_TObj_ModelIterator_4 extends Handle_TObj_ModelIterator {
    constructor(theHandle: Handle_TObj_ModelIterator);
  }

export declare class Handle_TObj_OcafObjectIterator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_OcafObjectIterator): void;
  get(): TObj_OcafObjectIterator;
}

  export declare class Handle_TObj_OcafObjectIterator_1 extends Handle_TObj_OcafObjectIterator {
    constructor();
  }

  export declare class Handle_TObj_OcafObjectIterator_2 extends Handle_TObj_OcafObjectIterator {
    constructor(thePtr: TObj_OcafObjectIterator);
  }

  export declare class Handle_TObj_OcafObjectIterator_3 extends Handle_TObj_OcafObjectIterator {
    constructor(theHandle: Handle_TObj_OcafObjectIterator);
  }

  export declare class Handle_TObj_OcafObjectIterator_4 extends Handle_TObj_OcafObjectIterator {
    constructor(theHandle: Handle_TObj_OcafObjectIterator);
  }

export declare class Handle_TObj_ReferenceIterator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_ReferenceIterator): void;
  get(): TObj_ReferenceIterator;
}

  export declare class Handle_TObj_ReferenceIterator_1 extends Handle_TObj_ReferenceIterator {
    constructor();
  }

  export declare class Handle_TObj_ReferenceIterator_2 extends Handle_TObj_ReferenceIterator {
    constructor(thePtr: TObj_ReferenceIterator);
  }

  export declare class Handle_TObj_ReferenceIterator_3 extends Handle_TObj_ReferenceIterator {
    constructor(theHandle: Handle_TObj_ReferenceIterator);
  }

  export declare class Handle_TObj_ReferenceIterator_4 extends Handle_TObj_ReferenceIterator {
    constructor(theHandle: Handle_TObj_ReferenceIterator);
  }

export declare class Handle_TObj_SequenceIterator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_SequenceIterator): void;
  get(): TObj_SequenceIterator;
}

  export declare class Handle_TObj_SequenceIterator_1 extends Handle_TObj_SequenceIterator {
    constructor();
  }

  export declare class Handle_TObj_SequenceIterator_2 extends Handle_TObj_SequenceIterator {
    constructor(thePtr: TObj_SequenceIterator);
  }

  export declare class Handle_TObj_SequenceIterator_3 extends Handle_TObj_SequenceIterator {
    constructor(theHandle: Handle_TObj_SequenceIterator);
  }

  export declare class Handle_TObj_SequenceIterator_4 extends Handle_TObj_SequenceIterator {
    constructor(theHandle: Handle_TObj_SequenceIterator);
  }

export declare class Handle_TObj_TIntSparseArray {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_TIntSparseArray): void;
  get(): TObj_TIntSparseArray;
}

  export declare class Handle_TObj_TIntSparseArray_1 extends Handle_TObj_TIntSparseArray {
    constructor();
  }

  export declare class Handle_TObj_TIntSparseArray_2 extends Handle_TObj_TIntSparseArray {
    constructor(thePtr: TObj_TIntSparseArray);
  }

  export declare class Handle_TObj_TIntSparseArray_3 extends Handle_TObj_TIntSparseArray {
    constructor(theHandle: Handle_TObj_TIntSparseArray);
  }

  export declare class Handle_TObj_TIntSparseArray_4 extends Handle_TObj_TIntSparseArray {
    constructor(theHandle: Handle_TObj_TIntSparseArray);
  }

export declare class Handle_TObj_TModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_TModel): void;
  get(): TObj_TModel;
}

  export declare class Handle_TObj_TModel_1 extends Handle_TObj_TModel {
    constructor();
  }

  export declare class Handle_TObj_TModel_2 extends Handle_TObj_TModel {
    constructor(thePtr: TObj_TModel);
  }

  export declare class Handle_TObj_TModel_3 extends Handle_TObj_TModel {
    constructor(theHandle: Handle_TObj_TModel);
  }

  export declare class Handle_TObj_TModel_4 extends Handle_TObj_TModel {
    constructor(theHandle: Handle_TObj_TModel);
  }

export declare class Handle_TObj_TNameContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_TNameContainer): void;
  get(): TObj_TNameContainer;
}

  export declare class Handle_TObj_TNameContainer_1 extends Handle_TObj_TNameContainer {
    constructor();
  }

  export declare class Handle_TObj_TNameContainer_2 extends Handle_TObj_TNameContainer {
    constructor(thePtr: TObj_TNameContainer);
  }

  export declare class Handle_TObj_TNameContainer_3 extends Handle_TObj_TNameContainer {
    constructor(theHandle: Handle_TObj_TNameContainer);
  }

  export declare class Handle_TObj_TNameContainer_4 extends Handle_TObj_TNameContainer {
    constructor(theHandle: Handle_TObj_TNameContainer);
  }

export declare class Handle_TObj_TObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_TObject): void;
  get(): TObj_TObject;
}

  export declare class Handle_TObj_TObject_1 extends Handle_TObj_TObject {
    constructor();
  }

  export declare class Handle_TObj_TObject_2 extends Handle_TObj_TObject {
    constructor(thePtr: TObj_TObject);
  }

  export declare class Handle_TObj_TObject_3 extends Handle_TObj_TObject {
    constructor(theHandle: Handle_TObj_TObject);
  }

  export declare class Handle_TObj_TObject_4 extends Handle_TObj_TObject {
    constructor(theHandle: Handle_TObj_TObject);
  }

export declare class Handle_TObj_TReference {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_TReference): void;
  get(): TObj_TReference;
}

  export declare class Handle_TObj_TReference_1 extends Handle_TObj_TReference {
    constructor();
  }

  export declare class Handle_TObj_TReference_2 extends Handle_TObj_TReference {
    constructor(thePtr: TObj_TReference);
  }

  export declare class Handle_TObj_TReference_3 extends Handle_TObj_TReference {
    constructor(theHandle: Handle_TObj_TReference);
  }

  export declare class Handle_TObj_TReference_4 extends Handle_TObj_TReference {
    constructor(theHandle: Handle_TObj_TReference);
  }

export declare class Handle_TObj_TXYZ {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TObj_TXYZ): void;
  get(): TObj_TXYZ;
}

  export declare class Handle_TObj_TXYZ_1 extends Handle_TObj_TXYZ {
    constructor();
  }

  export declare class Handle_TObj_TXYZ_2 extends Handle_TObj_TXYZ {
    constructor(thePtr: TObj_TXYZ);
  }

  export declare class Handle_TObj_TXYZ_3 extends Handle_TObj_TXYZ {
    constructor(theHandle: Handle_TObj_TXYZ);
  }

  export declare class Handle_TObj_TXYZ_4 extends Handle_TObj_TXYZ {
    constructor(theHandle: Handle_TObj_TXYZ);
  }

export declare type TKTObjLib = {
  TObj_CheckModel: typeof TObj_CheckModel;
  TObj_HiddenPartition: typeof TObj_HiddenPartition;
  TObj_ModelIterator: typeof TObj_ModelIterator;
  TObj_OcafObjectIterator: typeof TObj_OcafObjectIterator;
  TObj_ReferenceIterator: typeof TObj_ReferenceIterator;
  TObj_SequenceIterator: typeof TObj_SequenceIterator;
  TObj_TIntSparseArray: typeof TObj_TIntSparseArray;
  TObj_TModel: typeof TObj_TModel;
  TObj_TNameContainer: typeof TObj_TNameContainer;
  TObj_TObject: typeof TObj_TObject;
  TObj_TReference: typeof TObj_TReference;
  TObj_TXYZ: typeof TObj_TXYZ;
  Handle_TObj_Application_1: typeof Handle_TObj_Application_1;
  Handle_TObj_Application_2: typeof Handle_TObj_Application_2;
  Handle_TObj_Application_3: typeof Handle_TObj_Application_3;
  Handle_TObj_Application_4: typeof Handle_TObj_Application_4;
  Handle_TObj_HSequenceOfObject_1: typeof Handle_TObj_HSequenceOfObject_1;
  Handle_TObj_HSequenceOfObject_2: typeof Handle_TObj_HSequenceOfObject_2;
  Handle_TObj_HSequenceOfObject_3: typeof Handle_TObj_HSequenceOfObject_3;
  Handle_TObj_HSequenceOfObject_4: typeof Handle_TObj_HSequenceOfObject_4;
  Handle_TObj_Object_1: typeof Handle_TObj_Object_1;
  Handle_TObj_Object_2: typeof Handle_TObj_Object_2;
  Handle_TObj_Object_3: typeof Handle_TObj_Object_3;
  Handle_TObj_Object_4: typeof Handle_TObj_Object_4;
  Handle_TObj_Partition_1: typeof Handle_TObj_Partition_1;
  Handle_TObj_Partition_2: typeof Handle_TObj_Partition_2;
  Handle_TObj_Partition_3: typeof Handle_TObj_Partition_3;
  Handle_TObj_Partition_4: typeof Handle_TObj_Partition_4;
  Handle_TObj_Model_1: typeof Handle_TObj_Model_1;
  Handle_TObj_Model_2: typeof Handle_TObj_Model_2;
  Handle_TObj_Model_3: typeof Handle_TObj_Model_3;
  Handle_TObj_Model_4: typeof Handle_TObj_Model_4;
  Handle_TObj_CheckModel_1: typeof Handle_TObj_CheckModel_1;
  Handle_TObj_CheckModel_2: typeof Handle_TObj_CheckModel_2;
  Handle_TObj_CheckModel_3: typeof Handle_TObj_CheckModel_3;
  Handle_TObj_CheckModel_4: typeof Handle_TObj_CheckModel_4;
  Handle_TObj_HiddenPartition_1: typeof Handle_TObj_HiddenPartition_1;
  Handle_TObj_HiddenPartition_2: typeof Handle_TObj_HiddenPartition_2;
  Handle_TObj_HiddenPartition_3: typeof Handle_TObj_HiddenPartition_3;
  Handle_TObj_HiddenPartition_4: typeof Handle_TObj_HiddenPartition_4;
  Handle_TObj_ObjectIterator_1: typeof Handle_TObj_ObjectIterator_1;
  Handle_TObj_ObjectIterator_2: typeof Handle_TObj_ObjectIterator_2;
  Handle_TObj_ObjectIterator_3: typeof Handle_TObj_ObjectIterator_3;
  Handle_TObj_ObjectIterator_4: typeof Handle_TObj_ObjectIterator_4;
  Handle_TObj_LabelIterator_1: typeof Handle_TObj_LabelIterator_1;
  Handle_TObj_LabelIterator_2: typeof Handle_TObj_LabelIterator_2;
  Handle_TObj_LabelIterator_3: typeof Handle_TObj_LabelIterator_3;
  Handle_TObj_LabelIterator_4: typeof Handle_TObj_LabelIterator_4;
  Handle_TObj_ModelIterator_1: typeof Handle_TObj_ModelIterator_1;
  Handle_TObj_ModelIterator_2: typeof Handle_TObj_ModelIterator_2;
  Handle_TObj_ModelIterator_3: typeof Handle_TObj_ModelIterator_3;
  Handle_TObj_ModelIterator_4: typeof Handle_TObj_ModelIterator_4;
  Handle_TObj_OcafObjectIterator_1: typeof Handle_TObj_OcafObjectIterator_1;
  Handle_TObj_OcafObjectIterator_2: typeof Handle_TObj_OcafObjectIterator_2;
  Handle_TObj_OcafObjectIterator_3: typeof Handle_TObj_OcafObjectIterator_3;
  Handle_TObj_OcafObjectIterator_4: typeof Handle_TObj_OcafObjectIterator_4;
  Handle_TObj_ReferenceIterator_1: typeof Handle_TObj_ReferenceIterator_1;
  Handle_TObj_ReferenceIterator_2: typeof Handle_TObj_ReferenceIterator_2;
  Handle_TObj_ReferenceIterator_3: typeof Handle_TObj_ReferenceIterator_3;
  Handle_TObj_ReferenceIterator_4: typeof Handle_TObj_ReferenceIterator_4;
  Handle_TObj_SequenceIterator_1: typeof Handle_TObj_SequenceIterator_1;
  Handle_TObj_SequenceIterator_2: typeof Handle_TObj_SequenceIterator_2;
  Handle_TObj_SequenceIterator_3: typeof Handle_TObj_SequenceIterator_3;
  Handle_TObj_SequenceIterator_4: typeof Handle_TObj_SequenceIterator_4;
  Handle_TObj_TIntSparseArray_1: typeof Handle_TObj_TIntSparseArray_1;
  Handle_TObj_TIntSparseArray_2: typeof Handle_TObj_TIntSparseArray_2;
  Handle_TObj_TIntSparseArray_3: typeof Handle_TObj_TIntSparseArray_3;
  Handle_TObj_TIntSparseArray_4: typeof Handle_TObj_TIntSparseArray_4;
  Handle_TObj_TModel_1: typeof Handle_TObj_TModel_1;
  Handle_TObj_TModel_2: typeof Handle_TObj_TModel_2;
  Handle_TObj_TModel_3: typeof Handle_TObj_TModel_3;
  Handle_TObj_TModel_4: typeof Handle_TObj_TModel_4;
  Handle_TObj_TNameContainer_1: typeof Handle_TObj_TNameContainer_1;
  Handle_TObj_TNameContainer_2: typeof Handle_TObj_TNameContainer_2;
  Handle_TObj_TNameContainer_3: typeof Handle_TObj_TNameContainer_3;
  Handle_TObj_TNameContainer_4: typeof Handle_TObj_TNameContainer_4;
  Handle_TObj_TObject_1: typeof Handle_TObj_TObject_1;
  Handle_TObj_TObject_2: typeof Handle_TObj_TObject_2;
  Handle_TObj_TObject_3: typeof Handle_TObj_TObject_3;
  Handle_TObj_TObject_4: typeof Handle_TObj_TObject_4;
  Handle_TObj_TReference_1: typeof Handle_TObj_TReference_1;
  Handle_TObj_TReference_2: typeof Handle_TObj_TReference_2;
  Handle_TObj_TReference_3: typeof Handle_TObj_TReference_3;
  Handle_TObj_TReference_4: typeof Handle_TObj_TReference_4;
  Handle_TObj_TXYZ_1: typeof Handle_TObj_TXYZ_1;
  Handle_TObj_TXYZ_2: typeof Handle_TObj_TXYZ_2;
  Handle_TObj_TXYZ_3: typeof Handle_TObj_TXYZ_3;
  Handle_TObj_TXYZ_4: typeof Handle_TObj_TXYZ_4;
};
