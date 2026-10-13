// Comprehensive Option D POC — covers all 10 NCollection container shapes
// from the architecture doc's Appendix A. Sequenced by strategy:
//
//   Strategy A  — class_<NCollection_X<…>> baseline (one per shape)
//   Strategy D  — per-API adapter + register_type<>() for clean TS surface
//   Strategy Dp — primitive zero-copy fast-path via typed_memory_view
//   Strategy F  — single NCollectionLiveHandle with element-type-tag (long-tail fallback)
//
// Plus dedicated adapters for the open questions:
//
//   OQ1 (handle wrapping) — getHandleArray1_unwrapped + getHandleArray1_envelope
//   OQ2 (mutation)        — exposed via Strategy A live handle + Strategy D copy + Strategy Dp view
//   OQ4 (iterator)        — getIterator_strategyD returns Iterable<Pnt3>
//   OQ5 (long-tail)       — Strategy F bindings + producer per shape
//
// Build:  ./build.sh
// Run  :  node run.mjs

#include <emscripten/bind.h>
#include <emscripten/val.h>

#include "element-types.hxx"
#include "shapes.hxx"

#include <algorithm>
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <string>
#include <utility>
#include <vector>

using namespace emscripten;

// ─── Value-object registrations (shared across strategies) ─────────────

EMSCRIPTEN_BINDINGS(value_objects) {
  value_object<Pnt3>("Pnt3")
    .field("x", &Pnt3::x)
    .field("y", &Pnt3::y)
    .field("z", &Pnt3::z);

  value_object<Vec3>("Vec3")
    .field("x", &Vec3::x)
    .field("y", &Vec3::y)
    .field("z", &Vec3::z);

  value_object<EdgeKey>("EdgeKey")
    .field("a",           &EdgeKey::a)
    .field("b",           &EdgeKey::b)
    .field("orientation", &EdgeKey::orientation);

  value_object<ShapeStub>("ShapeStub")
    .field("id",    &ShapeStub::id)
    .field("kind",  &ShapeStub::kind)
    .field("flags", &ShapeStub::flags);
}

// ─── Sample producers (shared between strategies for parity testing) ──

namespace samples {

inline Pnt3 makePnt(int i) {
  return Pnt3{double(i), double(i) * 2.0, double(i) * 3.0};
}

inline NCollection_Array1_Stub<Pnt3>* makeArray1Pnt3(int n) {
  auto* p = new NCollection_Array1_Stub<Pnt3>(0, n - 1);
  for (int i = 0; i < n; ++i) p->SetValue(i, makePnt(i));
  return p;
}

inline NCollection_Array1_Stub<double>* makeArray1Double(int n) {
  auto* p = new NCollection_Array1_Stub<double>(0, n - 1);
  for (int i = 0; i < n; ++i) p->SetValue(i, double(i) * 0.5);
  return p;
}

inline NCollection_Array1_Stub<int>* makeArray1Int(int n) {
  auto* p = new NCollection_Array1_Stub<int>(0, n - 1);
  for (int i = 0; i < n; ++i) p->SetValue(i, i * 7);
  return p;
}

inline NCollection_Array2_Stub<Pnt3>* makeArray2Pnt3(int rows, int cols) {
  auto* p = new NCollection_Array2_Stub<Pnt3>(0, rows - 1, 0, cols - 1);
  for (int r = 0; r < rows; ++r)
    for (int c = 0; c < cols; ++c)
      p->SetValue(r, c, Pnt3{double(r), double(c), double(r * cols + c)});
  return p;
}

inline NCollection_Array2_Stub<double>* makeArray2Double(int rows, int cols) {
  auto* p = new NCollection_Array2_Stub<double>(0, rows - 1, 0, cols - 1);
  for (int r = 0; r < rows; ++r)
    for (int c = 0; c < cols; ++c)
      p->SetValue(r, c, double(r * cols + c) * 0.25);
  return p;
}

inline NCollection_DynamicArray_Stub<Pnt3>* makeDynArrayPnt3(int n) {
  auto* p = new NCollection_DynamicArray_Stub<Pnt3>();
  for (int i = 0; i < n; ++i) p->Append(makePnt(i));
  return p;
}

inline NCollection_DynamicArray_Stub<double>* makeDynArrayDouble(int n) {
  auto* p = new NCollection_DynamicArray_Stub<double>();
  for (int i = 0; i < n; ++i) p->Append(double(i) * 0.5);
  return p;
}

inline NCollection_Sequence_Stub<Pnt3>* makeSequencePnt3(int n) {
  auto* p = new NCollection_Sequence_Stub<Pnt3>();
  for (int i = 0; i < n; ++i) p->Append(makePnt(i));
  return p;
}

inline NCollection_List_Stub<Pnt3>* makeListPnt3(int n) {
  auto* p = new NCollection_List_Stub<Pnt3>();
  for (int i = 0; i < n; ++i) p->Append(makePnt(i));
  return p;
}

inline NCollection_Map_Stub<int>* makeMapInt(int n) {
  auto* p = new NCollection_Map_Stub<int>();
  for (int i = 0; i < n; ++i) p->Add(i * 13);
  return p;
}

inline NCollection_Map_Stub<EdgeKey>* makeMapEdgeKey(int n) {
  auto* p = new NCollection_Map_Stub<EdgeKey>();
  for (int i = 0; i < n; ++i) p->Add(EdgeKey{i, i + 1, i % 2});
  return p;
}

inline NCollection_DataMap_Stub<std::string, Pnt3>* makeDataMapStrPnt(int n) {
  auto* p = new NCollection_DataMap_Stub<std::string, Pnt3>();
  for (int i = 0; i < n; ++i) p->Bind(std::string("pt") + std::to_string(i), makePnt(i));
  return p;
}

inline NCollection_DataMap_Stub<int, Pnt3>* makeDataMapIntPnt(int n) {
  auto* p = new NCollection_DataMap_Stub<int, Pnt3>();
  for (int i = 0; i < n; ++i) p->Bind(i * 17, makePnt(i));
  return p;
}

inline NCollection_IndexedMap_Stub<std::string>* makeIndexedMapStr(int n) {
  auto* p = new NCollection_IndexedMap_Stub<std::string>();
  for (int i = 0; i < n; ++i) p->Add(std::string("k") + std::to_string(i));
  return p;
}

inline NCollection_IndexedDataMap_Stub<std::string, Pnt3>* makeIDataMapStrPnt(int n) {
  auto* p = new NCollection_IndexedDataMap_Stub<std::string, Pnt3>();
  for (int i = 0; i < n; ++i) p->Add(std::string("k") + std::to_string(i), makePnt(i));
  return p;
}

inline NCollection_DoubleMap_Stub<int, std::string>* makeDoubleMapIntStr(int n) {
  auto* p = new NCollection_DoubleMap_Stub<int, std::string>();
  for (int i = 0; i < n; ++i) p->Bind(i, std::string("v") + std::to_string(i));
  return p;
}

}  // namespace samples

// =====================================================================
//  STRATEGY A — STATUS QUO (one class_<> per permutation)
// =====================================================================

EMSCRIPTEN_BINDINGS(strategy_a_array1) {
  class_<NCollection_Array1_Stub<Pnt3>>("NCollection_Array1_Pnt3")
    .function("Lower",       &NCollection_Array1_Stub<Pnt3>::Lower)
    .function("Upper",       &NCollection_Array1_Stub<Pnt3>::Upper)
    .function("Length",      &NCollection_Array1_Stub<Pnt3>::Length)
    .function("Value",       &NCollection_Array1_Stub<Pnt3>::Value)
    .function("SetValue",    &NCollection_Array1_Stub<Pnt3>::SetValue);

  class_<NCollection_Array1_Stub<double>>("NCollection_Array1_double")
    .function("Lower",    &NCollection_Array1_Stub<double>::Lower)
    .function("Upper",    &NCollection_Array1_Stub<double>::Upper)
    .function("Length",   &NCollection_Array1_Stub<double>::Length)
    .function("Value",    &NCollection_Array1_Stub<double>::Value)
    .function("SetValue", &NCollection_Array1_Stub<double>::SetValue);

  class_<NCollection_Array1_Stub<int>>("NCollection_Array1_int")
    .function("Lower",    &NCollection_Array1_Stub<int>::Lower)
    .function("Upper",    &NCollection_Array1_Stub<int>::Upper)
    .function("Length",   &NCollection_Array1_Stub<int>::Length)
    .function("Value",    &NCollection_Array1_Stub<int>::Value)
    .function("SetValue", &NCollection_Array1_Stub<int>::SetValue);

  function("getArray1Pnt3_strategyA",   &samples::makeArray1Pnt3,   return_value_policy::take_ownership());
  function("getArray1Double_strategyA", &samples::makeArray1Double, return_value_policy::take_ownership());
  function("getArray1Int_strategyA",    &samples::makeArray1Int,    return_value_policy::take_ownership());
}

EMSCRIPTEN_BINDINGS(strategy_a_array2) {
  class_<NCollection_Array2_Stub<Pnt3>>("NCollection_Array2_Pnt3")
    .function("LowerRow",   &NCollection_Array2_Stub<Pnt3>::LowerRow)
    .function("UpperRow",   &NCollection_Array2_Stub<Pnt3>::UpperRow)
    .function("LowerCol",   &NCollection_Array2_Stub<Pnt3>::LowerCol)
    .function("UpperCol",   &NCollection_Array2_Stub<Pnt3>::UpperCol)
    .function("NbRows",     &NCollection_Array2_Stub<Pnt3>::NbRows)
    .function("NbCols",     &NCollection_Array2_Stub<Pnt3>::NbCols)
    .function("Value",      &NCollection_Array2_Stub<Pnt3>::Value)
    .function("SetValue",   &NCollection_Array2_Stub<Pnt3>::SetValue);

  class_<NCollection_Array2_Stub<double>>("NCollection_Array2_double")
    .function("LowerRow", &NCollection_Array2_Stub<double>::LowerRow)
    .function("UpperRow", &NCollection_Array2_Stub<double>::UpperRow)
    .function("LowerCol", &NCollection_Array2_Stub<double>::LowerCol)
    .function("UpperCol", &NCollection_Array2_Stub<double>::UpperCol)
    .function("NbRows",   &NCollection_Array2_Stub<double>::NbRows)
    .function("NbCols",   &NCollection_Array2_Stub<double>::NbCols)
    .function("Value",    &NCollection_Array2_Stub<double>::Value)
    .function("SetValue", &NCollection_Array2_Stub<double>::SetValue);

  function("getArray2Pnt3_strategyA",
           +[](int rows, int cols) { return samples::makeArray2Pnt3(rows, cols); },
           return_value_policy::take_ownership());
  function("getArray2Double_strategyA",
           +[](int rows, int cols) { return samples::makeArray2Double(rows, cols); },
           return_value_policy::take_ownership());
}

EMSCRIPTEN_BINDINGS(strategy_a_dyn_array) {
  class_<NCollection_DynamicArray_Stub<Pnt3>>("NCollection_DynamicArray_Pnt3")
    .function("Size",   &NCollection_DynamicArray_Stub<Pnt3>::Size)
    .function("Length", &NCollection_DynamicArray_Stub<Pnt3>::Length)
    .function("Value",  &NCollection_DynamicArray_Stub<Pnt3>::Value)
    .function("Append", &NCollection_DynamicArray_Stub<Pnt3>::Append);

  class_<NCollection_DynamicArray_Stub<double>>("NCollection_DynamicArray_double")
    .function("Size",   &NCollection_DynamicArray_Stub<double>::Size)
    .function("Length", &NCollection_DynamicArray_Stub<double>::Length)
    .function("Value",  &NCollection_DynamicArray_Stub<double>::Value)
    .function("Append", &NCollection_DynamicArray_Stub<double>::Append);

  function("getDynArrayPnt3_strategyA",   &samples::makeDynArrayPnt3,   return_value_policy::take_ownership());
  function("getDynArrayDouble_strategyA", &samples::makeDynArrayDouble, return_value_policy::take_ownership());
}

EMSCRIPTEN_BINDINGS(strategy_a_sequence_list) {
  class_<NCollection_Sequence_Stub<Pnt3>>("NCollection_Sequence_Pnt3")
    .function("Length",  &NCollection_Sequence_Stub<Pnt3>::Length)
    .function("Append",  &NCollection_Sequence_Stub<Pnt3>::Append)
    .function("Prepend", &NCollection_Sequence_Stub<Pnt3>::Prepend)
    .function("Value",   &NCollection_Sequence_Stub<Pnt3>::Value);

  class_<NCollection_List_Stub<Pnt3>>("NCollection_List_Pnt3")
    .function("Extent",  &NCollection_List_Stub<Pnt3>::Extent)
    .function("Append",  &NCollection_List_Stub<Pnt3>::Append)
    .function("Prepend", &NCollection_List_Stub<Pnt3>::Prepend);

  function("getSequencePnt3_strategyA", &samples::makeSequencePnt3, return_value_policy::take_ownership());
  function("getListPnt3_strategyA",     &samples::makeListPnt3,     return_value_policy::take_ownership());
}

EMSCRIPTEN_BINDINGS(strategy_a_map) {
  class_<NCollection_Map_Stub<int>>("NCollection_Map_int")
    .function("Add",      &NCollection_Map_Stub<int>::Add)
    .function("Contains", &NCollection_Map_Stub<int>::Contains)
    .function("Extent",   &NCollection_Map_Stub<int>::Extent);

  class_<NCollection_Map_Stub<EdgeKey>>("NCollection_Map_EdgeKey")
    .function("Add",      &NCollection_Map_Stub<EdgeKey>::Add)
    .function("Contains", &NCollection_Map_Stub<EdgeKey>::Contains)
    .function("Extent",   &NCollection_Map_Stub<EdgeKey>::Extent);

  function("getMapInt_strategyA",     &samples::makeMapInt,     return_value_policy::take_ownership());
  function("getMapEdgeKey_strategyA", &samples::makeMapEdgeKey, return_value_policy::take_ownership());
}

EMSCRIPTEN_BINDINGS(strategy_a_data_map) {
  class_<NCollection_DataMap_Stub<std::string, Pnt3>>("NCollection_DataMap_string_Pnt3")
    .function("Bind",    &NCollection_DataMap_Stub<std::string, Pnt3>::Bind)
    .function("IsBound", &NCollection_DataMap_Stub<std::string, Pnt3>::IsBound)
    .function("Extent",  &NCollection_DataMap_Stub<std::string, Pnt3>::Extent)
    .function("Find",    &NCollection_DataMap_Stub<std::string, Pnt3>::Find);

  class_<NCollection_DataMap_Stub<int, Pnt3>>("NCollection_DataMap_int_Pnt3")
    .function("Bind",    &NCollection_DataMap_Stub<int, Pnt3>::Bind)
    .function("IsBound", &NCollection_DataMap_Stub<int, Pnt3>::IsBound)
    .function("Extent",  &NCollection_DataMap_Stub<int, Pnt3>::Extent)
    .function("Find",    &NCollection_DataMap_Stub<int, Pnt3>::Find);

  function("getDataMapStrPnt_strategyA", &samples::makeDataMapStrPnt, return_value_policy::take_ownership());
  function("getDataMapIntPnt_strategyA", &samples::makeDataMapIntPnt, return_value_policy::take_ownership());
}

EMSCRIPTEN_BINDINGS(strategy_a_indexed) {
  class_<NCollection_IndexedMap_Stub<std::string>>("NCollection_IndexedMap_string")
    .function("Add",      &NCollection_IndexedMap_Stub<std::string>::Add)
    .function("Contains", &NCollection_IndexedMap_Stub<std::string>::Contains)
    .function("Extent",   &NCollection_IndexedMap_Stub<std::string>::Extent)
    .function("FindKey",  &NCollection_IndexedMap_Stub<std::string>::FindKey);

  class_<NCollection_IndexedDataMap_Stub<std::string, Pnt3>>("NCollection_IndexedDataMap_string_Pnt3")
    .function("Add",            &NCollection_IndexedDataMap_Stub<std::string, Pnt3>::Add)
    .function("Contains",       &NCollection_IndexedDataMap_Stub<std::string, Pnt3>::Contains)
    .function("Extent",         &NCollection_IndexedDataMap_Stub<std::string, Pnt3>::Extent)
    .function("FindKey",        &NCollection_IndexedDataMap_Stub<std::string, Pnt3>::FindKey)
    .function("FindFromIndex",  &NCollection_IndexedDataMap_Stub<std::string, Pnt3>::FindFromIndex);

  function("getIndexedMapStr_strategyA", &samples::makeIndexedMapStr, return_value_policy::take_ownership());
  function("getIDataMapStrPnt_strategyA", &samples::makeIDataMapStrPnt, return_value_policy::take_ownership());
}

EMSCRIPTEN_BINDINGS(strategy_a_double_map) {
  class_<NCollection_DoubleMap_Stub<int, std::string>>("NCollection_DoubleMap_int_string")
    .function("Bind",     &NCollection_DoubleMap_Stub<int, std::string>::Bind)
    .function("IsBound1", &NCollection_DoubleMap_Stub<int, std::string>::IsBound1)
    .function("IsBound2", &NCollection_DoubleMap_Stub<int, std::string>::IsBound2)
    .function("Find1",    &NCollection_DoubleMap_Stub<int, std::string>::Find1)
    .function("Find2",    &NCollection_DoubleMap_Stub<int, std::string>::Find2)
    .function("Extent",   &NCollection_DoubleMap_Stub<int, std::string>::Extent);

  function("getDoubleMapIntStr_strategyA", &samples::makeDoubleMapIntStr, return_value_policy::take_ownership());
}

// =====================================================================
//  STRATEGY D — adapter + register_type<>() per shape
// =====================================================================

// Distinct phantom val types so register_type<>() can pin a precise TS string.

EMSCRIPTEN_DECLARE_VAL_TYPE(Pnt3Array);            // Pnt3[]
EMSCRIPTEN_DECLARE_VAL_TYPE(DoubleArray);          // number[]
EMSCRIPTEN_DECLARE_VAL_TYPE(IntArray);             // number[]
EMSCRIPTEN_DECLARE_VAL_TYPE(Pnt3Grid);             // Pnt3[][]
EMSCRIPTEN_DECLARE_VAL_TYPE(DoubleGrid);           // number[][]
EMSCRIPTEN_DECLARE_VAL_TYPE(StringSet);            // string[]
EMSCRIPTEN_DECLARE_VAL_TYPE(IntSet);               // number[]
EMSCRIPTEN_DECLARE_VAL_TYPE(EdgeKeyArray);         // EdgeKey[]
EMSCRIPTEN_DECLARE_VAL_TYPE(StrPnt3Map);           // Map<string, Pnt3>
EMSCRIPTEN_DECLARE_VAL_TYPE(StrPnt3KeysValues);    // { keys: string[], values: Pnt3[] }
EMSCRIPTEN_DECLARE_VAL_TYPE(IntPnt3Map);           // Map<number, Pnt3>
EMSCRIPTEN_DECLARE_VAL_TYPE(StrPnt3IndexedEntries);// Array<{ key: string, value: Pnt3 }>
EMSCRIPTEN_DECLARE_VAL_TYPE(IntStrPairArray);      // Array<[number, string]>

// ── Sequence-shaped: Array1, Array2, DynamicArray, Sequence, List ────

static Pnt3Array getArray1Pnt3_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(samples::makePnt(i)));
  return Pnt3Array(arr);
}

static DoubleArray getArray1Double_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(double(i) * 0.5));
  return DoubleArray(arr);
}

static IntArray getArray1Int_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(i * 7));
  return IntArray(arr);
}

static Pnt3Grid getArray2Pnt3_strategyD(int rows, int cols) {
  val outer = val::array();
  for (int r = 0; r < rows; ++r) {
    val row = val::array();
    for (int c = 0; c < cols; ++c) row.set(c, val(Pnt3{double(r), double(c), double(r * cols + c)}));
    outer.set(r, row);
  }
  return Pnt3Grid(outer);
}

static DoubleGrid getArray2Double_strategyD(int rows, int cols) {
  val outer = val::array();
  for (int r = 0; r < rows; ++r) {
    val row = val::array();
    for (int c = 0; c < cols; ++c) row.set(c, val(double(r * cols + c) * 0.25));
    outer.set(r, row);
  }
  return DoubleGrid(outer);
}

static Pnt3Array getDynArrayPnt3_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(samples::makePnt(i)));
  return Pnt3Array(arr);
}

static DoubleArray getDynArrayDouble_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(double(i) * 0.5));
  return DoubleArray(arr);
}

static Pnt3Array getSequencePnt3_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(samples::makePnt(i)));
  return Pnt3Array(arr);
}

static Pnt3Array getListPnt3_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(samples::makePnt(i)));
  return Pnt3Array(arr);
}

// ── Map-shaped adapters ──────────────────────────────────────────────

static IntSet getMapInt_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(i * 13));
  return IntSet(arr);
}

static EdgeKeyArray getMapEdgeKey_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(EdgeKey{i, i + 1, i % 2}));
  return EdgeKeyArray(arr);
}

// DataMap<string, Pnt3> — choose Map<K,V> shape (string keys are JS-primitive).
static StrPnt3Map getDataMapStrPnt_strategyD(int n) {
  val js_map = val::global("Map").new_();
  for (int i = 0; i < n; ++i)
    js_map.call<val>("set", val(std::string("pt") + std::to_string(i)), val(samples::makePnt(i)));
  return StrPnt3Map(js_map);
}

// DataMap<int, Pnt3> — also Map<K,V>; benches against the {keys,values} shape below.
static IntPnt3Map getDataMapIntPnt_strategyD(int n) {
  val js_map = val::global("Map").new_();
  for (int i = 0; i < n; ++i)
    js_map.call<val>("set", val(i * 17), val(samples::makePnt(i)));
  return IntPnt3Map(js_map);
}

// Alternative {keys, values} shape for DataMap consumers that iterate parallel arrays.
static StrPnt3KeysValues getDataMapStrPnt_strategyD_kv(int n) {
  val keys = val::array();
  val values = val::array();
  for (int i = 0; i < n; ++i) {
    keys.set(i, val(std::string("pt") + std::to_string(i)));
    values.set(i, val(samples::makePnt(i)));
  }
  val obj = val::object();
  obj.set("keys", keys);
  obj.set("values", values);
  return StrPnt3KeysValues(obj);
}

// IndexedMap<string> — preserves insertion order, so K[] is the natural shape.
static StringSet getIndexedMapStr_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) arr.set(i, val(std::string("k") + std::to_string(i)));
  return StringSet(arr);
}

// IndexedDataMap<string, Pnt3> — Array<{key, value}> preserves insertion order.
static StrPnt3IndexedEntries getIDataMapStrPnt_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) {
    val entry = val::object();
    entry.set("key",   val(std::string("k") + std::to_string(i)));
    entry.set("value", val(samples::makePnt(i)));
    arr.set(i, entry);
  }
  return StrPnt3IndexedEntries(arr);
}

// DoubleMap<int, string> — bidirectional mapping flattened to Array<[K1,K2]>.
static IntStrPairArray getDoubleMapIntStr_strategyD(int n) {
  val arr = val::array();
  for (int i = 0; i < n; ++i) {
    val pair = val::array();
    pair.set(0, val(i));
    pair.set(1, val(std::string("v") + std::to_string(i)));
    arr.set(i, pair);
  }
  return IntStrPairArray(arr);
}

EMSCRIPTEN_BINDINGS(strategy_d_register_types) {
  register_type<Pnt3Array>           ("Pnt3[]");
  register_type<DoubleArray>         ("number[]");
  register_type<IntArray>            ("number[]");
  register_type<Pnt3Grid>            ("Pnt3[][]");
  register_type<DoubleGrid>          ("number[][]");
  register_type<StringSet>           ("string[]");
  register_type<IntSet>              ("number[]");
  register_type<EdgeKeyArray>        ("EdgeKey[]");
  register_type<StrPnt3Map>          ("Map<string, Pnt3>");
  register_type<StrPnt3KeysValues>   ("{ keys: string[], values: Pnt3[] }");
  register_type<IntPnt3Map>          ("Map<number, Pnt3>");
  register_type<StrPnt3IndexedEntries>("Array<{ key: string, value: Pnt3 }>");
  register_type<IntStrPairArray>     ("Array<[number, string]>");
}

EMSCRIPTEN_BINDINGS(strategy_d_adapters) {
  function("getArray1Pnt3_strategyD",        &getArray1Pnt3_strategyD);
  function("getArray1Double_strategyD",      &getArray1Double_strategyD);
  function("getArray1Int_strategyD",         &getArray1Int_strategyD);
  function("getArray2Pnt3_strategyD",        &getArray2Pnt3_strategyD);
  function("getArray2Double_strategyD",      &getArray2Double_strategyD);
  function("getDynArrayPnt3_strategyD",      &getDynArrayPnt3_strategyD);
  function("getDynArrayDouble_strategyD",    &getDynArrayDouble_strategyD);
  function("getSequencePnt3_strategyD",      &getSequencePnt3_strategyD);
  function("getListPnt3_strategyD",          &getListPnt3_strategyD);
  function("getMapInt_strategyD",            &getMapInt_strategyD);
  function("getMapEdgeKey_strategyD",        &getMapEdgeKey_strategyD);
  function("getDataMapStrPnt_strategyD",     &getDataMapStrPnt_strategyD);
  function("getDataMapStrPnt_strategyD_kv",  &getDataMapStrPnt_strategyD_kv);
  function("getDataMapIntPnt_strategyD",     &getDataMapIntPnt_strategyD);
  function("getIndexedMapStr_strategyD",     &getIndexedMapStr_strategyD);
  function("getIDataMapStrPnt_strategyD",    &getIDataMapStrPnt_strategyD);
  function("getDoubleMapIntStr_strategyD",   &getDoubleMapIntStr_strategyD);
}

// =====================================================================
//  STRATEGY Dp — primitive zero-copy fast-path (typed_memory_view)
// =====================================================================
//
// CRITICAL CONTRACT: typed_memory_view exposes a JS TypedArray that aliases
// the underlying wasm linear memory directly. The producer must keep the
// memory alive for as long as the consumer holds the TypedArray. To make
// the lifetime auditable we leak a single arena per call and document the
// "view, not copy" semantics.

EMSCRIPTEN_DECLARE_VAL_TYPE(Float64View);
EMSCRIPTEN_DECLARE_VAL_TYPE(Int32View);
EMSCRIPTEN_DECLARE_VAL_TYPE(Float64Grid);

static Float64View getArray1Double_strategyDp(int n) {
  // Heap-allocated buffer; lifetime documented in run.mjs / mutation.mjs.
  // The {buffer,view} envelope below provides the explicit-free path.
  auto* buf = new double[n];
  for (int i = 0; i < n; ++i) buf[i] = double(i) * 0.5;
  return Float64View(val(typed_memory_view(static_cast<std::size_t>(n), buf)));
}

static Int32View getArray1Int_strategyDp(int n) {
  auto* buf = new int32_t[n];
  for (int i = 0; i < n; ++i) buf[i] = i * 7;
  return Int32View(val(typed_memory_view(static_cast<std::size_t>(n), buf)));
}

// Array1<gp_Pnt> interleaved as triples of doubles — the JS side reads
// xyz triples from a single Float64Array, no per-element wire crossing.
static Float64View getArray1Pnt3_strategyDp_interleaved(int n) {
  auto* buf = new double[n * 3];
  for (int i = 0; i < n; ++i) {
    buf[i * 3 + 0] = double(i);
    buf[i * 3 + 1] = double(i) * 2.0;
    buf[i * 3 + 2] = double(i) * 3.0;
  }
  return Float64View(val(typed_memory_view(static_cast<std::size_t>(n * 3), buf)));
}

static Float64View getArray2Double_strategyDp(int rows, int cols) {
  auto* buf = new double[rows * cols];
  for (int r = 0; r < rows; ++r)
    for (int c = 0; c < cols; ++c)
      buf[r * cols + c] = double(r * cols + c) * 0.25;
  return Float64View(val(typed_memory_view(static_cast<std::size_t>(rows * cols), buf)));
}

static Float64View getDynArrayDouble_strategyDp(int n) {
  auto* buf = new double[n];
  for (int i = 0; i < n; ++i) buf[i] = double(i) * 0.5;
  return Float64View(val(typed_memory_view(static_cast<std::size_t>(n), buf)));
}

// Explicit-free envelope: { view, free } — consumers call free() after
// they're done iterating. Used by leak.mjs to verify the lifetime contract.
EMSCRIPTEN_DECLARE_VAL_TYPE(Float64ViewWithFree);

static Float64ViewWithFree getArray1Double_strategyDp_owned(int n) {
  auto* buf = new double[n];
  for (int i = 0; i < n; ++i) buf[i] = double(i) * 0.5;
  val view = val(typed_memory_view(static_cast<std::size_t>(n), buf));
  // The free() closure re-acquires the pointer through a number, since
  // val cannot capture native pointers safely across the ABI boundary.
  std::uintptr_t addr = reinterpret_cast<std::uintptr_t>(buf);
  val obj = val::object();
  obj.set("view", view);
  obj.set("ptr",  val(static_cast<double>(addr)));
  obj.set("len",  val(n));
  return Float64ViewWithFree(obj);
}

static void freeStrategyDpBuffer(std::uintptr_t addr) {
  delete[] reinterpret_cast<double*>(addr);
}

EMSCRIPTEN_BINDINGS(strategy_dp_register_types) {
  register_type<Float64View>          ("Float64Array");
  register_type<Int32View>            ("Int32Array");
  register_type<Float64Grid>          ("Float64Array");  // Array2 flattened row-major
  register_type<Float64ViewWithFree>  ("{ view: Float64Array, ptr: number, len: number }");
}

EMSCRIPTEN_BINDINGS(strategy_dp_adapters) {
  function("getArray1Double_strategyDp",             &getArray1Double_strategyDp);
  function("getArray1Int_strategyDp",                &getArray1Int_strategyDp);
  function("getArray1Pnt3_strategyDp_interleaved",   &getArray1Pnt3_strategyDp_interleaved);
  function("getArray2Double_strategyDp",             &getArray2Double_strategyDp);
  function("getDynArrayDouble_strategyDp",           &getDynArrayDouble_strategyDp);
  function("getArray1Double_strategyDp_owned",       &getArray1Double_strategyDp_owned);
  function("freeStrategyDpBuffer",                   &freeStrategyDpBuffer);
}

// =====================================================================
//  STRATEGY F — single NCollectionLiveHandle (long-tail fallback, OQ5)
// =====================================================================

enum class ContainerKind : int {
  Array1Pnt3       = 0,
  Array1Double     = 1,
  DynArrayPnt3     = 2,
  SequencePnt3     = 3,
  ListPnt3         = 4,
  MapInt           = 5,
  DataMapStrPnt3   = 6,
  IndexedMapStr    = 7,
  IDataMapStrPnt3  = 8,
  DoubleMapIntStr  = 9,
};

class NCollectionLiveHandle {
public:
  NCollectionLiveHandle(void* ptr, ContainerKind kind, std::size_t size)
    : ptr_(ptr), kind_(kind), size_(size) {}

  // Owning destructor: dispatches deletion via the kind tag. Required so
  // .delete() on the JS handle reclaims the underlying container too.
  ~NCollectionLiveHandle() {
    if (!ptr_) return;
    switch (kind_) {
      case ContainerKind::Array1Pnt3:
        delete static_cast<NCollection_Array1_Stub<Pnt3>*>(ptr_); break;
      case ContainerKind::Array1Double:
        delete static_cast<NCollection_Array1_Stub<double>*>(ptr_); break;
      case ContainerKind::DynArrayPnt3:
        delete static_cast<NCollection_DynamicArray_Stub<Pnt3>*>(ptr_); break;
      case ContainerKind::SequencePnt3:
        delete static_cast<NCollection_Sequence_Stub<Pnt3>*>(ptr_); break;
      case ContainerKind::ListPnt3:
        delete static_cast<NCollection_List_Stub<Pnt3>*>(ptr_); break;
      case ContainerKind::MapInt:
        delete static_cast<NCollection_Map_Stub<int>*>(ptr_); break;
      case ContainerKind::IndexedMapStr:
        delete static_cast<NCollection_IndexedMap_Stub<std::string>*>(ptr_); break;
      case ContainerKind::DataMapStrPnt3:
        delete static_cast<NCollection_DataMap_Stub<std::string, Pnt3>*>(ptr_); break;
      case ContainerKind::IDataMapStrPnt3:
        delete static_cast<NCollection_IndexedDataMap_Stub<std::string, Pnt3>*>(ptr_); break;
      case ContainerKind::DoubleMapIntStr:
        delete static_cast<NCollection_DoubleMap_Stub<int, std::string>*>(ptr_); break;
    }
    ptr_ = nullptr;
  }

  NCollectionLiveHandle(NCollectionLiveHandle const&) = delete;
  NCollectionLiveHandle& operator=(NCollectionLiveHandle const&) = delete;

  std::size_t Size() const { return size_; }
  int         Kind() const { return static_cast<int>(kind_); }

  val At(std::size_t i) const {
    switch (kind_) {
      case ContainerKind::Array1Pnt3: {
        auto* a = static_cast<NCollection_Array1_Stub<Pnt3>*>(ptr_);
        return val(a->Value(a->Lower() + static_cast<int>(i)));
      }
      case ContainerKind::Array1Double: {
        auto* a = static_cast<NCollection_Array1_Stub<double>*>(ptr_);
        return val(a->Value(a->Lower() + static_cast<int>(i)));
      }
      case ContainerKind::DynArrayPnt3: {
        auto* a = static_cast<NCollection_DynamicArray_Stub<Pnt3>*>(ptr_);
        return val(a->Value(i));
      }
      case ContainerKind::SequencePnt3: {
        auto* a = static_cast<NCollection_Sequence_Stub<Pnt3>*>(ptr_);
        return val(a->Value(static_cast<int>(i + 1)));
      }
      case ContainerKind::ListPnt3: {
        auto* a = static_cast<NCollection_List_Stub<Pnt3>*>(ptr_);
        auto it = a->begin();
        std::advance(it, i);
        return val(*it);
      }
      case ContainerKind::MapInt: {
        auto* a = static_cast<NCollection_Map_Stub<int>*>(ptr_);
        auto it = a->begin();
        std::advance(it, i);
        return val(*it);
      }
      case ContainerKind::IndexedMapStr: {
        auto* a = static_cast<NCollection_IndexedMap_Stub<std::string>*>(ptr_);
        return val(a->FindKey(static_cast<int>(i + 1)));
      }
      case ContainerKind::DataMapStrPnt3:
      case ContainerKind::IDataMapStrPnt3:
      case ContainerKind::DoubleMapIntStr: {
        // Not exercised by the bench suite; map-shaped containers exposed
        // through Strategy D adapters instead. Document as not-applicable.
        return val::undefined();
      }
    }
    return val::undefined();
  }

  // Materialise the whole collection into a JS array — single bulk call.
  val ToArray() const {
    val arr = val::array();
    for (std::size_t i = 0; i < size_; ++i) arr.set(static_cast<unsigned>(i), At(i));
    return arr;
  }

private:
  void* ptr_;
  ContainerKind kind_;
  std::size_t size_;
};

static NCollectionLiveHandle* getLiveHandle_Array1Pnt3(int n) {
  auto* a = samples::makeArray1Pnt3(n);
  return new NCollectionLiveHandle(a, ContainerKind::Array1Pnt3, static_cast<std::size_t>(n));
}

static NCollectionLiveHandle* getLiveHandle_DynArrayPnt3(int n) {
  auto* a = samples::makeDynArrayPnt3(n);
  return new NCollectionLiveHandle(a, ContainerKind::DynArrayPnt3, static_cast<std::size_t>(n));
}

EMSCRIPTEN_BINDINGS(strategy_f_live_handle) {
  class_<NCollectionLiveHandle>("NCollectionLiveHandle")
    .function("Size",    &NCollectionLiveHandle::Size)
    .function("Kind",    &NCollectionLiveHandle::Kind)
    .function("At",      &NCollectionLiveHandle::At)
    .function("ToArray", &NCollectionLiveHandle::ToArray);

  function("getLiveHandle_Array1Pnt3",   &getLiveHandle_Array1Pnt3,   return_value_policy::take_ownership());
  function("getLiveHandle_DynArrayPnt3", &getLiveHandle_DynArrayPnt3, return_value_policy::take_ownership());
}

// =====================================================================
//  OQ1 — Handle-wrapping variants
// =====================================================================
//
// HandleStub<NCollection_HArray1OfPnt> mimics opencascade::handle<>'s
// refcount behaviour. The two adapters explore both consumer choices:
// drop the handle silently (unwrapped) vs preserve it for live mutation.

class NCollection_HArray1OfPnt : public ocstub::Transient {
public:
  explicit NCollection_HArray1OfPnt(int n) : data_(0, n - 1) {
    for (int i = 0; i < n; ++i) data_.SetValue(i, samples::makePnt(i));
  }
  NCollection_Array1_Stub<Pnt3> const& Array() const { return data_; }
  NCollection_Array1_Stub<Pnt3>&       Array()       { return data_; }
private:
  NCollection_Array1_Stub<Pnt3> data_;
};

// OQ1 envelope shape decisions:
//   - unwrapped: producer manages the handle internally, returns items only.
//                Refcount drops to 0 inside the producer, underlying array
//                freed. Default for consumers who don't need live access.
//   - envelope:  producer returns handle + items as TWO separate adapter
//                calls (`acquireHandleArray1` for the live handle, `materializeFromHandle`
//                for the items array). Consumer composes `{handle, items}`
//                JS-side. Embind cannot place a class instance into a val,
//                so a single-call envelope adapter is not feasible without
//                copying the class wire bridge — splitting the API also
//                lets consumers skip materialisation when they only need
//                the live handle (saving the bulk copy on the wire).

static Pnt3Array getHandleArray1_unwrapped(int n) {
  ocstub::HandleStub<NCollection_HArray1OfPnt> h(new NCollection_HArray1OfPnt(n));
  val arr = val::array();
  auto const& src = h->Array();
  for (int i = src.Lower(); i <= src.Upper(); ++i)
    arr.set(i - src.Lower(), val(src.Value(i)));
  return Pnt3Array(arr);
}

static ocstub::HandleStub<NCollection_HArray1OfPnt>* acquireHandleArray1(int n) {
  return new ocstub::HandleStub<NCollection_HArray1OfPnt>(new NCollection_HArray1OfPnt(n));
}

static Pnt3Array materializeFromHandle(ocstub::HandleStub<NCollection_HArray1OfPnt>* h) {
  val arr = val::array();
  if (!h || h->IsNull()) return Pnt3Array(arr);
  auto const& src = (*h)->Array();
  for (int i = src.Lower(); i <= src.Upper(); ++i)
    arr.set(i - src.Lower(), val(src.Value(i)));
  return Pnt3Array(arr);
}

static std::int64_t getHandleUseCount(ocstub::HandleStub<NCollection_HArray1OfPnt>* h) {
  return h ? h->UseCount() : 0;
}

EMSCRIPTEN_BINDINGS(handle_oq1) {
  class_<ocstub::HandleStub<NCollection_HArray1OfPnt>>("Handle_NCollection_HArray1OfPnt")
    .function("IsNull",   &ocstub::HandleStub<NCollection_HArray1OfPnt>::IsNull)
    .function("UseCount", &ocstub::HandleStub<NCollection_HArray1OfPnt>::UseCount);

  function("getHandleArray1_unwrapped", &getHandleArray1_unwrapped);
  function("acquireHandleArray1",       &acquireHandleArray1, return_value_policy::take_ownership());
  function("materializeFromHandle",     &materializeFromHandle, allow_raw_pointers());
  function("getHandleUseCount",         &getHandleUseCount, allow_raw_pointers());
}

// =====================================================================
//  OQ4 — Iterator-style adapter (Iterable<Pnt3>)
// =====================================================================
//
// Returns a JS object with `[Symbol.iterator]()` so consumers can `for…of`
// it without materialising the whole array. Uses a closed-over generator
// implemented in JS (constructed from C++ via val::eval), which is the
// idiomatic embind pattern when you need lazy iteration.

EMSCRIPTEN_DECLARE_VAL_TYPE(Pnt3IterableSource);

// Returns an iterator-source object the JS runner wraps with
// [Symbol.iterator]/next that calls back into `iteratorNextPnt3`. The
// per-element callback path is the wire-cost worst case used to bench
// against the bulk-copy adapter.
static Pnt3IterableSource getIterator_strategyD(int n) {
  val src = val::object();
  src.set("_i", val(0));
  src.set("_n", val(n));
  return Pnt3IterableSource(src);
}

static val iteratorNextPnt3(val state) {
  int i = state["_i"].as<int>();
  int n = state["_n"].as<int>();
  val out = val::object();
  if (i >= n) {
    out.set("done", val(true));
    out.set("value", val::undefined());
    return out;
  }
  state.set("_i", val(i + 1));
  out.set("done", val(false));
  out.set("value", val(samples::makePnt(i)));
  return out;
}

EMSCRIPTEN_BINDINGS(iterator_oq4) {
  register_type<Pnt3IterableSource>("{ _i: number, _n: number }");
  function("getIterator_strategyD", &getIterator_strategyD);
  function("iteratorNextPnt3",      &iteratorNextPnt3);
}

// =====================================================================
//  OQ2 — Mutation hooks for parity testing
// =====================================================================
//
// Strategy A returns a live handle with SetValue. Strategy D returns a
// fresh copy on each call. Strategy Dp returns a typed_memory_view that
// shares storage with the underlying buffer (mutations ARE visible).
//
// `mutateStrategyDpBuffer` lets the test runner verify the shared-storage
// semantics by re-reading the same pointer after a JS-side write.

static double readStrategyDpBufferAt(std::uintptr_t addr, int idx) {
  return reinterpret_cast<double*>(addr)[idx];
}

EMSCRIPTEN_BINDINGS(mutation_oq2) {
  function("readStrategyDpBufferAt", &readStrategyDpBufferAt);
}
