#ifndef OCJS_SMART_PTR_H
#define OCJS_SMART_PTR_H

#include <Standard_Handle.hxx>
#include <emscripten/bind.h>

namespace emscripten {

template <typename T>
struct smart_ptr_trait<opencascade::handle<T>> {
  typedef opencascade::handle<T> PointerType;
  typedef T element_type;

  static element_type* get(const PointerType& ptr) {
    return ptr.get();
  }

  static sharing_policy get_sharing_policy() {
    return sharing_policy::INTRUSIVE;
  }

  static void* share(void* v) {
    auto* raw = static_cast<element_type*>(v);
    return static_cast<void*>(new PointerType(raw));
  }

  static PointerType* construct_null() {
    return new PointerType();
  }
};

} // namespace emscripten

#endif // OCJS_SMART_PTR_H
