// BRepPrimAPI_MakeBox
// BRepPrimAPI_MakeCone
// BRepPrimAPI_MakeCylinder
// BRepPrimAPI_MakeHalfSpace
// BRepPrimAPI_MakeOneAxis
// BRepPrimAPI_MakePrism
// BRepPrimAPI_MakeRevol
// BRepPrimAPI_MakeRevolution
// BRepPrimAPI_MakeSphere
// BRepPrimAPI_MakeSweep
// BRepPrimAPI_MakeTorus
  class_<BRepPrimAPI_MakeTorus>("BRepPrimAPI_MakeTorus")
    .function("Torus", &BRepPrimAPI_MakeTorus::Torus);

  overloadedConstructor(BRepPrimAPI_MakeTorus, BRepPrimAPI_MakeTorus_1,
    (const Standard_Real R1, const Standard_Real R2),
    (R1, R2),
    (const Standard_Real, const Standard_Real));
  overloadedConstructor(BRepPrimAPI_MakeTorus, BRepPrimAPI_MakeTorus_2,
    (const Standard_Real R1, const Standard_Real R2, const Standard_Real angle),
    (R1, R2, angle),
    (const Standard_Real, const Standard_Real, const Standard_Real));

// BRepPrimAPI_MakeWedge