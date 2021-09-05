#!/bin/bash

if [ $# -eq 0 ]
then
  /opencascade.js/src/buildFromYaml.py /src/builds/opencascade.full.yml
else
  /opencascade.js/src/buildFromYaml.py "$@"
fi
