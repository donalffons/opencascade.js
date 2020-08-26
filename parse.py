#!/usr/bin/python
import CppHeaderParser
try:
  cppHeader = CppHeaderParser.CppHeader("./build/occt/src/gp/gp_Pnt.hxx")
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

    nameParam = "\"" + method["name"] + overloadPostfix + "\""
    if hasOverloads:
      const = " const" if method["const"] else ""
      paramTypes = list(map(lambda p : p["type"], method["parameters"]))

      needCast = False
      for param in method["parameters"]:
        if param["reference"] and not param["constant"]:
          needCast = True
      if needCast:
        castParamTypes = list(map(lambda p : p["type"] if p["constant"] else "const " + p["type"], method["parameters"]))
        cast_start = "reinterpret_cast<" + method["rtnType"] + " (" + className + "::*)(" + ", ".join(castParamTypes) + ")" + const + ">("
        cast_end = ")"
      else:
        cast_start = ""
        cast_end = ""

      functionParam = cast_start + "select_overload<" + method["rtnType"] + " (" + ", ".join(paramTypes) + ")" + const + ">(&" + className + "::" + method["name"] + ")" + cast_end
    else:
      functionParam = "&" + className + "::" + method["name"]

    print("  .function(" + nameParam + ", " + functionParam + ")")
  print(";")

for className in cppHeader.classes:
  publicMethods = cppHeader.classes[className]["methods"]["public"]
  for method in publicMethods:
    if not method["constructor"]:
      continue

    overloads = [row for row in publicMethods if row["name"] == method["name"]]
    hasOverloads = True if len(overloads) > 1 else False
    overloadIndex = overloads.index(method) + 1
    overloadPostfix = "" if not hasOverloads else "_" + str(overloadIndex)

    paramsFull = list(map(lambda p : p["type"] + " " + p["name"], method["parameters"]))
    paramsName = list(map(lambda p : p["name"], method["parameters"]))
    paramsType = list(map(lambda p : p["type"], method["parameters"]))

    print("  overloadedConstructor(" + className + ", " + className + overloadPostfix + ", (" + ", ".join(paramsFull) + "), (" + ", ".join(paramsName) + "), (" + ", ".join(paramsType) + "))")
