import clang.cindex

from .Common import shouldProcessClass, isAbstractClass, SkipException

def convertBuiltinTypes(typeName):
  if typeName in [
    "int",
    "unsigned",
    "unsigned int",
    "long",
    "long int",
    "short",
    "short int",
    "float",
    "unsigned float",
    "double",
    "unsigned double"
  ]:
    return "sumber"

  if typeName in [
    "char",
    "unsigned char",
    "std::string"
  ]:
    return "string"

  if typeName in [
    "bool"
  ]:
    return "boolean"
  return typeName

def ignoreDuplicateTypedef(typedef, sortedTypedefs):
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

def getTypescriptDefFromArg(arg, typedefs, suffix = ""):
  argTypedefType = arg.type.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
  typedefType = next((x for x in typedefs if x.underlying_typedef_type.spelling == argTypedefType), None)
  argTypeName = (arg.type.spelling if typedefType is None else typedefType.spelling)
  argTypeName = argTypeName.replace("&", "").replace("const", "").replace("*", "").strip()
  argTypeName = convertBuiltinTypes(argTypeName)
  if argTypeName == "" or "(" in argTypeName or ":" in argTypeName:
    argTypeName = "any"
    print("could not generate proper types for type name '" + argTypeName + "', using 'any' instead.")
  argname = (arg.spelling if not arg.spelling == "" else ("a" + str(suffix)))
  if argname in ["var", "with", "super"]:
    argname += "_"
  return argname + ": " + argTypeName

def getSimpleConstructorBinding(theClass, typedefs):
  children = list(theClass.get_children())
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))

  if len(constructors) == 0:
    return "  constructor();\n"
  publicConstructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(publicConstructors) == 0 or len(publicConstructors) > 1:
    return ""
  standardConstructor = publicConstructors[0]
  if not standardConstructor:
    return ""

  argsTypescriptDef = ", ".join(list(map(lambda x: getTypescriptDefFromArg(x, typedefs), list(standardConstructor.get_arguments()))))
  
  return "  constructor(" + argsTypescriptDef + ")\n"

def getClassTypescriptDefinitions(theClass, filterClass, translationUnit, typedefs):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))
  baseClassDefinition = ""
  if len(baseSpec) > 0:
    if any(x in baseSpec[0].type.spelling for x in [":", "<"]):
      print("Unsupported character for base class \"" + baseSpec[0].type.spelling + "\" (" + theClass.spelling + ")")
    else:
      if filterClass(baseSpec[0].type):
        baseClassDefinition = " extends " + baseSpec[0].type.spelling
  
  output = ""
  output += "export declare class " + theClass.spelling + baseClassDefinition + " {\n"

  if not isAbstractClass(theClass, translationUnit):
    output += getSimpleConstructorBinding(theClass, typedefs)

  output += "}\n\n"

  return output

def getTypescriptDefinitions(libName, libExportName, translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum):
  typedefOutput = ""
  exportOutput = ""

  typedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, translationUnit.cursor.get_children()))
  sortedTypedefs = {}
  for child in typedefs:
    if not child.underlying_typedef_type.spelling in sortedTypedefs:
      sortedTypedefs[child.underlying_typedef_type.spelling] = []
    sortedTypedefs[child.underlying_typedef_type.spelling].append(child)

  # # debug print duplicate typedefs
  # for key, value in sortedTypedefs.items():
  #   if len(value) > 1:
  #     print("--> " + key)
  #     for val in value:
  #       print("----> " + val.spelling)

  filteredTypedefs = []
  for key, children in sortedTypedefs.items():
    if len(children) == 1:
      filteredTypedefs.append(children[0])
    else:
      allNames = map(lambda x: x.spelling, children)
      deDupedCount = len(list(dict.fromkeys(allNames)))
      if deDupedCount == 1 and not any(x.spelling == children[0].spelling for x in filteredTypedefs):
        filteredTypedefs.append(children[0])
      else:
        for child in children:
          if not ignoreDuplicateTypedef(child, sortedTypedefs):
            filteredTypedefs.append(child)

  for child in translationUnit.cursor.get_children():
    if shouldProcessClass(child, headerFiles, filterClass):
      try:
        typedefOutput += getClassTypescriptDefinitions(child, filterClass, translationUnit, filteredTypedefs)
        exportOutput += "  " + child.spelling + ": typeof " + child.spelling + ";\n"
      except SkipException as e:
        print(str(e))
  
  output = \
    "declare const libName = \"" + libName + "\";\n" + \
    "export default libName;\n\n" + \
    "type Standard_Boolean = boolean;\n" + \
    "type Standard_Byte = number;\n" + \
    "type Standard_Character = string;\n" + \
    "type Standard_CString = string;\n" + \
    "type Standard_Integer = number;\n" + \
    "type Standard_Real = number;\n" + \
    "type Standard_ShortReal = number;\n" + \
    "type Standard_Size = number;\n\n" + \
    typedefOutput + \
    "export declare type " + libExportName + " = {\n" + \
    exportOutput + \
    "};\n"
  return output
