#include <emscripten/bind.h>
using namespace emscripten;

// BRepBuilderAPI
#include "BRepBuilderAPI_BndBoxTreeSelector.hxx"
#include "BRepBuilderAPI_CellFilter.hxx"
#include "BRepBuilderAPI_Collect.hxx"
#include "BRepBuilderAPI_Collect.hxx"
#include "BRepBuilderAPI_Command.hxx"
#include "BRepBuilderAPI_Command.hxx"
#include "BRepBuilderAPI_Copy.hxx"
#include "BRepBuilderAPI_Copy.hxx"
#include "BRepBuilderAPI.hxx"
#include "BRepBuilderAPI_EdgeError.hxx"
#include "BRepBuilderAPI_FaceError.hxx"
#include "BRepBuilderAPI_FastSewing.hxx"
#include "BRepBuilderAPI_FastSewing.hxx"
#include "BRepBuilderAPI_FindPlane.hxx"
#include "BRepBuilderAPI_FindPlane.hxx"
#include "BRepBuilderAPI_GTransform.hxx"
#include "BRepBuilderAPI_GTransform.hxx"
#include "BRepBuilderAPI.hxx"
#include "BRepBuilderAPI_MakeEdge2d.hxx"
#include "BRepBuilderAPI_MakeEdge2d.hxx"
#include "BRepBuilderAPI_MakeEdge.hxx"
#include "BRepBuilderAPI_MakeEdge.hxx"
#include "BRepBuilderAPI_MakeFace.hxx"
#include "BRepBuilderAPI_MakeFace.hxx"
#include "BRepBuilderAPI_MakePolygon.hxx"
#include "BRepBuilderAPI_MakePolygon.hxx"
#include "BRepBuilderAPI_MakeShape.hxx"
#include "BRepBuilderAPI_MakeShape.hxx"
#include "BRepBuilderAPI_MakeShell.hxx"
#include "BRepBuilderAPI_MakeShell.hxx"
#include "BRepBuilderAPI_MakeSolid.hxx"
#include "BRepBuilderAPI_MakeSolid.hxx"
#include "BRepBuilderAPI_MakeVertex.hxx"
#include "BRepBuilderAPI_MakeVertex.hxx"
#include "BRepBuilderAPI_MakeWire.hxx"
#include "BRepBuilderAPI_MakeWire.hxx"
#include "BRepBuilderAPI_ModifyShape.hxx"
#include "BRepBuilderAPI_ModifyShape.hxx"
#include "BRepBuilderAPI_NurbsConvert.hxx"
#include "BRepBuilderAPI_NurbsConvert.hxx"
#include "BRepBuilderAPI_PipeError.hxx"
#include "BRepBuilderAPI_Sewing.hxx"
#include "BRepBuilderAPI_Sewing.hxx"
#include "BRepBuilderAPI_Sewing.hxx"
#include "BRepBuilderAPI_ShapeModification.hxx"
#include "BRepBuilderAPI_ShellError.hxx"
#include "BRepBuilderAPI_Transform.hxx"
#include "BRepBuilderAPI_Transform.hxx"
#include "BRepBuilderAPI_TransitionMode.hxx"
#include "BRepBuilderAPI_VertexInspector.hxx"
#include "BRepBuilderAPI_WireError.hxx"

// gp
#include "gp_Ax1.hxx"
#include "gp_Ax22d.hxx"
#include "gp_Ax2d.hxx"
#include "gp_Ax2.hxx"
#include "gp_Ax3.hxx"
#include "gp_Circ2d.hxx"
#include "gp_Circ.hxx"
#include "gp_Cone.hxx"
#include "gp_Cylinder.hxx"
#include "gp_Dir2d.hxx"
#include "gp_Dir.hxx"
#include "gp_Elips2d.hxx"
#include "gp_Elips.hxx"
#include "gp_EulerSequence.hxx"
#include "gp_GTrsf2d.hxx"
#include "gp_GTrsf.hxx"
#include "gp.hxx"
#include "gp_Hypr2d.hxx"
#include "gp_Hypr.hxx"
#include "gp_Lin2d.hxx"
#include "gp_Lin.hxx"
#include "gp_Mat2d.hxx"
#include "gp_Mat.hxx"
#include "gp_Parab2d.hxx"
#include "gp_Parab.hxx"
#include "gp_Pln.hxx"
#include "gp_Pnt2d.hxx"
#include "gp_Pnt.hxx"
#include "gp_Quaternion.hxx"
#include "gp_QuaternionNLerp.hxx"
#include "gp_QuaternionSLerp.hxx"
#include "gp_Sphere.hxx"
#include "gp_Torus.hxx"
#include "gp_Trsf2d.hxx"
#include "gp_TrsfForm.hxx"
#include "gp_Trsf.hxx"
#include "gp_TrsfNLerp.hxx"
#include "gp_Vec2d.hxx"
#include "gp_Vec.hxx"
#include "gp_VectorWithNullMagnitude.hxx"
#include "gp_XY.hxx"
#include "gp_XYZ.hxx"

#include "BRepBuilderAPI/BRepBuilderAPI_MakeEdge.hxx"
#include "BRepPrimAPI/BRepPrimAPI_MakeTorus.hxx"
#include "GC/GC_MakeArcOfCircle.hxx"
#include "GC/GC_MakeSegment.hxx"

#define Standard_EXPORT
#define Standard_NODISCARD
#define DEFINE_STANDARD_ALLOC

#define really_unparen(...) __VA_ARGS__
#define invoke(expr) expr
#define unparen(args) invoke(really_unparen args)

#define overloadedConstructor(baseClass, overloadedClass, parameterFull, parameterNames, parameterTypes) \
  struct overloadedClass : public baseClass { \
    overloadedClass(unparen(parameterFull)) : baseClass(unparen(parameterNames)) {} \
  }; \
  class_<overloadedClass, base<baseClass>>(#overloadedClass) \
    .constructor<unparen(parameterTypes)>();

EMSCRIPTEN_BINDINGS(opencascadejs) {
  #include "./BRepBuilderAPI.h"
  #include "./gp.h"
}
