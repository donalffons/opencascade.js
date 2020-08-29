import sys
import clang.cindex
import os
import io

occtFiles = []
includePaths = []
for dirpath, dirnames, filenames in os.walk("../build/occt/src"):
  includePaths.append(str(dirpath))
  for item in filenames:
    if item.endswith(".hxx") and not item.startswith("IVtkDraw"):
      occtFiles.append(str(os.path.join(dirpath, item)))

includePathArgs = list(map(lambda x: "-I" + x, includePaths)) + ["-I/usr/include/linux", "-I/usr/include/c++/7/tr1", "-I/emscripten/upstream/emscripten/system/include"]
includeDirectives = "\n".join(map(lambda x: "#include \"" + x + "\"", occtFiles))

clang.cindex.Config.library_path = "../clang_10/lib"
index = clang.cindex.Index.create()
tu = index.parse("main.h", ["-x", "c++", "-ferror-limit=10000"] + includePathArgs, [["main.h", includeDirectives]])

# if len(list(tu.diagnostics)) > 0:
#   print("Diagnostic Messages:")
#   for d in tu.diagnostics:
#     print("  " + d.format())

print("filtering...")

children = list(tu.cursor.get_children())
newChildren = []
for child in children:
  if not any(x.spelling == child.spelling for x in newChildren):
    newChildren.append(child)

print("binding...")

for o in newChildren:
  if o.kind == clang.cindex.CursorKind.CLASS_DECL and o.spelling == "BRepLib":
    print(o.spelling)
    for o2 in o.get_children():
      if o2.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and o2.kind == clang.cindex.CursorKind.CXX_METHOD:
        args = list(map(lambda x: x.type.spelling + " " + x.spelling, list(o2.get_arguments())))
        print(o2.result_type.spelling + " " + o2.spelling + "(" + ", ".join(args) + ")")
