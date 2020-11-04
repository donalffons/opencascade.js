def filterSourceFile(filename):
  if filename.endswith(".cxx") or filename.endswith(".cpp"):
    return True
  return False
