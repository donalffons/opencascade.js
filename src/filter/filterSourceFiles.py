def filterSourceFile(filename):
  # fatal error: 'TargetConditionals.h' file not found
  if filename.endswith(".mm"):
    return False

  if filename.endswith(".cxx") or filename.endswith(".cpp") or filename.endswith(".c"):
    return True
  return False
