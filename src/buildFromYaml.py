#!/usr/bin/python3

import os
import subprocess
import json
from itertools import chain
import sys
import yaml
from generateBindings import generateCustomCodeBindings
from compileBindings import compileCustomCodeBindings
import shutil

libraryBasePath = "/opencascade.js/build"

buildConfig = yaml.safe_load(open(sys.argv[1], "r"))

if not "extraBuilds" in buildConfig:
  buildConfig["extraBuilds"] = []

defaultEmccFlags = [
  "-O3",
  "-sEXPORT_ES6=1",
  "-sUSE_ES6_IMPORT_META=1",
  "-sEXPORTED_RUNTIME_METHODS=['FS']",
  "-sINITIAL_MEMORY=100MB",
  "-sMAXIMUM_MEMORY=4GB",
  "-sALLOW_MEMORY_GROWTH=1",
  "-sUSE_FREETYPE=1",
  "-sLLD_REPORT_UNDEFINED",
  "--no-entry",
  "-pthread",
  "-sPTHREAD_POOL_SIZE='navigator.hardwareConcurrency'",
  "-flto",
]
if not "bindings" in buildConfig["mainBuild"]:
  buildConfig["mainBuild"]["bindings"] = []
for extraBuild in buildConfig["extraBuilds"]:
  if not "bindings" in extraBuild:
    extraBuild["bindings"] = []
if not "emccFlags" in buildConfig["mainBuild"]:
  buildConfig["mainBuild"]["emccFlags"] = defaultEmccFlags
for extraBuild in buildConfig["extraBuilds"]:
  if not "emccFlags" in extraBuild:
    extraBuild["emccFlags"] = defaultEmccFlags
if not "generateTypescriptDefinitions" in buildConfig:
  buildConfig["generateTypescriptDefinitions"] = True
if not "additionalCppCode" in buildConfig:
  buildConfig["additionalCppCode"] = ""

try:
  shutil.rmtree(libraryBasePath + "/bindings/myMain.h")
except Exception:
  pass

generateCustomCodeBindings(buildConfig["additionalCppCode"])
compileCustomCodeBindings()

def verifyBinding(binding) -> bool:
  for dirpath, dirnames, filenames in os.walk(libraryBasePath + "/bindings"):
    for item in filenames:
      if item.endswith(".cpp.o") and binding["symbol"] == item[:-6]:
        return True
  return False

def verifyBindings(bindings) -> bool:
  for binding in bindings:
    if not verifyBinding(binding):
      raise Exception("Requested binding " + json.dumps(binding) + " does not exist!")

verifyBindings(buildConfig["mainBuild"]["bindings"])
for extraBuild in buildConfig["extraBuilds"]:
  verifyBindings(extraBuild)

def shouldProcessSymbol(symbol: str, bindings) -> bool:
  if len(bindings) == 0:
    return True
  entry = next((b for b in bindings if b["symbol"] == symbol), None)
  if not entry is None:
    return True
  return False

typescriptDefinitions = []
for dirpath, dirnames, filenames in os.walk(libraryBasePath + "/bindings"):
  for item in filenames:
    if item.endswith(".d.ts.json") and shouldProcessSymbol(item[:-10], list(chain(buildConfig["mainBuild"]["bindings"], *list(map(lambda x: x["bindings"], buildConfig["extraBuilds"]))))):
      f = open(dirpath + "/" + item, "r")
      typescriptDefinitions.append(json.loads(f.read()))

def runBuild(build):
  print("Running build: " + build["name"])
  bindingsO = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath + "/bindings"):
    for item in filenames:
      if item.endswith(".cpp.o") and shouldProcessSymbol(item[:-6], build["bindings"]):
        bindingsO.append(dirpath + "/" + item)
  sourcesO = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath + "/sources"):
    for item in filenames:
      if item in [
        "XBRepMesh.o",
      ]:
        continue
      if item.endswith(".o"):
        sourcesO.append(dirpath + "/" + item)
  subprocess.check_call([
    "emcc", "--bind",
    *bindingsO, *sourcesO,
    "-o", os.getcwd() + "/" + build["name"],
    *build["emccFlags"],
  ])
  print("Build finished")

runBuild(buildConfig["mainBuild"])
for extraBuild in buildConfig["extraBuilds"]:
  runBuild(extraBuild)

if buildConfig["generateTypescriptDefinitions"]:
  typescriptDefinitionOutput = ""
  typescriptExports = []
  for dts in typescriptDefinitions:
    typescriptDefinitionOutput += dts[".d.ts"]
    for export in dts["exports"]:
      typescriptExports.append({
        "export": export,
        "kind": dts["kind"],
      })

  typescriptDefinitionOutput += \
    "type Standard_Boolean = boolean;\n" + \
    "type Standard_Byte = number;\n" + \
    "type Standard_Character = number;\n" + \
    "type Standard_CString = string;\n" + \
    "type Standard_Integer = number;\n" + \
    "type Standard_Real = number;\n" + \
    "type Standard_ShortReal = number;\n" + \
    "type Standard_Size = number;\n\n" + \
    "declare namespace FS {\n" + \
    "  interface Lookup {\n" + \
    "      path: string;\n" + \
    "      node: FSNode;\n" + \
    "  }\n" + \
    "\n" + \
    "  interface FSStream {}\n" + \
    "  interface FSNode {}\n" + \
    "  interface ErrnoError {}\n" + \
    "\n" + \
    "  let ignorePermissions: boolean;\n" + \
    "  let trackingDelegate: any;\n" + \
    "  let tracking: any;\n" + \
    "  let genericErrors: any;\n" + \
    "\n" + \
    "  //\n" + \
    "  // paths\n" + \
    "  //\n" + \
    "  function lookupPath(path: string, opts: any): Lookup;\n" + \
    "  function getPath(node: FSNode): string;\n" + \
    "\n" + \
    "  //\n" + \
    "  // nodes\n" + \
    "  //\n" + \
    "  function isFile(mode: number): boolean;\n" + \
    "  function isDir(mode: number): boolean;\n" + \
    "  function isLink(mode: number): boolean;\n" + \
    "  function isChrdev(mode: number): boolean;\n" + \
    "  function isBlkdev(mode: number): boolean;\n" + \
    "  function isFIFO(mode: number): boolean;\n" + \
    "  function isSocket(mode: number): boolean;\n" + \
    "\n" + \
    "  //\n" + \
    "  // devices\n" + \
    "  //\n" + \
    "  function major(dev: number): number;\n" + \
    "  function minor(dev: number): number;\n" + \
    "  function makedev(ma: number, mi: number): number;\n" + \
    "  function registerDevice(dev: number, ops: any): void;\n" + \
    "\n" + \
    "  //\n" + \
    "  // core\n" + \
    "  //\n" + \
    "  function syncfs(populate: boolean, callback: (e: any) => any): void;\n" + \
    "  function syncfs(callback: (e: any) => any, populate?: boolean): void;\n" + \
    "  function mount(type: any, opts: any, mountpoint: string): any;\n" + \
    "  function unmount(mountpoint: string): void;\n" + \
    "\n" + \
    "  function mkdir(path: string, mode?: number): any;\n" + \
    "  function mkdev(path: string, mode?: number, dev?: number): any;\n" + \
    "  function symlink(oldpath: string, newpath: string): any;\n" + \
    "  function rename(old_path: string, new_path: string): void;\n" + \
    "  function rmdir(path: string): void;\n" + \
    "  function readdir(path: string): any;\n" + \
    "  function unlink(path: string): void;\n" + \
    "  function readlink(path: string): string;\n" + \
    "  function stat(path: string, dontFollow?: boolean): any;\n" + \
    "  function lstat(path: string): any;\n" + \
    "  function chmod(path: string, mode: number, dontFollow?: boolean): void;\n" + \
    "  function lchmod(path: string, mode: number): void;\n" + \
    "  function fchmod(fd: number, mode: number): void;\n" + \
    "  function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;\n" + \
    "  function lchown(path: string, uid: number, gid: number): void;\n" + \
    "  function fchown(fd: number, uid: number, gid: number): void;\n" + \
    "  function truncate(path: string, len: number): void;\n" + \
    "  function ftruncate(fd: number, len: number): void;\n" + \
    "  function utime(path: string, atime: number, mtime: number): void;\n" + \
    "  function open(path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number): FSStream;\n" + \
    "  function close(stream: FSStream): void;\n" + \
    "  function llseek(stream: FSStream, offset: number, whence: number): any;\n" + \
    "  function read(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;\n" + \
    "  function write(\n" + \
    "      stream: FSStream,\n" + \
    "      buffer: ArrayBufferView,\n" + \
    "      offset: number,\n" + \
    "      length: number,\n" + \
    "      position?: number,\n" + \
    "      canOwn?: boolean,\n" + \
    "  ): number;\n" + \
    "  function allocate(stream: FSStream, offset: number, length: number): void;\n" + \
    "  function mmap(\n" + \
    "      stream: FSStream,\n" + \
    "      buffer: ArrayBufferView,\n" + \
    "      offset: number,\n" + \
    "      length: number,\n" + \
    "      position: number,\n" + \
    "      prot: number,\n" + \
    "      flags: number,\n" + \
    "  ): any;\n" + \
    "  function ioctl(stream: FSStream, cmd: any, arg: any): any;\n" + \
    "  function readFile(path: string, opts: { encoding: 'binary'; flags?: string }): Uint8Array;\n" + \
    "  function readFile(path: string, opts: { encoding: 'utf8'; flags?: string }): string;\n" + \
    "  function readFile(path: string, opts?: { flags?: string }): Uint8Array;\n" + \
    "  function writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string }): void;\n" + \
    "\n" + \
    "  //\n" + \
    "  // module-level FS code\n" + \
    "  //\n" + \
    "  function cwd(): string;\n" + \
    "  function chdir(path: string): void;\n" + \
    "  function init(\n" + \
    "      input: null | (() => number | null),\n" + \
    "      output: null | ((c: number) => any),\n" + \
    "      error: null | ((c: number) => any),\n" + \
    "  ): void;\n" + \
    "\n" + \
    "  function createLazyFile(\n" + \
    "      parent: string | FSNode,\n" + \
    "      name: string,\n" + \
    "      url: string,\n" + \
    "      canRead: boolean,\n" + \
    "      canWrite: boolean,\n" + \
    "  ): FSNode;\n" + \
    "  function createPreloadedFile(\n" + \
    "      parent: string | FSNode,\n" + \
    "      name: string,\n" + \
    "      url: string,\n" + \
    "      canRead: boolean,\n" + \
    "      canWrite: boolean,\n" + \
    "      onload?: () => void,\n" + \
    "      onerror?: () => void,\n" + \
    "      dontCreateFile?: boolean,\n" + \
    "      canOwn?: boolean,\n" + \
    "  ): void;\n" + \
    "  function createDataFile(\n" + \
    "      parent: string | FSNode,\n" + \
    "      name: string,\n" + \
    "      data: ArrayBufferView | string,\n" + \
    "      canRead: boolean,\n" + \
    "      canWrite: boolean,\n" + \
    "      canOwn: boolean,\n" + \
    "  ): FSNode;\n" + \
    "  interface AnalysisResults {\n" + \
    "    isRoot: boolean,\n" + \
    "    exists: boolean,\n" + \
    "    error: Error,\n" + \
    "    name: string,\n" + \
    "    path: any,\n" + \
    "    object: any,\n" + \
    "    parentExists: boolean,\n" + \
    "    parentPath: any,\n" + \
    "    parentObject: any\n" + \
    "  }\n" + \
    "  function analyzePath(path: string): AnalysisResults;\n" + \
    "}\n\n" + \
    "\nexport type OpenCascadeInstance = {FS: typeof FS} & {\n  " + ";\n  ".join(map(lambda x: x["export"] + ((": typeof " + x["export"]) if x["kind"] == "class" else (": " + x["export"])), typescriptExports)) + ";\n" + \
    "};\n\n" + \
    "declare function init(): Promise<OpenCascadeInstance>;\n\n" + \
    "export default init;\n"

  typescriptDefinitionsFile = open(os.getcwd() + "/" + os.path.splitext(buildConfig["mainBuild"]["name"])[0] + ".d.ts", "w")
  typescriptDefinitionsFile.write(typescriptDefinitionOutput)
