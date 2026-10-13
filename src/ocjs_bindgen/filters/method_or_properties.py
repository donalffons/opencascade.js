"""Method/property filter (semantic / AST-driven only)."""

import clang.cindex


def filterMethodOrProperty(theClass, methodOrProperty):
  if methodOrProperty.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and methodOrProperty.kind == clang.cindex.CursorKind.USING_DECLARATION:
    print("Using declarations are not supported! (" + theClass.spelling + ", " + methodOrProperty.spelling + ")")
    return False

  result_type = methodOrProperty.result_type.spelling
  type_spelling = methodOrProperty.type.spelling

  _UNBINDABLE_TYPES = {"iterator", "const_iterator", "Iterator", "size_type",
                       "difference_type", "pointer", "const_pointer", "allocator_type",
                       "ItemsView", "ConstItemsView"}
  _RESOLVABLE_TYPES = {"value_type", "reference", "const_reference", "Array1Type", "Array2Type", "SequenceType"}
  combined = result_type + " " + type_spelling
  for nt in _UNBINDABLE_TYPES:
    if nt in combined:
      return False
  for nt in _RESOLVABLE_TYPES:
    if nt in combined:
      canonical_combined = methodOrProperty.result_type.get_canonical().spelling + " " + methodOrProperty.type.get_canonical().spelling
      if nt in canonical_combined:
        return False

  if (
    result_type.startswith("Standard_OStream") or
    result_type.startswith("std::ostream") or
    "Standard_OStream" in type_spelling or
    "std::ostream" in type_spelling or
    "std::istream" in type_spelling or
    "Standard_IStream" in type_spelling or
    "std::ifstream" in type_spelling or
    "std::ofstream" in type_spelling or
    "std::stringstream" in type_spelling or
    "std::ostringstream" in type_spelling or
    "std::istringstream" in type_spelling or
    "void *" in type_spelling or
    "void *" in result_type
  ):
    return False

  if theClass.type.spelling == "MeshVS_TwoColors":
    return False

  if theClass.spelling == "OpenGl_GlFunctions" and methodOrProperty.kind == clang.cindex.CursorKind.FIELD_DECL:
    return False

  if theClass.spelling in ["NCollection_Sequence", "NCollection_List"] and "::Iterator" in methodOrProperty.displayname:
    return False

  if (
    theClass.spelling == "XCAFDoc_GeomTolerance" and
    methodOrProperty.kind == clang.cindex.CursorKind.CONSTRUCTOR and
    "handle<XCAFDoc_GeomTolerance>" in methodOrProperty.type.spelling
  ):
    return False

  if theClass.spelling in [
    "BRepAlgoAPI_BuilderAlgo", "BRepMesh_IncrementalMesh",
    "BRepMesh_Delaun", "BRepMesh_Triangle",
    "CSLib_Class2d",
  ]:
    if methodOrProperty.kind == clang.cindex.CursorKind.CONSTRUCTOR:
      for arg in methodOrProperty.get_arguments():
        if theClass.spelling in arg.type.spelling and "&" in arg.type.spelling:
          return False

  if "NCollection_ItemsView" in str(getattr(methodOrProperty, 'displayname', '')):
    return False

  if methodOrProperty.kind in [clang.cindex.CursorKind.CXX_METHOD, clang.cindex.CursorKind.FUNCTION_DECL]:
    for arg in methodOrProperty.get_arguments():
      if arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
        pointee = arg.type.get_pointee()
        if pointee.kind == clang.cindex.TypeKind.POINTER:
          return False

  return True
