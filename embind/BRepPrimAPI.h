// BRepPrimAPI_MakeTorus
class_<BRepPrimAPI_MakeTorus>("BRepPrimAPI_MakeTorus")
  .function("Torus", &BRepPrimAPI_MakeTorus::Torus);

struct BRepPrimAPI_MakeTorus_1 : public BRepPrimAPI_MakeTorus {
  BRepPrimAPI_MakeTorus_1(const Standard_Real R1, const Standard_Real R2) : BRepPrimAPI_MakeTorus(R1, R2) {}
};
class_<BRepPrimAPI_MakeTorus_1, base<BRepPrimAPI_MakeTorus>>("BRepPrimAPI_MakeTorus_1")
  .constructor<const Standard_Real, const Standard_Real>();

struct BRepPrimAPI_MakeTorus_2 : public BRepPrimAPI_MakeTorus {
  BRepPrimAPI_MakeTorus_2(const Standard_Real R1, const Standard_Real R2, const Standard_Real angle) : BRepPrimAPI_MakeTorus(R1, R2, angle) {}
};
class_<BRepPrimAPI_MakeTorus_2, base<BRepPrimAPI_MakeTorus>>("BRepPrimAPI_MakeTorus_2")
  .constructor<const Standard_Real, const Standard_Real, const Standard_Real>();