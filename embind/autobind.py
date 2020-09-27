import sys
import clang.cindex
import os
import io

numExportedClasses = 0
numIgnoredClasses = 0

# This exception indicates that a certain class has multiple base classes. This is not (easily) possible to represent in JavaScript
class MultipleBaseClassException(Exception):
  pass

# processIncludeFile
# processClass
# processMethod
# processHandleTypedef
#
# These functions are called by the auto-bind algorithm before each entity is processed. If the function returns true, the entity will be processes (e.g. the bindings for the class will be auto-generated). If the function returns false, the entity will not be processes (e.g. auto-bindings for the class will be skipped).
# This is helpful for two reasaons:
# 1. The auto-binding system is far from perfect and in some cases it fails to generate valid binding code. In that case, you can just disable processing for a certain entity. It is always possible to create manual bindings in that case.
# 2. The auto-binding system takes quite a bit of time to execute. For development and debugging purposes, it is therefore nice to be able to generate bindings for a certain entity only - ignoring everything else. This speeds things up, quite a bit.

# indicates if an include file should be processed (returns True) or not (returns False)
# parameters:
#   filename (string): file name
# returns:
#   bool
def processIncludeFile(filename):
  if not filename.endswith(".hxx"):
    return False

  # fatal error: 'AIS_LocalStatus.hxx' file not found
  if (
    filename == "AIS_DataMapOfSelStat.hxx" or
    filename == "AIS_DataMapIteratorOfDataMapOfSelStat.hxx"
  ):
    return False

  # fatal error: 'X11/Xlib.h' file not found
  if (
    filename == "InterfaceGraphic.hxx"
  ):
    return False

  # fatal error: 'X11/XWDFile.h' file not found
  if filename == "Aspect_XWD.hxx":
    return False

  # fatal error: 'X11/Shell.h' file not found
  if filename == "IVtkDraw_Interactor.hxx":
    return False

  # error: use of undeclared identifier 'myBoxes' / error: use of undeclared identifier 'myElements'
  if filename == "BVH_IndexedBoxSet.hxx":
    return False

  # error: "Atomic operation isn't implemented for current platform!"
  if (
    filename == "BOPDS_Iterator.hxx" or
    filename == "BOPDS_IteratorSI.hxx" or
    filename == "BOPTools_BoxTree" or
    filename == "BOPTools_BoxTree.hxx" or
    filename == "BVH_LinearBuilder.hxx" or
    filename == "BVH_RadixSorter.hxx" or
    filename == "OSD_Parallel.hxx" or
    filename == "OSD_ThreadPool.hxx" or
    filename == "Standard_Atomic.hxx" or
    filename == "BOPTools_Parallel.hxx" or
    filename == "BVH_DistanceField.hxx"
  ):
    return False

  # error: no member named 'random_shuffle' in namespace 'std'
  if (
    filename == "OpenGl_HaltonSampler.hxx" or
    filename == "OpenGl_TileSampler.hxx" or
    filename == "D3DHost_View.hxx" or
    filename == "OpenGl_View.hxx"
  ):
    return False

  # fatal error: 'vtkType.h' file not found
  if (
    filename == "IVtk_Types.hxx" or
    filename == "IVtk_IShape.hxx" or
    filename == "IVtk_IShapeData.hxx" or
    filename == "IVtk_IShapeMesher.hxx" or
    filename == "IVtk_IShapePickerAlgo.hxx" or
    filename == "IVtkOCC_SelectableObject.hxx" or
    filename == "IVtkOCC_Shape.hxx" or
    filename == "IVtkOCC_ShapeMesher.hxx" or
    filename == "IVtkOCC_ShapePickerAlgo.hxx" or
    filename == "IVtk_IShapePickerAlgo.hxx" or
    filename == "IVtkTools.hxx" or
    filename == "IVtkTools_DisplayModeFilter.hxx" or
    filename == "IVtkTools_ShapeDataSource.hxx" or
    filename == "IVtkTools_ShapeObject.hxx" or
    filename == "IVtkTools_ShapePicker.hxx" or
    filename == "IVtkTools_SubPolyDataFilter.hxx" or
    filename == "IVtkVTK_ShapeData.hxx"
  ):
    return False

  # fatal error: 'vtkSmartPointer.h' file not found 
  if (
    filename == "IVtkVTK_View.hxx"
  ):
    return False

  # fatal error: 'windows.h' file not found 
  if (
    filename == "OSD_WNT.hxx" or
    filename == "WNT_Dword.hxx"
  ):
    return False

  # fatal error: 'vtkActor.h' file not found
  if filename == "IVtkDraw_HighlightAndSelectionPipeline.hxx":
    return False

  # error: expected member name or ';' after declaration specifiers
  if filename == "math_Householder.hxx":
    return False

  return True

# indicates if bindings for a class should be generated (returns True) or not (returns False)
# parameters:
#   theClass (libclang class decl object): the class
# returns:
#   bool
def processClass(theClass):
  # error: undefined symbol: FT_Done_Face and many more
  if theClass.spelling.startswith("F") :
    return False

  # error: undefined symbol: a hundred times
  if (
    theClass.spelling.startswith("Draw") or
    theClass.spelling == "BRep_Edge" or 
    theClass.spelling == "BRep_Face" or
    theClass.spelling.startswith("DDF") or
    theClass.spelling.startswith("Cocoa") or
    theClass.spelling.startswith("Bin") or
    theClass.spelling.startswith("BOP") or
    theClass.spelling.startswith("DNaming") or
    theClass.spelling.startswith("DPrs") or
    theClass.spelling == "DDataStd" or
    theClass.spelling.startswith("DBRep") or
    theClass.spelling == "AdvApp2Var" or
    theClass.spelling == "AdvApp2Var_Iso" or
    theClass.spelling.startswith("AppDef") or
    theClass.spelling.startswith("DDataStd") or
    theClass.spelling.startswith("DDocStd") or
    theClass.spelling == "DsgPrs_RadiusPresentation" or
    theClass.spelling == "BSplCLib" or
    theClass.spelling == "BlendFunc" or
    theClass.spelling == "AppDef_TheResol"
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
    theClass.spelling.startswith("Geom2dAPI") or
    theClass.spelling.startswith("Geom2dInt") or
    theClass.spelling.startswith("Geom2dHatch") or
    theClass.spelling.startswith("Geom2dGcc") or
    theClass.spelling == "GeomFill_SweepSectionGenerator" or
    theClass.spelling == "GeomFill_FunctionGuide" or
    theClass.spelling == "GeomAPI_Interpolate" or
    theClass.spelling == "GeomInt_IntSS" or
    theClass.spelling == "GeomInt_WLApprox" or
    theClass.spelling == "GeomInt_ResConstraintOfMyGradientbisOfTheComputeLineOfWLApprox" or
    theClass.spelling == "GeomInt_ResConstraintOfMyGradientOfTheComputeLineBezierOfWLApprox"
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

  # error: no suitable member 'operator delete' in 'Poly_CoherentTriPtr'
  if theClass.spelling == "Poly_CoherentTriPtr":
    return False

  # error: constexpr variable 'types' must be initialized by a constant expression
  # and many others...
  if (
    theClass.spelling.startswith("IGES") and not theClass.spelling.startswith("IGESControl")
  ):
    return False

  # error: undefined symbol: _ZNK22STEPSelections_Counter3POPEv (referenced by top-level compiled C/C++ code)
  if theClass.spelling == "STEPSelections_Counter":
    return False

  # error: undefined symbol: _ZN23DrawDim_PlanarDimension19get_type_descriptorEv (referenced by top-level compiled C/C++ code)
  if theClass.spelling == "DrawDim_PlanarDimension":
    return False

  # error: incomplete type 'Interface_GTool' used in type trait expression
  if theClass.spelling == "Interface_Graph":
    return False
  
  # error: 'operator delete' is a protected member of 'Standard_Transient'
  if theClass.spelling == "Font_BRepFont":
    return False
  
  if theClass.spelling == "HLRBRep_CLProps":
    return False

  # error: incomplete type 'Interface_FileParameter' used in type trait expression
  if theClass.spelling == "Interface_FileReaderData":
    return False
  
  # error: incomplete type 'Interface_ShareTool' used in type trait expression
  if theClass.spelling == "Interface_GeneralModule":
    return False

  # error: incomplete type 'Interface_GTool' used in type trait expression
  if theClass.spelling == "Interface_HGraph":
    return False

  if (
    theClass.spelling.startswith("HLRTest") or
    theClass.spelling.startswith("HLRBRep") or
    theClass.spelling.startswith("IntCurveSurface_ThePolyhedronOfHI") or
    theClass.spelling == "IFSelect_EditForm" or
    theClass.spelling == "IFSelect_IntParam" or
    theClass.spelling == "IntTools_PntOnFace" or
    theClass.spelling.startswith("IntImpParGen") or
    theClass.spelling.startswith("IFSelect_ContextModif") or
    theClass.spelling.startswith("IntPolyh_MaillageAffinage")
  ):
    return False

  # error: incomplete type 'Interface_ShareTool' used in type trait expression
  if theClass.spelling == "RWHeaderSection_GeneralModule":
    return False

  # error: constexpr variable 'types' must be initialized by a constant expression
  if theClass.spelling == "Prs3d_ToolQuadric":
    return False

  # error: constexpr variable 'types' must be initialized by a constant expression
  if theClass.spelling == "OSD_FileNode":
    return False

  # error: constexpr variable 'types' must be initialized by a constant expression
  if theClass.spelling == "OSD_File":
    return False

  # error: no matching function for call to 'operator new'
  if theClass.spelling.startswith("NCollection"):
    return False

  # error: incomplete type 'AVStream' used in type trait expression
  if theClass.spelling.startswith("Media"):
    return False

  # error: incomplete type 'Interface_ShareTool' used in type trait expression
  if theClass.spelling == "RWStepAP214_GeneralModule":
    return False

  # error: constexpr variable 'types' must be initialized by a constant expression
  if theClass.spelling.startswith("RWStepGeom"):
    return False

  # error: constexpr variable 'types' must be initialized by a constant expression
  if (
    theClass.spelling == "RWStepShape_RWBrepWithVoids" or
    theClass.spelling == "RWStepShape_RWEdgeCurve" or
    theClass.spelling == "RWStepShape_RWEdgeLoop" or
    theClass.spelling == "RWStepShape_RWFaceBound"
  ):
    return False

  if (
    theClass.spelling == "LocOpe_Revol" or
    theClass.spelling == "QANCollection" or
    theClass.spelling == "MAT2d_CutCurve" or
    theClass.spelling == "Law_Interpolate" or
    theClass.spelling == "LocOpe_RevolutionForm" or
    theClass.spelling == "MeshTest_CheckTopology" or
    theClass.spelling == "ProjLib_ProjectOnSurface" or
    theClass.spelling == "QABugs_PresentableObject" or
    theClass.spelling == "QABugs" or
    theClass.spelling == "QADraw" or
    theClass.spelling == "MeshTest" or
    theClass.spelling == "OSD_Path" or
    theClass.spelling == "QADNaming" or
    theClass.spelling == "MeshTest_CheckTopology"
  ):
    return False

  # error: use of undeclared identifier 'TVertex'; did you mean 'ShapePersistent_BRep::TVertex'?
  if theClass.spelling == "ShapePersistent_BRep":
    return False

  # error: use of undeclared identifier 'Curve'
  if (
    theClass.spelling == "ShapePersistent_Geom" or
    theClass.spelling == "ShapePersistent_Geom2d_Curve" or
    theClass.spelling == "ShapePersistent_Geom2d" or
    theClass.spelling == "ShapePersistent_Geom_Curve"
  ):
    return False

  # error: use of undeclared identifier 'Surface'
  if theClass.spelling == "ShapePersistent_Geom_Surface":
    return False

  # error: unknown type name ...
  if (
    theClass.spelling == "ShapePersistent_Poly" or
    theClass.spelling == "ShapePersistent_TopoDS" or
    theClass.spelling == "StdPersistent_TopLoc"
  ):
    return False

  # error: incomplete type 'Interface_ShareTool' used in type trait expression
  if theClass.spelling == "StepData_DefaultGeneral":
    return False

  # error: no suitable member 'operator delete' in 'TDF_LabelNode'
  if theClass.spelling == "TDF_LabelNode":
    return False

  # error: incomplete type 'Interface_ShareTool' used in type trait expression
  if theClass.spelling == "StepData_GeneralModule":
    return False

  # error: constexpr variable 'types' must be initialized by a constant expression
  if theClass.spelling == "TopClass_SolidExplorer":
    return False

  # error: calling function with incomplete return type 'OSD_FileIterator'
  # error: constexpr variable 'types' must be initialized by a constant expression
  if theClass.spelling == "UTL":
    return False

  # error: non-const lvalue reference to type 'const int **' cannot bind to a temporary of type 'const int **'
  if (
    theClass.spelling == "VrmlData_IndexedFaceSet" or
    theClass.spelling == "VrmlData_IndexedLineSet" or
    theClass.spelling == "VrmlData_Scene"
  ):
    return False

  # error: duplicate symbol: DISCRETALGO
  if theClass.spelling == "XBRepMesh":
    return False

  if (
    theClass.spelling.startswith("ViewerTest") or
    theClass.spelling.startswith("XDEDRAW") or
    theClass.spelling.startswith("XSDRAW") or
    theClass.spelling.startswith("SWDRAW") or
    theClass.spelling == "ShapeFix_WireSegment" or
    theClass.spelling == "ShapeFix_Edge" or
    theClass.spelling == "StepFEA_SymmetricTensor43d" or
    theClass.spelling == "TransferBRep" or
    theClass.spelling == "StepToTopoDS_Builder" or
    theClass.spelling == "StepData_FreeFormEntity" or
    theClass.spelling == "StepData_UndefinedEntity" or
    theClass.spelling == "TObjDRAW"
  ):
    return False

  # error: undefined symbol
  if theClass.spelling.startswith("TPrsStd"):
    return False

  # error: undefined symbol
  if theClass.spelling == "XCAFApp_Application":
    return False

  if (
    theClass.spelling == "math_NewtonMinimum" or
    theClass.spelling == "math_NewtonFunctionSetRoot"
  ):
    return False

  # error: call to implicitly-deleted copy constructor / private constructor
  if (
    theClass.spelling == "AIS_ViewController" or
    theClass.spelling == "AdvApp2Var_Framework" or
    theClass.spelling == "AdvApp2Var_Network" or
    theClass.spelling == "Image_VideoRecorder" or
    theClass.spelling == "IntTools_Context" or
    theClass.spelling == "LDOMString" or
    theClass.spelling == "VrmlData_Node" or
    theClass.spelling == "LDOM_MemManager" or
    theClass.spelling == "LDOM_Node"
  ):
    return False

  # error: allocating an object of abstract class type
  if (
    theClass.spelling == "Graphic3d_CubeMap" or
    theClass.spelling == "Storage_BaseDriver"
  ):
    return False

  # error: undefined symbol: _ZN18GeomFill_NSectionsC2ERK20NCollection_SequenceIN11opencascade6handleI10Geom_CurveEEERKS0_IdEdd (referenced by top-level compiled C/C++ code)
  if theClass.spelling == "GeomFill_NSections":
    return False

  # error: undefined symbol: _ZN21XCAFDoc_GeomToleranceC2ERKN11opencascade6handleIS_EE (referenced by top-level compiled C/C++ code)
  if theClass.spelling == "XCAFDoc_GeomTolerance":
    return False

  # error: expected unqualified-id
  if (
    theClass.spelling == "math_IntegerVector" or
    theClass.spelling == "math_Matrix" or
    theClass.spelling == "math_Vector"
  ):
    return False

  # error: allocating an object of abstract class type 'AIS_Dimension'
  if theClass.spelling == "AIS_Dimension":
    return False

  # error: calling a private constructor of class 'OpenGl_Clipping'
  if theClass.spelling == "OpenGl_Context":
    return False

  # error: calling a private constructor of class 'OpenGl_Caps'
  if theClass.spelling == "OpenGl_GraphicDriver":
    return False

  # error: undefined symbol
  if (
    theClass.spelling == "D3DHost_FrameBuffer" or
    theClass.spelling == "D3DHost_GraphicDriver" or
    theClass.spelling.startswith("AIS") or
    theClass.spelling.startswith("Aspect") or
    theClass.spelling == "IntPatch_Polyhedron" or
    theClass.spelling == "IVtkOCC_ViewerSelector" or
    theClass.spelling == "IVtkDraw" or
    theClass.spelling == "IntPatch_RLine" or
    theClass.spelling == "IVtk_Interface" or
    theClass.spelling == "IVtk_IView" or
    theClass.spelling == "OpenGl_VertexBuffer" or
    theClass.spelling == "OpenGl_ShaderProgram" or
    theClass.spelling.startswith("OpenGl") or
    theClass.spelling == "Xw_Window"
  ):
    return False

  return True

# indicates if bindings for a method should be generated (returns True) or not (returns False)
# parameters:
#   className (string): name of the class
#   child (libclang method decl object): the method
# returns:
#   bool
def processMethod(className, child):
  # error: private copy constructor used in this function
  if className == "BRepClass3d_SolidExplorer" and child.spelling == "GetTree":
    return False
  return True

# indicates if bindings for a typedef should be generated (returns True) or not (returns False)
# parameters:
#   typedef (libclang typedef object): the typedef
# returns:
#   bool
def processTypedef(typedef):
  # error: ?
  if (
    typedef.spelling == "Handle_Font_BRepFont" or
    typedef.spelling == "Handle_PCDM_Reader" or
    typedef.spelling == "Handle_PCDM_ReadWriter_1"
  ):
    return False

  if typedef.spelling == "OpenGl_ListOfStructure":
    return False

  # Generates error "Cannot register type 'TColQuantity_Array1OfLength' twice" during initialization of the WASM file. Seems to be conflicting with 'TColStd_Array1OfReal'. Can be reproduced by including these two bindings in one bindings-file.
  if typedef.spelling == "TColQuantity_Array1OfLength":
    return False
  # Same as above, but with TopoDS_ListOfShape / TopTools_ListOfShape
  if typedef.spelling == "TopoDS_ListOfShape":
    return False

  return True

# indicates if bindings for an enum should be generated (returns True) or not (returns False)
# parameters:
#   enum (libclang enum object): the enum
# returns:
#   bool
def processEnum(enum):
  return True

# Generates the header of the bindings for a class (i.e. 'class_<...>("...")') and returns it as a string
# parameters:
#   className (string): the name of the class
#   children (libclang list of class children): the children of the class
# returns:
#   string
def getClassBinding(className, children):
  baseSpec = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CXX_BASE_SPECIFIER and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(baseSpec) > 1:
    raise MultipleBaseClassException("cannot handle multiple base classes (" + className + ")")

  if len(baseSpec) > 0:
    baseClass = ", base<" + baseSpec[0].type.spelling + ">"
  else:
    baseClass = ""

  return "  class_<" + className + baseClass + ">(\"" + className + "\")" + os.linesep

# Generates cast bindings for a method. Some methods neet to be reinterpret_cast'd or static_cast'd
# parameters:
#   className (string): the name of the class
#   method (libclang method decl): the method
# returns:
#   string
def getCastMethodBindings(className, method):
  args = list(method.get_arguments())
  hasConstCharArg = any(any(x.spelling == "Standard_CString" for x in a.get_tokens()) for a in args)
  hasRefArg = any(x.type.kind == clang.cindex.TypeKind.LVALUEREFERENCE for x in args)
  needReinterpretCast = hasConstCharArg or hasRefArg
  returnType = method.result_type.spelling
  const = "const" if method.is_const_method() else ""
  classQualifier = ( className + "::" if not method.is_static_method() else "" ) + "*"
  if needReinterpretCast:
    castedArgResults = list(map(getSingleArgumentBinding(False), args))
    somethingChanged = any(map(lambda x: x[1], castedArgResults))
    castedArgTypes = list(map(lambda x: x[0], castedArgResults))
    if somethingChanged:
      return ["reinterpret_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
    else:
      return ["static_cast<" + returnType + " (" + classQualifier + ") (" + ", ".join(castedArgTypes) + ") " + const + ">(", ")"]
  return ["", ""]

# Generates bindings for a single method
# parameters:
#   className (string): the name of the class
#   method (libclang method decl): the method
#   allOverloads (list of libclang method decl): all overloads of the method (i.e. methods with the same name but different signatures)
# returns:
#   string
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

    cast = getCastMethodBindings(className, method)
    return "    ." + functionCommand + "(\"" + method.spelling + overloadPostfix + "\", " + cast[0] + functor + cast[1] + ", allow_raw_pointers())" + os.linesep
  return ""

# Generates bindings for a single argument of a function
# parameters:
#   argNames (bool): include argument name (if False, only the type will be generated without the name)
#   isConstructor (bool): is the function / method a constructor? Constructors must be handled differently from normal methods.
# returns:
#   string
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
      if any(x.spelling == "Standard_CString" for x in arg.get_tokens()):
        typename = "std::string"
        changed = True
      argBinding = typename + ((" " + arg.spelling) if argNames else "")
    return [argBinding, changed]
  return f

# Generates bindings for a number of methods
# parameters:
#   className (string): the name of the class
#   children (libclang list of children): the children of the class
# returns:
#   string
def getMethodsBinding(className, children):
  methodsBinding = ""
  for child in children:
    if not processMethod(className, child):
      continue
    allOverloads = [m for m in children if m.spelling == child.spelling]
    methodsBinding += getSingleMethodBinding(className, child, allOverloads)
  return methodsBinding

# Generates bindings for a "simple" constructor, i.e. using Embind's ".constructor<...>()" tag. Simple constructors can be used, when no overloads of the constructor exsist.
# parameters:
#   children (libclang list of children): the children of the class
# returns:
#   string
def getSimpleConstructorBinding(children):
  constructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR, children))
  if len(constructors) == 0:
    return "    .constructor<>()" + os.linesep
  publicConstructors = list(filter(lambda x: x.kind == clang.cindex.CursorKind.CONSTRUCTOR and x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC, children))
  if len(publicConstructors) == 0 or len(publicConstructors) > 1:
    return ""
  standardConstructor = publicConstructors[0]
  if not standardConstructor:
    return ""
  argTypes = ", ".join(list(map(lambda x: x.type.spelling, list(standardConstructor.get_arguments()))))
  return "    .constructor<" + argTypes + ">()" + os.linesep

# Generates bindings for all overloaded constructors. Overloaded constructors are represented by deriving sub-classes from the parentClass (named parentClass_1, for example) and implementing only the given overloaded constructor as the default / simple constructor.
# parameters:
#   className (string): the name of the class
#   children (libclang list of children): the children of the class
# returns:
#   string
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
    argNames = ", ".join(list(map(lambda x: x.spelling if not any(y.spelling == "Standard_CString" for y in x.get_tokens()) else x.spelling + ".c_str()", list(constructor.get_arguments()))))
    argTypes = ", ".join(list(map(lambda x: getSingleArgumentBinding(False, True)(x)[0], list(constructor.get_arguments()))))

    constructorBindings += "    struct " + constructor.spelling + overloadPostfix + " : public " + constructor.spelling + " {" + os.linesep
    constructorBindings += "      " + constructor.spelling + overloadPostfix + "(" + args + ") : " + constructor.spelling + "(" + argNames + ") {}" + os.linesep
    constructorBindings += "    };" + os.linesep
    constructorBindings += "    class_<" + constructor.spelling + overloadPostfix + ", base<" + constructor.spelling + ">>(\"" + constructor.spelling + overloadPostfix + "\")" + os.linesep
    constructorBindings += "      .constructor<" + argTypes + ">()" + os.linesep
    constructorBindings += "    ;" + os.linesep
  return constructorBindings

# Generates the 'epilog' for a class, i.e. some text that will be appended at the end of the bindings file. This is currently used to fix compile errors with non-public destructors: https://github.com/emscripten-core/emscripten/issues/5587
# parameters:
#   theClass (libclang class decl object): the class for which to create the epilog
# returns:
#   string
def getEpilogForClass(theClass):
  nonPublicDestructor = any(x.kind == clang.cindex.CursorKind.DESTRUCTOR and not x.access_specifier == clang.cindex.AccessSpecifier.PUBLIC for x in list(theClass.get_children()))
  if nonPublicDestructor:
    return "namespace emscripten { namespace internal { template<> void raw_destructor<" + theClass.spelling + ">(" + theClass.spelling + "* ptr) { /* do nothing */ } } }" + os.linesep
  return ""

# Returns all purely virtual methods of a class
# parameters:
#   theClass (libclang class decl object): the class
# returns:
#   list of lblang method objects
def getPureVirtualMethods(theClass):
  return list(filter(lambda x: x.is_pure_virtual_method(), list(theClass.get_children())))

# Returns True if a class is abstract, else False. Currently, this analysis is onyl done for one level in the class hierarchy, i.e. a class is abstract if it has at least one purely virtual method or one of its base-classes has at least one purely virtual methods. Other hierarchy levels are ignored at the moment.
# parameters:
#   theClass (libclang class decl object): the class
#   allClasses (list of libclang class decl objects): all other classes
# returns:
#   boolean
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

class overloadedConstrutorObject(object):
  def get_arguments(self):
    return self.arguments
  def get_tokens(self):
    return self.tokens
  def get_children(self):
    return self.children

# Generates bindings for all handle types. Handle types are typedef-specializations of the opencascade::handle<...> template class.
# parameters:
#   children (list of libclang objects): all libclang objects
# returns:
#   None
def getHandleTypeBindings(children):
  bindingsOutput = ""
  print("generating bindings for handle types...")

  handleTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("opencascade::handle") and x.spelling.startswith("Handle_"), children))
  filteredHandleTypedefs = []
  for child in handleTypedefs:
    if not any(x.underlying_typedef_type.spelling == child.underlying_typedef_type.spelling for x in filteredHandleTypedefs):
      filteredHandleTypedefs.append(child)

  for handleTypedef in handleTypedefs:
    if not processTypedef(handleTypedef):
      continue

    handleName = handleTypedef.spelling
    targetType = handleTypedef.underlying_typedef_type.get_template_argument_type(0).spelling
    bindingsOutput += "  class_<" + handleName + ">(\"" + handleName + "\")" + os.linesep
    bindingsOutput += "    .function(\"Nullify\", &" + handleName + "::Nullify)" + os.linesep
    bindingsOutput += "    .function(\"IsNull\", &" + handleName + "::IsNull)" + os.linesep
    bindingsOutput += "    .function(\"reset\", &" + handleName + "::reset, allow_raw_pointers())" + os.linesep
    bindingsOutput += "    .function(\"operator_assign_1\", select_overload<" + handleName + "&(const " + handleName + "&)>(&" + handleName + "::operator=))" + os.linesep
    bindingsOutput += "    .function(\"operator_assign_2\", select_overload<" + handleName + "&(const " + targetType + "*)>(&" + handleName + "::operator=), allow_raw_pointers())" + os.linesep
    bindingsOutput += "    .function(\"operator_assign_3\", select_overload<" + handleName + "&(" + handleName + "&&)>(&" + handleName + "::operator=))" + os.linesep
    bindingsOutput += "    .function(\"get\", select_overload<" + targetType + "*()const>(&" + handleName + "::get), allow_raw_pointers())" + os.linesep
    bindingsOutput += "    .function(\"operator_dereference\", &" + handleName + "::operator->, allow_raw_pointers())" + os.linesep
    bindingsOutput += "    .function(\"operator_bool\", &" + handleName + "::operator bool)" + os.linesep
    bindingsOutput += "  ;" + os.linesep

    oc1 = overloadedConstrutorObject()
    oc1.spelling = handleName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = handleName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const " + targetType + "*"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "thePtr"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = handleName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + handleName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theHandle"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    bindingsOutput += getOverloadedConstructorsBinding(handleName, [
      oc1, oc2, oc3
    ])

  return [bindingsOutput]

def getNCollection_Array1TypeBindings(children):
  bindingsOutput = ""
  print("generating bindings for NCollection_Array1 types...")
  nCollection_Array1Typedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("NCollection_Array1"), children))
  for nCollection_Array1Typedef in nCollection_Array1Typedefs:
    if not processTypedef(nCollection_Array1Typedef):
      continue

    theName = nCollection_Array1Typedef.spelling
    theType = nCollection_Array1Typedef.underlying_typedef_type.get_template_argument_type(0).spelling
    bindingsOutput += "  class_<" + theName + ">(\"" + theName + "\")" + os.linesep
    bindingsOutput += "    .function(\"begin\", &" + theName + "::begin)" + os.linesep
    bindingsOutput += "    .function(\"end\", &" + theName + "::end)" + os.linesep
    bindingsOutput += "    .function(\"cbegin\", &" + theName + "::cbegin)" + os.linesep
    bindingsOutput += "    .function(\"cend\", &" + theName + "::cend)" + os.linesep
    bindingsOutput += "    .function(\"Init\", &" + theName + "::Init)" + os.linesep
    bindingsOutput += "    .function(\"Size\", &" + theName + "::Size)" + os.linesep
    bindingsOutput += "    .function(\"Length\", &" + theName + "::Length)" + os.linesep
    bindingsOutput += "    .function(\"IsEmpty\", &" + theName + "::IsEmpty)" + os.linesep
    bindingsOutput += "    .function(\"Lower\", &" + theName + "::Lower)" + os.linesep
    bindingsOutput += "    .function(\"Upper\", &" + theName + "::Upper)" + os.linesep
    bindingsOutput += "    .function(\"IsDeletable\", &" + theName + "::IsDeletable)" + os.linesep
    bindingsOutput += "    .function(\"IsAllocated\", &" + theName + "::IsAllocated)" + os.linesep
    bindingsOutput += "    .function(\"Assign\", &" + theName + "::Assign)" + os.linesep
    bindingsOutput += "    .function(\"Move\", &" + theName + "::Move)" + os.linesep
    bindingsOutput += "    // .function(\"operator_assign\", &" + theName + "::operator=)" + os.linesep
    bindingsOutput += "    .function(\"First\", &" + theName + "::First)" + os.linesep
    bindingsOutput += "    .function(\"ChangeFirst\", &" + theName + "::ChangeFirst)" + os.linesep
    bindingsOutput += "    .function(\"Last\", &" + theName + "::Last)" + os.linesep
    bindingsOutput += "    .function(\"ChangeLast\", &" + theName + "::ChangeLast)" + os.linesep
    bindingsOutput += "    .function(\"Value\", &" + theName + "::Value)" + os.linesep
    bindingsOutput += "    // .function(\"operator()_1\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"operator[]_1\", ...)" + os.linesep
    bindingsOutput += "    .function(\"ChangeValue\", &" + theName + "::ChangeValue)" + os.linesep
    bindingsOutput += "    // .function(\"operator()_2\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"operator[]_2\", ...)" + os.linesep
    bindingsOutput += "    .function(\"SetValue\", &" + theName + "::SetValue)" + os.linesep
    bindingsOutput += "    .function(\"Resize\", &" + theName + "::Resize)" + os.linesep
    bindingsOutput += "  ;" + os.linesep

    oc1 = overloadedConstrutorObject()
    oc1.spelling = theName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = theName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const Standard_Integer"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "theLower"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2arg2type = overloadedConstrutorObject()
    oc2arg2type.spelling = "const Standard_Integer"
    oc2arg2type.kind = None
    oc2arg2 = overloadedConstrutorObject()
    oc2arg2.type = oc2arg2type
    oc2arg2.spelling = "theUpper"
    oc2arg2.tokens = []
    oc2arg2.children = []
    oc2.arguments = [oc2arg1, oc2arg2]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = theName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + theName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theOther"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    oc4 = overloadedConstrutorObject()
    oc4.spelling = theName
    oc4.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc4.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc4arg1type = overloadedConstrutorObject()
    oc4arg1type.spelling = "const " + theType + "&"
    oc4arg1type.kind = None
    oc4arg1 = overloadedConstrutorObject()
    oc4arg1.type = oc4arg1type
    oc4arg1.spelling = "theBegin"
    oc4arg1.tokens = []
    oc4arg1.children = []
    oc4arg2type = overloadedConstrutorObject()
    oc4arg2type.spelling = "const Standard_Integer"
    oc4arg2type.kind = None
    oc4arg2 = overloadedConstrutorObject()
    oc4arg2.type = oc4arg2type
    oc4arg2.spelling = "theLower"
    oc4arg2.tokens = []
    oc4arg2.children = []
    oc4arg3type = overloadedConstrutorObject()
    oc4arg3type.spelling = "const Standard_Integer"
    oc4arg3type.kind = None
    oc4arg3 = overloadedConstrutorObject()
    oc4arg3.type = oc4arg2type
    oc4arg3.spelling = "theUpper"
    oc4arg3.tokens = []
    oc4arg3.children = []
    oc4.arguments = [oc4arg1, oc4arg2, oc4arg3]

    bindingsOutput += getOverloadedConstructorsBinding(theName, [
      oc1, oc2, oc3, oc4
    ])
  
  return [bindingsOutput]

def getNCollection_ListTypeBindings(children):
  bindingsOutput = ""
  print("generating bindings for NCollection_List types...")

  bindingsOutput += "  class_<NCollection_BaseList>(\"NCollection_BaseList\")" + os.linesep
  bindingsOutput += "    .function(\"Extent\", &NCollection_BaseList::Extent)" + os.linesep
  bindingsOutput += "    .function(\"IsEmpty\", &NCollection_BaseList::IsEmpty)" + os.linesep
  bindingsOutput += "    .function(\"Allocator\", &NCollection_BaseList::Allocator)" + os.linesep
  bindingsOutput += "  ;" + os.linesep

  nCollection_ListTypedefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and x.underlying_typedef_type.spelling.startswith("NCollection_List") and not x.underlying_typedef_type.spelling.endswith("::Iterator"), children))
  for nCollection_ListTypedef in nCollection_ListTypedefs:
    if not processTypedef(nCollection_ListTypedef):
      continue

    theName = nCollection_ListTypedef.spelling
    theType = nCollection_ListTypedef.underlying_typedef_type.get_template_argument_type(0).spelling

    bindingsOutput += "  class_<" + theName + ">(\"" + theName + "\")" + os.linesep
    bindingsOutput += "    .function(\"begin\", &" + theName + "::begin)" + os.linesep
    bindingsOutput += "    .function(\"end\", &" + theName + "::end)" + os.linesep
    bindingsOutput += "    .function(\"cbegin\", &" + theName + "::cbegin)" + os.linesep
    bindingsOutput += "    .function(\"cend\", &" + theName + "::cend)" + os.linesep
    bindingsOutput += "    .function(\"Size\", &" + theName + "::Size)" + os.linesep
    bindingsOutput += "    .function(\"Assign\", static_cast<" + theName + "& (" + theName + "::*) (const " + theName + "&) >((" + theName + "& (" + theName + "::*)(const " + theName + "&) ) &" + theName + "::Assign))" + os.linesep
    bindingsOutput += "    .function(\"operator_assign\", static_cast<" + theName + "& (" + theName + "::*) (const " + theName + "&) >((" + theName + "& (" + theName + "::*)(const " + theName + "&) ) &" + theName + "::operator=))" + os.linesep
    bindingsOutput += "    .function(\"Clear\", &" + theName + "::Clear)" + os.linesep
    bindingsOutput += "    .function(\"First_1\", static_cast<const " + theType + "& (" + theName + "::*) () const>((const " + theType + "& (" + theName + "::*)() const) &" + theName + "::First))" + os.linesep
    bindingsOutput += "    .function(\"First_2\", static_cast<" + theType + "& (" + theName + "::*) () >((" + theType + "& (" + theName + "::*)() ) &" + theName + "::First))" + os.linesep
    bindingsOutput += "    .function(\"Last_1\", static_cast<const " + theType + "& (" + theName + "::*) () const>((const " + theType + "& (" + theName + "::*)() const) &" + theName + "::Last))" + os.linesep
    bindingsOutput += "    .function(\"Last_2\", static_cast<" + theType + "& (" + theName + "::*) () >((" + theType + "& (" + theName + "::*)() ) &" + theName + "::Last))" + os.linesep
    bindingsOutput += "    .function(\"Append_1\", static_cast<" + theType + "& (" + theName + "::*) (const " + theType + "&) >((" + theType + "& (" + theName + "::*)(const " + theType + "&) ) &" + theName + "::Append))" + os.linesep
    bindingsOutput += "    // .function(\"Append_2\", ...)" + os.linesep
    bindingsOutput += "    .function(\"Append_3\", static_cast<void (" + theName + "::*) (" + theName + "&) >((void (" + theName + "::*)(" + theName + "&) ) &" + theName + "::Append))" + os.linesep
    bindingsOutput += "    .function(\"Prepend_1\", static_cast<" + theType + "& (" + theName + "::*) (const " + theType + "&) >((" + theType + "& (" + theName + "::*)(const " + theType + "&) ) &" + theName + "::Prepend))" + os.linesep
    bindingsOutput += "    .function(\"Prepend_2\", static_cast<void (" + theName + "::*) (" + theName + "&) >((void (" + theName + "::*)(" + theName + "&) ) &" + theName + "::Prepend))" + os.linesep
    bindingsOutput += "    .function(\"RemoveFirst\", &" + theName + "::RemoveFirst)" + os.linesep
    bindingsOutput += "    // .function(\"Remove_1\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"Remove_2\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"InsertBefore_1\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"InsertBefore_2\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"InsertAfter_1\", ...)" + os.linesep
    bindingsOutput += "    // .function(\"InsertAfter_2\", ...)" + os.linesep
    bindingsOutput += "    .function(\"Reverse\", &" + theName + "::Reverse)" + os.linesep
    bindingsOutput += "    // .function(\"Contains\", ...)" + os.linesep
    bindingsOutput += "  ;" + os.linesep

    oc1 = overloadedConstrutorObject()
    oc1.spelling = theName
    oc1.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc1.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc1.arguments = []

    oc2 = overloadedConstrutorObject()
    oc2.spelling = theName
    oc2.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc2.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc2arg1type = overloadedConstrutorObject()
    oc2arg1type.spelling = "const Handle(NCollection_BaseAllocator)&"
    oc2arg1type.kind = None
    oc2arg1 = overloadedConstrutorObject()
    oc2arg1.type = oc2arg1type
    oc2arg1.spelling = "theAllocator"
    oc2arg1.tokens = []
    oc2arg1.children = []
    oc2.arguments = [oc2arg1]

    oc3 = overloadedConstrutorObject()
    oc3.spelling = theName
    oc3.kind = clang.cindex.CursorKind.CONSTRUCTOR
    oc3.access_specifier = clang.cindex.AccessSpecifier.PUBLIC
    oc3arg1type = overloadedConstrutorObject()
    oc3arg1type.spelling = "const " + theName + "&"
    oc3arg1type.kind = None
    oc3arg1 = overloadedConstrutorObject()
    oc3arg1.type = oc3arg1type
    oc3arg1.spelling = "theOther"
    oc3arg1.tokens = []
    oc3arg1.children = []
    oc3.arguments = [oc3arg1]

    bindingsOutput += getOverloadedConstructorsBinding(theName, [
      oc1, oc2, oc3
    ])
  
  return [bindingsOutput]

# Generates bindings for all classes (with some exceptions).
# parameters:
#   newChildren (list of libclang objects): all libclang objects
# returns:
#   None
def getClassBindings(newChildren):
  global numExportedClasses, numIgnoredClasses
  bindingsOutput = ""
  epilogOutput = ""
  docsOutput = ""
  print("generating bindings for classes...")
  for o in newChildren:
    if o.kind == clang.cindex.CursorKind.CLASS_DECL:
      theClass = o

      successfulBinding = False
      if processClass(theClass):
        try:
          bindingsOutput += getClassBinding(theClass.spelling, list(theClass.get_children()))
          docsOutput += "### ![](https://bit.ly/2El7GLC) `" + theClass.spelling + "`" + os.linesep + os.linesep
          abstract = isAbstractClass(theClass, filter(lambda x: x.kind == clang.cindex.CursorKind.CLASS_DECL, newChildren))
          if not abstract:
            bindingsOutput += getSimpleConstructorBinding(list(theClass.get_children()))
          bindingsOutput += getMethodsBinding(theClass.spelling, list(theClass.get_children()))
          bindingsOutput += "  ;" + os.linesep
          if not abstract:
            bindingsOutput += getOverloadedConstructorsBinding(theClass.spelling, list(theClass.get_children()))
          epilogOutput += getEpilogForClass(theClass)
          numExportedClasses += 1
          successfulBinding = True
        except MultipleBaseClassException as e:
          print(str(e))

      if not successfulBinding:
        numIgnoredClasses += 1
        docsOutput += "### ![](https://bit.ly/3hIVfqr) `" + theClass.spelling + "`" + os.linesep + os.linesep
  return [
    bindingsOutput,
    epilogOutput,
    docsOutput
  ]

# Generates bindings for all enums
# parameters:
#   newChildren (list of libclang objects): all libclang objects
# returns:
#   None
def getEnumBindings(newChildren):
  bindingsOutput = ""
  print("generating bindings for enums...")
  for enum in newChildren:
    if enum.kind == clang.cindex.CursorKind.ENUM_DECL:
      if not processEnum(enum):
        continue
      bindingsOutput += "  enum_<" + enum.spelling + ">(\"" + enum.spelling + "\")" + os.linesep
      for enumChild in list(enum.get_children()):
        bindingsOutput += "    .value(\"" + enumChild.spelling + "\", " + enum.spelling + "::" + enumChild.spelling + ")" + os.linesep
      bindingsOutput += "  ;" + os.linesep
  return [bindingsOutput]

# The entry point of the auto-binding algorithm.
# parameters:
# returns:
#   None
def main():
  global numIgnoredClasses
  occtFiles = []
  includePaths = []
  for dirpath, dirnames, filenames in os.walk("../build/occt/src"):
    includePaths.append(str(dirpath))
    for item in filenames:
      if processIncludeFile(item):
        occtFiles.append(str(os.path.join(dirpath, item)))
      else:
        if item.endswith(".hxx"):
          numIgnoredClasses += 1 # ...assuming one class per c++ header file

  includePathArgs = [
    "-I/emsdk/upstream/emscripten/system/include/",
    "-I/opencascade/build/regal/regal-master/src/apitrace/thirdparty/khronos/",
    "-isystem/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
    "-I/usr/lib/gcc/x86_64-linux-gnu/8/include-fixed/",
    "-isystem", "/usr/lib/gcc/x86_64-linux-gnu/8/include/",
    "-I/clang/clang_10/include/c++/v1/",
    "-isystem", "/usr/lib/gcc/x86_64-linux-gnu/8/include/",
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

  print("creating bindings...")
  outputDocFile = open("../dist/Supported APIs.md", "w")
  outputDocFile.write('''# OpenCascade.js Supported APIs

This is an overview over the currently supported parts of the OpenCascade API. Supported items are marked in green. Unsupported items are marked in red. All bindings listed here are created automatically. We are working hard on increasing support for as much as possible of the OpenCascade API.

This list only lists class definitions. It does not contain information about:
* Nested class definitions. Those are currently not supported.
* Overloaded constructors. These are generally well supported.
* `typedef`'d template classes. Currently, there is support for the following items. Apart from that, there is little support.
  * Most `typedef`'d specializations of the `opencascade::handle<...>` class
  * Most `typedef`'d specializations of the `NCollection_Array1<...>` class
  * Most `typedef`'d specializations of the `NCollection_List<...>` class
* Manually created bindings. These are not listed here.

## List of supported API's

''')
  bindingsFile = open("../build/bindings.cpp", "w")
  bindingsFile.write(includeDirectives + '''

#include <emscripten/bind.h>
using namespace emscripten;

EMSCRIPTEN_BINDINGS(opencascadejs) {
  #include \"../embind/manualBindings.h\"

''')

  print("filtering, sorting...")
  children = list(tu.cursor.get_children())
  newChildren = []
  for child in children:
    if len(list(child.get_children())) == 0:
      continue
    if not any(x.spelling == child.spelling for x in newChildren):
      newChildren.append(child)
  newChildren = sorted(newChildren, key=lambda x: x.spelling)

  classBindingsOutput, classEpilogOutput, classDocsOutput = getClassBindings(newChildren)
  bindingsFile.write(classBindingsOutput)
  outputDocFile.write(classDocsOutput)
  handleBindingsOutput = getHandleTypeBindings(children)[0]
  bindingsFile.write(handleBindingsOutput)
  enumBindingsOutput = getEnumBindings(newChildren)[0]
  bindingsFile.write(enumBindingsOutput)
  nCollection_Array1BindingsOutput = getNCollection_Array1TypeBindings(children)[0]
  bindingsFile.write(nCollection_Array1BindingsOutput)
  nCollection_ListBindingsOutput = getNCollection_ListTypeBindings(children)[0]
  bindingsFile.write(nCollection_ListBindingsOutput)

  bindingsFile.write("}" + os.linesep + os.linesep)
  bindingsFile.write(classEpilogOutput)

main()
den = (numExportedClasses+numIgnoredClasses)
print("numExportedClasses: " + str(numExportedClasses) + " (" + str((numExportedClasses/den*100) if not den == 0 else 0) + "%)")
print("numIgnoredClasses: " + str(numIgnoredClasses) + " (" + str((numIgnoredClasses/den*100) if not den == 0 else 0) + "%)")
