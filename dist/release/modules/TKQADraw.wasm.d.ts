declare const libName = "./modules/TKQADraw.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Handle_QABugs_PresentableObject {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: QABugs_PresentableObject): void;
  get(): QABugs_PresentableObject;
}

  export declare class Handle_QABugs_PresentableObject_1 extends Handle_QABugs_PresentableObject {
    constructor();
  }

  export declare class Handle_QABugs_PresentableObject_2 extends Handle_QABugs_PresentableObject {
    constructor(thePtr: QABugs_PresentableObject);
  }

  export declare class Handle_QABugs_PresentableObject_3 extends Handle_QABugs_PresentableObject {
    constructor(theHandle: Handle_QABugs_PresentableObject);
  }

  export declare class Handle_QABugs_PresentableObject_4 extends Handle_QABugs_PresentableObject {
    constructor(theHandle: Handle_QABugs_PresentableObject);
  }

export declare class QANCollection_DataMapOfRealPnt extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: QANCollection_DataMapOfRealPnt): void;
  Assign(theOther: QANCollection_DataMapOfRealPnt): QANCollection_DataMapOfRealPnt;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Real, theItem: gp_Pnt): Standard_Boolean;
  Bound(theKey: Standard_Real, theItem: gp_Pnt): gp_Pnt;
  IsBound(theKey: Standard_Real): Standard_Boolean;
  UnBind(theKey: Standard_Real): Standard_Boolean;
  Seek(theKey: Standard_Real): gp_Pnt;
  Find_1(theKey: Standard_Real): gp_Pnt;
  Find_2(theKey: Standard_Real, theValue: gp_Pnt): Standard_Boolean;
  ChangeSeek(theKey: Standard_Real): gp_Pnt;
  ChangeFind(theKey: Standard_Real): gp_Pnt;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class QANCollection_DataMapOfRealPnt_1 extends QANCollection_DataMapOfRealPnt {
    constructor();
  }

  export declare class QANCollection_DataMapOfRealPnt_2 extends QANCollection_DataMapOfRealPnt {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class QANCollection_DataMapOfRealPnt_3 extends QANCollection_DataMapOfRealPnt {
    constructor(theOther: QANCollection_DataMapOfRealPnt);
  }

export declare class QANCollection_DoubleMapOfRealInteger extends NCollection_BaseMap {
  Exchange(theOther: QANCollection_DoubleMapOfRealInteger): void;
  Assign(theOther: QANCollection_DoubleMapOfRealInteger): QANCollection_DoubleMapOfRealInteger;
  ReSize(N: Standard_Integer): void;
  Bind(theKey1: Standard_Real, theKey2: Standard_Integer): void;
  AreBound(theKey1: Standard_Real, theKey2: Standard_Integer): Standard_Boolean;
  IsBound1(theKey1: Standard_Real): Standard_Boolean;
  IsBound2(theKey2: Standard_Integer): Standard_Boolean;
  UnBind1(theKey1: Standard_Real): Standard_Boolean;
  UnBind2(theKey2: Standard_Integer): Standard_Boolean;
  Find1_1(theKey1: Standard_Real): Standard_Integer;
  Find1_2(theKey1: Standard_Real, theKey2: Standard_Integer): Standard_Boolean;
  Seek1(theKey1: Standard_Real): Standard_Integer;
  Find2_1(theKey2: Standard_Integer): Standard_Real;
  Find2_2(theKey2: Standard_Integer, theKey1: Standard_Real): Standard_Boolean;
  Seek2(theKey2: Standard_Integer): Standard_Real;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class QANCollection_DoubleMapOfRealInteger_1 extends QANCollection_DoubleMapOfRealInteger {
    constructor();
  }

  export declare class QANCollection_DoubleMapOfRealInteger_2 extends QANCollection_DoubleMapOfRealInteger {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class QANCollection_DoubleMapOfRealInteger_3 extends QANCollection_DoubleMapOfRealInteger {
    constructor(theOther: QANCollection_DoubleMapOfRealInteger);
  }

export declare class QANCollection_IndexedDataMapOfRealPnt extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: QANCollection_IndexedDataMapOfRealPnt): void;
  Assign(theOther: QANCollection_IndexedDataMapOfRealPnt): QANCollection_IndexedDataMapOfRealPnt;
  ReSize(N: Standard_Integer): void;
  Add(theKey1: Standard_Real, theItem: gp_Pnt): Standard_Integer;
  Contains(theKey1: Standard_Real): Standard_Boolean;
  Substitute(theIndex: Standard_Integer, theKey1: Standard_Real, theItem: gp_Pnt): void;
  Swap(theIndex1: Standard_Integer, theIndex2: Standard_Integer): void;
  RemoveLast(): void;
  RemoveFromIndex(theIndex: Standard_Integer): void;
  RemoveKey(theKey1: Standard_Real): void;
  FindKey(theIndex: Standard_Integer): Standard_Real;
  FindFromIndex(theIndex: Standard_Integer): gp_Pnt;
  ChangeFromIndex(theIndex: Standard_Integer): gp_Pnt;
  FindIndex(theKey1: Standard_Real): Standard_Integer;
  FindFromKey_1(theKey1: Standard_Real): gp_Pnt;
  ChangeFromKey(theKey1: Standard_Real): gp_Pnt;
  Seek(theKey1: Standard_Real): gp_Pnt;
  ChangeSeek(theKey1: Standard_Real): gp_Pnt;
  FindFromKey_2(theKey1: Standard_Real, theValue: gp_Pnt): Standard_Boolean;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class QANCollection_IndexedDataMapOfRealPnt_1 extends QANCollection_IndexedDataMapOfRealPnt {
    constructor();
  }

  export declare class QANCollection_IndexedDataMapOfRealPnt_2 extends QANCollection_IndexedDataMapOfRealPnt {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class QANCollection_IndexedDataMapOfRealPnt_3 extends QANCollection_IndexedDataMapOfRealPnt {
    constructor(theOther: QANCollection_IndexedDataMapOfRealPnt);
  }

export declare class QANCollection_ListOfPnt extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: QANCollection_ListOfPnt): QANCollection_ListOfPnt;
  Clear(theAllocator: any): void;
  First_1(): gp_Pnt;
  First_2(): gp_Pnt;
  Last_1(): gp_Pnt;
  Last_2(): gp_Pnt;
  Append_1(theItem: gp_Pnt): gp_Pnt;
  Append_3(theOther: QANCollection_ListOfPnt): void;
  Prepend_1(theItem: gp_Pnt): gp_Pnt;
  Prepend_2(theOther: QANCollection_ListOfPnt): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class QANCollection_ListOfPnt_1 extends QANCollection_ListOfPnt {
    constructor();
  }

  export declare class QANCollection_ListOfPnt_2 extends QANCollection_ListOfPnt {
    constructor(theAllocator: any);
  }

  export declare class QANCollection_ListOfPnt_3 extends QANCollection_ListOfPnt {
    constructor(theOther: QANCollection_ListOfPnt);
  }

export declare type TKQADrawLib = {
  Handle_QABugs_PresentableObject_1: typeof Handle_QABugs_PresentableObject_1;
  Handle_QABugs_PresentableObject_2: typeof Handle_QABugs_PresentableObject_2;
  Handle_QABugs_PresentableObject_3: typeof Handle_QABugs_PresentableObject_3;
  Handle_QABugs_PresentableObject_4: typeof Handle_QABugs_PresentableObject_4;
  QANCollection_DataMapOfRealPnt_1: typeof QANCollection_DataMapOfRealPnt_1;
  QANCollection_DataMapOfRealPnt_2: typeof QANCollection_DataMapOfRealPnt_2;
  QANCollection_DataMapOfRealPnt_3: typeof QANCollection_DataMapOfRealPnt_3;
  QANCollection_DoubleMapOfRealInteger_1: typeof QANCollection_DoubleMapOfRealInteger_1;
  QANCollection_DoubleMapOfRealInteger_2: typeof QANCollection_DoubleMapOfRealInteger_2;
  QANCollection_DoubleMapOfRealInteger_3: typeof QANCollection_DoubleMapOfRealInteger_3;
  QANCollection_IndexedDataMapOfRealPnt_1: typeof QANCollection_IndexedDataMapOfRealPnt_1;
  QANCollection_IndexedDataMapOfRealPnt_2: typeof QANCollection_IndexedDataMapOfRealPnt_2;
  QANCollection_IndexedDataMapOfRealPnt_3: typeof QANCollection_IndexedDataMapOfRealPnt_3;
  QANCollection_ListOfPnt_1: typeof QANCollection_ListOfPnt_1;
  QANCollection_ListOfPnt_2: typeof QANCollection_ListOfPnt_2;
  QANCollection_ListOfPnt_3: typeof QANCollection_ListOfPnt_3;
};
