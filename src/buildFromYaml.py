#!/usr/bin/python3

import yaml
import sys
from build import buildWasmModule

with open(sys.argv[1], 'r') as stream:
  yamlContents = yaml.safe_load(stream)
  for buildConfigName, buildConfig in yamlContents.items():
    buildWasmModule(buildConfigName, buildConfig, buildConfigName)
