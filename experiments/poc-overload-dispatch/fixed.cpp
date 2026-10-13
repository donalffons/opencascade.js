// Implements the architecturally-correct fix proposed for OCJS V8:
//
//   FIX-A (RC-A): route every same-arity multi-overload group through ONE
//                 `optional_override` lambda that does val-based instanceof
//                 dispatch on the differing class-typed argument(s).
//
//   FIX-B (RC-B): at codegen-time, deduplicate JS-indistinguishable overloads
//                 (e.g. `size_t` vs `int`), preferring the V8-modern variant.
//                 The legacy `int` overload is simply not bound.
//
//   FIX-C       : drop the strict `len(js_ambiguous) > len(val_ambiguous)`
//                 guard — after FIX-B the doubly-ambiguous case stops existing.
//
// The shape of the emitted dispatcher matches what `_emitValDispatchMethod` +
// `_codegen_method_dispatch_tree` already produce for the `js_ambiguous` path
// in `src/bindings.py` — we are unifying every multi-overload group through
// that existing primitive.
#include <emscripten/bind.h>
#include "mini-occt.hpp"

using namespace emscripten;

namespace {

// Test whether `v` is a JS instance of the class registered under `name`.
inline bool is_instance(val v, const char* name) {
  if (v.typeOf().as<std::string>() != "object") return false;
  val ctor = val::module_property(name);
  if (ctor.isUndefined()) return false;
  return v.instanceof(ctor);
}

} // namespace

EMSCRIPTEN_BINDINGS(fixed) {
  enum_<XCAFDoc_ColorType>("XCAFDoc_ColorType")
    .value("Generic", XCAFDoc_ColorType::Generic)
    .value("Surface", XCAFDoc_ColorType::Surface)
    .value("Curve",   XCAFDoc_ColorType::Curve);

  class_<TDF_Label>("TDF_Label").constructor<>().constructor<int>();
  class_<Quantity_Color>("Quantity_Color").constructor<>().constructor<float, float, float>();
  class_<Quantity_ColorRGBA>("Quantity_ColorRGBA").constructor<>().constructor<float, float, float, float>();
  class_<TopoDS_Shape>("TopoDS_Shape").constructor<>().constructor<int>()
    .property("kind", &TopoDS_Shape::kind);

  // ---- FIX-A applied to SetColor (6 overloads, single dispatcher) ----
  class_<XCAFDoc_ColorTool>("XCAFDoc_ColorTool")
    .constructor<>()
    .property("lastCalled", &XCAFDoc_ColorTool::lastCalled)
    .function("SetColor",
      optional_override([](XCAFDoc_ColorTool& self, val arg0, val arg1, val arg2) -> val {
        XCAFDoc_ColorType t = arg2.as<XCAFDoc_ColorType>();
        if (is_instance(arg0, "TDF_Label")) {
          const TDF_Label& L = *arg0.as<TDF_Label*>(allow_raw_pointers());
          if (is_instance(arg1, "TDF_Label")) {
            self.SetColor(L, *arg1.as<TDF_Label*>(allow_raw_pointers()), t);
            return val::undefined();
          } else if (is_instance(arg1, "Quantity_Color")) {
            self.SetColor(L, *arg1.as<Quantity_Color*>(allow_raw_pointers()), t);
            return val::undefined();
          } else { // Quantity_ColorRGBA (fall-through inside this branch)
            self.SetColor(L, *arg1.as<Quantity_ColorRGBA*>(allow_raw_pointers()), t);
            return val::undefined();
          }
        } else { // TopoDS_Shape branch
          const TopoDS_Shape& s = *arg0.as<TopoDS_Shape*>(allow_raw_pointers());
          if (is_instance(arg1, "TDF_Label")) {
            return val(self.SetColor(s, *arg1.as<TDF_Label*>(allow_raw_pointers()), t));
          } else if (is_instance(arg1, "Quantity_Color")) {
            return val(self.SetColor(s, *arg1.as<Quantity_Color*>(allow_raw_pointers()), t));
          } else {
            return val(self.SetColor(s, *arg1.as<Quantity_ColorRGBA*>(allow_raw_pointers()), t));
          }
        }
      }),
      allow_raw_pointers());

  // ---- FIX-A applied to NCollection_List_Shape::Append (2 overloads) ----
  class_<NCollection_List_Shape>("NCollection_List_Shape")
    .constructor<>()
    .property("lastCalled", &NCollection_List_Shape::lastCalled)
    .function("Append",
      optional_override([](NCollection_List_Shape& self, val arg0) -> val {
        if (is_instance(arg0, "NCollection_List_Shape")) {
          self.Append(*arg0.as<NCollection_List_Shape*>(allow_raw_pointers()));
          return val::undefined();
        }
        // Else: route to the single-item Append(const TopoDS_Shape&).
        const TopoDS_Shape& item = *arg0.as<TopoDS_Shape*>(allow_raw_pointers());
        TopoDS_Shape& inserted = self.Append(item);
        return val(&inserted, allow_raw_pointers());
      }),
      allow_raw_pointers());

  // ---- FIX-B applied to NCollection_IndexedMap_Shape::FindKey ----
  // Dedup at codegen time: only the V8-modern size_t overload is bound.
  // The legacy `int` overload is dropped — JS-indistinguishable from size_t.
  class_<NCollection_IndexedMap_Shape>("NCollection_IndexedMap_Shape")
    .constructor<>()
    .property("lastCalled", &NCollection_IndexedMap_Shape::lastCalled)
    .function("FindKey",
      select_overload<TopoDS_Shape(size_t)const, NCollection_IndexedMap_Shape>(&NCollection_IndexedMap_Shape::FindKey),
      allow_raw_pointers());
}
