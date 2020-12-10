#!/usr/bin/python3

import multiprocessing
import os
import subprocess
import sys

from filter.filterIncludeFiles import filterIncludeFile
from filter.filterSourceFiles import filterSourceFile
from wasmGenerator.WasmModule import WasmModule, ModuleType, BuildType, EnvType

numExportedClasses = 0
numIgnoredClasses = 0

includePaths = []
allWasmModules = []
includeFiles = []

def addPackageToWasmModule(packageName, currModule, addSourceFiles):
  for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/", packageName)):
    for item in filenames:
      if filterIncludeFile(item):
        currModule.addHeaderFile(str(os.path.join(dirpath, item)))
      if filterSourceFile(item) and addSourceFiles:
        currModule.addSourceFile(str(os.path.join(dirpath, item)))

def prepareMainWasmModules(buildType):
  modules = []

  mainWebModule = WasmModule("dynamic_web", ModuleType.DynamicMain, "../build/dynamic_web.cpp", "../dist/" + buildType + "/dynamic_web", buildType, EnvType.Web)
  mainWebModule.setBuildSettings([
    "-s", "MODULARIZE=1",
    "-s", "EXTRA_EXPORTED_RUNTIME_METHODS=['FS']",
  ])
  modules.append(mainWebModule)

  mainNodeModule = WasmModule("dynamic_node", ModuleType.DynamicMain, "../build/dynamic_node.cpp", "../dist/" + buildType + "/dynamic_node", buildType, EnvType.Node)
  mainNodeModule.setBuildSettings([
    "-s", "MODULARIZE=1",
    "-s", "EXTRA_EXPORTED_RUNTIME_METHODS=['FS']",
  ])
  modules.append(mainNodeModule)

  return modules

def prepareOCCTModuleWasmModules(buildType, duplicateTypedefs):
  modules = []

  for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
    parentDir = os.path.basename(os.path.dirname(dirpath))
    if not parentDir == "src":
      raise Exception("Packages with sub-folders are not supported!")

    moduleName = os.path.basename(dirpath)
    if moduleName == "":
      continue

    if not any(x for x in filenames if x == "PACKAGES"):
      continue

    currModule = WasmModule(moduleName, ModuleType.DynamicSide, "../build/modules/" + moduleName + ".cpp", "../dist/" + buildType + "/modules/" + moduleName, buildType, EnvType.Node, duplicateTypedefs)
    modules.append(currModule)

    with open(dirpath + "/PACKAGES", "r") as a_file:
      for line in a_file:
        addPackageToWasmModule(line.strip(), currModule, True)

  return modules

def prepareFullWasmModules(buildType):
  modules = []

  completeStandaloneWebModule = WasmModule("full_web", ModuleType.Standalone, "../build/full_web.cpp", "../dist/" + buildType + "/full_web", buildType, EnvType.Web)
  completeStandaloneWebModule.setBuildSettings([
    "-s", "MODULARIZE=1",
    "-s", "USE_FREETYPE=1",
    '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
    "-s", "ASSERTIONS=1",
  ])
  modules.append(completeStandaloneWebModule)

  completeStandaloneNodeModule = WasmModule("full_node", ModuleType.Standalone, "../build/full_node.cpp", "../dist/" + buildType + "/full_node", buildType, EnvType.Node)
  completeStandaloneNodeModule.setBuildSettings([
    "-s", "MODULARIZE=1",
    "-s", "USE_FREETYPE=1",
    '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
    "-s", "ASSERTIONS=1",
  ])
  modules.append(completeStandaloneNodeModule)

  for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
    parentDir = os.path.basename(os.path.dirname(dirpath))
    if not parentDir == "src":
      raise Exception("Packages with sub-folders are not supported!")

    moduleName = os.path.basename(dirpath)
    if moduleName == "":
      continue

    if not any(x for x in filenames if x == "PACKAGES"):
      continue

    libraryFile = os.path.join("/occt/occt-628c021/build/lin32/clang/lib/", "lib" + moduleName + ".a")
    if not os.path.isfile(libraryFile):
      print("skipping module due to missing library: " + moduleName)
      continue

    with open(dirpath + "/PACKAGES", "r") as a_file:
      for line in a_file:
        addPackageToWasmModule(line.strip(), completeStandaloneNodeModule, False)
        completeStandaloneNodeModule.addLibraryFile(libraryFile)
        addPackageToWasmModule(line.strip(), completeStandaloneWebModule, False)
        completeStandaloneWebModule.addLibraryFile(libraryFile)

  return modules

def prepareOCCTPackageWasmModules(buildType):
  modules = []

  for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
    parentDir = os.path.basename(os.path.dirname(dirpath))
    if not parentDir == "src":
      raise Exception("Packages with sub-folders are not supported!")
    
    packageName = os.path.basename(dirpath)
    if packageName == "":
      continue

    if any(x for x in filenames if x == "PACKAGES"):
      continue

    currModule = WasmModule(packageName, ModuleType.DynamicSide, "../build/packages/" + packageName + ".cpp", "../dist/" + buildType + "/packages/" + packageName, buildType, EnvType.Node)
    modules.append(currModule)
    addPackageToWasmModule(packageName, currModule, True)

  return modules

def f(aModule):
  global numBuiltModules
  aModule.parse(
    includeFiles,
    includePaths + [
      "/emsdk/upstream/emscripten/system/include/",
      "/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
      "/clang/clang_11/include/c++/v1/",
      "/clang/clang_11/include/c++/v1/support/newlib",
      "/rapidjson/include",
    ], [
      "/usr/lib/gcc/x86_64-linux-gnu/10/include",
    ]
  )

  if not os.path.exists('../dist/release'):
    os.makedirs('../dist/release')
  if not os.path.exists('../dist/debug'):
    os.makedirs('../dist/debug')

  if not os.path.exists('../build/modules'):
    os.makedirs('../build/modules')
  if not os.path.exists('../dist/release/modules'):
    os.makedirs('../dist/release/modules')
  if not os.path.exists('../dist/debug/modules'):
    os.makedirs('../dist/debug/modules')

  if not os.path.exists('../build/packages'):
    os.makedirs('../build/packages')
  if not os.path.exists('../dist/release/packages'):
    os.makedirs('../dist/release/packages')
  if not os.path.exists('../dist/debug/packages'):
    os.makedirs('../dist/debug/packages')

  aModule.generateEmbindings()
  aModule.generateTypescriptDefinitions()

  aModule.build(includePaths + [
    "/rapidjson/include",
    "/freetype/include/freetype",
    "/freetype/include",
  ])

  print("Built module " + aModule.name)

def chunks(lst, n):
  """Yield successive n-sized chunks from lst."""
  for i in range(0, len(lst), n):
    yield lst[i:i + n]

for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
  includePaths.append(str(dirpath))
  for item in filenames:
    if filterIncludeFile(item):
      includeFiles.append(str(os.path.join(dirpath, item)))

preproc = WasmModule()
for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
  moduleName = os.path.basename(dirpath)
  if moduleName == "":
    continue

  if not any(x for x in filenames if x == "PACKAGES"):
    continue

  with open(dirpath + "/PACKAGES", "r") as a_file:
    for line in a_file:
      addPackageToWasmModule(line.strip(), preproc, False)
preproc.parse(
  includeFiles,
  includePaths + [
    "/emsdk/upstream/emscripten/system/include/",
    "/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
    "/clang/clang_11/include/c++/v1/",
    "/clang/clang_11/include/c++/v1/support/newlib",
    "/rapidjson/include",
  ], [
    "/usr/lib/gcc/x86_64-linux-gnu/10/include",
  ]
)
duplicateTypedefs = preproc.getDuplicateTypedefMap()


# allWasmModules.extend(prepareMainWasmModules(BuildType.Debug))
# allWasmModules.extend(prepareOCCTModuleWasmModules(BuildType.Debug))
# allWasmModules.extend(prepareFullWasmModules(BuildType.Debug))
# allWasmModules.extend(prepareOCCTPackageWasmModules(BuildType.Debug))

# allWasmModules.extend(prepareMainWasmModules(BuildType.Release))
allWasmModules.extend(prepareOCCTModuleWasmModules(BuildType.Release, duplicateTypedefs))
# allWasmModules.extend(prepareFullWasmModules(BuildType.Release))
# allWasmModules.extend(prepareOCCTPackageWasmModules(BuildType.Release))

# TKBRep, TKCAF, TKFillet seem to cause excessive memory growth

# Currently unsupported modules
allWasmModules = list(filter(lambda x: not x.name in [
  "TKD3DHost",
  "TKDraw",
  "TKIVtk",
  "TKIVtkDraw",
  "TKViewerTest",
], allWasmModules))

def preProcess(aModule):
  print("[Pre-processing " + aModule.name + "]")
  aModule.parse(
    includeFiles,
    includePaths + [
      "/emsdk/upstream/emscripten/system/include/",
      "/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
      "/clang/clang_11/include/c++/v1/",
      "/clang/clang_11/include/c++/v1/support/newlib",
      "/rapidjson/include",
    ], [
      "/usr/lib/gcc/x86_64-linux-gnu/10/include",
    ]
  )
  exports = aModule.getExports()
  aModule.tu = None
  return exports

with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
  res = p.map(preProcess, allWasmModules)

moduleExportsDict = {}
for i, aModule in enumerate(allWasmModules):
  aModule.setModuleExportsDict(moduleExportsDict)
  moduleExportsDict[aModule.name] = res[i]

chunkedModules = list(chunks(allWasmModules, multiprocessing.cpu_count()*4*4))

for iChunk, chunk in enumerate(chunkedModules):
  print("processing chunk " + str(iChunk+1) + " of " + str(len(chunkedModules)))
  with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
    p.map(f, chunk)
