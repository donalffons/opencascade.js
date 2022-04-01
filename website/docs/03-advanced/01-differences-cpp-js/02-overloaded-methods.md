---
sidebar_position: 2
---

# Overloaded methods

Overloads of C++ functions cannot always be mapped to overloaded JS functions without introducing ambiguities (simply due to differences of C++ and JS). Therefore, the API of this project enumerates all overloads of a function by appending _1, _2, ... to its name by the sequence in which they appear in the declaration.

E.g. if you look into the OpenCascade documentation for [BRepMesh_IncrementalMesh](https://dev.opencascade.org/doc/refman/html/class_b_rep_mesh___incremental_mesh.html), `Perform_1` would give you

```cpp
virtual void Perform (const Message_ProgressRange &theRange=Message_ProgressRange())
```

while `Perform_2` would give you

```cpp
void Perform (const Handle< IMeshTools_Context > &theContext, const Message_ProgressRange &theRange=Message_ProgressRange())
```
