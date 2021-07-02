def filterPackages(packageName):
  if packageName == "":
    return False

  if packageName in [
    "D3DHost",
    "IVtk",
    "IVtkVTK",
    "IVtkTools",
    "ViewerTest",
    "IVtkOCC",
    "XBRepMesh",
    "XSDRAWSTLVRML",
    "QADraw",
    "XDEDRAW",
    "TObjDRAW",
    "SWDRAW",
    "Draw",
    "DPrsStd",
    "BRepTest",
    "MeshTest",
    "GeomliteTest",
    "DrawTrSurf",
    "BOPTest",
    "DrawFairCurve",
    "DBRep",
    "DNaming",
    "GeometryTest",
    "HLRTest",
    "QANCollection",
    "DDataStd",
    "DrawDim",
    "DDocStd",
    "DDF",
    "IVtkDraw",
    "IVtk",
    "IVtkOCC",
    "IVtkVTK",
    "IVtkTools",
    "D3DHost",
    "ViewerTest",
  ]:
    return False

  return True
