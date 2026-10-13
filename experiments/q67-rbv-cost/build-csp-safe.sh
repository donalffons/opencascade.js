#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
source /Users/rifont/git/tau/repos/assimpjs/emsdk/emsdk_env.sh > /dev/null 2>&1

# Note: -sDYNAMIC_EXECUTION=0 explicitly to enforce CSP-strict mode.
emcc -O3 -std=c++17 \
  -lembind \
  -sMODULARIZE=1 \
  -sEXPORT_ES6=1 \
  -sEXPORT_NAME=createModule \
  -sENVIRONMENT=node \
  -sALLOW_MEMORY_GROWTH=1 \
  -sNO_DISABLE_EXCEPTION_CATCHING \
  -sDYNAMIC_EXECUTION=0 \
  csp-safe-experiment.cpp -o csp-safe.mjs

echo "Build complete: $(ls -la csp-safe.wasm csp-safe.mjs | awk '{print $5, $NF}')"
