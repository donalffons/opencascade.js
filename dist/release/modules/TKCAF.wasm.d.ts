declare const libName = "./modules/TKCAF.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class AppStd_Application extends TDocStd_Application {
  constructor();
  ResourcesName(): Standard_CString;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataXtd_Shape extends TDataStd_GenericEmpty {
  constructor()
  Find(current: TDF_Label, S: any): Standard_Boolean;
  New(label: TDF_Label): any;
  Set(label: TDF_Label, shape: TopoDS_Shape): any;
  Get(label: TDF_Label): TopoDS_Shape;
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  References(DS: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataXtd_Point extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, P: gp_Pnt): any;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataXtd_Axis extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, L: gp_Lin): any;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataXtd_Plane extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(label: TDF_Label, P: gp_Pln): any;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataXtd_Placement extends TDataStd_GenericEmpty {
  constructor()
  GetID(): Standard_GUID;
  Set(label: TDF_Label): any;
  ID(): Standard_GUID;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
}

export declare class TDataXtd_Geometry extends TDF_Attribute {
  constructor()
  Set(label: TDF_Label): any;
  Type_1(L: TDF_Label): TDataXtd_GeometryEnum;
  Type_2(S: any): TDataXtd_GeometryEnum;
  Point_1(L: TDF_Label, G: gp_Pnt): Standard_Boolean;
  Point_2(S: any, G: gp_Pnt): Standard_Boolean;
  Axis_1(L: TDF_Label, G: gp_Ax1): Standard_Boolean;
  Axis_2(S: any, G: gp_Ax1): Standard_Boolean;
  Line_1(L: TDF_Label, G: gp_Lin): Standard_Boolean;
  Line_2(S: any, G: gp_Lin): Standard_Boolean;
  Circle_1(L: TDF_Label, G: gp_Circ): Standard_Boolean;
  Circle_2(S: any, G: gp_Circ): Standard_Boolean;
  Ellipse_1(L: TDF_Label, G: gp_Elips): Standard_Boolean;
  Ellipse_2(S: any, G: gp_Elips): Standard_Boolean;
  Plane_1(L: TDF_Label, G: gp_Pln): Standard_Boolean;
  Plane_2(S: any, G: gp_Pln): Standard_Boolean;
  Cylinder_1(L: TDF_Label, G: gp_Cylinder): Standard_Boolean;
  Cylinder_2(S: any, G: gp_Cylinder): Standard_Boolean;
  GetID(): Standard_GUID;
  SetType(T: TDataXtd_GeometryEnum): void;
  GetType(): TDataXtd_GeometryEnum;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  NewEmpty(): any;
  Paste(into: any, RT: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataXtd_Position extends TDF_Attribute {
  constructor()
  Set_1(aLabel: TDF_Label, aPos: gp_Pnt): void;
  Set_2(aLabel: TDF_Label): any;
  Get(aLabel: TDF_Label, aPos: gp_Pnt): Standard_Boolean;
  ID(): Standard_GUID;
  GetID(): Standard_GUID;
  Restore(anAttribute: any): void;
  NewEmpty(): any;
  Paste(intoAttribute: any, aRelocTationable: any): void;
  GetPosition(): gp_Pnt;
  SetPosition(aPos: gp_Pnt): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataXtd_Constraint extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(label: TDF_Label): any;
  Set_2(type: TDataXtd_ConstraintEnum, G1: any): void;
  Set_3(type: TDataXtd_ConstraintEnum, G1: any, G2: any): void;
  Set_4(type: TDataXtd_ConstraintEnum, G1: any, G2: any, G3: any): void;
  Set_5(type: TDataXtd_ConstraintEnum, G1: any, G2: any, G3: any, G4: any): void;
  Verified_1(): Standard_Boolean;
  GetType(): TDataXtd_ConstraintEnum;
  IsPlanar(): Standard_Boolean;
  GetPlane(): any;
  IsDimension(): Standard_Boolean;
  GetValue(): any;
  NbGeometries(): Standard_Integer;
  GetGeometry(Index: Standard_Integer): any;
  ClearGeometries(): void;
  SetType(CTR: TDataXtd_ConstraintEnum): void;
  SetPlane(plane: any): void;
  SetValue(V: any): void;
  SetGeometry(Index: Standard_Integer, G: any): void;
  Verified_2(status: Standard_Boolean): void;
  Inverted_1(status: Standard_Boolean): void;
  Inverted_2(): Standard_Boolean;
  Reversed_1(status: Standard_Boolean): void;
  Reversed_2(): Standard_Boolean;
  CollectChildConstraints(aLabel: TDF_Label, TheList: TDF_LabelList): void;
  ID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  References(DS: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataXtd_Pattern extends TDF_Attribute {
  GetID(): Standard_GUID;
  ID(): Standard_GUID;
  PatternID(): Standard_GUID;
  NbTrsfs(): Standard_Integer;
  ComputeTrsfs(Trsfs: TDataXtd_Array1OfTrsf): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataXtd_PatternStd extends TDataXtd_Pattern {
  constructor()
  GetPatternID(): Standard_GUID;
  Set(label: TDF_Label): any;
  Signature_1(signature: Standard_Integer): void;
  Axis1_1(Axis1: any): void;
  Axis2_1(Axis2: any): void;
  Axis1Reversed_1(Axis1Reversed: Standard_Boolean): void;
  Axis2Reversed_1(Axis2Reversed: Standard_Boolean): void;
  Value1_1(value: any): void;
  Value2_1(value: any): void;
  NbInstances1_1(NbInstances1: any): void;
  NbInstances2_1(NbInstances2: any): void;
  Mirror_1(plane: any): void;
  Signature_2(): Standard_Integer;
  Axis1_2(): any;
  Axis2_2(): any;
  Axis1Reversed_2(): Standard_Boolean;
  Axis2Reversed_2(): Standard_Boolean;
  Value1_2(): any;
  Value2_2(): any;
  NbInstances1_2(): any;
  NbInstances2_2(): any;
  Mirror_2(): any;
  NbTrsfs(): Standard_Integer;
  ComputeTrsfs(Trsfs: TDataXtd_Array1OfTrsf): void;
  PatternID(): Standard_GUID;
  Restore(With: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  References(aDataSet: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TNaming_NamedShape extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  IsEmpty(): Standard_Boolean;
  Get(): TopoDS_Shape;
  Evolution(): TNaming_Evolution;
  Version(): Standard_Integer;
  SetVersion(version: Standard_Integer): void;
  Clear(): void;
  ID(): Standard_GUID;
  BackupCopy(): any;
  Restore(anAttribute: any): void;
  DeltaOnModification_1(anOldAttribute: any): any;
  DeltaOnModification_2(aDelta: any): void;
  DeltaOnRemoval(): any;
  NewEmpty(): any;
  Paste(intoAttribute: any, aRelocTationable: any): void;
  References(aDataSet: any): void;
  BeforeRemoval(): void;
  BeforeUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  AfterUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TNaming_Name {
  constructor()
  Type_1(aType: TNaming_NameType): void;
  ShapeType_1(aType: TopAbs_ShapeEnum): void;
  Shape_1(theShape: TopoDS_Shape): void;
  Append(arg: any): void;
  StopNamedShape_1(arg: any): void;
  Index_1(I: Standard_Integer): void;
  ContextLabel_1(theLab: TDF_Label): void;
  Orientation_1(theOrientation: TopAbs_Orientation): void;
  Type_2(): TNaming_NameType;
  ShapeType_2(): TopAbs_ShapeEnum;
  Shape_2(): TopoDS_Shape;
  Arguments(): TNaming_ListOfNamedShape;
  StopNamedShape_2(): any;
  Index_2(): Standard_Integer;
  ContextLabel_2(): TDF_Label;
  Orientation_2(): TopAbs_Orientation;
  Solve(aLab: TDF_Label, Valid: TDF_LabelMap): Standard_Boolean;
  Paste(into: TNaming_Name, RT: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

export declare class TNaming_Naming extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Insert(under: TDF_Label): any;
  Name(where: TDF_Label, Selection: TopoDS_Shape, Context: TopoDS_Shape, Geometry: Standard_Boolean, KeepOrientation: Standard_Boolean, BNproblem: Standard_Boolean): any;
  IsDefined(): Standard_Boolean;
  GetName(): TNaming_Name;
  ChangeName(): TNaming_Name;
  Regenerate(scope: TDF_LabelMap): Standard_Boolean;
  Solve(scope: TDF_LabelMap): Standard_Boolean;
  ID(): Standard_GUID;
  NewEmpty(): any;
  Restore(With: any): void;
  Paste(Into: any, RT: any): void;
  References(aDataSet: any): void;
  ExtendedDump(anOS: Standard_OStream, aFilter: TDF_IDFilter, aMap: TDF_AttributeIndexedMap): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TDataXtd_Presentation extends TDF_Attribute {
  constructor()
  Set(theLabel: TDF_Label, theDriverId: Standard_GUID): any;
  Unset(theLabel: TDF_Label): void;
  ID(): Standard_GUID;
  GetID(): Standard_GUID;
  Restore(anAttribute: any): void;
  NewEmpty(): any;
  Paste(intoAttribute: any, aRelocTationable: any): void;
  BackupCopy(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  GetDriverGUID(): Standard_GUID;
  SetDriverGUID(theGUID: Standard_GUID): void;
  IsDisplayed(): Standard_Boolean;
  HasOwnMaterial(): Standard_Boolean;
  HasOwnTransparency(): Standard_Boolean;
  HasOwnColor(): Standard_Boolean;
  HasOwnWidth(): Standard_Boolean;
  HasOwnMode(): Standard_Boolean;
  HasOwnSelectionMode(): Standard_Boolean;
  SetDisplayed(theIsDisplayed: Standard_Boolean): void;
  SetMaterialIndex(theMaterialIndex: Standard_Integer): void;
  SetTransparency(theValue: Standard_Real): void;
  SetColor(theColor: Quantity_NameOfColor): void;
  SetWidth(theWidth: Standard_Real): void;
  SetMode(theMode: Standard_Integer): void;
  GetNbSelectionModes(): Standard_Integer;
  SetSelectionMode(theSelectionMode: Standard_Integer, theTransaction: Standard_Boolean): void;
  AddSelectionMode(theSelectionMode: Standard_Integer, theTransaction: Standard_Boolean): void;
  MaterialIndex(): Standard_Integer;
  Transparency(): Standard_Real;
  Color(): Quantity_NameOfColor;
  Width(): Standard_Real;
  Mode(): Standard_Integer;
  SelectionMode(index: number): Standard_Integer;
  UnsetMaterial(): void;
  UnsetTransparency(): void;
  UnsetColor(): void;
  UnsetWidth(): void;
  UnsetMode(): void;
  UnsetSelectionMode(): void;
  getColorNameFromOldEnum(theOld: Standard_Integer): Quantity_NameOfColor;
  getOldColorNameFromNewEnum(theNew: Quantity_NameOfColor): Standard_Integer;
}

export declare class TDataXtd {
  constructor();
  IDList(anIDList: TDF_IDList): void;
}

export declare class TDataXtd_Triangulation extends TDF_Attribute {
  constructor()
  GetID(): Standard_GUID;
  Set_1(theLabel: TDF_Label): any;
  Set_2(theLabel: TDF_Label, theTriangulation: any): any;
  Set_3(theTriangulation: any): void;
  Get(): any;
  Deflection_1(): Standard_Real;
  Deflection_2(theDeflection: Standard_Real): void;
  RemoveUVNodes(): void;
  NbNodes(): Standard_Integer;
  NbTriangles(): Standard_Integer;
  HasUVNodes(): Standard_Boolean;
  Node(theIndex: Standard_Integer): gp_Pnt;
  SetNode(theIndex: Standard_Integer, theNode: gp_Pnt): void;
  UVNode(theIndex: Standard_Integer): gp_Pnt2d;
  SetUVNode(theIndex: Standard_Integer, theUVNode: gp_Pnt2d): void;
  Triangle(theIndex: Standard_Integer): Poly_Triangle;
  SetTriangle(theIndex: Standard_Integer, theTriangle: Poly_Triangle): void;
  SetNormals(theNormals: any): void;
  SetNormal(theIndex: Standard_Integer, theNormal: gp_Dir): void;
  HasNormals(): Standard_Boolean;
  Normal(theIndex: Standard_Integer): gp_Dir;
  ID(): Standard_GUID;
  Restore(theAttribute: any): void;
  NewEmpty(): any;
  Paste(Into: any, RT: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TNaming {
  constructor();
  Substitute(labelsource: TDF_Label, labelcible: TDF_Label, mapOldNew: TopTools_DataMapOfShapeShape): void;
  Update(label: TDF_Label, mapOldNew: TopTools_DataMapOfShapeShape): void;
  Displace(label: TDF_Label, aLocation: TopLoc_Location, WithOld: Standard_Boolean): void;
  ChangeShapes(label: TDF_Label, M: TopTools_DataMapOfShapeShape): void;
  Transform(label: TDF_Label, aTransformation: gp_Trsf): void;
  Replicate_1(NS: any, T: gp_Trsf, L: TDF_Label): void;
  Replicate_2(SH: TopoDS_Shape, T: gp_Trsf, L: TDF_Label): void;
  MakeShape(MS: TopTools_MapOfShape): TopoDS_Shape;
  FindUniqueContext(S: TopoDS_Shape, Context: TopoDS_Shape): TopoDS_Shape;
  FindUniqueContextSet(S: TopoDS_Shape, Context: TopoDS_Shape, Arr: any): TopoDS_Shape;
  SubstituteSShape(accesslabel: TDF_Label, From: TopoDS_Shape, To: TopoDS_Shape): Standard_Boolean;
  OuterWire(theFace: TopoDS_Face, theWire: TopoDS_Wire): Standard_Boolean;
  OuterShell(theSolid: TopoDS_Solid, theShell: TopoDS_Shell): Standard_Boolean;
  IDList(anIDList: TDF_IDList): void;
}

export declare class TNaming_Builder {
  constructor(aLabel: TDF_Label)
  Generated_1(newShape: TopoDS_Shape): void;
  Generated_2(oldShape: TopoDS_Shape, newShape: TopoDS_Shape): void;
  Delete(oldShape: TopoDS_Shape): void;
  Modify(oldShape: TopoDS_Shape, newShape: TopoDS_Shape): void;
  Select(aShape: TopoDS_Shape, inShape: TopoDS_Shape): void;
  NamedShape(): any;
}

export declare class TNaming_CopyShape {
  constructor();
  CopyTool(aShape: TopoDS_Shape, aMap: TColStd_IndexedDataMapOfTransientTransient, aResult: TopoDS_Shape): void;
  Translate_1(aShape: TopoDS_Shape, aMap: TColStd_IndexedDataMapOfTransientTransient, aResult: TopoDS_Shape, TrTool: any): void;
  Translate_2(L: TopLoc_Location, aMap: TColStd_IndexedDataMapOfTransientTransient): TopLoc_Location;
}

export declare class TNaming_ShapesSet {
  Clear(): void;
  Add_1(S: TopoDS_Shape): Standard_Boolean;
  Contains(S: TopoDS_Shape): Standard_Boolean;
  Remove_1(S: TopoDS_Shape): Standard_Boolean;
  Add_2(Shapes: TNaming_ShapesSet): void;
  Filter(Shapes: TNaming_ShapesSet): void;
  Remove_2(Shapes: TNaming_ShapesSet): void;
  IsEmpty(): Standard_Boolean;
  NbShapes(): Standard_Integer;
  ChangeMap(): TopTools_MapOfShape;
  Map(): TopTools_MapOfShape;
}

  export declare class TNaming_ShapesSet_1 extends TNaming_ShapesSet {
    constructor();
  }

  export declare class TNaming_ShapesSet_2 extends TNaming_ShapesSet {
    constructor(S: TopoDS_Shape, Type: TopAbs_ShapeEnum);
  }

export declare class TNaming_DeltaOnModification extends TDF_DeltaOnModification {
  constructor(NS: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TNaming_DeltaOnRemoval extends TDF_DeltaOnRemoval {
  constructor(NS: any)
  Apply(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TNaming_Identifier {
  IsDone(): Standard_Boolean;
  Type(): TNaming_NameType;
  IsFeature(): Standard_Boolean;
  Feature(): any;
  InitArgs(): void;
  MoreArgs(): Standard_Boolean;
  NextArg(): void;
  ArgIsFeature(): Standard_Boolean;
  FeatureArg(): any;
  ShapeArg(): TopoDS_Shape;
  ShapeContext(): TopoDS_Shape;
  NamedShapeOfGeneration(): any;
  AncestorIdentification(Localizer: TNaming_Localizer, Context: TopoDS_Shape): void;
  PrimitiveIdentification(Localizer: TNaming_Localizer, NS: any): void;
  GeneratedIdentification(Localizer: TNaming_Localizer, NS: any): void;
  Identification(Localizer: TNaming_Localizer, NS: any): void;
}

  export declare class TNaming_Identifier_1 extends TNaming_Identifier {
    constructor(Lab: TDF_Label, S: TopoDS_Shape, Context: TopoDS_Shape, Geom: Standard_Boolean);
  }

  export declare class TNaming_Identifier_2 extends TNaming_Identifier {
    constructor(Lab: TDF_Label, S: TopoDS_Shape, ContextNS: any, Geom: Standard_Boolean);
  }

export declare class TNaming_Iterator {
  More(): Standard_Boolean;
  Next(): void;
  OldShape(): TopoDS_Shape;
  NewShape(): TopoDS_Shape;
  IsModification(): Standard_Boolean;
  Evolution(): TNaming_Evolution;
}

  export declare class TNaming_Iterator_1 extends TNaming_Iterator {
    constructor(anAtt: any);
  }

  export declare class TNaming_Iterator_2 extends TNaming_Iterator {
    constructor(aLabel: TDF_Label);
  }

  export declare class TNaming_Iterator_3 extends TNaming_Iterator {
    constructor(aLabel: TDF_Label, aTrans: Standard_Integer);
  }

export declare class TNaming_IteratorOnShapesSet {
  Init(S: TNaming_ShapesSet): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TopoDS_Shape;
}

  export declare class TNaming_IteratorOnShapesSet_1 extends TNaming_IteratorOnShapesSet {
    constructor();
  }

  export declare class TNaming_IteratorOnShapesSet_2 extends TNaming_IteratorOnShapesSet {
    constructor(S: TNaming_ShapesSet);
  }

export declare class TNaming_Localizer {
  constructor()
  Init(US: any, CurTrans: Standard_Integer): void;
  SubShapes(S: TopoDS_Shape, Type: TopAbs_ShapeEnum): TopTools_MapOfShape;
  Ancestors(S: TopoDS_Shape, Type: TopAbs_ShapeEnum): TopTools_IndexedDataMapOfShapeListOfShape;
  FindFeaturesInAncestors(S: TopoDS_Shape, In: TopoDS_Shape, AncInFeatures: TopTools_MapOfShape): void;
  GoBack(S: TopoDS_Shape, Lab: TDF_Label, Evol: TNaming_Evolution, OldS: TopTools_ListOfShape, OldLab: TNaming_ListOfNamedShape): void;
  Backward(NS: any, S: TopoDS_Shape, Primitives: TNaming_MapOfNamedShape, ValidShapes: TopTools_MapOfShape): void;
  FindNeighbourg(Cont: TopoDS_Shape, S: TopoDS_Shape, Neighbourg: TopTools_MapOfShape): void;
  IsNew(S: TopoDS_Shape, NS: any): Standard_Boolean;
  FindGenerator(NS: any, S: TopoDS_Shape, theListOfGenerators: TopTools_ListOfShape): void;
  FindShapeContext(NS: any, theS: TopoDS_Shape, theSC: TopoDS_Shape): void;
}

export declare class TNaming_NamingTool {
  constructor();
  CurrentShape(Valid: TDF_LabelMap, Forbiden: TDF_LabelMap, NS: any, MS: TopTools_IndexedMapOfShape): void;
  CurrentShapeFromShape(Valid: TDF_LabelMap, Forbiden: TDF_LabelMap, Acces: TDF_Label, S: TopoDS_Shape, MS: TopTools_IndexedMapOfShape): void;
  BuildDescendants(NS: any, Labels: TDF_LabelMap): void;
}

export declare class TNaming_NewShapeIterator {
  More(): Standard_Boolean;
  Next(): void;
  Label(): TDF_Label;
  NamedShape(): any;
  Shape(): TopoDS_Shape;
  IsModification(): Standard_Boolean;
}

  export declare class TNaming_NewShapeIterator_1 extends TNaming_NewShapeIterator {
    constructor(aShape: TopoDS_Shape, Transaction: Standard_Integer, access: TDF_Label);
  }

  export declare class TNaming_NewShapeIterator_2 extends TNaming_NewShapeIterator {
    constructor(aShape: TopoDS_Shape, access: TDF_Label);
  }

  export declare class TNaming_NewShapeIterator_3 extends TNaming_NewShapeIterator {
    constructor(anIterator: TNaming_NewShapeIterator);
  }

  export declare class TNaming_NewShapeIterator_4 extends TNaming_NewShapeIterator {
    constructor(anIterator: TNaming_Iterator);
  }

export declare class TNaming_OldShapeIterator {
  More(): Standard_Boolean;
  Next(): void;
  Label(): TDF_Label;
  NamedShape(): any;
  Shape(): TopoDS_Shape;
  IsModification(): Standard_Boolean;
}

  export declare class TNaming_OldShapeIterator_1 extends TNaming_OldShapeIterator {
    constructor(aShape: TopoDS_Shape, Transaction: Standard_Integer, access: TDF_Label);
  }

  export declare class TNaming_OldShapeIterator_2 extends TNaming_OldShapeIterator {
    constructor(aShape: TopoDS_Shape, access: TDF_Label);
  }

  export declare class TNaming_OldShapeIterator_3 extends TNaming_OldShapeIterator {
    constructor(anIterator: TNaming_OldShapeIterator);
  }

  export declare class TNaming_OldShapeIterator_4 extends TNaming_OldShapeIterator {
    constructor(anIterator: TNaming_Iterator);
  }

export declare class TNaming_RefShape {
  Shape_1(S: TopoDS_Shape): void;
  FirstUse_1(aPtr: TNaming_PtrNode): void;
  FirstUse_2(): TNaming_PtrNode;
  Shape_2(): TopoDS_Shape;
  Label(): TDF_Label;
  NamedShape(): any;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
}

  export declare class TNaming_RefShape_1 extends TNaming_RefShape {
    constructor();
  }

  export declare class TNaming_RefShape_2 extends TNaming_RefShape {
    constructor(S: TopoDS_Shape);
  }

export declare class TNaming_SameShapeIterator {
  constructor(aShape: TopoDS_Shape, access: TDF_Label)
  More(): Standard_Boolean;
  Next(): void;
  Label(): TDF_Label;
}

export declare class TNaming_Scope {
  WithValid_1(): Standard_Boolean;
  WithValid_2(mode: Standard_Boolean): void;
  ClearValid(): void;
  Valid(L: TDF_Label): void;
  ValidChildren(L: TDF_Label, withroot: Standard_Boolean): void;
  Unvalid(L: TDF_Label): void;
  UnvalidChildren(L: TDF_Label, withroot: Standard_Boolean): void;
  IsValid(L: TDF_Label): Standard_Boolean;
  GetValid(): TDF_LabelMap;
  ChangeValid(): TDF_LabelMap;
  CurrentShape(NS: any): TopoDS_Shape;
}

  export declare class TNaming_Scope_1 extends TNaming_Scope {
    constructor();
  }

  export declare class TNaming_Scope_2 extends TNaming_Scope {
    constructor(WithValid: Standard_Boolean);
  }

  export declare class TNaming_Scope_3 extends TNaming_Scope {
    constructor(valid: TDF_LabelMap);
  }

export declare class TNaming_Selector {
  constructor(aLabel: TDF_Label)
  IsIdentified(access: TDF_Label, selection: TopoDS_Shape, NS: any, Geometry: Standard_Boolean): Standard_Boolean;
  Select_1(Selection: TopoDS_Shape, Context: TopoDS_Shape, Geometry: Standard_Boolean, KeepOrientatation: Standard_Boolean): Standard_Boolean;
  Select_2(Selection: TopoDS_Shape, Geometry: Standard_Boolean, KeepOrientatation: Standard_Boolean): Standard_Boolean;
  Solve(Valid: TDF_LabelMap): Standard_Boolean;
  Arguments(args: TDF_AttributeMap): void;
  NamedShape(): any;
}

export declare class TNaming_Tool {
  constructor();
  CurrentShape_1(NS: any): TopoDS_Shape;
  CurrentShape_2(NS: any, Updated: TDF_LabelMap): TopoDS_Shape;
  CurrentNamedShape_1(NS: any, Updated: TDF_LabelMap): any;
  CurrentNamedShape_2(NS: any): any;
  NamedShape(aShape: TopoDS_Shape, anAcces: TDF_Label): any;
  GetShape(NS: any): TopoDS_Shape;
  OriginalShape(NS: any): TopoDS_Shape;
  GeneratedShape(S: TopoDS_Shape, Generation: any): TopoDS_Shape;
  Collect(NS: any, Labels: TNaming_MapOfNamedShape, OnlyModif: Standard_Boolean): void;
  HasLabel_1(access: TDF_Label, aShape: TopoDS_Shape): Standard_Boolean;
  Label_1(access: TDF_Label, aShape: TopoDS_Shape, TransDef: Standard_Integer): TDF_Label;
  InitialShape(aShape: TopoDS_Shape, anAcces: TDF_Label, Labels: TDF_LabelList): TopoDS_Shape;
  ValidUntil_1(access: TDF_Label, S: TopoDS_Shape): Standard_Integer;
  FindShape(Valid: TDF_LabelMap, Forbiden: TDF_LabelMap, Arg: any, S: TopoDS_Shape): void;
}

export declare class TNaming_TranslateTool extends Standard_Transient {
  constructor();
  Add(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  MakeVertex(S: TopoDS_Shape): void;
  MakeEdge(S: TopoDS_Shape): void;
  MakeWire(S: TopoDS_Shape): void;
  MakeFace(S: TopoDS_Shape): void;
  MakeShell(S: TopoDS_Shape): void;
  MakeSolid(S: TopoDS_Shape): void;
  MakeCompSolid(S: TopoDS_Shape): void;
  MakeCompound(S: TopoDS_Shape): void;
  UpdateVertex(S1: TopoDS_Shape, S2: TopoDS_Shape, M: TColStd_IndexedDataMapOfTransientTransient): void;
  UpdateEdge(S1: TopoDS_Shape, S2: TopoDS_Shape, M: TColStd_IndexedDataMapOfTransientTransient): void;
  UpdateFace(S1: TopoDS_Shape, S2: TopoDS_Shape, M: TColStd_IndexedDataMapOfTransientTransient): void;
  UpdateShape(S1: TopoDS_Shape, S2: TopoDS_Shape): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class TNaming_Translator {
  constructor()
  Add(aShape: TopoDS_Shape): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  Copied_1(aShape: TopoDS_Shape): TopoDS_Shape;
  Copied_2(): TopTools_DataMapOfShapeShape;
  DumpMap(isWrite: Standard_Boolean): void;
}

export declare class TNaming_UsedShapes extends TDF_Attribute {
  Destroy(): void;
  Map(): TNaming_DataMapOfShapePtrRefShape;
  ID(): Standard_GUID;
  GetID(): Standard_GUID;
  BackupCopy(): any;
  Restore(anAttribute: any): void;
  BeforeRemoval(): void;
  AfterUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  DeltaOnAddition(): any;
  DeltaOnRemoval(): any;
  NewEmpty(): any;
  Paste(intoAttribute: any, aRelocTationable: any): void;
  References(aDataSet: any): void;
  DumpJson(theOStream: Standard_OStream, theDepth: Standard_Integer): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_AppStd_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppStd_Application): void;
  get(): AppStd_Application;
}

  export declare class Handle_AppStd_Application_1 extends Handle_AppStd_Application {
    constructor();
  }

  export declare class Handle_AppStd_Application_2 extends Handle_AppStd_Application {
    constructor(thePtr: AppStd_Application);
  }

  export declare class Handle_AppStd_Application_3 extends Handle_AppStd_Application {
    constructor(theHandle: Handle_AppStd_Application);
  }

  export declare class Handle_AppStd_Application_4 extends Handle_AppStd_Application {
    constructor(theHandle: Handle_AppStd_Application);
  }

export declare class Handle_TDataXtd_Shape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Shape): void;
  get(): TDataXtd_Shape;
}

  export declare class Handle_TDataXtd_Shape_1 extends Handle_TDataXtd_Shape {
    constructor();
  }

  export declare class Handle_TDataXtd_Shape_2 extends Handle_TDataXtd_Shape {
    constructor(thePtr: TDataXtd_Shape);
  }

  export declare class Handle_TDataXtd_Shape_3 extends Handle_TDataXtd_Shape {
    constructor(theHandle: Handle_TDataXtd_Shape);
  }

  export declare class Handle_TDataXtd_Shape_4 extends Handle_TDataXtd_Shape {
    constructor(theHandle: Handle_TDataXtd_Shape);
  }

export declare class Handle_TDataXtd_Point {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Point): void;
  get(): TDataXtd_Point;
}

  export declare class Handle_TDataXtd_Point_1 extends Handle_TDataXtd_Point {
    constructor();
  }

  export declare class Handle_TDataXtd_Point_2 extends Handle_TDataXtd_Point {
    constructor(thePtr: TDataXtd_Point);
  }

  export declare class Handle_TDataXtd_Point_3 extends Handle_TDataXtd_Point {
    constructor(theHandle: Handle_TDataXtd_Point);
  }

  export declare class Handle_TDataXtd_Point_4 extends Handle_TDataXtd_Point {
    constructor(theHandle: Handle_TDataXtd_Point);
  }

export declare class Handle_TDataXtd_Axis {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Axis): void;
  get(): TDataXtd_Axis;
}

  export declare class Handle_TDataXtd_Axis_1 extends Handle_TDataXtd_Axis {
    constructor();
  }

  export declare class Handle_TDataXtd_Axis_2 extends Handle_TDataXtd_Axis {
    constructor(thePtr: TDataXtd_Axis);
  }

  export declare class Handle_TDataXtd_Axis_3 extends Handle_TDataXtd_Axis {
    constructor(theHandle: Handle_TDataXtd_Axis);
  }

  export declare class Handle_TDataXtd_Axis_4 extends Handle_TDataXtd_Axis {
    constructor(theHandle: Handle_TDataXtd_Axis);
  }

export declare class Handle_TDataXtd_Plane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Plane): void;
  get(): TDataXtd_Plane;
}

  export declare class Handle_TDataXtd_Plane_1 extends Handle_TDataXtd_Plane {
    constructor();
  }

  export declare class Handle_TDataXtd_Plane_2 extends Handle_TDataXtd_Plane {
    constructor(thePtr: TDataXtd_Plane);
  }

  export declare class Handle_TDataXtd_Plane_3 extends Handle_TDataXtd_Plane {
    constructor(theHandle: Handle_TDataXtd_Plane);
  }

  export declare class Handle_TDataXtd_Plane_4 extends Handle_TDataXtd_Plane {
    constructor(theHandle: Handle_TDataXtd_Plane);
  }

export declare class Handle_TDataXtd_Placement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Placement): void;
  get(): TDataXtd_Placement;
}

  export declare class Handle_TDataXtd_Placement_1 extends Handle_TDataXtd_Placement {
    constructor();
  }

  export declare class Handle_TDataXtd_Placement_2 extends Handle_TDataXtd_Placement {
    constructor(thePtr: TDataXtd_Placement);
  }

  export declare class Handle_TDataXtd_Placement_3 extends Handle_TDataXtd_Placement {
    constructor(theHandle: Handle_TDataXtd_Placement);
  }

  export declare class Handle_TDataXtd_Placement_4 extends Handle_TDataXtd_Placement {
    constructor(theHandle: Handle_TDataXtd_Placement);
  }

export declare class Handle_TDataXtd_Geometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Geometry): void;
  get(): TDataXtd_Geometry;
}

  export declare class Handle_TDataXtd_Geometry_1 extends Handle_TDataXtd_Geometry {
    constructor();
  }

  export declare class Handle_TDataXtd_Geometry_2 extends Handle_TDataXtd_Geometry {
    constructor(thePtr: TDataXtd_Geometry);
  }

  export declare class Handle_TDataXtd_Geometry_3 extends Handle_TDataXtd_Geometry {
    constructor(theHandle: Handle_TDataXtd_Geometry);
  }

  export declare class Handle_TDataXtd_Geometry_4 extends Handle_TDataXtd_Geometry {
    constructor(theHandle: Handle_TDataXtd_Geometry);
  }

export declare class Handle_TDataXtd_Position {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Position): void;
  get(): TDataXtd_Position;
}

  export declare class Handle_TDataXtd_Position_1 extends Handle_TDataXtd_Position {
    constructor();
  }

  export declare class Handle_TDataXtd_Position_2 extends Handle_TDataXtd_Position {
    constructor(thePtr: TDataXtd_Position);
  }

  export declare class Handle_TDataXtd_Position_3 extends Handle_TDataXtd_Position {
    constructor(theHandle: Handle_TDataXtd_Position);
  }

  export declare class Handle_TDataXtd_Position_4 extends Handle_TDataXtd_Position {
    constructor(theHandle: Handle_TDataXtd_Position);
  }

export declare class Handle_TDataXtd_Constraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Constraint): void;
  get(): TDataXtd_Constraint;
}

  export declare class Handle_TDataXtd_Constraint_1 extends Handle_TDataXtd_Constraint {
    constructor();
  }

  export declare class Handle_TDataXtd_Constraint_2 extends Handle_TDataXtd_Constraint {
    constructor(thePtr: TDataXtd_Constraint);
  }

  export declare class Handle_TDataXtd_Constraint_3 extends Handle_TDataXtd_Constraint {
    constructor(theHandle: Handle_TDataXtd_Constraint);
  }

  export declare class Handle_TDataXtd_Constraint_4 extends Handle_TDataXtd_Constraint {
    constructor(theHandle: Handle_TDataXtd_Constraint);
  }

export declare class TDataXtd_Array1OfTrsf {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Trsf): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: TDataXtd_Array1OfTrsf): TDataXtd_Array1OfTrsf;
  Move(theOther: TDataXtd_Array1OfTrsf): TDataXtd_Array1OfTrsf;
  First(): gp_Trsf;
  ChangeFirst(): gp_Trsf;
  Last(): gp_Trsf;
  ChangeLast(): gp_Trsf;
  Value(theIndex: Standard_Integer): gp_Trsf;
  ChangeValue(theIndex: Standard_Integer): gp_Trsf;
  SetValue(theIndex: Standard_Integer, theItem: gp_Trsf): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class TDataXtd_Array1OfTrsf_1 extends TDataXtd_Array1OfTrsf {
    constructor();
  }

  export declare class TDataXtd_Array1OfTrsf_2 extends TDataXtd_Array1OfTrsf {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class TDataXtd_Array1OfTrsf_3 extends TDataXtd_Array1OfTrsf {
    constructor(theOther: TDataXtd_Array1OfTrsf);
  }

  export declare class TDataXtd_Array1OfTrsf_4 extends TDataXtd_Array1OfTrsf {
    constructor(theOther: TDataXtd_Array1OfTrsf);
  }

  export declare class TDataXtd_Array1OfTrsf_5 extends TDataXtd_Array1OfTrsf {
    constructor(theBegin: gp_Trsf, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_TDataXtd_Pattern {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Pattern): void;
  get(): TDataXtd_Pattern;
}

  export declare class Handle_TDataXtd_Pattern_1 extends Handle_TDataXtd_Pattern {
    constructor();
  }

  export declare class Handle_TDataXtd_Pattern_2 extends Handle_TDataXtd_Pattern {
    constructor(thePtr: TDataXtd_Pattern);
  }

  export declare class Handle_TDataXtd_Pattern_3 extends Handle_TDataXtd_Pattern {
    constructor(theHandle: Handle_TDataXtd_Pattern);
  }

  export declare class Handle_TDataXtd_Pattern_4 extends Handle_TDataXtd_Pattern {
    constructor(theHandle: Handle_TDataXtd_Pattern);
  }

export declare class Handle_TDataXtd_PatternStd {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_PatternStd): void;
  get(): TDataXtd_PatternStd;
}

  export declare class Handle_TDataXtd_PatternStd_1 extends Handle_TDataXtd_PatternStd {
    constructor();
  }

  export declare class Handle_TDataXtd_PatternStd_2 extends Handle_TDataXtd_PatternStd {
    constructor(thePtr: TDataXtd_PatternStd);
  }

  export declare class Handle_TDataXtd_PatternStd_3 extends Handle_TDataXtd_PatternStd {
    constructor(theHandle: Handle_TDataXtd_PatternStd);
  }

  export declare class Handle_TDataXtd_PatternStd_4 extends Handle_TDataXtd_PatternStd {
    constructor(theHandle: Handle_TDataXtd_PatternStd);
  }

export declare class Handle_TNaming_NamedShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TNaming_NamedShape): void;
  get(): TNaming_NamedShape;
}

  export declare class Handle_TNaming_NamedShape_1 extends Handle_TNaming_NamedShape {
    constructor();
  }

  export declare class Handle_TNaming_NamedShape_2 extends Handle_TNaming_NamedShape {
    constructor(thePtr: TNaming_NamedShape);
  }

  export declare class Handle_TNaming_NamedShape_3 extends Handle_TNaming_NamedShape {
    constructor(theHandle: Handle_TNaming_NamedShape);
  }

  export declare class Handle_TNaming_NamedShape_4 extends Handle_TNaming_NamedShape {
    constructor(theHandle: Handle_TNaming_NamedShape);
  }

export declare class Handle_TNaming_Naming {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TNaming_Naming): void;
  get(): TNaming_Naming;
}

  export declare class Handle_TNaming_Naming_1 extends Handle_TNaming_Naming {
    constructor();
  }

  export declare class Handle_TNaming_Naming_2 extends Handle_TNaming_Naming {
    constructor(thePtr: TNaming_Naming);
  }

  export declare class Handle_TNaming_Naming_3 extends Handle_TNaming_Naming {
    constructor(theHandle: Handle_TNaming_Naming);
  }

  export declare class Handle_TNaming_Naming_4 extends Handle_TNaming_Naming {
    constructor(theHandle: Handle_TNaming_Naming);
  }

export declare class Handle_TDataXtd_Presentation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Presentation): void;
  get(): TDataXtd_Presentation;
}

  export declare class Handle_TDataXtd_Presentation_1 extends Handle_TDataXtd_Presentation {
    constructor();
  }

  export declare class Handle_TDataXtd_Presentation_2 extends Handle_TDataXtd_Presentation {
    constructor(thePtr: TDataXtd_Presentation);
  }

  export declare class Handle_TDataXtd_Presentation_3 extends Handle_TDataXtd_Presentation {
    constructor(theHandle: Handle_TDataXtd_Presentation);
  }

  export declare class Handle_TDataXtd_Presentation_4 extends Handle_TDataXtd_Presentation {
    constructor(theHandle: Handle_TDataXtd_Presentation);
  }

export declare class Handle_TDataXtd_HArray1OfTrsf {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_HArray1OfTrsf): void;
  get(): TDataXtd_HArray1OfTrsf;
}

  export declare class Handle_TDataXtd_HArray1OfTrsf_1 extends Handle_TDataXtd_HArray1OfTrsf {
    constructor();
  }

  export declare class Handle_TDataXtd_HArray1OfTrsf_2 extends Handle_TDataXtd_HArray1OfTrsf {
    constructor(thePtr: TDataXtd_HArray1OfTrsf);
  }

  export declare class Handle_TDataXtd_HArray1OfTrsf_3 extends Handle_TDataXtd_HArray1OfTrsf {
    constructor(theHandle: Handle_TDataXtd_HArray1OfTrsf);
  }

  export declare class Handle_TDataXtd_HArray1OfTrsf_4 extends Handle_TDataXtd_HArray1OfTrsf {
    constructor(theHandle: Handle_TDataXtd_HArray1OfTrsf);
  }

export declare class Handle_TDataXtd_Triangulation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataXtd_Triangulation): void;
  get(): TDataXtd_Triangulation;
}

  export declare class Handle_TDataXtd_Triangulation_1 extends Handle_TDataXtd_Triangulation {
    constructor();
  }

  export declare class Handle_TDataXtd_Triangulation_2 extends Handle_TDataXtd_Triangulation {
    constructor(thePtr: TDataXtd_Triangulation);
  }

  export declare class Handle_TDataXtd_Triangulation_3 extends Handle_TDataXtd_Triangulation {
    constructor(theHandle: Handle_TDataXtd_Triangulation);
  }

  export declare class Handle_TDataXtd_Triangulation_4 extends Handle_TDataXtd_Triangulation {
    constructor(theHandle: Handle_TDataXtd_Triangulation);
  }

export declare class TNaming_DataMapOfShapePtrRefShape extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TNaming_DataMapOfShapePtrRefShape): void;
  Assign(theOther: TNaming_DataMapOfShapePtrRefShape): TNaming_DataMapOfShapePtrRefShape;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TNaming_PtrRefShape): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TNaming_PtrRefShape): TNaming_PtrRefShape;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TNaming_PtrRefShape;
  Find_1(theKey: TopoDS_Shape): TNaming_PtrRefShape;
  Find_2(theKey: TopoDS_Shape, theValue: TNaming_PtrRefShape): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TNaming_PtrRefShape;
  ChangeFind(theKey: TopoDS_Shape): TNaming_PtrRefShape;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TNaming_DataMapOfShapePtrRefShape_1 extends TNaming_DataMapOfShapePtrRefShape {
    constructor();
  }

  export declare class TNaming_DataMapOfShapePtrRefShape_2 extends TNaming_DataMapOfShapePtrRefShape {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TNaming_DataMapOfShapePtrRefShape_3 extends TNaming_DataMapOfShapePtrRefShape {
    constructor(theOther: TNaming_DataMapOfShapePtrRefShape);
  }

export declare class TNaming_DataMapOfShapeShapesSet extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: TNaming_DataMapOfShapeShapesSet): void;
  Assign(theOther: TNaming_DataMapOfShapeShapesSet): TNaming_DataMapOfShapeShapesSet;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: TopoDS_Shape, theItem: TNaming_ShapesSet): Standard_Boolean;
  Bound(theKey: TopoDS_Shape, theItem: TNaming_ShapesSet): TNaming_ShapesSet;
  IsBound(theKey: TopoDS_Shape): Standard_Boolean;
  UnBind(theKey: TopoDS_Shape): Standard_Boolean;
  Seek(theKey: TopoDS_Shape): TNaming_ShapesSet;
  Find_1(theKey: TopoDS_Shape): TNaming_ShapesSet;
  Find_2(theKey: TopoDS_Shape, theValue: TNaming_ShapesSet): Standard_Boolean;
  ChangeSeek(theKey: TopoDS_Shape): TNaming_ShapesSet;
  ChangeFind(theKey: TopoDS_Shape): TNaming_ShapesSet;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class TNaming_DataMapOfShapeShapesSet_1 extends TNaming_DataMapOfShapeShapesSet {
    constructor();
  }

  export declare class TNaming_DataMapOfShapeShapesSet_2 extends TNaming_DataMapOfShapeShapesSet {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class TNaming_DataMapOfShapeShapesSet_3 extends TNaming_DataMapOfShapeShapesSet {
    constructor(theOther: TNaming_DataMapOfShapeShapesSet);
  }

export declare class Handle_TNaming_DeltaOnModification {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TNaming_DeltaOnModification): void;
  get(): TNaming_DeltaOnModification;
}

  export declare class Handle_TNaming_DeltaOnModification_1 extends Handle_TNaming_DeltaOnModification {
    constructor();
  }

  export declare class Handle_TNaming_DeltaOnModification_2 extends Handle_TNaming_DeltaOnModification {
    constructor(thePtr: TNaming_DeltaOnModification);
  }

  export declare class Handle_TNaming_DeltaOnModification_3 extends Handle_TNaming_DeltaOnModification {
    constructor(theHandle: Handle_TNaming_DeltaOnModification);
  }

  export declare class Handle_TNaming_DeltaOnModification_4 extends Handle_TNaming_DeltaOnModification {
    constructor(theHandle: Handle_TNaming_DeltaOnModification);
  }

export declare class Handle_TNaming_DeltaOnRemoval {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TNaming_DeltaOnRemoval): void;
  get(): TNaming_DeltaOnRemoval;
}

  export declare class Handle_TNaming_DeltaOnRemoval_1 extends Handle_TNaming_DeltaOnRemoval {
    constructor();
  }

  export declare class Handle_TNaming_DeltaOnRemoval_2 extends Handle_TNaming_DeltaOnRemoval {
    constructor(thePtr: TNaming_DeltaOnRemoval);
  }

  export declare class Handle_TNaming_DeltaOnRemoval_3 extends Handle_TNaming_DeltaOnRemoval {
    constructor(theHandle: Handle_TNaming_DeltaOnRemoval);
  }

  export declare class Handle_TNaming_DeltaOnRemoval_4 extends Handle_TNaming_DeltaOnRemoval {
    constructor(theHandle: Handle_TNaming_DeltaOnRemoval);
  }

export declare class TNaming_ListOfIndexedDataMapOfShapeListOfShape extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TNaming_ListOfIndexedDataMapOfShapeListOfShape): TNaming_ListOfIndexedDataMapOfShapeListOfShape;
  Clear(theAllocator: any): void;
  First_1(): TopTools_IndexedDataMapOfShapeListOfShape;
  First_2(): TopTools_IndexedDataMapOfShapeListOfShape;
  Last_1(): TopTools_IndexedDataMapOfShapeListOfShape;
  Last_2(): TopTools_IndexedDataMapOfShapeListOfShape;
  Append_1(theItem: TopTools_IndexedDataMapOfShapeListOfShape): TopTools_IndexedDataMapOfShapeListOfShape;
  Append_3(theOther: TNaming_ListOfIndexedDataMapOfShapeListOfShape): void;
  Prepend_1(theItem: TopTools_IndexedDataMapOfShapeListOfShape): TopTools_IndexedDataMapOfShapeListOfShape;
  Prepend_2(theOther: TNaming_ListOfIndexedDataMapOfShapeListOfShape): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TNaming_ListOfIndexedDataMapOfShapeListOfShape_1 extends TNaming_ListOfIndexedDataMapOfShapeListOfShape {
    constructor();
  }

  export declare class TNaming_ListOfIndexedDataMapOfShapeListOfShape_2 extends TNaming_ListOfIndexedDataMapOfShapeListOfShape {
    constructor(theAllocator: any);
  }

  export declare class TNaming_ListOfIndexedDataMapOfShapeListOfShape_3 extends TNaming_ListOfIndexedDataMapOfShapeListOfShape {
    constructor(theOther: TNaming_ListOfIndexedDataMapOfShapeListOfShape);
  }

export declare class TNaming_ListOfMapOfShape extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: TNaming_ListOfMapOfShape): TNaming_ListOfMapOfShape;
  Clear(theAllocator: any): void;
  First_1(): TopTools_MapOfShape;
  First_2(): TopTools_MapOfShape;
  Last_1(): TopTools_MapOfShape;
  Last_2(): TopTools_MapOfShape;
  Append_1(theItem: TopTools_MapOfShape): TopTools_MapOfShape;
  Append_3(theOther: TNaming_ListOfMapOfShape): void;
  Prepend_1(theItem: TopTools_MapOfShape): TopTools_MapOfShape;
  Prepend_2(theOther: TNaming_ListOfMapOfShape): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class TNaming_ListOfMapOfShape_1 extends TNaming_ListOfMapOfShape {
    constructor();
  }

  export declare class TNaming_ListOfMapOfShape_2 extends TNaming_ListOfMapOfShape {
    constructor(theAllocator: any);
  }

  export declare class TNaming_ListOfMapOfShape_3 extends TNaming_ListOfMapOfShape {
    constructor(theOther: TNaming_ListOfMapOfShape);
  }

export declare class Handle_TNaming_TranslateTool {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TNaming_TranslateTool): void;
  get(): TNaming_TranslateTool;
}

  export declare class Handle_TNaming_TranslateTool_1 extends Handle_TNaming_TranslateTool {
    constructor();
  }

  export declare class Handle_TNaming_TranslateTool_2 extends Handle_TNaming_TranslateTool {
    constructor(thePtr: TNaming_TranslateTool);
  }

  export declare class Handle_TNaming_TranslateTool_3 extends Handle_TNaming_TranslateTool {
    constructor(theHandle: Handle_TNaming_TranslateTool);
  }

  export declare class Handle_TNaming_TranslateTool_4 extends Handle_TNaming_TranslateTool {
    constructor(theHandle: Handle_TNaming_TranslateTool);
  }

export declare class Handle_TNaming_UsedShapes {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TNaming_UsedShapes): void;
  get(): TNaming_UsedShapes;
}

  export declare class Handle_TNaming_UsedShapes_1 extends Handle_TNaming_UsedShapes {
    constructor();
  }

  export declare class Handle_TNaming_UsedShapes_2 extends Handle_TNaming_UsedShapes {
    constructor(thePtr: TNaming_UsedShapes);
  }

  export declare class Handle_TNaming_UsedShapes_3 extends Handle_TNaming_UsedShapes {
    constructor(theHandle: Handle_TNaming_UsedShapes);
  }

  export declare class Handle_TNaming_UsedShapes_4 extends Handle_TNaming_UsedShapes {
    constructor(theHandle: Handle_TNaming_UsedShapes);
  }

export declare type TDataXtd_GeometryEnum = {
  TDataXtd_ANY_GEOM: {};
  TDataXtd_POINT: {};
  TDataXtd_LINE: {};
  TDataXtd_CIRCLE: {};
  TDataXtd_ELLIPSE: {};
  TDataXtd_SPLINE: {};
  TDataXtd_PLANE: {};
  TDataXtd_CYLINDER: {};
}

export declare type TDataXtd_ConstraintEnum = {
  TDataXtd_RADIUS: {};
  TDataXtd_DIAMETER: {};
  TDataXtd_MINOR_RADIUS: {};
  TDataXtd_MAJOR_RADIUS: {};
  TDataXtd_TANGENT: {};
  TDataXtd_PARALLEL: {};
  TDataXtd_PERPENDICULAR: {};
  TDataXtd_CONCENTRIC: {};
  TDataXtd_COINCIDENT: {};
  TDataXtd_DISTANCE: {};
  TDataXtd_ANGLE: {};
  TDataXtd_EQUAL_RADIUS: {};
  TDataXtd_SYMMETRY: {};
  TDataXtd_MIDPOINT: {};
  TDataXtd_EQUAL_DISTANCE: {};
  TDataXtd_FIX: {};
  TDataXtd_RIGID: {};
  TDataXtd_FROM: {};
  TDataXtd_AXIS: {};
  TDataXtd_MATE: {};
  TDataXtd_ALIGN_FACES: {};
  TDataXtd_ALIGN_AXES: {};
  TDataXtd_AXES_ANGLE: {};
  TDataXtd_FACES_ANGLE: {};
  TDataXtd_ROUND: {};
  TDataXtd_OFFSET: {};
}

export declare type TNaming_Evolution = {
  TNaming_PRIMITIVE: {};
  TNaming_GENERATED: {};
  TNaming_MODIFY: {};
  TNaming_DELETE: {};
  TNaming_REPLACE: {};
  TNaming_SELECTED: {};
}

export declare type TNaming_NameType = {
  TNaming_UNKNOWN: {};
  TNaming_IDENTITY: {};
  TNaming_MODIFUNTIL: {};
  TNaming_GENERATION: {};
  TNaming_INTERSECTION: {};
  TNaming_UNION: {};
  TNaming_SUBSTRACTION: {};
  TNaming_CONSTSHAPE: {};
  TNaming_FILTERBYNEIGHBOURGS: {};
  TNaming_ORIENTATION: {};
  TNaming_WIREIN: {};
  TNaming_SHELLIN: {};
}

export declare type TKCAFLib = {
  TDataXtd_Shape: typeof TDataXtd_Shape;
  TDataXtd_Point: typeof TDataXtd_Point;
  TDataXtd_Axis: typeof TDataXtd_Axis;
  TDataXtd_Plane: typeof TDataXtd_Plane;
  TDataXtd_Placement: typeof TDataXtd_Placement;
  TDataXtd_Geometry: typeof TDataXtd_Geometry;
  TDataXtd_Position: typeof TDataXtd_Position;
  TDataXtd_Constraint: typeof TDataXtd_Constraint;
  TDataXtd_PatternStd: typeof TDataXtd_PatternStd;
  TNaming_NamedShape: typeof TNaming_NamedShape;
  TNaming_Name: typeof TNaming_Name;
  TNaming_Naming: typeof TNaming_Naming;
  TDataXtd_Presentation: typeof TDataXtd_Presentation;
  TDataXtd_Triangulation: typeof TDataXtd_Triangulation;
  TNaming_Builder: typeof TNaming_Builder;
  TNaming_ShapesSet_1: typeof TNaming_ShapesSet_1;
  TNaming_ShapesSet_2: typeof TNaming_ShapesSet_2;
  TNaming_DeltaOnModification: typeof TNaming_DeltaOnModification;
  TNaming_DeltaOnRemoval: typeof TNaming_DeltaOnRemoval;
  TNaming_Identifier_1: typeof TNaming_Identifier_1;
  TNaming_Identifier_2: typeof TNaming_Identifier_2;
  TNaming_Iterator_1: typeof TNaming_Iterator_1;
  TNaming_Iterator_2: typeof TNaming_Iterator_2;
  TNaming_Iterator_3: typeof TNaming_Iterator_3;
  TNaming_IteratorOnShapesSet_1: typeof TNaming_IteratorOnShapesSet_1;
  TNaming_IteratorOnShapesSet_2: typeof TNaming_IteratorOnShapesSet_2;
  TNaming_Localizer: typeof TNaming_Localizer;
  TNaming_NewShapeIterator_1: typeof TNaming_NewShapeIterator_1;
  TNaming_NewShapeIterator_2: typeof TNaming_NewShapeIterator_2;
  TNaming_NewShapeIterator_3: typeof TNaming_NewShapeIterator_3;
  TNaming_NewShapeIterator_4: typeof TNaming_NewShapeIterator_4;
  TNaming_OldShapeIterator_1: typeof TNaming_OldShapeIterator_1;
  TNaming_OldShapeIterator_2: typeof TNaming_OldShapeIterator_2;
  TNaming_OldShapeIterator_3: typeof TNaming_OldShapeIterator_3;
  TNaming_OldShapeIterator_4: typeof TNaming_OldShapeIterator_4;
  TNaming_RefShape_1: typeof TNaming_RefShape_1;
  TNaming_RefShape_2: typeof TNaming_RefShape_2;
  TNaming_SameShapeIterator: typeof TNaming_SameShapeIterator;
  TNaming_Scope_1: typeof TNaming_Scope_1;
  TNaming_Scope_2: typeof TNaming_Scope_2;
  TNaming_Scope_3: typeof TNaming_Scope_3;
  TNaming_Selector: typeof TNaming_Selector;
  TNaming_Translator: typeof TNaming_Translator;
  Handle_AppStd_Application_1: typeof Handle_AppStd_Application_1;
  Handle_AppStd_Application_2: typeof Handle_AppStd_Application_2;
  Handle_AppStd_Application_3: typeof Handle_AppStd_Application_3;
  Handle_AppStd_Application_4: typeof Handle_AppStd_Application_4;
  Handle_TDataXtd_Shape_1: typeof Handle_TDataXtd_Shape_1;
  Handle_TDataXtd_Shape_2: typeof Handle_TDataXtd_Shape_2;
  Handle_TDataXtd_Shape_3: typeof Handle_TDataXtd_Shape_3;
  Handle_TDataXtd_Shape_4: typeof Handle_TDataXtd_Shape_4;
  Handle_TDataXtd_Point_1: typeof Handle_TDataXtd_Point_1;
  Handle_TDataXtd_Point_2: typeof Handle_TDataXtd_Point_2;
  Handle_TDataXtd_Point_3: typeof Handle_TDataXtd_Point_3;
  Handle_TDataXtd_Point_4: typeof Handle_TDataXtd_Point_4;
  Handle_TDataXtd_Axis_1: typeof Handle_TDataXtd_Axis_1;
  Handle_TDataXtd_Axis_2: typeof Handle_TDataXtd_Axis_2;
  Handle_TDataXtd_Axis_3: typeof Handle_TDataXtd_Axis_3;
  Handle_TDataXtd_Axis_4: typeof Handle_TDataXtd_Axis_4;
  Handle_TDataXtd_Plane_1: typeof Handle_TDataXtd_Plane_1;
  Handle_TDataXtd_Plane_2: typeof Handle_TDataXtd_Plane_2;
  Handle_TDataXtd_Plane_3: typeof Handle_TDataXtd_Plane_3;
  Handle_TDataXtd_Plane_4: typeof Handle_TDataXtd_Plane_4;
  Handle_TDataXtd_Placement_1: typeof Handle_TDataXtd_Placement_1;
  Handle_TDataXtd_Placement_2: typeof Handle_TDataXtd_Placement_2;
  Handle_TDataXtd_Placement_3: typeof Handle_TDataXtd_Placement_3;
  Handle_TDataXtd_Placement_4: typeof Handle_TDataXtd_Placement_4;
  Handle_TDataXtd_Geometry_1: typeof Handle_TDataXtd_Geometry_1;
  Handle_TDataXtd_Geometry_2: typeof Handle_TDataXtd_Geometry_2;
  Handle_TDataXtd_Geometry_3: typeof Handle_TDataXtd_Geometry_3;
  Handle_TDataXtd_Geometry_4: typeof Handle_TDataXtd_Geometry_4;
  Handle_TDataXtd_Position_1: typeof Handle_TDataXtd_Position_1;
  Handle_TDataXtd_Position_2: typeof Handle_TDataXtd_Position_2;
  Handle_TDataXtd_Position_3: typeof Handle_TDataXtd_Position_3;
  Handle_TDataXtd_Position_4: typeof Handle_TDataXtd_Position_4;
  Handle_TDataXtd_Constraint_1: typeof Handle_TDataXtd_Constraint_1;
  Handle_TDataXtd_Constraint_2: typeof Handle_TDataXtd_Constraint_2;
  Handle_TDataXtd_Constraint_3: typeof Handle_TDataXtd_Constraint_3;
  Handle_TDataXtd_Constraint_4: typeof Handle_TDataXtd_Constraint_4;
  TDataXtd_Array1OfTrsf_1: typeof TDataXtd_Array1OfTrsf_1;
  TDataXtd_Array1OfTrsf_2: typeof TDataXtd_Array1OfTrsf_2;
  TDataXtd_Array1OfTrsf_3: typeof TDataXtd_Array1OfTrsf_3;
  TDataXtd_Array1OfTrsf_4: typeof TDataXtd_Array1OfTrsf_4;
  TDataXtd_Array1OfTrsf_5: typeof TDataXtd_Array1OfTrsf_5;
  Handle_TDataXtd_Pattern_1: typeof Handle_TDataXtd_Pattern_1;
  Handle_TDataXtd_Pattern_2: typeof Handle_TDataXtd_Pattern_2;
  Handle_TDataXtd_Pattern_3: typeof Handle_TDataXtd_Pattern_3;
  Handle_TDataXtd_Pattern_4: typeof Handle_TDataXtd_Pattern_4;
  Handle_TDataXtd_PatternStd_1: typeof Handle_TDataXtd_PatternStd_1;
  Handle_TDataXtd_PatternStd_2: typeof Handle_TDataXtd_PatternStd_2;
  Handle_TDataXtd_PatternStd_3: typeof Handle_TDataXtd_PatternStd_3;
  Handle_TDataXtd_PatternStd_4: typeof Handle_TDataXtd_PatternStd_4;
  Handle_TNaming_NamedShape_1: typeof Handle_TNaming_NamedShape_1;
  Handle_TNaming_NamedShape_2: typeof Handle_TNaming_NamedShape_2;
  Handle_TNaming_NamedShape_3: typeof Handle_TNaming_NamedShape_3;
  Handle_TNaming_NamedShape_4: typeof Handle_TNaming_NamedShape_4;
  Handle_TNaming_Naming_1: typeof Handle_TNaming_Naming_1;
  Handle_TNaming_Naming_2: typeof Handle_TNaming_Naming_2;
  Handle_TNaming_Naming_3: typeof Handle_TNaming_Naming_3;
  Handle_TNaming_Naming_4: typeof Handle_TNaming_Naming_4;
  Handle_TDataXtd_Presentation_1: typeof Handle_TDataXtd_Presentation_1;
  Handle_TDataXtd_Presentation_2: typeof Handle_TDataXtd_Presentation_2;
  Handle_TDataXtd_Presentation_3: typeof Handle_TDataXtd_Presentation_3;
  Handle_TDataXtd_Presentation_4: typeof Handle_TDataXtd_Presentation_4;
  Handle_TDataXtd_HArray1OfTrsf_1: typeof Handle_TDataXtd_HArray1OfTrsf_1;
  Handle_TDataXtd_HArray1OfTrsf_2: typeof Handle_TDataXtd_HArray1OfTrsf_2;
  Handle_TDataXtd_HArray1OfTrsf_3: typeof Handle_TDataXtd_HArray1OfTrsf_3;
  Handle_TDataXtd_HArray1OfTrsf_4: typeof Handle_TDataXtd_HArray1OfTrsf_4;
  Handle_TDataXtd_Triangulation_1: typeof Handle_TDataXtd_Triangulation_1;
  Handle_TDataXtd_Triangulation_2: typeof Handle_TDataXtd_Triangulation_2;
  Handle_TDataXtd_Triangulation_3: typeof Handle_TDataXtd_Triangulation_3;
  Handle_TDataXtd_Triangulation_4: typeof Handle_TDataXtd_Triangulation_4;
  TNaming_DataMapOfShapePtrRefShape_1: typeof TNaming_DataMapOfShapePtrRefShape_1;
  TNaming_DataMapOfShapePtrRefShape_2: typeof TNaming_DataMapOfShapePtrRefShape_2;
  TNaming_DataMapOfShapePtrRefShape_3: typeof TNaming_DataMapOfShapePtrRefShape_3;
  TNaming_DataMapOfShapeShapesSet_1: typeof TNaming_DataMapOfShapeShapesSet_1;
  TNaming_DataMapOfShapeShapesSet_2: typeof TNaming_DataMapOfShapeShapesSet_2;
  TNaming_DataMapOfShapeShapesSet_3: typeof TNaming_DataMapOfShapeShapesSet_3;
  Handle_TNaming_DeltaOnModification_1: typeof Handle_TNaming_DeltaOnModification_1;
  Handle_TNaming_DeltaOnModification_2: typeof Handle_TNaming_DeltaOnModification_2;
  Handle_TNaming_DeltaOnModification_3: typeof Handle_TNaming_DeltaOnModification_3;
  Handle_TNaming_DeltaOnModification_4: typeof Handle_TNaming_DeltaOnModification_4;
  Handle_TNaming_DeltaOnRemoval_1: typeof Handle_TNaming_DeltaOnRemoval_1;
  Handle_TNaming_DeltaOnRemoval_2: typeof Handle_TNaming_DeltaOnRemoval_2;
  Handle_TNaming_DeltaOnRemoval_3: typeof Handle_TNaming_DeltaOnRemoval_3;
  Handle_TNaming_DeltaOnRemoval_4: typeof Handle_TNaming_DeltaOnRemoval_4;
  TNaming_ListOfIndexedDataMapOfShapeListOfShape_1: typeof TNaming_ListOfIndexedDataMapOfShapeListOfShape_1;
  TNaming_ListOfIndexedDataMapOfShapeListOfShape_2: typeof TNaming_ListOfIndexedDataMapOfShapeListOfShape_2;
  TNaming_ListOfIndexedDataMapOfShapeListOfShape_3: typeof TNaming_ListOfIndexedDataMapOfShapeListOfShape_3;
  TNaming_ListOfMapOfShape_1: typeof TNaming_ListOfMapOfShape_1;
  TNaming_ListOfMapOfShape_2: typeof TNaming_ListOfMapOfShape_2;
  TNaming_ListOfMapOfShape_3: typeof TNaming_ListOfMapOfShape_3;
  Handle_TNaming_TranslateTool_1: typeof Handle_TNaming_TranslateTool_1;
  Handle_TNaming_TranslateTool_2: typeof Handle_TNaming_TranslateTool_2;
  Handle_TNaming_TranslateTool_3: typeof Handle_TNaming_TranslateTool_3;
  Handle_TNaming_TranslateTool_4: typeof Handle_TNaming_TranslateTool_4;
  Handle_TNaming_UsedShapes_1: typeof Handle_TNaming_UsedShapes_1;
  Handle_TNaming_UsedShapes_2: typeof Handle_TNaming_UsedShapes_2;
  Handle_TNaming_UsedShapes_3: typeof Handle_TNaming_UsedShapes_3;
  Handle_TNaming_UsedShapes_4: typeof Handle_TNaming_UsedShapes_4;
  TDataXtd_GeometryEnum: typeof TDataXtd_GeometryEnum;
  TDataXtd_ConstraintEnum: typeof TDataXtd_ConstraintEnum;
  TNaming_Evolution: typeof TNaming_Evolution;
  TNaming_NameType: typeof TNaming_NameType;
};
