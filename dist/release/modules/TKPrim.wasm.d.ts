declare const libName = "./modules/TKPrim.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class BRepPrimAPI_MakeSweep extends BRepBuilderAPI_MakeShape {
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
}

export declare class BRepPrim_Builder {
  Builder(): BRep_Builder;
  MakeShell(S: TopoDS_Shell): void;
  MakeFace(F: TopoDS_Face, P: gp_Pln): void;
  MakeWire(W: TopoDS_Wire): void;
  MakeDegeneratedEdge(E: TopoDS_Edge): void;
  MakeEdge_1(E: TopoDS_Edge, L: gp_Lin): void;
  MakeEdge_2(E: TopoDS_Edge, C: gp_Circ): void;
  SetPCurve_1(E: TopoDS_Edge, F: TopoDS_Face, L: gp_Lin2d): void;
  SetPCurve_2(E: TopoDS_Edge, F: TopoDS_Face, L1: gp_Lin2d, L2: gp_Lin2d): void;
  SetPCurve_3(E: TopoDS_Edge, F: TopoDS_Face, C: gp_Circ2d): void;
  MakeVertex(V: TopoDS_Vertex, P: gp_Pnt): void;
  ReverseFace(F: TopoDS_Face): void;
  AddEdgeVertex_1(E: TopoDS_Edge, V: TopoDS_Vertex, P: Standard_Real, direct: Standard_Boolean): void;
  AddEdgeVertex_2(E: TopoDS_Edge, V: TopoDS_Vertex, P1: Standard_Real, P2: Standard_Real): void;
  SetParameters(E: TopoDS_Edge, V: TopoDS_Vertex, P1: Standard_Real, P2: Standard_Real): void;
  AddWireEdge(W: TopoDS_Wire, E: TopoDS_Edge, direct: Standard_Boolean): void;
  AddFaceWire(F: TopoDS_Face, W: TopoDS_Wire): void;
  AddShellFace(Sh: TopoDS_Shell, F: TopoDS_Face): void;
  CompleteEdge(E: TopoDS_Edge): void;
  CompleteWire(W: TopoDS_Wire): void;
  CompleteFace(F: TopoDS_Face): void;
  CompleteShell(S: TopoDS_Shell): void;
}

  export declare class BRepPrim_Builder_1 extends BRepPrim_Builder {
    constructor();
  }

  export declare class BRepPrim_Builder_2 extends BRepPrim_Builder {
    constructor(B: BRep_Builder);
  }

export declare class BRepPrim_GWedge {
  Axes(): gp_Ax2;
  GetXMin(): Standard_Real;
  GetYMin(): Standard_Real;
  GetZMin(): Standard_Real;
  GetZ2Min(): Standard_Real;
  GetX2Min(): Standard_Real;
  GetXMax(): Standard_Real;
  GetYMax(): Standard_Real;
  GetZMax(): Standard_Real;
  GetZ2Max(): Standard_Real;
  GetX2Max(): Standard_Real;
  Open(d1: BRepPrim_Direction): void;
  Close(d1: BRepPrim_Direction): void;
  IsInfinite(d1: BRepPrim_Direction): Standard_Boolean;
  Shell(): TopoDS_Shell;
  HasFace(d1: BRepPrim_Direction): Standard_Boolean;
  Face(d1: BRepPrim_Direction): TopoDS_Face;
  Plane(d1: BRepPrim_Direction): gp_Pln;
  HasWire(d1: BRepPrim_Direction): Standard_Boolean;
  Wire(d1: BRepPrim_Direction): TopoDS_Wire;
  HasEdge(d1: BRepPrim_Direction, d2: BRepPrim_Direction): Standard_Boolean;
  Edge(d1: BRepPrim_Direction, d2: BRepPrim_Direction): TopoDS_Edge;
  Line(d1: BRepPrim_Direction, d2: BRepPrim_Direction): gp_Lin;
  HasVertex(d1: BRepPrim_Direction, d2: BRepPrim_Direction, d3: BRepPrim_Direction): Standard_Boolean;
  Vertex(d1: BRepPrim_Direction, d2: BRepPrim_Direction, d3: BRepPrim_Direction): TopoDS_Vertex;
  Point(d1: BRepPrim_Direction, d2: BRepPrim_Direction, d3: BRepPrim_Direction): gp_Pnt;
  IsDegeneratedShape(): Standard_Boolean;
}

  export declare class BRepPrim_GWedge_1 extends BRepPrim_GWedge {
    constructor();
  }

  export declare class BRepPrim_GWedge_2 extends BRepPrim_GWedge {
    constructor(B: BRepPrim_Builder, Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

  export declare class BRepPrim_GWedge_3 extends BRepPrim_GWedge {
    constructor(B: BRepPrim_Builder, Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, ltx: Standard_Real);
  }

  export declare class BRepPrim_GWedge_4 extends BRepPrim_GWedge {
    constructor(B: BRepPrim_Builder, Axes: gp_Ax2, xmin: Standard_Real, ymin: Standard_Real, zmin: Standard_Real, z2min: Standard_Real, x2min: Standard_Real, xmax: Standard_Real, ymax: Standard_Real, zmax: Standard_Real, z2max: Standard_Real, x2max: Standard_Real);
  }

export declare class BRepPrim_Wedge extends BRepPrim_GWedge {
}

  export declare class BRepPrim_Wedge_1 extends BRepPrim_Wedge {
    constructor();
  }

  export declare class BRepPrim_Wedge_2 extends BRepPrim_Wedge {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

  export declare class BRepPrim_Wedge_3 extends BRepPrim_Wedge {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, ltx: Standard_Real);
  }

  export declare class BRepPrim_Wedge_4 extends BRepPrim_Wedge {
    constructor(Axes: gp_Ax2, xmin: Standard_Real, ymin: Standard_Real, zmin: Standard_Real, z2min: Standard_Real, x2min: Standard_Real, xmax: Standard_Real, ymax: Standard_Real, zmax: Standard_Real, z2max: Standard_Real, x2max: Standard_Real);
  }

export declare class BRepPrimAPI_MakeBox extends BRepBuilderAPI_MakeShape {
  Init_1(theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Init_2(thePnt: gp_Pnt, theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Init_3(thePnt1: gp_Pnt, thePnt2: gp_Pnt): void;
  Init_4(theAxes: gp_Ax2, theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Wedge(): BRepPrim_Wedge;
  Build(): void;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
  BottomFace(): TopoDS_Face;
  BackFace(): TopoDS_Face;
  FrontFace(): TopoDS_Face;
  LeftFace(): TopoDS_Face;
  RightFace(): TopoDS_Face;
  TopFace(): TopoDS_Face;
}

  export declare class BRepPrimAPI_MakeBox_1 extends BRepPrimAPI_MakeBox {
    constructor();
  }

  export declare class BRepPrimAPI_MakeBox_2 extends BRepPrimAPI_MakeBox {
    constructor(dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeBox_3 extends BRepPrimAPI_MakeBox {
    constructor(P: gp_Pnt, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeBox_4 extends BRepPrimAPI_MakeBox {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepPrimAPI_MakeBox_5 extends BRepPrimAPI_MakeBox {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

export declare class BRepPreviewAPI_MakeBox extends BRepPrimAPI_MakeBox {
  constructor()
  Build(): void;
}

export declare class BRepPrim_OneAxis {
  SetMeridianOffset(MeridianOffset: Standard_Real): void;
  Axes_1(): gp_Ax2;
  Axes_2(A: gp_Ax2): void;
  Angle_1(): Standard_Real;
  Angle_2(A: Standard_Real): void;
  VMin_1(): Standard_Real;
  VMin_2(V: Standard_Real): void;
  VMax_1(): Standard_Real;
  VMax_2(V: Standard_Real): void;
  MakeEmptyLateralFace(): TopoDS_Face;
  MakeEmptyMeridianEdge(Ang: Standard_Real): TopoDS_Edge;
  SetMeridianPCurve(E: TopoDS_Edge, F: TopoDS_Face): void;
  MeridianValue(V: Standard_Real): gp_Pnt2d;
  MeridianOnAxis(V: Standard_Real): Standard_Boolean;
  MeridianClosed(): Standard_Boolean;
  VMaxInfinite(): Standard_Boolean;
  VMinInfinite(): Standard_Boolean;
  HasTop(): Standard_Boolean;
  HasBottom(): Standard_Boolean;
  HasSides(): Standard_Boolean;
  Shell(): TopoDS_Shell;
  LateralFace(): TopoDS_Face;
  TopFace(): TopoDS_Face;
  BottomFace(): TopoDS_Face;
  StartFace(): TopoDS_Face;
  EndFace(): TopoDS_Face;
  LateralWire(): TopoDS_Wire;
  LateralStartWire(): TopoDS_Wire;
  LateralEndWire(): TopoDS_Wire;
  TopWire(): TopoDS_Wire;
  BottomWire(): TopoDS_Wire;
  StartWire(): TopoDS_Wire;
  AxisStartWire(): TopoDS_Wire;
  EndWire(): TopoDS_Wire;
  AxisEndWire(): TopoDS_Wire;
  AxisEdge(): TopoDS_Edge;
  StartEdge(): TopoDS_Edge;
  EndEdge(): TopoDS_Edge;
  StartTopEdge(): TopoDS_Edge;
  StartBottomEdge(): TopoDS_Edge;
  EndTopEdge(): TopoDS_Edge;
  EndBottomEdge(): TopoDS_Edge;
  TopEdge(): TopoDS_Edge;
  BottomEdge(): TopoDS_Edge;
  AxisTopVertex(): TopoDS_Vertex;
  AxisBottomVertex(): TopoDS_Vertex;
  TopStartVertex(): TopoDS_Vertex;
  TopEndVertex(): TopoDS_Vertex;
  BottomStartVertex(): TopoDS_Vertex;
  BottomEndVertex(): TopoDS_Vertex;
}

export declare class BRepPrim_Revolution extends BRepPrim_OneAxis {
  constructor(A: gp_Ax2, VMin: Standard_Real, VMax: Standard_Real, M: any, PM: any)
  MakeEmptyLateralFace(): TopoDS_Face;
  MakeEmptyMeridianEdge(Ang: Standard_Real): TopoDS_Edge;
  MeridianValue(V: Standard_Real): gp_Pnt2d;
  SetMeridianPCurve(E: TopoDS_Edge, F: TopoDS_Face): void;
}

export declare class BRepPrim_Cone extends BRepPrim_Revolution {
  MakeEmptyLateralFace(): TopoDS_Face;
}

  export declare class BRepPrim_Cone_1 extends BRepPrim_Cone {
    constructor(Angle: Standard_Real, Position: gp_Ax2, Height: Standard_Real, Radius: Standard_Real);
  }

  export declare class BRepPrim_Cone_2 extends BRepPrim_Cone {
    constructor(Angle: Standard_Real);
  }

  export declare class BRepPrim_Cone_3 extends BRepPrim_Cone {
    constructor(Angle: Standard_Real, Apex: gp_Pnt);
  }

  export declare class BRepPrim_Cone_4 extends BRepPrim_Cone {
    constructor(Angle: Standard_Real, Axes: gp_Ax2);
  }

  export declare class BRepPrim_Cone_5 extends BRepPrim_Cone {
    constructor(R1: Standard_Real, R2: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrim_Cone_6 extends BRepPrim_Cone {
    constructor(Center: gp_Pnt, R1: Standard_Real, R2: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrim_Cone_7 extends BRepPrim_Cone {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, H: Standard_Real);
  }

export declare class BRepPrim_Cylinder extends BRepPrim_Revolution {
  MakeEmptyLateralFace(): TopoDS_Face;
}

  export declare class BRepPrim_Cylinder_1 extends BRepPrim_Cylinder {
    constructor(Position: gp_Ax2, Radius: Standard_Real, Height: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_2 extends BRepPrim_Cylinder {
    constructor(Radius: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_3 extends BRepPrim_Cylinder {
    constructor(Center: gp_Pnt, Radius: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_4 extends BRepPrim_Cylinder {
    constructor(Axes: gp_Ax2, Radius: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_5 extends BRepPrim_Cylinder {
    constructor(R: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrim_Cylinder_6 extends BRepPrim_Cylinder {
    constructor(Center: gp_Pnt, R: Standard_Real, H: Standard_Real);
  }

export declare class BRepPrim_FaceBuilder {
  Init_1(B: BRep_Builder, S: any): void;
  Init_2(B: BRep_Builder, S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  Face(): TopoDS_Face;
  Edge(I: Standard_Integer): TopoDS_Edge;
  Vertex(I: Standard_Integer): TopoDS_Vertex;
}

  export declare class BRepPrim_FaceBuilder_1 extends BRepPrim_FaceBuilder {
    constructor();
  }

  export declare class BRepPrim_FaceBuilder_2 extends BRepPrim_FaceBuilder {
    constructor(B: BRep_Builder, S: any);
  }

  export declare class BRepPrim_FaceBuilder_3 extends BRepPrim_FaceBuilder {
    constructor(B: BRep_Builder, S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

export declare class BRepPrim_Sphere extends BRepPrim_Revolution {
  MakeEmptyLateralFace(): TopoDS_Face;
}

  export declare class BRepPrim_Sphere_1 extends BRepPrim_Sphere {
    constructor(Radius: Standard_Real);
  }

  export declare class BRepPrim_Sphere_2 extends BRepPrim_Sphere {
    constructor(Center: gp_Pnt, Radius: Standard_Real);
  }

  export declare class BRepPrim_Sphere_3 extends BRepPrim_Sphere {
    constructor(Axes: gp_Ax2, Radius: Standard_Real);
  }

export declare class BRepPrim_Torus extends BRepPrim_Revolution {
  MakeEmptyLateralFace(): TopoDS_Face;
}

  export declare class BRepPrim_Torus_1 extends BRepPrim_Torus {
    constructor(Position: gp_Ax2, Major: Standard_Real, Minor: Standard_Real);
  }

  export declare class BRepPrim_Torus_2 extends BRepPrim_Torus {
    constructor(Major: Standard_Real, Minor: Standard_Real);
  }

  export declare class BRepPrim_Torus_3 extends BRepPrim_Torus {
    constructor(Center: gp_Pnt, Major: Standard_Real, Minor: Standard_Real);
  }

export declare class BRepPrimAPI_MakeOneAxis extends BRepBuilderAPI_MakeShape {
  OneAxis(): Standard_Address;
  Build(): void;
  Face(): TopoDS_Face;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
}

export declare class BRepPrimAPI_MakeCone extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): Standard_Address;
  Cone(): BRepPrim_Cone;
}

  export declare class BRepPrimAPI_MakeCone_1 extends BRepPrimAPI_MakeCone {
    constructor(R1: Standard_Real, R2: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCone_2 extends BRepPrimAPI_MakeCone {
    constructor(R1: Standard_Real, R2: Standard_Real, H: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCone_3 extends BRepPrimAPI_MakeCone {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCone_4 extends BRepPrimAPI_MakeCone {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, H: Standard_Real, angle: Standard_Real);
  }

export declare class BRepPrimAPI_MakeCylinder extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): Standard_Address;
  Cylinder(): BRepPrim_Cylinder;
}

  export declare class BRepPrimAPI_MakeCylinder_1 extends BRepPrimAPI_MakeCylinder {
    constructor(R: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_2 extends BRepPrimAPI_MakeCylinder {
    constructor(R: Standard_Real, H: Standard_Real, Angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_3 extends BRepPrimAPI_MakeCylinder {
    constructor(Axes: gp_Ax2, R: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_4 extends BRepPrimAPI_MakeCylinder {
    constructor(Axes: gp_Ax2, R: Standard_Real, H: Standard_Real, Angle: Standard_Real);
  }

export declare class BRepPrimAPI_MakeHalfSpace extends BRepBuilderAPI_MakeShape {
  Solid(): TopoDS_Solid;
}

  export declare class BRepPrimAPI_MakeHalfSpace_1 extends BRepPrimAPI_MakeHalfSpace {
    constructor(Face: TopoDS_Face, RefPnt: gp_Pnt);
  }

  export declare class BRepPrimAPI_MakeHalfSpace_2 extends BRepPrimAPI_MakeHalfSpace {
    constructor(Shell: TopoDS_Shell, RefPnt: gp_Pnt);
  }

export declare class BRepSweep_Builder {
  constructor(aBuilder: BRep_Builder)
  Builder(): BRep_Builder;
  MakeCompound(aCompound: TopoDS_Shape): void;
  MakeCompSolid(aCompSolid: TopoDS_Shape): void;
  MakeSolid(aSolid: TopoDS_Shape): void;
  MakeShell(aShell: TopoDS_Shape): void;
  MakeWire(aWire: TopoDS_Shape): void;
  Add_1(aShape1: TopoDS_Shape, aShape2: TopoDS_Shape, Orient: TopAbs_Orientation): void;
  Add_2(aShape1: TopoDS_Shape, aShape2: TopoDS_Shape): void;
}

export declare class Sweep_NumShape {
  Init(Index: Standard_Integer, Type: TopAbs_ShapeEnum, Closed: Standard_Boolean, BegInf: Standard_Boolean, EndInf: Standard_Boolean): void;
  Index(): Standard_Integer;
  Type(): TopAbs_ShapeEnum;
  Closed(): Standard_Boolean;
  BegInfinite(): Standard_Boolean;
  EndInfinite(): Standard_Boolean;
  Orientation(): TopAbs_Orientation;
}

  export declare class Sweep_NumShape_1 extends Sweep_NumShape {
    constructor();
  }

  export declare class Sweep_NumShape_2 extends Sweep_NumShape {
    constructor(Index: Standard_Integer, Type: TopAbs_ShapeEnum, Closed: Standard_Boolean, BegInf: Standard_Boolean, EndInf: Standard_Boolean);
  }

export declare class BRepSweep_Tool {
  constructor(aShape: TopoDS_Shape)
  NbShapes(): Standard_Integer;
  Index(aShape: TopoDS_Shape): Standard_Integer;
  Shape(anIndex: Standard_Integer): TopoDS_Shape;
  Type(aShape: TopoDS_Shape): TopAbs_ShapeEnum;
  Orientation(aShape: TopoDS_Shape): TopAbs_Orientation;
  SetOrientation(aShape: TopoDS_Shape, Or: TopAbs_Orientation): void;
}

export declare class Sweep_NumShapeTool {
  constructor(aShape: Sweep_NumShape)
  NbShapes(): Standard_Integer;
  Index(aShape: Sweep_NumShape): Standard_Integer;
  Shape(anIndex: Standard_Integer): Sweep_NumShape;
  Type(aShape: Sweep_NumShape): TopAbs_ShapeEnum;
  Orientation(aShape: Sweep_NumShape): TopAbs_Orientation;
  HasFirstVertex(): Standard_Boolean;
  HasLastVertex(): Standard_Boolean;
  FirstVertex(): Sweep_NumShape;
  LastVertex(): Sweep_NumShape;
}

export declare class BRepSweep_NumLinearRegularSweep {
  MakeEmptyVertex(aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): TopoDS_Shape;
  MakeEmptyDirectingEdge(aGenV: TopoDS_Shape, aDirE: Sweep_NumShape): TopoDS_Shape;
  MakeEmptyGeneratingEdge(aGenE: TopoDS_Shape, aDirV: Sweep_NumShape): TopoDS_Shape;
  SetParameters(aNewFace: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenF: TopoDS_Shape, aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): void;
  SetDirectingParameter(aNewEdge: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenV: TopoDS_Shape, aDirE: Sweep_NumShape, aDirV: Sweep_NumShape): void;
  SetGeneratingParameter(aNewEdge: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenE: TopoDS_Shape, aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): void;
  MakeEmptyFace(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): TopoDS_Shape;
  SetPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenF: TopoDS_Shape, aGenE: TopoDS_Shape, aDirV: Sweep_NumShape, orien: TopAbs_Orientation): void;
  SetGeneratingPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenE: TopoDS_Shape, aDirE: Sweep_NumShape, aDirV: Sweep_NumShape, orien: TopAbs_Orientation): void;
  SetDirectingPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenE: TopoDS_Shape, aGenV: TopoDS_Shape, aDirE: Sweep_NumShape, orien: TopAbs_Orientation): void;
  DirectSolid(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): TopAbs_Orientation;
  GGDShapeIsToAdd(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aSubGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  GDDShapeIsToAdd(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aDirS: Sweep_NumShape, aSubDirS: Sweep_NumShape): Standard_Boolean;
  SeparatedWires(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aSubGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  SplitShell(aNewShape: TopoDS_Shape): TopoDS_Shape;
  SetContinuity(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): void;
  HasShape(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  IsInvariant(aGenS: TopoDS_Shape): Standard_Boolean;
  Shape_1(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): TopoDS_Shape;
  Shape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  IsUsed(aGenS: TopoDS_Shape): Standard_Boolean;
  GenIsUsed(theS: TopoDS_Shape): Standard_Boolean;
  Shape_3(): TopoDS_Shape;
  FirstShape_1(): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  FirstShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  LastShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  Closed(): Standard_Boolean;
}

export declare class BRepSweep_Trsf extends BRepSweep_NumLinearRegularSweep {
  Init(): void;
  Process(aGenS: TopoDS_Shape, aDirV: Sweep_NumShape): Standard_Boolean;
  MakeEmptyVertex(aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): TopoDS_Shape;
  MakeEmptyDirectingEdge(aGenV: TopoDS_Shape, aDirE: Sweep_NumShape): TopoDS_Shape;
  MakeEmptyGeneratingEdge(aGenE: TopoDS_Shape, aDirV: Sweep_NumShape): TopoDS_Shape;
  SetParameters(aNewFace: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenF: TopoDS_Shape, aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): void;
  SetDirectingParameter(aNewEdge: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenV: TopoDS_Shape, aDirE: Sweep_NumShape, aDirV: Sweep_NumShape): void;
  SetGeneratingParameter(aNewEdge: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenE: TopoDS_Shape, aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): void;
  MakeEmptyFace(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): TopoDS_Shape;
  SetPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenF: TopoDS_Shape, aGenE: TopoDS_Shape, aDirV: Sweep_NumShape, orien: TopAbs_Orientation): void;
  SetGeneratingPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenE: TopoDS_Shape, aDirE: Sweep_NumShape, aDirV: Sweep_NumShape, orien: TopAbs_Orientation): void;
  SetDirectingPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenE: TopoDS_Shape, aGenV: TopoDS_Shape, aDirE: Sweep_NumShape, orien: TopAbs_Orientation): void;
  GGDShapeIsToAdd(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aSubGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  GDDShapeIsToAdd(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aDirS: Sweep_NumShape, aSubDirS: Sweep_NumShape): Standard_Boolean;
  SeparatedWires(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aSubGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  HasShape(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  IsInvariant(aGenS: TopoDS_Shape): Standard_Boolean;
  SetContinuity(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): void;
}

export declare class BRepSweep_Translation extends BRepSweep_Trsf {
  constructor(S: TopoDS_Shape, N: Sweep_NumShape, L: TopLoc_Location, V: gp_Vec, C: Standard_Boolean, Canonize: Standard_Boolean)
  MakeEmptyVertex(aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): TopoDS_Shape;
  MakeEmptyDirectingEdge(aGenV: TopoDS_Shape, aDirE: Sweep_NumShape): TopoDS_Shape;
  MakeEmptyGeneratingEdge(aGenE: TopoDS_Shape, aDirV: Sweep_NumShape): TopoDS_Shape;
  SetParameters(aNewFace: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenF: TopoDS_Shape, aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): void;
  SetDirectingParameter(aNewEdge: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenV: TopoDS_Shape, aDirE: Sweep_NumShape, aDirV: Sweep_NumShape): void;
  SetGeneratingParameter(aNewEdge: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenE: TopoDS_Shape, aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): void;
  MakeEmptyFace(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): TopoDS_Shape;
  SetPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenF: TopoDS_Shape, aGenE: TopoDS_Shape, aDirV: Sweep_NumShape, orien: TopAbs_Orientation): void;
  SetGeneratingPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenE: TopoDS_Shape, aDirE: Sweep_NumShape, aDirV: Sweep_NumShape, orien: TopAbs_Orientation): void;
  SetDirectingPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenE: TopoDS_Shape, aGenV: TopoDS_Shape, aDirE: Sweep_NumShape, orien: TopAbs_Orientation): void;
  DirectSolid(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): TopAbs_Orientation;
  GGDShapeIsToAdd(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aSubGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  GDDShapeIsToAdd(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aDirS: Sweep_NumShape, aSubDirS: Sweep_NumShape): Standard_Boolean;
  SeparatedWires(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aSubGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  HasShape(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  IsInvariant(aGenS: TopoDS_Shape): Standard_Boolean;
  Vec(): gp_Vec;
}

export declare class BRepSweep_Prism {
  Shape_1(): TopoDS_Shape;
  Shape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  FirstShape_1(): TopoDS_Shape;
  FirstShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  LastShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  Vec(): gp_Vec;
  IsUsed(aGenS: TopoDS_Shape): Standard_Boolean;
  GenIsUsed(theS: TopoDS_Shape): Standard_Boolean;
}

  export declare class BRepSweep_Prism_1 extends BRepSweep_Prism {
    constructor(S: TopoDS_Shape, V: gp_Vec, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

  export declare class BRepSweep_Prism_2 extends BRepSweep_Prism {
    constructor(S: TopoDS_Shape, D: gp_Dir, Inf: Standard_Boolean, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

export declare class BRepPrimAPI_MakePrism extends BRepPrimAPI_MakeSweep {
  Prism(): BRepSweep_Prism;
  Build(): void;
  FirstShape_1(): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  FirstShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  LastShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
}

  export declare class BRepPrimAPI_MakePrism_1 extends BRepPrimAPI_MakePrism {
    constructor(S: TopoDS_Shape, V: gp_Vec, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

  export declare class BRepPrimAPI_MakePrism_2 extends BRepPrimAPI_MakePrism {
    constructor(S: TopoDS_Shape, D: gp_Dir, Inf: Standard_Boolean, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

export declare class BRepSweep_Rotation extends BRepSweep_Trsf {
  constructor(S: TopoDS_Shape, N: Sweep_NumShape, L: TopLoc_Location, A: gp_Ax1, D: Standard_Real, C: Standard_Boolean)
  MakeEmptyVertex(aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): TopoDS_Shape;
  MakeEmptyDirectingEdge(aGenV: TopoDS_Shape, aDirE: Sweep_NumShape): TopoDS_Shape;
  MakeEmptyGeneratingEdge(aGenE: TopoDS_Shape, aDirV: Sweep_NumShape): TopoDS_Shape;
  SetParameters(aNewFace: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenF: TopoDS_Shape, aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): void;
  SetDirectingParameter(aNewEdge: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenV: TopoDS_Shape, aDirE: Sweep_NumShape, aDirV: Sweep_NumShape): void;
  SetGeneratingParameter(aNewEdge: TopoDS_Shape, aNewVertex: TopoDS_Shape, aGenE: TopoDS_Shape, aGenV: TopoDS_Shape, aDirV: Sweep_NumShape): void;
  MakeEmptyFace(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): TopoDS_Shape;
  SetPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenF: TopoDS_Shape, aGenE: TopoDS_Shape, aDirV: Sweep_NumShape, orien: TopAbs_Orientation): void;
  SetGeneratingPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenE: TopoDS_Shape, aDirE: Sweep_NumShape, aDirV: Sweep_NumShape, orien: TopAbs_Orientation): void;
  SetDirectingPCurve(aNewFace: TopoDS_Shape, aNewEdge: TopoDS_Shape, aGenE: TopoDS_Shape, aGenV: TopoDS_Shape, aDirE: Sweep_NumShape, orien: TopAbs_Orientation): void;
  DirectSolid(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): TopAbs_Orientation;
  GGDShapeIsToAdd(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aSubGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  GDDShapeIsToAdd(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aDirS: Sweep_NumShape, aSubDirS: Sweep_NumShape): Standard_Boolean;
  SeparatedWires(aNewShape: TopoDS_Shape, aNewSubShape: TopoDS_Shape, aGenS: TopoDS_Shape, aSubGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  SplitShell(aNewShape: TopoDS_Shape): TopoDS_Shape;
  HasShape(aGenS: TopoDS_Shape, aDirS: Sweep_NumShape): Standard_Boolean;
  IsInvariant(aGenS: TopoDS_Shape): Standard_Boolean;
  Axe(): gp_Ax1;
  Angle(): Standard_Real;
}

export declare class BRepSweep_Revol {
  Shape_1(): TopoDS_Shape;
  Shape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  FirstShape_1(): TopoDS_Shape;
  FirstShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  LastShape_2(aGenS: TopoDS_Shape): TopoDS_Shape;
  Axe_1(): gp_Ax1;
  Angle_1(): Standard_Real;
  IsUsed(aGenS: TopoDS_Shape): Standard_Boolean;
}

  export declare class BRepSweep_Revol_1 extends BRepSweep_Revol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, D: Standard_Real, C: Standard_Boolean);
  }

  export declare class BRepSweep_Revol_2 extends BRepSweep_Revol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, C: Standard_Boolean);
  }

export declare class BRepPrimAPI_MakeRevol extends BRepPrimAPI_MakeSweep {
  Revol(): BRepSweep_Revol;
  Build(): void;
  FirstShape_1(): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): TopTools_ListOfShape;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  FirstShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  LastShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  HasDegenerated(): Standard_Boolean;
  Degenerated(): TopTools_ListOfShape;
}

  export declare class BRepPrimAPI_MakeRevol_1 extends BRepPrimAPI_MakeRevol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, D: Standard_Real, Copy: Standard_Boolean);
  }

  export declare class BRepPrimAPI_MakeRevol_2 extends BRepPrimAPI_MakeRevol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, Copy: Standard_Boolean);
  }

export declare class BRepPrimAPI_MakeRevolution extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): Standard_Address;
  Revolution(): BRepPrim_Revolution;
}

  export declare class BRepPrimAPI_MakeRevolution_1 extends BRepPrimAPI_MakeRevolution {
    constructor(Meridian: any);
  }

  export declare class BRepPrimAPI_MakeRevolution_2 extends BRepPrimAPI_MakeRevolution {
    constructor(Meridian: any, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeRevolution_3 extends BRepPrimAPI_MakeRevolution {
    constructor(Meridian: any, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeRevolution_4 extends BRepPrimAPI_MakeRevolution {
    constructor(Meridian: any, VMin: Standard_Real, VMax: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeRevolution_5 extends BRepPrimAPI_MakeRevolution {
    constructor(Axes: gp_Ax2, Meridian: any);
  }

  export declare class BRepPrimAPI_MakeRevolution_6 extends BRepPrimAPI_MakeRevolution {
    constructor(Axes: gp_Ax2, Meridian: any, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeRevolution_7 extends BRepPrimAPI_MakeRevolution {
    constructor(Axes: gp_Ax2, Meridian: any, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeRevolution_8 extends BRepPrimAPI_MakeRevolution {
    constructor(Axes: gp_Ax2, Meridian: any, VMin: Standard_Real, VMax: Standard_Real, angle: Standard_Real);
  }

export declare class BRepPrimAPI_MakeSphere extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): Standard_Address;
  Sphere(): BRepPrim_Sphere;
}

  export declare class BRepPrimAPI_MakeSphere_1 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_2 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_3 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_4 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_5 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_6 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_7 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_8 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_9 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_10 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_11 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_12 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

export declare class BRepPrimAPI_MakeTorus extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): Standard_Address;
  Torus(): BRepPrim_Torus;
}

  export declare class BRepPrimAPI_MakeTorus_1 extends BRepPrimAPI_MakeTorus {
    constructor(R1: Standard_Real, R2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_2 extends BRepPrimAPI_MakeTorus {
    constructor(R1: Standard_Real, R2: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_3 extends BRepPrimAPI_MakeTorus {
    constructor(R1: Standard_Real, R2: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_4 extends BRepPrimAPI_MakeTorus {
    constructor(R1: Standard_Real, R2: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_5 extends BRepPrimAPI_MakeTorus {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_6 extends BRepPrimAPI_MakeTorus {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_7 extends BRepPrimAPI_MakeTorus {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_8 extends BRepPrimAPI_MakeTorus {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle: Standard_Real);
  }

export declare class BRepPrimAPI_MakeWedge extends BRepBuilderAPI_MakeShape {
  Wedge(): BRepPrim_Wedge;
  Build(): void;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
}

  export declare class BRepPrimAPI_MakeWedge_1 extends BRepPrimAPI_MakeWedge {
    constructor(dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, ltx: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeWedge_2 extends BRepPrimAPI_MakeWedge {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, ltx: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeWedge_3 extends BRepPrimAPI_MakeWedge {
    constructor(dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, xmin: Standard_Real, zmin: Standard_Real, xmax: Standard_Real, zmax: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeWedge_4 extends BRepPrimAPI_MakeWedge {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, xmin: Standard_Real, zmin: Standard_Real, xmax: Standard_Real, zmax: Standard_Real);
  }

export declare class BRepSweep_Iterator {
  constructor()
  Init(aShape: TopoDS_Shape): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TopoDS_Shape;
  Orientation(): TopAbs_Orientation;
}

export declare class Sweep_NumShapeIterator {
  constructor()
  Init(aShape: Sweep_NumShape): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): Sweep_NumShape;
  Orientation(): TopAbs_Orientation;
}

export declare type BRepPrim_Direction = {
  BRepPrim_XMin: {};
  BRepPrim_XMax: {};
  BRepPrim_YMin: {};
  BRepPrim_YMax: {};
  BRepPrim_ZMin: {};
  BRepPrim_ZMax: {};
}

export declare type TKPrimLib = {
  BRepPrim_Builder_1: typeof BRepPrim_Builder_1;
  BRepPrim_Builder_2: typeof BRepPrim_Builder_2;
  BRepPrim_GWedge_1: typeof BRepPrim_GWedge_1;
  BRepPrim_GWedge_2: typeof BRepPrim_GWedge_2;
  BRepPrim_GWedge_3: typeof BRepPrim_GWedge_3;
  BRepPrim_GWedge_4: typeof BRepPrim_GWedge_4;
  BRepPrim_Wedge_1: typeof BRepPrim_Wedge_1;
  BRepPrim_Wedge_2: typeof BRepPrim_Wedge_2;
  BRepPrim_Wedge_3: typeof BRepPrim_Wedge_3;
  BRepPrim_Wedge_4: typeof BRepPrim_Wedge_4;
  BRepPrimAPI_MakeBox_1: typeof BRepPrimAPI_MakeBox_1;
  BRepPrimAPI_MakeBox_2: typeof BRepPrimAPI_MakeBox_2;
  BRepPrimAPI_MakeBox_3: typeof BRepPrimAPI_MakeBox_3;
  BRepPrimAPI_MakeBox_4: typeof BRepPrimAPI_MakeBox_4;
  BRepPrimAPI_MakeBox_5: typeof BRepPrimAPI_MakeBox_5;
  BRepPreviewAPI_MakeBox: typeof BRepPreviewAPI_MakeBox;
  BRepPrim_Revolution: typeof BRepPrim_Revolution;
  BRepPrim_Cone_1: typeof BRepPrim_Cone_1;
  BRepPrim_Cone_2: typeof BRepPrim_Cone_2;
  BRepPrim_Cone_3: typeof BRepPrim_Cone_3;
  BRepPrim_Cone_4: typeof BRepPrim_Cone_4;
  BRepPrim_Cone_5: typeof BRepPrim_Cone_5;
  BRepPrim_Cone_6: typeof BRepPrim_Cone_6;
  BRepPrim_Cone_7: typeof BRepPrim_Cone_7;
  BRepPrim_Cylinder_1: typeof BRepPrim_Cylinder_1;
  BRepPrim_Cylinder_2: typeof BRepPrim_Cylinder_2;
  BRepPrim_Cylinder_3: typeof BRepPrim_Cylinder_3;
  BRepPrim_Cylinder_4: typeof BRepPrim_Cylinder_4;
  BRepPrim_Cylinder_5: typeof BRepPrim_Cylinder_5;
  BRepPrim_Cylinder_6: typeof BRepPrim_Cylinder_6;
  BRepPrim_FaceBuilder_1: typeof BRepPrim_FaceBuilder_1;
  BRepPrim_FaceBuilder_2: typeof BRepPrim_FaceBuilder_2;
  BRepPrim_FaceBuilder_3: typeof BRepPrim_FaceBuilder_3;
  BRepPrim_Sphere_1: typeof BRepPrim_Sphere_1;
  BRepPrim_Sphere_2: typeof BRepPrim_Sphere_2;
  BRepPrim_Sphere_3: typeof BRepPrim_Sphere_3;
  BRepPrim_Torus_1: typeof BRepPrim_Torus_1;
  BRepPrim_Torus_2: typeof BRepPrim_Torus_2;
  BRepPrim_Torus_3: typeof BRepPrim_Torus_3;
  BRepPrimAPI_MakeCone_1: typeof BRepPrimAPI_MakeCone_1;
  BRepPrimAPI_MakeCone_2: typeof BRepPrimAPI_MakeCone_2;
  BRepPrimAPI_MakeCone_3: typeof BRepPrimAPI_MakeCone_3;
  BRepPrimAPI_MakeCone_4: typeof BRepPrimAPI_MakeCone_4;
  BRepPrimAPI_MakeCylinder_1: typeof BRepPrimAPI_MakeCylinder_1;
  BRepPrimAPI_MakeCylinder_2: typeof BRepPrimAPI_MakeCylinder_2;
  BRepPrimAPI_MakeCylinder_3: typeof BRepPrimAPI_MakeCylinder_3;
  BRepPrimAPI_MakeCylinder_4: typeof BRepPrimAPI_MakeCylinder_4;
  BRepPrimAPI_MakeHalfSpace_1: typeof BRepPrimAPI_MakeHalfSpace_1;
  BRepPrimAPI_MakeHalfSpace_2: typeof BRepPrimAPI_MakeHalfSpace_2;
  BRepSweep_Builder: typeof BRepSweep_Builder;
  Sweep_NumShape_1: typeof Sweep_NumShape_1;
  Sweep_NumShape_2: typeof Sweep_NumShape_2;
  BRepSweep_Tool: typeof BRepSweep_Tool;
  Sweep_NumShapeTool: typeof Sweep_NumShapeTool;
  BRepSweep_Translation: typeof BRepSweep_Translation;
  BRepSweep_Prism_1: typeof BRepSweep_Prism_1;
  BRepSweep_Prism_2: typeof BRepSweep_Prism_2;
  BRepPrimAPI_MakePrism_1: typeof BRepPrimAPI_MakePrism_1;
  BRepPrimAPI_MakePrism_2: typeof BRepPrimAPI_MakePrism_2;
  BRepSweep_Rotation: typeof BRepSweep_Rotation;
  BRepSweep_Revol_1: typeof BRepSweep_Revol_1;
  BRepSweep_Revol_2: typeof BRepSweep_Revol_2;
  BRepPrimAPI_MakeRevol_1: typeof BRepPrimAPI_MakeRevol_1;
  BRepPrimAPI_MakeRevol_2: typeof BRepPrimAPI_MakeRevol_2;
  BRepPrimAPI_MakeRevolution_1: typeof BRepPrimAPI_MakeRevolution_1;
  BRepPrimAPI_MakeRevolution_2: typeof BRepPrimAPI_MakeRevolution_2;
  BRepPrimAPI_MakeRevolution_3: typeof BRepPrimAPI_MakeRevolution_3;
  BRepPrimAPI_MakeRevolution_4: typeof BRepPrimAPI_MakeRevolution_4;
  BRepPrimAPI_MakeRevolution_5: typeof BRepPrimAPI_MakeRevolution_5;
  BRepPrimAPI_MakeRevolution_6: typeof BRepPrimAPI_MakeRevolution_6;
  BRepPrimAPI_MakeRevolution_7: typeof BRepPrimAPI_MakeRevolution_7;
  BRepPrimAPI_MakeRevolution_8: typeof BRepPrimAPI_MakeRevolution_8;
  BRepPrimAPI_MakeSphere_1: typeof BRepPrimAPI_MakeSphere_1;
  BRepPrimAPI_MakeSphere_2: typeof BRepPrimAPI_MakeSphere_2;
  BRepPrimAPI_MakeSphere_3: typeof BRepPrimAPI_MakeSphere_3;
  BRepPrimAPI_MakeSphere_4: typeof BRepPrimAPI_MakeSphere_4;
  BRepPrimAPI_MakeSphere_5: typeof BRepPrimAPI_MakeSphere_5;
  BRepPrimAPI_MakeSphere_6: typeof BRepPrimAPI_MakeSphere_6;
  BRepPrimAPI_MakeSphere_7: typeof BRepPrimAPI_MakeSphere_7;
  BRepPrimAPI_MakeSphere_8: typeof BRepPrimAPI_MakeSphere_8;
  BRepPrimAPI_MakeSphere_9: typeof BRepPrimAPI_MakeSphere_9;
  BRepPrimAPI_MakeSphere_10: typeof BRepPrimAPI_MakeSphere_10;
  BRepPrimAPI_MakeSphere_11: typeof BRepPrimAPI_MakeSphere_11;
  BRepPrimAPI_MakeSphere_12: typeof BRepPrimAPI_MakeSphere_12;
  BRepPrimAPI_MakeTorus_1: typeof BRepPrimAPI_MakeTorus_1;
  BRepPrimAPI_MakeTorus_2: typeof BRepPrimAPI_MakeTorus_2;
  BRepPrimAPI_MakeTorus_3: typeof BRepPrimAPI_MakeTorus_3;
  BRepPrimAPI_MakeTorus_4: typeof BRepPrimAPI_MakeTorus_4;
  BRepPrimAPI_MakeTorus_5: typeof BRepPrimAPI_MakeTorus_5;
  BRepPrimAPI_MakeTorus_6: typeof BRepPrimAPI_MakeTorus_6;
  BRepPrimAPI_MakeTorus_7: typeof BRepPrimAPI_MakeTorus_7;
  BRepPrimAPI_MakeTorus_8: typeof BRepPrimAPI_MakeTorus_8;
  BRepPrimAPI_MakeWedge_1: typeof BRepPrimAPI_MakeWedge_1;
  BRepPrimAPI_MakeWedge_2: typeof BRepPrimAPI_MakeWedge_2;
  BRepPrimAPI_MakeWedge_3: typeof BRepPrimAPI_MakeWedge_3;
  BRepPrimAPI_MakeWedge_4: typeof BRepPrimAPI_MakeWedge_4;
  BRepSweep_Iterator: typeof BRepSweep_Iterator;
  Sweep_NumShapeIterator: typeof Sweep_NumShapeIterator;
  BRepPrim_Direction: typeof BRepPrim_Direction;
};
