#!/bin/bash

if [ $# -eq 0 ]
then
  /opencascade.js/src/buildFromYaml.py /opencascade.js/builds/opencascade.full.yml
else
  /opencascade.js/src/buildFromYaml.py "$@"
fi
