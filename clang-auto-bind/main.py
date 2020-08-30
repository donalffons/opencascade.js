import sys
import clang.cindex
import os
import io

occtFiles = []
includePaths = []
for dirpath, dirnames, filenames in os.walk("../build/occt/src"):
  includePaths.append(str(dirpath))
  for item in filenames:
    if item.endswith(".hxx") and not item.startswith("IVtkDraw") and item.startswith("gp_Pnt"):
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
  if len(list(child.get_children())) == 0:
    continue
  if not any(x.spelling == child.spelling for x in newChildren):
    newChildren.append(child)

print("creating bindings...")
outputFile = open("./bindings.cpp", "w")

def getClassBinding(className, children):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER, children))
  if len(baseSpec) > 1:
    raise "cannot handle multiple base classes"
  if len(baseSpec) > 0 and not baseSpec[0].access_specifier == clang.cindex.AccessSpecifier.PUBLIC:
    raise "cannot handle non-public base classes"

  if len(baseSpec) > 0:
    baseClass = ", base<" + baseSpec[0].type.spelling + ">"
  else:
    baseClass = ""

  return "class_<" + className + baseClass + ">(\"" + className + "\")" + os.linesep

def getSingleMethodBinding(className, method, allOverloads):
  if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD:
    if method.spelling.startswith("operator"):
      return ""
    overloadPostfix = "" if (not len(allOverloads) > 1) else "_" + str(allOverloads.index(method) + 1)

    if len(allOverloads) == 1:
      functor = "&" + className + "::" + method.spelling
    else:
      returnType = method.result_type.spelling
      const = "const" if method.is_const_method() else ""
      args = ", ".join(list(map(lambda x: x.type.spelling + " " + x.spelling, list(method.get_arguments()))))
      functor = "select_overload<" + returnType + " (" + args + ") " + const + ">(&" + className + "::" + method.spelling + ")"

    return "  .function(\"" + method.spelling + overloadPostfix + "\", " + functor + ")" + os.linesep
  return ""

def getMethodsBinding(className, children):
  methodsBinding = ""
  for child in children:
    allOverloads = [m for m in children if m.spelling == child.spelling]
    methodsBinding += getSingleMethodBinding(className, child, allOverloads)
  return methodsBinding

def getDefaultConstructorBinding(children):
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR,children))
  defaultConstructor = next((x for x in constructors if x.is_default_constructor()), None)
  if not defaultConstructor or not defaultConstructor.access_specifier == clang.cindex.AccessSpecifier.PUBLIC:
    return ""
  return "  .constructor<>();" + os.linesep
  
for o in newChildren:
  if o.kind == clang.cindex.CursorKind.CLASS_DECL and o.spelling == "gp_Pnt":
    theClass = o

    # print(theClass.spelling)

    outputFile.write(getClassBinding(theClass.spelling, list(theClass.get_children())))
    outputFile.write(getDefaultConstructorBinding(list(theClass.get_children())))
    outputFile.write(getMethodsBinding(theClass.spelling, list(theClass.get_children())))

    outputFile.write(";" + os.linesep)
