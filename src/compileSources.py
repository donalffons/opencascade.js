#!/usr/bin/python3

import os
import sys
import subprocess
import multiprocessing

from filter.filterSourceFiles import filterSourceFile
from filter.filterPackages import filterPackages

from argparse import ArgumentParser

libraryBasePath = "/opencascade.js/build/sources"

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

sourceBasePath = "/occt/src/"

includePaths = []
includePaths.extend([
  "/rapidjson/include",
  "/freetype/include/freetype",
  "/freetype/include",
])
for dirpath, dirnames, filenames in os.walk(os.path.join(sourceBasePath)):
  includePaths.append(dirpath)

def buildObjectFiles(file, args):
  relativeFile = file.replace(sourceBasePath, "")
  try:
    os.makedirs(libraryBasePath + "/" + os.path.dirname(relativeFile))
  except Exception:
    pass
  command = [
    "emcc",
    "-flto",
    "-fexceptions",
    "-sDISABLE_EXCEPTION_CATCHING=0",
    "-DIGNORE_NO_ATOMICS=1",
    "-DOCCT_NO_PLUGINS",
    "-frtti",
    "-DHAVE_RAPIDJSON", 
    "-Os",
    # "-g3",
    # "-gsource-map",
    # "--source-map-base=http://localhost:8080",
    # "-fPIC",
    "-pthread" if args["threading"] == "multi-threaded" else "",
    *list(map(lambda x: "-I" + x, includePaths)),
    "-c",
    file,
  ]

  if not os.path.exists(libraryBasePath + "/" + relativeFile + ".o"):
    print("Building " + relativeFile)
    sys.stdout.flush()
    subprocess.check_call([
      *command,
      "-o", libraryBasePath + "/" + relativeFile + ".o",
      ])
  else:
    print(relativeFile + ".o already exists, skipping")
    sys.stdout.flush()

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

if __name__ == "__main__":
  parser = ArgumentParser()
  parser.add_argument(dest="threading", choices=["single-threaded", "multi-threaded"], help="Build in single vs. multi-threaded mode")
  args = parser.parse_args()

  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  def myBuildFunction(x):
    buildObjectFiles(x, {
      "threading": args.threading,
    })

  with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
    p.map(myBuildFunction, filesToBuild)
