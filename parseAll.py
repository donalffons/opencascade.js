#!/usr/bin/python

import subprocess
import os

occtFiles = [
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
