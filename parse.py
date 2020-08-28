#!/usr/bin/python3.8

import CppHeaderParser
import sys
import argparse
import os
import re

parser = argparse.ArgumentParser(description='Convert C++ Header files to Emcsripten Embind code.')
parser.add_argument('input', metavar='input', help='C++ input file')
parser.add_argument('output', metavar='output', help='File with Embind code to produce')
parser.add_argument('--debug', action='store_true', help='output debug information')

args = parser.parse_args()

def printMessage(text, level="DEBUG"):
  if level == "DEBUG" and args.debug:
    print(text)
  if not level == "DEBUG":
    print(text)

def parseClass(theClass, templateInstanceName = None, templateName = None, templateParam = None):
  className = typedefName if not templateInstanceName == None else theClass["name"]
  printMessage("processing class " + className)

  constructorName = templateName if not templateName == None else className

  if "template" in theClass and templateInstanceName == None:
    printMessage("  WARNING: Cannot handle generic template classes")
    printMessage("done")
    return

  if len(theClass["inherits"]) > 0:
    baseClass = ", base<" + theClass["inherits"][0]["class"] + ">"
  else:
    baseClass = ""

  outputFile.write("class_<" + className + baseClass + ">(\"" + className + "\")" + os.linesep)
  publicMethods = theClass["methods"]["public"]

  constructors = [row for row in publicMethods if row["name"] == constructorName]
  hasOverloadedConstructors = True if len(constructors) > 1 else False

  printMessage("  processing methods")
  for method in publicMethods:
    if hasOverloadedConstructors and method["name"] == constructorName:
      continue

    if method["name"] == className:
      printMessage("    processing " + ("constructor" if not method["destructor"] else "destructor"))
      if method["destructor"]:
        printMessage("    WARNING: Ignoring destructors")
        printMessage("    done")
        continue
      paramTypes = list(map(lambda p : p["type"], method["parameters"]))
      outputFile.write("  .constructor<" + ", ".join(paramTypes) + ">()" + os.linesep)
    else:
      printMessage("    processing method " + method["name"])

      methodName = method["name"]
      returnType = method["rtnType"]
      if methodName.startswith("operator"):
        printMessage("    WARNING: Cannot handle operators")
        printMessage("    done")
        continue
      if methodName == "Standard_DEPRECATED":
        printMessage("    WARNING: Ignoring...")
        printMessage("    done")
        continue
      if method["template"]:
        printMessage("    WARNING: Cannot handle template methods")
        printMessage("    done")
        continue
      if constructorName == templateName and (method["name"] == "Remove"):
        printMessage("    WARNING: This method cannot be bound")
        printMessage("    done")
        continue

      overloads = [row for row in publicMethods if row["name"] == method["name"]]
      hasOverloads = True if len(overloads) > 1 else False
      overloadIndex = overloads.index(method) + 1
      overloadPostfix = "" if not hasOverloads else "_" + str(overloadIndex)

      returnType = re.sub(r'(\W|^)(static)(.*)', r'\1\3', returnType)
      returnType = re.sub(r'(\W|^)(inline)(.*)', r'\1\3', returnType)
      returnType = re.sub(r'(\W|^)(virtual)(.*)', r'\1\3', returnType)

      allowRawPointers = ", allow_raw_pointers()"

      const = " const" if method["const"] else ""
      qualifier = (className + "::") if ((returnType == "const_iterator" or returnType == "iterator") and theClass["template"]) else ""
      castParamTypes = list(map(lambda p : p["type"] if p["constant"] else "const " + p["type"], method["parameters"]))
      
      castParamTypes = list(map(lambda p : p.replace("NCollection_List", className), castParamTypes))
      if not templateParam == None:
        castParamTypes = list(map(lambda p : p.replace("TheItemType", templateParam), castParamTypes))
        castParamTypes = list(map(lambda p : p.replace("Iterator", className + "::Iterator"), castParamTypes))
      returnType = returnType.replace("NCollection_List", className)
      if not templateParam == None:
        returnType = returnType.replace("TheItemType", templateParam)

      if len(castParamTypes) == 1 and (castParamTypes[0] == "void" or castParamTypes[0] == "const void"):
        castParamTypes = []

      cast_start = "reinterpret_cast<" + qualifier + returnType + " (" + (className + "::" if not method["static"] else "") + "*)(" + ", ".join(castParamTypes) + ")" + const + ">("
      cast_end = ")"
      
      if hasOverloads:
        paramTypes = list(map(lambda p : p["type"], method["parameters"]))
        paramTypes = list(map(lambda p : p.replace("NCollection_List", className), paramTypes))
        if not templateParam == None:
          paramTypes = list(map(lambda p : p.replace("TheItemType", templateParam), paramTypes))
          paramTypes = list(map(lambda p : p.replace("Iterator", className + "::Iterator"), paramTypes))

        functionParam = cast_start + "select_overload<" + returnType + " (" + ", ".join(paramTypes) + ")" + const + ">(&" + className + "::" + methodName + ")" + cast_end
      else:
        functionParam = cast_start + "&" + className + "::" + methodName + cast_end

      nameParam = "\"" + methodName.replace(" ", "_") + overloadPostfix + "\""
      outputFile.write(("  .function(" if not method["static"] else "  .class_function(") + nameParam + ", " + functionParam + allowRawPointers + ")" + os.linesep)
    printMessage("    done")
  printMessage("  done")

  outputFile.write(";" + os.linesep)

  if hasOverloadedConstructors:
    printMessage("  processing overloaded constructors")
    for method in publicMethods:
      if not method["name"] == constructorName:
        continue

      printMessage("    processing constructor " + method["name"])
      overloads = [row for row in publicMethods if row["name"] == method["name"]]
      hasOverloads = True if len(overloads) > 1 else False
      overloadIndex = overloads.index(method) + 1
      overloadPostfix = "" if not hasOverloads else "_" + str(overloadIndex)

      paramsFull = list(map(lambda p : p["type"] + " " + ( p["name"] if not p["name"] == "&" else "&param"), method["parameters"]))
      paramsName = list(map(lambda p : p["name"] if not p["name"] == "&" else "param", method["parameters"]))
      paramsType = list(map(lambda p : p["type"] if not p["name"] == "&" else p["type"]+"&", method["parameters"]))
      paramsFull = list(map(lambda p : p.replace("NCollection_List", className), paramsFull))
      if not templateParam == None:
        paramsFull = list(map(lambda p : p.replace("TheItemType", templateParam), paramsFull))
        paramsFull = list(map(lambda p : p.replace("Iterator", className + "::Iterator"), paramsFull))
      paramsType = list(map(lambda p : p.replace("NCollection_List", className), paramsType))
      if not templateParam == None:
        paramsType = list(map(lambda p : p.replace("TheItemType", templateParam), paramsType))
        paramsType = list(map(lambda p : p.replace("Iterator", className + "::Iterator"), paramsType))

      if len(paramsType) == 1 and (paramsType[0] == "void" or paramsType[0] == "const void"):
        paramsFull = []
        paramsName = []
        paramsType = []

      outputFile.write("  overloadedConstructor(" + className + ", " + className + overloadPostfix + ", (" + ", ".join(paramsFull) + "), (" + ", ".join(paramsName) + "), (" + ", ".join(paramsType) + "));" + os.linesep)
      printMessage("    done")
    printMessage("  done")
  printMessage("done")

try:
  inputFile = open(args.input, "r").read()
  inputFile = re.sub(r'(.*)(DEFINE_STANDARD_HANDLE[^\n]*)(.*)', r'\1\3', inputFile)
  inputFile = re.sub(r'(.*)(DEFINE_STANDARD_ALLOC[^\n]*)(.*)', r'\1\3', inputFile)
  inputFile = re.sub(r'(.*)Handle\(([^\)]+)\)(.*)', r'\1 Handle_\2 \3', inputFile)
  cppHeader = CppHeaderParser.CppHeader(inputFile, "string")
  outputFile = open(args.output, "w")
except CppHeaderParser.CppParseError as e:
  print(e)
  sys.exit(1)

for className in cppHeader.classes:
  theClass = cppHeader.classes[className]
  parseClass(theClass)

for enum in cppHeader.enums:
  printMessage("processing class " + enum["name"])
  outputFile.write("enum_<" + enum["name"] + ">(\"" + enum["name"] + "\")" + os.linesep)
  for value in enum["values"]:
    outputFile.write("  .value(\"" + value["name"] + "\", " + enum["name"] + "::" + value["name"] + ")" + os.linesep)
  outputFile.write(";" + os.linesep)
  printMessage("done")

for typedefName in cppHeader.typedefs:
  typedefType = cppHeader.typedefs[typedefName]
  templateName = re.search(r'([^<\s]*)', typedefType).group(1)
  printMessage("processing typedef " + typedefName)
  if typedefName == "TopoDS_ListIteratorOfListOfShape":
    printMessage("  WARNING: Cannot handle TopoDS_ListIteratorOfListOfShape")
    printMessage("  done")
    continue
  if typedefName == "TopTools_ListIteratorOfListOfShape":
    printMessage("  WARNING: Cannot handle TopoDS_ListIteratorOfListOfShape")
    printMessage("  done")
    continue
  if typedefType.startswith("NCollection_List"):
    templateFile = open("build/occt/src/NCollection/NCollection_List.hxx", "r").read()
    templateFile = re.sub(r'(.*)(DEFINE_STANDARD_HANDLE[^\n]*)(.*)', r'\1\3', templateFile)
    templateFile = re.sub(r'(.*)(DEFINE_STANDARD_ALLOC[^\n]*)(.*)', r'\1\3', templateFile)
    templateFile = re.sub(r'(.*)Handle\(([^\)]+)\)(.*)', r'\1 Handle_\2 \3', templateFile)
    cppHeaderTemplate = CppHeaderParser.CppHeader(templateFile, "string")

    templateParam = re.search(r'<(.*)>', typedefType).group(1)
    templateClass = cppHeaderTemplate.classes["NCollection_List"]
    parseClass(templateClass, typedefName, templateName, templateParam)
    printMessage("done")
  else:
    printMessage("  WARNING: Cannot handle " + typedefType)
    printMessage("done")
    continue

outputFile.close()