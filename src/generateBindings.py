#!/usr/bin/python3

from typing import Callable
from bindings import EmbindBindings, TypescriptBindings, shouldProcessClass
import clang.cindex
import os
import errno
from filter.filterTypedefs import filterTypedef
from filter.filterEnums import filterEnum
from wasmGenerator.Common import ignoreDuplicateTypedef, SkipException
from Common import ocIncludeFiles, includePathArgs
import json
import multiprocessing
import os
from filter.filterPackages import filterPackages

libraryBasePath = "/opencascade.js/build/bindings"
buildDirectory = "/opencascade.js/build"
occtBasePath = "/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/"
ocIncludeStatements = os.linesep.join(map(lambda x: "#include \"" + os.path.basename(x) + "\"", list(sorted(ocIncludeFiles))))

def mkdirp(name: str) -> None:
  try:
    os.makedirs(name)
  except OSError as e:
    if e.errno != errno.EEXIST:
      raise

def filterClasses(child, additionalFilterFunction):
  packageName = os.path.basename(os.path.dirname(child.location.file.name))
  return (
    filterPackages(packageName) and
    additionalFilterFunction(child) and
    shouldProcessClass(child, occtBasePath)
  )

def filterTemplates(child, additionalFilterFunction):
  packageName = os.path.basename(os.path.dirname(child.location.file.name))
  return (
    filterPackages(packageName) and
    additionalFilterFunction(child) and
    child.extent.start.file.name.startswith(occtBasePath) and
    child.kind == clang.cindex.CursorKind.TYPEDEF_DECL and
    (
      child.underlying_typedef_type.kind == clang.cindex.TypeKind.ELABORATED or
      child.underlying_typedef_type.kind == clang.cindex.TypeKind.UNEXPOSED
    )
  )

def filterEnums(child, additionalFilterFunction):
  packageName = os.path.basename(os.path.dirname(child.location.file.name))
  return (
    filterPackages(packageName) and
    additionalFilterFunction(child) and
    child.extent.start.file.name.startswith(occtBasePath)
  )

def processOneChild(
  tuFilename, generator, buildType: str, extension: str, filterFunction: Callable[[any], bool], processFunction: Callable[[any, any], str], typedefs: any, templateTypedefs: any, preamble: str, additionalFilterFunction: any, i):
  tu = clang.cindex.Index.read(None, path=tuFilename)
  child = list(generator(tu))[i]

  if not filterFunction(child, additionalFilterFunction) or child.spelling == "":
    return

  relOcFileName: str = child.extent.start.file.name.replace(occtBasePath, "")
  mkdirp(buildDirectory + "/" + buildType + "/" + os.path.dirname(relOcFileName))
  mkdirp(buildDirectory + "/" + buildType + "/" + relOcFileName)
  filename = buildDirectory + "/" + buildType + "/" + relOcFileName + "/" + (child.spelling if not child.spelling == "" else child.type.spelling) + extension

  if not os.path.exists(filename):
    print("Processing " + child.spelling)
    try:
      output = processFunction(tu, preamble, child, typedefs, templateTypedefs)
      bindingsFile = open(filename, "w")
      bindingsFile.write(output)
    except SkipException as e:
      print(str(e))
  else:
    print("file " + child.spelling + ".cpp already exists, skipping")

from functools import partial

def processChildren(tuFilename, generator, buildType: str, extension: str, filterFunction: Callable[[any], bool], processFunction: Callable[[any, any], str], typedefs: any, templateTypedefs: any, preamble: str, additionalFilterFunction: any):
  tu = clang.cindex.Index.read(None, path=tuFilename)
  func = partial(processOneChild, tuFilename, generator, buildType, extension, filterFunction, processFunction, typedefs, templateTypedefs, preamble, additionalFilterFunction)
  with multiprocessing.Pool(processes=int(multiprocessing.cpu_count() / 1)) as p:
    p.map(func, range(len(generator(tu))))

def processTemplate(child):
  templateRefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TEMPLATE_REF, child.get_children()))
  if len(templateRefs) != 1:
    raise SkipException("The number of template refs for the template typedef \"" + child.spelling + "\" is not 1!")

  templateClass = templateRefs[0].get_definition()
  if templateClass is None:
    raise SkipException("Template class is None (" + child.spelling + ")")
  templateArgNames = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER, templateClass.get_children()))
  templateArgs = {}
  for i, templateArgName in enumerate(templateArgNames):
    templateArgType = child.type.get_template_argument_type(i)
    if templateArgType.spelling == "":
      raise SkipException("Template argument type is empty for at least one argument. Is this class using default values for template arguments? This is currently not supported (" + child.spelling + ")")
    templateArgs[templateArgName.spelling] = templateArgType
  
  return [templateClass, templateArgs]

def embindGenerationFuncClasses(tu, preamble, child, typedefs, templateTypedefs) -> str:
  embindings = EmbindBindings(typedefs, templateTypedefs, tu)
  embindings.processClass(child)

  return preamble + embindings.output

def embindGenerationFuncTemplates(tu, preamble, child, typedefs, templateTypedefs) -> str:
  [templateClass, templateArgs] = processTemplate(child)
  embindings = EmbindBindings(typedefs, templateTypedefs, tu)
  embindings.processClass(templateClass, child, templateArgs)

  return preamble + embindings.output

def embindGenerationFuncEnums(tu, preamble, child, typedefs, templateTypedefs) -> str:
  embindings = EmbindBindings(typedefs, templateTypedefs, tu)
  embindings.processEnum(child)

  return preamble + embindings.output

def templateTypedefGenerator(tu):
  return list(filter(
    lambda x:
      x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and
      not (x.get_definition() is None or not x == x.get_definition()) and
      filterTypedef(x) and
      x.type.get_num_template_arguments() != -1 and
      not ignoreDuplicateTypedef(x),
    tu.cursor.get_children()))

def typedefGenerator(tu):
  return list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, tu.cursor.get_children()))

def allChildrenGenerator(tu):
  return list(tu.cursor.get_children())

def enumGenerator(tu):
  return list(filter(lambda x: x.kind == clang.cindex.CursorKind.ENUM_DECL and filterEnum(x), tu.cursor.get_children()))

def defaultAdditionalFilterFunction(child):
  return child.extent.start.file.name.startswith(occtBasePath)

def process(tuFilename, extension, embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, preamble, additionalFilterFunction = defaultAdditionalFilterFunction):
  processChildren(tuFilename, allChildrenGenerator, "bindings", extension, filterClasses, embindGenerationFuncClasses, typedefGenerator, templateTypedefGenerator, preamble, additionalFilterFunction)
  processChildren(tuFilename, templateTypedefGenerator, "bindings", extension, filterTemplates, embindGenerationFuncTemplates, typedefGenerator, templateTypedefGenerator, preamble, additionalFilterFunction)
  processChildren(tuFilename, enumGenerator, "bindings", extension, filterEnums, embindGenerationFuncEnums, typedefGenerator, templateTypedefGenerator, preamble, additionalFilterFunction)

def typescriptGenerationFuncClasses(tu, preamble, child, typedefs, templateTypedefs) -> str:
  typescript = TypescriptBindings(typedefs, templateTypedefs, tu)
  typescript.processClass(child)

  return json.dumps({
    ".d.ts": preamble + typescript.output,
    "kind": "class",
    "exports": typescript.exports,
  })

def typescriptGenerationFuncTemplates(tu, preamble, child, typedefs, templateTypedefs) -> str:
  [templateClass, templateArgs] = processTemplate(child)
  typescript = TypescriptBindings(typedefs, templateTypedefs, tu)
  typescript.processClass(templateClass, child, templateArgs)

  return json.dumps({
    ".d.ts": preamble + typescript.output,
    "kind": "class",
    "exports": typescript.exports,
  })

def typescriptGenerationFuncEnums(tu, preamble, child, typedefs, templateTypedefs) -> str:
  typescript = TypescriptBindings(typedefs, templateTypedefs, tu)
  typescript.processEnum(child)

  return json.dumps({
    ".d.ts": preamble + typescript.output,
    "kind": "enum",
    "exports": typescript.exports,
  })

def parse(additionalCppCode = ""):
  libFolder = "/clang/clang_11/lib"
  clang.cindex.Config.library_path = libFolder
  index = clang.cindex.Index.create()
  translationUnit = index.parse(
    "myMain.h", [
      "-x",
      "c++",
      "-stdlib=libc++",
      "-D__EMSCRIPTEN__"
    ] + includePathArgs,
    [["myMain.h", ocIncludeStatements + "\n" + additionalCppCode]]
  )

  if len(translationUnit.diagnostics) > 0:
    print("Diagnostic Messages:")
    for d in translationUnit.diagnostics:
      print("  " + d.format())

  return translationUnit

referenceTypeTemplateDefs = \
  "\n" + \
  "#include <emscripten/bind.h>\n" + \
  "using namespace emscripten;\n" + \
  "#include <functional>\n" + \
  "\n" + \
  "template<typename T>\n" + \
  "T getReferenceValue(const emscripten::val& v) {\n" + \
  "  if(!(v.typeOf().as<std::string>() == \"object\")) {\n" + \
  "    return v.as<T>(allow_raw_pointers());\n" + \
  "  } else if(v.typeOf().as<std::string>() == \"object\" && v.hasOwnProperty(\"current\")) {\n" + \
  "    return v[\"current\"].as<T>(allow_raw_pointers());\n" + \
  "  }\n" + \
  "  throw(\"unsupported type\");\n" + \
  "}\n" + \
  "\n" + \
  "template<typename T>\n" + \
  "void updateReferenceValue(emscripten::val& v, T& val) {\n" + \
  "  if(v.typeOf().as<std::string>() == \"object\" && v.hasOwnProperty(\"current\")) {\n" + \
  "    v.set(\"current\", val);\n" + \
  "  }\n" + \
  "}\n" + \
  "\n"

def customFilter(child):
  return child.location.file.name == "myMain.h"

def generateCustomCodeBindings(customCode):
  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  translationUnit = parse(customCode)
  translationUnit.save(libraryBasePath + "/translationUnitCustomCode.bin")
  embindPreamble = ocIncludeStatements + "\n" + referenceTypeTemplateDefs + "\n" + customCode

  process(libraryBasePath + "/translationUnitCustomCode.bin", ".cpp", embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, embindPreamble, customFilter)
  process(libraryBasePath + "/translationUnitCustomCode.bin", ".d.ts.json", typescriptGenerationFuncClasses, typescriptGenerationFuncTemplates, typescriptGenerationFuncEnums, "", customFilter)

if __name__ == "__main__":
  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  translationUnit = parse()
  translationUnit.save(libraryBasePath + "/translationUnit.bin")

  def processEmbindings():
    embindPreamble = ocIncludeStatements + "\n" + referenceTypeTemplateDefs
    process(libraryBasePath + "/translationUnit.bin", ".cpp", embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, embindPreamble)

  def processTypescriptDefinitions():
    process(libraryBasePath + "/translationUnit.bin", ".d.ts.json", typescriptGenerationFuncClasses, typescriptGenerationFuncTemplates, typescriptGenerationFuncEnums, "")

  processEmbindings()
  processTypescriptDefinitions()
