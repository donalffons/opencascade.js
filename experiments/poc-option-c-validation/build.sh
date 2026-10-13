#!/usr/bin/env bash
# Build both corpora against the same C1-only libembind patch.
#
# Usage: ./build.sh [a|b|all]   (default: all)
set -euo pipefail
cd "$(dirname "$0")"

WHICH="${1:-all}"

./apply-libembind-patch.sh apply > /dev/null

source /Users/rifont/git/tau/repos/assimpjs/emsdk/emsdk_env.sh > /dev/null 2>&1

EMCC_FLAGS=(
  -O2 -std=c++20
  -lembind
  -sMODULARIZE=1
  -sEXPORT_ES6=1
  -sENVIRONMENT=node
  -sALLOW_MEMORY_GROWTH=1
)

build_one() {
  local variant="$1"
  local src="corpus-${variant}-$([[ $variant == a ]] && echo fan-out || echo optional).cpp"
  local label="mod-${variant}-$([[ $variant == a ]] && echo fan-out || echo optional)"
  local out="${label}.mjs"
  local export_name="create_${label//-/_}"
  echo "── building ${out} from ${src} ──"
  emcc "${EMCC_FLAGS[@]}" -sEXPORT_NAME="${export_name}" "${src}" -o "${out}"
  ls -la "${label}.wasm" "${label}.mjs" 2>&1 | awk '{printf "  %8s  %s\n", $5, $NF}'
}

case "${WHICH}" in
  a)   build_one a ;;
  b)   build_one b ;;
  all) build_one a; build_one b ;;
  *)   echo "Usage: $0 [a|b|all]" >&2; exit 1 ;;
esac

echo "✓ build complete"
