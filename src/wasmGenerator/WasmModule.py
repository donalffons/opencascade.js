import clang.cindex
import os
import subprocess

from filter.filterClasses import filterClass
from filter.filterMethodOrProperties import filterMethodOrProperty
from filter.filterTypedefs import filterTypedef
from filter.filterEnums import filterEnum

from .Exports import getExports

from .FileProcessor import EmbindProcessor, TypescriptProcessor, ExportsProcessor

from enum import Enum

def customFilterFunction(bindingsFilterFunction, otherFilter):
  def filterFunction(theItem, additionalInfo=None):
    if bindingsFilterFunction(theItem):
      return otherFilter(theItem, additionalInfo)
    return False
  return filterFunction

class WasmModule:
  def __init__(self, name="", embindFile="", outputFile="", duplicateTypedefs={}, additionalCppCode=None):
    self.name = name
    self.headerFiles = []
    self.sourceFiles = []
    self.libraryFiles = []
    self.embindFile = embindFile
    self.typescriptDefinitionFile = (os.path.splitext(outputFile)[0] if outputFile.endswith(".js") else outputFile) + ".d.ts"
    self.outputFile = outputFile
    self.duplicateTypedefs = duplicateTypedefs
    self.bindingsFilterFunction = lambda x, y: True
    self.additionalIncludePaths = []
    self.additionalSystemIncludePaths = []
    self.buildFlags = []
    self.additionalCppCode = additionalCppCode

  def setBindingsFilterFunction(self, bindingsFilterFunction):
    self.bindingsFilterFunction = bindingsFilterFunction

  def addHeaderFile(self, file):
    self.headerFiles.append(file)

  def addSourceFile(self, file):
    self.sourceFiles.append(file)

  def addLibraryFile(self, file, path=None):
    if path is None:
      self.libraryFiles.append(file)
    else:
      self.libraryFiles.extend([
        "-L" + path,
        "-l" + file
      ])

  def parse(self):
    includePathArgs = \
      list(dict.fromkeys(map(lambda x: "-I" + os.path.dirname(x), self.headerFiles))) + \
      list(map(lambda x: "-I" + x, [
        "/emsdk/upstream/emscripten/system/include/",
        "/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
        "/emsdk/upstream/emscripten/system/lib/libcxx/include/",
        "/emsdk/upstream/lib/clang/13.0.0/include/",
        "/emsdk/upstream/emscripten/system/lib/libcxx/include/support/newlib/"
      ])) + \
      list(map(lambda x: "-I" + x, self.additionalIncludePaths)) + \
      list(map(lambda x: "-isystem" + x, self.additionalSystemIncludePaths))
    self.preamble = os.linesep.join(map(lambda x: "#include \"" + os.path.basename(x) + "\"", list(sorted(self.headerFiles))))
    if not self.additionalCppCode == None:
      self.preamble += "\n\n"
      self.preamble += self.additionalCppCode

    libFolder = "/clang/clang_11/lib"
    clang.cindex.Config.library_path = libFolder
    index = clang.cindex.Index.create()
    self.tu = index.parse(
      "main.h", [
        "-x",
        "c++",
        "-stdlib=libc++",
        "-D__EMSCRIPTEN__"
      ] + includePathArgs,
      [["main.h", self.preamble]]
    )

    if len(self.tu.diagnostics) > 0:
      print("Diagnostic Messages:")
      for d in self.tu.diagnostics:
        print("  " + d.format())

  def generateEmbindings(self):
    p = EmbindProcessor(
      self.preamble, self.name,
      self.tu, self.headerFiles, customFilterFunction(self.bindingsFilterFunction, filterClass), filterMethodOrProperty, customFilterFunction(self.bindingsFilterFunction, filterTypedef), customFilterFunction(self.bindingsFilterFunction, filterEnum), self.duplicateTypedefs)
    p.process()

    bindingsFile = open(self.embindFile, "w")
    bindingsFile.write(p.output)

  def generateExports(self):
    self.parse()
    p = ExportsProcessor(
      self.preamble, self.name,
      self.tu, self.headerFiles, customFilterFunction(self.bindingsFilterFunction, filterClass), filterMethodOrProperty, customFilterFunction(self.bindingsFilterFunction, filterTypedef), customFilterFunction(self.bindingsFilterFunction, filterEnum), self.duplicateTypedefs)
    p.process()

    self.tu = None
    return p.exportObjects

  def setModuleExportsDict(self, moduleExportsDict):
    self.moduleExportsDict = moduleExportsDict

  def generateTypescriptDefinitions(self):
    typescriptPreamble = ""
    if self.name.endswith(".js"):
      for libName, libExports in self.moduleExportsDict.items():
        if not libName == self.name:
          typescriptPreamble += "import { " + libName.replace(".", "_") + " } from './" + libName + "';\n"
    else:
      typescriptPreamble += "declare const libName = \"" + "./" + "/".join(self.outputFile.split("/")[3:]) + ".d.ts" + "\";\n"
      typescriptPreamble += "export default libName;\n"

    if not typescriptPreamble == "":
      typescriptPreamble += "\n"

    if self.name.endswith(".js"):
      typescriptPreamble += "namespace ThisModule {\n";
    
    p = TypescriptProcessor(
      self.name, self.moduleExportsDict,
      self.tu, self.headerFiles, customFilterFunction(self.bindingsFilterFunction, filterClass), filterMethodOrProperty, customFilterFunction(self.bindingsFilterFunction, filterTypedef), customFilterFunction(self.bindingsFilterFunction, filterEnum), self.duplicateTypedefs)
    p.process()

    typescriptEpilogue = ""
    if self.name.endswith(".js"):
      typescriptEpilogue += "}\n"
      typescriptEpilogue += "export type openCascadeModuleObject = {\n"
      typescriptEpilogue += "  locateFile?: (f: string) => string,\n"
      typescriptEpilogue += "  dynamicLibraries?: string[],\n"
      typescriptEpilogue += "};\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "declare namespace FS {\n"
      typescriptEpilogue += "  interface Lookup {\n"
      typescriptEpilogue += "      path: string;\n"
      typescriptEpilogue += "      node: FSNode;\n"
      typescriptEpilogue += "  }\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  interface FSStream {}\n"
      typescriptEpilogue += "  interface FSNode {}\n"
      typescriptEpilogue += "  interface ErrnoError {}\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  let ignorePermissions: boolean;\n"
      typescriptEpilogue += "  let trackingDelegate: any;\n"
      typescriptEpilogue += "  let tracking: any;\n"
      typescriptEpilogue += "  let genericErrors: any;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  // paths\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  function lookupPath(path: string, opts: any): Lookup;\n"
      typescriptEpilogue += "  function getPath(node: FSNode): string;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  // nodes\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  function isFile(mode: number): boolean;\n"
      typescriptEpilogue += "  function isDir(mode: number): boolean;\n"
      typescriptEpilogue += "  function isLink(mode: number): boolean;\n"
      typescriptEpilogue += "  function isChrdev(mode: number): boolean;\n"
      typescriptEpilogue += "  function isBlkdev(mode: number): boolean;\n"
      typescriptEpilogue += "  function isFIFO(mode: number): boolean;\n"
      typescriptEpilogue += "  function isSocket(mode: number): boolean;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  // devices\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  function major(dev: number): number;\n"
      typescriptEpilogue += "  function minor(dev: number): number;\n"
      typescriptEpilogue += "  function makedev(ma: number, mi: number): number;\n"
      typescriptEpilogue += "  function registerDevice(dev: number, ops: any): void;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  // core\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  function syncfs(populate: boolean, callback: (e: any) => any): void;\n"
      typescriptEpilogue += "  function syncfs(callback: (e: any) => any, populate?: boolean): void;\n"
      typescriptEpilogue += "  function mount(type: Emscripten.FileSystemType, opts: any, mountpoint: string): any;\n"
      typescriptEpilogue += "  function unmount(mountpoint: string): void;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  function mkdir(path: string, mode?: number): any;\n"
      typescriptEpilogue += "  function mkdev(path: string, mode?: number, dev?: number): any;\n"
      typescriptEpilogue += "  function symlink(oldpath: string, newpath: string): any;\n"
      typescriptEpilogue += "  function rename(old_path: string, new_path: string): void;\n"
      typescriptEpilogue += "  function rmdir(path: string): void;\n"
      typescriptEpilogue += "  function readdir(path: string): any;\n"
      typescriptEpilogue += "  function unlink(path: string): void;\n"
      typescriptEpilogue += "  function readlink(path: string): string;\n"
      typescriptEpilogue += "  function stat(path: string, dontFollow?: boolean): any;\n"
      typescriptEpilogue += "  function lstat(path: string): any;\n"
      typescriptEpilogue += "  function chmod(path: string, mode: number, dontFollow?: boolean): void;\n"
      typescriptEpilogue += "  function lchmod(path: string, mode: number): void;\n"
      typescriptEpilogue += "  function fchmod(fd: number, mode: number): void;\n"
      typescriptEpilogue += "  function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;\n"
      typescriptEpilogue += "  function lchown(path: string, uid: number, gid: number): void;\n"
      typescriptEpilogue += "  function fchown(fd: number, uid: number, gid: number): void;\n"
      typescriptEpilogue += "  function truncate(path: string, len: number): void;\n"
      typescriptEpilogue += "  function ftruncate(fd: number, len: number): void;\n"
      typescriptEpilogue += "  function utime(path: string, atime: number, mtime: number): void;\n"
      typescriptEpilogue += "  function open(path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number): FSStream;\n"
      typescriptEpilogue += "  function close(stream: FSStream): void;\n"
      typescriptEpilogue += "  function llseek(stream: FSStream, offset: number, whence: number): any;\n"
      typescriptEpilogue += "  function read(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;\n"
      typescriptEpilogue += "  function write(\n"
      typescriptEpilogue += "      stream: FSStream,\n"
      typescriptEpilogue += "      buffer: ArrayBufferView,\n"
      typescriptEpilogue += "      offset: number,\n"
      typescriptEpilogue += "      length: number,\n"
      typescriptEpilogue += "      position?: number,\n"
      typescriptEpilogue += "      canOwn?: boolean,\n"
      typescriptEpilogue += "  ): number;\n"
      typescriptEpilogue += "  function allocate(stream: FSStream, offset: number, length: number): void;\n"
      typescriptEpilogue += "  function mmap(\n"
      typescriptEpilogue += "      stream: FSStream,\n"
      typescriptEpilogue += "      buffer: ArrayBufferView,\n"
      typescriptEpilogue += "      offset: number,\n"
      typescriptEpilogue += "      length: number,\n"
      typescriptEpilogue += "      position: number,\n"
      typescriptEpilogue += "      prot: number,\n"
      typescriptEpilogue += "      flags: number,\n"
      typescriptEpilogue += "  ): any;\n"
      typescriptEpilogue += "  function ioctl(stream: FSStream, cmd: any, arg: any): any;\n"
      typescriptEpilogue += "  function readFile(path: string, opts: { encoding: 'binary'; flags?: string }): Uint8Array;\n"
      typescriptEpilogue += "  function readFile(path: string, opts: { encoding: 'utf8'; flags?: string }): string;\n"
      typescriptEpilogue += "  function readFile(path: string, opts?: { flags?: string }): Uint8Array;\n"
      typescriptEpilogue += "  function writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string }): void;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  // module-level FS code\n"
      typescriptEpilogue += "  //\n"
      typescriptEpilogue += "  function cwd(): string;\n"
      typescriptEpilogue += "  function chdir(path: string): void;\n"
      typescriptEpilogue += "  function init(\n"
      typescriptEpilogue += "      input: null | (() => number | null),\n"
      typescriptEpilogue += "      output: null | ((c: number) => any),\n"
      typescriptEpilogue += "      error: null | ((c: number) => any),\n"
      typescriptEpilogue += "  ): void;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "  function createLazyFile(\n"
      typescriptEpilogue += "      parent: string | FSNode,\n"
      typescriptEpilogue += "      name: string,\n"
      typescriptEpilogue += "      url: string,\n"
      typescriptEpilogue += "      canRead: boolean,\n"
      typescriptEpilogue += "      canWrite: boolean,\n"
      typescriptEpilogue += "  ): FSNode;\n"
      typescriptEpilogue += "  function createPreloadedFile(\n"
      typescriptEpilogue += "      parent: string | FSNode,\n"
      typescriptEpilogue += "      name: string,\n"
      typescriptEpilogue += "      url: string,\n"
      typescriptEpilogue += "      canRead: boolean,\n"
      typescriptEpilogue += "      canWrite: boolean,\n"
      typescriptEpilogue += "      onload?: () => void,\n"
      typescriptEpilogue += "      onerror?: () => void,\n"
      typescriptEpilogue += "      dontCreateFile?: boolean,\n"
      typescriptEpilogue += "      canOwn?: boolean,\n"
      typescriptEpilogue += "  ): void;\n"
      typescriptEpilogue += "  function createDataFile(\n"
      typescriptEpilogue += "      parent: string | FSNode,\n"
      typescriptEpilogue += "      name: string,\n"
      typescriptEpilogue += "      data: ArrayBufferView | string,\n"
      typescriptEpilogue += "      canRead: boolean,\n"
      typescriptEpilogue += "      canWrite: boolean,\n"
      typescriptEpilogue += "      canOwn: boolean,\n"
      typescriptEpilogue += "  ): FSNode;\n"
      typescriptEpilogue += "  interface AnalysisResults {\n"
      typescriptEpilogue += "    isRoot: boolean,\n"
      typescriptEpilogue += "    exists: boolean,\n"
      typescriptEpilogue += "    error: Error,\n"
      typescriptEpilogue += "    name: string,\n"
      typescriptEpilogue += "    path: resolved_path,\n"
      typescriptEpilogue += "    object: resolved_node,\n"
      typescriptEpilogue += "    parentExists: boolean,\n"
      typescriptEpilogue += "    parentPath: resolved_parent_path,\n"
      typescriptEpilogue += "    parentObject: resolved_parent_node\n"
      typescriptEpilogue += "  };\n"
      typescriptEpilogue += "  function analyzePath(path: string): AnalysisResults;\n"
      typescriptEpilogue += "}\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "export type openCascadeInstance = {FS: typeof FS} & {ready: Promise<openCascadeInstance>}"
      for libName, libExports in self.moduleExportsDict.items():
        if not libName == self.name:
          typescriptEpilogue += " & " + libName.replace(".", "_")
      typescriptEpilogue += " & typeof ThisModule"
      typescriptEpilogue += ";\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "declare function openCascade(module: openCascadeModuleObject): Promise<openCascadeInstance>;\n"
      typescriptEpilogue += "\n"
      typescriptEpilogue += "export default openCascade;\n"


    typescriptFile = open(self.typescriptDefinitionFile, "w")
    typescriptFile.write(typescriptPreamble + p.output + typescriptEpilogue)
    
  def getDuplicateTypedefMap(self):
    duplicateTypedefMap = {}
    for child in self.tu.cursor.get_children():
      if not child.kind == clang.cindex.CursorKind.TYPEDEF_DECL:
        continue
      if not child.underlying_typedef_type.spelling in duplicateTypedefMap:
        duplicateTypedefMap[child.underlying_typedef_type.spelling] = []
      duplicateTypedefMap[child.underlying_typedef_type.spelling].append(child.spelling)

    return duplicateTypedefMap

  def build(self):
    command = [
      'emcc',
      *self.buildFlags,
      *self.sourceFiles,
      "--bind", self.embindFile,
      *list(map(lambda x: "-I" + x, self.additionalIncludePaths)),
      *self.libraryFiles,
      "-o", self.outputFile
    ]
    retcode = subprocess.check_call(command)
  