import clang.cindex
import os
import subprocess

from filter.filterClasses import filterClass
from filter.filterMethods import filterMethod
from filter.filterTypedefs import filterTypedef
from filter.filterEnums import filterEnum

from .Exports import getExports

from .FileProcessor import EmbindProcessor, TypescriptProcessor, ExportsProcessor

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
    self.typescriptDefinitionFile = (os.path.splitext(outputFile)[0] if outputFile.endswith(".js") else outputFile) + ".d.ts"
    self.outputFile = outputFile
    self.duplicateTypedefs = duplicateTypedefs
    self.bindingsFilterFunction = lambda x, y: True
    self.additionalIncludePaths = []
    self.additionalSystemIncludePaths = []
    self.buildFlags = []

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

  def parse(self):
    includePathArgs = \
      list(dict.fromkeys(map(lambda x: "-I" + os.path.dirname(x), self.headerFiles))) + \
      list(map(lambda x: "-I" + x, [
        "/emsdk/upstream/emscripten/system/include/",
        "/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
        "/clang/clang_11/include/c++/v1/",
        "/clang/clang_11/lib/clang/11.0.0/include/",
        "/clang/clang_11/include/c++/v1/support/newlib/",
      ])) + \
      list(map(lambda x: "-I" + x, self.additionalIncludePaths)) + \
      list(map(lambda x: "-isystem" + x, self.additionalSystemIncludePaths))
    self.includeDirectives = os.linesep.join(map(lambda x: "#include \"" + os.path.basename(x) + "\"", list(sorted(self.headerFiles))))

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

  def generateExports(self):
    self.parse()
    p = ExportsProcessor(
      self.includeDirectives, self.name,
      self.tu, self.headerFiles, customFilterFunction(self.bindingsFilterFunction, filterClass), filterMethod, customFilterFunction(self.bindingsFilterFunction, filterTypedef), customFilterFunction(self.bindingsFilterFunction, filterEnum), self.duplicateTypedefs)
    p.process()

    self.tu = None
    return p.exportObjects

  def setModuleExportsDict(self, moduleExportsDict):
    self.moduleExportsDict = moduleExportsDict

  def generateTypescriptDefinitions(self):
    typescriptPreamble = ""
    if self.name.endswith(".js"):
      for libName, libExports in self.moduleExportsDict.items():
        if not libName == self.name:
          typescriptPreamble += "import { " + libName.replace(".", "_") + " } from './" + libName + "';\n"
    else:
      typescriptPreamble += "declare const libName = \"" + "./" + "/".join(self.outputFile.split("/")[3:]) + ".d.ts" + "\";\n"
      typescriptPreamble += "export default libName;\n"

    if not typescriptPreamble == "":
      typescriptPreamble += "\n"
    
    p = TypescriptProcessor(
      self.name, self.moduleExportsDict,
      self.tu, self.headerFiles, customFilterFunction(self.bindingsFilterFunction, filterClass), filterMethod, customFilterFunction(self.bindingsFilterFunction, filterTypedef), customFilterFunction(self.bindingsFilterFunction, filterEnum), self.duplicateTypedefs)
    p.process()

    typescriptEpilogue = ""
    if self.name.endswith(".js"):
      typescriptEpilogue += "\n"
      typescriptEpilogue += "export type openCascadeModuleObject = {\n"
      typescriptEpilogue += "  locateFile?: (f: string) => string,\n"
      typescriptEpilogue += "  dynamicLibraries?: string[],\n"
      typescriptEpilogue += "};\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "type FS = {\n"
      typescriptEpilogue += "  FS: {\n"
      typescriptEpilogue += "    analyzePath(path: string, dontResolveLastLink?: boolean): {\n"
      typescriptEpilogue += "      isRoot: boolean,\n"
      typescriptEpilogue += "      exists: boolean,\n"
      typescriptEpilogue += "      error: Error,\n"
      typescriptEpilogue += "      name: string,\n"
      typescriptEpilogue += "      path: string,\n"
      typescriptEpilogue += "      object: string,\n"
      typescriptEpilogue += "      parentExists: boolean,\n"
      typescriptEpilogue += "      parentPath: string,\n"
      typescriptEpilogue += "      parentObject: string\n"
      typescriptEpilogue += "    },\n"
      typescriptEpilogue += "    unlink(path: string): void,\n"
      typescriptEpilogue += "  }\n"
      typescriptEpilogue += "};\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "export type openCascadeInstance = FS & {{ready: Promise<openCascadeInstance>}}"
      for libName, libExports in self.moduleExportsDict.items():
        if not libName == self.name:
          typescriptEpilogue += " & " + libName.replace(".", "_")
      typescriptEpilogue += ";\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "declare function openCascade(module: openCascadeModuleObject): Promise<openCascadeInstance>;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "export default openCascade;\n"


    typescriptFile = open(self.typescriptDefinitionFile, "w")
    typescriptFile.write(typescriptPreamble + p.output + typescriptEpilogue)
    
  def getDuplicateTypedefMap(self):
    duplicateTypedefMap = {}
    for child in self.tu.cursor.get_children():
      if not child.kind == clang.cindex.CursorKind.TYPEDEF_DECL:
        continue
      if not child.underlying_typedef_type.spelling in duplicateTypedefMap:
        duplicateTypedefMap[child.underlying_typedef_type.spelling] = []
      duplicateTypedefMap[child.underlying_typedef_type.spelling].append(child.spelling)

    return duplicateTypedefMap

  def build(self):
    command = [
      'emcc',
      *self.sourceFiles,
      "--bind", self.embindFile,
      *list(map(lambda x: "-I" + x, self.additionalIncludePaths)),
      *self.libraryFiles,
      *self.buildFlags,
      "-o", self.outputFile
    ]
    retcode = subprocess.check_call(command)
  