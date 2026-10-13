// bindings-rows-optional.cpp — Q3 quantification: std::optional<T> primitive
// ONLY for the rows where both primitives are candidates (1, 2, 24, 33, 34, 36).
//
// Pair-wise with bindings-rows-val.cpp.

#include <emscripten/bind.h>
#include <optional>
#include <string>

using namespace emscripten;

struct Q3_Row { int count = 0; bool defaulted = false; };

struct Q3_Row01_Opt { Q3_Row r; };
struct Q3_Row02_Opt { Q3_Row r; };
struct Q3_Row24_Opt { Q3_Row r; };
struct Q3_Row33_Opt { Q3_Row r; std::string group, file; };
struct Q3_Row34_Opt { Q3_Row r; };
struct Q3_Row36_Opt { Q3_Row r; };

EMSCRIPTEN_BINDINGS(q3_optional_variant) {
  register_optional<bool>();
  register_optional<double>();
  register_optional<int>();
  register_optional<std::string>();

  class_<Q3_Row01_Opt>("Q3_Row01_Opt").constructor<>()
    .function("set", optional_override([](Q3_Row01_Opt& self, std::optional<bool> v) {
      self.r.defaulted = !v.has_value(); ++self.r.count;
      (void)v.value_or(false);
    }));
  class_<Q3_Row02_Opt>("Q3_Row02_Opt").constructor<>()
    .function("set", optional_override([](Q3_Row02_Opt& self, std::optional<int> v) {
      self.r.defaulted = !v.has_value(); ++self.r.count;
      (void)v.value_or(0);
    }));
  class_<Q3_Row24_Opt>("Q3_Row24_Opt").constructor<>()
    .function("set", optional_override([](Q3_Row24_Opt& self, std::optional<bool> a, std::optional<bool> b, std::optional<double> c) {
      self.r.defaulted = !a.has_value() && !b.has_value() && !c.has_value();
      ++self.r.count;
      (void)a.value_or(false); (void)b.value_or(true); (void)c.value_or(0.5);
    }));
  class_<Q3_Row33_Opt>("Q3_Row33_Opt").constructor<>()
    .function("set", optional_override([](Q3_Row33_Opt& self, std::optional<std::string> a, std::optional<std::string> b) {
      self.group = a.value_or("");
      self.file  = b.value_or("");
      self.r.defaulted = !b.has_value();
      ++self.r.count;
    }));
  class_<Q3_Row34_Opt>("Q3_Row34_Opt").constructor<>()
    .function("add", optional_override([](Q3_Row34_Opt& self, std::optional<int> edge, std::optional<int> cont, std::optional<bool> flag) {
      self.r.defaulted = !flag.has_value();
      ++self.r.count;
      (void)edge.value_or(0); (void)cont.value_or(0); (void)flag.value_or(true);
    }));
  class_<Q3_Row36_Opt>("Q3_Row36_Opt").constructor<>()
    .function("set", optional_override([](Q3_Row36_Opt& self, std::optional<int> shape, std::optional<int> v) {
      self.r.defaulted = !v.has_value();
      ++self.r.count;
      (void)shape.value_or(0); (void)v.value_or(0);
    }));
}
