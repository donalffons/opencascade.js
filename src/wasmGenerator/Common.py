import clang.cindex

def getPureVirtualMethods(theClass):
  return list(filter(lambda x: x.is_pure_virtual_method(), list(theClass.get_children())))

def isAbstractClass(theClass, tu):
  allClasses = list(filter(lambda x:
    x.kind == clang.cindex.CursorKind.CLASS_DECL and
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
  if not child.extent.start.file.name in headerFiles:
    return False
  if not filterClass(child):
    return False
  if child.kind == clang.cindex.CursorKind.CLASS_DECL and not child.type.get_num_template_arguments() == -1:
    print("Cannot handle template classes (must be typedef'd): " + child.spelling)
    return False
  if child.kind == clang.cindex.CursorKind.CLASS_DECL:
    return True
  return False
