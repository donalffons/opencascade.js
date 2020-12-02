import clang.cindex

from .Common import shouldProcessClass, isAbstractClass, SkipException

def getClassTypescriptDefinitions(theClass, filterClass):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, theClass.get_children()))
  baseClassDefinition = ""
  if len(baseSpec) > 0:
    if any(x in baseSpec[0].type.spelling for x in [":", "<"]):
      print("Unsupported character for base class \"" + baseSpec[0].type.spelling + "\" (" + theClass.spelling + ")")
    else:
      if filterClass(baseSpec[0].type):
        baseClassDefinition = " extends " + baseSpec[0].type.spelling
  output = \
    "declare class " + theClass.spelling + baseClassDefinition + \
    " {}\n\n"
  return output

def getTypescriptDefinitions(libName, libExportName, translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum):
  typedefOutput = ""
  exportOutput = ""

  for child in translationUnit.cursor.get_children():
    if shouldProcessClass(child, headerFiles, filterClass):
      try:
        typedefOutput += getClassTypescriptDefinitions(child, filterClass)
        exportOutput += "  " + child.spelling + ": typeof " + child.spelling + ";\n"
      except SkipException as e:
        print(str(e))
  
  output = \
    "declare const libName = \"" + libName + "\";\n" + \
    "export default libName;\n\n" + \
    typedefOutput + \
    "export declare type " + libExportName + " = {\n" + \
    exportOutput + \
    "};\n"
  return output
