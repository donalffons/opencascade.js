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

  # This seems to fix thie following randomly occuring error during wasm instantiation:
  # 013bb652:0x2fb97a Uncaught (in promise) RuntimeError: function signature mismatch
  #   at _ZN8Standard8AllocateEm (<anonymous>:wasm-function[1074]:0x2fb97a)
  #   at _ZN25NCollection_BaseAllocator19CommonBaseAllocatorEv (<anonymous>:wasm-function[2193]:0x32a74f)
  #   at obj.<computed> (http://localhost:9000/polygon.js:106:24109)
  #   at <anonymous>:wasm-function[1549]:0x1eaa64
  #   at __post_instantiate (<anonymous>:wasm-function[470]:0x16f719)
  #   at callRuntimeCallbacks (http://localhost:9000/polygon.js:106:18919)
  #   at initRuntime (http://localhost:9000/polygon.js:106:14373)
  #   at doRun (http://localhost:9000/polygon.js:106:2985866)
  #   at run (http://localhost:9000/polygon.js:106:2986173)
  #   at runCaller (http://localhost:9000/polygon.js:106:2985225)
  if theClass.spelling == "NCollection_BaseAllocator":
    return False

  return True
