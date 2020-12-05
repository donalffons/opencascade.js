import clang.cindex

from .Common import ignoreDuplicateTypedef, shouldProcessClass, SkipException, isAbstractClass

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
    typedefs = filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, self.translationUnit.cursor.get_children())
    sortedTypedefs = {}
    for child in typedefs:
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

    for child in self.translationUnit.cursor.get_children():
      if shouldProcessClass(child, self.headerFiles, self.filterClass):
        try:
          self.processClass(child)
          isAbstract = isAbstractClass(child, self.translationUnit)
          if not isAbstract:
            self.processSimpleConstructor(child)
          self.processFinalizeClass()
          self.processMethods(child, self.filterMethod)
          if not isAbstract:
            self.processOverloadedConstructorsBinding(child)
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

    self.outout += "}\n"

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
    pass

  def processMethods(self, theClass, filterMethod):
    pass

  def processOverloadedConstructorsBinding(self, theClass):
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
    pass

  def processMethods(self, theClass, filterMethod):
    pass

  def processOverloadedConstructorsBinding(self, theClass):
    pass
