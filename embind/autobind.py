#!/usr/bin/python3.8

import sys
import clang.cindex
import os
import io

occtFiles = []
includePaths = []
for dirpath, dirnames, filenames in os.walk("../build/occt/src"):
  includePaths.append(str(dirpath))
  for item in filenames:
    if (
      item.endswith(".hxx")
      and not item.startswith("IVtk")
      and not item.startswith("vtk")
      and not item.startswith("Interface")
      and not item.startswith("Xw")
      and not item.startswith("OSD")
      and not item.startswith("BVH")
      and not item.startswith("WNT")
      and not item.startswith("WNT")
      and not item.startswith("BOPTools")
      and not item.startswith("BOPDS")
      and not item.startswith("IntPatch")
      and not item.startswith("OpenGl")
      and not item.startswith("AIS")
      and not item.startswith("D3D")
      and not item.startswith("Aspect")
      and not item.startswith("Standard_Atomic")
    ):
      occtFiles.append(str(os.path.join(dirpath, item)))

includePathArgs = list(map(lambda x: "-I" + x, includePaths)) + ["-I/usr/include/linux", "-I/usr/include/c++/7/tr1", "-I/emscripten/upstream/emscripten/system/include"]
includeDirectives = os.linesep.join(map(lambda x: "#include \"" + os.path.basename(x) + "\"", occtFiles))

clang.cindex.Config.library_path = "/clang/clang_10/lib"
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
outputFile = open("../build/bindings.cpp", "w")

def getClassBinding(className, children):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(baseSpec) > 1:
    raise Exception("cannot handle multiple base classes (" + className + ")")

  if len(baseSpec) > 0:
    baseClass = ", base<" + baseSpec[0].type.spelling + ">"
  else:
    baseClass = ""

  return "  class_<" + className + baseClass + ">(\"" + className + "\")" + os.linesep

def getCastBindings(className, method):
  args = list(method.get_arguments())
  needCast = any(x.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE for x in args)
  returnType = method.result_type.spelling
  const = "const" if method.is_const_method() else ""
  classQualifier = ( className + "::" if not method.is_static_method() else "" ) + "*"
  if needCast:
    castedArgTypes = list(map(getSingleArgumentBinding(False), args))
    return ["reinterpret_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
  return ["", ""]

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
      functor = "(" + returnType + " (" + ((className + "::") if not method.is_static_method() else "") + "*)(" + args + ") " + const + ") &" + className + "::" + method.spelling

    if method.is_static_method():
      functionCommand = "class_function"
    else:
      functionCommand = "function"

    cast = getCastBindings(className, method)
    return "    ." + functionCommand + "(\"" + method.spelling + overloadPostfix + "\", " + cast[0] + functor + cast[1] + ", allow_raw_pointers())" + os.linesep
  return ""

def getMethodsBinding(className, children):
  methodsBinding = ""
  for child in children:
    # error: private copy constructor used in this function
    if className == "BRepClass3d_SolidExplorer" and child.spelling == "GetTree":
      continue
    allOverloads = [m for m in children if m.spelling == child.spelling]
    methodsBinding += getSingleMethodBinding(className, child, allOverloads)
  return methodsBinding

def getStandardConstructorBinding(children):
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if not len(constructors) == 1:
    return ""
  standardConstructor = constructors[0]
  if not standardConstructor:
    return ""
  argTypes = ", ".join(list(map(lambda x: x.type.spelling, list(standardConstructor.get_arguments()))))
  return "    .constructor<" + argTypes + ">()" + os.linesep

def getSingleArgumentBinding(argNames = True, isConstructor = False):
  def f(arg):
    argChildren = list(arg.get_children())
    argBinding = ""
    hasDefaultValue = any(x.spelling == "=" for x in list(arg.get_tokens()))
    isArray = not hasDefaultValue and len(argChildren) > 1 and argChildren[1].kind == clang.cindex.CursorKind.INTEGER_LITERAL
    if isArray:
      const = "const " if list(arg.get_tokens())[0].spelling == "const" else ""
      arrayCount = list(argChildren[1].get_tokens())[0].spelling
      argBinding = const + argChildren[0].type.spelling + " (&" + (arg.spelling if argNames else "") + ")[" + arrayCount + "]"
    else:
      typename = arg.type.spelling
      if arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
        tokenList = list(arg.get_tokens())
        isConstRef = len(tokenList) > 0 and tokenList[0].spelling == "const"
        if not isConstRef:
          if arg.type.spelling[-2] == "*" or "".join(arg.type.spelling.rsplit("&", 1)).strip() in ["Standard_Boolean", "Standard_Real", "Standard_Integer"]: # types that can be copied
            typename = "".join(arg.type.spelling.rsplit("&", 1))
          else:
            if isConstructor:
              typename = arg.type.spelling
            else:
              typename = "const " + arg.type.spelling
      argBinding = typename + ((" " + arg.spelling) if argNames else "")
    return argBinding
  return f

def getOverloadedConstructorsBinding(className, children):
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(constructors) == 1:
    return ""
  constructorBindings = ""
  allOverloads = [m for m in children if m.kind == clang.cindex.CursorKind.CONSTRUCTOR and m.access_specifier == clang.cindex.AccessSpecifier.PUBLIC]
  if len(allOverloads) == 1:
    raise Exception("Something weird happened")
  for constructor in constructors:
    overloadPostfix = "" if (not len(allOverloads) > 1) else "_" + str(allOverloads.index(constructor) + 1)

    args = ", ".join(list(map(getSingleArgumentBinding(True, True), list(constructor.get_arguments()))))
    argNames = ", ".join(list(map(lambda x: x.spelling, list(constructor.get_arguments()))))
    argTypes = ", ".join(list(map(getSingleArgumentBinding(False, True), list(constructor.get_arguments()))))

    constructorBindings += "    struct " + constructor.spelling + overloadPostfix + " : public " + constructor.spelling + " {" + os.linesep
    constructorBindings += "      " + constructor.spelling + overloadPostfix + "(" + args + ") : " + constructor.spelling + "(" + argNames + ") {}" + os.linesep
    constructorBindings += "    };" + os.linesep
    constructorBindings += "    class_<" + constructor.spelling + overloadPostfix + ", base<" + constructor.spelling + ">>(\"" + constructor.spelling + overloadPostfix + "\")" + os.linesep
    constructorBindings += "      .constructor<" + argTypes + ">()" + os.linesep
    constructorBindings += "    ;" + os.linesep
  return constructorBindings

def getEpilog(theClass):
  nonPublicDestructor = any(x.kind == clang.cindex.CursorKind.DESTRUCTOR and not x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC for x in list(theClass.get_children()))
  if nonPublicDestructor:
    return "namespace emscripten { namespace internal { template<> void raw_destructor<" + theClass.spelling + ">(" + theClass.spelling + "* ptr) { /* do nothing */ } } }" + os.linesep
  return ""

def isAbstractClass(theClass, allClasses):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, list(theClass.get_children())))
  baseClasses = list(map(lambda y: next((x for x in allClasses if x.spelling == y.type.spelling)), baseSpec))

  return any(child.kind == clang.cindex.CursorKind.CXX_METHOD and child.is_pure_virtual_method() for child in list(theClass.get_children())) or any(isAbstractClass(bc, allClasses) for bc in baseClasses)

outputFile.write(includeDirectives + os.linesep)
preamble = '''
#include <emscripten/bind.h>
using namespace emscripten;
'''
outputFile.write(preamble + os.linesep)
outputFile.write("EMSCRIPTEN_BINDINGS(opencascadejs) {" + os.linesep)
epilog = ""

for o in newChildren:
  if o.kind == clang.cindex.CursorKind.CLASS_DECL:
    theClass = o

    if (
      not theClass.spelling.startswith("gp") and
      not theClass.spelling.startswith("GC") and
      not theClass.spelling.startswith("BRep")
    ):
      continue

    # error: undefined symbol
    if (
      theClass.spelling == "GCPnts_DistFunction" or
      theClass.spelling == "GCPnts_DistFunction2d"
    ):
      continue

    # error: no matching function for call to 'operator new'
    if theClass.spelling.startswith("BRepMeshData_"):
      continue

    # error: address of overloaded function 'XXX' does not match required type 'XXX'
    # Seems to have to do with a template method present
    if (
      theClass.spelling == "gp_VectorWithNullMagnitude" or
      theClass.spelling == "BRepTest_Objects"
    ):
      continue

    # error: incomplete type 'BOPAlgo_PaveFiller' used in type trait expression
    if theClass.spelling == "BOPAlgo_PaveFiller":
      continue

    # []-arrays are not bound properly
    if theClass.spelling == "BRepGProp_Gauss":
      continue

    # try:
    outputFile.write(getClassBinding(theClass.spelling, list(theClass.get_children())))
    abstract = isAbstractClass(theClass, filter(lambda x: x.kind == clang.cindex.CursorKind.CLASS_DECL, newChildren))
    if not abstract:
      outputFile.write(getStandardConstructorBinding(list(theClass.get_children())))
    outputFile.write(getMethodsBinding(theClass.spelling, list(theClass.get_children())))
    outputFile.write("  ;" + os.linesep)
    if not abstract:
      outputFile.write(getOverloadedConstructorsBinding(theClass.spelling, list(theClass.get_children())))
    epilog += getEpilog(theClass)
    # except Exception as e:
    #   print(str(e))
    #   continue

outputFile.write("}" + os.linesep + os.linesep)
outputFile.write(epilog + os.linesep)
