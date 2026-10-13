#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"

echo "=== libcascade Native Build ==="

# Shared emsdk with assimpjs
export EMSDK="${EMSDK:-$(cd ../assimpjs/emsdk && pwd)}"
echo "Using EMSDK: $EMSDK"
source "$EMSDK/emsdk_env.sh"
echo "Emscripten: $(emcc --version | head -1)"

# Dependency roots
export OCJS_ROOT="$(pwd)"
export OCCT_ROOT="${OCCT_ROOT:-$(cd ../OCCT && pwd)}"
export RAPIDJSON_ROOT="${RAPIDJSON_ROOT:-$(cd ../rapidjson && pwd)}"
export FREETYPE_ROOT="${FREETYPE_ROOT:-$(cd ../freetype && pwd)}"

# Dev build flags: -O0 and no LTO for fast iteration
export OCJS_OPT="${OCJS_OPT:--O0}"
export OCJS_LTO="${OCJS_LTO:-0}"

echo "OCJS_ROOT:      $OCJS_ROOT"
echo "OCCT_ROOT:      $OCCT_ROOT"
echo "RAPIDJSON_ROOT: $RAPIDJSON_ROOT"
echo "FREETYPE_ROOT:  $FREETYPE_ROOT"
echo "OCJS_OPT:       $OCJS_OPT"
echo "OCJS_LTO:       $OCJS_LTO"
echo ""

# Ensure build directories exist
mkdir -p build/{bindings,sources,dist}

# Step 1: Apply OCCT patches
echo "=== Step 1: Applying patches ==="
python3 src/patches/patch_using_statements.py

# Step 2: Build flat includes + PCH (25x compilation speedup)
echo "=== Step 2: Building flat includes + precompiled header ==="
python3 -c "
import sys; sys.path.insert(0, 'src')
from ocjs_bindgen.config.paths import buildFlatIncludes, buildPch
buildFlatIncludes()
buildPch()
"

# Step 3: Generate bindings
echo "=== Step 3: Generating bindings ==="
python3 -m ocjs_bindgen --config bindgen-filters.yaml

# Step 4: Compile bindings (uses PCH + flat includes)
echo "=== Step 4: Compiling bindings ==="
python3 src/compileBindings.py single-threaded

# Step 5: Compile OCCT sources via CMake (replaces legacy src/compileSources.py)
echo "=== Step 5: Compiling OCCT sources (CMake) ==="
./build-wasm.sh sources

echo ""
echo "=== Build complete ==="
echo "Run 'PYTHONPATH=src python3 -m ocjs_bindgen.link.yaml_build <config.yml>' to link into final WASM."
echo ""
echo "Build optimization summary:"
echo "  - Flat includes: 467 -I paths -> 1 (eliminates stat() overhead)"
echo "  - PCH: 5,640 headers precompiled once (~92MB binary)"
echo "  - Combined: ~25x per-file speedup (52s -> 2s per binding file)"
