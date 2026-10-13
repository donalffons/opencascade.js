#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"

EMSDK_ROOT="../../deps/emsdk"
source "$EMSDK_ROOT/emsdk_env.sh" > /dev/null 2>&1

# emcc --emit-tsd shells out to `tsc`; surface the workspace tsc binary so
# the build doesn't depend on a global install.
export PATH="$(cd ../../../.. && pwd)/node_modules/.bin:$PATH"

emcc -O2 -std=c++17 \
  -lembind \
  -sMODULARIZE=1 \
  -sEXPORT_ES6=1 \
  -sEXPORT_NAME=createModule \
  -sENVIRONMENT=node \
  -sALLOW_MEMORY_GROWTH=1 \
  -sNO_DISABLE_EXCEPTION_CATCHING \
  -sEXPORTED_RUNTIME_METHODS=HEAP8,HEAPU8,HEAP32,HEAPF64 \
  --emit-tsd experiment.d.ts \
  experiment.cpp -o experiment.mjs

echo
echo "Build complete:"
ls -la experiment.wasm experiment.mjs experiment.d.ts | awk '{print "  ", $5, $NF}'
