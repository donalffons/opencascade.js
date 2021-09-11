#!/usr/bin/python3

import os
from Common import ocIncludePaths, additionalIncludePaths
import subprocess
import multiprocessing

libraryBasePath = "/opencascade.js/build/bindings"

def buildOneFile(item):
  if not os.path.exists(item + ".o"):
    print("building " + item)
    command = [
      "emcc",
      "--bind",
      "-DIGNORE_NO_ATOMICS=1",
      "-DOCCT_NO_PLUGINS",
      "-frtti",
      "-DHAVE_RAPIDJSON",
      "-Os",
      # "-g3",
      # "-gsource-map",
      # "--source-map-base=http://localhost:8080",
      "-pthread",
      # "-sPTHREAD_POOL_SIZE='navigator.hardwareConcurrency'",
      *list(map(lambda x: "-I" + x, ocIncludePaths + additionalIncludePaths)),
      "-c", item,
    ]
    subprocess.check_call([
      *command,
      "-o", item + ".o",
    ])
  else:
    print("file " + item + ".o already exists, skipping")

def compileCustomCodeBindings():
  filesToBuild = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath + "/myMain.h"):
    filesToBuild.extend(map(lambda x: dirpath + "/" + x, filter(lambda x: x.endswith(".cpp"), filenames)))

  with multiprocessing.Pool(processes=int(multiprocessing.cpu_count() / 1)) as p:
    p.map(buildOneFile, sorted(filesToBuild))

if __name__ == "__main__":
  filesToBuild = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath):
    filesToBuild.extend(map(lambda x: dirpath + "/" + x, filter(lambda x: x.endswith(".cpp"), filenames)))

  with multiprocessing.Pool(processes=int(multiprocessing.cpu_count() / 1)) as p:
    p.map(buildOneFile, sorted(filesToBuild))
