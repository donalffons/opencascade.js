// GC_MakeArcOfCircle, full interface OCCT V7_4_0p1
  class_<GC_MakeArcOfCircle, base<GC_Root>>("GC_MakeArcOfCircle")
    .function("Value", &GC_MakeArcOfCircle::Value);

  overloadedConstructor(GC_MakeArcOfCircle, GC_MakeArcOfCircle_1,
    (const gp_Circ& Circ, const Standard_Real Alpha1, const Standard_Real Alpha2, const Standard_Boolean Sense),
    (Circ, Alpha1, Alpha2, Sense),
    (const gp_Circ&, const Standard_Real, const Standard_Real, const Standard_Boolean));
  overloadedConstructor(GC_MakeArcOfCircle, GC_MakeArcOfCircle_2,
    (const gp_Circ& Circ, const gp_Pnt& P, const Standard_Real Alpha, const Standard_Boolean Sense),
    (Circ, P, Alpha, Sense),
    (const gp_Circ&, const gp_Pnt&, const Standard_Real, const Standard_Boolean));
  overloadedConstructor(GC_MakeArcOfCircle, GC_MakeArcOfCircle_3,
    (const gp_Circ& Circ, const gp_Pnt& P1, const gp_Pnt& P2, const Standard_Boolean Sense),
    (Circ, P1, P2, Sense),
    (const gp_Circ&, const gp_Pnt&, const gp_Pnt&, const Standard_Boolean));
  overloadedConstructor(GC_MakeArcOfCircle, GC_MakeArcOfCircle_4,
    (const gp_Pnt& P1, const gp_Pnt& P2, const gp_Pnt& P3),
    (P1, P2, P3),
    (const gp_Pnt&, const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(GC_MakeArcOfCircle, GC_MakeArcOfCircle_5,
    (const gp_Pnt& P1, const gp_Vec& V, const gp_Pnt& P2),
    (P1, V, P2),
    (const gp_Pnt&, const gp_Vec&, const gp_Pnt&));

// GC_MakeArcOfEllipse
// GC_MakeArcOfHyperbola
// GC_MakeArcOfParabola
// GC_MakeCircle
// GC_MakeConicalSurface
// GC_MakeCylindricalSurface
// GC_MakeEllipse
// GC_MakeHyperbola
// GC_MakeLine
// GC_MakeMirror
// GC_MakePlane
// GC_MakeRotation
// GC_MakeScale
// GC_MakeSegment, full interface OCCT V7_4_0p1
  class_<GC_MakeSegment, base<GC_Root>>("GC_MakeSegment")
    .function("Value", &GC_MakeSegment::Value);

  overloadedConstructor(GC_MakeSegment, GC_MakeSegment_1,
    (const gp_Pnt& P1, const gp_Pnt& P2),
    (P1, P2),
    (const gp_Pnt&, const gp_Pnt&));
  overloadedConstructor(GC_MakeSegment, GC_MakeSegment_2,
    (const gp_Lin& Line, const Standard_Real U1, const Standard_Real U2),
    (Line, U1, U2),
    (const gp_Lin&, const Standard_Real, const Standard_Real));
  overloadedConstructor(GC_MakeSegment, GC_MakeSegment_3,
    (const gp_Lin& Line, const gp_Pnt& Point, const Standard_Real Ulast),
    (Line, Point, Ulast),
    (const gp_Lin&, const gp_Pnt&, const Standard_Real));
  overloadedConstructor(GC_MakeSegment, GC_MakeSegment_4,
    (const gp_Lin& Line, const gp_Pnt& P1, const gp_Pnt& P2),
    (Line, P1, P2),
    (const gp_Lin&, const gp_Pnt&, const gp_Pnt&));

// GC_MakeTranslation
// GC_MakeTrimmedCone
// GC_MakeTrimmedCylinder
// GC_Root, full interface OCCT V7_4_0p1
  class_<GC_Root>("GC_Root")
    .function("IsDone", &GC_Root::IsDone)
    .function("Status", &GC_Root::Status);
