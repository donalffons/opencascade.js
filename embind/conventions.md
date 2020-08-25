# Code conventions for Embind

## Which files should be used to create bindings

* Build the project once (using the instructions in [README.md](https://github.com/donalffons/opencascade.js/blob/master/README.md)). This will create a `build` folder in the main directory.
* The include files of OpenCascade should be used to create bindings. Those are located in the sub-folders of `./build/occt/src/`.

## File structure for `embind` folder

The file structure for this folder should be as follows:
* A header file should be created for each module of OpenCascade. Each module has its own sub-folder in `./build/occt/src/`. I.e. the include file `gp/gp_Pnt.hxx` belongs to the module `gp`. Therefore, a header file `gp.h` should be created in this folder.
* The binding definitions in those header files should be in alphabetical order.
* Don't forget to `#include` the newly created header file in `main.cpp`, also in alphabetical order.

## Conventions for bindings

### Overloaded Functions

* OpenCascade makes heavy use of overloaded functions. JavaScript supports overloading by number of arguments only. C++ supports overloading by return type, by number of arguments and by type of arguments. To solve this incompatibility, all overloads of a functions should be postfixed with integers.
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