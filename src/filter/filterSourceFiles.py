def filterSourceFile(filename):
  if filename.endswith(".cxx") or filename.endswith(".cpp") or filename.endswith(".c") or filename.endswith(".mm"):
    return True
  return False
