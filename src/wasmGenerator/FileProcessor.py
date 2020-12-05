import clang.cindex

from .Common import ignoreDuplicateTypedef, shouldProcessClass, SkipException, isAbstractClass, getMethodOverloadPostfix

class FileProcessor:
  def __init__(self, translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum):
    self.output = ""
    
    self.translationUnit = translationUnit
    self.headerFiles = headerFiles
    self.filterClass = filterClass
    self.filterMethod = filterMethod
    self.filterTypedef = filterTypedef
    self.filterEnum = filterEnum

  def process(self):
    self.typedefs = filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, self.translationUnit.cursor.get_children())
    sortedTypedefs = {}
    for child in self.typedefs:
      if child.get_definition() is None or not child == child.get_definition():
        continue
      if not child.extent.start.file.name in self.headerFiles:
        continue
      if not self.filterTypedef(child):
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

    for theClass in self.translationUnit.cursor.get_children():
      if shouldProcessClass(theClass, self.headerFiles, self.filterClass):
        try:
          self.processClass(theClass)
          isAbstract = isAbstractClass(theClass, self.translationUnit)
          if not isAbstract:
            self.processSimpleConstructor(theClass)
          for method in theClass.get_children():
            if not self.filterMethod(theClass, method):
              continue
            try:
              self.processMethod(theClass, method)
            except SkipException as e:
              print(str(e))
          self.processFinalizeClass()
          if not isAbstract:
            self.processOverloadedConstructors(theClass)
        except SkipException as e:
          print(str(e))

class EmbindProcessor(FileProcessor):
  def __init__(
    self,
    includeDirectives, name,
    translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum
  ):
    super().__init__(translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum)
    self.includeDirectives = includeDirectives
    self.name = name

  def process(self):
    self.output += \
      self.includeDirectives + "\n" + \
      "\n" + \
      "#include <emscripten/bind.h>\n" + \
      "using namespace emscripten;\n" + \
      "\n" + \
      "EMSCRIPTEN_BINDINGS(" + self.name + ") {\n"

    super().process()

    self.output += "}\n"

  def processClass(self, theClass):
    children = theClass.get_children()
    className = theClass.spelling

    baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))

    if len(baseSpec) > 0:
      baseClassBinding = ", base<" + baseSpec[0].type.spelling + ">"
    else:
      baseClassBinding = ""

    self.output += "  class_<" + className + baseClassBinding + ">(\"" + className + "\")\n"

  def processFinalizeClass(self):
    self.output += "  ;\n"

  def processSimpleConstructor(self, theClass):
    self.output += "// processSimpleConstructor\n";
    pass

  def getSingleArgumentBinding(self, argNames = True, isConstructor = False):
    def f(arg):
      argChildren = list(arg.get_children())
      argBinding = ""
      hasDefaultValue = any(x.spelling == "=" for x in list(arg.get_tokens()))
      isArray = not hasDefaultValue and len(argChildren) > 1 and argChildren[1].kind == clang.cindex.CursorKind.INTEGER_LITERAL
      changed = False
      if isArray:
        const = "const " if list(arg.get_tokens())[0].spelling == "const" else ""
        arrayCount = list(argChildren[1].get_tokens())[0].spelling
        argBinding = const + argChildren[0].type.spelling + " (&" + (arg.spelling if argNames else "") + ")[" + arrayCount + "]"
        changed = True
      else:
        typename = arg.type.spelling
        if arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
          tokenList = list(arg.get_tokens())
          isConstRef = len(tokenList) > 0 and tokenList[0].spelling == "const"
          if not isConstRef:
            if arg.type.spelling[-2] == "*" or "".join(arg.type.spelling.rsplit("&", 1)).strip() in ["Standard_Boolean", "Standard_Real", "Standard_Integer"]: # types that can be copied
              typename = "".join(arg.type.spelling.rsplit("&", 1))
              changed = True
            else:
              if isConstructor:
                typename = arg.type.spelling
                changed = True
              else:
                typename = "const " + arg.type.spelling
                changed = True
        if any(x.spelling == "Standard_CString" for x in arg.get_tokens()):
          typename = "std::string"
          changed = True
        argBinding = typename + ((" " + arg.spelling) if argNames else "")
      return [argBinding, changed]
    return f

  def getCastMethodBindings(self, theClass, method):
    className = theClass.spelling
    args = list(method.get_arguments())
    hasConstCharArg = any(any(x.spelling == "Standard_CString" for x in a.get_tokens()) for a in args)
    hasRefArg = any(x.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE for x in args)
    needReinterpretCast = hasConstCharArg or hasRefArg
    returnType = method.result_type.spelling
    const = "const" if method.is_const_method() else ""
    classQualifier = (className + "::" if not method.is_static_method() else "" ) + "*"

    returnTypeHasNonPublicCopyConstructor = any(x.is_copy_constructor() and not x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC for x in method.result_type.get_pointee().get_declaration().get_children())

    if returnTypeHasNonPublicCopyConstructor:
      needReinterpretCast = True
      returnType = method.result_type.get_pointee().get_declaration().spelling + "*"

    if needReinterpretCast:
      castedArgResults = list(map(self.getSingleArgumentBinding(False), args))
      somethingChanged = any(map(lambda x: x[1], castedArgResults))
      castedArgTypes = list(map(lambda x: x[0], castedArgResults))
      if somethingChanged or returnTypeHasNonPublicCopyConstructor:
        return ["reinterpret_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
      else:
        return ["static_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
    return ["", ""]

  def processMethod(self, theClass, method):
    className = theClass.spelling
    if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
      [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)

      if numOverloads == 1:
        functor = "&" + className + "::" + method.spelling
      else:
        returnType = method.result_type.spelling
        const = "const" if method.is_const_method() else ""
        args = ", ".join(list(map(lambda x: x.type.spelling + " " + x.spelling, list(method.get_arguments()))))
        functor = "(" + returnType + " (" + ((className + "::") if not method.is_static_method() else "") + "*)(" + args + ") " + const + ") &" + className + "::" + method.spelling

      if method.is_static_method():
        functionCommand = "class_function"
      else:
        functionCommand = "function"

      cast = self.getCastMethodBindings(theClass, method)
      self.output += "    ." + functionCommand + "(\"" + method.spelling + overloadPostfix + "\", " + cast[0] + functor + cast[1] + ", allow_raw_pointers())\n"

  def processOverloadedConstructors(self, theClass):
    self.output += "// processOverloadedConstructors\n";
    pass

class TypescriptProcessor(FileProcessor):
  def __init__(
    self,
    typescriptFileName, name, moduleExportsDict,
    translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum
  ):
    super().__init__(translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum)
    self.typescriptFileName = typescriptFileName
    self.name = name
    self.moduleExportsDict = moduleExportsDict
    self.imports = {}

  def process(self):
    super().process()

  def addImportIfWeHaveTo(self, libItem):
    if not libItem in self.moduleExportsDict[self.name]:
      importLib = next((x for x in self.moduleExportsDict if libItem in self.moduleExportsDict[x]), None)
      if not importLib == None:
        if not importLib in self.imports:
          self.imports[importLib] = []
        if not libItem in self.imports[importLib]:
          self.imports[importLib].append(libItem)
      else:
        print("Base class \"" + libItem + "\" is not part of this module and has not been exported by any other module")

  def processClass(self, theClass):
    baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))
    baseClassDefinition = ""
    if len(baseSpec) > 0:
      if any(x in baseSpec[0].type.spelling for x in [":", "<"]):
        print("Unsupported character for base class \"" + baseSpec[0].type.spelling + "\" (" + theClass.spelling + ")")
      else:
        if self.filterClass(baseSpec[0].type):
          baseClassDefinition = " extends " + baseSpec[0].type.spelling
          self.addImportIfWeHaveTo(baseSpec[0].type.spelling)

    self.output += "export declare class " + theClass.spelling + baseClassDefinition + " {\n"

  def processFinalizeClass(self):
    self.output += "}\n\n"

  def processSimpleConstructor(self, theClass):
    self.output += "// processSimpleConstructor\n";
    pass

  def convertBuiltinTypes(self, typeName):
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

  def getTypescriptDefFromResultType(self, res):
    resTypedefType = res.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
    if not resTypedefType == "void":
      typedefType = next((x for x in self.typedefs if x.underlying_typedef_type.spelling == resTypedefType), None)
      resTypeName = (res.spelling if typedefType is None else typedefType.spelling)
      resTypeName = resTypeName.replace("&", "").replace("const", "").replace("*", "").strip()
      resTypeName = self.convertBuiltinTypes(resTypeName)
    else:
      resTypeName = resTypedefType
    if resTypeName == "" or "(" in resTypeName or ":" in resTypeName:
      print("could not generate proper types for type name '" + resTypeName + "', using 'any' instead.")
      resTypeName = "any"
    return resTypeName

  def getTypescriptDefFromArg(self, arg, thisLibName, suffix = ""):
    argTypedefType = arg.type.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
    typedefType = next((x for x in self.typedefs if x.underlying_typedef_type.spelling == argTypedefType), None)
    argTypeName = (arg.type.spelling if typedefType is None else typedefType.spelling)
    argTypeName = argTypeName.replace("&", "").replace("const", "").replace("*", "").strip()
    argTypeName = self.convertBuiltinTypes(argTypeName)
    if argTypeName == "" or "(" in argTypeName or ":" in argTypeName:
      print("could not generate proper types for type name '" + argTypeName + "', using 'any' instead.")
      argTypeName = "any"
    self.addImportIfWeHaveTo(argTypeName)
    
    argname = (arg.spelling if not arg.spelling == "" else ("a" + str(suffix)))
    if argname in ["var", "with", "super"]:
      argname += "_"
    return argname + ": " + argTypeName

  def processMethod(self, theClass, method):
    className = theClass.spelling
    if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
      [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)

      args = ", ".join(list(map(lambda x: self.getTypescriptDefFromArg(x[1], self.name, x[0]), enumerate(method.get_arguments()))))
      returnType = self.getTypescriptDefFromResultType(method.result_type)

      self.output += "  " + method.spelling + overloadPostfix + "(" + args + "): " + returnType + ";\n"

  def processOverloadedConstructors(self, theClass):
    self.output += "// processOverloadedConstructors\n";
    pass
