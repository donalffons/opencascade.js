#!/usr/bin/python3

import os
import subprocess

os.chdir("/")

for dirpath, dirnames, filenames in os.walk("/opencascade.js/src_build/patches"):
  for filename in filenames:
    print("applying patch " + dirpath + "/" + filename)
    patchFile = open(dirpath + "/" + filename, 'r')
    p = patchFile.read()
    patchFile.close()
    try:
      subprocess.check_call(["patch -p0 < '"+ dirpath + "/" + filename + "'"], stdout=subprocess.PIPE, shell=True)
    except:
      raise Exception("Could not apply patch!")
