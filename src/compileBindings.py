#!/usr/bin/python3

import os
from Common import ocIncludePaths, additionalIncludePaths
import subprocess
import multiprocessing
from functools import partial

from argparse import ArgumentParser

libraryBasePath = "/opencascade.js/build/bindings"

def buildOneFile(args, item):
  if not os.path.exists(item + ".o"):
    print("building " + item)
    command = [
      "emcc",
      "-flto",
      "-fwasm-exceptions",
      "-sDISABLE_EXCEPTION_CATCHING=0",
      "-DIGNORE_NO_ATOMICS=1",
      "-DOCCT_NO_PLUGINS",
      "-frtti",
      "-DHAVE_RAPIDJSON",
      "-Os",
      # "-g3",
      # "-gsource-map",
      # "--source-map-base=http://localhost:8080",
      "-pthread" if args["threading"] == "multi-threaded" else "",
      *list(map(lambda x: "-I" + x, ocIncludePaths + additionalIncludePaths)),
      "-c", item,
    ]
    subprocess.check_call([
      *command,
      "-o", item + ".o",
    ])
  else:
    print("file " + item + ".o already exists, skipping")

def compileCustomCodeBindings(args):
  filesToBuild = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath + "/myMain.h"):
    filesToBuild.extend(map(lambda x: dirpath + "/" + x, filter(lambda x: x.endswith(".cpp"), filenames)))

  with multiprocessing.Pool(processes=int(multiprocessing.cpu_count() / 1)) as p:
    p.map(partial(buildOneFile, args), sorted(filesToBuild))

if __name__ == "__main__":
  parser = ArgumentParser()
  parser.add_argument(dest="threading", choices=["single-threaded", "multi-threaded"], help="Build in single vs. multi-threaded mode")
  args = parser.parse_args()

  filesToBuild = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath):
    filesToBuild.extend(map(lambda x: dirpath + "/" + x, filter(lambda x: x.endswith(".cpp"), filenames)))

  with multiprocessing.Pool(processes=int(multiprocessing.cpu_count() / 1)) as p:
    p.map(partial(buildOneFile, {
      "threading": args.threading,
    }), sorted(filesToBuild))
