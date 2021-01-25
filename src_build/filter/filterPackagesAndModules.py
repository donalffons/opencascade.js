def filterPackagesAndModules(packageOrModuleName):
  if packageOrModuleName == "":
    return False

  if packageOrModuleName in [
    "TKViewerTest",
    "TKD3DHost",
    "TKIVtk",
    "TKDraw",
    "TKIVtkDraw",
  ]:
    return False

  if packageOrModuleName in [
    "D3DHost",
    "IVtk",
    "IVtkVTK",
    "IVtkTools",
    "ViewerTest",
    "IVtkOCC",
    "IVtkDraw",
    "Draw",
  ]:
    return False

  return True
