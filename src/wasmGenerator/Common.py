import clang.cindex

class SkipException(Exception):
  pass

def getPureVirtualMethods(theClass):
  return list(filter(lambda x: x.is_pure_virtual_method(), list(theClass.get_children())))

def isAbstractClass(theClass, tu):
  allClasses = list(filter(lambda x:
    (
      x.kind == clang.cindex.CursorKind.CLASS_DECL or
      x.kind == clang.cindex.CursorKind.STRUCT_DECL
    ) and
    not (
      x.get_definition() is None or
      not x == x.get_definition()
    ),
    tu.cursor.get_children()))
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, list(theClass.get_children())))
  baseClasses = list(map(lambda y: next((x for x in allClasses if x.spelling == y.type.spelling)), baseSpec))

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

def shouldProcessClass(child, headerFiles, filterClass):
  if child.get_definition() is None or not child == child.get_definition():
    return False

  if not filterClass(child):
    return False

  if (
    child.kind == clang.cindex.CursorKind.CLASS_DECL or
    child.kind == clang.cindex.CursorKind.STRUCT_DECL
  ) and not child.type.get_num_template_arguments() == -1:
    print("Cannot handle template classes (must be typedef'd): " + child.spelling)
    return False

  if (
    child.kind == clang.cindex.CursorKind.CLASS_DECL or
    child.kind == clang.cindex.CursorKind.STRUCT_DECL
  ):
    baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, child.get_children()))
    if len(baseSpec) > 1:
      print("cannot handle multiple base classes (" + child.spelling + ")")
      return False
    
    return True
    
  return False

def getMethodOverloadPostfix(theClass, method, children = None):
  if children == None:
    children = theClass.get_children() 
  allOverloads = [m for m in children if m.spelling == method.spelling]
  overloadPostfix = "" if (not len(allOverloads) > 1) else "_" + str(allOverloads.index(method) + 1)

  return [overloadPostfix, len(allOverloads)]

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
    typedef.underlying_typedef_type.spelling == "opencascade::handle<NCollection_BaseAllocator>" and
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
    typedef.underlying_typedef_type.spelling == "void (*)(NCollection_ListNode *, opencascade::handle<NCollection_BaseAllocator> &)" and
    typedef.spelling in ["NCollection_DelMapNode"]
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

class overloadedConstrutorObject(object):
  def __init__(self):
    self.brief_comment = None
  def get_arguments(self):
    return self.arguments
  def get_tokens(self):
    return self.tokens
  def get_children(self):
    return self.children
