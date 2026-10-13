// Reproduces the CURRENT OCJS codegen pattern for same-arity, JS-distinguishable
// class-typed overloads: multiple `.function("Name", select_overload<...>(...))`
// registrations under the same name. Embind keys its method table on
// (name, arity), so the LATER registration silently clobbers the earlier ones.
// Only the *last* SetColor (TopoDS_Shape, Quantity_ColorRGBA, …) is reachable.
// Also reproduces RC-B: FindKey is emitted only as `_1`/`_2` suffixed variants,
// no callable primary `FindKey`.
#include <emscripten/bind.h>
#include "mini-occt.hpp"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(broken) {
  enum_<XCAFDoc_ColorType>("XCAFDoc_ColorType")
    .value("Generic", XCAFDoc_ColorType::Generic)
    .value("Surface", XCAFDoc_ColorType::Surface)
    .value("Curve",   XCAFDoc_ColorType::Curve);

  class_<TDF_Label>("TDF_Label").constructor<>().constructor<int>();
  class_<Quantity_Color>("Quantity_Color").constructor<>().constructor<float, float, float>();
  class_<Quantity_ColorRGBA>("Quantity_ColorRGBA").constructor<>().constructor<float, float, float, float>();
  class_<TopoDS_Shape>("TopoDS_Shape").constructor<>().constructor<int>()
    .property("kind", &TopoDS_Shape::kind);

  // ---- RC-A specimen 1: SetColor — six same-arity registrations (clobber) ----
  class_<XCAFDoc_ColorTool>("XCAFDoc_ColorTool")
    .constructor<>()
    .property("lastCalled", &XCAFDoc_ColorTool::lastCalled)
    .function("SetColor",
      select_overload<void(const TDF_Label&, const TDF_Label&, XCAFDoc_ColorType)const, XCAFDoc_ColorTool>(&XCAFDoc_ColorTool::SetColor),
      allow_raw_pointers())
    .function("SetColor",
      select_overload<void(const TDF_Label&, const Quantity_Color&, XCAFDoc_ColorType)const, XCAFDoc_ColorTool>(&XCAFDoc_ColorTool::SetColor),
      allow_raw_pointers())
    .function("SetColor",
      select_overload<void(const TDF_Label&, const Quantity_ColorRGBA&, XCAFDoc_ColorType)const, XCAFDoc_ColorTool>(&XCAFDoc_ColorTool::SetColor),
      allow_raw_pointers())
    .function("SetColor",
      select_overload<bool(const TopoDS_Shape&, const TDF_Label&, XCAFDoc_ColorType), XCAFDoc_ColorTool>(&XCAFDoc_ColorTool::SetColor),
      allow_raw_pointers())
    .function("SetColor",
      select_overload<bool(const TopoDS_Shape&, const Quantity_Color&, XCAFDoc_ColorType), XCAFDoc_ColorTool>(&XCAFDoc_ColorTool::SetColor),
      allow_raw_pointers())
    .function("SetColor",
      select_overload<bool(const TopoDS_Shape&, const Quantity_ColorRGBA&, XCAFDoc_ColorType), XCAFDoc_ColorTool>(&XCAFDoc_ColorTool::SetColor),
      allow_raw_pointers());

  // ---- RC-A specimen 2: List.Append — two same-arity registrations (clobber) ----
  class_<NCollection_List_Shape>("NCollection_List_Shape")
    .constructor<>()
    .property("lastCalled", &NCollection_List_Shape::lastCalled)
    .function("Append",
      select_overload<TopoDS_Shape&(const TopoDS_Shape&), NCollection_List_Shape>(&NCollection_List_Shape::Append),
      allow_raw_pointers())
    .function("Append",
      select_overload<void(NCollection_List_Shape&), NCollection_List_Shape>(&NCollection_List_Shape::Append),
      allow_raw_pointers());

  // ---- RC-B specimen: FindKey — _N suffixes only, no primary ----
  class_<NCollection_IndexedMap_Shape>("NCollection_IndexedMap_Shape")
    .constructor<>()
    .property("lastCalled", &NCollection_IndexedMap_Shape::lastCalled)
    .function("FindKey_1",
      select_overload<TopoDS_Shape(size_t)const, NCollection_IndexedMap_Shape>(&NCollection_IndexedMap_Shape::FindKey),
      allow_raw_pointers())
    .function("FindKey_2",
      select_overload<TopoDS_Shape(int)const, NCollection_IndexedMap_Shape>(&NCollection_IndexedMap_Shape::FindKey),
      allow_raw_pointers());
}
