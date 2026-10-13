// bindings-rows-val.cpp — Q3 quantification: val primitive ONLY for the
// rows where both primitives are candidates (1, 2, 24, 33, 34, 36).
//
// Pair-wise with bindings-rows-optional.cpp; the bench runner loads both
// modules, calls the same logical method against each, and reports per-call
// ns/delta + percentage.

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <string>

using namespace emscripten;

struct Q3_Row { int count = 0; bool defaulted = false; };

struct Q3_Row01_Val { Q3_Row r; void set(val a) {
  if (a.isUndefined() || a.isNull()) { r.defaulted = true; ++r.count; return; }
  r.defaulted = false; ++r.count;
}};
struct Q3_Row02_Val { Q3_Row r; void set(val a) {
  if (a.isUndefined()) { r.defaulted = true; ++r.count; return; }
  r.defaulted = false; ++r.count;
}};
struct Q3_Row24_Val { Q3_Row r; void set(val a, val b, val c) {
  bool d = a.isUndefined() && b.isUndefined() && c.isUndefined();
  r.defaulted = d; ++r.count;
}};
struct Q3_Row33_Val { Q3_Row r; std::string group, file;
  void set(val a, val b) {
    group = a.isUndefined() || a.isNull() ? "" : a.as<std::string>();
    file  = b.isUndefined() || b.isNull() ? "" : b.as<std::string>();
    r.defaulted = b.isUndefined() || b.isNull();
    ++r.count;
  }};
struct Q3_Row34_Val { Q3_Row r; void add(val edge, val cont, val flag) {
  r.defaulted = flag.isUndefined();
  ++r.count;
}};
struct Q3_Row36_Val { Q3_Row r; void set(val shape, val v) {
  r.defaulted = v.isUndefined() || v.isNull();
  ++r.count;
}};

EMSCRIPTEN_BINDINGS(q3_val_variant) {
  class_<Q3_Row01_Val>("Q3_Row01_Val").constructor<>().function("set", &Q3_Row01_Val::set);
  class_<Q3_Row02_Val>("Q3_Row02_Val").constructor<>().function("set", &Q3_Row02_Val::set);
  class_<Q3_Row24_Val>("Q3_Row24_Val").constructor<>().function("set", &Q3_Row24_Val::set);
  class_<Q3_Row33_Val>("Q3_Row33_Val").constructor<>().function("set", &Q3_Row33_Val::set);
  class_<Q3_Row34_Val>("Q3_Row34_Val").constructor<>().function("add", &Q3_Row34_Val::add);
  class_<Q3_Row36_Val>("Q3_Row36_Val").constructor<>().function("set", &Q3_Row36_Val::set);
}
