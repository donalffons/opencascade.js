#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"
source /Users/rifont/git/tau/repos/assimpjs/emsdk/emsdk_env.sh > /dev/null 2>&1

emcc -O3 -std=c++17 \
  -lembind \
  -sMODULARIZE=1 \
  -sEXPORT_ES6=1 \
  -sEXPORT_NAME=createModule \
  -sENVIRONMENT=node \
  -sALLOW_MEMORY_GROWTH=1 \
  -sNO_DISABLE_EXCEPTION_CATCHING \
  experiment.cpp -o experiment.mjs

echo "Build complete: $(ls -la experiment.wasm experiment.mjs | awk '{print $5, $NF}')"
