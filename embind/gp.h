// gp_Pnt
class_<gp_Pnt>("gp_Pnt")
  .function("SetCoord_1", select_overload<void(const Standard_Integer, const Standard_Real)>(&gp_Pnt::SetCoord))
  .function("SetCoord_2", select_overload<void(const Standard_Real, const Standard_Real, const Standard_Real)>(&gp_Pnt::SetCoord))
  .function("SetX", &gp_Pnt::SetX)
  .function("SetY", &gp_Pnt::SetY)
  .function("SetZ", &gp_Pnt::SetZ)
  .function("SetXYZ", &gp_Pnt::SetXYZ)
  .function("Coord_1", select_overload<Standard_Real(const Standard_Integer)const>(&gp_Pnt::Coord))
  .function("Coord_2", select_overload<void(Standard_Real&, Standard_Real&, Standard_Real&)const>(&gp_Pnt::Coord))
  ;

struct gp_Pnt_1 : public gp_Pnt {
  gp_Pnt_1() : gp_Pnt() {}
};
class_<gp_Pnt_1, base<gp_Pnt>>("gp_Pnt_1")
  .constructor<>();

struct gp_Pnt_2 : public gp_Pnt {
  gp_Pnt_2(const gp_XYZ& Coord) : gp_Pnt(Coord) {}
};
class_<gp_Pnt_2, base<gp_Pnt>>("gp_Pnt_2")
  .constructor<const gp_XYZ&>();

struct gp_Pnt_3 : public gp_Pnt {
  gp_Pnt_3(const Standard_Real Xp, const Standard_Real Yp, const Standard_Real Zp) : gp_Pnt(Xp, Yp, Zp) {}
};
class_<gp_Pnt_3, base<gp_Pnt>>("gp_Pnt_3")
  .constructor<const Standard_Real, const Standard_Real, const Standard_Real>();
