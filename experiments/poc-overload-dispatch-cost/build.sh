#!/usr/bin/env bash
# Compile a corpus against the currently-active vendored libembind.js into a
# Node ESM module. Caller is responsible for setting libembind state via
# apply-libembind-patch.sh first.
#
# Usage:
#   ./build.sh <corpus> <label> [extra-emcc-flags...]
#
# Examples:
#   ./build.sh b baseline                                # corpus B against active libembind
#   ./build.sh b patched                                 # corpus B against active libembind
#   ./build.sh a patched-n6 -DCORPUS_A_N=6               # corpus A, N=6 overloads
#   ./build.sh a patched-n8 -DCORPUS_A_N=8               # corpus A, N=8 overloads
set -euo pipefail
cd "$(dirname "$0")"

CORPUS="${1:-b}"
LABEL="${2:-out}"
shift 2 || true

case "${CORPUS}" in
  a) SRC="corpus-a-overloaded.cpp" ;;
  b) SRC="corpus-b-unique-named.cpp" ;;
  *) echo "Unknown corpus: ${CORPUS}. Use 'a' or 'b'." >&2; exit 1 ;;
esac

source /Users/rifont/git/tau/repos/assimpjs/emsdk/emsdk_env.sh > /dev/null 2>&1

EMCC_FLAGS=(
  -O3 -std=c++17
  -lembind
  -sMODULARIZE=1
  -sEXPORT_ES6=1
  -sENVIRONMENT=node
  -sALLOW_MEMORY_GROWTH=1
  -sDYNAMIC_EXECUTION=1
  -sEXPORT_NAME="create_${LABEL//-/_}"
  "$@"
)

OUT="${LABEL}.mjs"
echo "Building ${OUT} from ${SRC} (label=${LABEL})"
emcc "${EMCC_FLAGS[@]}" "${SRC}" -o "${OUT}"
ls -la "${LABEL}.wasm" "${LABEL}.mjs" 2>&1 | awk '{printf "  %8s  %s\n", $5, $NF}'
