declare const libName = "./modules/TKIGES.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class BRepToIGES_BREntity {
  constructor()
  Init(): void;
  SetModel(model: Handle_IGESData_IGESModel): void;
  GetModel(): any;
  GetUnit(): Standard_Real;
  SetTransferProcess(TP: any): void;
  GetTransferProcess(): any;
  TransferShape(start: TopoDS_Shape, theProgress: Message_ProgressRange): any;
  AddFail_1(start: TopoDS_Shape, amess: Standard_CString): void;
  AddWarning_1(start: TopoDS_Shape, amess: Standard_CString): void;
  AddFail_2(start: any, amess: Standard_CString): void;
  AddWarning_2(start: any, amess: Standard_CString): void;
  HasShapeResult_1(start: TopoDS_Shape): Standard_Boolean;
  GetShapeResult_1(start: TopoDS_Shape): any;
  SetShapeResult_1(start: TopoDS_Shape, result: any): void;
  HasShapeResult_2(start: any): Standard_Boolean;
  GetShapeResult_2(start: any): any;
  SetShapeResult_2(start: any, result: any): void;
  GetConvertSurfaceMode(): Standard_Boolean;
  GetPCurveMode(): Standard_Boolean;
}

export declare class BRepToIGES_BRShell extends BRepToIGES_BREntity {
  TransferShell_1(start: TopoDS_Shape, theProgress: Message_ProgressRange): any;
  TransferShell_2(start: TopoDS_Shell, theProgress: Message_ProgressRange): any;
  TransferFace(start: TopoDS_Face, theProgress: Message_ProgressRange): any;
}

  export declare class BRepToIGES_BRShell_1 extends BRepToIGES_BRShell {
    constructor();
  }

  export declare class BRepToIGES_BRShell_2 extends BRepToIGES_BRShell {
    constructor(BR: BRepToIGES_BREntity);
  }

export declare class BRepToIGES_BRSolid extends BRepToIGES_BREntity {
  TransferSolid_1(start: TopoDS_Shape, theProgress: Message_ProgressRange): any;
  TransferSolid_2(start: TopoDS_Solid, theProgress: Message_ProgressRange): any;
  TransferCompSolid(start: TopoDS_CompSolid, theProgress: Message_ProgressRange): any;
  TransferCompound(start: TopoDS_Compound, theProgress: Message_ProgressRange): any;
}

  export declare class BRepToIGES_BRSolid_1 extends BRepToIGES_BRSolid {
    constructor();
  }

  export declare class BRepToIGES_BRSolid_2 extends BRepToIGES_BRSolid {
    constructor(BR: BRepToIGES_BREntity);
  }

export declare class BRepToIGES_BRWire extends BRepToIGES_BREntity {
  TransferWire_1(start: TopoDS_Shape): any;
  TransferVertex_1(myvertex: TopoDS_Vertex): any;
  TransferVertex_2(myvertex: TopoDS_Vertex, myedge: TopoDS_Edge, parameter: Standard_Real): any;
  TransferVertex_3(myvertex: TopoDS_Vertex, myedge: TopoDS_Edge, myface: TopoDS_Face, parameter: Standard_Real): any;
  TransferVertex_4(myvertex: TopoDS_Vertex, myedge: TopoDS_Edge, mysurface: any, myloc: TopLoc_Location, parameter: Standard_Real): any;
  TransferVertex_5(myvertex: TopoDS_Vertex, myface: TopoDS_Face, mypoint: gp_Pnt2d): any;
  TransferEdge_1(myedge: TopoDS_Edge, isBRepMode: Standard_Boolean): any;
  TransferEdge_2(myedge: TopoDS_Edge, myface: TopoDS_Face, length: Standard_Real, isBRepMode: Standard_Boolean): any;
  TransferWire_2(mywire: TopoDS_Wire): any;
  TransferWire_3(mywire: TopoDS_Wire, myface: TopoDS_Face, mycurve2d: any, length: Standard_Real): any;
}

  export declare class BRepToIGES_BRWire_1 extends BRepToIGES_BRWire {
    constructor();
  }

  export declare class BRepToIGES_BRWire_2 extends BRepToIGES_BRWire {
    constructor(BR: BRepToIGES_BREntity);
  }

export declare class BRepToIGESBRep_Entity extends BRepToIGES_BREntity {
  constructor()
  Clear(): void;
  TransferVertexList(): void;
  IndexVertex(myvertex: TopoDS_Vertex): Standard_Integer;
  AddVertex(myvertex: TopoDS_Vertex): Standard_Integer;
  TransferEdgeList(): void;
  IndexEdge(myedge: TopoDS_Edge): Standard_Integer;
  AddEdge(myedge: TopoDS_Edge, mycurve3d: any): Standard_Integer;
  TransferShape(start: TopoDS_Shape, theProgress: Message_ProgressRange): any;
  TransferEdge_1(myedge: TopoDS_Edge): any;
  TransferEdge_2(myedge: TopoDS_Edge, myface: TopoDS_Face, length: Standard_Real): any;
  TransferWire(mywire: TopoDS_Wire, myface: TopoDS_Face, length: Standard_Real): any;
  TransferFace(start: TopoDS_Face): any;
  TransferShell(start: TopoDS_Shell, theProgress: Message_ProgressRange): any;
  TransferSolid(start: TopoDS_Solid, theProgress: Message_ProgressRange): any;
  TransferCompSolid(start: TopoDS_CompSolid, theProgress: Message_ProgressRange): any;
  TransferCompound(start: TopoDS_Compound, theProgress: Message_ProgressRange): any;
}

export declare class Geom2dToIGES_Geom2dEntity {
  SetModel(model: any): void;
  GetModel(): any;
  SetUnit(unit: Standard_Real): void;
  GetUnit(): Standard_Real;
}

  export declare class Geom2dToIGES_Geom2dEntity_1 extends Geom2dToIGES_Geom2dEntity {
    constructor();
  }

  export declare class Geom2dToIGES_Geom2dEntity_2 extends Geom2dToIGES_Geom2dEntity {
    constructor(GE: Geom2dToIGES_Geom2dEntity);
  }

export declare class Geom2dToIGES_Geom2dCurve extends Geom2dToIGES_Geom2dEntity {
  Transfer2dCurve(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
}

  export declare class Geom2dToIGES_Geom2dCurve_1 extends Geom2dToIGES_Geom2dCurve {
    constructor();
  }

  export declare class Geom2dToIGES_Geom2dCurve_2 extends Geom2dToIGES_Geom2dCurve {
    constructor(G2dE: Geom2dToIGES_Geom2dEntity);
  }

export declare class Geom2dToIGES_Geom2dPoint extends Geom2dToIGES_Geom2dEntity {
  Transfer2dPoint_1(start: any): any;
  Transfer2dPoint_2(start: any): any;
}

  export declare class Geom2dToIGES_Geom2dPoint_1 extends Geom2dToIGES_Geom2dPoint {
    constructor();
  }

  export declare class Geom2dToIGES_Geom2dPoint_2 extends Geom2dToIGES_Geom2dPoint {
    constructor(G2dE: Geom2dToIGES_Geom2dEntity);
  }

export declare class Geom2dToIGES_Geom2dVector extends Geom2dToIGES_Geom2dEntity {
  Transfer2dVector_1(start: any): any;
  Transfer2dVector_2(start: any): any;
  Transfer2dVector_3(start: any): any;
}

  export declare class Geom2dToIGES_Geom2dVector_1 extends Geom2dToIGES_Geom2dVector {
    constructor();
  }

  export declare class Geom2dToIGES_Geom2dVector_2 extends Geom2dToIGES_Geom2dVector {
    constructor(G2dE: Geom2dToIGES_Geom2dEntity);
  }

export declare class GeomToIGES_GeomEntity {
  SetModel(model: any): void;
  GetModel(): any;
  SetUnit(unit: Standard_Real): void;
  GetUnit(): Standard_Real;
}

  export declare class GeomToIGES_GeomEntity_1 extends GeomToIGES_GeomEntity {
    constructor();
  }

  export declare class GeomToIGES_GeomEntity_2 extends GeomToIGES_GeomEntity {
    constructor(GE: GeomToIGES_GeomEntity);
  }

export declare class GeomToIGES_GeomCurve extends GeomToIGES_GeomEntity {
  TransferCurve_1(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_2(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_3(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_4(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_5(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_6(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_7(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_8(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_9(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_10(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_11(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
  TransferCurve_12(start: any, Udeb: Standard_Real, Ufin: Standard_Real): any;
}

  export declare class GeomToIGES_GeomCurve_1 extends GeomToIGES_GeomCurve {
    constructor();
  }

  export declare class GeomToIGES_GeomCurve_2 extends GeomToIGES_GeomCurve {
    constructor(GE: GeomToIGES_GeomEntity);
  }

export declare class GeomToIGES_GeomPoint extends GeomToIGES_GeomEntity {
  TransferPoint_1(start: any): any;
  TransferPoint_2(start: any): any;
}

  export declare class GeomToIGES_GeomPoint_1 extends GeomToIGES_GeomPoint {
    constructor();
  }

  export declare class GeomToIGES_GeomPoint_2 extends GeomToIGES_GeomPoint {
    constructor(GE: GeomToIGES_GeomEntity);
  }

export declare class GeomToIGES_GeomSurface extends GeomToIGES_GeomEntity {
  TransferSurface_1(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_2(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_3(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_4(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_5(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_6(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_7(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_8(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_9(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_10(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_11(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_12(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_13(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_14(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSurface_15(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferPlaneSurface(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferCylindricalSurface(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferConicalSurface(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferSphericalSurface(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  TransferToroidalSurface(start: any, Udeb: Standard_Real, Ufin: Standard_Real, Vdeb: Standard_Real, Vfin: Standard_Real): any;
  Length(): Standard_Real;
  GetBRepMode(): Standard_Boolean;
  SetBRepMode(flag: Standard_Boolean): void;
  GetAnalyticMode(): Standard_Boolean;
  SetAnalyticMode(flag: Standard_Boolean): void;
}

  export declare class GeomToIGES_GeomSurface_1 extends GeomToIGES_GeomSurface {
    constructor();
  }

  export declare class GeomToIGES_GeomSurface_2 extends GeomToIGES_GeomSurface {
    constructor(GE: GeomToIGES_GeomEntity);
  }

export declare class GeomToIGES_GeomVector extends GeomToIGES_GeomEntity {
  TransferVector_1(start: any): any;
  TransferVector_2(start: any): any;
  TransferVector_3(start: any): any;
}

  export declare class GeomToIGES_GeomVector_1 extends GeomToIGES_GeomVector {
    constructor();
  }

  export declare class GeomToIGES_GeomVector_2 extends GeomToIGES_GeomVector {
    constructor(GE: GeomToIGES_GeomEntity);
  }

export declare class IGESControl_Reader extends XSControl_Reader {
  SetReadVisible(ReadRoot: Standard_Boolean): void;
  GetReadVisible(): Standard_Boolean;
  IGESModel(): any;
  NbRootsForTransfer(): Standard_Integer;
  PrintTransferInfo(failwarn: IFSelect_PrintFail, mode: IFSelect_PrintCount): void;
}

  export declare class IGESControl_Reader_1 extends IGESControl_Reader {
    constructor();
  }

  export declare class IGESControl_Reader_2 extends IGESControl_Reader {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class IGESControl_Writer {
  Model(): any;
  TransferProcess(): any;
  SetTransferProcess(TP: any): void;
  AddShape(sh: TopoDS_Shape, theProgress: Message_ProgressRange): Standard_Boolean;
  AddGeom(geom: any): Standard_Boolean;
  AddEntity(ent: any): Standard_Boolean;
  ComputeModel(): void;
  Write_1(S: Standard_OStream, fnes: Standard_Boolean): Standard_Boolean;
  Write_2(file: Standard_CString, fnes: Standard_Boolean): Standard_Boolean;
}

  export declare class IGESControl_Writer_1 extends IGESControl_Writer {
    constructor();
  }

  export declare class IGESControl_Writer_2 extends IGESControl_Writer {
    constructor(unit: Standard_CString, modecr: Standard_Integer);
  }

  export declare class IGESControl_Writer_3 extends IGESControl_Writer {
    constructor(model: any, modecr: Standard_Integer);
  }

export declare class IGESControl_ActorWrite extends Transfer_ActorOfFinderProcess {
  constructor()
  Recognize(start: any): Standard_Boolean;
  Transfer(start: any, FP: any, theProgress: Message_ProgressRange): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IGESControl_AlgoContainer {
  constructor()
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IGESControl_Controller extends XSControl_Controller {
  constructor(modefnes: Standard_Boolean)
  NewModel(): any;
  ActorRead(model: any): any;
  TransferWriteShape(shape: TopoDS_Shape, FP: any, model: any, modetrans: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  Init(): Standard_Boolean;
  Customise(WS: any): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class IGESControl_IGESBoundary {
  Check(result: Standard_Boolean, checkclosure: Standard_Boolean, okCurve3d: Standard_Boolean, okCurve2d: Standard_Boolean): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class IGESControl_IGESBoundary_1 extends IGESControl_IGESBoundary {
    constructor();
  }

  export declare class IGESControl_IGESBoundary_2 extends IGESControl_IGESBoundary {
    constructor(CS: IGESToBRep_CurveAndSurface);
  }

export declare class IGESControl_ToolContainer {
  constructor()
  IGESBoundary(): any;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Handle_IGESData_IGESEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_IGESEntity): void;
  get(): IGESData_IGESEntity;
}

  export declare class Handle_IGESData_IGESEntity_1 extends Handle_IGESData_IGESEntity {
    constructor();
  }

  export declare class Handle_IGESData_IGESEntity_2 extends Handle_IGESData_IGESEntity {
    constructor(thePtr: IGESData_IGESEntity);
  }

  export declare class Handle_IGESData_IGESEntity_3 extends Handle_IGESData_IGESEntity {
    constructor(theHandle: Handle_IGESData_IGESEntity);
  }

  export declare class Handle_IGESData_IGESEntity_4 extends Handle_IGESData_IGESEntity {
    constructor(theHandle: Handle_IGESData_IGESEntity);
  }

export declare class Handle_IGESAppli_Node {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_Node): void;
  get(): IGESAppli_Node;
}

  export declare class Handle_IGESAppli_Node_1 extends Handle_IGESAppli_Node {
    constructor();
  }

  export declare class Handle_IGESAppli_Node_2 extends Handle_IGESAppli_Node {
    constructor(thePtr: IGESAppli_Node);
  }

  export declare class Handle_IGESAppli_Node_3 extends Handle_IGESAppli_Node {
    constructor(theHandle: Handle_IGESAppli_Node);
  }

  export declare class Handle_IGESAppli_Node_4 extends Handle_IGESAppli_Node {
    constructor(theHandle: Handle_IGESAppli_Node);
  }

export declare class Handle_IGESAppli_HArray1OfNode {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_HArray1OfNode): void;
  get(): IGESAppli_HArray1OfNode;
}

  export declare class Handle_IGESAppli_HArray1OfNode_1 extends Handle_IGESAppli_HArray1OfNode {
    constructor();
  }

  export declare class Handle_IGESAppli_HArray1OfNode_2 extends Handle_IGESAppli_HArray1OfNode {
    constructor(thePtr: IGESAppli_HArray1OfNode);
  }

  export declare class Handle_IGESAppli_HArray1OfNode_3 extends Handle_IGESAppli_HArray1OfNode {
    constructor(theHandle: Handle_IGESAppli_HArray1OfNode);
  }

  export declare class Handle_IGESAppli_HArray1OfNode_4 extends Handle_IGESAppli_HArray1OfNode {
    constructor(theHandle: Handle_IGESAppli_HArray1OfNode);
  }

export declare class Handle_IGESAppli_FiniteElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_FiniteElement): void;
  get(): IGESAppli_FiniteElement;
}

  export declare class Handle_IGESAppli_FiniteElement_1 extends Handle_IGESAppli_FiniteElement {
    constructor();
  }

  export declare class Handle_IGESAppli_FiniteElement_2 extends Handle_IGESAppli_FiniteElement {
    constructor(thePtr: IGESAppli_FiniteElement);
  }

  export declare class Handle_IGESAppli_FiniteElement_3 extends Handle_IGESAppli_FiniteElement {
    constructor(theHandle: Handle_IGESAppli_FiniteElement);
  }

  export declare class Handle_IGESAppli_FiniteElement_4 extends Handle_IGESAppli_FiniteElement {
    constructor(theHandle: Handle_IGESAppli_FiniteElement);
  }

export declare class Handle_IGESData_HArray1OfIGESEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_HArray1OfIGESEntity): void;
  get(): IGESData_HArray1OfIGESEntity;
}

  export declare class Handle_IGESData_HArray1OfIGESEntity_1 extends Handle_IGESData_HArray1OfIGESEntity {
    constructor();
  }

  export declare class Handle_IGESData_HArray1OfIGESEntity_2 extends Handle_IGESData_HArray1OfIGESEntity {
    constructor(thePtr: IGESData_HArray1OfIGESEntity);
  }

  export declare class Handle_IGESData_HArray1OfIGESEntity_3 extends Handle_IGESData_HArray1OfIGESEntity {
    constructor(theHandle: Handle_IGESData_HArray1OfIGESEntity);
  }

  export declare class Handle_IGESData_HArray1OfIGESEntity_4 extends Handle_IGESData_HArray1OfIGESEntity {
    constructor(theHandle: Handle_IGESData_HArray1OfIGESEntity);
  }

export declare class Handle_IGESDraw_ConnectPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_ConnectPoint): void;
  get(): IGESDraw_ConnectPoint;
}

  export declare class Handle_IGESDraw_ConnectPoint_1 extends Handle_IGESDraw_ConnectPoint {
    constructor();
  }

  export declare class Handle_IGESDraw_ConnectPoint_2 extends Handle_IGESDraw_ConnectPoint {
    constructor(thePtr: IGESDraw_ConnectPoint);
  }

  export declare class Handle_IGESDraw_ConnectPoint_3 extends Handle_IGESDraw_ConnectPoint {
    constructor(theHandle: Handle_IGESDraw_ConnectPoint);
  }

  export declare class Handle_IGESDraw_ConnectPoint_4 extends Handle_IGESDraw_ConnectPoint {
    constructor(theHandle: Handle_IGESDraw_ConnectPoint);
  }

export declare class Handle_IGESDraw_HArray1OfConnectPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_HArray1OfConnectPoint): void;
  get(): IGESDraw_HArray1OfConnectPoint;
}

  export declare class Handle_IGESDraw_HArray1OfConnectPoint_1 extends Handle_IGESDraw_HArray1OfConnectPoint {
    constructor();
  }

  export declare class Handle_IGESDraw_HArray1OfConnectPoint_2 extends Handle_IGESDraw_HArray1OfConnectPoint {
    constructor(thePtr: IGESDraw_HArray1OfConnectPoint);
  }

  export declare class Handle_IGESDraw_HArray1OfConnectPoint_3 extends Handle_IGESDraw_HArray1OfConnectPoint {
    constructor(theHandle: Handle_IGESDraw_HArray1OfConnectPoint);
  }

  export declare class Handle_IGESDraw_HArray1OfConnectPoint_4 extends Handle_IGESDraw_HArray1OfConnectPoint {
    constructor(theHandle: Handle_IGESDraw_HArray1OfConnectPoint);
  }

export declare class Handle_IGESGraph_TextDisplayTemplate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_TextDisplayTemplate): void;
  get(): IGESGraph_TextDisplayTemplate;
}

  export declare class Handle_IGESGraph_TextDisplayTemplate_1 extends Handle_IGESGraph_TextDisplayTemplate {
    constructor();
  }

  export declare class Handle_IGESGraph_TextDisplayTemplate_2 extends Handle_IGESGraph_TextDisplayTemplate {
    constructor(thePtr: IGESGraph_TextDisplayTemplate);
  }

  export declare class Handle_IGESGraph_TextDisplayTemplate_3 extends Handle_IGESGraph_TextDisplayTemplate {
    constructor(theHandle: Handle_IGESGraph_TextDisplayTemplate);
  }

  export declare class Handle_IGESGraph_TextDisplayTemplate_4 extends Handle_IGESGraph_TextDisplayTemplate {
    constructor(theHandle: Handle_IGESGraph_TextDisplayTemplate);
  }

export declare class Handle_IGESGraph_HArray1OfTextDisplayTemplate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_HArray1OfTextDisplayTemplate): void;
  get(): IGESGraph_HArray1OfTextDisplayTemplate;
}

  export declare class Handle_IGESGraph_HArray1OfTextDisplayTemplate_1 extends Handle_IGESGraph_HArray1OfTextDisplayTemplate {
    constructor();
  }

  export declare class Handle_IGESGraph_HArray1OfTextDisplayTemplate_2 extends Handle_IGESGraph_HArray1OfTextDisplayTemplate {
    constructor(thePtr: IGESGraph_HArray1OfTextDisplayTemplate);
  }

  export declare class Handle_IGESGraph_HArray1OfTextDisplayTemplate_3 extends Handle_IGESGraph_HArray1OfTextDisplayTemplate {
    constructor(theHandle: Handle_IGESGraph_HArray1OfTextDisplayTemplate);
  }

  export declare class Handle_IGESGraph_HArray1OfTextDisplayTemplate_4 extends Handle_IGESGraph_HArray1OfTextDisplayTemplate {
    constructor(theHandle: Handle_IGESGraph_HArray1OfTextDisplayTemplate);
  }

export declare class Handle_IGESAppli_Flow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_Flow): void;
  get(): IGESAppli_Flow;
}

  export declare class Handle_IGESAppli_Flow_1 extends Handle_IGESAppli_Flow {
    constructor();
  }

  export declare class Handle_IGESAppli_Flow_2 extends Handle_IGESAppli_Flow {
    constructor(thePtr: IGESAppli_Flow);
  }

  export declare class Handle_IGESAppli_Flow_3 extends Handle_IGESAppli_Flow {
    constructor(theHandle: Handle_IGESAppli_Flow);
  }

  export declare class Handle_IGESAppli_Flow_4 extends Handle_IGESAppli_Flow {
    constructor(theHandle: Handle_IGESAppli_Flow);
  }

export declare class Handle_IGESAppli_DrilledHole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_DrilledHole): void;
  get(): IGESAppli_DrilledHole;
}

  export declare class Handle_IGESAppli_DrilledHole_1 extends Handle_IGESAppli_DrilledHole {
    constructor();
  }

  export declare class Handle_IGESAppli_DrilledHole_2 extends Handle_IGESAppli_DrilledHole {
    constructor(thePtr: IGESAppli_DrilledHole);
  }

  export declare class Handle_IGESAppli_DrilledHole_3 extends Handle_IGESAppli_DrilledHole {
    constructor(theHandle: Handle_IGESAppli_DrilledHole);
  }

  export declare class Handle_IGESAppli_DrilledHole_4 extends Handle_IGESAppli_DrilledHole {
    constructor(theHandle: Handle_IGESAppli_DrilledHole);
  }

export declare class Handle_IGESAppli_HArray1OfFiniteElement {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_HArray1OfFiniteElement): void;
  get(): IGESAppli_HArray1OfFiniteElement;
}

  export declare class Handle_IGESAppli_HArray1OfFiniteElement_1 extends Handle_IGESAppli_HArray1OfFiniteElement {
    constructor();
  }

  export declare class Handle_IGESAppli_HArray1OfFiniteElement_2 extends Handle_IGESAppli_HArray1OfFiniteElement {
    constructor(thePtr: IGESAppli_HArray1OfFiniteElement);
  }

  export declare class Handle_IGESAppli_HArray1OfFiniteElement_3 extends Handle_IGESAppli_HArray1OfFiniteElement {
    constructor(theHandle: Handle_IGESAppli_HArray1OfFiniteElement);
  }

  export declare class Handle_IGESAppli_HArray1OfFiniteElement_4 extends Handle_IGESAppli_HArray1OfFiniteElement {
    constructor(theHandle: Handle_IGESAppli_HArray1OfFiniteElement);
  }

export declare class Handle_IGESAppli_ElementResults {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_ElementResults): void;
  get(): IGESAppli_ElementResults;
}

  export declare class Handle_IGESAppli_ElementResults_1 extends Handle_IGESAppli_ElementResults {
    constructor();
  }

  export declare class Handle_IGESAppli_ElementResults_2 extends Handle_IGESAppli_ElementResults {
    constructor(thePtr: IGESAppli_ElementResults);
  }

  export declare class Handle_IGESAppli_ElementResults_3 extends Handle_IGESAppli_ElementResults {
    constructor(theHandle: Handle_IGESAppli_ElementResults);
  }

  export declare class Handle_IGESAppli_ElementResults_4 extends Handle_IGESAppli_ElementResults {
    constructor(theHandle: Handle_IGESAppli_ElementResults);
  }

export declare class Handle_IGESAppli_FlowLineSpec {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_FlowLineSpec): void;
  get(): IGESAppli_FlowLineSpec;
}

  export declare class Handle_IGESAppli_FlowLineSpec_1 extends Handle_IGESAppli_FlowLineSpec {
    constructor();
  }

  export declare class Handle_IGESAppli_FlowLineSpec_2 extends Handle_IGESAppli_FlowLineSpec {
    constructor(thePtr: IGESAppli_FlowLineSpec);
  }

  export declare class Handle_IGESAppli_FlowLineSpec_3 extends Handle_IGESAppli_FlowLineSpec {
    constructor(theHandle: Handle_IGESAppli_FlowLineSpec);
  }

  export declare class Handle_IGESAppli_FlowLineSpec_4 extends Handle_IGESAppli_FlowLineSpec {
    constructor(theHandle: Handle_IGESAppli_FlowLineSpec);
  }

export declare class Handle_IGESData_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_GeneralModule): void;
  get(): IGESData_GeneralModule;
}

  export declare class Handle_IGESData_GeneralModule_1 extends Handle_IGESData_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESData_GeneralModule_2 extends Handle_IGESData_GeneralModule {
    constructor(thePtr: IGESData_GeneralModule);
  }

  export declare class Handle_IGESData_GeneralModule_3 extends Handle_IGESData_GeneralModule {
    constructor(theHandle: Handle_IGESData_GeneralModule);
  }

  export declare class Handle_IGESData_GeneralModule_4 extends Handle_IGESData_GeneralModule {
    constructor(theHandle: Handle_IGESData_GeneralModule);
  }

export declare class Handle_IGESAppli_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_GeneralModule): void;
  get(): IGESAppli_GeneralModule;
}

  export declare class Handle_IGESAppli_GeneralModule_1 extends Handle_IGESAppli_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESAppli_GeneralModule_2 extends Handle_IGESAppli_GeneralModule {
    constructor(thePtr: IGESAppli_GeneralModule);
  }

  export declare class Handle_IGESAppli_GeneralModule_3 extends Handle_IGESAppli_GeneralModule {
    constructor(theHandle: Handle_IGESAppli_GeneralModule);
  }

  export declare class Handle_IGESAppli_GeneralModule_4 extends Handle_IGESAppli_GeneralModule {
    constructor(theHandle: Handle_IGESAppli_GeneralModule);
  }

export declare class Handle_IGESAppli_HArray1OfFlow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_HArray1OfFlow): void;
  get(): IGESAppli_HArray1OfFlow;
}

  export declare class Handle_IGESAppli_HArray1OfFlow_1 extends Handle_IGESAppli_HArray1OfFlow {
    constructor();
  }

  export declare class Handle_IGESAppli_HArray1OfFlow_2 extends Handle_IGESAppli_HArray1OfFlow {
    constructor(thePtr: IGESAppli_HArray1OfFlow);
  }

  export declare class Handle_IGESAppli_HArray1OfFlow_3 extends Handle_IGESAppli_HArray1OfFlow {
    constructor(theHandle: Handle_IGESAppli_HArray1OfFlow);
  }

  export declare class Handle_IGESAppli_HArray1OfFlow_4 extends Handle_IGESAppli_HArray1OfFlow {
    constructor(theHandle: Handle_IGESAppli_HArray1OfFlow);
  }

export declare class Handle_IGESAppli_LevelFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_LevelFunction): void;
  get(): IGESAppli_LevelFunction;
}

  export declare class Handle_IGESAppli_LevelFunction_1 extends Handle_IGESAppli_LevelFunction {
    constructor();
  }

  export declare class Handle_IGESAppli_LevelFunction_2 extends Handle_IGESAppli_LevelFunction {
    constructor(thePtr: IGESAppli_LevelFunction);
  }

  export declare class Handle_IGESAppli_LevelFunction_3 extends Handle_IGESAppli_LevelFunction {
    constructor(theHandle: Handle_IGESAppli_LevelFunction);
  }

  export declare class Handle_IGESAppli_LevelFunction_4 extends Handle_IGESAppli_LevelFunction {
    constructor(theHandle: Handle_IGESAppli_LevelFunction);
  }

export declare class Handle_IGESAppli_LevelToPWBLayerMap {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_LevelToPWBLayerMap): void;
  get(): IGESAppli_LevelToPWBLayerMap;
}

  export declare class Handle_IGESAppli_LevelToPWBLayerMap_1 extends Handle_IGESAppli_LevelToPWBLayerMap {
    constructor();
  }

  export declare class Handle_IGESAppli_LevelToPWBLayerMap_2 extends Handle_IGESAppli_LevelToPWBLayerMap {
    constructor(thePtr: IGESAppli_LevelToPWBLayerMap);
  }

  export declare class Handle_IGESAppli_LevelToPWBLayerMap_3 extends Handle_IGESAppli_LevelToPWBLayerMap {
    constructor(theHandle: Handle_IGESAppli_LevelToPWBLayerMap);
  }

  export declare class Handle_IGESAppli_LevelToPWBLayerMap_4 extends Handle_IGESAppli_LevelToPWBLayerMap {
    constructor(theHandle: Handle_IGESAppli_LevelToPWBLayerMap);
  }

export declare class Handle_IGESAppli_LineWidening {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_LineWidening): void;
  get(): IGESAppli_LineWidening;
}

  export declare class Handle_IGESAppli_LineWidening_1 extends Handle_IGESAppli_LineWidening {
    constructor();
  }

  export declare class Handle_IGESAppli_LineWidening_2 extends Handle_IGESAppli_LineWidening {
    constructor(thePtr: IGESAppli_LineWidening);
  }

  export declare class Handle_IGESAppli_LineWidening_3 extends Handle_IGESAppli_LineWidening {
    constructor(theHandle: Handle_IGESAppli_LineWidening);
  }

  export declare class Handle_IGESAppli_LineWidening_4 extends Handle_IGESAppli_LineWidening {
    constructor(theHandle: Handle_IGESAppli_LineWidening);
  }

export declare class Handle_IGESDefs_TabularData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_TabularData): void;
  get(): IGESDefs_TabularData;
}

  export declare class Handle_IGESDefs_TabularData_1 extends Handle_IGESDefs_TabularData {
    constructor();
  }

  export declare class Handle_IGESDefs_TabularData_2 extends Handle_IGESDefs_TabularData {
    constructor(thePtr: IGESDefs_TabularData);
  }

  export declare class Handle_IGESDefs_TabularData_3 extends Handle_IGESDefs_TabularData {
    constructor(theHandle: Handle_IGESDefs_TabularData);
  }

  export declare class Handle_IGESDefs_TabularData_4 extends Handle_IGESDefs_TabularData {
    constructor(theHandle: Handle_IGESDefs_TabularData);
  }

export declare class Handle_IGESDefs_HArray1OfTabularData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_HArray1OfTabularData): void;
  get(): IGESDefs_HArray1OfTabularData;
}

  export declare class Handle_IGESDefs_HArray1OfTabularData_1 extends Handle_IGESDefs_HArray1OfTabularData {
    constructor();
  }

  export declare class Handle_IGESDefs_HArray1OfTabularData_2 extends Handle_IGESDefs_HArray1OfTabularData {
    constructor(thePtr: IGESDefs_HArray1OfTabularData);
  }

  export declare class Handle_IGESDefs_HArray1OfTabularData_3 extends Handle_IGESDefs_HArray1OfTabularData {
    constructor(theHandle: Handle_IGESDefs_HArray1OfTabularData);
  }

  export declare class Handle_IGESDefs_HArray1OfTabularData_4 extends Handle_IGESDefs_HArray1OfTabularData {
    constructor(theHandle: Handle_IGESDefs_HArray1OfTabularData);
  }

export declare class Handle_IGESAppli_NodalConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_NodalConstraint): void;
  get(): IGESAppli_NodalConstraint;
}

  export declare class Handle_IGESAppli_NodalConstraint_1 extends Handle_IGESAppli_NodalConstraint {
    constructor();
  }

  export declare class Handle_IGESAppli_NodalConstraint_2 extends Handle_IGESAppli_NodalConstraint {
    constructor(thePtr: IGESAppli_NodalConstraint);
  }

  export declare class Handle_IGESAppli_NodalConstraint_3 extends Handle_IGESAppli_NodalConstraint {
    constructor(theHandle: Handle_IGESAppli_NodalConstraint);
  }

  export declare class Handle_IGESAppli_NodalConstraint_4 extends Handle_IGESAppli_NodalConstraint {
    constructor(theHandle: Handle_IGESAppli_NodalConstraint);
  }

export declare class Handle_IGESGraph_TextFontDef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_TextFontDef): void;
  get(): IGESGraph_TextFontDef;
}

  export declare class Handle_IGESGraph_TextFontDef_1 extends Handle_IGESGraph_TextFontDef {
    constructor();
  }

  export declare class Handle_IGESGraph_TextFontDef_2 extends Handle_IGESGraph_TextFontDef {
    constructor(thePtr: IGESGraph_TextFontDef);
  }

  export declare class Handle_IGESGraph_TextFontDef_3 extends Handle_IGESGraph_TextFontDef {
    constructor(theHandle: Handle_IGESGraph_TextFontDef);
  }

  export declare class Handle_IGESGraph_TextFontDef_4 extends Handle_IGESGraph_TextFontDef {
    constructor(theHandle: Handle_IGESGraph_TextFontDef);
  }

export declare class Handle_IGESGraph_HArray1OfTextFontDef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_HArray1OfTextFontDef): void;
  get(): IGESGraph_HArray1OfTextFontDef;
}

  export declare class Handle_IGESGraph_HArray1OfTextFontDef_1 extends Handle_IGESGraph_HArray1OfTextFontDef {
    constructor();
  }

  export declare class Handle_IGESGraph_HArray1OfTextFontDef_2 extends Handle_IGESGraph_HArray1OfTextFontDef {
    constructor(thePtr: IGESGraph_HArray1OfTextFontDef);
  }

  export declare class Handle_IGESGraph_HArray1OfTextFontDef_3 extends Handle_IGESGraph_HArray1OfTextFontDef {
    constructor(theHandle: Handle_IGESGraph_HArray1OfTextFontDef);
  }

  export declare class Handle_IGESGraph_HArray1OfTextFontDef_4 extends Handle_IGESGraph_HArray1OfTextFontDef {
    constructor(theHandle: Handle_IGESGraph_HArray1OfTextFontDef);
  }

export declare class Handle_IGESDimen_GeneralNote {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_GeneralNote): void;
  get(): IGESDimen_GeneralNote;
}

  export declare class Handle_IGESDimen_GeneralNote_1 extends Handle_IGESDimen_GeneralNote {
    constructor();
  }

  export declare class Handle_IGESDimen_GeneralNote_2 extends Handle_IGESDimen_GeneralNote {
    constructor(thePtr: IGESDimen_GeneralNote);
  }

  export declare class Handle_IGESDimen_GeneralNote_3 extends Handle_IGESDimen_GeneralNote {
    constructor(theHandle: Handle_IGESDimen_GeneralNote);
  }

  export declare class Handle_IGESDimen_GeneralNote_4 extends Handle_IGESDimen_GeneralNote {
    constructor(theHandle: Handle_IGESDimen_GeneralNote);
  }

export declare class Handle_IGESDimen_HArray1OfGeneralNote {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_HArray1OfGeneralNote): void;
  get(): IGESDimen_HArray1OfGeneralNote;
}

  export declare class Handle_IGESDimen_HArray1OfGeneralNote_1 extends Handle_IGESDimen_HArray1OfGeneralNote {
    constructor();
  }

  export declare class Handle_IGESDimen_HArray1OfGeneralNote_2 extends Handle_IGESDimen_HArray1OfGeneralNote {
    constructor(thePtr: IGESDimen_HArray1OfGeneralNote);
  }

  export declare class Handle_IGESDimen_HArray1OfGeneralNote_3 extends Handle_IGESDimen_HArray1OfGeneralNote {
    constructor(theHandle: Handle_IGESDimen_HArray1OfGeneralNote);
  }

  export declare class Handle_IGESDimen_HArray1OfGeneralNote_4 extends Handle_IGESDimen_HArray1OfGeneralNote {
    constructor(theHandle: Handle_IGESDimen_HArray1OfGeneralNote);
  }

export declare class Handle_IGESAppli_NodalDisplAndRot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_NodalDisplAndRot): void;
  get(): IGESAppli_NodalDisplAndRot;
}

  export declare class Handle_IGESAppli_NodalDisplAndRot_1 extends Handle_IGESAppli_NodalDisplAndRot {
    constructor();
  }

  export declare class Handle_IGESAppli_NodalDisplAndRot_2 extends Handle_IGESAppli_NodalDisplAndRot {
    constructor(thePtr: IGESAppli_NodalDisplAndRot);
  }

  export declare class Handle_IGESAppli_NodalDisplAndRot_3 extends Handle_IGESAppli_NodalDisplAndRot {
    constructor(theHandle: Handle_IGESAppli_NodalDisplAndRot);
  }

  export declare class Handle_IGESAppli_NodalDisplAndRot_4 extends Handle_IGESAppli_NodalDisplAndRot {
    constructor(theHandle: Handle_IGESAppli_NodalDisplAndRot);
  }

export declare class Handle_IGESAppli_NodalResults {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_NodalResults): void;
  get(): IGESAppli_NodalResults;
}

  export declare class Handle_IGESAppli_NodalResults_1 extends Handle_IGESAppli_NodalResults {
    constructor();
  }

  export declare class Handle_IGESAppli_NodalResults_2 extends Handle_IGESAppli_NodalResults {
    constructor(thePtr: IGESAppli_NodalResults);
  }

  export declare class Handle_IGESAppli_NodalResults_3 extends Handle_IGESAppli_NodalResults {
    constructor(theHandle: Handle_IGESAppli_NodalResults);
  }

  export declare class Handle_IGESAppli_NodalResults_4 extends Handle_IGESAppli_NodalResults {
    constructor(theHandle: Handle_IGESAppli_NodalResults);
  }

export declare class Handle_IGESAppli_PWBArtworkStackup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_PWBArtworkStackup): void;
  get(): IGESAppli_PWBArtworkStackup;
}

  export declare class Handle_IGESAppli_PWBArtworkStackup_1 extends Handle_IGESAppli_PWBArtworkStackup {
    constructor();
  }

  export declare class Handle_IGESAppli_PWBArtworkStackup_2 extends Handle_IGESAppli_PWBArtworkStackup {
    constructor(thePtr: IGESAppli_PWBArtworkStackup);
  }

  export declare class Handle_IGESAppli_PWBArtworkStackup_3 extends Handle_IGESAppli_PWBArtworkStackup {
    constructor(theHandle: Handle_IGESAppli_PWBArtworkStackup);
  }

  export declare class Handle_IGESAppli_PWBArtworkStackup_4 extends Handle_IGESAppli_PWBArtworkStackup {
    constructor(theHandle: Handle_IGESAppli_PWBArtworkStackup);
  }

export declare class Handle_IGESAppli_PWBDrilledHole {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_PWBDrilledHole): void;
  get(): IGESAppli_PWBDrilledHole;
}

  export declare class Handle_IGESAppli_PWBDrilledHole_1 extends Handle_IGESAppli_PWBDrilledHole {
    constructor();
  }

  export declare class Handle_IGESAppli_PWBDrilledHole_2 extends Handle_IGESAppli_PWBDrilledHole {
    constructor(thePtr: IGESAppli_PWBDrilledHole);
  }

  export declare class Handle_IGESAppli_PWBDrilledHole_3 extends Handle_IGESAppli_PWBDrilledHole {
    constructor(theHandle: Handle_IGESAppli_PWBDrilledHole);
  }

  export declare class Handle_IGESAppli_PWBDrilledHole_4 extends Handle_IGESAppli_PWBDrilledHole {
    constructor(theHandle: Handle_IGESAppli_PWBDrilledHole);
  }

export declare class Handle_IGESAppli_PartNumber {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_PartNumber): void;
  get(): IGESAppli_PartNumber;
}

  export declare class Handle_IGESAppli_PartNumber_1 extends Handle_IGESAppli_PartNumber {
    constructor();
  }

  export declare class Handle_IGESAppli_PartNumber_2 extends Handle_IGESAppli_PartNumber {
    constructor(thePtr: IGESAppli_PartNumber);
  }

  export declare class Handle_IGESAppli_PartNumber_3 extends Handle_IGESAppli_PartNumber {
    constructor(theHandle: Handle_IGESAppli_PartNumber);
  }

  export declare class Handle_IGESAppli_PartNumber_4 extends Handle_IGESAppli_PartNumber {
    constructor(theHandle: Handle_IGESAppli_PartNumber);
  }

export declare class Handle_IGESAppli_PinNumber {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_PinNumber): void;
  get(): IGESAppli_PinNumber;
}

  export declare class Handle_IGESAppli_PinNumber_1 extends Handle_IGESAppli_PinNumber {
    constructor();
  }

  export declare class Handle_IGESAppli_PinNumber_2 extends Handle_IGESAppli_PinNumber {
    constructor(thePtr: IGESAppli_PinNumber);
  }

  export declare class Handle_IGESAppli_PinNumber_3 extends Handle_IGESAppli_PinNumber {
    constructor(theHandle: Handle_IGESAppli_PinNumber);
  }

  export declare class Handle_IGESAppli_PinNumber_4 extends Handle_IGESAppli_PinNumber {
    constructor(theHandle: Handle_IGESAppli_PinNumber);
  }

export declare class Handle_IGESAppli_PipingFlow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_PipingFlow): void;
  get(): IGESAppli_PipingFlow;
}

  export declare class Handle_IGESAppli_PipingFlow_1 extends Handle_IGESAppli_PipingFlow {
    constructor();
  }

  export declare class Handle_IGESAppli_PipingFlow_2 extends Handle_IGESAppli_PipingFlow {
    constructor(thePtr: IGESAppli_PipingFlow);
  }

  export declare class Handle_IGESAppli_PipingFlow_3 extends Handle_IGESAppli_PipingFlow {
    constructor(theHandle: Handle_IGESAppli_PipingFlow);
  }

  export declare class Handle_IGESAppli_PipingFlow_4 extends Handle_IGESAppli_PipingFlow {
    constructor(theHandle: Handle_IGESAppli_PipingFlow);
  }

export declare class Handle_IGESData_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_Protocol): void;
  get(): IGESData_Protocol;
}

  export declare class Handle_IGESData_Protocol_1 extends Handle_IGESData_Protocol {
    constructor();
  }

  export declare class Handle_IGESData_Protocol_2 extends Handle_IGESData_Protocol {
    constructor(thePtr: IGESData_Protocol);
  }

  export declare class Handle_IGESData_Protocol_3 extends Handle_IGESData_Protocol {
    constructor(theHandle: Handle_IGESData_Protocol);
  }

  export declare class Handle_IGESData_Protocol_4 extends Handle_IGESData_Protocol {
    constructor(theHandle: Handle_IGESData_Protocol);
  }

export declare class Handle_IGESAppli_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_Protocol): void;
  get(): IGESAppli_Protocol;
}

  export declare class Handle_IGESAppli_Protocol_1 extends Handle_IGESAppli_Protocol {
    constructor();
  }

  export declare class Handle_IGESAppli_Protocol_2 extends Handle_IGESAppli_Protocol {
    constructor(thePtr: IGESAppli_Protocol);
  }

  export declare class Handle_IGESAppli_Protocol_3 extends Handle_IGESAppli_Protocol {
    constructor(theHandle: Handle_IGESAppli_Protocol);
  }

  export declare class Handle_IGESAppli_Protocol_4 extends Handle_IGESAppli_Protocol {
    constructor(theHandle: Handle_IGESAppli_Protocol);
  }

export declare class Handle_IGESData_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_ReadWriteModule): void;
  get(): IGESData_ReadWriteModule;
}

  export declare class Handle_IGESData_ReadWriteModule_1 extends Handle_IGESData_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESData_ReadWriteModule_2 extends Handle_IGESData_ReadWriteModule {
    constructor(thePtr: IGESData_ReadWriteModule);
  }

  export declare class Handle_IGESData_ReadWriteModule_3 extends Handle_IGESData_ReadWriteModule {
    constructor(theHandle: Handle_IGESData_ReadWriteModule);
  }

  export declare class Handle_IGESData_ReadWriteModule_4 extends Handle_IGESData_ReadWriteModule {
    constructor(theHandle: Handle_IGESData_ReadWriteModule);
  }

export declare class Handle_IGESAppli_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_ReadWriteModule): void;
  get(): IGESAppli_ReadWriteModule;
}

  export declare class Handle_IGESAppli_ReadWriteModule_1 extends Handle_IGESAppli_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESAppli_ReadWriteModule_2 extends Handle_IGESAppli_ReadWriteModule {
    constructor(thePtr: IGESAppli_ReadWriteModule);
  }

  export declare class Handle_IGESAppli_ReadWriteModule_3 extends Handle_IGESAppli_ReadWriteModule {
    constructor(theHandle: Handle_IGESAppli_ReadWriteModule);
  }

  export declare class Handle_IGESAppli_ReadWriteModule_4 extends Handle_IGESAppli_ReadWriteModule {
    constructor(theHandle: Handle_IGESAppli_ReadWriteModule);
  }

export declare class Handle_IGESAppli_ReferenceDesignator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_ReferenceDesignator): void;
  get(): IGESAppli_ReferenceDesignator;
}

  export declare class Handle_IGESAppli_ReferenceDesignator_1 extends Handle_IGESAppli_ReferenceDesignator {
    constructor();
  }

  export declare class Handle_IGESAppli_ReferenceDesignator_2 extends Handle_IGESAppli_ReferenceDesignator {
    constructor(thePtr: IGESAppli_ReferenceDesignator);
  }

  export declare class Handle_IGESAppli_ReferenceDesignator_3 extends Handle_IGESAppli_ReferenceDesignator {
    constructor(theHandle: Handle_IGESAppli_ReferenceDesignator);
  }

  export declare class Handle_IGESAppli_ReferenceDesignator_4 extends Handle_IGESAppli_ReferenceDesignator {
    constructor(theHandle: Handle_IGESAppli_ReferenceDesignator);
  }

export declare class Handle_IGESAppli_RegionRestriction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_RegionRestriction): void;
  get(): IGESAppli_RegionRestriction;
}

  export declare class Handle_IGESAppli_RegionRestriction_1 extends Handle_IGESAppli_RegionRestriction {
    constructor();
  }

  export declare class Handle_IGESAppli_RegionRestriction_2 extends Handle_IGESAppli_RegionRestriction {
    constructor(thePtr: IGESAppli_RegionRestriction);
  }

  export declare class Handle_IGESAppli_RegionRestriction_3 extends Handle_IGESAppli_RegionRestriction {
    constructor(theHandle: Handle_IGESAppli_RegionRestriction);
  }

  export declare class Handle_IGESAppli_RegionRestriction_4 extends Handle_IGESAppli_RegionRestriction {
    constructor(theHandle: Handle_IGESAppli_RegionRestriction);
  }

export declare class Handle_IGESData_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_SpecificModule): void;
  get(): IGESData_SpecificModule;
}

  export declare class Handle_IGESData_SpecificModule_1 extends Handle_IGESData_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESData_SpecificModule_2 extends Handle_IGESData_SpecificModule {
    constructor(thePtr: IGESData_SpecificModule);
  }

  export declare class Handle_IGESData_SpecificModule_3 extends Handle_IGESData_SpecificModule {
    constructor(theHandle: Handle_IGESData_SpecificModule);
  }

  export declare class Handle_IGESData_SpecificModule_4 extends Handle_IGESData_SpecificModule {
    constructor(theHandle: Handle_IGESData_SpecificModule);
  }

export declare class Handle_IGESAppli_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESAppli_SpecificModule): void;
  get(): IGESAppli_SpecificModule;
}

  export declare class Handle_IGESAppli_SpecificModule_1 extends Handle_IGESAppli_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESAppli_SpecificModule_2 extends Handle_IGESAppli_SpecificModule {
    constructor(thePtr: IGESAppli_SpecificModule);
  }

  export declare class Handle_IGESAppli_SpecificModule_3 extends Handle_IGESAppli_SpecificModule {
    constructor(theHandle: Handle_IGESAppli_SpecificModule);
  }

  export declare class Handle_IGESAppli_SpecificModule_4 extends Handle_IGESAppli_SpecificModule {
    constructor(theHandle: Handle_IGESAppli_SpecificModule);
  }

export declare class Handle_IGESData_LineFontEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_LineFontEntity): void;
  get(): IGESData_LineFontEntity;
}

  export declare class Handle_IGESData_LineFontEntity_1 extends Handle_IGESData_LineFontEntity {
    constructor();
  }

  export declare class Handle_IGESData_LineFontEntity_2 extends Handle_IGESData_LineFontEntity {
    constructor(thePtr: IGESData_LineFontEntity);
  }

  export declare class Handle_IGESData_LineFontEntity_3 extends Handle_IGESData_LineFontEntity {
    constructor(theHandle: Handle_IGESData_LineFontEntity);
  }

  export declare class Handle_IGESData_LineFontEntity_4 extends Handle_IGESData_LineFontEntity {
    constructor(theHandle: Handle_IGESData_LineFontEntity);
  }

export declare class Handle_IGESBasic_AssocGroupType {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_AssocGroupType): void;
  get(): IGESBasic_AssocGroupType;
}

  export declare class Handle_IGESBasic_AssocGroupType_1 extends Handle_IGESBasic_AssocGroupType {
    constructor();
  }

  export declare class Handle_IGESBasic_AssocGroupType_2 extends Handle_IGESBasic_AssocGroupType {
    constructor(thePtr: IGESBasic_AssocGroupType);
  }

  export declare class Handle_IGESBasic_AssocGroupType_3 extends Handle_IGESBasic_AssocGroupType {
    constructor(theHandle: Handle_IGESBasic_AssocGroupType);
  }

  export declare class Handle_IGESBasic_AssocGroupType_4 extends Handle_IGESBasic_AssocGroupType {
    constructor(theHandle: Handle_IGESBasic_AssocGroupType);
  }

export declare class Handle_IGESBasic_ExternalRefFile {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_ExternalRefFile): void;
  get(): IGESBasic_ExternalRefFile;
}

  export declare class Handle_IGESBasic_ExternalRefFile_1 extends Handle_IGESBasic_ExternalRefFile {
    constructor();
  }

  export declare class Handle_IGESBasic_ExternalRefFile_2 extends Handle_IGESBasic_ExternalRefFile {
    constructor(thePtr: IGESBasic_ExternalRefFile);
  }

  export declare class Handle_IGESBasic_ExternalRefFile_3 extends Handle_IGESBasic_ExternalRefFile {
    constructor(theHandle: Handle_IGESBasic_ExternalRefFile);
  }

  export declare class Handle_IGESBasic_ExternalRefFile_4 extends Handle_IGESBasic_ExternalRefFile {
    constructor(theHandle: Handle_IGESBasic_ExternalRefFile);
  }

export declare class Handle_IGESBasic_ExternalRefFileIndex {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_ExternalRefFileIndex): void;
  get(): IGESBasic_ExternalRefFileIndex;
}

  export declare class Handle_IGESBasic_ExternalRefFileIndex_1 extends Handle_IGESBasic_ExternalRefFileIndex {
    constructor();
  }

  export declare class Handle_IGESBasic_ExternalRefFileIndex_2 extends Handle_IGESBasic_ExternalRefFileIndex {
    constructor(thePtr: IGESBasic_ExternalRefFileIndex);
  }

  export declare class Handle_IGESBasic_ExternalRefFileIndex_3 extends Handle_IGESBasic_ExternalRefFileIndex {
    constructor(theHandle: Handle_IGESBasic_ExternalRefFileIndex);
  }

  export declare class Handle_IGESBasic_ExternalRefFileIndex_4 extends Handle_IGESBasic_ExternalRefFileIndex {
    constructor(theHandle: Handle_IGESBasic_ExternalRefFileIndex);
  }

export declare class Handle_IGESBasic_ExternalRefFileName {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_ExternalRefFileName): void;
  get(): IGESBasic_ExternalRefFileName;
}

  export declare class Handle_IGESBasic_ExternalRefFileName_1 extends Handle_IGESBasic_ExternalRefFileName {
    constructor();
  }

  export declare class Handle_IGESBasic_ExternalRefFileName_2 extends Handle_IGESBasic_ExternalRefFileName {
    constructor(thePtr: IGESBasic_ExternalRefFileName);
  }

  export declare class Handle_IGESBasic_ExternalRefFileName_3 extends Handle_IGESBasic_ExternalRefFileName {
    constructor(theHandle: Handle_IGESBasic_ExternalRefFileName);
  }

  export declare class Handle_IGESBasic_ExternalRefFileName_4 extends Handle_IGESBasic_ExternalRefFileName {
    constructor(theHandle: Handle_IGESBasic_ExternalRefFileName);
  }

export declare class Handle_IGESBasic_ExternalRefLibName {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_ExternalRefLibName): void;
  get(): IGESBasic_ExternalRefLibName;
}

  export declare class Handle_IGESBasic_ExternalRefLibName_1 extends Handle_IGESBasic_ExternalRefLibName {
    constructor();
  }

  export declare class Handle_IGESBasic_ExternalRefLibName_2 extends Handle_IGESBasic_ExternalRefLibName {
    constructor(thePtr: IGESBasic_ExternalRefLibName);
  }

  export declare class Handle_IGESBasic_ExternalRefLibName_3 extends Handle_IGESBasic_ExternalRefLibName {
    constructor(theHandle: Handle_IGESBasic_ExternalRefLibName);
  }

  export declare class Handle_IGESBasic_ExternalRefLibName_4 extends Handle_IGESBasic_ExternalRefLibName {
    constructor(theHandle: Handle_IGESBasic_ExternalRefLibName);
  }

export declare class Handle_IGESBasic_ExternalRefName {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_ExternalRefName): void;
  get(): IGESBasic_ExternalRefName;
}

  export declare class Handle_IGESBasic_ExternalRefName_1 extends Handle_IGESBasic_ExternalRefName {
    constructor();
  }

  export declare class Handle_IGESBasic_ExternalRefName_2 extends Handle_IGESBasic_ExternalRefName {
    constructor(thePtr: IGESBasic_ExternalRefName);
  }

  export declare class Handle_IGESBasic_ExternalRefName_3 extends Handle_IGESBasic_ExternalRefName {
    constructor(theHandle: Handle_IGESBasic_ExternalRefName);
  }

  export declare class Handle_IGESBasic_ExternalRefName_4 extends Handle_IGESBasic_ExternalRefName {
    constructor(theHandle: Handle_IGESBasic_ExternalRefName);
  }

export declare class Handle_IGESBasic_ExternalReferenceFile {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_ExternalReferenceFile): void;
  get(): IGESBasic_ExternalReferenceFile;
}

  export declare class Handle_IGESBasic_ExternalReferenceFile_1 extends Handle_IGESBasic_ExternalReferenceFile {
    constructor();
  }

  export declare class Handle_IGESBasic_ExternalReferenceFile_2 extends Handle_IGESBasic_ExternalReferenceFile {
    constructor(thePtr: IGESBasic_ExternalReferenceFile);
  }

  export declare class Handle_IGESBasic_ExternalReferenceFile_3 extends Handle_IGESBasic_ExternalReferenceFile {
    constructor(theHandle: Handle_IGESBasic_ExternalReferenceFile);
  }

  export declare class Handle_IGESBasic_ExternalReferenceFile_4 extends Handle_IGESBasic_ExternalReferenceFile {
    constructor(theHandle: Handle_IGESBasic_ExternalReferenceFile);
  }

export declare class Handle_IGESBasic_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_GeneralModule): void;
  get(): IGESBasic_GeneralModule;
}

  export declare class Handle_IGESBasic_GeneralModule_1 extends Handle_IGESBasic_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESBasic_GeneralModule_2 extends Handle_IGESBasic_GeneralModule {
    constructor(thePtr: IGESBasic_GeneralModule);
  }

  export declare class Handle_IGESBasic_GeneralModule_3 extends Handle_IGESBasic_GeneralModule {
    constructor(theHandle: Handle_IGESBasic_GeneralModule);
  }

  export declare class Handle_IGESBasic_GeneralModule_4 extends Handle_IGESBasic_GeneralModule {
    constructor(theHandle: Handle_IGESBasic_GeneralModule);
  }

export declare class Handle_IGESBasic_Group {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_Group): void;
  get(): IGESBasic_Group;
}

  export declare class Handle_IGESBasic_Group_1 extends Handle_IGESBasic_Group {
    constructor();
  }

  export declare class Handle_IGESBasic_Group_2 extends Handle_IGESBasic_Group {
    constructor(thePtr: IGESBasic_Group);
  }

  export declare class Handle_IGESBasic_Group_3 extends Handle_IGESBasic_Group {
    constructor(theHandle: Handle_IGESBasic_Group);
  }

  export declare class Handle_IGESBasic_Group_4 extends Handle_IGESBasic_Group {
    constructor(theHandle: Handle_IGESBasic_Group);
  }

export declare class Handle_IGESBasic_GroupWithoutBackP {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_GroupWithoutBackP): void;
  get(): IGESBasic_GroupWithoutBackP;
}

  export declare class Handle_IGESBasic_GroupWithoutBackP_1 extends Handle_IGESBasic_GroupWithoutBackP {
    constructor();
  }

  export declare class Handle_IGESBasic_GroupWithoutBackP_2 extends Handle_IGESBasic_GroupWithoutBackP {
    constructor(thePtr: IGESBasic_GroupWithoutBackP);
  }

  export declare class Handle_IGESBasic_GroupWithoutBackP_3 extends Handle_IGESBasic_GroupWithoutBackP {
    constructor(theHandle: Handle_IGESBasic_GroupWithoutBackP);
  }

  export declare class Handle_IGESBasic_GroupWithoutBackP_4 extends Handle_IGESBasic_GroupWithoutBackP {
    constructor(theHandle: Handle_IGESBasic_GroupWithoutBackP);
  }

export declare class Handle_IGESBasic_HArray1OfHArray1OfIGESEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_HArray1OfHArray1OfIGESEntity): void;
  get(): IGESBasic_HArray1OfHArray1OfIGESEntity;
}

  export declare class Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_1 extends Handle_IGESBasic_HArray1OfHArray1OfIGESEntity {
    constructor();
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_2 extends Handle_IGESBasic_HArray1OfHArray1OfIGESEntity {
    constructor(thePtr: IGESBasic_HArray1OfHArray1OfIGESEntity);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_3 extends Handle_IGESBasic_HArray1OfHArray1OfIGESEntity {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfIGESEntity);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_4 extends Handle_IGESBasic_HArray1OfHArray1OfIGESEntity {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfIGESEntity);
  }

export declare class Handle_IGESBasic_HArray1OfHArray1OfInteger {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_HArray1OfHArray1OfInteger): void;
  get(): IGESBasic_HArray1OfHArray1OfInteger;
}

  export declare class Handle_IGESBasic_HArray1OfHArray1OfInteger_1 extends Handle_IGESBasic_HArray1OfHArray1OfInteger {
    constructor();
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfInteger_2 extends Handle_IGESBasic_HArray1OfHArray1OfInteger {
    constructor(thePtr: IGESBasic_HArray1OfHArray1OfInteger);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfInteger_3 extends Handle_IGESBasic_HArray1OfHArray1OfInteger {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfInteger);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfInteger_4 extends Handle_IGESBasic_HArray1OfHArray1OfInteger {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfInteger);
  }

export declare class Handle_IGESBasic_HArray1OfHArray1OfReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_HArray1OfHArray1OfReal): void;
  get(): IGESBasic_HArray1OfHArray1OfReal;
}

  export declare class Handle_IGESBasic_HArray1OfHArray1OfReal_1 extends Handle_IGESBasic_HArray1OfHArray1OfReal {
    constructor();
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfReal_2 extends Handle_IGESBasic_HArray1OfHArray1OfReal {
    constructor(thePtr: IGESBasic_HArray1OfHArray1OfReal);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfReal_3 extends Handle_IGESBasic_HArray1OfHArray1OfReal {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfReal);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfReal_4 extends Handle_IGESBasic_HArray1OfHArray1OfReal {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfReal);
  }

export declare class Handle_IGESBasic_HArray1OfHArray1OfXY {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_HArray1OfHArray1OfXY): void;
  get(): IGESBasic_HArray1OfHArray1OfXY;
}

  export declare class Handle_IGESBasic_HArray1OfHArray1OfXY_1 extends Handle_IGESBasic_HArray1OfHArray1OfXY {
    constructor();
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfXY_2 extends Handle_IGESBasic_HArray1OfHArray1OfXY {
    constructor(thePtr: IGESBasic_HArray1OfHArray1OfXY);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfXY_3 extends Handle_IGESBasic_HArray1OfHArray1OfXY {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfXY);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfXY_4 extends Handle_IGESBasic_HArray1OfHArray1OfXY {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfXY);
  }

export declare class Handle_IGESBasic_HArray1OfHArray1OfXYZ {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_HArray1OfHArray1OfXYZ): void;
  get(): IGESBasic_HArray1OfHArray1OfXYZ;
}

  export declare class Handle_IGESBasic_HArray1OfHArray1OfXYZ_1 extends Handle_IGESBasic_HArray1OfHArray1OfXYZ {
    constructor();
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfXYZ_2 extends Handle_IGESBasic_HArray1OfHArray1OfXYZ {
    constructor(thePtr: IGESBasic_HArray1OfHArray1OfXYZ);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfXYZ_3 extends Handle_IGESBasic_HArray1OfHArray1OfXYZ {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfXYZ);
  }

  export declare class Handle_IGESBasic_HArray1OfHArray1OfXYZ_4 extends Handle_IGESBasic_HArray1OfHArray1OfXYZ {
    constructor(theHandle: Handle_IGESBasic_HArray1OfHArray1OfXYZ);
  }

export declare class Handle_IGESBasic_HArray1OfLineFontEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_HArray1OfLineFontEntity): void;
  get(): IGESBasic_HArray1OfLineFontEntity;
}

  export declare class Handle_IGESBasic_HArray1OfLineFontEntity_1 extends Handle_IGESBasic_HArray1OfLineFontEntity {
    constructor();
  }

  export declare class Handle_IGESBasic_HArray1OfLineFontEntity_2 extends Handle_IGESBasic_HArray1OfLineFontEntity {
    constructor(thePtr: IGESBasic_HArray1OfLineFontEntity);
  }

  export declare class Handle_IGESBasic_HArray1OfLineFontEntity_3 extends Handle_IGESBasic_HArray1OfLineFontEntity {
    constructor(theHandle: Handle_IGESBasic_HArray1OfLineFontEntity);
  }

  export declare class Handle_IGESBasic_HArray1OfLineFontEntity_4 extends Handle_IGESBasic_HArray1OfLineFontEntity {
    constructor(theHandle: Handle_IGESBasic_HArray1OfLineFontEntity);
  }

export declare class Handle_IGESBasic_HArray2OfHArray1OfReal {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_HArray2OfHArray1OfReal): void;
  get(): IGESBasic_HArray2OfHArray1OfReal;
}

  export declare class Handle_IGESBasic_HArray2OfHArray1OfReal_1 extends Handle_IGESBasic_HArray2OfHArray1OfReal {
    constructor();
  }

  export declare class Handle_IGESBasic_HArray2OfHArray1OfReal_2 extends Handle_IGESBasic_HArray2OfHArray1OfReal {
    constructor(thePtr: IGESBasic_HArray2OfHArray1OfReal);
  }

  export declare class Handle_IGESBasic_HArray2OfHArray1OfReal_3 extends Handle_IGESBasic_HArray2OfHArray1OfReal {
    constructor(theHandle: Handle_IGESBasic_HArray2OfHArray1OfReal);
  }

  export declare class Handle_IGESBasic_HArray2OfHArray1OfReal_4 extends Handle_IGESBasic_HArray2OfHArray1OfReal {
    constructor(theHandle: Handle_IGESBasic_HArray2OfHArray1OfReal);
  }

export declare class Handle_IGESBasic_Hierarchy {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_Hierarchy): void;
  get(): IGESBasic_Hierarchy;
}

  export declare class Handle_IGESBasic_Hierarchy_1 extends Handle_IGESBasic_Hierarchy {
    constructor();
  }

  export declare class Handle_IGESBasic_Hierarchy_2 extends Handle_IGESBasic_Hierarchy {
    constructor(thePtr: IGESBasic_Hierarchy);
  }

  export declare class Handle_IGESBasic_Hierarchy_3 extends Handle_IGESBasic_Hierarchy {
    constructor(theHandle: Handle_IGESBasic_Hierarchy);
  }

  export declare class Handle_IGESBasic_Hierarchy_4 extends Handle_IGESBasic_Hierarchy {
    constructor(theHandle: Handle_IGESBasic_Hierarchy);
  }

export declare class Handle_IGESData_NameEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_NameEntity): void;
  get(): IGESData_NameEntity;
}

  export declare class Handle_IGESData_NameEntity_1 extends Handle_IGESData_NameEntity {
    constructor();
  }

  export declare class Handle_IGESData_NameEntity_2 extends Handle_IGESData_NameEntity {
    constructor(thePtr: IGESData_NameEntity);
  }

  export declare class Handle_IGESData_NameEntity_3 extends Handle_IGESData_NameEntity {
    constructor(theHandle: Handle_IGESData_NameEntity);
  }

  export declare class Handle_IGESData_NameEntity_4 extends Handle_IGESData_NameEntity {
    constructor(theHandle: Handle_IGESData_NameEntity);
  }

export declare class Handle_IGESBasic_Name {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_Name): void;
  get(): IGESBasic_Name;
}

  export declare class Handle_IGESBasic_Name_1 extends Handle_IGESBasic_Name {
    constructor();
  }

  export declare class Handle_IGESBasic_Name_2 extends Handle_IGESBasic_Name {
    constructor(thePtr: IGESBasic_Name);
  }

  export declare class Handle_IGESBasic_Name_3 extends Handle_IGESBasic_Name {
    constructor(theHandle: Handle_IGESBasic_Name);
  }

  export declare class Handle_IGESBasic_Name_4 extends Handle_IGESBasic_Name {
    constructor(theHandle: Handle_IGESBasic_Name);
  }

export declare class Handle_IGESBasic_OrderedGroup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_OrderedGroup): void;
  get(): IGESBasic_OrderedGroup;
}

  export declare class Handle_IGESBasic_OrderedGroup_1 extends Handle_IGESBasic_OrderedGroup {
    constructor();
  }

  export declare class Handle_IGESBasic_OrderedGroup_2 extends Handle_IGESBasic_OrderedGroup {
    constructor(thePtr: IGESBasic_OrderedGroup);
  }

  export declare class Handle_IGESBasic_OrderedGroup_3 extends Handle_IGESBasic_OrderedGroup {
    constructor(theHandle: Handle_IGESBasic_OrderedGroup);
  }

  export declare class Handle_IGESBasic_OrderedGroup_4 extends Handle_IGESBasic_OrderedGroup {
    constructor(theHandle: Handle_IGESBasic_OrderedGroup);
  }

export declare class Handle_IGESBasic_OrderedGroupWithoutBackP {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_OrderedGroupWithoutBackP): void;
  get(): IGESBasic_OrderedGroupWithoutBackP;
}

  export declare class Handle_IGESBasic_OrderedGroupWithoutBackP_1 extends Handle_IGESBasic_OrderedGroupWithoutBackP {
    constructor();
  }

  export declare class Handle_IGESBasic_OrderedGroupWithoutBackP_2 extends Handle_IGESBasic_OrderedGroupWithoutBackP {
    constructor(thePtr: IGESBasic_OrderedGroupWithoutBackP);
  }

  export declare class Handle_IGESBasic_OrderedGroupWithoutBackP_3 extends Handle_IGESBasic_OrderedGroupWithoutBackP {
    constructor(theHandle: Handle_IGESBasic_OrderedGroupWithoutBackP);
  }

  export declare class Handle_IGESBasic_OrderedGroupWithoutBackP_4 extends Handle_IGESBasic_OrderedGroupWithoutBackP {
    constructor(theHandle: Handle_IGESBasic_OrderedGroupWithoutBackP);
  }

export declare class Handle_IGESBasic_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_Protocol): void;
  get(): IGESBasic_Protocol;
}

  export declare class Handle_IGESBasic_Protocol_1 extends Handle_IGESBasic_Protocol {
    constructor();
  }

  export declare class Handle_IGESBasic_Protocol_2 extends Handle_IGESBasic_Protocol {
    constructor(thePtr: IGESBasic_Protocol);
  }

  export declare class Handle_IGESBasic_Protocol_3 extends Handle_IGESBasic_Protocol {
    constructor(theHandle: Handle_IGESBasic_Protocol);
  }

  export declare class Handle_IGESBasic_Protocol_4 extends Handle_IGESBasic_Protocol {
    constructor(theHandle: Handle_IGESBasic_Protocol);
  }

export declare class Handle_IGESBasic_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_ReadWriteModule): void;
  get(): IGESBasic_ReadWriteModule;
}

  export declare class Handle_IGESBasic_ReadWriteModule_1 extends Handle_IGESBasic_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESBasic_ReadWriteModule_2 extends Handle_IGESBasic_ReadWriteModule {
    constructor(thePtr: IGESBasic_ReadWriteModule);
  }

  export declare class Handle_IGESBasic_ReadWriteModule_3 extends Handle_IGESBasic_ReadWriteModule {
    constructor(theHandle: Handle_IGESBasic_ReadWriteModule);
  }

  export declare class Handle_IGESBasic_ReadWriteModule_4 extends Handle_IGESBasic_ReadWriteModule {
    constructor(theHandle: Handle_IGESBasic_ReadWriteModule);
  }

export declare class Handle_IGESData_SingleParentEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_SingleParentEntity): void;
  get(): IGESData_SingleParentEntity;
}

  export declare class Handle_IGESData_SingleParentEntity_1 extends Handle_IGESData_SingleParentEntity {
    constructor();
  }

  export declare class Handle_IGESData_SingleParentEntity_2 extends Handle_IGESData_SingleParentEntity {
    constructor(thePtr: IGESData_SingleParentEntity);
  }

  export declare class Handle_IGESData_SingleParentEntity_3 extends Handle_IGESData_SingleParentEntity {
    constructor(theHandle: Handle_IGESData_SingleParentEntity);
  }

  export declare class Handle_IGESData_SingleParentEntity_4 extends Handle_IGESData_SingleParentEntity {
    constructor(theHandle: Handle_IGESData_SingleParentEntity);
  }

export declare class Handle_IGESBasic_SingleParent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_SingleParent): void;
  get(): IGESBasic_SingleParent;
}

  export declare class Handle_IGESBasic_SingleParent_1 extends Handle_IGESBasic_SingleParent {
    constructor();
  }

  export declare class Handle_IGESBasic_SingleParent_2 extends Handle_IGESBasic_SingleParent {
    constructor(thePtr: IGESBasic_SingleParent);
  }

  export declare class Handle_IGESBasic_SingleParent_3 extends Handle_IGESBasic_SingleParent {
    constructor(theHandle: Handle_IGESBasic_SingleParent);
  }

  export declare class Handle_IGESBasic_SingleParent_4 extends Handle_IGESBasic_SingleParent {
    constructor(theHandle: Handle_IGESBasic_SingleParent);
  }

export declare class Handle_IGESBasic_SingularSubfigure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_SingularSubfigure): void;
  get(): IGESBasic_SingularSubfigure;
}

  export declare class Handle_IGESBasic_SingularSubfigure_1 extends Handle_IGESBasic_SingularSubfigure {
    constructor();
  }

  export declare class Handle_IGESBasic_SingularSubfigure_2 extends Handle_IGESBasic_SingularSubfigure {
    constructor(thePtr: IGESBasic_SingularSubfigure);
  }

  export declare class Handle_IGESBasic_SingularSubfigure_3 extends Handle_IGESBasic_SingularSubfigure {
    constructor(theHandle: Handle_IGESBasic_SingularSubfigure);
  }

  export declare class Handle_IGESBasic_SingularSubfigure_4 extends Handle_IGESBasic_SingularSubfigure {
    constructor(theHandle: Handle_IGESBasic_SingularSubfigure);
  }

export declare class Handle_IGESBasic_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_SpecificModule): void;
  get(): IGESBasic_SpecificModule;
}

  export declare class Handle_IGESBasic_SpecificModule_1 extends Handle_IGESBasic_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESBasic_SpecificModule_2 extends Handle_IGESBasic_SpecificModule {
    constructor(thePtr: IGESBasic_SpecificModule);
  }

  export declare class Handle_IGESBasic_SpecificModule_3 extends Handle_IGESBasic_SpecificModule {
    constructor(theHandle: Handle_IGESBasic_SpecificModule);
  }

  export declare class Handle_IGESBasic_SpecificModule_4 extends Handle_IGESBasic_SpecificModule {
    constructor(theHandle: Handle_IGESBasic_SpecificModule);
  }

export declare class Handle_IGESBasic_SubfigureDef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESBasic_SubfigureDef): void;
  get(): IGESBasic_SubfigureDef;
}

  export declare class Handle_IGESBasic_SubfigureDef_1 extends Handle_IGESBasic_SubfigureDef {
    constructor();
  }

  export declare class Handle_IGESBasic_SubfigureDef_2 extends Handle_IGESBasic_SubfigureDef {
    constructor(thePtr: IGESBasic_SubfigureDef);
  }

  export declare class Handle_IGESBasic_SubfigureDef_3 extends Handle_IGESBasic_SubfigureDef {
    constructor(theHandle: Handle_IGESBasic_SubfigureDef);
  }

  export declare class Handle_IGESBasic_SubfigureDef_4 extends Handle_IGESBasic_SubfigureDef {
    constructor(theHandle: Handle_IGESBasic_SubfigureDef);
  }

export declare class Handle_IGESControl_ActorWrite {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESControl_ActorWrite): void;
  get(): IGESControl_ActorWrite;
}

  export declare class Handle_IGESControl_ActorWrite_1 extends Handle_IGESControl_ActorWrite {
    constructor();
  }

  export declare class Handle_IGESControl_ActorWrite_2 extends Handle_IGESControl_ActorWrite {
    constructor(thePtr: IGESControl_ActorWrite);
  }

  export declare class Handle_IGESControl_ActorWrite_3 extends Handle_IGESControl_ActorWrite {
    constructor(theHandle: Handle_IGESControl_ActorWrite);
  }

  export declare class Handle_IGESControl_ActorWrite_4 extends Handle_IGESControl_ActorWrite {
    constructor(theHandle: Handle_IGESControl_ActorWrite);
  }

export declare class Handle_IGESToBRep_AlgoContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESToBRep_AlgoContainer): void;
  get(): IGESToBRep_AlgoContainer;
}

  export declare class Handle_IGESToBRep_AlgoContainer_1 extends Handle_IGESToBRep_AlgoContainer {
    constructor();
  }

  export declare class Handle_IGESToBRep_AlgoContainer_2 extends Handle_IGESToBRep_AlgoContainer {
    constructor(thePtr: IGESToBRep_AlgoContainer);
  }

  export declare class Handle_IGESToBRep_AlgoContainer_3 extends Handle_IGESToBRep_AlgoContainer {
    constructor(theHandle: Handle_IGESToBRep_AlgoContainer);
  }

  export declare class Handle_IGESToBRep_AlgoContainer_4 extends Handle_IGESToBRep_AlgoContainer {
    constructor(theHandle: Handle_IGESToBRep_AlgoContainer);
  }

export declare class Handle_IGESControl_AlgoContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESControl_AlgoContainer): void;
  get(): IGESControl_AlgoContainer;
}

  export declare class Handle_IGESControl_AlgoContainer_1 extends Handle_IGESControl_AlgoContainer {
    constructor();
  }

  export declare class Handle_IGESControl_AlgoContainer_2 extends Handle_IGESControl_AlgoContainer {
    constructor(thePtr: IGESControl_AlgoContainer);
  }

  export declare class Handle_IGESControl_AlgoContainer_3 extends Handle_IGESControl_AlgoContainer {
    constructor(theHandle: Handle_IGESControl_AlgoContainer);
  }

  export declare class Handle_IGESControl_AlgoContainer_4 extends Handle_IGESControl_AlgoContainer {
    constructor(theHandle: Handle_IGESControl_AlgoContainer);
  }

export declare class Handle_IGESControl_Controller {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESControl_Controller): void;
  get(): IGESControl_Controller;
}

  export declare class Handle_IGESControl_Controller_1 extends Handle_IGESControl_Controller {
    constructor();
  }

  export declare class Handle_IGESControl_Controller_2 extends Handle_IGESControl_Controller {
    constructor(thePtr: IGESControl_Controller);
  }

  export declare class Handle_IGESControl_Controller_3 extends Handle_IGESControl_Controller {
    constructor(theHandle: Handle_IGESControl_Controller);
  }

  export declare class Handle_IGESControl_Controller_4 extends Handle_IGESControl_Controller {
    constructor(theHandle: Handle_IGESControl_Controller);
  }

export declare class Handle_IGESToBRep_IGESBoundary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESToBRep_IGESBoundary): void;
  get(): IGESToBRep_IGESBoundary;
}

  export declare class Handle_IGESToBRep_IGESBoundary_1 extends Handle_IGESToBRep_IGESBoundary {
    constructor();
  }

  export declare class Handle_IGESToBRep_IGESBoundary_2 extends Handle_IGESToBRep_IGESBoundary {
    constructor(thePtr: IGESToBRep_IGESBoundary);
  }

  export declare class Handle_IGESToBRep_IGESBoundary_3 extends Handle_IGESToBRep_IGESBoundary {
    constructor(theHandle: Handle_IGESToBRep_IGESBoundary);
  }

  export declare class Handle_IGESToBRep_IGESBoundary_4 extends Handle_IGESToBRep_IGESBoundary {
    constructor(theHandle: Handle_IGESToBRep_IGESBoundary);
  }

export declare class Handle_IGESControl_IGESBoundary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESControl_IGESBoundary): void;
  get(): IGESControl_IGESBoundary;
}

  export declare class Handle_IGESControl_IGESBoundary_1 extends Handle_IGESControl_IGESBoundary {
    constructor();
  }

  export declare class Handle_IGESControl_IGESBoundary_2 extends Handle_IGESControl_IGESBoundary {
    constructor(thePtr: IGESControl_IGESBoundary);
  }

  export declare class Handle_IGESControl_IGESBoundary_3 extends Handle_IGESControl_IGESBoundary {
    constructor(theHandle: Handle_IGESControl_IGESBoundary);
  }

  export declare class Handle_IGESControl_IGESBoundary_4 extends Handle_IGESControl_IGESBoundary {
    constructor(theHandle: Handle_IGESControl_IGESBoundary);
  }

export declare class Handle_IGESToBRep_ToolContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESToBRep_ToolContainer): void;
  get(): IGESToBRep_ToolContainer;
}

  export declare class Handle_IGESToBRep_ToolContainer_1 extends Handle_IGESToBRep_ToolContainer {
    constructor();
  }

  export declare class Handle_IGESToBRep_ToolContainer_2 extends Handle_IGESToBRep_ToolContainer {
    constructor(thePtr: IGESToBRep_ToolContainer);
  }

  export declare class Handle_IGESToBRep_ToolContainer_3 extends Handle_IGESToBRep_ToolContainer {
    constructor(theHandle: Handle_IGESToBRep_ToolContainer);
  }

  export declare class Handle_IGESToBRep_ToolContainer_4 extends Handle_IGESToBRep_ToolContainer {
    constructor(theHandle: Handle_IGESToBRep_ToolContainer);
  }

export declare class Handle_IGESControl_ToolContainer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESControl_ToolContainer): void;
  get(): IGESControl_ToolContainer;
}

  export declare class Handle_IGESControl_ToolContainer_1 extends Handle_IGESControl_ToolContainer {
    constructor();
  }

  export declare class Handle_IGESControl_ToolContainer_2 extends Handle_IGESControl_ToolContainer {
    constructor(thePtr: IGESControl_ToolContainer);
  }

  export declare class Handle_IGESControl_ToolContainer_3 extends Handle_IGESControl_ToolContainer {
    constructor(theHandle: Handle_IGESControl_ToolContainer);
  }

  export declare class Handle_IGESControl_ToolContainer_4 extends Handle_IGESControl_ToolContainer {
    constructor(theHandle: Handle_IGESControl_ToolContainer);
  }

export declare class IGESData_Array1OfDirPart {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: IGESData_DirPart): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: IGESData_Array1OfDirPart): IGESData_Array1OfDirPart;
  Move(theOther: IGESData_Array1OfDirPart): IGESData_Array1OfDirPart;
  First(): IGESData_DirPart;
  ChangeFirst(): IGESData_DirPart;
  Last(): IGESData_DirPart;
  ChangeLast(): IGESData_DirPart;
  Value(theIndex: Standard_Integer): IGESData_DirPart;
  ChangeValue(theIndex: Standard_Integer): IGESData_DirPart;
  SetValue(theIndex: Standard_Integer, theItem: IGESData_DirPart): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class IGESData_Array1OfDirPart_1 extends IGESData_Array1OfDirPart {
    constructor();
  }

  export declare class IGESData_Array1OfDirPart_2 extends IGESData_Array1OfDirPart {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class IGESData_Array1OfDirPart_3 extends IGESData_Array1OfDirPart {
    constructor(theOther: IGESData_Array1OfDirPart);
  }

  export declare class IGESData_Array1OfDirPart_4 extends IGESData_Array1OfDirPart {
    constructor(theOther: IGESData_Array1OfDirPart);
  }

  export declare class IGESData_Array1OfDirPart_5 extends IGESData_Array1OfDirPart {
    constructor(theBegin: IGESData_DirPart, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_IGESData_ColorEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_ColorEntity): void;
  get(): IGESData_ColorEntity;
}

  export declare class Handle_IGESData_ColorEntity_1 extends Handle_IGESData_ColorEntity {
    constructor();
  }

  export declare class Handle_IGESData_ColorEntity_2 extends Handle_IGESData_ColorEntity {
    constructor(thePtr: IGESData_ColorEntity);
  }

  export declare class Handle_IGESData_ColorEntity_3 extends Handle_IGESData_ColorEntity {
    constructor(theHandle: Handle_IGESData_ColorEntity);
  }

  export declare class Handle_IGESData_ColorEntity_4 extends Handle_IGESData_ColorEntity {
    constructor(theHandle: Handle_IGESData_ColorEntity);
  }

export declare class Handle_IGESData_DefaultGeneral {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_DefaultGeneral): void;
  get(): IGESData_DefaultGeneral;
}

  export declare class Handle_IGESData_DefaultGeneral_1 extends Handle_IGESData_DefaultGeneral {
    constructor();
  }

  export declare class Handle_IGESData_DefaultGeneral_2 extends Handle_IGESData_DefaultGeneral {
    constructor(thePtr: IGESData_DefaultGeneral);
  }

  export declare class Handle_IGESData_DefaultGeneral_3 extends Handle_IGESData_DefaultGeneral {
    constructor(theHandle: Handle_IGESData_DefaultGeneral);
  }

  export declare class Handle_IGESData_DefaultGeneral_4 extends Handle_IGESData_DefaultGeneral {
    constructor(theHandle: Handle_IGESData_DefaultGeneral);
  }

export declare class Handle_IGESData_DefaultSpecific {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_DefaultSpecific): void;
  get(): IGESData_DefaultSpecific;
}

  export declare class Handle_IGESData_DefaultSpecific_1 extends Handle_IGESData_DefaultSpecific {
    constructor();
  }

  export declare class Handle_IGESData_DefaultSpecific_2 extends Handle_IGESData_DefaultSpecific {
    constructor(thePtr: IGESData_DefaultSpecific);
  }

  export declare class Handle_IGESData_DefaultSpecific_3 extends Handle_IGESData_DefaultSpecific {
    constructor(theHandle: Handle_IGESData_DefaultSpecific);
  }

  export declare class Handle_IGESData_DefaultSpecific_4 extends Handle_IGESData_DefaultSpecific {
    constructor(theHandle: Handle_IGESData_DefaultSpecific);
  }

export declare class Handle_IGESData_FileProtocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_FileProtocol): void;
  get(): IGESData_FileProtocol;
}

  export declare class Handle_IGESData_FileProtocol_1 extends Handle_IGESData_FileProtocol {
    constructor();
  }

  export declare class Handle_IGESData_FileProtocol_2 extends Handle_IGESData_FileProtocol {
    constructor(thePtr: IGESData_FileProtocol);
  }

  export declare class Handle_IGESData_FileProtocol_3 extends Handle_IGESData_FileProtocol {
    constructor(theHandle: Handle_IGESData_FileProtocol);
  }

  export declare class Handle_IGESData_FileProtocol_4 extends Handle_IGESData_FileProtocol {
    constructor(theHandle: Handle_IGESData_FileProtocol);
  }

export declare class Handle_IGESData_FileRecognizer {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_FileRecognizer): void;
  get(): IGESData_FileRecognizer;
}

  export declare class Handle_IGESData_FileRecognizer_1 extends Handle_IGESData_FileRecognizer {
    constructor();
  }

  export declare class Handle_IGESData_FileRecognizer_2 extends Handle_IGESData_FileRecognizer {
    constructor(thePtr: IGESData_FileRecognizer);
  }

  export declare class Handle_IGESData_FileRecognizer_3 extends Handle_IGESData_FileRecognizer {
    constructor(theHandle: Handle_IGESData_FileRecognizer);
  }

  export declare class Handle_IGESData_FileRecognizer_4 extends Handle_IGESData_FileRecognizer {
    constructor(theHandle: Handle_IGESData_FileRecognizer);
  }

export declare class Handle_IGESData_UndefinedEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_UndefinedEntity): void;
  get(): IGESData_UndefinedEntity;
}

  export declare class Handle_IGESData_UndefinedEntity_1 extends Handle_IGESData_UndefinedEntity {
    constructor();
  }

  export declare class Handle_IGESData_UndefinedEntity_2 extends Handle_IGESData_UndefinedEntity {
    constructor(thePtr: IGESData_UndefinedEntity);
  }

  export declare class Handle_IGESData_UndefinedEntity_3 extends Handle_IGESData_UndefinedEntity {
    constructor(theHandle: Handle_IGESData_UndefinedEntity);
  }

  export declare class Handle_IGESData_UndefinedEntity_4 extends Handle_IGESData_UndefinedEntity {
    constructor(theHandle: Handle_IGESData_UndefinedEntity);
  }

export declare class Handle_IGESData_FreeFormatEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_FreeFormatEntity): void;
  get(): IGESData_FreeFormatEntity;
}

  export declare class Handle_IGESData_FreeFormatEntity_1 extends Handle_IGESData_FreeFormatEntity {
    constructor();
  }

  export declare class Handle_IGESData_FreeFormatEntity_2 extends Handle_IGESData_FreeFormatEntity {
    constructor(thePtr: IGESData_FreeFormatEntity);
  }

  export declare class Handle_IGESData_FreeFormatEntity_3 extends Handle_IGESData_FreeFormatEntity {
    constructor(theHandle: Handle_IGESData_FreeFormatEntity);
  }

  export declare class Handle_IGESData_FreeFormatEntity_4 extends Handle_IGESData_FreeFormatEntity {
    constructor(theHandle: Handle_IGESData_FreeFormatEntity);
  }

export declare class Handle_IGESData_GlobalNodeOfSpecificLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_GlobalNodeOfSpecificLib): void;
  get(): IGESData_GlobalNodeOfSpecificLib;
}

  export declare class Handle_IGESData_GlobalNodeOfSpecificLib_1 extends Handle_IGESData_GlobalNodeOfSpecificLib {
    constructor();
  }

  export declare class Handle_IGESData_GlobalNodeOfSpecificLib_2 extends Handle_IGESData_GlobalNodeOfSpecificLib {
    constructor(thePtr: IGESData_GlobalNodeOfSpecificLib);
  }

  export declare class Handle_IGESData_GlobalNodeOfSpecificLib_3 extends Handle_IGESData_GlobalNodeOfSpecificLib {
    constructor(theHandle: Handle_IGESData_GlobalNodeOfSpecificLib);
  }

  export declare class Handle_IGESData_GlobalNodeOfSpecificLib_4 extends Handle_IGESData_GlobalNodeOfSpecificLib {
    constructor(theHandle: Handle_IGESData_GlobalNodeOfSpecificLib);
  }

export declare class Handle_IGESData_GlobalNodeOfWriterLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_GlobalNodeOfWriterLib): void;
  get(): IGESData_GlobalNodeOfWriterLib;
}

  export declare class Handle_IGESData_GlobalNodeOfWriterLib_1 extends Handle_IGESData_GlobalNodeOfWriterLib {
    constructor();
  }

  export declare class Handle_IGESData_GlobalNodeOfWriterLib_2 extends Handle_IGESData_GlobalNodeOfWriterLib {
    constructor(thePtr: IGESData_GlobalNodeOfWriterLib);
  }

  export declare class Handle_IGESData_GlobalNodeOfWriterLib_3 extends Handle_IGESData_GlobalNodeOfWriterLib {
    constructor(theHandle: Handle_IGESData_GlobalNodeOfWriterLib);
  }

  export declare class Handle_IGESData_GlobalNodeOfWriterLib_4 extends Handle_IGESData_GlobalNodeOfWriterLib {
    constructor(theHandle: Handle_IGESData_GlobalNodeOfWriterLib);
  }

export declare class Handle_IGESData_IGESModel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_IGESModel): void;
  get(): IGESData_IGESModel;
}

  export declare class Handle_IGESData_IGESModel_1 extends Handle_IGESData_IGESModel {
    constructor();
  }

  export declare class Handle_IGESData_IGESModel_2 extends Handle_IGESData_IGESModel {
    constructor(thePtr: IGESData_IGESModel);
  }

  export declare class Handle_IGESData_IGESModel_3 extends Handle_IGESData_IGESModel {
    constructor(theHandle: Handle_IGESData_IGESModel);
  }

  export declare class Handle_IGESData_IGESModel_4 extends Handle_IGESData_IGESModel {
    constructor(theHandle: Handle_IGESData_IGESModel);
  }

export declare class Handle_IGESData_IGESReaderData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_IGESReaderData): void;
  get(): IGESData_IGESReaderData;
}

  export declare class Handle_IGESData_IGESReaderData_1 extends Handle_IGESData_IGESReaderData {
    constructor();
  }

  export declare class Handle_IGESData_IGESReaderData_2 extends Handle_IGESData_IGESReaderData {
    constructor(thePtr: IGESData_IGESReaderData);
  }

  export declare class Handle_IGESData_IGESReaderData_3 extends Handle_IGESData_IGESReaderData {
    constructor(theHandle: Handle_IGESData_IGESReaderData);
  }

  export declare class Handle_IGESData_IGESReaderData_4 extends Handle_IGESData_IGESReaderData {
    constructor(theHandle: Handle_IGESData_IGESReaderData);
  }

export declare class Handle_IGESData_LabelDisplayEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_LabelDisplayEntity): void;
  get(): IGESData_LabelDisplayEntity;
}

  export declare class Handle_IGESData_LabelDisplayEntity_1 extends Handle_IGESData_LabelDisplayEntity {
    constructor();
  }

  export declare class Handle_IGESData_LabelDisplayEntity_2 extends Handle_IGESData_LabelDisplayEntity {
    constructor(thePtr: IGESData_LabelDisplayEntity);
  }

  export declare class Handle_IGESData_LabelDisplayEntity_3 extends Handle_IGESData_LabelDisplayEntity {
    constructor(theHandle: Handle_IGESData_LabelDisplayEntity);
  }

  export declare class Handle_IGESData_LabelDisplayEntity_4 extends Handle_IGESData_LabelDisplayEntity {
    constructor(theHandle: Handle_IGESData_LabelDisplayEntity);
  }

export declare class Handle_IGESData_LevelListEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_LevelListEntity): void;
  get(): IGESData_LevelListEntity;
}

  export declare class Handle_IGESData_LevelListEntity_1 extends Handle_IGESData_LevelListEntity {
    constructor();
  }

  export declare class Handle_IGESData_LevelListEntity_2 extends Handle_IGESData_LevelListEntity {
    constructor(thePtr: IGESData_LevelListEntity);
  }

  export declare class Handle_IGESData_LevelListEntity_3 extends Handle_IGESData_LevelListEntity {
    constructor(theHandle: Handle_IGESData_LevelListEntity);
  }

  export declare class Handle_IGESData_LevelListEntity_4 extends Handle_IGESData_LevelListEntity {
    constructor(theHandle: Handle_IGESData_LevelListEntity);
  }

export declare class Handle_IGESData_NodeOfSpecificLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_NodeOfSpecificLib): void;
  get(): IGESData_NodeOfSpecificLib;
}

  export declare class Handle_IGESData_NodeOfSpecificLib_1 extends Handle_IGESData_NodeOfSpecificLib {
    constructor();
  }

  export declare class Handle_IGESData_NodeOfSpecificLib_2 extends Handle_IGESData_NodeOfSpecificLib {
    constructor(thePtr: IGESData_NodeOfSpecificLib);
  }

  export declare class Handle_IGESData_NodeOfSpecificLib_3 extends Handle_IGESData_NodeOfSpecificLib {
    constructor(theHandle: Handle_IGESData_NodeOfSpecificLib);
  }

  export declare class Handle_IGESData_NodeOfSpecificLib_4 extends Handle_IGESData_NodeOfSpecificLib {
    constructor(theHandle: Handle_IGESData_NodeOfSpecificLib);
  }

export declare class Handle_IGESData_NodeOfWriterLib {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_NodeOfWriterLib): void;
  get(): IGESData_NodeOfWriterLib;
}

  export declare class Handle_IGESData_NodeOfWriterLib_1 extends Handle_IGESData_NodeOfWriterLib {
    constructor();
  }

  export declare class Handle_IGESData_NodeOfWriterLib_2 extends Handle_IGESData_NodeOfWriterLib {
    constructor(thePtr: IGESData_NodeOfWriterLib);
  }

  export declare class Handle_IGESData_NodeOfWriterLib_3 extends Handle_IGESData_NodeOfWriterLib {
    constructor(theHandle: Handle_IGESData_NodeOfWriterLib);
  }

  export declare class Handle_IGESData_NodeOfWriterLib_4 extends Handle_IGESData_NodeOfWriterLib {
    constructor(theHandle: Handle_IGESData_NodeOfWriterLib);
  }

export declare class Handle_IGESData_ToolLocation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_ToolLocation): void;
  get(): IGESData_ToolLocation;
}

  export declare class Handle_IGESData_ToolLocation_1 extends Handle_IGESData_ToolLocation {
    constructor();
  }

  export declare class Handle_IGESData_ToolLocation_2 extends Handle_IGESData_ToolLocation {
    constructor(thePtr: IGESData_ToolLocation);
  }

  export declare class Handle_IGESData_ToolLocation_3 extends Handle_IGESData_ToolLocation {
    constructor(theHandle: Handle_IGESData_ToolLocation);
  }

  export declare class Handle_IGESData_ToolLocation_4 extends Handle_IGESData_ToolLocation {
    constructor(theHandle: Handle_IGESData_ToolLocation);
  }

export declare class Handle_IGESData_TransfEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_TransfEntity): void;
  get(): IGESData_TransfEntity;
}

  export declare class Handle_IGESData_TransfEntity_1 extends Handle_IGESData_TransfEntity {
    constructor();
  }

  export declare class Handle_IGESData_TransfEntity_2 extends Handle_IGESData_TransfEntity {
    constructor(thePtr: IGESData_TransfEntity);
  }

  export declare class Handle_IGESData_TransfEntity_3 extends Handle_IGESData_TransfEntity {
    constructor(theHandle: Handle_IGESData_TransfEntity);
  }

  export declare class Handle_IGESData_TransfEntity_4 extends Handle_IGESData_TransfEntity {
    constructor(theHandle: Handle_IGESData_TransfEntity);
  }

export declare class Handle_IGESData_ViewKindEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESData_ViewKindEntity): void;
  get(): IGESData_ViewKindEntity;
}

  export declare class Handle_IGESData_ViewKindEntity_1 extends Handle_IGESData_ViewKindEntity {
    constructor();
  }

  export declare class Handle_IGESData_ViewKindEntity_2 extends Handle_IGESData_ViewKindEntity {
    constructor(thePtr: IGESData_ViewKindEntity);
  }

  export declare class Handle_IGESData_ViewKindEntity_3 extends Handle_IGESData_ViewKindEntity {
    constructor(theHandle: Handle_IGESData_ViewKindEntity);
  }

  export declare class Handle_IGESData_ViewKindEntity_4 extends Handle_IGESData_ViewKindEntity {
    constructor(theHandle: Handle_IGESData_ViewKindEntity);
  }

export declare class Handle_IGESDefs_AssociativityDef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_AssociativityDef): void;
  get(): IGESDefs_AssociativityDef;
}

  export declare class Handle_IGESDefs_AssociativityDef_1 extends Handle_IGESDefs_AssociativityDef {
    constructor();
  }

  export declare class Handle_IGESDefs_AssociativityDef_2 extends Handle_IGESDefs_AssociativityDef {
    constructor(thePtr: IGESDefs_AssociativityDef);
  }

  export declare class Handle_IGESDefs_AssociativityDef_3 extends Handle_IGESDefs_AssociativityDef {
    constructor(theHandle: Handle_IGESDefs_AssociativityDef);
  }

  export declare class Handle_IGESDefs_AssociativityDef_4 extends Handle_IGESDefs_AssociativityDef {
    constructor(theHandle: Handle_IGESDefs_AssociativityDef);
  }

export declare class Handle_IGESDefs_AttributeDef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_AttributeDef): void;
  get(): IGESDefs_AttributeDef;
}

  export declare class Handle_IGESDefs_AttributeDef_1 extends Handle_IGESDefs_AttributeDef {
    constructor();
  }

  export declare class Handle_IGESDefs_AttributeDef_2 extends Handle_IGESDefs_AttributeDef {
    constructor(thePtr: IGESDefs_AttributeDef);
  }

  export declare class Handle_IGESDefs_AttributeDef_3 extends Handle_IGESDefs_AttributeDef {
    constructor(theHandle: Handle_IGESDefs_AttributeDef);
  }

  export declare class Handle_IGESDefs_AttributeDef_4 extends Handle_IGESDefs_AttributeDef {
    constructor(theHandle: Handle_IGESDefs_AttributeDef);
  }

export declare class Handle_IGESDefs_AttributeTable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_AttributeTable): void;
  get(): IGESDefs_AttributeTable;
}

  export declare class Handle_IGESDefs_AttributeTable_1 extends Handle_IGESDefs_AttributeTable {
    constructor();
  }

  export declare class Handle_IGESDefs_AttributeTable_2 extends Handle_IGESDefs_AttributeTable {
    constructor(thePtr: IGESDefs_AttributeTable);
  }

  export declare class Handle_IGESDefs_AttributeTable_3 extends Handle_IGESDefs_AttributeTable {
    constructor(theHandle: Handle_IGESDefs_AttributeTable);
  }

  export declare class Handle_IGESDefs_AttributeTable_4 extends Handle_IGESDefs_AttributeTable {
    constructor(theHandle: Handle_IGESDefs_AttributeTable);
  }

export declare class Handle_IGESDefs_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_GeneralModule): void;
  get(): IGESDefs_GeneralModule;
}

  export declare class Handle_IGESDefs_GeneralModule_1 extends Handle_IGESDefs_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESDefs_GeneralModule_2 extends Handle_IGESDefs_GeneralModule {
    constructor(thePtr: IGESDefs_GeneralModule);
  }

  export declare class Handle_IGESDefs_GeneralModule_3 extends Handle_IGESDefs_GeneralModule {
    constructor(theHandle: Handle_IGESDefs_GeneralModule);
  }

  export declare class Handle_IGESDefs_GeneralModule_4 extends Handle_IGESDefs_GeneralModule {
    constructor(theHandle: Handle_IGESDefs_GeneralModule);
  }

export declare class Handle_IGESDefs_GenericData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_GenericData): void;
  get(): IGESDefs_GenericData;
}

  export declare class Handle_IGESDefs_GenericData_1 extends Handle_IGESDefs_GenericData {
    constructor();
  }

  export declare class Handle_IGESDefs_GenericData_2 extends Handle_IGESDefs_GenericData {
    constructor(thePtr: IGESDefs_GenericData);
  }

  export declare class Handle_IGESDefs_GenericData_3 extends Handle_IGESDefs_GenericData {
    constructor(theHandle: Handle_IGESDefs_GenericData);
  }

  export declare class Handle_IGESDefs_GenericData_4 extends Handle_IGESDefs_GenericData {
    constructor(theHandle: Handle_IGESDefs_GenericData);
  }

export declare class Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_HArray1OfHArray1OfTextDisplayTemplate): void;
  get(): IGESDefs_HArray1OfHArray1OfTextDisplayTemplate;
}

  export declare class Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_1 extends Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate {
    constructor();
  }

  export declare class Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_2 extends Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate {
    constructor(thePtr: IGESDefs_HArray1OfHArray1OfTextDisplayTemplate);
  }

  export declare class Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_3 extends Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate {
    constructor(theHandle: Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate);
  }

  export declare class Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_4 extends Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate {
    constructor(theHandle: Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate);
  }

export declare class Handle_IGESDefs_MacroDef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_MacroDef): void;
  get(): IGESDefs_MacroDef;
}

  export declare class Handle_IGESDefs_MacroDef_1 extends Handle_IGESDefs_MacroDef {
    constructor();
  }

  export declare class Handle_IGESDefs_MacroDef_2 extends Handle_IGESDefs_MacroDef {
    constructor(thePtr: IGESDefs_MacroDef);
  }

  export declare class Handle_IGESDefs_MacroDef_3 extends Handle_IGESDefs_MacroDef {
    constructor(theHandle: Handle_IGESDefs_MacroDef);
  }

  export declare class Handle_IGESDefs_MacroDef_4 extends Handle_IGESDefs_MacroDef {
    constructor(theHandle: Handle_IGESDefs_MacroDef);
  }

export declare class Handle_IGESDefs_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_Protocol): void;
  get(): IGESDefs_Protocol;
}

  export declare class Handle_IGESDefs_Protocol_1 extends Handle_IGESDefs_Protocol {
    constructor();
  }

  export declare class Handle_IGESDefs_Protocol_2 extends Handle_IGESDefs_Protocol {
    constructor(thePtr: IGESDefs_Protocol);
  }

  export declare class Handle_IGESDefs_Protocol_3 extends Handle_IGESDefs_Protocol {
    constructor(theHandle: Handle_IGESDefs_Protocol);
  }

  export declare class Handle_IGESDefs_Protocol_4 extends Handle_IGESDefs_Protocol {
    constructor(theHandle: Handle_IGESDefs_Protocol);
  }

export declare class Handle_IGESDefs_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_ReadWriteModule): void;
  get(): IGESDefs_ReadWriteModule;
}

  export declare class Handle_IGESDefs_ReadWriteModule_1 extends Handle_IGESDefs_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESDefs_ReadWriteModule_2 extends Handle_IGESDefs_ReadWriteModule {
    constructor(thePtr: IGESDefs_ReadWriteModule);
  }

  export declare class Handle_IGESDefs_ReadWriteModule_3 extends Handle_IGESDefs_ReadWriteModule {
    constructor(theHandle: Handle_IGESDefs_ReadWriteModule);
  }

  export declare class Handle_IGESDefs_ReadWriteModule_4 extends Handle_IGESDefs_ReadWriteModule {
    constructor(theHandle: Handle_IGESDefs_ReadWriteModule);
  }

export declare class Handle_IGESDefs_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_SpecificModule): void;
  get(): IGESDefs_SpecificModule;
}

  export declare class Handle_IGESDefs_SpecificModule_1 extends Handle_IGESDefs_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESDefs_SpecificModule_2 extends Handle_IGESDefs_SpecificModule {
    constructor(thePtr: IGESDefs_SpecificModule);
  }

  export declare class Handle_IGESDefs_SpecificModule_3 extends Handle_IGESDefs_SpecificModule {
    constructor(theHandle: Handle_IGESDefs_SpecificModule);
  }

  export declare class Handle_IGESDefs_SpecificModule_4 extends Handle_IGESDefs_SpecificModule {
    constructor(theHandle: Handle_IGESDefs_SpecificModule);
  }

export declare class Handle_IGESDefs_UnitsData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDefs_UnitsData): void;
  get(): IGESDefs_UnitsData;
}

  export declare class Handle_IGESDefs_UnitsData_1 extends Handle_IGESDefs_UnitsData {
    constructor();
  }

  export declare class Handle_IGESDefs_UnitsData_2 extends Handle_IGESDefs_UnitsData {
    constructor(thePtr: IGESDefs_UnitsData);
  }

  export declare class Handle_IGESDefs_UnitsData_3 extends Handle_IGESDefs_UnitsData {
    constructor(theHandle: Handle_IGESDefs_UnitsData);
  }

  export declare class Handle_IGESDefs_UnitsData_4 extends Handle_IGESDefs_UnitsData {
    constructor(theHandle: Handle_IGESDefs_UnitsData);
  }

export declare class Handle_IGESDimen_AngularDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_AngularDimension): void;
  get(): IGESDimen_AngularDimension;
}

  export declare class Handle_IGESDimen_AngularDimension_1 extends Handle_IGESDimen_AngularDimension {
    constructor();
  }

  export declare class Handle_IGESDimen_AngularDimension_2 extends Handle_IGESDimen_AngularDimension {
    constructor(thePtr: IGESDimen_AngularDimension);
  }

  export declare class Handle_IGESDimen_AngularDimension_3 extends Handle_IGESDimen_AngularDimension {
    constructor(theHandle: Handle_IGESDimen_AngularDimension);
  }

  export declare class Handle_IGESDimen_AngularDimension_4 extends Handle_IGESDimen_AngularDimension {
    constructor(theHandle: Handle_IGESDimen_AngularDimension);
  }

export declare class Handle_IGESDimen_LeaderArrow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_LeaderArrow): void;
  get(): IGESDimen_LeaderArrow;
}

  export declare class Handle_IGESDimen_LeaderArrow_1 extends Handle_IGESDimen_LeaderArrow {
    constructor();
  }

  export declare class Handle_IGESDimen_LeaderArrow_2 extends Handle_IGESDimen_LeaderArrow {
    constructor(thePtr: IGESDimen_LeaderArrow);
  }

  export declare class Handle_IGESDimen_LeaderArrow_3 extends Handle_IGESDimen_LeaderArrow {
    constructor(theHandle: Handle_IGESDimen_LeaderArrow);
  }

  export declare class Handle_IGESDimen_LeaderArrow_4 extends Handle_IGESDimen_LeaderArrow {
    constructor(theHandle: Handle_IGESDimen_LeaderArrow);
  }

export declare class Handle_IGESDimen_BasicDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_BasicDimension): void;
  get(): IGESDimen_BasicDimension;
}

  export declare class Handle_IGESDimen_BasicDimension_1 extends Handle_IGESDimen_BasicDimension {
    constructor();
  }

  export declare class Handle_IGESDimen_BasicDimension_2 extends Handle_IGESDimen_BasicDimension {
    constructor(thePtr: IGESDimen_BasicDimension);
  }

  export declare class Handle_IGESDimen_BasicDimension_3 extends Handle_IGESDimen_BasicDimension {
    constructor(theHandle: Handle_IGESDimen_BasicDimension);
  }

  export declare class Handle_IGESDimen_BasicDimension_4 extends Handle_IGESDimen_BasicDimension {
    constructor(theHandle: Handle_IGESDimen_BasicDimension);
  }

export declare class Handle_IGESDimen_CenterLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_CenterLine): void;
  get(): IGESDimen_CenterLine;
}

  export declare class Handle_IGESDimen_CenterLine_1 extends Handle_IGESDimen_CenterLine {
    constructor();
  }

  export declare class Handle_IGESDimen_CenterLine_2 extends Handle_IGESDimen_CenterLine {
    constructor(thePtr: IGESDimen_CenterLine);
  }

  export declare class Handle_IGESDimen_CenterLine_3 extends Handle_IGESDimen_CenterLine {
    constructor(theHandle: Handle_IGESDimen_CenterLine);
  }

  export declare class Handle_IGESDimen_CenterLine_4 extends Handle_IGESDimen_CenterLine {
    constructor(theHandle: Handle_IGESDimen_CenterLine);
  }

export declare class Handle_IGESDimen_CurveDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_CurveDimension): void;
  get(): IGESDimen_CurveDimension;
}

  export declare class Handle_IGESDimen_CurveDimension_1 extends Handle_IGESDimen_CurveDimension {
    constructor();
  }

  export declare class Handle_IGESDimen_CurveDimension_2 extends Handle_IGESDimen_CurveDimension {
    constructor(thePtr: IGESDimen_CurveDimension);
  }

  export declare class Handle_IGESDimen_CurveDimension_3 extends Handle_IGESDimen_CurveDimension {
    constructor(theHandle: Handle_IGESDimen_CurveDimension);
  }

  export declare class Handle_IGESDimen_CurveDimension_4 extends Handle_IGESDimen_CurveDimension {
    constructor(theHandle: Handle_IGESDimen_CurveDimension);
  }

export declare class Handle_IGESDimen_DiameterDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_DiameterDimension): void;
  get(): IGESDimen_DiameterDimension;
}

  export declare class Handle_IGESDimen_DiameterDimension_1 extends Handle_IGESDimen_DiameterDimension {
    constructor();
  }

  export declare class Handle_IGESDimen_DiameterDimension_2 extends Handle_IGESDimen_DiameterDimension {
    constructor(thePtr: IGESDimen_DiameterDimension);
  }

  export declare class Handle_IGESDimen_DiameterDimension_3 extends Handle_IGESDimen_DiameterDimension {
    constructor(theHandle: Handle_IGESDimen_DiameterDimension);
  }

  export declare class Handle_IGESDimen_DiameterDimension_4 extends Handle_IGESDimen_DiameterDimension {
    constructor(theHandle: Handle_IGESDimen_DiameterDimension);
  }

export declare class Handle_IGESDimen_DimensionDisplayData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_DimensionDisplayData): void;
  get(): IGESDimen_DimensionDisplayData;
}

  export declare class Handle_IGESDimen_DimensionDisplayData_1 extends Handle_IGESDimen_DimensionDisplayData {
    constructor();
  }

  export declare class Handle_IGESDimen_DimensionDisplayData_2 extends Handle_IGESDimen_DimensionDisplayData {
    constructor(thePtr: IGESDimen_DimensionDisplayData);
  }

  export declare class Handle_IGESDimen_DimensionDisplayData_3 extends Handle_IGESDimen_DimensionDisplayData {
    constructor(theHandle: Handle_IGESDimen_DimensionDisplayData);
  }

  export declare class Handle_IGESDimen_DimensionDisplayData_4 extends Handle_IGESDimen_DimensionDisplayData {
    constructor(theHandle: Handle_IGESDimen_DimensionDisplayData);
  }

export declare class Handle_IGESDimen_DimensionTolerance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_DimensionTolerance): void;
  get(): IGESDimen_DimensionTolerance;
}

  export declare class Handle_IGESDimen_DimensionTolerance_1 extends Handle_IGESDimen_DimensionTolerance {
    constructor();
  }

  export declare class Handle_IGESDimen_DimensionTolerance_2 extends Handle_IGESDimen_DimensionTolerance {
    constructor(thePtr: IGESDimen_DimensionTolerance);
  }

  export declare class Handle_IGESDimen_DimensionTolerance_3 extends Handle_IGESDimen_DimensionTolerance {
    constructor(theHandle: Handle_IGESDimen_DimensionTolerance);
  }

  export declare class Handle_IGESDimen_DimensionTolerance_4 extends Handle_IGESDimen_DimensionTolerance {
    constructor(theHandle: Handle_IGESDimen_DimensionTolerance);
  }

export declare class Handle_IGESDimen_DimensionUnits {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_DimensionUnits): void;
  get(): IGESDimen_DimensionUnits;
}

  export declare class Handle_IGESDimen_DimensionUnits_1 extends Handle_IGESDimen_DimensionUnits {
    constructor();
  }

  export declare class Handle_IGESDimen_DimensionUnits_2 extends Handle_IGESDimen_DimensionUnits {
    constructor(thePtr: IGESDimen_DimensionUnits);
  }

  export declare class Handle_IGESDimen_DimensionUnits_3 extends Handle_IGESDimen_DimensionUnits {
    constructor(theHandle: Handle_IGESDimen_DimensionUnits);
  }

  export declare class Handle_IGESDimen_DimensionUnits_4 extends Handle_IGESDimen_DimensionUnits {
    constructor(theHandle: Handle_IGESDimen_DimensionUnits);
  }

export declare class Handle_IGESDimen_DimensionedGeometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_DimensionedGeometry): void;
  get(): IGESDimen_DimensionedGeometry;
}

  export declare class Handle_IGESDimen_DimensionedGeometry_1 extends Handle_IGESDimen_DimensionedGeometry {
    constructor();
  }

  export declare class Handle_IGESDimen_DimensionedGeometry_2 extends Handle_IGESDimen_DimensionedGeometry {
    constructor(thePtr: IGESDimen_DimensionedGeometry);
  }

  export declare class Handle_IGESDimen_DimensionedGeometry_3 extends Handle_IGESDimen_DimensionedGeometry {
    constructor(theHandle: Handle_IGESDimen_DimensionedGeometry);
  }

  export declare class Handle_IGESDimen_DimensionedGeometry_4 extends Handle_IGESDimen_DimensionedGeometry {
    constructor(theHandle: Handle_IGESDimen_DimensionedGeometry);
  }

export declare class Handle_IGESDimen_HArray1OfLeaderArrow {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_HArray1OfLeaderArrow): void;
  get(): IGESDimen_HArray1OfLeaderArrow;
}

  export declare class Handle_IGESDimen_HArray1OfLeaderArrow_1 extends Handle_IGESDimen_HArray1OfLeaderArrow {
    constructor();
  }

  export declare class Handle_IGESDimen_HArray1OfLeaderArrow_2 extends Handle_IGESDimen_HArray1OfLeaderArrow {
    constructor(thePtr: IGESDimen_HArray1OfLeaderArrow);
  }

  export declare class Handle_IGESDimen_HArray1OfLeaderArrow_3 extends Handle_IGESDimen_HArray1OfLeaderArrow {
    constructor(theHandle: Handle_IGESDimen_HArray1OfLeaderArrow);
  }

  export declare class Handle_IGESDimen_HArray1OfLeaderArrow_4 extends Handle_IGESDimen_HArray1OfLeaderArrow {
    constructor(theHandle: Handle_IGESDimen_HArray1OfLeaderArrow);
  }

export declare class Handle_IGESDimen_FlagNote {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_FlagNote): void;
  get(): IGESDimen_FlagNote;
}

  export declare class Handle_IGESDimen_FlagNote_1 extends Handle_IGESDimen_FlagNote {
    constructor();
  }

  export declare class Handle_IGESDimen_FlagNote_2 extends Handle_IGESDimen_FlagNote {
    constructor(thePtr: IGESDimen_FlagNote);
  }

  export declare class Handle_IGESDimen_FlagNote_3 extends Handle_IGESDimen_FlagNote {
    constructor(theHandle: Handle_IGESDimen_FlagNote);
  }

  export declare class Handle_IGESDimen_FlagNote_4 extends Handle_IGESDimen_FlagNote {
    constructor(theHandle: Handle_IGESDimen_FlagNote);
  }

export declare class Handle_IGESDimen_GeneralLabel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_GeneralLabel): void;
  get(): IGESDimen_GeneralLabel;
}

  export declare class Handle_IGESDimen_GeneralLabel_1 extends Handle_IGESDimen_GeneralLabel {
    constructor();
  }

  export declare class Handle_IGESDimen_GeneralLabel_2 extends Handle_IGESDimen_GeneralLabel {
    constructor(thePtr: IGESDimen_GeneralLabel);
  }

  export declare class Handle_IGESDimen_GeneralLabel_3 extends Handle_IGESDimen_GeneralLabel {
    constructor(theHandle: Handle_IGESDimen_GeneralLabel);
  }

  export declare class Handle_IGESDimen_GeneralLabel_4 extends Handle_IGESDimen_GeneralLabel {
    constructor(theHandle: Handle_IGESDimen_GeneralLabel);
  }

export declare class Handle_IGESDimen_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_GeneralModule): void;
  get(): IGESDimen_GeneralModule;
}

  export declare class Handle_IGESDimen_GeneralModule_1 extends Handle_IGESDimen_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESDimen_GeneralModule_2 extends Handle_IGESDimen_GeneralModule {
    constructor(thePtr: IGESDimen_GeneralModule);
  }

  export declare class Handle_IGESDimen_GeneralModule_3 extends Handle_IGESDimen_GeneralModule {
    constructor(theHandle: Handle_IGESDimen_GeneralModule);
  }

  export declare class Handle_IGESDimen_GeneralModule_4 extends Handle_IGESDimen_GeneralModule {
    constructor(theHandle: Handle_IGESDimen_GeneralModule);
  }

export declare class Handle_IGESDimen_GeneralSymbol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_GeneralSymbol): void;
  get(): IGESDimen_GeneralSymbol;
}

  export declare class Handle_IGESDimen_GeneralSymbol_1 extends Handle_IGESDimen_GeneralSymbol {
    constructor();
  }

  export declare class Handle_IGESDimen_GeneralSymbol_2 extends Handle_IGESDimen_GeneralSymbol {
    constructor(thePtr: IGESDimen_GeneralSymbol);
  }

  export declare class Handle_IGESDimen_GeneralSymbol_3 extends Handle_IGESDimen_GeneralSymbol {
    constructor(theHandle: Handle_IGESDimen_GeneralSymbol);
  }

  export declare class Handle_IGESDimen_GeneralSymbol_4 extends Handle_IGESDimen_GeneralSymbol {
    constructor(theHandle: Handle_IGESDimen_GeneralSymbol);
  }

export declare class Handle_IGESDimen_LinearDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_LinearDimension): void;
  get(): IGESDimen_LinearDimension;
}

  export declare class Handle_IGESDimen_LinearDimension_1 extends Handle_IGESDimen_LinearDimension {
    constructor();
  }

  export declare class Handle_IGESDimen_LinearDimension_2 extends Handle_IGESDimen_LinearDimension {
    constructor(thePtr: IGESDimen_LinearDimension);
  }

  export declare class Handle_IGESDimen_LinearDimension_3 extends Handle_IGESDimen_LinearDimension {
    constructor(theHandle: Handle_IGESDimen_LinearDimension);
  }

  export declare class Handle_IGESDimen_LinearDimension_4 extends Handle_IGESDimen_LinearDimension {
    constructor(theHandle: Handle_IGESDimen_LinearDimension);
  }

export declare class Handle_IGESDimen_NewDimensionedGeometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_NewDimensionedGeometry): void;
  get(): IGESDimen_NewDimensionedGeometry;
}

  export declare class Handle_IGESDimen_NewDimensionedGeometry_1 extends Handle_IGESDimen_NewDimensionedGeometry {
    constructor();
  }

  export declare class Handle_IGESDimen_NewDimensionedGeometry_2 extends Handle_IGESDimen_NewDimensionedGeometry {
    constructor(thePtr: IGESDimen_NewDimensionedGeometry);
  }

  export declare class Handle_IGESDimen_NewDimensionedGeometry_3 extends Handle_IGESDimen_NewDimensionedGeometry {
    constructor(theHandle: Handle_IGESDimen_NewDimensionedGeometry);
  }

  export declare class Handle_IGESDimen_NewDimensionedGeometry_4 extends Handle_IGESDimen_NewDimensionedGeometry {
    constructor(theHandle: Handle_IGESDimen_NewDimensionedGeometry);
  }

export declare class Handle_IGESDimen_NewGeneralNote {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_NewGeneralNote): void;
  get(): IGESDimen_NewGeneralNote;
}

  export declare class Handle_IGESDimen_NewGeneralNote_1 extends Handle_IGESDimen_NewGeneralNote {
    constructor();
  }

  export declare class Handle_IGESDimen_NewGeneralNote_2 extends Handle_IGESDimen_NewGeneralNote {
    constructor(thePtr: IGESDimen_NewGeneralNote);
  }

  export declare class Handle_IGESDimen_NewGeneralNote_3 extends Handle_IGESDimen_NewGeneralNote {
    constructor(theHandle: Handle_IGESDimen_NewGeneralNote);
  }

  export declare class Handle_IGESDimen_NewGeneralNote_4 extends Handle_IGESDimen_NewGeneralNote {
    constructor(theHandle: Handle_IGESDimen_NewGeneralNote);
  }

export declare class Handle_IGESDimen_OrdinateDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_OrdinateDimension): void;
  get(): IGESDimen_OrdinateDimension;
}

  export declare class Handle_IGESDimen_OrdinateDimension_1 extends Handle_IGESDimen_OrdinateDimension {
    constructor();
  }

  export declare class Handle_IGESDimen_OrdinateDimension_2 extends Handle_IGESDimen_OrdinateDimension {
    constructor(thePtr: IGESDimen_OrdinateDimension);
  }

  export declare class Handle_IGESDimen_OrdinateDimension_3 extends Handle_IGESDimen_OrdinateDimension {
    constructor(theHandle: Handle_IGESDimen_OrdinateDimension);
  }

  export declare class Handle_IGESDimen_OrdinateDimension_4 extends Handle_IGESDimen_OrdinateDimension {
    constructor(theHandle: Handle_IGESDimen_OrdinateDimension);
  }

export declare class Handle_IGESDimen_PointDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_PointDimension): void;
  get(): IGESDimen_PointDimension;
}

  export declare class Handle_IGESDimen_PointDimension_1 extends Handle_IGESDimen_PointDimension {
    constructor();
  }

  export declare class Handle_IGESDimen_PointDimension_2 extends Handle_IGESDimen_PointDimension {
    constructor(thePtr: IGESDimen_PointDimension);
  }

  export declare class Handle_IGESDimen_PointDimension_3 extends Handle_IGESDimen_PointDimension {
    constructor(theHandle: Handle_IGESDimen_PointDimension);
  }

  export declare class Handle_IGESDimen_PointDimension_4 extends Handle_IGESDimen_PointDimension {
    constructor(theHandle: Handle_IGESDimen_PointDimension);
  }

export declare class Handle_IGESDimen_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_Protocol): void;
  get(): IGESDimen_Protocol;
}

  export declare class Handle_IGESDimen_Protocol_1 extends Handle_IGESDimen_Protocol {
    constructor();
  }

  export declare class Handle_IGESDimen_Protocol_2 extends Handle_IGESDimen_Protocol {
    constructor(thePtr: IGESDimen_Protocol);
  }

  export declare class Handle_IGESDimen_Protocol_3 extends Handle_IGESDimen_Protocol {
    constructor(theHandle: Handle_IGESDimen_Protocol);
  }

  export declare class Handle_IGESDimen_Protocol_4 extends Handle_IGESDimen_Protocol {
    constructor(theHandle: Handle_IGESDimen_Protocol);
  }

export declare class Handle_IGESDimen_RadiusDimension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_RadiusDimension): void;
  get(): IGESDimen_RadiusDimension;
}

  export declare class Handle_IGESDimen_RadiusDimension_1 extends Handle_IGESDimen_RadiusDimension {
    constructor();
  }

  export declare class Handle_IGESDimen_RadiusDimension_2 extends Handle_IGESDimen_RadiusDimension {
    constructor(thePtr: IGESDimen_RadiusDimension);
  }

  export declare class Handle_IGESDimen_RadiusDimension_3 extends Handle_IGESDimen_RadiusDimension {
    constructor(theHandle: Handle_IGESDimen_RadiusDimension);
  }

  export declare class Handle_IGESDimen_RadiusDimension_4 extends Handle_IGESDimen_RadiusDimension {
    constructor(theHandle: Handle_IGESDimen_RadiusDimension);
  }

export declare class Handle_IGESDimen_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_ReadWriteModule): void;
  get(): IGESDimen_ReadWriteModule;
}

  export declare class Handle_IGESDimen_ReadWriteModule_1 extends Handle_IGESDimen_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESDimen_ReadWriteModule_2 extends Handle_IGESDimen_ReadWriteModule {
    constructor(thePtr: IGESDimen_ReadWriteModule);
  }

  export declare class Handle_IGESDimen_ReadWriteModule_3 extends Handle_IGESDimen_ReadWriteModule {
    constructor(theHandle: Handle_IGESDimen_ReadWriteModule);
  }

  export declare class Handle_IGESDimen_ReadWriteModule_4 extends Handle_IGESDimen_ReadWriteModule {
    constructor(theHandle: Handle_IGESDimen_ReadWriteModule);
  }

export declare class Handle_IGESDimen_Section {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_Section): void;
  get(): IGESDimen_Section;
}

  export declare class Handle_IGESDimen_Section_1 extends Handle_IGESDimen_Section {
    constructor();
  }

  export declare class Handle_IGESDimen_Section_2 extends Handle_IGESDimen_Section {
    constructor(thePtr: IGESDimen_Section);
  }

  export declare class Handle_IGESDimen_Section_3 extends Handle_IGESDimen_Section {
    constructor(theHandle: Handle_IGESDimen_Section);
  }

  export declare class Handle_IGESDimen_Section_4 extends Handle_IGESDimen_Section {
    constructor(theHandle: Handle_IGESDimen_Section);
  }

export declare class Handle_IGESDimen_SectionedArea {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_SectionedArea): void;
  get(): IGESDimen_SectionedArea;
}

  export declare class Handle_IGESDimen_SectionedArea_1 extends Handle_IGESDimen_SectionedArea {
    constructor();
  }

  export declare class Handle_IGESDimen_SectionedArea_2 extends Handle_IGESDimen_SectionedArea {
    constructor(thePtr: IGESDimen_SectionedArea);
  }

  export declare class Handle_IGESDimen_SectionedArea_3 extends Handle_IGESDimen_SectionedArea {
    constructor(theHandle: Handle_IGESDimen_SectionedArea);
  }

  export declare class Handle_IGESDimen_SectionedArea_4 extends Handle_IGESDimen_SectionedArea {
    constructor(theHandle: Handle_IGESDimen_SectionedArea);
  }

export declare class Handle_IGESDimen_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_SpecificModule): void;
  get(): IGESDimen_SpecificModule;
}

  export declare class Handle_IGESDimen_SpecificModule_1 extends Handle_IGESDimen_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESDimen_SpecificModule_2 extends Handle_IGESDimen_SpecificModule {
    constructor(thePtr: IGESDimen_SpecificModule);
  }

  export declare class Handle_IGESDimen_SpecificModule_3 extends Handle_IGESDimen_SpecificModule {
    constructor(theHandle: Handle_IGESDimen_SpecificModule);
  }

  export declare class Handle_IGESDimen_SpecificModule_4 extends Handle_IGESDimen_SpecificModule {
    constructor(theHandle: Handle_IGESDimen_SpecificModule);
  }

export declare class Handle_IGESDimen_WitnessLine {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDimen_WitnessLine): void;
  get(): IGESDimen_WitnessLine;
}

  export declare class Handle_IGESDimen_WitnessLine_1 extends Handle_IGESDimen_WitnessLine {
    constructor();
  }

  export declare class Handle_IGESDimen_WitnessLine_2 extends Handle_IGESDimen_WitnessLine {
    constructor(thePtr: IGESDimen_WitnessLine);
  }

  export declare class Handle_IGESDimen_WitnessLine_3 extends Handle_IGESDimen_WitnessLine {
    constructor(theHandle: Handle_IGESDimen_WitnessLine);
  }

  export declare class Handle_IGESDimen_WitnessLine_4 extends Handle_IGESDimen_WitnessLine {
    constructor(theHandle: Handle_IGESDimen_WitnessLine);
  }

export declare class Handle_IGESDraw_CircArraySubfigure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_CircArraySubfigure): void;
  get(): IGESDraw_CircArraySubfigure;
}

  export declare class Handle_IGESDraw_CircArraySubfigure_1 extends Handle_IGESDraw_CircArraySubfigure {
    constructor();
  }

  export declare class Handle_IGESDraw_CircArraySubfigure_2 extends Handle_IGESDraw_CircArraySubfigure {
    constructor(thePtr: IGESDraw_CircArraySubfigure);
  }

  export declare class Handle_IGESDraw_CircArraySubfigure_3 extends Handle_IGESDraw_CircArraySubfigure {
    constructor(theHandle: Handle_IGESDraw_CircArraySubfigure);
  }

  export declare class Handle_IGESDraw_CircArraySubfigure_4 extends Handle_IGESDraw_CircArraySubfigure {
    constructor(theHandle: Handle_IGESDraw_CircArraySubfigure);
  }

export declare class Handle_IGESDraw_HArray1OfViewKindEntity {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_HArray1OfViewKindEntity): void;
  get(): IGESDraw_HArray1OfViewKindEntity;
}

  export declare class Handle_IGESDraw_HArray1OfViewKindEntity_1 extends Handle_IGESDraw_HArray1OfViewKindEntity {
    constructor();
  }

  export declare class Handle_IGESDraw_HArray1OfViewKindEntity_2 extends Handle_IGESDraw_HArray1OfViewKindEntity {
    constructor(thePtr: IGESDraw_HArray1OfViewKindEntity);
  }

  export declare class Handle_IGESDraw_HArray1OfViewKindEntity_3 extends Handle_IGESDraw_HArray1OfViewKindEntity {
    constructor(theHandle: Handle_IGESDraw_HArray1OfViewKindEntity);
  }

  export declare class Handle_IGESDraw_HArray1OfViewKindEntity_4 extends Handle_IGESDraw_HArray1OfViewKindEntity {
    constructor(theHandle: Handle_IGESDraw_HArray1OfViewKindEntity);
  }

export declare class Handle_IGESDraw_Drawing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_Drawing): void;
  get(): IGESDraw_Drawing;
}

  export declare class Handle_IGESDraw_Drawing_1 extends Handle_IGESDraw_Drawing {
    constructor();
  }

  export declare class Handle_IGESDraw_Drawing_2 extends Handle_IGESDraw_Drawing {
    constructor(thePtr: IGESDraw_Drawing);
  }

  export declare class Handle_IGESDraw_Drawing_3 extends Handle_IGESDraw_Drawing {
    constructor(theHandle: Handle_IGESDraw_Drawing);
  }

  export declare class Handle_IGESDraw_Drawing_4 extends Handle_IGESDraw_Drawing {
    constructor(theHandle: Handle_IGESDraw_Drawing);
  }

export declare class Handle_IGESDraw_DrawingWithRotation {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_DrawingWithRotation): void;
  get(): IGESDraw_DrawingWithRotation;
}

  export declare class Handle_IGESDraw_DrawingWithRotation_1 extends Handle_IGESDraw_DrawingWithRotation {
    constructor();
  }

  export declare class Handle_IGESDraw_DrawingWithRotation_2 extends Handle_IGESDraw_DrawingWithRotation {
    constructor(thePtr: IGESDraw_DrawingWithRotation);
  }

  export declare class Handle_IGESDraw_DrawingWithRotation_3 extends Handle_IGESDraw_DrawingWithRotation {
    constructor(theHandle: Handle_IGESDraw_DrawingWithRotation);
  }

  export declare class Handle_IGESDraw_DrawingWithRotation_4 extends Handle_IGESDraw_DrawingWithRotation {
    constructor(theHandle: Handle_IGESDraw_DrawingWithRotation);
  }

export declare class Handle_IGESDraw_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_GeneralModule): void;
  get(): IGESDraw_GeneralModule;
}

  export declare class Handle_IGESDraw_GeneralModule_1 extends Handle_IGESDraw_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESDraw_GeneralModule_2 extends Handle_IGESDraw_GeneralModule {
    constructor(thePtr: IGESDraw_GeneralModule);
  }

  export declare class Handle_IGESDraw_GeneralModule_3 extends Handle_IGESDraw_GeneralModule {
    constructor(theHandle: Handle_IGESDraw_GeneralModule);
  }

  export declare class Handle_IGESDraw_GeneralModule_4 extends Handle_IGESDraw_GeneralModule {
    constructor(theHandle: Handle_IGESDraw_GeneralModule);
  }

export declare class Handle_IGESDraw_LabelDisplay {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_LabelDisplay): void;
  get(): IGESDraw_LabelDisplay;
}

  export declare class Handle_IGESDraw_LabelDisplay_1 extends Handle_IGESDraw_LabelDisplay {
    constructor();
  }

  export declare class Handle_IGESDraw_LabelDisplay_2 extends Handle_IGESDraw_LabelDisplay {
    constructor(thePtr: IGESDraw_LabelDisplay);
  }

  export declare class Handle_IGESDraw_LabelDisplay_3 extends Handle_IGESDraw_LabelDisplay {
    constructor(theHandle: Handle_IGESDraw_LabelDisplay);
  }

  export declare class Handle_IGESDraw_LabelDisplay_4 extends Handle_IGESDraw_LabelDisplay {
    constructor(theHandle: Handle_IGESDraw_LabelDisplay);
  }

export declare class Handle_IGESDraw_NetworkSubfigure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_NetworkSubfigure): void;
  get(): IGESDraw_NetworkSubfigure;
}

  export declare class Handle_IGESDraw_NetworkSubfigure_1 extends Handle_IGESDraw_NetworkSubfigure {
    constructor();
  }

  export declare class Handle_IGESDraw_NetworkSubfigure_2 extends Handle_IGESDraw_NetworkSubfigure {
    constructor(thePtr: IGESDraw_NetworkSubfigure);
  }

  export declare class Handle_IGESDraw_NetworkSubfigure_3 extends Handle_IGESDraw_NetworkSubfigure {
    constructor(theHandle: Handle_IGESDraw_NetworkSubfigure);
  }

  export declare class Handle_IGESDraw_NetworkSubfigure_4 extends Handle_IGESDraw_NetworkSubfigure {
    constructor(theHandle: Handle_IGESDraw_NetworkSubfigure);
  }

export declare class Handle_IGESDraw_NetworkSubfigureDef {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_NetworkSubfigureDef): void;
  get(): IGESDraw_NetworkSubfigureDef;
}

  export declare class Handle_IGESDraw_NetworkSubfigureDef_1 extends Handle_IGESDraw_NetworkSubfigureDef {
    constructor();
  }

  export declare class Handle_IGESDraw_NetworkSubfigureDef_2 extends Handle_IGESDraw_NetworkSubfigureDef {
    constructor(thePtr: IGESDraw_NetworkSubfigureDef);
  }

  export declare class Handle_IGESDraw_NetworkSubfigureDef_3 extends Handle_IGESDraw_NetworkSubfigureDef {
    constructor(theHandle: Handle_IGESDraw_NetworkSubfigureDef);
  }

  export declare class Handle_IGESDraw_NetworkSubfigureDef_4 extends Handle_IGESDraw_NetworkSubfigureDef {
    constructor(theHandle: Handle_IGESDraw_NetworkSubfigureDef);
  }

export declare class Handle_IGESDraw_PerspectiveView {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_PerspectiveView): void;
  get(): IGESDraw_PerspectiveView;
}

  export declare class Handle_IGESDraw_PerspectiveView_1 extends Handle_IGESDraw_PerspectiveView {
    constructor();
  }

  export declare class Handle_IGESDraw_PerspectiveView_2 extends Handle_IGESDraw_PerspectiveView {
    constructor(thePtr: IGESDraw_PerspectiveView);
  }

  export declare class Handle_IGESDraw_PerspectiveView_3 extends Handle_IGESDraw_PerspectiveView {
    constructor(theHandle: Handle_IGESDraw_PerspectiveView);
  }

  export declare class Handle_IGESDraw_PerspectiveView_4 extends Handle_IGESDraw_PerspectiveView {
    constructor(theHandle: Handle_IGESDraw_PerspectiveView);
  }

export declare class Handle_IGESDraw_Planar {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_Planar): void;
  get(): IGESDraw_Planar;
}

  export declare class Handle_IGESDraw_Planar_1 extends Handle_IGESDraw_Planar {
    constructor();
  }

  export declare class Handle_IGESDraw_Planar_2 extends Handle_IGESDraw_Planar {
    constructor(thePtr: IGESDraw_Planar);
  }

  export declare class Handle_IGESDraw_Planar_3 extends Handle_IGESDraw_Planar {
    constructor(theHandle: Handle_IGESDraw_Planar);
  }

  export declare class Handle_IGESDraw_Planar_4 extends Handle_IGESDraw_Planar {
    constructor(theHandle: Handle_IGESDraw_Planar);
  }

export declare class Handle_IGESDraw_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_Protocol): void;
  get(): IGESDraw_Protocol;
}

  export declare class Handle_IGESDraw_Protocol_1 extends Handle_IGESDraw_Protocol {
    constructor();
  }

  export declare class Handle_IGESDraw_Protocol_2 extends Handle_IGESDraw_Protocol {
    constructor(thePtr: IGESDraw_Protocol);
  }

  export declare class Handle_IGESDraw_Protocol_3 extends Handle_IGESDraw_Protocol {
    constructor(theHandle: Handle_IGESDraw_Protocol);
  }

  export declare class Handle_IGESDraw_Protocol_4 extends Handle_IGESDraw_Protocol {
    constructor(theHandle: Handle_IGESDraw_Protocol);
  }

export declare class Handle_IGESDraw_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_ReadWriteModule): void;
  get(): IGESDraw_ReadWriteModule;
}

  export declare class Handle_IGESDraw_ReadWriteModule_1 extends Handle_IGESDraw_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESDraw_ReadWriteModule_2 extends Handle_IGESDraw_ReadWriteModule {
    constructor(thePtr: IGESDraw_ReadWriteModule);
  }

  export declare class Handle_IGESDraw_ReadWriteModule_3 extends Handle_IGESDraw_ReadWriteModule {
    constructor(theHandle: Handle_IGESDraw_ReadWriteModule);
  }

  export declare class Handle_IGESDraw_ReadWriteModule_4 extends Handle_IGESDraw_ReadWriteModule {
    constructor(theHandle: Handle_IGESDraw_ReadWriteModule);
  }

export declare class Handle_IGESDraw_RectArraySubfigure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_RectArraySubfigure): void;
  get(): IGESDraw_RectArraySubfigure;
}

  export declare class Handle_IGESDraw_RectArraySubfigure_1 extends Handle_IGESDraw_RectArraySubfigure {
    constructor();
  }

  export declare class Handle_IGESDraw_RectArraySubfigure_2 extends Handle_IGESDraw_RectArraySubfigure {
    constructor(thePtr: IGESDraw_RectArraySubfigure);
  }

  export declare class Handle_IGESDraw_RectArraySubfigure_3 extends Handle_IGESDraw_RectArraySubfigure {
    constructor(theHandle: Handle_IGESDraw_RectArraySubfigure);
  }

  export declare class Handle_IGESDraw_RectArraySubfigure_4 extends Handle_IGESDraw_RectArraySubfigure {
    constructor(theHandle: Handle_IGESDraw_RectArraySubfigure);
  }

export declare class Handle_IGESGraph_Color {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_Color): void;
  get(): IGESGraph_Color;
}

  export declare class Handle_IGESGraph_Color_1 extends Handle_IGESGraph_Color {
    constructor();
  }

  export declare class Handle_IGESGraph_Color_2 extends Handle_IGESGraph_Color {
    constructor(thePtr: IGESGraph_Color);
  }

  export declare class Handle_IGESGraph_Color_3 extends Handle_IGESGraph_Color {
    constructor(theHandle: Handle_IGESGraph_Color);
  }

  export declare class Handle_IGESGraph_Color_4 extends Handle_IGESGraph_Color {
    constructor(theHandle: Handle_IGESGraph_Color);
  }

export declare class Handle_IGESGraph_HArray1OfColor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_HArray1OfColor): void;
  get(): IGESGraph_HArray1OfColor;
}

  export declare class Handle_IGESGraph_HArray1OfColor_1 extends Handle_IGESGraph_HArray1OfColor {
    constructor();
  }

  export declare class Handle_IGESGraph_HArray1OfColor_2 extends Handle_IGESGraph_HArray1OfColor {
    constructor(thePtr: IGESGraph_HArray1OfColor);
  }

  export declare class Handle_IGESGraph_HArray1OfColor_3 extends Handle_IGESGraph_HArray1OfColor {
    constructor(theHandle: Handle_IGESGraph_HArray1OfColor);
  }

  export declare class Handle_IGESGraph_HArray1OfColor_4 extends Handle_IGESGraph_HArray1OfColor {
    constructor(theHandle: Handle_IGESGraph_HArray1OfColor);
  }

export declare class Handle_IGESDraw_SegmentedViewsVisible {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_SegmentedViewsVisible): void;
  get(): IGESDraw_SegmentedViewsVisible;
}

  export declare class Handle_IGESDraw_SegmentedViewsVisible_1 extends Handle_IGESDraw_SegmentedViewsVisible {
    constructor();
  }

  export declare class Handle_IGESDraw_SegmentedViewsVisible_2 extends Handle_IGESDraw_SegmentedViewsVisible {
    constructor(thePtr: IGESDraw_SegmentedViewsVisible);
  }

  export declare class Handle_IGESDraw_SegmentedViewsVisible_3 extends Handle_IGESDraw_SegmentedViewsVisible {
    constructor(theHandle: Handle_IGESDraw_SegmentedViewsVisible);
  }

  export declare class Handle_IGESDraw_SegmentedViewsVisible_4 extends Handle_IGESDraw_SegmentedViewsVisible {
    constructor(theHandle: Handle_IGESDraw_SegmentedViewsVisible);
  }

export declare class Handle_IGESDraw_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_SpecificModule): void;
  get(): IGESDraw_SpecificModule;
}

  export declare class Handle_IGESDraw_SpecificModule_1 extends Handle_IGESDraw_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESDraw_SpecificModule_2 extends Handle_IGESDraw_SpecificModule {
    constructor(thePtr: IGESDraw_SpecificModule);
  }

  export declare class Handle_IGESDraw_SpecificModule_3 extends Handle_IGESDraw_SpecificModule {
    constructor(theHandle: Handle_IGESDraw_SpecificModule);
  }

  export declare class Handle_IGESDraw_SpecificModule_4 extends Handle_IGESDraw_SpecificModule {
    constructor(theHandle: Handle_IGESDraw_SpecificModule);
  }

export declare class Handle_IGESDraw_View {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_View): void;
  get(): IGESDraw_View;
}

  export declare class Handle_IGESDraw_View_1 extends Handle_IGESDraw_View {
    constructor();
  }

  export declare class Handle_IGESDraw_View_2 extends Handle_IGESDraw_View {
    constructor(thePtr: IGESDraw_View);
  }

  export declare class Handle_IGESDraw_View_3 extends Handle_IGESDraw_View {
    constructor(theHandle: Handle_IGESDraw_View);
  }

  export declare class Handle_IGESDraw_View_4 extends Handle_IGESDraw_View {
    constructor(theHandle: Handle_IGESDraw_View);
  }

export declare class Handle_IGESDraw_ViewsVisible {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_ViewsVisible): void;
  get(): IGESDraw_ViewsVisible;
}

  export declare class Handle_IGESDraw_ViewsVisible_1 extends Handle_IGESDraw_ViewsVisible {
    constructor();
  }

  export declare class Handle_IGESDraw_ViewsVisible_2 extends Handle_IGESDraw_ViewsVisible {
    constructor(thePtr: IGESDraw_ViewsVisible);
  }

  export declare class Handle_IGESDraw_ViewsVisible_3 extends Handle_IGESDraw_ViewsVisible {
    constructor(theHandle: Handle_IGESDraw_ViewsVisible);
  }

  export declare class Handle_IGESDraw_ViewsVisible_4 extends Handle_IGESDraw_ViewsVisible {
    constructor(theHandle: Handle_IGESDraw_ViewsVisible);
  }

export declare class Handle_IGESDraw_ViewsVisibleWithAttr {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESDraw_ViewsVisibleWithAttr): void;
  get(): IGESDraw_ViewsVisibleWithAttr;
}

  export declare class Handle_IGESDraw_ViewsVisibleWithAttr_1 extends Handle_IGESDraw_ViewsVisibleWithAttr {
    constructor();
  }

  export declare class Handle_IGESDraw_ViewsVisibleWithAttr_2 extends Handle_IGESDraw_ViewsVisibleWithAttr {
    constructor(thePtr: IGESDraw_ViewsVisibleWithAttr);
  }

  export declare class Handle_IGESDraw_ViewsVisibleWithAttr_3 extends Handle_IGESDraw_ViewsVisibleWithAttr {
    constructor(theHandle: Handle_IGESDraw_ViewsVisibleWithAttr);
  }

  export declare class Handle_IGESDraw_ViewsVisibleWithAttr_4 extends Handle_IGESDraw_ViewsVisibleWithAttr {
    constructor(theHandle: Handle_IGESDraw_ViewsVisibleWithAttr);
  }

export declare class Handle_IGESGeom_Boundary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_Boundary): void;
  get(): IGESGeom_Boundary;
}

  export declare class Handle_IGESGeom_Boundary_1 extends Handle_IGESGeom_Boundary {
    constructor();
  }

  export declare class Handle_IGESGeom_Boundary_2 extends Handle_IGESGeom_Boundary {
    constructor(thePtr: IGESGeom_Boundary);
  }

  export declare class Handle_IGESGeom_Boundary_3 extends Handle_IGESGeom_Boundary {
    constructor(theHandle: Handle_IGESGeom_Boundary);
  }

  export declare class Handle_IGESGeom_Boundary_4 extends Handle_IGESGeom_Boundary {
    constructor(theHandle: Handle_IGESGeom_Boundary);
  }

export declare class Handle_IGESGeom_CurveOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_CurveOnSurface): void;
  get(): IGESGeom_CurveOnSurface;
}

  export declare class Handle_IGESGeom_CurveOnSurface_1 extends Handle_IGESGeom_CurveOnSurface {
    constructor();
  }

  export declare class Handle_IGESGeom_CurveOnSurface_2 extends Handle_IGESGeom_CurveOnSurface {
    constructor(thePtr: IGESGeom_CurveOnSurface);
  }

  export declare class Handle_IGESGeom_CurveOnSurface_3 extends Handle_IGESGeom_CurveOnSurface {
    constructor(theHandle: Handle_IGESGeom_CurveOnSurface);
  }

  export declare class Handle_IGESGeom_CurveOnSurface_4 extends Handle_IGESGeom_CurveOnSurface {
    constructor(theHandle: Handle_IGESGeom_CurveOnSurface);
  }

export declare class Handle_IGESGeom_TransformationMatrix {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_TransformationMatrix): void;
  get(): IGESGeom_TransformationMatrix;
}

  export declare class Handle_IGESGeom_TransformationMatrix_1 extends Handle_IGESGeom_TransformationMatrix {
    constructor();
  }

  export declare class Handle_IGESGeom_TransformationMatrix_2 extends Handle_IGESGeom_TransformationMatrix {
    constructor(thePtr: IGESGeom_TransformationMatrix);
  }

  export declare class Handle_IGESGeom_TransformationMatrix_3 extends Handle_IGESGeom_TransformationMatrix {
    constructor(theHandle: Handle_IGESGeom_TransformationMatrix);
  }

  export declare class Handle_IGESGeom_TransformationMatrix_4 extends Handle_IGESGeom_TransformationMatrix {
    constructor(theHandle: Handle_IGESGeom_TransformationMatrix);
  }

export declare class Handle_IGESGeom_BSplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_BSplineCurve): void;
  get(): IGESGeom_BSplineCurve;
}

  export declare class Handle_IGESGeom_BSplineCurve_1 extends Handle_IGESGeom_BSplineCurve {
    constructor();
  }

  export declare class Handle_IGESGeom_BSplineCurve_2 extends Handle_IGESGeom_BSplineCurve {
    constructor(thePtr: IGESGeom_BSplineCurve);
  }

  export declare class Handle_IGESGeom_BSplineCurve_3 extends Handle_IGESGeom_BSplineCurve {
    constructor(theHandle: Handle_IGESGeom_BSplineCurve);
  }

  export declare class Handle_IGESGeom_BSplineCurve_4 extends Handle_IGESGeom_BSplineCurve {
    constructor(theHandle: Handle_IGESGeom_BSplineCurve);
  }

export declare class Handle_IGESGeom_BSplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_BSplineSurface): void;
  get(): IGESGeom_BSplineSurface;
}

  export declare class Handle_IGESGeom_BSplineSurface_1 extends Handle_IGESGeom_BSplineSurface {
    constructor();
  }

  export declare class Handle_IGESGeom_BSplineSurface_2 extends Handle_IGESGeom_BSplineSurface {
    constructor(thePtr: IGESGeom_BSplineSurface);
  }

  export declare class Handle_IGESGeom_BSplineSurface_3 extends Handle_IGESGeom_BSplineSurface {
    constructor(theHandle: Handle_IGESGeom_BSplineSurface);
  }

  export declare class Handle_IGESGeom_BSplineSurface_4 extends Handle_IGESGeom_BSplineSurface {
    constructor(theHandle: Handle_IGESGeom_BSplineSurface);
  }

export declare class Handle_IGESGeom_HArray1OfBoundary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_HArray1OfBoundary): void;
  get(): IGESGeom_HArray1OfBoundary;
}

  export declare class Handle_IGESGeom_HArray1OfBoundary_1 extends Handle_IGESGeom_HArray1OfBoundary {
    constructor();
  }

  export declare class Handle_IGESGeom_HArray1OfBoundary_2 extends Handle_IGESGeom_HArray1OfBoundary {
    constructor(thePtr: IGESGeom_HArray1OfBoundary);
  }

  export declare class Handle_IGESGeom_HArray1OfBoundary_3 extends Handle_IGESGeom_HArray1OfBoundary {
    constructor(theHandle: Handle_IGESGeom_HArray1OfBoundary);
  }

  export declare class Handle_IGESGeom_HArray1OfBoundary_4 extends Handle_IGESGeom_HArray1OfBoundary {
    constructor(theHandle: Handle_IGESGeom_HArray1OfBoundary);
  }

export declare class Handle_IGESGeom_BoundedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_BoundedSurface): void;
  get(): IGESGeom_BoundedSurface;
}

  export declare class Handle_IGESGeom_BoundedSurface_1 extends Handle_IGESGeom_BoundedSurface {
    constructor();
  }

  export declare class Handle_IGESGeom_BoundedSurface_2 extends Handle_IGESGeom_BoundedSurface {
    constructor(thePtr: IGESGeom_BoundedSurface);
  }

  export declare class Handle_IGESGeom_BoundedSurface_3 extends Handle_IGESGeom_BoundedSurface {
    constructor(theHandle: Handle_IGESGeom_BoundedSurface);
  }

  export declare class Handle_IGESGeom_BoundedSurface_4 extends Handle_IGESGeom_BoundedSurface {
    constructor(theHandle: Handle_IGESGeom_BoundedSurface);
  }

export declare class Handle_IGESGeom_CircularArc {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_CircularArc): void;
  get(): IGESGeom_CircularArc;
}

  export declare class Handle_IGESGeom_CircularArc_1 extends Handle_IGESGeom_CircularArc {
    constructor();
  }

  export declare class Handle_IGESGeom_CircularArc_2 extends Handle_IGESGeom_CircularArc {
    constructor(thePtr: IGESGeom_CircularArc);
  }

  export declare class Handle_IGESGeom_CircularArc_3 extends Handle_IGESGeom_CircularArc {
    constructor(theHandle: Handle_IGESGeom_CircularArc);
  }

  export declare class Handle_IGESGeom_CircularArc_4 extends Handle_IGESGeom_CircularArc {
    constructor(theHandle: Handle_IGESGeom_CircularArc);
  }

export declare class Handle_IGESGeom_CompositeCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_CompositeCurve): void;
  get(): IGESGeom_CompositeCurve;
}

  export declare class Handle_IGESGeom_CompositeCurve_1 extends Handle_IGESGeom_CompositeCurve {
    constructor();
  }

  export declare class Handle_IGESGeom_CompositeCurve_2 extends Handle_IGESGeom_CompositeCurve {
    constructor(thePtr: IGESGeom_CompositeCurve);
  }

  export declare class Handle_IGESGeom_CompositeCurve_3 extends Handle_IGESGeom_CompositeCurve {
    constructor(theHandle: Handle_IGESGeom_CompositeCurve);
  }

  export declare class Handle_IGESGeom_CompositeCurve_4 extends Handle_IGESGeom_CompositeCurve {
    constructor(theHandle: Handle_IGESGeom_CompositeCurve);
  }

export declare class Handle_IGESGeom_ConicArc {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_ConicArc): void;
  get(): IGESGeom_ConicArc;
}

  export declare class Handle_IGESGeom_ConicArc_1 extends Handle_IGESGeom_ConicArc {
    constructor();
  }

  export declare class Handle_IGESGeom_ConicArc_2 extends Handle_IGESGeom_ConicArc {
    constructor(thePtr: IGESGeom_ConicArc);
  }

  export declare class Handle_IGESGeom_ConicArc_3 extends Handle_IGESGeom_ConicArc {
    constructor(theHandle: Handle_IGESGeom_ConicArc);
  }

  export declare class Handle_IGESGeom_ConicArc_4 extends Handle_IGESGeom_ConicArc {
    constructor(theHandle: Handle_IGESGeom_ConicArc);
  }

export declare class Handle_IGESGeom_CopiousData {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_CopiousData): void;
  get(): IGESGeom_CopiousData;
}

  export declare class Handle_IGESGeom_CopiousData_1 extends Handle_IGESGeom_CopiousData {
    constructor();
  }

  export declare class Handle_IGESGeom_CopiousData_2 extends Handle_IGESGeom_CopiousData {
    constructor(thePtr: IGESGeom_CopiousData);
  }

  export declare class Handle_IGESGeom_CopiousData_3 extends Handle_IGESGeom_CopiousData {
    constructor(theHandle: Handle_IGESGeom_CopiousData);
  }

  export declare class Handle_IGESGeom_CopiousData_4 extends Handle_IGESGeom_CopiousData {
    constructor(theHandle: Handle_IGESGeom_CopiousData);
  }

export declare class Handle_IGESGeom_Direction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_Direction): void;
  get(): IGESGeom_Direction;
}

  export declare class Handle_IGESGeom_Direction_1 extends Handle_IGESGeom_Direction {
    constructor();
  }

  export declare class Handle_IGESGeom_Direction_2 extends Handle_IGESGeom_Direction {
    constructor(thePtr: IGESGeom_Direction);
  }

  export declare class Handle_IGESGeom_Direction_3 extends Handle_IGESGeom_Direction {
    constructor(theHandle: Handle_IGESGeom_Direction);
  }

  export declare class Handle_IGESGeom_Direction_4 extends Handle_IGESGeom_Direction {
    constructor(theHandle: Handle_IGESGeom_Direction);
  }

export declare class Handle_IGESGeom_Flash {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_Flash): void;
  get(): IGESGeom_Flash;
}

  export declare class Handle_IGESGeom_Flash_1 extends Handle_IGESGeom_Flash {
    constructor();
  }

  export declare class Handle_IGESGeom_Flash_2 extends Handle_IGESGeom_Flash {
    constructor(thePtr: IGESGeom_Flash);
  }

  export declare class Handle_IGESGeom_Flash_3 extends Handle_IGESGeom_Flash {
    constructor(theHandle: Handle_IGESGeom_Flash);
  }

  export declare class Handle_IGESGeom_Flash_4 extends Handle_IGESGeom_Flash {
    constructor(theHandle: Handle_IGESGeom_Flash);
  }

export declare class Handle_IGESGeom_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_GeneralModule): void;
  get(): IGESGeom_GeneralModule;
}

  export declare class Handle_IGESGeom_GeneralModule_1 extends Handle_IGESGeom_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESGeom_GeneralModule_2 extends Handle_IGESGeom_GeneralModule {
    constructor(thePtr: IGESGeom_GeneralModule);
  }

  export declare class Handle_IGESGeom_GeneralModule_3 extends Handle_IGESGeom_GeneralModule {
    constructor(theHandle: Handle_IGESGeom_GeneralModule);
  }

  export declare class Handle_IGESGeom_GeneralModule_4 extends Handle_IGESGeom_GeneralModule {
    constructor(theHandle: Handle_IGESGeom_GeneralModule);
  }

export declare class Handle_IGESGeom_HArray1OfCurveOnSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_HArray1OfCurveOnSurface): void;
  get(): IGESGeom_HArray1OfCurveOnSurface;
}

  export declare class Handle_IGESGeom_HArray1OfCurveOnSurface_1 extends Handle_IGESGeom_HArray1OfCurveOnSurface {
    constructor();
  }

  export declare class Handle_IGESGeom_HArray1OfCurveOnSurface_2 extends Handle_IGESGeom_HArray1OfCurveOnSurface {
    constructor(thePtr: IGESGeom_HArray1OfCurveOnSurface);
  }

  export declare class Handle_IGESGeom_HArray1OfCurveOnSurface_3 extends Handle_IGESGeom_HArray1OfCurveOnSurface {
    constructor(theHandle: Handle_IGESGeom_HArray1OfCurveOnSurface);
  }

  export declare class Handle_IGESGeom_HArray1OfCurveOnSurface_4 extends Handle_IGESGeom_HArray1OfCurveOnSurface {
    constructor(theHandle: Handle_IGESGeom_HArray1OfCurveOnSurface);
  }

export declare class Handle_IGESGeom_HArray1OfTransformationMatrix {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_HArray1OfTransformationMatrix): void;
  get(): IGESGeom_HArray1OfTransformationMatrix;
}

  export declare class Handle_IGESGeom_HArray1OfTransformationMatrix_1 extends Handle_IGESGeom_HArray1OfTransformationMatrix {
    constructor();
  }

  export declare class Handle_IGESGeom_HArray1OfTransformationMatrix_2 extends Handle_IGESGeom_HArray1OfTransformationMatrix {
    constructor(thePtr: IGESGeom_HArray1OfTransformationMatrix);
  }

  export declare class Handle_IGESGeom_HArray1OfTransformationMatrix_3 extends Handle_IGESGeom_HArray1OfTransformationMatrix {
    constructor(theHandle: Handle_IGESGeom_HArray1OfTransformationMatrix);
  }

  export declare class Handle_IGESGeom_HArray1OfTransformationMatrix_4 extends Handle_IGESGeom_HArray1OfTransformationMatrix {
    constructor(theHandle: Handle_IGESGeom_HArray1OfTransformationMatrix);
  }

export declare class Handle_IGESGeom_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_Line): void;
  get(): IGESGeom_Line;
}

  export declare class Handle_IGESGeom_Line_1 extends Handle_IGESGeom_Line {
    constructor();
  }

  export declare class Handle_IGESGeom_Line_2 extends Handle_IGESGeom_Line {
    constructor(thePtr: IGESGeom_Line);
  }

  export declare class Handle_IGESGeom_Line_3 extends Handle_IGESGeom_Line {
    constructor(theHandle: Handle_IGESGeom_Line);
  }

  export declare class Handle_IGESGeom_Line_4 extends Handle_IGESGeom_Line {
    constructor(theHandle: Handle_IGESGeom_Line);
  }

export declare class Handle_IGESGeom_OffsetCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_OffsetCurve): void;
  get(): IGESGeom_OffsetCurve;
}

  export declare class Handle_IGESGeom_OffsetCurve_1 extends Handle_IGESGeom_OffsetCurve {
    constructor();
  }

  export declare class Handle_IGESGeom_OffsetCurve_2 extends Handle_IGESGeom_OffsetCurve {
    constructor(thePtr: IGESGeom_OffsetCurve);
  }

  export declare class Handle_IGESGeom_OffsetCurve_3 extends Handle_IGESGeom_OffsetCurve {
    constructor(theHandle: Handle_IGESGeom_OffsetCurve);
  }

  export declare class Handle_IGESGeom_OffsetCurve_4 extends Handle_IGESGeom_OffsetCurve {
    constructor(theHandle: Handle_IGESGeom_OffsetCurve);
  }

export declare class Handle_IGESGeom_OffsetSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_OffsetSurface): void;
  get(): IGESGeom_OffsetSurface;
}

  export declare class Handle_IGESGeom_OffsetSurface_1 extends Handle_IGESGeom_OffsetSurface {
    constructor();
  }

  export declare class Handle_IGESGeom_OffsetSurface_2 extends Handle_IGESGeom_OffsetSurface {
    constructor(thePtr: IGESGeom_OffsetSurface);
  }

  export declare class Handle_IGESGeom_OffsetSurface_3 extends Handle_IGESGeom_OffsetSurface {
    constructor(theHandle: Handle_IGESGeom_OffsetSurface);
  }

  export declare class Handle_IGESGeom_OffsetSurface_4 extends Handle_IGESGeom_OffsetSurface {
    constructor(theHandle: Handle_IGESGeom_OffsetSurface);
  }

export declare class Handle_IGESGeom_Plane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_Plane): void;
  get(): IGESGeom_Plane;
}

  export declare class Handle_IGESGeom_Plane_1 extends Handle_IGESGeom_Plane {
    constructor();
  }

  export declare class Handle_IGESGeom_Plane_2 extends Handle_IGESGeom_Plane {
    constructor(thePtr: IGESGeom_Plane);
  }

  export declare class Handle_IGESGeom_Plane_3 extends Handle_IGESGeom_Plane {
    constructor(theHandle: Handle_IGESGeom_Plane);
  }

  export declare class Handle_IGESGeom_Plane_4 extends Handle_IGESGeom_Plane {
    constructor(theHandle: Handle_IGESGeom_Plane);
  }

export declare class Handle_IGESGeom_Point {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_Point): void;
  get(): IGESGeom_Point;
}

  export declare class Handle_IGESGeom_Point_1 extends Handle_IGESGeom_Point {
    constructor();
  }

  export declare class Handle_IGESGeom_Point_2 extends Handle_IGESGeom_Point {
    constructor(thePtr: IGESGeom_Point);
  }

  export declare class Handle_IGESGeom_Point_3 extends Handle_IGESGeom_Point {
    constructor(theHandle: Handle_IGESGeom_Point);
  }

  export declare class Handle_IGESGeom_Point_4 extends Handle_IGESGeom_Point {
    constructor(theHandle: Handle_IGESGeom_Point);
  }

export declare class Handle_IGESGeom_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_Protocol): void;
  get(): IGESGeom_Protocol;
}

  export declare class Handle_IGESGeom_Protocol_1 extends Handle_IGESGeom_Protocol {
    constructor();
  }

  export declare class Handle_IGESGeom_Protocol_2 extends Handle_IGESGeom_Protocol {
    constructor(thePtr: IGESGeom_Protocol);
  }

  export declare class Handle_IGESGeom_Protocol_3 extends Handle_IGESGeom_Protocol {
    constructor(theHandle: Handle_IGESGeom_Protocol);
  }

  export declare class Handle_IGESGeom_Protocol_4 extends Handle_IGESGeom_Protocol {
    constructor(theHandle: Handle_IGESGeom_Protocol);
  }

export declare class Handle_IGESGeom_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_ReadWriteModule): void;
  get(): IGESGeom_ReadWriteModule;
}

  export declare class Handle_IGESGeom_ReadWriteModule_1 extends Handle_IGESGeom_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESGeom_ReadWriteModule_2 extends Handle_IGESGeom_ReadWriteModule {
    constructor(thePtr: IGESGeom_ReadWriteModule);
  }

  export declare class Handle_IGESGeom_ReadWriteModule_3 extends Handle_IGESGeom_ReadWriteModule {
    constructor(theHandle: Handle_IGESGeom_ReadWriteModule);
  }

  export declare class Handle_IGESGeom_ReadWriteModule_4 extends Handle_IGESGeom_ReadWriteModule {
    constructor(theHandle: Handle_IGESGeom_ReadWriteModule);
  }

export declare class Handle_IGESGeom_RuledSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_RuledSurface): void;
  get(): IGESGeom_RuledSurface;
}

  export declare class Handle_IGESGeom_RuledSurface_1 extends Handle_IGESGeom_RuledSurface {
    constructor();
  }

  export declare class Handle_IGESGeom_RuledSurface_2 extends Handle_IGESGeom_RuledSurface {
    constructor(thePtr: IGESGeom_RuledSurface);
  }

  export declare class Handle_IGESGeom_RuledSurface_3 extends Handle_IGESGeom_RuledSurface {
    constructor(theHandle: Handle_IGESGeom_RuledSurface);
  }

  export declare class Handle_IGESGeom_RuledSurface_4 extends Handle_IGESGeom_RuledSurface {
    constructor(theHandle: Handle_IGESGeom_RuledSurface);
  }

export declare class Handle_IGESGeom_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_SpecificModule): void;
  get(): IGESGeom_SpecificModule;
}

  export declare class Handle_IGESGeom_SpecificModule_1 extends Handle_IGESGeom_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESGeom_SpecificModule_2 extends Handle_IGESGeom_SpecificModule {
    constructor(thePtr: IGESGeom_SpecificModule);
  }

  export declare class Handle_IGESGeom_SpecificModule_3 extends Handle_IGESGeom_SpecificModule {
    constructor(theHandle: Handle_IGESGeom_SpecificModule);
  }

  export declare class Handle_IGESGeom_SpecificModule_4 extends Handle_IGESGeom_SpecificModule {
    constructor(theHandle: Handle_IGESGeom_SpecificModule);
  }

export declare class Handle_IGESGeom_SplineCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_SplineCurve): void;
  get(): IGESGeom_SplineCurve;
}

  export declare class Handle_IGESGeom_SplineCurve_1 extends Handle_IGESGeom_SplineCurve {
    constructor();
  }

  export declare class Handle_IGESGeom_SplineCurve_2 extends Handle_IGESGeom_SplineCurve {
    constructor(thePtr: IGESGeom_SplineCurve);
  }

  export declare class Handle_IGESGeom_SplineCurve_3 extends Handle_IGESGeom_SplineCurve {
    constructor(theHandle: Handle_IGESGeom_SplineCurve);
  }

  export declare class Handle_IGESGeom_SplineCurve_4 extends Handle_IGESGeom_SplineCurve {
    constructor(theHandle: Handle_IGESGeom_SplineCurve);
  }

export declare class Handle_IGESGeom_SplineSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_SplineSurface): void;
  get(): IGESGeom_SplineSurface;
}

  export declare class Handle_IGESGeom_SplineSurface_1 extends Handle_IGESGeom_SplineSurface {
    constructor();
  }

  export declare class Handle_IGESGeom_SplineSurface_2 extends Handle_IGESGeom_SplineSurface {
    constructor(thePtr: IGESGeom_SplineSurface);
  }

  export declare class Handle_IGESGeom_SplineSurface_3 extends Handle_IGESGeom_SplineSurface {
    constructor(theHandle: Handle_IGESGeom_SplineSurface);
  }

  export declare class Handle_IGESGeom_SplineSurface_4 extends Handle_IGESGeom_SplineSurface {
    constructor(theHandle: Handle_IGESGeom_SplineSurface);
  }

export declare class Handle_IGESGeom_SurfaceOfRevolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_SurfaceOfRevolution): void;
  get(): IGESGeom_SurfaceOfRevolution;
}

  export declare class Handle_IGESGeom_SurfaceOfRevolution_1 extends Handle_IGESGeom_SurfaceOfRevolution {
    constructor();
  }

  export declare class Handle_IGESGeom_SurfaceOfRevolution_2 extends Handle_IGESGeom_SurfaceOfRevolution {
    constructor(thePtr: IGESGeom_SurfaceOfRevolution);
  }

  export declare class Handle_IGESGeom_SurfaceOfRevolution_3 extends Handle_IGESGeom_SurfaceOfRevolution {
    constructor(theHandle: Handle_IGESGeom_SurfaceOfRevolution);
  }

  export declare class Handle_IGESGeom_SurfaceOfRevolution_4 extends Handle_IGESGeom_SurfaceOfRevolution {
    constructor(theHandle: Handle_IGESGeom_SurfaceOfRevolution);
  }

export declare class Handle_IGESGeom_TabulatedCylinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_TabulatedCylinder): void;
  get(): IGESGeom_TabulatedCylinder;
}

  export declare class Handle_IGESGeom_TabulatedCylinder_1 extends Handle_IGESGeom_TabulatedCylinder {
    constructor();
  }

  export declare class Handle_IGESGeom_TabulatedCylinder_2 extends Handle_IGESGeom_TabulatedCylinder {
    constructor(thePtr: IGESGeom_TabulatedCylinder);
  }

  export declare class Handle_IGESGeom_TabulatedCylinder_3 extends Handle_IGESGeom_TabulatedCylinder {
    constructor(theHandle: Handle_IGESGeom_TabulatedCylinder);
  }

  export declare class Handle_IGESGeom_TabulatedCylinder_4 extends Handle_IGESGeom_TabulatedCylinder {
    constructor(theHandle: Handle_IGESGeom_TabulatedCylinder);
  }

export declare class Handle_IGESGeom_TrimmedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGeom_TrimmedSurface): void;
  get(): IGESGeom_TrimmedSurface;
}

  export declare class Handle_IGESGeom_TrimmedSurface_1 extends Handle_IGESGeom_TrimmedSurface {
    constructor();
  }

  export declare class Handle_IGESGeom_TrimmedSurface_2 extends Handle_IGESGeom_TrimmedSurface {
    constructor(thePtr: IGESGeom_TrimmedSurface);
  }

  export declare class Handle_IGESGeom_TrimmedSurface_3 extends Handle_IGESGeom_TrimmedSurface {
    constructor(theHandle: Handle_IGESGeom_TrimmedSurface);
  }

  export declare class Handle_IGESGeom_TrimmedSurface_4 extends Handle_IGESGeom_TrimmedSurface {
    constructor(theHandle: Handle_IGESGeom_TrimmedSurface);
  }

export declare class Handle_IGESGraph_DefinitionLevel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_DefinitionLevel): void;
  get(): IGESGraph_DefinitionLevel;
}

  export declare class Handle_IGESGraph_DefinitionLevel_1 extends Handle_IGESGraph_DefinitionLevel {
    constructor();
  }

  export declare class Handle_IGESGraph_DefinitionLevel_2 extends Handle_IGESGraph_DefinitionLevel {
    constructor(thePtr: IGESGraph_DefinitionLevel);
  }

  export declare class Handle_IGESGraph_DefinitionLevel_3 extends Handle_IGESGraph_DefinitionLevel {
    constructor(theHandle: Handle_IGESGraph_DefinitionLevel);
  }

  export declare class Handle_IGESGraph_DefinitionLevel_4 extends Handle_IGESGraph_DefinitionLevel {
    constructor(theHandle: Handle_IGESGraph_DefinitionLevel);
  }

export declare class Handle_IGESGraph_DrawingSize {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_DrawingSize): void;
  get(): IGESGraph_DrawingSize;
}

  export declare class Handle_IGESGraph_DrawingSize_1 extends Handle_IGESGraph_DrawingSize {
    constructor();
  }

  export declare class Handle_IGESGraph_DrawingSize_2 extends Handle_IGESGraph_DrawingSize {
    constructor(thePtr: IGESGraph_DrawingSize);
  }

  export declare class Handle_IGESGraph_DrawingSize_3 extends Handle_IGESGraph_DrawingSize {
    constructor(theHandle: Handle_IGESGraph_DrawingSize);
  }

  export declare class Handle_IGESGraph_DrawingSize_4 extends Handle_IGESGraph_DrawingSize {
    constructor(theHandle: Handle_IGESGraph_DrawingSize);
  }

export declare class Handle_IGESGraph_DrawingUnits {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_DrawingUnits): void;
  get(): IGESGraph_DrawingUnits;
}

  export declare class Handle_IGESGraph_DrawingUnits_1 extends Handle_IGESGraph_DrawingUnits {
    constructor();
  }

  export declare class Handle_IGESGraph_DrawingUnits_2 extends Handle_IGESGraph_DrawingUnits {
    constructor(thePtr: IGESGraph_DrawingUnits);
  }

  export declare class Handle_IGESGraph_DrawingUnits_3 extends Handle_IGESGraph_DrawingUnits {
    constructor(theHandle: Handle_IGESGraph_DrawingUnits);
  }

  export declare class Handle_IGESGraph_DrawingUnits_4 extends Handle_IGESGraph_DrawingUnits {
    constructor(theHandle: Handle_IGESGraph_DrawingUnits);
  }

export declare class Handle_IGESGraph_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_GeneralModule): void;
  get(): IGESGraph_GeneralModule;
}

  export declare class Handle_IGESGraph_GeneralModule_1 extends Handle_IGESGraph_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESGraph_GeneralModule_2 extends Handle_IGESGraph_GeneralModule {
    constructor(thePtr: IGESGraph_GeneralModule);
  }

  export declare class Handle_IGESGraph_GeneralModule_3 extends Handle_IGESGraph_GeneralModule {
    constructor(theHandle: Handle_IGESGraph_GeneralModule);
  }

  export declare class Handle_IGESGraph_GeneralModule_4 extends Handle_IGESGraph_GeneralModule {
    constructor(theHandle: Handle_IGESGraph_GeneralModule);
  }

export declare class Handle_IGESGraph_HighLight {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_HighLight): void;
  get(): IGESGraph_HighLight;
}

  export declare class Handle_IGESGraph_HighLight_1 extends Handle_IGESGraph_HighLight {
    constructor();
  }

  export declare class Handle_IGESGraph_HighLight_2 extends Handle_IGESGraph_HighLight {
    constructor(thePtr: IGESGraph_HighLight);
  }

  export declare class Handle_IGESGraph_HighLight_3 extends Handle_IGESGraph_HighLight {
    constructor(theHandle: Handle_IGESGraph_HighLight);
  }

  export declare class Handle_IGESGraph_HighLight_4 extends Handle_IGESGraph_HighLight {
    constructor(theHandle: Handle_IGESGraph_HighLight);
  }

export declare class Handle_IGESGraph_IntercharacterSpacing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_IntercharacterSpacing): void;
  get(): IGESGraph_IntercharacterSpacing;
}

  export declare class Handle_IGESGraph_IntercharacterSpacing_1 extends Handle_IGESGraph_IntercharacterSpacing {
    constructor();
  }

  export declare class Handle_IGESGraph_IntercharacterSpacing_2 extends Handle_IGESGraph_IntercharacterSpacing {
    constructor(thePtr: IGESGraph_IntercharacterSpacing);
  }

  export declare class Handle_IGESGraph_IntercharacterSpacing_3 extends Handle_IGESGraph_IntercharacterSpacing {
    constructor(theHandle: Handle_IGESGraph_IntercharacterSpacing);
  }

  export declare class Handle_IGESGraph_IntercharacterSpacing_4 extends Handle_IGESGraph_IntercharacterSpacing {
    constructor(theHandle: Handle_IGESGraph_IntercharacterSpacing);
  }

export declare class Handle_IGESGraph_LineFontDefPattern {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_LineFontDefPattern): void;
  get(): IGESGraph_LineFontDefPattern;
}

  export declare class Handle_IGESGraph_LineFontDefPattern_1 extends Handle_IGESGraph_LineFontDefPattern {
    constructor();
  }

  export declare class Handle_IGESGraph_LineFontDefPattern_2 extends Handle_IGESGraph_LineFontDefPattern {
    constructor(thePtr: IGESGraph_LineFontDefPattern);
  }

  export declare class Handle_IGESGraph_LineFontDefPattern_3 extends Handle_IGESGraph_LineFontDefPattern {
    constructor(theHandle: Handle_IGESGraph_LineFontDefPattern);
  }

  export declare class Handle_IGESGraph_LineFontDefPattern_4 extends Handle_IGESGraph_LineFontDefPattern {
    constructor(theHandle: Handle_IGESGraph_LineFontDefPattern);
  }

export declare class Handle_IGESGraph_LineFontDefTemplate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_LineFontDefTemplate): void;
  get(): IGESGraph_LineFontDefTemplate;
}

  export declare class Handle_IGESGraph_LineFontDefTemplate_1 extends Handle_IGESGraph_LineFontDefTemplate {
    constructor();
  }

  export declare class Handle_IGESGraph_LineFontDefTemplate_2 extends Handle_IGESGraph_LineFontDefTemplate {
    constructor(thePtr: IGESGraph_LineFontDefTemplate);
  }

  export declare class Handle_IGESGraph_LineFontDefTemplate_3 extends Handle_IGESGraph_LineFontDefTemplate {
    constructor(theHandle: Handle_IGESGraph_LineFontDefTemplate);
  }

  export declare class Handle_IGESGraph_LineFontDefTemplate_4 extends Handle_IGESGraph_LineFontDefTemplate {
    constructor(theHandle: Handle_IGESGraph_LineFontDefTemplate);
  }

export declare class Handle_IGESGraph_LineFontPredefined {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_LineFontPredefined): void;
  get(): IGESGraph_LineFontPredefined;
}

  export declare class Handle_IGESGraph_LineFontPredefined_1 extends Handle_IGESGraph_LineFontPredefined {
    constructor();
  }

  export declare class Handle_IGESGraph_LineFontPredefined_2 extends Handle_IGESGraph_LineFontPredefined {
    constructor(thePtr: IGESGraph_LineFontPredefined);
  }

  export declare class Handle_IGESGraph_LineFontPredefined_3 extends Handle_IGESGraph_LineFontPredefined {
    constructor(theHandle: Handle_IGESGraph_LineFontPredefined);
  }

  export declare class Handle_IGESGraph_LineFontPredefined_4 extends Handle_IGESGraph_LineFontPredefined {
    constructor(theHandle: Handle_IGESGraph_LineFontPredefined);
  }

export declare class Handle_IGESGraph_NominalSize {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_NominalSize): void;
  get(): IGESGraph_NominalSize;
}

  export declare class Handle_IGESGraph_NominalSize_1 extends Handle_IGESGraph_NominalSize {
    constructor();
  }

  export declare class Handle_IGESGraph_NominalSize_2 extends Handle_IGESGraph_NominalSize {
    constructor(thePtr: IGESGraph_NominalSize);
  }

  export declare class Handle_IGESGraph_NominalSize_3 extends Handle_IGESGraph_NominalSize {
    constructor(theHandle: Handle_IGESGraph_NominalSize);
  }

  export declare class Handle_IGESGraph_NominalSize_4 extends Handle_IGESGraph_NominalSize {
    constructor(theHandle: Handle_IGESGraph_NominalSize);
  }

export declare class Handle_IGESGraph_Pick {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_Pick): void;
  get(): IGESGraph_Pick;
}

  export declare class Handle_IGESGraph_Pick_1 extends Handle_IGESGraph_Pick {
    constructor();
  }

  export declare class Handle_IGESGraph_Pick_2 extends Handle_IGESGraph_Pick {
    constructor(thePtr: IGESGraph_Pick);
  }

  export declare class Handle_IGESGraph_Pick_3 extends Handle_IGESGraph_Pick {
    constructor(theHandle: Handle_IGESGraph_Pick);
  }

  export declare class Handle_IGESGraph_Pick_4 extends Handle_IGESGraph_Pick {
    constructor(theHandle: Handle_IGESGraph_Pick);
  }

export declare class Handle_IGESGraph_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_Protocol): void;
  get(): IGESGraph_Protocol;
}

  export declare class Handle_IGESGraph_Protocol_1 extends Handle_IGESGraph_Protocol {
    constructor();
  }

  export declare class Handle_IGESGraph_Protocol_2 extends Handle_IGESGraph_Protocol {
    constructor(thePtr: IGESGraph_Protocol);
  }

  export declare class Handle_IGESGraph_Protocol_3 extends Handle_IGESGraph_Protocol {
    constructor(theHandle: Handle_IGESGraph_Protocol);
  }

  export declare class Handle_IGESGraph_Protocol_4 extends Handle_IGESGraph_Protocol {
    constructor(theHandle: Handle_IGESGraph_Protocol);
  }

export declare class Handle_IGESGraph_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_ReadWriteModule): void;
  get(): IGESGraph_ReadWriteModule;
}

  export declare class Handle_IGESGraph_ReadWriteModule_1 extends Handle_IGESGraph_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESGraph_ReadWriteModule_2 extends Handle_IGESGraph_ReadWriteModule {
    constructor(thePtr: IGESGraph_ReadWriteModule);
  }

  export declare class Handle_IGESGraph_ReadWriteModule_3 extends Handle_IGESGraph_ReadWriteModule {
    constructor(theHandle: Handle_IGESGraph_ReadWriteModule);
  }

  export declare class Handle_IGESGraph_ReadWriteModule_4 extends Handle_IGESGraph_ReadWriteModule {
    constructor(theHandle: Handle_IGESGraph_ReadWriteModule);
  }

export declare class Handle_IGESGraph_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_SpecificModule): void;
  get(): IGESGraph_SpecificModule;
}

  export declare class Handle_IGESGraph_SpecificModule_1 extends Handle_IGESGraph_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESGraph_SpecificModule_2 extends Handle_IGESGraph_SpecificModule {
    constructor(thePtr: IGESGraph_SpecificModule);
  }

  export declare class Handle_IGESGraph_SpecificModule_3 extends Handle_IGESGraph_SpecificModule {
    constructor(theHandle: Handle_IGESGraph_SpecificModule);
  }

  export declare class Handle_IGESGraph_SpecificModule_4 extends Handle_IGESGraph_SpecificModule {
    constructor(theHandle: Handle_IGESGraph_SpecificModule);
  }

export declare class Handle_IGESGraph_UniformRectGrid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESGraph_UniformRectGrid): void;
  get(): IGESGraph_UniformRectGrid;
}

  export declare class Handle_IGESGraph_UniformRectGrid_1 extends Handle_IGESGraph_UniformRectGrid {
    constructor();
  }

  export declare class Handle_IGESGraph_UniformRectGrid_2 extends Handle_IGESGraph_UniformRectGrid {
    constructor(thePtr: IGESGraph_UniformRectGrid);
  }

  export declare class Handle_IGESGraph_UniformRectGrid_3 extends Handle_IGESGraph_UniformRectGrid {
    constructor(theHandle: Handle_IGESGraph_UniformRectGrid);
  }

  export declare class Handle_IGESGraph_UniformRectGrid_4 extends Handle_IGESGraph_UniformRectGrid {
    constructor(theHandle: Handle_IGESGraph_UniformRectGrid);
  }

export declare class Handle_IGESSelect_Activator {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_Activator): void;
  get(): IGESSelect_Activator;
}

  export declare class Handle_IGESSelect_Activator_1 extends Handle_IGESSelect_Activator {
    constructor();
  }

  export declare class Handle_IGESSelect_Activator_2 extends Handle_IGESSelect_Activator {
    constructor(thePtr: IGESSelect_Activator);
  }

  export declare class Handle_IGESSelect_Activator_3 extends Handle_IGESSelect_Activator {
    constructor(theHandle: Handle_IGESSelect_Activator);
  }

  export declare class Handle_IGESSelect_Activator_4 extends Handle_IGESSelect_Activator {
    constructor(theHandle: Handle_IGESSelect_Activator);
  }

export declare class Handle_IGESSelect_FileModifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_FileModifier): void;
  get(): IGESSelect_FileModifier;
}

  export declare class Handle_IGESSelect_FileModifier_1 extends Handle_IGESSelect_FileModifier {
    constructor();
  }

  export declare class Handle_IGESSelect_FileModifier_2 extends Handle_IGESSelect_FileModifier {
    constructor(thePtr: IGESSelect_FileModifier);
  }

  export declare class Handle_IGESSelect_FileModifier_3 extends Handle_IGESSelect_FileModifier {
    constructor(theHandle: Handle_IGESSelect_FileModifier);
  }

  export declare class Handle_IGESSelect_FileModifier_4 extends Handle_IGESSelect_FileModifier {
    constructor(theHandle: Handle_IGESSelect_FileModifier);
  }

export declare class Handle_IGESSelect_AddFileComment {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_AddFileComment): void;
  get(): IGESSelect_AddFileComment;
}

  export declare class Handle_IGESSelect_AddFileComment_1 extends Handle_IGESSelect_AddFileComment {
    constructor();
  }

  export declare class Handle_IGESSelect_AddFileComment_2 extends Handle_IGESSelect_AddFileComment {
    constructor(thePtr: IGESSelect_AddFileComment);
  }

  export declare class Handle_IGESSelect_AddFileComment_3 extends Handle_IGESSelect_AddFileComment {
    constructor(theHandle: Handle_IGESSelect_AddFileComment);
  }

  export declare class Handle_IGESSelect_AddFileComment_4 extends Handle_IGESSelect_AddFileComment {
    constructor(theHandle: Handle_IGESSelect_AddFileComment);
  }

export declare class Handle_IGESSelect_ModelModifier {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_ModelModifier): void;
  get(): IGESSelect_ModelModifier;
}

  export declare class Handle_IGESSelect_ModelModifier_1 extends Handle_IGESSelect_ModelModifier {
    constructor();
  }

  export declare class Handle_IGESSelect_ModelModifier_2 extends Handle_IGESSelect_ModelModifier {
    constructor(thePtr: IGESSelect_ModelModifier);
  }

  export declare class Handle_IGESSelect_ModelModifier_3 extends Handle_IGESSelect_ModelModifier {
    constructor(theHandle: Handle_IGESSelect_ModelModifier);
  }

  export declare class Handle_IGESSelect_ModelModifier_4 extends Handle_IGESSelect_ModelModifier {
    constructor(theHandle: Handle_IGESSelect_ModelModifier);
  }

export declare class Handle_IGESSelect_AddGroup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_AddGroup): void;
  get(): IGESSelect_AddGroup;
}

  export declare class Handle_IGESSelect_AddGroup_1 extends Handle_IGESSelect_AddGroup {
    constructor();
  }

  export declare class Handle_IGESSelect_AddGroup_2 extends Handle_IGESSelect_AddGroup {
    constructor(thePtr: IGESSelect_AddGroup);
  }

  export declare class Handle_IGESSelect_AddGroup_3 extends Handle_IGESSelect_AddGroup {
    constructor(theHandle: Handle_IGESSelect_AddGroup);
  }

  export declare class Handle_IGESSelect_AddGroup_4 extends Handle_IGESSelect_AddGroup {
    constructor(theHandle: Handle_IGESSelect_AddGroup);
  }

export declare class Handle_IGESSelect_AutoCorrect {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_AutoCorrect): void;
  get(): IGESSelect_AutoCorrect;
}

  export declare class Handle_IGESSelect_AutoCorrect_1 extends Handle_IGESSelect_AutoCorrect {
    constructor();
  }

  export declare class Handle_IGESSelect_AutoCorrect_2 extends Handle_IGESSelect_AutoCorrect {
    constructor(thePtr: IGESSelect_AutoCorrect);
  }

  export declare class Handle_IGESSelect_AutoCorrect_3 extends Handle_IGESSelect_AutoCorrect {
    constructor(theHandle: Handle_IGESSelect_AutoCorrect);
  }

  export declare class Handle_IGESSelect_AutoCorrect_4 extends Handle_IGESSelect_AutoCorrect {
    constructor(theHandle: Handle_IGESSelect_AutoCorrect);
  }

export declare class Handle_IGESSelect_ChangeLevelList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_ChangeLevelList): void;
  get(): IGESSelect_ChangeLevelList;
}

  export declare class Handle_IGESSelect_ChangeLevelList_1 extends Handle_IGESSelect_ChangeLevelList {
    constructor();
  }

  export declare class Handle_IGESSelect_ChangeLevelList_2 extends Handle_IGESSelect_ChangeLevelList {
    constructor(thePtr: IGESSelect_ChangeLevelList);
  }

  export declare class Handle_IGESSelect_ChangeLevelList_3 extends Handle_IGESSelect_ChangeLevelList {
    constructor(theHandle: Handle_IGESSelect_ChangeLevelList);
  }

  export declare class Handle_IGESSelect_ChangeLevelList_4 extends Handle_IGESSelect_ChangeLevelList {
    constructor(theHandle: Handle_IGESSelect_ChangeLevelList);
  }

export declare class Handle_IGESSelect_ChangeLevelNumber {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_ChangeLevelNumber): void;
  get(): IGESSelect_ChangeLevelNumber;
}

  export declare class Handle_IGESSelect_ChangeLevelNumber_1 extends Handle_IGESSelect_ChangeLevelNumber {
    constructor();
  }

  export declare class Handle_IGESSelect_ChangeLevelNumber_2 extends Handle_IGESSelect_ChangeLevelNumber {
    constructor(thePtr: IGESSelect_ChangeLevelNumber);
  }

  export declare class Handle_IGESSelect_ChangeLevelNumber_3 extends Handle_IGESSelect_ChangeLevelNumber {
    constructor(theHandle: Handle_IGESSelect_ChangeLevelNumber);
  }

  export declare class Handle_IGESSelect_ChangeLevelNumber_4 extends Handle_IGESSelect_ChangeLevelNumber {
    constructor(theHandle: Handle_IGESSelect_ChangeLevelNumber);
  }

export declare class Handle_IGESSelect_ComputeStatus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_ComputeStatus): void;
  get(): IGESSelect_ComputeStatus;
}

  export declare class Handle_IGESSelect_ComputeStatus_1 extends Handle_IGESSelect_ComputeStatus {
    constructor();
  }

  export declare class Handle_IGESSelect_ComputeStatus_2 extends Handle_IGESSelect_ComputeStatus {
    constructor(thePtr: IGESSelect_ComputeStatus);
  }

  export declare class Handle_IGESSelect_ComputeStatus_3 extends Handle_IGESSelect_ComputeStatus {
    constructor(theHandle: Handle_IGESSelect_ComputeStatus);
  }

  export declare class Handle_IGESSelect_ComputeStatus_4 extends Handle_IGESSelect_ComputeStatus {
    constructor(theHandle: Handle_IGESSelect_ComputeStatus);
  }

export declare class Handle_IGESSelect_CounterOfLevelNumber {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_CounterOfLevelNumber): void;
  get(): IGESSelect_CounterOfLevelNumber;
}

  export declare class Handle_IGESSelect_CounterOfLevelNumber_1 extends Handle_IGESSelect_CounterOfLevelNumber {
    constructor();
  }

  export declare class Handle_IGESSelect_CounterOfLevelNumber_2 extends Handle_IGESSelect_CounterOfLevelNumber {
    constructor(thePtr: IGESSelect_CounterOfLevelNumber);
  }

  export declare class Handle_IGESSelect_CounterOfLevelNumber_3 extends Handle_IGESSelect_CounterOfLevelNumber {
    constructor(theHandle: Handle_IGESSelect_CounterOfLevelNumber);
  }

  export declare class Handle_IGESSelect_CounterOfLevelNumber_4 extends Handle_IGESSelect_CounterOfLevelNumber {
    constructor(theHandle: Handle_IGESSelect_CounterOfLevelNumber);
  }

export declare class Handle_IGESSelect_DispPerDrawing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_DispPerDrawing): void;
  get(): IGESSelect_DispPerDrawing;
}

  export declare class Handle_IGESSelect_DispPerDrawing_1 extends Handle_IGESSelect_DispPerDrawing {
    constructor();
  }

  export declare class Handle_IGESSelect_DispPerDrawing_2 extends Handle_IGESSelect_DispPerDrawing {
    constructor(thePtr: IGESSelect_DispPerDrawing);
  }

  export declare class Handle_IGESSelect_DispPerDrawing_3 extends Handle_IGESSelect_DispPerDrawing {
    constructor(theHandle: Handle_IGESSelect_DispPerDrawing);
  }

  export declare class Handle_IGESSelect_DispPerDrawing_4 extends Handle_IGESSelect_DispPerDrawing {
    constructor(theHandle: Handle_IGESSelect_DispPerDrawing);
  }

export declare class Handle_IGESSelect_DispPerSingleView {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_DispPerSingleView): void;
  get(): IGESSelect_DispPerSingleView;
}

  export declare class Handle_IGESSelect_DispPerSingleView_1 extends Handle_IGESSelect_DispPerSingleView {
    constructor();
  }

  export declare class Handle_IGESSelect_DispPerSingleView_2 extends Handle_IGESSelect_DispPerSingleView {
    constructor(thePtr: IGESSelect_DispPerSingleView);
  }

  export declare class Handle_IGESSelect_DispPerSingleView_3 extends Handle_IGESSelect_DispPerSingleView {
    constructor(theHandle: Handle_IGESSelect_DispPerSingleView);
  }

  export declare class Handle_IGESSelect_DispPerSingleView_4 extends Handle_IGESSelect_DispPerSingleView {
    constructor(theHandle: Handle_IGESSelect_DispPerSingleView);
  }

export declare class Handle_IGESSelect_Dumper {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_Dumper): void;
  get(): IGESSelect_Dumper;
}

  export declare class Handle_IGESSelect_Dumper_1 extends Handle_IGESSelect_Dumper {
    constructor();
  }

  export declare class Handle_IGESSelect_Dumper_2 extends Handle_IGESSelect_Dumper {
    constructor(thePtr: IGESSelect_Dumper);
  }

  export declare class Handle_IGESSelect_Dumper_3 extends Handle_IGESSelect_Dumper {
    constructor(theHandle: Handle_IGESSelect_Dumper);
  }

  export declare class Handle_IGESSelect_Dumper_4 extends Handle_IGESSelect_Dumper {
    constructor(theHandle: Handle_IGESSelect_Dumper);
  }

export declare class Handle_IGESSelect_EditDirPart {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_EditDirPart): void;
  get(): IGESSelect_EditDirPart;
}

  export declare class Handle_IGESSelect_EditDirPart_1 extends Handle_IGESSelect_EditDirPart {
    constructor();
  }

  export declare class Handle_IGESSelect_EditDirPart_2 extends Handle_IGESSelect_EditDirPart {
    constructor(thePtr: IGESSelect_EditDirPart);
  }

  export declare class Handle_IGESSelect_EditDirPart_3 extends Handle_IGESSelect_EditDirPart {
    constructor(theHandle: Handle_IGESSelect_EditDirPart);
  }

  export declare class Handle_IGESSelect_EditDirPart_4 extends Handle_IGESSelect_EditDirPart {
    constructor(theHandle: Handle_IGESSelect_EditDirPart);
  }

export declare class Handle_IGESSelect_EditHeader {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_EditHeader): void;
  get(): IGESSelect_EditHeader;
}

  export declare class Handle_IGESSelect_EditHeader_1 extends Handle_IGESSelect_EditHeader {
    constructor();
  }

  export declare class Handle_IGESSelect_EditHeader_2 extends Handle_IGESSelect_EditHeader {
    constructor(thePtr: IGESSelect_EditHeader);
  }

  export declare class Handle_IGESSelect_EditHeader_3 extends Handle_IGESSelect_EditHeader {
    constructor(theHandle: Handle_IGESSelect_EditHeader);
  }

  export declare class Handle_IGESSelect_EditHeader_4 extends Handle_IGESSelect_EditHeader {
    constructor(theHandle: Handle_IGESSelect_EditHeader);
  }

export declare class Handle_IGESSelect_FloatFormat {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_FloatFormat): void;
  get(): IGESSelect_FloatFormat;
}

  export declare class Handle_IGESSelect_FloatFormat_1 extends Handle_IGESSelect_FloatFormat {
    constructor();
  }

  export declare class Handle_IGESSelect_FloatFormat_2 extends Handle_IGESSelect_FloatFormat {
    constructor(thePtr: IGESSelect_FloatFormat);
  }

  export declare class Handle_IGESSelect_FloatFormat_3 extends Handle_IGESSelect_FloatFormat {
    constructor(theHandle: Handle_IGESSelect_FloatFormat);
  }

  export declare class Handle_IGESSelect_FloatFormat_4 extends Handle_IGESSelect_FloatFormat {
    constructor(theHandle: Handle_IGESSelect_FloatFormat);
  }

export declare class Handle_IGESSelect_IGESName {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_IGESName): void;
  get(): IGESSelect_IGESName;
}

  export declare class Handle_IGESSelect_IGESName_1 extends Handle_IGESSelect_IGESName {
    constructor();
  }

  export declare class Handle_IGESSelect_IGESName_2 extends Handle_IGESSelect_IGESName {
    constructor(thePtr: IGESSelect_IGESName);
  }

  export declare class Handle_IGESSelect_IGESName_3 extends Handle_IGESSelect_IGESName {
    constructor(theHandle: Handle_IGESSelect_IGESName);
  }

  export declare class Handle_IGESSelect_IGESName_4 extends Handle_IGESSelect_IGESName {
    constructor(theHandle: Handle_IGESSelect_IGESName);
  }

export declare class Handle_IGESSelect_IGESTypeForm {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_IGESTypeForm): void;
  get(): IGESSelect_IGESTypeForm;
}

  export declare class Handle_IGESSelect_IGESTypeForm_1 extends Handle_IGESSelect_IGESTypeForm {
    constructor();
  }

  export declare class Handle_IGESSelect_IGESTypeForm_2 extends Handle_IGESSelect_IGESTypeForm {
    constructor(thePtr: IGESSelect_IGESTypeForm);
  }

  export declare class Handle_IGESSelect_IGESTypeForm_3 extends Handle_IGESSelect_IGESTypeForm {
    constructor(theHandle: Handle_IGESSelect_IGESTypeForm);
  }

  export declare class Handle_IGESSelect_IGESTypeForm_4 extends Handle_IGESSelect_IGESTypeForm {
    constructor(theHandle: Handle_IGESSelect_IGESTypeForm);
  }

export declare class Handle_IGESSelect_RebuildDrawings {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_RebuildDrawings): void;
  get(): IGESSelect_RebuildDrawings;
}

  export declare class Handle_IGESSelect_RebuildDrawings_1 extends Handle_IGESSelect_RebuildDrawings {
    constructor();
  }

  export declare class Handle_IGESSelect_RebuildDrawings_2 extends Handle_IGESSelect_RebuildDrawings {
    constructor(thePtr: IGESSelect_RebuildDrawings);
  }

  export declare class Handle_IGESSelect_RebuildDrawings_3 extends Handle_IGESSelect_RebuildDrawings {
    constructor(theHandle: Handle_IGESSelect_RebuildDrawings);
  }

  export declare class Handle_IGESSelect_RebuildDrawings_4 extends Handle_IGESSelect_RebuildDrawings {
    constructor(theHandle: Handle_IGESSelect_RebuildDrawings);
  }

export declare class Handle_IGESSelect_RebuildGroups {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_RebuildGroups): void;
  get(): IGESSelect_RebuildGroups;
}

  export declare class Handle_IGESSelect_RebuildGroups_1 extends Handle_IGESSelect_RebuildGroups {
    constructor();
  }

  export declare class Handle_IGESSelect_RebuildGroups_2 extends Handle_IGESSelect_RebuildGroups {
    constructor(thePtr: IGESSelect_RebuildGroups);
  }

  export declare class Handle_IGESSelect_RebuildGroups_3 extends Handle_IGESSelect_RebuildGroups {
    constructor(theHandle: Handle_IGESSelect_RebuildGroups);
  }

  export declare class Handle_IGESSelect_RebuildGroups_4 extends Handle_IGESSelect_RebuildGroups {
    constructor(theHandle: Handle_IGESSelect_RebuildGroups);
  }

export declare class Handle_IGESSelect_RemoveCurves {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_RemoveCurves): void;
  get(): IGESSelect_RemoveCurves;
}

  export declare class Handle_IGESSelect_RemoveCurves_1 extends Handle_IGESSelect_RemoveCurves {
    constructor();
  }

  export declare class Handle_IGESSelect_RemoveCurves_2 extends Handle_IGESSelect_RemoveCurves {
    constructor(thePtr: IGESSelect_RemoveCurves);
  }

  export declare class Handle_IGESSelect_RemoveCurves_3 extends Handle_IGESSelect_RemoveCurves {
    constructor(theHandle: Handle_IGESSelect_RemoveCurves);
  }

  export declare class Handle_IGESSelect_RemoveCurves_4 extends Handle_IGESSelect_RemoveCurves {
    constructor(theHandle: Handle_IGESSelect_RemoveCurves);
  }

export declare class Handle_IGESSelect_SelectBasicGeom {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectBasicGeom): void;
  get(): IGESSelect_SelectBasicGeom;
}

  export declare class Handle_IGESSelect_SelectBasicGeom_1 extends Handle_IGESSelect_SelectBasicGeom {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectBasicGeom_2 extends Handle_IGESSelect_SelectBasicGeom {
    constructor(thePtr: IGESSelect_SelectBasicGeom);
  }

  export declare class Handle_IGESSelect_SelectBasicGeom_3 extends Handle_IGESSelect_SelectBasicGeom {
    constructor(theHandle: Handle_IGESSelect_SelectBasicGeom);
  }

  export declare class Handle_IGESSelect_SelectBasicGeom_4 extends Handle_IGESSelect_SelectBasicGeom {
    constructor(theHandle: Handle_IGESSelect_SelectBasicGeom);
  }

export declare class Handle_IGESSelect_SelectBypassGroup {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectBypassGroup): void;
  get(): IGESSelect_SelectBypassGroup;
}

  export declare class Handle_IGESSelect_SelectBypassGroup_1 extends Handle_IGESSelect_SelectBypassGroup {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectBypassGroup_2 extends Handle_IGESSelect_SelectBypassGroup {
    constructor(thePtr: IGESSelect_SelectBypassGroup);
  }

  export declare class Handle_IGESSelect_SelectBypassGroup_3 extends Handle_IGESSelect_SelectBypassGroup {
    constructor(theHandle: Handle_IGESSelect_SelectBypassGroup);
  }

  export declare class Handle_IGESSelect_SelectBypassGroup_4 extends Handle_IGESSelect_SelectBypassGroup {
    constructor(theHandle: Handle_IGESSelect_SelectBypassGroup);
  }

export declare class Handle_IGESSelect_SelectBypassSubfigure {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectBypassSubfigure): void;
  get(): IGESSelect_SelectBypassSubfigure;
}

  export declare class Handle_IGESSelect_SelectBypassSubfigure_1 extends Handle_IGESSelect_SelectBypassSubfigure {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectBypassSubfigure_2 extends Handle_IGESSelect_SelectBypassSubfigure {
    constructor(thePtr: IGESSelect_SelectBypassSubfigure);
  }

  export declare class Handle_IGESSelect_SelectBypassSubfigure_3 extends Handle_IGESSelect_SelectBypassSubfigure {
    constructor(theHandle: Handle_IGESSelect_SelectBypassSubfigure);
  }

  export declare class Handle_IGESSelect_SelectBypassSubfigure_4 extends Handle_IGESSelect_SelectBypassSubfigure {
    constructor(theHandle: Handle_IGESSelect_SelectBypassSubfigure);
  }

export declare class Handle_IGESSelect_SelectDrawingFrom {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectDrawingFrom): void;
  get(): IGESSelect_SelectDrawingFrom;
}

  export declare class Handle_IGESSelect_SelectDrawingFrom_1 extends Handle_IGESSelect_SelectDrawingFrom {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectDrawingFrom_2 extends Handle_IGESSelect_SelectDrawingFrom {
    constructor(thePtr: IGESSelect_SelectDrawingFrom);
  }

  export declare class Handle_IGESSelect_SelectDrawingFrom_3 extends Handle_IGESSelect_SelectDrawingFrom {
    constructor(theHandle: Handle_IGESSelect_SelectDrawingFrom);
  }

  export declare class Handle_IGESSelect_SelectDrawingFrom_4 extends Handle_IGESSelect_SelectDrawingFrom {
    constructor(theHandle: Handle_IGESSelect_SelectDrawingFrom);
  }

export declare class Handle_IGESSelect_SelectFaces {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectFaces): void;
  get(): IGESSelect_SelectFaces;
}

  export declare class Handle_IGESSelect_SelectFaces_1 extends Handle_IGESSelect_SelectFaces {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectFaces_2 extends Handle_IGESSelect_SelectFaces {
    constructor(thePtr: IGESSelect_SelectFaces);
  }

  export declare class Handle_IGESSelect_SelectFaces_3 extends Handle_IGESSelect_SelectFaces {
    constructor(theHandle: Handle_IGESSelect_SelectFaces);
  }

  export declare class Handle_IGESSelect_SelectFaces_4 extends Handle_IGESSelect_SelectFaces {
    constructor(theHandle: Handle_IGESSelect_SelectFaces);
  }

export declare class Handle_IGESSelect_SelectFromDrawing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectFromDrawing): void;
  get(): IGESSelect_SelectFromDrawing;
}

  export declare class Handle_IGESSelect_SelectFromDrawing_1 extends Handle_IGESSelect_SelectFromDrawing {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectFromDrawing_2 extends Handle_IGESSelect_SelectFromDrawing {
    constructor(thePtr: IGESSelect_SelectFromDrawing);
  }

  export declare class Handle_IGESSelect_SelectFromDrawing_3 extends Handle_IGESSelect_SelectFromDrawing {
    constructor(theHandle: Handle_IGESSelect_SelectFromDrawing);
  }

  export declare class Handle_IGESSelect_SelectFromDrawing_4 extends Handle_IGESSelect_SelectFromDrawing {
    constructor(theHandle: Handle_IGESSelect_SelectFromDrawing);
  }

export declare class Handle_IGESSelect_SelectFromSingleView {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectFromSingleView): void;
  get(): IGESSelect_SelectFromSingleView;
}

  export declare class Handle_IGESSelect_SelectFromSingleView_1 extends Handle_IGESSelect_SelectFromSingleView {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectFromSingleView_2 extends Handle_IGESSelect_SelectFromSingleView {
    constructor(thePtr: IGESSelect_SelectFromSingleView);
  }

  export declare class Handle_IGESSelect_SelectFromSingleView_3 extends Handle_IGESSelect_SelectFromSingleView {
    constructor(theHandle: Handle_IGESSelect_SelectFromSingleView);
  }

  export declare class Handle_IGESSelect_SelectFromSingleView_4 extends Handle_IGESSelect_SelectFromSingleView {
    constructor(theHandle: Handle_IGESSelect_SelectFromSingleView);
  }

export declare class Handle_IGESSelect_SelectLevelNumber {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectLevelNumber): void;
  get(): IGESSelect_SelectLevelNumber;
}

  export declare class Handle_IGESSelect_SelectLevelNumber_1 extends Handle_IGESSelect_SelectLevelNumber {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectLevelNumber_2 extends Handle_IGESSelect_SelectLevelNumber {
    constructor(thePtr: IGESSelect_SelectLevelNumber);
  }

  export declare class Handle_IGESSelect_SelectLevelNumber_3 extends Handle_IGESSelect_SelectLevelNumber {
    constructor(theHandle: Handle_IGESSelect_SelectLevelNumber);
  }

  export declare class Handle_IGESSelect_SelectLevelNumber_4 extends Handle_IGESSelect_SelectLevelNumber {
    constructor(theHandle: Handle_IGESSelect_SelectLevelNumber);
  }

export declare class Handle_IGESSelect_SelectName {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectName): void;
  get(): IGESSelect_SelectName;
}

  export declare class Handle_IGESSelect_SelectName_1 extends Handle_IGESSelect_SelectName {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectName_2 extends Handle_IGESSelect_SelectName {
    constructor(thePtr: IGESSelect_SelectName);
  }

  export declare class Handle_IGESSelect_SelectName_3 extends Handle_IGESSelect_SelectName {
    constructor(theHandle: Handle_IGESSelect_SelectName);
  }

  export declare class Handle_IGESSelect_SelectName_4 extends Handle_IGESSelect_SelectName {
    constructor(theHandle: Handle_IGESSelect_SelectName);
  }

export declare class Handle_IGESSelect_SelectPCurves {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectPCurves): void;
  get(): IGESSelect_SelectPCurves;
}

  export declare class Handle_IGESSelect_SelectPCurves_1 extends Handle_IGESSelect_SelectPCurves {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectPCurves_2 extends Handle_IGESSelect_SelectPCurves {
    constructor(thePtr: IGESSelect_SelectPCurves);
  }

  export declare class Handle_IGESSelect_SelectPCurves_3 extends Handle_IGESSelect_SelectPCurves {
    constructor(theHandle: Handle_IGESSelect_SelectPCurves);
  }

  export declare class Handle_IGESSelect_SelectPCurves_4 extends Handle_IGESSelect_SelectPCurves {
    constructor(theHandle: Handle_IGESSelect_SelectPCurves);
  }

export declare class Handle_IGESSelect_SelectSingleViewFrom {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectSingleViewFrom): void;
  get(): IGESSelect_SelectSingleViewFrom;
}

  export declare class Handle_IGESSelect_SelectSingleViewFrom_1 extends Handle_IGESSelect_SelectSingleViewFrom {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectSingleViewFrom_2 extends Handle_IGESSelect_SelectSingleViewFrom {
    constructor(thePtr: IGESSelect_SelectSingleViewFrom);
  }

  export declare class Handle_IGESSelect_SelectSingleViewFrom_3 extends Handle_IGESSelect_SelectSingleViewFrom {
    constructor(theHandle: Handle_IGESSelect_SelectSingleViewFrom);
  }

  export declare class Handle_IGESSelect_SelectSingleViewFrom_4 extends Handle_IGESSelect_SelectSingleViewFrom {
    constructor(theHandle: Handle_IGESSelect_SelectSingleViewFrom);
  }

export declare class Handle_IGESSelect_SelectSubordinate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectSubordinate): void;
  get(): IGESSelect_SelectSubordinate;
}

  export declare class Handle_IGESSelect_SelectSubordinate_1 extends Handle_IGESSelect_SelectSubordinate {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectSubordinate_2 extends Handle_IGESSelect_SelectSubordinate {
    constructor(thePtr: IGESSelect_SelectSubordinate);
  }

  export declare class Handle_IGESSelect_SelectSubordinate_3 extends Handle_IGESSelect_SelectSubordinate {
    constructor(theHandle: Handle_IGESSelect_SelectSubordinate);
  }

  export declare class Handle_IGESSelect_SelectSubordinate_4 extends Handle_IGESSelect_SelectSubordinate {
    constructor(theHandle: Handle_IGESSelect_SelectSubordinate);
  }

export declare class Handle_IGESSelect_SelectVisibleStatus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SelectVisibleStatus): void;
  get(): IGESSelect_SelectVisibleStatus;
}

  export declare class Handle_IGESSelect_SelectVisibleStatus_1 extends Handle_IGESSelect_SelectVisibleStatus {
    constructor();
  }

  export declare class Handle_IGESSelect_SelectVisibleStatus_2 extends Handle_IGESSelect_SelectVisibleStatus {
    constructor(thePtr: IGESSelect_SelectVisibleStatus);
  }

  export declare class Handle_IGESSelect_SelectVisibleStatus_3 extends Handle_IGESSelect_SelectVisibleStatus {
    constructor(theHandle: Handle_IGESSelect_SelectVisibleStatus);
  }

  export declare class Handle_IGESSelect_SelectVisibleStatus_4 extends Handle_IGESSelect_SelectVisibleStatus {
    constructor(theHandle: Handle_IGESSelect_SelectVisibleStatus);
  }

export declare class Handle_IGESSelect_SetGlobalParameter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SetGlobalParameter): void;
  get(): IGESSelect_SetGlobalParameter;
}

  export declare class Handle_IGESSelect_SetGlobalParameter_1 extends Handle_IGESSelect_SetGlobalParameter {
    constructor();
  }

  export declare class Handle_IGESSelect_SetGlobalParameter_2 extends Handle_IGESSelect_SetGlobalParameter {
    constructor(thePtr: IGESSelect_SetGlobalParameter);
  }

  export declare class Handle_IGESSelect_SetGlobalParameter_3 extends Handle_IGESSelect_SetGlobalParameter {
    constructor(theHandle: Handle_IGESSelect_SetGlobalParameter);
  }

  export declare class Handle_IGESSelect_SetGlobalParameter_4 extends Handle_IGESSelect_SetGlobalParameter {
    constructor(theHandle: Handle_IGESSelect_SetGlobalParameter);
  }

export declare class Handle_IGESSelect_SetLabel {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SetLabel): void;
  get(): IGESSelect_SetLabel;
}

  export declare class Handle_IGESSelect_SetLabel_1 extends Handle_IGESSelect_SetLabel {
    constructor();
  }

  export declare class Handle_IGESSelect_SetLabel_2 extends Handle_IGESSelect_SetLabel {
    constructor(thePtr: IGESSelect_SetLabel);
  }

  export declare class Handle_IGESSelect_SetLabel_3 extends Handle_IGESSelect_SetLabel {
    constructor(theHandle: Handle_IGESSelect_SetLabel);
  }

  export declare class Handle_IGESSelect_SetLabel_4 extends Handle_IGESSelect_SetLabel {
    constructor(theHandle: Handle_IGESSelect_SetLabel);
  }

export declare class Handle_IGESSelect_SetVersion5 {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SetVersion5): void;
  get(): IGESSelect_SetVersion5;
}

  export declare class Handle_IGESSelect_SetVersion5_1 extends Handle_IGESSelect_SetVersion5 {
    constructor();
  }

  export declare class Handle_IGESSelect_SetVersion5_2 extends Handle_IGESSelect_SetVersion5 {
    constructor(thePtr: IGESSelect_SetVersion5);
  }

  export declare class Handle_IGESSelect_SetVersion5_3 extends Handle_IGESSelect_SetVersion5 {
    constructor(theHandle: Handle_IGESSelect_SetVersion5);
  }

  export declare class Handle_IGESSelect_SetVersion5_4 extends Handle_IGESSelect_SetVersion5 {
    constructor(theHandle: Handle_IGESSelect_SetVersion5);
  }

export declare class Handle_IGESSelect_SignColor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SignColor): void;
  get(): IGESSelect_SignColor;
}

  export declare class Handle_IGESSelect_SignColor_1 extends Handle_IGESSelect_SignColor {
    constructor();
  }

  export declare class Handle_IGESSelect_SignColor_2 extends Handle_IGESSelect_SignColor {
    constructor(thePtr: IGESSelect_SignColor);
  }

  export declare class Handle_IGESSelect_SignColor_3 extends Handle_IGESSelect_SignColor {
    constructor(theHandle: Handle_IGESSelect_SignColor);
  }

  export declare class Handle_IGESSelect_SignColor_4 extends Handle_IGESSelect_SignColor {
    constructor(theHandle: Handle_IGESSelect_SignColor);
  }

export declare class Handle_IGESSelect_SignLevelNumber {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SignLevelNumber): void;
  get(): IGESSelect_SignLevelNumber;
}

  export declare class Handle_IGESSelect_SignLevelNumber_1 extends Handle_IGESSelect_SignLevelNumber {
    constructor();
  }

  export declare class Handle_IGESSelect_SignLevelNumber_2 extends Handle_IGESSelect_SignLevelNumber {
    constructor(thePtr: IGESSelect_SignLevelNumber);
  }

  export declare class Handle_IGESSelect_SignLevelNumber_3 extends Handle_IGESSelect_SignLevelNumber {
    constructor(theHandle: Handle_IGESSelect_SignLevelNumber);
  }

  export declare class Handle_IGESSelect_SignLevelNumber_4 extends Handle_IGESSelect_SignLevelNumber {
    constructor(theHandle: Handle_IGESSelect_SignLevelNumber);
  }

export declare class Handle_IGESSelect_SignStatus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SignStatus): void;
  get(): IGESSelect_SignStatus;
}

  export declare class Handle_IGESSelect_SignStatus_1 extends Handle_IGESSelect_SignStatus {
    constructor();
  }

  export declare class Handle_IGESSelect_SignStatus_2 extends Handle_IGESSelect_SignStatus {
    constructor(thePtr: IGESSelect_SignStatus);
  }

  export declare class Handle_IGESSelect_SignStatus_3 extends Handle_IGESSelect_SignStatus {
    constructor(theHandle: Handle_IGESSelect_SignStatus);
  }

  export declare class Handle_IGESSelect_SignStatus_4 extends Handle_IGESSelect_SignStatus {
    constructor(theHandle: Handle_IGESSelect_SignStatus);
  }

export declare class Handle_IGESSelect_SplineToBSpline {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_SplineToBSpline): void;
  get(): IGESSelect_SplineToBSpline;
}

  export declare class Handle_IGESSelect_SplineToBSpline_1 extends Handle_IGESSelect_SplineToBSpline {
    constructor();
  }

  export declare class Handle_IGESSelect_SplineToBSpline_2 extends Handle_IGESSelect_SplineToBSpline {
    constructor(thePtr: IGESSelect_SplineToBSpline);
  }

  export declare class Handle_IGESSelect_SplineToBSpline_3 extends Handle_IGESSelect_SplineToBSpline {
    constructor(theHandle: Handle_IGESSelect_SplineToBSpline);
  }

  export declare class Handle_IGESSelect_SplineToBSpline_4 extends Handle_IGESSelect_SplineToBSpline {
    constructor(theHandle: Handle_IGESSelect_SplineToBSpline);
  }

export declare class Handle_IGESSelect_UpdateCreationDate {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_UpdateCreationDate): void;
  get(): IGESSelect_UpdateCreationDate;
}

  export declare class Handle_IGESSelect_UpdateCreationDate_1 extends Handle_IGESSelect_UpdateCreationDate {
    constructor();
  }

  export declare class Handle_IGESSelect_UpdateCreationDate_2 extends Handle_IGESSelect_UpdateCreationDate {
    constructor(thePtr: IGESSelect_UpdateCreationDate);
  }

  export declare class Handle_IGESSelect_UpdateCreationDate_3 extends Handle_IGESSelect_UpdateCreationDate {
    constructor(theHandle: Handle_IGESSelect_UpdateCreationDate);
  }

  export declare class Handle_IGESSelect_UpdateCreationDate_4 extends Handle_IGESSelect_UpdateCreationDate {
    constructor(theHandle: Handle_IGESSelect_UpdateCreationDate);
  }

export declare class Handle_IGESSelect_UpdateFileName {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_UpdateFileName): void;
  get(): IGESSelect_UpdateFileName;
}

  export declare class Handle_IGESSelect_UpdateFileName_1 extends Handle_IGESSelect_UpdateFileName {
    constructor();
  }

  export declare class Handle_IGESSelect_UpdateFileName_2 extends Handle_IGESSelect_UpdateFileName {
    constructor(thePtr: IGESSelect_UpdateFileName);
  }

  export declare class Handle_IGESSelect_UpdateFileName_3 extends Handle_IGESSelect_UpdateFileName {
    constructor(theHandle: Handle_IGESSelect_UpdateFileName);
  }

  export declare class Handle_IGESSelect_UpdateFileName_4 extends Handle_IGESSelect_UpdateFileName {
    constructor(theHandle: Handle_IGESSelect_UpdateFileName);
  }

export declare class Handle_IGESSelect_UpdateLastChange {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_UpdateLastChange): void;
  get(): IGESSelect_UpdateLastChange;
}

  export declare class Handle_IGESSelect_UpdateLastChange_1 extends Handle_IGESSelect_UpdateLastChange {
    constructor();
  }

  export declare class Handle_IGESSelect_UpdateLastChange_2 extends Handle_IGESSelect_UpdateLastChange {
    constructor(thePtr: IGESSelect_UpdateLastChange);
  }

  export declare class Handle_IGESSelect_UpdateLastChange_3 extends Handle_IGESSelect_UpdateLastChange {
    constructor(theHandle: Handle_IGESSelect_UpdateLastChange);
  }

  export declare class Handle_IGESSelect_UpdateLastChange_4 extends Handle_IGESSelect_UpdateLastChange {
    constructor(theHandle: Handle_IGESSelect_UpdateLastChange);
  }

export declare class Handle_IGESSelect_ViewSorter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_ViewSorter): void;
  get(): IGESSelect_ViewSorter;
}

  export declare class Handle_IGESSelect_ViewSorter_1 extends Handle_IGESSelect_ViewSorter {
    constructor();
  }

  export declare class Handle_IGESSelect_ViewSorter_2 extends Handle_IGESSelect_ViewSorter {
    constructor(thePtr: IGESSelect_ViewSorter);
  }

  export declare class Handle_IGESSelect_ViewSorter_3 extends Handle_IGESSelect_ViewSorter {
    constructor(theHandle: Handle_IGESSelect_ViewSorter);
  }

  export declare class Handle_IGESSelect_ViewSorter_4 extends Handle_IGESSelect_ViewSorter {
    constructor(theHandle: Handle_IGESSelect_ViewSorter);
  }

export declare class Handle_IGESSelect_WorkLibrary {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSelect_WorkLibrary): void;
  get(): IGESSelect_WorkLibrary;
}

  export declare class Handle_IGESSelect_WorkLibrary_1 extends Handle_IGESSelect_WorkLibrary {
    constructor();
  }

  export declare class Handle_IGESSelect_WorkLibrary_2 extends Handle_IGESSelect_WorkLibrary {
    constructor(thePtr: IGESSelect_WorkLibrary);
  }

  export declare class Handle_IGESSelect_WorkLibrary_3 extends Handle_IGESSelect_WorkLibrary {
    constructor(theHandle: Handle_IGESSelect_WorkLibrary);
  }

  export declare class Handle_IGESSelect_WorkLibrary_4 extends Handle_IGESSelect_WorkLibrary {
    constructor(theHandle: Handle_IGESSelect_WorkLibrary);
  }

export declare class Handle_IGESSolid_Loop {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Loop): void;
  get(): IGESSolid_Loop;
}

  export declare class Handle_IGESSolid_Loop_1 extends Handle_IGESSolid_Loop {
    constructor();
  }

  export declare class Handle_IGESSolid_Loop_2 extends Handle_IGESSolid_Loop {
    constructor(thePtr: IGESSolid_Loop);
  }

  export declare class Handle_IGESSolid_Loop_3 extends Handle_IGESSolid_Loop {
    constructor(theHandle: Handle_IGESSolid_Loop);
  }

  export declare class Handle_IGESSolid_Loop_4 extends Handle_IGESSolid_Loop {
    constructor(theHandle: Handle_IGESSolid_Loop);
  }

export declare class Handle_IGESSolid_HArray1OfLoop {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_HArray1OfLoop): void;
  get(): IGESSolid_HArray1OfLoop;
}

  export declare class Handle_IGESSolid_HArray1OfLoop_1 extends Handle_IGESSolid_HArray1OfLoop {
    constructor();
  }

  export declare class Handle_IGESSolid_HArray1OfLoop_2 extends Handle_IGESSolid_HArray1OfLoop {
    constructor(thePtr: IGESSolid_HArray1OfLoop);
  }

  export declare class Handle_IGESSolid_HArray1OfLoop_3 extends Handle_IGESSolid_HArray1OfLoop {
    constructor(theHandle: Handle_IGESSolid_HArray1OfLoop);
  }

  export declare class Handle_IGESSolid_HArray1OfLoop_4 extends Handle_IGESSolid_HArray1OfLoop {
    constructor(theHandle: Handle_IGESSolid_HArray1OfLoop);
  }

export declare class Handle_IGESSolid_Face {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Face): void;
  get(): IGESSolid_Face;
}

  export declare class Handle_IGESSolid_Face_1 extends Handle_IGESSolid_Face {
    constructor();
  }

  export declare class Handle_IGESSolid_Face_2 extends Handle_IGESSolid_Face {
    constructor(thePtr: IGESSolid_Face);
  }

  export declare class Handle_IGESSolid_Face_3 extends Handle_IGESSolid_Face {
    constructor(theHandle: Handle_IGESSolid_Face);
  }

  export declare class Handle_IGESSolid_Face_4 extends Handle_IGESSolid_Face {
    constructor(theHandle: Handle_IGESSolid_Face);
  }

export declare class Handle_IGESSolid_HArray1OfFace {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_HArray1OfFace): void;
  get(): IGESSolid_HArray1OfFace;
}

  export declare class Handle_IGESSolid_HArray1OfFace_1 extends Handle_IGESSolid_HArray1OfFace {
    constructor();
  }

  export declare class Handle_IGESSolid_HArray1OfFace_2 extends Handle_IGESSolid_HArray1OfFace {
    constructor(thePtr: IGESSolid_HArray1OfFace);
  }

  export declare class Handle_IGESSolid_HArray1OfFace_3 extends Handle_IGESSolid_HArray1OfFace {
    constructor(theHandle: Handle_IGESSolid_HArray1OfFace);
  }

  export declare class Handle_IGESSolid_HArray1OfFace_4 extends Handle_IGESSolid_HArray1OfFace {
    constructor(theHandle: Handle_IGESSolid_HArray1OfFace);
  }

export declare class Handle_IGESSolid_Shell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Shell): void;
  get(): IGESSolid_Shell;
}

  export declare class Handle_IGESSolid_Shell_1 extends Handle_IGESSolid_Shell {
    constructor();
  }

  export declare class Handle_IGESSolid_Shell_2 extends Handle_IGESSolid_Shell {
    constructor(thePtr: IGESSolid_Shell);
  }

  export declare class Handle_IGESSolid_Shell_3 extends Handle_IGESSolid_Shell {
    constructor(theHandle: Handle_IGESSolid_Shell);
  }

  export declare class Handle_IGESSolid_Shell_4 extends Handle_IGESSolid_Shell {
    constructor(theHandle: Handle_IGESSolid_Shell);
  }

export declare class Handle_IGESSolid_VertexList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_VertexList): void;
  get(): IGESSolid_VertexList;
}

  export declare class Handle_IGESSolid_VertexList_1 extends Handle_IGESSolid_VertexList {
    constructor();
  }

  export declare class Handle_IGESSolid_VertexList_2 extends Handle_IGESSolid_VertexList {
    constructor(thePtr: IGESSolid_VertexList);
  }

  export declare class Handle_IGESSolid_VertexList_3 extends Handle_IGESSolid_VertexList {
    constructor(theHandle: Handle_IGESSolid_VertexList);
  }

  export declare class Handle_IGESSolid_VertexList_4 extends Handle_IGESSolid_VertexList {
    constructor(theHandle: Handle_IGESSolid_VertexList);
  }

export declare class Handle_IGESSolid_Block {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Block): void;
  get(): IGESSolid_Block;
}

  export declare class Handle_IGESSolid_Block_1 extends Handle_IGESSolid_Block {
    constructor();
  }

  export declare class Handle_IGESSolid_Block_2 extends Handle_IGESSolid_Block {
    constructor(thePtr: IGESSolid_Block);
  }

  export declare class Handle_IGESSolid_Block_3 extends Handle_IGESSolid_Block {
    constructor(theHandle: Handle_IGESSolid_Block);
  }

  export declare class Handle_IGESSolid_Block_4 extends Handle_IGESSolid_Block {
    constructor(theHandle: Handle_IGESSolid_Block);
  }

export declare class Handle_IGESSolid_BooleanTree {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_BooleanTree): void;
  get(): IGESSolid_BooleanTree;
}

  export declare class Handle_IGESSolid_BooleanTree_1 extends Handle_IGESSolid_BooleanTree {
    constructor();
  }

  export declare class Handle_IGESSolid_BooleanTree_2 extends Handle_IGESSolid_BooleanTree {
    constructor(thePtr: IGESSolid_BooleanTree);
  }

  export declare class Handle_IGESSolid_BooleanTree_3 extends Handle_IGESSolid_BooleanTree {
    constructor(theHandle: Handle_IGESSolid_BooleanTree);
  }

  export declare class Handle_IGESSolid_BooleanTree_4 extends Handle_IGESSolid_BooleanTree {
    constructor(theHandle: Handle_IGESSolid_BooleanTree);
  }

export declare class Handle_IGESSolid_ConeFrustum {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_ConeFrustum): void;
  get(): IGESSolid_ConeFrustum;
}

  export declare class Handle_IGESSolid_ConeFrustum_1 extends Handle_IGESSolid_ConeFrustum {
    constructor();
  }

  export declare class Handle_IGESSolid_ConeFrustum_2 extends Handle_IGESSolid_ConeFrustum {
    constructor(thePtr: IGESSolid_ConeFrustum);
  }

  export declare class Handle_IGESSolid_ConeFrustum_3 extends Handle_IGESSolid_ConeFrustum {
    constructor(theHandle: Handle_IGESSolid_ConeFrustum);
  }

  export declare class Handle_IGESSolid_ConeFrustum_4 extends Handle_IGESSolid_ConeFrustum {
    constructor(theHandle: Handle_IGESSolid_ConeFrustum);
  }

export declare class Handle_IGESSolid_ConicalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_ConicalSurface): void;
  get(): IGESSolid_ConicalSurface;
}

  export declare class Handle_IGESSolid_ConicalSurface_1 extends Handle_IGESSolid_ConicalSurface {
    constructor();
  }

  export declare class Handle_IGESSolid_ConicalSurface_2 extends Handle_IGESSolid_ConicalSurface {
    constructor(thePtr: IGESSolid_ConicalSurface);
  }

  export declare class Handle_IGESSolid_ConicalSurface_3 extends Handle_IGESSolid_ConicalSurface {
    constructor(theHandle: Handle_IGESSolid_ConicalSurface);
  }

  export declare class Handle_IGESSolid_ConicalSurface_4 extends Handle_IGESSolid_ConicalSurface {
    constructor(theHandle: Handle_IGESSolid_ConicalSurface);
  }

export declare class Handle_IGESSolid_Cylinder {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Cylinder): void;
  get(): IGESSolid_Cylinder;
}

  export declare class Handle_IGESSolid_Cylinder_1 extends Handle_IGESSolid_Cylinder {
    constructor();
  }

  export declare class Handle_IGESSolid_Cylinder_2 extends Handle_IGESSolid_Cylinder {
    constructor(thePtr: IGESSolid_Cylinder);
  }

  export declare class Handle_IGESSolid_Cylinder_3 extends Handle_IGESSolid_Cylinder {
    constructor(theHandle: Handle_IGESSolid_Cylinder);
  }

  export declare class Handle_IGESSolid_Cylinder_4 extends Handle_IGESSolid_Cylinder {
    constructor(theHandle: Handle_IGESSolid_Cylinder);
  }

export declare class Handle_IGESSolid_CylindricalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_CylindricalSurface): void;
  get(): IGESSolid_CylindricalSurface;
}

  export declare class Handle_IGESSolid_CylindricalSurface_1 extends Handle_IGESSolid_CylindricalSurface {
    constructor();
  }

  export declare class Handle_IGESSolid_CylindricalSurface_2 extends Handle_IGESSolid_CylindricalSurface {
    constructor(thePtr: IGESSolid_CylindricalSurface);
  }

  export declare class Handle_IGESSolid_CylindricalSurface_3 extends Handle_IGESSolid_CylindricalSurface {
    constructor(theHandle: Handle_IGESSolid_CylindricalSurface);
  }

  export declare class Handle_IGESSolid_CylindricalSurface_4 extends Handle_IGESSolid_CylindricalSurface {
    constructor(theHandle: Handle_IGESSolid_CylindricalSurface);
  }

export declare class Handle_IGESSolid_HArray1OfVertexList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_HArray1OfVertexList): void;
  get(): IGESSolid_HArray1OfVertexList;
}

  export declare class Handle_IGESSolid_HArray1OfVertexList_1 extends Handle_IGESSolid_HArray1OfVertexList {
    constructor();
  }

  export declare class Handle_IGESSolid_HArray1OfVertexList_2 extends Handle_IGESSolid_HArray1OfVertexList {
    constructor(thePtr: IGESSolid_HArray1OfVertexList);
  }

  export declare class Handle_IGESSolid_HArray1OfVertexList_3 extends Handle_IGESSolid_HArray1OfVertexList {
    constructor(theHandle: Handle_IGESSolid_HArray1OfVertexList);
  }

  export declare class Handle_IGESSolid_HArray1OfVertexList_4 extends Handle_IGESSolid_HArray1OfVertexList {
    constructor(theHandle: Handle_IGESSolid_HArray1OfVertexList);
  }

export declare class Handle_IGESSolid_EdgeList {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_EdgeList): void;
  get(): IGESSolid_EdgeList;
}

  export declare class Handle_IGESSolid_EdgeList_1 extends Handle_IGESSolid_EdgeList {
    constructor();
  }

  export declare class Handle_IGESSolid_EdgeList_2 extends Handle_IGESSolid_EdgeList {
    constructor(thePtr: IGESSolid_EdgeList);
  }

  export declare class Handle_IGESSolid_EdgeList_3 extends Handle_IGESSolid_EdgeList {
    constructor(theHandle: Handle_IGESSolid_EdgeList);
  }

  export declare class Handle_IGESSolid_EdgeList_4 extends Handle_IGESSolid_EdgeList {
    constructor(theHandle: Handle_IGESSolid_EdgeList);
  }

export declare class Handle_IGESSolid_Ellipsoid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Ellipsoid): void;
  get(): IGESSolid_Ellipsoid;
}

  export declare class Handle_IGESSolid_Ellipsoid_1 extends Handle_IGESSolid_Ellipsoid {
    constructor();
  }

  export declare class Handle_IGESSolid_Ellipsoid_2 extends Handle_IGESSolid_Ellipsoid {
    constructor(thePtr: IGESSolid_Ellipsoid);
  }

  export declare class Handle_IGESSolid_Ellipsoid_3 extends Handle_IGESSolid_Ellipsoid {
    constructor(theHandle: Handle_IGESSolid_Ellipsoid);
  }

  export declare class Handle_IGESSolid_Ellipsoid_4 extends Handle_IGESSolid_Ellipsoid {
    constructor(theHandle: Handle_IGESSolid_Ellipsoid);
  }

export declare class Handle_IGESSolid_GeneralModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_GeneralModule): void;
  get(): IGESSolid_GeneralModule;
}

  export declare class Handle_IGESSolid_GeneralModule_1 extends Handle_IGESSolid_GeneralModule {
    constructor();
  }

  export declare class Handle_IGESSolid_GeneralModule_2 extends Handle_IGESSolid_GeneralModule {
    constructor(thePtr: IGESSolid_GeneralModule);
  }

  export declare class Handle_IGESSolid_GeneralModule_3 extends Handle_IGESSolid_GeneralModule {
    constructor(theHandle: Handle_IGESSolid_GeneralModule);
  }

  export declare class Handle_IGESSolid_GeneralModule_4 extends Handle_IGESSolid_GeneralModule {
    constructor(theHandle: Handle_IGESSolid_GeneralModule);
  }

export declare class Handle_IGESSolid_HArray1OfShell {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_HArray1OfShell): void;
  get(): IGESSolid_HArray1OfShell;
}

  export declare class Handle_IGESSolid_HArray1OfShell_1 extends Handle_IGESSolid_HArray1OfShell {
    constructor();
  }

  export declare class Handle_IGESSolid_HArray1OfShell_2 extends Handle_IGESSolid_HArray1OfShell {
    constructor(thePtr: IGESSolid_HArray1OfShell);
  }

  export declare class Handle_IGESSolid_HArray1OfShell_3 extends Handle_IGESSolid_HArray1OfShell {
    constructor(theHandle: Handle_IGESSolid_HArray1OfShell);
  }

  export declare class Handle_IGESSolid_HArray1OfShell_4 extends Handle_IGESSolid_HArray1OfShell {
    constructor(theHandle: Handle_IGESSolid_HArray1OfShell);
  }

export declare class Handle_IGESSolid_ManifoldSolid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_ManifoldSolid): void;
  get(): IGESSolid_ManifoldSolid;
}

  export declare class Handle_IGESSolid_ManifoldSolid_1 extends Handle_IGESSolid_ManifoldSolid {
    constructor();
  }

  export declare class Handle_IGESSolid_ManifoldSolid_2 extends Handle_IGESSolid_ManifoldSolid {
    constructor(thePtr: IGESSolid_ManifoldSolid);
  }

  export declare class Handle_IGESSolid_ManifoldSolid_3 extends Handle_IGESSolid_ManifoldSolid {
    constructor(theHandle: Handle_IGESSolid_ManifoldSolid);
  }

  export declare class Handle_IGESSolid_ManifoldSolid_4 extends Handle_IGESSolid_ManifoldSolid {
    constructor(theHandle: Handle_IGESSolid_ManifoldSolid);
  }

export declare class Handle_IGESSolid_PlaneSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_PlaneSurface): void;
  get(): IGESSolid_PlaneSurface;
}

  export declare class Handle_IGESSolid_PlaneSurface_1 extends Handle_IGESSolid_PlaneSurface {
    constructor();
  }

  export declare class Handle_IGESSolid_PlaneSurface_2 extends Handle_IGESSolid_PlaneSurface {
    constructor(thePtr: IGESSolid_PlaneSurface);
  }

  export declare class Handle_IGESSolid_PlaneSurface_3 extends Handle_IGESSolid_PlaneSurface {
    constructor(theHandle: Handle_IGESSolid_PlaneSurface);
  }

  export declare class Handle_IGESSolid_PlaneSurface_4 extends Handle_IGESSolid_PlaneSurface {
    constructor(theHandle: Handle_IGESSolid_PlaneSurface);
  }

export declare class Handle_IGESSolid_Protocol {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Protocol): void;
  get(): IGESSolid_Protocol;
}

  export declare class Handle_IGESSolid_Protocol_1 extends Handle_IGESSolid_Protocol {
    constructor();
  }

  export declare class Handle_IGESSolid_Protocol_2 extends Handle_IGESSolid_Protocol {
    constructor(thePtr: IGESSolid_Protocol);
  }

  export declare class Handle_IGESSolid_Protocol_3 extends Handle_IGESSolid_Protocol {
    constructor(theHandle: Handle_IGESSolid_Protocol);
  }

  export declare class Handle_IGESSolid_Protocol_4 extends Handle_IGESSolid_Protocol {
    constructor(theHandle: Handle_IGESSolid_Protocol);
  }

export declare class Handle_IGESSolid_ReadWriteModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_ReadWriteModule): void;
  get(): IGESSolid_ReadWriteModule;
}

  export declare class Handle_IGESSolid_ReadWriteModule_1 extends Handle_IGESSolid_ReadWriteModule {
    constructor();
  }

  export declare class Handle_IGESSolid_ReadWriteModule_2 extends Handle_IGESSolid_ReadWriteModule {
    constructor(thePtr: IGESSolid_ReadWriteModule);
  }

  export declare class Handle_IGESSolid_ReadWriteModule_3 extends Handle_IGESSolid_ReadWriteModule {
    constructor(theHandle: Handle_IGESSolid_ReadWriteModule);
  }

  export declare class Handle_IGESSolid_ReadWriteModule_4 extends Handle_IGESSolid_ReadWriteModule {
    constructor(theHandle: Handle_IGESSolid_ReadWriteModule);
  }

export declare class Handle_IGESSolid_RightAngularWedge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_RightAngularWedge): void;
  get(): IGESSolid_RightAngularWedge;
}

  export declare class Handle_IGESSolid_RightAngularWedge_1 extends Handle_IGESSolid_RightAngularWedge {
    constructor();
  }

  export declare class Handle_IGESSolid_RightAngularWedge_2 extends Handle_IGESSolid_RightAngularWedge {
    constructor(thePtr: IGESSolid_RightAngularWedge);
  }

  export declare class Handle_IGESSolid_RightAngularWedge_3 extends Handle_IGESSolid_RightAngularWedge {
    constructor(theHandle: Handle_IGESSolid_RightAngularWedge);
  }

  export declare class Handle_IGESSolid_RightAngularWedge_4 extends Handle_IGESSolid_RightAngularWedge {
    constructor(theHandle: Handle_IGESSolid_RightAngularWedge);
  }

export declare class Handle_IGESSolid_SelectedComponent {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_SelectedComponent): void;
  get(): IGESSolid_SelectedComponent;
}

  export declare class Handle_IGESSolid_SelectedComponent_1 extends Handle_IGESSolid_SelectedComponent {
    constructor();
  }

  export declare class Handle_IGESSolid_SelectedComponent_2 extends Handle_IGESSolid_SelectedComponent {
    constructor(thePtr: IGESSolid_SelectedComponent);
  }

  export declare class Handle_IGESSolid_SelectedComponent_3 extends Handle_IGESSolid_SelectedComponent {
    constructor(theHandle: Handle_IGESSolid_SelectedComponent);
  }

  export declare class Handle_IGESSolid_SelectedComponent_4 extends Handle_IGESSolid_SelectedComponent {
    constructor(theHandle: Handle_IGESSolid_SelectedComponent);
  }

export declare class Handle_IGESSolid_SolidAssembly {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_SolidAssembly): void;
  get(): IGESSolid_SolidAssembly;
}

  export declare class Handle_IGESSolid_SolidAssembly_1 extends Handle_IGESSolid_SolidAssembly {
    constructor();
  }

  export declare class Handle_IGESSolid_SolidAssembly_2 extends Handle_IGESSolid_SolidAssembly {
    constructor(thePtr: IGESSolid_SolidAssembly);
  }

  export declare class Handle_IGESSolid_SolidAssembly_3 extends Handle_IGESSolid_SolidAssembly {
    constructor(theHandle: Handle_IGESSolid_SolidAssembly);
  }

  export declare class Handle_IGESSolid_SolidAssembly_4 extends Handle_IGESSolid_SolidAssembly {
    constructor(theHandle: Handle_IGESSolid_SolidAssembly);
  }

export declare class Handle_IGESSolid_SolidInstance {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_SolidInstance): void;
  get(): IGESSolid_SolidInstance;
}

  export declare class Handle_IGESSolid_SolidInstance_1 extends Handle_IGESSolid_SolidInstance {
    constructor();
  }

  export declare class Handle_IGESSolid_SolidInstance_2 extends Handle_IGESSolid_SolidInstance {
    constructor(thePtr: IGESSolid_SolidInstance);
  }

  export declare class Handle_IGESSolid_SolidInstance_3 extends Handle_IGESSolid_SolidInstance {
    constructor(theHandle: Handle_IGESSolid_SolidInstance);
  }

  export declare class Handle_IGESSolid_SolidInstance_4 extends Handle_IGESSolid_SolidInstance {
    constructor(theHandle: Handle_IGESSolid_SolidInstance);
  }

export declare class Handle_IGESSolid_SolidOfLinearExtrusion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_SolidOfLinearExtrusion): void;
  get(): IGESSolid_SolidOfLinearExtrusion;
}

  export declare class Handle_IGESSolid_SolidOfLinearExtrusion_1 extends Handle_IGESSolid_SolidOfLinearExtrusion {
    constructor();
  }

  export declare class Handle_IGESSolid_SolidOfLinearExtrusion_2 extends Handle_IGESSolid_SolidOfLinearExtrusion {
    constructor(thePtr: IGESSolid_SolidOfLinearExtrusion);
  }

  export declare class Handle_IGESSolid_SolidOfLinearExtrusion_3 extends Handle_IGESSolid_SolidOfLinearExtrusion {
    constructor(theHandle: Handle_IGESSolid_SolidOfLinearExtrusion);
  }

  export declare class Handle_IGESSolid_SolidOfLinearExtrusion_4 extends Handle_IGESSolid_SolidOfLinearExtrusion {
    constructor(theHandle: Handle_IGESSolid_SolidOfLinearExtrusion);
  }

export declare class Handle_IGESSolid_SolidOfRevolution {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_SolidOfRevolution): void;
  get(): IGESSolid_SolidOfRevolution;
}

  export declare class Handle_IGESSolid_SolidOfRevolution_1 extends Handle_IGESSolid_SolidOfRevolution {
    constructor();
  }

  export declare class Handle_IGESSolid_SolidOfRevolution_2 extends Handle_IGESSolid_SolidOfRevolution {
    constructor(thePtr: IGESSolid_SolidOfRevolution);
  }

  export declare class Handle_IGESSolid_SolidOfRevolution_3 extends Handle_IGESSolid_SolidOfRevolution {
    constructor(theHandle: Handle_IGESSolid_SolidOfRevolution);
  }

  export declare class Handle_IGESSolid_SolidOfRevolution_4 extends Handle_IGESSolid_SolidOfRevolution {
    constructor(theHandle: Handle_IGESSolid_SolidOfRevolution);
  }

export declare class Handle_IGESSolid_SpecificModule {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_SpecificModule): void;
  get(): IGESSolid_SpecificModule;
}

  export declare class Handle_IGESSolid_SpecificModule_1 extends Handle_IGESSolid_SpecificModule {
    constructor();
  }

  export declare class Handle_IGESSolid_SpecificModule_2 extends Handle_IGESSolid_SpecificModule {
    constructor(thePtr: IGESSolid_SpecificModule);
  }

  export declare class Handle_IGESSolid_SpecificModule_3 extends Handle_IGESSolid_SpecificModule {
    constructor(theHandle: Handle_IGESSolid_SpecificModule);
  }

  export declare class Handle_IGESSolid_SpecificModule_4 extends Handle_IGESSolid_SpecificModule {
    constructor(theHandle: Handle_IGESSolid_SpecificModule);
  }

export declare class Handle_IGESSolid_Sphere {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Sphere): void;
  get(): IGESSolid_Sphere;
}

  export declare class Handle_IGESSolid_Sphere_1 extends Handle_IGESSolid_Sphere {
    constructor();
  }

  export declare class Handle_IGESSolid_Sphere_2 extends Handle_IGESSolid_Sphere {
    constructor(thePtr: IGESSolid_Sphere);
  }

  export declare class Handle_IGESSolid_Sphere_3 extends Handle_IGESSolid_Sphere {
    constructor(theHandle: Handle_IGESSolid_Sphere);
  }

  export declare class Handle_IGESSolid_Sphere_4 extends Handle_IGESSolid_Sphere {
    constructor(theHandle: Handle_IGESSolid_Sphere);
  }

export declare class Handle_IGESSolid_SphericalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_SphericalSurface): void;
  get(): IGESSolid_SphericalSurface;
}

  export declare class Handle_IGESSolid_SphericalSurface_1 extends Handle_IGESSolid_SphericalSurface {
    constructor();
  }

  export declare class Handle_IGESSolid_SphericalSurface_2 extends Handle_IGESSolid_SphericalSurface {
    constructor(thePtr: IGESSolid_SphericalSurface);
  }

  export declare class Handle_IGESSolid_SphericalSurface_3 extends Handle_IGESSolid_SphericalSurface {
    constructor(theHandle: Handle_IGESSolid_SphericalSurface);
  }

  export declare class Handle_IGESSolid_SphericalSurface_4 extends Handle_IGESSolid_SphericalSurface {
    constructor(theHandle: Handle_IGESSolid_SphericalSurface);
  }

export declare class Handle_IGESSolid_ToroidalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_ToroidalSurface): void;
  get(): IGESSolid_ToroidalSurface;
}

  export declare class Handle_IGESSolid_ToroidalSurface_1 extends Handle_IGESSolid_ToroidalSurface {
    constructor();
  }

  export declare class Handle_IGESSolid_ToroidalSurface_2 extends Handle_IGESSolid_ToroidalSurface {
    constructor(thePtr: IGESSolid_ToroidalSurface);
  }

  export declare class Handle_IGESSolid_ToroidalSurface_3 extends Handle_IGESSolid_ToroidalSurface {
    constructor(theHandle: Handle_IGESSolid_ToroidalSurface);
  }

  export declare class Handle_IGESSolid_ToroidalSurface_4 extends Handle_IGESSolid_ToroidalSurface {
    constructor(theHandle: Handle_IGESSolid_ToroidalSurface);
  }

export declare class Handle_IGESSolid_Torus {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESSolid_Torus): void;
  get(): IGESSolid_Torus;
}

  export declare class Handle_IGESSolid_Torus_1 extends Handle_IGESSolid_Torus {
    constructor();
  }

  export declare class Handle_IGESSolid_Torus_2 extends Handle_IGESSolid_Torus {
    constructor(thePtr: IGESSolid_Torus);
  }

  export declare class Handle_IGESSolid_Torus_3 extends Handle_IGESSolid_Torus {
    constructor(theHandle: Handle_IGESSolid_Torus);
  }

  export declare class Handle_IGESSolid_Torus_4 extends Handle_IGESSolid_Torus {
    constructor(theHandle: Handle_IGESSolid_Torus);
  }

export declare class Handle_IGESToBRep_Actor {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESToBRep_Actor): void;
  get(): IGESToBRep_Actor;
}

  export declare class Handle_IGESToBRep_Actor_1 extends Handle_IGESToBRep_Actor {
    constructor();
  }

  export declare class Handle_IGESToBRep_Actor_2 extends Handle_IGESToBRep_Actor {
    constructor(thePtr: IGESToBRep_Actor);
  }

  export declare class Handle_IGESToBRep_Actor_3 extends Handle_IGESToBRep_Actor {
    constructor(theHandle: Handle_IGESToBRep_Actor);
  }

  export declare class Handle_IGESToBRep_Actor_4 extends Handle_IGESToBRep_Actor {
    constructor(theHandle: Handle_IGESToBRep_Actor);
  }

export declare type IGESData_DefType = {
  IGESData_DefVoid: {};
  IGESData_DefValue: {};
  IGESData_DefReference: {};
  IGESData_DefAny: {};
  IGESData_ErrorVal: {};
  IGESData_ErrorRef: {};
}

export declare type IGESData_DefList = {
  IGESData_DefNone: {};
  IGESData_DefOne: {};
  IGESData_DefSeveral: {};
  IGESData_ErrorOne: {};
  IGESData_ErrorSeveral: {};
}

export declare type IGESData_ReadStage = {
  IGESData_ReadDir: {};
  IGESData_ReadOwn: {};
  IGESData_ReadAssocs: {};
  IGESData_ReadProps: {};
  IGESData_ReadEnd: {};
}

export declare type IGESData_Status = {
  IGESData_EntityOK: {};
  IGESData_EntityError: {};
  IGESData_ReferenceError: {};
  IGESData_TypeError: {};
}

export declare type TKIGESLib = {
  BRepToIGES_BREntity: typeof BRepToIGES_BREntity;
  BRepToIGES_BRShell_1: typeof BRepToIGES_BRShell_1;
  BRepToIGES_BRShell_2: typeof BRepToIGES_BRShell_2;
  BRepToIGES_BRSolid_1: typeof BRepToIGES_BRSolid_1;
  BRepToIGES_BRSolid_2: typeof BRepToIGES_BRSolid_2;
  BRepToIGES_BRWire_1: typeof BRepToIGES_BRWire_1;
  BRepToIGES_BRWire_2: typeof BRepToIGES_BRWire_2;
  BRepToIGESBRep_Entity: typeof BRepToIGESBRep_Entity;
  Geom2dToIGES_Geom2dEntity_1: typeof Geom2dToIGES_Geom2dEntity_1;
  Geom2dToIGES_Geom2dEntity_2: typeof Geom2dToIGES_Geom2dEntity_2;
  Geom2dToIGES_Geom2dCurve_1: typeof Geom2dToIGES_Geom2dCurve_1;
  Geom2dToIGES_Geom2dCurve_2: typeof Geom2dToIGES_Geom2dCurve_2;
  Geom2dToIGES_Geom2dPoint_1: typeof Geom2dToIGES_Geom2dPoint_1;
  Geom2dToIGES_Geom2dPoint_2: typeof Geom2dToIGES_Geom2dPoint_2;
  Geom2dToIGES_Geom2dVector_1: typeof Geom2dToIGES_Geom2dVector_1;
  Geom2dToIGES_Geom2dVector_2: typeof Geom2dToIGES_Geom2dVector_2;
  GeomToIGES_GeomEntity_1: typeof GeomToIGES_GeomEntity_1;
  GeomToIGES_GeomEntity_2: typeof GeomToIGES_GeomEntity_2;
  GeomToIGES_GeomCurve_1: typeof GeomToIGES_GeomCurve_1;
  GeomToIGES_GeomCurve_2: typeof GeomToIGES_GeomCurve_2;
  GeomToIGES_GeomPoint_1: typeof GeomToIGES_GeomPoint_1;
  GeomToIGES_GeomPoint_2: typeof GeomToIGES_GeomPoint_2;
  GeomToIGES_GeomSurface_1: typeof GeomToIGES_GeomSurface_1;
  GeomToIGES_GeomSurface_2: typeof GeomToIGES_GeomSurface_2;
  GeomToIGES_GeomVector_1: typeof GeomToIGES_GeomVector_1;
  GeomToIGES_GeomVector_2: typeof GeomToIGES_GeomVector_2;
  IGESControl_Reader_1: typeof IGESControl_Reader_1;
  IGESControl_Reader_2: typeof IGESControl_Reader_2;
  IGESControl_Writer_1: typeof IGESControl_Writer_1;
  IGESControl_Writer_2: typeof IGESControl_Writer_2;
  IGESControl_Writer_3: typeof IGESControl_Writer_3;
  IGESControl_ActorWrite: typeof IGESControl_ActorWrite;
  IGESControl_AlgoContainer: typeof IGESControl_AlgoContainer;
  IGESControl_Controller: typeof IGESControl_Controller;
  IGESControl_IGESBoundary_1: typeof IGESControl_IGESBoundary_1;
  IGESControl_IGESBoundary_2: typeof IGESControl_IGESBoundary_2;
  IGESControl_ToolContainer: typeof IGESControl_ToolContainer;
  Handle_IGESData_IGESEntity_1: typeof Handle_IGESData_IGESEntity_1;
  Handle_IGESData_IGESEntity_2: typeof Handle_IGESData_IGESEntity_2;
  Handle_IGESData_IGESEntity_3: typeof Handle_IGESData_IGESEntity_3;
  Handle_IGESData_IGESEntity_4: typeof Handle_IGESData_IGESEntity_4;
  Handle_IGESAppli_Node_1: typeof Handle_IGESAppli_Node_1;
  Handle_IGESAppli_Node_2: typeof Handle_IGESAppli_Node_2;
  Handle_IGESAppli_Node_3: typeof Handle_IGESAppli_Node_3;
  Handle_IGESAppli_Node_4: typeof Handle_IGESAppli_Node_4;
  Handle_IGESAppli_HArray1OfNode_1: typeof Handle_IGESAppli_HArray1OfNode_1;
  Handle_IGESAppli_HArray1OfNode_2: typeof Handle_IGESAppli_HArray1OfNode_2;
  Handle_IGESAppli_HArray1OfNode_3: typeof Handle_IGESAppli_HArray1OfNode_3;
  Handle_IGESAppli_HArray1OfNode_4: typeof Handle_IGESAppli_HArray1OfNode_4;
  Handle_IGESAppli_FiniteElement_1: typeof Handle_IGESAppli_FiniteElement_1;
  Handle_IGESAppli_FiniteElement_2: typeof Handle_IGESAppli_FiniteElement_2;
  Handle_IGESAppli_FiniteElement_3: typeof Handle_IGESAppli_FiniteElement_3;
  Handle_IGESAppli_FiniteElement_4: typeof Handle_IGESAppli_FiniteElement_4;
  Handle_IGESData_HArray1OfIGESEntity_1: typeof Handle_IGESData_HArray1OfIGESEntity_1;
  Handle_IGESData_HArray1OfIGESEntity_2: typeof Handle_IGESData_HArray1OfIGESEntity_2;
  Handle_IGESData_HArray1OfIGESEntity_3: typeof Handle_IGESData_HArray1OfIGESEntity_3;
  Handle_IGESData_HArray1OfIGESEntity_4: typeof Handle_IGESData_HArray1OfIGESEntity_4;
  Handle_IGESDraw_ConnectPoint_1: typeof Handle_IGESDraw_ConnectPoint_1;
  Handle_IGESDraw_ConnectPoint_2: typeof Handle_IGESDraw_ConnectPoint_2;
  Handle_IGESDraw_ConnectPoint_3: typeof Handle_IGESDraw_ConnectPoint_3;
  Handle_IGESDraw_ConnectPoint_4: typeof Handle_IGESDraw_ConnectPoint_4;
  Handle_IGESDraw_HArray1OfConnectPoint_1: typeof Handle_IGESDraw_HArray1OfConnectPoint_1;
  Handle_IGESDraw_HArray1OfConnectPoint_2: typeof Handle_IGESDraw_HArray1OfConnectPoint_2;
  Handle_IGESDraw_HArray1OfConnectPoint_3: typeof Handle_IGESDraw_HArray1OfConnectPoint_3;
  Handle_IGESDraw_HArray1OfConnectPoint_4: typeof Handle_IGESDraw_HArray1OfConnectPoint_4;
  Handle_IGESGraph_TextDisplayTemplate_1: typeof Handle_IGESGraph_TextDisplayTemplate_1;
  Handle_IGESGraph_TextDisplayTemplate_2: typeof Handle_IGESGraph_TextDisplayTemplate_2;
  Handle_IGESGraph_TextDisplayTemplate_3: typeof Handle_IGESGraph_TextDisplayTemplate_3;
  Handle_IGESGraph_TextDisplayTemplate_4: typeof Handle_IGESGraph_TextDisplayTemplate_4;
  Handle_IGESGraph_HArray1OfTextDisplayTemplate_1: typeof Handle_IGESGraph_HArray1OfTextDisplayTemplate_1;
  Handle_IGESGraph_HArray1OfTextDisplayTemplate_2: typeof Handle_IGESGraph_HArray1OfTextDisplayTemplate_2;
  Handle_IGESGraph_HArray1OfTextDisplayTemplate_3: typeof Handle_IGESGraph_HArray1OfTextDisplayTemplate_3;
  Handle_IGESGraph_HArray1OfTextDisplayTemplate_4: typeof Handle_IGESGraph_HArray1OfTextDisplayTemplate_4;
  Handle_IGESAppli_Flow_1: typeof Handle_IGESAppli_Flow_1;
  Handle_IGESAppli_Flow_2: typeof Handle_IGESAppli_Flow_2;
  Handle_IGESAppli_Flow_3: typeof Handle_IGESAppli_Flow_3;
  Handle_IGESAppli_Flow_4: typeof Handle_IGESAppli_Flow_4;
  Handle_IGESAppli_DrilledHole_1: typeof Handle_IGESAppli_DrilledHole_1;
  Handle_IGESAppli_DrilledHole_2: typeof Handle_IGESAppli_DrilledHole_2;
  Handle_IGESAppli_DrilledHole_3: typeof Handle_IGESAppli_DrilledHole_3;
  Handle_IGESAppli_DrilledHole_4: typeof Handle_IGESAppli_DrilledHole_4;
  Handle_IGESAppli_HArray1OfFiniteElement_1: typeof Handle_IGESAppli_HArray1OfFiniteElement_1;
  Handle_IGESAppli_HArray1OfFiniteElement_2: typeof Handle_IGESAppli_HArray1OfFiniteElement_2;
  Handle_IGESAppli_HArray1OfFiniteElement_3: typeof Handle_IGESAppli_HArray1OfFiniteElement_3;
  Handle_IGESAppli_HArray1OfFiniteElement_4: typeof Handle_IGESAppli_HArray1OfFiniteElement_4;
  Handle_IGESAppli_ElementResults_1: typeof Handle_IGESAppli_ElementResults_1;
  Handle_IGESAppli_ElementResults_2: typeof Handle_IGESAppli_ElementResults_2;
  Handle_IGESAppli_ElementResults_3: typeof Handle_IGESAppli_ElementResults_3;
  Handle_IGESAppli_ElementResults_4: typeof Handle_IGESAppli_ElementResults_4;
  Handle_IGESAppli_FlowLineSpec_1: typeof Handle_IGESAppli_FlowLineSpec_1;
  Handle_IGESAppli_FlowLineSpec_2: typeof Handle_IGESAppli_FlowLineSpec_2;
  Handle_IGESAppli_FlowLineSpec_3: typeof Handle_IGESAppli_FlowLineSpec_3;
  Handle_IGESAppli_FlowLineSpec_4: typeof Handle_IGESAppli_FlowLineSpec_4;
  Handle_IGESData_GeneralModule_1: typeof Handle_IGESData_GeneralModule_1;
  Handle_IGESData_GeneralModule_2: typeof Handle_IGESData_GeneralModule_2;
  Handle_IGESData_GeneralModule_3: typeof Handle_IGESData_GeneralModule_3;
  Handle_IGESData_GeneralModule_4: typeof Handle_IGESData_GeneralModule_4;
  Handle_IGESAppli_GeneralModule_1: typeof Handle_IGESAppli_GeneralModule_1;
  Handle_IGESAppli_GeneralModule_2: typeof Handle_IGESAppli_GeneralModule_2;
  Handle_IGESAppli_GeneralModule_3: typeof Handle_IGESAppli_GeneralModule_3;
  Handle_IGESAppli_GeneralModule_4: typeof Handle_IGESAppli_GeneralModule_4;
  Handle_IGESAppli_HArray1OfFlow_1: typeof Handle_IGESAppli_HArray1OfFlow_1;
  Handle_IGESAppli_HArray1OfFlow_2: typeof Handle_IGESAppli_HArray1OfFlow_2;
  Handle_IGESAppli_HArray1OfFlow_3: typeof Handle_IGESAppli_HArray1OfFlow_3;
  Handle_IGESAppli_HArray1OfFlow_4: typeof Handle_IGESAppli_HArray1OfFlow_4;
  Handle_IGESAppli_LevelFunction_1: typeof Handle_IGESAppli_LevelFunction_1;
  Handle_IGESAppli_LevelFunction_2: typeof Handle_IGESAppli_LevelFunction_2;
  Handle_IGESAppli_LevelFunction_3: typeof Handle_IGESAppli_LevelFunction_3;
  Handle_IGESAppli_LevelFunction_4: typeof Handle_IGESAppli_LevelFunction_4;
  Handle_IGESAppli_LevelToPWBLayerMap_1: typeof Handle_IGESAppli_LevelToPWBLayerMap_1;
  Handle_IGESAppli_LevelToPWBLayerMap_2: typeof Handle_IGESAppli_LevelToPWBLayerMap_2;
  Handle_IGESAppli_LevelToPWBLayerMap_3: typeof Handle_IGESAppli_LevelToPWBLayerMap_3;
  Handle_IGESAppli_LevelToPWBLayerMap_4: typeof Handle_IGESAppli_LevelToPWBLayerMap_4;
  Handle_IGESAppli_LineWidening_1: typeof Handle_IGESAppli_LineWidening_1;
  Handle_IGESAppli_LineWidening_2: typeof Handle_IGESAppli_LineWidening_2;
  Handle_IGESAppli_LineWidening_3: typeof Handle_IGESAppli_LineWidening_3;
  Handle_IGESAppli_LineWidening_4: typeof Handle_IGESAppli_LineWidening_4;
  Handle_IGESDefs_TabularData_1: typeof Handle_IGESDefs_TabularData_1;
  Handle_IGESDefs_TabularData_2: typeof Handle_IGESDefs_TabularData_2;
  Handle_IGESDefs_TabularData_3: typeof Handle_IGESDefs_TabularData_3;
  Handle_IGESDefs_TabularData_4: typeof Handle_IGESDefs_TabularData_4;
  Handle_IGESDefs_HArray1OfTabularData_1: typeof Handle_IGESDefs_HArray1OfTabularData_1;
  Handle_IGESDefs_HArray1OfTabularData_2: typeof Handle_IGESDefs_HArray1OfTabularData_2;
  Handle_IGESDefs_HArray1OfTabularData_3: typeof Handle_IGESDefs_HArray1OfTabularData_3;
  Handle_IGESDefs_HArray1OfTabularData_4: typeof Handle_IGESDefs_HArray1OfTabularData_4;
  Handle_IGESAppli_NodalConstraint_1: typeof Handle_IGESAppli_NodalConstraint_1;
  Handle_IGESAppli_NodalConstraint_2: typeof Handle_IGESAppli_NodalConstraint_2;
  Handle_IGESAppli_NodalConstraint_3: typeof Handle_IGESAppli_NodalConstraint_3;
  Handle_IGESAppli_NodalConstraint_4: typeof Handle_IGESAppli_NodalConstraint_4;
  Handle_IGESGraph_TextFontDef_1: typeof Handle_IGESGraph_TextFontDef_1;
  Handle_IGESGraph_TextFontDef_2: typeof Handle_IGESGraph_TextFontDef_2;
  Handle_IGESGraph_TextFontDef_3: typeof Handle_IGESGraph_TextFontDef_3;
  Handle_IGESGraph_TextFontDef_4: typeof Handle_IGESGraph_TextFontDef_4;
  Handle_IGESGraph_HArray1OfTextFontDef_1: typeof Handle_IGESGraph_HArray1OfTextFontDef_1;
  Handle_IGESGraph_HArray1OfTextFontDef_2: typeof Handle_IGESGraph_HArray1OfTextFontDef_2;
  Handle_IGESGraph_HArray1OfTextFontDef_3: typeof Handle_IGESGraph_HArray1OfTextFontDef_3;
  Handle_IGESGraph_HArray1OfTextFontDef_4: typeof Handle_IGESGraph_HArray1OfTextFontDef_4;
  Handle_IGESDimen_GeneralNote_1: typeof Handle_IGESDimen_GeneralNote_1;
  Handle_IGESDimen_GeneralNote_2: typeof Handle_IGESDimen_GeneralNote_2;
  Handle_IGESDimen_GeneralNote_3: typeof Handle_IGESDimen_GeneralNote_3;
  Handle_IGESDimen_GeneralNote_4: typeof Handle_IGESDimen_GeneralNote_4;
  Handle_IGESDimen_HArray1OfGeneralNote_1: typeof Handle_IGESDimen_HArray1OfGeneralNote_1;
  Handle_IGESDimen_HArray1OfGeneralNote_2: typeof Handle_IGESDimen_HArray1OfGeneralNote_2;
  Handle_IGESDimen_HArray1OfGeneralNote_3: typeof Handle_IGESDimen_HArray1OfGeneralNote_3;
  Handle_IGESDimen_HArray1OfGeneralNote_4: typeof Handle_IGESDimen_HArray1OfGeneralNote_4;
  Handle_IGESAppli_NodalDisplAndRot_1: typeof Handle_IGESAppli_NodalDisplAndRot_1;
  Handle_IGESAppli_NodalDisplAndRot_2: typeof Handle_IGESAppli_NodalDisplAndRot_2;
  Handle_IGESAppli_NodalDisplAndRot_3: typeof Handle_IGESAppli_NodalDisplAndRot_3;
  Handle_IGESAppli_NodalDisplAndRot_4: typeof Handle_IGESAppli_NodalDisplAndRot_4;
  Handle_IGESAppli_NodalResults_1: typeof Handle_IGESAppli_NodalResults_1;
  Handle_IGESAppli_NodalResults_2: typeof Handle_IGESAppli_NodalResults_2;
  Handle_IGESAppli_NodalResults_3: typeof Handle_IGESAppli_NodalResults_3;
  Handle_IGESAppli_NodalResults_4: typeof Handle_IGESAppli_NodalResults_4;
  Handle_IGESAppli_PWBArtworkStackup_1: typeof Handle_IGESAppli_PWBArtworkStackup_1;
  Handle_IGESAppli_PWBArtworkStackup_2: typeof Handle_IGESAppli_PWBArtworkStackup_2;
  Handle_IGESAppli_PWBArtworkStackup_3: typeof Handle_IGESAppli_PWBArtworkStackup_3;
  Handle_IGESAppli_PWBArtworkStackup_4: typeof Handle_IGESAppli_PWBArtworkStackup_4;
  Handle_IGESAppli_PWBDrilledHole_1: typeof Handle_IGESAppli_PWBDrilledHole_1;
  Handle_IGESAppli_PWBDrilledHole_2: typeof Handle_IGESAppli_PWBDrilledHole_2;
  Handle_IGESAppli_PWBDrilledHole_3: typeof Handle_IGESAppli_PWBDrilledHole_3;
  Handle_IGESAppli_PWBDrilledHole_4: typeof Handle_IGESAppli_PWBDrilledHole_4;
  Handle_IGESAppli_PartNumber_1: typeof Handle_IGESAppli_PartNumber_1;
  Handle_IGESAppli_PartNumber_2: typeof Handle_IGESAppli_PartNumber_2;
  Handle_IGESAppli_PartNumber_3: typeof Handle_IGESAppli_PartNumber_3;
  Handle_IGESAppli_PartNumber_4: typeof Handle_IGESAppli_PartNumber_4;
  Handle_IGESAppli_PinNumber_1: typeof Handle_IGESAppli_PinNumber_1;
  Handle_IGESAppli_PinNumber_2: typeof Handle_IGESAppli_PinNumber_2;
  Handle_IGESAppli_PinNumber_3: typeof Handle_IGESAppli_PinNumber_3;
  Handle_IGESAppli_PinNumber_4: typeof Handle_IGESAppli_PinNumber_4;
  Handle_IGESAppli_PipingFlow_1: typeof Handle_IGESAppli_PipingFlow_1;
  Handle_IGESAppli_PipingFlow_2: typeof Handle_IGESAppli_PipingFlow_2;
  Handle_IGESAppli_PipingFlow_3: typeof Handle_IGESAppli_PipingFlow_3;
  Handle_IGESAppli_PipingFlow_4: typeof Handle_IGESAppli_PipingFlow_4;
  Handle_IGESData_Protocol_1: typeof Handle_IGESData_Protocol_1;
  Handle_IGESData_Protocol_2: typeof Handle_IGESData_Protocol_2;
  Handle_IGESData_Protocol_3: typeof Handle_IGESData_Protocol_3;
  Handle_IGESData_Protocol_4: typeof Handle_IGESData_Protocol_4;
  Handle_IGESAppli_Protocol_1: typeof Handle_IGESAppli_Protocol_1;
  Handle_IGESAppli_Protocol_2: typeof Handle_IGESAppli_Protocol_2;
  Handle_IGESAppli_Protocol_3: typeof Handle_IGESAppli_Protocol_3;
  Handle_IGESAppli_Protocol_4: typeof Handle_IGESAppli_Protocol_4;
  Handle_IGESData_ReadWriteModule_1: typeof Handle_IGESData_ReadWriteModule_1;
  Handle_IGESData_ReadWriteModule_2: typeof Handle_IGESData_ReadWriteModule_2;
  Handle_IGESData_ReadWriteModule_3: typeof Handle_IGESData_ReadWriteModule_3;
  Handle_IGESData_ReadWriteModule_4: typeof Handle_IGESData_ReadWriteModule_4;
  Handle_IGESAppli_ReadWriteModule_1: typeof Handle_IGESAppli_ReadWriteModule_1;
  Handle_IGESAppli_ReadWriteModule_2: typeof Handle_IGESAppli_ReadWriteModule_2;
  Handle_IGESAppli_ReadWriteModule_3: typeof Handle_IGESAppli_ReadWriteModule_3;
  Handle_IGESAppli_ReadWriteModule_4: typeof Handle_IGESAppli_ReadWriteModule_4;
  Handle_IGESAppli_ReferenceDesignator_1: typeof Handle_IGESAppli_ReferenceDesignator_1;
  Handle_IGESAppli_ReferenceDesignator_2: typeof Handle_IGESAppli_ReferenceDesignator_2;
  Handle_IGESAppli_ReferenceDesignator_3: typeof Handle_IGESAppli_ReferenceDesignator_3;
  Handle_IGESAppli_ReferenceDesignator_4: typeof Handle_IGESAppli_ReferenceDesignator_4;
  Handle_IGESAppli_RegionRestriction_1: typeof Handle_IGESAppli_RegionRestriction_1;
  Handle_IGESAppli_RegionRestriction_2: typeof Handle_IGESAppli_RegionRestriction_2;
  Handle_IGESAppli_RegionRestriction_3: typeof Handle_IGESAppli_RegionRestriction_3;
  Handle_IGESAppli_RegionRestriction_4: typeof Handle_IGESAppli_RegionRestriction_4;
  Handle_IGESData_SpecificModule_1: typeof Handle_IGESData_SpecificModule_1;
  Handle_IGESData_SpecificModule_2: typeof Handle_IGESData_SpecificModule_2;
  Handle_IGESData_SpecificModule_3: typeof Handle_IGESData_SpecificModule_3;
  Handle_IGESData_SpecificModule_4: typeof Handle_IGESData_SpecificModule_4;
  Handle_IGESAppli_SpecificModule_1: typeof Handle_IGESAppli_SpecificModule_1;
  Handle_IGESAppli_SpecificModule_2: typeof Handle_IGESAppli_SpecificModule_2;
  Handle_IGESAppli_SpecificModule_3: typeof Handle_IGESAppli_SpecificModule_3;
  Handle_IGESAppli_SpecificModule_4: typeof Handle_IGESAppli_SpecificModule_4;
  Handle_IGESData_LineFontEntity_1: typeof Handle_IGESData_LineFontEntity_1;
  Handle_IGESData_LineFontEntity_2: typeof Handle_IGESData_LineFontEntity_2;
  Handle_IGESData_LineFontEntity_3: typeof Handle_IGESData_LineFontEntity_3;
  Handle_IGESData_LineFontEntity_4: typeof Handle_IGESData_LineFontEntity_4;
  Handle_IGESBasic_AssocGroupType_1: typeof Handle_IGESBasic_AssocGroupType_1;
  Handle_IGESBasic_AssocGroupType_2: typeof Handle_IGESBasic_AssocGroupType_2;
  Handle_IGESBasic_AssocGroupType_3: typeof Handle_IGESBasic_AssocGroupType_3;
  Handle_IGESBasic_AssocGroupType_4: typeof Handle_IGESBasic_AssocGroupType_4;
  Handle_IGESBasic_ExternalRefFile_1: typeof Handle_IGESBasic_ExternalRefFile_1;
  Handle_IGESBasic_ExternalRefFile_2: typeof Handle_IGESBasic_ExternalRefFile_2;
  Handle_IGESBasic_ExternalRefFile_3: typeof Handle_IGESBasic_ExternalRefFile_3;
  Handle_IGESBasic_ExternalRefFile_4: typeof Handle_IGESBasic_ExternalRefFile_4;
  Handle_IGESBasic_ExternalRefFileIndex_1: typeof Handle_IGESBasic_ExternalRefFileIndex_1;
  Handle_IGESBasic_ExternalRefFileIndex_2: typeof Handle_IGESBasic_ExternalRefFileIndex_2;
  Handle_IGESBasic_ExternalRefFileIndex_3: typeof Handle_IGESBasic_ExternalRefFileIndex_3;
  Handle_IGESBasic_ExternalRefFileIndex_4: typeof Handle_IGESBasic_ExternalRefFileIndex_4;
  Handle_IGESBasic_ExternalRefFileName_1: typeof Handle_IGESBasic_ExternalRefFileName_1;
  Handle_IGESBasic_ExternalRefFileName_2: typeof Handle_IGESBasic_ExternalRefFileName_2;
  Handle_IGESBasic_ExternalRefFileName_3: typeof Handle_IGESBasic_ExternalRefFileName_3;
  Handle_IGESBasic_ExternalRefFileName_4: typeof Handle_IGESBasic_ExternalRefFileName_4;
  Handle_IGESBasic_ExternalRefLibName_1: typeof Handle_IGESBasic_ExternalRefLibName_1;
  Handle_IGESBasic_ExternalRefLibName_2: typeof Handle_IGESBasic_ExternalRefLibName_2;
  Handle_IGESBasic_ExternalRefLibName_3: typeof Handle_IGESBasic_ExternalRefLibName_3;
  Handle_IGESBasic_ExternalRefLibName_4: typeof Handle_IGESBasic_ExternalRefLibName_4;
  Handle_IGESBasic_ExternalRefName_1: typeof Handle_IGESBasic_ExternalRefName_1;
  Handle_IGESBasic_ExternalRefName_2: typeof Handle_IGESBasic_ExternalRefName_2;
  Handle_IGESBasic_ExternalRefName_3: typeof Handle_IGESBasic_ExternalRefName_3;
  Handle_IGESBasic_ExternalRefName_4: typeof Handle_IGESBasic_ExternalRefName_4;
  Handle_IGESBasic_ExternalReferenceFile_1: typeof Handle_IGESBasic_ExternalReferenceFile_1;
  Handle_IGESBasic_ExternalReferenceFile_2: typeof Handle_IGESBasic_ExternalReferenceFile_2;
  Handle_IGESBasic_ExternalReferenceFile_3: typeof Handle_IGESBasic_ExternalReferenceFile_3;
  Handle_IGESBasic_ExternalReferenceFile_4: typeof Handle_IGESBasic_ExternalReferenceFile_4;
  Handle_IGESBasic_GeneralModule_1: typeof Handle_IGESBasic_GeneralModule_1;
  Handle_IGESBasic_GeneralModule_2: typeof Handle_IGESBasic_GeneralModule_2;
  Handle_IGESBasic_GeneralModule_3: typeof Handle_IGESBasic_GeneralModule_3;
  Handle_IGESBasic_GeneralModule_4: typeof Handle_IGESBasic_GeneralModule_4;
  Handle_IGESBasic_Group_1: typeof Handle_IGESBasic_Group_1;
  Handle_IGESBasic_Group_2: typeof Handle_IGESBasic_Group_2;
  Handle_IGESBasic_Group_3: typeof Handle_IGESBasic_Group_3;
  Handle_IGESBasic_Group_4: typeof Handle_IGESBasic_Group_4;
  Handle_IGESBasic_GroupWithoutBackP_1: typeof Handle_IGESBasic_GroupWithoutBackP_1;
  Handle_IGESBasic_GroupWithoutBackP_2: typeof Handle_IGESBasic_GroupWithoutBackP_2;
  Handle_IGESBasic_GroupWithoutBackP_3: typeof Handle_IGESBasic_GroupWithoutBackP_3;
  Handle_IGESBasic_GroupWithoutBackP_4: typeof Handle_IGESBasic_GroupWithoutBackP_4;
  Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_1: typeof Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_1;
  Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_2: typeof Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_2;
  Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_3: typeof Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_3;
  Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_4: typeof Handle_IGESBasic_HArray1OfHArray1OfIGESEntity_4;
  Handle_IGESBasic_HArray1OfHArray1OfInteger_1: typeof Handle_IGESBasic_HArray1OfHArray1OfInteger_1;
  Handle_IGESBasic_HArray1OfHArray1OfInteger_2: typeof Handle_IGESBasic_HArray1OfHArray1OfInteger_2;
  Handle_IGESBasic_HArray1OfHArray1OfInteger_3: typeof Handle_IGESBasic_HArray1OfHArray1OfInteger_3;
  Handle_IGESBasic_HArray1OfHArray1OfInteger_4: typeof Handle_IGESBasic_HArray1OfHArray1OfInteger_4;
  Handle_IGESBasic_HArray1OfHArray1OfReal_1: typeof Handle_IGESBasic_HArray1OfHArray1OfReal_1;
  Handle_IGESBasic_HArray1OfHArray1OfReal_2: typeof Handle_IGESBasic_HArray1OfHArray1OfReal_2;
  Handle_IGESBasic_HArray1OfHArray1OfReal_3: typeof Handle_IGESBasic_HArray1OfHArray1OfReal_3;
  Handle_IGESBasic_HArray1OfHArray1OfReal_4: typeof Handle_IGESBasic_HArray1OfHArray1OfReal_4;
  Handle_IGESBasic_HArray1OfHArray1OfXY_1: typeof Handle_IGESBasic_HArray1OfHArray1OfXY_1;
  Handle_IGESBasic_HArray1OfHArray1OfXY_2: typeof Handle_IGESBasic_HArray1OfHArray1OfXY_2;
  Handle_IGESBasic_HArray1OfHArray1OfXY_3: typeof Handle_IGESBasic_HArray1OfHArray1OfXY_3;
  Handle_IGESBasic_HArray1OfHArray1OfXY_4: typeof Handle_IGESBasic_HArray1OfHArray1OfXY_4;
  Handle_IGESBasic_HArray1OfHArray1OfXYZ_1: typeof Handle_IGESBasic_HArray1OfHArray1OfXYZ_1;
  Handle_IGESBasic_HArray1OfHArray1OfXYZ_2: typeof Handle_IGESBasic_HArray1OfHArray1OfXYZ_2;
  Handle_IGESBasic_HArray1OfHArray1OfXYZ_3: typeof Handle_IGESBasic_HArray1OfHArray1OfXYZ_3;
  Handle_IGESBasic_HArray1OfHArray1OfXYZ_4: typeof Handle_IGESBasic_HArray1OfHArray1OfXYZ_4;
  Handle_IGESBasic_HArray1OfLineFontEntity_1: typeof Handle_IGESBasic_HArray1OfLineFontEntity_1;
  Handle_IGESBasic_HArray1OfLineFontEntity_2: typeof Handle_IGESBasic_HArray1OfLineFontEntity_2;
  Handle_IGESBasic_HArray1OfLineFontEntity_3: typeof Handle_IGESBasic_HArray1OfLineFontEntity_3;
  Handle_IGESBasic_HArray1OfLineFontEntity_4: typeof Handle_IGESBasic_HArray1OfLineFontEntity_4;
  Handle_IGESBasic_HArray2OfHArray1OfReal_1: typeof Handle_IGESBasic_HArray2OfHArray1OfReal_1;
  Handle_IGESBasic_HArray2OfHArray1OfReal_2: typeof Handle_IGESBasic_HArray2OfHArray1OfReal_2;
  Handle_IGESBasic_HArray2OfHArray1OfReal_3: typeof Handle_IGESBasic_HArray2OfHArray1OfReal_3;
  Handle_IGESBasic_HArray2OfHArray1OfReal_4: typeof Handle_IGESBasic_HArray2OfHArray1OfReal_4;
  Handle_IGESBasic_Hierarchy_1: typeof Handle_IGESBasic_Hierarchy_1;
  Handle_IGESBasic_Hierarchy_2: typeof Handle_IGESBasic_Hierarchy_2;
  Handle_IGESBasic_Hierarchy_3: typeof Handle_IGESBasic_Hierarchy_3;
  Handle_IGESBasic_Hierarchy_4: typeof Handle_IGESBasic_Hierarchy_4;
  Handle_IGESData_NameEntity_1: typeof Handle_IGESData_NameEntity_1;
  Handle_IGESData_NameEntity_2: typeof Handle_IGESData_NameEntity_2;
  Handle_IGESData_NameEntity_3: typeof Handle_IGESData_NameEntity_3;
  Handle_IGESData_NameEntity_4: typeof Handle_IGESData_NameEntity_4;
  Handle_IGESBasic_Name_1: typeof Handle_IGESBasic_Name_1;
  Handle_IGESBasic_Name_2: typeof Handle_IGESBasic_Name_2;
  Handle_IGESBasic_Name_3: typeof Handle_IGESBasic_Name_3;
  Handle_IGESBasic_Name_4: typeof Handle_IGESBasic_Name_4;
  Handle_IGESBasic_OrderedGroup_1: typeof Handle_IGESBasic_OrderedGroup_1;
  Handle_IGESBasic_OrderedGroup_2: typeof Handle_IGESBasic_OrderedGroup_2;
  Handle_IGESBasic_OrderedGroup_3: typeof Handle_IGESBasic_OrderedGroup_3;
  Handle_IGESBasic_OrderedGroup_4: typeof Handle_IGESBasic_OrderedGroup_4;
  Handle_IGESBasic_OrderedGroupWithoutBackP_1: typeof Handle_IGESBasic_OrderedGroupWithoutBackP_1;
  Handle_IGESBasic_OrderedGroupWithoutBackP_2: typeof Handle_IGESBasic_OrderedGroupWithoutBackP_2;
  Handle_IGESBasic_OrderedGroupWithoutBackP_3: typeof Handle_IGESBasic_OrderedGroupWithoutBackP_3;
  Handle_IGESBasic_OrderedGroupWithoutBackP_4: typeof Handle_IGESBasic_OrderedGroupWithoutBackP_4;
  Handle_IGESBasic_Protocol_1: typeof Handle_IGESBasic_Protocol_1;
  Handle_IGESBasic_Protocol_2: typeof Handle_IGESBasic_Protocol_2;
  Handle_IGESBasic_Protocol_3: typeof Handle_IGESBasic_Protocol_3;
  Handle_IGESBasic_Protocol_4: typeof Handle_IGESBasic_Protocol_4;
  Handle_IGESBasic_ReadWriteModule_1: typeof Handle_IGESBasic_ReadWriteModule_1;
  Handle_IGESBasic_ReadWriteModule_2: typeof Handle_IGESBasic_ReadWriteModule_2;
  Handle_IGESBasic_ReadWriteModule_3: typeof Handle_IGESBasic_ReadWriteModule_3;
  Handle_IGESBasic_ReadWriteModule_4: typeof Handle_IGESBasic_ReadWriteModule_4;
  Handle_IGESData_SingleParentEntity_1: typeof Handle_IGESData_SingleParentEntity_1;
  Handle_IGESData_SingleParentEntity_2: typeof Handle_IGESData_SingleParentEntity_2;
  Handle_IGESData_SingleParentEntity_3: typeof Handle_IGESData_SingleParentEntity_3;
  Handle_IGESData_SingleParentEntity_4: typeof Handle_IGESData_SingleParentEntity_4;
  Handle_IGESBasic_SingleParent_1: typeof Handle_IGESBasic_SingleParent_1;
  Handle_IGESBasic_SingleParent_2: typeof Handle_IGESBasic_SingleParent_2;
  Handle_IGESBasic_SingleParent_3: typeof Handle_IGESBasic_SingleParent_3;
  Handle_IGESBasic_SingleParent_4: typeof Handle_IGESBasic_SingleParent_4;
  Handle_IGESBasic_SingularSubfigure_1: typeof Handle_IGESBasic_SingularSubfigure_1;
  Handle_IGESBasic_SingularSubfigure_2: typeof Handle_IGESBasic_SingularSubfigure_2;
  Handle_IGESBasic_SingularSubfigure_3: typeof Handle_IGESBasic_SingularSubfigure_3;
  Handle_IGESBasic_SingularSubfigure_4: typeof Handle_IGESBasic_SingularSubfigure_4;
  Handle_IGESBasic_SpecificModule_1: typeof Handle_IGESBasic_SpecificModule_1;
  Handle_IGESBasic_SpecificModule_2: typeof Handle_IGESBasic_SpecificModule_2;
  Handle_IGESBasic_SpecificModule_3: typeof Handle_IGESBasic_SpecificModule_3;
  Handle_IGESBasic_SpecificModule_4: typeof Handle_IGESBasic_SpecificModule_4;
  Handle_IGESBasic_SubfigureDef_1: typeof Handle_IGESBasic_SubfigureDef_1;
  Handle_IGESBasic_SubfigureDef_2: typeof Handle_IGESBasic_SubfigureDef_2;
  Handle_IGESBasic_SubfigureDef_3: typeof Handle_IGESBasic_SubfigureDef_3;
  Handle_IGESBasic_SubfigureDef_4: typeof Handle_IGESBasic_SubfigureDef_4;
  Handle_IGESControl_ActorWrite_1: typeof Handle_IGESControl_ActorWrite_1;
  Handle_IGESControl_ActorWrite_2: typeof Handle_IGESControl_ActorWrite_2;
  Handle_IGESControl_ActorWrite_3: typeof Handle_IGESControl_ActorWrite_3;
  Handle_IGESControl_ActorWrite_4: typeof Handle_IGESControl_ActorWrite_4;
  Handle_IGESToBRep_AlgoContainer_1: typeof Handle_IGESToBRep_AlgoContainer_1;
  Handle_IGESToBRep_AlgoContainer_2: typeof Handle_IGESToBRep_AlgoContainer_2;
  Handle_IGESToBRep_AlgoContainer_3: typeof Handle_IGESToBRep_AlgoContainer_3;
  Handle_IGESToBRep_AlgoContainer_4: typeof Handle_IGESToBRep_AlgoContainer_4;
  Handle_IGESControl_AlgoContainer_1: typeof Handle_IGESControl_AlgoContainer_1;
  Handle_IGESControl_AlgoContainer_2: typeof Handle_IGESControl_AlgoContainer_2;
  Handle_IGESControl_AlgoContainer_3: typeof Handle_IGESControl_AlgoContainer_3;
  Handle_IGESControl_AlgoContainer_4: typeof Handle_IGESControl_AlgoContainer_4;
  Handle_IGESControl_Controller_1: typeof Handle_IGESControl_Controller_1;
  Handle_IGESControl_Controller_2: typeof Handle_IGESControl_Controller_2;
  Handle_IGESControl_Controller_3: typeof Handle_IGESControl_Controller_3;
  Handle_IGESControl_Controller_4: typeof Handle_IGESControl_Controller_4;
  Handle_IGESToBRep_IGESBoundary_1: typeof Handle_IGESToBRep_IGESBoundary_1;
  Handle_IGESToBRep_IGESBoundary_2: typeof Handle_IGESToBRep_IGESBoundary_2;
  Handle_IGESToBRep_IGESBoundary_3: typeof Handle_IGESToBRep_IGESBoundary_3;
  Handle_IGESToBRep_IGESBoundary_4: typeof Handle_IGESToBRep_IGESBoundary_4;
  Handle_IGESControl_IGESBoundary_1: typeof Handle_IGESControl_IGESBoundary_1;
  Handle_IGESControl_IGESBoundary_2: typeof Handle_IGESControl_IGESBoundary_2;
  Handle_IGESControl_IGESBoundary_3: typeof Handle_IGESControl_IGESBoundary_3;
  Handle_IGESControl_IGESBoundary_4: typeof Handle_IGESControl_IGESBoundary_4;
  Handle_IGESToBRep_ToolContainer_1: typeof Handle_IGESToBRep_ToolContainer_1;
  Handle_IGESToBRep_ToolContainer_2: typeof Handle_IGESToBRep_ToolContainer_2;
  Handle_IGESToBRep_ToolContainer_3: typeof Handle_IGESToBRep_ToolContainer_3;
  Handle_IGESToBRep_ToolContainer_4: typeof Handle_IGESToBRep_ToolContainer_4;
  Handle_IGESControl_ToolContainer_1: typeof Handle_IGESControl_ToolContainer_1;
  Handle_IGESControl_ToolContainer_2: typeof Handle_IGESControl_ToolContainer_2;
  Handle_IGESControl_ToolContainer_3: typeof Handle_IGESControl_ToolContainer_3;
  Handle_IGESControl_ToolContainer_4: typeof Handle_IGESControl_ToolContainer_4;
  IGESData_Array1OfDirPart_1: typeof IGESData_Array1OfDirPart_1;
  IGESData_Array1OfDirPart_2: typeof IGESData_Array1OfDirPart_2;
  IGESData_Array1OfDirPart_3: typeof IGESData_Array1OfDirPart_3;
  IGESData_Array1OfDirPart_4: typeof IGESData_Array1OfDirPart_4;
  IGESData_Array1OfDirPart_5: typeof IGESData_Array1OfDirPart_5;
  Handle_IGESData_ColorEntity_1: typeof Handle_IGESData_ColorEntity_1;
  Handle_IGESData_ColorEntity_2: typeof Handle_IGESData_ColorEntity_2;
  Handle_IGESData_ColorEntity_3: typeof Handle_IGESData_ColorEntity_3;
  Handle_IGESData_ColorEntity_4: typeof Handle_IGESData_ColorEntity_4;
  Handle_IGESData_DefaultGeneral_1: typeof Handle_IGESData_DefaultGeneral_1;
  Handle_IGESData_DefaultGeneral_2: typeof Handle_IGESData_DefaultGeneral_2;
  Handle_IGESData_DefaultGeneral_3: typeof Handle_IGESData_DefaultGeneral_3;
  Handle_IGESData_DefaultGeneral_4: typeof Handle_IGESData_DefaultGeneral_4;
  Handle_IGESData_DefaultSpecific_1: typeof Handle_IGESData_DefaultSpecific_1;
  Handle_IGESData_DefaultSpecific_2: typeof Handle_IGESData_DefaultSpecific_2;
  Handle_IGESData_DefaultSpecific_3: typeof Handle_IGESData_DefaultSpecific_3;
  Handle_IGESData_DefaultSpecific_4: typeof Handle_IGESData_DefaultSpecific_4;
  Handle_IGESData_FileProtocol_1: typeof Handle_IGESData_FileProtocol_1;
  Handle_IGESData_FileProtocol_2: typeof Handle_IGESData_FileProtocol_2;
  Handle_IGESData_FileProtocol_3: typeof Handle_IGESData_FileProtocol_3;
  Handle_IGESData_FileProtocol_4: typeof Handle_IGESData_FileProtocol_4;
  Handle_IGESData_FileRecognizer_1: typeof Handle_IGESData_FileRecognizer_1;
  Handle_IGESData_FileRecognizer_2: typeof Handle_IGESData_FileRecognizer_2;
  Handle_IGESData_FileRecognizer_3: typeof Handle_IGESData_FileRecognizer_3;
  Handle_IGESData_FileRecognizer_4: typeof Handle_IGESData_FileRecognizer_4;
  Handle_IGESData_UndefinedEntity_1: typeof Handle_IGESData_UndefinedEntity_1;
  Handle_IGESData_UndefinedEntity_2: typeof Handle_IGESData_UndefinedEntity_2;
  Handle_IGESData_UndefinedEntity_3: typeof Handle_IGESData_UndefinedEntity_3;
  Handle_IGESData_UndefinedEntity_4: typeof Handle_IGESData_UndefinedEntity_4;
  Handle_IGESData_FreeFormatEntity_1: typeof Handle_IGESData_FreeFormatEntity_1;
  Handle_IGESData_FreeFormatEntity_2: typeof Handle_IGESData_FreeFormatEntity_2;
  Handle_IGESData_FreeFormatEntity_3: typeof Handle_IGESData_FreeFormatEntity_3;
  Handle_IGESData_FreeFormatEntity_4: typeof Handle_IGESData_FreeFormatEntity_4;
  Handle_IGESData_GlobalNodeOfSpecificLib_1: typeof Handle_IGESData_GlobalNodeOfSpecificLib_1;
  Handle_IGESData_GlobalNodeOfSpecificLib_2: typeof Handle_IGESData_GlobalNodeOfSpecificLib_2;
  Handle_IGESData_GlobalNodeOfSpecificLib_3: typeof Handle_IGESData_GlobalNodeOfSpecificLib_3;
  Handle_IGESData_GlobalNodeOfSpecificLib_4: typeof Handle_IGESData_GlobalNodeOfSpecificLib_4;
  Handle_IGESData_GlobalNodeOfWriterLib_1: typeof Handle_IGESData_GlobalNodeOfWriterLib_1;
  Handle_IGESData_GlobalNodeOfWriterLib_2: typeof Handle_IGESData_GlobalNodeOfWriterLib_2;
  Handle_IGESData_GlobalNodeOfWriterLib_3: typeof Handle_IGESData_GlobalNodeOfWriterLib_3;
  Handle_IGESData_GlobalNodeOfWriterLib_4: typeof Handle_IGESData_GlobalNodeOfWriterLib_4;
  Handle_IGESData_IGESModel_1: typeof Handle_IGESData_IGESModel_1;
  Handle_IGESData_IGESModel_2: typeof Handle_IGESData_IGESModel_2;
  Handle_IGESData_IGESModel_3: typeof Handle_IGESData_IGESModel_3;
  Handle_IGESData_IGESModel_4: typeof Handle_IGESData_IGESModel_4;
  Handle_IGESData_IGESReaderData_1: typeof Handle_IGESData_IGESReaderData_1;
  Handle_IGESData_IGESReaderData_2: typeof Handle_IGESData_IGESReaderData_2;
  Handle_IGESData_IGESReaderData_3: typeof Handle_IGESData_IGESReaderData_3;
  Handle_IGESData_IGESReaderData_4: typeof Handle_IGESData_IGESReaderData_4;
  Handle_IGESData_LabelDisplayEntity_1: typeof Handle_IGESData_LabelDisplayEntity_1;
  Handle_IGESData_LabelDisplayEntity_2: typeof Handle_IGESData_LabelDisplayEntity_2;
  Handle_IGESData_LabelDisplayEntity_3: typeof Handle_IGESData_LabelDisplayEntity_3;
  Handle_IGESData_LabelDisplayEntity_4: typeof Handle_IGESData_LabelDisplayEntity_4;
  Handle_IGESData_LevelListEntity_1: typeof Handle_IGESData_LevelListEntity_1;
  Handle_IGESData_LevelListEntity_2: typeof Handle_IGESData_LevelListEntity_2;
  Handle_IGESData_LevelListEntity_3: typeof Handle_IGESData_LevelListEntity_3;
  Handle_IGESData_LevelListEntity_4: typeof Handle_IGESData_LevelListEntity_4;
  Handle_IGESData_NodeOfSpecificLib_1: typeof Handle_IGESData_NodeOfSpecificLib_1;
  Handle_IGESData_NodeOfSpecificLib_2: typeof Handle_IGESData_NodeOfSpecificLib_2;
  Handle_IGESData_NodeOfSpecificLib_3: typeof Handle_IGESData_NodeOfSpecificLib_3;
  Handle_IGESData_NodeOfSpecificLib_4: typeof Handle_IGESData_NodeOfSpecificLib_4;
  Handle_IGESData_NodeOfWriterLib_1: typeof Handle_IGESData_NodeOfWriterLib_1;
  Handle_IGESData_NodeOfWriterLib_2: typeof Handle_IGESData_NodeOfWriterLib_2;
  Handle_IGESData_NodeOfWriterLib_3: typeof Handle_IGESData_NodeOfWriterLib_3;
  Handle_IGESData_NodeOfWriterLib_4: typeof Handle_IGESData_NodeOfWriterLib_4;
  Handle_IGESData_ToolLocation_1: typeof Handle_IGESData_ToolLocation_1;
  Handle_IGESData_ToolLocation_2: typeof Handle_IGESData_ToolLocation_2;
  Handle_IGESData_ToolLocation_3: typeof Handle_IGESData_ToolLocation_3;
  Handle_IGESData_ToolLocation_4: typeof Handle_IGESData_ToolLocation_4;
  Handle_IGESData_TransfEntity_1: typeof Handle_IGESData_TransfEntity_1;
  Handle_IGESData_TransfEntity_2: typeof Handle_IGESData_TransfEntity_2;
  Handle_IGESData_TransfEntity_3: typeof Handle_IGESData_TransfEntity_3;
  Handle_IGESData_TransfEntity_4: typeof Handle_IGESData_TransfEntity_4;
  Handle_IGESData_ViewKindEntity_1: typeof Handle_IGESData_ViewKindEntity_1;
  Handle_IGESData_ViewKindEntity_2: typeof Handle_IGESData_ViewKindEntity_2;
  Handle_IGESData_ViewKindEntity_3: typeof Handle_IGESData_ViewKindEntity_3;
  Handle_IGESData_ViewKindEntity_4: typeof Handle_IGESData_ViewKindEntity_4;
  Handle_IGESDefs_AssociativityDef_1: typeof Handle_IGESDefs_AssociativityDef_1;
  Handle_IGESDefs_AssociativityDef_2: typeof Handle_IGESDefs_AssociativityDef_2;
  Handle_IGESDefs_AssociativityDef_3: typeof Handle_IGESDefs_AssociativityDef_3;
  Handle_IGESDefs_AssociativityDef_4: typeof Handle_IGESDefs_AssociativityDef_4;
  Handle_IGESDefs_AttributeDef_1: typeof Handle_IGESDefs_AttributeDef_1;
  Handle_IGESDefs_AttributeDef_2: typeof Handle_IGESDefs_AttributeDef_2;
  Handle_IGESDefs_AttributeDef_3: typeof Handle_IGESDefs_AttributeDef_3;
  Handle_IGESDefs_AttributeDef_4: typeof Handle_IGESDefs_AttributeDef_4;
  Handle_IGESDefs_AttributeTable_1: typeof Handle_IGESDefs_AttributeTable_1;
  Handle_IGESDefs_AttributeTable_2: typeof Handle_IGESDefs_AttributeTable_2;
  Handle_IGESDefs_AttributeTable_3: typeof Handle_IGESDefs_AttributeTable_3;
  Handle_IGESDefs_AttributeTable_4: typeof Handle_IGESDefs_AttributeTable_4;
  Handle_IGESDefs_GeneralModule_1: typeof Handle_IGESDefs_GeneralModule_1;
  Handle_IGESDefs_GeneralModule_2: typeof Handle_IGESDefs_GeneralModule_2;
  Handle_IGESDefs_GeneralModule_3: typeof Handle_IGESDefs_GeneralModule_3;
  Handle_IGESDefs_GeneralModule_4: typeof Handle_IGESDefs_GeneralModule_4;
  Handle_IGESDefs_GenericData_1: typeof Handle_IGESDefs_GenericData_1;
  Handle_IGESDefs_GenericData_2: typeof Handle_IGESDefs_GenericData_2;
  Handle_IGESDefs_GenericData_3: typeof Handle_IGESDefs_GenericData_3;
  Handle_IGESDefs_GenericData_4: typeof Handle_IGESDefs_GenericData_4;
  Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_1: typeof Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_1;
  Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_2: typeof Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_2;
  Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_3: typeof Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_3;
  Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_4: typeof Handle_IGESDefs_HArray1OfHArray1OfTextDisplayTemplate_4;
  Handle_IGESDefs_MacroDef_1: typeof Handle_IGESDefs_MacroDef_1;
  Handle_IGESDefs_MacroDef_2: typeof Handle_IGESDefs_MacroDef_2;
  Handle_IGESDefs_MacroDef_3: typeof Handle_IGESDefs_MacroDef_3;
  Handle_IGESDefs_MacroDef_4: typeof Handle_IGESDefs_MacroDef_4;
  Handle_IGESDefs_Protocol_1: typeof Handle_IGESDefs_Protocol_1;
  Handle_IGESDefs_Protocol_2: typeof Handle_IGESDefs_Protocol_2;
  Handle_IGESDefs_Protocol_3: typeof Handle_IGESDefs_Protocol_3;
  Handle_IGESDefs_Protocol_4: typeof Handle_IGESDefs_Protocol_4;
  Handle_IGESDefs_ReadWriteModule_1: typeof Handle_IGESDefs_ReadWriteModule_1;
  Handle_IGESDefs_ReadWriteModule_2: typeof Handle_IGESDefs_ReadWriteModule_2;
  Handle_IGESDefs_ReadWriteModule_3: typeof Handle_IGESDefs_ReadWriteModule_3;
  Handle_IGESDefs_ReadWriteModule_4: typeof Handle_IGESDefs_ReadWriteModule_4;
  Handle_IGESDefs_SpecificModule_1: typeof Handle_IGESDefs_SpecificModule_1;
  Handle_IGESDefs_SpecificModule_2: typeof Handle_IGESDefs_SpecificModule_2;
  Handle_IGESDefs_SpecificModule_3: typeof Handle_IGESDefs_SpecificModule_3;
  Handle_IGESDefs_SpecificModule_4: typeof Handle_IGESDefs_SpecificModule_4;
  Handle_IGESDefs_UnitsData_1: typeof Handle_IGESDefs_UnitsData_1;
  Handle_IGESDefs_UnitsData_2: typeof Handle_IGESDefs_UnitsData_2;
  Handle_IGESDefs_UnitsData_3: typeof Handle_IGESDefs_UnitsData_3;
  Handle_IGESDefs_UnitsData_4: typeof Handle_IGESDefs_UnitsData_4;
  Handle_IGESDimen_AngularDimension_1: typeof Handle_IGESDimen_AngularDimension_1;
  Handle_IGESDimen_AngularDimension_2: typeof Handle_IGESDimen_AngularDimension_2;
  Handle_IGESDimen_AngularDimension_3: typeof Handle_IGESDimen_AngularDimension_3;
  Handle_IGESDimen_AngularDimension_4: typeof Handle_IGESDimen_AngularDimension_4;
  Handle_IGESDimen_LeaderArrow_1: typeof Handle_IGESDimen_LeaderArrow_1;
  Handle_IGESDimen_LeaderArrow_2: typeof Handle_IGESDimen_LeaderArrow_2;
  Handle_IGESDimen_LeaderArrow_3: typeof Handle_IGESDimen_LeaderArrow_3;
  Handle_IGESDimen_LeaderArrow_4: typeof Handle_IGESDimen_LeaderArrow_4;
  Handle_IGESDimen_BasicDimension_1: typeof Handle_IGESDimen_BasicDimension_1;
  Handle_IGESDimen_BasicDimension_2: typeof Handle_IGESDimen_BasicDimension_2;
  Handle_IGESDimen_BasicDimension_3: typeof Handle_IGESDimen_BasicDimension_3;
  Handle_IGESDimen_BasicDimension_4: typeof Handle_IGESDimen_BasicDimension_4;
  Handle_IGESDimen_CenterLine_1: typeof Handle_IGESDimen_CenterLine_1;
  Handle_IGESDimen_CenterLine_2: typeof Handle_IGESDimen_CenterLine_2;
  Handle_IGESDimen_CenterLine_3: typeof Handle_IGESDimen_CenterLine_3;
  Handle_IGESDimen_CenterLine_4: typeof Handle_IGESDimen_CenterLine_4;
  Handle_IGESDimen_CurveDimension_1: typeof Handle_IGESDimen_CurveDimension_1;
  Handle_IGESDimen_CurveDimension_2: typeof Handle_IGESDimen_CurveDimension_2;
  Handle_IGESDimen_CurveDimension_3: typeof Handle_IGESDimen_CurveDimension_3;
  Handle_IGESDimen_CurveDimension_4: typeof Handle_IGESDimen_CurveDimension_4;
  Handle_IGESDimen_DiameterDimension_1: typeof Handle_IGESDimen_DiameterDimension_1;
  Handle_IGESDimen_DiameterDimension_2: typeof Handle_IGESDimen_DiameterDimension_2;
  Handle_IGESDimen_DiameterDimension_3: typeof Handle_IGESDimen_DiameterDimension_3;
  Handle_IGESDimen_DiameterDimension_4: typeof Handle_IGESDimen_DiameterDimension_4;
  Handle_IGESDimen_DimensionDisplayData_1: typeof Handle_IGESDimen_DimensionDisplayData_1;
  Handle_IGESDimen_DimensionDisplayData_2: typeof Handle_IGESDimen_DimensionDisplayData_2;
  Handle_IGESDimen_DimensionDisplayData_3: typeof Handle_IGESDimen_DimensionDisplayData_3;
  Handle_IGESDimen_DimensionDisplayData_4: typeof Handle_IGESDimen_DimensionDisplayData_4;
  Handle_IGESDimen_DimensionTolerance_1: typeof Handle_IGESDimen_DimensionTolerance_1;
  Handle_IGESDimen_DimensionTolerance_2: typeof Handle_IGESDimen_DimensionTolerance_2;
  Handle_IGESDimen_DimensionTolerance_3: typeof Handle_IGESDimen_DimensionTolerance_3;
  Handle_IGESDimen_DimensionTolerance_4: typeof Handle_IGESDimen_DimensionTolerance_4;
  Handle_IGESDimen_DimensionUnits_1: typeof Handle_IGESDimen_DimensionUnits_1;
  Handle_IGESDimen_DimensionUnits_2: typeof Handle_IGESDimen_DimensionUnits_2;
  Handle_IGESDimen_DimensionUnits_3: typeof Handle_IGESDimen_DimensionUnits_3;
  Handle_IGESDimen_DimensionUnits_4: typeof Handle_IGESDimen_DimensionUnits_4;
  Handle_IGESDimen_DimensionedGeometry_1: typeof Handle_IGESDimen_DimensionedGeometry_1;
  Handle_IGESDimen_DimensionedGeometry_2: typeof Handle_IGESDimen_DimensionedGeometry_2;
  Handle_IGESDimen_DimensionedGeometry_3: typeof Handle_IGESDimen_DimensionedGeometry_3;
  Handle_IGESDimen_DimensionedGeometry_4: typeof Handle_IGESDimen_DimensionedGeometry_4;
  Handle_IGESDimen_HArray1OfLeaderArrow_1: typeof Handle_IGESDimen_HArray1OfLeaderArrow_1;
  Handle_IGESDimen_HArray1OfLeaderArrow_2: typeof Handle_IGESDimen_HArray1OfLeaderArrow_2;
  Handle_IGESDimen_HArray1OfLeaderArrow_3: typeof Handle_IGESDimen_HArray1OfLeaderArrow_3;
  Handle_IGESDimen_HArray1OfLeaderArrow_4: typeof Handle_IGESDimen_HArray1OfLeaderArrow_4;
  Handle_IGESDimen_FlagNote_1: typeof Handle_IGESDimen_FlagNote_1;
  Handle_IGESDimen_FlagNote_2: typeof Handle_IGESDimen_FlagNote_2;
  Handle_IGESDimen_FlagNote_3: typeof Handle_IGESDimen_FlagNote_3;
  Handle_IGESDimen_FlagNote_4: typeof Handle_IGESDimen_FlagNote_4;
  Handle_IGESDimen_GeneralLabel_1: typeof Handle_IGESDimen_GeneralLabel_1;
  Handle_IGESDimen_GeneralLabel_2: typeof Handle_IGESDimen_GeneralLabel_2;
  Handle_IGESDimen_GeneralLabel_3: typeof Handle_IGESDimen_GeneralLabel_3;
  Handle_IGESDimen_GeneralLabel_4: typeof Handle_IGESDimen_GeneralLabel_4;
  Handle_IGESDimen_GeneralModule_1: typeof Handle_IGESDimen_GeneralModule_1;
  Handle_IGESDimen_GeneralModule_2: typeof Handle_IGESDimen_GeneralModule_2;
  Handle_IGESDimen_GeneralModule_3: typeof Handle_IGESDimen_GeneralModule_3;
  Handle_IGESDimen_GeneralModule_4: typeof Handle_IGESDimen_GeneralModule_4;
  Handle_IGESDimen_GeneralSymbol_1: typeof Handle_IGESDimen_GeneralSymbol_1;
  Handle_IGESDimen_GeneralSymbol_2: typeof Handle_IGESDimen_GeneralSymbol_2;
  Handle_IGESDimen_GeneralSymbol_3: typeof Handle_IGESDimen_GeneralSymbol_3;
  Handle_IGESDimen_GeneralSymbol_4: typeof Handle_IGESDimen_GeneralSymbol_4;
  Handle_IGESDimen_LinearDimension_1: typeof Handle_IGESDimen_LinearDimension_1;
  Handle_IGESDimen_LinearDimension_2: typeof Handle_IGESDimen_LinearDimension_2;
  Handle_IGESDimen_LinearDimension_3: typeof Handle_IGESDimen_LinearDimension_3;
  Handle_IGESDimen_LinearDimension_4: typeof Handle_IGESDimen_LinearDimension_4;
  Handle_IGESDimen_NewDimensionedGeometry_1: typeof Handle_IGESDimen_NewDimensionedGeometry_1;
  Handle_IGESDimen_NewDimensionedGeometry_2: typeof Handle_IGESDimen_NewDimensionedGeometry_2;
  Handle_IGESDimen_NewDimensionedGeometry_3: typeof Handle_IGESDimen_NewDimensionedGeometry_3;
  Handle_IGESDimen_NewDimensionedGeometry_4: typeof Handle_IGESDimen_NewDimensionedGeometry_4;
  Handle_IGESDimen_NewGeneralNote_1: typeof Handle_IGESDimen_NewGeneralNote_1;
  Handle_IGESDimen_NewGeneralNote_2: typeof Handle_IGESDimen_NewGeneralNote_2;
  Handle_IGESDimen_NewGeneralNote_3: typeof Handle_IGESDimen_NewGeneralNote_3;
  Handle_IGESDimen_NewGeneralNote_4: typeof Handle_IGESDimen_NewGeneralNote_4;
  Handle_IGESDimen_OrdinateDimension_1: typeof Handle_IGESDimen_OrdinateDimension_1;
  Handle_IGESDimen_OrdinateDimension_2: typeof Handle_IGESDimen_OrdinateDimension_2;
  Handle_IGESDimen_OrdinateDimension_3: typeof Handle_IGESDimen_OrdinateDimension_3;
  Handle_IGESDimen_OrdinateDimension_4: typeof Handle_IGESDimen_OrdinateDimension_4;
  Handle_IGESDimen_PointDimension_1: typeof Handle_IGESDimen_PointDimension_1;
  Handle_IGESDimen_PointDimension_2: typeof Handle_IGESDimen_PointDimension_2;
  Handle_IGESDimen_PointDimension_3: typeof Handle_IGESDimen_PointDimension_3;
  Handle_IGESDimen_PointDimension_4: typeof Handle_IGESDimen_PointDimension_4;
  Handle_IGESDimen_Protocol_1: typeof Handle_IGESDimen_Protocol_1;
  Handle_IGESDimen_Protocol_2: typeof Handle_IGESDimen_Protocol_2;
  Handle_IGESDimen_Protocol_3: typeof Handle_IGESDimen_Protocol_3;
  Handle_IGESDimen_Protocol_4: typeof Handle_IGESDimen_Protocol_4;
  Handle_IGESDimen_RadiusDimension_1: typeof Handle_IGESDimen_RadiusDimension_1;
  Handle_IGESDimen_RadiusDimension_2: typeof Handle_IGESDimen_RadiusDimension_2;
  Handle_IGESDimen_RadiusDimension_3: typeof Handle_IGESDimen_RadiusDimension_3;
  Handle_IGESDimen_RadiusDimension_4: typeof Handle_IGESDimen_RadiusDimension_4;
  Handle_IGESDimen_ReadWriteModule_1: typeof Handle_IGESDimen_ReadWriteModule_1;
  Handle_IGESDimen_ReadWriteModule_2: typeof Handle_IGESDimen_ReadWriteModule_2;
  Handle_IGESDimen_ReadWriteModule_3: typeof Handle_IGESDimen_ReadWriteModule_3;
  Handle_IGESDimen_ReadWriteModule_4: typeof Handle_IGESDimen_ReadWriteModule_4;
  Handle_IGESDimen_Section_1: typeof Handle_IGESDimen_Section_1;
  Handle_IGESDimen_Section_2: typeof Handle_IGESDimen_Section_2;
  Handle_IGESDimen_Section_3: typeof Handle_IGESDimen_Section_3;
  Handle_IGESDimen_Section_4: typeof Handle_IGESDimen_Section_4;
  Handle_IGESDimen_SectionedArea_1: typeof Handle_IGESDimen_SectionedArea_1;
  Handle_IGESDimen_SectionedArea_2: typeof Handle_IGESDimen_SectionedArea_2;
  Handle_IGESDimen_SectionedArea_3: typeof Handle_IGESDimen_SectionedArea_3;
  Handle_IGESDimen_SectionedArea_4: typeof Handle_IGESDimen_SectionedArea_4;
  Handle_IGESDimen_SpecificModule_1: typeof Handle_IGESDimen_SpecificModule_1;
  Handle_IGESDimen_SpecificModule_2: typeof Handle_IGESDimen_SpecificModule_2;
  Handle_IGESDimen_SpecificModule_3: typeof Handle_IGESDimen_SpecificModule_3;
  Handle_IGESDimen_SpecificModule_4: typeof Handle_IGESDimen_SpecificModule_4;
  Handle_IGESDimen_WitnessLine_1: typeof Handle_IGESDimen_WitnessLine_1;
  Handle_IGESDimen_WitnessLine_2: typeof Handle_IGESDimen_WitnessLine_2;
  Handle_IGESDimen_WitnessLine_3: typeof Handle_IGESDimen_WitnessLine_3;
  Handle_IGESDimen_WitnessLine_4: typeof Handle_IGESDimen_WitnessLine_4;
  Handle_IGESDraw_CircArraySubfigure_1: typeof Handle_IGESDraw_CircArraySubfigure_1;
  Handle_IGESDraw_CircArraySubfigure_2: typeof Handle_IGESDraw_CircArraySubfigure_2;
  Handle_IGESDraw_CircArraySubfigure_3: typeof Handle_IGESDraw_CircArraySubfigure_3;
  Handle_IGESDraw_CircArraySubfigure_4: typeof Handle_IGESDraw_CircArraySubfigure_4;
  Handle_IGESDraw_HArray1OfViewKindEntity_1: typeof Handle_IGESDraw_HArray1OfViewKindEntity_1;
  Handle_IGESDraw_HArray1OfViewKindEntity_2: typeof Handle_IGESDraw_HArray1OfViewKindEntity_2;
  Handle_IGESDraw_HArray1OfViewKindEntity_3: typeof Handle_IGESDraw_HArray1OfViewKindEntity_3;
  Handle_IGESDraw_HArray1OfViewKindEntity_4: typeof Handle_IGESDraw_HArray1OfViewKindEntity_4;
  Handle_IGESDraw_Drawing_1: typeof Handle_IGESDraw_Drawing_1;
  Handle_IGESDraw_Drawing_2: typeof Handle_IGESDraw_Drawing_2;
  Handle_IGESDraw_Drawing_3: typeof Handle_IGESDraw_Drawing_3;
  Handle_IGESDraw_Drawing_4: typeof Handle_IGESDraw_Drawing_4;
  Handle_IGESDraw_DrawingWithRotation_1: typeof Handle_IGESDraw_DrawingWithRotation_1;
  Handle_IGESDraw_DrawingWithRotation_2: typeof Handle_IGESDraw_DrawingWithRotation_2;
  Handle_IGESDraw_DrawingWithRotation_3: typeof Handle_IGESDraw_DrawingWithRotation_3;
  Handle_IGESDraw_DrawingWithRotation_4: typeof Handle_IGESDraw_DrawingWithRotation_4;
  Handle_IGESDraw_GeneralModule_1: typeof Handle_IGESDraw_GeneralModule_1;
  Handle_IGESDraw_GeneralModule_2: typeof Handle_IGESDraw_GeneralModule_2;
  Handle_IGESDraw_GeneralModule_3: typeof Handle_IGESDraw_GeneralModule_3;
  Handle_IGESDraw_GeneralModule_4: typeof Handle_IGESDraw_GeneralModule_4;
  Handle_IGESDraw_LabelDisplay_1: typeof Handle_IGESDraw_LabelDisplay_1;
  Handle_IGESDraw_LabelDisplay_2: typeof Handle_IGESDraw_LabelDisplay_2;
  Handle_IGESDraw_LabelDisplay_3: typeof Handle_IGESDraw_LabelDisplay_3;
  Handle_IGESDraw_LabelDisplay_4: typeof Handle_IGESDraw_LabelDisplay_4;
  Handle_IGESDraw_NetworkSubfigure_1: typeof Handle_IGESDraw_NetworkSubfigure_1;
  Handle_IGESDraw_NetworkSubfigure_2: typeof Handle_IGESDraw_NetworkSubfigure_2;
  Handle_IGESDraw_NetworkSubfigure_3: typeof Handle_IGESDraw_NetworkSubfigure_3;
  Handle_IGESDraw_NetworkSubfigure_4: typeof Handle_IGESDraw_NetworkSubfigure_4;
  Handle_IGESDraw_NetworkSubfigureDef_1: typeof Handle_IGESDraw_NetworkSubfigureDef_1;
  Handle_IGESDraw_NetworkSubfigureDef_2: typeof Handle_IGESDraw_NetworkSubfigureDef_2;
  Handle_IGESDraw_NetworkSubfigureDef_3: typeof Handle_IGESDraw_NetworkSubfigureDef_3;
  Handle_IGESDraw_NetworkSubfigureDef_4: typeof Handle_IGESDraw_NetworkSubfigureDef_4;
  Handle_IGESDraw_PerspectiveView_1: typeof Handle_IGESDraw_PerspectiveView_1;
  Handle_IGESDraw_PerspectiveView_2: typeof Handle_IGESDraw_PerspectiveView_2;
  Handle_IGESDraw_PerspectiveView_3: typeof Handle_IGESDraw_PerspectiveView_3;
  Handle_IGESDraw_PerspectiveView_4: typeof Handle_IGESDraw_PerspectiveView_4;
  Handle_IGESDraw_Planar_1: typeof Handle_IGESDraw_Planar_1;
  Handle_IGESDraw_Planar_2: typeof Handle_IGESDraw_Planar_2;
  Handle_IGESDraw_Planar_3: typeof Handle_IGESDraw_Planar_3;
  Handle_IGESDraw_Planar_4: typeof Handle_IGESDraw_Planar_4;
  Handle_IGESDraw_Protocol_1: typeof Handle_IGESDraw_Protocol_1;
  Handle_IGESDraw_Protocol_2: typeof Handle_IGESDraw_Protocol_2;
  Handle_IGESDraw_Protocol_3: typeof Handle_IGESDraw_Protocol_3;
  Handle_IGESDraw_Protocol_4: typeof Handle_IGESDraw_Protocol_4;
  Handle_IGESDraw_ReadWriteModule_1: typeof Handle_IGESDraw_ReadWriteModule_1;
  Handle_IGESDraw_ReadWriteModule_2: typeof Handle_IGESDraw_ReadWriteModule_2;
  Handle_IGESDraw_ReadWriteModule_3: typeof Handle_IGESDraw_ReadWriteModule_3;
  Handle_IGESDraw_ReadWriteModule_4: typeof Handle_IGESDraw_ReadWriteModule_4;
  Handle_IGESDraw_RectArraySubfigure_1: typeof Handle_IGESDraw_RectArraySubfigure_1;
  Handle_IGESDraw_RectArraySubfigure_2: typeof Handle_IGESDraw_RectArraySubfigure_2;
  Handle_IGESDraw_RectArraySubfigure_3: typeof Handle_IGESDraw_RectArraySubfigure_3;
  Handle_IGESDraw_RectArraySubfigure_4: typeof Handle_IGESDraw_RectArraySubfigure_4;
  Handle_IGESGraph_Color_1: typeof Handle_IGESGraph_Color_1;
  Handle_IGESGraph_Color_2: typeof Handle_IGESGraph_Color_2;
  Handle_IGESGraph_Color_3: typeof Handle_IGESGraph_Color_3;
  Handle_IGESGraph_Color_4: typeof Handle_IGESGraph_Color_4;
  Handle_IGESGraph_HArray1OfColor_1: typeof Handle_IGESGraph_HArray1OfColor_1;
  Handle_IGESGraph_HArray1OfColor_2: typeof Handle_IGESGraph_HArray1OfColor_2;
  Handle_IGESGraph_HArray1OfColor_3: typeof Handle_IGESGraph_HArray1OfColor_3;
  Handle_IGESGraph_HArray1OfColor_4: typeof Handle_IGESGraph_HArray1OfColor_4;
  Handle_IGESDraw_SegmentedViewsVisible_1: typeof Handle_IGESDraw_SegmentedViewsVisible_1;
  Handle_IGESDraw_SegmentedViewsVisible_2: typeof Handle_IGESDraw_SegmentedViewsVisible_2;
  Handle_IGESDraw_SegmentedViewsVisible_3: typeof Handle_IGESDraw_SegmentedViewsVisible_3;
  Handle_IGESDraw_SegmentedViewsVisible_4: typeof Handle_IGESDraw_SegmentedViewsVisible_4;
  Handle_IGESDraw_SpecificModule_1: typeof Handle_IGESDraw_SpecificModule_1;
  Handle_IGESDraw_SpecificModule_2: typeof Handle_IGESDraw_SpecificModule_2;
  Handle_IGESDraw_SpecificModule_3: typeof Handle_IGESDraw_SpecificModule_3;
  Handle_IGESDraw_SpecificModule_4: typeof Handle_IGESDraw_SpecificModule_4;
  Handle_IGESDraw_View_1: typeof Handle_IGESDraw_View_1;
  Handle_IGESDraw_View_2: typeof Handle_IGESDraw_View_2;
  Handle_IGESDraw_View_3: typeof Handle_IGESDraw_View_3;
  Handle_IGESDraw_View_4: typeof Handle_IGESDraw_View_4;
  Handle_IGESDraw_ViewsVisible_1: typeof Handle_IGESDraw_ViewsVisible_1;
  Handle_IGESDraw_ViewsVisible_2: typeof Handle_IGESDraw_ViewsVisible_2;
  Handle_IGESDraw_ViewsVisible_3: typeof Handle_IGESDraw_ViewsVisible_3;
  Handle_IGESDraw_ViewsVisible_4: typeof Handle_IGESDraw_ViewsVisible_4;
  Handle_IGESDraw_ViewsVisibleWithAttr_1: typeof Handle_IGESDraw_ViewsVisibleWithAttr_1;
  Handle_IGESDraw_ViewsVisibleWithAttr_2: typeof Handle_IGESDraw_ViewsVisibleWithAttr_2;
  Handle_IGESDraw_ViewsVisibleWithAttr_3: typeof Handle_IGESDraw_ViewsVisibleWithAttr_3;
  Handle_IGESDraw_ViewsVisibleWithAttr_4: typeof Handle_IGESDraw_ViewsVisibleWithAttr_4;
  Handle_IGESGeom_Boundary_1: typeof Handle_IGESGeom_Boundary_1;
  Handle_IGESGeom_Boundary_2: typeof Handle_IGESGeom_Boundary_2;
  Handle_IGESGeom_Boundary_3: typeof Handle_IGESGeom_Boundary_3;
  Handle_IGESGeom_Boundary_4: typeof Handle_IGESGeom_Boundary_4;
  Handle_IGESGeom_CurveOnSurface_1: typeof Handle_IGESGeom_CurveOnSurface_1;
  Handle_IGESGeom_CurveOnSurface_2: typeof Handle_IGESGeom_CurveOnSurface_2;
  Handle_IGESGeom_CurveOnSurface_3: typeof Handle_IGESGeom_CurveOnSurface_3;
  Handle_IGESGeom_CurveOnSurface_4: typeof Handle_IGESGeom_CurveOnSurface_4;
  Handle_IGESGeom_TransformationMatrix_1: typeof Handle_IGESGeom_TransformationMatrix_1;
  Handle_IGESGeom_TransformationMatrix_2: typeof Handle_IGESGeom_TransformationMatrix_2;
  Handle_IGESGeom_TransformationMatrix_3: typeof Handle_IGESGeom_TransformationMatrix_3;
  Handle_IGESGeom_TransformationMatrix_4: typeof Handle_IGESGeom_TransformationMatrix_4;
  Handle_IGESGeom_BSplineCurve_1: typeof Handle_IGESGeom_BSplineCurve_1;
  Handle_IGESGeom_BSplineCurve_2: typeof Handle_IGESGeom_BSplineCurve_2;
  Handle_IGESGeom_BSplineCurve_3: typeof Handle_IGESGeom_BSplineCurve_3;
  Handle_IGESGeom_BSplineCurve_4: typeof Handle_IGESGeom_BSplineCurve_4;
  Handle_IGESGeom_BSplineSurface_1: typeof Handle_IGESGeom_BSplineSurface_1;
  Handle_IGESGeom_BSplineSurface_2: typeof Handle_IGESGeom_BSplineSurface_2;
  Handle_IGESGeom_BSplineSurface_3: typeof Handle_IGESGeom_BSplineSurface_3;
  Handle_IGESGeom_BSplineSurface_4: typeof Handle_IGESGeom_BSplineSurface_4;
  Handle_IGESGeom_HArray1OfBoundary_1: typeof Handle_IGESGeom_HArray1OfBoundary_1;
  Handle_IGESGeom_HArray1OfBoundary_2: typeof Handle_IGESGeom_HArray1OfBoundary_2;
  Handle_IGESGeom_HArray1OfBoundary_3: typeof Handle_IGESGeom_HArray1OfBoundary_3;
  Handle_IGESGeom_HArray1OfBoundary_4: typeof Handle_IGESGeom_HArray1OfBoundary_4;
  Handle_IGESGeom_BoundedSurface_1: typeof Handle_IGESGeom_BoundedSurface_1;
  Handle_IGESGeom_BoundedSurface_2: typeof Handle_IGESGeom_BoundedSurface_2;
  Handle_IGESGeom_BoundedSurface_3: typeof Handle_IGESGeom_BoundedSurface_3;
  Handle_IGESGeom_BoundedSurface_4: typeof Handle_IGESGeom_BoundedSurface_4;
  Handle_IGESGeom_CircularArc_1: typeof Handle_IGESGeom_CircularArc_1;
  Handle_IGESGeom_CircularArc_2: typeof Handle_IGESGeom_CircularArc_2;
  Handle_IGESGeom_CircularArc_3: typeof Handle_IGESGeom_CircularArc_3;
  Handle_IGESGeom_CircularArc_4: typeof Handle_IGESGeom_CircularArc_4;
  Handle_IGESGeom_CompositeCurve_1: typeof Handle_IGESGeom_CompositeCurve_1;
  Handle_IGESGeom_CompositeCurve_2: typeof Handle_IGESGeom_CompositeCurve_2;
  Handle_IGESGeom_CompositeCurve_3: typeof Handle_IGESGeom_CompositeCurve_3;
  Handle_IGESGeom_CompositeCurve_4: typeof Handle_IGESGeom_CompositeCurve_4;
  Handle_IGESGeom_ConicArc_1: typeof Handle_IGESGeom_ConicArc_1;
  Handle_IGESGeom_ConicArc_2: typeof Handle_IGESGeom_ConicArc_2;
  Handle_IGESGeom_ConicArc_3: typeof Handle_IGESGeom_ConicArc_3;
  Handle_IGESGeom_ConicArc_4: typeof Handle_IGESGeom_ConicArc_4;
  Handle_IGESGeom_CopiousData_1: typeof Handle_IGESGeom_CopiousData_1;
  Handle_IGESGeom_CopiousData_2: typeof Handle_IGESGeom_CopiousData_2;
  Handle_IGESGeom_CopiousData_3: typeof Handle_IGESGeom_CopiousData_3;
  Handle_IGESGeom_CopiousData_4: typeof Handle_IGESGeom_CopiousData_4;
  Handle_IGESGeom_Direction_1: typeof Handle_IGESGeom_Direction_1;
  Handle_IGESGeom_Direction_2: typeof Handle_IGESGeom_Direction_2;
  Handle_IGESGeom_Direction_3: typeof Handle_IGESGeom_Direction_3;
  Handle_IGESGeom_Direction_4: typeof Handle_IGESGeom_Direction_4;
  Handle_IGESGeom_Flash_1: typeof Handle_IGESGeom_Flash_1;
  Handle_IGESGeom_Flash_2: typeof Handle_IGESGeom_Flash_2;
  Handle_IGESGeom_Flash_3: typeof Handle_IGESGeom_Flash_3;
  Handle_IGESGeom_Flash_4: typeof Handle_IGESGeom_Flash_4;
  Handle_IGESGeom_GeneralModule_1: typeof Handle_IGESGeom_GeneralModule_1;
  Handle_IGESGeom_GeneralModule_2: typeof Handle_IGESGeom_GeneralModule_2;
  Handle_IGESGeom_GeneralModule_3: typeof Handle_IGESGeom_GeneralModule_3;
  Handle_IGESGeom_GeneralModule_4: typeof Handle_IGESGeom_GeneralModule_4;
  Handle_IGESGeom_HArray1OfCurveOnSurface_1: typeof Handle_IGESGeom_HArray1OfCurveOnSurface_1;
  Handle_IGESGeom_HArray1OfCurveOnSurface_2: typeof Handle_IGESGeom_HArray1OfCurveOnSurface_2;
  Handle_IGESGeom_HArray1OfCurveOnSurface_3: typeof Handle_IGESGeom_HArray1OfCurveOnSurface_3;
  Handle_IGESGeom_HArray1OfCurveOnSurface_4: typeof Handle_IGESGeom_HArray1OfCurveOnSurface_4;
  Handle_IGESGeom_HArray1OfTransformationMatrix_1: typeof Handle_IGESGeom_HArray1OfTransformationMatrix_1;
  Handle_IGESGeom_HArray1OfTransformationMatrix_2: typeof Handle_IGESGeom_HArray1OfTransformationMatrix_2;
  Handle_IGESGeom_HArray1OfTransformationMatrix_3: typeof Handle_IGESGeom_HArray1OfTransformationMatrix_3;
  Handle_IGESGeom_HArray1OfTransformationMatrix_4: typeof Handle_IGESGeom_HArray1OfTransformationMatrix_4;
  Handle_IGESGeom_Line_1: typeof Handle_IGESGeom_Line_1;
  Handle_IGESGeom_Line_2: typeof Handle_IGESGeom_Line_2;
  Handle_IGESGeom_Line_3: typeof Handle_IGESGeom_Line_3;
  Handle_IGESGeom_Line_4: typeof Handle_IGESGeom_Line_4;
  Handle_IGESGeom_OffsetCurve_1: typeof Handle_IGESGeom_OffsetCurve_1;
  Handle_IGESGeom_OffsetCurve_2: typeof Handle_IGESGeom_OffsetCurve_2;
  Handle_IGESGeom_OffsetCurve_3: typeof Handle_IGESGeom_OffsetCurve_3;
  Handle_IGESGeom_OffsetCurve_4: typeof Handle_IGESGeom_OffsetCurve_4;
  Handle_IGESGeom_OffsetSurface_1: typeof Handle_IGESGeom_OffsetSurface_1;
  Handle_IGESGeom_OffsetSurface_2: typeof Handle_IGESGeom_OffsetSurface_2;
  Handle_IGESGeom_OffsetSurface_3: typeof Handle_IGESGeom_OffsetSurface_3;
  Handle_IGESGeom_OffsetSurface_4: typeof Handle_IGESGeom_OffsetSurface_4;
  Handle_IGESGeom_Plane_1: typeof Handle_IGESGeom_Plane_1;
  Handle_IGESGeom_Plane_2: typeof Handle_IGESGeom_Plane_2;
  Handle_IGESGeom_Plane_3: typeof Handle_IGESGeom_Plane_3;
  Handle_IGESGeom_Plane_4: typeof Handle_IGESGeom_Plane_4;
  Handle_IGESGeom_Point_1: typeof Handle_IGESGeom_Point_1;
  Handle_IGESGeom_Point_2: typeof Handle_IGESGeom_Point_2;
  Handle_IGESGeom_Point_3: typeof Handle_IGESGeom_Point_3;
  Handle_IGESGeom_Point_4: typeof Handle_IGESGeom_Point_4;
  Handle_IGESGeom_Protocol_1: typeof Handle_IGESGeom_Protocol_1;
  Handle_IGESGeom_Protocol_2: typeof Handle_IGESGeom_Protocol_2;
  Handle_IGESGeom_Protocol_3: typeof Handle_IGESGeom_Protocol_3;
  Handle_IGESGeom_Protocol_4: typeof Handle_IGESGeom_Protocol_4;
  Handle_IGESGeom_ReadWriteModule_1: typeof Handle_IGESGeom_ReadWriteModule_1;
  Handle_IGESGeom_ReadWriteModule_2: typeof Handle_IGESGeom_ReadWriteModule_2;
  Handle_IGESGeom_ReadWriteModule_3: typeof Handle_IGESGeom_ReadWriteModule_3;
  Handle_IGESGeom_ReadWriteModule_4: typeof Handle_IGESGeom_ReadWriteModule_4;
  Handle_IGESGeom_RuledSurface_1: typeof Handle_IGESGeom_RuledSurface_1;
  Handle_IGESGeom_RuledSurface_2: typeof Handle_IGESGeom_RuledSurface_2;
  Handle_IGESGeom_RuledSurface_3: typeof Handle_IGESGeom_RuledSurface_3;
  Handle_IGESGeom_RuledSurface_4: typeof Handle_IGESGeom_RuledSurface_4;
  Handle_IGESGeom_SpecificModule_1: typeof Handle_IGESGeom_SpecificModule_1;
  Handle_IGESGeom_SpecificModule_2: typeof Handle_IGESGeom_SpecificModule_2;
  Handle_IGESGeom_SpecificModule_3: typeof Handle_IGESGeom_SpecificModule_3;
  Handle_IGESGeom_SpecificModule_4: typeof Handle_IGESGeom_SpecificModule_4;
  Handle_IGESGeom_SplineCurve_1: typeof Handle_IGESGeom_SplineCurve_1;
  Handle_IGESGeom_SplineCurve_2: typeof Handle_IGESGeom_SplineCurve_2;
  Handle_IGESGeom_SplineCurve_3: typeof Handle_IGESGeom_SplineCurve_3;
  Handle_IGESGeom_SplineCurve_4: typeof Handle_IGESGeom_SplineCurve_4;
  Handle_IGESGeom_SplineSurface_1: typeof Handle_IGESGeom_SplineSurface_1;
  Handle_IGESGeom_SplineSurface_2: typeof Handle_IGESGeom_SplineSurface_2;
  Handle_IGESGeom_SplineSurface_3: typeof Handle_IGESGeom_SplineSurface_3;
  Handle_IGESGeom_SplineSurface_4: typeof Handle_IGESGeom_SplineSurface_4;
  Handle_IGESGeom_SurfaceOfRevolution_1: typeof Handle_IGESGeom_SurfaceOfRevolution_1;
  Handle_IGESGeom_SurfaceOfRevolution_2: typeof Handle_IGESGeom_SurfaceOfRevolution_2;
  Handle_IGESGeom_SurfaceOfRevolution_3: typeof Handle_IGESGeom_SurfaceOfRevolution_3;
  Handle_IGESGeom_SurfaceOfRevolution_4: typeof Handle_IGESGeom_SurfaceOfRevolution_4;
  Handle_IGESGeom_TabulatedCylinder_1: typeof Handle_IGESGeom_TabulatedCylinder_1;
  Handle_IGESGeom_TabulatedCylinder_2: typeof Handle_IGESGeom_TabulatedCylinder_2;
  Handle_IGESGeom_TabulatedCylinder_3: typeof Handle_IGESGeom_TabulatedCylinder_3;
  Handle_IGESGeom_TabulatedCylinder_4: typeof Handle_IGESGeom_TabulatedCylinder_4;
  Handle_IGESGeom_TrimmedSurface_1: typeof Handle_IGESGeom_TrimmedSurface_1;
  Handle_IGESGeom_TrimmedSurface_2: typeof Handle_IGESGeom_TrimmedSurface_2;
  Handle_IGESGeom_TrimmedSurface_3: typeof Handle_IGESGeom_TrimmedSurface_3;
  Handle_IGESGeom_TrimmedSurface_4: typeof Handle_IGESGeom_TrimmedSurface_4;
  Handle_IGESGraph_DefinitionLevel_1: typeof Handle_IGESGraph_DefinitionLevel_1;
  Handle_IGESGraph_DefinitionLevel_2: typeof Handle_IGESGraph_DefinitionLevel_2;
  Handle_IGESGraph_DefinitionLevel_3: typeof Handle_IGESGraph_DefinitionLevel_3;
  Handle_IGESGraph_DefinitionLevel_4: typeof Handle_IGESGraph_DefinitionLevel_4;
  Handle_IGESGraph_DrawingSize_1: typeof Handle_IGESGraph_DrawingSize_1;
  Handle_IGESGraph_DrawingSize_2: typeof Handle_IGESGraph_DrawingSize_2;
  Handle_IGESGraph_DrawingSize_3: typeof Handle_IGESGraph_DrawingSize_3;
  Handle_IGESGraph_DrawingSize_4: typeof Handle_IGESGraph_DrawingSize_4;
  Handle_IGESGraph_DrawingUnits_1: typeof Handle_IGESGraph_DrawingUnits_1;
  Handle_IGESGraph_DrawingUnits_2: typeof Handle_IGESGraph_DrawingUnits_2;
  Handle_IGESGraph_DrawingUnits_3: typeof Handle_IGESGraph_DrawingUnits_3;
  Handle_IGESGraph_DrawingUnits_4: typeof Handle_IGESGraph_DrawingUnits_4;
  Handle_IGESGraph_GeneralModule_1: typeof Handle_IGESGraph_GeneralModule_1;
  Handle_IGESGraph_GeneralModule_2: typeof Handle_IGESGraph_GeneralModule_2;
  Handle_IGESGraph_GeneralModule_3: typeof Handle_IGESGraph_GeneralModule_3;
  Handle_IGESGraph_GeneralModule_4: typeof Handle_IGESGraph_GeneralModule_4;
  Handle_IGESGraph_HighLight_1: typeof Handle_IGESGraph_HighLight_1;
  Handle_IGESGraph_HighLight_2: typeof Handle_IGESGraph_HighLight_2;
  Handle_IGESGraph_HighLight_3: typeof Handle_IGESGraph_HighLight_3;
  Handle_IGESGraph_HighLight_4: typeof Handle_IGESGraph_HighLight_4;
  Handle_IGESGraph_IntercharacterSpacing_1: typeof Handle_IGESGraph_IntercharacterSpacing_1;
  Handle_IGESGraph_IntercharacterSpacing_2: typeof Handle_IGESGraph_IntercharacterSpacing_2;
  Handle_IGESGraph_IntercharacterSpacing_3: typeof Handle_IGESGraph_IntercharacterSpacing_3;
  Handle_IGESGraph_IntercharacterSpacing_4: typeof Handle_IGESGraph_IntercharacterSpacing_4;
  Handle_IGESGraph_LineFontDefPattern_1: typeof Handle_IGESGraph_LineFontDefPattern_1;
  Handle_IGESGraph_LineFontDefPattern_2: typeof Handle_IGESGraph_LineFontDefPattern_2;
  Handle_IGESGraph_LineFontDefPattern_3: typeof Handle_IGESGraph_LineFontDefPattern_3;
  Handle_IGESGraph_LineFontDefPattern_4: typeof Handle_IGESGraph_LineFontDefPattern_4;
  Handle_IGESGraph_LineFontDefTemplate_1: typeof Handle_IGESGraph_LineFontDefTemplate_1;
  Handle_IGESGraph_LineFontDefTemplate_2: typeof Handle_IGESGraph_LineFontDefTemplate_2;
  Handle_IGESGraph_LineFontDefTemplate_3: typeof Handle_IGESGraph_LineFontDefTemplate_3;
  Handle_IGESGraph_LineFontDefTemplate_4: typeof Handle_IGESGraph_LineFontDefTemplate_4;
  Handle_IGESGraph_LineFontPredefined_1: typeof Handle_IGESGraph_LineFontPredefined_1;
  Handle_IGESGraph_LineFontPredefined_2: typeof Handle_IGESGraph_LineFontPredefined_2;
  Handle_IGESGraph_LineFontPredefined_3: typeof Handle_IGESGraph_LineFontPredefined_3;
  Handle_IGESGraph_LineFontPredefined_4: typeof Handle_IGESGraph_LineFontPredefined_4;
  Handle_IGESGraph_NominalSize_1: typeof Handle_IGESGraph_NominalSize_1;
  Handle_IGESGraph_NominalSize_2: typeof Handle_IGESGraph_NominalSize_2;
  Handle_IGESGraph_NominalSize_3: typeof Handle_IGESGraph_NominalSize_3;
  Handle_IGESGraph_NominalSize_4: typeof Handle_IGESGraph_NominalSize_4;
  Handle_IGESGraph_Pick_1: typeof Handle_IGESGraph_Pick_1;
  Handle_IGESGraph_Pick_2: typeof Handle_IGESGraph_Pick_2;
  Handle_IGESGraph_Pick_3: typeof Handle_IGESGraph_Pick_3;
  Handle_IGESGraph_Pick_4: typeof Handle_IGESGraph_Pick_4;
  Handle_IGESGraph_Protocol_1: typeof Handle_IGESGraph_Protocol_1;
  Handle_IGESGraph_Protocol_2: typeof Handle_IGESGraph_Protocol_2;
  Handle_IGESGraph_Protocol_3: typeof Handle_IGESGraph_Protocol_3;
  Handle_IGESGraph_Protocol_4: typeof Handle_IGESGraph_Protocol_4;
  Handle_IGESGraph_ReadWriteModule_1: typeof Handle_IGESGraph_ReadWriteModule_1;
  Handle_IGESGraph_ReadWriteModule_2: typeof Handle_IGESGraph_ReadWriteModule_2;
  Handle_IGESGraph_ReadWriteModule_3: typeof Handle_IGESGraph_ReadWriteModule_3;
  Handle_IGESGraph_ReadWriteModule_4: typeof Handle_IGESGraph_ReadWriteModule_4;
  Handle_IGESGraph_SpecificModule_1: typeof Handle_IGESGraph_SpecificModule_1;
  Handle_IGESGraph_SpecificModule_2: typeof Handle_IGESGraph_SpecificModule_2;
  Handle_IGESGraph_SpecificModule_3: typeof Handle_IGESGraph_SpecificModule_3;
  Handle_IGESGraph_SpecificModule_4: typeof Handle_IGESGraph_SpecificModule_4;
  Handle_IGESGraph_UniformRectGrid_1: typeof Handle_IGESGraph_UniformRectGrid_1;
  Handle_IGESGraph_UniformRectGrid_2: typeof Handle_IGESGraph_UniformRectGrid_2;
  Handle_IGESGraph_UniformRectGrid_3: typeof Handle_IGESGraph_UniformRectGrid_3;
  Handle_IGESGraph_UniformRectGrid_4: typeof Handle_IGESGraph_UniformRectGrid_4;
  Handle_IGESSelect_Activator_1: typeof Handle_IGESSelect_Activator_1;
  Handle_IGESSelect_Activator_2: typeof Handle_IGESSelect_Activator_2;
  Handle_IGESSelect_Activator_3: typeof Handle_IGESSelect_Activator_3;
  Handle_IGESSelect_Activator_4: typeof Handle_IGESSelect_Activator_4;
  Handle_IGESSelect_FileModifier_1: typeof Handle_IGESSelect_FileModifier_1;
  Handle_IGESSelect_FileModifier_2: typeof Handle_IGESSelect_FileModifier_2;
  Handle_IGESSelect_FileModifier_3: typeof Handle_IGESSelect_FileModifier_3;
  Handle_IGESSelect_FileModifier_4: typeof Handle_IGESSelect_FileModifier_4;
  Handle_IGESSelect_AddFileComment_1: typeof Handle_IGESSelect_AddFileComment_1;
  Handle_IGESSelect_AddFileComment_2: typeof Handle_IGESSelect_AddFileComment_2;
  Handle_IGESSelect_AddFileComment_3: typeof Handle_IGESSelect_AddFileComment_3;
  Handle_IGESSelect_AddFileComment_4: typeof Handle_IGESSelect_AddFileComment_4;
  Handle_IGESSelect_ModelModifier_1: typeof Handle_IGESSelect_ModelModifier_1;
  Handle_IGESSelect_ModelModifier_2: typeof Handle_IGESSelect_ModelModifier_2;
  Handle_IGESSelect_ModelModifier_3: typeof Handle_IGESSelect_ModelModifier_3;
  Handle_IGESSelect_ModelModifier_4: typeof Handle_IGESSelect_ModelModifier_4;
  Handle_IGESSelect_AddGroup_1: typeof Handle_IGESSelect_AddGroup_1;
  Handle_IGESSelect_AddGroup_2: typeof Handle_IGESSelect_AddGroup_2;
  Handle_IGESSelect_AddGroup_3: typeof Handle_IGESSelect_AddGroup_3;
  Handle_IGESSelect_AddGroup_4: typeof Handle_IGESSelect_AddGroup_4;
  Handle_IGESSelect_AutoCorrect_1: typeof Handle_IGESSelect_AutoCorrect_1;
  Handle_IGESSelect_AutoCorrect_2: typeof Handle_IGESSelect_AutoCorrect_2;
  Handle_IGESSelect_AutoCorrect_3: typeof Handle_IGESSelect_AutoCorrect_3;
  Handle_IGESSelect_AutoCorrect_4: typeof Handle_IGESSelect_AutoCorrect_4;
  Handle_IGESSelect_ChangeLevelList_1: typeof Handle_IGESSelect_ChangeLevelList_1;
  Handle_IGESSelect_ChangeLevelList_2: typeof Handle_IGESSelect_ChangeLevelList_2;
  Handle_IGESSelect_ChangeLevelList_3: typeof Handle_IGESSelect_ChangeLevelList_3;
  Handle_IGESSelect_ChangeLevelList_4: typeof Handle_IGESSelect_ChangeLevelList_4;
  Handle_IGESSelect_ChangeLevelNumber_1: typeof Handle_IGESSelect_ChangeLevelNumber_1;
  Handle_IGESSelect_ChangeLevelNumber_2: typeof Handle_IGESSelect_ChangeLevelNumber_2;
  Handle_IGESSelect_ChangeLevelNumber_3: typeof Handle_IGESSelect_ChangeLevelNumber_3;
  Handle_IGESSelect_ChangeLevelNumber_4: typeof Handle_IGESSelect_ChangeLevelNumber_4;
  Handle_IGESSelect_ComputeStatus_1: typeof Handle_IGESSelect_ComputeStatus_1;
  Handle_IGESSelect_ComputeStatus_2: typeof Handle_IGESSelect_ComputeStatus_2;
  Handle_IGESSelect_ComputeStatus_3: typeof Handle_IGESSelect_ComputeStatus_3;
  Handle_IGESSelect_ComputeStatus_4: typeof Handle_IGESSelect_ComputeStatus_4;
  Handle_IGESSelect_CounterOfLevelNumber_1: typeof Handle_IGESSelect_CounterOfLevelNumber_1;
  Handle_IGESSelect_CounterOfLevelNumber_2: typeof Handle_IGESSelect_CounterOfLevelNumber_2;
  Handle_IGESSelect_CounterOfLevelNumber_3: typeof Handle_IGESSelect_CounterOfLevelNumber_3;
  Handle_IGESSelect_CounterOfLevelNumber_4: typeof Handle_IGESSelect_CounterOfLevelNumber_4;
  Handle_IGESSelect_DispPerDrawing_1: typeof Handle_IGESSelect_DispPerDrawing_1;
  Handle_IGESSelect_DispPerDrawing_2: typeof Handle_IGESSelect_DispPerDrawing_2;
  Handle_IGESSelect_DispPerDrawing_3: typeof Handle_IGESSelect_DispPerDrawing_3;
  Handle_IGESSelect_DispPerDrawing_4: typeof Handle_IGESSelect_DispPerDrawing_4;
  Handle_IGESSelect_DispPerSingleView_1: typeof Handle_IGESSelect_DispPerSingleView_1;
  Handle_IGESSelect_DispPerSingleView_2: typeof Handle_IGESSelect_DispPerSingleView_2;
  Handle_IGESSelect_DispPerSingleView_3: typeof Handle_IGESSelect_DispPerSingleView_3;
  Handle_IGESSelect_DispPerSingleView_4: typeof Handle_IGESSelect_DispPerSingleView_4;
  Handle_IGESSelect_Dumper_1: typeof Handle_IGESSelect_Dumper_1;
  Handle_IGESSelect_Dumper_2: typeof Handle_IGESSelect_Dumper_2;
  Handle_IGESSelect_Dumper_3: typeof Handle_IGESSelect_Dumper_3;
  Handle_IGESSelect_Dumper_4: typeof Handle_IGESSelect_Dumper_4;
  Handle_IGESSelect_EditDirPart_1: typeof Handle_IGESSelect_EditDirPart_1;
  Handle_IGESSelect_EditDirPart_2: typeof Handle_IGESSelect_EditDirPart_2;
  Handle_IGESSelect_EditDirPart_3: typeof Handle_IGESSelect_EditDirPart_3;
  Handle_IGESSelect_EditDirPart_4: typeof Handle_IGESSelect_EditDirPart_4;
  Handle_IGESSelect_EditHeader_1: typeof Handle_IGESSelect_EditHeader_1;
  Handle_IGESSelect_EditHeader_2: typeof Handle_IGESSelect_EditHeader_2;
  Handle_IGESSelect_EditHeader_3: typeof Handle_IGESSelect_EditHeader_3;
  Handle_IGESSelect_EditHeader_4: typeof Handle_IGESSelect_EditHeader_4;
  Handle_IGESSelect_FloatFormat_1: typeof Handle_IGESSelect_FloatFormat_1;
  Handle_IGESSelect_FloatFormat_2: typeof Handle_IGESSelect_FloatFormat_2;
  Handle_IGESSelect_FloatFormat_3: typeof Handle_IGESSelect_FloatFormat_3;
  Handle_IGESSelect_FloatFormat_4: typeof Handle_IGESSelect_FloatFormat_4;
  Handle_IGESSelect_IGESName_1: typeof Handle_IGESSelect_IGESName_1;
  Handle_IGESSelect_IGESName_2: typeof Handle_IGESSelect_IGESName_2;
  Handle_IGESSelect_IGESName_3: typeof Handle_IGESSelect_IGESName_3;
  Handle_IGESSelect_IGESName_4: typeof Handle_IGESSelect_IGESName_4;
  Handle_IGESSelect_IGESTypeForm_1: typeof Handle_IGESSelect_IGESTypeForm_1;
  Handle_IGESSelect_IGESTypeForm_2: typeof Handle_IGESSelect_IGESTypeForm_2;
  Handle_IGESSelect_IGESTypeForm_3: typeof Handle_IGESSelect_IGESTypeForm_3;
  Handle_IGESSelect_IGESTypeForm_4: typeof Handle_IGESSelect_IGESTypeForm_4;
  Handle_IGESSelect_RebuildDrawings_1: typeof Handle_IGESSelect_RebuildDrawings_1;
  Handle_IGESSelect_RebuildDrawings_2: typeof Handle_IGESSelect_RebuildDrawings_2;
  Handle_IGESSelect_RebuildDrawings_3: typeof Handle_IGESSelect_RebuildDrawings_3;
  Handle_IGESSelect_RebuildDrawings_4: typeof Handle_IGESSelect_RebuildDrawings_4;
  Handle_IGESSelect_RebuildGroups_1: typeof Handle_IGESSelect_RebuildGroups_1;
  Handle_IGESSelect_RebuildGroups_2: typeof Handle_IGESSelect_RebuildGroups_2;
  Handle_IGESSelect_RebuildGroups_3: typeof Handle_IGESSelect_RebuildGroups_3;
  Handle_IGESSelect_RebuildGroups_4: typeof Handle_IGESSelect_RebuildGroups_4;
  Handle_IGESSelect_RemoveCurves_1: typeof Handle_IGESSelect_RemoveCurves_1;
  Handle_IGESSelect_RemoveCurves_2: typeof Handle_IGESSelect_RemoveCurves_2;
  Handle_IGESSelect_RemoveCurves_3: typeof Handle_IGESSelect_RemoveCurves_3;
  Handle_IGESSelect_RemoveCurves_4: typeof Handle_IGESSelect_RemoveCurves_4;
  Handle_IGESSelect_SelectBasicGeom_1: typeof Handle_IGESSelect_SelectBasicGeom_1;
  Handle_IGESSelect_SelectBasicGeom_2: typeof Handle_IGESSelect_SelectBasicGeom_2;
  Handle_IGESSelect_SelectBasicGeom_3: typeof Handle_IGESSelect_SelectBasicGeom_3;
  Handle_IGESSelect_SelectBasicGeom_4: typeof Handle_IGESSelect_SelectBasicGeom_4;
  Handle_IGESSelect_SelectBypassGroup_1: typeof Handle_IGESSelect_SelectBypassGroup_1;
  Handle_IGESSelect_SelectBypassGroup_2: typeof Handle_IGESSelect_SelectBypassGroup_2;
  Handle_IGESSelect_SelectBypassGroup_3: typeof Handle_IGESSelect_SelectBypassGroup_3;
  Handle_IGESSelect_SelectBypassGroup_4: typeof Handle_IGESSelect_SelectBypassGroup_4;
  Handle_IGESSelect_SelectBypassSubfigure_1: typeof Handle_IGESSelect_SelectBypassSubfigure_1;
  Handle_IGESSelect_SelectBypassSubfigure_2: typeof Handle_IGESSelect_SelectBypassSubfigure_2;
  Handle_IGESSelect_SelectBypassSubfigure_3: typeof Handle_IGESSelect_SelectBypassSubfigure_3;
  Handle_IGESSelect_SelectBypassSubfigure_4: typeof Handle_IGESSelect_SelectBypassSubfigure_4;
  Handle_IGESSelect_SelectDrawingFrom_1: typeof Handle_IGESSelect_SelectDrawingFrom_1;
  Handle_IGESSelect_SelectDrawingFrom_2: typeof Handle_IGESSelect_SelectDrawingFrom_2;
  Handle_IGESSelect_SelectDrawingFrom_3: typeof Handle_IGESSelect_SelectDrawingFrom_3;
  Handle_IGESSelect_SelectDrawingFrom_4: typeof Handle_IGESSelect_SelectDrawingFrom_4;
  Handle_IGESSelect_SelectFaces_1: typeof Handle_IGESSelect_SelectFaces_1;
  Handle_IGESSelect_SelectFaces_2: typeof Handle_IGESSelect_SelectFaces_2;
  Handle_IGESSelect_SelectFaces_3: typeof Handle_IGESSelect_SelectFaces_3;
  Handle_IGESSelect_SelectFaces_4: typeof Handle_IGESSelect_SelectFaces_4;
  Handle_IGESSelect_SelectFromDrawing_1: typeof Handle_IGESSelect_SelectFromDrawing_1;
  Handle_IGESSelect_SelectFromDrawing_2: typeof Handle_IGESSelect_SelectFromDrawing_2;
  Handle_IGESSelect_SelectFromDrawing_3: typeof Handle_IGESSelect_SelectFromDrawing_3;
  Handle_IGESSelect_SelectFromDrawing_4: typeof Handle_IGESSelect_SelectFromDrawing_4;
  Handle_IGESSelect_SelectFromSingleView_1: typeof Handle_IGESSelect_SelectFromSingleView_1;
  Handle_IGESSelect_SelectFromSingleView_2: typeof Handle_IGESSelect_SelectFromSingleView_2;
  Handle_IGESSelect_SelectFromSingleView_3: typeof Handle_IGESSelect_SelectFromSingleView_3;
  Handle_IGESSelect_SelectFromSingleView_4: typeof Handle_IGESSelect_SelectFromSingleView_4;
  Handle_IGESSelect_SelectLevelNumber_1: typeof Handle_IGESSelect_SelectLevelNumber_1;
  Handle_IGESSelect_SelectLevelNumber_2: typeof Handle_IGESSelect_SelectLevelNumber_2;
  Handle_IGESSelect_SelectLevelNumber_3: typeof Handle_IGESSelect_SelectLevelNumber_3;
  Handle_IGESSelect_SelectLevelNumber_4: typeof Handle_IGESSelect_SelectLevelNumber_4;
  Handle_IGESSelect_SelectName_1: typeof Handle_IGESSelect_SelectName_1;
  Handle_IGESSelect_SelectName_2: typeof Handle_IGESSelect_SelectName_2;
  Handle_IGESSelect_SelectName_3: typeof Handle_IGESSelect_SelectName_3;
  Handle_IGESSelect_SelectName_4: typeof Handle_IGESSelect_SelectName_4;
  Handle_IGESSelect_SelectPCurves_1: typeof Handle_IGESSelect_SelectPCurves_1;
  Handle_IGESSelect_SelectPCurves_2: typeof Handle_IGESSelect_SelectPCurves_2;
  Handle_IGESSelect_SelectPCurves_3: typeof Handle_IGESSelect_SelectPCurves_3;
  Handle_IGESSelect_SelectPCurves_4: typeof Handle_IGESSelect_SelectPCurves_4;
  Handle_IGESSelect_SelectSingleViewFrom_1: typeof Handle_IGESSelect_SelectSingleViewFrom_1;
  Handle_IGESSelect_SelectSingleViewFrom_2: typeof Handle_IGESSelect_SelectSingleViewFrom_2;
  Handle_IGESSelect_SelectSingleViewFrom_3: typeof Handle_IGESSelect_SelectSingleViewFrom_3;
  Handle_IGESSelect_SelectSingleViewFrom_4: typeof Handle_IGESSelect_SelectSingleViewFrom_4;
  Handle_IGESSelect_SelectSubordinate_1: typeof Handle_IGESSelect_SelectSubordinate_1;
  Handle_IGESSelect_SelectSubordinate_2: typeof Handle_IGESSelect_SelectSubordinate_2;
  Handle_IGESSelect_SelectSubordinate_3: typeof Handle_IGESSelect_SelectSubordinate_3;
  Handle_IGESSelect_SelectSubordinate_4: typeof Handle_IGESSelect_SelectSubordinate_4;
  Handle_IGESSelect_SelectVisibleStatus_1: typeof Handle_IGESSelect_SelectVisibleStatus_1;
  Handle_IGESSelect_SelectVisibleStatus_2: typeof Handle_IGESSelect_SelectVisibleStatus_2;
  Handle_IGESSelect_SelectVisibleStatus_3: typeof Handle_IGESSelect_SelectVisibleStatus_3;
  Handle_IGESSelect_SelectVisibleStatus_4: typeof Handle_IGESSelect_SelectVisibleStatus_4;
  Handle_IGESSelect_SetGlobalParameter_1: typeof Handle_IGESSelect_SetGlobalParameter_1;
  Handle_IGESSelect_SetGlobalParameter_2: typeof Handle_IGESSelect_SetGlobalParameter_2;
  Handle_IGESSelect_SetGlobalParameter_3: typeof Handle_IGESSelect_SetGlobalParameter_3;
  Handle_IGESSelect_SetGlobalParameter_4: typeof Handle_IGESSelect_SetGlobalParameter_4;
  Handle_IGESSelect_SetLabel_1: typeof Handle_IGESSelect_SetLabel_1;
  Handle_IGESSelect_SetLabel_2: typeof Handle_IGESSelect_SetLabel_2;
  Handle_IGESSelect_SetLabel_3: typeof Handle_IGESSelect_SetLabel_3;
  Handle_IGESSelect_SetLabel_4: typeof Handle_IGESSelect_SetLabel_4;
  Handle_IGESSelect_SetVersion5_1: typeof Handle_IGESSelect_SetVersion5_1;
  Handle_IGESSelect_SetVersion5_2: typeof Handle_IGESSelect_SetVersion5_2;
  Handle_IGESSelect_SetVersion5_3: typeof Handle_IGESSelect_SetVersion5_3;
  Handle_IGESSelect_SetVersion5_4: typeof Handle_IGESSelect_SetVersion5_4;
  Handle_IGESSelect_SignColor_1: typeof Handle_IGESSelect_SignColor_1;
  Handle_IGESSelect_SignColor_2: typeof Handle_IGESSelect_SignColor_2;
  Handle_IGESSelect_SignColor_3: typeof Handle_IGESSelect_SignColor_3;
  Handle_IGESSelect_SignColor_4: typeof Handle_IGESSelect_SignColor_4;
  Handle_IGESSelect_SignLevelNumber_1: typeof Handle_IGESSelect_SignLevelNumber_1;
  Handle_IGESSelect_SignLevelNumber_2: typeof Handle_IGESSelect_SignLevelNumber_2;
  Handle_IGESSelect_SignLevelNumber_3: typeof Handle_IGESSelect_SignLevelNumber_3;
  Handle_IGESSelect_SignLevelNumber_4: typeof Handle_IGESSelect_SignLevelNumber_4;
  Handle_IGESSelect_SignStatus_1: typeof Handle_IGESSelect_SignStatus_1;
  Handle_IGESSelect_SignStatus_2: typeof Handle_IGESSelect_SignStatus_2;
  Handle_IGESSelect_SignStatus_3: typeof Handle_IGESSelect_SignStatus_3;
  Handle_IGESSelect_SignStatus_4: typeof Handle_IGESSelect_SignStatus_4;
  Handle_IGESSelect_SplineToBSpline_1: typeof Handle_IGESSelect_SplineToBSpline_1;
  Handle_IGESSelect_SplineToBSpline_2: typeof Handle_IGESSelect_SplineToBSpline_2;
  Handle_IGESSelect_SplineToBSpline_3: typeof Handle_IGESSelect_SplineToBSpline_3;
  Handle_IGESSelect_SplineToBSpline_4: typeof Handle_IGESSelect_SplineToBSpline_4;
  Handle_IGESSelect_UpdateCreationDate_1: typeof Handle_IGESSelect_UpdateCreationDate_1;
  Handle_IGESSelect_UpdateCreationDate_2: typeof Handle_IGESSelect_UpdateCreationDate_2;
  Handle_IGESSelect_UpdateCreationDate_3: typeof Handle_IGESSelect_UpdateCreationDate_3;
  Handle_IGESSelect_UpdateCreationDate_4: typeof Handle_IGESSelect_UpdateCreationDate_4;
  Handle_IGESSelect_UpdateFileName_1: typeof Handle_IGESSelect_UpdateFileName_1;
  Handle_IGESSelect_UpdateFileName_2: typeof Handle_IGESSelect_UpdateFileName_2;
  Handle_IGESSelect_UpdateFileName_3: typeof Handle_IGESSelect_UpdateFileName_3;
  Handle_IGESSelect_UpdateFileName_4: typeof Handle_IGESSelect_UpdateFileName_4;
  Handle_IGESSelect_UpdateLastChange_1: typeof Handle_IGESSelect_UpdateLastChange_1;
  Handle_IGESSelect_UpdateLastChange_2: typeof Handle_IGESSelect_UpdateLastChange_2;
  Handle_IGESSelect_UpdateLastChange_3: typeof Handle_IGESSelect_UpdateLastChange_3;
  Handle_IGESSelect_UpdateLastChange_4: typeof Handle_IGESSelect_UpdateLastChange_4;
  Handle_IGESSelect_ViewSorter_1: typeof Handle_IGESSelect_ViewSorter_1;
  Handle_IGESSelect_ViewSorter_2: typeof Handle_IGESSelect_ViewSorter_2;
  Handle_IGESSelect_ViewSorter_3: typeof Handle_IGESSelect_ViewSorter_3;
  Handle_IGESSelect_ViewSorter_4: typeof Handle_IGESSelect_ViewSorter_4;
  Handle_IGESSelect_WorkLibrary_1: typeof Handle_IGESSelect_WorkLibrary_1;
  Handle_IGESSelect_WorkLibrary_2: typeof Handle_IGESSelect_WorkLibrary_2;
  Handle_IGESSelect_WorkLibrary_3: typeof Handle_IGESSelect_WorkLibrary_3;
  Handle_IGESSelect_WorkLibrary_4: typeof Handle_IGESSelect_WorkLibrary_4;
  Handle_IGESSolid_Loop_1: typeof Handle_IGESSolid_Loop_1;
  Handle_IGESSolid_Loop_2: typeof Handle_IGESSolid_Loop_2;
  Handle_IGESSolid_Loop_3: typeof Handle_IGESSolid_Loop_3;
  Handle_IGESSolid_Loop_4: typeof Handle_IGESSolid_Loop_4;
  Handle_IGESSolid_HArray1OfLoop_1: typeof Handle_IGESSolid_HArray1OfLoop_1;
  Handle_IGESSolid_HArray1OfLoop_2: typeof Handle_IGESSolid_HArray1OfLoop_2;
  Handle_IGESSolid_HArray1OfLoop_3: typeof Handle_IGESSolid_HArray1OfLoop_3;
  Handle_IGESSolid_HArray1OfLoop_4: typeof Handle_IGESSolid_HArray1OfLoop_4;
  Handle_IGESSolid_Face_1: typeof Handle_IGESSolid_Face_1;
  Handle_IGESSolid_Face_2: typeof Handle_IGESSolid_Face_2;
  Handle_IGESSolid_Face_3: typeof Handle_IGESSolid_Face_3;
  Handle_IGESSolid_Face_4: typeof Handle_IGESSolid_Face_4;
  Handle_IGESSolid_HArray1OfFace_1: typeof Handle_IGESSolid_HArray1OfFace_1;
  Handle_IGESSolid_HArray1OfFace_2: typeof Handle_IGESSolid_HArray1OfFace_2;
  Handle_IGESSolid_HArray1OfFace_3: typeof Handle_IGESSolid_HArray1OfFace_3;
  Handle_IGESSolid_HArray1OfFace_4: typeof Handle_IGESSolid_HArray1OfFace_4;
  Handle_IGESSolid_Shell_1: typeof Handle_IGESSolid_Shell_1;
  Handle_IGESSolid_Shell_2: typeof Handle_IGESSolid_Shell_2;
  Handle_IGESSolid_Shell_3: typeof Handle_IGESSolid_Shell_3;
  Handle_IGESSolid_Shell_4: typeof Handle_IGESSolid_Shell_4;
  Handle_IGESSolid_VertexList_1: typeof Handle_IGESSolid_VertexList_1;
  Handle_IGESSolid_VertexList_2: typeof Handle_IGESSolid_VertexList_2;
  Handle_IGESSolid_VertexList_3: typeof Handle_IGESSolid_VertexList_3;
  Handle_IGESSolid_VertexList_4: typeof Handle_IGESSolid_VertexList_4;
  Handle_IGESSolid_Block_1: typeof Handle_IGESSolid_Block_1;
  Handle_IGESSolid_Block_2: typeof Handle_IGESSolid_Block_2;
  Handle_IGESSolid_Block_3: typeof Handle_IGESSolid_Block_3;
  Handle_IGESSolid_Block_4: typeof Handle_IGESSolid_Block_4;
  Handle_IGESSolid_BooleanTree_1: typeof Handle_IGESSolid_BooleanTree_1;
  Handle_IGESSolid_BooleanTree_2: typeof Handle_IGESSolid_BooleanTree_2;
  Handle_IGESSolid_BooleanTree_3: typeof Handle_IGESSolid_BooleanTree_3;
  Handle_IGESSolid_BooleanTree_4: typeof Handle_IGESSolid_BooleanTree_4;
  Handle_IGESSolid_ConeFrustum_1: typeof Handle_IGESSolid_ConeFrustum_1;
  Handle_IGESSolid_ConeFrustum_2: typeof Handle_IGESSolid_ConeFrustum_2;
  Handle_IGESSolid_ConeFrustum_3: typeof Handle_IGESSolid_ConeFrustum_3;
  Handle_IGESSolid_ConeFrustum_4: typeof Handle_IGESSolid_ConeFrustum_4;
  Handle_IGESSolid_ConicalSurface_1: typeof Handle_IGESSolid_ConicalSurface_1;
  Handle_IGESSolid_ConicalSurface_2: typeof Handle_IGESSolid_ConicalSurface_2;
  Handle_IGESSolid_ConicalSurface_3: typeof Handle_IGESSolid_ConicalSurface_3;
  Handle_IGESSolid_ConicalSurface_4: typeof Handle_IGESSolid_ConicalSurface_4;
  Handle_IGESSolid_Cylinder_1: typeof Handle_IGESSolid_Cylinder_1;
  Handle_IGESSolid_Cylinder_2: typeof Handle_IGESSolid_Cylinder_2;
  Handle_IGESSolid_Cylinder_3: typeof Handle_IGESSolid_Cylinder_3;
  Handle_IGESSolid_Cylinder_4: typeof Handle_IGESSolid_Cylinder_4;
  Handle_IGESSolid_CylindricalSurface_1: typeof Handle_IGESSolid_CylindricalSurface_1;
  Handle_IGESSolid_CylindricalSurface_2: typeof Handle_IGESSolid_CylindricalSurface_2;
  Handle_IGESSolid_CylindricalSurface_3: typeof Handle_IGESSolid_CylindricalSurface_3;
  Handle_IGESSolid_CylindricalSurface_4: typeof Handle_IGESSolid_CylindricalSurface_4;
  Handle_IGESSolid_HArray1OfVertexList_1: typeof Handle_IGESSolid_HArray1OfVertexList_1;
  Handle_IGESSolid_HArray1OfVertexList_2: typeof Handle_IGESSolid_HArray1OfVertexList_2;
  Handle_IGESSolid_HArray1OfVertexList_3: typeof Handle_IGESSolid_HArray1OfVertexList_3;
  Handle_IGESSolid_HArray1OfVertexList_4: typeof Handle_IGESSolid_HArray1OfVertexList_4;
  Handle_IGESSolid_EdgeList_1: typeof Handle_IGESSolid_EdgeList_1;
  Handle_IGESSolid_EdgeList_2: typeof Handle_IGESSolid_EdgeList_2;
  Handle_IGESSolid_EdgeList_3: typeof Handle_IGESSolid_EdgeList_3;
  Handle_IGESSolid_EdgeList_4: typeof Handle_IGESSolid_EdgeList_4;
  Handle_IGESSolid_Ellipsoid_1: typeof Handle_IGESSolid_Ellipsoid_1;
  Handle_IGESSolid_Ellipsoid_2: typeof Handle_IGESSolid_Ellipsoid_2;
  Handle_IGESSolid_Ellipsoid_3: typeof Handle_IGESSolid_Ellipsoid_3;
  Handle_IGESSolid_Ellipsoid_4: typeof Handle_IGESSolid_Ellipsoid_4;
  Handle_IGESSolid_GeneralModule_1: typeof Handle_IGESSolid_GeneralModule_1;
  Handle_IGESSolid_GeneralModule_2: typeof Handle_IGESSolid_GeneralModule_2;
  Handle_IGESSolid_GeneralModule_3: typeof Handle_IGESSolid_GeneralModule_3;
  Handle_IGESSolid_GeneralModule_4: typeof Handle_IGESSolid_GeneralModule_4;
  Handle_IGESSolid_HArray1OfShell_1: typeof Handle_IGESSolid_HArray1OfShell_1;
  Handle_IGESSolid_HArray1OfShell_2: typeof Handle_IGESSolid_HArray1OfShell_2;
  Handle_IGESSolid_HArray1OfShell_3: typeof Handle_IGESSolid_HArray1OfShell_3;
  Handle_IGESSolid_HArray1OfShell_4: typeof Handle_IGESSolid_HArray1OfShell_4;
  Handle_IGESSolid_ManifoldSolid_1: typeof Handle_IGESSolid_ManifoldSolid_1;
  Handle_IGESSolid_ManifoldSolid_2: typeof Handle_IGESSolid_ManifoldSolid_2;
  Handle_IGESSolid_ManifoldSolid_3: typeof Handle_IGESSolid_ManifoldSolid_3;
  Handle_IGESSolid_ManifoldSolid_4: typeof Handle_IGESSolid_ManifoldSolid_4;
  Handle_IGESSolid_PlaneSurface_1: typeof Handle_IGESSolid_PlaneSurface_1;
  Handle_IGESSolid_PlaneSurface_2: typeof Handle_IGESSolid_PlaneSurface_2;
  Handle_IGESSolid_PlaneSurface_3: typeof Handle_IGESSolid_PlaneSurface_3;
  Handle_IGESSolid_PlaneSurface_4: typeof Handle_IGESSolid_PlaneSurface_4;
  Handle_IGESSolid_Protocol_1: typeof Handle_IGESSolid_Protocol_1;
  Handle_IGESSolid_Protocol_2: typeof Handle_IGESSolid_Protocol_2;
  Handle_IGESSolid_Protocol_3: typeof Handle_IGESSolid_Protocol_3;
  Handle_IGESSolid_Protocol_4: typeof Handle_IGESSolid_Protocol_4;
  Handle_IGESSolid_ReadWriteModule_1: typeof Handle_IGESSolid_ReadWriteModule_1;
  Handle_IGESSolid_ReadWriteModule_2: typeof Handle_IGESSolid_ReadWriteModule_2;
  Handle_IGESSolid_ReadWriteModule_3: typeof Handle_IGESSolid_ReadWriteModule_3;
  Handle_IGESSolid_ReadWriteModule_4: typeof Handle_IGESSolid_ReadWriteModule_4;
  Handle_IGESSolid_RightAngularWedge_1: typeof Handle_IGESSolid_RightAngularWedge_1;
  Handle_IGESSolid_RightAngularWedge_2: typeof Handle_IGESSolid_RightAngularWedge_2;
  Handle_IGESSolid_RightAngularWedge_3: typeof Handle_IGESSolid_RightAngularWedge_3;
  Handle_IGESSolid_RightAngularWedge_4: typeof Handle_IGESSolid_RightAngularWedge_4;
  Handle_IGESSolid_SelectedComponent_1: typeof Handle_IGESSolid_SelectedComponent_1;
  Handle_IGESSolid_SelectedComponent_2: typeof Handle_IGESSolid_SelectedComponent_2;
  Handle_IGESSolid_SelectedComponent_3: typeof Handle_IGESSolid_SelectedComponent_3;
  Handle_IGESSolid_SelectedComponent_4: typeof Handle_IGESSolid_SelectedComponent_4;
  Handle_IGESSolid_SolidAssembly_1: typeof Handle_IGESSolid_SolidAssembly_1;
  Handle_IGESSolid_SolidAssembly_2: typeof Handle_IGESSolid_SolidAssembly_2;
  Handle_IGESSolid_SolidAssembly_3: typeof Handle_IGESSolid_SolidAssembly_3;
  Handle_IGESSolid_SolidAssembly_4: typeof Handle_IGESSolid_SolidAssembly_4;
  Handle_IGESSolid_SolidInstance_1: typeof Handle_IGESSolid_SolidInstance_1;
  Handle_IGESSolid_SolidInstance_2: typeof Handle_IGESSolid_SolidInstance_2;
  Handle_IGESSolid_SolidInstance_3: typeof Handle_IGESSolid_SolidInstance_3;
  Handle_IGESSolid_SolidInstance_4: typeof Handle_IGESSolid_SolidInstance_4;
  Handle_IGESSolid_SolidOfLinearExtrusion_1: typeof Handle_IGESSolid_SolidOfLinearExtrusion_1;
  Handle_IGESSolid_SolidOfLinearExtrusion_2: typeof Handle_IGESSolid_SolidOfLinearExtrusion_2;
  Handle_IGESSolid_SolidOfLinearExtrusion_3: typeof Handle_IGESSolid_SolidOfLinearExtrusion_3;
  Handle_IGESSolid_SolidOfLinearExtrusion_4: typeof Handle_IGESSolid_SolidOfLinearExtrusion_4;
  Handle_IGESSolid_SolidOfRevolution_1: typeof Handle_IGESSolid_SolidOfRevolution_1;
  Handle_IGESSolid_SolidOfRevolution_2: typeof Handle_IGESSolid_SolidOfRevolution_2;
  Handle_IGESSolid_SolidOfRevolution_3: typeof Handle_IGESSolid_SolidOfRevolution_3;
  Handle_IGESSolid_SolidOfRevolution_4: typeof Handle_IGESSolid_SolidOfRevolution_4;
  Handle_IGESSolid_SpecificModule_1: typeof Handle_IGESSolid_SpecificModule_1;
  Handle_IGESSolid_SpecificModule_2: typeof Handle_IGESSolid_SpecificModule_2;
  Handle_IGESSolid_SpecificModule_3: typeof Handle_IGESSolid_SpecificModule_3;
  Handle_IGESSolid_SpecificModule_4: typeof Handle_IGESSolid_SpecificModule_4;
  Handle_IGESSolid_Sphere_1: typeof Handle_IGESSolid_Sphere_1;
  Handle_IGESSolid_Sphere_2: typeof Handle_IGESSolid_Sphere_2;
  Handle_IGESSolid_Sphere_3: typeof Handle_IGESSolid_Sphere_3;
  Handle_IGESSolid_Sphere_4: typeof Handle_IGESSolid_Sphere_4;
  Handle_IGESSolid_SphericalSurface_1: typeof Handle_IGESSolid_SphericalSurface_1;
  Handle_IGESSolid_SphericalSurface_2: typeof Handle_IGESSolid_SphericalSurface_2;
  Handle_IGESSolid_SphericalSurface_3: typeof Handle_IGESSolid_SphericalSurface_3;
  Handle_IGESSolid_SphericalSurface_4: typeof Handle_IGESSolid_SphericalSurface_4;
  Handle_IGESSolid_ToroidalSurface_1: typeof Handle_IGESSolid_ToroidalSurface_1;
  Handle_IGESSolid_ToroidalSurface_2: typeof Handle_IGESSolid_ToroidalSurface_2;
  Handle_IGESSolid_ToroidalSurface_3: typeof Handle_IGESSolid_ToroidalSurface_3;
  Handle_IGESSolid_ToroidalSurface_4: typeof Handle_IGESSolid_ToroidalSurface_4;
  Handle_IGESSolid_Torus_1: typeof Handle_IGESSolid_Torus_1;
  Handle_IGESSolid_Torus_2: typeof Handle_IGESSolid_Torus_2;
  Handle_IGESSolid_Torus_3: typeof Handle_IGESSolid_Torus_3;
  Handle_IGESSolid_Torus_4: typeof Handle_IGESSolid_Torus_4;
  Handle_IGESToBRep_Actor_1: typeof Handle_IGESToBRep_Actor_1;
  Handle_IGESToBRep_Actor_2: typeof Handle_IGESToBRep_Actor_2;
  Handle_IGESToBRep_Actor_3: typeof Handle_IGESToBRep_Actor_3;
  Handle_IGESToBRep_Actor_4: typeof Handle_IGESToBRep_Actor_4;
  IGESData_DefType: typeof IGESData_DefType;
  IGESData_DefList: typeof IGESData_DefList;
  IGESData_ReadStage: typeof IGESData_ReadStage;
  IGESData_Status: typeof IGESData_Status;
};
