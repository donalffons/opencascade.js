import clang.cindex

from .Common import shouldProcessClass, SkipException

def getExports(translationUnit, headerFiles, filterClass, filterMethod, filterTypedef, filterEnum):
  exportObjects = []

  for child in translationUnit.cursor.get_children():
    if shouldProcessClass(child, headerFiles, filterClass):
      try:
        exportObjects.append(child.spelling)
      except SkipException as e:
        print(str(e))
  
  return exportObjects
