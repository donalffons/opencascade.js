#include <iostream>

class Test {
public:
  static int foo() {
    std::cout << "foo" << std::endl;
    return 123;
  }
};
