#!/usr/bin/python3.8

import CppHeaderParser
import sys
import argparse
import os
parser = argparse.ArgumentParser(description='Convert C++ Header files to Emcsripten Embind code.')
parser.add_argument('input', metavar='input', help='C++ input file')
parser.add_argument('output', metavar='output', help='File with Embind code to produce')

args = parser.parse_args()

try:
  cppHeader = CppHeaderParser.CppHeader(args.input)
  outputFile = open(args.output, "w")
except CppHeaderParser.CppParseError as e:
  print(e)
  sys.exit(1)

for className in cppHeader.classes:
  print("processing class " + className)
  outputFile.write("class_<" + className + ">(\"" + className + "\")" + os.linesep)
  publicMethods = cppHeader.classes[className]["methods"]["public"]
  print("  processing methods")
  for method in publicMethods:
    if method["constructor"]:
      continue

    print("    processing method " + method["name"])
    if method["template"]:
      print("    WARNING: Cannot handle template methods")
      print("    done")
      continue

    overloads = [row for row in publicMethods if row["name"] == method["name"]]
    hasOverloads = True if len(overloads) > 1 else False
    overloadIndex = overloads.index(method) + 1
    overloadPostfix = "" if not hasOverloads else "_" + str(overloadIndex)

    returnType = method["rtnType"] if not method["rtnType"].startswith("static") else method["rtnType"][6:]
    returnType = returnType.strip()
    returnType = returnType if not returnType.startswith("inline") else returnType[6:]
    returnType = returnType.strip()

    allowRawPointers = ", allow_raw_pointers()" if method["returns_pointer"] else ""

    const = " const" if method["const"] else ""
    castParamTypes = list(map(lambda p : p["type"] if p["constant"] else "const " + p["type"], method["parameters"]))
    cast_start = "reinterpret_cast<" + returnType + " (" + className + "::*)(" + ", ".join(castParamTypes) + ")" + const + ">("
    cast_end = ")"

    if hasOverloads:
      paramTypes = list(map(lambda p : p["type"], method["parameters"]))

      functionParam = cast_start + "select_overload<" + returnType + " (" + ", ".join(paramTypes) + ")" + const + ">(&" + className + "::" + method["name"] + ")" + cast_end
    else:
      functionParam = cast_start + "&" + className + "::" + method["name"] + cast_end

    nameParam = "\"" + method["name"] + overloadPostfix + "\""
    outputFile.write("  .function(" + nameParam + ", " + functionParam + allowRawPointers + ")" + os.linesep)
    print("    done")
  print("  done")

  outputFile.write(";" + os.linesep)

  print("  processing constructors")
  for method in publicMethods:
    if not method["constructor"]:
      continue

    print("    processing constructor " + method["name"])
    overloads = [row for row in publicMethods if row["name"] == method["name"]]
    hasOverloads = True if len(overloads) > 1 else False
    overloadIndex = overloads.index(method) + 1
    overloadPostfix = "" if not hasOverloads else "_" + str(overloadIndex)

    paramsFull = list(map(lambda p : p["type"] + " " + p["name"], method["parameters"]))
    paramsName = list(map(lambda p : p["name"], method["parameters"]))
    paramsType = list(map(lambda p : p["type"], method["parameters"]))

    outputFile.write("  overloadedConstructor(" + className + ", " + className + overloadPostfix + ", (" + ", ".join(paramsFull) + "), (" + ", ".join(paramsName) + "), (" + ", ".join(paramsType) + "));" + os.linesep)
    print("    done")
  print("  done")
  print("done")

outputFile.close()