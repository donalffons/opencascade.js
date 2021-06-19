import clang.cindex
import re

from .Common import ignoreDuplicateTypedef, shouldProcessClass, SkipException, isAbstractClass, getMethodOverloadPostfix

builtInTypes = [ # according to https://en.cppreference.com/w/cpp/language/types
  # Integer types
  "int",
  "short", "short int", "signed short", "signed short int",
  "unsigned short", "unsigned short int",
  "int", "signed", "signed int",
  "unsigned", "unsigned int",
  "long", "long int", "signed long", "signed long int",
  "unsigned long", "unsigned long int",
  "long long", "long long int", "signed long long", "signed long long int",
  "unsigned long long", "unsigned long long int",
  # Boolean type
  "bool",
  # Character types
  "char",
  "signed char", "unsigned char",
  "wchar_t",
  "char16_t", "char32_t", "char8_t",
  # Floating point types
  "float", "double", "long double"
]

cStringTypes = [
  "const char *",
  "const char *const",
  "char *",
  "char *const",
]

def isString(x):
  return x.type.get_canonical().spelling in cStringTypes

def getClassTypeName(theClass, templateDecl = None):
  return templateDecl.spelling if templateDecl is not None else theClass.spelling

class FileProcessor:
  def __init__(self, translationUnit, headerFiles, filterClass, filterMethodOrProperty, filterTypedef, filterEnum, duplicateTypedefs):
    self.output = ""
    
    self.translationUnit = translationUnit
    self.headerFiles = headerFiles
    self.filterClass = filterClass
    self.filterMethodOrProperty = filterMethodOrProperty
    self.filterTypedef = filterTypedef
    self.filterEnum = filterEnum
    self.duplicateTypedefs = duplicateTypedefs

  def getTypedefedTemplateTypeAsString(self, theTypeSpelling, templateDecl = None, templateArgs = None):
    if templateDecl is None:
      typedefType = next((x for x in self.typedefs if x.underlying_typedef_type.spelling == theTypeSpelling), None)
      typedefType = None if typedefType is None else typedefType.spelling
    else:
      templateType = self.replaceTemplateArgs(theTypeSpelling, templateArgs)
      rawTemplateType = templateType.replace("&", "").replace("const", "").strip()
      rawTypedefType = next((x for x in self.templateTypedefs if (x.underlying_typedef_type.spelling == rawTemplateType or x.underlying_typedef_type.spelling == "opencascade::" + rawTemplateType)), None)
      rawTypedefType = rawTemplateType if rawTypedefType is None else rawTypedefType.spelling
      typedefType = templateType.replace(rawTemplateType, rawTypedefType)
    return theTypeSpelling if typedefType is None else typedefType

  def replaceTemplateArgs(self, string, templateArgs = None):
    newString = string
    if templateArgs is None:
      return newString
    for key in templateArgs:
      p = re.compile("(\\W+|^)" + key + "(\\W|$)")
      newString = p.sub("\\1" + templateArgs[key].spelling + "\\2", newString)
    return newString

  def process(self):
    self.typedefs = filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, self.translationUnit.cursor.get_children())

    for theClass in self.translationUnit.cursor.get_children():
      if shouldProcessClass(theClass, self.headerFiles, self.filterClass):
        try:
          self.processClass(theClass)
        except SkipException as e:
          print(str(e))

    self.templateTypedefs = list(filter(
      lambda x:
        x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and
        not (x.get_definition() is None or not x == x.get_definition()) and
        self.filterTypedef(x) and
        x.type.get_num_template_arguments() != -1 and
        not ignoreDuplicateTypedef(x),
      self.translationUnit.cursor.get_children()))

    for templateTypedef in self.templateTypedefs:
      if templateTypedef.underlying_typedef_type.spelling in self.duplicateTypedefs:
        duplicatesForThisTypedef = self.duplicateTypedefs[templateTypedef.underlying_typedef_type.spelling]
        if not templateTypedef.spelling == duplicatesForThisTypedef[0]:
          print("Template typedef \"" + templateTypedef.spelling + "\" for type \"" + templateTypedef.underlying_typedef_type.spelling + "\" has already been processed with the name \"" + duplicatesForThisTypedef[0] + "\", skipping.")
          continue
      try:
        templateRefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TEMPLATE_REF, templateTypedef.get_children()))
        if len(templateRefs) != 1:
          print("The number of template refs for the template typedef \"" + templateTypedef.spelling + "\" is not 1!")
          continue

        templateClass = templateRefs[0].get_definition()
        if templateClass is None:
          continue
        templateArgNames = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER, templateClass.get_children()))
        templateArgs = {}
        for i, templateArgName in enumerate(templateArgNames):
          templateArgType = templateTypedef.type.get_template_argument_type(i)
          if templateArgType.spelling == "":
            raise SkipException("Template argument type is empty for at least one argument. Is this class using default values for template arguments? This is currently not supported (" + templateTypedef.spelling + ")")
          templateArgs[templateArgName.spelling] = templateArgType

        self.processClass(templateClass, templateTypedef, templateArgs)
      except SkipException as e:
        print(str(e))

    self.enums = list(filter(
      lambda x:
        x.kind == clang.cindex.CursorKind.ENUM_DECL and
        self.filterEnum(x),
      self.translationUnit.cursor.get_children()))

    for theEnum in self.enums:
      self.processEnum(theEnum)

  def processClass(self, theClass, templateDecl = None, templateArgs = None):
    isAbstract = isAbstractClass(theClass, self.translationUnit)
    if not isAbstract:
      self.processSimpleConstructor(theClass)
    for method in theClass.get_children():
      if not self.filterMethodOrProperty(theClass, method):
        continue
      try:
        self.processMethodOrProperty(theClass, method, templateDecl, templateArgs)
      except SkipException as e:
        print(str(e))
    self.processFinalizeClass()
    if not isAbstract:
      try:
        self.processOverloadedConstructors(theClass, None, templateDecl, templateArgs)
      except SkipException as e:
        print(str(e))

class ExportsProcessor(FileProcessor):
  def __init__(
    self,
    includeDirectives, name,
    translationUnit, headerFiles, filterClass, filterMethodOrProperty, filterTypedef, filterEnum, duplicateTypedefs
  ):
    super().__init__(translationUnit, headerFiles, filterClass, filterMethodOrProperty, filterTypedef, filterEnum, duplicateTypedefs)
    self.includeDirectives = includeDirectives
    self.name = name
    self.exportObjects = []

  def processClass(self, theClass, templateDecl = None, templateArgs = None):
    className = getClassTypeName(theClass, templateDecl)
    self.exportObjects.append(className)
    super().processClass(theClass, templateDecl, templateArgs)

  def processFinalizeClass(self):
    pass

  def processSimpleConstructor(self, theClass):
    pass

  def processMethodOrProperty(self, theClass, method, templateDecl = None, templateArgs = None):
    pass

  def processOverloadedConstructors(self, theClass, children = None, templateDecl = None, templateArgs = None):
    name = getClassTypeName(theClass, templateDecl)
    self.exportObjects.append(name)

  def processEnum(self, theEnum):
    self.exportObjects.append(theEnum.spelling)

class EmbindProcessor(FileProcessor):
  def __init__(
    self,
    includeDirectives, name,
    translationUnit, headerFiles, filterClass, filterMethodOrProperty, filterTypedef, filterEnum, duplicateTypedefs
  ):
    super().__init__(translationUnit, headerFiles, filterClass, filterMethodOrProperty, filterTypedef, filterEnum, duplicateTypedefs)
    self.includeDirectives = includeDirectives
    self.name = name

  def process(self):
    self.output += \
      self.includeDirectives + "\n" + \
      "\n" + \
      "#include <emscripten/bind.h>\n" + \
      "using namespace emscripten;\n" + \
      "#include <functional>\n" + \
      "\n" + \
      "template<typename T>\n" + \
      "T getReferenceValue(const emscripten::val& v) {\n" + \
      "  if(!(v.typeOf().as<std::string>() == \"object\")) {\n" + \
      "    return v.as<T>(allow_raw_pointers());\n" + \
      "  } else if(v.typeOf().as<std::string>() == \"object\" && v.hasOwnProperty(\"current\")) {\n" + \
      "    return v[\"current\"].as<T>(allow_raw_pointers());\n" + \
      "  }\n" + \
      "  throw(\"unsupported type\");\n" + \
      "}\n" + \
      "\n" + \
      "template<typename T>\n" + \
      "void updateReferenceValue(emscripten::val& v, T& val) {\n" + \
      "  if(v.typeOf().as<std::string>() == \"object\" && v.hasOwnProperty(\"current\")) {\n" + \
      "    v.set(\"current\", val);\n" + \
      "  }\n" + \
      "}\n" + \
      "\n" + \
      "EMSCRIPTEN_BINDINGS(" + self.name.replace(".", "_") + ") {\n"

    super().process()

    self.output += "}\n"

    # Epilog
    for theClass in self.translationUnit.cursor.get_children():
      if theClass.get_definition() is None or not theClass == theClass.get_definition():
        continue
      if not self.filterClass(theClass):
        continue
      if (
        theClass.kind == clang.cindex.CursorKind.CLASS_DECL or
        theClass.kind == clang.cindex.CursorKind.STRUCT_DECL
      ):
        nonPublicDestructor = any(x.kind == clang.cindex.CursorKind.DESTRUCTOR and not x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC for x in theClass.get_children())
        placementDelete = next((x for x in theClass.get_children() if x.spelling == "operator delete" and len(list(x.get_arguments())) == 2), None) is not None
        if nonPublicDestructor or placementDelete:
          self.output += "namespace emscripten { namespace internal { template<> void raw_destructor<" + theClass.spelling + ">(" + theClass.spelling + "* ptr) { /* do nothing */ } } }\n"

  def processClass(self, theClass, templateDecl = None, templateArgs = None):
    className = getClassTypeName(theClass, templateDecl)
    if className == "":
      className = theClass.type.spelling

    baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))

    if len(baseSpec) > 0:
      baseClassBinding = ", base<" + baseSpec[0].type.spelling + ">"
    else:
      baseClassBinding = ""

    self.output += "  class_<" + className + baseClassBinding + ">(\"" + className + "\")\n"

    super().processClass(theClass, templateDecl, templateArgs)

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

  def getSingleArgumentBinding(self, argNames = True, isConstructor = False, templateDecl = None, templateArgs = None):
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
        typename = self.getTypedefedTemplateTypeAsString(arg.type.spelling, templateDecl, templateArgs)
        if arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
          tokenList = list(arg.get_tokens())
          isConstRef = len(tokenList) > 0 and tokenList[0].spelling == "const"
          if not isConstRef:
            if typename[-2] == "*" or "".join(typename.rsplit("&", 1)).strip() in ["Standard_Boolean", "Standard_Real", "Standard_Integer"]: # types that can be copied
              typename = "".join(typename.rsplit("&", 1))
              changed = True
            else:
              if isConstructor:
                typename = typename
                changed = True
              else:
                typename = "const " + typename
                changed = True
        argBinding = typename + ((" " + arg.spelling) if argNames else "")
      return [argBinding, changed]
    return f

  def processMethodOrProperty(self, theClass, method, templateDecl = None, templateArgs = None):
    className = getClassTypeName(theClass, templateDecl)
    if className == "":
      className = theClass.type.spelling
    if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
      [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)

      needsWrapper = list(map(lambda arg: {
        "needsWrapper": arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE and (
          arg.type.get_pointee().get_canonical().spelling in builtInTypes or
          arg.type.get_pointee().kind == clang.cindex.TypeKind.ENUM or
          arg.type.get_pointee().kind == clang.cindex.TypeKind.POINTER or (
            theClass.kind == clang.cindex.CursorKind.CLASS_TEMPLATE and
            arg.type.get_pointee().spelling in templateArgs and
            templateArgs[arg.type.get_pointee().spelling].get_canonical().spelling in builtInTypes
          )
        ) or
        isString(arg),
        "arg": arg,
      }, method.get_arguments()))
      if any(x["needsWrapper"] for x in needsWrapper):
        def replaceTemplateArgs(x):
          if templateArgs is not None and x[1]["arg"].type.get_pointee().spelling.replace("const ", "") in templateArgs:
            return x[1]["arg"].type.spelling.replace(x[1]["arg"].type.get_pointee().spelling.replace("const ", ""), templateArgs[x[1]["arg"].type.get_pointee().spelling.replace("const ", "")].spelling)
          else:
            return x[1]["arg"].type.spelling
        def getArgName(x):
          if not x[1]["arg"].spelling == "":
            return x[1]["arg"].spelling
          else:
            return "argNo" + str(x[0])
        def getArgType(x):
          if templateArgs is not None and x[1]["arg"].type.get_pointee().spelling.replace("const ", "") in templateArgs:
            return x[1]["arg"].type.get_pointee().spelling.replace(x[1]["arg"].type.get_pointee().spelling.replace("const ", ""), templateArgs[x[1]["arg"].type.get_pointee().spelling.replace("const ", "")].spelling)
          else:
            return x[1]["arg"].type.get_pointee().spelling
        classTypeName = getClassTypeName(theClass, templateDecl)
        wrappedParamTypes = ", ".join(map(lambda x: ("std::string" if isString(x[1]["arg"]) else "emscripten::val") if x[1]["needsWrapper"] else replaceTemplateArgs(x), enumerate(needsWrapper)))
        wrappedParamTypesAndNames = ", ".join(map(lambda x: (("std::string " if isString(x[1]["arg"]) else "emscripten::val ") + getArgName(x)) if x[1]["needsWrapper"] else replaceTemplateArgs(x) + " " + getArgName(x), enumerate(needsWrapper)))
        def generateGetReferenceValue(x):
          if x[1]["needsWrapper"] and not isString(x[1]["arg"]):
            return "        auto ref_" + (x[1]["arg"].spelling if not x[1]["arg"].spelling == "" else "argNo"+str(x[0])) + " = getReferenceValue<" + getArgType(x) + ">(" + getArgName(x) + ");\n"
          else:
            return ""
        def generateUpdateReferenceValue(x):
          if x[1]["needsWrapper"] and not isString(x[1]["arg"]):
            return "        updateReferenceValue<" + getArgType(x) + ">(" + getArgName(x) + ", ref_" + getArgName(x) + ");\n"
          else:
            return ""
        def generateInvocationArgs(x):
          if x[1]["needsWrapper"]:
            if not isString(x[1]["arg"]):
              return "ref_" + getArgName(x)
            else:
              if not x[1]["arg"].type.get_canonical().get_pointee().is_const_qualified() or x[1]["arg"].type.is_const_qualified():
                return "strdup(" + getArgName(x) + ".c_str())"
              else:
                return getArgName(x) + ".c_str()"
          else:
            return getArgName(x)
        functionBinding = \
          "\n" + \
          "      " + ("std::function<" + method.result_type.spelling if not method.is_static_method() else "((" + method.result_type.spelling + " (*)") + "(" + (classTypeName + "&, " if not method.is_static_method() else "") + wrappedParamTypes + (")>(" if not method.is_static_method() else "))") + "[](" + (classTypeName + "& that, " if not method.is_static_method() else "") + wrappedParamTypesAndNames + ")" + " -> " + method.result_type.spelling + " {\n" + \
          "".join(map(lambda x: generateGetReferenceValue(x), enumerate(needsWrapper))) + \
          "        " + ((("const " if method.result_type.is_const_qualified() or method.result_type.get_pointee().is_const_qualified() else "") + "auto" + ("& " if method.result_type.kind == clang.cindex.TypeKind.LVALUEREFERENCE else " ") + "ret = ") if not method.result_type.spelling == "void" else "") + ("that." if not method.is_static_method() else theClass.spelling + "::") + method.spelling + "(" + ", ".join(map(lambda x: generateInvocationArgs(x), enumerate(needsWrapper))) + ");\n" + \
          "".join(map(lambda x: generateUpdateReferenceValue(x), enumerate(needsWrapper))) + \
          ("        return ret;\n" if not method.result_type.spelling == "void" else "") + \
          "      }\n" + \
          "    )"
      else:
        if numOverloads == 1:
          functionBinding = "&" + className + "::" + method.spelling
        else:
          functionBinding = "select_overload<" + self.getTypedefedTemplateTypeAsString(method.result_type.spelling, templateDecl, templateArgs) + "(" + ", ".join(map(lambda x: self.getSingleArgumentBinding(True, True, templateDecl, templateArgs)(x)[0], list(method.get_arguments()))) + ")" + ("const" if method.is_const_method() else "") + (", " + getClassTypeName(theClass, templateDecl) if not method.is_static_method() else "") + ">(&" + className + "::" + method.spelling + ")"

      if method.is_static_method():
        functionCommand = "class_function"
      else:
        functionCommand = "function"

      self.output += "    ." + functionCommand + "(\"" + method.spelling + overloadPostfix + "\", " + functionBinding + ", allow_raw_pointers())\n"
    if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.FIELD_DECL:
      if method.type.kind == clang.cindex.TypeKind.CONSTANTARRAY:
        print("Cannot handle array properties, skipping " + className + "::" + method.spelling)
      elif not method.type.get_pointee().kind == clang.cindex.TypeKind.INVALID:
        print("Cannot handle pointer properties, skipping " + className + "::" + method.spelling)
      else:
        self.output += "    .property(\"" + method.spelling + "\", &" + className + "::" + method.spelling + ")\n"

  def processOverloadedConstructors(self, theClass, children = None, templateDecl = None, templateArgs = None):
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

      args = ", ".join(list(map(lambda x: ("std::string " + x.spelling) if isString(x) else self.getSingleArgumentBinding(True, True, templateDecl, templateArgs)(x)[0], constructor.get_arguments())))
      argNames = ", ".join(list(map(lambda x: (x.spelling + ".c_str()") if isString(x) else x.spelling, constructor.get_arguments())))
      argTypes = ", ".join(list(map(lambda x: "std::string" if isString(x) else self.getSingleArgumentBinding(False, True, templateDecl, templateArgs)(x)[0], constructor.get_arguments())))

      name = getClassTypeName(theClass, templateDecl)
      constructorBindings += "    struct " + name + overloadPostfix + " : public " + name + " {\n"
      constructorBindings += "      " + name + overloadPostfix + "(" + args + ") : " + name + "(" + argNames + ") {}\n"
      constructorBindings += "    };\n"
      constructorBindings += "    class_<" + name + overloadPostfix + ", base<" + name + ">>(\"" + name + overloadPostfix + "\")\n"
      constructorBindings += "      .constructor<" + argTypes + ">()\n"
      constructorBindings += "    ;\n"

    self.output += constructorBindings

  def processEnum(self, theEnum):
    bindingsOutput = "  enum_<" + theEnum.spelling + ">(\"" + theEnum.spelling + "\")\n"
    for enumChild in list(theEnum.get_children()):
      bindingsOutput += "    .value(\"" + enumChild.spelling + "\", " + theEnum.spelling + "::" + enumChild.spelling + ")\n"
    bindingsOutput += "  ;\n"
    self.output += bindingsOutput

class TypescriptProcessor(FileProcessor):
  def __init__(
    self,
    name, moduleExportsDict,
    translationUnit, headerFiles, filterClass, filterMethodOrProperty, filterTypedef, filterEnum, duplicateTypedefs
  ):
    super().__init__(translationUnit, headerFiles, filterClass, filterMethodOrProperty, filterTypedef, filterEnum, duplicateTypedefs)
    self.name = name
    self.moduleExportsDict = moduleExportsDict
    self.imports = {}

    self.exports = []

  def process(self):
    for importLib, importItems in self.imports.items():
      self.output += "import { " + ", ".join(importItems) + " } from './" + importLib + ".wasm';\n\n"
    
    self.output += \
      "type Standard_Boolean = boolean;\n" + \
      "type Standard_Byte = number;\n" + \
      "type Standard_Character = number;\n" + \
      "type Standard_CString = string;\n" + \
      "type Standard_Integer = number;\n" + \
      "type Standard_Real = number;\n" + \
      "type Standard_ShortReal = number;\n" + \
      "type Standard_Size = number;\n\n"

    super().process()

    self.output += "export declare type " + self.name.replace(".", "_") + " = {\n"
    for export in self.exports:
      if export != "":
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

  def processClass(self, theClass, templateDecl = None, templateArgs = None):
    baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))
    baseClassDefinition = ""
    if len(baseSpec) > 0:
      if any(x in baseSpec[0].type.spelling for x in [":", "<"]):
        print("Unsupported character for base class \"" + baseSpec[0].type.spelling + "\" (" + theClass.spelling + ")")
      else:
        baseClassDefinition = " extends " + baseSpec[0].type.spelling
        self.addImportIfWeHaveTo(baseSpec[0].type.spelling)

    name = getClassTypeName(theClass, templateDecl)
    self.output += "export declare class " + name + baseClassDefinition + " {\n"
    self.exports.append(theClass.spelling)

    super().processClass(theClass, templateDecl, templateArgs)

  def processFinalizeClass(self):
    self.output += "  delete(): void;\n"
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

  def convertBuiltinTypes(self, typeName):
    if typeName in [
      "int",
      "int16_t",
      "unsigned",
      "uint32_t",
      "unsigned int",
      "unsigned long"
      "long",
      "long int",
      "unsigned short",
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

  def getTypescriptDefFromResultType(self, res, templateDecl = None, templateArgs = None):
    if not res.spelling == "void":
      typedefType = self.getTypedefedTemplateTypeAsString(res.spelling.replace("&", "").replace("const", "").replace("*", "").strip(), templateDecl, templateArgs)
      resTypeName = typedefType.replace("&", "").replace("const", "").replace("*", "").strip()
      resTypeName = self.convertBuiltinTypes(resTypeName)
    else:
      resTypedefType = res.spelling.replace("&", "").replace("const", "").replace("*", "").strip()
      resTypeName = resTypedefType
    if resTypeName == "" or "(" in resTypeName or ":" in resTypeName:
      print("could not generate proper types for type name '" + resTypeName + "', using 'any' instead.")
      resTypeName = "any"
    return resTypeName

  def getTypescriptDefFromArg(self, arg, suffix = "", templateDecl = None, templateArgs = None):
    argTypeName = self.getTypedefedTemplateTypeAsString(arg.type.spelling.replace("&", "").replace("const", "").replace("*", "").strip(), templateDecl, templateArgs)
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

  def processMethodOrProperty(self, theClass, method, templateDecl = None, templateArgs = None):
    if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD and not method.spelling.startswith("operator"):
      [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, method)

      args = ", ".join(list(map(lambda x: self.getTypescriptDefFromArg(x[1], x[0], templateDecl, templateArgs), enumerate(method.get_arguments()))))
      returnType = self.getTypescriptDefFromResultType(method.result_type, templateDecl, templateArgs)

      self.output += "  " + ("static " if method.is_static_method() else "") + method.spelling + overloadPostfix + "(" + args + "): " + returnType + ";\n"

  def processOverloadedConstructors(self, theClass, children = None, templateDecl = None, templateArgs = None):
    if children is None:
      children = list(theClass.get_children())
    constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
    if len(constructors) == 1:
      return

    constructorTypescriptDef = ""
    allOverloadedConstructors = []

    for constructor in constructors:
      [overloadPostfix, numOverloads] = getMethodOverloadPostfix(theClass, constructor, children)

      argsTypescriptDef = ", ".join(list(map(lambda x: self.getTypescriptDefFromArg(x, "", templateDecl, templateArgs), list(constructor.get_arguments()))))
      name = getClassTypeName(theClass, templateDecl)
      constructorTypescriptDef += "  export declare class " + name + overloadPostfix + " extends " + name + " {\n"
      constructorTypescriptDef += "    constructor(" + argsTypescriptDef + ");\n"
      constructorTypescriptDef += "  }\n\n"
      allOverloadedConstructors.append(name + overloadPostfix)
    self.output += constructorTypescriptDef
    self.exports.extend(allOverloadedConstructors)

  def processEnum(self, theEnum):
    bindingsOutput = "export declare type " + theEnum.spelling + " = {\n"
    for enumChild in list(theEnum.get_children()):
      bindingsOutput += "  " + enumChild.spelling + ": {};\n"
    bindingsOutput += "}\n\n"
    self.output += bindingsOutput
    self.exports.append(theEnum.spelling)
