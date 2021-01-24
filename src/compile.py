#!/usr/bin/python3

import os
import subprocess
import multiprocessing

from filter.filterIncludeFiles import filterIncludeFile
from filter.filterSourceFiles import filterSourceFile
from filter.filterPackagesAndModules import filterPackagesAndModules

libraryBasePath = "/opencascade.js/build/fullLibrary"

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

try:
  os.makedirs(libraryBasePath)
except:
  pass

includePaths = []
includePaths.extend([
  "/rapidjson/include",
  "/freetype/include/freetype",
  "/freetype/include",
])
for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/")):
  includePaths.append(dirpath)

def buildObjectFiles(package):
  packageName = package["name"]
  packageFiles = package["files"]
  try:
    os.makedirs(libraryBasePath + "/" + packageName)
  except:
    pass
  for fileToBuild in packageFiles:
    theFile = fileToBuild["file"]
    theName = fileToBuild["name"]
    dirpath = fileToBuild["dirpath"]
    libBasePath = libraryBasePath + "/" + packageName + "/" + theName
    command = [
      "emcc",
      "-DIGNORE_NO_ATOMICS=1", "-frtti", "-fPIC", "-DHAVE_RAPIDJSON",
      *list(map(lambda x: "-I" + x, includePaths)),
      # "-O3",
      "-c",
      dirpath + "/" + theFile,
    ]
    if not os.path.exists(libBasePath + ".o"):
      print("Building " + theName)
      subprocess.check_call([*command, "-o", libBasePath + ".o"])
    else:
      print(theName + " already exists, skipping")

    if not os.path.exists(libBasePath + ".debug.o"):
      print("Building " + theName + ".debug")
      subprocess.check_call([*command, "-o", libBasePath + ".debug.o", "-g4"])
    else:
      print(theName + ".debug already exists, skipping")

def buildLibrary(library):
  libBasePath = libraryBasePath + "/"
  libraryName = library["name"]
  libraryFiles = library["files"]
  command = [
    "emar",
    "rs",
  ]
  if not os.path.exists(libBasePath + "lib" + libraryName + ".a"):
    print("Building library " + libraryName)
    subprocess.check_call([
      *command, 
      libraryBasePath + "/lib" + libraryName + ".a",
      *map(lambda x: libBasePath + x["packageName"] + "/" + x["name"] + ".o", libraryFiles),
    ])
  else:
    print(libraryName + " already exists, skipping")

  if not os.path.exists(libBasePath + "lib" + libraryName + ".debug.a"):
    print("Building library " + libraryName + ".debug")
    subprocess.check_call([
      *command, 
      libraryBasePath + "/lib" + libraryName + ".debug.a",
      *map(lambda x: libBasePath + x["packageName"] + "/" + x["name"] + ".debug.o", libraryFiles),
    ])
  else:
    print(libraryName + ".debug already exists, skipping")

objectFilesToBuild = []
librariesToBuild = []

def addObjectFiles(packageName):
  thisPackage = {}
  thisPackage["name"] = packageName
  thisPackage["files"] = []
  objectFilesToBuild.append(thisPackage)
  for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/", packageName)):
    for item in filenames:
      if filterSourceFile(item):
        thisPackage["files"].append({
          "name": os.path.splitext(item)[0],
          "file": item,
          "dirpath": dirpath
        })

def addPackageLibrary(libraryName, packageNames):
  thisLibrary = {}
  thisLibrary["name"] = libraryName
  thisLibrary["files"] = []
  librariesToBuild.append(thisLibrary)
  for packageName in packageNames:
    for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/", packageName)):
      for item in filenames:
        if filterSourceFile(item):
          thisLibrary["files"].append({
            "name": os.path.splitext(item)[0],
            "packageName": packageName,
          })

def addLibrary(packageOrModuleName):
  filenames = list(os.walk("/occt/occt-628c021/src/" + packageOrModuleName))[0][2]
  if not any(x for x in filenames if x == "PACKAGES"):
    addPackageLibrary(packageOrModuleName, [packageOrModuleName])
  else:
    with open("/occt/occt-628c021/src/" + packageOrModuleName + "/PACKAGES", "r") as a_file:
      packageNames = list(map(lambda x: x.strip(), filter(lambda x: not x.strip() == "", a_file)))
      addPackageLibrary(packageOrModuleName, packageNames)

for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
  packageOrModuleName = os.path.basename(dirpath)
  if not any(x for x in filenames if x == "PACKAGES"):
    continue

  if not filterPackagesAndModules(packageOrModuleName):
    continue

  addLibrary(packageOrModuleName)

  with open(dirpath + "/PACKAGES", "r") as a_file:
    for package in a_file:
      packageName = package.strip()
      if not filterPackagesAndModules(packageName):
        continue
      addObjectFiles(packageName)
      addLibrary(packageName)

with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
  p.map(buildObjectFiles, objectFilesToBuild)

with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
  p.map(buildLibrary, librariesToBuild)
