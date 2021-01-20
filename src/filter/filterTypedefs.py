def filterTypedef(typedef, additionalInfo=None):
  # Cannot register type 'SelectMgr_Vec3' / 'SelectMgr_Mat4' twice
  if typedef.spelling in [
    "SelectMgr_Vec3",
    "SelectMgr_Mat4",
  ]:
    return False

  if typedef.spelling == "Handle_Cocoa_Window":
    return False

  # error: ?
  if (
    typedef.spelling == "Handle_Font_BRepFont" or
    typedef.spelling == "Handle_PCDM_Reader" or
    typedef.spelling == "Handle_PCDM_ReadWriter_1"
  ):
    return False

  if typedef.spelling == "OpenGl_ListOfStructure":
    return False

  # Generates error "Cannot register type 'TColQuantity_Array1OfLength' twice" during initialization of the WASM file. Seems to be conflicting with 'TColStd_Array1OfReal'. Can be reproduced by including these two bindings in one bindings-file.
  if typedef.spelling == "TColQuantity_Array1OfLength":
    return False
  # Same as above, but with TopoDS_ListOfShape / TopTools_ListOfShape
  if typedef.spelling == "TopoDS_ListOfShape":
    return False
  # Same as above, but with Handle_Graphic3d_Structure / Handle_Prs3d_Presentation
  if typedef.spelling == "Handle_Graphic3d_Structure":
    return False
  # Cannot register type 'PCDM_BaseDriverPointer' twice
  if typedef.spelling == "PCDM_BaseDriverPointer":
    return False

  # error: unknown type name 'Handle_Xw_Window'; did you mean 'Handle_Cocoa_Window'?
  if typedef.spelling == "Handle_Xw_Window":
    return False

  # error: member pointer refers into non-class type 'opencascade::handle<TCollection_HAsciiString> (*)(const opencascade::handle<MoniTool_TypedValue> &, const opencascade::handle<TCollection_HAsciiString> &, bool)'
  # error: 'MoniTool_ValueInterpret' (aka 'handle<TCollection_HAsciiString> (*)(const handle<MoniTool_TypedValue> &, const handle<TCollection_HAsciiString> &, const bool)') is not a class, namespace, or enumeration
  if typedef.spelling == "MoniTool_ValueInterpret":
    return False

  # error: member pointer refers into non-class type 'opencascade::handle<TCollection_HAsciiString> (*)(const opencascade::handle<Interface_TypedValue> &, const opencascade::handle<TCollection_HAsciiString> &, bool)'
  # error: 'Interface_ValueInterpret' (aka 'handle<TCollection_HAsciiString> (*)(const handle<Interface_TypedValue> &, const handle<TCollection_HAsciiString> &, const bool)') is not a class, namespace, or enumeration
  if typedef.spelling == "Interface_ValueInterpret":
    return False

  # error: call to implicitly-deleted copy constructor of 'BRepClass3d_SolidClassifier'
  # error: object of type 'BRepClass3d_SolidClassifier' cannot be assigned because its copy assignment operator is implicitly deleted
  if typedef.spelling == "TopOpeBRepTool_IndexedDataMapOfSolidClassifier":
    return False

  # error: object of type 'BRepClass3d_SolidClassifier' cannot be assigned because its copy assignment operator is implicitly deleted
  # error: rvalue reference to type 'BRepClass3d_SolidClassifier' cannot bind to lvalue of type 'BRepClass3d_SolidClassifier'
  if typedef.spelling == "TopOpeBRepTool_IndexedDataMapOfSolidClassifier":
    return False

  # error: unknown type name 'Type'; did you mean 'rapidjson::Type'?
  if typedef.spelling in [
    "NCollection_Utf8Iter",
    "NCollection_Utf16Iter",
    "NCollection_Utf32Iter",
    "NCollection_UtfWideIter",
  ]:
    return False

  # error: 'NCollection_UBTreeFiller' is not a class, namespace, or enumeration
  if typedef.spelling == "Extrema_UBTreeFillerOfSphere":
    return False

  # error: call to 'abs' is ambiguous
  if typedef.spelling.startswith("Graphic3d_Vec"):
    return False

  # error: call to implicitly-deleted copy constructor of 'NCollection_SparseArray<int>'
  if typedef.spelling in [
    "TObj_TIntSparseArray_VecOfData",
    "TObj_TIntSparseArray_MapOfData"
  ]:
    return False

  # error: use of undeclared identifier 'thePosition'
  if typedef.spelling == "XCAFDimTolObjects_DatumModifiersSequence":
    return False

  # causes extreme memory growth which fails the build (see corresponding methods filter)
  if "::Iterator" in typedef.underlying_typedef_type.spelling:
    return False

  # error: 'NCollection_UBTree' is not a class, namespace, or enumeration
  if typedef.spelling in [
    "BRepBuilderAPI_BndBoxTree",
    "Extrema_UBTreeOfSphere",
    "ShapeAnalysis_BoxBndTree",
    "BRepClass3d_BndBoxTree"
  ]:
    return False

  # error: 'NCollection_CellFilter' is not a class, namespace, or enumeration
  if typedef.spelling in [
    "BRepBuilderAPI_CellFilter"
  ]:
    return False

  # error: 'NCollection_CellFilter' is not a class, namespace, or enumeration
  if typedef.spelling in [
    "BRepBuilderAPI_CellFilter"
  ]:
    return False

  # error during instantiation: Uncaught (in promise) BindingError: Cannot register type 'IntSurf_Allocator' twice
  if typedef.spelling in [
    "IntSurf_Allocator"
  ]:
    return False

  # error during instantiation: Uncaught (in promise) BindingError: Cannot register type 'TDF_HAllocator' twice
  if typedef.spelling in [
    "TDF_HAllocator"
  ]:
    return False

  # RuntimeError: function signature mismatch when calling STEPCAFontrol_Reader.ReadFile()
  if typedef.spelling == "Interface_VectorOfFileParameter":
    return False

  if typedef.underlying_typedef_type.spelling.startswith((
    "opencascade::handle",
    "handle",
    "NCollection"
  )):
    return True

  return False
