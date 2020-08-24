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
// BRepBuilderAPI_MakeEdge
  // class_<BRepBuilderAPI_MakeEdge, base<BRepBuilderAPI_MakeShape>>("BRepBuilderAPI_MakeEdge");

  // Standard_EXPORT BRepBuilderAPI_MakeEdge();
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const TopoDS_Vertex& V1, const TopoDS_Vertex& V2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Pnt& P1, const gp_Pnt& P2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Lin& L);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Lin& L, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Lin& L, const gp_Pnt& P1, const gp_Pnt& P2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Lin& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Circ& L);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Circ& L, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Circ& L, const gp_Pnt& P1, const gp_Pnt& P2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Circ& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Elips& L);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Elips& L, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Elips& L, const gp_Pnt& P1, const gp_Pnt& P2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Elips& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Hypr& L);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Hypr& L, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Hypr& L, const gp_Pnt& P1, const gp_Pnt& P2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Hypr& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Parab& L);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Parab& L, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Parab& L, const gp_Pnt& P1, const gp_Pnt& P2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const gp_Parab& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom_Curve)& L);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom_Curve)& L, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom_Curve)& L, const gp_Pnt& P1, const gp_Pnt& P2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom_Curve)& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom_Curve)& L, const gp_Pnt& P1, const gp_Pnt& P2, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom_Curve)& L, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const Standard_Real p1, const Standard_Real p2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const gp_Pnt& P1, const gp_Pnt& P2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const TopoDS_Vertex& V1, const TopoDS_Vertex& V2);
  // Standard_EXPORT BRepBuilderAPI_MakeEdge(const Handle(Geom2d_Curve)& L, const Handle(Geom_Surface)& S, const gp_Pnt& P1, const gp_Pnt& P2, const Standard_Real p1, const Standard_Real p2);

// BRepBuilderAPI_MakeFace
// BRepBuilderAPI_MakePolygon
// BRepBuilderAPI_MakeShape, full interface OCCT V7_4_0p1
  class_<BRepBuilderAPI_MakeShape, base<BRepBuilderAPI_Command>>("BRepBuilderAPI_MakeShape")
    .function("Build", &BRepBuilderAPI_MakeShape::Build)
    .function("Shape", &BRepBuilderAPI_MakeShape::Shape)
    .function("_cast_TopoDS_Shape", &BRepBuilderAPI_MakeShape::operator TopoDS_Shape)
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