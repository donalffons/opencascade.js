import clang.cindex

def filterMethod(theClass, method):
  if method.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and method.kind == clang.cindex.CursorKind.USING_DECLARATION:
    print("Using declarations are not supported! (" + theClass.spelling + ", " + method.spelling + ")")
    return False

  if method.result_type.spelling.startswith("Standard_OStream"):
    return False

  # error: call to implicitly-deleted copy constructor of 'Aspect_VKeySet'
  # error: rvalue reference to type 'Aspect_VKeySet' cannot bind to lvalue of type 'Aspect_VKeySet'
  # error: call to implicitly-deleted copy constructor of 'Aspect_VKeySet'
  if theClass.spelling == "AIS_ViewController" and (
    method.spelling == "Keys" or
    method.spelling == "ChangeKeys"
  ):
    return False

  # error: private copy constructor used in this function
  if theClass.spelling == "BRepClass3d_SolidExplorer" and method.spelling == "GetTree":
    return False

  # Error comes in the binding code for "gp_TrsfNLerp", which is a template specialization of "NCollection_Lerp"
  # error: type name requires a specifier or qualifier
  # error: cannot cast from type 'void (NCollection_Lerp<gp_Trsf>::*)(double, gp_Trsf &) const' to pointer type 'gp_Trsf (*)(const gp_Trsf &, const gp_Trsf &, double)'
  if theClass.spelling == "NCollection_Lerp" and method.spelling == "Interpolate" and method.is_static_method():
    return False

  # causes extreme memory growth which fails the build (see corresponding typedef filter)
  if theClass.spelling in ["NCollection_Sequence", "NCollection_List"] and "::Iterator" in method.displayname:
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZNK19Geom2dHatch_Hatcher6IsDoneEv`: undefined). Build with -s ASSERTIONS=1 for more info.
  # Seems like ::isDone() is not defined anywhere
  if theClass.spelling == "Geom2dHatch_Hatcher" and method.spelling == "IsDone":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN21Geom2dAPI_Interpolate13ClearTangentsEv`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dAPI_Interpolate" and method.spelling == "ClearTangents":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZNK21Geom2dGcc_Lin2dTanObl11IsParallel2Ev`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dGcc_Lin2dTanObl" and method.spelling == "IsParallel2":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN25Geom2dInt_Geom2dCurveTool11IsCompositeERK17Adaptor2d_Curve2d`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dInt_Geom2dCurveTool" and method.spelling == "IsComposite":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN46Geom2dInt_TheCurveLocatorOfTheProjPCurOfGInter6LocateERK17Adaptor2d_Curve2dS2_iiR17Extrema_POnCurv2dS4_`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dInt_TheCurveLocatorOfTheProjPCurOfGInter" and method.spelling == "Locate":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_IntSS" and method.spelling == "SetTolFixTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_IntSS" and method.spelling == "TolFixTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomAPI_Interpolate" and method.spelling == "ClearTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomFill_FunctionGuide" and method.spelling == "Deriv2T":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomFill_SweepSectionGenerator" and method.spelling == "Init":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_ResConstraintOfMyGradientOfTheComputeLineBezierOfWLApprox" and method.spelling == "Error":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_ResConstraintOfMyGradientbisOfTheComputeLineOfWLApprox" and method.spelling == "Error":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_WLApprox" and method.spelling == "Perform":
    return False

  return True
