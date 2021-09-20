#!/usr/bin/python3

import os
import subprocess
import multiprocessing

from filter.filterSourceFiles import filterSourceFile
from filter.filterPackages import filterPackages

libraryBasePath = "/opencascade.js/build/sources"

try:
  os.makedirs(libraryBasePath)
except Exception:
  pass

# Potentially problematic packages, when used with dynamic linking
# These files contain function pointer definitions and header files and are therefore likely to cause problems.
# https://github.com/emscripten-core/emscripten/issues/13241
# "AdvApp2Var"
# "BRepGProp"
# "BRepMesh"
# "BSplSLib"
# "CPnts"
# "DDF"
# "Draw"
# "Graphic3d"
# "IFSelect"
# "Interface"
# "MoniTool"
# "NCollection"
# "OpenGl"
# "OSD"
# "ShapeProcess"
# "Standard"
# "StdObjMgt"
# "TDF

sourceBasePath = "/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/"

includePaths = []
includePaths.extend([
  "/rapidjson/include",
  "/freetype/include/freetype",
  "/freetype/include",
])
for dirpath, dirnames, filenames in os.walk(os.path.join(sourceBasePath)):
  includePaths.append(dirpath)

def buildObjectFiles(file):
  relativeFile = file.replace(sourceBasePath, "")
  try:
    os.makedirs(libraryBasePath + "/" + os.path.dirname(relativeFile))
  except Exception:
    pass
  command = [
    "emcc",
    "-DIGNORE_NO_ATOMICS=1",
    "-DOCCT_NO_PLUGINS",
    "-frtti",
    "-DHAVE_RAPIDJSON", 
    "-O3",
    # "-g3",
    # "-gsource-map",
    # "--source-map-base=http://localhost:8080",
    "-sDISABLE_EXCEPTION_CATCHING=0",
    "-pthread",
    # "-sPTHREAD_POOL_SIZE='navigator.hardwareConcurrency'",
    "-flto",
    *list(map(lambda x: "-I" + x, includePaths)),
    "-c",
    file,
  ]

  if not os.path.exists(libraryBasePath + "/" + relativeFile + ".o"):
    print("Building " + relativeFile)
    subprocess.check_call([
      *command,
      "-o", libraryBasePath + "/" + relativeFile + ".o",
      ])
  else:
    print(relativeFile + ".o already exists, skipping")

allModules = {}
for dirpath, dirnames, filenames in os.walk(sourceBasePath):
  if not any(x for x in filenames if x == "PACKAGES"):
    continue
  allModules[os.path.basename(dirpath)] = []
  with open(dirpath + "/PACKAGES", "r") as a_file:
    for package in a_file:
      packageName = package.strip()
      allModules[os.path.basename(dirpath)].append(packageName)
def getModuleNameByPackageName(inputPackageName):
  for moduleName in allModules:
    for package in allModules[moduleName]:
      packageName = package.strip()
      if packageName == inputPackageName:
        return moduleName
  return ""

filesToBuild = []
for dirpath, dirnames, filenames in os.walk(sourceBasePath):
  packageOrModuleName = os.path.basename(dirpath.replace(sourceBasePath, ""))
  for item in filenames:
    if not filterPackages(packageOrModuleName) or not filterPackages(getModuleNameByPackageName(packageOrModuleName)):
      continue
    if filterSourceFile(dirpath + "/" + item):
      filesToBuild.append(dirpath + "/" + item)

def myBuildObjectFiles(x):
  buildObjectFiles(x)

with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
  p.map(myBuildObjectFiles, filesToBuild)
