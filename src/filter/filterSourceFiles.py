def filterSourceFile(filename):
  # if filename == "lex.ExprIntrp.c":
  #   return False
  if filename.endswith(".cxx") or filename.endswith(".cpp") or filename.endswith(".c"):
    return True
  return False
