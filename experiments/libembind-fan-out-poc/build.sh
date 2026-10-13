#!/usr/bin/env bash
# Compile bindings.cpp against the vendored assimpjs emsdk into a Node ESM
# module. The label argument (`negative` or `positive`) is the output
# filename prefix so the same C++ can be built twice against two libembind
# patch states (see README.md).
set -euo pipefail
cd "$(dirname "$0")"

LABEL="${1:-out}"

source /Users/rifont/git/tau/repos/assimpjs/emsdk/emsdk_env.sh > /dev/null 2>&1

EMCC_FLAGS=(
  -O0 -g -std=c++17
  -lembind
  -sMODULARIZE=1
  -sEXPORT_ES6=1
  -sENVIRONMENT=node
  -sALLOW_MEMORY_GROWTH=1
  -sNO_DISABLE_EXCEPTION_CATCHING
  -sDYNAMIC_EXECUTION=1
)

echo "Building ${LABEL}.mjs (${LABEL} libembind state)"
emcc "${EMCC_FLAGS[@]}" -sEXPORT_NAME="create_${LABEL}" bindings.cpp -o "${LABEL}.mjs"

ls -la "${LABEL}.wasm" "${LABEL}.mjs" 2>&1 | awk '{printf "  %8s  %s\n", $5, $NF}'
