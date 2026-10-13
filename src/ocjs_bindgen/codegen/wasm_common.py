import clang.cindex


class SkipException(Exception):
  pass

def getPureVirtualMethods(theClass):
  return list(filter(lambda x: x.is_pure_virtual_method(), list(theClass.get_children())))

def isTransientDerived(theClass, classDict, _visited=None):
  if _visited is None:
    _visited = set()
  name = theClass.spelling
  if name in _visited:
    return False
  _visited.add(name)
  if name == "Standard_Transient":
    return True
  baseSpec = list(filter(
    lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER
      and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC,
    list(theClass.get_children())
  ))
  for bs in baseSpec:
    baseName = bs.type.spelling
    if baseName == "Standard_Transient":
      return True
    if baseName in classDict:
      if isTransientDerived(classDict[baseName], classDict, _visited):
        return True
  return False

def isAbstractClass(theClass, classDict):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, list(theClass.get_children())))
  baseClasses = [classDict[y.type.spelling] for y in baseSpec if y.type.spelling in classDict]

  pureVirtualMethods = getPureVirtualMethods(theClass)
  if len(pureVirtualMethods) > 0:
    return True
  
  pvmsInBaseClasses = list(map(lambda x: getPureVirtualMethods(x), baseClasses))

  numPureVirtualMethods = 0
  numImplementedPureVirtualMethods = 0
  for bc in pvmsInBaseClasses:
    for bcPvm in bc:
      numPureVirtualMethods += 1
      if bcPvm.spelling in list(map(lambda x: x.spelling, list(theClass.get_children()))):
        numImplementedPureVirtualMethods += 1
  
  return numPureVirtualMethods > numImplementedPureVirtualMethods

def getMethodOverloadPostfix(theClass, method, children = None):
  if children is None:
    children = theClass.get_children() 
  allOverloads = [m for m in children if m.spelling == method.spelling]
  numOverloads = len(allOverloads)

  if numOverloads <= 1:
    return ["", numOverloads]

  arities = [len(list(m.get_arguments())) for m in allOverloads]
  if len(arities) == len(set(arities)):
    return ["", numOverloads]

  overloadPostfix = "_" + str(allOverloads.index(method) + 1)
  return [overloadPostfix, numOverloads]

def ignoreDuplicateTypedef(typedef):
  if typedef.underlying_typedef_type.spelling in [
    "long",
    "unsigned long",
    "unsigned char",
    "unsigned short",
    "unsigned int",
    "signed char",
    "short",
    "int",
    "__int8_t",
    "__uint8_t",
    "__int16_t",
    "__uint16_t",
    "__int32_t",
    "__uint32_t",
    "__int64_t",
    "__uint64_t",
    "void *",
    "char *",
    "double",
    "float",
    "char",
    "size_t",
    "char16_t",
    "struct _IO_FILE",
    "Standard_Character *",
    "Standard_Integer",
    "BVH_Box<Standard_Real, 3>",
    "Standard_ExtCharacter *",
    "int (*)(...)",
    "doublereal (*)(...)",
    "void (*)(...)",
    "void",
    "XID",
    "XKeyEvent",
    "XButtonEvent",
    "XCrossingEvent",
    "XFocusChangeEvent",
    "struct _XOC *",
    "Standard_Byte *",
    "Standard_Boolean (*)(const opencascade::handle<TCollection_HAsciiString> &)",
    "bool (*)(const occ::handle<TCollection_HAsciiString> &)",
    "Standard_Real"
  ]:
    return True

  # --> underlying_typedef_type.spelling
  # ----> type1.spelling
  # ----> type2.spelling

  # --> opencascade::handle<NCollection_BaseAllocator>
  # ----> Handle_NCollection_BaseAllocator
  # ----> TDF_HAllocator
  # ----> IntSurf_Allocator
  if (
    typedef.underlying_typedef_type.spelling in [
      "opencascade::handle<NCollection_BaseAllocator>",
      "occ::handle<NCollection_BaseAllocator>",
    ] and
    typedef.spelling in ["TDF_HAllocator", "IntSurf_Allocator"]
  ):
    return True

  # --> NCollection_Vec3<Standard_Real>
  # ----> Graphic3d_Vec3d
  # ----> Select3D_Vec3
  # ----> SelectMgr_Vec3
  if (
    typedef.underlying_typedef_type.spelling == "NCollection_Vec3<Standard_Real>" and
    typedef.spelling in ["Select3D_Vec3", "SelectMgr_Vec3"]
  ):
    return True

  # --> NCollection_Vec4<Standard_Real>
  # ----> Graphic3d_Vec4d
  # ----> SelectMgr_Vec4
  if (
    typedef.underlying_typedef_type.spelling == "NCollection_Vec4<Standard_Real>" and
    typedef.spelling in ["SelectMgr_Vec4"]
  ):
    return True

  # --> NCollection_Mat4<Standard_Real>
  # ----> Graphic3d_Mat4d
  # ----> SelectMgr_Mat4
  if (
    typedef.underlying_typedef_type.spelling == "NCollection_Mat4<Standard_Real>" and
    typedef.spelling in ["SelectMgr_Mat4"]
  ):
    return True

  # --> void (*)(NCollection_ListNode *, opencascade::handle<NCollection_BaseAllocator> &)
  # ----> NCollection_DelMapNode
  # ----> NCollection_DelListNode
  if (
    typedef.underlying_typedef_type.spelling in [
      "void (*)(NCollection_ListNode *, opencascade::handle<NCollection_BaseAllocator> &)",
      "void (*)(NCollection_ListNode *, occ::handle<NCollection_BaseAllocator> &)",
    ] and
    typedef.spelling in ["NCollection_DelMapNode", "NCollection_DelListNode"]
  ):
    return True

  # --> NCollection_List<TopoDS_Shape>
  # ----> TopoDS_ListOfShape
  # ----> TopTools_ListOfShape
  if (
    typedef.underlying_typedef_type.spelling == "NCollection_List<TopoDS_Shape>" and
    typedef.spelling in ["TopoDS_ListOfShape"]
  ):
    return True

  # --> NCollection_List<TopoDS_Shape>::Iterator
  # ----> TopoDS_ListIteratorOfListOfShape
  # ----> TopTools_ListIteratorOfListOfShape
  if (
    typedef.underlying_typedef_type == "NCollection_List<TopoDS_Shape>::Iterator" and
    typedef.spelling in ["TopoDS_ListIteratorOfListOfShape"]
  ):
    return True

  # --> NCollection_UBTree<Standard_Integer, Bnd_Box>
  # ----> BRepBuilderAPI_BndBoxTree
  # ----> BRepClass3d_BndBoxTree
  # ----> ShapeAnalysis_BoxBndTree
  if (
    typedef.underlying_typedef_type.spelling == "NCollection_UBTree<Standard_Integer, Bnd_Box>" and
    typedef.spelling in ["BRepClass3d_BndBoxTree", "ShapeAnalysis_BoxBndTree"]
  ):
    return True

  # --> NCollection_IndexedDataMap<TCollection_AsciiString, Standard_Integer, TCollection_AsciiString>
  # ----> StdStorage_MapOfTypes
  # ----> Storage_PType
  if (
    typedef.underlying_typedef_type.spelling == "NCollection_IndexedDataMap<TCollection_AsciiString, Standard_Integer, TCollection_AsciiString>" and
    typedef.spelling in ["StdStorage_MapOfTypes"]
  ):
    return True

  # --> opencascade::handle<BVH_Tree<Standard_ShortReal, 3, BVH_QuadTree> >
  # ----> QuadBvhHandle
  # ----> Handle_Handle_QuadBvhHandle
  if (
    typedef.underlying_typedef_type.spelling == "opencascade::handle<BVH_Tree<Standard_ShortReal, 3, BVH_QuadTree> >" and
    typedef.spelling in ["QuadBvhHandle"]
  ):
    return True

  return False
