#include <emscripten/bind.h>
using namespace emscripten;

#include "gp/gp_Circ.hxx"
#include "gp/gp_Elips.hxx"
#include "gp/gp_Hypr.hxx"
#include "gp/gp_Lin.hxx"
#include "gp/gp_Parab.hxx"
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
  #include "BRepBuilderAPI.h"
  #include "BRepPrim.h"
  #include "BRepPrimAPI.h"
  #include "GC.h"
  #include "gp.h"
}
