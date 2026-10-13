#!/usr/bin/env bash
# build.sh — emcc link script for the matrix-row bench fixture.
#
# Builds three modules from the bindings/ directory:
#   mod-rows.{mjs,wasm}            — combined synthetic + targeted-real-OCCT
#   mod-rows-val.{mjs,wasm}        — Q3 val-primitive variant
#   mod-rows-optional.{mjs,wasm}   — Q3 optional-primitive variant
#
# Reuses the sibling PoC's emsdk + OCCT toolkit archives (see
# experiments/poc-occt-integration/build.sh for the rationale).

set -euo pipefail
cd "$(dirname "$0")"

OCJS_ROOT="$(cd ../.. && pwd)"
EMSDK_ENV="/Users/rifont/git/tau/repos/assimpjs/emsdk/emsdk_env.sh"
OCCT_INCLUDES="${OCJS_ROOT}/build/occt-includes"
OCCT_LIBDIR="${OCJS_ROOT}/build/occt-cmake/lin32/clang/lib"

WHICH="${1:-all}"

if [[ ! -d "${OCCT_LIBDIR}" ]]; then
  echo "ERROR: OCCT prebuilt toolkit archives missing at ${OCCT_LIBDIR}"
  echo "       The matrix-row bench depends on the same prebuilt artefacts"
  echo "       as experiments/poc-occt-integration. Run a baseline OCJS"
  echo "       build first or copy the toolkits into place."
  exit 1
fi

if [[ ! -f "${EMSDK_ENV}" ]]; then
  echo "ERROR: emsdk env script missing at ${EMSDK_ENV}"
  echo "       Initialize the assimpjs emsdk submodule or repoint EMSDK_ENV."
  exit 1
fi

"$(dirname "$0")/../poc-occt-integration/apply-libembind.sh" "${LIBEMBIND_MODE:-prod+pad}" > /dev/null

# shellcheck disable=SC1090
source "${EMSDK_ENV}" > /dev/null 2>&1

EMCC_COMPILE_FLAGS=(
  -std=c++20
  -O3
  -fwasm-exceptions
  -msimd128
  -DOCCT_NO_DUMP
  -UOCC_CONVERT_SIGNALS
  -I "${OCCT_INCLUDES}"
)

TOOLKITS=(
  -lTKMesh -lTKBO -lTKShHealing -lTKBool -lTKFillet -lTKOffset -lTKHLR
  -lTKPrim -lTKTopAlgo -lTKBRep -lTKGeomAlgo -lTKGeomBase
  -lTKG3d -lTKG2d -lTKMath -lTKernel
)

EMCC_LINK_FLAGS=(
  -lembind
  -L "${OCCT_LIBDIR}"
  "${TOOLKITS[@]}"
  -O3
  -fwasm-exceptions
  -msimd128
  -sMODULARIZE=1
  -sEXPORT_ES6=1
  -sENVIRONMENT=node
  -sALLOW_MEMORY_GROWTH=1
  -sINITIAL_MEMORY=64MB
  -sMAXIMUM_MEMORY=4GB
  -sWASM_BIGINT
  -sSTACK_SIZE=8388608
)

build_one() {
  local label="$1"
  local src="$2"
  local export_name="$3"
  local out="${label}.mjs"
  echo "── building ${out} from ${src} ──"
  local t0
  t0=$(date +%s)
  emcc \
    "${EMCC_COMPILE_FLAGS[@]}" \
    "${src}" \
    "${EMCC_LINK_FLAGS[@]}" \
    -sEXPORT_NAME="${export_name}" \
    -o "${out}"
  local elapsed=$(( $(date +%s) - t0 ))
  ls -la "${label}.wasm" "${label}.mjs" 2>&1 | awk '{printf "  %10s  %s\n", $5, $NF}'
  echo "  link time: ${elapsed}s"
}

case "${WHICH}" in
  rows)     build_one mod-rows          bindings/bindings-rows.cpp           create_rows ;;
  val)      build_one mod-rows-val      bindings/bindings-rows-val.cpp       create_rows_val ;;
  optional) build_one mod-rows-optional bindings/bindings-rows-optional.cpp  create_rows_optional ;;
  all)
    build_one mod-rows          bindings/bindings-rows.cpp           create_rows
    build_one mod-rows-val      bindings/bindings-rows-val.cpp       create_rows_val
    build_one mod-rows-optional bindings/bindings-rows-optional.cpp  create_rows_optional
    ;;
  *)
    echo "Usage: $0 [rows|val|optional|all]"
    exit 1
    ;;
esac

echo "✓ build complete"
