import clang.cindex
import os
import subprocess

from filter.filterClasses import filterClass
from filter.filterMethods import filterMethod
from filter.filterTypedefs import filterTypedef
from filter.filterEnums import filterEnum

from .Embindings import getEmbindings
from .TypescriptDefinitions import getTypescriptDefinitions
from .Exports import getExports

from .FileProcessor import EmbindProcessor, TypescriptProcessor

from enum import Enum

class ModuleType:
  Standalone = 1
  DynamicMain = 2
  DynamicSide = 3

class BuildType:
  Debug = "debug"
  Release = "release"

class EnvType:
  Web = "web"
  Node = "node"

class WasmModule:
  def __init__(self, name="", moduleType=None, embindFile="", outputFile="", buildType=None, envType=None, duplicateTypedefs={}):
    self.name = name
    self.headerFiles = []
    self.sourceFiles = []
    self.libraryFiles = []
    self.moduleType = moduleType
    self.buildSettings = []
    self.embindFile = embindFile
    self.typescriptDefinitionFile = outputFile + ".wasm.d.ts"
    self.outputFile = outputFile
    self.buildType = buildType
    self.envType = envType
    self.duplicateTypedefs = duplicateTypedefs

  def addHeaderFile(self, file):
    self.headerFiles.append(file)

  def addSourceFile(self, file):
    self.sourceFiles.append(file)

  def addLibraryFile(self, file):
    self.libraryFiles.append(file)

  def setBuildSettings(self, settings):
    self.buildSettings = settings

  def parse(self, includeFiles, additionalIncludePaths, additionalSystemIncludePaths):
    includePathArgs = \
      list(dict.fromkeys(map(lambda x: "-I" + os.path.dirname(x), self.headerFiles))) + \
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
      self.tu, self.headerFiles, filterClass, filterMethod, filterTypedef, filterEnum, self.duplicateTypedefs)
    p.process()

    bindingsFile = open(self.embindFile, "w")
    bindingsFile.write(p.output)

    # bindingsFile = open(self.embindFile, "w")
    # bindingsFile.write(getEmbindings(self.includeDirectives, self.name, self.tu, self.headerFiles, filterClass, filterMethod, filterTypedef, filterEnum))

  def getExports(self):
    return getExports(self.tu, self.headerFiles, filterClass, filterMethod, filterTypedef, filterEnum, self.duplicateTypedefs)

  def setModuleExportsDict(self, moduleExportsDict):
    self.moduleExportsDict = moduleExportsDict

  def generateTypescriptDefinitions(self):
    typescriptFileName = "./" + "/".join(self.outputFile.split("/")[3:]) + ".wasm.d.ts"
    
    p = TypescriptProcessor(
      typescriptFileName, self.name, self.moduleExportsDict,
      self.tu, self.headerFiles, filterClass, filterMethod, filterTypedef, filterEnum, self.duplicateTypedefs)
    p.process()

    typescriptFile = open(self.typescriptDefinitionFile, "w")
    typescriptFile.write(p.output)

    # typescriptFile = open(self.typescriptDefinitionFile, "w")
    # typescriptFile.write(getTypescriptDefinitions(typescriptFileName, self.name, self.tu, self.headerFiles, filterClass, filterMethod, filterTypedef, filterEnum, self.moduleExportsDict))
    
  def getDuplicateTypedefMap(self):
    duplicateTypedefMap = {}
    for child in self.tu.cursor.get_children():
      if not child.kind == clang.cindex.CursorKind.TYPEDEF_DECL:
        continue
      if not child.underlying_typedef_type.spelling in duplicateTypedefMap:
        duplicateTypedefMap[child.underlying_typedef_type.spelling] = []
      duplicateTypedefMap[child.underlying_typedef_type.spelling].append(child.spelling)

    return duplicateTypedefMap

  def build(self, includePaths):
    includePathArgs = list(dict.fromkeys(map(lambda x: "-I" + os.path.dirname(x), self.headerFiles)))
    standaloneModuleFlags = [
      "-DIGNORE_NO_ATOMICS=1", "-frtti", "-fPIC"
    ] if not self.moduleType == ModuleType.Standalone else []
    debugFlags = [
      "-s", "ASSERTIONS=1",
      "-g3",
      "-s", "SAFE_HEAP=1",
      "-s", "DEMANGLE_SUPPORT=1",
    ] if self.buildType == BuildType.Debug else []
    envFlags = [
      "-s", "ENVIRONMENT='node'",
    ] if self.envType == EnvType.Node else [
      "-s", "ENVIRONMENT='web'",
      "-s", "EXPORT_ES6=1",
      "-s", "USE_ES6_IMPORT_META=0",
    ]
    if self.moduleType == ModuleType.Standalone and self.envType == EnvType.Node:
      envFlags += [
        "-s", "NODE_CODE_CACHING=1",
        "-s", "WASM_ASYNC_COMPILATION=0",
      ]
    command = [
      'emcc',
      *self.sourceFiles,
      "--bind", self.embindFile,
      *list(map(lambda x: "-I" + x, includePaths)),
      *self.libraryFiles,
      "-s", "SIDE_MODULE=" + ("1" if self.moduleType == ModuleType.DynamicSide else "0"),
      "-s", "MAIN_MODULE=" + ("1" if self.moduleType == ModuleType.DynamicMain else "0"),
      *standaloneModuleFlags,
      *debugFlags,
      *envFlags,
      # "-s", "EXPORT_ALL=1",
      # "-s", "ASSERTIONS=1",
      "-s", "ALLOW_MEMORY_GROWTH=1",
      # "-s", "WARN_ON_UNDEFINED_SYMBOLS=0",
      # "-s", "ERROR_ON_UNDEFINED_SYMBOLS=0",
      # "-s", "ALLOW_MEMORY_GROWTH=1",
      # "-s", "NO_DYNAMIC_EXECUTION=1",
      # "-s", "SAFE_HEAP=1",
      # "-s", "EXIT_RUNTIME=0",
      '-s', 'AGGRESSIVE_VARIABLE_ELIMINATION=1',
      "-O3",
      # "-std=c++1z",
      # "-s", "DEMANGLE_SUPPORT=1",
      # "--profiling",
      # " -fsanitize=undefined",
      # "-g4",

      # Enabling exception catching leads to errors in "TKTopAlgo" and "TKV3d" and maybe others. Therefore, this (default) value has to be used at all times.
      "-s", "DISABLE_EXCEPTION_CATCHING=1",
      "-DHAVE_RAPIDJSON",
      *self.buildSettings,
      "-o", self.outputFile + (".wasm" if self.moduleType == ModuleType.DynamicSide else ".js")
    ]
    subprocess.call(command)
  