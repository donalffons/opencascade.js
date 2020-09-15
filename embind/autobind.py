#!/usr/bin/python3.8

import sys
import clang.cindex
import os
import io

def processIncludeFile(filename):
  if (
    filename.endswith(".hxx")
    and not filename.startswith("IVtk")
    and not filename.startswith("vtk")
    and not filename.startswith("Interface")
    and not filename.startswith("Xw")
    and not filename.startswith("OSD")
    and not filename.startswith("BVH")
    and not filename.startswith("WNT")
    and not filename.startswith("WNT")
    and not filename.startswith("BOPTools")
    and not filename.startswith("BOPDS")
    and not filename.startswith("IntPatch")
    and not filename.startswith("OpenGl")
    and not filename.startswith("AIS")
    and not filename.startswith("D3D")
    and not filename.startswith("Aspect")
    and not filename.startswith("Standard_Atomic")
  ):
    return True
  return False

def processClass(theClass):
  if (
    not theClass.spelling.startswith("gp") and
    not theClass.spelling.startswith("GC") and
    not theClass.spelling.startswith("BRep") and
    not theClass.spelling.startswith("Geom") and
    not theClass.spelling.startswith("Standard") and
    not theClass.spelling.startswith("Top")
  ):
    return False

  # error: undefined symbol
  if (
    theClass.spelling == "GCPnts_DistFunction" or
    theClass.spelling == "GCPnts_DistFunction2d"
  ):
    return False

  # error: no matching function for call to 'operator new'
  if theClass.spelling.startswith("BRepMeshData_"):
    return False

  # error: address of overloaded function 'XXX' does not match required type 'XXX'
  # Seems to have to do with a template method present
  if (
    theClass.spelling == "gp_VectorWithNullMagnitude" or
    theClass.spelling == "BRepTest_Objects"
  ):
    return False

  # error: incomplete type 'BOPAlgo_PaveFiller' used in type trait expression
  if theClass.spelling == "BOPAlgo_PaveFiller":
    return False

  # []-arrays are not bound properly
  if theClass.spelling == "BRepGProp_Gauss":
    return False

  # error: call to deleted constructor of 'std::__2::basic_Xstream<char>'
  if (
    theClass.spelling == "BRepFeat" or
    theClass.spelling == "GeomTools_UndefinedTypeHandler"
  ):
    return False

  # error: undefined symbol: _ZN24BRepTest_XXX
  if theClass.spelling.startswith("BRepTest"):
    return False

  # error: undefined symbol: _ZN23BRepFeat_MakeLinearForm16TransformShapeFUEi
  if theClass.spelling == "BRepFeat_MakeLinearForm":
    return False

  # error: undefined symbol: _ZN17BRepApprox_Approx7PerformEv
  if theClass.spelling == "BRepApprox_Approx":
    return False

  # error: undefined symbol: _ZNK18BRepGProp_VinertGK15GetAbsolutErrorEv
  if theClass.spelling == "BRepGProp_VinertGK":
    return False

  # error: undefined symbol: _ZNK21BRepOffset_MakeOffset10GetAnalyseEv
  if theClass.spelling == "BRepOffset_MakeOffset":
    return False

  # error: undefined symbol: _ZNK32BRepOffsetAPI_FindContigousEdges7NbEdgesEv
  if theClass.spelling == "BRepOffsetAPI_FindContigousEdges":
    return False

  # error: undefined symbol: _ZNK63BRepApprox_ResConstraintOfMyGradientbisOfTheComputeLineOfApprox5ErrorEv
  if theClass.spelling == "BRepApprox_ResConstraintOfMyGradientbisOfTheComputeLineOfApprox":
    return False

  # error: undefined symbol: _ZNK66BRepApprox_ResConstraintOfMyGradientOfTheComputeLineBezierOfApprox5ErrorEv
  if theClass.spelling == "BRepApprox_ResConstraintOfMyGradientOfTheComputeLineBezierOfApprox":
    return False

  # error: undefined symbol
  if (
    theClass.spelling.startswith("GeometryTest") or
    theClass.spelling.startswith("GeomliteTest") or
    theClass.spelling.startswith("GeomInt") or
    theClass.spelling.startswith("GeomAPI") or
    theClass.spelling.startswith("Geom2dAPI") or
    theClass.spelling.startswith("Geom2dInt") or
    theClass.spelling.startswith("GeomFill") or
    theClass.spelling.startswith("Geom2dHatch") or
    theClass.spelling.startswith("Geom2dGcc")
  ):
    return False

  # error: array 'new' cannot have initialization arguments
  if theClass.spelling == "Standard_ErrorHandler":
    return False

  # error: address of overloaded function 'Append' does not match required type 'void (const int &)'
  if theClass.spelling == "Geom_HSequenceOfBSplineSurface":
    return False

  # error: undefined symbol: _ZN24TopOpeBRepBuild_Builder114GFillSplitsPVSERK12TopoDS_ShapeRK21TopOpeBRepBuild_GTopoR23TopOpeBRepBuild_PaveSet (referenced by top-level compiled C/C++ code)
  if (
    theClass.spelling == "TopOpeBRepBuild_Builder" or
    theClass.spelling == "TopOpeBRepBuild_Builder1"
  ):
    return False
  
  return True

def processHandleTypedef(handleTypedef):
  # error: ?
  if (
    handleTypedef.spelling == "Handle_Font_BRepFont" or
    handleTypedef.spelling == "Handle_PCDM_Reader" or
    handleTypedef.spelling == "Handle_PCDM_ReadWriter_1"
  ):
    return False
  return True

def processMethod(className, child):
  # error: private copy constructor used in this function
  if className == "BRepClass3d_SolidExplorer" and child.spelling == "GetTree":
    return False
  return True

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
    castedArgResults = list(map(getSingleArgumentBinding(False), args))
    somethingChanged = any(map(lambda x: x[1], castedArgResults))
    castedArgTypes = list(map(lambda x: x[0], castedArgResults))
    if somethingChanged:
      return ["reinterpret_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
    else:
      return ["static_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
  return ["", ""]

def getSingleMethodBinding(className, method, allOverloads):
  if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.CXX_METHOD:
    if method.spelling.startswith("operator"):
      return ""
    overloadPostfix = "" if (not len(allOverloads) > 1) else "_" + str(allOverloads.index(method) + 1)

    if method.result_type.spelling.startswith("Standard_OStream"):
      return ""
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
    if not processMethod(className, child):
      continue
    allOverloads = [m for m in children if m.spelling == child.spelling]
    methodsBinding += getSingleMethodBinding(className, child, allOverloads)
  return methodsBinding

def getStandardConstructorBinding(children):
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))
  if len(constructors) == 0:
    return "    .constructor<>()" + os.linesep
  publicConstructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(publicConstructors) > 1:
    return ""
  standardConstructor = publicConstructors[0]
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
    changed = False
    if isArray:
      const = "const " if list(arg.get_tokens())[0].spelling == "const" else ""
      arrayCount = list(argChildren[1].get_tokens())[0].spelling
      argBinding = const + argChildren[0].type.spelling + " (&" + (arg.spelling if argNames else "") + ")[" + arrayCount + "]"
      changed = True
    else:
      typename = arg.type.spelling
      if arg.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE:
        tokenList = list(arg.get_tokens())
        isConstRef = len(tokenList) > 0 and tokenList[0].spelling == "const"
        if not isConstRef:
          if arg.type.spelling[-2] == "*" or "".join(arg.type.spelling.rsplit("&", 1)).strip() in ["Standard_Boolean", "Standard_Real", "Standard_Integer"]: # types that can be copied
            typename = "".join(arg.type.spelling.rsplit("&", 1))
            changed = True
          else:
            if isConstructor:
              typename = arg.type.spelling
              changed = True
            else:
              typename = "const " + arg.type.spelling
              changed = True
      argBinding = typename + ((" " + arg.spelling) if argNames else "")
    return [argBinding, changed]
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

    args = ", ".join(list(map(lambda x: getSingleArgumentBinding(True, True)(x)[0], list(constructor.get_arguments()))))
    argNames = ", ".join(list(map(lambda x: x.spelling, list(constructor.get_arguments()))))
    argTypes = ", ".join(list(map(lambda x: getSingleArgumentBinding(False, True)(x)[0], list(constructor.get_arguments()))))

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

def getPureVirtualMethods(theClass):
  return list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_METHOD and x.is_pure_virtual_method(), list(theClass.get_children())))

def isAbstractClass(theClass, allClasses):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, list(theClass.get_children())))
  baseClasses = list(map(lambda y: next((x for x in allClasses if x.spelling == y.type.spelling)), baseSpec))

  pureVirtualMethods = getPureVirtualMethods(theClass)
  if len(pureVirtualMethods) > 0:
    return True
  
  pvmsInBaseClasses = list(map(lambda x: getPureVirtualMethods(x), baseClasses))

  numPureVirtualMethods = 0
  numImplementedPureVirtualMethods = 0
  for bc in pvmsInBaseClasses:
    for bcPvm in bc:
      numPureVirtualMethods += 1
      if bcPvm.spelling in list(map(lambda x: x.spelling, list(theClass.get_children()))):
        numImplementedPureVirtualMethods += 1
  
  return numPureVirtualMethods > numImplementedPureVirtualMethods

def generateHandleTypeBindings(outputFile, children):
  print("generating bindings for handle types...")

  handleTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("opencascade::handle") and x.spelling.startswith("Handle_"), children))
  filteredHandleTypedefs = []
  for child in handleTypedefs:
    if not any(x.underlying_typedef_type.spelling == child.underlying_typedef_type.spelling for x in filteredHandleTypedefs):
      filteredHandleTypedefs.append(child)

  for handleTypedef in handleTypedefs:
    if not processHandleTypedef(handleTypedef):
      continue

    handleName = handleTypedef.spelling
    targetType = handleTypedef.underlying_typedef_type.get_template_argument_type(0).spelling
    outputFile.write("  class_<" + handleName + ">(\"" + handleName + "\")" + os.linesep)
    outputFile.write("    .function(\"Nullify\", &" + handleName + "::Nullify)" + os.linesep)
    outputFile.write("    .function(\"IsNull\", &" + handleName + "::IsNull)" + os.linesep)
    outputFile.write("    .function(\"reset\", &" + handleName + "::reset, allow_raw_pointers())" + os.linesep)
    outputFile.write("    .function(\"operator_assign_1\", select_overload<" + handleName + "&(const " + handleName + "&)>(&" + handleName + "::operator=))" + os.linesep)
    outputFile.write("    .function(\"operator_assign_2\", select_overload<" + handleName + "&(const " + targetType + "*)>(&" + handleName + "::operator=), allow_raw_pointers())" + os.linesep)
    outputFile.write("    .function(\"operator_assign_3\", select_overload<" + handleName + "&(" + handleName + "&&)>(&" + handleName + "::operator=))" + os.linesep)
    outputFile.write("    .function(\"get\", select_overload<" + targetType + "*()const>(&" + handleName + "::get), allow_raw_pointers())" + os.linesep)
    outputFile.write("    .function(\"operator_dereference\", &" + handleName + "::operator->, allow_raw_pointers())" + os.linesep)
    outputFile.write("    .function(\"operator_bool\", &" + handleName + "::operator bool)" + os.linesep)
    outputFile.write("  ;" + os.linesep)

    class Object(object):
      def get_arguments(self):
        return self.arguments
      def get_tokens(self):
        return self.tokens
      def get_children(self):
        return self.children

    oc1 = Object()
    oc1.spelling = handleName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = Object()
    oc2.spelling = handleName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = Object()
    oc2arg1type.spelling = "const " + targetType + "*"
    oc2arg1type.kind = None
    oc2arg1 = Object()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "thePtr"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = Object()
    oc3.spelling = handleName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = Object()
    oc3arg1type.spelling = "const " + handleName + "&"
    oc3arg1type.kind = None
    oc3arg1 = Object()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theHandle"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    outputFile.write(getOverloadedConstructorsBinding(handleName, [
      oc1, oc2, oc3
    ]))

def generateClassBindings(newChildren, outputFile):
  print("generating bindings for classes...")
  epilog = ""
  for o in newChildren:
    if o.kind == clang.cindex.CursorKind.CLASS_DECL:
      theClass = o

      if not processClass(theClass):
        continue

      try:
        outputFile.write(getClassBinding(theClass.spelling, list(theClass.get_children())))
        abstract = isAbstractClass(theClass, filter(lambda x: x.kind == clang.cindex.CursorKind.CLASS_DECL, newChildren))
        if not abstract:
          outputFile.write(getStandardConstructorBinding(list(theClass.get_children())))
        outputFile.write(getMethodsBinding(theClass.spelling, list(theClass.get_children())))
        outputFile.write("  ;" + os.linesep)
        if not abstract:
          outputFile.write(getOverloadedConstructorsBinding(theClass.spelling, list(theClass.get_children())))
        epilog += getEpilog(theClass)
      except Exception as e:
        print(str(e))
        continue
  return epilog

def generateEnumBindings(newChildren, outputFile):
  print("generating bindings for enums...")
  for enum in newChildren:
    if enum.kind == clang.cindex.CursorKind.ENUM_DECL:
      outputFile.write("  enum_<" + enum.spelling + ">(\"" + enum.spelling + "\")" + os.linesep)
      for enumChild in list(enum.get_children()):
        outputFile.write("    .value(\"" + enumChild.spelling + "\", " + enum.spelling + "::" + enumChild.spelling + ")" + os.linesep)
      outputFile.write("  ;" + os.linesep)

def main():
  occtFiles = []
  includePaths = []
  for dirpath, dirnames, filenames in os.walk("../build/occt/src"):
    includePaths.append(str(dirpath))
    for item in filenames:
      if processIncludeFile(item):
        occtFiles.append(str(os.path.join(dirpath, item)))

  includePathArgs = [
    "-I/usr/lib/gcc/x86_64-linux-gnu/7/include-fixed/",
    "-isystem", "/usr/lib/gcc/x86_64-linux-gnu/7/include-fixed/",
    "-I/clang/clang_10/include/c++/v1/",
    "-isystem", "/usr/lib/gcc/x86_64-linux-gnu/7/include/",
    ] + list(map(lambda x: "-I" + x, includePaths))
  includeDirectives = list(sorted(occtFiles))
  includeDirectives = os.linesep.join(map(lambda x: "#include \"" + os.path.basename(x) + "\"", includeDirectives))

  libFolder = "/clang/clang_10/lib"
  clang.cindex.Config.library_path = libFolder
  index = clang.cindex.Index.create()
  tu = index.parse("main.h", ["-x", "c++", "-ferror-limit=1000000", "-stdlib=libc++"] + includePathArgs, [["main.h", includeDirectives]])

  if len(list(tu.diagnostics)) > 0:
    print("Diagnostic Messages:")
    for d in tu.diagnostics:
      print("  " + d.format())

  print("filtering, sorting...")

  children = list(tu.cursor.get_children())
  newChildren = []
  for child in children:
    if len(list(child.get_children())) == 0:
      continue
    if not any(x.spelling == child.spelling for x in newChildren):
      newChildren.append(child)
  newChildren = sorted(newChildren, key=lambda x: x.spelling)

  print("creating bindings...")
  outputFile = open("../build/bindings.cpp", "w")
  outputFile.write(includeDirectives + os.linesep)
  preamble = '''
#include <emscripten/bind.h>
using namespace emscripten;
  '''
  outputFile.write(preamble + os.linesep)
  outputFile.write("EMSCRIPTEN_BINDINGS(opencascadejs) {" + os.linesep)
  outputFile.write("#include \"../embind/manualBindings.h\"" + os.linesep)

  epilog = generateClassBindings(newChildren, outputFile)
  generateHandleTypeBindings(outputFile, children)
  generateEnumBindings(newChildren, outputFile)

  outputFile.write("}" + os.linesep + os.linesep)
  outputFile.write(epilog)

main()
