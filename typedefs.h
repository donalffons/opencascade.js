#include <Standard_Handle.hxx>
#include <Poly_Triangulation.hxx>
#include <TColStd_HSequenceOfTransient.hxx>
#include <XSControl_WorkSession.hxx>
#include <Transfer_TransientProcess.hxx>
#include <Poly_Polygon3D.hxx>
#include <Poly_PolygonOnTriangulation.hxx>
#include <Geom_Curve.hxx>
#include <Geom_Circle.hxx>
#include <Geom_Ellipse.hxx>
#include <Geom_Hyperbola.hxx>
#include <Geom_Parabola.hxx>
#include <Geom_BezierCurve.hxx>
#include <Geom_BSplineCurve.hxx>
#include <Geom_TrimmedCurve.hxx>
#include <Geom_Surface.hxx>
#include <Standard_Type.hxx>

typedef Handle(Poly_Triangulation) Handle_Poly_Triangulation;
typedef Handle(TColStd_HSequenceOfTransient) Handle_TColStd_HSequenceOfTransient;
typedef Handle(XSControl_WorkSession) Handle_XSControl_WorkSession;
typedef Handle(Transfer_TransientProcess) Handle_Tansfer_TransientProcess;
typedef Handle(Message_ProgressIndicator) Handle_Message_ProgressIndicator;
typedef Handle(Poly_Polygon3D) Handle_Poly_Polygon3D;
typedef Handle(Poly_PolygonOnTriangulation) Handle_Poly_PolygonOnTriangulation;
typedef Handle(Geom_Curve) Handle_Geom_Curve;
typedef Handle(Geom_BezierCurve) Handle_Geom_BezierCurve;
typedef Handle(Geom_BSplineCurve) Handle_Geom_BSplineCurve;
typedef Handle(Geom_TrimmedCurve) Handle_Geom_TrimmedCurve;
typedef Handle(Geom_Circle) Handle_Geom_Circle;
typedef Handle(Geom_Ellipse) Handle_Geom_Ellipse;
typedef Handle(Geom_Hyperbola) Handle_Geom_Hyperbola;
typedef Handle(Geom_Surface) Handle_Geom_Surface;
typedef Handle(Standard_Type) Handle_Standard_Type;
typedef Handle(Geom_Plane) Handle_Geom_Plane;
typedef Handle(ShapeFix_Shell) Handle_ShapeFix_Shell;
