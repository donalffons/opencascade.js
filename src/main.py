#!/usr/local/bin/python3.8

import multiprocessing
import os
import subprocess

from filter.filterIncludeFiles import filterIncludeFile
from filter.filterSourceFiles import filterSourceFile
from wasmGenerator.WasmModule import WasmModule

numExportedClasses = 0
numIgnoredClasses = 0

includePaths = []
occtModules = []
includeFiles = []

for dirpath, dirnames, filenames in os.walk("/occt/occt-278da16/src/"):
  includePaths.append(str(dirpath))
  parentDir = os.path.basename(os.path.dirname(dirpath))
  if not parentDir == "src":
    raise Exception("Modules with sub-modules are not supported!")
  
  moduleName = os.path.basename(dirpath)
  if moduleName == "" or all(map(lambda x: not x.endswith(".hxx"), filenames)):
    continue

  currModule = WasmModule(moduleName)
  occtModules.append(currModule)

  for item in filenames:
    if filterIncludeFile(item):
      currModule.addHeaderFile(str(os.path.join(dirpath, item)))
      includeFiles.append(str(os.path.join(dirpath, item)))
    elif filterSourceFile(item):
      currModule.addSourceFile(str(os.path.join(dirpath, item)))
    else:
      if item.endswith(".hxx"):
        numIgnoredClasses += 1 # ...assuming one class per c++ header file

libraries = ["/occt/occt-278da16/build/lin32/clang/lib/" + s for s in os.listdir("/occt/occt-278da16/build/lin32/clang/lib")]

# occtModules = list(filter(lambda x: x.name in [
#   # "myTest",
#   # "gp",
#   # "IFGraph",
#   # "IFSelect",
#   # "Interface",
#   # "MoniTool",
#   # "NCollection",
#   # "Standard",
#   # "STEPControl",
#   # "TCollection",
#   # "TopoDS",
#   # "XSControl",
# ], occtModules))

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

  aModule.build(includePaths + ["/rapidjson/include"], libraries, '/opencascade.js/dist/' + aModule.name + ".wasm")

  print("Built module " + aModule.name)

def chunks(lst, n):
  """Yield successive n-sized chunks from lst."""
  for i in range(0, len(lst), n):
    yield lst[i:i + n]

chunkedModules = list(chunks(occtModules, multiprocessing.cpu_count()*4))

for iChunk, chunk in enumerate(chunkedModules):
  print("processing chunk " + str(iChunk+1) + " of " + str(len(chunkedModules)))
  with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
    p.map(f, chunk)

subprocess.call([
  'emcc',
  "--bind", "/opencascade.js/src/bindings.cpp",
  "-s", "ALLOW_MEMORY_GROWTH=1",
  "-s", "INITIAL_MEMORY=" + str(1024*1024*1024),
  "-s", "MAIN_MODULE=1",
  "-s", "MODULARIZE=1",
  "-s", "ENVIRONMENT='web'",
  "-s", "USE_FREETYPE=1",
  "-s", "ASSERTIONS=1",
  "-s", "WARN_ON_UNDEFINED_SYMBOLS=0",
  "-s", "ERROR_ON_UNDEFINED_SYMBOLS=0",
  "-s", "SAFE_HEAP=1",
  "-O2",
  # "-g4",
  "-o", "/opencascade.js/dist/opencascade-web.js"
])

subprocess.call([
  'emcc',
  "--bind", "/opencascade.js/src/bindings.cpp",
  "-s", "ALLOW_MEMORY_GROWTH=1",
  "-s", "INITIAL_MEMORY=" + str(1024*1024*1024),
  "-s", "MAIN_MODULE=1",
  "-s", "MODULARIZE=1",
  "-s", "ENVIRONMENT='node'",
  "-s", "USE_FREETYPE=1",
  "-s", "ASSERTIONS=1",
  "-s", "WARN_ON_UNDEFINED_SYMBOLS=0",
  "-s", "ERROR_ON_UNDEFINED_SYMBOLS=0",
  "-s", "SAFE_HEAP=1",
  "-O2",
  # "-g4",
  "-o", "/opencascade.js/dist/opencascade-node.js"
])

# 17:10
