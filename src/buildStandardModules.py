#!/usr/bin/python3

import os

from build import buildWasmModuleSet
import multiprocessing
from ..src_build.filter.filterSourceFiles import filterSourceFile

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
  "-s", "AGGRESSIVE_VARIABLE_ELIMINATION=1",
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

def addModuleBuildConfigs():
  for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
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
      ]
    }

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
      ]
    }

def addPackageBuildConfigs():
  for dirpath, dirnames, filenames in os.walk("/occt/occt-628c021/src/"):
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
          ]
        }

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
          ]
        }

def addMainModuleConfigs():
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
    ]
  }
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
    ]
  }

addModuleBuildConfigs()
# addPackageBuildConfigs()
addMainModuleConfigs()

buildWasmModuleSet(releaseBuildConfigs)
buildWasmModuleSet(debugBuildConfigs)
