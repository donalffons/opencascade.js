#include "Message_ProgressIndicator.hxx"
#include <emscripten/bind.h>
#include <utility>
#include <iostream>

using namespace emscripten;

struct Message_ProgressIndicator_JS : public Message_ProgressIndicator {
  using Message_ProgressIndicator::Show;
  using Message_ProgressIndicator::UserBreak;
  using Message_ProgressIndicator::Reset;
};

struct Message_ProgressIndicator_JSWrapper : public wrapper<Message_ProgressIndicator_JS> {
  EMSCRIPTEN_WRAPPER(Message_ProgressIndicator_JSWrapper);
  void Show(const Message_ProgressScope& theScope, const bool isForce) {
    // Emscripten 5.x forbids implicitly binding a raw pointer through
    // val::set, so forward the scalar progress position instead of the
    // raw Message_ProgressScope pointer the legacy wrapper passed.
    return call<void>("Show", GetPosition(), isForce);
  }
  bool UserBreak() {
    return call<bool>("UserBreak");
  }
  void Reset() {
    return call<void>("Reset");
  }
};

EMSCRIPTEN_BINDINGS(Message_ProgressIndicator_JS) {
  class_<Message_ProgressIndicator_JS, base<Message_ProgressIndicator>>("Message_ProgressIndicator_JS")
    .class_function("get_type_name", &Message_ProgressIndicator_JS::get_type_name, allow_raw_pointers())
    .class_function("get_type_descriptor", &Message_ProgressIndicator_JS::get_type_descriptor, allow_raw_pointers())
    .function("DynamicType", &Message_ProgressIndicator_JS::DynamicType, allow_raw_pointers())
    .function("Start_1", select_overload<Message_ProgressRange(), Message_ProgressIndicator_JS>(&Message_ProgressIndicator_JS::Start), allow_raw_pointers())
    .class_function("Start_2", select_overload<Message_ProgressRange(const opencascade::handle<Message_ProgressIndicator> & theProgress)>(&Message_ProgressIndicator_JS::Start), allow_raw_pointers())
    .function("GetPosition", &Message_ProgressIndicator_JS::GetPosition, allow_raw_pointers())
    .function("Show", &Message_ProgressIndicator_JS::Show, pure_virtual())
    .function("UserBreak", optional_override([](Message_ProgressIndicator_JS& self) {
      return self.Message_ProgressIndicator_JS::UserBreak();
    }))
    .function("Reset", optional_override([](Message_ProgressIndicator_JS& self) {
      return self.Message_ProgressIndicator_JS::Reset();
    }))
    .allow_subclass<Message_ProgressIndicator_JSWrapper>("Message_ProgressIndicator_JSWrapper");
}
