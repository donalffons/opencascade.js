---
sidebar_position: 3
---

# References to Built-In Data Types

While C++ has general support for reference types, JavaScript does not. In JavaScript, when calling a function with arguments, all arguments are passed as (shallow) copies. 

OpenCascade utilizes these reference types quite often as return values, like in this function from the class BRepTools, where `UMin`, `UMax`, `VMin` and `VMax` are all references to a Standard_Real (aka double). When executed, the function mutates the value of those references, thereby "returning" their values.

```cpp
UVBounds(const TopoDS_Face &F, Standard_Real &UMin, Standard_Real &UMax, Standard_Real &VMin, Standard_Real &VMax)
```

In order to use methods with reference types via OpenCascade.js, you have to follow the schema below.

```js
const path = [[-50, 0, 0], [50, 0, 0], [50, 100, 0]].map(([x, y, z]) => new this.oc.gp_Pnt_3(x, y, z));
const makePolygon = new this.oc.BRepBuilderAPI_MakePolygon_3(path[0], path[1], path[2], true);
const wire = makePolygon.Wire();
const makeFace = new this.oc.BRepBuilderAPI_MakeFace_15(wire, false);
const u0 = { current: 0 };
const u1 = { current: 0 };
const v0 = { current: 0 };
const v1 = { current: 0 };
this.oc.BRepTools.UVBounds_1(makeFace.Face(), u0, u1, v0, v1);
console.log({u0, u1, v0, v1});
```

As a side note: You are free to either pass in a "reference type" or a built-in number. The latter doesn't make much sense in this particular example, but is supported (and might make sense for other use cases):

```js
this.oc.BRepTools.UVBounds_1(makeFace.Face(), 123, 234, 345, 456);
```
