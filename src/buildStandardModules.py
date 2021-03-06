#!/usr/bin/python3

import os

from build import buildWasmModuleSet
from multiprocessing import Process
from filter.filterSourceFiles import filterSourceFile
import subprocess

releaseBuildConfigs = {}
debugBuildConfigs = {}

defaultEmccFlags = [
  "-DIGNORE_NO_ATOMICS=1",
  "-frtti",
  "-fPIC",
  "-DHAVE_RAPIDJSON",
]

releaseEmccFlags = [
  "-s", "DISABLE_EXCEPTION_CATCHING=1",
  "-s", "AGGRESSIVE_VARIABLE_ELIMINATION=1",
  "-O3",
]

debugEmccFlags = [
  "-s", "DISABLE_EXCEPTION_CATCHING=0",
  "-O1",
  "-g4",
  "--source-map-base", "http://localhost:3000/opencascade.js/",
  "-s", "ASSERTIONS=1",
  "-s", "DEMANGLE_SUPPORT=1",
]

memoryEmccFlags = [
  "-s", "ALLOW_MEMORY_GROWTH=1",
  "-s", "MAXIMUM_MEMORY=4294967296",
]

def addModuleBuildConfigs(release = True, debug = True):
  for dirpath, dirnames, filenames in os.walk("/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/"):
    packageOrModuleName = os.path.basename(dirpath)
    if packageOrModuleName == "":
      continue

    if not any(x for x in filenames if x == "PACKAGES"):
      continue

    if packageOrModuleName in [
      "TKViewerTest",
      "TKD3DHost",
      "TKIVtk",
      "TKDraw",
      "TKIVtkDraw",
    ]:
      continue

    if release:
      releaseBuildConfigs["module." + packageOrModuleName + ".wasm"] = {
        "inputs": [
          {
            "module": packageOrModuleName,
            "preBuilt": False,
          }
        ],
        "bindings": [
          {
            "module": packageOrModuleName,
            "regex": ".*",
          }
        ],
        "emccFlags": [
          "-s", "SIDE_MODULE=1",
          *defaultEmccFlags,
          *releaseEmccFlags,
        ],
        "typescriptDefinitions": True,
      }

    if debug:
      debugBuildConfigs["module." + packageOrModuleName + ".debug.wasm"] = {
        "inputs": [
          {
            "module": packageOrModuleName,
            "preBuilt": False,
          }
        ],
        "bindings": [
          {
            "module": packageOrModuleName,
            "regex": ".*",
          }
        ],
        "emccFlags": [
          "-s", "SIDE_MODULE=1",
          *defaultEmccFlags,
          *debugEmccFlags,
        ],
        "typescriptDefinitions": True,
      }

def addPackageBuildConfigs(release = True, debug = True):
  for dirpath, dirnames, filenames in os.walk("/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/"):
    packageOrModuleName = os.path.basename(dirpath)
    if packageOrModuleName == "":
      continue

    if not any(x for x in filenames if x == "PACKAGES"):
      continue

    if packageOrModuleName in [
      "TKViewerTest",
      "TKD3DHost",
      "TKIVtk",
      "TKDraw",
      "TKIVtkDraw",
    ]:
      continue

    with open(dirpath + "/PACKAGES", "r") as a_file:
      for package in a_file:
        packageName = package.strip()
        if packageName == "":
          continue
        if packageName in [
          "D3DHost",
          "IVtk",
          "IVtkVTK",
          "IVtkTools",
          "ViewerTest",
          "IVtkOCC",
          "IVtkDraw",
          "Draw",
        ]:
          continue

        if release:
          releaseBuildConfigs["package." + packageName + ".wasm"] = {
            "inputs": [
              {
                "package": packageName,
                "preBuilt": False,
              }
            ],
            "bindings": [
              {
                "package": packageName,
                "regex": ".*",
              }
            ],
            "emccFlags": [
              "-s", "SIDE_MODULE=1",
              *defaultEmccFlags,
              *releaseEmccFlags,
            ],
            "typescriptDefinitions": True,
          }

        if debug:
          debugBuildConfigs["package." + packageName + ".debug.wasm"] = {
            "inputs": [
              {
                "package": packageName,
                "preBuilt": False,
              }
            ],
            "bindings": [
              {
                "package": packageName,
                "regex": ".*",
              }
            ],
            "emccFlags": [
              "-s", "SIDE_MODULE=1",
              *defaultEmccFlags,
              *debugEmccFlags,
            ],
            "typescriptDefinitions": True,
          }

def addMainModuleConfigs(release = True, debug = True):
  if release:
    releaseBuildConfigs["opencascade.js"] = {
      "inputs": [],
      "bindings": [],
      "emccFlags": [
        "-s", "MAIN_MODULE=1",
        "-s", "EXPORT_ES6=1",
        "-s", "USE_ES6_IMPORT_META=0",
        "-s", "USE_FREETYPE=1",
        '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
        *defaultEmccFlags,
        *releaseEmccFlags,
        *memoryEmccFlags
      ],
      "typescriptDefinitions": True,
    }
  if debug:
    debugBuildConfigs["opencascade.debug.js"] = {
      "inputs": [],
      "bindings": [],
      "emccFlags": [
        "-s", "MAIN_MODULE=1",
        "-s", "EXPORT_ES6=1",
        "-s", "USE_ES6_IMPORT_META=0",
        "-s", "USE_FREETYPE=1",
        '-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]',
        *defaultEmccFlags,
        *debugEmccFlags,
        *memoryEmccFlags
      ],
      "typescriptDefinitions": True,
    }

def buildCustom():
  os.chdir("/opencascade.js/dist/")
  subprocess.check_call([
    "/opencascade.js/src/buildFromYaml.py", 
    "/opencascade.js/src/builds/customBuild.yml"
  ])

addModuleBuildConfigs(True, False)
addMainModuleConfigs(True, False)

def runInParallel(*fns):
  proc = []
  for fn in fns:
    p = Process(target=fn)
    p.start()
    proc.append(p)
  for p in proc:
    p.join()

runInParallel(lambda: buildWasmModuleSet(releaseBuildConfigs), lambda: buildWasmModuleSet(debugBuildConfigs), lambda: buildCustom())
