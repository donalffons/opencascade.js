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
        except SkipException as e:
          print(str(e))

  def processClass(self, theClass):
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

    for theClass in self.translationUnit.cursor.get_children():
      if theClass.get_definition() is None or not theClass == theClass.get_definition():
        continue
      if not theClass.extent.start.file.name in self.headerFiles:
        continue
      if not self.filterClass(theClass):
        continue
      if theClass.kind == clang.cindex.CursorKind.CLASS_DECL:
        nonPublicDestructor = any(x.kind == clang.cindex.CursorKind.DESTRUCTOR and not x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC for x in theClass.get_children())
        placementDelete = next((x for x in theClass.get_children() if x.spelling == "operator delete" and len(list(x.get_arguments())) == 2), None) is not None
        if nonPublicDestructor or placementDelete:
          self.output += "namespace emscripten { namespace internal { template<> void raw_destructor<" + theClass.spelling + ">(" + theClass.spelling + "* ptr) { /* do nothing */ } } }\n"

  def processClass(self, theClass):
    children = theClass.get_children()
    className = theClass.spelling

    baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))

    if len(baseSpec) > 0:
      baseClassBinding = ", base<" + baseSpec[0].type.spelling + ">"
    else:
      baseClassBinding = ""

    self.output += "  class_<" + className + baseClassBinding + ">(\"" + className + "\")\n"

    super().processClass(theClass)

  def processFinalizeClass(self):
    self.output += "  ;\n"

  def processSimpleConstructor(self, theClass):
    children = list(theClass.get_children())
    constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))

    if len(constructors) == 0:
      self.output += "    .constructor<>()\n"
      return
    publicConstructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
    if len(publicConstructors) == 0 or len(publicConstructors) > 1:
      return
    standardConstructor = publicConstructors[0]
    if not standardConstructor:
      return

    argTypesBindings = ", ".join(list(map(lambda x: x.type.spelling, list(standardConstructor.get_arguments()))))
    
    self.output += "    .constructor<" + argTypesBindings + ">()\n"

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

  def processOverloadedConstructors(self, theClass, children = None):
    if children is None:
      children = list(theClass.get_children())
    constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
    if len(constructors) == 1:
      return
    constructorBindings = ""
    allOverloads = [m for m in children if m.kind == clang.cindex.CursorKind.CONSTRUCTOR and m.access_specifier == clang.cindex.AccessSpecifier.PUBLIC]
    if len(allOverloads) == 1:
      raise Exception("Something weird happened")
    for constructor in constructors:
      overloadPostfix = "" if (not len(allOverloads) > 1) else "_" + str(allOverloads.index(constructor) + 1)

      args = ", ".join(list(map(lambda x: self.getSingleArgumentBinding(True, True)(x)[0], list(constructor.get_arguments()))))
      argNames = ", ".join(list(map(lambda x: x.spelling if not any(y.spelling == "Standard_CString" for y in x.get_tokens()) else x.spelling + ".c_str()", list(constructor.get_arguments()))))
      argTypes = ", ".join(list(map(lambda x: self.getSingleArgumentBinding(False, True)(x)[0], list(constructor.get_arguments()))))

      constructorBindings += "    struct " + constructor.spelling + overloadPostfix + " : public " + constructor.spelling + " {\n"
      constructorBindings += "      " + constructor.spelling + overloadPostfix + "(" + args + ") : " + constructor.spelling + "(" + argNames + ") {}\n"
      constructorBindings += "    };\n"
      constructorBindings += "    class_<" + constructor.spelling + overloadPostfix + ", base<" + constructor.spelling + ">>(\"" + constructor.spelling + overloadPostfix + "\")\n"
      constructorBindings += "      .constructor<" + argTypes + ">()\n"
      constructorBindings += "    ;\n"

    self.output += constructorBindings

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

    self.exports = []

  def process(self):
    for importLib, importItems in self.imports.items():
      self.output += "import { " + ", ".join(importItems) + " } from './" + importLib + ".wasm';\n\n"
    
    self.output += \
      "declare const libName = \"" + self.typescriptFileName + "\";\n" + \
      "export default libName;\n\n" + \
      "type Standard_Boolean = boolean;\n" + \
      "type Standard_Byte = number;\n" + \
      "type Standard_Character = string;\n" + \
      "type Standard_CString = string;\n" + \
      "type Standard_Integer = number;\n" + \
      "type Standard_Real = number;\n" + \
      "type Standard_ShortReal = number;\n" + \
      "type Standard_Size = number;\n\n"

    super().process()

    self.output += "export declare type " + self.name + "Lib = {\n"
    for export in self.exports:
      self.output += "  " + export + ": typeof " + export + ";\n"
    self.output += "};\n"

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

    super().processClass(theClass)

  def processFinalizeClass(self):
    self.output += "}\n\n"

  def processSimpleConstructor(self, theClass):
    children = list(theClass.get_children())
    constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))

    if len(constructors) == 0:
      self.output += "  constructor();\n"
      return
    publicConstructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
    if len(publicConstructors) == 0 or len(publicConstructors) > 1:
      return
    standardConstructor = publicConstructors[0]
    if not standardConstructor:
      return

    argsTypescriptDef = ", ".join(list(map(lambda x: self.getTypescriptDefFromArg(x), list(standardConstructor.get_arguments()))))
    
    self.output += "  constructor(" + argsTypescriptDef + ")\n"
    self.exports.append(theClass.spelling)

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

  def getTypescriptDefFromArg(self, arg, suffix = ""):
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

      args = ", ".join(list(map(lambda x: self.getTypescriptDefFromArg(x[1], x[0]), enumerate(method.get_arguments()))))
      returnType = self.getTypescriptDefFromResultType(method.result_type)

      self.output += "  " + method.spelling + overloadPostfix + "(" + args + "): " + returnType + ";\n"

  def processOverloadedConstructors(self, theClass, children = None):
    if children is None:
      children = list(theClass.get_children())
    constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
    if len(constructors) == 1:
      return

    constructorTypescriptDef = ""
    allOverloadedConstructors = []

    for constructor in constructors:
      [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, constructor, children)

      argsTypescriptDef = ", ".join(list(map(lambda x: self.getTypescriptDefFromArg(x), list(constructor.get_arguments()))))
      constructorTypescriptDef += "  export declare class " + constructor.spelling + overloadPostfix + " extends " + constructor.spelling + " {\n"
      constructorTypescriptDef += "    constructor(" + argsTypescriptDef + ");\n"
      constructorTypescriptDef += "  }\n\n"
      allOverloadedConstructors.append(constructor.spelling + overloadPostfix)
    self.output += constructorTypescriptDef
    self.exports.extend(allOverloadedConstructors)
