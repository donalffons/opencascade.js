#!/usr/bin/python3

import yaml
import os
import re

from filter.filterIncludeFiles import filterIncludeFile
from filter.filterSourceFiles import filterSourceFile
from wasmGenerator.WasmModule import WasmModule

libraryBasePath = "../build/fullLibrary"

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
    shouldProcess = False
    for bindingSetting in bindingSettings:
      if "global" in bindingSetting:
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

def buildWasmModule(moduleName, buildConfig):
  if not os.path.exists('../build'):
    os.makedirs('../build')
  if not os.path.exists('../build/modules'):
    os.makedirs('../build/modules')

  includeFiles = set()
  additionalIncludePaths = {
    "/rapidjson/include",
    "/freetype/include/freetype",
    "/freetype/include",
  }
  additionalSystemIncludePaths = {
    "/usr/lib/gcc/x86_64-linux-gnu/10/include",
  }
  thisModule = WasmModule(moduleName.replace(".", "_"), "../build/modules/" + moduleName + ".cpp", "../dist/" + moduleName)
  
  if "inputs" in buildConfig:
    for input in buildConfig["inputs"]:
      if "package" in input:
        for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/", input["package"])):
          for item in filenames:
            if filterSourceFile(item):
              thisModule.addLibraryFile(dirpath + "/" + item, None)
      if "module" in input:
        with open("/occt/occt-628c021/src/" + input["module"] + "/PACKAGES", "r") as a_file:
          packageNames = list(map(lambda x: x.strip(), filter(lambda x: not x.strip() == "", a_file)))
          for packageName in packageNames:
            for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-628c021/src/", packageName)):
              for item in filenames:
                if filterSourceFile(item):
                  thisModule.addLibraryFile(dirpath + "/" + item, None)
      if "sourceFile" in input:
        libFile = input["sourceFile"]
        libPath = None
        thisModule.addLibraryFile(libFile, libPath)

  includes = getGlobalIncludes()
  includeFiles = includes[0]
  additionalIncludePaths.update(includes[1])
  thisModule.setBindingsFilterFunction(getBindingsFilterFunction(buildConfig["bindings"]))

  emccFlags = []
  if "emccFlags" in buildConfig:
    emccFlags.extend(buildConfig["emccFlags"])
  thisModule.headerFiles = list(includeFiles)
  print("Parsing " + moduleName)
  thisModule.parse(includeFiles, additionalIncludePaths, additionalSystemIncludePaths)
  print("Generate Bindings for " + moduleName)
  thisModule.generateEmbindings()
  print("Building " + moduleName)
  thisModule.build(additionalIncludePaths, emccFlags)

def buildYaml(filename):
  with open(filename, "r") as fileContents:
    buildConfigs = yaml.safe_load(fileContents)
    for wasmModuleName in buildConfigs:
      buildWasmModule(wasmModuleName, buildConfigs[wasmModuleName])
