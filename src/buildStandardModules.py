#!/usr/bin/python3

import os

from build import buildWasmModule
import multiprocessing
from filter.filterSourceFiles import filterSourceFile

buildConfigs = {}

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

    buildConfigs["module." + packageOrModuleName + ".wasm"] = {
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

    buildConfigs["module." + packageOrModuleName + ".debug.wasm"] = {
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

        buildConfigs["package." + packageName + ".wasm"] = {
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

        buildConfigs["package." + packageName + ".debug.wasm"] = {
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
  buildConfigs["opencascade.js"] = {
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
  buildConfigs["opencascade.debug.js"] = {
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

def runBuild(buildItem):
  buildConfigName = buildItem[0]
  buildConfig = buildItem[1]
  buildWasmModule(buildConfigName, buildConfig)

with multiprocessing.Pool(processes=multiprocessing.cpu_count()) as p:
  p.map(runBuild, buildConfigs.items())
#   p.map(runBuild, list(filter(lambda x: x[0] in [
# # "opencascade.js",
# # "opencascade.debug.js",
# # "module.TKernel.wasm",
# # "module.TKernel.debug.wasm",
# # "module.TKMath.debug.wasm",
# # "module.TKG2d.debug.wasm",
# # "module.TKG3d.debug.wasm",
# # "module.TKService.debug.wasm",
# # "module.TKGeomBase.debug.wasm",
# # "module.TKBRep.debug.wasm",
# # "module.TKGeomAlgo.debug.wasm",
# # "module.TKTopAlgo.debug.wasm",
# # "module.TKHLR.debug.wasm",
# # "module.TKV3d.debug.wasm",
# # "module.TKShHealing.debug.wasm",
# # "module.TKMesh.debug.wasm",
# # "module.TKXSBase.debug.wasm",
# # "module.TKSTEPBase.debug.wasm",
# # "module.TKSTEP209.debug.wasm",
# # "module.TKSTEPAttr.debug.wasm",
# # "module.TKCDF.debug.wasm",
# # "module.TKSTEP.debug.wasm",
# # "module.TKLCAF.debug.wasm",
# # "module.TKCAF.debug.wasm",
# # "module.TKVCAF.debug.wasm",
# # "module.TKXCAF.debug.wasm",
# # "module.TKXDESTEP.debug.wasm",
# # "module.TKRWMesh.debug.wasm",
# "module.TKBO.debug.wasm",
# # "module.TKPrim.debug.wasm",
#   ], buildConfigs.items())))
