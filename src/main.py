#!/usr/local/bin/python3.8

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

  mainWebModule = WasmModule("dynamic_web", ModuleType.DynamicMain, "/opencascade.js/build/dynamic_web.cpp", "/opencascade.js/dist/" + buildType + "/dynamic_web", buildType, EnvType.Web)
  mainWebModule.setBuildSettings([
    "-s", "MODULARIZE=1",
    "-s", "EXTRA_EXPORTED_RUNTIME_METHODS=['FS']",
  ])
  modules.append(mainWebModule)

  mainNodeModule = WasmModule("dynamic_node", ModuleType.DynamicMain, "/opencascade.js/build/dynamic_node.cpp", "/opencascade.js/dist/" + buildType + "/dynamic_node", buildType, EnvType.Node)
  mainNodeModule.setBuildSettings([
    "-s", "MODULARIZE=1",
    "-s", "EXTRA_EXPORTED_RUNTIME_METHODS=['FS']",
  ])
  modules.append(mainNodeModule)

  return modules

def prepareOCCTModuleWasmModules(buildType):
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

    libraryFile = os.path.join("/occt/occt-628c021/build/lin32/clang/lib/", "lib" + moduleName + ".a")
    if not os.path.isfile(libraryFile):
      print("skipping module due to missing library: " + moduleName)
      continue

    currModule = WasmModule(moduleName, ModuleType.DynamicSide, "/opencascade.js/build/modules/" + moduleName + ".cpp", "/opencascade.js/dist/" + buildType + "/modules/" + moduleName, buildType, EnvType.Node)
    modules.append(currModule)

    with open(dirpath + "/PACKAGES", "r") as a_file:
      for line in a_file:
        addPackageToWasmModule(line.strip(), currModule, True)

  return modules

def prepareFullWasmModules(buildType):
  modules = []

  completeStandaloneWebModule = WasmModule("full_web", ModuleType.Standalone, "/opencascade.js/build/full_web.cpp", "/opencascade.js/dist/" + buildType + "/full_web", buildType, EnvType.Web)
  completeStandaloneWebModule.setBuildSettings([
    "-s", "MODULARIZE=1",
    "-s", "USE_FREETYPE=1",
    '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
    "-s", "ASSERTIONS=1",
  ])
  modules.append(completeStandaloneWebModule)

  completeStandaloneNodeModule = WasmModule("full_node", ModuleType.Standalone, "/opencascade.js/build/full_node.cpp", "/opencascade.js/dist/" + buildType + "/full_node", buildType, EnvType.Node)
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

    currModule = WasmModule(packageName, ModuleType.DynamicSide, "/opencascade.js/build/packages/" + packageName + ".cpp", "/opencascade.js/dist/" + buildType + "/packages/" + packageName, buildType, EnvType.Node)
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
      "/clang/clang_10/include/c++/v1/",
      "/clang/clang_10/include/c++/v1/support/newlib",
      "/rapidjson/include",
    ], [
      "/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
      "/usr/lib/gcc/x86_64-linux-gnu/8/include/",
      "/usr/lib/gcc/x86_64-linux-gnu/8/include/",
    ]
  )

  if not os.path.exists('/opencascade.js/dist/release'):
    os.makedirs('/opencascade.js/dist/release')
  if not os.path.exists('/opencascade.js/dist/debug'):
    os.makedirs('/opencascade.js/dist/debug')

  if not os.path.exists('/opencascade.js/build/modules'):
    os.makedirs('/opencascade.js/build/modules')
  if not os.path.exists('/opencascade.js/dist/release/modules'):
    os.makedirs('/opencascade.js/dist/release/modules')
  if not os.path.exists('/opencascade.js/dist/debug/modules'):
    os.makedirs('/opencascade.js/dist/debug/modules')

  if not os.path.exists('/opencascade.js/build/packages'):
    os.makedirs('/opencascade.js/build/packages')
  if not os.path.exists('/opencascade.js/dist/release/packages'):
    os.makedirs('/opencascade.js/dist/release/packages')
  if not os.path.exists('/opencascade.js/dist/debug/packages'):
    os.makedirs('/opencascade.js/dist/debug/packages')

  aModule.generateEmbindings()

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

# allWasmModules.extend(prepareMainWasmModules(BuildType.Debug))
# allWasmModules.extend(prepareOCCTModuleWasmModules(BuildType.Debug))
# allWasmModules.extend(prepareFullWasmModules(BuildType.Debug))
# allWasmModules.extend(prepareOCCTPackageWasmModules(BuildType.Debug))

# allWasmModules.extend(prepareMainWasmModules(BuildType.Release))
allWasmModules.extend(prepareOCCTModuleWasmModules(BuildType.Release))
allWasmModules.extend(prepareFullWasmModules(BuildType.Release))
allWasmModules.extend(prepareOCCTPackageWasmModules(BuildType.Release))

chunkedModules = list(chunks(allWasmModules, multiprocessing.cpu_count()*4))

for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
  includePaths.append(str(dirpath))
  for item in filenames:
    if filterIncludeFile(item):
      includeFiles.append(str(os.path.join(dirpath, item)))

for iChunk, chunk in enumerate(chunkedModules):
  print("processing chunk " + str(iChunk+1) + " of " + str(len(chunkedModules)))
  with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
    p.map(f, chunk)
