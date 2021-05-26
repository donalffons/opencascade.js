def filterClass(theClass, additionalInfo=None):
  # "unsigned long" as function argument type breaks typescript
  if theClass.spelling == "WNT_HIDSpaceMouse":
    return False

  if theClass.spelling == "Standard_Dump":
    return False

  # error: undefined symbol: _ZN21CDF_DirectoryIteratorC2Ev
  if theClass.spelling == "CDF_DirectoryIterator":
    return False

  # error: undefined symbol: _ZN15Geom2dEvaluator16AdjustDerivativeEidR8gp_Vec2dS1_S1_S1_ (referenced by top-level compiled C/C++ code)
  if theClass.spelling == "Geom2dEvaluator":
    return False

  # error: call to implicitly-deleted copy constructor of 'std::__2::basic_stringstream<char, std::__2::char_traits<char>, std::__2::allocator<char>>'
  if theClass.spelling == "Message_AttributeStream":
    return False

  # error: allocating an object of abstract class type 'PrsDim_Dimension'
  if theClass.spelling == "PrsDim_Dimension":
    return False

  # error: implicit instantiation of undefined template 'emscripten::internal::RegisterClassMethod<unsigned long OpenGl_Context::*>'
  # error: implicit instantiation of undefined template 'emscripten::internal::RegisterClassMethod<unsigned long Event::*>'
  if theClass.spelling == "OpenGl_Context":
    return False

  # error: call to implicitly-deleted copy constructor of 'IntTools_FClass2d'
  # error: call to implicitly-deleted copy constructor of 'BRepClass3d_SolidClassifier'
  if theClass.spelling == "IntTools_Context":
    return False

  # error: undefined symbol: _ZN20OpenGl_ShaderProgram20compileShaderVerboseERKN11opencascade6handleI14OpenGl_ContextEERKNS1_I19OpenGl_ShaderObjectEERK23TCollection_AsciiStringb
  if theClass.spelling == "OpenGl_ShaderProgram":
    return False

  # error: rvalue reference to type 'Storage_BaseDriver' cannot bind to lvalue of type 'Storage_BaseDriver'
  # error: allocating an object of abstract class type 'Storage_BaseDriver'
  if theClass.spelling == "FSD_BinaryFile":
    return False

  # error: calling a private constructor of class 'Standard_Mutex'
  # error: 'operator new' is a protected member of 'Standard_Transient'
  # error: 'operator delete' is a protected member of 'Standard_Transient'
  if theClass.spelling == "Font_BRepFont":
    return False

  # error: rvalue reference to type 'Storage_BaseDriver' cannot bind to lvalue of type 'Storage_BaseDriver'
  # error: allocating an object of abstract class type 'Storage_BaseDriver'
  if theClass.spelling == "FSD_File":
    return False

  # error: undefined symbol: a hundred times
  if (
    theClass.spelling.startswith("Draw") or
    theClass.spelling == "BRep_Edge" or 
    theClass.spelling == "BRep_Face" or
    theClass.spelling.startswith("DDF") or
    theClass.spelling.startswith("Cocoa") or
    theClass.spelling.startswith("Bin") or
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

  # # error: no matching function for call to 'operator new'
  # if theClass.spelling.startswith("NCollection"):
  #   return False

  # error: no matching function for call to 'operator new'
  if theClass.spelling == "NCollection_ListNode":
    return False

  # error: no matching function for call to 'operator new'
  if theClass.spelling == "NCollection_SeqNode":
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

  # error: undefined symbol
  if (
    theClass.spelling == "D3DHost_FrameBuffer" or
    theClass.spelling == "D3DHost_GraphicDriver" or
    theClass.spelling == "IntPatch_Polyhedron" or
    theClass.spelling == "IVtkOCC_ViewerSelector" or
    theClass.spelling == "IVtkDraw" or
    theClass.spelling == "IntPatch_RLine" or
    theClass.spelling == "IVtk_Interface" or
    theClass.spelling == "IVtk_IView" or
    theClass.spelling == "Xw_Window"
  ):
    return False

  if (
    theClass.spelling == "BOPTest_Objects" or
    theClass.spelling == "BOPTest_DrawableShape" or
    theClass.spelling == "BOPTest" or
    theClass.spelling == "Draw_Drawable3D" or
    theClass.spelling == "DBRep_DrawableShape"
  ):
    return False

  return True
