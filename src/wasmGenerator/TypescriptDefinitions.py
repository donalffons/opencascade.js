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

def getSimpleConstructorBinding(theClass, typedefs, thisLibName, moduleExportsDict, imports):
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

  argsTypescriptDef = ", ".join(list(map(lambda x: getTypescriptDefFromArg(x, typedefs, thisLibName, moduleExportsDict, imports), list(standardConstructor.get_arguments()))))
  
  return "  constructor(" + argsTypescriptDef + ")\n"

def getOverloadedConstructorsTypescriptDefinition(theClass, children, typedefs, thisLibName, moduleExportsDict, imports):
  if children is None:
    children = list(theClass.get_children())
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(constructors) == 1:
    return ["", []]

  constructorTypescriptDef = ""
  allOverloadedConstructors = []

  for constructor in constructors:
    [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, constructor, children)

    argsTypescriptDef = ", ".join(list(map(lambda x: getTypescriptDefFromArg(x, typedefs, thisLibName, moduleExportsDict, imports), list(constructor.get_arguments()))))
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

def getTypescriptDefFromArg(arg, typedefs, thisLibName, moduleExportsDict, imports, suffix = ""):
  argTypedefType = arg.type.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
  typedefType = next((x for x in typedefs if x.underlying_typedef_type.spelling == argTypedefType), None)
  argTypeName = (arg.type.spelling if typedefType is None else typedefType.spelling)
  argTypeName = argTypeName.replace("&", "").replace("const", "").replace("*", "").strip()
  argTypeName = convertBuiltinTypes(argTypeName)
  if argTypeName == "" or "(" in argTypeName or ":" in argTypeName:
    print("could not generate proper types for type name '" + argTypeName + "', using 'any' instead.")
    argTypeName = "any"
  addImportIfWeHaveTo(thisLibName, argTypeName, moduleExportsDict, imports)
  
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

def getMethodsTypescriptDefinitions(theClass, filterMethod, typedefs, thisLibName, moduleExportsDict, imports):
  output = ""
  for child in theClass.get_children():
    if not filterMethod(theClass, child):
      continue
    try:
      output += getSingleMethodTypescriptDefinition(theClass, child, typedefs, thisLibName, moduleExportsDict, imports)
    except SkipException as e:
      print(str(e))
  return output

def getSingleMethodTypescriptDefinition(theClass, method, typedefs, thisLibName, moduleExportsDict, imports):
  className = theClass.spelling
  if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
    [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)

    args = ", ".join(list(map(lambda x: getTypescriptDefFromArg(x[1], typedefs, thisLibName, moduleExportsDict, imports, x[0]), enumerate(method.get_arguments()))))
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
    output += getSimpleConstructorBinding(theClass, typedefs, thisLibName, moduleExportsDict, imports)

  output += getMethodsTypescriptDefinitions(theClass, filterMethod, typedefs, thisLibName, moduleExportsDict, imports)
  output += "}\n\n"

  return output

def getTypescriptDefFromTypedef(t, typedefs):
  tTypedefType = t.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
  if not tTypedefType == "void" and (":" in tTypedefType or "<" in tTypedefType):
    typedefType = next((x for x in typedefs if x.underlying_typedef_type.spelling == tTypedefType), None)
    if typedefType is None:
      print("There is no typedef for " + tTypedefType + "! Using any instead.")
      tTypeName = "any"
    else:
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

def getHandleTypescriptDefinitions(typedefs, thisLibName, moduleExportsDict, imports):
  allExports = []
  typescriptOutput = ""
  print("generating typescript definitions for handle types...")

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

    [ocTypes, ocs] = getOverloadedConstructorsTypescriptDefinition(handleTypedef, [
      oc1, oc2, oc3
    ], typedefs, thisLibName, moduleExportsDict, imports)

    typescriptOutput += ocTypes
    allExports.extend(ocs)

  return [typescriptOutput, allExports]

def getNCollection_Array1TypescriptDefinitions(typedefs, thisLibName, moduleExportsDict, imports):
  allExports = []
  typescriptOutput = ""
  print("generating typescript definitions for NCollection_Array1 types...")

  nCollection_Array1Typedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("NCollection_Array1"), typedefs))
  for nCollection_Array1Typedef in nCollection_Array1Typedefs:
    theName = nCollection_Array1Typedef.spelling
    theType = nCollection_Array1Typedef.underlying_typedef_type.get_template_argument_type(0).spelling
    typescriptType = getTypescriptDefFromTypedef(nCollection_Array1Typedef.underlying_typedef_type.get_template_argument_type(0), typedefs)
    typescriptOutput += "export declare class " + theName + " {\n"
    typescriptOutput += "  begin(): any;\n"
    typescriptOutput += "  end(): any;\n"
    typescriptOutput += "  cbegin(): any;\n"
    typescriptOutput += "  cend(): any;\n"
    typescriptOutput += "  Init(theValue: " + typescriptType + "): void;\n"
    typescriptOutput += "  Size(): Standard_Integer;\n"
    typescriptOutput += "  Length(): Standard_Integer;\n"
    typescriptOutput += "  IsEmpty(): Standard_Boolean;\n"
    typescriptOutput += "  Lower(): Standard_Integer;\n"
    typescriptOutput += "  Upper(): Standard_Integer;\n"
    typescriptOutput += "  IsDeletable(): Standard_Boolean;\n"
    typescriptOutput += "  IsAllocated(): Standard_Boolean;\n"
    typescriptOutput += "  Assign(theOther: " + theName + "): " + theName+ ";\n"
    typescriptOutput += "  Move(theOther: " + theName + "): " + theName+ ";\n"
    typescriptOutput += "  First(): " + typescriptType + ";\n"
    typescriptOutput += "  ChangeFirst(): " + typescriptType + ";\n"
    typescriptOutput += "  Last(): " + typescriptType + ";\n"
    typescriptOutput += "  ChangeLast(): " + typescriptType + ";\n"
    typescriptOutput += "  Value(theIndex: Standard_Integer): " + typescriptType + ";\n"
    typescriptOutput += "  ChangeValue(theIndex: Standard_Integer): " + typescriptType + ";\n"
    typescriptOutput += "  SetValue(theIndex: Standard_Integer, theItem: " + typescriptType + "): void;\n"
    typescriptOutput += "  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;\n"
    typescriptOutput += "}\n\n"

    oc1 = overloadedConstrutorObject()
    oc1.spelling = theName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = theName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const Standard_Integer"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "theLower"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2arg2type = overloadedConstrutorObject()
    oc2arg2type.spelling = "const Standard_Integer"
    oc2arg2type.kind = None
    oc2arg2 = overloadedConstrutorObject()
    oc2arg2.type = oc2arg2type
    oc2arg2.spelling = "theUpper"
    oc2arg2.tokens = []
    oc2arg2.children = []
    oc2.arguments = [oc2arg1, oc2arg2]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = theName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + theName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theOther"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    oc4 = overloadedConstrutorObject()
    oc4.spelling = theName
    oc4.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc4.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc4arg1type = overloadedConstrutorObject()
    oc4arg1type.spelling = "const " + theType + "&"
    oc4arg1type.kind = None
    oc4arg1 = overloadedConstrutorObject()
    oc4arg1.type = oc4arg1type
    oc4arg1.spelling = "theBegin"
    oc4arg1.tokens = []
    oc4arg1.children = []
    oc4arg2type = overloadedConstrutorObject()
    oc4arg2type.spelling = "const Standard_Integer"
    oc4arg2type.kind = None
    oc4arg2 = overloadedConstrutorObject()
    oc4arg2.type = oc4arg2type
    oc4arg2.spelling = "theLower"
    oc4arg2.tokens = []
    oc4arg2.children = []
    oc4arg3type = overloadedConstrutorObject()
    oc4arg3type.spelling = "const Standard_Integer"
    oc4arg3type.kind = None
    oc4arg3 = overloadedConstrutorObject()
    oc4arg3.type = oc4arg2type
    oc4arg3.spelling = "theUpper"
    oc4arg3.tokens = []
    oc4arg3.children = []
    oc4.arguments = [oc4arg1, oc4arg2, oc4arg3]

    [ocTypes, ocs] = getOverloadedConstructorsTypescriptDefinition(nCollection_Array1Typedef, [
      oc1, oc2, oc3, oc4
    ], typedefs, thisLibName, moduleExportsDict, imports)

    typescriptOutput += ocTypes
    allExports.extend(ocs)
  
  return [typescriptOutput, allExports]

def getNCollection_ListTypescriptDefinitions(typedefs, thisLibName, moduleExportsDict, imports):
  allExports = []
  typescriptOutput = ""
  print("generating typescript definitions for NCollection_List types...")

  nCollection_ListTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("NCollection_List") and not x.underlying_typedef_type.spelling.endswith("::Iterator"), typedefs))
  for nCollection_ListTypedef in nCollection_ListTypedefs:
    theName = nCollection_ListTypedef.spelling
    theType = nCollection_ListTypedef.underlying_typedef_type.get_template_argument_type(0).spelling

    typescriptType = getTypescriptDefFromTypedef(nCollection_ListTypedef.underlying_typedef_type.get_template_argument_type(0), typedefs)
    typescriptOutput += "export declare class " + theName + " {\n"
    typescriptOutput += "  begin(): any;\n"
    typescriptOutput += "  end(): any;\n"
    typescriptOutput += "  cbegin(): any;\n"
    typescriptOutput += "  cend(): any;\n"
    typescriptOutput += "  Size(): Standard_Integer;\n"
    typescriptOutput += "  Assign(theOther: " + theName + "): " + theName + ";\n"
    typescriptOutput += "  Clear(theAllocator: any): void;\n"
    typescriptOutput += "  First_1(): " + typescriptType + ";\n"
    typescriptOutput += "  First_2(): " + typescriptType + ";\n"
    typescriptOutput += "  Last_1(): " + typescriptType + ";\n"
    typescriptOutput += "  Last_2(): " + typescriptType + ";\n"
    typescriptOutput += "  Append_1(theItem: " + typescriptType + "): " + typescriptType + ";\n"
    typescriptOutput += "  Append_3(theOther: " + theName + "): void;\n"
    typescriptOutput += "  Prepend_1(theItem: " + typescriptType + "): " + typescriptType + ";\n"
    typescriptOutput += "  Prepend_2(theOther: " + theName + "): void;\n"
    typescriptOutput += "  RemoveFirst(): void;\n"
    typescriptOutput += "  Reverse(): void;\n"
    typescriptOutput += "}\n\n"

    oc1 = overloadedConstrutorObject()
    oc1.spelling = theName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = theName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const Handle_NCollection_BaseAllocator&"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "theAllocator"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = theName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + theName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theOther"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    [ocTypes, ocs] = getOverloadedConstructorsTypescriptDefinition(nCollection_ListTypedef, [
      oc1, oc2, oc3
    ], typedefs, thisLibName, moduleExportsDict, imports)

    typescriptOutput += ocTypes
    allExports.extend(ocs)
  
  return [typescriptOutput, allExports]

def getNCollection_SequenceTypescriptDefinitions(typedefs, thisLibName, moduleExportsDict, imports):
  allExports = []
  typescriptOutput = ""
  print("generating typescript definitions for NCollection_Sequence types...")

  nCollection_ListTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("NCollection_Sequence") and not x.underlying_typedef_type.spelling.endswith("::Iterator"), typedefs))
  for nCollection_ListTypedef in nCollection_ListTypedefs:
    theName = nCollection_ListTypedef.spelling
    theType = nCollection_ListTypedef.underlying_typedef_type.get_template_argument_type(0).spelling

    typescriptType = getTypescriptDefFromTypedef(nCollection_ListTypedef.underlying_typedef_type.get_template_argument_type(0), typedefs)
    typescriptOutput += "export declare class " + theName + " {\n"
    typescriptOutput += "  begin(): any;\n"
    typescriptOutput += "  end(): any;\n"
    typescriptOutput += "  cbegin(): any;\n"
    typescriptOutput += "  cend(): any;\n"
    typescriptOutput += "  Size(): Standard_Integer;\n"
    typescriptOutput += "  Length(): Standard_Integer;\n"
    typescriptOutput += "  Lower(): Standard_Integer;\n"
    typescriptOutput += "  Upper(): Standard_Integer;\n"
    typescriptOutput += "  IsEmpty(): Standard_Boolean;\n"
    typescriptOutput += "  Reverse(): void;\n"
    typescriptOutput += "  Exchange(): void;\n"
    typescriptOutput += "  Clear(): void;\n"
    typescriptOutput += "  Assign(): any;\n"
    typescriptOutput += "}\n\n"

    oc1 = overloadedConstrutorObject()
    oc1.spelling = theName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = theName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const Handle_NCollection_BaseAllocator&"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "theAllocator"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = theName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + theName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theOther"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    [ocTypes, ocs] = getOverloadedConstructorsTypescriptDefinition(nCollection_ListTypedef, [
      oc1, oc2, oc3
    ], typedefs, thisLibName, moduleExportsDict, imports)

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
          [ocTypes, ocs] = getOverloadedConstructorsTypescriptDefinition(theClass, None, filteredTypedefs, libExportName, moduleExportsDict, imports)
          typedefOutput += ocTypes
          for oc in ocs:
            exportOutput += "  " + oc + ": typeof " + oc + ";\n"

      except SkipException as e:
        print(str(e))
  
  [handleTypescriptDefinitions, handleExports] = getHandleTypescriptDefinitions(filteredTypedefs, libExportName, moduleExportsDict, imports)
  typedefOutput += handleTypescriptDefinitions
  for handleExport in handleExports:
    exportOutput += "  " + handleExport + ": typeof " + handleExport + ";\n"

  [nCollectionArray1TypescriptDefinitions, nCollectionArray1Exports] = getNCollection_Array1TypescriptDefinitions(filteredTypedefs, libExportName, moduleExportsDict, imports)
  typedefOutput += nCollectionArray1TypescriptDefinitions
  for nCollectionArray1Export in nCollectionArray1Exports:
    exportOutput += "  " + nCollectionArray1Export + ": typeof " + nCollectionArray1Export + ";\n"

  [nCollectionListTypescriptDefinitions, nCollectionListExports] = getNCollection_ListTypescriptDefinitions(filteredTypedefs, libExportName, moduleExportsDict, imports)
  typedefOutput += nCollectionListTypescriptDefinitions
  for nCollectionListExport in nCollectionListExports:
    exportOutput += "  " + nCollectionListExport + ": typeof " + nCollectionListExport + ";\n"

  [nCollectionSequenceTypescriptDefinitions, nCollectionSequenceExports] = getNCollection_SequenceTypescriptDefinitions(filteredTypedefs, libExportName, moduleExportsDict, imports)
  typedefOutput += nCollectionSequenceTypescriptDefinitions
  for nCollectionSequenceExport in nCollectionSequenceExports:
    exportOutput += "  " + nCollectionSequenceExport + ": typeof " + nCollectionSequenceExport + ";\n"

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
