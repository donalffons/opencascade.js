import clang.cindex

def filterMethodOrProperty(theClass, methodOrProperty):
  # Error during build
  # error: static_assert failed due to requirement '!std::is_pointer<void (*)(Graphic3d_CView *)>::value' "Implicitly binding raw pointers is illegal.  Specify allow_raw_pointer<arg<?>>"
  if theClass.spelling == "Graphic3d_GraduatedTrihedron" and methodOrProperty.spelling == "CubicAxesCallback":
    return False

  # Error during build: error: address of bit-field requested
  if theClass.type.spelling == "MeshVS_TwoColors":
    return False
  
  # Error during build: error: address of bit-field requested
  if (
    theClass.spelling == "Graphic3d_CStructure" and
    methodOrProperty.spelling in [
      "IsInfinite",
      "stick",
      "highlight",
      "visible",
      "HLRValidation",
      "IsForHighlight",
      "IsMutable",
      "Is2dText",
    ]
  ):
    return False

  if methodOrProperty.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and methodOrProperty.kind == clang.cindex.CursorKind.USING_DECLARATION:
    print("Using declarations are not supported! (" + theClass.spelling + ", " + methodOrProperty.spelling + ")")
    return False

  if (
    methodOrProperty.result_type.spelling.startswith("Standard_OStream") or
    methodOrProperty.type.spelling == "std::ifstream"
  ):
    return False

  # error: call to implicitly-deleted copy constructor of 'Aspect_VKeySet'
  # error: rvalue reference to type 'Aspect_VKeySet' cannot bind to lvalue of type 'Aspect_VKeySet'
  # error: call to implicitly-deleted copy constructor of 'Aspect_VKeySet'
  if theClass.spelling == "AIS_ViewController" and (
    methodOrProperty.spelling == "Keys" or
    methodOrProperty.spelling == "ChangeKeys"
  ):
    return False

  # error: private copy constructor used in this function
  if theClass.spelling == "BRepClass3d_SolidExplorer" and methodOrProperty.spelling == "GetTree":
    return False

  # Error comes in the binding code for "gp_TrsfNLerp", which is a template specialization of "NCollection_Lerp"
  # error: type name requires a specifier or qualifier
  # error: cannot cast from type 'void (NCollection_Lerp<gp_Trsf>::*)(double, gp_Trsf &) const' to pointer type 'gp_Trsf (*)(const gp_Trsf &, const gp_Trsf &, double)'
  if theClass.spelling == "NCollection_Lerp" and methodOrProperty.spelling == "Interpolate" and methodOrProperty.is_static_method():
    return False

  # causes extreme memory growth which fails the build (see corresponding typedef filter)
  if theClass.spelling in ["NCollection_Sequence", "NCollection_List"] and "::Iterator" in methodOrProperty.displayname:
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZNK19Geom2dHatch_Hatcher6IsDoneEv`: undefined). Build with -s ASSERTIONS=1 for more info.
  # Seems like ::isDone() is not defined anywhere
  if theClass.spelling == "Geom2dHatch_Hatcher" and methodOrProperty.spelling == "IsDone":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN21Geom2dAPI_Interpolate13ClearTangentsEv`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dAPI_Interpolate" and methodOrProperty.spelling == "ClearTangents":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZNK21Geom2dGcc_Lin2dTanObl11IsParallel2Ev`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dGcc_Lin2dTanObl" and methodOrProperty.spelling == "IsParallel2":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN25Geom2dInt_Geom2dCurveTool11IsCompositeERK17Adaptor2d_Curve2d`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dInt_Geom2dCurveTool" and methodOrProperty.spelling == "IsComposite":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN46Geom2dInt_TheCurveLocatorOfTheProjPCurOfGInter6LocateERK17Adaptor2d_Curve2dS2_iiR17Extrema_POnCurv2dS4_`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dInt_TheCurveLocatorOfTheProjPCurOfGInter" and methodOrProperty.spelling == "Locate":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_IntSS" and methodOrProperty.spelling == "SetTolFixTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_IntSS" and methodOrProperty.spelling == "TolFixTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomAPI_Interpolate" and methodOrProperty.spelling == "ClearTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomFill_FunctionGuide" and methodOrProperty.spelling == "Deriv2T":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomFill_SweepSectionGenerator" and methodOrProperty.spelling == "Init":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_ResConstraintOfMyGradientOfTheComputeLineBezierOfWLApprox" and methodOrProperty.spelling == "Error":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_ResConstraintOfMyGradientbisOfTheComputeLineOfWLApprox" and methodOrProperty.spelling == "Error":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_WLApprox" and methodOrProperty.spelling == "Perform":
    return False

  return True
