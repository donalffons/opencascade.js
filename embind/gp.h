// gp_Ax1
// gp_Ax22d
// gp_Ax2d
// gp_Ax2
// gp_Ax3
// gp_Circ2d
// gp_Circ
// gp_Cone
// gp_Cylinder
// gp_Dir2d
// gp_Dir
// gp_Elips2d
// gp_Elips
// gp_EulerSequence
// gp_GTrsf2d
// gp_GTrsf
// gp
// gp_Hypr2d
// gp_Hypr
// gp_Lin2d
// gp_Lin
// gp_Mat2d
// gp_Mat
// gp_Parab2d
// gp_Parab
// gp_Pln
// gp_Pnt2d
// gp_Pnt, full interface OCCT V7_4_0p1
  class_<gp_Pnt>("gp_Pnt")
    .function("SetCoord_1", select_overload<void (const Standard_Integer, const Standard_Real)>(&gp_Pnt::SetCoord))
    .function("SetCoord_2", select_overload<void (const Standard_Real, const Standard_Real, const Standard_Real)>(&gp_Pnt::SetCoord))
    .function("SetX", &gp_Pnt::SetX)
    .function("SetY", &gp_Pnt::SetY)
    .function("SetZ", &gp_Pnt::SetZ)
    .function("SetXYZ", &gp_Pnt::SetXYZ)
    .function("Coord_1", select_overload<Standard_Real  (const Standard_Integer) const>(&gp_Pnt::Coord))
    .function("Coord_2",
      reinterpret_cast<void (gp_Pnt::*)(const Standard_Real&, const Standard_Real&, const Standard_Real&)const>
      (select_overload<void (Standard_Real&, Standard_Real&, Standard_Real&) const>(&gp_Pnt::Coord))
    )
    .function("X", &gp_Pnt::X)
    .function("Y", &gp_Pnt::Y)
    .function("Z", &gp_Pnt::Z)
    .function("XYZ", &gp_Pnt::Z)
    .function("Coord_3", select_overload<const gp_XYZ& () const>(&gp_Pnt::Coord))
    .function("BaryCenter", &gp_Pnt::BaryCenter)
    .function("IsEqual", &gp_Pnt::IsEqual)
    .function("Distance", &gp_Pnt::Distance)
    .function("SquareDistance", &gp_Pnt::SquareDistance)
    .function("Mirror_1", select_overload<void (const gp_Pnt&)>(&gp_Pnt::Mirror))
    .function("Mirrored_1", select_overload<gp_Pnt (const gp_Pnt&) const>(&gp_Pnt::Mirrored))
    .function("Mirror_2", select_overload<void (const gp_Ax1&)>(&gp_Pnt::Mirror))
    .function("Mirrored_2", select_overload<gp_Pnt (const gp_Ax1&) const>(&gp_Pnt::Mirrored))
    .function("Mirror_3", select_overload<void (const gp_Ax2&)>(&gp_Pnt::Mirror))
    .function("Mirrored_3", select_overload<gp_Pnt (const gp_Ax2&) const>(&gp_Pnt::Mirrored))
    .function("Rotate", &gp_Pnt::Rotate)
    .function("Rotated", &gp_Pnt::Rotated)
    .function("Scale", &gp_Pnt::Scale)
    .function("Scaled", &gp_Pnt::Scaled)
    .function("Transform", &gp_Pnt::Transform)
    .function("Transformed_1", select_overload<gp_Pnt (const gp_Trsf&) const>(&gp_Pnt::Transformed))
    .function("Translate_1", select_overload<void (const gp_Vec&)>(&gp_Pnt::Translate))
    .function("Translated_1", select_overload<gp_Pnt (const gp_Vec&) const>(&gp_Pnt::Translated))
    .function("Translate_2", select_overload<void (const gp_Pnt&, const gp_Pnt&)>(&gp_Pnt::Translate))
    .function("Translated_2", select_overload<gp_Pnt (const gp_Pnt&, const gp_Pnt&) const>(&gp_Pnt::Translated))
    ;

  overloadedConstructor(gp_Pnt, gp_Pnt_1, (), (), ());
  overloadedConstructor(gp_Pnt, gp_Pnt_2, (const gp_XYZ& Coord), (Coord), (const gp_XYZ&));
  overloadedConstructor(gp_Pnt, gp_Pnt_3, (const Standard_Real Xp, const Standard_Real Yp, const Standard_Real Zp), (Xp, Yp, Zp), (const Standard_Real, const Standard_Real, const Standard_Real));

// gp_Quaternion
// gp_QuaternionNLerp
// gp_QuaternionSLerp
// gp_Sphere
// gp_Torus
// gp_Trsf2d
// gp_TrsfForm
// gp_Trsf
// gp_TrsfNLerp
// gp_Vec2d
// gp_Vec
// gp_VectorWithNullMagnitude
// gp_XY
// gp_XYZ
