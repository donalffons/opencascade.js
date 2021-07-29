def filterPackages(packageName):
  if packageName == "":
    return False

  if packageName in [
    ## Full Module Draw
      ## Toolkit TKDraw
      "DBRep",
      "Draw",
      "DrawTrSurf",

      ## Toolkit TKD3DHostTest
      "D3DHostTest",

      ## Toolkit TKIVtkDraw
      "IVtkDraw",

      ## Toolkit TKTopTest
      "BOPTest",
      "BRepTest",
      "DrawFairCurve",
      "GeometryTest",
      "GeomliteTest",
      "HLRTest",
      "MeshTest",
      "SWDRAW",

      ## Toolkit TKViewerTest
      "ViewerTest",

      ## Toolkit TKOpenGlTest
      "OpenGlTest",

      ## Toolkit TKDCAF
      "DDF",
      "DDataStd",
      "DDocStd",
      "DNaming",
      "DPrsStd",
      "DrawDim",

      ## Toolkit TKTObjDRAW
      "TObjDRAW",

      ## Toolkit TKXSDRAW
      "XSDRAW",
      "XSDRAWIGES",
      "XSDRAWSTEP",
      "XSDRAWSTLVRML",

      ## Toolkit TKQADraw
      "QABugs",
      "QADNaming",
      "QADraw",
      "QANCollection",

      ## Toolkit TKXDEDRAW
      "XDEDRAW",

    ## Partial Module Visualization
      ## Toolkit TKD3DHost
      "D3DHost",

      ## Toolkit TKIVtk
      "IVtk",
      "IVtkOCC",
      "IVtkTools",
      "IVtkVTK",

      ## Toolkit TKMeshVS
      "MeshVS",

      ## Toolkit TKOpenGl
      ## Toolkit TKOpenGles
      "OpenGl",

      ## Toolkit TKService
      # "Aspect",
      "Cocoa",
      # "Font",
      # "Graphic3d",
      # "Image",
      # "Media",
      "WNT",
      # "Wasm",
      # "Xw",

      ## Toolkit TKV3d
      # "AIS",
      "DsgPrs",
      # "Prs3d",
      # "PrsDim",
      # "PrsMgr",
      # "Select3D",
      # "SelectBasics",
      # "SelectMgr",
      # "StdPrs",
      # "StdSelect",
      "V3d",

    "XBRepMesh", # This leads to a naming clas with BRepMesh
  ]:
    return False

  return True
