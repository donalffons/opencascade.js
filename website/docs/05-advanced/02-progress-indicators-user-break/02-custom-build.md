---
sidebar_position: 2
---

# Step 1: Define the Required Bindings

This will require you to create a custom build. Therefore, first make sure that you have pulled the latest Docker Image.

```sh
docker pull donalffons/opencascade.js
```

The 3 methods mentioned above are marked as `protected` in the declaration of `Message_ProgressIndicator`. They need to be public to be accessible by Emscripten. In addition, we don't want to override OpenCascade.js' implementation of `Message_ProgressIndicator`. Therefore we derive a simple specialization named `Message_ProgressIndicator_JS` from `Message_ProgressIndicator`.

```cpp
struct Message_ProgressIndicator_JS : public Message_ProgressIndicator {
  using Message_ProgressIndicator::Show;
  using Message_ProgressIndicator::UserBreak;
  using Message_ProgressIndicator::Reset;
};
```

Later, we want to derive our own specialization from `Message_ProgressIndicator_JS`. Following [Emscripten's documentation](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html#deriving-from-c-classes-in-javascript) on that matter, we set up a wrapper (to allow overriding the mentioned methods from JavaScript) and the required bindings:

```cpp
struct Message_ProgressIndicator_JSWrapper : public wrapper<Message_ProgressIndicator_JS> {
  EMSCRIPTEN_WRAPPER(Message_ProgressIndicator_JSWrapper);
  void Show(const Message_ProgressScope& theScope, const Standard_Boolean isForce) {
    val valTheScope = val::object();
    valTheScope.set("current", &theScope);
    return call<void>("Show", valTheScope, isForce);
  }
  Standard_Boolean UserBreak() {
    return call<Standard_Boolean>("UserBreak");
  }
  void Reset() {
    return call<void>("Reset");
  }
};

EMSCRIPTEN_BINDINGS(Message_ProgressIndicator_JS) {
  class_<Message_ProgressIndicator_JS, base<Message_ProgressIndicator>>("Message_ProgressIndicator_JS")
    // Same bindings as Message_ProgressIndicator
    .class_function("get_type_name", &Message_ProgressIndicator_JS::get_type_name, allow_raw_pointers())
    .class_function("get_type_descriptor", &Message_ProgressIndicator_JS::get_type_descriptor, allow_raw_pointers())
    .function("DynamicType", &Message_ProgressIndicator_JS::DynamicType, allow_raw_pointers())
    .function("Start_1", select_overload<Message_ProgressRange(), Message_ProgressIndicator_JS>(&Message_ProgressIndicator_JS::Start), allow_raw_pointers())
    .class_function("Start_2", select_overload<Message_ProgressRange(const opencascade::handle<Message_ProgressIndicator> & theProgress)>(&Message_ProgressIndicator_JS::Start), allow_raw_pointers())
    .function("GetPosition", &Message_ProgressIndicator_JS::GetPosition, allow_raw_pointers())

    // Extra bindings for deriving a specialized class in JS
    .function("Show", &Message_ProgressIndicator_JS::Show, pure_virtual())
    .function("UserBreak", optional_override([](Message_ProgressIndicator_JS& self) {
      return self.Message_ProgressIndicator_JS::UserBreak();
    }))
    .function("Reset", optional_override([](Message_ProgressIndicator_JS& self) {
      return self.Message_ProgressIndicator_JS::Reset();
    }))
    .allow_subclass<Message_ProgressIndicator_JSWrapper>("Message_ProgressIndicator_JSWrapper")
  ;
}
```

Next, we throw all this code into a custom build definition and create our custom build.

