from .Common import shouldProcessClass, isAbstractClass

def getTypescriptDefinitions(libName, libExportName, translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum):
  typedefOutput = ""
  exportOutput = ""

  for child in translationUnit.cursor.get_children():
    if shouldProcessClass(child, headerFiles, filterClass):
      try:
        typedefOutput += "declare class " + child.spelling + " {}\n\n"
        exportOutput += "  " + child.spelling + ": typeof " + child.spelling + ";\n\n"
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
