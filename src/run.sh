#!/bin/bash

/opencascade.js/src/applyPatches.py
if [ $# -eq 0 ]
then
  /opencascade.js/src/compile.py
  /opencascade.js/src/buildStandardModules.py
else
  /opencascade.js/src/buildFromYaml.py "$@"
fi
