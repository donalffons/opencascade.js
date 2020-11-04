def filterMethod(theClass, method):
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
  return True
