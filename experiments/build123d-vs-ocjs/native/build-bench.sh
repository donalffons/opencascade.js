#!/usr/bin/env bash
# Configure + build the C++ bench binary against a previously installed OCCT.
#
# Usage:
#   ./build-bench.sh lto       # builds against build-native-occt-lto/install/
#   ./build-bench.sh nolto     # builds against build-native-occt-nolto/install/
#
# Output binary: build-native-bench-<variant>/bench

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OCJS_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"

VARIANT="${1:-lto}"
case "$VARIANT" in
  lto|nolto) ;;
  *) echo "Usage: $0 {lto|nolto}" >&2; exit 1 ;;
esac

OCCT_INSTALL_DIR="${OCCT_INSTALL_DIR:-$OCJS_ROOT/build-native-occt-$VARIANT/install}"
BENCH_BUILD_DIR="${BENCH_BUILD_DIR:-$OCJS_ROOT/build-native-bench-$VARIANT}"

if [ ! -d "$OCCT_INSTALL_DIR/lib/cmake/opencascade" ]; then
  echo "ERROR: OCCT not installed at $OCCT_INSTALL_DIR" >&2
  echo "Run configure-occt-$VARIANT.sh first, then:" >&2
  echo "  cmake --build \$OCJS_ROOT/build-native-occt-$VARIANT --parallel 6 --target install" >&2
  exit 1
fi

echo "OCCT install: $OCCT_INSTALL_DIR"
echo "Bench build:  $BENCH_BUILD_DIR"

cmake -S "$SCRIPT_DIR" -B "$BENCH_BUILD_DIR" \
  -DCMAKE_BUILD_TYPE=Release \
  -DOpenCASCADE_DIR="$OCCT_INSTALL_DIR/lib/cmake/opencascade" \
  -DCMAKE_INSTALL_RPATH="$OCCT_INSTALL_DIR/lib" \
  -DCMAKE_BUILD_RPATH="$OCCT_INSTALL_DIR/lib"

cmake --build "$BENCH_BUILD_DIR" --parallel 6

echo
echo "Built: $BENCH_BUILD_DIR/bench"
echo "Run with: $BENCH_BUILD_DIR/bench --warmup 2 --iters 7 --engine native-cpp-occt-$VARIANT $([ "$VARIANT" = lto ] && echo --lto)"
