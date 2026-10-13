#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"

# Use the ocjs-checked-in emsdk so we hit the same toolchain (emcc 5.0.1)
# that the production build uses. Avoids "works on my machine" drift.
EMSDK_ROOT="../../deps/emsdk"
source "$EMSDK_ROOT/emsdk_env.sh" > /dev/null 2>&1

emcc -O2 -std=c++17 \
  -lembind \
  -sMODULARIZE=1 \
  -sEXPORT_ES6=1 \
  -sEXPORT_NAME=createModule \
  -sENVIRONMENT=node \
  -sALLOW_MEMORY_GROWTH=1 \
  -sNO_DISABLE_EXCEPTION_CATCHING \
  --emit-tsd experiment.d.ts \
  experiment.cpp -o experiment.mjs

echo
echo "Build complete:"
ls -la experiment.wasm experiment.mjs experiment.d.ts | awk '{print "  ", $5, $NF}'
