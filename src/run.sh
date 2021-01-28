#!/bin/bash

if [ $# -eq 0 ]
then
  /opencascade.js/src/buildStandardModules.py
else
  /opencascade.js/src/buildFromYaml.py "$@"
fi
