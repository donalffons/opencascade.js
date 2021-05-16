import clang.cindex

from .Common import shouldProcessClass, SkipException

def getExports(translationUnit, headerFiles, filterClass, filterMethodOrProperty, filterTypedef, filterEnum, duplicateTypedefs):
  exportObjects = []

  for child in translationUnit.cursor.get_children():
    if shouldProcessClass(child, headerFiles, filterClass):
        exportObjects.append(child.spelling)
  
  return exportObjects
