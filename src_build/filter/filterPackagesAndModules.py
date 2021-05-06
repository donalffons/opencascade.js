def filterPackagesAndModules(packageOrModuleName):
  if packageOrModuleName == "":
    return False

  if packageOrModuleName in [
    "TKViewerTest",
    "TKD3DHost",
    "TKIVtk",
    "TKDraw",
    "TKIVtkDraw",
    "TKDCAF", # requires TKDRAW
    "KQADraw", # requires TKDRAW
    "TKTopTest", # requires TKDRAW
    "TKXDEDRAW", # requires TKDCAF
    "TKXSDRAW", # requires TKDRAW
    "TKTObjDRAW", # requires TKDRAW
    "TKOpenGl", # emcc: error: EM_ASM is not supported in side modules / emcc: error: EM_JS is not supported in side modules during build
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
