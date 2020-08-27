#!/usr/bin/python3.8

import subprocess
import os

occtFiles = [
  # BRepBuilderAPI
  "BRepBuilderAPI_BndBoxTreeSelector.hxx",
  "BRepBuilderAPI_CellFilter.hxx",
  "BRepBuilderAPI_Collect.hxx",
  "BRepBuilderAPI_Collect.hxx",
  "BRepBuilderAPI_Command.hxx",
  "BRepBuilderAPI_Command.hxx",
  "BRepBuilderAPI_Copy.hxx",
  "BRepBuilderAPI_Copy.hxx",
  "BRepBuilderAPI.hxx",
  "BRepBuilderAPI_EdgeError.hxx",
  "BRepBuilderAPI_FaceError.hxx",
  "BRepBuilderAPI_FastSewing.hxx",
  "BRepBuilderAPI_FastSewing.hxx",
  "BRepBuilderAPI_FindPlane.hxx",
  "BRepBuilderAPI_FindPlane.hxx",
  "BRepBuilderAPI_GTransform.hxx",
  "BRepBuilderAPI_GTransform.hxx",
  "BRepBuilderAPI.hxx",
  "BRepBuilderAPI_MakeEdge2d.hxx",
  "BRepBuilderAPI_MakeEdge2d.hxx",
  "BRepBuilderAPI_MakeEdge.hxx",
  "BRepBuilderAPI_MakeEdge.hxx",
  "BRepBuilderAPI_MakeFace.hxx",
  "BRepBuilderAPI_MakeFace.hxx",
  "BRepBuilderAPI_MakePolygon.hxx",
  "BRepBuilderAPI_MakePolygon.hxx",
  "BRepBuilderAPI_MakeShape.hxx",
  "BRepBuilderAPI_MakeShape.hxx",
  "BRepBuilderAPI_MakeShell.hxx",
  "BRepBuilderAPI_MakeShell.hxx",
  "BRepBuilderAPI_MakeSolid.hxx",
  "BRepBuilderAPI_MakeSolid.hxx",
  "BRepBuilderAPI_MakeVertex.hxx",
  "BRepBuilderAPI_MakeVertex.hxx",
  "BRepBuilderAPI_MakeWire.hxx",
  "BRepBuilderAPI_MakeWire.hxx",
  "BRepBuilderAPI_ModifyShape.hxx",
  "BRepBuilderAPI_ModifyShape.hxx",
  "BRepBuilderAPI_NurbsConvert.hxx",
  "BRepBuilderAPI_NurbsConvert.hxx",
  "BRepBuilderAPI_PipeError.hxx",
  "BRepBuilderAPI_Sewing.hxx",
  "BRepBuilderAPI_Sewing.hxx",
  "BRepBuilderAPI_Sewing.hxx",
  "BRepBuilderAPI_ShapeModification.hxx",
  "BRepBuilderAPI_ShellError.hxx",
  "BRepBuilderAPI_Transform.hxx",
  "BRepBuilderAPI_Transform.hxx",
  "BRepBuilderAPI_TransitionMode.hxx",
  "BRepBuilderAPI_VertexInspector.hxx",
  "BRepBuilderAPI_WireError.hxx",

  # gp
  "gp_Pnt.hxx",
  "gp_Quaternion.hxx",
  "gp_QuaternionNLerp.hxx",
  "gp_QuaternionSLerp.hxx",
  "gp_Sphere.hxx",
  "gp_Torus.hxx",
  "gp_Trsf2d.hxx",
  "gp_TrsfForm.hxx",
  "gp_Trsf.hxx",
  "gp_TrsfNLerp.hxx",
  "gp_Vec2d.hxx",
  "gp_Vec.hxx",
  "gp_VectorWithNullMagnitude.hxx",
  "gp_XY.hxx",
  "gp_XYZ.hxx"
]

for occtFile in occtFiles:
  moduleName = occtFile.split('_')[0]
  inputFile = "./build/occt/src/" + moduleName + "/" + occtFile
  if not os.path.exists("./embind/" + moduleName):
    os.makedirs("./embind/" + moduleName)
  outputFile = "./embind/" + moduleName + "/" + os.path.splitext(occtFile)[0] + ".h"
  subprocess.call(['./parse.py', inputFile, outputFile])
