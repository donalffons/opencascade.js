def filterSourceFile(filename):
  # fatal error: 'TargetConditionals.h' file not found
  if filename.endswith(".mm"):
    return False
  
  # error: undefined symbol: _ZN12Cocoa_Window17InvalidateContentERKN11opencascade6handleI24Aspect_DisplayConnectionEE
  # and more members of Cocoa_Window
  if filename.endswith("ViewerTest_ViewerCommands.cxx"):
    return False

  if filename.endswith(".cxx") or filename.endswith(".cpp") or filename.endswith(".c"):
    return True
  return False
