import clang.cindex
import os
import subprocess

from filter.filterClasses import filterClass
from filter.filterMethods import filterMethod
from filter.filterTypedefs import filterTypedef
from filter.filterEnums import filterEnum

from .Exports import getExports

from .FileProcessor import EmbindProcessor, TypescriptProcessor

from enum import Enum

def customFilterFunction(bindingsFilterFunction, otherFilter):
  def filterFunction(theItem, additionalInfo=None):
    if bindingsFilterFunction(theItem):
      return otherFilter(theItem, additionalInfo)
    return False
  return filterFunction

class WasmModule:
  def __init__(self, name="", embindFile="", outputFile="", duplicateTypedefs={}):
    self.name = name
    self.headerFiles = []
    self.sourceFiles = []
    self.libraryFiles = []
    self.embindFile = embindFile
    self.typescriptDefinitionFile = outputFile + ".wasm.d.ts"
    self.outputFile = outputFile
    self.duplicateTypedefs = duplicateTypedefs
    self.bindingsFilterFunction = lambda x, y: True

  def setBindingsFilterFunction(self, bindingsFilterFunction):
    self.bindingsFilterFunction = bindingsFilterFunction

  def addHeaderFile(self, file):
    self.headerFiles.append(file)

  def addSourceFile(self, file):
    self.sourceFiles.append(file)

  def addLibraryFile(self, file, path=None):
    if path is None:
      self.libraryFiles.append(file)
    else:
      self.libraryFiles.extend([
        "-L" + path,
        "-l" + file
      ])

  def parse(self, includeFiles, additionalIncludePaths, additionalSystemIncludePaths):
    includePathArgs = \
      list(dict.fromkeys(map(lambda x: "-I" + os.path.dirname(x), self.headerFiles))) + \
      list(map(lambda x: "-I" + x, [
        "/emsdk/upstream/emscripten/system/include/",
        "/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
        "/clang/clang_11/include/c++/v1",
        "/clang/clang_11/include/c++/v1/support/newlib/"
      ])) + \
      list(map(lambda x: "-I" + x, additionalIncludePaths)) + \
      list(map(lambda x: "-isystem" + x, additionalSystemIncludePaths))
    self.includeDirectives = os.linesep.join(map(lambda x: "#include \"" + os.path.basename(x) + "\"", list(sorted(includeFiles))))

    libFolder = "/clang/clang_11/lib"
    clang.cindex.Config.library_path = libFolder
    index = clang.cindex.Index.create()
    self.tu = index.parse(
      "main.h", [
        "-x",
        "c++",
        "-stdlib=libc++",
        "-D__EMSCRIPTEN__"
      ] + includePathArgs,
      [["main.h", self.includeDirectives]]
    )
    
    if len(self.tu.diagnostics) > 0:
      print("Diagnostic Messages:")
      for d in self.tu.diagnostics:
        print("  " + d.format())

  def generateEmbindings(self):
    p = EmbindProcessor(
      self.includeDirectives, self.name,
      self.tu, self.headerFiles, customFilterFunction(self.bindingsFilterFunction, filterClass), filterMethod, customFilterFunction(self.bindingsFilterFunction, filterTypedef), customFilterFunction(self.bindingsFilterFunction, filterEnum), self.duplicateTypedefs)
    p.process()

    bindingsFile = open(self.embindFile, "w")
    bindingsFile.write(p.output)

  def getExports(self):
    return getExports(self.tu, self.headerFiles, customFilterFunction(self.bindingsFilterFunction, filterClass), filterMethod, customFilterFunction(self.bindingsFilterFunction, filterTypedef), customFilterFunction(self.bindingsFilterFunction, filterEnum), self.duplicateTypedefs)

  def setModuleExportsDict(self, moduleExportsDict):
    self.moduleExportsDict = moduleExportsDict

  def generateTypescriptDefinitions(self):
    typescriptFileName = "./" + "/".join(self.outputFile.split("/")[3:]) + ".wasm.d.ts"
    
    p = TypescriptProcessor(
      typescriptFileName, self.name, self.moduleExportsDict,
      self.tu, self.headerFiles, customFilterFunction(self.bindingsFilterFunction, filterClass), filterMethod, customFilterFunction(self.bindingsFilterFunction, filterTypedef), customFilterFunction(self.bindingsFilterFunction, filterEnum), self.duplicateTypedefs)
    p.process()

    typescriptFile = open(self.typescriptDefinitionFile, "w")
    typescriptFile.write(p.output)
    
  def getDuplicateTypedefMap(self):
    duplicateTypedefMap = {}
    for child in self.tu.cursor.get_children():
      if not child.kind == clang.cindex.CursorKind.TYPEDEF_DECL:
        continue
      if not child.underlying_typedef_type.spelling in duplicateTypedefMap:
        duplicateTypedefMap[child.underlying_typedef_type.spelling] = []
      duplicateTypedefMap[child.underlying_typedef_type.spelling].append(child.spelling)

    return duplicateTypedefMap

  def build(self, includePaths, buildFlags):
    includePathArgs = list(dict.fromkeys(map(lambda x: "-I" + os.path.dirname(x), self.headerFiles)))
    command = [
      'emcc',
      *self.sourceFiles,
      "--bind", self.embindFile,
      *list(map(lambda x: "-I" + x, includePaths)),
      *self.libraryFiles,
      *buildFlags,
      "-o", self.outputFile
    ]
    retcode = subprocess.check_call(command)
  