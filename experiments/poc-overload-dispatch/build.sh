#!/bin/bash
# Build the two POC variants (broken/fixed) as standalone ESM WASM modules.
# Uses the same emcc invocation pattern as experiments/q67-rbv-cost/build-pure-cpp.sh.
set -euo pipefail
cd "$(dirname "$0")"

# Re-use the assimpjs-vendored emsdk (matches the existing experiments).
source /Users/rifont/git/tau/repos/assimpjs/emsdk/emsdk_env.sh > /dev/null 2>&1

EMCC_FLAGS=(
  -O3 -std=c++17
  -lembind
  -sMODULARIZE=1
  -sEXPORT_ES6=1
  -sENVIRONMENT=node
  -sALLOW_MEMORY_GROWTH=1
  -sNO_DISABLE_EXCEPTION_CATCHING
  -sDYNAMIC_EXECUTION=1
)

echo "Building broken.mjs (current codegen pattern)..."
emcc "${EMCC_FLAGS[@]}" -sEXPORT_NAME=createBrokenModule broken.cpp -o broken.mjs

echo "Building fixed.mjs (FIX-A + FIX-B + FIX-C)..."
emcc "${EMCC_FLAGS[@]}" -sEXPORT_NAME=createFixedModule fixed.cpp -o fixed.mjs

echo
ls -la broken.wasm broken.mjs fixed.wasm fixed.mjs | awk '{printf "  %8s  %s\n", $5, $NF}'
