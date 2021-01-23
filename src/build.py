#!/usr/bin/python3

import yaml
import os
import re

from filter.filterIncludeFiles import filterIncludeFile
from filter.filterSourceFiles import filterSourceFile
from filter.filterPackagesAndModules import filterPackagesAndModules
from wasmGenerator.WasmModule import WasmModule

libraryBasePath = "/opencascade.js/build/fullLibrary"

def getGlobalIncludes():
  includeFiles = set()
  additionalIncludePaths = set()
  for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
    additionalIncludePaths.add(str(dirpath))
    for item in filenames:
      if filterIncludeFile(item):
        includeFiles.add(str(os.path.join(dirpath, item)))
  return [includeFiles, additionalIncludePaths]

def getPackageIncludes(packageName):
  includeFiles = set()
  packageDir = "/occt/occt-628c021/src/" + packageName
  for dirpath, dirnames, filenames in os.walk(packageDir):
    for item in filenames:
      if filterIncludeFile(item):
        includeFiles.add(str(os.path.join(dirpath, item)))
  return includeFiles

def getModuleIncludes(moduleName):
  includeFiles = set()
  moduleDir = "/occt/occt-628c021/src/" + moduleName
  with open(moduleDir + "/PACKAGES", "r") as packageFile:
    for packageFileLine in packageFile:
      if packageFileLine.strip() == "":
        continue
      includes = getPackageIncludes(packageFileLine.strip())
      includeFiles.update(includes)
  return includeFiles

def getBindingsFilterFunction(bindingSettings):
  def filterFunction(theItem):
    if bindingSettings is None:
      return False
    shouldProcess = False
    for bindingSetting in bindingSettings:
      if "symbol" in bindingSetting:
        shouldProcess = re.match(bindingSetting["regex"], theItem.spelling)
      if "package" in bindingSetting:
        currPackageName = os.path.basename(os.path.dirname(theItem.extent.start.file.name))
        if currPackageName == bindingSetting["package"]:
          shouldProcess = re.match(bindingSetting["regex"], theItem.spelling)
      if "module" in bindingSetting:
        moduleDir = "/occt/occt-628c021/src/" + bindingSetting["module"]
        currPackageName = os.path.basename(os.path.dirname(theItem.extent.start.file.name))
        with open(moduleDir + "/PACKAGES", "r") as packageFile:
          for packageFileLine in packageFile:
            if packageFileLine.strip() == "":
              continue
            if packageFileLine.strip() == currPackageName:
              shouldProcess = re.match(bindingSetting["regex"], theItem.spelling)
            if shouldProcess:
              break
      if shouldProcess:
        break
    return shouldProcess
  return filterFunction

def addAllOcctModulesToWasmModule(thisModule, postfix = ""):
  for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
    packageOrModuleName = os.path.basename(dirpath)
    if not any(x for x in filenames if x == "PACKAGES"):
      continue

    if not filterPackagesAndModules(packageOrModuleName):
      continue

    thisModule.addLibraryFile(packageOrModuleName + postfix, "/opencascade.js/build/fullLibrary/")

def buildWasmModule(moduleName, buildConfig, outputFile = None):
  if not os.path.exists('/opencascade.js/build'):
    os.makedirs('/opencascade.js/build')
  if not os.path.exists('/opencascade.js/build/modules'):
    os.makedirs('/opencascade.js/build/modules')
  if outputFile is None:
    outputFile = "/opencascade.js/dist/" + moduleName

  includeFiles = set()
  additionalIncludePaths = {
    "/rapidjson/include",
    "/freetype/include/freetype",
    "/freetype/include",
  }
  additionalSystemIncludePaths = {
    "/usr/lib/gcc/x86_64-linux-gnu/10/include",
  }
  thisModule = WasmModule(moduleName.replace(".", "_"), "/opencascade.js/build/modules/" + moduleName + ".cpp", outputFile)
  
  if "inputs" in buildConfig and not buildConfig["inputs"] is None:
    for input in buildConfig["inputs"]:
      if "package" in input:
        if not "preBuilt" in input["package"] or not input["package"]["preBuilt"]:
          for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/", input["package"])):
            for item in filenames:
              if filterSourceFile(item):
                thisModule.addLibraryFile(dirpath + "/" + item, None)
        else:
          if "preBuilt" in input["package"] and input["package"]["preBuilt"]:
            thisModule.addLibraryFile(input["package"], "/opencascade.js/build/fullLibrary/")
          else:
            print("could not process preBuilt setting")
      if "module" in input:
        if not "preBuilt" in input["module"] or not input["module"]["preBuilt"]:
          with open("/occt/occt-628c021/src/" + input["module"] + "/PACKAGES", "r") as a_file:
            packageNames = list(map(lambda x: x.strip(), filter(lambda x: not x.strip() == "", a_file)))
            for packageName in packageNames:
              for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/", packageName)):
                for item in filenames:
                  if filterSourceFile(item):
                    thisModule.addLibraryFile(dirpath + "/" + item, None)
        else:
          if "preBuilt" in input["module"] and input["module"]["preBuilt"]:
            thisModule.addLibraryFile(input["module"], "/opencascade.js/build/fullLibrary/")
          else:
            print("could not process preBuilt setting")
      if "sourceFile" in input:
        libFile = input["sourceFile"]
        libPath = None
        thisModule.addLibraryFile(libFile, libPath)
      if type(input) == str and input.startswith("allModules"):
        if input == "allModules.debug":
          print("debug libraries")
          addAllOcctModulesToWasmModule(thisModule, ".debug")
        else:
          if input == "allModules":
            print("release libraries")
            addAllOcctModulesToWasmModule(thisModule)
          else:
            print("unknown input: " + input)
  else:
    addAllOcctModulesToWasmModule(thisModule)

  includes = getGlobalIncludes()
  includeFiles = includes[0]
  additionalIncludePaths.update(includes[1])
  thisModule.setBindingsFilterFunction(getBindingsFilterFunction(buildConfig["bindings"]))

  emccFlags = []
  if "emccFlags" in buildConfig and not buildConfig["emccFlags"] is None:
    emccFlags.extend(buildConfig["emccFlags"])
  thisModule.headerFiles = list(includeFiles)
  print("Parsing " + moduleName)
  thisModule.parse(includeFiles, additionalIncludePaths, additionalSystemIncludePaths)
  print("Generate Bindings for " + moduleName)
  thisModule.generateEmbindings()
  print("Generate Typescript definitions for " + moduleName)
  thisModule.generateTypescriptDefinitions()
  print("Building " + moduleName)
  thisModule.build(additionalIncludePaths, emccFlags)

def buildYaml(filename):
  with open(filename, "r") as fileContents:
    buildConfigs = yaml.safe_load(fileContents)
    for wasmModuleName in buildConfigs:
      buildWasmModule(wasmModuleName, buildConfigs[wasmModuleName])
