import clang.cindex

from .Common import shouldProcessClass, isAbstractClass, SkipException, getMethodOverloadPostfix, ignoreDuplicateTypedef, overloadedConstrutorObject

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
    return "number"

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

def getTypescriptDefFromTypedef(t, typedefs):
  tTypedefType = t.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
  if not tTypedefType == "void" and (":" in tTypedefType or "<" in tTypedefType):
    typedefType = next((x for x in typedefs if x.underlying_typedef_type.spelling == tTypedefType), None)
    if typedefType is None:
      raise SkipException("There is no typedef for " + tTypedefType + "! Please create one to support typescript definitions.")
    tTypeName = typedefType.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
  else:
    tTypeName = tTypedefType
  return tTypeName

def getEnumTypescriptDefinitions(enum):
  allExports = []
  typescriptOutput = "export declare class " + enum.spelling + " {\n"
  for enumChild in list(enum.get_children()):
    typescriptOutput += "  " + enumChild.spelling + ": any;\n"
  typescriptOutput += "}\n\n"
  return typescriptOutput

def getHandleTypeTypescriptDefinitions(typedefs):
  allExports = []
  typescriptOutput = ""
  print("generating bindings for handle types...")

  handleTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("opencascade::handle"), typedefs))
  for handleTypedef in handleTypedefs:
    handleName = handleTypedef.spelling
    targetType = handleTypedef.underlying_typedef_type.get_template_argument_type(0).spelling

    typescriptType = getTypescriptDefFromTypedef(handleTypedef.underlying_typedef_type.get_template_argument_type(0), typedefs)
    if typescriptType == "":
      print("using type 'any' instead of '" + handleTypedef.underlying_typedef_type.get_template_argument_type(0).spelling + "'")
      typescriptType = "any"

    typescriptOutput += "export declare class " + handleName + " {\n"
    typescriptOutput += "  Nullify(): void;\n"
    typescriptOutput += "  IsNull(): Standard_Boolean;\n"
    typescriptOutput += "  reset(thePtr: " + typescriptType + "): void;\n"
    typescriptOutput += "  operator_assign_1(theHandle: " + handleName + "): " + handleName + ";\n"
    typescriptOutput += "  operator_assign_2(thePtr: " + typescriptType + "): " + handleName + ";\n"
    typescriptOutput += "  operator_assign_3(theHandle: " + handleName + "): " + handleName + ";\n"
    typescriptOutput += "  get(): " + typescriptType + ";\n"
    typescriptOutput += "  operator_dereference(): " + typescriptType + ";\n"
    typescriptOutput += "  operator_bool(): Standard_Boolean" + ";\n"
    typescriptOutput += "}\n\n"

    oc1 = overloadedConstrutorObject()
    oc1.spelling = handleName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = handleName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const " + targetType + "*"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "thePtr"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = handleName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + handleName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theHandle"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    allExports.append(handleName)

    [ocTypes, ocs] = getOverloadedConstructorsTypescriptDefinition(handleTypedef, [
      oc1, oc2, oc3
    ])

    typescriptOutput += ocTypes
    allExports.extend(ocs)

  return [typescriptOutput, allExports]

def getTypescriptDefinitions(libName, libExportName, translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum, moduleExportsDict):
  typedefOutput = ""
  exportOutput = ""

  typedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, translationUnit.cursor.get_children()))
  sortedTypedefs = {}
  for child in typedefs:
    if child.get_definition() is None or not child == child.get_definition():
      continue
    if not child.extent.start.file.name in headerFiles:
      continue
    if not filterTypedef(child):
      continue
    if not child.underlying_typedef_type.spelling in sortedTypedefs:
      sortedTypedefs[child.underlying_typedef_type.spelling] = []
    sortedTypedefs[child.underlying_typedef_type.spelling].append(child)

  filteredTypedefs = []
  for key, children in sortedTypedefs.items():
    skip = False
    for child in children:
      if ignoreDuplicateTypedef(child, sortedTypedefs):
        skip = True
    if skip:
      continue
    if len(children) == 1:
      filteredTypedefs.append(children[0])
    else:
      allNames = map(lambda x: x.spelling, children)
      deDupedCount = len(list(dict.fromkeys(allNames)))
      if deDupedCount == 1 and not any(x.spelling == children[0].spelling for x in filteredTypedefs):
        filteredTypedefs.append(children[0])
      else:
        for child in children:
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
          typedefOutput += ocTypes
          for oc in ocs:
            exportOutput += "  " + oc + ": typeof " + oc + ";\n"

      except SkipException as e:
        print(str(e))
  
  [handleTypescriptDefinitions, handleExports] = getHandleTypeTypescriptDefinitions(filteredTypedefs)
  typedefOutput += handleTypescriptDefinitions
  for handleExport in handleExports:
    exportOutput += "  " + handleExport + ": typeof " + handleExport + ";\n"

  for child in translationUnit.cursor.get_children():
    if child.get_definition() is None or not child == child.get_definition():
      continue
    if not child.extent.start.file.name in headerFiles:
      continue
    if not filterEnum(child):
      continue
    if child.kind == clang.cindex.CursorKind.ENUM_DECL:
      typedefOutput += getEnumTypescriptDefinitions(child)
      exportOutput += "  " + child.spelling + ": typeof " + child.spelling + ";\n"

  output = ""

  for importLib, importItems in imports.items():
    output += "import { " + ", ".join(importItems) + " } from './" + importLib + ".wasm';\n"

  output += \
    "\n" + \
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
