#!/usr/bin/python3

import yaml
import os
import re
import multiprocessing

from filter.filterIncludeFiles import filterIncludeFile
from filter.filterSourceFiles import filterSourceFile
from filter.filterPackagesAndModules import filterPackagesAndModules
from wasmGenerator.WasmModule import WasmModule
from wasmGenerator.Exports import getExports

libraryBasePath = "/opencascade.js/build/fullLibrary"

def getGlobalIncludes():
  includeFiles = set()
  additionalIncludePaths = set()
  for dirpath, dirnames, filenames in os.walk("/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/"):
    additionalIncludePaths.add(str(dirpath))
    for item in filenames:
      if filterIncludeFile(item):
        includeFiles.add(str(os.path.join(dirpath, item)))
  return [includeFiles, additionalIncludePaths]

def getPackageIncludes(packageName):
  includeFiles = set()
  packageDir = "/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/" + packageName
  for dirpath, dirnames, filenames in os.walk(packageDir):
    for item in filenames:
      if filterIncludeFile(item):
        includeFiles.add(str(os.path.join(dirpath, item)))
  return includeFiles

def getModuleIncludes(moduleName):
  includeFiles = set()
  moduleDir = "/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/" + moduleName
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
        if "regex" in bindingSetting:
          shouldProcess = re.match(bindingSetting["regex"], theItem.spelling)
        else:
          shouldProcess = bindingSetting["symbol"] == theItem.spelling
      if "package" in bindingSetting:
        currPackageName = os.path.basename(os.path.dirname(theItem.extent.start.file.name))
        if currPackageName == bindingSetting["package"]:
          if "regex" in bindingSetting:
            shouldProcess = re.match(bindingSetting["regex"], theItem.spelling)
          else:
            shouldProcess = True
      if "module" in bindingSetting:
        moduleDir = "/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/" + bindingSetting["module"]
        currPackageName = os.path.basename(os.path.dirname(theItem.extent.start.file.name))
        with open(moduleDir + "/PACKAGES", "r") as packageFile:
          for packageFileLine in packageFile:
            if packageFileLine.strip() == "":
              continue
            if packageFileLine.strip() == currPackageName:
              if "regex" in bindingSetting:
                shouldProcess = re.match(bindingSetting["regex"], theItem.spelling)
              else:
                shouldProcess = True
            if shouldProcess:
              break
      if shouldProcess:
        break
    return shouldProcess
  return filterFunction

def addAllOcctModulesToWasmModule(thisModule, postfix = ""):
  for dirpath, dirnames, filenames in os.walk("/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/"):
    packageOrModuleName = os.path.basename(dirpath)
    if not any(x for x in filenames if x == "PACKAGES"):
      continue

    if not filterPackagesAndModules(packageOrModuleName):
      continue

    thisModule.addLibraryFile(packageOrModuleName + postfix, "/opencascade.js/build/fullLibrary/")

def buildWasmModule(buildItem):
  buildConfigName = buildItem["buildConfig"][0]
  buildConfig = buildItem["buildConfig"][1]
  moduleExportsDict = buildItem["moduleExportsDict"]
  outputFolder = buildItem["outputFolder"]
  
  thisModule = generateWasmModule(buildConfigName, buildConfig, outputFolder)
  thisModule.setModuleExportsDict(moduleExportsDict)
  print("Parsing " + buildConfigName)
  thisModule.parse()
  print("Generate Bindings for " + buildConfigName)
  thisModule.generateEmbindings()
  if "typescriptDefinitions" in buildConfig and buildConfig["typescriptDefinitions"] == True:
    print("Generate Typescript definitions for " + buildConfigName)
    thisModule.generateTypescriptDefinitions()
  print("Building " + buildConfigName)
  thisModule.build()

def generateWasmModule(moduleName, buildConfig, outputFolder = None):
  try: os.makedirs('/opencascade.js/build')
  except: pass
  try: os.makedirs('/opencascade.js/build/modules')
  except: pass
  if outputFolder is None:
    outputFolder = "/opencascade.js/dist"

  includeFiles = set()
  additionalIncludePaths = {
    "/rapidjson/include",
    "/freetype/include/freetype",
    "/freetype/include",
  }
  additionalSystemIncludePaths = {
    "/usr/lib/gcc/x86_64-linux-gnu/10/include",
  }
  thisModule = WasmModule(moduleName, "/opencascade.js/build/modules/" + moduleName + ".cpp", outputFolder + "/" + moduleName, {}, buildConfig["additionalCppCode"] if "additionalCppCode" in buildConfig else None)

  if "inputs" in buildConfig and not buildConfig["inputs"] is None:
    for input in buildConfig["inputs"]:
      if "package" in input:
        if not "preBuilt" in input or not input["preBuilt"]:
          for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/", input["package"])):
            for item in filenames:
              if filterSourceFile(item):
                thisModule.addLibraryFile(dirpath + "/" + item, None)
        else:
          if "preBuilt" in input and input["preBuilt"]:
            thisModule.addLibraryFile(input["package"], "/opencascade.js/build/fullLibrary/")
          else:
            print("could not process preBuilt setting")
      if "module" in input:
        if not "preBuilt" in input or not input["preBuilt"]:
          with open("/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/" + input["module"] + "/PACKAGES", "r") as a_file:
            packageNames = list(map(lambda x: x.strip(), filter(lambda x: not x.strip() == "", a_file)))
            for packageName in packageNames:
              for dirpath, dirnames, filenames in os.walk(os.path.join("/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/", packageName)):
                for item in filenames:
                  if filterSourceFile(item):
                    thisModule.addLibraryFile(dirpath + "/" + item, None)
        else:
          if "preBuilt" in input and input["preBuilt"]:
            thisModule.addLibraryFile(input["module"], "/opencascade.js/build/fullLibrary/")
          else:
            print("could not process preBuilt setting")
      if "sourceFile" in input:
        libFile = input["sourceFile"]
        libPath = None
        thisModule.addLibraryFile(libFile, libPath)
      if type(input) == str and input.startswith("allModules"):
        if input == "allModules.debug":
          addAllOcctModulesToWasmModule(thisModule, ".debug")
        else:
          if input == "allModules":
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
  thisModule.additionalIncludePaths = additionalIncludePaths
  thisModule.additionalSystemIncludePaths = additionalSystemIncludePaths
  thisModule.buildFlags = emccFlags

  return thisModule

def runPreProcessing(buildItem):
  buildConfigName = buildItem[0]
  buildConfig = buildItem[1]
  print("pre-processing " + buildConfigName)
  currModule = generateWasmModule(buildConfigName, buildConfig)
  exports = currModule.generateExports() if ("typescriptDefinitions" in buildConfig and buildConfig["typescriptDefinitions"] == True) else {}
  return {
    "name": buildConfigName,
    "exports": exports,
  }

def buildWasmModuleSet(buildConfigs, outputFolder = None):
  if buildConfigs == None:
    return
  with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
    allModuleResults = p.map(runPreProcessing, buildConfigs.items())

  moduleExportsDict = {}
  for moduleResult in allModuleResults:
    moduleExportsDict[moduleResult["name"]] = moduleResult["exports"]

  with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
    p.map(buildWasmModule, map(lambda x: {
      "buildConfig": x,
      "moduleExportsDict": moduleExportsDict,
      "outputFolder": outputFolder,
    }, buildConfigs.items()))
