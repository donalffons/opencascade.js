# Code conventions for Embind

Please see [here](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html) for more in-depth information on Embind.

## How to create bindings

* Build the project once (using the instructions in [README.md](https://github.com/donalffons/opencascade.js/blob/master/README.md)). This will create a `build` folder in the main directory.
* The include files of OpenCascade should be used to create bindings. Those are located in the sub-folders of `./build/occt/src/`.
* Many bindings are created automatically using the `autobind.py` script. The `process*` functions at the top of that file can be used to enable / disable the auto-generation for certain files and entities.
* Currently, not all bindings can be generated automatically. In particular, most template classes and typedef'd types cannot be bound using the autobind script. For those entities, manual bindings must be defined in the `manualBindings.h` file.

## Conventions for bindings

### Overloaded Functions

* OpenCascade makes heavy use of overloaded functions. JavaScript supports overloading by number of arguments only. C++ supports overloading by return type, by number of arguments and by type of arguments. To solve this incompatibility, all overloads of a function should be postfixed with integers. The order of these integers should be according to the sequence of their definition in the class / header file.

  E.g. the class `gp_Pnt` has the following overloads for the function `SetCoord`:
  ```cpp
  void SetCoord (const Standard_Integer Index, const Standard_Real Xi);
  void SetCoord (const Standard_Real Xp, const Standard_Real Yp, const Standard_Real Zp);
  ```
  Those should be exposed using Embind like this:
  ```cpp
  class_<gp_Pnt>("gp_Pnt")
    // ...
    .function("SetCoord_1", select_overload<void (const Standard_Integer, const Standard_Real)>(&gp_Pnt::SetCoord))
    .function("SetCoord_2", select_overload<void (const Standard_Real, const Standard_Real, const Standard_Real)>(&gp_Pnt::SetCoord))
    // ...
  ```

### Overloaded Constructors
* In JavaScript, a constructor is called when creating a new instance using `var pnt = new gp_Pnt();`. Therefore, different overloaded constructors cannot be exposed as simply as with the previous method.
* Instead, for each overloaded constructor, a separate sub-class has to be created, which inherits from the main class and only contains the "overloaded" constructor.

  E.g. the class gp_Pnt has the following overloads for its constructor:
  ```cpp
  gp_Pnt();
  gp_Pnt(const gp_XYZ& Coord);
  gp_Pnt(const Standard_Real Xp, const Standard_Real Yp, const Standard_Real Zp);
  ```
  Those should be exposed using Embind like this:
  ```cpp
  class_<gp_Pnt>("gp_Pnt")
    // ...
    ;

  struct gp_Pnt_1 : public gp_Pnt {
    gp_Pnt_1() : gp_Pnt() {}
  };
  class_<gp_Pnt_1, base<gp_Pnt>>("gp_Pnt_1")
    .constructor<>();

  struct gp_Pnt_2 : public gp_Pnt {
    gp_Pnt_2(const gp_XYZ& Coord) : gp_Pnt(Coord) {}
  };
  class_<gp_Pnt_2, base<gp_Pnt>>("gp_Pnt_2")
    .constructor<const gp_XYZ&>();

  struct gp_Pnt_3 : public gp_Pnt {
    gp_Pnt_3(const Standard_Real Xp, const Standard_Real Yp, const Standard_Real Zp) : gp_Pnt(Xp, Yp, Zp) {}
  };
  class_<gp_Pnt_3, base<gp_Pnt>>("gp_Pnt_3")
    .constructor<const Standard_Real, const Standard_Real, const Standard_Real>();
  ```
  Since this is very verbose and quite ugly, the convenience macro `overloadedConstructor(baseClass, overloadedClass, parameterFull, parameterNames, parameterTypes)` should be used instead:
  ```cpp
  class_<gp_Pnt>("gp_Pnt")
    // ...
    ;
  overloadedConstructor(gp_Pnt, gp_Pnt_1, (), (), ());
  overloadedConstructor(gp_Pnt, gp_Pnt_2, (const gp_XYZ& Coord), (Coord), (const gp_XYZ&));
  overloadedConstructor(gp_Pnt, gp_Pnt_3, (const Standard_Real Xp, const Standard_Real Yp, const Standard_Real Zp), (Xp, Yp, Zp), (const Standard_Real, const Standard_Real, const Standard_Real));
  ```
  
### Operators

Operators should be exposed according to the following convention:
* Casting
  ```cpp
  class_<BRepBuilderAPI_MakeShape, base<BRepBuilderAPI_Command>>("BRepBuilderAPI_MakeShape")
    // ...
    .function("_operator_TopoDS_Shape", &BRepBuilderAPI_MakeShape::operator TopoDS_Shape)
    // ...
  ```

| C++                                                                     | JS                            |
|-------------------------------------------------------------------------|-------------------------------|
| Arithmetic                                                              |                               |
| R& K::operator =(S b);                                                  | operator_assign(b)            |
| R K::operator +(S b);                                                   | operator_add(b)               |
| R K::operator -(S b);                                                   | operator_sub(b)               |
| R K::operator +();                                                      | operator_unaryPlus()          |
| R K::operator -();                                                      | operator_unaryMinus()         |
| R K::operator *(S b);                                                   | operator_mul(b)               |
| R K::operator /(S b);                                                   | operator_div(b)               |
| R K::operator %(S b);                                                   | operator_mod(b)               |
| R& K::operator ++();                                                    | operator_incPre()             |
| R K::operator ++(int);                                                  | operator_incPost()            |
| R& K::operator --();                                                    | operator_decPre()             |
| R K::operator --(int);                                                  | operator_decPost()            |
| Comparison                                                              |                               |
| bool K::operator ==(S const& b) const;                                  | operator_isEqual(b)           |
| bool K::operator !=(S const& b); bool K::operator !=(S const& b) const; | operator_isUnequal(b)         |
| bool K::operator >(S const& b) const;                                   | operator_isGreater(b)         |
| bool K::operator <(S const& b) const;                                   | operator_isLess(b)            |
| bool K::operator >=(S const& b) const;                                  | operator_isGreaterEqual(b)    |
| bool K::operator <=(S const& b) const;                                  | operator_isLessEqual(b)       |
| std::weak_equality K::operator <=>(const S &b);                         | operator_isThreeWay(b)        |
| Logical                                                                 |                               |
| bool K::operator !();                                                   | operator_not(b)               |
| bool K::operator &&(S b);                                               | operator_and(b)               |
| bool K::operator \|\|(S b);                                             | operator_or(b)                |
| Bitwise                                                                 |                               |
| R K::operator ~();                                                      | operator_bitwiseNot()         |
| R K::operator &(S b);                                                   | operator_bitwiseAnd(b)        |
| R K::operator \|(S b);                                                  | operator_bitwiseOr(b)         |
| R K::operator ^(S b);                                                   | operator_bitwiseXor(b)        |
| R K::operator <<(S b);                                                  | operator_bitwiseShiftLeft(b)  |
| R K::operator >>(S b);                                                  | operator_bitwiseShiftRight(b) |
| Compound Assigment                                                      |                               |
| R& K::operator +=(S b);                                                 | operator_assignAdd(b)         |
| R& K::operator -=(S b);                                                 | operator_assignSub(b)         |
| R& K::operator *=(S b);                                                 | operator_assignMul(b)         |
| R& K::operator /=(S b);                                                 | operator_assignDiv(b)         |
| R& K::operator %=(S b);                                                 | operator_assignMod(b)         |
| R& K::operator &=(S b);                                                 | operator_assignBitwiseAnd(b)  |
| R& K::operator \|=(S b);                                                | operator_assignBitwiseOr(b)   |
| R& K::operator ^=(S b);                                                 | operator_assignBitwiseXor(b)  |
| R& K::operator <<=(S b);                                                | operator_assignShiftLeft(b)   |
| R& K::operator >>=(S b);                                                | operator_assignShiftRight(b)  |
| Member / Pointer                                                        |                               |
| R& K::operator [](S b);                                                 | operator_subscript(b)         |
| R& K::operator *();                                                     | operator_indirect()           |
| R* K::operator &();                                                     | operator_address(b)           |
| R* K::operator ->();                                                    | operator_dereference()        |
| R& K::operator ->*(S b);                                                |                               |
| Other                                                                   |                               |
| R K::operator ()(S a, T b, ...);                                        | operator_call(a, b, ...)      |
| R K::operator ,(S b);                                                   | operator_comma(b)             |
| K::operator R();                                                        | operator_R()                  |
| void* K::operator new(size_t x);                                        | ?                             |
| void* K::operator new[](size_t a);                                      | ?                             |
| void K::operator delete(void *a);                                       | ?                             |
| void K::operator delete[](void *a);                                     | ?                             |
