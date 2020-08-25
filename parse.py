#!/usr/bin/python
import CppHeaderParser
try:
  cppHeader = CppHeaderParser.CppHeader("/home/sebastian/Projects/fiverr/2020-02-10_maxmanufacture_-_CAD_viewer/project/opencascade.js/build/occt/src/gp/gp_Pnt.hxx")
except CppHeaderParser.CppParseError as e:
  print(e)
  sys.exit(1)

for className in cppHeader.classes:
  print("class_<" + className + ">(\"" + className + "\")")
  publicMethods = cppHeader.classes[className]["methods"]["public"]
  for method in publicMethods:
    if method["constructor"]:
      continue

    overloads = [row for row in publicMethods if row["name"] == method["name"]]
    hasOverloads = True if len(overloads) > 1 else False
    overloadIndex = overloads.index(method) + 1

    overloadPostfix = "" if not hasOverloads else "_" + str(overloadIndex)

    # print(method.keys())

    nameParam = "\"" + method["name"] + overloadPostfix + "\""
    if hasOverloads:
      const = " const" if method["const"] else ""
      paramTypes = list(map(lambda p : p["type"], method["parameters"]))
      functionParam = "select_overload<" + method["rtnType"] + " (" + ", ".join(paramTypes) + ")" + const + ">(&" + className + "::" + method["name"] + ")"
    else:
      functionParam = "&" + className + "::" + method["name"]

    print("  .function(" + nameParam + ", " + functionParam + ")")
  print(";")
