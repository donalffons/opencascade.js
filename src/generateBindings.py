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

libraryBasePath = "/opencascade.js/build/bindings"
buildDirectory = "/opencascade.js/build"
occtBasePath = "/occt/occt-" + os.environ['OCCT_COMMIT_HASH'] + "/src/"

def mkdirp(name: str) -> None:
  try:
    os.makedirs(name)
  except OSError as e:
    if e.errno != errno.EEXIST:
      raise

def filterClasses(child, additionalFilterFunction):
  return additionalFilterFunction(child) and shouldProcessClass(child, occtBasePath)

def filterTemplates(child, additionalFilterFunction):
  return (
    additionalFilterFunction(child) and
    child.extent.start.file.name.startswith(occtBasePath) and
    child.kind == clang.cindex.CursorKind.TYPEDEF_DECL and
    (
      child.underlying_typedef_type.kind == clang.cindex.TypeKind.ELABORATED or
      child.underlying_typedef_type.kind == clang.cindex.TypeKind.UNEXPOSED
    )
  )

def filterEnums(child, additionalFilterFunction):
  return additionalFilterFunction(child) and child.extent.start.file.name.startswith(occtBasePath)

def processChildren(children, buildType: str, extension: str, filterFunction: Callable[[any], bool], processFunction: Callable[[any, any], str], typedefs: any, templateTypedefs: any, tu: any, preamble: str, additionalFilterFunction: any):
  for child in children:
    if not filterFunction(child, additionalFilterFunction) or child.spelling == "":
      continue

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

def process(tu, extension, embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, preamble, additionalFilterFunction = lambda child: child.extent.start.file.name.startswith(occtBasePath)):
  templateTypedefs = list(filter(
    lambda x:
      x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and
      not (x.get_definition() is None or not x == x.get_definition()) and
      filterTypedef(x) and
      x.type.get_num_template_arguments() != -1 and
      not ignoreDuplicateTypedef(x),
    tu.cursor.get_children()))
  typedefs = filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, tu.cursor.get_children())
  enums = list(filter(lambda x: x.kind == clang.cindex.CursorKind.ENUM_DECL and filterEnum(x), tu.cursor.get_children()))

  processChildren(tu.cursor.get_children(), "bindings", extension, filterClasses, embindGenerationFuncClasses, typedefs, templateTypedefs, tu, preamble, additionalFilterFunction)
  processChildren(templateTypedefs, "bindings", extension, filterTemplates, embindGenerationFuncTemplates, typedefs, templateTypedefs, tu, preamble, additionalFilterFunction)
  processChildren(enums, "bindings", extension, filterEnums, embindGenerationFuncEnums, typedefs, templateTypedefs, tu, preamble, additionalFilterFunction)

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
  ocIncludeStatements = os.linesep.join(map(lambda x: "#include \"" + os.path.basename(x) + "\"", list(sorted(ocIncludeFiles))))

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

  return [translationUnit, ocIncludeStatements]

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

def generateCustomCodeBindings(customCode):
  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  [translationUnit, myOcIncludeStatements] = parse(customCode)
  embindPreamble = myOcIncludeStatements + "\n" + referenceTypeTemplateDefs + "\n" + customCode

  def customFilter(child):
    return child.location.file.name == "myMain.h"
  process(translationUnit, ".cpp", embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, embindPreamble, customFilter)
  process(translationUnit, ".d.ts.json", typescriptGenerationFuncClasses, typescriptGenerationFuncTemplates, typescriptGenerationFuncEnums, "", customFilter)

if __name__ == "__main__":
  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  def processEmbindings():
    [translationUnit, myOcIncludeStatements] = parse()
    embindPreamble = myOcIncludeStatements + "\n" + referenceTypeTemplateDefs
    process(translationUnit, ".cpp", embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, embindPreamble)

  def processTypescriptDefinitions():
    [translationUnit, myOcIncludeStatements] = parse()
    process(translationUnit, ".d.ts.json", typescriptGenerationFuncClasses, typescriptGenerationFuncTemplates, typescriptGenerationFuncEnums, "")

  p1 = multiprocessing.Process(target=processEmbindings)
  p1.start()
  p2 = multiprocessing.Process(target=processTypescriptDefinitions)
  p2.start()
  p1.join()
  p2.join()
