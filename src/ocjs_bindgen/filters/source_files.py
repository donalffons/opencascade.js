"""Source-file filter consumed by the C++ compile drivers."""


def filterSourceFile(filename):
  if filename.endswith(".mm"):
    return False
  if "/GTests/" in filename or filename.endswith("_Test.cxx") or filename.endswith("_Test.cpp"):
    return False
  if filename.endswith(".cxx") or filename.endswith(".cpp") or filename.endswith(".c"):
    return True
  return False
