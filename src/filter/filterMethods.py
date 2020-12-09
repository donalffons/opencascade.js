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

  return True
