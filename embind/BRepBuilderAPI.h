// BRepBuilderAPI_BndBoxTreeSelector
// BRepBuilderAPI_CellFilter
// BRepBuilderAPI_Collect
// BRepBuilderAPI_Command, full interface OCCT V7_4_0p1
  class_<BRepBuilderAPI_Command>("BRepBuilderAPI_Command")
    .function("IsDone", &BRepBuilderAPI_Command::IsDone)
    .function("Check", &BRepBuilderAPI_Command::Check);

// BRepBuilderAPI_Copy
// BRepBuilderAPI_EdgeError
// BRepBuilderAPI_FaceError
// BRepBuilderAPI_FastSewing
// BRepBuilderAPI_FindPlane
// BRepBuilderAPI_GTransform
// BRepBuilderAPI
// BRepBuilderAPI_MakeEdge2d
// BRepBuilderAPI_MakeEdge, full interface OCCT V7_4_0p1
  class_<BRepBuilderAPI_MakeEdge, base<BRepBuilderAPI_MakeShape>>("BRepBuilderAPI_MakeEdge")
    .function("Init_1", select_overload<void (const Handle(Geom_Curve)&)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_2", select_overload<void (const Handle(Geom_Curve)&, const Standard_Real, const Standard_Real)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_3", select_overload<void (const Handle(Geom_Curve)&, const gp_Pnt&, const gp_Pnt&)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_4", select_overload<void (const Handle(Geom_Curve)&, const TopoDS_Vertex&, const TopoDS_Vertex&)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_5", select_overload<void (const Handle(Geom_Curve)&, const gp_Pnt&, const gp_Pnt&, const Standard_Real, const Standard_Real)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_6", select_overload<void (const Handle(Geom_Curve)&, const TopoDS_Vertex&, const TopoDS_Vertex&, const Standard_Real, const Standard_Real)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_7", select_overload<void (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_8", select_overload<void (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const Standard_Real, const Standard_Real)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_9", select_overload<void (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const gp_Pnt&, const gp_Pnt&)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_10", select_overload<void (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const TopoDS_Vertex&, const TopoDS_Vertex&)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_11", select_overload<void (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const gp_Pnt&, const gp_Pnt&, const Standard_Real, const Standard_Real)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("Init_12", select_overload<void (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const TopoDS_Vertex&, const TopoDS_Vertex&, const Standard_Real, const Standard_Real)>(&BRepBuilderAPI_MakeEdge::Init))
    .function("IsDone", &BRepBuilderAPI_MakeEdge::IsDone)
    .function("Error", &BRepBuilderAPI_MakeEdge::Error)
    .function("Edge", &BRepBuilderAPI_MakeEdge::Edge)
    .function("operator_TopoDS_Edge", &BRepBuilderAPI_MakeEdge::operator TopoDS_Edge)
    .function("Vertex1", &BRepBuilderAPI_MakeEdge::Vertex1)
    .function("Vertex2", &BRepBuilderAPI_MakeEdge::Vertex2);
;

  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_1, (), (), ());
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_2, (const TopoDS_Vertex& V1, const TopoDS_Vertex& V2), (V1, V2), (const TopoDS_Vertex&, const TopoDS_Vertex& ));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_3, (const gp_Pnt& P1, const gp_Pnt& P2), (P1, P2), (const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_4, (const gp_Lin& L), (L), (const gp_Lin&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_5, (const gp_Lin& L, const Standard_Real p1, const Standard_Real p2), (L, p1, p2), (const gp_Lin&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_6, (const gp_Lin& L, const gp_Pnt& P1, const gp_Pnt& P2), (L, P1, P2), (const gp_Lin&, const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_7, (const gp_Lin& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2), (L, V1, V2), (const gp_Lin&, const TopoDS_Vertex&, const TopoDS_Vertex&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_8, (const gp_Circ& L), (L), (const gp_Circ&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_9, (const gp_Circ& L, const Standard_Real p1, const Standard_Real p2), (L, p1, p2), (const gp_Circ&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_10, (const gp_Circ& L, const gp_Pnt& P1, const gp_Pnt& P2), (L, P1, P2), (const gp_Circ&, const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_11, (const gp_Circ& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2), (L, V1, V2), (const gp_Circ&, const TopoDS_Vertex&, const TopoDS_Vertex&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_12, (const gp_Elips& L), (L), (const gp_Elips&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_13, (const gp_Elips& L, const Standard_Real p1, const Standard_Real p2), (L, p1, p2), (const gp_Elips&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_14, (const gp_Elips& L, const gp_Pnt& P1, const gp_Pnt& P2), (L, P1, P2), (const gp_Elips&, const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_15, (const gp_Elips& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2), (L, V1, V2), (const gp_Elips&, const TopoDS_Vertex&, const TopoDS_Vertex&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_16, (const gp_Hypr& L), (L), (const gp_Hypr&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_17, (const gp_Hypr& L, const Standard_Real p1, const Standard_Real p2), (L, p1, p2), (const gp_Hypr&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_18, (const gp_Hypr& L, const gp_Pnt& P1, const gp_Pnt& P2), (L, P1, P2), (const gp_Hypr&, const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_19, (const gp_Hypr& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2), (L, V1, V2), (const gp_Hypr&, const TopoDS_Vertex&, const TopoDS_Vertex&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_20, (const gp_Parab& L), (L), (const gp_Parab&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_21, (const gp_Parab& L, const Standard_Real p1, const Standard_Real p2), (L, p1, p2), (const gp_Parab&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_22, (const gp_Parab& L, const gp_Pnt& P1, const gp_Pnt& P2), (L, P1, P2), (const gp_Parab&, const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_23, (const gp_Parab& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2), (L, V1, V2), (const gp_Parab&, const TopoDS_Vertex&, const TopoDS_Vertex&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_24, (const Handle(Geom_Curve)& L), (L), (const Handle(Geom_Curve)&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_25, (const Handle(Geom_Curve)& L, const Standard_Real p1, const Standard_Real p2), (L, p1, p2), (const Handle(Geom_Curve)&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_26, (const Handle(Geom_Curve)& L, const gp_Pnt& P1, const gp_Pnt& P2), (L, P1, P2), (const Handle(Geom_Curve)&, const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_27, (const Handle(Geom_Curve)& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2), (L, V1, V2), (const Handle(Geom_Curve)&, const TopoDS_Vertex&, const TopoDS_Vertex&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_28, (const Handle(Geom_Curve)& L, const gp_Pnt& P1, const gp_Pnt& P2, const Standard_Real p1, const Standard_Real p2), (L, P1, P2, p1, p2), (const Handle(Geom_Curve)&, const gp_Pnt&, const gp_Pnt&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_29, (const Handle(Geom_Curve)& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2, const Standard_Real p1, const Standard_Real p2), (L, V1, V2, p1, p2), (const Handle(Geom_Curve)&, const TopoDS_Vertex&, const TopoDS_Vertex&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_31, (const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S), (L, S), (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_32, (const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const Standard_Real p1, const Standard_Real p2), (L, S, p1, p2), (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_33, (const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const gp_Pnt& P1, const gp_Pnt& P2), (L, S, P1, P2), (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_34, (const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2), (L, S, V1, V2), (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const TopoDS_Vertex&, const TopoDS_Vertex&));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_35, (const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const gp_Pnt& P1, const gp_Pnt& P2, const Standard_Real p1, const Standard_Real p2), (L, S, P1, P2, p1, p2), (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const gp_Pnt&, const gp_Pnt&, const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepBuilderAPI_MakeEdge, BRepBuilderAPI_MakeEdge_36, (const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2, const Standard_Real p1, const Standard_Real p2), (L, S, V1, V2, p1, p2), (const Handle(Geom2d_Curve)&, const Handle(Geom_Surface)&, const TopoDS_Vertex&, const TopoDS_Vertex&, const Standard_Real, const Standard_Real));

// BRepBuilderAPI_MakeFace
// BRepBuilderAPI_MakePolygon
// BRepBuilderAPI_MakeShape, full interface OCCT V7_4_0p1
  class_<BRepBuilderAPI_MakeShape, base<BRepBuilderAPI_Command>>("BRepBuilderAPI_MakeShape")
    .function("Build", &BRepBuilderAPI_MakeShape::Build)
    .function("Shape", &BRepBuilderAPI_MakeShape::Shape)
    .function("_operator_TopoDS_Shape", &BRepBuilderAPI_MakeShape::operator TopoDS_Shape)
    .function("Generated", &BRepBuilderAPI_MakeShape::Generated)
    .function("Modified", &BRepBuilderAPI_MakeShape::Modified)
    .function("IsDeleted", &BRepBuilderAPI_MakeShape::IsDeleted);

// BRepBuilderAPI_MakeShell
// BRepBuilderAPI_MakeSolid
// BRepBuilderAPI_MakeVertex
// BRepBuilderAPI_MakeWire
// BRepBuilderAPI_ModifyShape
// BRepBuilderAPI_NurbsConvert
// BRepBuilderAPI_PipeError
// BRepBuilderAPI_Sewing
// BRepBuilderAPI_ShapeModification
// BRepBuilderAPI_ShellError
// BRepBuilderAPI_Transform
// BRepBuilderAPI_TransitionMode
// BRepBuilderAPI_VertexInspector
// BRepBuilderAPI_WireError