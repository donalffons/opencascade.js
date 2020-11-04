#include "./A.hxx"
#include <iostream>

class B : public A {
public:
  B() {}
  void world() {
    hello();
    std::cout << "World!" << std::endl;
  }
};
