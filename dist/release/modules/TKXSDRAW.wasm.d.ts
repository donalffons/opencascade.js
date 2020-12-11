declare const libName = "./modules/TKXSDRAW.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class Handle_XSDRAW_Vars {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSDRAW_Vars): void;
  get(): XSDRAW_Vars;
}

  export declare class Handle_XSDRAW_Vars_1 extends Handle_XSDRAW_Vars {
    constructor();
  }

  export declare class Handle_XSDRAW_Vars_2 extends Handle_XSDRAW_Vars {
    constructor(thePtr: XSDRAW_Vars);
  }

  export declare class Handle_XSDRAW_Vars_3 extends Handle_XSDRAW_Vars {
    constructor(theHandle: Handle_XSDRAW_Vars);
  }

  export declare class Handle_XSDRAW_Vars_4 extends Handle_XSDRAW_Vars {
    constructor(theHandle: Handle_XSDRAW_Vars);
  }

export declare class XSDRAWSTLVRML_CoordsMap extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: XSDRAWSTLVRML_CoordsMap): void;
  Assign(theOther: XSDRAWSTLVRML_CoordsMap): XSDRAWSTLVRML_CoordsMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TColStd_DataMapOfIntegerReal): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TColStd_DataMapOfIntegerReal): TColStd_DataMapOfIntegerReal;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TColStd_DataMapOfIntegerReal;
  Find_1(theKey: Standard_Integer): TColStd_DataMapOfIntegerReal;
  Find_2(theKey: Standard_Integer, theValue: TColStd_DataMapOfIntegerReal): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TColStd_DataMapOfIntegerReal;
  ChangeFind(theKey: Standard_Integer): TColStd_DataMapOfIntegerReal;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class XSDRAWSTLVRML_CoordsMap_1 extends XSDRAWSTLVRML_CoordsMap {
    constructor();
  }

  export declare class XSDRAWSTLVRML_CoordsMap_2 extends XSDRAWSTLVRML_CoordsMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class XSDRAWSTLVRML_CoordsMap_3 extends XSDRAWSTLVRML_CoordsMap {
    constructor(theOther: XSDRAWSTLVRML_CoordsMap);
  }

export declare class XSDRAWSTLVRML_ElemNodesMap extends NCollection_BaseMap {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Exchange(theOther: XSDRAWSTLVRML_ElemNodesMap): void;
  Assign(theOther: XSDRAWSTLVRML_ElemNodesMap): XSDRAWSTLVRML_ElemNodesMap;
  ReSize(N: Standard_Integer): void;
  Bind(theKey: Standard_Integer, theItem: TColStd_DataMapOfIntegerInteger): Standard_Boolean;
  Bound(theKey: Standard_Integer, theItem: TColStd_DataMapOfIntegerInteger): TColStd_DataMapOfIntegerInteger;
  IsBound(theKey: Standard_Integer): Standard_Boolean;
  UnBind(theKey: Standard_Integer): Standard_Boolean;
  Seek(theKey: Standard_Integer): TColStd_DataMapOfIntegerInteger;
  Find_1(theKey: Standard_Integer): TColStd_DataMapOfIntegerInteger;
  Find_2(theKey: Standard_Integer, theValue: TColStd_DataMapOfIntegerInteger): Standard_Boolean;
  ChangeSeek(theKey: Standard_Integer): TColStd_DataMapOfIntegerInteger;
  ChangeFind(theKey: Standard_Integer): TColStd_DataMapOfIntegerInteger;
  Clear_1(doReleaseMemory: Standard_Boolean): void;
  Clear_2(theAllocator: any): void;
  Size(): Standard_Integer;
}

  export declare class XSDRAWSTLVRML_ElemNodesMap_1 extends XSDRAWSTLVRML_ElemNodesMap {
    constructor();
  }

  export declare class XSDRAWSTLVRML_ElemNodesMap_2 extends XSDRAWSTLVRML_ElemNodesMap {
    constructor(theNbBuckets: Standard_Integer, theAllocator: any);
  }

  export declare class XSDRAWSTLVRML_ElemNodesMap_3 extends XSDRAWSTLVRML_ElemNodesMap {
    constructor(theOther: XSDRAWSTLVRML_ElemNodesMap);
  }

export declare class Handle_XSDRAWSTLVRML_DataSource {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSDRAWSTLVRML_DataSource): void;
  get(): XSDRAWSTLVRML_DataSource;
}

  export declare class Handle_XSDRAWSTLVRML_DataSource_1 extends Handle_XSDRAWSTLVRML_DataSource {
    constructor();
  }

  export declare class Handle_XSDRAWSTLVRML_DataSource_2 extends Handle_XSDRAWSTLVRML_DataSource {
    constructor(thePtr: XSDRAWSTLVRML_DataSource);
  }

  export declare class Handle_XSDRAWSTLVRML_DataSource_3 extends Handle_XSDRAWSTLVRML_DataSource {
    constructor(theHandle: Handle_XSDRAWSTLVRML_DataSource);
  }

  export declare class Handle_XSDRAWSTLVRML_DataSource_4 extends Handle_XSDRAWSTLVRML_DataSource {
    constructor(theHandle: Handle_XSDRAWSTLVRML_DataSource);
  }

export declare class Handle_XSDRAWSTLVRML_DataSource3D {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSDRAWSTLVRML_DataSource3D): void;
  get(): XSDRAWSTLVRML_DataSource3D;
}

  export declare class Handle_XSDRAWSTLVRML_DataSource3D_1 extends Handle_XSDRAWSTLVRML_DataSource3D {
    constructor();
  }

  export declare class Handle_XSDRAWSTLVRML_DataSource3D_2 extends Handle_XSDRAWSTLVRML_DataSource3D {
    constructor(thePtr: XSDRAWSTLVRML_DataSource3D);
  }

  export declare class Handle_XSDRAWSTLVRML_DataSource3D_3 extends Handle_XSDRAWSTLVRML_DataSource3D {
    constructor(theHandle: Handle_XSDRAWSTLVRML_DataSource3D);
  }

  export declare class Handle_XSDRAWSTLVRML_DataSource3D_4 extends Handle_XSDRAWSTLVRML_DataSource3D {
    constructor(theHandle: Handle_XSDRAWSTLVRML_DataSource3D);
  }

export declare class Handle_XSDRAWSTLVRML_DrawableMesh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSDRAWSTLVRML_DrawableMesh): void;
  get(): XSDRAWSTLVRML_DrawableMesh;
}

  export declare class Handle_XSDRAWSTLVRML_DrawableMesh_1 extends Handle_XSDRAWSTLVRML_DrawableMesh {
    constructor();
  }

  export declare class Handle_XSDRAWSTLVRML_DrawableMesh_2 extends Handle_XSDRAWSTLVRML_DrawableMesh {
    constructor(thePtr: XSDRAWSTLVRML_DrawableMesh);
  }

  export declare class Handle_XSDRAWSTLVRML_DrawableMesh_3 extends Handle_XSDRAWSTLVRML_DrawableMesh {
    constructor(theHandle: Handle_XSDRAWSTLVRML_DrawableMesh);
  }

  export declare class Handle_XSDRAWSTLVRML_DrawableMesh_4 extends Handle_XSDRAWSTLVRML_DrawableMesh {
    constructor(theHandle: Handle_XSDRAWSTLVRML_DrawableMesh);
  }

export declare type TKXSDRAWLib = {
  Handle_XSDRAW_Vars_1: typeof Handle_XSDRAW_Vars_1;
  Handle_XSDRAW_Vars_2: typeof Handle_XSDRAW_Vars_2;
  Handle_XSDRAW_Vars_3: typeof Handle_XSDRAW_Vars_3;
  Handle_XSDRAW_Vars_4: typeof Handle_XSDRAW_Vars_4;
  XSDRAWSTLVRML_CoordsMap_1: typeof XSDRAWSTLVRML_CoordsMap_1;
  XSDRAWSTLVRML_CoordsMap_2: typeof XSDRAWSTLVRML_CoordsMap_2;
  XSDRAWSTLVRML_CoordsMap_3: typeof XSDRAWSTLVRML_CoordsMap_3;
  XSDRAWSTLVRML_ElemNodesMap_1: typeof XSDRAWSTLVRML_ElemNodesMap_1;
  XSDRAWSTLVRML_ElemNodesMap_2: typeof XSDRAWSTLVRML_ElemNodesMap_2;
  XSDRAWSTLVRML_ElemNodesMap_3: typeof XSDRAWSTLVRML_ElemNodesMap_3;
  Handle_XSDRAWSTLVRML_DataSource_1: typeof Handle_XSDRAWSTLVRML_DataSource_1;
  Handle_XSDRAWSTLVRML_DataSource_2: typeof Handle_XSDRAWSTLVRML_DataSource_2;
  Handle_XSDRAWSTLVRML_DataSource_3: typeof Handle_XSDRAWSTLVRML_DataSource_3;
  Handle_XSDRAWSTLVRML_DataSource_4: typeof Handle_XSDRAWSTLVRML_DataSource_4;
  Handle_XSDRAWSTLVRML_DataSource3D_1: typeof Handle_XSDRAWSTLVRML_DataSource3D_1;
  Handle_XSDRAWSTLVRML_DataSource3D_2: typeof Handle_XSDRAWSTLVRML_DataSource3D_2;
  Handle_XSDRAWSTLVRML_DataSource3D_3: typeof Handle_XSDRAWSTLVRML_DataSource3D_3;
  Handle_XSDRAWSTLVRML_DataSource3D_4: typeof Handle_XSDRAWSTLVRML_DataSource3D_4;
  Handle_XSDRAWSTLVRML_DrawableMesh_1: typeof Handle_XSDRAWSTLVRML_DrawableMesh_1;
  Handle_XSDRAWSTLVRML_DrawableMesh_2: typeof Handle_XSDRAWSTLVRML_DrawableMesh_2;
  Handle_XSDRAWSTLVRML_DrawableMesh_3: typeof Handle_XSDRAWSTLVRML_DrawableMesh_3;
  Handle_XSDRAWSTLVRML_DrawableMesh_4: typeof Handle_XSDRAWSTLVRML_DrawableMesh_4;
};
