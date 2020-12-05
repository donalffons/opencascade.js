import clang.cindex

from .Common import ignoreDuplicateTypedef

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

  def process(self):
    super().process()
