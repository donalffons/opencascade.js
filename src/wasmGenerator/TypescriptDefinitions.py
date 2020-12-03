import clang.cindex

from .Common import shouldProcessClass, isAbstractClass, SkipException, getMethodOverloadPostfix, ignoreDuplicateTypedef

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

def getOverloadedConstructorsTypescriptDefinition(theClass, typedefs):
  children = theClass.get_children()
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(constructors) == 1:
    return ["", []]

  constructorTypescriptDef = ""
  allOverloadedConstructors = []

  for constructor in constructors:
    [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, constructor)

    argsTypescriptDef = ", ".join(list(map(lambda x: getTypescriptDefFromArg(x, typedefs), list(constructor.get_arguments()))))
    constructorTypescriptDef += "  export declare class " + constructor.spelling + overloadPostfix + " extends " + constructor.spelling + " {\n"
    constructorTypescriptDef += "    constructor(" + argsTypescriptDef + ");\n"
    constructorTypescriptDef += "  }\n\n"
    allOverloadedConstructors.append(constructor.spelling + overloadPostfix)
  return [constructorTypescriptDef, allOverloadedConstructors]

def addImportIfWeHaveTo(thisLibName, libItem, moduleExportsDict, imports):
  if not libItem in moduleExportsDict[thisLibName]:
    importLib = next((x for x in moduleExportsDict if libItem in moduleExportsDict[x]), None)
    if not importLib == None:
      if not importLib in imports:
        imports[importLib] = []
      if not libItem in imports[importLib]:
        imports[importLib].append(libItem)
    else:
      print("Base class \"" + libItem + "\" is not part of this module and has not been exported by any other module")

def getTypescriptDefFromArg(arg, typedefs, suffix = ""):
  argTypedefType = arg.type.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
  typedefType = next((x for x in typedefs if x.underlying_typedef_type.spelling == argTypedefType), None)
  argTypeName = (arg.type.spelling if typedefType is None else typedefType.spelling)
  argTypeName = argTypeName.replace("&", "").replace("const", "").replace("*", "").strip()
  argTypeName = convertBuiltinTypes(argTypeName)
  if argTypeName == "" or "(" in argTypeName or ":" in argTypeName:
    print("could not generate proper types for type name '" + argTypeName + "', using 'any' instead.")
    argTypeName = "any"
  argname = (arg.spelling if not arg.spelling == "" else ("a" + str(suffix)))
  if argname in ["var", "with", "super"]:
    argname += "_"
  return argname + ": " + argTypeName

def getTypescriptDefFromResultType(res, typedefs):
  resTypedefType = res.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
  if not resTypedefType == "void":
    typedefType = next((x for x in typedefs if x.underlying_typedef_type.spelling == resTypedefType), None)
    resTypeName = (res.spelling if typedefType is None else typedefType.spelling)
    resTypeName = resTypeName.replace("&", "").replace("const", "").replace("*", "").strip()
    resTypeName = convertBuiltinTypes(resTypeName)
  else:
    resTypeName = resTypedefType
  if resTypeName == "" or "(" in resTypeName or ":" in resTypeName:
    print("could not generate proper types for type name '" + resTypeName + "', using 'any' instead.")
    resTypeName = "any"
  return resTypeName

def getMethodsTypescriptDefinitions(theClass, filterMethod, typedefs):
  output = ""
  for child in theClass.get_children():
    if not filterMethod(theClass, child):
      continue
    try:
      output += getSingleMethodTypescriptDefinition(theClass, child, typedefs)
    except SkipException as e:
      print(str(e))
  return output

def getSingleMethodTypescriptDefinition(theClass, method, typedefs):
  className = theClass.spelling
  if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
    [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)

    args = ", ".join(list(map(lambda x: getTypescriptDefFromArg(x[1], typedefs, x[0]), enumerate(method.get_arguments()))))
    returnType = getTypescriptDefFromResultType(method.result_type, typedefs)

    return "  " + method.spelling + overloadPostfix + "(" + args + "): " + returnType + ";\n"
  return ""

def getClassTypescriptDefinitions(theClass, filterClass, translationUnit, typedefs, thisLibName, moduleExportsDict, imports, filterMethod):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))
  baseClassDefinition = ""
  if len(baseSpec) > 0:
    if any(x in baseSpec[0].type.spelling for x in [":", "<"]):
      print("Unsupported character for base class \"" + baseSpec[0].type.spelling + "\" (" + theClass.spelling + ")")
    else:
      if filterClass(baseSpec[0].type):
        baseClassDefinition = " extends " + baseSpec[0].type.spelling
        addImportIfWeHaveTo(thisLibName, baseSpec[0].type.spelling, moduleExportsDict, imports)

  output = ""
  output += "export declare class " + theClass.spelling + baseClassDefinition + " {\n"

  if not isAbstractClass(theClass, translationUnit):
    output += getSimpleConstructorBinding(theClass, typedefs)

  output += getMethodsTypescriptDefinitions(theClass, filterMethod, typedefs)
  output += "}\n\n"

  return output

def getTypescriptDefinitions(libName, libExportName, translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum, moduleExportsDict):
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

  imports = {}
  for child in translationUnit.cursor.get_children():
    if shouldProcessClass(child, headerFiles, filterClass):
      theClass = child
      try:
        typedefOutput += getClassTypescriptDefinitions(theClass, filterClass, translationUnit, filteredTypedefs, libExportName, moduleExportsDict, imports, filterMethod)
        exportOutput += "  " + theClass.spelling + ": typeof " + theClass.spelling + ";\n"
        if not isAbstractClass(theClass, translationUnit):
          [ocTypes, ocs] = getOverloadedConstructorsTypescriptDefinition(theClass, filteredTypedefs)
          typedefOutput+= ocTypes
          for oc in ocs:
            exportOutput += "  " + oc + ": typeof " + oc + ";\n"

      except SkipException as e:
        print(str(e))
  
  output = ""

  for importLib, importItems in imports.items():
    output += "import { " + ", ".join(importItems) + " } from './" + importLib + ".wasm';\n"

  output += "\n"

  output += \
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
    "export declare type " + libExportName + "Lib = {\n" + \
    exportOutput + \
    "};\n"
  return output
