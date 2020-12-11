declare const libName = "./modules/TKXSBase.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class IFSelect_Editor extends Standard_Transient {
  SetValue(num: Graphic3d_ZLayerId, typval: Handle_Interface_TypedValue, shortname: Standard_CString, accessmode: IFSelect_EditValue): void;
  SetList(num: Standard_Integer, max: Standard_Integer): void;
  NbValues(): Standard_Integer;
  TypedValue(num: Standard_Integer): any;
  IsList(num: Standard_Integer): Standard_Boolean;
  MaxList(num: Standard_Integer): Standard_Integer;
  Name(num: Standard_Integer, isshort: Standard_Boolean): Standard_CString;
  EditMode(num: Standard_Integer): IFSelect_EditValue;
  NameNumber(name: Standard_CString): Standard_Integer;
  PrintNames(S: Standard_OStream): void;
  PrintDefs(S: Standard_OStream, labels: Standard_Boolean): void;
  MaxNameLength(what: Standard_Integer): Standard_Integer;
  Label(): TCollection_AsciiString;
  Form(readonly: Standard_Boolean, undoable: Standard_Boolean): any;
  Recognize(form: any): Standard_Boolean;
  StringValue(form: any, num: Standard_Integer): any;
  ListEditor(num: Standard_Integer): any;
  ListValue(form: any, num: Standard_Integer): any;
  Load(form: any, ent: any, model: any): Standard_Boolean;
  Update(form: any, num: Standard_Integer, newval: any, enforce: Standard_Boolean): Standard_Boolean;
  UpdateList(form: any, num: Standard_Integer, newlist: any, enforce: Standard_Boolean): Standard_Boolean;
  Apply(form: any, ent: any, model: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class APIHeaderSection_EditHeader extends IFSelect_Editor {
  constructor()
  Label(): TCollection_AsciiString;
  Recognize(form: any): Standard_Boolean;
  StringValue(form: any, num: Standard_Integer): any;
  Apply(form: any, ent: any, model: any): Standard_Boolean;
  Load(form: any, ent: any, model: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class APIHeaderSection_MakeHeader {
  Init(nameval: Standard_CString): void;
  IsDone(): Standard_Boolean;
  Apply(model: any): void;
  NewModel(protocol: any): any;
  HasFn(): Standard_Boolean;
  FnValue(): any;
  SetName(aName: any): void;
  Name(): any;
  SetTimeStamp(aTimeStamp: any): void;
  TimeStamp(): any;
  SetAuthor(aAuthor: any): void;
  SetAuthorValue(num: Standard_Integer, aAuthor: any): void;
  Author(): any;
  AuthorValue(num: Standard_Integer): any;
  NbAuthor(): Standard_Integer;
  SetOrganization(aOrganization: any): void;
  SetOrganizationValue(num: Standard_Integer, aOrganization: any): void;
  Organization(): any;
  OrganizationValue(num: Standard_Integer): any;
  NbOrganization(): Standard_Integer;
  SetPreprocessorVersion(aPreprocessorVersion: any): void;
  PreprocessorVersion(): any;
  SetOriginatingSystem(aOriginatingSystem: any): void;
  OriginatingSystem(): any;
  SetAuthorisation(aAuthorisation: any): void;
  Authorisation(): any;
  HasFs(): Standard_Boolean;
  FsValue(): any;
  SetSchemaIdentifiers(aSchemaIdentifiers: any): void;
  SetSchemaIdentifiersValue(num: Standard_Integer, aSchemaIdentifier: any): void;
  SchemaIdentifiers(): any;
  SchemaIdentifiersValue(num: Standard_Integer): any;
  NbSchemaIdentifiers(): Standard_Integer;
  AddSchemaIdentifier(aSchemaIdentifier: any): void;
  HasFd(): Standard_Boolean;
  FdValue(): any;
  SetDescription(aDescription: any): void;
  SetDescriptionValue(num: Standard_Integer, aDescription: any): void;
  Description(): any;
  DescriptionValue(num: Standard_Integer): any;
  NbDescription(): Standard_Integer;
  SetImplementationLevel(aImplementationLevel: any): void;
  ImplementationLevel(): any;
}

  export declare class APIHeaderSection_MakeHeader_1 extends APIHeaderSection_MakeHeader {
    constructor(shapetype: Standard_Integer);
  }

  export declare class APIHeaderSection_MakeHeader_2 extends APIHeaderSection_MakeHeader {
    constructor(model: any);
  }

export declare class HeaderSection {
  constructor();
  Protocol(): any;
}

export declare class HeaderSection_FileDescription extends Standard_Transient {
  constructor()
  Init(aDescription: any, aImplementationLevel: any): void;
  SetDescription(aDescription: any): void;
  Description(): any;
  DescriptionValue(num: Standard_Integer): any;
  NbDescription(): Standard_Integer;
  SetImplementationLevel(aImplementationLevel: any): void;
  ImplementationLevel(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HeaderSection_FileName extends Standard_Transient {
  constructor()
  Init(aName: any, aTimeStamp: any, aAuthor: any, aOrganization: any, aPreprocessorVersion: any, aOriginatingSystem: any, aAuthorisation: any): void;
  SetName(aName: any): void;
  Name(): any;
  SetTimeStamp(aTimeStamp: any): void;
  TimeStamp(): any;
  SetAuthor(aAuthor: any): void;
  Author(): any;
  AuthorValue(num: Standard_Integer): any;
  NbAuthor(): Standard_Integer;
  SetOrganization(aOrganization: any): void;
  Organization(): any;
  OrganizationValue(num: Standard_Integer): any;
  NbOrganization(): Standard_Integer;
  SetPreprocessorVersion(aPreprocessorVersion: any): void;
  PreprocessorVersion(): any;
  SetOriginatingSystem(aOriginatingSystem: any): void;
  OriginatingSystem(): any;
  SetAuthorisation(aAuthorisation: any): void;
  Authorisation(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HeaderSection_FileSchema extends Standard_Transient {
  constructor()
  Init(aSchemaIdentifiers: any): void;
  SetSchemaIdentifiers(aSchemaIdentifiers: any): void;
  SchemaIdentifiers(): any;
  SchemaIdentifiersValue(num: Standard_Integer): any;
  NbSchemaIdentifiers(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_Protocol extends Standard_Transient {
  Active(): any;
  SetActive(aprotocol: any): void;
  ClearActive(): void;
  NbResources(): Standard_Integer;
  Resource(num: Standard_Integer): any;
  CaseNumber(obj: any): Standard_Integer;
  IsDynamicType(obj: any): Standard_Boolean;
  NbTypes(obj: any): Standard_Integer;
  Type(obj: any, nt: Standard_Integer): any;
  TypeNumber(atype: any): Standard_Integer;
  GlobalCheck(G: Interface_Graph, ach: any): Standard_Boolean;
  NewModel(): any;
  IsSuitableModel(model: any): Standard_Boolean;
  UnknownEntity(): any;
  IsUnknownEntity(ent: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_Protocol extends Interface_Protocol {
  constructor()
  NbResources(): Standard_Integer;
  Resource(num: Standard_Integer): any;
  CaseNumber(obj: any): Standard_Integer;
  TypeNumber(atype: any): Standard_Integer;
  SchemaName(): Standard_CString;
  NewModel(): any;
  IsSuitableModel(model: any): Standard_Boolean;
  UnknownEntity(): any;
  IsUnknownEntity(ent: any): Standard_Boolean;
  DescrNumber(adescr: any): Standard_Integer;
  AddDescr(adescr: any, CN: Standard_Integer): void;
  HasDescr(): Standard_Boolean;
  Descr_1(num: Standard_Integer): any;
  Descr_2(name: Standard_CString, anylevel: Standard_Boolean): any;
  ESDescr(name: Standard_CString, anylevel: Standard_Boolean): any;
  ECDescr(names: TColStd_SequenceOfAsciiString, anylevel: Standard_Boolean): any;
  AddPDescr(pdescr: any): void;
  PDescr(name: Standard_CString, anylevel: Standard_Boolean): any;
  AddBasicDescr(esdescr: any): void;
  BasicDescr(name: Standard_CString, anylevel: Standard_Boolean): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class HeaderSection_Protocol extends StepData_Protocol {
  constructor()
  TypeNumber(atype: any): Standard_Integer;
  SchemaName(): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_BitMap {
  Initialize_1(nbitems: Standard_Integer, resflags: Standard_Integer): void;
  Initialize_2(other: Interface_BitMap, copied: Standard_Boolean): void;
  Reservate(moreflags: Standard_Integer): void;
  SetLength(nbitems: Standard_Integer): void;
  AddFlag(name: Standard_CString): Standard_Integer;
  AddSomeFlags(more: Standard_Integer): Standard_Integer;
  RemoveFlag(num: Standard_Integer): Standard_Boolean;
  SetFlagName(num: Standard_Integer, name: Standard_CString): Standard_Boolean;
  NbFlags(): Standard_Integer;
  Length(): Standard_Integer;
  FlagName(num: Standard_Integer): Standard_CString;
  FlagNumber(name: Standard_CString): Standard_Integer;
  Value(item: Standard_Integer, flag: Standard_Integer): Standard_Boolean;
  SetValue(item: Standard_Integer, val: Standard_Boolean, flag: Standard_Integer): void;
  SetTrue(item: Standard_Integer, flag: Standard_Integer): void;
  SetFalse(item: Standard_Integer, flag: Standard_Integer): void;
  CTrue(item: Standard_Integer, flag: Standard_Integer): Standard_Boolean;
  CFalse(item: Standard_Integer, flag: Standard_Integer): Standard_Boolean;
  Init(val: Standard_Boolean, flag: Standard_Integer): void;
  Clear(): void;
}

  export declare class Interface_BitMap_1 extends Interface_BitMap {
    constructor();
  }

  export declare class Interface_BitMap_2 extends Interface_BitMap {
    constructor(nbitems: Standard_Integer, resflags: Standard_Integer);
  }

  export declare class Interface_BitMap_3 extends Interface_BitMap {
    constructor(other: Interface_BitMap, copied: Standard_Boolean);
  }

export declare class Interface_InterfaceModel extends Standard_Transient {
  Destroy(): void;
  SetProtocol(proto: any): void;
  Protocol(): any;
  SetGTool(gtool: any): void;
  GTool(): any;
  DispatchStatus(): Standard_Boolean;
  Clear(): void;
  ClearEntities(): void;
  ClearLabels(): void;
  ClearHeader(): void;
  NbEntities(): Standard_Integer;
  Contains(anentity: any): Standard_Boolean;
  Number(anentity: any): Standard_Integer;
  Value(num: Standard_Integer): any;
  NbTypes(ent: any): Standard_Integer;
  Type(ent: any, num: Standard_Integer): any;
  TypeName(ent: any, complete: Standard_Boolean): Standard_CString;
  ClassName(typnam: Standard_CString): Standard_CString;
  EntityState(num: Standard_Integer): Interface_DataState;
  IsReportEntity(num: Standard_Integer, semantic: Standard_Boolean): Standard_Boolean;
  ReportEntity(num: Standard_Integer, semantic: Standard_Boolean): any;
  IsErrorEntity(num: Standard_Integer): Standard_Boolean;
  IsRedefinedContent(num: Standard_Integer): Standard_Boolean;
  ClearReportEntity(num: Standard_Integer): Standard_Boolean;
  SetReportEntity(num: Standard_Integer, rep: any): Standard_Boolean;
  AddReportEntity(rep: any, semantic: Standard_Boolean): Standard_Boolean;
  IsUnknownEntity(num: Standard_Integer): Standard_Boolean;
  FillSemanticChecks(checks: Interface_CheckIterator, clear: Standard_Boolean): void;
  HasSemanticChecks(): Standard_Boolean;
  Check(num: Standard_Integer, syntactic: Standard_Boolean): any;
  Reservate(nbent: Standard_Integer): void;
  AddEntity(anentity: any): void;
  AddWithRefs_1(anent: any, proto: any, level: Standard_Integer, listall: Standard_Boolean): void;
  AddWithRefs_2(anent: any, level: Standard_Integer, listall: Standard_Boolean): void;
  AddWithRefs_3(anent: any, lib: Interface_GeneralLib, level: Standard_Integer, listall: Standard_Boolean): void;
  ReplaceEntity(nument: Standard_Integer, anent: any): void;
  ReverseOrders(after: Standard_Integer): void;
  ChangeOrder(oldnum: Standard_Integer, newnum: Standard_Integer, count: Standard_Integer): void;
  GetFromTransfer(aniter: Interface_EntityIterator): void;
  GetFromAnother(other: any): void;
  NewEmptyModel(): any;
  SetCategoryNumber(num: Standard_Integer, val: Standard_Integer): Standard_Boolean;
  CategoryNumber(num: Standard_Integer): Standard_Integer;
  FillIterator(iter: Interface_EntityIterator): void;
  Entities(): Interface_EntityIterator;
  Reports(semantic: Standard_Boolean): Interface_EntityIterator;
  Redefineds(): Interface_EntityIterator;
  GlobalCheck(syntactic: Standard_Boolean): any;
  SetGlobalCheck(ach: any): void;
  VerifyCheck(ach: any): void;
  DumpHeader(S: Standard_OStream, level: Standard_Integer): void;
  Print(ent: any, s: Standard_OStream, mode: Standard_Integer): void;
  PrintLabel(ent: any, S: Standard_OStream): void;
  PrintToLog(ent: any, S: Standard_OStream): void;
  StringLabel(ent: any): any;
  NextNumberForLabel(label: Standard_CString, lastnum: Standard_Integer, exact: Standard_Boolean): Standard_Integer;
  HasTemplate(name: Standard_CString): Standard_Boolean;
  Template(name: Standard_CString): any;
  SetTemplate(name: Standard_CString, model: any): Standard_Boolean;
  ListTemplates(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_EntityIterator {
  AddList(list: any): void;
  AddItem(anentity: any): void;
  GetOneItem(anentity: any): void;
  SelectType(atype: any, keep: Standard_Boolean): void;
  NbEntities(): Standard_Integer;
  NbTyped(type: any): Standard_Integer;
  Typed(type: any): Interface_EntityIterator;
  Start(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  Content(): any;
  Destroy(): void;
}

  export declare class Interface_EntityIterator_1 extends Interface_EntityIterator {
    constructor();
  }

  export declare class Interface_EntityIterator_2 extends Interface_EntityIterator {
    constructor(list: any);
  }

export declare class Interface_GraphContent extends Interface_EntityIterator {
  GetFromGraph_1(agraph: Interface_Graph): void;
  GetFromGraph_2(agraph: Interface_Graph, stat: Standard_Integer): void;
  Result(): Interface_EntityIterator;
  Begin(): void;
  Evaluate(): void;
}

  export declare class Interface_GraphContent_1 extends Interface_GraphContent {
    constructor();
  }

  export declare class Interface_GraphContent_2 extends Interface_GraphContent {
    constructor(agraph: Interface_Graph);
  }

  export declare class Interface_GraphContent_3 extends Interface_GraphContent {
    constructor(agraph: Interface_Graph, stat: Standard_Integer);
  }

  export declare class Interface_GraphContent_4 extends Interface_GraphContent {
    constructor(agraph: Interface_Graph, ent: any);
  }

export declare class IFGraph_AllConnected extends Interface_GraphContent {
  GetFromEntity(ent: any): void;
  ResetData(): void;
  Evaluate(): void;
}

  export declare class IFGraph_AllConnected_1 extends IFGraph_AllConnected {
    constructor(agraph: Interface_Graph);
  }

  export declare class IFGraph_AllConnected_2 extends IFGraph_AllConnected {
    constructor(agraph: Interface_Graph, ent: any);
  }

export declare class IFGraph_AllShared extends Interface_GraphContent {
  GetFromEntity(ent: any): void;
  GetFromIter(iter: Interface_EntityIterator): void;
  ResetData(): void;
  Evaluate(): void;
}

  export declare class IFGraph_AllShared_1 extends IFGraph_AllShared {
    constructor(agraph: Interface_Graph);
  }

  export declare class IFGraph_AllShared_2 extends IFGraph_AllShared {
    constructor(agraph: Interface_Graph, ent: any);
  }

export declare class IFGraph_Articulations extends Interface_GraphContent {
  constructor(agraph: Interface_Graph, whole: Standard_Boolean)
  GetFromEntity(ent: any): void;
  GetFromIter(iter: Interface_EntityIterator): void;
  ResetData(): void;
  Evaluate(): void;
}

export declare class IFGraph_Compare extends Interface_GraphContent {
  constructor(agraph: Interface_Graph)
  GetFromEntity(ent: any, first: Standard_Boolean): void;
  GetFromIter(iter: Interface_EntityIterator, first: Standard_Boolean): void;
  Merge(): void;
  RemoveSecond(): void;
  KeepCommon(): void;
  ResetData(): void;
  Evaluate(): void;
  Common(): Interface_EntityIterator;
  FirstOnly(): Interface_EntityIterator;
  SecondOnly(): Interface_EntityIterator;
}

export declare class IFGraph_SubPartsIterator {
  GetParts(other: IFGraph_SubPartsIterator): void;
  Model(): any;
  AddPart(): void;
  NbParts(): Standard_Integer;
  PartNum(): Standard_Integer;
  SetLoad(): void;
  SetPartNum(num: Standard_Integer): void;
  GetFromEntity(ent: any, shared: Standard_Boolean): void;
  GetFromIter(iter: Interface_EntityIterator): void;
  Reset(): void;
  Evaluate(): void;
  Loaded(): Interface_GraphContent;
  LoadedGraph(): Interface_Graph;
  IsLoaded(ent: any): Standard_Boolean;
  IsInPart(ent: any): Standard_Boolean;
  EntityPartNum(ent: any): Standard_Integer;
  Start(): void;
  More(): Standard_Boolean;
  Next(): void;
  IsSingle(): Standard_Boolean;
  FirstEntity(): any;
  Entities(): Interface_EntityIterator;
}

  export declare class IFGraph_SubPartsIterator_1 extends IFGraph_SubPartsIterator {
    constructor(agraph: Interface_Graph, whole: Standard_Boolean);
  }

  export declare class IFGraph_SubPartsIterator_2 extends IFGraph_SubPartsIterator {
    constructor(other: IFGraph_SubPartsIterator);
  }

export declare class IFGraph_ConnectedComponants extends IFGraph_SubPartsIterator {
  constructor(agraph: Interface_Graph, whole: Standard_Boolean)
  Evaluate(): void;
}

export declare class IFGraph_Cumulate extends Interface_GraphContent {
  constructor(agraph: Interface_Graph)
  GetFromEntity(ent: any): void;
  GetFromIter(iter: Interface_EntityIterator): void;
  ResetData(): void;
  Evaluate(): void;
  Overlapped(): Interface_EntityIterator;
  Forgotten(): Interface_EntityIterator;
  PerCount(count: Standard_Integer): Interface_EntityIterator;
  NbTimes(ent: any): Standard_Integer;
  HighestNbTimes(): Standard_Integer;
}

export declare class IFGraph_Cycles extends IFGraph_SubPartsIterator {
  Evaluate(): void;
}

  export declare class IFGraph_Cycles_1 extends IFGraph_Cycles {
    constructor(agraph: Interface_Graph, whole: Standard_Boolean);
  }

  export declare class IFGraph_Cycles_2 extends IFGraph_Cycles {
    constructor(subparts: IFGraph_StrongComponants);
  }

export declare class IFGraph_ExternalSources extends Interface_GraphContent {
  constructor(agraph: Interface_Graph)
  GetFromEntity(ent: any): void;
  GetFromIter(iter: Interface_EntityIterator): void;
  ResetData(): void;
  Evaluate(): void;
  IsEmpty(): Standard_Boolean;
}

export declare class IFGraph_StrongComponants extends IFGraph_SubPartsIterator {
  constructor(agraph: Interface_Graph, whole: Standard_Boolean)
  Evaluate(): void;
}

export declare class IFGraph_SCRoots extends IFGraph_StrongComponants {
  Evaluate(): void;
}

  export declare class IFGraph_SCRoots_1 extends IFGraph_SCRoots {
    constructor(agraph: Interface_Graph, whole: Standard_Boolean);
  }

  export declare class IFGraph_SCRoots_2 extends IFGraph_SCRoots {
    constructor(subparts: IFGraph_StrongComponants);
  }

export declare class IFSelect {
  constructor();
  SaveSession(WS: any, file: Standard_CString): Standard_Boolean;
  RestoreSession(WS: any, file: Standard_CString): Standard_Boolean;
}

export declare class IFSelect_Activator extends Standard_Transient {
  Adding(actor: any, number: Standard_Integer, command: Standard_CString, mode: Standard_Integer): void;
  Add(number: Standard_Integer, command: Standard_CString): void;
  AddSet(number: Standard_Integer, command: Standard_CString): void;
  Remove(command: Standard_CString): void;
  Select(command: Standard_CString, number: Standard_Integer, actor: any): Standard_Boolean;
  Mode(command: Standard_CString): Standard_Integer;
  Commands(mode: Standard_Integer, command: Standard_CString): any;
  Do(number: Standard_Integer, pilot: any): IFSelect_ReturnStatus;
  Help(number: Standard_Integer): Standard_CString;
  Group(): Standard_CString;
  File(): Standard_CString;
  SetForGroup(group: Standard_CString, file: Standard_CString): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SessionPilot extends IFSelect_Activator {
  constructor(prompt: Standard_CString)
  Session(): any;
  Library(): any;
  RecordMode(): Standard_Boolean;
  SetSession(WS: any): void;
  SetLibrary(WL: any): void;
  SetRecordMode(mode: Standard_Boolean): void;
  SetCommandLine(command: TCollection_AsciiString): void;
  CommandLine(): TCollection_AsciiString;
  CommandPart(numarg: Standard_Integer): Standard_CString;
  NbWords(): Standard_Integer;
  Word(num: Standard_Integer): TCollection_AsciiString;
  Arg(num: Standard_Integer): Standard_CString;
  RemoveWord(num: Standard_Integer): Standard_Boolean;
  NbCommands(): Standard_Integer;
  Command(num: Standard_Integer): TCollection_AsciiString;
  RecordItem(item: any): IFSelect_ReturnStatus;
  RecordedItem(): any;
  Clear(): void;
  ReadScript(file: Standard_CString): IFSelect_ReturnStatus;
  Perform(): IFSelect_ReturnStatus;
  ExecuteAlias(aliasname: TCollection_AsciiString): IFSelect_ReturnStatus;
  Execute(command: TCollection_AsciiString): IFSelect_ReturnStatus;
  ExecuteCounter(counter: any, numword: Standard_Integer, mode: IFSelect_PrintCount): IFSelect_ReturnStatus;
  Number(val: Standard_CString): Standard_Integer;
  Do(number: Standard_Integer, session: any): IFSelect_ReturnStatus;
  Help(number: Standard_Integer): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_Act extends IFSelect_Activator {
  constructor(name: Standard_CString, help: Standard_CString, func: IFSelect_ActFunc)
  Do(number: Standard_Integer, pilot: any): IFSelect_ReturnStatus;
  Help(number: Standard_Integer): Standard_CString;
  SetGroup(group: Standard_CString, file: Standard_CString): void;
  AddFunc(name: Standard_CString, help: Standard_CString, func: IFSelect_ActFunc): void;
  AddFSet(name: Standard_CString, help: Standard_CString, func: IFSelect_ActFunc): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_GeneralModifier extends Standard_Transient {
  MayChangeGraph(): Standard_Boolean;
  SetDispatch(disp: any): void;
  Dispatch(): any;
  Applies(disp: any): Standard_Boolean;
  SetSelection(sel: any): void;
  ResetSelection(): void;
  HasSelection(): Standard_Boolean;
  Selection(): any;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_IntList {
  Initialize(nbe: Standard_Integer): void;
  Internals(nbrefs: Standard_Integer, ents: any, refs: any): void;
  NbEntities(): Standard_Integer;
  SetNbEntities(nbe: Standard_Integer): void;
  SetNumber(number: Standard_Integer): void;
  Number(): Standard_Integer;
  List(number: Standard_Integer, copied: Standard_Boolean): Interface_IntList;
  SetRedefined(mode: Standard_Boolean): void;
  Reservate(count: Standard_Integer): void;
  Add(ref: Standard_Integer): void;
  Length(): Standard_Integer;
  IsRedefined(num: Standard_Integer): Standard_Boolean;
  Value(num: Standard_Integer): Standard_Integer;
  Remove(num: Standard_Integer): Standard_Boolean;
  Clear(): void;
  AdjustSize(margin: Standard_Integer): void;
}

  export declare class Interface_IntList_1 extends Interface_IntList {
    constructor();
  }

  export declare class Interface_IntList_2 extends Interface_IntList {
    constructor(nbe: Standard_Integer);
  }

  export declare class Interface_IntList_3 extends Interface_IntList {
    constructor(other: Interface_IntList, copied: Standard_Boolean);
  }

export declare class IFSelect_AppliedModifiers extends Standard_Transient {
  constructor(nbmax: Standard_Integer, nbent: Standard_Integer)
  AddModif(modif: any): Standard_Boolean;
  AddNum(nument: Standard_Integer): Standard_Boolean;
  Count(): Standard_Integer;
  Item(num: Standard_Integer, modif: any, entcount: Standard_Integer): Standard_Boolean;
  ItemNum(nument: Standard_Integer): Standard_Integer;
  ItemList(): any;
  IsForAll(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SessionDumper extends Standard_Transient {
  First(): any;
  Next(): any;
  WriteOwn(file: IFSelect_SessionFile, item: any): Standard_Boolean;
  ReadOwn(file: IFSelect_SessionFile, type: TCollection_AsciiString, item: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_BasicDumper extends IFSelect_SessionDumper {
  constructor()
  WriteOwn(file: IFSelect_SessionFile, item: any): Standard_Boolean;
  ReadOwn(file: IFSelect_SessionFile, type: TCollection_AsciiString, item: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SignatureList extends Standard_Transient {
  constructor(withlist: Standard_Boolean)
  SetList(withlist: Standard_Boolean): void;
  ModeSignOnly(): Standard_Boolean;
  Clear(): void;
  Add(ent: any, sign: Standard_CString): void;
  LastValue(): Standard_CString;
  Init(name: Standard_CString, count: NCollection_IndexedDataMap<TCollection_AsciiString, Standard_Integer>, list: any, nbnuls: Standard_Integer): void;
  List(root: Standard_CString): any;
  HasEntities(): Standard_Boolean;
  NbNulls(): Standard_Integer;
  NbTimes(sign: Standard_CString): Standard_Integer;
  Entities(sign: Standard_CString): any;
  SetName(name: Standard_CString): void;
  Name(): Standard_CString;
  PrintCount(S: Standard_OStream): void;
  PrintList(S: Standard_OStream, model: any, mod: IFSelect_PrintCount): void;
  PrintSum(S: Standard_OStream): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_CheckCounter extends IFSelect_SignatureList {
  constructor(withlist: Standard_Boolean)
  SetSignature(sign: any): void;
  Signature(): any;
  Analyse(list: Interface_CheckIterator, model: any, original: Standard_Boolean, failsonly: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_Check extends Standard_Transient {
  SendFail(amsg: Message_Msg): void;
  AddFail_1(amess: any): void;
  AddFail_2(amess: any, orig: any): void;
  AddFail_3(amess: Standard_CString, orig: Standard_CString): void;
  AddFail_4(amsg: Message_Msg): void;
  HasFailed(): Standard_Boolean;
  NbFails(): Standard_Integer;
  Fail(num: Standard_Integer, final: Standard_Boolean): any;
  CFail(num: Standard_Integer, final: Standard_Boolean): Standard_CString;
  Fails(final: Standard_Boolean): any;
  SendWarning(amsg: Message_Msg): void;
  AddWarning_1(amess: any): void;
  AddWarning_2(amess: any, orig: any): void;
  AddWarning_3(amess: Standard_CString, orig: Standard_CString): void;
  AddWarning_4(amsg: Message_Msg): void;
  HasWarnings(): Standard_Boolean;
  NbWarnings(): Standard_Integer;
  Warning(num: Standard_Integer, final: Standard_Boolean): any;
  CWarning(num: Standard_Integer, final: Standard_Boolean): Standard_CString;
  Warnings(final: Standard_Boolean): any;
  SendMsg(amsg: Message_Msg): void;
  NbInfoMsgs(): Standard_Integer;
  InfoMsg(num: Standard_Integer, final: Standard_Boolean): any;
  CInfoMsg(num: Standard_Integer, final: Standard_Boolean): Standard_CString;
  InfoMsgs(final: Standard_Boolean): any;
  Status(): Interface_CheckStatus;
  Complies_1(status: Interface_CheckStatus): Standard_Boolean;
  Complies_2(mess: any, incl: Standard_Integer, status: Interface_CheckStatus): Standard_Boolean;
  HasEntity(): Standard_Boolean;
  Entity(): any;
  Clear(): void;
  ClearFails(): void;
  ClearWarnings(): void;
  ClearInfoMsgs(): void;
  Remove(mess: any, incl: Standard_Integer, status: Interface_CheckStatus): Standard_Boolean;
  Mend(pref: Standard_CString, num: Standard_Integer): Standard_Boolean;
  SetEntity(anentity: any): void;
  GetEntity(anentity: any): void;
  GetMessages(other: any): void;
  GetAsWarning(other: any, failsonly: Standard_Boolean): void;
  Print(S: Standard_OStream, level: Standard_Integer, final: Standard_Integer): void;
  Trace(level: Standard_Integer, final: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Interface_Check_1 extends Interface_Check {
    constructor();
  }

  export declare class Interface_Check_2 extends Interface_Check {
    constructor(anentity: any);
  }

export declare class Interface_CheckIterator {
  SetName(name: Standard_CString): void;
  Name(): Standard_CString;
  SetModel(model: any): void;
  Model(): any;
  Clear(): void;
  Merge(other: Interface_CheckIterator): void;
  Add(ach: any, num: Standard_Integer): void;
  Check_1(num: Standard_Integer): any;
  Check_2(ent: any): any;
  CCheck_1(num: Standard_Integer): any;
  CCheck_2(ent: any): any;
  IsEmpty(failsonly: Standard_Boolean): Standard_Boolean;
  Status(): Interface_CheckStatus;
  Complies(status: Interface_CheckStatus): Standard_Boolean;
  Extract_1(status: Interface_CheckStatus): Interface_CheckIterator;
  Extract_2(mess: Standard_CString, incl: Standard_Integer, status: Interface_CheckStatus): Interface_CheckIterator;
  Remove(mess: Standard_CString, incl: Standard_Integer, status: Interface_CheckStatus): Standard_Boolean;
  Checkeds(failsonly: Standard_Boolean, global: Standard_Boolean): any;
  Start(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  Number(): Standard_Integer;
  Print_1(S: Standard_OStream, failsonly: Standard_Boolean, final: Standard_Integer): void;
  Print_2(S: Standard_OStream, model: any, failsonly: Standard_Boolean, final: Standard_Integer): void;
  Destroy(): void;
}

  export declare class Interface_CheckIterator_1 extends Interface_CheckIterator {
    constructor();
  }

  export declare class Interface_CheckIterator_2 extends Interface_CheckIterator {
    constructor(name: Standard_CString);
  }

export declare class IFSelect_ContextWrite {
  Model(): any;
  Protocol(): any;
  FileName(): Standard_CString;
  AppliedModifiers(): any;
  Graph(): Interface_Graph;
  NbModifiers(): Standard_Integer;
  SetModifier(numod: Standard_Integer): Standard_Boolean;
  FileModifier(): any;
  IsForNone(): Standard_Boolean;
  IsForAll(): Standard_Boolean;
  NbEntities(): Standard_Integer;
  Start(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  AddCheck(check: any): void;
  AddWarning(start: any, mess: Standard_CString, orig: Standard_CString): void;
  AddFail(start: any, mess: Standard_CString, orig: Standard_CString): void;
  CCheck_1(num: Standard_Integer): any;
  CCheck_2(start: any): any;
  CheckList(): Interface_CheckIterator;
}

  export declare class IFSelect_ContextWrite_1 extends IFSelect_ContextWrite {
    constructor(model: any, proto: any, applieds: any, filename: Standard_CString);
  }

  export declare class IFSelect_ContextWrite_2 extends IFSelect_ContextWrite {
    constructor(hgraph: any, proto: any, applieds: any, filename: Standard_CString);
  }

export declare class IFSelect_Dispatch extends Standard_Transient {
  SetRootName(name: any): void;
  HasRootName(): Standard_Boolean;
  RootName(): any;
  SetFinalSelection(sel: any): void;
  FinalSelection(): any;
  Selections(): IFSelect_SelectionIterator;
  CanHaveRemainder(): Standard_Boolean;
  LimitedMax(nbent: Standard_Integer, max: Standard_Integer): Standard_Boolean;
  Label(): TCollection_AsciiString;
  GetEntities(G: Interface_Graph): Interface_EntityIterator;
  Packets(G: Interface_Graph, packs: IFGraph_SubPartsIterator): void;
  Packeted(G: Interface_Graph): Interface_EntityIterator;
  Remainder(G: Interface_Graph): Interface_EntityIterator;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_DispGlobal extends IFSelect_Dispatch {
  constructor()
  Label(): TCollection_AsciiString;
  LimitedMax(nbent: Standard_Integer, max: Standard_Integer): Standard_Boolean;
  Packets(G: Interface_Graph, packs: IFGraph_SubPartsIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_DispPerCount extends IFSelect_Dispatch {
  constructor()
  Count(): any;
  SetCount(count: any): void;
  CountValue(): Standard_Integer;
  Label(): TCollection_AsciiString;
  LimitedMax(nbent: Standard_Integer, max: Standard_Integer): Standard_Boolean;
  Packets(G: Interface_Graph, packs: IFGraph_SubPartsIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_DispPerFiles extends IFSelect_Dispatch {
  constructor()
  Count(): any;
  SetCount(count: any): void;
  CountValue(): Standard_Integer;
  Label(): TCollection_AsciiString;
  LimitedMax(nbent: Standard_Integer, max: Standard_Integer): Standard_Boolean;
  Packets(G: Interface_Graph, packs: IFGraph_SubPartsIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_DispPerOne extends IFSelect_Dispatch {
  constructor()
  Label(): TCollection_AsciiString;
  LimitedMax(nbent: Standard_Integer, max: Standard_Integer): Standard_Boolean;
  Packets(G: Interface_Graph, packs: IFGraph_SubPartsIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_DispPerSignature extends IFSelect_Dispatch {
  constructor()
  SignCounter(): any;
  SetSignCounter(sign: any): void;
  SignName(): Standard_CString;
  Label(): TCollection_AsciiString;
  LimitedMax(nbent: Standard_Integer, max: Standard_Integer): Standard_Boolean;
  Packets(G: Interface_Graph, packs: IFGraph_SubPartsIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_Functions {
  constructor();
  GiveEntity(WS: any, name: Standard_CString): any;
  GiveEntityNumber(WS: any, name: Standard_CString): Standard_Integer;
  GiveList(WS: any, first: Standard_CString, second: Standard_CString): any;
  GiveDispatch(WS: any, name: Standard_CString, mode: Standard_Boolean): any;
  Init(): void;
}

export declare class IFSelect_SignCounter extends IFSelect_SignatureList {
  Signature(): any;
  SetMap(withmap: Standard_Boolean): void;
  AddEntity(ent: any, model: any): Standard_Boolean;
  AddSign(ent: any, model: any): void;
  AddList(list: any, model: any): void;
  AddWithGraph(list: any, graph: Interface_Graph): void;
  AddModel(model: any): void;
  AddFromSelection(sel: any, G: Interface_Graph): void;
  SetSelection(sel: any): void;
  Selection(): any;
  SetSelMode(selmode: Standard_Integer): void;
  SelMode(): Standard_Integer;
  ComputeSelected(G: Interface_Graph, forced: Standard_Boolean): Standard_Boolean;
  Sign(ent: any, model: any): any;
  ComputedSign(ent: any, G: Interface_Graph): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IFSelect_SignCounter_1 extends IFSelect_SignCounter {
    constructor(withmap: Standard_Boolean, withlist: Standard_Boolean);
  }

  export declare class IFSelect_SignCounter_2 extends IFSelect_SignCounter {
    constructor(matcher: any, withmap: Standard_Boolean, withlist: Standard_Boolean);
  }

export declare class IFSelect_GraphCounter extends IFSelect_SignCounter {
  constructor(withmap: Standard_Boolean, withlist: Standard_Boolean)
  Applied(): any;
  SetApplied(sel: any): void;
  AddWithGraph(list: any, graph: Interface_Graph): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_Selection extends Standard_Transient {
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  UniqueResult(G: Interface_Graph): Interface_EntityIterator;
  CompleteResult(G: Interface_Graph): Interface_EntityIterator;
  FillIterator(iter: IFSelect_SelectionIterator): void;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_ListEditor extends Standard_Transient {
  LoadModel(model: any): void;
  LoadValues(vals: any): void;
  SetTouched(): void;
  ClearEdit(): void;
  LoadEdited(list: any): Standard_Boolean;
  SetValue(num: Standard_Integer, val: any): Standard_Boolean;
  AddValue(val: any, atnum: Standard_Integer): Standard_Boolean;
  Remove(num: Standard_Integer, howmany: Standard_Integer): Standard_Boolean;
  OriginalValues(): any;
  EditedValues(): any;
  NbValues(edited: Standard_Boolean): Standard_Integer;
  Value(num: Standard_Integer, edited: Standard_Boolean): any;
  IsChanged(num: Standard_Integer): Standard_Boolean;
  IsModified(num: Standard_Integer): Standard_Boolean;
  IsAdded(num: Standard_Integer): Standard_Boolean;
  IsTouched(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IFSelect_ListEditor_1 extends IFSelect_ListEditor {
    constructor();
  }

  export declare class IFSelect_ListEditor_2 extends IFSelect_ListEditor {
    constructor(def: any, max: Standard_Integer);
  }

export declare class IFSelect_ModelCopier extends Standard_Transient {
  constructor()
  SetShareOut(sho: any): void;
  ClearResult(): void;
  AddFile(filename: TCollection_AsciiString, content: any): Standard_Boolean;
  NameFile(num: Standard_Integer, filename: TCollection_AsciiString): Standard_Boolean;
  ClearFile(num: Standard_Integer): Standard_Boolean;
  SetAppliedModifiers(num: Standard_Integer, applied: any): Standard_Boolean;
  ClearAppliedModifiers(num: Standard_Integer): Standard_Boolean;
  Copy(eval: IFSelect_ShareOutResult, WL: any, protocol: any): Interface_CheckIterator;
  SendCopied(WL: any, protocol: any): Interface_CheckIterator;
  Send(eval: IFSelect_ShareOutResult, WL: any, protocol: any): Interface_CheckIterator;
  SendAll(filename: Standard_CString, G: Interface_Graph, WL: any, protocol: any): Interface_CheckIterator;
  SendSelected(filename: Standard_CString, G: Interface_Graph, WL: any, protocol: any, iter: Interface_EntityIterator): Interface_CheckIterator;
  CopiedRemaining(G: Interface_Graph, WL: any, TC: Interface_CopyTool, newmod: any): void;
  SetRemaining(CG: Interface_Graph): Standard_Boolean;
  NbFiles(): Standard_Integer;
  FileName(num: Standard_Integer): TCollection_AsciiString;
  FileModel(num: Standard_Integer): any;
  AppliedModifiers(num: Standard_Integer): any;
  BeginSentFiles(sho: any, record: Standard_Boolean): void;
  AddSentFile(filename: Standard_CString): void;
  SentFiles(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_Modifier extends IFSelect_GeneralModifier {
  Perform(ctx: IFSelect_ContextModif, target: any, protocol: any, TC: Interface_CopyTool): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_ModifEditForm extends IFSelect_Modifier {
  constructor(editform: any)
  EditForm(): any;
  Perform(ctx: IFSelect_ContextModif, target: any, protocol: any, TC: Interface_CopyTool): void;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_ModifReorder extends IFSelect_Modifier {
  constructor(rootlast: Standard_Boolean)
  Perform(ctx: IFSelect_ContextModif, target: any, protocol: any, TC: Interface_CopyTool): void;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_PacketList extends Standard_Transient {
  constructor(model: any)
  SetName(name: Standard_CString): void;
  Name(): Standard_CString;
  Model(): any;
  AddPacket(): void;
  Add(ent: any): void;
  AddList(list: any): void;
  NbPackets(): Standard_Integer;
  NbEntities(numpack: Standard_Integer): Standard_Integer;
  Entities(numpack: Standard_Integer): Interface_EntityIterator;
  HighestDuplicationCount(): Standard_Integer;
  NbDuplicated(count: Standard_Integer, andmore: Standard_Boolean): Standard_Integer;
  Duplicated(count: Standard_Integer, andmore: Standard_Boolean): Interface_EntityIterator;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_ParamEditor extends IFSelect_Editor {
  constructor(nbmax: Standard_Integer, label: Standard_CString)
  AddValue(val: any, shortname: Standard_CString): void;
  AddConstantText(val: Standard_CString, shortname: Standard_CString, completename: Standard_CString): void;
  Label(): TCollection_AsciiString;
  Recognize(form: any): Standard_Boolean;
  StringValue(form: any, num: Standard_Integer): any;
  Load(form: any, ent: any, model: any): Standard_Boolean;
  Apply(form: any, ent: any, model: any): Standard_Boolean;
  StaticEditor(list: any, label: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectDeduct extends IFSelect_Selection {
  SetInput(sel: any): void;
  Input(): any;
  HasInput(): Standard_Boolean;
  HasAlternate(): Standard_Boolean;
  Alternate(): any;
  InputResult(G: Interface_Graph): Interface_EntityIterator;
  FillIterator(iter: IFSelect_SelectionIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectAnyList extends IFSelect_SelectDeduct {
  KeepInputEntity(iter: Interface_EntityIterator): void;
  NbItems(ent: any): Standard_Integer;
  SetRange(rankfrom: any, rankto: any): void;
  SetOne(rank: any): void;
  SetFrom(rankfrom: any): void;
  SetUntil(rankto: any): void;
  HasLower(): Standard_Boolean;
  Lower(): any;
  LowerValue(): Standard_Integer;
  HasUpper(): Standard_Boolean;
  Upper(): any;
  UpperValue(): Standard_Integer;
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  FillResult(n1: Standard_Integer, n2: Standard_Integer, ent: any, res: Interface_EntityIterator): void;
  Label(): TCollection_AsciiString;
  ListLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectExtract extends IFSelect_SelectDeduct {
  IsDirect(): Standard_Boolean;
  SetDirect(direct: Standard_Boolean): void;
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  SortInGraph(rank: Standard_Integer, ent: any, G: Interface_Graph): Standard_Boolean;
  Label(): TCollection_AsciiString;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectAnyType extends IFSelect_SelectExtract {
  TypeForMatch(): any;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectBase extends IFSelect_Selection {
  FillIterator(iter: IFSelect_SelectionIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectCombine extends IFSelect_Selection {
  NbInputs(): Standard_Integer;
  Input(num: Standard_Integer): any;
  InputRank(sel: any): Standard_Integer;
  Add(sel: any, atnum: Standard_Integer): void;
  Remove_1(sel: any): Standard_Boolean;
  Remove_2(num: Standard_Integer): Standard_Boolean;
  FillIterator(iter: IFSelect_SelectionIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectControl extends IFSelect_Selection {
  MainInput(): any;
  HasSecondInput(): Standard_Boolean;
  SecondInput(): any;
  SetMainInput(sel: any): void;
  SetSecondInput(sel: any): void;
  FillIterator(iter: IFSelect_SelectionIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectDiff extends IFSelect_SelectControl {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectEntityNumber extends IFSelect_SelectBase {
  constructor()
  SetNumber(num: any): void;
  Number(): any;
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectErrorEntities extends IFSelect_SelectExtract {
  constructor()
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectExplore extends IFSelect_SelectDeduct {
  Level(): Standard_Integer;
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Explore(level: Standard_Integer, ent: any, G: Interface_Graph, explored: Interface_EntityIterator): Standard_Boolean;
  Label(): TCollection_AsciiString;
  ExploreLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectFlag extends IFSelect_SelectExtract {
  constructor(flagname: Standard_CString)
  FlagName(): Standard_CString;
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectInList extends IFSelect_SelectAnyList {
  ListedEntity(num: Standard_Integer, ent: any): any;
  FillResult(n1: Standard_Integer, n2: Standard_Integer, ent: any, result: Interface_EntityIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectIncorrectEntities extends IFSelect_SelectFlag {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectIntersection extends IFSelect_SelectCombine {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectModelEntities extends IFSelect_SelectBase {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  CompleteResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectModelRoots extends IFSelect_SelectBase {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectPointed extends IFSelect_SelectBase {
  constructor()
  Clear(): void;
  IsSet(): Standard_Boolean;
  SetEntity(item: any): void;
  SetList(list: any): void;
  Add(item: any): Standard_Boolean;
  Remove(item: any): Standard_Boolean;
  Toggle(item: any): Standard_Boolean;
  AddList(list: any): Standard_Boolean;
  RemoveList(list: any): Standard_Boolean;
  ToggleList(list: any): Standard_Boolean;
  Rank(item: any): Standard_Integer;
  NbItems(): Standard_Integer;
  Item(num: Standard_Integer): any;
  Update_1(control: any): void;
  Update_2(trf: any): void;
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectRange extends IFSelect_SelectExtract {
  constructor()
  SetRange(rankfrom: any, rankto: any): void;
  SetOne(rank: any): void;
  SetFrom(rankfrom: any): void;
  SetUntil(rankto: any): void;
  HasLower(): Standard_Boolean;
  Lower(): any;
  LowerValue(): Standard_Integer;
  HasUpper(): Standard_Boolean;
  Upper(): any;
  UpperValue(): Standard_Integer;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectRootComps extends IFSelect_SelectExtract {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectRoots extends IFSelect_SelectExtract {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectSent extends IFSelect_SelectExtract {
  constructor(sentcount: Standard_Integer, atleast: Standard_Boolean)
  SentCount(): Standard_Integer;
  AtLeast(): Standard_Boolean;
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectShared extends IFSelect_SelectDeduct {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectSharing extends IFSelect_SelectDeduct {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectSignature extends IFSelect_SelectExtract {
  Signature(): any;
  Counter(): any;
  SortInGraph(rank: Standard_Integer, ent: any, G: Interface_Graph): Standard_Boolean;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  SignatureText(): TCollection_AsciiString;
  IsExact(): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IFSelect_SelectSignature_1 extends IFSelect_SelectSignature {
    constructor(matcher: any, signtext: Standard_CString, exact: Standard_Boolean);
  }

  export declare class IFSelect_SelectSignature_2 extends IFSelect_SelectSignature {
    constructor(matcher: any, signtext: TCollection_AsciiString, exact: Standard_Boolean);
  }

  export declare class IFSelect_SelectSignature_3 extends IFSelect_SelectSignature {
    constructor(matcher: any, signtext: Standard_CString, exact: Standard_Boolean);
  }

export declare class IFSelect_SelectSignedShared extends IFSelect_SelectExplore {
  constructor(matcher: any, signtext: Standard_CString, exact: Standard_Boolean, level: Standard_Integer)
  Signature(): any;
  SignatureText(): TCollection_AsciiString;
  IsExact(): Standard_Boolean;
  Explore(level: Standard_Integer, ent: any, G: Interface_Graph, explored: Interface_EntityIterator): Standard_Boolean;
  ExploreLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectSignedSharing extends IFSelect_SelectExplore {
  constructor(matcher: any, signtext: Standard_CString, exact: Standard_Boolean, level: Standard_Integer)
  Signature(): any;
  SignatureText(): TCollection_AsciiString;
  IsExact(): Standard_Boolean;
  Explore(level: Standard_Integer, ent: any, G: Interface_Graph, explored: Interface_EntityIterator): Standard_Boolean;
  ExploreLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectSuite extends IFSelect_SelectDeduct {
  constructor()
  AddInput(item: any): Standard_Boolean;
  AddPrevious(item: any): void;
  AddNext(item: any): void;
  NbItems(): Standard_Integer;
  Item(num: Standard_Integer): any;
  SetLabel(lab: Standard_CString): void;
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectType extends IFSelect_SelectAnyType {
  SetType(atype: any): void;
  TypeForMatch(): any;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IFSelect_SelectType_1 extends IFSelect_SelectType {
    constructor();
  }

  export declare class IFSelect_SelectType_2 extends IFSelect_SelectType {
    constructor(atype: any);
  }

export declare class IFSelect_SelectUnion extends IFSelect_SelectCombine {
  constructor()
  RootResult(G: Interface_Graph): Interface_EntityIterator;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectUnknownEntities extends IFSelect_SelectExtract {
  constructor()
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SelectionIterator {
  AddFromIter(iter: IFSelect_SelectionIterator): void;
  AddItem(sel: any): void;
  AddList(list: IFSelect_TSeqOfSelection): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
}

  export declare class IFSelect_SelectionIterator_1 extends IFSelect_SelectionIterator {
    constructor();
  }

  export declare class IFSelect_SelectionIterator_2 extends IFSelect_SelectionIterator {
    constructor(sel: any);
  }

export declare class IFSelect_SessionFile {
  ClearLines(): void;
  NbLines(): Standard_Integer;
  Line(num: Standard_Integer): TCollection_AsciiString;
  AddLine(line: Standard_CString): void;
  RemoveLastLine(): void;
  WriteFile(name: Standard_CString): Standard_Boolean;
  ReadFile(name: Standard_CString): Standard_Boolean;
  RecognizeFile(headerline: Standard_CString): Standard_Boolean;
  Write(filename: Standard_CString): Standard_Integer;
  Read(filename: Standard_CString): Standard_Integer;
  WriteSession(): Standard_Integer;
  WriteEnd(): Standard_Integer;
  WriteLine(line: Standard_CString, follow: Standard_Character): void;
  WriteOwn(item: any): Standard_Boolean;
  ReadSession(): Standard_Integer;
  ReadEnd(): Standard_Integer;
  ReadLine(): Standard_Boolean;
  SplitLine(line: Standard_CString): void;
  ReadOwn(item: any): Standard_Boolean;
  AddItem(item: any, active: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  WorkSession(): any;
  NewItem(ident: Standard_Integer, par: any): void;
  SetOwn(mode: Standard_Boolean): void;
  SendVoid(): void;
  SendItem(par: any): void;
  SendText(text: Standard_CString): void;
  SetLastGeneral(lastgen: Standard_Integer): void;
  NbParams(): Standard_Integer;
  IsVoid(num: Standard_Integer): Standard_Boolean;
  IsText(num: Standard_Integer): Standard_Boolean;
  ParamValue(num: Standard_Integer): TCollection_AsciiString;
  TextValue(num: Standard_Integer): TCollection_AsciiString;
  ItemValue(num: Standard_Integer): any;
  Destroy(): void;
}

  export declare class IFSelect_SessionFile_1 extends IFSelect_SessionFile {
    constructor(WS: any);
  }

  export declare class IFSelect_SessionFile_2 extends IFSelect_SessionFile {
    constructor(WS: any, filename: Standard_CString);
  }

export declare class IFSelect_ShareOut extends Standard_Transient {
  constructor()
  Clear(onlydisp: Standard_Boolean): void;
  ClearResult(alsoname: Standard_Boolean): void;
  RemoveItem(item: any): Standard_Boolean;
  LastRun(): Standard_Integer;
  SetLastRun(last: Standard_Integer): void;
  NbDispatches(): Standard_Integer;
  DispatchRank(disp: any): Standard_Integer;
  Dispatch(num: Standard_Integer): any;
  AddDispatch(disp: any): void;
  RemoveDispatch(rank: Standard_Integer): Standard_Boolean;
  AddModifier_1(modifier: any, atnum: Standard_Integer): void;
  AddModifier_2(modifier: any, dispnum: Standard_Integer, atnum: Standard_Integer): void;
  AddModif(modifier: any, formodel: Standard_Boolean, atnum: Standard_Integer): void;
  NbModifiers(formodel: Standard_Boolean): Standard_Integer;
  GeneralModifier(formodel: Standard_Boolean, num: Standard_Integer): any;
  ModelModifier(num: Standard_Integer): any;
  ModifierRank(modifier: any): Standard_Integer;
  RemoveModifier(formodel: Standard_Boolean, num: Standard_Integer): Standard_Boolean;
  ChangeModifierRank(formodel: Standard_Boolean, befor: Standard_Integer, after: Standard_Integer): Standard_Boolean;
  SetRootName(num: Standard_Integer, name: any): Standard_Boolean;
  HasRootName(num: Standard_Integer): Standard_Boolean;
  RootName(num: Standard_Integer): any;
  RootNumber(name: any): Standard_Integer;
  SetPrefix(pref: any): void;
  SetDefaultRootName(defrt: any): Standard_Boolean;
  SetExtension(ext: any): void;
  Prefix(): any;
  DefaultRootName(): any;
  Extension(): any;
  FileName(dnum: Standard_Integer, pnum: Standard_Integer, nbpack: Standard_Integer): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_ShareOutResult {
  ShareOut(): any;
  Graph(): Interface_Graph;
  Reset(): void;
  Evaluate(): void;
  Packets(complete: Standard_Boolean): any;
  NbPackets(): Standard_Integer;
  Prepare(): void;
  More(): Standard_Boolean;
  Next(): void;
  NextDispatch(): void;
  Dispatch(): any;
  DispatchRank(): Standard_Integer;
  PacketsInDispatch(numpack: Standard_Integer, nbpacks: Standard_Integer): void;
  PacketRoot(): Interface_EntityIterator;
  PacketContent(): Interface_EntityIterator;
  FileName(): TCollection_AsciiString;
}

  export declare class IFSelect_ShareOutResult_1 extends IFSelect_ShareOutResult {
    constructor(sho: any, mod: any);
  }

  export declare class IFSelect_ShareOutResult_2 extends IFSelect_ShareOutResult {
    constructor(sho: any, G: Interface_Graph);
  }

  export declare class IFSelect_ShareOutResult_3 extends IFSelect_ShareOutResult {
    constructor(disp: any, mod: any);
  }

  export declare class IFSelect_ShareOutResult_4 extends IFSelect_ShareOutResult {
    constructor(disp: any, G: Interface_Graph);
  }

export declare class MoniTool_SignText extends Standard_Transient {
  Name(): Standard_CString;
  TextAlone(ent: any): TCollection_AsciiString;
  Text(ent: any, context: any): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_SignType extends MoniTool_SignText {
  Text(ent: any, context: any): TCollection_AsciiString;
  Value(ent: any, model: any): Standard_CString;
  ClassName(typnam: Standard_CString): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_Signature extends Interface_SignType {
  SetIntCase(hasmin: Standard_Boolean, valmin: Standard_Integer, hasmax: Standard_Boolean, valmax: Standard_Integer): void;
  IsIntCase(hasmin: Standard_Boolean, valmin: Standard_Integer, hasmax: Standard_Boolean, valmax: Standard_Integer): Standard_Boolean;
  AddCase(acase: Standard_CString): void;
  CaseList(): any;
  Name(): Standard_CString;
  Label(): TCollection_AsciiString;
  Matches(ent: any, model: any, text: TCollection_AsciiString, exact: Standard_Boolean): Standard_Boolean;
  MatchValue(val: Standard_CString, text: TCollection_AsciiString, exact: Standard_Boolean): Standard_Boolean;
  IntValue(val: Standard_Integer): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SignType extends IFSelect_Signature {
  constructor(nopk: Standard_Boolean)
  Value(ent: any, model: any): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SignAncestor extends IFSelect_SignType {
  constructor(nopk: Standard_Boolean)
  Matches(ent: any, model: any, text: TCollection_AsciiString, exact: Standard_Boolean): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SignCategory extends IFSelect_Signature {
  constructor()
  Value(ent: any, model: any): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SignMultiple extends IFSelect_Signature {
  constructor(name: Standard_CString)
  Add(subsign: any, width: Standard_Integer, maxi: Standard_Boolean): void;
  Value(ent: any, model: any): Standard_CString;
  Matches(ent: any, model: any, text: TCollection_AsciiString, exact: Standard_Boolean): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_SignValidity extends IFSelect_Signature {
  constructor()
  CVal(ent: any, model: any): Standard_CString;
  Value(ent: any, model: any): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_Transformer extends Standard_Transient {
  Perform(G: Interface_Graph, protocol: any, checks: Interface_CheckIterator, newmod: any): Standard_Boolean;
  ChangeProtocol(newproto: any): Standard_Boolean;
  Updated(entfrom: any, entto: any): Standard_Boolean;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_TransformStandard extends IFSelect_Transformer {
  constructor()
  SetCopyOption(option: Standard_Boolean): void;
  CopyOption(): Standard_Boolean;
  SetSelection(sel: any): void;
  Selection(): any;
  NbModifiers(): Standard_Integer;
  Modifier(num: Standard_Integer): any;
  ModifierRank(modif: any): Standard_Integer;
  AddModifier(modif: any, atnum: Standard_Integer): Standard_Boolean;
  RemoveModifier_1(modif: any): Standard_Boolean;
  RemoveModifier_2(num: Standard_Integer): Standard_Boolean;
  Perform(G: Interface_Graph, protocol: any, checks: Interface_CheckIterator, newmod: any): Standard_Boolean;
  Copy(G: Interface_Graph, TC: Interface_CopyTool, newmod: any): void;
  StandardCopy(G: Interface_Graph, TC: Interface_CopyTool, newmod: any): void;
  OnTheSpot(G: Interface_Graph, TC: Interface_CopyTool, newmod: any): void;
  ApplyModifiers(G: Interface_Graph, protocol: any, TC: Interface_CopyTool, checks: Interface_CheckIterator, newmod: any): Standard_Boolean;
  Updated(entfrom: any, entto: any): Standard_Boolean;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_WorkLibrary extends Standard_Transient {
  ReadFile(name: Standard_CString, model: any, protocol: any): Standard_Integer;
  ReadStream(theName: Standard_CString, theIStream: any, model: any, protocol: any): Standard_Integer;
  WriteFile(ctx: IFSelect_ContextWrite): Standard_Boolean;
  CopyModel(original: any, newmodel: any, list: Interface_EntityIterator, TC: Interface_CopyTool): Standard_Boolean;
  DumpEntity_1(model: any, protocol: any, entity: any, S: Standard_OStream, level: Standard_Integer): void;
  DumpEntity_2(model: any, protocol: any, entity: any, S: Standard_OStream): void;
  SetDumpLevels(def: Standard_Integer, max: Standard_Integer): void;
  DumpLevels(def: Standard_Integer, max: Standard_Integer): void;
  SetDumpHelp(level: Standard_Integer, help: Standard_CString): void;
  DumpHelp(level: Standard_Integer): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IFSelect_WorkSession extends Standard_Transient {
  constructor()
  SetErrorHandle(toHandle: Standard_Boolean): void;
  ErrorHandle(): Standard_Boolean;
  ShareOut(): any;
  SetShareOut(shareout: any): void;
  SetModeStat(theMode: Standard_Boolean): void;
  GetModeStat(): Standard_Boolean;
  SetLibrary(theLib: any): void;
  WorkLibrary(): any;
  SetProtocol(protocol: any): void;
  Protocol(): any;
  SetSignType(signtype: any): void;
  SignType(): any;
  HasModel(): Standard_Boolean;
  SetModel(model: any, clearpointed: Standard_Boolean): void;
  Model(): any;
  SetLoadedFile(theFileName: Standard_CString): void;
  LoadedFile(): Standard_CString;
  ReadFile(filename: Standard_CString): IFSelect_ReturnStatus;
  ReadStream(theName: Standard_CString, theIStream: any): IFSelect_ReturnStatus;
  NbStartingEntities(): Standard_Integer;
  StartingEntity(num: Standard_Integer): any;
  StartingNumber(ent: any): Standard_Integer;
  NumberFromLabel(val: Standard_CString, afternum: Standard_Integer): Standard_Integer;
  EntityLabel(ent: any): any;
  EntityName(ent: any): any;
  CategoryNumber(ent: any): Standard_Integer;
  CategoryName(ent: any): Standard_CString;
  ValidityName(ent: any): Standard_CString;
  ClearData(mode: Standard_Integer): void;
  ComputeGraph(enforce: Standard_Boolean): Standard_Boolean;
  HGraph(): any;
  Graph(): Interface_Graph;
  Shareds(ent: any): any;
  Sharings(ent: any): any;
  IsLoaded(): Standard_Boolean;
  ComputeCheck(enforce: Standard_Boolean): Standard_Boolean;
  ModelCheckList(complete: Standard_Boolean): Interface_CheckIterator;
  CheckOne(ent: any, complete: Standard_Boolean): Interface_CheckIterator;
  LastRunCheckList(): Interface_CheckIterator;
  MaxIdent(): Standard_Integer;
  Item(id: Standard_Integer): any;
  ItemIdent(item: any): Standard_Integer;
  NamedItem_1(name: Standard_CString): any;
  NamedItem_2(name: any): any;
  NameIdent(name: Standard_CString): Standard_Integer;
  HasName(item: any): Standard_Boolean;
  Name(item: any): any;
  AddItem(item: any, active: Standard_Boolean): Standard_Integer;
  AddNamedItem(name: Standard_CString, item: any, active: Standard_Boolean): Standard_Integer;
  SetActive(item: any, mode: Standard_Boolean): Standard_Boolean;
  RemoveNamedItem(name: Standard_CString): Standard_Boolean;
  RemoveName(name: Standard_CString): Standard_Boolean;
  RemoveItem(item: any): Standard_Boolean;
  ClearItems(): void;
  ItemLabel(id: Standard_Integer): any;
  ItemIdents(type: any): any;
  ItemNames(type: any): any;
  ItemNamesForLabel(label: Standard_CString): any;
  NextIdentForLabel(label: Standard_CString, id: Standard_Integer, mode: Standard_Integer): Standard_Integer;
  NewParamFromStatic(statname: Standard_CString, name: Standard_CString): any;
  IntParam(id: Standard_Integer): any;
  IntValue(it: any): Standard_Integer;
  NewIntParam(name: Standard_CString): any;
  SetIntValue(it: any, val: Standard_Integer): Standard_Boolean;
  TextParam(id: Standard_Integer): any;
  TextValue(par: any): TCollection_AsciiString;
  NewTextParam(name: Standard_CString): any;
  SetTextValue(par: any, val: Standard_CString): Standard_Boolean;
  Signature(id: Standard_Integer): any;
  SignValue(sign: any, ent: any): Standard_CString;
  Selection(id: Standard_Integer): any;
  EvalSelection(sel: any): Interface_EntityIterator;
  Sources(sel: any): IFSelect_SelectionIterator;
  SelectionResult(sel: any): any;
  SelectionResultFromList(sel: any, list: any): any;
  SetItemSelection(item: any, sel: any): Standard_Boolean;
  ResetItemSelection(item: any): Standard_Boolean;
  ItemSelection(item: any): any;
  SignCounter(id: Standard_Integer): any;
  ComputeCounter(counter: any, forced: Standard_Boolean): Standard_Boolean;
  ComputeCounterFromList(counter: any, list: any, clear: Standard_Boolean): Standard_Boolean;
  AppliedDispatches(): any;
  ClearShareOut(onlydisp: Standard_Boolean): void;
  Dispatch(id: Standard_Integer): any;
  DispatchRank(disp: any): Standard_Integer;
  ModelCopier(): any;
  SetModelCopier(copier: any): void;
  NbFinalModifiers(formodel: Standard_Boolean): Standard_Integer;
  FinalModifierIdents(formodel: Standard_Boolean): any;
  GeneralModifier(id: Standard_Integer): any;
  ModelModifier(id: Standard_Integer): any;
  ModifierRank(item: any): Standard_Integer;
  ChangeModifierRank(formodel: Standard_Boolean, before: Standard_Integer, after: Standard_Integer): Standard_Boolean;
  ClearFinalModifiers(): void;
  SetAppliedModifier(modif: any, item: any): Standard_Boolean;
  ResetAppliedModifier(modif: any): Standard_Boolean;
  UsesAppliedModifier(modif: any): any;
  Transformer(id: Standard_Integer): any;
  RunTransformer(transf: any): Standard_Integer;
  RunModifier(modif: any, copy: Standard_Boolean): Standard_Integer;
  RunModifierSelected(modif: any, sel: any, copy: Standard_Boolean): Standard_Integer;
  NewTransformStandard(copy: Standard_Boolean, name: Standard_CString): any;
  SetModelContent(sel: any, keep: Standard_Boolean): Standard_Boolean;
  FilePrefix(): any;
  DefaultFileRoot(): any;
  FileExtension(): any;
  FileRoot(disp: any): any;
  SetFilePrefix(name: Standard_CString): void;
  SetDefaultFileRoot(name: Standard_CString): Standard_Boolean;
  SetFileExtension(name: Standard_CString): void;
  SetFileRoot(disp: any, name: Standard_CString): Standard_Boolean;
  GiveFileRoot(file: Standard_CString): Standard_CString;
  GiveFileComplete(file: Standard_CString): Standard_CString;
  ClearFile(): void;
  EvaluateFile(): void;
  NbFiles(): Standard_Integer;
  FileModel(num: Standard_Integer): any;
  FileName(num: Standard_Integer): TCollection_AsciiString;
  BeginSentFiles(record: Standard_Boolean): void;
  SentFiles(): any;
  SendSplit(): Standard_Boolean;
  EvalSplit(): any;
  SentList(count: Standard_Integer): Interface_EntityIterator;
  MaxSendingCount(): Standard_Integer;
  SetRemaining(mode: IFSelect_RemainMode): Standard_Boolean;
  SendAll(filename: Standard_CString, computegraph: Standard_Boolean): IFSelect_ReturnStatus;
  SendSelected(filename: Standard_CString, sel: any, computegraph: Standard_Boolean): IFSelect_ReturnStatus;
  WriteFile_1(filename: Standard_CString): IFSelect_ReturnStatus;
  WriteFile_2(filename: Standard_CString, sel: any): IFSelect_ReturnStatus;
  NbSources(sel: any): Standard_Integer;
  Source(sel: any, num: Standard_Integer): any;
  IsReversedSelectExtract(sel: any): Standard_Boolean;
  ToggleSelectExtract(sel: any): Standard_Boolean;
  SetInputSelection(sel: any, input: any): Standard_Boolean;
  SetControl(sel: any, sc: any, formain: Standard_Boolean): Standard_Boolean;
  CombineAdd(selcomb: any, seladd: any, atnum: Standard_Integer): Standard_Integer;
  CombineRemove(selcomb: any, selrem: any): Standard_Boolean;
  NewSelectPointed(list: any, name: Standard_CString): any;
  SetSelectPointed(sel: any, list: any, mode: Standard_Integer): Standard_Boolean;
  GiveSelection(selname: Standard_CString): any;
  GiveList_1(obj: any): any;
  GiveList_2(first: Standard_CString, second: Standard_CString): any;
  GiveListFromList(selname: Standard_CString, ent: any): any;
  GiveListCombined(l1: any, l2: any, mode: Standard_Integer): any;
  QueryCheckList(chl: Interface_CheckIterator): void;
  QueryCheckStatus(ent: any): Standard_Integer;
  QueryParent(entdad: any, entson: any): Standard_Integer;
  SetParams(params: any, uselist: NCollection_Vector<Standard_Integer>): void;
  TraceStatics(use: Standard_Integer, mode: Standard_Integer): void;
  DumpShare(): void;
  ListItems(label: Standard_CString): void;
  ListFinalModifiers(formodel: Standard_Boolean): void;
  DumpSelection(sel: any): void;
  DumpModel(level: Standard_Integer, S: Standard_OStream): void;
  TraceDumpModel(mode: Standard_Integer): void;
  DumpEntity(ent: any, level: Standard_Integer, S: Standard_OStream): void;
  PrintEntityStatus(ent: any, S: Standard_OStream): void;
  TraceDumpEntity(ent: any, level: Standard_Integer): void;
  PrintCheckList(S: Standard_OStream, checklist: Interface_CheckIterator, failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintSignatureList(S: Standard_OStream, signlist: any, mode: IFSelect_PrintCount): void;
  EvaluateSelection(sel: any): void;
  EvaluateDispatch(disp: any, mode: Standard_Integer): void;
  EvaluateComplete(mode: Standard_Integer): void;
  ListEntities(iter: Interface_EntityIterator, mode: Standard_Integer, S: Standard_OStream): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_EntityList {
  constructor()
  Clear(): void;
  Append(ent: any): void;
  Add(ent: any): void;
  Remove_1(ent: any): void;
  Remove_2(num: Standard_Integer): void;
  IsEmpty(): Standard_Boolean;
  NbEntities(): Standard_Integer;
  Value(num: Standard_Integer): any;
  SetValue(num: Standard_Integer, ent: any): void;
  FillIterator(iter: Interface_EntityIterator): void;
  NbTypedEntities(atype: any): Standard_Integer;
  TypedEntity(atype: any, num: Standard_Integer): any;
}

export declare class Interface_ReaderModule extends Standard_Transient {
  CaseNum(data: any, num: Standard_Integer): Standard_Integer;
  Read(casenum: Standard_Integer, data: any, num: Standard_Integer, ach: any, ent: any): void;
  NewRead(casenum: Standard_Integer, data: any, num: Standard_Integer, ach: any, ent: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSControl_Reader {
  SetNorm(norm: Standard_CString): Standard_Boolean;
  SetWS(WS: any, scratch: Standard_Boolean): void;
  WS(): any;
  ReadFile(filename: Standard_CString): IFSelect_ReturnStatus;
  ReadStream(theName: Standard_CString, theIStream: any): IFSelect_ReturnStatus;
  Model(): any;
  GiveList_1(first: Standard_CString, second: Standard_CString): any;
  GiveList_2(first: Standard_CString, ent: any): any;
  NbRootsForTransfer(): Standard_Integer;
  RootForTransfer(num: Standard_Integer): any;
  TransferOneRoot(num: Standard_Integer, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferOne(num: Standard_Integer, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferEntity(start: any, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferList(list: any, theProgress: Message_ProgressRange): Standard_Integer;
  TransferRoots(theProgress: Message_ProgressRange): Standard_Integer;
  ClearShapes(): void;
  NbShapes(): Standard_Integer;
  Shape(num: Standard_Integer): TopoDS_Shape;
  OneShape(): TopoDS_Shape;
  PrintCheckLoad_1(failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintCheckLoad_2(theStream: Standard_OStream, failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintCheckTransfer_1(failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintCheckTransfer_2(theStream: Standard_OStream, failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintStatsTransfer_1(what: Standard_Integer, mode: Standard_Integer): void;
  PrintStatsTransfer_2(theStream: Standard_OStream, what: Standard_Integer, mode: Standard_Integer): void;
  GetStatsTransfer(list: any, nbMapped: Standard_Integer, nbWithResult: Standard_Integer, nbWithFail: Standard_Integer): void;
}

  export declare class XSControl_Reader_1 extends XSControl_Reader {
    constructor();
  }

  export declare class XSControl_Reader_2 extends XSControl_Reader {
    constructor(norm: Standard_CString);
  }

  export declare class XSControl_Reader_3 extends XSControl_Reader {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class Interface_GeneralLib {
  SetGlobal(amodule: any, aprotocol: any): void;
  AddProtocol(aprotocol: any): void;
  Clear(): void;
  SetComplete(): void;
  Select(obj: any, module: any, CN: Standard_Integer): Standard_Boolean;
  Start(): void;
  More(): Standard_Boolean;
  Next(): void;
  Module(): any;
  Protocol(): any;
}

  export declare class Interface_GeneralLib_1 extends Interface_GeneralLib {
    constructor(aprotocol: any);
  }

  export declare class Interface_GeneralLib_2 extends Interface_GeneralLib {
    constructor();
  }

export declare class Transfer_Finder extends Standard_Transient {
  GetHashCode(): Standard_Integer;
  Equates(other: any): Standard_Boolean;
  ValueType(): any;
  ValueTypeName(): Standard_CString;
  SetAttribute(name: Standard_CString, val: any): void;
  RemoveAttribute(name: Standard_CString): Standard_Boolean;
  GetAttribute(name: Standard_CString, type: any, val: any): Standard_Boolean;
  Attribute(name: Standard_CString): any;
  AttributeType(name: Standard_CString): Interface_ParamType;
  SetIntegerAttribute(name: Standard_CString, val: Standard_Integer): void;
  GetIntegerAttribute(name: Standard_CString, val: Standard_Integer): Standard_Boolean;
  IntegerAttribute(name: Standard_CString): Standard_Integer;
  SetRealAttribute(name: Standard_CString, val: Standard_Real): void;
  GetRealAttribute(name: Standard_CString, val: Standard_Real): Standard_Boolean;
  RealAttribute(name: Standard_CString): Standard_Real;
  SetStringAttribute(name: Standard_CString, val: Standard_CString): void;
  GetStringAttribute(name: Standard_CString, val: Standard_CString): Standard_Boolean;
  StringAttribute(name: Standard_CString): Standard_CString;
  AttrList(): any;
  SameAttributes(other: any): void;
  GetAttributes(other: any, fromname: Standard_CString, copied: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_Binder extends Standard_Transient {
  Merge(other: any): void;
  IsMultiple(): Standard_Boolean;
  ResultType(): any;
  ResultTypeName(): Standard_CString;
  AddResult(next: any): void;
  NextResult(): any;
  HasResult(): Standard_Boolean;
  SetAlreadyUsed(): void;
  Status(): Transfer_StatusResult;
  StatusExec(): Transfer_StatusExec;
  SetStatusExec(stat: Transfer_StatusExec): void;
  AddFail(mess: Standard_CString, orig: Standard_CString): void;
  AddWarning(mess: Standard_CString, orig: Standard_CString): void;
  Check(): any;
  CCheck(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_FindHasher {
  constructor();
  HashCode(theFinder: any, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(K1: any, K2: any): Standard_Boolean;
}

export declare class Transfer_ActorOfProcessForFinder extends Standard_Transient {
  constructor()
  Recognize(start: any): Standard_Boolean;
  Transferring(start: any, TP: any, theProgress: Message_ProgressRange): any;
  TransientResult(res: any): any;
  NullResult(): any;
  SetLast(mode: Standard_Boolean): void;
  IsLast(): Standard_Boolean;
  SetNext(next: any): void;
  Next(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_ActorOfFinderProcess extends Transfer_ActorOfProcessForFinder {
  constructor()
  ModeTrans(): Standard_Integer;
  Transferring(start: any, TP: any, theProgress: Message_ProgressRange): any;
  Transfer(start: any, TP: any, theProgress: Message_ProgressRange): any;
  TransferTransient(start: any, TP: any, theProgress: Message_ProgressRange): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSControl_Controller extends Standard_Transient {
  SetNames(theLongName: Standard_CString, theShortName: Standard_CString): void;
  AutoRecord(): void;
  Record(name: Standard_CString): void;
  Recorded(name: Standard_CString): any;
  Name(rsc: Standard_Boolean): Standard_CString;
  Protocol(): any;
  WorkLibrary(): any;
  NewModel(): any;
  ActorRead(model: any): any;
  ActorWrite(): any;
  SetModeWrite(modemin: Standard_Integer, modemax: Standard_Integer, shape: Standard_Boolean): void;
  SetModeWriteHelp(modetrans: Standard_Integer, help: Standard_CString, shape: Standard_Boolean): void;
  ModeWriteBounds(modemin: Standard_Integer, modemax: Standard_Integer, shape: Standard_Boolean): Standard_Boolean;
  IsModeWrite(modetrans: Standard_Integer, shape: Standard_Boolean): Standard_Boolean;
  ModeWriteHelp(modetrans: Standard_Integer, shape: Standard_Boolean): Standard_CString;
  RecognizeWriteTransient(obj: any, modetrans: Standard_Integer): Standard_Boolean;
  TransferWriteTransient(obj: any, FP: any, model: any, modetrans: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  RecognizeWriteShape(shape: TopoDS_Shape, modetrans: Standard_Integer): Standard_Boolean;
  TransferWriteShape(shape: TopoDS_Shape, FP: any, model: any, modetrans: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  AddSessionItem(theItem: any, theName: Standard_CString, toApply: Standard_Boolean): void;
  SessionItem(theName: Standard_CString): any;
  Customise(WS: any): void;
  AdaptorSession(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_ProcessForTransient extends Standard_Transient {
  Clear(): void;
  Clean(): void;
  Resize(nb: Standard_Integer): void;
  SetActor(actor: any): void;
  Actor(): any;
  Find(start: any): any;
  IsBound(start: any): Standard_Boolean;
  IsAlreadyUsed(start: any): Standard_Boolean;
  Bind(start: any, binder: any): void;
  Rebind(start: any, binder: any): void;
  Unbind(start: any): Standard_Boolean;
  FindElseBind(start: any): any;
  SetMessenger(messenger: any): void;
  Messenger(): any;
  SetTraceLevel(tracelev: Standard_Integer): void;
  TraceLevel(): Standard_Integer;
  SendFail(start: any, amsg: Message_Msg): void;
  SendWarning(start: any, amsg: Message_Msg): void;
  SendMsg(start: any, amsg: Message_Msg): void;
  AddFail_1(start: any, mess: Standard_CString, orig: Standard_CString): void;
  AddError(start: any, mess: Standard_CString, orig: Standard_CString): void;
  AddFail_2(start: any, amsg: Message_Msg): void;
  AddWarning_1(start: any, mess: Standard_CString, orig: Standard_CString): void;
  AddWarning_2(start: any, amsg: Message_Msg): void;
  Mend(start: any, pref: Standard_CString): void;
  Check(start: any): any;
  BindTransient(start: any, res: any): void;
  FindTransient(start: any): any;
  BindMultiple(start: any): void;
  AddMultiple(start: any, res: any): void;
  FindTypedTransient(start: any, atype: any, val: any): Standard_Boolean;
  GetTypedTransient(binder: any, atype: any, val: any): Standard_Boolean;
  NbMapped(): Standard_Integer;
  Mapped(num: Standard_Integer): any;
  MapIndex(start: any): Standard_Integer;
  MapItem(num: Standard_Integer): any;
  SetRoot(start: any): void;
  SetRootManagement(stat: Standard_Boolean): void;
  NbRoots(): Standard_Integer;
  Root(num: Standard_Integer): any;
  RootItem(num: Standard_Integer): any;
  RootIndex(start: any): Standard_Integer;
  NestingLevel(): Standard_Integer;
  ResetNestingLevel(): void;
  Recognize(start: any): Standard_Boolean;
  Transferring(start: any, theProgress: Message_ProgressRange): any;
  Transfer(start: any, theProgress: Message_ProgressRange): Standard_Boolean;
  SetErrorHandle(err: Standard_Boolean): void;
  ErrorHandle(): Standard_Boolean;
  StartTrace(binder: any, start: any, level: Standard_Integer, mode: Standard_Integer): void;
  PrintTrace(start: any, S: Standard_OStream): void;
  IsLooping(alevel: Standard_Integer): Standard_Boolean;
  RootResult(withstart: Standard_Boolean): Transfer_IteratorOfProcessForTransient;
  CompleteResult(withstart: Standard_Boolean): Transfer_IteratorOfProcessForTransient;
  AbnormalResult(): Transfer_IteratorOfProcessForTransient;
  CheckList(erronly: Standard_Boolean): Interface_CheckIterator;
  ResultOne(start: any, level: Standard_Integer, withstart: Standard_Boolean): Transfer_IteratorOfProcessForTransient;
  CheckListOne(start: any, level: Standard_Integer, erronly: Standard_Boolean): Interface_CheckIterator;
  IsCheckListEmpty(start: any, level: Standard_Integer, erronly: Standard_Boolean): Standard_Boolean;
  RemoveResult(start: any, level: Standard_Integer, compute: Standard_Boolean): void;
  CheckNum(start: any): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Transfer_ProcessForTransient_1 extends Transfer_ProcessForTransient {
    constructor(nb: Standard_Integer);
  }

  export declare class Transfer_ProcessForTransient_2 extends Transfer_ProcessForTransient {
    constructor(printer: any, nb: Standard_Integer);
  }

export declare class Transfer_TransientProcess extends Transfer_ProcessForTransient {
  constructor(nb: Standard_Integer)
  SetModel(model: any): void;
  Model(): any;
  SetGraph(HG: any): void;
  HasGraph(): Standard_Boolean;
  HGraph(): any;
  Graph(): Interface_Graph;
  SetContext(name: Standard_CString, ctx: any): void;
  GetContext(name: Standard_CString, type: any, ctx: any): Standard_Boolean;
  Context(): any;
  PrintTrace(start: any, S: Standard_OStream): void;
  CheckNum(ent: any): Standard_Integer;
  TypedSharings(start: any, type: any): Interface_EntityIterator;
  IsDataLoaded(ent: any): Standard_Boolean;
  IsDataFail(ent: any): Standard_Boolean;
  PrintStats(mode: Standard_Integer, S: Standard_OStream): void;
  RootsForTransfer(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_MSG {
  Destroy(): void;
  Value(): Standard_CString;
  Read_1(S: Standard_IStream): Standard_Integer;
  Read_2(file: Standard_CString): Standard_Integer;
  Write(S: Standard_OStream, rootkey: Standard_CString): Standard_Integer;
  IsKey(mess: Standard_CString): Standard_Boolean;
  Translated(key: Standard_CString): Standard_CString;
  Record(key: Standard_CString, item: Standard_CString): void;
  SetTrace(toprint: Standard_Boolean, torecord: Standard_Boolean): void;
  SetMode(running: Standard_Boolean, raising: Standard_Boolean): void;
  PrintTrace(S: Standard_OStream): void;
  Intervalled(val: Standard_Real, order: Standard_Integer, upper: Standard_Boolean): Standard_Real;
  TDate(text: Standard_CString, yy: Standard_Integer, mm: Standard_Integer, dd: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer, format: Standard_CString): void;
  NDate(text: Standard_CString, yy: Standard_Integer, mm: Standard_Integer, dd: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer): Standard_Boolean;
  CDate(text1: Standard_CString, text2: Standard_CString): Standard_Integer;
  Blanks_1(val: Standard_Integer, max: Standard_Integer): Standard_CString;
  Blanks_2(val: Standard_CString, max: Standard_Integer): Standard_CString;
  Blanks_3(count: Standard_Integer): Standard_CString;
  Print(S: Standard_OStream, val: Standard_CString, max: Standard_Integer, just: Standard_Integer): void;
}

  export declare class Interface_MSG_1 extends Interface_MSG {
    constructor(key: Standard_CString);
  }

  export declare class Interface_MSG_2 extends Interface_MSG {
    constructor(key: Standard_CString, i1: Standard_Integer);
  }

  export declare class Interface_MSG_3 extends Interface_MSG {
    constructor(key: Standard_CString, i1: Standard_Integer, i2: Standard_Integer);
  }

  export declare class Interface_MSG_4 extends Interface_MSG {
    constructor(key: Standard_CString, r1: Standard_Real, intervals: Standard_Integer);
  }

  export declare class Interface_MSG_5 extends Interface_MSG {
    constructor(key: Standard_CString, str: Standard_CString);
  }

  export declare class Interface_MSG_6 extends Interface_MSG {
    constructor(key: Standard_CString, ival: Standard_Integer, str: Standard_CString);
  }

export declare class Interface_ReaderLib {
  SetGlobal(amodule: any, aprotocol: any): void;
  AddProtocol(aprotocol: any): void;
  Clear(): void;
  SetComplete(): void;
  Select(obj: any, module: any, CN: Standard_Integer): Standard_Boolean;
  Start(): void;
  More(): Standard_Boolean;
  Next(): void;
  Module(): any;
  Protocol(): any;
}

  export declare class Interface_ReaderLib_1 extends Interface_ReaderLib {
    constructor(aprotocol: any);
  }

  export declare class Interface_ReaderLib_2 extends Interface_ReaderLib {
    constructor();
  }

export declare class Interface_FileReaderTool {
  SetData(reader: any, protocol: any): void;
  Protocol(): any;
  Data(): any;
  SetModel(amodel: any): void;
  Model(): any;
  SetMessenger(messenger: any): void;
  Messenger(): any;
  SetTraceLevel(tracelev: Standard_Integer): void;
  TraceLevel(): Standard_Integer;
  SetErrorHandle(err: Standard_Boolean): void;
  ErrorHandle(): Standard_Boolean;
  SetEntities(): void;
  Recognize(num: Standard_Integer, ach: any, ent: any): Standard_Boolean;
  RecognizeByLib(num: Standard_Integer, glib: Interface_GeneralLib, rlib: Interface_ReaderLib, ach: any, ent: any): Standard_Boolean;
  UnknownEntity(): any;
  NewModel(): any;
  LoadModel(amodel: any): void;
  LoadedEntity(num: Standard_Integer): any;
  BeginRead(amodel: any): void;
  AnalyseRecord(num: Standard_Integer, anent: any, acheck: any): Standard_Boolean;
  EndRead(amodel: any): void;
  Clear(): void;
}

export declare class Interface_LineBuffer {
  constructor(size: Standard_Integer)
  SetMax(max: Standard_Integer): void;
  SetInitial(initial: Standard_Integer): void;
  SetKeep(): void;
  CanGet(more: Standard_Integer): Standard_Boolean;
  Content(): Standard_CString;
  Length(): Standard_Integer;
  Clear(): void;
  FreezeInitial(): void;
  Move_1(str: TCollection_AsciiString): void;
  Move_2(str: any): void;
  Moved(): any;
  Add_1(text: Standard_CString): void;
  Add_2(text: Standard_CString, lntext: Standard_Integer): void;
  Add_3(text: TCollection_AsciiString): void;
  Add_4(text: Standard_Character): void;
}

export declare class Interface_FloatWriter {
  constructor(chars: Standard_Integer)
  SetFormat(form: Standard_CString, reset: Standard_Boolean): void;
  SetFormatForRange(form: Standard_CString, R1: Standard_Real, R2: Standard_Real): void;
  SetZeroSuppress(mode: Standard_Boolean): void;
  SetDefaults(chars: Standard_Integer): void;
  Options(zerosup: Standard_Boolean, range: Standard_Boolean, R1: Standard_Real, R2: Standard_Real): void;
  MainFormat(): Standard_CString;
  FormatForRange(): Standard_CString;
  Write(val: Standard_Real, text: Standard_CString): Standard_Integer;
  Convert(val: Standard_Real, text: Standard_CString, zerosup: Standard_Boolean, Range1: Standard_Real, Range2: Standard_Real, mainform: Standard_CString, rangeform: Standard_CString): Standard_Integer;
}

export declare class Transfer_ActorOfProcessForTransient extends Standard_Transient {
  constructor()
  Recognize(start: any): Standard_Boolean;
  Transferring(start: any, TP: any, theProgress: Message_ProgressRange): any;
  TransientResult(res: any): any;
  NullResult(): any;
  SetLast(mode: Standard_Boolean): void;
  IsLast(): Standard_Boolean;
  SetNext(next: any): void;
  Next(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_ActorOfTransientProcess extends Transfer_ActorOfProcessForTransient {
  constructor()
  Transferring(start: any, TP: any, theProgress: Message_ProgressRange): any;
  Transfer(start: any, TP: any, theProgress: Message_ProgressRange): any;
  TransferTransient(start: any, TP: any, theProgress: Message_ProgressRange): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_FileParameter {
  constructor()
  Init_1(val: TCollection_AsciiString, typ: Interface_ParamType): void;
  Init_2(val: Standard_CString, typ: Interface_ParamType): void;
  CValue(): Standard_CString;
  ParamType(): Interface_ParamType;
  SetEntityNumber(num: Standard_Integer): void;
  EntityNumber(): Standard_Integer;
  Clear(): void;
  Destroy(): void;
}

export declare class Interface_GTool extends Standard_Transient {
  SetSignType(sign: any): void;
  SignType(): any;
  SignValue(ent: any, model: any): Standard_CString;
  SignName(): Standard_CString;
  SetProtocol(proto: any, enforce: Standard_Boolean): void;
  Protocol(): any;
  Lib(): Interface_GeneralLib;
  Reservate(nb: Standard_Integer, enforce: Standard_Boolean): void;
  ClearEntities(): void;
  Select(ent: any, gmod: any, CN: Standard_Integer, enforce: Standard_Boolean): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Interface_GTool_1 extends Interface_GTool {
    constructor();
  }

  export declare class Interface_GTool_2 extends Interface_GTool {
    constructor(proto: any, nbent: Standard_Integer);
  }

export declare class Interface_Category {
  SetProtocol(theProtocol: any): void;
  CatNum(theEnt: any, theShares: Interface_ShareTool): Standard_Integer;
  ClearNums(): void;
  Compute(theModel: any, theShares: Interface_ShareTool): void;
  Num(theNumEnt: Standard_Integer): Standard_Integer;
  AddCategory(theName: Standard_CString): Standard_Integer;
  NbCategories(): Standard_Integer;
  Name(theNum: Standard_Integer): Standard_CString;
  Number(theName: Standard_CString): Standard_Integer;
  Init(): void;
}

  export declare class Interface_Category_1 extends Interface_Category {
    constructor();
  }

  export declare class Interface_Category_2 extends Interface_Category {
    constructor(theProtocol: any);
  }

  export declare class Interface_Category_3 extends Interface_Category {
    constructor(theGTool: any);
  }

export declare class Interface_InterfaceError extends Standard_Failure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Interface_InterfaceError_1 extends Interface_InterfaceError {
    constructor();
  }

  export declare class Interface_InterfaceError_2 extends Interface_InterfaceError {
    constructor(theMessage: Standard_CString);
  }

export declare class Interface_CheckFailure extends Interface_InterfaceError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Interface_CheckFailure_1 extends Interface_CheckFailure {
    constructor();
  }

  export declare class Interface_CheckFailure_2 extends Interface_CheckFailure {
    constructor(theMessage: Standard_CString);
  }

export declare class Interface_ShareTool {
  Model(): any;
  Graph(): Interface_Graph;
  RootEntities(): Interface_EntityIterator;
  IsShared(ent: any): Standard_Boolean;
  Shareds(ent: any): Interface_EntityIterator;
  Sharings(ent: any): Interface_EntityIterator;
  NbTypedSharings(ent: any, atype: any): Standard_Integer;
  TypedSharing(ent: any, atype: any): any;
  All(ent: any, rootlast: Standard_Boolean): Interface_EntityIterator;
  Print(iter: Interface_EntityIterator, S: Standard_OStream): void;
}

  export declare class Interface_ShareTool_1 extends Interface_ShareTool {
    constructor(amodel: any, lib: Interface_GeneralLib);
  }

  export declare class Interface_ShareTool_2 extends Interface_ShareTool {
    constructor(amodel: any, gtool: any);
  }

  export declare class Interface_ShareTool_3 extends Interface_ShareTool {
    constructor(amodel: any, protocol: any);
  }

  export declare class Interface_ShareTool_4 extends Interface_ShareTool {
    constructor(amodel: any);
  }

  export declare class Interface_ShareTool_5 extends Interface_ShareTool {
    constructor(agraph: Interface_Graph);
  }

  export declare class Interface_ShareTool_6 extends Interface_ShareTool {
    constructor(ahgraph: any);
  }

export declare class Interface_CheckTool {
  FillCheck(ent: any, sh: Interface_ShareTool, ach: any): void;
  Print_1(ach: any, S: Standard_OStream): void;
  Print_2(list: Interface_CheckIterator, S: Standard_OStream): void;
  Check(num: Standard_Integer): any;
  CheckSuccess(reset: Standard_Boolean): void;
  CompleteCheckList(): Interface_CheckIterator;
  CheckList(): Interface_CheckIterator;
  AnalyseCheckList(): Interface_CheckIterator;
  VerifyCheckList(): Interface_CheckIterator;
  WarningCheckList(): Interface_CheckIterator;
  UnknownEntities(): Interface_EntityIterator;
}

  export declare class Interface_CheckTool_1 extends Interface_CheckTool {
    constructor(model: any, protocol: any);
  }

  export declare class Interface_CheckTool_2 extends Interface_CheckTool {
    constructor(model: any);
  }

  export declare class Interface_CheckTool_3 extends Interface_CheckTool {
    constructor(graph: Interface_Graph);
  }

  export declare class Interface_CheckTool_4 extends Interface_CheckTool {
    constructor(hgraph: any);
  }

export declare class Interface_CopyControl extends Standard_Transient {
  Clear(): void;
  Bind(ent: any, res: any): void;
  Search(ent: any, res: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_CopyMap extends Interface_CopyControl {
  constructor(amodel: any)
  Clear(): void;
  Model(): any;
  Bind(ent: any, res: any): void;
  Search(ent: any, res: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_CopyTool {
  Model(): any;
  SetControl(othermap: any): void;
  Control(): any;
  Clear(): void;
  Copy(entfrom: any, entto: any, mapped: Standard_Boolean, errstat: Standard_Boolean): Standard_Boolean;
  Transferred(ent: any): any;
  Bind(ent: any, res: any): void;
  Search(ent: any, res: any): Standard_Boolean;
  ClearLastFlags(): void;
  LastCopiedAfter(numfrom: Standard_Integer, ent: any, res: any): Standard_Integer;
  TransferEntity(ent: any): void;
  RenewImpliedRefs(): void;
  FillModel(bmodel: any): void;
  CompleteResult(withreports: Standard_Boolean): Interface_EntityIterator;
  RootResult(withreports: Standard_Boolean): Interface_EntityIterator;
}

  export declare class Interface_CopyTool_1 extends Interface_CopyTool {
    constructor(amodel: any, lib: Interface_GeneralLib);
  }

  export declare class Interface_CopyTool_2 extends Interface_CopyTool {
    constructor(amodel: any, protocol: any);
  }

  export declare class Interface_CopyTool_3 extends Interface_CopyTool {
    constructor(amodel: any);
  }

export declare class Interface_EntityCluster extends Standard_Transient {
  Append(ent: any): void;
  Remove_1(ent: any): Standard_Boolean;
  Remove_2(num: Standard_Integer): Standard_Boolean;
  NbEntities(): Standard_Integer;
  Value(num: Standard_Integer): any;
  SetValue(num: Standard_Integer, ent: any): void;
  FillIterator(iter: Interface_EntityIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Interface_EntityCluster_1 extends Interface_EntityCluster {
    constructor();
  }

  export declare class Interface_EntityCluster_2 extends Interface_EntityCluster {
    constructor(ent: any);
  }

  export declare class Interface_EntityCluster_3 extends Interface_EntityCluster {
    constructor(ec: any);
  }

  export declare class Interface_EntityCluster_4 extends Interface_EntityCluster {
    constructor(ant: any, ec: any);
  }

export declare class Interface_GlobalNodeOfGeneralLib extends Standard_Transient {
  constructor()
  Add(amodule: any, aprotocol: any): void;
  Module(): any;
  Protocol(): any;
  Next(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_GlobalNodeOfReaderLib extends Standard_Transient {
  constructor()
  Add(amodule: any, aprotocol: any): void;
  Module(): any;
  Protocol(): any;
  Next(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_MapAsciiStringHasher {
  constructor();
  HashCode(theAsciiString: TCollection_AsciiString, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(K1: TCollection_AsciiString, K2: TCollection_AsciiString): Standard_Boolean;
}

export declare class Interface_IntVal extends Standard_Transient {
  constructor()
  Value(): Standard_Integer;
  CValue(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_InterfaceMismatch extends Interface_InterfaceError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Interface_InterfaceMismatch_1 extends Interface_InterfaceMismatch {
    constructor();
  }

  export declare class Interface_InterfaceMismatch_2 extends Interface_InterfaceMismatch {
    constructor(theMessage: Standard_CString);
  }

export declare class Interface_NodeOfGeneralLib extends Standard_Transient {
  constructor()
  AddNode(anode: any): void;
  Module(): any;
  Protocol(): any;
  Next(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_NodeOfReaderLib extends Standard_Transient {
  constructor()
  AddNode(anode: any): void;
  Module(): any;
  Protocol(): any;
  Next(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_ParamList extends Standard_Transient {
  constructor(theIncrement: Standard_Integer)
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  SetValue(Index: Standard_Integer, Value: Interface_FileParameter): void;
  Value(Index: Standard_Integer): Interface_FileParameter;
  ChangeValue(Index: Standard_Integer): Interface_FileParameter;
  Clear(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_ParamSet extends Standard_Transient {
  constructor(nres: Standard_Integer, nst: Standard_Integer)
  Append_1(val: Standard_CString, lnval: Standard_Integer, typ: Interface_ParamType, nument: Standard_Integer): Standard_Integer;
  Append_2(FP: Interface_FileParameter): Standard_Integer;
  NbParams(): Standard_Integer;
  Param(num: Standard_Integer): Interface_FileParameter;
  ChangeParam(num: Standard_Integer): Interface_FileParameter;
  SetParam(num: Standard_Integer, FP: Interface_FileParameter): void;
  Params(num: Standard_Integer, nb: Standard_Integer): any;
  Destroy(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_ReportEntity extends Standard_Transient {
  SetContent(content: any): void;
  Check(): any;
  CCheck(): any;
  Concerned(): any;
  HasContent(): Standard_Boolean;
  HasNewContent(): Standard_Boolean;
  Content(): any;
  IsError(): Standard_Boolean;
  IsUnknown(): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Interface_ReportEntity_1 extends Interface_ReportEntity {
    constructor(unknown: any);
  }

  export declare class Interface_ReportEntity_2 extends Interface_ReportEntity {
    constructor(acheck: any, concerned: any);
  }

export declare class Interface_STAT {
  Internals(tit: any, total: Standard_Real, phn: any, phw: any, phdeb: any, phfin: any, stw: any): void;
  AddPhase(weight: Standard_Real, name: Standard_CString): void;
  AddStep(weight: Standard_Real): void;
  Description(nbphases: Standard_Integer, total: Standard_Real, title: Standard_CString): void;
  Phase(num: Standard_Integer, n0step: Standard_Integer, nbstep: Standard_Integer, weight: Standard_Real, name: Standard_CString): void;
  Step(num: Standard_Integer): Standard_Real;
  Start(items: Standard_Integer, cycles: Standard_Integer): void;
  StartCount(items: Standard_Integer, title: Standard_CString): void;
  NextPhase(items: Standard_Integer, cycles: Standard_Integer): void;
  SetPhase(items: Standard_Integer, cycles: Standard_Integer): void;
  NextCycle(items: Standard_Integer): void;
  NextStep(): void;
  NextItem(nbitems: Standard_Integer): void;
  End(): void;
  Where(phase: Standard_Boolean): Standard_CString;
  Percent(phase: Standard_Boolean): Standard_Integer;
}

  export declare class Interface_STAT_1 extends Interface_STAT {
    constructor(title: Standard_CString);
  }

  export declare class Interface_STAT_2 extends Interface_STAT {
    constructor(other: Interface_STAT);
  }

export declare class Interface_ShareFlags {
  Model(): any;
  IsShared(ent: any): Standard_Boolean;
  RootEntities(): Interface_EntityIterator;
  NbRoots(): Standard_Integer;
  Root(num: Standard_Integer): any;
}

  export declare class Interface_ShareFlags_1 extends Interface_ShareFlags {
    constructor(amodel: any, lib: Interface_GeneralLib);
  }

  export declare class Interface_ShareFlags_2 extends Interface_ShareFlags {
    constructor(amodel: any, gtool: any);
  }

  export declare class Interface_ShareFlags_3 extends Interface_ShareFlags {
    constructor(amodel: any, protocol: any);
  }

  export declare class Interface_ShareFlags_4 extends Interface_ShareFlags {
    constructor(amodel: any);
  }

  export declare class Interface_ShareFlags_5 extends Interface_ShareFlags {
    constructor(agraph: Interface_Graph);
  }

export declare class Interface_SignLabel extends MoniTool_SignText {
  constructor()
  Name(): Standard_CString;
  Text(ent: any, context: any): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MoniTool_TypedValue extends Standard_Transient {
  Internals(interp: MoniTool_ValueInterpret, satisf: MoniTool_ValueSatisfies, satisname: Standard_CString, enums: NCollection_DataMap<TCollection_AsciiString, Standard_Integer>): void;
  Name(): Standard_CString;
  ValueType(): MoniTool_ValueType;
  Definition(): TCollection_AsciiString;
  SetDefinition(deftext: Standard_CString): void;
  Print(S: Standard_OStream): void;
  PrintValue(S: Standard_OStream): void;
  AddDef(initext: Standard_CString): Standard_Boolean;
  SetLabel(label: Standard_CString): void;
  Label(): Standard_CString;
  SetMaxLength(max: Standard_Integer): void;
  MaxLength(): Standard_Integer;
  SetIntegerLimit(max: Standard_Boolean, val: Standard_Integer): void;
  IntegerLimit(max: Standard_Boolean, val: Standard_Integer): Standard_Boolean;
  SetRealLimit(max: Standard_Boolean, val: Standard_Real): void;
  RealLimit(max: Standard_Boolean, val: Standard_Real): Standard_Boolean;
  SetUnitDef(def: Standard_CString): void;
  UnitDef(): Standard_CString;
  StartEnum(start: Standard_Integer, match: Standard_Boolean): void;
  AddEnum(v1: Standard_CString, v2: Standard_CString, v3: Standard_CString, v4: Standard_CString, v5: Standard_CString, v6: Standard_CString, v7: Standard_CString, v8: Standard_CString, v9: Standard_CString, v10: Standard_CString): void;
  AddEnumValue(val: Standard_CString, num: Standard_Integer): void;
  EnumDef(startcase: Standard_Integer, endcase: Standard_Integer, match: Standard_Boolean): Standard_Boolean;
  EnumVal(num: Standard_Integer): Standard_CString;
  EnumCase(val: Standard_CString): Standard_Integer;
  SetObjectType(typ: any): void;
  ObjectType(): any;
  SetInterpret(func: MoniTool_ValueInterpret): void;
  HasInterpret(): Standard_Boolean;
  SetSatisfies(func: MoniTool_ValueSatisfies, name: Standard_CString): void;
  SatisfiesName(): Standard_CString;
  IsSetValue(): Standard_Boolean;
  CStringValue(): Standard_CString;
  HStringValue(): any;
  Interpret(hval: any, native: Standard_Boolean): any;
  Satisfies(hval: any): Standard_Boolean;
  ClearValue(): void;
  SetCStringValue(val: Standard_CString): Standard_Boolean;
  SetHStringValue(hval: any): Standard_Boolean;
  IntegerValue(): Standard_Integer;
  SetIntegerValue(ival: Standard_Integer): Standard_Boolean;
  RealValue(): Standard_Real;
  SetRealValue(rval: Standard_Real): Standard_Boolean;
  ObjectValue(): any;
  GetObjectValue(val: any): void;
  SetObjectValue(obj: any): Standard_Boolean;
  ObjectTypeName(): Standard_CString;
  AddLib(tv: any, def: Standard_CString): Standard_Boolean;
  Lib(def: Standard_CString): any;
  FromLib(def: Standard_CString): any;
  LibList(): any;
  StaticValue(name: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class MoniTool_TypedValue_1 extends MoniTool_TypedValue {
    constructor(name: Standard_CString, type: MoniTool_ValueType, init: Standard_CString);
  }

  export declare class MoniTool_TypedValue_2 extends MoniTool_TypedValue {
    constructor(other: any);
  }

export declare class Interface_TypedValue extends MoniTool_TypedValue {
  constructor(name: Standard_CString, type: Interface_ParamType, init: Standard_CString)
  Type(): Interface_ParamType;
  ParamTypeToValueType(typ: Interface_ParamType): MoniTool_ValueType;
  ValueTypeToParamType(typ: MoniTool_ValueType): Interface_ParamType;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Interface_Static extends Interface_TypedValue {
  PrintStatic(S: Standard_OStream): void;
  Family(): Standard_CString;
  SetWild(wildcard: any): void;
  Wild(): any;
  SetUptodate(): void;
  UpdatedStatus(): Standard_Boolean;
  Init_1(family: Standard_CString, name: Standard_CString, type: Interface_ParamType, init: Standard_CString): Standard_Boolean;
  Init_2(family: Standard_CString, name: Standard_CString, type: Standard_Character, init: Standard_CString): Standard_Boolean;
  Static(name: Standard_CString): any;
  IsPresent(name: Standard_CString): Standard_Boolean;
  CDef(name: Standard_CString, part: Standard_CString): Standard_CString;
  IDef(name: Standard_CString, part: Standard_CString): Standard_Integer;
  IsSet(name: Standard_CString, proper: Standard_Boolean): Standard_Boolean;
  CVal(name: Standard_CString): Standard_CString;
  IVal(name: Standard_CString): Standard_Integer;
  RVal(name: Standard_CString): Standard_Real;
  SetCVal(name: Standard_CString, val: Standard_CString): Standard_Boolean;
  SetIVal(name: Standard_CString, val: Standard_Integer): Standard_Boolean;
  SetRVal(name: Standard_CString, val: Standard_Real): Standard_Boolean;
  Update(name: Standard_CString): Standard_Boolean;
  IsUpdated(name: Standard_CString): Standard_Boolean;
  Items(mode: Standard_Integer, criter: Standard_CString): any;
  Standards(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Interface_Static_1 extends Interface_Static {
    constructor(family: Standard_CString, name: Standard_CString, type: Interface_ParamType, init: Standard_CString);
  }

  export declare class Interface_Static_2 extends Interface_Static {
    constructor(family: Standard_CString, name: Standard_CString, other: any);
  }

export declare class Interface_UndefinedContent extends Standard_Transient {
  constructor()
  NbParams(): Standard_Integer;
  NbLiterals(): Standard_Integer;
  ParamData(num: Standard_Integer, ptype: Interface_ParamType, ent: any, val: any): Standard_Boolean;
  ParamType(num: Standard_Integer): Interface_ParamType;
  IsParamEntity(num: Standard_Integer): Standard_Boolean;
  ParamEntity(num: Standard_Integer): any;
  ParamValue(num: Standard_Integer): any;
  Reservate(nb: Standard_Integer, nblit: Standard_Integer): void;
  AddLiteral(ptype: Interface_ParamType, val: any): void;
  AddEntity(ptype: Interface_ParamType, ent: any): void;
  RemoveParam(num: Standard_Integer): void;
  SetLiteral(num: Standard_Integer, ptype: Interface_ParamType, val: any): void;
  SetEntity_1(num: Standard_Integer, ptype: Interface_ParamType, ent: any): void;
  SetEntity_2(num: Standard_Integer, ent: any): void;
  EntityList(): Interface_EntityList;
  GetFromAnother(other: any, TC: Interface_CopyTool): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MoniTool_AttrList {
  SetAttribute(name: Standard_CString, val: any): void;
  RemoveAttribute(name: Standard_CString): Standard_Boolean;
  GetAttribute(name: Standard_CString, type: any, val: any): Standard_Boolean;
  Attribute(name: Standard_CString): any;
  AttributeType(name: Standard_CString): MoniTool_ValueType;
  SetIntegerAttribute(name: Standard_CString, val: Standard_Integer): void;
  GetIntegerAttribute(name: Standard_CString, val: Standard_Integer): Standard_Boolean;
  IntegerAttribute(name: Standard_CString): Standard_Integer;
  SetRealAttribute(name: Standard_CString, val: Standard_Real): void;
  GetRealAttribute(name: Standard_CString, val: Standard_Real): Standard_Boolean;
  RealAttribute(name: Standard_CString): Standard_Real;
  SetStringAttribute(name: Standard_CString, val: Standard_CString): void;
  GetStringAttribute(name: Standard_CString, val: Standard_CString): Standard_Boolean;
  StringAttribute(name: Standard_CString): Standard_CString;
  AttrList(): any;
  SameAttributes(other: MoniTool_AttrList): void;
  GetAttributes(other: MoniTool_AttrList, fromname: Standard_CString, copied: Standard_Boolean): void;
}

  export declare class MoniTool_AttrList_1 extends MoniTool_AttrList {
    constructor();
  }

  export declare class MoniTool_AttrList_2 extends MoniTool_AttrList {
    constructor(other: MoniTool_AttrList);
  }

export declare class MoniTool_CaseData extends Standard_Transient {
  constructor(caseid: Standard_CString, name: Standard_CString)
  SetCaseId(caseid: Standard_CString): void;
  SetName(name: Standard_CString): void;
  CaseId(): Standard_CString;
  Name_1(): Standard_CString;
  IsCheck(): Standard_Boolean;
  IsWarning(): Standard_Boolean;
  IsFail(): Standard_Boolean;
  ResetCheck(): void;
  SetWarning(): void;
  SetFail(): void;
  SetChange(): void;
  SetReplace(num: Standard_Integer): void;
  AddData(val: any, kind: Standard_Integer, name: Standard_CString): void;
  AddRaised(theException: any, name: Standard_CString): void;
  AddShape(sh: TopoDS_Shape, name: Standard_CString): void;
  AddXYZ(aXYZ: gp_XYZ, name: Standard_CString): void;
  AddXY(aXY: gp_XY, name: Standard_CString): void;
  AddReal(val: Standard_Real, name: Standard_CString): void;
  AddReals(v1: Standard_Real, v2: Standard_Real, name: Standard_CString): void;
  AddCPU(lastCPU: Standard_Real, curCPU: Standard_Real, name: Standard_CString): void;
  GetCPU(): Standard_Real;
  LargeCPU(maxCPU: Standard_Real, lastCPU: Standard_Real, curCPU: Standard_Real): Standard_Boolean;
  AddGeom(geom: any, name: Standard_CString): void;
  AddEntity(ent: any, name: Standard_CString): void;
  AddText(text: Standard_CString, name: Standard_CString): void;
  AddInteger(val: Standard_Integer, name: Standard_CString): void;
  AddAny(val: any, name: Standard_CString): void;
  RemoveData(num: Standard_Integer): void;
  NbData(): Standard_Integer;
  Data(nd: Standard_Integer): any;
  GetData(nd: Standard_Integer, type: any, val: any): Standard_Boolean;
  Kind(nd: Standard_Integer): Standard_Integer;
  Name_2(nd: Standard_Integer): TCollection_AsciiString;
  NameNum(name: Standard_CString): Standard_Integer;
  Shape(nd: Standard_Integer): TopoDS_Shape;
  XYZ(nd: Standard_Integer, val: gp_XYZ): Standard_Boolean;
  XY(nd: Standard_Integer, val: gp_XY): Standard_Boolean;
  Reals(nd: Standard_Integer, v1: Standard_Real, v2: Standard_Real): Standard_Boolean;
  Real(nd: Standard_Integer, val: Standard_Real): Standard_Boolean;
  Text(nd: Standard_Integer, text: Standard_CString): Standard_Boolean;
  Integer(nd: Standard_Integer, val: Standard_Integer): Standard_Boolean;
  Msg(): Message_Msg;
  SetDefWarning(acode: Standard_CString): void;
  SetDefFail(acode: Standard_CString): void;
  DefCheck(acode: Standard_CString): Standard_Integer;
  SetDefMsg(casecode: Standard_CString, mesdef: Standard_CString): void;
  DefMsg(casecode: Standard_CString): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MoniTool_DataInfo {
  constructor();
  Type(ent: any): any;
  TypeName(ent: any): Standard_CString;
}

export declare class MoniTool_MTHasher {
  constructor();
  HashCode(theString: Standard_CString, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(Str1: Standard_CString, Str2: Standard_CString): Standard_Boolean;
}

export declare class MoniTool_ElemHasher {
  constructor();
  HashCode(theElement: any, theUpperBound: Standard_Integer): Standard_Integer;
  IsEqual(K1: any, K2: any): Standard_Boolean;
}

export declare class MoniTool_Element extends Standard_Transient {
  GetHashCode(): Standard_Integer;
  Equates(other: any): Standard_Boolean;
  ValueType(): any;
  ValueTypeName(): Standard_CString;
  ListAttr(): MoniTool_AttrList;
  ChangeAttr(): MoniTool_AttrList;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MoniTool_IntVal extends Standard_Transient {
  constructor(val: Standard_Integer)
  Value(): Standard_Integer;
  CValue(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MoniTool_RealVal extends Standard_Transient {
  constructor(val: Standard_Real)
  Value(): Standard_Real;
  CValue(): Standard_Real;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MoniTool_SignShape extends MoniTool_SignText {
  constructor()
  Name(): Standard_CString;
  Text(ent: any, context: any): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MoniTool_Stat {
  Current(): MoniTool_Stat;
  Open(nb: Standard_Integer): Standard_Integer;
  OpenMore(id: Standard_Integer, nb: Standard_Integer): void;
  Add(nb: Standard_Integer): void;
  AddSub(nb: Standard_Integer): void;
  AddEnd(): void;
  Close(id: Standard_Integer): void;
  Level(): Standard_Integer;
  Percent(fromlev: Standard_Integer): Standard_Real;
}

  export declare class MoniTool_Stat_1 extends MoniTool_Stat {
    constructor(title: Standard_CString);
  }

  export declare class MoniTool_Stat_2 extends MoniTool_Stat {
    constructor(other: MoniTool_Stat);
  }

export declare class MoniTool_Timer extends Standard_Transient {
  constructor()
  Timer_1(): OSD_Timer;
  Timer_2(): OSD_Timer;
  Start_1(): void;
  Stop_1(): void;
  Reset(): void;
  Count(): Standard_Integer;
  IsRunning(): Standard_Integer;
  CPU(): Standard_Real;
  Amend(): Standard_Real;
  Dump(ostr: Standard_OStream): void;
  Timer_3(name: Standard_CString): any;
  Start_2(name: Standard_CString): void;
  Stop_2(name: Standard_CString): void;
  Dictionary(): MoniTool_DataMapOfTimer;
  ClearTimers(): void;
  DumpTimers(ostr: Standard_OStream): void;
  ComputeAmendments(): void;
  GetAmendments(Access: Standard_Real, Internal: Standard_Real, External: Standard_Real, Error10: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class MoniTool_TimerSentry {
  Timer(): any;
  Stop(): void;
}

  export declare class MoniTool_TimerSentry_1 extends MoniTool_TimerSentry {
    constructor(cname: Standard_CString);
  }

  export declare class MoniTool_TimerSentry_2 extends MoniTool_TimerSentry {
    constructor(timer: any);
  }

export declare class MoniTool_TransientElem extends MoniTool_Element {
  constructor(akey: any)
  Value(): any;
  Equates(other: any): Standard_Boolean;
  ValueType(): any;
  ValueTypeName(): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class RWHeaderSection {
  constructor();
  Init(): void;
}

export declare class RWHeaderSection_RWFileDescription {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWHeaderSection_RWFileName {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class RWHeaderSection_RWFileSchema {
  constructor()
  ReadStep(data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(SW: StepData_StepWriter, ent: any): void;
}

export declare class StepData_ReadWriteModule extends Interface_ReaderModule {
  CaseNum(data: any, num: Standard_Integer): Standard_Integer;
  CaseStep_1(atype: TCollection_AsciiString): Standard_Integer;
  CaseStep_2(types: TColStd_SequenceOfAsciiString): Standard_Integer;
  IsComplex(CN: Standard_Integer): Standard_Boolean;
  StepType(CN: Standard_Integer): TCollection_AsciiString;
  ShortType(CN: Standard_Integer): TCollection_AsciiString;
  ComplexType(CN: Standard_Integer, types: TColStd_SequenceOfAsciiString): Standard_Boolean;
  Read(CN: Standard_Integer, data: any, num: Standard_Integer, ach: any, ent: any): void;
  ReadStep(CN: Standard_Integer, data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(CN: Standard_Integer, SW: StepData_StepWriter, ent: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class RWHeaderSection_ReadWriteModule extends StepData_ReadWriteModule {
  constructor()
  CaseStep_1(atype: TCollection_AsciiString): Standard_Integer;
  CaseStep_2(types: TColStd_SequenceOfAsciiString): Standard_Integer;
  IsComplex(CN: Standard_Integer): Standard_Boolean;
  StepType(CN: Standard_Integer): TCollection_AsciiString;
  ReadStep(CN: Standard_Integer, data: any, num: Standard_Integer, ach: any, ent: any): void;
  WriteStep(CN: Standard_Integer, SW: StepData_StepWriter, ent: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_StepReaderData {
  constructor(nbheader: Standard_Integer, nbtotal: Standard_Integer, nbpar: Standard_Integer, theSourceCodePage: Resource_FormatType)
  SetRecord(num: Standard_Integer, ident: Standard_CString, type: Standard_CString, nbpar: Standard_Integer): void;
  AddStepParam(num: Standard_Integer, aval: Standard_CString, atype: Interface_ParamType, nument: Standard_Integer): void;
  RecordType(num: Standard_Integer): TCollection_AsciiString;
  CType(num: Standard_Integer): Standard_CString;
  RecordIdent(num: Standard_Integer): Standard_Integer;
  SubListNumber(num: Standard_Integer, nump: Standard_Integer, aslast: Standard_Boolean): Standard_Integer;
  IsComplex(num: Standard_Integer): Standard_Boolean;
  ComplexType(num: Standard_Integer, types: TColStd_SequenceOfAsciiString): void;
  NextForComplex(num: Standard_Integer): Standard_Integer;
  NamedForComplex_1(name: Standard_CString, num0: Standard_Integer, num: Standard_Integer, ach: any): Standard_Boolean;
  NamedForComplex_2(theName: Standard_CString, theShortName: Standard_CString, num0: Standard_Integer, num: Standard_Integer, ach: any): Standard_Boolean;
  CheckNbParams(num: Standard_Integer, nbreq: Standard_Integer, ach: any, mess: Standard_CString): Standard_Boolean;
  ReadSubList(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, numsub: Standard_Integer, optional: Standard_Boolean, lenmin: Standard_Integer, lenmax: Standard_Integer): Standard_Boolean;
  ReadSub(numsub: Standard_Integer, mess: Standard_CString, ach: any, descr: any, val: any): Standard_Integer;
  ReadMember_1(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, val: any): Standard_Boolean;
  ReadField(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, descr: any, fild: StepData_Field): Standard_Boolean;
  ReadList(num: Standard_Integer, ach: any, descr: any, list: StepData_FieldList): Standard_Boolean;
  ReadAny(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, descr: any, val: any): Standard_Boolean;
  ReadXY(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, X: Standard_Real, Y: Standard_Real): Standard_Boolean;
  ReadXYZ(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, X: Standard_Real, Y: Standard_Real, Z: Standard_Real): Standard_Boolean;
  ReadReal(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, val: Standard_Real): Standard_Boolean;
  ReadEntity_1(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, atype: any, ent: any): Standard_Boolean;
  ReadEntity_3(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, sel: StepData_SelectType): Standard_Boolean;
  ReadInteger(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, val: Standard_Integer): Standard_Boolean;
  ReadBoolean(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, flag: Standard_Boolean): Standard_Boolean;
  ReadLogical(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, flag: StepData_Logical): Standard_Boolean;
  ReadString(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, val: any): Standard_Boolean;
  ReadEnumParam(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, text: Standard_CString): Standard_Boolean;
  FailEnumValue(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any): void;
  ReadEnum(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, enumtool: StepData_EnumTool, val: Standard_Integer): Standard_Boolean;
  ReadTypedParam(num: Standard_Integer, nump: Standard_Integer, mustbetyped: Standard_Boolean, mess: Standard_CString, ach: any, numr: Standard_Integer, numrp: Standard_Integer, typ: TCollection_AsciiString): Standard_Boolean;
  CheckDerived(num: Standard_Integer, nump: Standard_Integer, mess: Standard_CString, ach: any, errstat: Standard_Boolean): Standard_Boolean;
  NbEntities(): Standard_Integer;
  FindNextRecord(num: Standard_Integer): Standard_Integer;
  SetEntityNumbers(withmap: Standard_Boolean): void;
  FindNextHeaderRecord(num: Standard_Integer): Standard_Integer;
  PrepareHeader(): void;
  GlobalCheck(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_SelectType {
  CaseNum(ent: any): Standard_Integer;
  Matches(ent: any): Standard_Boolean;
  SetValue(ent: any): void;
  Nullify(): void;
  Value(): any;
  IsNull(): Standard_Boolean;
  Type(): any;
  CaseNumber(): Standard_Integer;
  Description(): any;
  NewMember(): any;
  CaseMem(ent: any): Standard_Integer;
  CaseMember(): Standard_Integer;
  Member(): any;
  SelectName(): Standard_CString;
  Int(): Standard_Integer;
  SetInt(val: Standard_Integer): void;
  Integer(): Standard_Integer;
  SetInteger(val: Standard_Integer, name: Standard_CString): void;
  Boolean(): Standard_Boolean;
  SetBoolean(val: Standard_Boolean, name: Standard_CString): void;
  Logical(): StepData_Logical;
  SetLogical(val: StepData_Logical, name: Standard_CString): void;
  Real(): Standard_Real;
  SetReal(val: Standard_Real, name: Standard_CString): void;
}

export declare class Transfer_ProcessForFinder extends Standard_Transient {
  Clear(): void;
  Clean(): void;
  Resize(nb: Standard_Integer): void;
  SetActor(actor: any): void;
  Actor(): any;
  Find(start: any): any;
  IsBound(start: any): Standard_Boolean;
  IsAlreadyUsed(start: any): Standard_Boolean;
  Bind(start: any, binder: any): void;
  Rebind(start: any, binder: any): void;
  Unbind(start: any): Standard_Boolean;
  FindElseBind(start: any): any;
  SetMessenger(messenger: any): void;
  Messenger(): any;
  SetTraceLevel(tracelev: Standard_Integer): void;
  TraceLevel(): Standard_Integer;
  SendFail(start: any, amsg: Message_Msg): void;
  SendWarning(start: any, amsg: Message_Msg): void;
  SendMsg(start: any, amsg: Message_Msg): void;
  AddFail_1(start: any, mess: Standard_CString, orig: Standard_CString): void;
  AddError(start: any, mess: Standard_CString, orig: Standard_CString): void;
  AddFail_2(start: any, amsg: Message_Msg): void;
  AddWarning_1(start: any, mess: Standard_CString, orig: Standard_CString): void;
  AddWarning_2(start: any, amsg: Message_Msg): void;
  Mend(start: any, pref: Standard_CString): void;
  Check(start: any): any;
  BindTransient(start: any, res: any): void;
  FindTransient(start: any): any;
  BindMultiple(start: any): void;
  AddMultiple(start: any, res: any): void;
  FindTypedTransient_1(start: any, atype: any, val: any): Standard_Boolean;
  GetTypedTransient_1(binder: any, atype: any, val: any): Standard_Boolean;
  NbMapped(): Standard_Integer;
  Mapped(num: Standard_Integer): any;
  MapIndex(start: any): Standard_Integer;
  MapItem(num: Standard_Integer): any;
  SetRoot(start: any): void;
  SetRootManagement(stat: Standard_Boolean): void;
  NbRoots(): Standard_Integer;
  Root(num: Standard_Integer): any;
  RootItem(num: Standard_Integer): any;
  RootIndex(start: any): Standard_Integer;
  NestingLevel(): Standard_Integer;
  ResetNestingLevel(): void;
  Recognize(start: any): Standard_Boolean;
  Transferring(start: any, theProgress: Message_ProgressRange): any;
  Transfer(start: any, theProgress: Message_ProgressRange): Standard_Boolean;
  SetErrorHandle(err: Standard_Boolean): void;
  ErrorHandle(): Standard_Boolean;
  StartTrace(binder: any, start: any, level: Standard_Integer, mode: Standard_Integer): void;
  PrintTrace(start: any, S: Standard_OStream): void;
  IsLooping(alevel: Standard_Integer): Standard_Boolean;
  RootResult(withstart: Standard_Boolean): Transfer_IteratorOfProcessForFinder;
  CompleteResult(withstart: Standard_Boolean): Transfer_IteratorOfProcessForFinder;
  AbnormalResult(): Transfer_IteratorOfProcessForFinder;
  CheckList(erronly: Standard_Boolean): Interface_CheckIterator;
  ResultOne(start: any, level: Standard_Integer, withstart: Standard_Boolean): Transfer_IteratorOfProcessForFinder;
  CheckListOne(start: any, level: Standard_Integer, erronly: Standard_Boolean): Interface_CheckIterator;
  IsCheckListEmpty(start: any, level: Standard_Integer, erronly: Standard_Boolean): Standard_Boolean;
  RemoveResult(start: any, level: Standard_Integer, compute: Standard_Boolean): void;
  CheckNum(start: any): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Transfer_ProcessForFinder_1 extends Transfer_ProcessForFinder {
    constructor(nb: Standard_Integer);
  }

  export declare class Transfer_ProcessForFinder_2 extends Transfer_ProcessForFinder {
    constructor(printer: any, nb: Standard_Integer);
  }

export declare class Transfer_FinderProcess extends Transfer_ProcessForFinder {
  constructor(nb: Standard_Integer)
  SetModel(model: any): void;
  Model(): any;
  NextMappedWithAttribute(name: Standard_CString, num0: Standard_Integer): Standard_Integer;
  TransientMapper(obj: any): any;
  PrintTrace(start: any, S: Standard_OStream): void;
  PrintStats(mode: Standard_Integer, S: Standard_OStream): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSControl_TransferWriter extends Standard_Transient {
  constructor()
  FinderProcess(): any;
  SetFinderProcess(theFP: any): void;
  Controller(): any;
  SetController(theCtl: any): void;
  Clear(theMode: Standard_Integer): void;
  TransferMode(): Standard_Integer;
  SetTransferMode(theMode: Standard_Integer): void;
  PrintStats(theWhat: Standard_Integer, theMode: Standard_Integer): void;
  RecognizeTransient(theObj: any): Standard_Boolean;
  TransferWriteTransient(theModel: any, theObj: any, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  RecognizeShape(theShape: TopoDS_Shape): Standard_Boolean;
  TransferWriteShape(theModel: any, theShape: TopoDS_Shape, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  CheckList(): Interface_CheckIterator;
  ResultCheckList(theModel: any): Interface_CheckIterator;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSControl_WorkSession extends IFSelect_WorkSession {
  constructor()
  ClearData(theMode: Standard_Integer): void;
  SelectNorm(theNormName: Standard_CString): Standard_Boolean;
  SetController(theCtl: any): void;
  SelectedNorm(theRsc: Standard_Boolean): Standard_CString;
  NormAdaptor(): any;
  Context(): any;
  SetAllContext(theContext: any): void;
  ClearContext(): void;
  PrintTransferStatus(theNum: Standard_Integer, theWri: Standard_Boolean, theS: Standard_OStream): Standard_Boolean;
  InitTransferReader(theMode: Standard_Integer): void;
  SetTransferReader(theTR: any): void;
  TransferReader(): any;
  MapReader(): any;
  SetMapReader(theTP: any): Standard_Boolean;
  Result(theEnt: any, theMode: Standard_Integer): any;
  TransferReadOne(theEnts: any, theProgress: Message_ProgressRange): Standard_Integer;
  TransferReadRoots(theProgress: Message_ProgressRange): Standard_Integer;
  NewModel(): any;
  TransferWriter(): any;
  SetMapWriter(theFP: any): Standard_Boolean;
  TransferWriteShape(theShape: TopoDS_Shape, theCompGraph: Standard_Boolean, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  TransferWriteCheckList(): Interface_CheckIterator;
  Vars(): any;
  SetVars(theVars: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_SelectMember extends Standard_Transient {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Matches(name: Standard_CString): Standard_Boolean;
  Kind(): Standard_Integer;
  SetKind(kind: Standard_Integer): void;
  ParamType(): Interface_ParamType;
  Int(): Standard_Integer;
  SetInt(val: Standard_Integer): void;
  Integer(): Standard_Integer;
  SetInteger(val: Standard_Integer): void;
  Boolean(): Standard_Boolean;
  SetBoolean(val: Standard_Boolean): void;
  Logical(): StepData_Logical;
  SetLogical(val: StepData_Logical): void;
  Real(): Standard_Real;
  SetReal(val: Standard_Real): void;
  String(): Standard_CString;
  SetString(val: Standard_CString): void;
  Enum(): Standard_Integer;
  EnumText(): Standard_CString;
  SetEnum(val: Standard_Integer, text: Standard_CString): void;
  SetEnumText(val: Standard_Integer, text: Standard_CString): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_SelectInt extends StepData_SelectMember {
  constructor()
  Kind(): Standard_Integer;
  SetKind(kind: Standard_Integer): void;
  Int(): Standard_Integer;
  SetInt(val: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_WriterLib {
  SetGlobal(amodule: any, aprotocol: any): void;
  AddProtocol(aprotocol: any): void;
  Clear(): void;
  SetComplete(): void;
  Select(obj: any, module: any, CN: Standard_Integer): Standard_Boolean;
  Start(): void;
  More(): Standard_Boolean;
  Next(): void;
  Module(): any;
  Protocol(): any;
}

  export declare class StepData_WriterLib_1 extends StepData_WriterLib {
    constructor(aprotocol: any);
  }

  export declare class StepData_WriterLib_2 extends StepData_WriterLib {
    constructor();
  }

export declare class StepSelect_StepType extends IFSelect_Signature {
  constructor()
  SetProtocol(proto: any): void;
  Value(ent: any, model: any): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSControl_SelectForTransfer extends IFSelect_SelectExtract {
  SetReader(TR: any): void;
  SetActor(act: any): void;
  Actor(): any;
  Reader(): any;
  Sort(rank: Standard_Integer, ent: any, model: any): Standard_Boolean;
  ExtractLabel(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class XSControl_SelectForTransfer_1 extends XSControl_SelectForTransfer {
    constructor();
  }

  export declare class XSControl_SelectForTransfer_2 extends XSControl_SelectForTransfer {
    constructor(TR: any);
  }

export declare class StepData_SelectReal extends StepData_SelectMember {
  constructor()
  Kind(): Standard_Integer;
  Real(): Standard_Real;
  SetReal(val: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData {
  constructor();
  HeaderProtocol(): any;
  AddHeaderProtocol(headerproto: any): void;
  Init(): void;
  Protocol(): any;
}

export declare class StepData_Field {
  CopyFrom(other: StepData_Field): void;
  Clear(kind: Standard_Integer): void;
  SetDerived(): void;
  SetInt_1(val: Standard_Integer): void;
  SetInteger_1(val: Standard_Integer): void;
  SetBoolean_1(val: Standard_Boolean): void;
  SetLogical_1(val: StepData_Logical): void;
  SetReal_1(val: Standard_Real): void;
  SetString_1(val: Standard_CString): void;
  SetEnum_1(val: Standard_Integer, text: Standard_CString): void;
  SetSelectMember(val: any): void;
  SetEntity_1(val: any): void;
  SetEntity_2(): void;
  SetList(size: Standard_Integer, first: Standard_Integer): void;
  SetList2(siz1: Standard_Integer, siz2: Standard_Integer, f1: Standard_Integer, f2: Standard_Integer): void;
  Set(val: any): void;
  ClearItem(num: Standard_Integer): void;
  SetInt_2(num: Standard_Integer, val: Standard_Integer, kind: Standard_Integer): void;
  SetInteger_2(num: Standard_Integer, val: Standard_Integer): void;
  SetBoolean_2(num: Standard_Integer, val: Standard_Boolean): void;
  SetLogical_2(num: Standard_Integer, val: StepData_Logical): void;
  SetEnum_2(num: Standard_Integer, val: Standard_Integer, text: Standard_CString): void;
  SetReal_2(num: Standard_Integer, val: Standard_Real): void;
  SetString_2(num: Standard_Integer, val: Standard_CString): void;
  SetEntity_3(num: Standard_Integer, val: any): void;
  IsSet(n1: Standard_Integer, n2: Standard_Integer): Standard_Boolean;
  ItemKind(n1: Standard_Integer, n2: Standard_Integer): Standard_Integer;
  Kind(type: Standard_Boolean): Standard_Integer;
  Arity(): Standard_Integer;
  Length(index: Standard_Integer): Standard_Integer;
  Lower(index: Standard_Integer): Standard_Integer;
  Int(): Standard_Integer;
  Integer(n1: Standard_Integer, n2: Standard_Integer): Standard_Integer;
  Boolean(n1: Standard_Integer, n2: Standard_Integer): Standard_Boolean;
  Logical(n1: Standard_Integer, n2: Standard_Integer): StepData_Logical;
  Real(n1: Standard_Integer, n2: Standard_Integer): Standard_Real;
  String(n1: Standard_Integer, n2: Standard_Integer): Standard_CString;
  Enum(n1: Standard_Integer, n2: Standard_Integer): Standard_Integer;
  EnumText(n1: Standard_Integer, n2: Standard_Integer): Standard_CString;
  Entity(n1: Standard_Integer, n2: Standard_Integer): any;
  Transient(): any;
}

  export declare class StepData_Field_1 extends StepData_Field {
    constructor();
  }

  export declare class StepData_Field_2 extends StepData_Field {
    constructor(other: StepData_Field, copy: Standard_Boolean);
  }

export declare class StepData_Described extends Standard_Transient {
  Description(): any;
  IsComplex(): Standard_Boolean;
  Matches(steptype: Standard_CString): Standard_Boolean;
  As(steptype: Standard_CString): any;
  HasField(name: Standard_CString): Standard_Boolean;
  Field(name: Standard_CString): StepData_Field;
  CField(name: Standard_CString): StepData_Field;
  Check(ach: any): void;
  Shared(list: Interface_EntityIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_EDescr extends Standard_Transient {
  Matches(steptype: Standard_CString): Standard_Boolean;
  IsComplex(): Standard_Boolean;
  NewEntity(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_ECDescr extends StepData_EDescr {
  constructor()
  Add(member: any): void;
  NbMembers(): Standard_Integer;
  Member(num: Standard_Integer): any;
  TypeList(): any;
  Matches(steptype: Standard_CString): Standard_Boolean;
  IsComplex(): Standard_Boolean;
  NewEntity(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_ESDescr extends StepData_EDescr {
  constructor(name: Standard_CString)
  SetNbFields(nb: Standard_Integer): void;
  SetField(num: Standard_Integer, name: Standard_CString, descr: any): void;
  SetBase(base: any): void;
  SetSuper(super_: any): void;
  TypeName(): Standard_CString;
  StepType(): TCollection_AsciiString;
  Base(): any;
  Super(): any;
  IsSub(other: any): Standard_Boolean;
  NbFields(): Standard_Integer;
  Rank(name: Standard_CString): Standard_Integer;
  Name(num: Standard_Integer): Standard_CString;
  Field(num: Standard_Integer): any;
  NamedField(name: Standard_CString): any;
  Matches(steptype: Standard_CString): Standard_Boolean;
  IsComplex(): Standard_Boolean;
  NewEntity(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_EnumTool {
  constructor(e0: Standard_CString, e1: Standard_CString, e2: Standard_CString, e3: Standard_CString, e4: Standard_CString, e5: Standard_CString, e6: Standard_CString, e7: Standard_CString, e8: Standard_CString, e9: Standard_CString, e10: Standard_CString, e11: Standard_CString, e12: Standard_CString, e13: Standard_CString, e14: Standard_CString, e15: Standard_CString, e16: Standard_CString, e17: Standard_CString, e18: Standard_CString, e19: Standard_CString, e20: Standard_CString, e21: Standard_CString, e22: Standard_CString, e23: Standard_CString, e24: Standard_CString, e25: Standard_CString, e26: Standard_CString, e27: Standard_CString, e28: Standard_CString, e29: Standard_CString, e30: Standard_CString, e31: Standard_CString, e32: Standard_CString, e33: Standard_CString, e34: Standard_CString, e35: Standard_CString, e36: Standard_CString, e37: Standard_CString, e38: Standard_CString, e39: Standard_CString)
  AddDefinition(term: Standard_CString): void;
  IsSet(): Standard_Boolean;
  MaxValue(): Standard_Integer;
  Optional(mode: Standard_Boolean): void;
  NullValue(): Standard_Integer;
  Text(num: Standard_Integer): TCollection_AsciiString;
  Value_1(txt: Standard_CString): Standard_Integer;
  Value_2(txt: TCollection_AsciiString): Standard_Integer;
}

export declare class StepData_FieldList {
  constructor()
  NbFields(): Standard_Integer;
  Field(num: Standard_Integer): StepData_Field;
  CField(num: Standard_Integer): StepData_Field;
  FillShared(iter: Interface_EntityIterator): void;
}

export declare class StepData_FieldList1 extends StepData_FieldList {
  constructor()
  NbFields(): Standard_Integer;
  Field(num: Standard_Integer): StepData_Field;
  CField(num: Standard_Integer): StepData_Field;
}

export declare class StepData_FieldListD extends StepData_FieldList {
  constructor(nb: Standard_Integer)
  SetNb(nb: Standard_Integer): void;
  NbFields(): Standard_Integer;
  Field(num: Standard_Integer): StepData_Field;
  CField(num: Standard_Integer): StepData_Field;
}

export declare class StepData_FieldListN extends StepData_FieldList {
  constructor(nb: Standard_Integer)
  NbFields(): Standard_Integer;
  Field(num: Standard_Integer): StepData_Field;
  CField(num: Standard_Integer): StepData_Field;
}

export declare class StepData_FileProtocol extends StepData_Protocol {
  constructor()
  Add(protocol: any): void;
  NbResources(): Standard_Integer;
  Resource(num: Standard_Integer): any;
  TypeNumber(atype: any): Standard_Integer;
  GlobalCheck(G: Interface_Graph, ach: any): Standard_Boolean;
  SchemaName(): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_FileRecognizer extends Standard_Transient {
  Evaluate(akey: TCollection_AsciiString, res: any): Standard_Boolean;
  Result(): any;
  Add(reco: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_GlobalNodeOfWriterLib extends Standard_Transient {
  constructor()
  Add(amodule: any, aprotocol: any): void;
  Module(): any;
  Protocol(): any;
  Next(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_NodeOfWriterLib extends Standard_Transient {
  constructor()
  AddNode(anode: any): void;
  Module(): any;
  Protocol(): any;
  Next(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_PDescr extends Standard_Transient {
  constructor()
  SetName(name: Standard_CString): void;
  Name(): Standard_CString;
  SetSelect(): void;
  AddMember(member: any): void;
  SetMemberName(memname: Standard_CString): void;
  SetInteger(): void;
  SetReal(): void;
  SetString(): void;
  SetBoolean(): void;
  SetLogical(): void;
  SetEnum(): void;
  AddEnumDef(enumdef: Standard_CString): void;
  SetType(atype: any): void;
  SetDescr(dscnam: Standard_CString): void;
  AddArity(arity: Standard_Integer): void;
  SetArity(arity: Standard_Integer): void;
  SetFrom(other: any): void;
  SetOptional(opt: Standard_Boolean): void;
  SetDerived(der: Standard_Boolean): void;
  SetField(name: Standard_CString, rank: Standard_Integer): void;
  IsSelect(): Standard_Boolean;
  Member(name: Standard_CString): any;
  IsInteger(): Standard_Boolean;
  IsReal(): Standard_Boolean;
  IsString(): Standard_Boolean;
  IsBoolean(): Standard_Boolean;
  IsLogical(): Standard_Boolean;
  IsEnum(): Standard_Boolean;
  EnumMax(): Standard_Integer;
  EnumValue(name: Standard_CString): Standard_Integer;
  EnumText(val: Standard_Integer): Standard_CString;
  IsEntity(): Standard_Boolean;
  IsType(atype: any): Standard_Boolean;
  Type(): any;
  IsDescr(descr: any): Standard_Boolean;
  DescrName(): Standard_CString;
  Arity(): Standard_Integer;
  Simple(): any;
  IsOptional(): Standard_Boolean;
  IsDerived(): Standard_Boolean;
  IsField(): Standard_Boolean;
  FieldName(): Standard_CString;
  FieldRank(): Standard_Integer;
  Check(afild: StepData_Field, ach: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_Plex extends StepData_Described {
  constructor(descr: any)
  Add(member: any): void;
  ECDescr(): any;
  IsComplex(): Standard_Boolean;
  Matches(steptype: Standard_CString): Standard_Boolean;
  As(steptype: Standard_CString): any;
  HasField(name: Standard_CString): Standard_Boolean;
  Field(name: Standard_CString): StepData_Field;
  CField(name: Standard_CString): StepData_Field;
  NbMembers(): Standard_Integer;
  Member(num: Standard_Integer): any;
  TypeList(): any;
  Check(ach: any): void;
  Shared(list: Interface_EntityIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_SelectNamed extends StepData_SelectMember {
  constructor()
  HasName(): Standard_Boolean;
  Name(): Standard_CString;
  SetName(name: Standard_CString): Standard_Boolean;
  Field(): StepData_Field;
  CField(): StepData_Field;
  Kind(): Standard_Integer;
  SetKind(kind: Standard_Integer): void;
  Int(): Standard_Integer;
  SetInt(val: Standard_Integer): void;
  Real(): Standard_Real;
  SetReal(val: Standard_Real): void;
  String(): Standard_CString;
  SetString(val: Standard_CString): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_SelectArrReal extends StepData_SelectNamed {
  constructor()
  Kind(): Standard_Integer;
  ArrReal(): any;
  SetArrReal(arr: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_Simple extends StepData_Described {
  constructor(descr: any)
  ESDescr(): any;
  StepType(): Standard_CString;
  IsComplex(): Standard_Boolean;
  Matches(steptype: Standard_CString): Standard_Boolean;
  As(steptype: Standard_CString): any;
  HasField(name: Standard_CString): Standard_Boolean;
  Field(name: Standard_CString): StepData_Field;
  CField(name: Standard_CString): StepData_Field;
  NbFields(): Standard_Integer;
  FieldNum(num: Standard_Integer): StepData_Field;
  CFieldNum(num: Standard_Integer): StepData_Field;
  Fields(): StepData_FieldListN;
  CFields(): StepData_FieldListN;
  Check(ach: any): void;
  Shared(list: Interface_EntityIterator): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_StepWriter {
  constructor(amodel: any)
  LabelMode(): Standard_Integer;
  TypeMode(): Standard_Integer;
  FloatWriter(): Interface_FloatWriter;
  SetScope(numscope: Standard_Integer, numin: Standard_Integer): void;
  IsInScope(num: Standard_Integer): Standard_Boolean;
  SendModel(protocol: any, headeronly: Standard_Boolean): void;
  SendHeader(): void;
  SendData(): void;
  SendEntity(nument: Standard_Integer, lib: StepData_WriterLib): void;
  EndSec(): void;
  EndFile(): void;
  NewLine(evenempty: Standard_Boolean): void;
  JoinLast(newline: Standard_Boolean): void;
  Indent(onent: Standard_Boolean): void;
  SendIdent(ident: Standard_Integer): void;
  SendScope(): void;
  SendEndscope(): void;
  Comment(mode: Standard_Boolean): void;
  SendComment_1(text: any): void;
  SendComment_2(text: Standard_CString): void;
  StartEntity(atype: TCollection_AsciiString): void;
  StartComplex(): void;
  EndComplex(): void;
  SendField(fild: StepData_Field, descr: any): void;
  SendSelect(sm: any, descr: any): void;
  SendList(list: StepData_FieldList, descr: any): void;
  OpenSub(): void;
  OpenTypedSub(subtype: Standard_CString): void;
  CloseSub(): void;
  AddParam(): void;
  Send_1(val: Standard_Integer): void;
  Send_2(val: Standard_Real): void;
  Send_3(val: TCollection_AsciiString): void;
  Send_4(val: any): void;
  SendBoolean(val: Standard_Boolean): void;
  SendLogical(val: StepData_Logical): void;
  SendString_1(val: TCollection_AsciiString): void;
  SendString_2(val: Standard_CString): void;
  SendEnum_1(val: TCollection_AsciiString): void;
  SendEnum_2(val: Standard_CString): void;
  SendArrReal(anArr: any): void;
  SendUndef(): void;
  SendDerived(): void;
  EndEntity(): void;
  CheckList(): Interface_CheckIterator;
  NbLines(): Standard_Integer;
  Line(num: Standard_Integer): any;
  Print(S: Standard_OStream): Standard_Boolean;
}

export declare class StepData_StepDumper {
  constructor(amodel: any, protocol: any, mode: Standard_Integer)
  StepWriter(): StepData_StepWriter;
  Dump_1(S: Standard_OStream, ent: any, level: Standard_Integer): Standard_Boolean;
  Dump_2(S: Standard_OStream, num: Standard_Integer, level: Standard_Integer): Standard_Boolean;
}

export declare class StepData_StepModel extends Interface_InterfaceModel {
  constructor()
  Entity(num: Standard_Integer): any;
  GetFromAnother(other: any): void;
  NewEmptyModel(): any;
  Header(): Interface_EntityIterator;
  HasHeaderEntity(atype: any): Standard_Boolean;
  HeaderEntity(atype: any): any;
  ClearHeader(): void;
  AddHeaderEntity(ent: any): void;
  VerifyCheck(ach: any): void;
  DumpHeader(S: Standard_OStream, level: Standard_Integer): void;
  ClearLabels(): void;
  SetIdentLabel(ent: any, ident: Standard_Integer): void;
  IdentLabel(ent: any): Standard_Integer;
  PrintLabel(ent: any, S: Standard_OStream): void;
  StringLabel(ent: any): any;
  SourceCodePage(): Resource_FormatType;
  SetSourceCodePage(theCode: Resource_FormatType): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepData_StepReaderTool extends Interface_FileReaderTool {
  constructor(reader: any, protocol: any)
  Prepare_1(optimize: Standard_Boolean): void;
  Prepare_2(reco: any, optimize: Standard_Boolean): void;
  Recognize(num: Standard_Integer, ach: any, ent: any): Standard_Boolean;
  PrepareHeader(reco: any): void;
  BeginRead(amodel: any): void;
  AnalyseRecord(num: Standard_Integer, anent: any, acheck: any): Standard_Boolean;
  EndRead(amodel: any): void;
}

export declare class StepSelect_Activator extends IFSelect_Activator {
  constructor()
  Do(number: Standard_Integer, pilot: any): IFSelect_ReturnStatus;
  Help(number: Standard_Integer): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepSelect_FileModifier extends IFSelect_GeneralModifier {
  Perform(ctx: IFSelect_ContextWrite, writer: StepData_StepWriter): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepSelect_FloatFormat extends StepSelect_FileModifier {
  constructor()
  SetDefault(digits: Standard_Integer): void;
  SetZeroSuppress(mode: Standard_Boolean): void;
  SetFormat(format: Standard_CString): void;
  SetFormatForRange(format: Standard_CString, Rmin: Standard_Real, Rmax: Standard_Real): void;
  Format(zerosup: Standard_Boolean, mainform: TCollection_AsciiString, hasrange: Standard_Boolean, forminrange: TCollection_AsciiString, rangemin: Standard_Real, rangemax: Standard_Real): void;
  Perform(ctx: IFSelect_ContextWrite, writer: StepData_StepWriter): void;
  Label(): TCollection_AsciiString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepSelect_ModelModifier extends IFSelect_Modifier {
  Perform(ctx: IFSelect_ContextModif, target: any, protocol: any, TC: Interface_CopyTool): void;
  PerformProtocol(ctx: IFSelect_ContextModif, target: any, proto: any, TC: Interface_CopyTool): void;
  Performing(ctx: IFSelect_ContextModif, target: any, TC: Interface_CopyTool): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class StepSelect_WorkLibrary extends IFSelect_WorkLibrary {
  constructor(copymode: Standard_Boolean)
  SetDumpLabel(mode: Standard_Integer): void;
  ReadFile(name: Standard_CString, model: any, protocol: any): Standard_Integer;
  ReadStream(theName: Standard_CString, theIStream: any, model: any, protocol: any): Standard_Integer;
  WriteFile(ctx: IFSelect_ContextWrite): Standard_Boolean;
  CopyModel(original: any, newmodel: any, list: Interface_EntityIterator, TC: Interface_CopyTool): Standard_Boolean;
  DumpEntity(model: any, protocol: any, entity: any, S: Standard_OStream, level: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_TransferDispatch extends Interface_CopyTool {
  TransientProcess(): any;
  Copy(entfrom: any, entto: any, mapped: Standard_Boolean, errstat: Standard_Boolean): Standard_Boolean;
}

  export declare class Transfer_TransferDispatch_1 extends Transfer_TransferDispatch {
    constructor(amodel: any, lib: Interface_GeneralLib);
  }

  export declare class Transfer_TransferDispatch_2 extends Transfer_TransferDispatch {
    constructor(amodel: any, protocol: any);
  }

  export declare class Transfer_TransferDispatch_3 extends Transfer_TransferDispatch {
    constructor(amodel: any);
  }

export declare class Transfer_ActorDispatch extends Transfer_ActorOfTransientProcess {
  AddActor(actor: any): void;
  TransferDispatch(): Transfer_TransferDispatch;
  Transfer(start: any, TP: any, theProgress: Message_ProgressRange): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Transfer_ActorDispatch_1 extends Transfer_ActorDispatch {
    constructor(amodel: any, lib: Interface_GeneralLib);
  }

  export declare class Transfer_ActorDispatch_2 extends Transfer_ActorDispatch {
    constructor(amodel: any, protocol: any);
  }

  export declare class Transfer_ActorDispatch_3 extends Transfer_ActorDispatch {
    constructor(amodel: any);
  }

export declare class Transfer_SimpleBinderOfTransient extends Transfer_Binder {
  constructor()
  ResultType(): any;
  ResultTypeName(): Standard_CString;
  SetResult(res: any): void;
  Result(): any;
  GetTypedResult(bnd: any, atype: any, res: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_BinderOfTransientInteger extends Transfer_SimpleBinderOfTransient {
  constructor()
  SetInteger(value: Standard_Integer): void;
  Integer(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_DataInfo {
  constructor();
  Type(ent: any): any;
  TypeName(ent: any): Standard_CString;
}

export declare class Transfer_DispatchControl extends Interface_CopyControl {
  constructor(model: any, TP: any)
  TransientProcess(): any;
  StartingModel(): any;
  Clear(): void;
  Bind(ent: any, res: any): void;
  Search(ent: any, res: any): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_TransferIterator {
  constructor()
  AddItem(atr: any): void;
  SelectBinder(atype: any, keep: Standard_Boolean): void;
  SelectResult(atype: any, keep: Standard_Boolean): void;
  SelectUnique(keep: Standard_Boolean): void;
  SelectItem(num: Standard_Integer, keep: Standard_Boolean): void;
  Number(): Standard_Integer;
  Start(): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): any;
  HasResult(): Standard_Boolean;
  HasUniqueResult(): Standard_Boolean;
  ResultType(): any;
  HasTransientResult(): Standard_Boolean;
  TransientResult(): any;
  Status(): Transfer_StatusExec;
  HasFails(): Standard_Boolean;
  HasWarnings(): Standard_Boolean;
  Check(): any;
}

export declare class Transfer_IteratorOfProcessForFinder extends Transfer_TransferIterator {
  constructor(withstarts: Standard_Boolean)
  Add_1(binder: any): void;
  Add_2(binder: any, start: any): void;
  Filter(list: any, keep: Standard_Boolean): void;
  HasStarting(): Standard_Boolean;
  Starting(): any;
}

export declare class Transfer_IteratorOfProcessForTransient extends Transfer_TransferIterator {
  constructor(withstarts: Standard_Boolean)
  Add_1(binder: any): void;
  Add_2(binder: any, start: any): void;
  Filter(list: any, keep: Standard_Boolean): void;
  HasStarting(): Standard_Boolean;
  Starting(): any;
}

export declare class Transfer_MapContainer extends Standard_Transient {
  constructor()
  SetMapObjects(theMapObjects: TColStd_DataMapOfTransientTransient): void;
  GetMapObjects(): TColStd_DataMapOfTransientTransient;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_MultipleBinder extends Transfer_Binder {
  constructor()
  IsMultiple(): Standard_Boolean;
  ResultType(): any;
  ResultTypeName(): Standard_CString;
  AddResult(res: any): void;
  NbResults(): Standard_Integer;
  ResultValue(num: Standard_Integer): any;
  MultipleResult(): any;
  SetMultipleResult(mulres: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_ResultFromModel extends Standard_Transient {
  constructor()
  SetModel(model: any): void;
  SetFileName(filename: Standard_CString): void;
  Model(): any;
  FileName(): Standard_CString;
  Fill(TP: any, ent: any): Standard_Boolean;
  Strip(mode: Standard_Integer): void;
  FillBack(TP: any): void;
  HasResult(): Standard_Boolean;
  MainResult(): any;
  SetMainResult(amain: any): void;
  MainLabel(): Standard_CString;
  MainNumber(): Standard_Integer;
  ResultFromKey(start: any): any;
  Results(level: Standard_Integer): any;
  TransferredList(level: Standard_Integer): any;
  CheckedList(check: Interface_CheckStatus, result: Standard_Boolean): any;
  CheckList(erronly: Standard_Boolean, level: Standard_Integer): Interface_CheckIterator;
  CheckStatus(): Interface_CheckStatus;
  ComputeCheckStatus(enforce: Standard_Boolean): Interface_CheckStatus;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_ResultFromTransient extends Standard_Transient {
  constructor()
  SetStart(start: any): void;
  SetBinder(binder: any): void;
  Start(): any;
  Binder(): any;
  HasResult(): Standard_Boolean;
  Check(): any;
  CheckStatus(): Interface_CheckStatus;
  ClearSubs(): void;
  AddSubResult(sub: any): void;
  NbSubResults(): Standard_Integer;
  SubResult(num: Standard_Integer): any;
  ResultFromKey(key: any): any;
  FillMap(map: TColStd_IndexedMapOfTransient): void;
  Fill(TP: any): void;
  Strip(): void;
  FillBack(TP: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_TransferFailure extends Interface_InterfaceError {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Transfer_TransferFailure_1 extends Transfer_TransferFailure {
    constructor();
  }

  export declare class Transfer_TransferFailure_2 extends Transfer_TransferFailure {
    constructor(theMessage: Standard_CString);
  }

export declare class Transfer_TransferDeadLoop extends Transfer_TransferFailure {
  Raise_1(theMessage: Standard_CString): void;
  Raise_2(theMessage: Standard_SStream): void;
  NewInstance(theMessage: Standard_CString): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Transfer_TransferDeadLoop_1 extends Transfer_TransferDeadLoop {
    constructor();
  }

  export declare class Transfer_TransferDeadLoop_2 extends Transfer_TransferDeadLoop {
    constructor(theMessage: Standard_CString);
  }

export declare class Transfer_TransferInput {
  constructor()
  Entities(list: Transfer_TransferIterator): Interface_EntityIterator;
  FillModel_1(proc: any, amodel: any): void;
  FillModel_2(proc: any, amodel: any, proto: any, roots: Standard_Boolean): void;
  FillModel_3(proc: any, amodel: any): void;
  FillModel_4(proc: any, amodel: any, proto: any, roots: Standard_Boolean): void;
}

export declare class Transfer_TransferOutput {
  Model(): any;
  TransientProcess(): any;
  Transfer(obj: any, theProgress: Message_ProgressRange): void;
  TransferRoots_1(protocol: any, theProgress: Message_ProgressRange): void;
  TransferRoots_2(G: Interface_Graph, theProgress: Message_ProgressRange): void;
  TransferRoots_3(theProgress: Message_ProgressRange): void;
  ListForStatus(normal: Standard_Boolean, roots: Standard_Boolean): Interface_EntityIterator;
  ModelForStatus(protocol: any, normal: Standard_Boolean, roots: Standard_Boolean): any;
}

  export declare class Transfer_TransferOutput_1 extends Transfer_TransferOutput {
    constructor(actor: any, amodel: any);
  }

  export declare class Transfer_TransferOutput_2 extends Transfer_TransferOutput {
    constructor(proc: any, amodel: any);
  }

export declare class Transfer_TransientListBinder extends Transfer_Binder {
  IsMultiple(): Standard_Boolean;
  ResultType(): any;
  ResultTypeName(): Standard_CString;
  AddResult(res: any): void;
  Result(): any;
  SetResult(num: Standard_Integer, res: any): void;
  NbTransients(): Standard_Integer;
  Transient(num: Standard_Integer): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Transfer_TransientListBinder_1 extends Transfer_TransientListBinder {
    constructor();
  }

  export declare class Transfer_TransientListBinder_2 extends Transfer_TransientListBinder {
    constructor(list: any);
  }

export declare class Transfer_TransientMapper extends Transfer_Finder {
  constructor(akey: any)
  Value(): any;
  Equates(other: any): Standard_Boolean;
  ValueType(): any;
  ValueTypeName(): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Transfer_VoidBinder extends Transfer_Binder {
  constructor()
  ResultType(): any;
  ResultTypeName(): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TransferBRep_TransferResultInfo extends Standard_Transient {
  constructor()
  Clear(): void;
  Result(): Standard_Integer;
  ResultWarning(): Standard_Integer;
  ResultFail(): Standard_Integer;
  ResultWarningFail(): Standard_Integer;
  NoResult(): Standard_Integer;
  NoResultWarning(): Standard_Integer;
  NoResultFail(): Standard_Integer;
  NoResultWarningFail(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TransferBRep_BinderOfShape extends Transfer_Binder {
  ResultType(): any;
  ResultTypeName(): Standard_CString;
  SetResult(res: TopoDS_Shape): void;
  Result(): TopoDS_Shape;
  CResult(): TopoDS_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TransferBRep_BinderOfShape_1 extends TransferBRep_BinderOfShape {
    constructor();
  }

  export declare class TransferBRep_BinderOfShape_2 extends TransferBRep_BinderOfShape {
    constructor(res: TopoDS_Shape);
  }

export declare class TransferBRep_OrientedShapeMapper extends Transfer_Finder {
  constructor(akey: TopoDS_Shape)
  Value(): TopoDS_Shape;
  Equates(other: any): Standard_Boolean;
  ValueType(): any;
  ValueTypeName(): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TransferBRep_Reader {
  constructor()
  SetProtocol(protocol: any): void;
  Protocol(): any;
  SetActor(actor: any): void;
  Actor(): any;
  SetFileStatus(status: Standard_Integer): void;
  FileStatus(): Standard_Integer;
  FileNotFound(): Standard_Boolean;
  SyntaxError(): Standard_Boolean;
  SetModel(model: any): void;
  Model(): any;
  Clear(): void;
  CheckStatusModel(withprint: Standard_Boolean): Standard_Boolean;
  CheckListModel(): Interface_CheckIterator;
  ModeNewTransfer(): Standard_Boolean;
  BeginTransfer(): Standard_Boolean;
  EndTransfer(): void;
  PrepareTransfer(): void;
  TransferRoots(theProgress: Message_ProgressRange): void;
  Transfer(num: Standard_Integer, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferList(list: any, theProgress: Message_ProgressRange): void;
  IsDone(): Standard_Boolean;
  NbShapes(): Standard_Integer;
  Shapes(): any;
  Shape(num: Standard_Integer): TopoDS_Shape;
  ShapeResult(ent: any): TopoDS_Shape;
  OneShape(): TopoDS_Shape;
  NbTransients(): Standard_Integer;
  Transients(): any;
  Transient(num: Standard_Integer): any;
  CheckStatusResult(withprints: Standard_Boolean): Standard_Boolean;
  CheckListResult(): Interface_CheckIterator;
  TransientProcess(): any;
}

export declare class TransferBRep_ShapeBinder extends TransferBRep_BinderOfShape {
  ShapeType(): TopAbs_ShapeEnum;
  Vertex(): TopoDS_Vertex;
  Edge(): TopoDS_Edge;
  Wire(): TopoDS_Wire;
  Face(): TopoDS_Face;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
  CompSolid(): TopoDS_CompSolid;
  Compound(): TopoDS_Compound;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TransferBRep_ShapeBinder_1 extends TransferBRep_ShapeBinder {
    constructor();
  }

  export declare class TransferBRep_ShapeBinder_2 extends TransferBRep_ShapeBinder {
    constructor(res: TopoDS_Shape);
  }

export declare class TransferBRep_ShapeInfo {
  constructor();
  Type(ent: TopoDS_Shape): any;
  TypeName(ent: TopoDS_Shape): Standard_CString;
}

export declare class TransferBRep_ShapeListBinder extends Transfer_Binder {
  IsMultiple(): Standard_Boolean;
  ResultType(): any;
  ResultTypeName(): Standard_CString;
  AddResult(res: TopoDS_Shape): void;
  Result(): any;
  SetResult(num: Standard_Integer, res: TopoDS_Shape): void;
  NbShapes(): Standard_Integer;
  Shape(num: Standard_Integer): TopoDS_Shape;
  ShapeType(num: Standard_Integer): TopAbs_ShapeEnum;
  Vertex(num: Standard_Integer): TopoDS_Vertex;
  Edge(num: Standard_Integer): TopoDS_Edge;
  Wire(num: Standard_Integer): TopoDS_Wire;
  Face(num: Standard_Integer): TopoDS_Face;
  Shell(num: Standard_Integer): TopoDS_Shell;
  Solid(num: Standard_Integer): TopoDS_Solid;
  CompSolid(num: Standard_Integer): TopoDS_CompSolid;
  Compound(num: Standard_Integer): TopoDS_Compound;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class TransferBRep_ShapeListBinder_1 extends TransferBRep_ShapeListBinder {
    constructor();
  }

  export declare class TransferBRep_ShapeListBinder_2 extends TransferBRep_ShapeListBinder {
    constructor(list: any);
  }

export declare class TransferBRep_ShapeMapper extends Transfer_Finder {
  constructor(akey: TopoDS_Shape)
  Value(): TopoDS_Shape;
  Equates(other: any): Standard_Boolean;
  ValueType(): any;
  ValueTypeName(): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class UnitsMethods {
  constructor();
  InitializeFactors(LengthFactor: Standard_Real, PlaneAngleFactor: Standard_Real, SolidAngleFactor: Standard_Real): void;
  LengthFactor(): Standard_Real;
  PlaneAngleFactor(): Standard_Real;
  SolidAngleFactor(): Standard_Real;
  Set3dConversion(B: Standard_Boolean): void;
  Convert3d(): Standard_Boolean;
  RadianToDegree(C: any, S: any): any;
  DegreeToRadian(C: any, S: any): any;
  MirrorPCurve(C: any): any;
  GetLengthFactorValue(param: Standard_Integer): Standard_Real;
  GetCasCadeLengthUnit(): Standard_Real;
  SetCasCadeLengthUnit(param: Standard_Integer): void;
}

export declare class XSAlgo {
  constructor();
  Init(): void;
  SetAlgoContainer(aContainer: any): void;
  AlgoContainer(): any;
}

export declare class XSAlgo_AlgoContainer extends Standard_Transient {
  constructor()
  SetToolContainer(TC: any): void;
  ToolContainer(): any;
  PrepareForTransfer(): void;
  ProcessShape(shape: TopoDS_Shape, Prec: Standard_Real, MaxTol: Standard_Real, rscfile: Standard_CString, seq: Standard_CString, info: any, theProgress: Message_ProgressRange, NonManifold: Standard_Boolean): TopoDS_Shape;
  CheckPCurve(edge: TopoDS_Edge, face: TopoDS_Face, preci: Standard_Real, isSeam: Standard_Boolean): Standard_Boolean;
  MergeTransferInfo_1(TP: any, info: any, startTPitem: Standard_Integer): void;
  MergeTransferInfo_2(FP: any, info: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSAlgo_ToolContainer extends Standard_Transient {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSControl {
  constructor();
  Session(pilot: any): any;
  Vars(pilot: any): any;
}

export declare class XSControl_ConnectedShapes extends IFSelect_SelectExplore {
  SetReader(TR: any): void;
  Explore(level: Standard_Integer, ent: any, G: Interface_Graph, explored: Interface_EntityIterator): Standard_Boolean;
  ExploreLabel(): TCollection_AsciiString;
  AdjacentEntities(ashape: TopoDS_Shape, TP: any, type: TopAbs_ShapeEnum): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class XSControl_ConnectedShapes_1 extends XSControl_ConnectedShapes {
    constructor();
  }

  export declare class XSControl_ConnectedShapes_2 extends XSControl_ConnectedShapes {
    constructor(TR: any);
  }

export declare class XSControl_FuncShape {
  constructor();
  Init(): void;
  MoreShapes(session: any, list: any, name: Standard_CString): Standard_Integer;
  FileAndVar(session: any, file: Standard_CString, var_: Standard_CString, def: Standard_CString, resfile: TCollection_AsciiString, resvar: TCollection_AsciiString): Standard_Boolean;
}

export declare class XSControl_Functions {
  constructor();
  Init(): void;
}

export declare class XSControl_SignTransferStatus extends IFSelect_Signature {
  SetReader(TR: any): void;
  SetMap(TP: any): void;
  Map(): any;
  Reader(): any;
  Value(ent: any, model: any): Standard_CString;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class XSControl_SignTransferStatus_1 extends XSControl_SignTransferStatus {
    constructor();
  }

  export declare class XSControl_SignTransferStatus_2 extends XSControl_SignTransferStatus {
    constructor(TR: any);
  }

export declare class XSControl_TransferReader extends Standard_Transient {
  constructor()
  SetController(theControl: any): void;
  SetActor(theActor: any): void;
  Actor(): any;
  SetModel(theModel: any): void;
  SetGraph(theGraph: any): void;
  Model(): any;
  SetContext(theName: Standard_CString, theCtx: any): void;
  GetContext(theName: Standard_CString, theType: any, theCtx: any): Standard_Boolean;
  Context(): any;
  SetFileName(theName: Standard_CString): void;
  FileName(): Standard_CString;
  Clear(theMode: Standard_Integer): void;
  TransientProcess(): any;
  SetTransientProcess(theTP: any): void;
  RecordResult(theEnt: any): Standard_Boolean;
  IsRecorded(theEnt: any): Standard_Boolean;
  HasResult(theEnt: any): Standard_Boolean;
  RecordedList(): any;
  Skip(theEnt: any): Standard_Boolean;
  IsSkipped(theEnt: any): Standard_Boolean;
  IsMarked(theEnt: any): Standard_Boolean;
  FinalResult(theEnt: any): any;
  FinalEntityLabel(theEnt: any): Standard_CString;
  FinalEntityNumber(theEnt: any): Standard_Integer;
  ResultFromNumber(theNum: Standard_Integer): any;
  TransientResult(theEnt: any): any;
  ShapeResult(theEnt: any): TopoDS_Shape;
  ClearResult(theEnt: any, theMode: Standard_Integer): Standard_Boolean;
  EntityFromResult(theRes: any, theMode: Standard_Integer): any;
  EntityFromShapeResult(theRes: TopoDS_Shape, theMode: Standard_Integer): any;
  EntitiesFromShapeList(theRes: any, theMode: Standard_Integer): any;
  CheckList(theEnt: any, theLevel: Standard_Integer): Interface_CheckIterator;
  HasChecks(theEnt: any, FailsOnly: Standard_Boolean): Standard_Boolean;
  CheckedList(theEnt: any, WithCheck: Interface_CheckStatus, theResult: Standard_Boolean): any;
  BeginTransfer(): Standard_Boolean;
  Recognize(theEnt: any): Standard_Boolean;
  TransferOne(theEnt: any, theRec: Standard_Boolean, theProgress: Message_ProgressRange): Standard_Integer;
  TransferList(theList: any, theRec: Standard_Boolean, theProgress: Message_ProgressRange): Standard_Integer;
  TransferRoots(theGraph: Interface_Graph, theProgress: Message_ProgressRange): Standard_Integer;
  TransferClear(theEnt: any, theLevel: Standard_Integer): void;
  PrintStats(theStream: Standard_OStream, theWhat: Standard_Integer, theMode: Standard_Integer): void;
  LastCheckList(): Interface_CheckIterator;
  LastTransferList(theRoots: Standard_Boolean): any;
  ShapeResultList(theRec: Standard_Boolean): any;
  PrintStatsProcess(theTP: any, theWhat: Standard_Integer, theMode: Standard_Integer): void;
  PrintStatsOnList(theTP: any, theList: any, theWhat: Standard_Integer, theMode: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSControl_Utils {
  constructor()
  TraceLine(line: Standard_CString): void;
  TraceLines(lines: any): void;
  IsKind(item: any, what: any): Standard_Boolean;
  TypeName(item: any, nopk: Standard_Boolean): Standard_CString;
  TraValue(list: any, num: Standard_Integer): any;
  NewSeqTra(): any;
  AppendTra(seqval: any, traval: any): void;
  DateString(yy: Standard_Integer, mm: Standard_Integer, dd: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer): Standard_CString;
  DateValues(text: Standard_CString, yy: Standard_Integer, mm: Standard_Integer, dd: Standard_Integer, hh: Standard_Integer, mn: Standard_Integer, ss: Standard_Integer): void;
  ToCString_1(strval: any): Standard_CString;
  ToCString_2(strval: TCollection_AsciiString): Standard_CString;
  ToHString_1(strcon: Standard_CString): any;
  ToAString(strcon: Standard_CString): TCollection_AsciiString;
  ToEString_1(strval: any): Standard_ExtString;
  ToEString_2(strval: TCollection_ExtendedString): Standard_ExtString;
  ToHString_2(strcon: Standard_ExtString): any;
  ToXString(strcon: Standard_ExtString): TCollection_ExtendedString;
  AsciiToExtended(str: Standard_CString): Standard_ExtString;
  IsAscii(str: Standard_ExtString): Standard_Boolean;
  ExtendedToAscii(str: Standard_ExtString): Standard_CString;
  CStrValue(list: any, num: Standard_Integer): Standard_CString;
  EStrValue(list: any, num: Standard_Integer): Standard_ExtString;
  NewSeqCStr(): any;
  AppendCStr(seqval: any, strval: Standard_CString): void;
  NewSeqEStr(): any;
  AppendEStr(seqval: any, strval: Standard_ExtString): void;
  CompoundFromSeq(seqval: any): TopoDS_Shape;
  ShapeType(shape: TopoDS_Shape, compound: Standard_Boolean): TopAbs_ShapeEnum;
  SortedCompound(shape: TopoDS_Shape, type: TopAbs_ShapeEnum, explore: Standard_Boolean, compound: Standard_Boolean): TopoDS_Shape;
  ShapeValue(seqv: any, num: Standard_Integer): TopoDS_Shape;
  NewSeqShape(): any;
  AppendShape(seqv: any, shape: TopoDS_Shape): void;
  ShapeBinder(shape: TopoDS_Shape, hs: Standard_Boolean): any;
  BinderShape(tr: any): TopoDS_Shape;
  SeqLength(list: any): Standard_Integer;
  SeqToArr(seq: any, first: Standard_Integer): any;
  ArrToSeq(arr: any): any;
  SeqIntValue(list: any, num: Standard_Integer): Standard_Integer;
}

export declare class XSControl_Vars extends Standard_Transient {
  constructor()
  Set(name: Standard_CString, val: any): void;
  Get(name: Standard_CString): any;
  GetGeom(name: Standard_CString): any;
  GetCurve2d(name: Standard_CString): any;
  GetCurve(name: Standard_CString): any;
  GetSurface(name: Standard_CString): any;
  SetPoint(name: Standard_CString, val: gp_Pnt): void;
  SetPoint2d(name: Standard_CString, val: gp_Pnt2d): void;
  GetPoint(name: Standard_CString, pnt: gp_Pnt): Standard_Boolean;
  GetPoint2d(name: Standard_CString, pnt: gp_Pnt2d): Standard_Boolean;
  SetShape(name: Standard_CString, val: TopoDS_Shape): void;
  GetShape(name: Standard_CString): TopoDS_Shape;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class XSControl_Writer {
  SetNorm(norm: Standard_CString): Standard_Boolean;
  SetWS(WS: any, scratch: Standard_Boolean): void;
  WS(): any;
  Model(newone: Standard_Boolean): any;
  TransferShape(sh: TopoDS_Shape, mode: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  WriteFile(filename: Standard_CString): IFSelect_ReturnStatus;
  PrintStatsTransfer(what: Standard_Integer, mode: Standard_Integer): void;
}

  export declare class XSControl_Writer_1 extends XSControl_Writer {
    constructor();
  }

  export declare class XSControl_Writer_2 extends XSControl_Writer {
    constructor(norm: Standard_CString);
  }

  export declare class XSControl_Writer_3 extends XSControl_Writer {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class Handle_IFSelect_Editor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_Editor): void;
  get(): IFSelect_Editor;
}

  export declare class Handle_IFSelect_Editor_1 extends Handle_IFSelect_Editor {
    constructor();
  }

  export declare class Handle_IFSelect_Editor_2 extends Handle_IFSelect_Editor {
    constructor(thePtr: IFSelect_Editor);
  }

  export declare class Handle_IFSelect_Editor_3 extends Handle_IFSelect_Editor {
    constructor(theHandle: Handle_IFSelect_Editor);
  }

  export declare class Handle_IFSelect_Editor_4 extends Handle_IFSelect_Editor {
    constructor(theHandle: Handle_IFSelect_Editor);
  }

export declare class Handle_APIHeaderSection_EditHeader {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: APIHeaderSection_EditHeader): void;
  get(): APIHeaderSection_EditHeader;
}

  export declare class Handle_APIHeaderSection_EditHeader_1 extends Handle_APIHeaderSection_EditHeader {
    constructor();
  }

  export declare class Handle_APIHeaderSection_EditHeader_2 extends Handle_APIHeaderSection_EditHeader {
    constructor(thePtr: APIHeaderSection_EditHeader);
  }

  export declare class Handle_APIHeaderSection_EditHeader_3 extends Handle_APIHeaderSection_EditHeader {
    constructor(theHandle: Handle_APIHeaderSection_EditHeader);
  }

  export declare class Handle_APIHeaderSection_EditHeader_4 extends Handle_APIHeaderSection_EditHeader {
    constructor(theHandle: Handle_APIHeaderSection_EditHeader);
  }

export declare class Handle_Interface_HArray1OfHAsciiString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_HArray1OfHAsciiString): void;
  get(): Interface_HArray1OfHAsciiString;
}

  export declare class Handle_Interface_HArray1OfHAsciiString_1 extends Handle_Interface_HArray1OfHAsciiString {
    constructor();
  }

  export declare class Handle_Interface_HArray1OfHAsciiString_2 extends Handle_Interface_HArray1OfHAsciiString {
    constructor(thePtr: Interface_HArray1OfHAsciiString);
  }

  export declare class Handle_Interface_HArray1OfHAsciiString_3 extends Handle_Interface_HArray1OfHAsciiString {
    constructor(theHandle: Handle_Interface_HArray1OfHAsciiString);
  }

  export declare class Handle_Interface_HArray1OfHAsciiString_4 extends Handle_Interface_HArray1OfHAsciiString {
    constructor(theHandle: Handle_Interface_HArray1OfHAsciiString);
  }

export declare class Handle_HeaderSection_FileDescription {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HeaderSection_FileDescription): void;
  get(): HeaderSection_FileDescription;
}

  export declare class Handle_HeaderSection_FileDescription_1 extends Handle_HeaderSection_FileDescription {
    constructor();
  }

  export declare class Handle_HeaderSection_FileDescription_2 extends Handle_HeaderSection_FileDescription {
    constructor(thePtr: HeaderSection_FileDescription);
  }

  export declare class Handle_HeaderSection_FileDescription_3 extends Handle_HeaderSection_FileDescription {
    constructor(theHandle: Handle_HeaderSection_FileDescription);
  }

  export declare class Handle_HeaderSection_FileDescription_4 extends Handle_HeaderSection_FileDescription {
    constructor(theHandle: Handle_HeaderSection_FileDescription);
  }

export declare class Handle_HeaderSection_FileName {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HeaderSection_FileName): void;
  get(): HeaderSection_FileName;
}

  export declare class Handle_HeaderSection_FileName_1 extends Handle_HeaderSection_FileName {
    constructor();
  }

  export declare class Handle_HeaderSection_FileName_2 extends Handle_HeaderSection_FileName {
    constructor(thePtr: HeaderSection_FileName);
  }

  export declare class Handle_HeaderSection_FileName_3 extends Handle_HeaderSection_FileName {
    constructor(theHandle: Handle_HeaderSection_FileName);
  }

  export declare class Handle_HeaderSection_FileName_4 extends Handle_HeaderSection_FileName {
    constructor(theHandle: Handle_HeaderSection_FileName);
  }

export declare class Handle_HeaderSection_FileSchema {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HeaderSection_FileSchema): void;
  get(): HeaderSection_FileSchema;
}

  export declare class Handle_HeaderSection_FileSchema_1 extends Handle_HeaderSection_FileSchema {
    constructor();
  }

  export declare class Handle_HeaderSection_FileSchema_2 extends Handle_HeaderSection_FileSchema {
    constructor(thePtr: HeaderSection_FileSchema);
  }

  export declare class Handle_HeaderSection_FileSchema_3 extends Handle_HeaderSection_FileSchema {
    constructor(theHandle: Handle_HeaderSection_FileSchema);
  }

  export declare class Handle_HeaderSection_FileSchema_4 extends Handle_HeaderSection_FileSchema {
    constructor(theHandle: Handle_HeaderSection_FileSchema);
  }

export declare class Handle_Interface_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_Protocol): void;
  get(): Interface_Protocol;
}

  export declare class Handle_Interface_Protocol_1 extends Handle_Interface_Protocol {
    constructor();
  }

  export declare class Handle_Interface_Protocol_2 extends Handle_Interface_Protocol {
    constructor(thePtr: Interface_Protocol);
  }

  export declare class Handle_Interface_Protocol_3 extends Handle_Interface_Protocol {
    constructor(theHandle: Handle_Interface_Protocol);
  }

  export declare class Handle_Interface_Protocol_4 extends Handle_Interface_Protocol {
    constructor(theHandle: Handle_Interface_Protocol);
  }

export declare class Handle_StepData_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_Protocol): void;
  get(): StepData_Protocol;
}

  export declare class Handle_StepData_Protocol_1 extends Handle_StepData_Protocol {
    constructor();
  }

  export declare class Handle_StepData_Protocol_2 extends Handle_StepData_Protocol {
    constructor(thePtr: StepData_Protocol);
  }

  export declare class Handle_StepData_Protocol_3 extends Handle_StepData_Protocol {
    constructor(theHandle: Handle_StepData_Protocol);
  }

  export declare class Handle_StepData_Protocol_4 extends Handle_StepData_Protocol {
    constructor(theHandle: Handle_StepData_Protocol);
  }

export declare class Handle_HeaderSection_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HeaderSection_Protocol): void;
  get(): HeaderSection_Protocol;
}

  export declare class Handle_HeaderSection_Protocol_1 extends Handle_HeaderSection_Protocol {
    constructor();
  }

  export declare class Handle_HeaderSection_Protocol_2 extends Handle_HeaderSection_Protocol {
    constructor(thePtr: HeaderSection_Protocol);
  }

  export declare class Handle_HeaderSection_Protocol_3 extends Handle_HeaderSection_Protocol {
    constructor(theHandle: Handle_HeaderSection_Protocol);
  }

  export declare class Handle_HeaderSection_Protocol_4 extends Handle_HeaderSection_Protocol {
    constructor(theHandle: Handle_HeaderSection_Protocol);
  }

export declare class Handle_Interface_InterfaceModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_InterfaceModel): void;
  get(): Interface_InterfaceModel;
}

  export declare class Handle_Interface_InterfaceModel_1 extends Handle_Interface_InterfaceModel {
    constructor();
  }

  export declare class Handle_Interface_InterfaceModel_2 extends Handle_Interface_InterfaceModel {
    constructor(thePtr: Interface_InterfaceModel);
  }

  export declare class Handle_Interface_InterfaceModel_3 extends Handle_Interface_InterfaceModel {
    constructor(theHandle: Handle_Interface_InterfaceModel);
  }

  export declare class Handle_Interface_InterfaceModel_4 extends Handle_Interface_InterfaceModel {
    constructor(theHandle: Handle_Interface_InterfaceModel);
  }

export declare class Handle_IFSelect_Activator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_Activator): void;
  get(): IFSelect_Activator;
}

  export declare class Handle_IFSelect_Activator_1 extends Handle_IFSelect_Activator {
    constructor();
  }

  export declare class Handle_IFSelect_Activator_2 extends Handle_IFSelect_Activator {
    constructor(thePtr: IFSelect_Activator);
  }

  export declare class Handle_IFSelect_Activator_3 extends Handle_IFSelect_Activator {
    constructor(theHandle: Handle_IFSelect_Activator);
  }

  export declare class Handle_IFSelect_Activator_4 extends Handle_IFSelect_Activator {
    constructor(theHandle: Handle_IFSelect_Activator);
  }

export declare class Handle_IFSelect_SessionPilot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SessionPilot): void;
  get(): IFSelect_SessionPilot;
}

  export declare class Handle_IFSelect_SessionPilot_1 extends Handle_IFSelect_SessionPilot {
    constructor();
  }

  export declare class Handle_IFSelect_SessionPilot_2 extends Handle_IFSelect_SessionPilot {
    constructor(thePtr: IFSelect_SessionPilot);
  }

  export declare class Handle_IFSelect_SessionPilot_3 extends Handle_IFSelect_SessionPilot {
    constructor(theHandle: Handle_IFSelect_SessionPilot);
  }

  export declare class Handle_IFSelect_SessionPilot_4 extends Handle_IFSelect_SessionPilot {
    constructor(theHandle: Handle_IFSelect_SessionPilot);
  }

export declare class Handle_IFSelect_Act {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_Act): void;
  get(): IFSelect_Act;
}

  export declare class Handle_IFSelect_Act_1 extends Handle_IFSelect_Act {
    constructor();
  }

  export declare class Handle_IFSelect_Act_2 extends Handle_IFSelect_Act {
    constructor(thePtr: IFSelect_Act);
  }

  export declare class Handle_IFSelect_Act_3 extends Handle_IFSelect_Act {
    constructor(theHandle: Handle_IFSelect_Act);
  }

  export declare class Handle_IFSelect_Act_4 extends Handle_IFSelect_Act {
    constructor(theHandle: Handle_IFSelect_Act);
  }

export declare class Handle_IFSelect_GeneralModifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_GeneralModifier): void;
  get(): IFSelect_GeneralModifier;
}

  export declare class Handle_IFSelect_GeneralModifier_1 extends Handle_IFSelect_GeneralModifier {
    constructor();
  }

  export declare class Handle_IFSelect_GeneralModifier_2 extends Handle_IFSelect_GeneralModifier {
    constructor(thePtr: IFSelect_GeneralModifier);
  }

  export declare class Handle_IFSelect_GeneralModifier_3 extends Handle_IFSelect_GeneralModifier {
    constructor(theHandle: Handle_IFSelect_GeneralModifier);
  }

  export declare class Handle_IFSelect_GeneralModifier_4 extends Handle_IFSelect_GeneralModifier {
    constructor(theHandle: Handle_IFSelect_GeneralModifier);
  }

export declare class Handle_IFSelect_AppliedModifiers {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_AppliedModifiers): void;
  get(): IFSelect_AppliedModifiers;
}

  export declare class Handle_IFSelect_AppliedModifiers_1 extends Handle_IFSelect_AppliedModifiers {
    constructor();
  }

  export declare class Handle_IFSelect_AppliedModifiers_2 extends Handle_IFSelect_AppliedModifiers {
    constructor(thePtr: IFSelect_AppliedModifiers);
  }

  export declare class Handle_IFSelect_AppliedModifiers_3 extends Handle_IFSelect_AppliedModifiers {
    constructor(theHandle: Handle_IFSelect_AppliedModifiers);
  }

  export declare class Handle_IFSelect_AppliedModifiers_4 extends Handle_IFSelect_AppliedModifiers {
    constructor(theHandle: Handle_IFSelect_AppliedModifiers);
  }

export declare class Handle_IFSelect_SessionDumper {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SessionDumper): void;
  get(): IFSelect_SessionDumper;
}

  export declare class Handle_IFSelect_SessionDumper_1 extends Handle_IFSelect_SessionDumper {
    constructor();
  }

  export declare class Handle_IFSelect_SessionDumper_2 extends Handle_IFSelect_SessionDumper {
    constructor(thePtr: IFSelect_SessionDumper);
  }

  export declare class Handle_IFSelect_SessionDumper_3 extends Handle_IFSelect_SessionDumper {
    constructor(theHandle: Handle_IFSelect_SessionDumper);
  }

  export declare class Handle_IFSelect_SessionDumper_4 extends Handle_IFSelect_SessionDumper {
    constructor(theHandle: Handle_IFSelect_SessionDumper);
  }

export declare class Handle_IFSelect_BasicDumper {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_BasicDumper): void;
  get(): IFSelect_BasicDumper;
}

  export declare class Handle_IFSelect_BasicDumper_1 extends Handle_IFSelect_BasicDumper {
    constructor();
  }

  export declare class Handle_IFSelect_BasicDumper_2 extends Handle_IFSelect_BasicDumper {
    constructor(thePtr: IFSelect_BasicDumper);
  }

  export declare class Handle_IFSelect_BasicDumper_3 extends Handle_IFSelect_BasicDumper {
    constructor(theHandle: Handle_IFSelect_BasicDumper);
  }

  export declare class Handle_IFSelect_BasicDumper_4 extends Handle_IFSelect_BasicDumper {
    constructor(theHandle: Handle_IFSelect_BasicDumper);
  }

export declare class Handle_IFSelect_SignatureList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SignatureList): void;
  get(): IFSelect_SignatureList;
}

  export declare class Handle_IFSelect_SignatureList_1 extends Handle_IFSelect_SignatureList {
    constructor();
  }

  export declare class Handle_IFSelect_SignatureList_2 extends Handle_IFSelect_SignatureList {
    constructor(thePtr: IFSelect_SignatureList);
  }

  export declare class Handle_IFSelect_SignatureList_3 extends Handle_IFSelect_SignatureList {
    constructor(theHandle: Handle_IFSelect_SignatureList);
  }

  export declare class Handle_IFSelect_SignatureList_4 extends Handle_IFSelect_SignatureList {
    constructor(theHandle: Handle_IFSelect_SignatureList);
  }

export declare class Handle_IFSelect_CheckCounter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_CheckCounter): void;
  get(): IFSelect_CheckCounter;
}

  export declare class Handle_IFSelect_CheckCounter_1 extends Handle_IFSelect_CheckCounter {
    constructor();
  }

  export declare class Handle_IFSelect_CheckCounter_2 extends Handle_IFSelect_CheckCounter {
    constructor(thePtr: IFSelect_CheckCounter);
  }

  export declare class Handle_IFSelect_CheckCounter_3 extends Handle_IFSelect_CheckCounter {
    constructor(theHandle: Handle_IFSelect_CheckCounter);
  }

  export declare class Handle_IFSelect_CheckCounter_4 extends Handle_IFSelect_CheckCounter {
    constructor(theHandle: Handle_IFSelect_CheckCounter);
  }

export declare class Handle_Interface_Check {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_Check): void;
  get(): Interface_Check;
}

  export declare class Handle_Interface_Check_1 extends Handle_Interface_Check {
    constructor();
  }

  export declare class Handle_Interface_Check_2 extends Handle_Interface_Check {
    constructor(thePtr: Interface_Check);
  }

  export declare class Handle_Interface_Check_3 extends Handle_Interface_Check {
    constructor(theHandle: Handle_Interface_Check);
  }

  export declare class Handle_Interface_Check_4 extends Handle_Interface_Check {
    constructor(theHandle: Handle_Interface_Check);
  }

export declare class Handle_Interface_HSequenceOfCheck {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_HSequenceOfCheck): void;
  get(): Interface_HSequenceOfCheck;
}

  export declare class Handle_Interface_HSequenceOfCheck_1 extends Handle_Interface_HSequenceOfCheck {
    constructor();
  }

  export declare class Handle_Interface_HSequenceOfCheck_2 extends Handle_Interface_HSequenceOfCheck {
    constructor(thePtr: Interface_HSequenceOfCheck);
  }

  export declare class Handle_Interface_HSequenceOfCheck_3 extends Handle_Interface_HSequenceOfCheck {
    constructor(theHandle: Handle_Interface_HSequenceOfCheck);
  }

  export declare class Handle_Interface_HSequenceOfCheck_4 extends Handle_Interface_HSequenceOfCheck {
    constructor(theHandle: Handle_Interface_HSequenceOfCheck);
  }

export declare class Handle_IFSelect_Dispatch {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_Dispatch): void;
  get(): IFSelect_Dispatch;
}

  export declare class Handle_IFSelect_Dispatch_1 extends Handle_IFSelect_Dispatch {
    constructor();
  }

  export declare class Handle_IFSelect_Dispatch_2 extends Handle_IFSelect_Dispatch {
    constructor(thePtr: IFSelect_Dispatch);
  }

  export declare class Handle_IFSelect_Dispatch_3 extends Handle_IFSelect_Dispatch {
    constructor(theHandle: Handle_IFSelect_Dispatch);
  }

  export declare class Handle_IFSelect_Dispatch_4 extends Handle_IFSelect_Dispatch {
    constructor(theHandle: Handle_IFSelect_Dispatch);
  }

export declare class Handle_IFSelect_DispGlobal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_DispGlobal): void;
  get(): IFSelect_DispGlobal;
}

  export declare class Handle_IFSelect_DispGlobal_1 extends Handle_IFSelect_DispGlobal {
    constructor();
  }

  export declare class Handle_IFSelect_DispGlobal_2 extends Handle_IFSelect_DispGlobal {
    constructor(thePtr: IFSelect_DispGlobal);
  }

  export declare class Handle_IFSelect_DispGlobal_3 extends Handle_IFSelect_DispGlobal {
    constructor(theHandle: Handle_IFSelect_DispGlobal);
  }

  export declare class Handle_IFSelect_DispGlobal_4 extends Handle_IFSelect_DispGlobal {
    constructor(theHandle: Handle_IFSelect_DispGlobal);
  }

export declare class Handle_IFSelect_DispPerCount {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_DispPerCount): void;
  get(): IFSelect_DispPerCount;
}

  export declare class Handle_IFSelect_DispPerCount_1 extends Handle_IFSelect_DispPerCount {
    constructor();
  }

  export declare class Handle_IFSelect_DispPerCount_2 extends Handle_IFSelect_DispPerCount {
    constructor(thePtr: IFSelect_DispPerCount);
  }

  export declare class Handle_IFSelect_DispPerCount_3 extends Handle_IFSelect_DispPerCount {
    constructor(theHandle: Handle_IFSelect_DispPerCount);
  }

  export declare class Handle_IFSelect_DispPerCount_4 extends Handle_IFSelect_DispPerCount {
    constructor(theHandle: Handle_IFSelect_DispPerCount);
  }

export declare class Handle_IFSelect_DispPerFiles {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_DispPerFiles): void;
  get(): IFSelect_DispPerFiles;
}

  export declare class Handle_IFSelect_DispPerFiles_1 extends Handle_IFSelect_DispPerFiles {
    constructor();
  }

  export declare class Handle_IFSelect_DispPerFiles_2 extends Handle_IFSelect_DispPerFiles {
    constructor(thePtr: IFSelect_DispPerFiles);
  }

  export declare class Handle_IFSelect_DispPerFiles_3 extends Handle_IFSelect_DispPerFiles {
    constructor(theHandle: Handle_IFSelect_DispPerFiles);
  }

  export declare class Handle_IFSelect_DispPerFiles_4 extends Handle_IFSelect_DispPerFiles {
    constructor(theHandle: Handle_IFSelect_DispPerFiles);
  }

export declare class Handle_IFSelect_DispPerOne {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_DispPerOne): void;
  get(): IFSelect_DispPerOne;
}

  export declare class Handle_IFSelect_DispPerOne_1 extends Handle_IFSelect_DispPerOne {
    constructor();
  }

  export declare class Handle_IFSelect_DispPerOne_2 extends Handle_IFSelect_DispPerOne {
    constructor(thePtr: IFSelect_DispPerOne);
  }

  export declare class Handle_IFSelect_DispPerOne_3 extends Handle_IFSelect_DispPerOne {
    constructor(theHandle: Handle_IFSelect_DispPerOne);
  }

  export declare class Handle_IFSelect_DispPerOne_4 extends Handle_IFSelect_DispPerOne {
    constructor(theHandle: Handle_IFSelect_DispPerOne);
  }

export declare class Handle_IFSelect_DispPerSignature {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_DispPerSignature): void;
  get(): IFSelect_DispPerSignature;
}

  export declare class Handle_IFSelect_DispPerSignature_1 extends Handle_IFSelect_DispPerSignature {
    constructor();
  }

  export declare class Handle_IFSelect_DispPerSignature_2 extends Handle_IFSelect_DispPerSignature {
    constructor(thePtr: IFSelect_DispPerSignature);
  }

  export declare class Handle_IFSelect_DispPerSignature_3 extends Handle_IFSelect_DispPerSignature {
    constructor(theHandle: Handle_IFSelect_DispPerSignature);
  }

  export declare class Handle_IFSelect_DispPerSignature_4 extends Handle_IFSelect_DispPerSignature {
    constructor(theHandle: Handle_IFSelect_DispPerSignature);
  }

export declare class Handle_IFSelect_EditForm {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_EditForm): void;
  get(): IFSelect_EditForm;
}

  export declare class Handle_IFSelect_EditForm_1 extends Handle_IFSelect_EditForm {
    constructor();
  }

  export declare class Handle_IFSelect_EditForm_2 extends Handle_IFSelect_EditForm {
    constructor(thePtr: IFSelect_EditForm);
  }

  export declare class Handle_IFSelect_EditForm_3 extends Handle_IFSelect_EditForm {
    constructor(theHandle: Handle_IFSelect_EditForm);
  }

  export declare class Handle_IFSelect_EditForm_4 extends Handle_IFSelect_EditForm {
    constructor(theHandle: Handle_IFSelect_EditForm);
  }

export declare class Handle_IFSelect_SignCounter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SignCounter): void;
  get(): IFSelect_SignCounter;
}

  export declare class Handle_IFSelect_SignCounter_1 extends Handle_IFSelect_SignCounter {
    constructor();
  }

  export declare class Handle_IFSelect_SignCounter_2 extends Handle_IFSelect_SignCounter {
    constructor(thePtr: IFSelect_SignCounter);
  }

  export declare class Handle_IFSelect_SignCounter_3 extends Handle_IFSelect_SignCounter {
    constructor(theHandle: Handle_IFSelect_SignCounter);
  }

  export declare class Handle_IFSelect_SignCounter_4 extends Handle_IFSelect_SignCounter {
    constructor(theHandle: Handle_IFSelect_SignCounter);
  }

export declare class Handle_IFSelect_GraphCounter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_GraphCounter): void;
  get(): IFSelect_GraphCounter;
}

  export declare class Handle_IFSelect_GraphCounter_1 extends Handle_IFSelect_GraphCounter {
    constructor();
  }

  export declare class Handle_IFSelect_GraphCounter_2 extends Handle_IFSelect_GraphCounter {
    constructor(thePtr: IFSelect_GraphCounter);
  }

  export declare class Handle_IFSelect_GraphCounter_3 extends Handle_IFSelect_GraphCounter {
    constructor(theHandle: Handle_IFSelect_GraphCounter);
  }

  export declare class Handle_IFSelect_GraphCounter_4 extends Handle_IFSelect_GraphCounter {
    constructor(theHandle: Handle_IFSelect_GraphCounter);
  }

export declare class Handle_IFSelect_Selection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_Selection): void;
  get(): IFSelect_Selection;
}

  export declare class Handle_IFSelect_Selection_1 extends Handle_IFSelect_Selection {
    constructor();
  }

  export declare class Handle_IFSelect_Selection_2 extends Handle_IFSelect_Selection {
    constructor(thePtr: IFSelect_Selection);
  }

  export declare class Handle_IFSelect_Selection_3 extends Handle_IFSelect_Selection {
    constructor(theHandle: Handle_IFSelect_Selection);
  }

  export declare class Handle_IFSelect_Selection_4 extends Handle_IFSelect_Selection {
    constructor(theHandle: Handle_IFSelect_Selection);
  }

export declare class Handle_IFSelect_HSeqOfSelection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_HSeqOfSelection): void;
  get(): IFSelect_HSeqOfSelection;
}

  export declare class Handle_IFSelect_HSeqOfSelection_1 extends Handle_IFSelect_HSeqOfSelection {
    constructor();
  }

  export declare class Handle_IFSelect_HSeqOfSelection_2 extends Handle_IFSelect_HSeqOfSelection {
    constructor(thePtr: IFSelect_HSeqOfSelection);
  }

  export declare class Handle_IFSelect_HSeqOfSelection_3 extends Handle_IFSelect_HSeqOfSelection {
    constructor(theHandle: Handle_IFSelect_HSeqOfSelection);
  }

  export declare class Handle_IFSelect_HSeqOfSelection_4 extends Handle_IFSelect_HSeqOfSelection {
    constructor(theHandle: Handle_IFSelect_HSeqOfSelection);
  }

export declare class Handle_IFSelect_IntParam {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_IntParam): void;
  get(): IFSelect_IntParam;
}

  export declare class Handle_IFSelect_IntParam_1 extends Handle_IFSelect_IntParam {
    constructor();
  }

  export declare class Handle_IFSelect_IntParam_2 extends Handle_IFSelect_IntParam {
    constructor(thePtr: IFSelect_IntParam);
  }

  export declare class Handle_IFSelect_IntParam_3 extends Handle_IFSelect_IntParam {
    constructor(theHandle: Handle_IFSelect_IntParam);
  }

  export declare class Handle_IFSelect_IntParam_4 extends Handle_IFSelect_IntParam {
    constructor(theHandle: Handle_IFSelect_IntParam);
  }

export declare class Handle_IFSelect_ListEditor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_ListEditor): void;
  get(): IFSelect_ListEditor;
}

  export declare class Handle_IFSelect_ListEditor_1 extends Handle_IFSelect_ListEditor {
    constructor();
  }

  export declare class Handle_IFSelect_ListEditor_2 extends Handle_IFSelect_ListEditor {
    constructor(thePtr: IFSelect_ListEditor);
  }

  export declare class Handle_IFSelect_ListEditor_3 extends Handle_IFSelect_ListEditor {
    constructor(theHandle: Handle_IFSelect_ListEditor);
  }

  export declare class Handle_IFSelect_ListEditor_4 extends Handle_IFSelect_ListEditor {
    constructor(theHandle: Handle_IFSelect_ListEditor);
  }

export declare class Handle_IFSelect_ModelCopier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_ModelCopier): void;
  get(): IFSelect_ModelCopier;
}

  export declare class Handle_IFSelect_ModelCopier_1 extends Handle_IFSelect_ModelCopier {
    constructor();
  }

  export declare class Handle_IFSelect_ModelCopier_2 extends Handle_IFSelect_ModelCopier {
    constructor(thePtr: IFSelect_ModelCopier);
  }

  export declare class Handle_IFSelect_ModelCopier_3 extends Handle_IFSelect_ModelCopier {
    constructor(theHandle: Handle_IFSelect_ModelCopier);
  }

  export declare class Handle_IFSelect_ModelCopier_4 extends Handle_IFSelect_ModelCopier {
    constructor(theHandle: Handle_IFSelect_ModelCopier);
  }

export declare class Handle_IFSelect_Modifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_Modifier): void;
  get(): IFSelect_Modifier;
}

  export declare class Handle_IFSelect_Modifier_1 extends Handle_IFSelect_Modifier {
    constructor();
  }

  export declare class Handle_IFSelect_Modifier_2 extends Handle_IFSelect_Modifier {
    constructor(thePtr: IFSelect_Modifier);
  }

  export declare class Handle_IFSelect_Modifier_3 extends Handle_IFSelect_Modifier {
    constructor(theHandle: Handle_IFSelect_Modifier);
  }

  export declare class Handle_IFSelect_Modifier_4 extends Handle_IFSelect_Modifier {
    constructor(theHandle: Handle_IFSelect_Modifier);
  }

export declare class Handle_IFSelect_ModifEditForm {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_ModifEditForm): void;
  get(): IFSelect_ModifEditForm;
}

  export declare class Handle_IFSelect_ModifEditForm_1 extends Handle_IFSelect_ModifEditForm {
    constructor();
  }

  export declare class Handle_IFSelect_ModifEditForm_2 extends Handle_IFSelect_ModifEditForm {
    constructor(thePtr: IFSelect_ModifEditForm);
  }

  export declare class Handle_IFSelect_ModifEditForm_3 extends Handle_IFSelect_ModifEditForm {
    constructor(theHandle: Handle_IFSelect_ModifEditForm);
  }

  export declare class Handle_IFSelect_ModifEditForm_4 extends Handle_IFSelect_ModifEditForm {
    constructor(theHandle: Handle_IFSelect_ModifEditForm);
  }

export declare class Handle_IFSelect_ModifReorder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_ModifReorder): void;
  get(): IFSelect_ModifReorder;
}

  export declare class Handle_IFSelect_ModifReorder_1 extends Handle_IFSelect_ModifReorder {
    constructor();
  }

  export declare class Handle_IFSelect_ModifReorder_2 extends Handle_IFSelect_ModifReorder {
    constructor(thePtr: IFSelect_ModifReorder);
  }

  export declare class Handle_IFSelect_ModifReorder_3 extends Handle_IFSelect_ModifReorder {
    constructor(theHandle: Handle_IFSelect_ModifReorder);
  }

  export declare class Handle_IFSelect_ModifReorder_4 extends Handle_IFSelect_ModifReorder {
    constructor(theHandle: Handle_IFSelect_ModifReorder);
  }

export declare class Handle_IFSelect_PacketList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_PacketList): void;
  get(): IFSelect_PacketList;
}

  export declare class Handle_IFSelect_PacketList_1 extends Handle_IFSelect_PacketList {
    constructor();
  }

  export declare class Handle_IFSelect_PacketList_2 extends Handle_IFSelect_PacketList {
    constructor(thePtr: IFSelect_PacketList);
  }

  export declare class Handle_IFSelect_PacketList_3 extends Handle_IFSelect_PacketList {
    constructor(theHandle: Handle_IFSelect_PacketList);
  }

  export declare class Handle_IFSelect_PacketList_4 extends Handle_IFSelect_PacketList {
    constructor(theHandle: Handle_IFSelect_PacketList);
  }

export declare class Handle_IFSelect_ParamEditor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_ParamEditor): void;
  get(): IFSelect_ParamEditor;
}

  export declare class Handle_IFSelect_ParamEditor_1 extends Handle_IFSelect_ParamEditor {
    constructor();
  }

  export declare class Handle_IFSelect_ParamEditor_2 extends Handle_IFSelect_ParamEditor {
    constructor(thePtr: IFSelect_ParamEditor);
  }

  export declare class Handle_IFSelect_ParamEditor_3 extends Handle_IFSelect_ParamEditor {
    constructor(theHandle: Handle_IFSelect_ParamEditor);
  }

  export declare class Handle_IFSelect_ParamEditor_4 extends Handle_IFSelect_ParamEditor {
    constructor(theHandle: Handle_IFSelect_ParamEditor);
  }

export declare class Handle_IFSelect_SelectDeduct {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectDeduct): void;
  get(): IFSelect_SelectDeduct;
}

  export declare class Handle_IFSelect_SelectDeduct_1 extends Handle_IFSelect_SelectDeduct {
    constructor();
  }

  export declare class Handle_IFSelect_SelectDeduct_2 extends Handle_IFSelect_SelectDeduct {
    constructor(thePtr: IFSelect_SelectDeduct);
  }

  export declare class Handle_IFSelect_SelectDeduct_3 extends Handle_IFSelect_SelectDeduct {
    constructor(theHandle: Handle_IFSelect_SelectDeduct);
  }

  export declare class Handle_IFSelect_SelectDeduct_4 extends Handle_IFSelect_SelectDeduct {
    constructor(theHandle: Handle_IFSelect_SelectDeduct);
  }

export declare class Handle_IFSelect_SelectAnyList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectAnyList): void;
  get(): IFSelect_SelectAnyList;
}

  export declare class Handle_IFSelect_SelectAnyList_1 extends Handle_IFSelect_SelectAnyList {
    constructor();
  }

  export declare class Handle_IFSelect_SelectAnyList_2 extends Handle_IFSelect_SelectAnyList {
    constructor(thePtr: IFSelect_SelectAnyList);
  }

  export declare class Handle_IFSelect_SelectAnyList_3 extends Handle_IFSelect_SelectAnyList {
    constructor(theHandle: Handle_IFSelect_SelectAnyList);
  }

  export declare class Handle_IFSelect_SelectAnyList_4 extends Handle_IFSelect_SelectAnyList {
    constructor(theHandle: Handle_IFSelect_SelectAnyList);
  }

export declare class Handle_IFSelect_SelectExtract {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectExtract): void;
  get(): IFSelect_SelectExtract;
}

  export declare class Handle_IFSelect_SelectExtract_1 extends Handle_IFSelect_SelectExtract {
    constructor();
  }

  export declare class Handle_IFSelect_SelectExtract_2 extends Handle_IFSelect_SelectExtract {
    constructor(thePtr: IFSelect_SelectExtract);
  }

  export declare class Handle_IFSelect_SelectExtract_3 extends Handle_IFSelect_SelectExtract {
    constructor(theHandle: Handle_IFSelect_SelectExtract);
  }

  export declare class Handle_IFSelect_SelectExtract_4 extends Handle_IFSelect_SelectExtract {
    constructor(theHandle: Handle_IFSelect_SelectExtract);
  }

export declare class Handle_IFSelect_SelectAnyType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectAnyType): void;
  get(): IFSelect_SelectAnyType;
}

  export declare class Handle_IFSelect_SelectAnyType_1 extends Handle_IFSelect_SelectAnyType {
    constructor();
  }

  export declare class Handle_IFSelect_SelectAnyType_2 extends Handle_IFSelect_SelectAnyType {
    constructor(thePtr: IFSelect_SelectAnyType);
  }

  export declare class Handle_IFSelect_SelectAnyType_3 extends Handle_IFSelect_SelectAnyType {
    constructor(theHandle: Handle_IFSelect_SelectAnyType);
  }

  export declare class Handle_IFSelect_SelectAnyType_4 extends Handle_IFSelect_SelectAnyType {
    constructor(theHandle: Handle_IFSelect_SelectAnyType);
  }

export declare class Handle_IFSelect_SelectBase {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectBase): void;
  get(): IFSelect_SelectBase;
}

  export declare class Handle_IFSelect_SelectBase_1 extends Handle_IFSelect_SelectBase {
    constructor();
  }

  export declare class Handle_IFSelect_SelectBase_2 extends Handle_IFSelect_SelectBase {
    constructor(thePtr: IFSelect_SelectBase);
  }

  export declare class Handle_IFSelect_SelectBase_3 extends Handle_IFSelect_SelectBase {
    constructor(theHandle: Handle_IFSelect_SelectBase);
  }

  export declare class Handle_IFSelect_SelectBase_4 extends Handle_IFSelect_SelectBase {
    constructor(theHandle: Handle_IFSelect_SelectBase);
  }

export declare class Handle_IFSelect_SelectCombine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectCombine): void;
  get(): IFSelect_SelectCombine;
}

  export declare class Handle_IFSelect_SelectCombine_1 extends Handle_IFSelect_SelectCombine {
    constructor();
  }

  export declare class Handle_IFSelect_SelectCombine_2 extends Handle_IFSelect_SelectCombine {
    constructor(thePtr: IFSelect_SelectCombine);
  }

  export declare class Handle_IFSelect_SelectCombine_3 extends Handle_IFSelect_SelectCombine {
    constructor(theHandle: Handle_IFSelect_SelectCombine);
  }

  export declare class Handle_IFSelect_SelectCombine_4 extends Handle_IFSelect_SelectCombine {
    constructor(theHandle: Handle_IFSelect_SelectCombine);
  }

export declare class Handle_IFSelect_SelectControl {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectControl): void;
  get(): IFSelect_SelectControl;
}

  export declare class Handle_IFSelect_SelectControl_1 extends Handle_IFSelect_SelectControl {
    constructor();
  }

  export declare class Handle_IFSelect_SelectControl_2 extends Handle_IFSelect_SelectControl {
    constructor(thePtr: IFSelect_SelectControl);
  }

  export declare class Handle_IFSelect_SelectControl_3 extends Handle_IFSelect_SelectControl {
    constructor(theHandle: Handle_IFSelect_SelectControl);
  }

  export declare class Handle_IFSelect_SelectControl_4 extends Handle_IFSelect_SelectControl {
    constructor(theHandle: Handle_IFSelect_SelectControl);
  }

export declare class Handle_IFSelect_SelectDiff {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectDiff): void;
  get(): IFSelect_SelectDiff;
}

  export declare class Handle_IFSelect_SelectDiff_1 extends Handle_IFSelect_SelectDiff {
    constructor();
  }

  export declare class Handle_IFSelect_SelectDiff_2 extends Handle_IFSelect_SelectDiff {
    constructor(thePtr: IFSelect_SelectDiff);
  }

  export declare class Handle_IFSelect_SelectDiff_3 extends Handle_IFSelect_SelectDiff {
    constructor(theHandle: Handle_IFSelect_SelectDiff);
  }

  export declare class Handle_IFSelect_SelectDiff_4 extends Handle_IFSelect_SelectDiff {
    constructor(theHandle: Handle_IFSelect_SelectDiff);
  }

export declare class Handle_IFSelect_SelectEntityNumber {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectEntityNumber): void;
  get(): IFSelect_SelectEntityNumber;
}

  export declare class Handle_IFSelect_SelectEntityNumber_1 extends Handle_IFSelect_SelectEntityNumber {
    constructor();
  }

  export declare class Handle_IFSelect_SelectEntityNumber_2 extends Handle_IFSelect_SelectEntityNumber {
    constructor(thePtr: IFSelect_SelectEntityNumber);
  }

  export declare class Handle_IFSelect_SelectEntityNumber_3 extends Handle_IFSelect_SelectEntityNumber {
    constructor(theHandle: Handle_IFSelect_SelectEntityNumber);
  }

  export declare class Handle_IFSelect_SelectEntityNumber_4 extends Handle_IFSelect_SelectEntityNumber {
    constructor(theHandle: Handle_IFSelect_SelectEntityNumber);
  }

export declare class Handle_IFSelect_SelectErrorEntities {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectErrorEntities): void;
  get(): IFSelect_SelectErrorEntities;
}

  export declare class Handle_IFSelect_SelectErrorEntities_1 extends Handle_IFSelect_SelectErrorEntities {
    constructor();
  }

  export declare class Handle_IFSelect_SelectErrorEntities_2 extends Handle_IFSelect_SelectErrorEntities {
    constructor(thePtr: IFSelect_SelectErrorEntities);
  }

  export declare class Handle_IFSelect_SelectErrorEntities_3 extends Handle_IFSelect_SelectErrorEntities {
    constructor(theHandle: Handle_IFSelect_SelectErrorEntities);
  }

  export declare class Handle_IFSelect_SelectErrorEntities_4 extends Handle_IFSelect_SelectErrorEntities {
    constructor(theHandle: Handle_IFSelect_SelectErrorEntities);
  }

export declare class Handle_IFSelect_SelectExplore {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectExplore): void;
  get(): IFSelect_SelectExplore;
}

  export declare class Handle_IFSelect_SelectExplore_1 extends Handle_IFSelect_SelectExplore {
    constructor();
  }

  export declare class Handle_IFSelect_SelectExplore_2 extends Handle_IFSelect_SelectExplore {
    constructor(thePtr: IFSelect_SelectExplore);
  }

  export declare class Handle_IFSelect_SelectExplore_3 extends Handle_IFSelect_SelectExplore {
    constructor(theHandle: Handle_IFSelect_SelectExplore);
  }

  export declare class Handle_IFSelect_SelectExplore_4 extends Handle_IFSelect_SelectExplore {
    constructor(theHandle: Handle_IFSelect_SelectExplore);
  }

export declare class Handle_IFSelect_SelectFlag {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectFlag): void;
  get(): IFSelect_SelectFlag;
}

  export declare class Handle_IFSelect_SelectFlag_1 extends Handle_IFSelect_SelectFlag {
    constructor();
  }

  export declare class Handle_IFSelect_SelectFlag_2 extends Handle_IFSelect_SelectFlag {
    constructor(thePtr: IFSelect_SelectFlag);
  }

  export declare class Handle_IFSelect_SelectFlag_3 extends Handle_IFSelect_SelectFlag {
    constructor(theHandle: Handle_IFSelect_SelectFlag);
  }

  export declare class Handle_IFSelect_SelectFlag_4 extends Handle_IFSelect_SelectFlag {
    constructor(theHandle: Handle_IFSelect_SelectFlag);
  }

export declare class Handle_IFSelect_SelectInList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectInList): void;
  get(): IFSelect_SelectInList;
}

  export declare class Handle_IFSelect_SelectInList_1 extends Handle_IFSelect_SelectInList {
    constructor();
  }

  export declare class Handle_IFSelect_SelectInList_2 extends Handle_IFSelect_SelectInList {
    constructor(thePtr: IFSelect_SelectInList);
  }

  export declare class Handle_IFSelect_SelectInList_3 extends Handle_IFSelect_SelectInList {
    constructor(theHandle: Handle_IFSelect_SelectInList);
  }

  export declare class Handle_IFSelect_SelectInList_4 extends Handle_IFSelect_SelectInList {
    constructor(theHandle: Handle_IFSelect_SelectInList);
  }

export declare class Handle_IFSelect_SelectIncorrectEntities {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectIncorrectEntities): void;
  get(): IFSelect_SelectIncorrectEntities;
}

  export declare class Handle_IFSelect_SelectIncorrectEntities_1 extends Handle_IFSelect_SelectIncorrectEntities {
    constructor();
  }

  export declare class Handle_IFSelect_SelectIncorrectEntities_2 extends Handle_IFSelect_SelectIncorrectEntities {
    constructor(thePtr: IFSelect_SelectIncorrectEntities);
  }

  export declare class Handle_IFSelect_SelectIncorrectEntities_3 extends Handle_IFSelect_SelectIncorrectEntities {
    constructor(theHandle: Handle_IFSelect_SelectIncorrectEntities);
  }

  export declare class Handle_IFSelect_SelectIncorrectEntities_4 extends Handle_IFSelect_SelectIncorrectEntities {
    constructor(theHandle: Handle_IFSelect_SelectIncorrectEntities);
  }

export declare class Handle_IFSelect_SelectIntersection {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectIntersection): void;
  get(): IFSelect_SelectIntersection;
}

  export declare class Handle_IFSelect_SelectIntersection_1 extends Handle_IFSelect_SelectIntersection {
    constructor();
  }

  export declare class Handle_IFSelect_SelectIntersection_2 extends Handle_IFSelect_SelectIntersection {
    constructor(thePtr: IFSelect_SelectIntersection);
  }

  export declare class Handle_IFSelect_SelectIntersection_3 extends Handle_IFSelect_SelectIntersection {
    constructor(theHandle: Handle_IFSelect_SelectIntersection);
  }

  export declare class Handle_IFSelect_SelectIntersection_4 extends Handle_IFSelect_SelectIntersection {
    constructor(theHandle: Handle_IFSelect_SelectIntersection);
  }

export declare class Handle_IFSelect_SelectModelEntities {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectModelEntities): void;
  get(): IFSelect_SelectModelEntities;
}

  export declare class Handle_IFSelect_SelectModelEntities_1 extends Handle_IFSelect_SelectModelEntities {
    constructor();
  }

  export declare class Handle_IFSelect_SelectModelEntities_2 extends Handle_IFSelect_SelectModelEntities {
    constructor(thePtr: IFSelect_SelectModelEntities);
  }

  export declare class Handle_IFSelect_SelectModelEntities_3 extends Handle_IFSelect_SelectModelEntities {
    constructor(theHandle: Handle_IFSelect_SelectModelEntities);
  }

  export declare class Handle_IFSelect_SelectModelEntities_4 extends Handle_IFSelect_SelectModelEntities {
    constructor(theHandle: Handle_IFSelect_SelectModelEntities);
  }

export declare class Handle_IFSelect_SelectModelRoots {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectModelRoots): void;
  get(): IFSelect_SelectModelRoots;
}

  export declare class Handle_IFSelect_SelectModelRoots_1 extends Handle_IFSelect_SelectModelRoots {
    constructor();
  }

  export declare class Handle_IFSelect_SelectModelRoots_2 extends Handle_IFSelect_SelectModelRoots {
    constructor(thePtr: IFSelect_SelectModelRoots);
  }

  export declare class Handle_IFSelect_SelectModelRoots_3 extends Handle_IFSelect_SelectModelRoots {
    constructor(theHandle: Handle_IFSelect_SelectModelRoots);
  }

  export declare class Handle_IFSelect_SelectModelRoots_4 extends Handle_IFSelect_SelectModelRoots {
    constructor(theHandle: Handle_IFSelect_SelectModelRoots);
  }

export declare class Handle_IFSelect_SelectPointed {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectPointed): void;
  get(): IFSelect_SelectPointed;
}

  export declare class Handle_IFSelect_SelectPointed_1 extends Handle_IFSelect_SelectPointed {
    constructor();
  }

  export declare class Handle_IFSelect_SelectPointed_2 extends Handle_IFSelect_SelectPointed {
    constructor(thePtr: IFSelect_SelectPointed);
  }

  export declare class Handle_IFSelect_SelectPointed_3 extends Handle_IFSelect_SelectPointed {
    constructor(theHandle: Handle_IFSelect_SelectPointed);
  }

  export declare class Handle_IFSelect_SelectPointed_4 extends Handle_IFSelect_SelectPointed {
    constructor(theHandle: Handle_IFSelect_SelectPointed);
  }

export declare class Handle_IFSelect_SelectRange {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectRange): void;
  get(): IFSelect_SelectRange;
}

  export declare class Handle_IFSelect_SelectRange_1 extends Handle_IFSelect_SelectRange {
    constructor();
  }

  export declare class Handle_IFSelect_SelectRange_2 extends Handle_IFSelect_SelectRange {
    constructor(thePtr: IFSelect_SelectRange);
  }

  export declare class Handle_IFSelect_SelectRange_3 extends Handle_IFSelect_SelectRange {
    constructor(theHandle: Handle_IFSelect_SelectRange);
  }

  export declare class Handle_IFSelect_SelectRange_4 extends Handle_IFSelect_SelectRange {
    constructor(theHandle: Handle_IFSelect_SelectRange);
  }

export declare class Handle_IFSelect_SelectRootComps {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectRootComps): void;
  get(): IFSelect_SelectRootComps;
}

  export declare class Handle_IFSelect_SelectRootComps_1 extends Handle_IFSelect_SelectRootComps {
    constructor();
  }

  export declare class Handle_IFSelect_SelectRootComps_2 extends Handle_IFSelect_SelectRootComps {
    constructor(thePtr: IFSelect_SelectRootComps);
  }

  export declare class Handle_IFSelect_SelectRootComps_3 extends Handle_IFSelect_SelectRootComps {
    constructor(theHandle: Handle_IFSelect_SelectRootComps);
  }

  export declare class Handle_IFSelect_SelectRootComps_4 extends Handle_IFSelect_SelectRootComps {
    constructor(theHandle: Handle_IFSelect_SelectRootComps);
  }

export declare class Handle_IFSelect_SelectRoots {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectRoots): void;
  get(): IFSelect_SelectRoots;
}

  export declare class Handle_IFSelect_SelectRoots_1 extends Handle_IFSelect_SelectRoots {
    constructor();
  }

  export declare class Handle_IFSelect_SelectRoots_2 extends Handle_IFSelect_SelectRoots {
    constructor(thePtr: IFSelect_SelectRoots);
  }

  export declare class Handle_IFSelect_SelectRoots_3 extends Handle_IFSelect_SelectRoots {
    constructor(theHandle: Handle_IFSelect_SelectRoots);
  }

  export declare class Handle_IFSelect_SelectRoots_4 extends Handle_IFSelect_SelectRoots {
    constructor(theHandle: Handle_IFSelect_SelectRoots);
  }

export declare class Handle_IFSelect_SelectSent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectSent): void;
  get(): IFSelect_SelectSent;
}

  export declare class Handle_IFSelect_SelectSent_1 extends Handle_IFSelect_SelectSent {
    constructor();
  }

  export declare class Handle_IFSelect_SelectSent_2 extends Handle_IFSelect_SelectSent {
    constructor(thePtr: IFSelect_SelectSent);
  }

  export declare class Handle_IFSelect_SelectSent_3 extends Handle_IFSelect_SelectSent {
    constructor(theHandle: Handle_IFSelect_SelectSent);
  }

  export declare class Handle_IFSelect_SelectSent_4 extends Handle_IFSelect_SelectSent {
    constructor(theHandle: Handle_IFSelect_SelectSent);
  }

export declare class Handle_IFSelect_SelectShared {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectShared): void;
  get(): IFSelect_SelectShared;
}

  export declare class Handle_IFSelect_SelectShared_1 extends Handle_IFSelect_SelectShared {
    constructor();
  }

  export declare class Handle_IFSelect_SelectShared_2 extends Handle_IFSelect_SelectShared {
    constructor(thePtr: IFSelect_SelectShared);
  }

  export declare class Handle_IFSelect_SelectShared_3 extends Handle_IFSelect_SelectShared {
    constructor(theHandle: Handle_IFSelect_SelectShared);
  }

  export declare class Handle_IFSelect_SelectShared_4 extends Handle_IFSelect_SelectShared {
    constructor(theHandle: Handle_IFSelect_SelectShared);
  }

export declare class Handle_IFSelect_SelectSharing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectSharing): void;
  get(): IFSelect_SelectSharing;
}

  export declare class Handle_IFSelect_SelectSharing_1 extends Handle_IFSelect_SelectSharing {
    constructor();
  }

  export declare class Handle_IFSelect_SelectSharing_2 extends Handle_IFSelect_SelectSharing {
    constructor(thePtr: IFSelect_SelectSharing);
  }

  export declare class Handle_IFSelect_SelectSharing_3 extends Handle_IFSelect_SelectSharing {
    constructor(theHandle: Handle_IFSelect_SelectSharing);
  }

  export declare class Handle_IFSelect_SelectSharing_4 extends Handle_IFSelect_SelectSharing {
    constructor(theHandle: Handle_IFSelect_SelectSharing);
  }

export declare class Handle_IFSelect_SelectSignature {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectSignature): void;
  get(): IFSelect_SelectSignature;
}

  export declare class Handle_IFSelect_SelectSignature_1 extends Handle_IFSelect_SelectSignature {
    constructor();
  }

  export declare class Handle_IFSelect_SelectSignature_2 extends Handle_IFSelect_SelectSignature {
    constructor(thePtr: IFSelect_SelectSignature);
  }

  export declare class Handle_IFSelect_SelectSignature_3 extends Handle_IFSelect_SelectSignature {
    constructor(theHandle: Handle_IFSelect_SelectSignature);
  }

  export declare class Handle_IFSelect_SelectSignature_4 extends Handle_IFSelect_SelectSignature {
    constructor(theHandle: Handle_IFSelect_SelectSignature);
  }

export declare class Handle_IFSelect_SelectSignedShared {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectSignedShared): void;
  get(): IFSelect_SelectSignedShared;
}

  export declare class Handle_IFSelect_SelectSignedShared_1 extends Handle_IFSelect_SelectSignedShared {
    constructor();
  }

  export declare class Handle_IFSelect_SelectSignedShared_2 extends Handle_IFSelect_SelectSignedShared {
    constructor(thePtr: IFSelect_SelectSignedShared);
  }

  export declare class Handle_IFSelect_SelectSignedShared_3 extends Handle_IFSelect_SelectSignedShared {
    constructor(theHandle: Handle_IFSelect_SelectSignedShared);
  }

  export declare class Handle_IFSelect_SelectSignedShared_4 extends Handle_IFSelect_SelectSignedShared {
    constructor(theHandle: Handle_IFSelect_SelectSignedShared);
  }

export declare class Handle_IFSelect_SelectSignedSharing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectSignedSharing): void;
  get(): IFSelect_SelectSignedSharing;
}

  export declare class Handle_IFSelect_SelectSignedSharing_1 extends Handle_IFSelect_SelectSignedSharing {
    constructor();
  }

  export declare class Handle_IFSelect_SelectSignedSharing_2 extends Handle_IFSelect_SelectSignedSharing {
    constructor(thePtr: IFSelect_SelectSignedSharing);
  }

  export declare class Handle_IFSelect_SelectSignedSharing_3 extends Handle_IFSelect_SelectSignedSharing {
    constructor(theHandle: Handle_IFSelect_SelectSignedSharing);
  }

  export declare class Handle_IFSelect_SelectSignedSharing_4 extends Handle_IFSelect_SelectSignedSharing {
    constructor(theHandle: Handle_IFSelect_SelectSignedSharing);
  }

export declare class Handle_IFSelect_SelectSuite {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectSuite): void;
  get(): IFSelect_SelectSuite;
}

  export declare class Handle_IFSelect_SelectSuite_1 extends Handle_IFSelect_SelectSuite {
    constructor();
  }

  export declare class Handle_IFSelect_SelectSuite_2 extends Handle_IFSelect_SelectSuite {
    constructor(thePtr: IFSelect_SelectSuite);
  }

  export declare class Handle_IFSelect_SelectSuite_3 extends Handle_IFSelect_SelectSuite {
    constructor(theHandle: Handle_IFSelect_SelectSuite);
  }

  export declare class Handle_IFSelect_SelectSuite_4 extends Handle_IFSelect_SelectSuite {
    constructor(theHandle: Handle_IFSelect_SelectSuite);
  }

export declare class Handle_IFSelect_SelectType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectType): void;
  get(): IFSelect_SelectType;
}

  export declare class Handle_IFSelect_SelectType_1 extends Handle_IFSelect_SelectType {
    constructor();
  }

  export declare class Handle_IFSelect_SelectType_2 extends Handle_IFSelect_SelectType {
    constructor(thePtr: IFSelect_SelectType);
  }

  export declare class Handle_IFSelect_SelectType_3 extends Handle_IFSelect_SelectType {
    constructor(theHandle: Handle_IFSelect_SelectType);
  }

  export declare class Handle_IFSelect_SelectType_4 extends Handle_IFSelect_SelectType {
    constructor(theHandle: Handle_IFSelect_SelectType);
  }

export declare class Handle_IFSelect_SelectUnion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectUnion): void;
  get(): IFSelect_SelectUnion;
}

  export declare class Handle_IFSelect_SelectUnion_1 extends Handle_IFSelect_SelectUnion {
    constructor();
  }

  export declare class Handle_IFSelect_SelectUnion_2 extends Handle_IFSelect_SelectUnion {
    constructor(thePtr: IFSelect_SelectUnion);
  }

  export declare class Handle_IFSelect_SelectUnion_3 extends Handle_IFSelect_SelectUnion {
    constructor(theHandle: Handle_IFSelect_SelectUnion);
  }

  export declare class Handle_IFSelect_SelectUnion_4 extends Handle_IFSelect_SelectUnion {
    constructor(theHandle: Handle_IFSelect_SelectUnion);
  }

export declare class Handle_IFSelect_SelectUnknownEntities {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SelectUnknownEntities): void;
  get(): IFSelect_SelectUnknownEntities;
}

  export declare class Handle_IFSelect_SelectUnknownEntities_1 extends Handle_IFSelect_SelectUnknownEntities {
    constructor();
  }

  export declare class Handle_IFSelect_SelectUnknownEntities_2 extends Handle_IFSelect_SelectUnknownEntities {
    constructor(thePtr: IFSelect_SelectUnknownEntities);
  }

  export declare class Handle_IFSelect_SelectUnknownEntities_3 extends Handle_IFSelect_SelectUnknownEntities {
    constructor(theHandle: Handle_IFSelect_SelectUnknownEntities);
  }

  export declare class Handle_IFSelect_SelectUnknownEntities_4 extends Handle_IFSelect_SelectUnknownEntities {
    constructor(theHandle: Handle_IFSelect_SelectUnknownEntities);
  }

export declare class Handle_IFSelect_ShareOut {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_ShareOut): void;
  get(): IFSelect_ShareOut;
}

  export declare class Handle_IFSelect_ShareOut_1 extends Handle_IFSelect_ShareOut {
    constructor();
  }

  export declare class Handle_IFSelect_ShareOut_2 extends Handle_IFSelect_ShareOut {
    constructor(thePtr: IFSelect_ShareOut);
  }

  export declare class Handle_IFSelect_ShareOut_3 extends Handle_IFSelect_ShareOut {
    constructor(theHandle: Handle_IFSelect_ShareOut);
  }

  export declare class Handle_IFSelect_ShareOut_4 extends Handle_IFSelect_ShareOut {
    constructor(theHandle: Handle_IFSelect_ShareOut);
  }

export declare class Handle_MoniTool_SignText {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_SignText): void;
  get(): MoniTool_SignText;
}

  export declare class Handle_MoniTool_SignText_1 extends Handle_MoniTool_SignText {
    constructor();
  }

  export declare class Handle_MoniTool_SignText_2 extends Handle_MoniTool_SignText {
    constructor(thePtr: MoniTool_SignText);
  }

  export declare class Handle_MoniTool_SignText_3 extends Handle_MoniTool_SignText {
    constructor(theHandle: Handle_MoniTool_SignText);
  }

  export declare class Handle_MoniTool_SignText_4 extends Handle_MoniTool_SignText {
    constructor(theHandle: Handle_MoniTool_SignText);
  }

export declare class Handle_Interface_SignType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_SignType): void;
  get(): Interface_SignType;
}

  export declare class Handle_Interface_SignType_1 extends Handle_Interface_SignType {
    constructor();
  }

  export declare class Handle_Interface_SignType_2 extends Handle_Interface_SignType {
    constructor(thePtr: Interface_SignType);
  }

  export declare class Handle_Interface_SignType_3 extends Handle_Interface_SignType {
    constructor(theHandle: Handle_Interface_SignType);
  }

  export declare class Handle_Interface_SignType_4 extends Handle_Interface_SignType {
    constructor(theHandle: Handle_Interface_SignType);
  }

export declare class Handle_IFSelect_Signature {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_Signature): void;
  get(): IFSelect_Signature;
}

  export declare class Handle_IFSelect_Signature_1 extends Handle_IFSelect_Signature {
    constructor();
  }

  export declare class Handle_IFSelect_Signature_2 extends Handle_IFSelect_Signature {
    constructor(thePtr: IFSelect_Signature);
  }

  export declare class Handle_IFSelect_Signature_3 extends Handle_IFSelect_Signature {
    constructor(theHandle: Handle_IFSelect_Signature);
  }

  export declare class Handle_IFSelect_Signature_4 extends Handle_IFSelect_Signature {
    constructor(theHandle: Handle_IFSelect_Signature);
  }

export declare class Handle_IFSelect_SignType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SignType): void;
  get(): IFSelect_SignType;
}

  export declare class Handle_IFSelect_SignType_1 extends Handle_IFSelect_SignType {
    constructor();
  }

  export declare class Handle_IFSelect_SignType_2 extends Handle_IFSelect_SignType {
    constructor(thePtr: IFSelect_SignType);
  }

  export declare class Handle_IFSelect_SignType_3 extends Handle_IFSelect_SignType {
    constructor(theHandle: Handle_IFSelect_SignType);
  }

  export declare class Handle_IFSelect_SignType_4 extends Handle_IFSelect_SignType {
    constructor(theHandle: Handle_IFSelect_SignType);
  }

export declare class Handle_IFSelect_SignAncestor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SignAncestor): void;
  get(): IFSelect_SignAncestor;
}

  export declare class Handle_IFSelect_SignAncestor_1 extends Handle_IFSelect_SignAncestor {
    constructor();
  }

  export declare class Handle_IFSelect_SignAncestor_2 extends Handle_IFSelect_SignAncestor {
    constructor(thePtr: IFSelect_SignAncestor);
  }

  export declare class Handle_IFSelect_SignAncestor_3 extends Handle_IFSelect_SignAncestor {
    constructor(theHandle: Handle_IFSelect_SignAncestor);
  }

  export declare class Handle_IFSelect_SignAncestor_4 extends Handle_IFSelect_SignAncestor {
    constructor(theHandle: Handle_IFSelect_SignAncestor);
  }

export declare class Handle_IFSelect_SignCategory {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SignCategory): void;
  get(): IFSelect_SignCategory;
}

  export declare class Handle_IFSelect_SignCategory_1 extends Handle_IFSelect_SignCategory {
    constructor();
  }

  export declare class Handle_IFSelect_SignCategory_2 extends Handle_IFSelect_SignCategory {
    constructor(thePtr: IFSelect_SignCategory);
  }

  export declare class Handle_IFSelect_SignCategory_3 extends Handle_IFSelect_SignCategory {
    constructor(theHandle: Handle_IFSelect_SignCategory);
  }

  export declare class Handle_IFSelect_SignCategory_4 extends Handle_IFSelect_SignCategory {
    constructor(theHandle: Handle_IFSelect_SignCategory);
  }

export declare class Handle_IFSelect_SignMultiple {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SignMultiple): void;
  get(): IFSelect_SignMultiple;
}

  export declare class Handle_IFSelect_SignMultiple_1 extends Handle_IFSelect_SignMultiple {
    constructor();
  }

  export declare class Handle_IFSelect_SignMultiple_2 extends Handle_IFSelect_SignMultiple {
    constructor(thePtr: IFSelect_SignMultiple);
  }

  export declare class Handle_IFSelect_SignMultiple_3 extends Handle_IFSelect_SignMultiple {
    constructor(theHandle: Handle_IFSelect_SignMultiple);
  }

  export declare class Handle_IFSelect_SignMultiple_4 extends Handle_IFSelect_SignMultiple {
    constructor(theHandle: Handle_IFSelect_SignMultiple);
  }

export declare class Handle_IFSelect_SignValidity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_SignValidity): void;
  get(): IFSelect_SignValidity;
}

  export declare class Handle_IFSelect_SignValidity_1 extends Handle_IFSelect_SignValidity {
    constructor();
  }

  export declare class Handle_IFSelect_SignValidity_2 extends Handle_IFSelect_SignValidity {
    constructor(thePtr: IFSelect_SignValidity);
  }

  export declare class Handle_IFSelect_SignValidity_3 extends Handle_IFSelect_SignValidity {
    constructor(theHandle: Handle_IFSelect_SignValidity);
  }

  export declare class Handle_IFSelect_SignValidity_4 extends Handle_IFSelect_SignValidity {
    constructor(theHandle: Handle_IFSelect_SignValidity);
  }

export declare class Handle_IFSelect_Transformer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_Transformer): void;
  get(): IFSelect_Transformer;
}

  export declare class Handle_IFSelect_Transformer_1 extends Handle_IFSelect_Transformer {
    constructor();
  }

  export declare class Handle_IFSelect_Transformer_2 extends Handle_IFSelect_Transformer {
    constructor(thePtr: IFSelect_Transformer);
  }

  export declare class Handle_IFSelect_Transformer_3 extends Handle_IFSelect_Transformer {
    constructor(theHandle: Handle_IFSelect_Transformer);
  }

  export declare class Handle_IFSelect_Transformer_4 extends Handle_IFSelect_Transformer {
    constructor(theHandle: Handle_IFSelect_Transformer);
  }

export declare class Handle_IFSelect_TransformStandard {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_TransformStandard): void;
  get(): IFSelect_TransformStandard;
}

  export declare class Handle_IFSelect_TransformStandard_1 extends Handle_IFSelect_TransformStandard {
    constructor();
  }

  export declare class Handle_IFSelect_TransformStandard_2 extends Handle_IFSelect_TransformStandard {
    constructor(thePtr: IFSelect_TransformStandard);
  }

  export declare class Handle_IFSelect_TransformStandard_3 extends Handle_IFSelect_TransformStandard {
    constructor(theHandle: Handle_IFSelect_TransformStandard);
  }

  export declare class Handle_IFSelect_TransformStandard_4 extends Handle_IFSelect_TransformStandard {
    constructor(theHandle: Handle_IFSelect_TransformStandard);
  }

export declare class Handle_IFSelect_WorkLibrary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_WorkLibrary): void;
  get(): IFSelect_WorkLibrary;
}

  export declare class Handle_IFSelect_WorkLibrary_1 extends Handle_IFSelect_WorkLibrary {
    constructor();
  }

  export declare class Handle_IFSelect_WorkLibrary_2 extends Handle_IFSelect_WorkLibrary {
    constructor(thePtr: IFSelect_WorkLibrary);
  }

  export declare class Handle_IFSelect_WorkLibrary_3 extends Handle_IFSelect_WorkLibrary {
    constructor(theHandle: Handle_IFSelect_WorkLibrary);
  }

  export declare class Handle_IFSelect_WorkLibrary_4 extends Handle_IFSelect_WorkLibrary {
    constructor(theHandle: Handle_IFSelect_WorkLibrary);
  }

export declare class Handle_IFSelect_WorkSession {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_WorkSession): void;
  get(): IFSelect_WorkSession;
}

  export declare class Handle_IFSelect_WorkSession_1 extends Handle_IFSelect_WorkSession {
    constructor();
  }

  export declare class Handle_IFSelect_WorkSession_2 extends Handle_IFSelect_WorkSession {
    constructor(thePtr: IFSelect_WorkSession);
  }

  export declare class Handle_IFSelect_WorkSession_3 extends Handle_IFSelect_WorkSession {
    constructor(theHandle: Handle_IFSelect_WorkSession);
  }

  export declare class Handle_IFSelect_WorkSession_4 extends Handle_IFSelect_WorkSession {
    constructor(theHandle: Handle_IFSelect_WorkSession);
  }

export declare class Handle_Interface_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_GeneralModule): void;
  get(): Interface_GeneralModule;
}

  export declare class Handle_Interface_GeneralModule_1 extends Handle_Interface_GeneralModule {
    constructor();
  }

  export declare class Handle_Interface_GeneralModule_2 extends Handle_Interface_GeneralModule {
    constructor(thePtr: Interface_GeneralModule);
  }

  export declare class Handle_Interface_GeneralModule_3 extends Handle_Interface_GeneralModule {
    constructor(theHandle: Handle_Interface_GeneralModule);
  }

  export declare class Handle_Interface_GeneralModule_4 extends Handle_Interface_GeneralModule {
    constructor(theHandle: Handle_Interface_GeneralModule);
  }

export declare class Handle_Interface_ReaderModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_ReaderModule): void;
  get(): Interface_ReaderModule;
}

  export declare class Handle_Interface_ReaderModule_1 extends Handle_Interface_ReaderModule {
    constructor();
  }

  export declare class Handle_Interface_ReaderModule_2 extends Handle_Interface_ReaderModule {
    constructor(thePtr: Interface_ReaderModule);
  }

  export declare class Handle_Interface_ReaderModule_3 extends Handle_Interface_ReaderModule {
    constructor(theHandle: Handle_Interface_ReaderModule);
  }

  export declare class Handle_Interface_ReaderModule_4 extends Handle_Interface_ReaderModule {
    constructor(theHandle: Handle_Interface_ReaderModule);
  }

export declare class Handle_Transfer_Finder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_Finder): void;
  get(): Transfer_Finder;
}

  export declare class Handle_Transfer_Finder_1 extends Handle_Transfer_Finder {
    constructor();
  }

  export declare class Handle_Transfer_Finder_2 extends Handle_Transfer_Finder {
    constructor(thePtr: Transfer_Finder);
  }

  export declare class Handle_Transfer_Finder_3 extends Handle_Transfer_Finder {
    constructor(theHandle: Handle_Transfer_Finder);
  }

  export declare class Handle_Transfer_Finder_4 extends Handle_Transfer_Finder {
    constructor(theHandle: Handle_Transfer_Finder);
  }

export declare class Handle_Transfer_HSequenceOfFinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_HSequenceOfFinder): void;
  get(): Transfer_HSequenceOfFinder;
}

  export declare class Handle_Transfer_HSequenceOfFinder_1 extends Handle_Transfer_HSequenceOfFinder {
    constructor();
  }

  export declare class Handle_Transfer_HSequenceOfFinder_2 extends Handle_Transfer_HSequenceOfFinder {
    constructor(thePtr: Transfer_HSequenceOfFinder);
  }

  export declare class Handle_Transfer_HSequenceOfFinder_3 extends Handle_Transfer_HSequenceOfFinder {
    constructor(theHandle: Handle_Transfer_HSequenceOfFinder);
  }

  export declare class Handle_Transfer_HSequenceOfFinder_4 extends Handle_Transfer_HSequenceOfFinder {
    constructor(theHandle: Handle_Transfer_HSequenceOfFinder);
  }

export declare class Handle_Transfer_Binder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_Binder): void;
  get(): Transfer_Binder;
}

  export declare class Handle_Transfer_Binder_1 extends Handle_Transfer_Binder {
    constructor();
  }

  export declare class Handle_Transfer_Binder_2 extends Handle_Transfer_Binder {
    constructor(thePtr: Transfer_Binder);
  }

  export declare class Handle_Transfer_Binder_3 extends Handle_Transfer_Binder {
    constructor(theHandle: Handle_Transfer_Binder);
  }

  export declare class Handle_Transfer_Binder_4 extends Handle_Transfer_Binder {
    constructor(theHandle: Handle_Transfer_Binder);
  }

export declare class Handle_Transfer_ActorOfProcessForFinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ActorOfProcessForFinder): void;
  get(): Transfer_ActorOfProcessForFinder;
}

  export declare class Handle_Transfer_ActorOfProcessForFinder_1 extends Handle_Transfer_ActorOfProcessForFinder {
    constructor();
  }

  export declare class Handle_Transfer_ActorOfProcessForFinder_2 extends Handle_Transfer_ActorOfProcessForFinder {
    constructor(thePtr: Transfer_ActorOfProcessForFinder);
  }

  export declare class Handle_Transfer_ActorOfProcessForFinder_3 extends Handle_Transfer_ActorOfProcessForFinder {
    constructor(theHandle: Handle_Transfer_ActorOfProcessForFinder);
  }

  export declare class Handle_Transfer_ActorOfProcessForFinder_4 extends Handle_Transfer_ActorOfProcessForFinder {
    constructor(theHandle: Handle_Transfer_ActorOfProcessForFinder);
  }

export declare class Handle_Transfer_ActorOfFinderProcess {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ActorOfFinderProcess): void;
  get(): Transfer_ActorOfFinderProcess;
}

  export declare class Handle_Transfer_ActorOfFinderProcess_1 extends Handle_Transfer_ActorOfFinderProcess {
    constructor();
  }

  export declare class Handle_Transfer_ActorOfFinderProcess_2 extends Handle_Transfer_ActorOfFinderProcess {
    constructor(thePtr: Transfer_ActorOfFinderProcess);
  }

  export declare class Handle_Transfer_ActorOfFinderProcess_3 extends Handle_Transfer_ActorOfFinderProcess {
    constructor(theHandle: Handle_Transfer_ActorOfFinderProcess);
  }

  export declare class Handle_Transfer_ActorOfFinderProcess_4 extends Handle_Transfer_ActorOfFinderProcess {
    constructor(theHandle: Handle_Transfer_ActorOfFinderProcess);
  }

export declare class Handle_XSControl_Controller {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_Controller): void;
  get(): XSControl_Controller;
}

  export declare class Handle_XSControl_Controller_1 extends Handle_XSControl_Controller {
    constructor();
  }

  export declare class Handle_XSControl_Controller_2 extends Handle_XSControl_Controller {
    constructor(thePtr: XSControl_Controller);
  }

  export declare class Handle_XSControl_Controller_3 extends Handle_XSControl_Controller {
    constructor(theHandle: Handle_XSControl_Controller);
  }

  export declare class Handle_XSControl_Controller_4 extends Handle_XSControl_Controller {
    constructor(theHandle: Handle_XSControl_Controller);
  }

export declare class Handle_Transfer_ProcessForTransient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ProcessForTransient): void;
  get(): Transfer_ProcessForTransient;
}

  export declare class Handle_Transfer_ProcessForTransient_1 extends Handle_Transfer_ProcessForTransient {
    constructor();
  }

  export declare class Handle_Transfer_ProcessForTransient_2 extends Handle_Transfer_ProcessForTransient {
    constructor(thePtr: Transfer_ProcessForTransient);
  }

  export declare class Handle_Transfer_ProcessForTransient_3 extends Handle_Transfer_ProcessForTransient {
    constructor(theHandle: Handle_Transfer_ProcessForTransient);
  }

  export declare class Handle_Transfer_ProcessForTransient_4 extends Handle_Transfer_ProcessForTransient {
    constructor(theHandle: Handle_Transfer_ProcessForTransient);
  }

export declare class Handle_Transfer_TransientProcess {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_TransientProcess): void;
  get(): Transfer_TransientProcess;
}

  export declare class Handle_Transfer_TransientProcess_1 extends Handle_Transfer_TransientProcess {
    constructor();
  }

  export declare class Handle_Transfer_TransientProcess_2 extends Handle_Transfer_TransientProcess {
    constructor(thePtr: Transfer_TransientProcess);
  }

  export declare class Handle_Transfer_TransientProcess_3 extends Handle_Transfer_TransientProcess {
    constructor(theHandle: Handle_Transfer_TransientProcess);
  }

  export declare class Handle_Transfer_TransientProcess_4 extends Handle_Transfer_TransientProcess {
    constructor(theHandle: Handle_Transfer_TransientProcess);
  }

export declare class Handle_Interface_FileReaderData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_FileReaderData): void;
  get(): Interface_FileReaderData;
}

  export declare class Handle_Interface_FileReaderData_1 extends Handle_Interface_FileReaderData {
    constructor();
  }

  export declare class Handle_Interface_FileReaderData_2 extends Handle_Interface_FileReaderData {
    constructor(thePtr: Interface_FileReaderData);
  }

  export declare class Handle_Interface_FileReaderData_3 extends Handle_Interface_FileReaderData {
    constructor(theHandle: Handle_Interface_FileReaderData);
  }

  export declare class Handle_Interface_FileReaderData_4 extends Handle_Interface_FileReaderData {
    constructor(theHandle: Handle_Interface_FileReaderData);
  }

export declare class Handle_Transfer_ActorOfProcessForTransient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ActorOfProcessForTransient): void;
  get(): Transfer_ActorOfProcessForTransient;
}

  export declare class Handle_Transfer_ActorOfProcessForTransient_1 extends Handle_Transfer_ActorOfProcessForTransient {
    constructor();
  }

  export declare class Handle_Transfer_ActorOfProcessForTransient_2 extends Handle_Transfer_ActorOfProcessForTransient {
    constructor(thePtr: Transfer_ActorOfProcessForTransient);
  }

  export declare class Handle_Transfer_ActorOfProcessForTransient_3 extends Handle_Transfer_ActorOfProcessForTransient {
    constructor(theHandle: Handle_Transfer_ActorOfProcessForTransient);
  }

  export declare class Handle_Transfer_ActorOfProcessForTransient_4 extends Handle_Transfer_ActorOfProcessForTransient {
    constructor(theHandle: Handle_Transfer_ActorOfProcessForTransient);
  }

export declare class Handle_Transfer_ActorOfTransientProcess {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ActorOfTransientProcess): void;
  get(): Transfer_ActorOfTransientProcess;
}

  export declare class Handle_Transfer_ActorOfTransientProcess_1 extends Handle_Transfer_ActorOfTransientProcess {
    constructor();
  }

  export declare class Handle_Transfer_ActorOfTransientProcess_2 extends Handle_Transfer_ActorOfTransientProcess {
    constructor(thePtr: Transfer_ActorOfTransientProcess);
  }

  export declare class Handle_Transfer_ActorOfTransientProcess_3 extends Handle_Transfer_ActorOfTransientProcess {
    constructor(theHandle: Handle_Transfer_ActorOfTransientProcess);
  }

  export declare class Handle_Transfer_ActorOfTransientProcess_4 extends Handle_Transfer_ActorOfTransientProcess {
    constructor(theHandle: Handle_Transfer_ActorOfTransientProcess);
  }

export declare class Interface_Array1OfFileParameter {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Interface_FileParameter): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Interface_Array1OfFileParameter): Interface_Array1OfFileParameter;
  Move(theOther: Interface_Array1OfFileParameter): Interface_Array1OfFileParameter;
  First(): Interface_FileParameter;
  ChangeFirst(): Interface_FileParameter;
  Last(): Interface_FileParameter;
  ChangeLast(): Interface_FileParameter;
  Value(theIndex: Standard_Integer): Interface_FileParameter;
  ChangeValue(theIndex: Standard_Integer): Interface_FileParameter;
  SetValue(theIndex: Standard_Integer, theItem: Interface_FileParameter): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Interface_Array1OfFileParameter_1 extends Interface_Array1OfFileParameter {
    constructor();
  }

  export declare class Interface_Array1OfFileParameter_2 extends Interface_Array1OfFileParameter {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Interface_Array1OfFileParameter_3 extends Interface_Array1OfFileParameter {
    constructor(theOther: Interface_Array1OfFileParameter);
  }

  export declare class Interface_Array1OfFileParameter_4 extends Interface_Array1OfFileParameter {
    constructor(theOther: Interface_Array1OfFileParameter);
  }

  export declare class Interface_Array1OfFileParameter_5 extends Interface_Array1OfFileParameter {
    constructor(theBegin: Interface_FileParameter, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Interface_GTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_GTool): void;
  get(): Interface_GTool;
}

  export declare class Handle_Interface_GTool_1 extends Handle_Interface_GTool {
    constructor();
  }

  export declare class Handle_Interface_GTool_2 extends Handle_Interface_GTool {
    constructor(thePtr: Interface_GTool);
  }

  export declare class Handle_Interface_GTool_3 extends Handle_Interface_GTool {
    constructor(theHandle: Handle_Interface_GTool);
  }

  export declare class Handle_Interface_GTool_4 extends Handle_Interface_GTool {
    constructor(theHandle: Handle_Interface_GTool);
  }

export declare class Handle_Interface_InterfaceError {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_InterfaceError): void;
  get(): Interface_InterfaceError;
}

  export declare class Handle_Interface_InterfaceError_1 extends Handle_Interface_InterfaceError {
    constructor();
  }

  export declare class Handle_Interface_InterfaceError_2 extends Handle_Interface_InterfaceError {
    constructor(thePtr: Interface_InterfaceError);
  }

  export declare class Handle_Interface_InterfaceError_3 extends Handle_Interface_InterfaceError {
    constructor(theHandle: Handle_Interface_InterfaceError);
  }

  export declare class Handle_Interface_InterfaceError_4 extends Handle_Interface_InterfaceError {
    constructor(theHandle: Handle_Interface_InterfaceError);
  }

export declare class Handle_Interface_CheckFailure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_CheckFailure): void;
  get(): Interface_CheckFailure;
}

  export declare class Handle_Interface_CheckFailure_1 extends Handle_Interface_CheckFailure {
    constructor();
  }

  export declare class Handle_Interface_CheckFailure_2 extends Handle_Interface_CheckFailure {
    constructor(thePtr: Interface_CheckFailure);
  }

  export declare class Handle_Interface_CheckFailure_3 extends Handle_Interface_CheckFailure {
    constructor(theHandle: Handle_Interface_CheckFailure);
  }

  export declare class Handle_Interface_CheckFailure_4 extends Handle_Interface_CheckFailure {
    constructor(theHandle: Handle_Interface_CheckFailure);
  }

export declare class Handle_Interface_CopyControl {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_CopyControl): void;
  get(): Interface_CopyControl;
}

  export declare class Handle_Interface_CopyControl_1 extends Handle_Interface_CopyControl {
    constructor();
  }

  export declare class Handle_Interface_CopyControl_2 extends Handle_Interface_CopyControl {
    constructor(thePtr: Interface_CopyControl);
  }

  export declare class Handle_Interface_CopyControl_3 extends Handle_Interface_CopyControl {
    constructor(theHandle: Handle_Interface_CopyControl);
  }

  export declare class Handle_Interface_CopyControl_4 extends Handle_Interface_CopyControl {
    constructor(theHandle: Handle_Interface_CopyControl);
  }

export declare class Handle_Interface_CopyMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_CopyMap): void;
  get(): Interface_CopyMap;
}

  export declare class Handle_Interface_CopyMap_1 extends Handle_Interface_CopyMap {
    constructor();
  }

  export declare class Handle_Interface_CopyMap_2 extends Handle_Interface_CopyMap {
    constructor(thePtr: Interface_CopyMap);
  }

  export declare class Handle_Interface_CopyMap_3 extends Handle_Interface_CopyMap {
    constructor(theHandle: Handle_Interface_CopyMap);
  }

  export declare class Handle_Interface_CopyMap_4 extends Handle_Interface_CopyMap {
    constructor(theHandle: Handle_Interface_CopyMap);
  }

export declare class Handle_Interface_EntityCluster {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_EntityCluster): void;
  get(): Interface_EntityCluster;
}

  export declare class Handle_Interface_EntityCluster_1 extends Handle_Interface_EntityCluster {
    constructor();
  }

  export declare class Handle_Interface_EntityCluster_2 extends Handle_Interface_EntityCluster {
    constructor(thePtr: Interface_EntityCluster);
  }

  export declare class Handle_Interface_EntityCluster_3 extends Handle_Interface_EntityCluster {
    constructor(theHandle: Handle_Interface_EntityCluster);
  }

  export declare class Handle_Interface_EntityCluster_4 extends Handle_Interface_EntityCluster {
    constructor(theHandle: Handle_Interface_EntityCluster);
  }

export declare class Handle_Interface_GlobalNodeOfGeneralLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_GlobalNodeOfGeneralLib): void;
  get(): Interface_GlobalNodeOfGeneralLib;
}

  export declare class Handle_Interface_GlobalNodeOfGeneralLib_1 extends Handle_Interface_GlobalNodeOfGeneralLib {
    constructor();
  }

  export declare class Handle_Interface_GlobalNodeOfGeneralLib_2 extends Handle_Interface_GlobalNodeOfGeneralLib {
    constructor(thePtr: Interface_GlobalNodeOfGeneralLib);
  }

  export declare class Handle_Interface_GlobalNodeOfGeneralLib_3 extends Handle_Interface_GlobalNodeOfGeneralLib {
    constructor(theHandle: Handle_Interface_GlobalNodeOfGeneralLib);
  }

  export declare class Handle_Interface_GlobalNodeOfGeneralLib_4 extends Handle_Interface_GlobalNodeOfGeneralLib {
    constructor(theHandle: Handle_Interface_GlobalNodeOfGeneralLib);
  }

export declare class Handle_Interface_GlobalNodeOfReaderLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_GlobalNodeOfReaderLib): void;
  get(): Interface_GlobalNodeOfReaderLib;
}

  export declare class Handle_Interface_GlobalNodeOfReaderLib_1 extends Handle_Interface_GlobalNodeOfReaderLib {
    constructor();
  }

  export declare class Handle_Interface_GlobalNodeOfReaderLib_2 extends Handle_Interface_GlobalNodeOfReaderLib {
    constructor(thePtr: Interface_GlobalNodeOfReaderLib);
  }

  export declare class Handle_Interface_GlobalNodeOfReaderLib_3 extends Handle_Interface_GlobalNodeOfReaderLib {
    constructor(theHandle: Handle_Interface_GlobalNodeOfReaderLib);
  }

  export declare class Handle_Interface_GlobalNodeOfReaderLib_4 extends Handle_Interface_GlobalNodeOfReaderLib {
    constructor(theHandle: Handle_Interface_GlobalNodeOfReaderLib);
  }

export declare class Handle_Interface_HGraph {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_HGraph): void;
  get(): Interface_HGraph;
}

  export declare class Handle_Interface_HGraph_1 extends Handle_Interface_HGraph {
    constructor();
  }

  export declare class Handle_Interface_HGraph_2 extends Handle_Interface_HGraph {
    constructor(thePtr: Interface_HGraph);
  }

  export declare class Handle_Interface_HGraph_3 extends Handle_Interface_HGraph {
    constructor(theHandle: Handle_Interface_HGraph);
  }

  export declare class Handle_Interface_HGraph_4 extends Handle_Interface_HGraph {
    constructor(theHandle: Handle_Interface_HGraph);
  }

export declare class Interface_IndexedMapOfAsciiString extends NCollection_BaseMap {
  cbegin(): any;
  cend(): any;
  Exchange(theOther: Interface_IndexedMapOfAsciiString): void;
  Assign(theOther: Interface_IndexedMapOfAsciiString): Interface_IndexedMapOfAsciiString;
  ReSize(theExtent: Standard_Integer): void;
  Add(theKey1: TCollection_AsciiString): Standard_Integer;
  Contains(theKey1: TCollection_AsciiString): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: TCollection_AsciiString): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: TCollection_AsciiString): Standard_Boolean;
  FindKey(theIndex: Standard_Integer): TCollection_AsciiString;
  FindIndex(theKey1: TCollection_AsciiString): Standard_Integer;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class Interface_IndexedMapOfAsciiString_1 extends Interface_IndexedMapOfAsciiString {
    constructor();
  }

  export declare class Interface_IndexedMapOfAsciiString_2 extends Interface_IndexedMapOfAsciiString {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class Interface_IndexedMapOfAsciiString_3 extends Interface_IndexedMapOfAsciiString {
    constructor(theOther: Interface_IndexedMapOfAsciiString);
  }

export declare class Handle_Interface_IntVal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_IntVal): void;
  get(): Interface_IntVal;
}

  export declare class Handle_Interface_IntVal_1 extends Handle_Interface_IntVal {
    constructor();
  }

  export declare class Handle_Interface_IntVal_2 extends Handle_Interface_IntVal {
    constructor(thePtr: Interface_IntVal);
  }

  export declare class Handle_Interface_IntVal_3 extends Handle_Interface_IntVal {
    constructor(theHandle: Handle_Interface_IntVal);
  }

  export declare class Handle_Interface_IntVal_4 extends Handle_Interface_IntVal {
    constructor(theHandle: Handle_Interface_IntVal);
  }

export declare class Handle_Interface_InterfaceMismatch {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_InterfaceMismatch): void;
  get(): Interface_InterfaceMismatch;
}

  export declare class Handle_Interface_InterfaceMismatch_1 extends Handle_Interface_InterfaceMismatch {
    constructor();
  }

  export declare class Handle_Interface_InterfaceMismatch_2 extends Handle_Interface_InterfaceMismatch {
    constructor(thePtr: Interface_InterfaceMismatch);
  }

  export declare class Handle_Interface_InterfaceMismatch_3 extends Handle_Interface_InterfaceMismatch {
    constructor(theHandle: Handle_Interface_InterfaceMismatch);
  }

  export declare class Handle_Interface_InterfaceMismatch_4 extends Handle_Interface_InterfaceMismatch {
    constructor(theHandle: Handle_Interface_InterfaceMismatch);
  }

export declare class Handle_Interface_NodeOfGeneralLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_NodeOfGeneralLib): void;
  get(): Interface_NodeOfGeneralLib;
}

  export declare class Handle_Interface_NodeOfGeneralLib_1 extends Handle_Interface_NodeOfGeneralLib {
    constructor();
  }

  export declare class Handle_Interface_NodeOfGeneralLib_2 extends Handle_Interface_NodeOfGeneralLib {
    constructor(thePtr: Interface_NodeOfGeneralLib);
  }

  export declare class Handle_Interface_NodeOfGeneralLib_3 extends Handle_Interface_NodeOfGeneralLib {
    constructor(theHandle: Handle_Interface_NodeOfGeneralLib);
  }

  export declare class Handle_Interface_NodeOfGeneralLib_4 extends Handle_Interface_NodeOfGeneralLib {
    constructor(theHandle: Handle_Interface_NodeOfGeneralLib);
  }

export declare class Handle_Interface_NodeOfReaderLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_NodeOfReaderLib): void;
  get(): Interface_NodeOfReaderLib;
}

  export declare class Handle_Interface_NodeOfReaderLib_1 extends Handle_Interface_NodeOfReaderLib {
    constructor();
  }

  export declare class Handle_Interface_NodeOfReaderLib_2 extends Handle_Interface_NodeOfReaderLib {
    constructor(thePtr: Interface_NodeOfReaderLib);
  }

  export declare class Handle_Interface_NodeOfReaderLib_3 extends Handle_Interface_NodeOfReaderLib {
    constructor(theHandle: Handle_Interface_NodeOfReaderLib);
  }

  export declare class Handle_Interface_NodeOfReaderLib_4 extends Handle_Interface_NodeOfReaderLib {
    constructor(theHandle: Handle_Interface_NodeOfReaderLib);
  }

export declare class Interface_VectorOfFileParameter extends NCollection_BaseVector {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Length(): Standard_Integer;
  Size(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Assign(theOther: Interface_VectorOfFileParameter, theOwnAllocator: Standard_Boolean): void;
  Append(theValue: Interface_FileParameter): Interface_FileParameter;
  Appended(): Interface_FileParameter;
  Value(theIndex: Standard_Integer): Interface_FileParameter;
  First(): Interface_FileParameter;
  ChangeFirst(): Interface_FileParameter;
  Last(): Interface_FileParameter;
  ChangeLast(): Interface_FileParameter;
  ChangeValue(theIndex: Standard_Integer): Interface_FileParameter;
  SetValue(theIndex: Standard_Integer, theValue: Interface_FileParameter): Interface_FileParameter;
}

  export declare class Interface_VectorOfFileParameter_1 extends Interface_VectorOfFileParameter {
    constructor(theIncrement: Standard_Integer, theAlloc: any);
  }

  export declare class Interface_VectorOfFileParameter_2 extends Interface_VectorOfFileParameter {
    constructor(theOther: Interface_VectorOfFileParameter);
  }

export declare class Handle_Interface_ParamList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_ParamList): void;
  get(): Interface_ParamList;
}

  export declare class Handle_Interface_ParamList_1 extends Handle_Interface_ParamList {
    constructor();
  }

  export declare class Handle_Interface_ParamList_2 extends Handle_Interface_ParamList {
    constructor(thePtr: Interface_ParamList);
  }

  export declare class Handle_Interface_ParamList_3 extends Handle_Interface_ParamList {
    constructor(theHandle: Handle_Interface_ParamList);
  }

  export declare class Handle_Interface_ParamList_4 extends Handle_Interface_ParamList {
    constructor(theHandle: Handle_Interface_ParamList);
  }

export declare class Handle_Interface_ParamSet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_ParamSet): void;
  get(): Interface_ParamSet;
}

  export declare class Handle_Interface_ParamSet_1 extends Handle_Interface_ParamSet {
    constructor();
  }

  export declare class Handle_Interface_ParamSet_2 extends Handle_Interface_ParamSet {
    constructor(thePtr: Interface_ParamSet);
  }

  export declare class Handle_Interface_ParamSet_3 extends Handle_Interface_ParamSet {
    constructor(theHandle: Handle_Interface_ParamSet);
  }

  export declare class Handle_Interface_ParamSet_4 extends Handle_Interface_ParamSet {
    constructor(theHandle: Handle_Interface_ParamSet);
  }

export declare class Handle_Interface_ReportEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_ReportEntity): void;
  get(): Interface_ReportEntity;
}

  export declare class Handle_Interface_ReportEntity_1 extends Handle_Interface_ReportEntity {
    constructor();
  }

  export declare class Handle_Interface_ReportEntity_2 extends Handle_Interface_ReportEntity {
    constructor(thePtr: Interface_ReportEntity);
  }

  export declare class Handle_Interface_ReportEntity_3 extends Handle_Interface_ReportEntity {
    constructor(theHandle: Handle_Interface_ReportEntity);
  }

  export declare class Handle_Interface_ReportEntity_4 extends Handle_Interface_ReportEntity {
    constructor(theHandle: Handle_Interface_ReportEntity);
  }

export declare class Handle_Interface_SignLabel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_SignLabel): void;
  get(): Interface_SignLabel;
}

  export declare class Handle_Interface_SignLabel_1 extends Handle_Interface_SignLabel {
    constructor();
  }

  export declare class Handle_Interface_SignLabel_2 extends Handle_Interface_SignLabel {
    constructor(thePtr: Interface_SignLabel);
  }

  export declare class Handle_Interface_SignLabel_3 extends Handle_Interface_SignLabel {
    constructor(theHandle: Handle_Interface_SignLabel);
  }

  export declare class Handle_Interface_SignLabel_4 extends Handle_Interface_SignLabel {
    constructor(theHandle: Handle_Interface_SignLabel);
  }

export declare class Handle_MoniTool_TypedValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_TypedValue): void;
  get(): MoniTool_TypedValue;
}

  export declare class Handle_MoniTool_TypedValue_1 extends Handle_MoniTool_TypedValue {
    constructor();
  }

  export declare class Handle_MoniTool_TypedValue_2 extends Handle_MoniTool_TypedValue {
    constructor(thePtr: MoniTool_TypedValue);
  }

  export declare class Handle_MoniTool_TypedValue_3 extends Handle_MoniTool_TypedValue {
    constructor(theHandle: Handle_MoniTool_TypedValue);
  }

  export declare class Handle_MoniTool_TypedValue_4 extends Handle_MoniTool_TypedValue {
    constructor(theHandle: Handle_MoniTool_TypedValue);
  }

export declare class Handle_Interface_TypedValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_TypedValue): void;
  get(): Interface_TypedValue;
}

  export declare class Handle_Interface_TypedValue_1 extends Handle_Interface_TypedValue {
    constructor();
  }

  export declare class Handle_Interface_TypedValue_2 extends Handle_Interface_TypedValue {
    constructor(thePtr: Interface_TypedValue);
  }

  export declare class Handle_Interface_TypedValue_3 extends Handle_Interface_TypedValue {
    constructor(theHandle: Handle_Interface_TypedValue);
  }

  export declare class Handle_Interface_TypedValue_4 extends Handle_Interface_TypedValue {
    constructor(theHandle: Handle_Interface_TypedValue);
  }

export declare class Handle_Interface_Static {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_Static): void;
  get(): Interface_Static;
}

  export declare class Handle_Interface_Static_1 extends Handle_Interface_Static {
    constructor();
  }

  export declare class Handle_Interface_Static_2 extends Handle_Interface_Static {
    constructor(thePtr: Interface_Static);
  }

  export declare class Handle_Interface_Static_3 extends Handle_Interface_Static {
    constructor(theHandle: Handle_Interface_Static);
  }

  export declare class Handle_Interface_Static_4 extends Handle_Interface_Static {
    constructor(theHandle: Handle_Interface_Static);
  }

export declare class Handle_Interface_UndefinedContent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_UndefinedContent): void;
  get(): Interface_UndefinedContent;
}

  export declare class Handle_Interface_UndefinedContent_1 extends Handle_Interface_UndefinedContent {
    constructor();
  }

  export declare class Handle_Interface_UndefinedContent_2 extends Handle_Interface_UndefinedContent {
    constructor(thePtr: Interface_UndefinedContent);
  }

  export declare class Handle_Interface_UndefinedContent_3 extends Handle_Interface_UndefinedContent {
    constructor(theHandle: Handle_Interface_UndefinedContent);
  }

  export declare class Handle_Interface_UndefinedContent_4 extends Handle_Interface_UndefinedContent {
    constructor(theHandle: Handle_Interface_UndefinedContent);
  }

export declare class Handle_MoniTool_CaseData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_CaseData): void;
  get(): MoniTool_CaseData;
}

  export declare class Handle_MoniTool_CaseData_1 extends Handle_MoniTool_CaseData {
    constructor();
  }

  export declare class Handle_MoniTool_CaseData_2 extends Handle_MoniTool_CaseData {
    constructor(thePtr: MoniTool_CaseData);
  }

  export declare class Handle_MoniTool_CaseData_3 extends Handle_MoniTool_CaseData {
    constructor(theHandle: Handle_MoniTool_CaseData);
  }

  export declare class Handle_MoniTool_CaseData_4 extends Handle_MoniTool_CaseData {
    constructor(theHandle: Handle_MoniTool_CaseData);
  }

export declare class Handle_MoniTool_Element {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_Element): void;
  get(): MoniTool_Element;
}

  export declare class Handle_MoniTool_Element_1 extends Handle_MoniTool_Element {
    constructor();
  }

  export declare class Handle_MoniTool_Element_2 extends Handle_MoniTool_Element {
    constructor(thePtr: MoniTool_Element);
  }

  export declare class Handle_MoniTool_Element_3 extends Handle_MoniTool_Element {
    constructor(theHandle: Handle_MoniTool_Element);
  }

  export declare class Handle_MoniTool_Element_4 extends Handle_MoniTool_Element {
    constructor(theHandle: Handle_MoniTool_Element);
  }

export declare class Handle_MoniTool_HSequenceOfElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_HSequenceOfElement): void;
  get(): MoniTool_HSequenceOfElement;
}

  export declare class Handle_MoniTool_HSequenceOfElement_1 extends Handle_MoniTool_HSequenceOfElement {
    constructor();
  }

  export declare class Handle_MoniTool_HSequenceOfElement_2 extends Handle_MoniTool_HSequenceOfElement {
    constructor(thePtr: MoniTool_HSequenceOfElement);
  }

  export declare class Handle_MoniTool_HSequenceOfElement_3 extends Handle_MoniTool_HSequenceOfElement {
    constructor(theHandle: Handle_MoniTool_HSequenceOfElement);
  }

  export declare class Handle_MoniTool_HSequenceOfElement_4 extends Handle_MoniTool_HSequenceOfElement {
    constructor(theHandle: Handle_MoniTool_HSequenceOfElement);
  }

export declare class Handle_MoniTool_IntVal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_IntVal): void;
  get(): MoniTool_IntVal;
}

  export declare class Handle_MoniTool_IntVal_1 extends Handle_MoniTool_IntVal {
    constructor();
  }

  export declare class Handle_MoniTool_IntVal_2 extends Handle_MoniTool_IntVal {
    constructor(thePtr: MoniTool_IntVal);
  }

  export declare class Handle_MoniTool_IntVal_3 extends Handle_MoniTool_IntVal {
    constructor(theHandle: Handle_MoniTool_IntVal);
  }

  export declare class Handle_MoniTool_IntVal_4 extends Handle_MoniTool_IntVal {
    constructor(theHandle: Handle_MoniTool_IntVal);
  }

export declare class Handle_MoniTool_RealVal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_RealVal): void;
  get(): MoniTool_RealVal;
}

  export declare class Handle_MoniTool_RealVal_1 extends Handle_MoniTool_RealVal {
    constructor();
  }

  export declare class Handle_MoniTool_RealVal_2 extends Handle_MoniTool_RealVal {
    constructor(thePtr: MoniTool_RealVal);
  }

  export declare class Handle_MoniTool_RealVal_3 extends Handle_MoniTool_RealVal {
    constructor(theHandle: Handle_MoniTool_RealVal);
  }

  export declare class Handle_MoniTool_RealVal_4 extends Handle_MoniTool_RealVal {
    constructor(theHandle: Handle_MoniTool_RealVal);
  }

export declare class Handle_MoniTool_SignShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_SignShape): void;
  get(): MoniTool_SignShape;
}

  export declare class Handle_MoniTool_SignShape_1 extends Handle_MoniTool_SignShape {
    constructor();
  }

  export declare class Handle_MoniTool_SignShape_2 extends Handle_MoniTool_SignShape {
    constructor(thePtr: MoniTool_SignShape);
  }

  export declare class Handle_MoniTool_SignShape_3 extends Handle_MoniTool_SignShape {
    constructor(theHandle: Handle_MoniTool_SignShape);
  }

  export declare class Handle_MoniTool_SignShape_4 extends Handle_MoniTool_SignShape {
    constructor(theHandle: Handle_MoniTool_SignShape);
  }

export declare class Handle_MoniTool_Timer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_Timer): void;
  get(): MoniTool_Timer;
}

  export declare class Handle_MoniTool_Timer_1 extends Handle_MoniTool_Timer {
    constructor();
  }

  export declare class Handle_MoniTool_Timer_2 extends Handle_MoniTool_Timer {
    constructor(thePtr: MoniTool_Timer);
  }

  export declare class Handle_MoniTool_Timer_3 extends Handle_MoniTool_Timer {
    constructor(theHandle: Handle_MoniTool_Timer);
  }

  export declare class Handle_MoniTool_Timer_4 extends Handle_MoniTool_Timer {
    constructor(theHandle: Handle_MoniTool_Timer);
  }

export declare class Handle_MoniTool_TransientElem {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_TransientElem): void;
  get(): MoniTool_TransientElem;
}

  export declare class Handle_MoniTool_TransientElem_1 extends Handle_MoniTool_TransientElem {
    constructor();
  }

  export declare class Handle_MoniTool_TransientElem_2 extends Handle_MoniTool_TransientElem {
    constructor(thePtr: MoniTool_TransientElem);
  }

  export declare class Handle_MoniTool_TransientElem_3 extends Handle_MoniTool_TransientElem {
    constructor(theHandle: Handle_MoniTool_TransientElem);
  }

  export declare class Handle_MoniTool_TransientElem_4 extends Handle_MoniTool_TransientElem {
    constructor(theHandle: Handle_MoniTool_TransientElem);
  }

export declare class Handle_StepData_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_GeneralModule): void;
  get(): StepData_GeneralModule;
}

  export declare class Handle_StepData_GeneralModule_1 extends Handle_StepData_GeneralModule {
    constructor();
  }

  export declare class Handle_StepData_GeneralModule_2 extends Handle_StepData_GeneralModule {
    constructor(thePtr: StepData_GeneralModule);
  }

  export declare class Handle_StepData_GeneralModule_3 extends Handle_StepData_GeneralModule {
    constructor(theHandle: Handle_StepData_GeneralModule);
  }

  export declare class Handle_StepData_GeneralModule_4 extends Handle_StepData_GeneralModule {
    constructor(theHandle: Handle_StepData_GeneralModule);
  }

export declare class Handle_RWHeaderSection_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: RWHeaderSection_GeneralModule): void;
  get(): RWHeaderSection_GeneralModule;
}

  export declare class Handle_RWHeaderSection_GeneralModule_1 extends Handle_RWHeaderSection_GeneralModule {
    constructor();
  }

  export declare class Handle_RWHeaderSection_GeneralModule_2 extends Handle_RWHeaderSection_GeneralModule {
    constructor(thePtr: RWHeaderSection_GeneralModule);
  }

  export declare class Handle_RWHeaderSection_GeneralModule_3 extends Handle_RWHeaderSection_GeneralModule {
    constructor(theHandle: Handle_RWHeaderSection_GeneralModule);
  }

  export declare class Handle_RWHeaderSection_GeneralModule_4 extends Handle_RWHeaderSection_GeneralModule {
    constructor(theHandle: Handle_RWHeaderSection_GeneralModule);
  }

export declare class Handle_StepData_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_ReadWriteModule): void;
  get(): StepData_ReadWriteModule;
}

  export declare class Handle_StepData_ReadWriteModule_1 extends Handle_StepData_ReadWriteModule {
    constructor();
  }

  export declare class Handle_StepData_ReadWriteModule_2 extends Handle_StepData_ReadWriteModule {
    constructor(thePtr: StepData_ReadWriteModule);
  }

  export declare class Handle_StepData_ReadWriteModule_3 extends Handle_StepData_ReadWriteModule {
    constructor(theHandle: Handle_StepData_ReadWriteModule);
  }

  export declare class Handle_StepData_ReadWriteModule_4 extends Handle_StepData_ReadWriteModule {
    constructor(theHandle: Handle_StepData_ReadWriteModule);
  }

export declare class Handle_RWHeaderSection_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: RWHeaderSection_ReadWriteModule): void;
  get(): RWHeaderSection_ReadWriteModule;
}

  export declare class Handle_RWHeaderSection_ReadWriteModule_1 extends Handle_RWHeaderSection_ReadWriteModule {
    constructor();
  }

  export declare class Handle_RWHeaderSection_ReadWriteModule_2 extends Handle_RWHeaderSection_ReadWriteModule {
    constructor(thePtr: RWHeaderSection_ReadWriteModule);
  }

  export declare class Handle_RWHeaderSection_ReadWriteModule_3 extends Handle_RWHeaderSection_ReadWriteModule {
    constructor(theHandle: Handle_RWHeaderSection_ReadWriteModule);
  }

  export declare class Handle_RWHeaderSection_ReadWriteModule_4 extends Handle_RWHeaderSection_ReadWriteModule {
    constructor(theHandle: Handle_RWHeaderSection_ReadWriteModule);
  }

export declare class Handle_StepData_StepReaderData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_StepReaderData): void;
  get(): StepData_StepReaderData;
}

  export declare class Handle_StepData_StepReaderData_1 extends Handle_StepData_StepReaderData {
    constructor();
  }

  export declare class Handle_StepData_StepReaderData_2 extends Handle_StepData_StepReaderData {
    constructor(thePtr: StepData_StepReaderData);
  }

  export declare class Handle_StepData_StepReaderData_3 extends Handle_StepData_StepReaderData {
    constructor(theHandle: Handle_StepData_StepReaderData);
  }

  export declare class Handle_StepData_StepReaderData_4 extends Handle_StepData_StepReaderData {
    constructor(theHandle: Handle_StepData_StepReaderData);
  }

export declare class Handle_Transfer_ProcessForFinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ProcessForFinder): void;
  get(): Transfer_ProcessForFinder;
}

  export declare class Handle_Transfer_ProcessForFinder_1 extends Handle_Transfer_ProcessForFinder {
    constructor();
  }

  export declare class Handle_Transfer_ProcessForFinder_2 extends Handle_Transfer_ProcessForFinder {
    constructor(thePtr: Transfer_ProcessForFinder);
  }

  export declare class Handle_Transfer_ProcessForFinder_3 extends Handle_Transfer_ProcessForFinder {
    constructor(theHandle: Handle_Transfer_ProcessForFinder);
  }

  export declare class Handle_Transfer_ProcessForFinder_4 extends Handle_Transfer_ProcessForFinder {
    constructor(theHandle: Handle_Transfer_ProcessForFinder);
  }

export declare class Handle_Transfer_FinderProcess {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_FinderProcess): void;
  get(): Transfer_FinderProcess;
}

  export declare class Handle_Transfer_FinderProcess_1 extends Handle_Transfer_FinderProcess {
    constructor();
  }

  export declare class Handle_Transfer_FinderProcess_2 extends Handle_Transfer_FinderProcess {
    constructor(thePtr: Transfer_FinderProcess);
  }

  export declare class Handle_Transfer_FinderProcess_3 extends Handle_Transfer_FinderProcess {
    constructor(theHandle: Handle_Transfer_FinderProcess);
  }

  export declare class Handle_Transfer_FinderProcess_4 extends Handle_Transfer_FinderProcess {
    constructor(theHandle: Handle_Transfer_FinderProcess);
  }

export declare class Handle_XSControl_TransferWriter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_TransferWriter): void;
  get(): XSControl_TransferWriter;
}

  export declare class Handle_XSControl_TransferWriter_1 extends Handle_XSControl_TransferWriter {
    constructor();
  }

  export declare class Handle_XSControl_TransferWriter_2 extends Handle_XSControl_TransferWriter {
    constructor(thePtr: XSControl_TransferWriter);
  }

  export declare class Handle_XSControl_TransferWriter_3 extends Handle_XSControl_TransferWriter {
    constructor(theHandle: Handle_XSControl_TransferWriter);
  }

  export declare class Handle_XSControl_TransferWriter_4 extends Handle_XSControl_TransferWriter {
    constructor(theHandle: Handle_XSControl_TransferWriter);
  }

export declare class Handle_XSControl_WorkSession {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_WorkSession): void;
  get(): XSControl_WorkSession;
}

  export declare class Handle_XSControl_WorkSession_1 extends Handle_XSControl_WorkSession {
    constructor();
  }

  export declare class Handle_XSControl_WorkSession_2 extends Handle_XSControl_WorkSession {
    constructor(thePtr: XSControl_WorkSession);
  }

  export declare class Handle_XSControl_WorkSession_3 extends Handle_XSControl_WorkSession {
    constructor(theHandle: Handle_XSControl_WorkSession);
  }

  export declare class Handle_XSControl_WorkSession_4 extends Handle_XSControl_WorkSession {
    constructor(theHandle: Handle_XSControl_WorkSession);
  }

export declare class Handle_StepData_SelectMember {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_SelectMember): void;
  get(): StepData_SelectMember;
}

  export declare class Handle_StepData_SelectMember_1 extends Handle_StepData_SelectMember {
    constructor();
  }

  export declare class Handle_StepData_SelectMember_2 extends Handle_StepData_SelectMember {
    constructor(thePtr: StepData_SelectMember);
  }

  export declare class Handle_StepData_SelectMember_3 extends Handle_StepData_SelectMember {
    constructor(theHandle: Handle_StepData_SelectMember);
  }

  export declare class Handle_StepData_SelectMember_4 extends Handle_StepData_SelectMember {
    constructor(theHandle: Handle_StepData_SelectMember);
  }

export declare class Handle_StepData_SelectInt {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_SelectInt): void;
  get(): StepData_SelectInt;
}

  export declare class Handle_StepData_SelectInt_1 extends Handle_StepData_SelectInt {
    constructor();
  }

  export declare class Handle_StepData_SelectInt_2 extends Handle_StepData_SelectInt {
    constructor(thePtr: StepData_SelectInt);
  }

  export declare class Handle_StepData_SelectInt_3 extends Handle_StepData_SelectInt {
    constructor(theHandle: Handle_StepData_SelectInt);
  }

  export declare class Handle_StepData_SelectInt_4 extends Handle_StepData_SelectInt {
    constructor(theHandle: Handle_StepData_SelectInt);
  }

export declare class Handle_StepSelect_StepType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepSelect_StepType): void;
  get(): StepSelect_StepType;
}

  export declare class Handle_StepSelect_StepType_1 extends Handle_StepSelect_StepType {
    constructor();
  }

  export declare class Handle_StepSelect_StepType_2 extends Handle_StepSelect_StepType {
    constructor(thePtr: StepSelect_StepType);
  }

  export declare class Handle_StepSelect_StepType_3 extends Handle_StepSelect_StepType {
    constructor(theHandle: Handle_StepSelect_StepType);
  }

  export declare class Handle_StepSelect_StepType_4 extends Handle_StepSelect_StepType {
    constructor(theHandle: Handle_StepSelect_StepType);
  }

export declare class Handle_XSControl_SelectForTransfer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_SelectForTransfer): void;
  get(): XSControl_SelectForTransfer;
}

  export declare class Handle_XSControl_SelectForTransfer_1 extends Handle_XSControl_SelectForTransfer {
    constructor();
  }

  export declare class Handle_XSControl_SelectForTransfer_2 extends Handle_XSControl_SelectForTransfer {
    constructor(thePtr: XSControl_SelectForTransfer);
  }

  export declare class Handle_XSControl_SelectForTransfer_3 extends Handle_XSControl_SelectForTransfer {
    constructor(theHandle: Handle_XSControl_SelectForTransfer);
  }

  export declare class Handle_XSControl_SelectForTransfer_4 extends Handle_XSControl_SelectForTransfer {
    constructor(theHandle: Handle_XSControl_SelectForTransfer);
  }

export declare class Handle_StepData_SelectReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_SelectReal): void;
  get(): StepData_SelectReal;
}

  export declare class Handle_StepData_SelectReal_1 extends Handle_StepData_SelectReal {
    constructor();
  }

  export declare class Handle_StepData_SelectReal_2 extends Handle_StepData_SelectReal {
    constructor(thePtr: StepData_SelectReal);
  }

  export declare class Handle_StepData_SelectReal_3 extends Handle_StepData_SelectReal {
    constructor(theHandle: Handle_StepData_SelectReal);
  }

  export declare class Handle_StepData_SelectReal_4 extends Handle_StepData_SelectReal {
    constructor(theHandle: Handle_StepData_SelectReal);
  }

export declare class StepData_Array1OfField {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: StepData_Field): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: StepData_Array1OfField): StepData_Array1OfField;
  Move(theOther: StepData_Array1OfField): StepData_Array1OfField;
  First(): StepData_Field;
  ChangeFirst(): StepData_Field;
  Last(): StepData_Field;
  ChangeLast(): StepData_Field;
  Value(theIndex: Standard_Integer): StepData_Field;
  ChangeValue(theIndex: Standard_Integer): StepData_Field;
  SetValue(theIndex: Standard_Integer, theItem: StepData_Field): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class StepData_Array1OfField_1 extends StepData_Array1OfField {
    constructor();
  }

  export declare class StepData_Array1OfField_2 extends StepData_Array1OfField {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class StepData_Array1OfField_3 extends StepData_Array1OfField {
    constructor(theOther: StepData_Array1OfField);
  }

  export declare class StepData_Array1OfField_4 extends StepData_Array1OfField {
    constructor(theOther: StepData_Array1OfField);
  }

  export declare class StepData_Array1OfField_5 extends StepData_Array1OfField {
    constructor(theBegin: StepData_Field, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_StepData_DefaultGeneral {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_DefaultGeneral): void;
  get(): StepData_DefaultGeneral;
}

  export declare class Handle_StepData_DefaultGeneral_1 extends Handle_StepData_DefaultGeneral {
    constructor();
  }

  export declare class Handle_StepData_DefaultGeneral_2 extends Handle_StepData_DefaultGeneral {
    constructor(thePtr: StepData_DefaultGeneral);
  }

  export declare class Handle_StepData_DefaultGeneral_3 extends Handle_StepData_DefaultGeneral {
    constructor(theHandle: Handle_StepData_DefaultGeneral);
  }

  export declare class Handle_StepData_DefaultGeneral_4 extends Handle_StepData_DefaultGeneral {
    constructor(theHandle: Handle_StepData_DefaultGeneral);
  }

export declare class Handle_StepData_Described {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_Described): void;
  get(): StepData_Described;
}

  export declare class Handle_StepData_Described_1 extends Handle_StepData_Described {
    constructor();
  }

  export declare class Handle_StepData_Described_2 extends Handle_StepData_Described {
    constructor(thePtr: StepData_Described);
  }

  export declare class Handle_StepData_Described_3 extends Handle_StepData_Described {
    constructor(theHandle: Handle_StepData_Described);
  }

  export declare class Handle_StepData_Described_4 extends Handle_StepData_Described {
    constructor(theHandle: Handle_StepData_Described);
  }

export declare class Handle_StepData_EDescr {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_EDescr): void;
  get(): StepData_EDescr;
}

  export declare class Handle_StepData_EDescr_1 extends Handle_StepData_EDescr {
    constructor();
  }

  export declare class Handle_StepData_EDescr_2 extends Handle_StepData_EDescr {
    constructor(thePtr: StepData_EDescr);
  }

  export declare class Handle_StepData_EDescr_3 extends Handle_StepData_EDescr {
    constructor(theHandle: Handle_StepData_EDescr);
  }

  export declare class Handle_StepData_EDescr_4 extends Handle_StepData_EDescr {
    constructor(theHandle: Handle_StepData_EDescr);
  }

export declare class Handle_StepData_ECDescr {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_ECDescr): void;
  get(): StepData_ECDescr;
}

  export declare class Handle_StepData_ECDescr_1 extends Handle_StepData_ECDescr {
    constructor();
  }

  export declare class Handle_StepData_ECDescr_2 extends Handle_StepData_ECDescr {
    constructor(thePtr: StepData_ECDescr);
  }

  export declare class Handle_StepData_ECDescr_3 extends Handle_StepData_ECDescr {
    constructor(theHandle: Handle_StepData_ECDescr);
  }

  export declare class Handle_StepData_ECDescr_4 extends Handle_StepData_ECDescr {
    constructor(theHandle: Handle_StepData_ECDescr);
  }

export declare class Handle_StepData_ESDescr {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_ESDescr): void;
  get(): StepData_ESDescr;
}

  export declare class Handle_StepData_ESDescr_1 extends Handle_StepData_ESDescr {
    constructor();
  }

  export declare class Handle_StepData_ESDescr_2 extends Handle_StepData_ESDescr {
    constructor(thePtr: StepData_ESDescr);
  }

  export declare class Handle_StepData_ESDescr_3 extends Handle_StepData_ESDescr {
    constructor(theHandle: Handle_StepData_ESDescr);
  }

  export declare class Handle_StepData_ESDescr_4 extends Handle_StepData_ESDescr {
    constructor(theHandle: Handle_StepData_ESDescr);
  }

export declare class Handle_StepData_HArray1OfField {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_HArray1OfField): void;
  get(): StepData_HArray1OfField;
}

  export declare class Handle_StepData_HArray1OfField_1 extends Handle_StepData_HArray1OfField {
    constructor();
  }

  export declare class Handle_StepData_HArray1OfField_2 extends Handle_StepData_HArray1OfField {
    constructor(thePtr: StepData_HArray1OfField);
  }

  export declare class Handle_StepData_HArray1OfField_3 extends Handle_StepData_HArray1OfField {
    constructor(theHandle: Handle_StepData_HArray1OfField);
  }

  export declare class Handle_StepData_HArray1OfField_4 extends Handle_StepData_HArray1OfField {
    constructor(theHandle: Handle_StepData_HArray1OfField);
  }

export declare class Handle_StepData_FileProtocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_FileProtocol): void;
  get(): StepData_FileProtocol;
}

  export declare class Handle_StepData_FileProtocol_1 extends Handle_StepData_FileProtocol {
    constructor();
  }

  export declare class Handle_StepData_FileProtocol_2 extends Handle_StepData_FileProtocol {
    constructor(thePtr: StepData_FileProtocol);
  }

  export declare class Handle_StepData_FileProtocol_3 extends Handle_StepData_FileProtocol {
    constructor(theHandle: Handle_StepData_FileProtocol);
  }

  export declare class Handle_StepData_FileProtocol_4 extends Handle_StepData_FileProtocol {
    constructor(theHandle: Handle_StepData_FileProtocol);
  }

export declare class Handle_StepData_FileRecognizer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_FileRecognizer): void;
  get(): StepData_FileRecognizer;
}

  export declare class Handle_StepData_FileRecognizer_1 extends Handle_StepData_FileRecognizer {
    constructor();
  }

  export declare class Handle_StepData_FileRecognizer_2 extends Handle_StepData_FileRecognizer {
    constructor(thePtr: StepData_FileRecognizer);
  }

  export declare class Handle_StepData_FileRecognizer_3 extends Handle_StepData_FileRecognizer {
    constructor(theHandle: Handle_StepData_FileRecognizer);
  }

  export declare class Handle_StepData_FileRecognizer_4 extends Handle_StepData_FileRecognizer {
    constructor(theHandle: Handle_StepData_FileRecognizer);
  }

export declare class Handle_StepData_FreeFormEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_FreeFormEntity): void;
  get(): StepData_FreeFormEntity;
}

  export declare class Handle_StepData_FreeFormEntity_1 extends Handle_StepData_FreeFormEntity {
    constructor();
  }

  export declare class Handle_StepData_FreeFormEntity_2 extends Handle_StepData_FreeFormEntity {
    constructor(thePtr: StepData_FreeFormEntity);
  }

  export declare class Handle_StepData_FreeFormEntity_3 extends Handle_StepData_FreeFormEntity {
    constructor(theHandle: Handle_StepData_FreeFormEntity);
  }

  export declare class Handle_StepData_FreeFormEntity_4 extends Handle_StepData_FreeFormEntity {
    constructor(theHandle: Handle_StepData_FreeFormEntity);
  }

export declare class Handle_StepData_GlobalNodeOfWriterLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_GlobalNodeOfWriterLib): void;
  get(): StepData_GlobalNodeOfWriterLib;
}

  export declare class Handle_StepData_GlobalNodeOfWriterLib_1 extends Handle_StepData_GlobalNodeOfWriterLib {
    constructor();
  }

  export declare class Handle_StepData_GlobalNodeOfWriterLib_2 extends Handle_StepData_GlobalNodeOfWriterLib {
    constructor(thePtr: StepData_GlobalNodeOfWriterLib);
  }

  export declare class Handle_StepData_GlobalNodeOfWriterLib_3 extends Handle_StepData_GlobalNodeOfWriterLib {
    constructor(theHandle: Handle_StepData_GlobalNodeOfWriterLib);
  }

  export declare class Handle_StepData_GlobalNodeOfWriterLib_4 extends Handle_StepData_GlobalNodeOfWriterLib {
    constructor(theHandle: Handle_StepData_GlobalNodeOfWriterLib);
  }

export declare class Handle_StepData_NodeOfWriterLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_NodeOfWriterLib): void;
  get(): StepData_NodeOfWriterLib;
}

  export declare class Handle_StepData_NodeOfWriterLib_1 extends Handle_StepData_NodeOfWriterLib {
    constructor();
  }

  export declare class Handle_StepData_NodeOfWriterLib_2 extends Handle_StepData_NodeOfWriterLib {
    constructor(thePtr: StepData_NodeOfWriterLib);
  }

  export declare class Handle_StepData_NodeOfWriterLib_3 extends Handle_StepData_NodeOfWriterLib {
    constructor(theHandle: Handle_StepData_NodeOfWriterLib);
  }

  export declare class Handle_StepData_NodeOfWriterLib_4 extends Handle_StepData_NodeOfWriterLib {
    constructor(theHandle: Handle_StepData_NodeOfWriterLib);
  }

export declare class Handle_StepData_PDescr {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_PDescr): void;
  get(): StepData_PDescr;
}

  export declare class Handle_StepData_PDescr_1 extends Handle_StepData_PDescr {
    constructor();
  }

  export declare class Handle_StepData_PDescr_2 extends Handle_StepData_PDescr {
    constructor(thePtr: StepData_PDescr);
  }

  export declare class Handle_StepData_PDescr_3 extends Handle_StepData_PDescr {
    constructor(theHandle: Handle_StepData_PDescr);
  }

  export declare class Handle_StepData_PDescr_4 extends Handle_StepData_PDescr {
    constructor(theHandle: Handle_StepData_PDescr);
  }

export declare class Handle_StepData_Plex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_Plex): void;
  get(): StepData_Plex;
}

  export declare class Handle_StepData_Plex_1 extends Handle_StepData_Plex {
    constructor();
  }

  export declare class Handle_StepData_Plex_2 extends Handle_StepData_Plex {
    constructor(thePtr: StepData_Plex);
  }

  export declare class Handle_StepData_Plex_3 extends Handle_StepData_Plex {
    constructor(theHandle: Handle_StepData_Plex);
  }

  export declare class Handle_StepData_Plex_4 extends Handle_StepData_Plex {
    constructor(theHandle: Handle_StepData_Plex);
  }

export declare class Handle_StepData_SelectNamed {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_SelectNamed): void;
  get(): StepData_SelectNamed;
}

  export declare class Handle_StepData_SelectNamed_1 extends Handle_StepData_SelectNamed {
    constructor();
  }

  export declare class Handle_StepData_SelectNamed_2 extends Handle_StepData_SelectNamed {
    constructor(thePtr: StepData_SelectNamed);
  }

  export declare class Handle_StepData_SelectNamed_3 extends Handle_StepData_SelectNamed {
    constructor(theHandle: Handle_StepData_SelectNamed);
  }

  export declare class Handle_StepData_SelectNamed_4 extends Handle_StepData_SelectNamed {
    constructor(theHandle: Handle_StepData_SelectNamed);
  }

export declare class Handle_StepData_SelectArrReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_SelectArrReal): void;
  get(): StepData_SelectArrReal;
}

  export declare class Handle_StepData_SelectArrReal_1 extends Handle_StepData_SelectArrReal {
    constructor();
  }

  export declare class Handle_StepData_SelectArrReal_2 extends Handle_StepData_SelectArrReal {
    constructor(thePtr: StepData_SelectArrReal);
  }

  export declare class Handle_StepData_SelectArrReal_3 extends Handle_StepData_SelectArrReal {
    constructor(theHandle: Handle_StepData_SelectArrReal);
  }

  export declare class Handle_StepData_SelectArrReal_4 extends Handle_StepData_SelectArrReal {
    constructor(theHandle: Handle_StepData_SelectArrReal);
  }

export declare class Handle_StepData_Simple {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_Simple): void;
  get(): StepData_Simple;
}

  export declare class Handle_StepData_Simple_1 extends Handle_StepData_Simple {
    constructor();
  }

  export declare class Handle_StepData_Simple_2 extends Handle_StepData_Simple {
    constructor(thePtr: StepData_Simple);
  }

  export declare class Handle_StepData_Simple_3 extends Handle_StepData_Simple {
    constructor(theHandle: Handle_StepData_Simple);
  }

  export declare class Handle_StepData_Simple_4 extends Handle_StepData_Simple {
    constructor(theHandle: Handle_StepData_Simple);
  }

export declare class Handle_StepData_StepModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_StepModel): void;
  get(): StepData_StepModel;
}

  export declare class Handle_StepData_StepModel_1 extends Handle_StepData_StepModel {
    constructor();
  }

  export declare class Handle_StepData_StepModel_2 extends Handle_StepData_StepModel {
    constructor(thePtr: StepData_StepModel);
  }

  export declare class Handle_StepData_StepModel_3 extends Handle_StepData_StepModel {
    constructor(theHandle: Handle_StepData_StepModel);
  }

  export declare class Handle_StepData_StepModel_4 extends Handle_StepData_StepModel {
    constructor(theHandle: Handle_StepData_StepModel);
  }

export declare class Handle_StepData_UndefinedEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepData_UndefinedEntity): void;
  get(): StepData_UndefinedEntity;
}

  export declare class Handle_StepData_UndefinedEntity_1 extends Handle_StepData_UndefinedEntity {
    constructor();
  }

  export declare class Handle_StepData_UndefinedEntity_2 extends Handle_StepData_UndefinedEntity {
    constructor(thePtr: StepData_UndefinedEntity);
  }

  export declare class Handle_StepData_UndefinedEntity_3 extends Handle_StepData_UndefinedEntity {
    constructor(theHandle: Handle_StepData_UndefinedEntity);
  }

  export declare class Handle_StepData_UndefinedEntity_4 extends Handle_StepData_UndefinedEntity {
    constructor(theHandle: Handle_StepData_UndefinedEntity);
  }

export declare class Handle_StepSelect_Activator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepSelect_Activator): void;
  get(): StepSelect_Activator;
}

  export declare class Handle_StepSelect_Activator_1 extends Handle_StepSelect_Activator {
    constructor();
  }

  export declare class Handle_StepSelect_Activator_2 extends Handle_StepSelect_Activator {
    constructor(thePtr: StepSelect_Activator);
  }

  export declare class Handle_StepSelect_Activator_3 extends Handle_StepSelect_Activator {
    constructor(theHandle: Handle_StepSelect_Activator);
  }

  export declare class Handle_StepSelect_Activator_4 extends Handle_StepSelect_Activator {
    constructor(theHandle: Handle_StepSelect_Activator);
  }

export declare class Handle_StepSelect_FileModifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepSelect_FileModifier): void;
  get(): StepSelect_FileModifier;
}

  export declare class Handle_StepSelect_FileModifier_1 extends Handle_StepSelect_FileModifier {
    constructor();
  }

  export declare class Handle_StepSelect_FileModifier_2 extends Handle_StepSelect_FileModifier {
    constructor(thePtr: StepSelect_FileModifier);
  }

  export declare class Handle_StepSelect_FileModifier_3 extends Handle_StepSelect_FileModifier {
    constructor(theHandle: Handle_StepSelect_FileModifier);
  }

  export declare class Handle_StepSelect_FileModifier_4 extends Handle_StepSelect_FileModifier {
    constructor(theHandle: Handle_StepSelect_FileModifier);
  }

export declare class Handle_StepSelect_FloatFormat {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepSelect_FloatFormat): void;
  get(): StepSelect_FloatFormat;
}

  export declare class Handle_StepSelect_FloatFormat_1 extends Handle_StepSelect_FloatFormat {
    constructor();
  }

  export declare class Handle_StepSelect_FloatFormat_2 extends Handle_StepSelect_FloatFormat {
    constructor(thePtr: StepSelect_FloatFormat);
  }

  export declare class Handle_StepSelect_FloatFormat_3 extends Handle_StepSelect_FloatFormat {
    constructor(theHandle: Handle_StepSelect_FloatFormat);
  }

  export declare class Handle_StepSelect_FloatFormat_4 extends Handle_StepSelect_FloatFormat {
    constructor(theHandle: Handle_StepSelect_FloatFormat);
  }

export declare class Handle_StepSelect_ModelModifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepSelect_ModelModifier): void;
  get(): StepSelect_ModelModifier;
}

  export declare class Handle_StepSelect_ModelModifier_1 extends Handle_StepSelect_ModelModifier {
    constructor();
  }

  export declare class Handle_StepSelect_ModelModifier_2 extends Handle_StepSelect_ModelModifier {
    constructor(thePtr: StepSelect_ModelModifier);
  }

  export declare class Handle_StepSelect_ModelModifier_3 extends Handle_StepSelect_ModelModifier {
    constructor(theHandle: Handle_StepSelect_ModelModifier);
  }

  export declare class Handle_StepSelect_ModelModifier_4 extends Handle_StepSelect_ModelModifier {
    constructor(theHandle: Handle_StepSelect_ModelModifier);
  }

export declare class Handle_StepSelect_WorkLibrary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StepSelect_WorkLibrary): void;
  get(): StepSelect_WorkLibrary;
}

  export declare class Handle_StepSelect_WorkLibrary_1 extends Handle_StepSelect_WorkLibrary {
    constructor();
  }

  export declare class Handle_StepSelect_WorkLibrary_2 extends Handle_StepSelect_WorkLibrary {
    constructor(thePtr: StepSelect_WorkLibrary);
  }

  export declare class Handle_StepSelect_WorkLibrary_3 extends Handle_StepSelect_WorkLibrary {
    constructor(theHandle: Handle_StepSelect_WorkLibrary);
  }

  export declare class Handle_StepSelect_WorkLibrary_4 extends Handle_StepSelect_WorkLibrary {
    constructor(theHandle: Handle_StepSelect_WorkLibrary);
  }

export declare class Handle_Transfer_ActorDispatch {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ActorDispatch): void;
  get(): Transfer_ActorDispatch;
}

  export declare class Handle_Transfer_ActorDispatch_1 extends Handle_Transfer_ActorDispatch {
    constructor();
  }

  export declare class Handle_Transfer_ActorDispatch_2 extends Handle_Transfer_ActorDispatch {
    constructor(thePtr: Transfer_ActorDispatch);
  }

  export declare class Handle_Transfer_ActorDispatch_3 extends Handle_Transfer_ActorDispatch {
    constructor(theHandle: Handle_Transfer_ActorDispatch);
  }

  export declare class Handle_Transfer_ActorDispatch_4 extends Handle_Transfer_ActorDispatch {
    constructor(theHandle: Handle_Transfer_ActorDispatch);
  }

export declare class Handle_Transfer_SimpleBinderOfTransient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_SimpleBinderOfTransient): void;
  get(): Transfer_SimpleBinderOfTransient;
}

  export declare class Handle_Transfer_SimpleBinderOfTransient_1 extends Handle_Transfer_SimpleBinderOfTransient {
    constructor();
  }

  export declare class Handle_Transfer_SimpleBinderOfTransient_2 extends Handle_Transfer_SimpleBinderOfTransient {
    constructor(thePtr: Transfer_SimpleBinderOfTransient);
  }

  export declare class Handle_Transfer_SimpleBinderOfTransient_3 extends Handle_Transfer_SimpleBinderOfTransient {
    constructor(theHandle: Handle_Transfer_SimpleBinderOfTransient);
  }

  export declare class Handle_Transfer_SimpleBinderOfTransient_4 extends Handle_Transfer_SimpleBinderOfTransient {
    constructor(theHandle: Handle_Transfer_SimpleBinderOfTransient);
  }

export declare class Handle_Transfer_BinderOfTransientInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_BinderOfTransientInteger): void;
  get(): Transfer_BinderOfTransientInteger;
}

  export declare class Handle_Transfer_BinderOfTransientInteger_1 extends Handle_Transfer_BinderOfTransientInteger {
    constructor();
  }

  export declare class Handle_Transfer_BinderOfTransientInteger_2 extends Handle_Transfer_BinderOfTransientInteger {
    constructor(thePtr: Transfer_BinderOfTransientInteger);
  }

  export declare class Handle_Transfer_BinderOfTransientInteger_3 extends Handle_Transfer_BinderOfTransientInteger {
    constructor(theHandle: Handle_Transfer_BinderOfTransientInteger);
  }

  export declare class Handle_Transfer_BinderOfTransientInteger_4 extends Handle_Transfer_BinderOfTransientInteger {
    constructor(theHandle: Handle_Transfer_BinderOfTransientInteger);
  }

export declare class Handle_Transfer_DispatchControl {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_DispatchControl): void;
  get(): Transfer_DispatchControl;
}

  export declare class Handle_Transfer_DispatchControl_1 extends Handle_Transfer_DispatchControl {
    constructor();
  }

  export declare class Handle_Transfer_DispatchControl_2 extends Handle_Transfer_DispatchControl {
    constructor(thePtr: Transfer_DispatchControl);
  }

  export declare class Handle_Transfer_DispatchControl_3 extends Handle_Transfer_DispatchControl {
    constructor(theHandle: Handle_Transfer_DispatchControl);
  }

  export declare class Handle_Transfer_DispatchControl_4 extends Handle_Transfer_DispatchControl {
    constructor(theHandle: Handle_Transfer_DispatchControl);
  }

export declare class Handle_Transfer_HSequenceOfBinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_HSequenceOfBinder): void;
  get(): Transfer_HSequenceOfBinder;
}

  export declare class Handle_Transfer_HSequenceOfBinder_1 extends Handle_Transfer_HSequenceOfBinder {
    constructor();
  }

  export declare class Handle_Transfer_HSequenceOfBinder_2 extends Handle_Transfer_HSequenceOfBinder {
    constructor(thePtr: Transfer_HSequenceOfBinder);
  }

  export declare class Handle_Transfer_HSequenceOfBinder_3 extends Handle_Transfer_HSequenceOfBinder {
    constructor(theHandle: Handle_Transfer_HSequenceOfBinder);
  }

  export declare class Handle_Transfer_HSequenceOfBinder_4 extends Handle_Transfer_HSequenceOfBinder {
    constructor(theHandle: Handle_Transfer_HSequenceOfBinder);
  }

export declare class Handle_Transfer_MapContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_MapContainer): void;
  get(): Transfer_MapContainer;
}

  export declare class Handle_Transfer_MapContainer_1 extends Handle_Transfer_MapContainer {
    constructor();
  }

  export declare class Handle_Transfer_MapContainer_2 extends Handle_Transfer_MapContainer {
    constructor(thePtr: Transfer_MapContainer);
  }

  export declare class Handle_Transfer_MapContainer_3 extends Handle_Transfer_MapContainer {
    constructor(theHandle: Handle_Transfer_MapContainer);
  }

  export declare class Handle_Transfer_MapContainer_4 extends Handle_Transfer_MapContainer {
    constructor(theHandle: Handle_Transfer_MapContainer);
  }

export declare class Handle_Transfer_MultipleBinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_MultipleBinder): void;
  get(): Transfer_MultipleBinder;
}

  export declare class Handle_Transfer_MultipleBinder_1 extends Handle_Transfer_MultipleBinder {
    constructor();
  }

  export declare class Handle_Transfer_MultipleBinder_2 extends Handle_Transfer_MultipleBinder {
    constructor(thePtr: Transfer_MultipleBinder);
  }

  export declare class Handle_Transfer_MultipleBinder_3 extends Handle_Transfer_MultipleBinder {
    constructor(theHandle: Handle_Transfer_MultipleBinder);
  }

  export declare class Handle_Transfer_MultipleBinder_4 extends Handle_Transfer_MultipleBinder {
    constructor(theHandle: Handle_Transfer_MultipleBinder);
  }

export declare class Handle_Transfer_ResultFromModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ResultFromModel): void;
  get(): Transfer_ResultFromModel;
}

  export declare class Handle_Transfer_ResultFromModel_1 extends Handle_Transfer_ResultFromModel {
    constructor();
  }

  export declare class Handle_Transfer_ResultFromModel_2 extends Handle_Transfer_ResultFromModel {
    constructor(thePtr: Transfer_ResultFromModel);
  }

  export declare class Handle_Transfer_ResultFromModel_3 extends Handle_Transfer_ResultFromModel {
    constructor(theHandle: Handle_Transfer_ResultFromModel);
  }

  export declare class Handle_Transfer_ResultFromModel_4 extends Handle_Transfer_ResultFromModel {
    constructor(theHandle: Handle_Transfer_ResultFromModel);
  }

export declare class Handle_Transfer_ResultFromTransient {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_ResultFromTransient): void;
  get(): Transfer_ResultFromTransient;
}

  export declare class Handle_Transfer_ResultFromTransient_1 extends Handle_Transfer_ResultFromTransient {
    constructor();
  }

  export declare class Handle_Transfer_ResultFromTransient_2 extends Handle_Transfer_ResultFromTransient {
    constructor(thePtr: Transfer_ResultFromTransient);
  }

  export declare class Handle_Transfer_ResultFromTransient_3 extends Handle_Transfer_ResultFromTransient {
    constructor(theHandle: Handle_Transfer_ResultFromTransient);
  }

  export declare class Handle_Transfer_ResultFromTransient_4 extends Handle_Transfer_ResultFromTransient {
    constructor(theHandle: Handle_Transfer_ResultFromTransient);
  }

export declare class Handle_Transfer_TransferFailure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_TransferFailure): void;
  get(): Transfer_TransferFailure;
}

  export declare class Handle_Transfer_TransferFailure_1 extends Handle_Transfer_TransferFailure {
    constructor();
  }

  export declare class Handle_Transfer_TransferFailure_2 extends Handle_Transfer_TransferFailure {
    constructor(thePtr: Transfer_TransferFailure);
  }

  export declare class Handle_Transfer_TransferFailure_3 extends Handle_Transfer_TransferFailure {
    constructor(theHandle: Handle_Transfer_TransferFailure);
  }

  export declare class Handle_Transfer_TransferFailure_4 extends Handle_Transfer_TransferFailure {
    constructor(theHandle: Handle_Transfer_TransferFailure);
  }

export declare class Handle_Transfer_TransferDeadLoop {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_TransferDeadLoop): void;
  get(): Transfer_TransferDeadLoop;
}

  export declare class Handle_Transfer_TransferDeadLoop_1 extends Handle_Transfer_TransferDeadLoop {
    constructor();
  }

  export declare class Handle_Transfer_TransferDeadLoop_2 extends Handle_Transfer_TransferDeadLoop {
    constructor(thePtr: Transfer_TransferDeadLoop);
  }

  export declare class Handle_Transfer_TransferDeadLoop_3 extends Handle_Transfer_TransferDeadLoop {
    constructor(theHandle: Handle_Transfer_TransferDeadLoop);
  }

  export declare class Handle_Transfer_TransferDeadLoop_4 extends Handle_Transfer_TransferDeadLoop {
    constructor(theHandle: Handle_Transfer_TransferDeadLoop);
  }

export declare class Handle_Transfer_TransientListBinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_TransientListBinder): void;
  get(): Transfer_TransientListBinder;
}

  export declare class Handle_Transfer_TransientListBinder_1 extends Handle_Transfer_TransientListBinder {
    constructor();
  }

  export declare class Handle_Transfer_TransientListBinder_2 extends Handle_Transfer_TransientListBinder {
    constructor(thePtr: Transfer_TransientListBinder);
  }

  export declare class Handle_Transfer_TransientListBinder_3 extends Handle_Transfer_TransientListBinder {
    constructor(theHandle: Handle_Transfer_TransientListBinder);
  }

  export declare class Handle_Transfer_TransientListBinder_4 extends Handle_Transfer_TransientListBinder {
    constructor(theHandle: Handle_Transfer_TransientListBinder);
  }

export declare class Handle_Transfer_TransientMapper {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_TransientMapper): void;
  get(): Transfer_TransientMapper;
}

  export declare class Handle_Transfer_TransientMapper_1 extends Handle_Transfer_TransientMapper {
    constructor();
  }

  export declare class Handle_Transfer_TransientMapper_2 extends Handle_Transfer_TransientMapper {
    constructor(thePtr: Transfer_TransientMapper);
  }

  export declare class Handle_Transfer_TransientMapper_3 extends Handle_Transfer_TransientMapper {
    constructor(theHandle: Handle_Transfer_TransientMapper);
  }

  export declare class Handle_Transfer_TransientMapper_4 extends Handle_Transfer_TransientMapper {
    constructor(theHandle: Handle_Transfer_TransientMapper);
  }

export declare class Handle_Transfer_VoidBinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_VoidBinder): void;
  get(): Transfer_VoidBinder;
}

  export declare class Handle_Transfer_VoidBinder_1 extends Handle_Transfer_VoidBinder {
    constructor();
  }

  export declare class Handle_Transfer_VoidBinder_2 extends Handle_Transfer_VoidBinder {
    constructor(thePtr: Transfer_VoidBinder);
  }

  export declare class Handle_Transfer_VoidBinder_3 extends Handle_Transfer_VoidBinder {
    constructor(theHandle: Handle_Transfer_VoidBinder);
  }

  export declare class Handle_Transfer_VoidBinder_4 extends Handle_Transfer_VoidBinder {
    constructor(theHandle: Handle_Transfer_VoidBinder);
  }

export declare class Handle_TransferBRep_TransferResultInfo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TransferBRep_TransferResultInfo): void;
  get(): TransferBRep_TransferResultInfo;
}

  export declare class Handle_TransferBRep_TransferResultInfo_1 extends Handle_TransferBRep_TransferResultInfo {
    constructor();
  }

  export declare class Handle_TransferBRep_TransferResultInfo_2 extends Handle_TransferBRep_TransferResultInfo {
    constructor(thePtr: TransferBRep_TransferResultInfo);
  }

  export declare class Handle_TransferBRep_TransferResultInfo_3 extends Handle_TransferBRep_TransferResultInfo {
    constructor(theHandle: Handle_TransferBRep_TransferResultInfo);
  }

  export declare class Handle_TransferBRep_TransferResultInfo_4 extends Handle_TransferBRep_TransferResultInfo {
    constructor(theHandle: Handle_TransferBRep_TransferResultInfo);
  }

export declare class Handle_TransferBRep_HSequenceOfTransferResultInfo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TransferBRep_HSequenceOfTransferResultInfo): void;
  get(): TransferBRep_HSequenceOfTransferResultInfo;
}

  export declare class Handle_TransferBRep_HSequenceOfTransferResultInfo_1 extends Handle_TransferBRep_HSequenceOfTransferResultInfo {
    constructor();
  }

  export declare class Handle_TransferBRep_HSequenceOfTransferResultInfo_2 extends Handle_TransferBRep_HSequenceOfTransferResultInfo {
    constructor(thePtr: TransferBRep_HSequenceOfTransferResultInfo);
  }

  export declare class Handle_TransferBRep_HSequenceOfTransferResultInfo_3 extends Handle_TransferBRep_HSequenceOfTransferResultInfo {
    constructor(theHandle: Handle_TransferBRep_HSequenceOfTransferResultInfo);
  }

  export declare class Handle_TransferBRep_HSequenceOfTransferResultInfo_4 extends Handle_TransferBRep_HSequenceOfTransferResultInfo {
    constructor(theHandle: Handle_TransferBRep_HSequenceOfTransferResultInfo);
  }

export declare class Handle_TransferBRep_BinderOfShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TransferBRep_BinderOfShape): void;
  get(): TransferBRep_BinderOfShape;
}

  export declare class Handle_TransferBRep_BinderOfShape_1 extends Handle_TransferBRep_BinderOfShape {
    constructor();
  }

  export declare class Handle_TransferBRep_BinderOfShape_2 extends Handle_TransferBRep_BinderOfShape {
    constructor(thePtr: TransferBRep_BinderOfShape);
  }

  export declare class Handle_TransferBRep_BinderOfShape_3 extends Handle_TransferBRep_BinderOfShape {
    constructor(theHandle: Handle_TransferBRep_BinderOfShape);
  }

  export declare class Handle_TransferBRep_BinderOfShape_4 extends Handle_TransferBRep_BinderOfShape {
    constructor(theHandle: Handle_TransferBRep_BinderOfShape);
  }

export declare class Handle_TransferBRep_OrientedShapeMapper {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TransferBRep_OrientedShapeMapper): void;
  get(): TransferBRep_OrientedShapeMapper;
}

  export declare class Handle_TransferBRep_OrientedShapeMapper_1 extends Handle_TransferBRep_OrientedShapeMapper {
    constructor();
  }

  export declare class Handle_TransferBRep_OrientedShapeMapper_2 extends Handle_TransferBRep_OrientedShapeMapper {
    constructor(thePtr: TransferBRep_OrientedShapeMapper);
  }

  export declare class Handle_TransferBRep_OrientedShapeMapper_3 extends Handle_TransferBRep_OrientedShapeMapper {
    constructor(theHandle: Handle_TransferBRep_OrientedShapeMapper);
  }

  export declare class Handle_TransferBRep_OrientedShapeMapper_4 extends Handle_TransferBRep_OrientedShapeMapper {
    constructor(theHandle: Handle_TransferBRep_OrientedShapeMapper);
  }

export declare class Handle_TransferBRep_ShapeBinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TransferBRep_ShapeBinder): void;
  get(): TransferBRep_ShapeBinder;
}

  export declare class Handle_TransferBRep_ShapeBinder_1 extends Handle_TransferBRep_ShapeBinder {
    constructor();
  }

  export declare class Handle_TransferBRep_ShapeBinder_2 extends Handle_TransferBRep_ShapeBinder {
    constructor(thePtr: TransferBRep_ShapeBinder);
  }

  export declare class Handle_TransferBRep_ShapeBinder_3 extends Handle_TransferBRep_ShapeBinder {
    constructor(theHandle: Handle_TransferBRep_ShapeBinder);
  }

  export declare class Handle_TransferBRep_ShapeBinder_4 extends Handle_TransferBRep_ShapeBinder {
    constructor(theHandle: Handle_TransferBRep_ShapeBinder);
  }

export declare class Handle_TransferBRep_ShapeListBinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TransferBRep_ShapeListBinder): void;
  get(): TransferBRep_ShapeListBinder;
}

  export declare class Handle_TransferBRep_ShapeListBinder_1 extends Handle_TransferBRep_ShapeListBinder {
    constructor();
  }

  export declare class Handle_TransferBRep_ShapeListBinder_2 extends Handle_TransferBRep_ShapeListBinder {
    constructor(thePtr: TransferBRep_ShapeListBinder);
  }

  export declare class Handle_TransferBRep_ShapeListBinder_3 extends Handle_TransferBRep_ShapeListBinder {
    constructor(theHandle: Handle_TransferBRep_ShapeListBinder);
  }

  export declare class Handle_TransferBRep_ShapeListBinder_4 extends Handle_TransferBRep_ShapeListBinder {
    constructor(theHandle: Handle_TransferBRep_ShapeListBinder);
  }

export declare class Handle_TransferBRep_ShapeMapper {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TransferBRep_ShapeMapper): void;
  get(): TransferBRep_ShapeMapper;
}

  export declare class Handle_TransferBRep_ShapeMapper_1 extends Handle_TransferBRep_ShapeMapper {
    constructor();
  }

  export declare class Handle_TransferBRep_ShapeMapper_2 extends Handle_TransferBRep_ShapeMapper {
    constructor(thePtr: TransferBRep_ShapeMapper);
  }

  export declare class Handle_TransferBRep_ShapeMapper_3 extends Handle_TransferBRep_ShapeMapper {
    constructor(theHandle: Handle_TransferBRep_ShapeMapper);
  }

  export declare class Handle_TransferBRep_ShapeMapper_4 extends Handle_TransferBRep_ShapeMapper {
    constructor(theHandle: Handle_TransferBRep_ShapeMapper);
  }

export declare class Handle_XSAlgo_AlgoContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSAlgo_AlgoContainer): void;
  get(): XSAlgo_AlgoContainer;
}

  export declare class Handle_XSAlgo_AlgoContainer_1 extends Handle_XSAlgo_AlgoContainer {
    constructor();
  }

  export declare class Handle_XSAlgo_AlgoContainer_2 extends Handle_XSAlgo_AlgoContainer {
    constructor(thePtr: XSAlgo_AlgoContainer);
  }

  export declare class Handle_XSAlgo_AlgoContainer_3 extends Handle_XSAlgo_AlgoContainer {
    constructor(theHandle: Handle_XSAlgo_AlgoContainer);
  }

  export declare class Handle_XSAlgo_AlgoContainer_4 extends Handle_XSAlgo_AlgoContainer {
    constructor(theHandle: Handle_XSAlgo_AlgoContainer);
  }

export declare class Handle_XSAlgo_ToolContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSAlgo_ToolContainer): void;
  get(): XSAlgo_ToolContainer;
}

  export declare class Handle_XSAlgo_ToolContainer_1 extends Handle_XSAlgo_ToolContainer {
    constructor();
  }

  export declare class Handle_XSAlgo_ToolContainer_2 extends Handle_XSAlgo_ToolContainer {
    constructor(thePtr: XSAlgo_ToolContainer);
  }

  export declare class Handle_XSAlgo_ToolContainer_3 extends Handle_XSAlgo_ToolContainer {
    constructor(theHandle: Handle_XSAlgo_ToolContainer);
  }

  export declare class Handle_XSAlgo_ToolContainer_4 extends Handle_XSAlgo_ToolContainer {
    constructor(theHandle: Handle_XSAlgo_ToolContainer);
  }

export declare class Handle_XSControl_ConnectedShapes {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_ConnectedShapes): void;
  get(): XSControl_ConnectedShapes;
}

  export declare class Handle_XSControl_ConnectedShapes_1 extends Handle_XSControl_ConnectedShapes {
    constructor();
  }

  export declare class Handle_XSControl_ConnectedShapes_2 extends Handle_XSControl_ConnectedShapes {
    constructor(thePtr: XSControl_ConnectedShapes);
  }

  export declare class Handle_XSControl_ConnectedShapes_3 extends Handle_XSControl_ConnectedShapes {
    constructor(theHandle: Handle_XSControl_ConnectedShapes);
  }

  export declare class Handle_XSControl_ConnectedShapes_4 extends Handle_XSControl_ConnectedShapes {
    constructor(theHandle: Handle_XSControl_ConnectedShapes);
  }

export declare class Handle_XSControl_SignTransferStatus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_SignTransferStatus): void;
  get(): XSControl_SignTransferStatus;
}

  export declare class Handle_XSControl_SignTransferStatus_1 extends Handle_XSControl_SignTransferStatus {
    constructor();
  }

  export declare class Handle_XSControl_SignTransferStatus_2 extends Handle_XSControl_SignTransferStatus {
    constructor(thePtr: XSControl_SignTransferStatus);
  }

  export declare class Handle_XSControl_SignTransferStatus_3 extends Handle_XSControl_SignTransferStatus {
    constructor(theHandle: Handle_XSControl_SignTransferStatus);
  }

  export declare class Handle_XSControl_SignTransferStatus_4 extends Handle_XSControl_SignTransferStatus {
    constructor(theHandle: Handle_XSControl_SignTransferStatus);
  }

export declare class Handle_XSControl_TransferReader {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_TransferReader): void;
  get(): XSControl_TransferReader;
}

  export declare class Handle_XSControl_TransferReader_1 extends Handle_XSControl_TransferReader {
    constructor();
  }

  export declare class Handle_XSControl_TransferReader_2 extends Handle_XSControl_TransferReader {
    constructor(thePtr: XSControl_TransferReader);
  }

  export declare class Handle_XSControl_TransferReader_3 extends Handle_XSControl_TransferReader {
    constructor(theHandle: Handle_XSControl_TransferReader);
  }

  export declare class Handle_XSControl_TransferReader_4 extends Handle_XSControl_TransferReader {
    constructor(theHandle: Handle_XSControl_TransferReader);
  }

export declare class Handle_XSControl_Vars {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_Vars): void;
  get(): XSControl_Vars;
}

  export declare class Handle_XSControl_Vars_1 extends Handle_XSControl_Vars {
    constructor();
  }

  export declare class Handle_XSControl_Vars_2 extends Handle_XSControl_Vars {
    constructor(thePtr: XSControl_Vars);
  }

  export declare class Handle_XSControl_Vars_3 extends Handle_XSControl_Vars {
    constructor(theHandle: Handle_XSControl_Vars);
  }

  export declare class Handle_XSControl_Vars_4 extends Handle_XSControl_Vars {
    constructor(theHandle: Handle_XSControl_Vars);
  }

export declare type IFSelect_EditValue = {
  IFSelect_Optional: {};
  IFSelect_Editable: {};
  IFSelect_EditProtected: {};
  IFSelect_EditComputed: {};
  IFSelect_EditRead: {};
  IFSelect_EditDynamic: {};
}

export declare type Interface_DataState = {
  Interface_StateOK: {};
  Interface_LoadWarning: {};
  Interface_LoadFail: {};
  Interface_DataWarning: {};
  Interface_DataFail: {};
  Interface_StateUnloaded: {};
  Interface_StateUnknown: {};
}

export declare type IFSelect_ReturnStatus = {
  IFSelect_RetVoid: {};
  IFSelect_RetDone: {};
  IFSelect_RetError: {};
  IFSelect_RetFail: {};
  IFSelect_RetStop: {};
}

export declare type IFSelect_PrintCount = {
  IFSelect_ItemsByEntity: {};
  IFSelect_CountByItem: {};
  IFSelect_ShortByItem: {};
  IFSelect_ListByItem: {};
  IFSelect_EntitiesByItem: {};
  IFSelect_CountSummary: {};
  IFSelect_GeneralInfo: {};
  IFSelect_Mapping: {};
  IFSelect_ResultCount: {};
}

export declare type Interface_CheckStatus = {
  Interface_CheckOK: {};
  Interface_CheckWarning: {};
  Interface_CheckFail: {};
  Interface_CheckAny: {};
  Interface_CheckMessage: {};
  Interface_CheckNoFail: {};
}

export declare type IFSelect_PrintFail = {
  IFSelect_FailOnly: {};
  IFSelect_FailAndWarn: {};
}

export declare type IFSelect_RemainMode = {
  IFSelect_RemainForget: {};
  IFSelect_RemainCompute: {};
  IFSelect_RemainDisplay: {};
  IFSelect_RemainUndo: {};
}

export declare type Interface_ParamType = {
  Interface_ParamMisc: {};
  Interface_ParamInteger: {};
  Interface_ParamReal: {};
  Interface_ParamIdent: {};
  Interface_ParamVoid: {};
  Interface_ParamText: {};
  Interface_ParamEnum: {};
  Interface_ParamLogical: {};
  Interface_ParamSub: {};
  Interface_ParamHexa: {};
  Interface_ParamBinary: {};
}

export declare type Transfer_StatusResult = {
  Transfer_StatusVoid: {};
  Transfer_StatusDefined: {};
  Transfer_StatusUsed: {};
}

export declare type Transfer_StatusExec = {
  Transfer_StatusInitial: {};
  Transfer_StatusRun: {};
  Transfer_StatusDone: {};
  Transfer_StatusError: {};
  Transfer_StatusLoop: {};
}

export declare type MoniTool_ValueType = {
  MoniTool_ValueMisc: {};
  MoniTool_ValueInteger: {};
  MoniTool_ValueReal: {};
  MoniTool_ValueIdent: {};
  MoniTool_ValueVoid: {};
  MoniTool_ValueText: {};
  MoniTool_ValueEnum: {};
  MoniTool_ValueLogical: {};
  MoniTool_ValueSub: {};
  MoniTool_ValueHexa: {};
  MoniTool_ValueBinary: {};
}

export declare type StepData_Logical = {
  StepData_LFalse: {};
  StepData_LTrue: {};
  StepData_LUnknown: {};
}

export declare type Transfer_UndefMode = {
  Transfer_UndefIgnore: {};
  Transfer_UndefFailure: {};
  Transfer_UndefContent: {};
  Transfer_UndefUser: {};
}

export declare type XSAlgo_Caller = {
  XSAlgo_DEFAULT: {};
  XSAlgo_IGES: {};
  XSAlgo_STEP: {};
}

export declare type TKXSBaseLib = {
  APIHeaderSection_EditHeader: typeof APIHeaderSection_EditHeader;
  APIHeaderSection_MakeHeader_1: typeof APIHeaderSection_MakeHeader_1;
  APIHeaderSection_MakeHeader_2: typeof APIHeaderSection_MakeHeader_2;
  HeaderSection_FileDescription: typeof HeaderSection_FileDescription;
  HeaderSection_FileName: typeof HeaderSection_FileName;
  HeaderSection_FileSchema: typeof HeaderSection_FileSchema;
  StepData_Protocol: typeof StepData_Protocol;
  HeaderSection_Protocol: typeof HeaderSection_Protocol;
  Interface_BitMap_1: typeof Interface_BitMap_1;
  Interface_BitMap_2: typeof Interface_BitMap_2;
  Interface_BitMap_3: typeof Interface_BitMap_3;
  Interface_EntityIterator_1: typeof Interface_EntityIterator_1;
  Interface_EntityIterator_2: typeof Interface_EntityIterator_2;
  Interface_GraphContent_1: typeof Interface_GraphContent_1;
  Interface_GraphContent_2: typeof Interface_GraphContent_2;
  Interface_GraphContent_3: typeof Interface_GraphContent_3;
  Interface_GraphContent_4: typeof Interface_GraphContent_4;
  IFGraph_AllConnected_1: typeof IFGraph_AllConnected_1;
  IFGraph_AllConnected_2: typeof IFGraph_AllConnected_2;
  IFGraph_AllShared_1: typeof IFGraph_AllShared_1;
  IFGraph_AllShared_2: typeof IFGraph_AllShared_2;
  IFGraph_Articulations: typeof IFGraph_Articulations;
  IFGraph_Compare: typeof IFGraph_Compare;
  IFGraph_SubPartsIterator_1: typeof IFGraph_SubPartsIterator_1;
  IFGraph_SubPartsIterator_2: typeof IFGraph_SubPartsIterator_2;
  IFGraph_ConnectedComponants: typeof IFGraph_ConnectedComponants;
  IFGraph_Cumulate: typeof IFGraph_Cumulate;
  IFGraph_Cycles_1: typeof IFGraph_Cycles_1;
  IFGraph_Cycles_2: typeof IFGraph_Cycles_2;
  IFGraph_ExternalSources: typeof IFGraph_ExternalSources;
  IFGraph_StrongComponants: typeof IFGraph_StrongComponants;
  IFGraph_SCRoots_1: typeof IFGraph_SCRoots_1;
  IFGraph_SCRoots_2: typeof IFGraph_SCRoots_2;
  IFSelect_SessionPilot: typeof IFSelect_SessionPilot;
  IFSelect_Act: typeof IFSelect_Act;
  Interface_IntList_1: typeof Interface_IntList_1;
  Interface_IntList_2: typeof Interface_IntList_2;
  Interface_IntList_3: typeof Interface_IntList_3;
  IFSelect_AppliedModifiers: typeof IFSelect_AppliedModifiers;
  IFSelect_BasicDumper: typeof IFSelect_BasicDumper;
  IFSelect_SignatureList: typeof IFSelect_SignatureList;
  IFSelect_CheckCounter: typeof IFSelect_CheckCounter;
  Interface_Check_1: typeof Interface_Check_1;
  Interface_Check_2: typeof Interface_Check_2;
  Interface_CheckIterator_1: typeof Interface_CheckIterator_1;
  Interface_CheckIterator_2: typeof Interface_CheckIterator_2;
  IFSelect_ContextWrite_1: typeof IFSelect_ContextWrite_1;
  IFSelect_ContextWrite_2: typeof IFSelect_ContextWrite_2;
  IFSelect_DispGlobal: typeof IFSelect_DispGlobal;
  IFSelect_DispPerCount: typeof IFSelect_DispPerCount;
  IFSelect_DispPerFiles: typeof IFSelect_DispPerFiles;
  IFSelect_DispPerOne: typeof IFSelect_DispPerOne;
  IFSelect_DispPerSignature: typeof IFSelect_DispPerSignature;
  IFSelect_SignCounter_1: typeof IFSelect_SignCounter_1;
  IFSelect_SignCounter_2: typeof IFSelect_SignCounter_2;
  IFSelect_GraphCounter: typeof IFSelect_GraphCounter;
  IFSelect_ListEditor_1: typeof IFSelect_ListEditor_1;
  IFSelect_ListEditor_2: typeof IFSelect_ListEditor_2;
  IFSelect_ModelCopier: typeof IFSelect_ModelCopier;
  IFSelect_ModifEditForm: typeof IFSelect_ModifEditForm;
  IFSelect_ModifReorder: typeof IFSelect_ModifReorder;
  IFSelect_PacketList: typeof IFSelect_PacketList;
  IFSelect_ParamEditor: typeof IFSelect_ParamEditor;
  IFSelect_SelectDiff: typeof IFSelect_SelectDiff;
  IFSelect_SelectEntityNumber: typeof IFSelect_SelectEntityNumber;
  IFSelect_SelectErrorEntities: typeof IFSelect_SelectErrorEntities;
  IFSelect_SelectFlag: typeof IFSelect_SelectFlag;
  IFSelect_SelectIncorrectEntities: typeof IFSelect_SelectIncorrectEntities;
  IFSelect_SelectIntersection: typeof IFSelect_SelectIntersection;
  IFSelect_SelectModelEntities: typeof IFSelect_SelectModelEntities;
  IFSelect_SelectModelRoots: typeof IFSelect_SelectModelRoots;
  IFSelect_SelectPointed: typeof IFSelect_SelectPointed;
  IFSelect_SelectRange: typeof IFSelect_SelectRange;
  IFSelect_SelectRootComps: typeof IFSelect_SelectRootComps;
  IFSelect_SelectRoots: typeof IFSelect_SelectRoots;
  IFSelect_SelectSent: typeof IFSelect_SelectSent;
  IFSelect_SelectShared: typeof IFSelect_SelectShared;
  IFSelect_SelectSharing: typeof IFSelect_SelectSharing;
  IFSelect_SelectSignature_1: typeof IFSelect_SelectSignature_1;
  IFSelect_SelectSignature_2: typeof IFSelect_SelectSignature_2;
  IFSelect_SelectSignature_3: typeof IFSelect_SelectSignature_3;
  IFSelect_SelectSignedShared: typeof IFSelect_SelectSignedShared;
  IFSelect_SelectSignedSharing: typeof IFSelect_SelectSignedSharing;
  IFSelect_SelectSuite: typeof IFSelect_SelectSuite;
  IFSelect_SelectType_1: typeof IFSelect_SelectType_1;
  IFSelect_SelectType_2: typeof IFSelect_SelectType_2;
  IFSelect_SelectUnion: typeof IFSelect_SelectUnion;
  IFSelect_SelectUnknownEntities: typeof IFSelect_SelectUnknownEntities;
  IFSelect_SelectionIterator_1: typeof IFSelect_SelectionIterator_1;
  IFSelect_SelectionIterator_2: typeof IFSelect_SelectionIterator_2;
  IFSelect_SessionFile_1: typeof IFSelect_SessionFile_1;
  IFSelect_SessionFile_2: typeof IFSelect_SessionFile_2;
  IFSelect_ShareOut: typeof IFSelect_ShareOut;
  IFSelect_ShareOutResult_1: typeof IFSelect_ShareOutResult_1;
  IFSelect_ShareOutResult_2: typeof IFSelect_ShareOutResult_2;
  IFSelect_ShareOutResult_3: typeof IFSelect_ShareOutResult_3;
  IFSelect_ShareOutResult_4: typeof IFSelect_ShareOutResult_4;
  IFSelect_SignType: typeof IFSelect_SignType;
  IFSelect_SignAncestor: typeof IFSelect_SignAncestor;
  IFSelect_SignCategory: typeof IFSelect_SignCategory;
  IFSelect_SignMultiple: typeof IFSelect_SignMultiple;
  IFSelect_SignValidity: typeof IFSelect_SignValidity;
  IFSelect_TransformStandard: typeof IFSelect_TransformStandard;
  IFSelect_WorkSession: typeof IFSelect_WorkSession;
  Interface_EntityList: typeof Interface_EntityList;
  XSControl_Reader_1: typeof XSControl_Reader_1;
  XSControl_Reader_2: typeof XSControl_Reader_2;
  XSControl_Reader_3: typeof XSControl_Reader_3;
  Interface_GeneralLib_1: typeof Interface_GeneralLib_1;
  Interface_GeneralLib_2: typeof Interface_GeneralLib_2;
  Transfer_ActorOfProcessForFinder: typeof Transfer_ActorOfProcessForFinder;
  Transfer_ActorOfFinderProcess: typeof Transfer_ActorOfFinderProcess;
  Transfer_ProcessForTransient_1: typeof Transfer_ProcessForTransient_1;
  Transfer_ProcessForTransient_2: typeof Transfer_ProcessForTransient_2;
  Transfer_TransientProcess: typeof Transfer_TransientProcess;
  Interface_MSG_1: typeof Interface_MSG_1;
  Interface_MSG_2: typeof Interface_MSG_2;
  Interface_MSG_3: typeof Interface_MSG_3;
  Interface_MSG_4: typeof Interface_MSG_4;
  Interface_MSG_5: typeof Interface_MSG_5;
  Interface_MSG_6: typeof Interface_MSG_6;
  Interface_ReaderLib_1: typeof Interface_ReaderLib_1;
  Interface_ReaderLib_2: typeof Interface_ReaderLib_2;
  Interface_LineBuffer: typeof Interface_LineBuffer;
  Interface_FloatWriter: typeof Interface_FloatWriter;
  Transfer_ActorOfProcessForTransient: typeof Transfer_ActorOfProcessForTransient;
  Transfer_ActorOfTransientProcess: typeof Transfer_ActorOfTransientProcess;
  Interface_FileParameter: typeof Interface_FileParameter;
  Interface_GTool_1: typeof Interface_GTool_1;
  Interface_GTool_2: typeof Interface_GTool_2;
  Interface_Category_1: typeof Interface_Category_1;
  Interface_Category_2: typeof Interface_Category_2;
  Interface_Category_3: typeof Interface_Category_3;
  Interface_InterfaceError_1: typeof Interface_InterfaceError_1;
  Interface_InterfaceError_2: typeof Interface_InterfaceError_2;
  Interface_CheckFailure_1: typeof Interface_CheckFailure_1;
  Interface_CheckFailure_2: typeof Interface_CheckFailure_2;
  Interface_ShareTool_1: typeof Interface_ShareTool_1;
  Interface_ShareTool_2: typeof Interface_ShareTool_2;
  Interface_ShareTool_3: typeof Interface_ShareTool_3;
  Interface_ShareTool_4: typeof Interface_ShareTool_4;
  Interface_ShareTool_5: typeof Interface_ShareTool_5;
  Interface_ShareTool_6: typeof Interface_ShareTool_6;
  Interface_CheckTool_1: typeof Interface_CheckTool_1;
  Interface_CheckTool_2: typeof Interface_CheckTool_2;
  Interface_CheckTool_3: typeof Interface_CheckTool_3;
  Interface_CheckTool_4: typeof Interface_CheckTool_4;
  Interface_CopyMap: typeof Interface_CopyMap;
  Interface_CopyTool_1: typeof Interface_CopyTool_1;
  Interface_CopyTool_2: typeof Interface_CopyTool_2;
  Interface_CopyTool_3: typeof Interface_CopyTool_3;
  Interface_EntityCluster_1: typeof Interface_EntityCluster_1;
  Interface_EntityCluster_2: typeof Interface_EntityCluster_2;
  Interface_EntityCluster_3: typeof Interface_EntityCluster_3;
  Interface_EntityCluster_4: typeof Interface_EntityCluster_4;
  Interface_GlobalNodeOfGeneralLib: typeof Interface_GlobalNodeOfGeneralLib;
  Interface_GlobalNodeOfReaderLib: typeof Interface_GlobalNodeOfReaderLib;
  Interface_IntVal: typeof Interface_IntVal;
  Interface_InterfaceMismatch_1: typeof Interface_InterfaceMismatch_1;
  Interface_InterfaceMismatch_2: typeof Interface_InterfaceMismatch_2;
  Interface_NodeOfGeneralLib: typeof Interface_NodeOfGeneralLib;
  Interface_NodeOfReaderLib: typeof Interface_NodeOfReaderLib;
  Interface_ParamList: typeof Interface_ParamList;
  Interface_ParamSet: typeof Interface_ParamSet;
  Interface_ReportEntity_1: typeof Interface_ReportEntity_1;
  Interface_ReportEntity_2: typeof Interface_ReportEntity_2;
  Interface_STAT_1: typeof Interface_STAT_1;
  Interface_STAT_2: typeof Interface_STAT_2;
  Interface_ShareFlags_1: typeof Interface_ShareFlags_1;
  Interface_ShareFlags_2: typeof Interface_ShareFlags_2;
  Interface_ShareFlags_3: typeof Interface_ShareFlags_3;
  Interface_ShareFlags_4: typeof Interface_ShareFlags_4;
  Interface_ShareFlags_5: typeof Interface_ShareFlags_5;
  Interface_SignLabel: typeof Interface_SignLabel;
  MoniTool_TypedValue_1: typeof MoniTool_TypedValue_1;
  MoniTool_TypedValue_2: typeof MoniTool_TypedValue_2;
  Interface_TypedValue: typeof Interface_TypedValue;
  Interface_Static_1: typeof Interface_Static_1;
  Interface_Static_2: typeof Interface_Static_2;
  Interface_UndefinedContent: typeof Interface_UndefinedContent;
  MoniTool_AttrList_1: typeof MoniTool_AttrList_1;
  MoniTool_AttrList_2: typeof MoniTool_AttrList_2;
  MoniTool_CaseData: typeof MoniTool_CaseData;
  MoniTool_IntVal: typeof MoniTool_IntVal;
  MoniTool_RealVal: typeof MoniTool_RealVal;
  MoniTool_SignShape: typeof MoniTool_SignShape;
  MoniTool_Stat_1: typeof MoniTool_Stat_1;
  MoniTool_Stat_2: typeof MoniTool_Stat_2;
  MoniTool_Timer: typeof MoniTool_Timer;
  MoniTool_TimerSentry_1: typeof MoniTool_TimerSentry_1;
  MoniTool_TimerSentry_2: typeof MoniTool_TimerSentry_2;
  MoniTool_TransientElem: typeof MoniTool_TransientElem;
  RWHeaderSection_RWFileDescription: typeof RWHeaderSection_RWFileDescription;
  RWHeaderSection_RWFileName: typeof RWHeaderSection_RWFileName;
  RWHeaderSection_RWFileSchema: typeof RWHeaderSection_RWFileSchema;
  RWHeaderSection_ReadWriteModule: typeof RWHeaderSection_ReadWriteModule;
  StepData_StepReaderData: typeof StepData_StepReaderData;
  Transfer_ProcessForFinder_1: typeof Transfer_ProcessForFinder_1;
  Transfer_ProcessForFinder_2: typeof Transfer_ProcessForFinder_2;
  Transfer_FinderProcess: typeof Transfer_FinderProcess;
  XSControl_TransferWriter: typeof XSControl_TransferWriter;
  XSControl_WorkSession: typeof XSControl_WorkSession;
  StepData_SelectMember: typeof StepData_SelectMember;
  StepData_SelectInt: typeof StepData_SelectInt;
  StepData_WriterLib_1: typeof StepData_WriterLib_1;
  StepData_WriterLib_2: typeof StepData_WriterLib_2;
  StepSelect_StepType: typeof StepSelect_StepType;
  XSControl_SelectForTransfer_1: typeof XSControl_SelectForTransfer_1;
  XSControl_SelectForTransfer_2: typeof XSControl_SelectForTransfer_2;
  StepData_SelectReal: typeof StepData_SelectReal;
  StepData_Field_1: typeof StepData_Field_1;
  StepData_Field_2: typeof StepData_Field_2;
  StepData_ECDescr: typeof StepData_ECDescr;
  StepData_ESDescr: typeof StepData_ESDescr;
  StepData_EnumTool: typeof StepData_EnumTool;
  StepData_FieldList: typeof StepData_FieldList;
  StepData_FieldList1: typeof StepData_FieldList1;
  StepData_FieldListD: typeof StepData_FieldListD;
  StepData_FieldListN: typeof StepData_FieldListN;
  StepData_FileProtocol: typeof StepData_FileProtocol;
  StepData_GlobalNodeOfWriterLib: typeof StepData_GlobalNodeOfWriterLib;
  StepData_NodeOfWriterLib: typeof StepData_NodeOfWriterLib;
  StepData_PDescr: typeof StepData_PDescr;
  StepData_Plex: typeof StepData_Plex;
  StepData_SelectNamed: typeof StepData_SelectNamed;
  StepData_SelectArrReal: typeof StepData_SelectArrReal;
  StepData_Simple: typeof StepData_Simple;
  StepData_StepWriter: typeof StepData_StepWriter;
  StepData_StepDumper: typeof StepData_StepDumper;
  StepData_StepModel: typeof StepData_StepModel;
  StepData_StepReaderTool: typeof StepData_StepReaderTool;
  StepSelect_Activator: typeof StepSelect_Activator;
  StepSelect_FloatFormat: typeof StepSelect_FloatFormat;
  StepSelect_WorkLibrary: typeof StepSelect_WorkLibrary;
  Transfer_TransferDispatch_1: typeof Transfer_TransferDispatch_1;
  Transfer_TransferDispatch_2: typeof Transfer_TransferDispatch_2;
  Transfer_TransferDispatch_3: typeof Transfer_TransferDispatch_3;
  Transfer_ActorDispatch_1: typeof Transfer_ActorDispatch_1;
  Transfer_ActorDispatch_2: typeof Transfer_ActorDispatch_2;
  Transfer_ActorDispatch_3: typeof Transfer_ActorDispatch_3;
  Transfer_SimpleBinderOfTransient: typeof Transfer_SimpleBinderOfTransient;
  Transfer_BinderOfTransientInteger: typeof Transfer_BinderOfTransientInteger;
  Transfer_DispatchControl: typeof Transfer_DispatchControl;
  Transfer_TransferIterator: typeof Transfer_TransferIterator;
  Transfer_IteratorOfProcessForFinder: typeof Transfer_IteratorOfProcessForFinder;
  Transfer_IteratorOfProcessForTransient: typeof Transfer_IteratorOfProcessForTransient;
  Transfer_MapContainer: typeof Transfer_MapContainer;
  Transfer_MultipleBinder: typeof Transfer_MultipleBinder;
  Transfer_ResultFromModel: typeof Transfer_ResultFromModel;
  Transfer_ResultFromTransient: typeof Transfer_ResultFromTransient;
  Transfer_TransferFailure_1: typeof Transfer_TransferFailure_1;
  Transfer_TransferFailure_2: typeof Transfer_TransferFailure_2;
  Transfer_TransferDeadLoop_1: typeof Transfer_TransferDeadLoop_1;
  Transfer_TransferDeadLoop_2: typeof Transfer_TransferDeadLoop_2;
  Transfer_TransferInput: typeof Transfer_TransferInput;
  Transfer_TransferOutput_1: typeof Transfer_TransferOutput_1;
  Transfer_TransferOutput_2: typeof Transfer_TransferOutput_2;
  Transfer_TransientListBinder_1: typeof Transfer_TransientListBinder_1;
  Transfer_TransientListBinder_2: typeof Transfer_TransientListBinder_2;
  Transfer_TransientMapper: typeof Transfer_TransientMapper;
  Transfer_VoidBinder: typeof Transfer_VoidBinder;
  TransferBRep_TransferResultInfo: typeof TransferBRep_TransferResultInfo;
  TransferBRep_BinderOfShape_1: typeof TransferBRep_BinderOfShape_1;
  TransferBRep_BinderOfShape_2: typeof TransferBRep_BinderOfShape_2;
  TransferBRep_OrientedShapeMapper: typeof TransferBRep_OrientedShapeMapper;
  TransferBRep_Reader: typeof TransferBRep_Reader;
  TransferBRep_ShapeBinder_1: typeof TransferBRep_ShapeBinder_1;
  TransferBRep_ShapeBinder_2: typeof TransferBRep_ShapeBinder_2;
  TransferBRep_ShapeListBinder_1: typeof TransferBRep_ShapeListBinder_1;
  TransferBRep_ShapeListBinder_2: typeof TransferBRep_ShapeListBinder_2;
  TransferBRep_ShapeMapper: typeof TransferBRep_ShapeMapper;
  XSAlgo_AlgoContainer: typeof XSAlgo_AlgoContainer;
  XSAlgo_ToolContainer: typeof XSAlgo_ToolContainer;
  XSControl_ConnectedShapes_1: typeof XSControl_ConnectedShapes_1;
  XSControl_ConnectedShapes_2: typeof XSControl_ConnectedShapes_2;
  XSControl_SignTransferStatus_1: typeof XSControl_SignTransferStatus_1;
  XSControl_SignTransferStatus_2: typeof XSControl_SignTransferStatus_2;
  XSControl_TransferReader: typeof XSControl_TransferReader;
  XSControl_Utils: typeof XSControl_Utils;
  XSControl_Vars: typeof XSControl_Vars;
  XSControl_Writer_1: typeof XSControl_Writer_1;
  XSControl_Writer_2: typeof XSControl_Writer_2;
  XSControl_Writer_3: typeof XSControl_Writer_3;
  Handle_IFSelect_Editor_1: typeof Handle_IFSelect_Editor_1;
  Handle_IFSelect_Editor_2: typeof Handle_IFSelect_Editor_2;
  Handle_IFSelect_Editor_3: typeof Handle_IFSelect_Editor_3;
  Handle_IFSelect_Editor_4: typeof Handle_IFSelect_Editor_4;
  Handle_APIHeaderSection_EditHeader_1: typeof Handle_APIHeaderSection_EditHeader_1;
  Handle_APIHeaderSection_EditHeader_2: typeof Handle_APIHeaderSection_EditHeader_2;
  Handle_APIHeaderSection_EditHeader_3: typeof Handle_APIHeaderSection_EditHeader_3;
  Handle_APIHeaderSection_EditHeader_4: typeof Handle_APIHeaderSection_EditHeader_4;
  Handle_Interface_HArray1OfHAsciiString_1: typeof Handle_Interface_HArray1OfHAsciiString_1;
  Handle_Interface_HArray1OfHAsciiString_2: typeof Handle_Interface_HArray1OfHAsciiString_2;
  Handle_Interface_HArray1OfHAsciiString_3: typeof Handle_Interface_HArray1OfHAsciiString_3;
  Handle_Interface_HArray1OfHAsciiString_4: typeof Handle_Interface_HArray1OfHAsciiString_4;
  Handle_HeaderSection_FileDescription_1: typeof Handle_HeaderSection_FileDescription_1;
  Handle_HeaderSection_FileDescription_2: typeof Handle_HeaderSection_FileDescription_2;
  Handle_HeaderSection_FileDescription_3: typeof Handle_HeaderSection_FileDescription_3;
  Handle_HeaderSection_FileDescription_4: typeof Handle_HeaderSection_FileDescription_4;
  Handle_HeaderSection_FileName_1: typeof Handle_HeaderSection_FileName_1;
  Handle_HeaderSection_FileName_2: typeof Handle_HeaderSection_FileName_2;
  Handle_HeaderSection_FileName_3: typeof Handle_HeaderSection_FileName_3;
  Handle_HeaderSection_FileName_4: typeof Handle_HeaderSection_FileName_4;
  Handle_HeaderSection_FileSchema_1: typeof Handle_HeaderSection_FileSchema_1;
  Handle_HeaderSection_FileSchema_2: typeof Handle_HeaderSection_FileSchema_2;
  Handle_HeaderSection_FileSchema_3: typeof Handle_HeaderSection_FileSchema_3;
  Handle_HeaderSection_FileSchema_4: typeof Handle_HeaderSection_FileSchema_4;
  Handle_Interface_Protocol_1: typeof Handle_Interface_Protocol_1;
  Handle_Interface_Protocol_2: typeof Handle_Interface_Protocol_2;
  Handle_Interface_Protocol_3: typeof Handle_Interface_Protocol_3;
  Handle_Interface_Protocol_4: typeof Handle_Interface_Protocol_4;
  Handle_StepData_Protocol_1: typeof Handle_StepData_Protocol_1;
  Handle_StepData_Protocol_2: typeof Handle_StepData_Protocol_2;
  Handle_StepData_Protocol_3: typeof Handle_StepData_Protocol_3;
  Handle_StepData_Protocol_4: typeof Handle_StepData_Protocol_4;
  Handle_HeaderSection_Protocol_1: typeof Handle_HeaderSection_Protocol_1;
  Handle_HeaderSection_Protocol_2: typeof Handle_HeaderSection_Protocol_2;
  Handle_HeaderSection_Protocol_3: typeof Handle_HeaderSection_Protocol_3;
  Handle_HeaderSection_Protocol_4: typeof Handle_HeaderSection_Protocol_4;
  Handle_Interface_InterfaceModel_1: typeof Handle_Interface_InterfaceModel_1;
  Handle_Interface_InterfaceModel_2: typeof Handle_Interface_InterfaceModel_2;
  Handle_Interface_InterfaceModel_3: typeof Handle_Interface_InterfaceModel_3;
  Handle_Interface_InterfaceModel_4: typeof Handle_Interface_InterfaceModel_4;
  Handle_IFSelect_Activator_1: typeof Handle_IFSelect_Activator_1;
  Handle_IFSelect_Activator_2: typeof Handle_IFSelect_Activator_2;
  Handle_IFSelect_Activator_3: typeof Handle_IFSelect_Activator_3;
  Handle_IFSelect_Activator_4: typeof Handle_IFSelect_Activator_4;
  Handle_IFSelect_SessionPilot_1: typeof Handle_IFSelect_SessionPilot_1;
  Handle_IFSelect_SessionPilot_2: typeof Handle_IFSelect_SessionPilot_2;
  Handle_IFSelect_SessionPilot_3: typeof Handle_IFSelect_SessionPilot_3;
  Handle_IFSelect_SessionPilot_4: typeof Handle_IFSelect_SessionPilot_4;
  Handle_IFSelect_Act_1: typeof Handle_IFSelect_Act_1;
  Handle_IFSelect_Act_2: typeof Handle_IFSelect_Act_2;
  Handle_IFSelect_Act_3: typeof Handle_IFSelect_Act_3;
  Handle_IFSelect_Act_4: typeof Handle_IFSelect_Act_4;
  Handle_IFSelect_GeneralModifier_1: typeof Handle_IFSelect_GeneralModifier_1;
  Handle_IFSelect_GeneralModifier_2: typeof Handle_IFSelect_GeneralModifier_2;
  Handle_IFSelect_GeneralModifier_3: typeof Handle_IFSelect_GeneralModifier_3;
  Handle_IFSelect_GeneralModifier_4: typeof Handle_IFSelect_GeneralModifier_4;
  Handle_IFSelect_AppliedModifiers_1: typeof Handle_IFSelect_AppliedModifiers_1;
  Handle_IFSelect_AppliedModifiers_2: typeof Handle_IFSelect_AppliedModifiers_2;
  Handle_IFSelect_AppliedModifiers_3: typeof Handle_IFSelect_AppliedModifiers_3;
  Handle_IFSelect_AppliedModifiers_4: typeof Handle_IFSelect_AppliedModifiers_4;
  Handle_IFSelect_SessionDumper_1: typeof Handle_IFSelect_SessionDumper_1;
  Handle_IFSelect_SessionDumper_2: typeof Handle_IFSelect_SessionDumper_2;
  Handle_IFSelect_SessionDumper_3: typeof Handle_IFSelect_SessionDumper_3;
  Handle_IFSelect_SessionDumper_4: typeof Handle_IFSelect_SessionDumper_4;
  Handle_IFSelect_BasicDumper_1: typeof Handle_IFSelect_BasicDumper_1;
  Handle_IFSelect_BasicDumper_2: typeof Handle_IFSelect_BasicDumper_2;
  Handle_IFSelect_BasicDumper_3: typeof Handle_IFSelect_BasicDumper_3;
  Handle_IFSelect_BasicDumper_4: typeof Handle_IFSelect_BasicDumper_4;
  Handle_IFSelect_SignatureList_1: typeof Handle_IFSelect_SignatureList_1;
  Handle_IFSelect_SignatureList_2: typeof Handle_IFSelect_SignatureList_2;
  Handle_IFSelect_SignatureList_3: typeof Handle_IFSelect_SignatureList_3;
  Handle_IFSelect_SignatureList_4: typeof Handle_IFSelect_SignatureList_4;
  Handle_IFSelect_CheckCounter_1: typeof Handle_IFSelect_CheckCounter_1;
  Handle_IFSelect_CheckCounter_2: typeof Handle_IFSelect_CheckCounter_2;
  Handle_IFSelect_CheckCounter_3: typeof Handle_IFSelect_CheckCounter_3;
  Handle_IFSelect_CheckCounter_4: typeof Handle_IFSelect_CheckCounter_4;
  Handle_Interface_Check_1: typeof Handle_Interface_Check_1;
  Handle_Interface_Check_2: typeof Handle_Interface_Check_2;
  Handle_Interface_Check_3: typeof Handle_Interface_Check_3;
  Handle_Interface_Check_4: typeof Handle_Interface_Check_4;
  Handle_Interface_HSequenceOfCheck_1: typeof Handle_Interface_HSequenceOfCheck_1;
  Handle_Interface_HSequenceOfCheck_2: typeof Handle_Interface_HSequenceOfCheck_2;
  Handle_Interface_HSequenceOfCheck_3: typeof Handle_Interface_HSequenceOfCheck_3;
  Handle_Interface_HSequenceOfCheck_4: typeof Handle_Interface_HSequenceOfCheck_4;
  Handle_IFSelect_Dispatch_1: typeof Handle_IFSelect_Dispatch_1;
  Handle_IFSelect_Dispatch_2: typeof Handle_IFSelect_Dispatch_2;
  Handle_IFSelect_Dispatch_3: typeof Handle_IFSelect_Dispatch_3;
  Handle_IFSelect_Dispatch_4: typeof Handle_IFSelect_Dispatch_4;
  Handle_IFSelect_DispGlobal_1: typeof Handle_IFSelect_DispGlobal_1;
  Handle_IFSelect_DispGlobal_2: typeof Handle_IFSelect_DispGlobal_2;
  Handle_IFSelect_DispGlobal_3: typeof Handle_IFSelect_DispGlobal_3;
  Handle_IFSelect_DispGlobal_4: typeof Handle_IFSelect_DispGlobal_4;
  Handle_IFSelect_DispPerCount_1: typeof Handle_IFSelect_DispPerCount_1;
  Handle_IFSelect_DispPerCount_2: typeof Handle_IFSelect_DispPerCount_2;
  Handle_IFSelect_DispPerCount_3: typeof Handle_IFSelect_DispPerCount_3;
  Handle_IFSelect_DispPerCount_4: typeof Handle_IFSelect_DispPerCount_4;
  Handle_IFSelect_DispPerFiles_1: typeof Handle_IFSelect_DispPerFiles_1;
  Handle_IFSelect_DispPerFiles_2: typeof Handle_IFSelect_DispPerFiles_2;
  Handle_IFSelect_DispPerFiles_3: typeof Handle_IFSelect_DispPerFiles_3;
  Handle_IFSelect_DispPerFiles_4: typeof Handle_IFSelect_DispPerFiles_4;
  Handle_IFSelect_DispPerOne_1: typeof Handle_IFSelect_DispPerOne_1;
  Handle_IFSelect_DispPerOne_2: typeof Handle_IFSelect_DispPerOne_2;
  Handle_IFSelect_DispPerOne_3: typeof Handle_IFSelect_DispPerOne_3;
  Handle_IFSelect_DispPerOne_4: typeof Handle_IFSelect_DispPerOne_4;
  Handle_IFSelect_DispPerSignature_1: typeof Handle_IFSelect_DispPerSignature_1;
  Handle_IFSelect_DispPerSignature_2: typeof Handle_IFSelect_DispPerSignature_2;
  Handle_IFSelect_DispPerSignature_3: typeof Handle_IFSelect_DispPerSignature_3;
  Handle_IFSelect_DispPerSignature_4: typeof Handle_IFSelect_DispPerSignature_4;
  Handle_IFSelect_EditForm_1: typeof Handle_IFSelect_EditForm_1;
  Handle_IFSelect_EditForm_2: typeof Handle_IFSelect_EditForm_2;
  Handle_IFSelect_EditForm_3: typeof Handle_IFSelect_EditForm_3;
  Handle_IFSelect_EditForm_4: typeof Handle_IFSelect_EditForm_4;
  Handle_IFSelect_SignCounter_1: typeof Handle_IFSelect_SignCounter_1;
  Handle_IFSelect_SignCounter_2: typeof Handle_IFSelect_SignCounter_2;
  Handle_IFSelect_SignCounter_3: typeof Handle_IFSelect_SignCounter_3;
  Handle_IFSelect_SignCounter_4: typeof Handle_IFSelect_SignCounter_4;
  Handle_IFSelect_GraphCounter_1: typeof Handle_IFSelect_GraphCounter_1;
  Handle_IFSelect_GraphCounter_2: typeof Handle_IFSelect_GraphCounter_2;
  Handle_IFSelect_GraphCounter_3: typeof Handle_IFSelect_GraphCounter_3;
  Handle_IFSelect_GraphCounter_4: typeof Handle_IFSelect_GraphCounter_4;
  Handle_IFSelect_Selection_1: typeof Handle_IFSelect_Selection_1;
  Handle_IFSelect_Selection_2: typeof Handle_IFSelect_Selection_2;
  Handle_IFSelect_Selection_3: typeof Handle_IFSelect_Selection_3;
  Handle_IFSelect_Selection_4: typeof Handle_IFSelect_Selection_4;
  Handle_IFSelect_HSeqOfSelection_1: typeof Handle_IFSelect_HSeqOfSelection_1;
  Handle_IFSelect_HSeqOfSelection_2: typeof Handle_IFSelect_HSeqOfSelection_2;
  Handle_IFSelect_HSeqOfSelection_3: typeof Handle_IFSelect_HSeqOfSelection_3;
  Handle_IFSelect_HSeqOfSelection_4: typeof Handle_IFSelect_HSeqOfSelection_4;
  Handle_IFSelect_IntParam_1: typeof Handle_IFSelect_IntParam_1;
  Handle_IFSelect_IntParam_2: typeof Handle_IFSelect_IntParam_2;
  Handle_IFSelect_IntParam_3: typeof Handle_IFSelect_IntParam_3;
  Handle_IFSelect_IntParam_4: typeof Handle_IFSelect_IntParam_4;
  Handle_IFSelect_ListEditor_1: typeof Handle_IFSelect_ListEditor_1;
  Handle_IFSelect_ListEditor_2: typeof Handle_IFSelect_ListEditor_2;
  Handle_IFSelect_ListEditor_3: typeof Handle_IFSelect_ListEditor_3;
  Handle_IFSelect_ListEditor_4: typeof Handle_IFSelect_ListEditor_4;
  Handle_IFSelect_ModelCopier_1: typeof Handle_IFSelect_ModelCopier_1;
  Handle_IFSelect_ModelCopier_2: typeof Handle_IFSelect_ModelCopier_2;
  Handle_IFSelect_ModelCopier_3: typeof Handle_IFSelect_ModelCopier_3;
  Handle_IFSelect_ModelCopier_4: typeof Handle_IFSelect_ModelCopier_4;
  Handle_IFSelect_Modifier_1: typeof Handle_IFSelect_Modifier_1;
  Handle_IFSelect_Modifier_2: typeof Handle_IFSelect_Modifier_2;
  Handle_IFSelect_Modifier_3: typeof Handle_IFSelect_Modifier_3;
  Handle_IFSelect_Modifier_4: typeof Handle_IFSelect_Modifier_4;
  Handle_IFSelect_ModifEditForm_1: typeof Handle_IFSelect_ModifEditForm_1;
  Handle_IFSelect_ModifEditForm_2: typeof Handle_IFSelect_ModifEditForm_2;
  Handle_IFSelect_ModifEditForm_3: typeof Handle_IFSelect_ModifEditForm_3;
  Handle_IFSelect_ModifEditForm_4: typeof Handle_IFSelect_ModifEditForm_4;
  Handle_IFSelect_ModifReorder_1: typeof Handle_IFSelect_ModifReorder_1;
  Handle_IFSelect_ModifReorder_2: typeof Handle_IFSelect_ModifReorder_2;
  Handle_IFSelect_ModifReorder_3: typeof Handle_IFSelect_ModifReorder_3;
  Handle_IFSelect_ModifReorder_4: typeof Handle_IFSelect_ModifReorder_4;
  Handle_IFSelect_PacketList_1: typeof Handle_IFSelect_PacketList_1;
  Handle_IFSelect_PacketList_2: typeof Handle_IFSelect_PacketList_2;
  Handle_IFSelect_PacketList_3: typeof Handle_IFSelect_PacketList_3;
  Handle_IFSelect_PacketList_4: typeof Handle_IFSelect_PacketList_4;
  Handle_IFSelect_ParamEditor_1: typeof Handle_IFSelect_ParamEditor_1;
  Handle_IFSelect_ParamEditor_2: typeof Handle_IFSelect_ParamEditor_2;
  Handle_IFSelect_ParamEditor_3: typeof Handle_IFSelect_ParamEditor_3;
  Handle_IFSelect_ParamEditor_4: typeof Handle_IFSelect_ParamEditor_4;
  Handle_IFSelect_SelectDeduct_1: typeof Handle_IFSelect_SelectDeduct_1;
  Handle_IFSelect_SelectDeduct_2: typeof Handle_IFSelect_SelectDeduct_2;
  Handle_IFSelect_SelectDeduct_3: typeof Handle_IFSelect_SelectDeduct_3;
  Handle_IFSelect_SelectDeduct_4: typeof Handle_IFSelect_SelectDeduct_4;
  Handle_IFSelect_SelectAnyList_1: typeof Handle_IFSelect_SelectAnyList_1;
  Handle_IFSelect_SelectAnyList_2: typeof Handle_IFSelect_SelectAnyList_2;
  Handle_IFSelect_SelectAnyList_3: typeof Handle_IFSelect_SelectAnyList_3;
  Handle_IFSelect_SelectAnyList_4: typeof Handle_IFSelect_SelectAnyList_4;
  Handle_IFSelect_SelectExtract_1: typeof Handle_IFSelect_SelectExtract_1;
  Handle_IFSelect_SelectExtract_2: typeof Handle_IFSelect_SelectExtract_2;
  Handle_IFSelect_SelectExtract_3: typeof Handle_IFSelect_SelectExtract_3;
  Handle_IFSelect_SelectExtract_4: typeof Handle_IFSelect_SelectExtract_4;
  Handle_IFSelect_SelectAnyType_1: typeof Handle_IFSelect_SelectAnyType_1;
  Handle_IFSelect_SelectAnyType_2: typeof Handle_IFSelect_SelectAnyType_2;
  Handle_IFSelect_SelectAnyType_3: typeof Handle_IFSelect_SelectAnyType_3;
  Handle_IFSelect_SelectAnyType_4: typeof Handle_IFSelect_SelectAnyType_4;
  Handle_IFSelect_SelectBase_1: typeof Handle_IFSelect_SelectBase_1;
  Handle_IFSelect_SelectBase_2: typeof Handle_IFSelect_SelectBase_2;
  Handle_IFSelect_SelectBase_3: typeof Handle_IFSelect_SelectBase_3;
  Handle_IFSelect_SelectBase_4: typeof Handle_IFSelect_SelectBase_4;
  Handle_IFSelect_SelectCombine_1: typeof Handle_IFSelect_SelectCombine_1;
  Handle_IFSelect_SelectCombine_2: typeof Handle_IFSelect_SelectCombine_2;
  Handle_IFSelect_SelectCombine_3: typeof Handle_IFSelect_SelectCombine_3;
  Handle_IFSelect_SelectCombine_4: typeof Handle_IFSelect_SelectCombine_4;
  Handle_IFSelect_SelectControl_1: typeof Handle_IFSelect_SelectControl_1;
  Handle_IFSelect_SelectControl_2: typeof Handle_IFSelect_SelectControl_2;
  Handle_IFSelect_SelectControl_3: typeof Handle_IFSelect_SelectControl_3;
  Handle_IFSelect_SelectControl_4: typeof Handle_IFSelect_SelectControl_4;
  Handle_IFSelect_SelectDiff_1: typeof Handle_IFSelect_SelectDiff_1;
  Handle_IFSelect_SelectDiff_2: typeof Handle_IFSelect_SelectDiff_2;
  Handle_IFSelect_SelectDiff_3: typeof Handle_IFSelect_SelectDiff_3;
  Handle_IFSelect_SelectDiff_4: typeof Handle_IFSelect_SelectDiff_4;
  Handle_IFSelect_SelectEntityNumber_1: typeof Handle_IFSelect_SelectEntityNumber_1;
  Handle_IFSelect_SelectEntityNumber_2: typeof Handle_IFSelect_SelectEntityNumber_2;
  Handle_IFSelect_SelectEntityNumber_3: typeof Handle_IFSelect_SelectEntityNumber_3;
  Handle_IFSelect_SelectEntityNumber_4: typeof Handle_IFSelect_SelectEntityNumber_4;
  Handle_IFSelect_SelectErrorEntities_1: typeof Handle_IFSelect_SelectErrorEntities_1;
  Handle_IFSelect_SelectErrorEntities_2: typeof Handle_IFSelect_SelectErrorEntities_2;
  Handle_IFSelect_SelectErrorEntities_3: typeof Handle_IFSelect_SelectErrorEntities_3;
  Handle_IFSelect_SelectErrorEntities_4: typeof Handle_IFSelect_SelectErrorEntities_4;
  Handle_IFSelect_SelectExplore_1: typeof Handle_IFSelect_SelectExplore_1;
  Handle_IFSelect_SelectExplore_2: typeof Handle_IFSelect_SelectExplore_2;
  Handle_IFSelect_SelectExplore_3: typeof Handle_IFSelect_SelectExplore_3;
  Handle_IFSelect_SelectExplore_4: typeof Handle_IFSelect_SelectExplore_4;
  Handle_IFSelect_SelectFlag_1: typeof Handle_IFSelect_SelectFlag_1;
  Handle_IFSelect_SelectFlag_2: typeof Handle_IFSelect_SelectFlag_2;
  Handle_IFSelect_SelectFlag_3: typeof Handle_IFSelect_SelectFlag_3;
  Handle_IFSelect_SelectFlag_4: typeof Handle_IFSelect_SelectFlag_4;
  Handle_IFSelect_SelectInList_1: typeof Handle_IFSelect_SelectInList_1;
  Handle_IFSelect_SelectInList_2: typeof Handle_IFSelect_SelectInList_2;
  Handle_IFSelect_SelectInList_3: typeof Handle_IFSelect_SelectInList_3;
  Handle_IFSelect_SelectInList_4: typeof Handle_IFSelect_SelectInList_4;
  Handle_IFSelect_SelectIncorrectEntities_1: typeof Handle_IFSelect_SelectIncorrectEntities_1;
  Handle_IFSelect_SelectIncorrectEntities_2: typeof Handle_IFSelect_SelectIncorrectEntities_2;
  Handle_IFSelect_SelectIncorrectEntities_3: typeof Handle_IFSelect_SelectIncorrectEntities_3;
  Handle_IFSelect_SelectIncorrectEntities_4: typeof Handle_IFSelect_SelectIncorrectEntities_4;
  Handle_IFSelect_SelectIntersection_1: typeof Handle_IFSelect_SelectIntersection_1;
  Handle_IFSelect_SelectIntersection_2: typeof Handle_IFSelect_SelectIntersection_2;
  Handle_IFSelect_SelectIntersection_3: typeof Handle_IFSelect_SelectIntersection_3;
  Handle_IFSelect_SelectIntersection_4: typeof Handle_IFSelect_SelectIntersection_4;
  Handle_IFSelect_SelectModelEntities_1: typeof Handle_IFSelect_SelectModelEntities_1;
  Handle_IFSelect_SelectModelEntities_2: typeof Handle_IFSelect_SelectModelEntities_2;
  Handle_IFSelect_SelectModelEntities_3: typeof Handle_IFSelect_SelectModelEntities_3;
  Handle_IFSelect_SelectModelEntities_4: typeof Handle_IFSelect_SelectModelEntities_4;
  Handle_IFSelect_SelectModelRoots_1: typeof Handle_IFSelect_SelectModelRoots_1;
  Handle_IFSelect_SelectModelRoots_2: typeof Handle_IFSelect_SelectModelRoots_2;
  Handle_IFSelect_SelectModelRoots_3: typeof Handle_IFSelect_SelectModelRoots_3;
  Handle_IFSelect_SelectModelRoots_4: typeof Handle_IFSelect_SelectModelRoots_4;
  Handle_IFSelect_SelectPointed_1: typeof Handle_IFSelect_SelectPointed_1;
  Handle_IFSelect_SelectPointed_2: typeof Handle_IFSelect_SelectPointed_2;
  Handle_IFSelect_SelectPointed_3: typeof Handle_IFSelect_SelectPointed_3;
  Handle_IFSelect_SelectPointed_4: typeof Handle_IFSelect_SelectPointed_4;
  Handle_IFSelect_SelectRange_1: typeof Handle_IFSelect_SelectRange_1;
  Handle_IFSelect_SelectRange_2: typeof Handle_IFSelect_SelectRange_2;
  Handle_IFSelect_SelectRange_3: typeof Handle_IFSelect_SelectRange_3;
  Handle_IFSelect_SelectRange_4: typeof Handle_IFSelect_SelectRange_4;
  Handle_IFSelect_SelectRootComps_1: typeof Handle_IFSelect_SelectRootComps_1;
  Handle_IFSelect_SelectRootComps_2: typeof Handle_IFSelect_SelectRootComps_2;
  Handle_IFSelect_SelectRootComps_3: typeof Handle_IFSelect_SelectRootComps_3;
  Handle_IFSelect_SelectRootComps_4: typeof Handle_IFSelect_SelectRootComps_4;
  Handle_IFSelect_SelectRoots_1: typeof Handle_IFSelect_SelectRoots_1;
  Handle_IFSelect_SelectRoots_2: typeof Handle_IFSelect_SelectRoots_2;
  Handle_IFSelect_SelectRoots_3: typeof Handle_IFSelect_SelectRoots_3;
  Handle_IFSelect_SelectRoots_4: typeof Handle_IFSelect_SelectRoots_4;
  Handle_IFSelect_SelectSent_1: typeof Handle_IFSelect_SelectSent_1;
  Handle_IFSelect_SelectSent_2: typeof Handle_IFSelect_SelectSent_2;
  Handle_IFSelect_SelectSent_3: typeof Handle_IFSelect_SelectSent_3;
  Handle_IFSelect_SelectSent_4: typeof Handle_IFSelect_SelectSent_4;
  Handle_IFSelect_SelectShared_1: typeof Handle_IFSelect_SelectShared_1;
  Handle_IFSelect_SelectShared_2: typeof Handle_IFSelect_SelectShared_2;
  Handle_IFSelect_SelectShared_3: typeof Handle_IFSelect_SelectShared_3;
  Handle_IFSelect_SelectShared_4: typeof Handle_IFSelect_SelectShared_4;
  Handle_IFSelect_SelectSharing_1: typeof Handle_IFSelect_SelectSharing_1;
  Handle_IFSelect_SelectSharing_2: typeof Handle_IFSelect_SelectSharing_2;
  Handle_IFSelect_SelectSharing_3: typeof Handle_IFSelect_SelectSharing_3;
  Handle_IFSelect_SelectSharing_4: typeof Handle_IFSelect_SelectSharing_4;
  Handle_IFSelect_SelectSignature_1: typeof Handle_IFSelect_SelectSignature_1;
  Handle_IFSelect_SelectSignature_2: typeof Handle_IFSelect_SelectSignature_2;
  Handle_IFSelect_SelectSignature_3: typeof Handle_IFSelect_SelectSignature_3;
  Handle_IFSelect_SelectSignature_4: typeof Handle_IFSelect_SelectSignature_4;
  Handle_IFSelect_SelectSignedShared_1: typeof Handle_IFSelect_SelectSignedShared_1;
  Handle_IFSelect_SelectSignedShared_2: typeof Handle_IFSelect_SelectSignedShared_2;
  Handle_IFSelect_SelectSignedShared_3: typeof Handle_IFSelect_SelectSignedShared_3;
  Handle_IFSelect_SelectSignedShared_4: typeof Handle_IFSelect_SelectSignedShared_4;
  Handle_IFSelect_SelectSignedSharing_1: typeof Handle_IFSelect_SelectSignedSharing_1;
  Handle_IFSelect_SelectSignedSharing_2: typeof Handle_IFSelect_SelectSignedSharing_2;
  Handle_IFSelect_SelectSignedSharing_3: typeof Handle_IFSelect_SelectSignedSharing_3;
  Handle_IFSelect_SelectSignedSharing_4: typeof Handle_IFSelect_SelectSignedSharing_4;
  Handle_IFSelect_SelectSuite_1: typeof Handle_IFSelect_SelectSuite_1;
  Handle_IFSelect_SelectSuite_2: typeof Handle_IFSelect_SelectSuite_2;
  Handle_IFSelect_SelectSuite_3: typeof Handle_IFSelect_SelectSuite_3;
  Handle_IFSelect_SelectSuite_4: typeof Handle_IFSelect_SelectSuite_4;
  Handle_IFSelect_SelectType_1: typeof Handle_IFSelect_SelectType_1;
  Handle_IFSelect_SelectType_2: typeof Handle_IFSelect_SelectType_2;
  Handle_IFSelect_SelectType_3: typeof Handle_IFSelect_SelectType_3;
  Handle_IFSelect_SelectType_4: typeof Handle_IFSelect_SelectType_4;
  Handle_IFSelect_SelectUnion_1: typeof Handle_IFSelect_SelectUnion_1;
  Handle_IFSelect_SelectUnion_2: typeof Handle_IFSelect_SelectUnion_2;
  Handle_IFSelect_SelectUnion_3: typeof Handle_IFSelect_SelectUnion_3;
  Handle_IFSelect_SelectUnion_4: typeof Handle_IFSelect_SelectUnion_4;
  Handle_IFSelect_SelectUnknownEntities_1: typeof Handle_IFSelect_SelectUnknownEntities_1;
  Handle_IFSelect_SelectUnknownEntities_2: typeof Handle_IFSelect_SelectUnknownEntities_2;
  Handle_IFSelect_SelectUnknownEntities_3: typeof Handle_IFSelect_SelectUnknownEntities_3;
  Handle_IFSelect_SelectUnknownEntities_4: typeof Handle_IFSelect_SelectUnknownEntities_4;
  Handle_IFSelect_ShareOut_1: typeof Handle_IFSelect_ShareOut_1;
  Handle_IFSelect_ShareOut_2: typeof Handle_IFSelect_ShareOut_2;
  Handle_IFSelect_ShareOut_3: typeof Handle_IFSelect_ShareOut_3;
  Handle_IFSelect_ShareOut_4: typeof Handle_IFSelect_ShareOut_4;
  Handle_MoniTool_SignText_1: typeof Handle_MoniTool_SignText_1;
  Handle_MoniTool_SignText_2: typeof Handle_MoniTool_SignText_2;
  Handle_MoniTool_SignText_3: typeof Handle_MoniTool_SignText_3;
  Handle_MoniTool_SignText_4: typeof Handle_MoniTool_SignText_4;
  Handle_Interface_SignType_1: typeof Handle_Interface_SignType_1;
  Handle_Interface_SignType_2: typeof Handle_Interface_SignType_2;
  Handle_Interface_SignType_3: typeof Handle_Interface_SignType_3;
  Handle_Interface_SignType_4: typeof Handle_Interface_SignType_4;
  Handle_IFSelect_Signature_1: typeof Handle_IFSelect_Signature_1;
  Handle_IFSelect_Signature_2: typeof Handle_IFSelect_Signature_2;
  Handle_IFSelect_Signature_3: typeof Handle_IFSelect_Signature_3;
  Handle_IFSelect_Signature_4: typeof Handle_IFSelect_Signature_4;
  Handle_IFSelect_SignType_1: typeof Handle_IFSelect_SignType_1;
  Handle_IFSelect_SignType_2: typeof Handle_IFSelect_SignType_2;
  Handle_IFSelect_SignType_3: typeof Handle_IFSelect_SignType_3;
  Handle_IFSelect_SignType_4: typeof Handle_IFSelect_SignType_4;
  Handle_IFSelect_SignAncestor_1: typeof Handle_IFSelect_SignAncestor_1;
  Handle_IFSelect_SignAncestor_2: typeof Handle_IFSelect_SignAncestor_2;
  Handle_IFSelect_SignAncestor_3: typeof Handle_IFSelect_SignAncestor_3;
  Handle_IFSelect_SignAncestor_4: typeof Handle_IFSelect_SignAncestor_4;
  Handle_IFSelect_SignCategory_1: typeof Handle_IFSelect_SignCategory_1;
  Handle_IFSelect_SignCategory_2: typeof Handle_IFSelect_SignCategory_2;
  Handle_IFSelect_SignCategory_3: typeof Handle_IFSelect_SignCategory_3;
  Handle_IFSelect_SignCategory_4: typeof Handle_IFSelect_SignCategory_4;
  Handle_IFSelect_SignMultiple_1: typeof Handle_IFSelect_SignMultiple_1;
  Handle_IFSelect_SignMultiple_2: typeof Handle_IFSelect_SignMultiple_2;
  Handle_IFSelect_SignMultiple_3: typeof Handle_IFSelect_SignMultiple_3;
  Handle_IFSelect_SignMultiple_4: typeof Handle_IFSelect_SignMultiple_4;
  Handle_IFSelect_SignValidity_1: typeof Handle_IFSelect_SignValidity_1;
  Handle_IFSelect_SignValidity_2: typeof Handle_IFSelect_SignValidity_2;
  Handle_IFSelect_SignValidity_3: typeof Handle_IFSelect_SignValidity_3;
  Handle_IFSelect_SignValidity_4: typeof Handle_IFSelect_SignValidity_4;
  Handle_IFSelect_Transformer_1: typeof Handle_IFSelect_Transformer_1;
  Handle_IFSelect_Transformer_2: typeof Handle_IFSelect_Transformer_2;
  Handle_IFSelect_Transformer_3: typeof Handle_IFSelect_Transformer_3;
  Handle_IFSelect_Transformer_4: typeof Handle_IFSelect_Transformer_4;
  Handle_IFSelect_TransformStandard_1: typeof Handle_IFSelect_TransformStandard_1;
  Handle_IFSelect_TransformStandard_2: typeof Handle_IFSelect_TransformStandard_2;
  Handle_IFSelect_TransformStandard_3: typeof Handle_IFSelect_TransformStandard_3;
  Handle_IFSelect_TransformStandard_4: typeof Handle_IFSelect_TransformStandard_4;
  Handle_IFSelect_WorkLibrary_1: typeof Handle_IFSelect_WorkLibrary_1;
  Handle_IFSelect_WorkLibrary_2: typeof Handle_IFSelect_WorkLibrary_2;
  Handle_IFSelect_WorkLibrary_3: typeof Handle_IFSelect_WorkLibrary_3;
  Handle_IFSelect_WorkLibrary_4: typeof Handle_IFSelect_WorkLibrary_4;
  Handle_IFSelect_WorkSession_1: typeof Handle_IFSelect_WorkSession_1;
  Handle_IFSelect_WorkSession_2: typeof Handle_IFSelect_WorkSession_2;
  Handle_IFSelect_WorkSession_3: typeof Handle_IFSelect_WorkSession_3;
  Handle_IFSelect_WorkSession_4: typeof Handle_IFSelect_WorkSession_4;
  Handle_Interface_GeneralModule_1: typeof Handle_Interface_GeneralModule_1;
  Handle_Interface_GeneralModule_2: typeof Handle_Interface_GeneralModule_2;
  Handle_Interface_GeneralModule_3: typeof Handle_Interface_GeneralModule_3;
  Handle_Interface_GeneralModule_4: typeof Handle_Interface_GeneralModule_4;
  Handle_Interface_ReaderModule_1: typeof Handle_Interface_ReaderModule_1;
  Handle_Interface_ReaderModule_2: typeof Handle_Interface_ReaderModule_2;
  Handle_Interface_ReaderModule_3: typeof Handle_Interface_ReaderModule_3;
  Handle_Interface_ReaderModule_4: typeof Handle_Interface_ReaderModule_4;
  Handle_Transfer_Finder_1: typeof Handle_Transfer_Finder_1;
  Handle_Transfer_Finder_2: typeof Handle_Transfer_Finder_2;
  Handle_Transfer_Finder_3: typeof Handle_Transfer_Finder_3;
  Handle_Transfer_Finder_4: typeof Handle_Transfer_Finder_4;
  Handle_Transfer_HSequenceOfFinder_1: typeof Handle_Transfer_HSequenceOfFinder_1;
  Handle_Transfer_HSequenceOfFinder_2: typeof Handle_Transfer_HSequenceOfFinder_2;
  Handle_Transfer_HSequenceOfFinder_3: typeof Handle_Transfer_HSequenceOfFinder_3;
  Handle_Transfer_HSequenceOfFinder_4: typeof Handle_Transfer_HSequenceOfFinder_4;
  Handle_Transfer_Binder_1: typeof Handle_Transfer_Binder_1;
  Handle_Transfer_Binder_2: typeof Handle_Transfer_Binder_2;
  Handle_Transfer_Binder_3: typeof Handle_Transfer_Binder_3;
  Handle_Transfer_Binder_4: typeof Handle_Transfer_Binder_4;
  Handle_Transfer_ActorOfProcessForFinder_1: typeof Handle_Transfer_ActorOfProcessForFinder_1;
  Handle_Transfer_ActorOfProcessForFinder_2: typeof Handle_Transfer_ActorOfProcessForFinder_2;
  Handle_Transfer_ActorOfProcessForFinder_3: typeof Handle_Transfer_ActorOfProcessForFinder_3;
  Handle_Transfer_ActorOfProcessForFinder_4: typeof Handle_Transfer_ActorOfProcessForFinder_4;
  Handle_Transfer_ActorOfFinderProcess_1: typeof Handle_Transfer_ActorOfFinderProcess_1;
  Handle_Transfer_ActorOfFinderProcess_2: typeof Handle_Transfer_ActorOfFinderProcess_2;
  Handle_Transfer_ActorOfFinderProcess_3: typeof Handle_Transfer_ActorOfFinderProcess_3;
  Handle_Transfer_ActorOfFinderProcess_4: typeof Handle_Transfer_ActorOfFinderProcess_4;
  Handle_XSControl_Controller_1: typeof Handle_XSControl_Controller_1;
  Handle_XSControl_Controller_2: typeof Handle_XSControl_Controller_2;
  Handle_XSControl_Controller_3: typeof Handle_XSControl_Controller_3;
  Handle_XSControl_Controller_4: typeof Handle_XSControl_Controller_4;
  Handle_Transfer_ProcessForTransient_1: typeof Handle_Transfer_ProcessForTransient_1;
  Handle_Transfer_ProcessForTransient_2: typeof Handle_Transfer_ProcessForTransient_2;
  Handle_Transfer_ProcessForTransient_3: typeof Handle_Transfer_ProcessForTransient_3;
  Handle_Transfer_ProcessForTransient_4: typeof Handle_Transfer_ProcessForTransient_4;
  Handle_Transfer_TransientProcess_1: typeof Handle_Transfer_TransientProcess_1;
  Handle_Transfer_TransientProcess_2: typeof Handle_Transfer_TransientProcess_2;
  Handle_Transfer_TransientProcess_3: typeof Handle_Transfer_TransientProcess_3;
  Handle_Transfer_TransientProcess_4: typeof Handle_Transfer_TransientProcess_4;
  Handle_Interface_FileReaderData_1: typeof Handle_Interface_FileReaderData_1;
  Handle_Interface_FileReaderData_2: typeof Handle_Interface_FileReaderData_2;
  Handle_Interface_FileReaderData_3: typeof Handle_Interface_FileReaderData_3;
  Handle_Interface_FileReaderData_4: typeof Handle_Interface_FileReaderData_4;
  Handle_Transfer_ActorOfProcessForTransient_1: typeof Handle_Transfer_ActorOfProcessForTransient_1;
  Handle_Transfer_ActorOfProcessForTransient_2: typeof Handle_Transfer_ActorOfProcessForTransient_2;
  Handle_Transfer_ActorOfProcessForTransient_3: typeof Handle_Transfer_ActorOfProcessForTransient_3;
  Handle_Transfer_ActorOfProcessForTransient_4: typeof Handle_Transfer_ActorOfProcessForTransient_4;
  Handle_Transfer_ActorOfTransientProcess_1: typeof Handle_Transfer_ActorOfTransientProcess_1;
  Handle_Transfer_ActorOfTransientProcess_2: typeof Handle_Transfer_ActorOfTransientProcess_2;
  Handle_Transfer_ActorOfTransientProcess_3: typeof Handle_Transfer_ActorOfTransientProcess_3;
  Handle_Transfer_ActorOfTransientProcess_4: typeof Handle_Transfer_ActorOfTransientProcess_4;
  Interface_Array1OfFileParameter_1: typeof Interface_Array1OfFileParameter_1;
  Interface_Array1OfFileParameter_2: typeof Interface_Array1OfFileParameter_2;
  Interface_Array1OfFileParameter_3: typeof Interface_Array1OfFileParameter_3;
  Interface_Array1OfFileParameter_4: typeof Interface_Array1OfFileParameter_4;
  Interface_Array1OfFileParameter_5: typeof Interface_Array1OfFileParameter_5;
  Handle_Interface_GTool_1: typeof Handle_Interface_GTool_1;
  Handle_Interface_GTool_2: typeof Handle_Interface_GTool_2;
  Handle_Interface_GTool_3: typeof Handle_Interface_GTool_3;
  Handle_Interface_GTool_4: typeof Handle_Interface_GTool_4;
  Handle_Interface_InterfaceError_1: typeof Handle_Interface_InterfaceError_1;
  Handle_Interface_InterfaceError_2: typeof Handle_Interface_InterfaceError_2;
  Handle_Interface_InterfaceError_3: typeof Handle_Interface_InterfaceError_3;
  Handle_Interface_InterfaceError_4: typeof Handle_Interface_InterfaceError_4;
  Handle_Interface_CheckFailure_1: typeof Handle_Interface_CheckFailure_1;
  Handle_Interface_CheckFailure_2: typeof Handle_Interface_CheckFailure_2;
  Handle_Interface_CheckFailure_3: typeof Handle_Interface_CheckFailure_3;
  Handle_Interface_CheckFailure_4: typeof Handle_Interface_CheckFailure_4;
  Handle_Interface_CopyControl_1: typeof Handle_Interface_CopyControl_1;
  Handle_Interface_CopyControl_2: typeof Handle_Interface_CopyControl_2;
  Handle_Interface_CopyControl_3: typeof Handle_Interface_CopyControl_3;
  Handle_Interface_CopyControl_4: typeof Handle_Interface_CopyControl_4;
  Handle_Interface_CopyMap_1: typeof Handle_Interface_CopyMap_1;
  Handle_Interface_CopyMap_2: typeof Handle_Interface_CopyMap_2;
  Handle_Interface_CopyMap_3: typeof Handle_Interface_CopyMap_3;
  Handle_Interface_CopyMap_4: typeof Handle_Interface_CopyMap_4;
  Handle_Interface_EntityCluster_1: typeof Handle_Interface_EntityCluster_1;
  Handle_Interface_EntityCluster_2: typeof Handle_Interface_EntityCluster_2;
  Handle_Interface_EntityCluster_3: typeof Handle_Interface_EntityCluster_3;
  Handle_Interface_EntityCluster_4: typeof Handle_Interface_EntityCluster_4;
  Handle_Interface_GlobalNodeOfGeneralLib_1: typeof Handle_Interface_GlobalNodeOfGeneralLib_1;
  Handle_Interface_GlobalNodeOfGeneralLib_2: typeof Handle_Interface_GlobalNodeOfGeneralLib_2;
  Handle_Interface_GlobalNodeOfGeneralLib_3: typeof Handle_Interface_GlobalNodeOfGeneralLib_3;
  Handle_Interface_GlobalNodeOfGeneralLib_4: typeof Handle_Interface_GlobalNodeOfGeneralLib_4;
  Handle_Interface_GlobalNodeOfReaderLib_1: typeof Handle_Interface_GlobalNodeOfReaderLib_1;
  Handle_Interface_GlobalNodeOfReaderLib_2: typeof Handle_Interface_GlobalNodeOfReaderLib_2;
  Handle_Interface_GlobalNodeOfReaderLib_3: typeof Handle_Interface_GlobalNodeOfReaderLib_3;
  Handle_Interface_GlobalNodeOfReaderLib_4: typeof Handle_Interface_GlobalNodeOfReaderLib_4;
  Handle_Interface_HGraph_1: typeof Handle_Interface_HGraph_1;
  Handle_Interface_HGraph_2: typeof Handle_Interface_HGraph_2;
  Handle_Interface_HGraph_3: typeof Handle_Interface_HGraph_3;
  Handle_Interface_HGraph_4: typeof Handle_Interface_HGraph_4;
  Interface_IndexedMapOfAsciiString_1: typeof Interface_IndexedMapOfAsciiString_1;
  Interface_IndexedMapOfAsciiString_2: typeof Interface_IndexedMapOfAsciiString_2;
  Interface_IndexedMapOfAsciiString_3: typeof Interface_IndexedMapOfAsciiString_3;
  Handle_Interface_IntVal_1: typeof Handle_Interface_IntVal_1;
  Handle_Interface_IntVal_2: typeof Handle_Interface_IntVal_2;
  Handle_Interface_IntVal_3: typeof Handle_Interface_IntVal_3;
  Handle_Interface_IntVal_4: typeof Handle_Interface_IntVal_4;
  Handle_Interface_InterfaceMismatch_1: typeof Handle_Interface_InterfaceMismatch_1;
  Handle_Interface_InterfaceMismatch_2: typeof Handle_Interface_InterfaceMismatch_2;
  Handle_Interface_InterfaceMismatch_3: typeof Handle_Interface_InterfaceMismatch_3;
  Handle_Interface_InterfaceMismatch_4: typeof Handle_Interface_InterfaceMismatch_4;
  Handle_Interface_NodeOfGeneralLib_1: typeof Handle_Interface_NodeOfGeneralLib_1;
  Handle_Interface_NodeOfGeneralLib_2: typeof Handle_Interface_NodeOfGeneralLib_2;
  Handle_Interface_NodeOfGeneralLib_3: typeof Handle_Interface_NodeOfGeneralLib_3;
  Handle_Interface_NodeOfGeneralLib_4: typeof Handle_Interface_NodeOfGeneralLib_4;
  Handle_Interface_NodeOfReaderLib_1: typeof Handle_Interface_NodeOfReaderLib_1;
  Handle_Interface_NodeOfReaderLib_2: typeof Handle_Interface_NodeOfReaderLib_2;
  Handle_Interface_NodeOfReaderLib_3: typeof Handle_Interface_NodeOfReaderLib_3;
  Handle_Interface_NodeOfReaderLib_4: typeof Handle_Interface_NodeOfReaderLib_4;
  Interface_VectorOfFileParameter_1: typeof Interface_VectorOfFileParameter_1;
  Interface_VectorOfFileParameter_2: typeof Interface_VectorOfFileParameter_2;
  Handle_Interface_ParamList_1: typeof Handle_Interface_ParamList_1;
  Handle_Interface_ParamList_2: typeof Handle_Interface_ParamList_2;
  Handle_Interface_ParamList_3: typeof Handle_Interface_ParamList_3;
  Handle_Interface_ParamList_4: typeof Handle_Interface_ParamList_4;
  Handle_Interface_ParamSet_1: typeof Handle_Interface_ParamSet_1;
  Handle_Interface_ParamSet_2: typeof Handle_Interface_ParamSet_2;
  Handle_Interface_ParamSet_3: typeof Handle_Interface_ParamSet_3;
  Handle_Interface_ParamSet_4: typeof Handle_Interface_ParamSet_4;
  Handle_Interface_ReportEntity_1: typeof Handle_Interface_ReportEntity_1;
  Handle_Interface_ReportEntity_2: typeof Handle_Interface_ReportEntity_2;
  Handle_Interface_ReportEntity_3: typeof Handle_Interface_ReportEntity_3;
  Handle_Interface_ReportEntity_4: typeof Handle_Interface_ReportEntity_4;
  Handle_Interface_SignLabel_1: typeof Handle_Interface_SignLabel_1;
  Handle_Interface_SignLabel_2: typeof Handle_Interface_SignLabel_2;
  Handle_Interface_SignLabel_3: typeof Handle_Interface_SignLabel_3;
  Handle_Interface_SignLabel_4: typeof Handle_Interface_SignLabel_4;
  Handle_MoniTool_TypedValue_1: typeof Handle_MoniTool_TypedValue_1;
  Handle_MoniTool_TypedValue_2: typeof Handle_MoniTool_TypedValue_2;
  Handle_MoniTool_TypedValue_3: typeof Handle_MoniTool_TypedValue_3;
  Handle_MoniTool_TypedValue_4: typeof Handle_MoniTool_TypedValue_4;
  Handle_Interface_TypedValue_1: typeof Handle_Interface_TypedValue_1;
  Handle_Interface_TypedValue_2: typeof Handle_Interface_TypedValue_2;
  Handle_Interface_TypedValue_3: typeof Handle_Interface_TypedValue_3;
  Handle_Interface_TypedValue_4: typeof Handle_Interface_TypedValue_4;
  Handle_Interface_Static_1: typeof Handle_Interface_Static_1;
  Handle_Interface_Static_2: typeof Handle_Interface_Static_2;
  Handle_Interface_Static_3: typeof Handle_Interface_Static_3;
  Handle_Interface_Static_4: typeof Handle_Interface_Static_4;
  Handle_Interface_UndefinedContent_1: typeof Handle_Interface_UndefinedContent_1;
  Handle_Interface_UndefinedContent_2: typeof Handle_Interface_UndefinedContent_2;
  Handle_Interface_UndefinedContent_3: typeof Handle_Interface_UndefinedContent_3;
  Handle_Interface_UndefinedContent_4: typeof Handle_Interface_UndefinedContent_4;
  Handle_MoniTool_CaseData_1: typeof Handle_MoniTool_CaseData_1;
  Handle_MoniTool_CaseData_2: typeof Handle_MoniTool_CaseData_2;
  Handle_MoniTool_CaseData_3: typeof Handle_MoniTool_CaseData_3;
  Handle_MoniTool_CaseData_4: typeof Handle_MoniTool_CaseData_4;
  Handle_MoniTool_Element_1: typeof Handle_MoniTool_Element_1;
  Handle_MoniTool_Element_2: typeof Handle_MoniTool_Element_2;
  Handle_MoniTool_Element_3: typeof Handle_MoniTool_Element_3;
  Handle_MoniTool_Element_4: typeof Handle_MoniTool_Element_4;
  Handle_MoniTool_HSequenceOfElement_1: typeof Handle_MoniTool_HSequenceOfElement_1;
  Handle_MoniTool_HSequenceOfElement_2: typeof Handle_MoniTool_HSequenceOfElement_2;
  Handle_MoniTool_HSequenceOfElement_3: typeof Handle_MoniTool_HSequenceOfElement_3;
  Handle_MoniTool_HSequenceOfElement_4: typeof Handle_MoniTool_HSequenceOfElement_4;
  Handle_MoniTool_IntVal_1: typeof Handle_MoniTool_IntVal_1;
  Handle_MoniTool_IntVal_2: typeof Handle_MoniTool_IntVal_2;
  Handle_MoniTool_IntVal_3: typeof Handle_MoniTool_IntVal_3;
  Handle_MoniTool_IntVal_4: typeof Handle_MoniTool_IntVal_4;
  Handle_MoniTool_RealVal_1: typeof Handle_MoniTool_RealVal_1;
  Handle_MoniTool_RealVal_2: typeof Handle_MoniTool_RealVal_2;
  Handle_MoniTool_RealVal_3: typeof Handle_MoniTool_RealVal_3;
  Handle_MoniTool_RealVal_4: typeof Handle_MoniTool_RealVal_4;
  Handle_MoniTool_SignShape_1: typeof Handle_MoniTool_SignShape_1;
  Handle_MoniTool_SignShape_2: typeof Handle_MoniTool_SignShape_2;
  Handle_MoniTool_SignShape_3: typeof Handle_MoniTool_SignShape_3;
  Handle_MoniTool_SignShape_4: typeof Handle_MoniTool_SignShape_4;
  Handle_MoniTool_Timer_1: typeof Handle_MoniTool_Timer_1;
  Handle_MoniTool_Timer_2: typeof Handle_MoniTool_Timer_2;
  Handle_MoniTool_Timer_3: typeof Handle_MoniTool_Timer_3;
  Handle_MoniTool_Timer_4: typeof Handle_MoniTool_Timer_4;
  Handle_MoniTool_TransientElem_1: typeof Handle_MoniTool_TransientElem_1;
  Handle_MoniTool_TransientElem_2: typeof Handle_MoniTool_TransientElem_2;
  Handle_MoniTool_TransientElem_3: typeof Handle_MoniTool_TransientElem_3;
  Handle_MoniTool_TransientElem_4: typeof Handle_MoniTool_TransientElem_4;
  Handle_StepData_GeneralModule_1: typeof Handle_StepData_GeneralModule_1;
  Handle_StepData_GeneralModule_2: typeof Handle_StepData_GeneralModule_2;
  Handle_StepData_GeneralModule_3: typeof Handle_StepData_GeneralModule_3;
  Handle_StepData_GeneralModule_4: typeof Handle_StepData_GeneralModule_4;
  Handle_RWHeaderSection_GeneralModule_1: typeof Handle_RWHeaderSection_GeneralModule_1;
  Handle_RWHeaderSection_GeneralModule_2: typeof Handle_RWHeaderSection_GeneralModule_2;
  Handle_RWHeaderSection_GeneralModule_3: typeof Handle_RWHeaderSection_GeneralModule_3;
  Handle_RWHeaderSection_GeneralModule_4: typeof Handle_RWHeaderSection_GeneralModule_4;
  Handle_StepData_ReadWriteModule_1: typeof Handle_StepData_ReadWriteModule_1;
  Handle_StepData_ReadWriteModule_2: typeof Handle_StepData_ReadWriteModule_2;
  Handle_StepData_ReadWriteModule_3: typeof Handle_StepData_ReadWriteModule_3;
  Handle_StepData_ReadWriteModule_4: typeof Handle_StepData_ReadWriteModule_4;
  Handle_RWHeaderSection_ReadWriteModule_1: typeof Handle_RWHeaderSection_ReadWriteModule_1;
  Handle_RWHeaderSection_ReadWriteModule_2: typeof Handle_RWHeaderSection_ReadWriteModule_2;
  Handle_RWHeaderSection_ReadWriteModule_3: typeof Handle_RWHeaderSection_ReadWriteModule_3;
  Handle_RWHeaderSection_ReadWriteModule_4: typeof Handle_RWHeaderSection_ReadWriteModule_4;
  Handle_StepData_StepReaderData_1: typeof Handle_StepData_StepReaderData_1;
  Handle_StepData_StepReaderData_2: typeof Handle_StepData_StepReaderData_2;
  Handle_StepData_StepReaderData_3: typeof Handle_StepData_StepReaderData_3;
  Handle_StepData_StepReaderData_4: typeof Handle_StepData_StepReaderData_4;
  Handle_Transfer_ProcessForFinder_1: typeof Handle_Transfer_ProcessForFinder_1;
  Handle_Transfer_ProcessForFinder_2: typeof Handle_Transfer_ProcessForFinder_2;
  Handle_Transfer_ProcessForFinder_3: typeof Handle_Transfer_ProcessForFinder_3;
  Handle_Transfer_ProcessForFinder_4: typeof Handle_Transfer_ProcessForFinder_4;
  Handle_Transfer_FinderProcess_1: typeof Handle_Transfer_FinderProcess_1;
  Handle_Transfer_FinderProcess_2: typeof Handle_Transfer_FinderProcess_2;
  Handle_Transfer_FinderProcess_3: typeof Handle_Transfer_FinderProcess_3;
  Handle_Transfer_FinderProcess_4: typeof Handle_Transfer_FinderProcess_4;
  Handle_XSControl_TransferWriter_1: typeof Handle_XSControl_TransferWriter_1;
  Handle_XSControl_TransferWriter_2: typeof Handle_XSControl_TransferWriter_2;
  Handle_XSControl_TransferWriter_3: typeof Handle_XSControl_TransferWriter_3;
  Handle_XSControl_TransferWriter_4: typeof Handle_XSControl_TransferWriter_4;
  Handle_XSControl_WorkSession_1: typeof Handle_XSControl_WorkSession_1;
  Handle_XSControl_WorkSession_2: typeof Handle_XSControl_WorkSession_2;
  Handle_XSControl_WorkSession_3: typeof Handle_XSControl_WorkSession_3;
  Handle_XSControl_WorkSession_4: typeof Handle_XSControl_WorkSession_4;
  Handle_StepData_SelectMember_1: typeof Handle_StepData_SelectMember_1;
  Handle_StepData_SelectMember_2: typeof Handle_StepData_SelectMember_2;
  Handle_StepData_SelectMember_3: typeof Handle_StepData_SelectMember_3;
  Handle_StepData_SelectMember_4: typeof Handle_StepData_SelectMember_4;
  Handle_StepData_SelectInt_1: typeof Handle_StepData_SelectInt_1;
  Handle_StepData_SelectInt_2: typeof Handle_StepData_SelectInt_2;
  Handle_StepData_SelectInt_3: typeof Handle_StepData_SelectInt_3;
  Handle_StepData_SelectInt_4: typeof Handle_StepData_SelectInt_4;
  Handle_StepSelect_StepType_1: typeof Handle_StepSelect_StepType_1;
  Handle_StepSelect_StepType_2: typeof Handle_StepSelect_StepType_2;
  Handle_StepSelect_StepType_3: typeof Handle_StepSelect_StepType_3;
  Handle_StepSelect_StepType_4: typeof Handle_StepSelect_StepType_4;
  Handle_XSControl_SelectForTransfer_1: typeof Handle_XSControl_SelectForTransfer_1;
  Handle_XSControl_SelectForTransfer_2: typeof Handle_XSControl_SelectForTransfer_2;
  Handle_XSControl_SelectForTransfer_3: typeof Handle_XSControl_SelectForTransfer_3;
  Handle_XSControl_SelectForTransfer_4: typeof Handle_XSControl_SelectForTransfer_4;
  Handle_StepData_SelectReal_1: typeof Handle_StepData_SelectReal_1;
  Handle_StepData_SelectReal_2: typeof Handle_StepData_SelectReal_2;
  Handle_StepData_SelectReal_3: typeof Handle_StepData_SelectReal_3;
  Handle_StepData_SelectReal_4: typeof Handle_StepData_SelectReal_4;
  StepData_Array1OfField_1: typeof StepData_Array1OfField_1;
  StepData_Array1OfField_2: typeof StepData_Array1OfField_2;
  StepData_Array1OfField_3: typeof StepData_Array1OfField_3;
  StepData_Array1OfField_4: typeof StepData_Array1OfField_4;
  StepData_Array1OfField_5: typeof StepData_Array1OfField_5;
  Handle_StepData_DefaultGeneral_1: typeof Handle_StepData_DefaultGeneral_1;
  Handle_StepData_DefaultGeneral_2: typeof Handle_StepData_DefaultGeneral_2;
  Handle_StepData_DefaultGeneral_3: typeof Handle_StepData_DefaultGeneral_3;
  Handle_StepData_DefaultGeneral_4: typeof Handle_StepData_DefaultGeneral_4;
  Handle_StepData_Described_1: typeof Handle_StepData_Described_1;
  Handle_StepData_Described_2: typeof Handle_StepData_Described_2;
  Handle_StepData_Described_3: typeof Handle_StepData_Described_3;
  Handle_StepData_Described_4: typeof Handle_StepData_Described_4;
  Handle_StepData_EDescr_1: typeof Handle_StepData_EDescr_1;
  Handle_StepData_EDescr_2: typeof Handle_StepData_EDescr_2;
  Handle_StepData_EDescr_3: typeof Handle_StepData_EDescr_3;
  Handle_StepData_EDescr_4: typeof Handle_StepData_EDescr_4;
  Handle_StepData_ECDescr_1: typeof Handle_StepData_ECDescr_1;
  Handle_StepData_ECDescr_2: typeof Handle_StepData_ECDescr_2;
  Handle_StepData_ECDescr_3: typeof Handle_StepData_ECDescr_3;
  Handle_StepData_ECDescr_4: typeof Handle_StepData_ECDescr_4;
  Handle_StepData_ESDescr_1: typeof Handle_StepData_ESDescr_1;
  Handle_StepData_ESDescr_2: typeof Handle_StepData_ESDescr_2;
  Handle_StepData_ESDescr_3: typeof Handle_StepData_ESDescr_3;
  Handle_StepData_ESDescr_4: typeof Handle_StepData_ESDescr_4;
  Handle_StepData_HArray1OfField_1: typeof Handle_StepData_HArray1OfField_1;
  Handle_StepData_HArray1OfField_2: typeof Handle_StepData_HArray1OfField_2;
  Handle_StepData_HArray1OfField_3: typeof Handle_StepData_HArray1OfField_3;
  Handle_StepData_HArray1OfField_4: typeof Handle_StepData_HArray1OfField_4;
  Handle_StepData_FileProtocol_1: typeof Handle_StepData_FileProtocol_1;
  Handle_StepData_FileProtocol_2: typeof Handle_StepData_FileProtocol_2;
  Handle_StepData_FileProtocol_3: typeof Handle_StepData_FileProtocol_3;
  Handle_StepData_FileProtocol_4: typeof Handle_StepData_FileProtocol_4;
  Handle_StepData_FileRecognizer_1: typeof Handle_StepData_FileRecognizer_1;
  Handle_StepData_FileRecognizer_2: typeof Handle_StepData_FileRecognizer_2;
  Handle_StepData_FileRecognizer_3: typeof Handle_StepData_FileRecognizer_3;
  Handle_StepData_FileRecognizer_4: typeof Handle_StepData_FileRecognizer_4;
  Handle_StepData_FreeFormEntity_1: typeof Handle_StepData_FreeFormEntity_1;
  Handle_StepData_FreeFormEntity_2: typeof Handle_StepData_FreeFormEntity_2;
  Handle_StepData_FreeFormEntity_3: typeof Handle_StepData_FreeFormEntity_3;
  Handle_StepData_FreeFormEntity_4: typeof Handle_StepData_FreeFormEntity_4;
  Handle_StepData_GlobalNodeOfWriterLib_1: typeof Handle_StepData_GlobalNodeOfWriterLib_1;
  Handle_StepData_GlobalNodeOfWriterLib_2: typeof Handle_StepData_GlobalNodeOfWriterLib_2;
  Handle_StepData_GlobalNodeOfWriterLib_3: typeof Handle_StepData_GlobalNodeOfWriterLib_3;
  Handle_StepData_GlobalNodeOfWriterLib_4: typeof Handle_StepData_GlobalNodeOfWriterLib_4;
  Handle_StepData_NodeOfWriterLib_1: typeof Handle_StepData_NodeOfWriterLib_1;
  Handle_StepData_NodeOfWriterLib_2: typeof Handle_StepData_NodeOfWriterLib_2;
  Handle_StepData_NodeOfWriterLib_3: typeof Handle_StepData_NodeOfWriterLib_3;
  Handle_StepData_NodeOfWriterLib_4: typeof Handle_StepData_NodeOfWriterLib_4;
  Handle_StepData_PDescr_1: typeof Handle_StepData_PDescr_1;
  Handle_StepData_PDescr_2: typeof Handle_StepData_PDescr_2;
  Handle_StepData_PDescr_3: typeof Handle_StepData_PDescr_3;
  Handle_StepData_PDescr_4: typeof Handle_StepData_PDescr_4;
  Handle_StepData_Plex_1: typeof Handle_StepData_Plex_1;
  Handle_StepData_Plex_2: typeof Handle_StepData_Plex_2;
  Handle_StepData_Plex_3: typeof Handle_StepData_Plex_3;
  Handle_StepData_Plex_4: typeof Handle_StepData_Plex_4;
  Handle_StepData_SelectNamed_1: typeof Handle_StepData_SelectNamed_1;
  Handle_StepData_SelectNamed_2: typeof Handle_StepData_SelectNamed_2;
  Handle_StepData_SelectNamed_3: typeof Handle_StepData_SelectNamed_3;
  Handle_StepData_SelectNamed_4: typeof Handle_StepData_SelectNamed_4;
  Handle_StepData_SelectArrReal_1: typeof Handle_StepData_SelectArrReal_1;
  Handle_StepData_SelectArrReal_2: typeof Handle_StepData_SelectArrReal_2;
  Handle_StepData_SelectArrReal_3: typeof Handle_StepData_SelectArrReal_3;
  Handle_StepData_SelectArrReal_4: typeof Handle_StepData_SelectArrReal_4;
  Handle_StepData_Simple_1: typeof Handle_StepData_Simple_1;
  Handle_StepData_Simple_2: typeof Handle_StepData_Simple_2;
  Handle_StepData_Simple_3: typeof Handle_StepData_Simple_3;
  Handle_StepData_Simple_4: typeof Handle_StepData_Simple_4;
  Handle_StepData_StepModel_1: typeof Handle_StepData_StepModel_1;
  Handle_StepData_StepModel_2: typeof Handle_StepData_StepModel_2;
  Handle_StepData_StepModel_3: typeof Handle_StepData_StepModel_3;
  Handle_StepData_StepModel_4: typeof Handle_StepData_StepModel_4;
  Handle_StepData_UndefinedEntity_1: typeof Handle_StepData_UndefinedEntity_1;
  Handle_StepData_UndefinedEntity_2: typeof Handle_StepData_UndefinedEntity_2;
  Handle_StepData_UndefinedEntity_3: typeof Handle_StepData_UndefinedEntity_3;
  Handle_StepData_UndefinedEntity_4: typeof Handle_StepData_UndefinedEntity_4;
  Handle_StepSelect_Activator_1: typeof Handle_StepSelect_Activator_1;
  Handle_StepSelect_Activator_2: typeof Handle_StepSelect_Activator_2;
  Handle_StepSelect_Activator_3: typeof Handle_StepSelect_Activator_3;
  Handle_StepSelect_Activator_4: typeof Handle_StepSelect_Activator_4;
  Handle_StepSelect_FileModifier_1: typeof Handle_StepSelect_FileModifier_1;
  Handle_StepSelect_FileModifier_2: typeof Handle_StepSelect_FileModifier_2;
  Handle_StepSelect_FileModifier_3: typeof Handle_StepSelect_FileModifier_3;
  Handle_StepSelect_FileModifier_4: typeof Handle_StepSelect_FileModifier_4;
  Handle_StepSelect_FloatFormat_1: typeof Handle_StepSelect_FloatFormat_1;
  Handle_StepSelect_FloatFormat_2: typeof Handle_StepSelect_FloatFormat_2;
  Handle_StepSelect_FloatFormat_3: typeof Handle_StepSelect_FloatFormat_3;
  Handle_StepSelect_FloatFormat_4: typeof Handle_StepSelect_FloatFormat_4;
  Handle_StepSelect_ModelModifier_1: typeof Handle_StepSelect_ModelModifier_1;
  Handle_StepSelect_ModelModifier_2: typeof Handle_StepSelect_ModelModifier_2;
  Handle_StepSelect_ModelModifier_3: typeof Handle_StepSelect_ModelModifier_3;
  Handle_StepSelect_ModelModifier_4: typeof Handle_StepSelect_ModelModifier_4;
  Handle_StepSelect_WorkLibrary_1: typeof Handle_StepSelect_WorkLibrary_1;
  Handle_StepSelect_WorkLibrary_2: typeof Handle_StepSelect_WorkLibrary_2;
  Handle_StepSelect_WorkLibrary_3: typeof Handle_StepSelect_WorkLibrary_3;
  Handle_StepSelect_WorkLibrary_4: typeof Handle_StepSelect_WorkLibrary_4;
  Handle_Transfer_ActorDispatch_1: typeof Handle_Transfer_ActorDispatch_1;
  Handle_Transfer_ActorDispatch_2: typeof Handle_Transfer_ActorDispatch_2;
  Handle_Transfer_ActorDispatch_3: typeof Handle_Transfer_ActorDispatch_3;
  Handle_Transfer_ActorDispatch_4: typeof Handle_Transfer_ActorDispatch_4;
  Handle_Transfer_SimpleBinderOfTransient_1: typeof Handle_Transfer_SimpleBinderOfTransient_1;
  Handle_Transfer_SimpleBinderOfTransient_2: typeof Handle_Transfer_SimpleBinderOfTransient_2;
  Handle_Transfer_SimpleBinderOfTransient_3: typeof Handle_Transfer_SimpleBinderOfTransient_3;
  Handle_Transfer_SimpleBinderOfTransient_4: typeof Handle_Transfer_SimpleBinderOfTransient_4;
  Handle_Transfer_BinderOfTransientInteger_1: typeof Handle_Transfer_BinderOfTransientInteger_1;
  Handle_Transfer_BinderOfTransientInteger_2: typeof Handle_Transfer_BinderOfTransientInteger_2;
  Handle_Transfer_BinderOfTransientInteger_3: typeof Handle_Transfer_BinderOfTransientInteger_3;
  Handle_Transfer_BinderOfTransientInteger_4: typeof Handle_Transfer_BinderOfTransientInteger_4;
  Handle_Transfer_DispatchControl_1: typeof Handle_Transfer_DispatchControl_1;
  Handle_Transfer_DispatchControl_2: typeof Handle_Transfer_DispatchControl_2;
  Handle_Transfer_DispatchControl_3: typeof Handle_Transfer_DispatchControl_3;
  Handle_Transfer_DispatchControl_4: typeof Handle_Transfer_DispatchControl_4;
  Handle_Transfer_HSequenceOfBinder_1: typeof Handle_Transfer_HSequenceOfBinder_1;
  Handle_Transfer_HSequenceOfBinder_2: typeof Handle_Transfer_HSequenceOfBinder_2;
  Handle_Transfer_HSequenceOfBinder_3: typeof Handle_Transfer_HSequenceOfBinder_3;
  Handle_Transfer_HSequenceOfBinder_4: typeof Handle_Transfer_HSequenceOfBinder_4;
  Handle_Transfer_MapContainer_1: typeof Handle_Transfer_MapContainer_1;
  Handle_Transfer_MapContainer_2: typeof Handle_Transfer_MapContainer_2;
  Handle_Transfer_MapContainer_3: typeof Handle_Transfer_MapContainer_3;
  Handle_Transfer_MapContainer_4: typeof Handle_Transfer_MapContainer_4;
  Handle_Transfer_MultipleBinder_1: typeof Handle_Transfer_MultipleBinder_1;
  Handle_Transfer_MultipleBinder_2: typeof Handle_Transfer_MultipleBinder_2;
  Handle_Transfer_MultipleBinder_3: typeof Handle_Transfer_MultipleBinder_3;
  Handle_Transfer_MultipleBinder_4: typeof Handle_Transfer_MultipleBinder_4;
  Handle_Transfer_ResultFromModel_1: typeof Handle_Transfer_ResultFromModel_1;
  Handle_Transfer_ResultFromModel_2: typeof Handle_Transfer_ResultFromModel_2;
  Handle_Transfer_ResultFromModel_3: typeof Handle_Transfer_ResultFromModel_3;
  Handle_Transfer_ResultFromModel_4: typeof Handle_Transfer_ResultFromModel_4;
  Handle_Transfer_ResultFromTransient_1: typeof Handle_Transfer_ResultFromTransient_1;
  Handle_Transfer_ResultFromTransient_2: typeof Handle_Transfer_ResultFromTransient_2;
  Handle_Transfer_ResultFromTransient_3: typeof Handle_Transfer_ResultFromTransient_3;
  Handle_Transfer_ResultFromTransient_4: typeof Handle_Transfer_ResultFromTransient_4;
  Handle_Transfer_TransferFailure_1: typeof Handle_Transfer_TransferFailure_1;
  Handle_Transfer_TransferFailure_2: typeof Handle_Transfer_TransferFailure_2;
  Handle_Transfer_TransferFailure_3: typeof Handle_Transfer_TransferFailure_3;
  Handle_Transfer_TransferFailure_4: typeof Handle_Transfer_TransferFailure_4;
  Handle_Transfer_TransferDeadLoop_1: typeof Handle_Transfer_TransferDeadLoop_1;
  Handle_Transfer_TransferDeadLoop_2: typeof Handle_Transfer_TransferDeadLoop_2;
  Handle_Transfer_TransferDeadLoop_3: typeof Handle_Transfer_TransferDeadLoop_3;
  Handle_Transfer_TransferDeadLoop_4: typeof Handle_Transfer_TransferDeadLoop_4;
  Handle_Transfer_TransientListBinder_1: typeof Handle_Transfer_TransientListBinder_1;
  Handle_Transfer_TransientListBinder_2: typeof Handle_Transfer_TransientListBinder_2;
  Handle_Transfer_TransientListBinder_3: typeof Handle_Transfer_TransientListBinder_3;
  Handle_Transfer_TransientListBinder_4: typeof Handle_Transfer_TransientListBinder_4;
  Handle_Transfer_TransientMapper_1: typeof Handle_Transfer_TransientMapper_1;
  Handle_Transfer_TransientMapper_2: typeof Handle_Transfer_TransientMapper_2;
  Handle_Transfer_TransientMapper_3: typeof Handle_Transfer_TransientMapper_3;
  Handle_Transfer_TransientMapper_4: typeof Handle_Transfer_TransientMapper_4;
  Handle_Transfer_VoidBinder_1: typeof Handle_Transfer_VoidBinder_1;
  Handle_Transfer_VoidBinder_2: typeof Handle_Transfer_VoidBinder_2;
  Handle_Transfer_VoidBinder_3: typeof Handle_Transfer_VoidBinder_3;
  Handle_Transfer_VoidBinder_4: typeof Handle_Transfer_VoidBinder_4;
  Handle_TransferBRep_TransferResultInfo_1: typeof Handle_TransferBRep_TransferResultInfo_1;
  Handle_TransferBRep_TransferResultInfo_2: typeof Handle_TransferBRep_TransferResultInfo_2;
  Handle_TransferBRep_TransferResultInfo_3: typeof Handle_TransferBRep_TransferResultInfo_3;
  Handle_TransferBRep_TransferResultInfo_4: typeof Handle_TransferBRep_TransferResultInfo_4;
  Handle_TransferBRep_HSequenceOfTransferResultInfo_1: typeof Handle_TransferBRep_HSequenceOfTransferResultInfo_1;
  Handle_TransferBRep_HSequenceOfTransferResultInfo_2: typeof Handle_TransferBRep_HSequenceOfTransferResultInfo_2;
  Handle_TransferBRep_HSequenceOfTransferResultInfo_3: typeof Handle_TransferBRep_HSequenceOfTransferResultInfo_3;
  Handle_TransferBRep_HSequenceOfTransferResultInfo_4: typeof Handle_TransferBRep_HSequenceOfTransferResultInfo_4;
  Handle_TransferBRep_BinderOfShape_1: typeof Handle_TransferBRep_BinderOfShape_1;
  Handle_TransferBRep_BinderOfShape_2: typeof Handle_TransferBRep_BinderOfShape_2;
  Handle_TransferBRep_BinderOfShape_3: typeof Handle_TransferBRep_BinderOfShape_3;
  Handle_TransferBRep_BinderOfShape_4: typeof Handle_TransferBRep_BinderOfShape_4;
  Handle_TransferBRep_OrientedShapeMapper_1: typeof Handle_TransferBRep_OrientedShapeMapper_1;
  Handle_TransferBRep_OrientedShapeMapper_2: typeof Handle_TransferBRep_OrientedShapeMapper_2;
  Handle_TransferBRep_OrientedShapeMapper_3: typeof Handle_TransferBRep_OrientedShapeMapper_3;
  Handle_TransferBRep_OrientedShapeMapper_4: typeof Handle_TransferBRep_OrientedShapeMapper_4;
  Handle_TransferBRep_ShapeBinder_1: typeof Handle_TransferBRep_ShapeBinder_1;
  Handle_TransferBRep_ShapeBinder_2: typeof Handle_TransferBRep_ShapeBinder_2;
  Handle_TransferBRep_ShapeBinder_3: typeof Handle_TransferBRep_ShapeBinder_3;
  Handle_TransferBRep_ShapeBinder_4: typeof Handle_TransferBRep_ShapeBinder_4;
  Handle_TransferBRep_ShapeListBinder_1: typeof Handle_TransferBRep_ShapeListBinder_1;
  Handle_TransferBRep_ShapeListBinder_2: typeof Handle_TransferBRep_ShapeListBinder_2;
  Handle_TransferBRep_ShapeListBinder_3: typeof Handle_TransferBRep_ShapeListBinder_3;
  Handle_TransferBRep_ShapeListBinder_4: typeof Handle_TransferBRep_ShapeListBinder_4;
  Handle_TransferBRep_ShapeMapper_1: typeof Handle_TransferBRep_ShapeMapper_1;
  Handle_TransferBRep_ShapeMapper_2: typeof Handle_TransferBRep_ShapeMapper_2;
  Handle_TransferBRep_ShapeMapper_3: typeof Handle_TransferBRep_ShapeMapper_3;
  Handle_TransferBRep_ShapeMapper_4: typeof Handle_TransferBRep_ShapeMapper_4;
  Handle_XSAlgo_AlgoContainer_1: typeof Handle_XSAlgo_AlgoContainer_1;
  Handle_XSAlgo_AlgoContainer_2: typeof Handle_XSAlgo_AlgoContainer_2;
  Handle_XSAlgo_AlgoContainer_3: typeof Handle_XSAlgo_AlgoContainer_3;
  Handle_XSAlgo_AlgoContainer_4: typeof Handle_XSAlgo_AlgoContainer_4;
  Handle_XSAlgo_ToolContainer_1: typeof Handle_XSAlgo_ToolContainer_1;
  Handle_XSAlgo_ToolContainer_2: typeof Handle_XSAlgo_ToolContainer_2;
  Handle_XSAlgo_ToolContainer_3: typeof Handle_XSAlgo_ToolContainer_3;
  Handle_XSAlgo_ToolContainer_4: typeof Handle_XSAlgo_ToolContainer_4;
  Handle_XSControl_ConnectedShapes_1: typeof Handle_XSControl_ConnectedShapes_1;
  Handle_XSControl_ConnectedShapes_2: typeof Handle_XSControl_ConnectedShapes_2;
  Handle_XSControl_ConnectedShapes_3: typeof Handle_XSControl_ConnectedShapes_3;
  Handle_XSControl_ConnectedShapes_4: typeof Handle_XSControl_ConnectedShapes_4;
  Handle_XSControl_SignTransferStatus_1: typeof Handle_XSControl_SignTransferStatus_1;
  Handle_XSControl_SignTransferStatus_2: typeof Handle_XSControl_SignTransferStatus_2;
  Handle_XSControl_SignTransferStatus_3: typeof Handle_XSControl_SignTransferStatus_3;
  Handle_XSControl_SignTransferStatus_4: typeof Handle_XSControl_SignTransferStatus_4;
  Handle_XSControl_TransferReader_1: typeof Handle_XSControl_TransferReader_1;
  Handle_XSControl_TransferReader_2: typeof Handle_XSControl_TransferReader_2;
  Handle_XSControl_TransferReader_3: typeof Handle_XSControl_TransferReader_3;
  Handle_XSControl_TransferReader_4: typeof Handle_XSControl_TransferReader_4;
  Handle_XSControl_Vars_1: typeof Handle_XSControl_Vars_1;
  Handle_XSControl_Vars_2: typeof Handle_XSControl_Vars_2;
  Handle_XSControl_Vars_3: typeof Handle_XSControl_Vars_3;
  Handle_XSControl_Vars_4: typeof Handle_XSControl_Vars_4;
  IFSelect_EditValue: typeof IFSelect_EditValue;
  Interface_DataState: typeof Interface_DataState;
  IFSelect_ReturnStatus: typeof IFSelect_ReturnStatus;
  IFSelect_PrintCount: typeof IFSelect_PrintCount;
  Interface_CheckStatus: typeof Interface_CheckStatus;
  IFSelect_PrintFail: typeof IFSelect_PrintFail;
  IFSelect_RemainMode: typeof IFSelect_RemainMode;
  Interface_ParamType: typeof Interface_ParamType;
  Transfer_StatusResult: typeof Transfer_StatusResult;
  Transfer_StatusExec: typeof Transfer_StatusExec;
  MoniTool_ValueType: typeof MoniTool_ValueType;
  StepData_Logical: typeof StepData_Logical;
  Transfer_UndefMode: typeof Transfer_UndefMode;
  XSAlgo_Caller: typeof XSAlgo_Caller;
};
