// quick_example.cpp
#include <emscripten/bind.h>

using namespace emscripten;

#include "occt/src/BRepPrimAPI/BRepPrimAPI_MakeTorus.hxx"

struct BRepPrimAPI_MakeTorus_1 : public BRepPrimAPI_MakeTorus {
  BRepPrimAPI_MakeTorus_1(const Standard_Real R1, const Standard_Real R2) : BRepPrimAPI_MakeTorus(R1, R2) {}
};
struct BRepPrimAPI_MakeTorus_2 : public BRepPrimAPI_MakeTorus {
  BRepPrimAPI_MakeTorus_2(const Standard_Real R1, const Standard_Real R2, const Standard_Real angle) : BRepPrimAPI_MakeTorus(R1, R2, angle) {}
};
EMSCRIPTEN_BINDINGS(opencascadejs) {
  class_ <BRepPrim_Torus>("BRepPrim_Torus")
    ;
  class_<BRepPrimAPI_MakeTorus>("BRepPrimAPI_MakeTorus")
    .function("Torus", &BRepPrimAPI_MakeTorus::Torus)
    ;
  class_<BRepPrimAPI_MakeTorus_1, base<BRepPrimAPI_MakeTorus>>("BRepPrimAPI_MakeTorus_1")
    .constructor<const Standard_Real, const Standard_Real>()
    ;
  class_<BRepPrimAPI_MakeTorus_2, base<BRepPrimAPI_MakeTorus>>("BRepPrimAPI_MakeTorus_2")
    .constructor<const Standard_Real, const Standard_Real, const Standard_Real>()
    ;
}

float lerp(float a, float b, float t) {
    return (1 - t) * a + t * b;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("lerp", &lerp);
}

class MyClass {
public:
  MyClass(int x, std::string y)
    : x(x)
    , y(y)
  {}

  void incrementX() {
    ++x;
  }

  int getX() const { return x; }
  void setX(int x_) { x = x_; }

  static std::string getStringFromInstance(const MyClass& instance) {
    return instance.y;
  }

private:
  int x;
  std::string y;
};

// Binding code
EMSCRIPTEN_BINDINGS(my_class_example) {
  class_<MyClass>("MyClass")
    .constructor<int, std::string>()
    .function("incrementX", &MyClass::incrementX)
    .property("x", &MyClass::getX, &MyClass::setX)
    .class_function("getStringFromInstance", &MyClass::getStringFromInstance)
    ;
}
