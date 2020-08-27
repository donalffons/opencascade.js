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

try:
  inputFile = open(args.input, "r").read()
  inputFile = re.sub(r'(.*)(DEFINE_STANDARD_HANDLE[^\n]*)(.*)', r'\1\3', inputFile)
  inputFile = re.sub(r'(.*)(DEFINE_STANDARD_ALLOC[^\n]*)(.*)', r'\1\3', inputFile)
  cppHeader = CppHeaderParser.CppHeader(inputFile, "string")
  outputFile = open(args.output, "w")
except CppHeaderParser.CppParseError as e:
  print(e)
  sys.exit(1)

for className in cppHeader.classes:
  theClass = cppHeader.classes[className]
  printMessage("processing class " + className)

  if "template" in theClass:
    printMessage("  WARNING: Cannot handle template classes")
    printMessage("done")
    continue

  if len(theClass["inherits"]) > 0:
    baseClass = ", base<" + theClass["inherits"][0]["class"] + ">"
  else:
    baseClass = ""
  outputFile.write("class_<" + className + baseClass + ">(\"" + className + "\")" + os.linesep)
  publicMethods = theClass["methods"]["public"]

  constructors = [row for row in publicMethods if row["name"] == className]
  hasOverloadedConstructors = True if len(constructors) > 1 else False

  printMessage("  processing methods")
  for method in publicMethods:
    if hasOverloadedConstructors and method["name"] == className:
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
        printMessage("  done")
        continue
      if methodName == "Standard_DEPRECATED":
        printMessage("    WARNING: Ignoring...")
        printMessage("    done")
        continue

      if method["template"]:
        printMessage("    WARNING: Cannot handle template methods")
        printMessage("    done")
        continue
      if method["name"] == "Handle":
        printMessage("    WARNING: Cannot handle \"Handle(...)\" return type")
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
      castParamTypes = list(map(lambda p : p["type"] if p["constant"] else "const " + p["type"], method["parameters"]))
      cast_start = "reinterpret_cast<" + returnType + " (" + className + "::*)(" + ", ".join(castParamTypes) + ")" + const + ">("
      cast_end = ")"
      
      if hasOverloads:
        paramTypes = list(map(lambda p : p["type"], method["parameters"]))

        functionParam = cast_start + "select_overload<" + returnType + " (" + ", ".join(paramTypes) + ")" + const + ">(&" + className + "::" + methodName + ")" + cast_end
      else:
        functionParam = cast_start + "&" + className + "::" + methodName + cast_end

      nameParam = "\"" + methodName.replace(" ", "_") + overloadPostfix + "\""
      outputFile.write("  .function(" + nameParam + ", " + functionParam + allowRawPointers + ")" + os.linesep)
    printMessage("    done")
  printMessage("  done")

  outputFile.write(";" + os.linesep)

  if hasOverloadedConstructors:
    printMessage("  processing overloaded constructors")
    for method in publicMethods:
      if not method["name"] == className:
        continue

      printMessage("    processing constructor " + method["name"])
      overloads = [row for row in publicMethods if row["name"] == method["name"]]
      hasOverloads = True if len(overloads) > 1 else False
      overloadIndex = overloads.index(method) + 1
      overloadPostfix = "" if not hasOverloads else "_" + str(overloadIndex)

      paramsFull = list(map(lambda p : p["type"] + " " + p["name"], method["parameters"]))
      paramsName = list(map(lambda p : p["name"], method["parameters"]))
      paramsType = list(map(lambda p : p["type"], method["parameters"]))

      outputFile.write("  overloadedConstructor(" + className + ", " + className + overloadPostfix + ", (" + ", ".join(paramsFull) + "), (" + ", ".join(paramsName) + "), (" + ", ".join(paramsType) + "));" + os.linesep)
      printMessage("    done")
    printMessage("  done")
  printMessage("done")

for enum in cppHeader.enums:
  printMessage("processing class " + enum["name"])
  outputFile.write("enum_<" + enum["name"] + ">(\"" + enum["name"] + "\")" + os.linesep)
  for value in enum["values"]:
    outputFile.write("  .value(\"" + value["name"] + "\", " + enum["name"] + "::" + value["name"] + ")" + os.linesep)
  outputFile.write(";" + os.linesep)
  printMessage("done")

outputFile.close()