#!/bin/bash

if [ $# -eq 0 ]
then
  /opencascade.js/src/buildFromYaml.py /opencascade.js/src/fullBuild.yml
else
  /opencascade.js/src/buildFromYaml.py "$@"
fi
