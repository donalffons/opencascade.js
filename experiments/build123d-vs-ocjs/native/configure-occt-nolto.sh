#!/usr/bin/env bash
# Configure native OCCT 8.0.0 WITHOUT LTO (matches OCJS OCJS_LTO=0 build).
#
#   CMAKE_INTERPROCEDURAL_OPTIMIZATION=FALSE
#
# Build with:
#   cmake --build "$OCCT_NOLTO_BUILD_DIR" --parallel 6 --target install
#
# This script is idempotent — safe to re-run; cmake will reconfigure incrementally.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OCJS_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"

OCCT_SRC_DIR="${OCCT_SRC_DIR:-$OCJS_ROOT/deps/OCCT}"
OCCT_NOLTO_BUILD_DIR="${OCCT_NOLTO_BUILD_DIR:-$OCJS_ROOT/build-native-occt-nolto}"
OCCT_NOLTO_INSTALL_DIR="${OCCT_NOLTO_INSTALL_DIR:-$OCCT_NOLTO_BUILD_DIR/install}"

echo "OCCT source:  $OCCT_SRC_DIR"
echo "OCCT build:   $OCCT_NOLTO_BUILD_DIR"
echo "OCCT install: $OCCT_NOLTO_INSTALL_DIR"

cmake -S "$OCCT_SRC_DIR" -B "$OCCT_NOLTO_BUILD_DIR" \
  -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_INTERPROCEDURAL_OPTIMIZATION=FALSE \
  -DBUILD_USE_PCH=OFF \
  -DUSE_TBB=OFF \
  -DBUILD_RELEASE_DISABLE_EXCEPTIONS=OFF \
  -DBUILD_MODULE_Visualization=OFF \
  -DBUILD_MODULE_ApplicationFramework=OFF \
  -DBUILD_MODULE_DataExchange=OFF \
  -DBUILD_MODULE_Draw=OFF \
  -DBUILD_LIBRARY_TYPE=Shared \
  -DCMAKE_INSTALL_PREFIX="$OCCT_NOLTO_INSTALL_DIR" \
  -DCMAKE_OSX_DEPLOYMENT_TARGET=11.0 \
  "$@"

echo
echo "Configured. Build with:"
echo "  cmake --build $OCCT_NOLTO_BUILD_DIR --parallel 6 --target install"
