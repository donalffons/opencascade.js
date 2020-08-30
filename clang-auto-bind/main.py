import sys
import clang.cindex
import os
import io

blackList = [
  # Multiple base classes
  "Poly_HArray1OfTriangle",
  "ChFiDS_HData",
  "TColStd_HArray1OfInteger",
  "TShort_HSequenceOfShortReal",
  "Storage_HSeqOfRoot",
  "TColStd_HSequenceOfAsciiString",
  "StdLPersistent_HArray1OfPersistent",
  "TColgp_HArray1OfPnt",
  "TColgp_HSequenceOfXYZ",
  "TColgp_HSequenceOfPnt",
  "TColgp_HSequenceOfDir",
  "TColgp_HSequenceOfVec",
  "Geom_HSequenceOfBSplineSurface",
  "TColStd_HSequenceOfInteger",
  "IMeshData_Face",
  "IMeshData_Edge",
  "IMeshData_Wire",
  "TColgp_HSequenceOfXY",
  "Contap_TheHSequenceOfPoint",
  "TColStd_HSequenceOfHExtendedString",
  "TColStd_HArray1OfBoolean",
  "TColStd_HSequenceOfHAsciiString",
  "TColStd_HSequenceOfReal",
  "TColGeom_HSequenceOfCurve",
  "TColGeom_HSequenceOfBoundedCurve",
  "TColGeom2d_HSequenceOfBoundedCurve",
  "TColGeom2d_HSequenceOfCurve",
  "TColStd_HSequenceOfTransient",
  "Transfer_HSequenceOfFinder",
  "Interface_HSequenceOfCheck",
  "StepElement_HSequenceOfElementMaterial",
  "StepFEA_HSequenceOfElementGeometricRelationship",
  "StepFEA_HSequenceOfElementRepresentation",
  "StepElement_HSequenceOfCurveElementSectionDefinition",
  "GeomFill_HSequenceOfAx2",
  "TColStd_HArray1OfAsciiString",
  "TopTools_HSequenceOfShape",
  "TColStd_HSequenceOfExtendedString",
  "TColStd_HArray1OfCharacter",
  "TColQuantity_HArray1OfLength",
  "TColQuantity_HArray2OfLength",
  "Graphic3d_MediaTextureSet",
  "ViewerTest_EventManager",
]

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
  if len(list(child.get_children())) == 0:
    continue
  if not any(x.spelling == child.spelling for x in newChildren):
    newChildren.append(child)

print("creating bindings...")
outputFile = open("./bindings.cpp", "w")

def getClassBinding(className, children):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(baseSpec) > 1:
    raise Exception("cannot handle multiple base classes (" + className + ")")

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
    allOverloads = [m for m in children if m.spelling == child.spelling and m.access_specifier == clang.cindex.AccessSpecifier.PUBLIC]
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
  return "  .constructor<" + argTypes + ">();" + os.linesep

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
    args = ", ".join(list(map(lambda x: x.type.spelling + " " + x.spelling, list(constructor.get_arguments()))))
    argNames = ", ".join(list(map(lambda x: x.spelling, list(constructor.get_arguments()))))
    argTypes = ", ".join(list(map(lambda x: x.type.spelling, list(constructor.get_arguments()))))

    constructorBindings += "  struct " + constructor.spelling + overloadPostfix + " : public " + constructor.spelling + " {" + os.linesep
    constructorBindings += "    " + constructor.spelling + overloadPostfix + "(" + args + ") : " + constructor.spelling + "(" + argNames + ") {}" + os.linesep
    constructorBindings += "  };" + os.linesep
    constructorBindings += "  class_<" + constructor.spelling + overloadPostfix + ">(\"" + constructor.spelling + overloadPostfix + "\")" + os.linesep
    constructorBindings += "    .constructor<" + argTypes + ">()" + os.linesep
    constructorBindings += "  ;" + os.linesep
  return constructorBindings

for o in newChildren:
  if o.kind == clang.cindex.CursorKind.CLASS_DECL and not o.spelling in blackList:
    theClass = o

    outputFile.write(getClassBinding(theClass.spelling, list(theClass.get_children())))
    outputFile.write(getStandardConstructorBinding(list(theClass.get_children())))
    outputFile.write(getMethodsBinding(theClass.spelling, list(theClass.get_children())))
    outputFile.write(";" + os.linesep)
    outputFile.write(getOverloadedConstructorsBinding(theClass.spelling, list(theClass.get_children())))
