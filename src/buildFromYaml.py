#!/usr/bin/python3

import yaml
import sys
from build import buildWasmModuleSet

with open(sys.argv[1], 'r') as stream:
  buildConfigs = yaml.safe_load(stream)
  buildWasmModuleSet(buildConfigs)
