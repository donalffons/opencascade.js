#!/usr/local/bin/python3.8

import multiprocessing
import os
import subprocess
import sys

from filter.filterIncludeFiles import filterIncludeFile
from filter.filterSourceFiles import filterSourceFile
from wasmGenerator.WasmModule import WasmModule, ModuleType

numExportedClasses = 0
numIgnoredClasses = 0

includePaths = []
occtModules = []
includeFiles = []

def addPackageToModule(packageName, currModule):
  for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/", packageName)):
    for item in filenames:
      if filterIncludeFile(item):
        currModule.addHeaderFile(str(os.path.join(dirpath, item)))
      # elif filterSourceFile(item):
      #   currModule.addSourceFile(str(os.path.join(dirpath, item)))

mainWebModule = WasmModule("main_web", ModuleType.DynamicMain)
occtModules.append(mainWebModule)
mainWebModule.setBuildSettings([
  "-s", "MODULARIZE=1",
  "-s", "ENVIRONMENT='web'",
  "-s", "USE_FREETYPE=1",
  '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
])
mainNodeModule = WasmModule("main_node", ModuleType.DynamicMain)
occtModules.append(mainNodeModule)
mainNodeModule.setBuildSettings([
  "-s", "MODULARIZE=1",
  "-s", "ENVIRONMENT='node'",
  "-s", "USE_FREETYPE=1",
  '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
])
completeStandaloneNodeModule = WasmModule("completeStandalone_node", ModuleType.Standalone)
occtModules.append(completeStandaloneNodeModule)
completeStandaloneNodeModule.setBuildSettings([
  "-s", "MODULARIZE=1",
  "-s", "ENVIRONMENT='node'",
  "-s", "USE_FREETYPE=1",
  '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
])
completeStandaloneWebModule = WasmModule("completeStandalone_web", ModuleType.Standalone)
occtModules.append(completeStandaloneWebModule)
completeStandaloneWebModule.setBuildSettings([
  "-s", "MODULARIZE=1",
  "-s", "ENVIRONMENT='web'",
  "-s", "USE_FREETYPE=1",
  '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
])

for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
  includePaths.append(str(dirpath))
  for item in filenames:
    if filterIncludeFile(item):
      includeFiles.append(str(os.path.join(dirpath, item)))

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

  currModule = WasmModule(moduleName, ModuleType.DynamicSide)
  occtModules.append(currModule)

  completeStandaloneNodeModule.addLibraryFile(libraryFile)
  completeStandaloneWebModule.addLibraryFile(libraryFile)
  currModule.addLibraryFile(libraryFile)

  with open(dirpath + "/PACKAGES", "r") as a_file:
    for line in a_file:
      addPackageToModule(line.strip(), completeStandaloneNodeModule)
      addPackageToModule(line.strip(), completeStandaloneWebModule)
      addPackageToModule(line.strip(), currModule)

occtModules = list(filter(lambda x: not x.name in [
  "completeStandalone_node",
  "completeStandalone_web",
], occtModules))
print(list(map(lambda x: x.name, occtModules)))

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

  if not os.path.exists('/opencascade.js/build/modules'):
    os.makedirs('/opencascade.js/build/modules')
  if not os.path.exists('/opencascade.js/build/modules/' + aModule.name):
    os.makedirs('/opencascade.js/build/modules/' + aModule.name)

  aModule.generateEmbindings('/opencascade.js/build/modules/' + aModule.name + "/bindings.cpp")

  aModule.build(includePaths + ["/rapidjson/include"], '/opencascade.js/dist/' + aModule.name)

  print("Built module " + aModule.name)

def chunks(lst, n):
  """Yield successive n-sized chunks from lst."""
  for i in range(0, len(lst), n):
    yield lst[i:i + n]

chunkedModules = list(chunks(occtModules, multiprocessing.cpu_count()*2))

for iChunk, chunk in enumerate(chunkedModules):
  print("processing chunk " + str(iChunk+1) + " of " + str(len(chunkedModules)))
  with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
    p.map(f, chunk)

# subprocess.call([
#   'em++',
#   "--bind", "/opencascade.js/src/bindings.cpp",
#   "-s", "ALLOW_MEMORY_GROWTH=1",
#   "-s", "INITIAL_MEMORY=" + str(1024*1024*1024),
#   "-s", "MAIN_MODULE=1",
#   "-s", "MODULARIZE=1",
#   "-s", "ENVIRONMENT='web'",
#   "-s", "USE_FREETYPE=1",
#   "-s", "ASSERTIONS=1",
#   "-s", "WARN_ON_UNDEFINED_SYMBOLS=0",
#   "-s", "ERROR_ON_UNDEFINED_SYMBOLS=0",
#   "-s", "SAFE_HEAP=1",
#   "-std=c++1z",
#   "-s EXIT_RUNTIME=0",
#   '-s EXPORTED_RUNTIME_METHODS=["UTF8ToString"]',
#   '-s', 'AGGRESSIVE_VARIABLE_ELIMINATION=1',
#   '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
#   "-O3",
#   # "-g4",
#   "-o", "/opencascade.js/dist/opencascade-web.js"
# ])

# subprocess.call([
#   'em++',
#   "--bind", "/opencascade.js/src/bindings.cpp",
#   "-s", "ALLOW_MEMORY_GROWTH=1",
#   "-s", "INITIAL_MEMORY=" + str(1024*1024*1024),
#   "-s", "MAIN_MODULE=1",
#   "-s", "MODULARIZE=1",
#   "-s", "ENVIRONMENT='node'",
#   "-s", "USE_FREETYPE=1",
#   "-s", "ASSERTIONS=1",
#   "-s", "WARN_ON_UNDEFINED_SYMBOLS=0",
#   "-s", "ERROR_ON_UNDEFINED_SYMBOLS=0",
#   "-s", "SAFE_HEAP=1",
#   "-std=c++1z",
#   "-s EXIT_RUNTIME=0",
#   '-s EXPORTED_RUNTIME_METHODS=["UTF8ToString"]',
#   '-s', 'AGGRESSIVE_VARIABLE_ELIMINATION=1',
#   '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
#   "-O3",
#   # "-g4",
#   "-o", "/opencascade.js/dist/opencascade-node.js"
# ])

# 17:10
