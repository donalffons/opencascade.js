#!/bin/bash
set -euo pipefail

# ── libcascade WASM build script ─────────────────────────────────────
#
# Single entry point for all build operations: PCH rebuild, binding
# compilation, source compilation, and final WASM linking.
# Includes config-keyed compilation caching and provenance tracking.
#
# Usage:
#   ./build-wasm.sh link <yaml>           # Link only (fastest, reuses .o)
#   ./build-wasm.sh pch                   # Rebuild flat includes + PCH
#   ./build-wasm.sh pch link <yaml>       # Rebuild PCH then link
#   ./build-wasm.sh generate              # Generate binding .cpp files from OCCT headers
#   ./build-wasm.sh bindings              # Compile bindings only
#   ./build-wasm.sh sources               # Compile OCCT sources only
#   ./build-wasm.sh full <yaml>           # Full pipeline: pch + generate + bindings + sources + link
#   ./build-wasm.sh --config single-threaded full <yaml>     # Full pipeline with named configuration
#
# Environment overrides (all optional, sensible defaults provided):
#   EMSDK              Path to emsdk (default: deps/emsdk/)
#   OCCT_ROOT          Path to OCCT source (default: deps/OCCT/)
#   RAPIDJSON_ROOT     Path to rapidjson (default: deps/rapidjson/)
#   FREETYPE_ROOT      Path to freetype (default: ./freetype)
#   OCJS_OPT           Compile optimization level (default: -O2)
#   OCJS_EXTRA_CFLAGS  Extra compile flags appended to C/CXX flags (e.g. "-mllvm -inline-threshold=128")
#   OCJS_LTO           Enable LTO at compile time: 0|1 (default: 1)
#   OCJS_EXCEPTIONS    Enable native WASM exceptions: 0|1 (default: 0)
#   THREADING          Threading mode: single-threaded|multi-threaded (default: single-threaded)
#
# Examples:
#   # Production single build (-O2 compile, noLTO)
#   OCJS_LTO=0 ./build-wasm.sh full build-configs/full.yml
#
#   # Quick rebuild after changing filterPackages.py
#   ./build-wasm.sh pch link build-configs/full.yml
#
#   # Dev build (fast compile, no LTO)
#   OCJS_OPT=-O0 OCJS_LTO=0 ./build-wasm.sh link custom_build.yml
#
#   # Use named configuration
#   ./build-wasm.sh --config single-threaded full consumer.yml
# ─────────────────────────────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# ── Help ─────────────────────────────────────────────────────────────

show_help() {
  cat << 'HELPEOF'
Usage: ./build-wasm.sh <command> [options] [<yaml-config>]

Commands:
  full <yaml>           Full pipeline: apply-patches + pch + generate + bindings + sources + bind-symbols + link
  apply-patches         Apply OCCT source patches (idempotent — all required patches + libembind patch)
  link <yaml>           Link only (reuses compiled .o files, fastest)
  link-core <yaml>      Link into the internal cache-owned artifact directory
  materialize <yaml>    Copy cached artifacts to OCJS_OUTPUT_DIR
  bind-symbols <yaml>   Extract Embind registrations to build/additional-bind-symbols.json (run before link)
  pch                   Rebuild flat includes + precompiled header
  generate              Generate binding .cpp files from OCCT headers
  bindings              Compile bindings only
  sources               Compile OCCT sources only
  occt-libraries        Compile OCCT sources into a build/ that holds nothing else
                        (the Docker occt-libs-* stages; skips the build-flags guard,
                        which needs the bindgen package)
  validate <yaml>       Validate YAML config without building
  clean-generated       Remove all generated .d.ts.json and .cpp files (handles symlinks)
  clean-objects         Remove all compiled .o files from compiled-bindings/ (handles symlinks)

Options:
  --help                Show this help message
  --config <name>       Apply a named configuration from build-configs/configurations.json

Environment Variables:
  EMSDK                 Path to Emscripten SDK (default: deps/emsdk/)
  OCCT_ROOT             Path to OCCT source (default: deps/OCCT/)
  RAPIDJSON_ROOT        Path to rapidjson (default: deps/rapidjson/)
  FREETYPE_ROOT         Path to freetype (default: deps/freetype/)
  OCJS_CONFIG           Named configuration (alternative to --config flag)
  OCJS_OPT              Optimization level: -O0, -O2, -O3, -Os, -Oz (default: -O2)
  OCJS_EXTRA_CFLAGS     Extra compile flags (e.g. "-mllvm -inline-threshold=128")
  OCJS_LTO              Enable LTO: 0|1 (default: 0)
  OCJS_EXCEPTIONS       Native WASM exceptions: 0|1 (default: 0)
  THREADING             Threading mode: single-threaded|multi-threaded (default: single-threaded)
  OCJS_STRICT_DEPS      Fail on dependency commit mismatch: 0|1 (default: 0)

Examples:
  # Full build with a named configuration
  ./build-wasm.sh --config single-threaded full build-configs/full.yml

  # Link only with consumer YAML (reuses compile cache)
  ./build-wasm.sh --config single-threaded link path/to/consumer.yml

  # Override a flag from the config
  OCJS_WASM_OPT_LEVEL=-O4 ./build-wasm.sh --config single-threaded full consumer.yml

  # Raw env vars, no config (backward compat)
  OCJS_OPT=-O3 OCJS_LTO=0 ./build-wasm.sh full build-configs/full.yml

  # Validate config without building
  ./build-wasm.sh validate build-configs/full.yml
HELPEOF
  exit 0
}

if [ "${1:-}" = "--help" ] || [ "${1:-}" = "-h" ]; then
  show_help
fi

# (cache-list and cache-gc removed -- caching is managed by Nx)

_resolve_symlink_target() {
  local path="$1"
  if [ -L "$path" ]; then
    readlink -f "$path" 2>/dev/null || readlink "$path"
  else
    echo "$path"
  fi
}

_ensure_doxygen() {
  # System-only check. The pinned-tarball download path was removed because:
  #   - The doxygen GitHub release only ships an x86_64 Linux tarball.
  #   - On arm64 Linux (Docker Desktop on Apple Silicon, GitHub Actions
  #     ubuntu-24.04-arm, etc.) the binary fails to execute, then
  #     extract-docs.py silently fell back to system doxygen anyway —
  #     producing host-vs-container JSDoc divergence with no diagnostic.
  # The OCCT XML extraction is stable across Doxygen 1.9.x through 1.16.x,
  # so we accept whatever the system provides. On arm64, verify the binary is
  # executable (not merely present on disk) before preferring the pinned copy —
  # see extract-docs.py doxygen resolution logic.
  # arm64 doxygen must be executable, not merely present on disk.
  if ! command -v doxygen >/dev/null 2>&1; then
    cat >&2 <<'EOF'
ERROR: doxygen not installed.
  Linux  : apt-get install -y doxygen     (Ubuntu 22.04 ships 1.9.1+, 24.04 ships 1.10.x)
  macOS  : brew install doxygen           (Homebrew ships 1.14.x)
  Other  : https://www.doxygen.nl/manual/install.html
This project no longer ships a pinned doxygen binary because upstream does
not publish arm64-linux releases. The generated JSDoc is functionally
identical across doxygen 1.9.x through 1.16.x for the OCCT corpus.
EOF
    return 1
  fi
  echo "  Using system Doxygen $(doxygen --version 2>/dev/null | awk '{print $1}')"
}

if [ "${1:-}" = "clean-generated" ]; then
  echo "Cleaning generated .d.ts.json and .cpp files..."
  target="$(_resolve_symlink_target "$SCRIPT_DIR/build/bindings")"
  if [ -d "$target" ]; then
    count=$(find "$target" \( -name "*.d.ts.json" -o \( -name "*.cpp" ! -name "*.cpp.o" \) \) | wc -l | tr -d ' ')
    find "$target" -name "*.d.ts.json" -delete 2>/dev/null || true
    find "$target" -name "*.cpp" ! -name "*.cpp.o" -delete 2>/dev/null || true
    echo "  Removed $count generated files."
  else
    echo "  No build/bindings directory found."
  fi
  echo "Done. Run 'generate' to regenerate."
  exit 0
fi

if [ "${1:-}" = "clean-objects" ]; then
  echo "Cleaning compiled .o files..."
  target="$SCRIPT_DIR/build/compiled-bindings"
  if [ -d "$target" ]; then
    count=$(find "$target" -name "*.cpp.o" | wc -l | tr -d ' ')
    rm -rf "$target"
    echo "  Removed $count object files from compiled-bindings/."
  else
    echo "  No build/compiled-bindings directory found."
  fi
  # Also clean legacy .cpp.o from build/bindings/ if present
  legacy="$(_resolve_symlink_target "$SCRIPT_DIR/build/bindings")"
  if [ -d "$legacy" ]; then
    legacy_count=$(find "$legacy" -name "*.cpp.o" 2>/dev/null | wc -l | tr -d ' ')
    if [ "$legacy_count" -gt 0 ]; then
      find "$legacy" -name "*.cpp.o" -delete 2>/dev/null || true
      echo "  Removed $legacy_count legacy object files from bindings/."
    fi
  fi
  echo "Done. Run 'bindings' to recompile."
  exit 0
fi

# ── Resolve paths ────────────────────────────────────────────────────

if [ -z "${EMSDK:-}" ] || [ ! -d "${EMSDK:-}" ]; then
  if [ -d "$SCRIPT_DIR/deps/emsdk" ]; then
    export EMSDK="$SCRIPT_DIR/deps/emsdk"
  elif [ -d "$SCRIPT_DIR/../assimpjs/emsdk" ]; then
    EMSDK="$(cd "$SCRIPT_DIR/../assimpjs/emsdk" && pwd)"
    export EMSDK
  else
    echo "ERROR: EMSDK not found. Run scripts/clone-deps.sh or set EMSDK=" >&2
    exit 1
  fi
fi
# shellcheck source=/dev/null
source "$EMSDK/emsdk_env.sh" 2>/dev/null

# Project-local Python venv is the canonical interpreter for every build script.
# Python 3.14 project-local venv for bindgen (see pyproject.toml).
export OCJS_PYTHON="$SCRIPT_DIR/.venv/bin/python"
if [ ! -x "$OCJS_PYTHON" ]; then
  echo "ERROR: $OCJS_PYTHON not found. Run scripts/clone-deps.sh first." >&2
  exit 1
fi
# The venv also pins cmake (pyproject.toml). Put it first on PATH: npm/npx
# prepend node's own directory, which on the Docker image is /usr/bin and
# holds the emsdk image's cmake 3.28, so `nx run` and a plain shell would
# otherwise configure OCCT with different cmakes and disagree on the
# cmake-state identity.
export PATH="$SCRIPT_DIR/.venv/bin:$PATH"

export OCJS_ROOT="$SCRIPT_DIR"
export OCCT_ROOT="${OCCT_ROOT:-$(cd "$SCRIPT_DIR/deps/OCCT" 2>/dev/null && pwd || { cd "$SCRIPT_DIR/../OCCT" 2>/dev/null && pwd; } || echo "")}"
export RAPIDJSON_ROOT="${RAPIDJSON_ROOT:-$(cd "$SCRIPT_DIR/deps/rapidjson" 2>/dev/null && pwd || { cd "$SCRIPT_DIR/../rapidjson" 2>/dev/null && pwd; } || echo "$SCRIPT_DIR/rapidjson")}"
export FREETYPE_ROOT="${FREETYPE_ROOT:-$(cd "$SCRIPT_DIR/deps/freetype" 2>/dev/null && pwd || { cd "$SCRIPT_DIR/../freetype" 2>/dev/null && pwd; } || echo "$SCRIPT_DIR/freetype")}"

for dep_name in OCCT_ROOT RAPIDJSON_ROOT FREETYPE_ROOT; do
  dep_val="${!dep_name}"
  if [ -z "$dep_val" ] || [ ! -d "$dep_val" ]; then
    echo "ERROR: $dep_name not found at '$dep_val'" >&2
    exit 1
  fi
done

# ── Validate dependency commits against DEPS.json ────────────────────

DEPS_FILE="$SCRIPT_DIR/DEPS.json"
if [ -f "$DEPS_FILE" ]; then
  "$OCJS_PYTHON" -c "
import json, subprocess, os, sys
deps = json.load(open('$DEPS_FILE'))['dependencies']
checks = [
    ('occt',     os.environ.get('OCCT_ROOT', '')),
    ('rapidjson', os.environ.get('RAPIDJSON_ROOT', '')),
    ('freetype',  os.environ.get('FREETYPE_ROOT', '')),
]
warnings = []
for name, path in checks:
    if not path or not os.path.isdir(os.path.join(path, '.git')):
        continue
    expected = deps[name]['commit']
    actual = subprocess.check_output(['git', '-C', path, 'rev-parse', 'HEAD'], text=True).strip()
    if actual != expected:
        warnings.append(f'  {name}: expected {expected[:12]}, got {actual[:12]}')
if warnings:
    print('WARNING: Dependency commit mismatch (vs DEPS.json):', file=sys.stderr)
    for w in warnings:
        print(w, file=sys.stderr)
    if os.environ.get('OCJS_STRICT_DEPS', '') == '1':
        print('ERROR: --strict deps check failed. Set OCJS_STRICT_DEPS=0 to override.', file=sys.stderr)
        sys.exit(1)
"
fi

# ── Pre-scan for --config flag ────────────────────────────────────────

_prescan_args=("$@")
for (( _i=0; _i<${#_prescan_args[@]}; _i++ )); do
  if [ "${_prescan_args[$_i]}" = "--config" ] && [ $((_i+1)) -lt ${#_prescan_args[@]} ]; then
    export OCJS_CONFIG="${_prescan_args[$((_i+1))]}"
    break
  fi
done

# OCJS_CONFIG inheritance contract (R6 / W1 fix) — cached Nx subtasks
# (`apply-patches`, `pch`, `generate`, `compile-bindings`, `compile-sources`,
# `link`) all declare `{ "env": "OCJS_CONFIG" }` in their `inputs` so the
# cache key bifurcates on the named configuration. That means a parent
# `OCJS_CONFIG=multi-threaded nx run ocjs:link` will NOT reuse a
# single-threaded `pch` cache entry. Within this script we simply
# inherit whatever the parent process exported; the explicit `:-` default
# only fires on direct CLI invocation, not on the Nx-driven path.
#
# To override:
#   OCJS_CONFIG=multi-threaded ./build-wasm.sh link <yaml>
#   ./build-wasm.sh --config multi-threaded link <yaml>
#
# To inspect:
#   echo "$OCJS_CONFIG"   # current named configuration
#   cat build-configs/configurations.json | jq 'keys'  # available configurations
export OCJS_CONFIG="${OCJS_CONFIG:-single-threaded}"

if [ -n "${OCJS_CONFIG:-}" ]; then
  _CONFIG_FILE="$SCRIPT_DIR/build-configs/configurations.json"
  if [ ! -f "$_CONFIG_FILE" ]; then
    echo "ERROR: configurations.json not found at $_CONFIG_FILE" >&2
    exit 1
  fi
  echo "Loading configuration: $OCJS_CONFIG"
  eval "$("$OCJS_PYTHON" -c "
import json, sys
configs = json.load(open('$_CONFIG_FILE'))
name = '$OCJS_CONFIG'
if name not in configs:
    print(f'echo \"ERROR: Configuration \"{name}\" not found. Available: {\", \".join(configs.keys())}\" >&2; exit 1')
    sys.exit(0)
cfg = configs[name]
for key, val in cfg.items():
    # An empty configuration value expresses 'no opinion', so it must not
    # clobber a value the caller injected (\`docker run -e KEY=...\`): render it
    # as \${KEY:-} instead of the unconditional assignment. BINARYEN_EXTRA_PASSES
    # is declared empty in every named configuration, and the unconditional
    # export silently discarded consumer-supplied binaryen passes. A
    # configuration that declares a real value still pins it.
    if val == '':
        print(f'export {key}=\"\${{{key}:-}}\"')
    else:
        print(f'export {key}=\"{val}\"')
")"
  echo ""
fi

# ── Build flags ──────────────────────────────────────────────────────

export OCJS_OPT="${OCJS_OPT:--O3}"
export OCJS_EXTRA_CFLAGS="${OCJS_EXTRA_CFLAGS:-}"
export OCJS_LTO="${OCJS_LTO:-0}"
export OCJS_EXCEPTIONS="${OCJS_EXCEPTIONS:-0}"
export OCJS_WASM_OPT_LEVEL="${OCJS_WASM_OPT_LEVEL:--O4}"
export OCJS_CLOSURE="${OCJS_CLOSURE:-false}"
export OCJS_CONVERGE="${OCJS_CONVERGE:-false}"
export OCJS_DEFINES="${OCJS_DEFINES:-}"
export OCJS_UNDEFINES="${OCJS_UNDEFINES:-}"
export OCJS_SIMD="${OCJS_SIMD:-0}"
export OCJS_RELAXED_SIMD="${OCJS_RELAXED_SIMD:-0}"
export OCJS_MALLOC="${OCJS_MALLOC:-dlmalloc}"
export THREADING="${THREADING:-single-threaded}"
export PYTHONPATH="$OCJS_ROOT/src:${PYTHONPATH:-}"
export BUILD_DIR="${BUILD_DIR:-$OCJS_ROOT/build}"
if [ "$BUILD_DIR" != "$OCJS_ROOT/build" ]; then
  echo "ERROR: custom BUILD_DIR is unsupported; use $OCJS_ROOT/build" >&2
  exit 1
fi
OCJS_OUTPUT_DIR="${OCJS_OUTPUT_DIR:-$OCJS_ROOT/dist}"
if [[ "$OCJS_OUTPUT_DIR" != /* ]]; then
  OCJS_OUTPUT_DIR="$OCJS_ROOT/$OCJS_OUTPUT_DIR"
fi
export OCJS_OUTPUT_DIR

# ── Print config ─────────────────────────────────────────────────────

echo "╔══════════════════════════════════════════════════════════╗"
echo "║         libcascade WASM Build                            ║"
echo "╠══════════════════════════════════════════════════════════╣"
printf "║  %-14s %s\n" "EMSDK:" "$EMSDK ║"
printf "║  %-14s %s\n" "Emscripten:" "$(emcc --version 2>/dev/null | head -1) ║"
printf "║  %-14s %s\n" "OCCT_ROOT:" "$OCCT_ROOT ║"
printf "║  %-14s %s\n" "OCJS_OPT:" "$OCJS_OPT ║"
if [ -n "$OCJS_EXTRA_CFLAGS" ]; then
printf "║  %-14s %s\n" "EXTRA_CFLAGS:" "$OCJS_EXTRA_CFLAGS ║"
fi
printf "║  %-14s %s\n" "OCJS_LTO:" "$OCJS_LTO ║"
printf "║  %-14s %s\n" "OCJS_EXCEPTIONS:" "$OCJS_EXCEPTIONS ║"
printf "║  %-14s %s\n" "OCJS_SIMD:" "$OCJS_SIMD ║"
printf "║  %-14s %s\n" "OCJS_RELAXED_SIMD:" "$OCJS_RELAXED_SIMD ║"
printf "║  %-14s %s\n" "THREADING:" "$THREADING ║"
printf "║  %-14s %s\n" "OCJS_MALLOC:" "$OCJS_MALLOC ║"
printf "║  %-14s %s\n" "wasm-opt:" "$OCJS_WASM_OPT_LEVEL ║"
printf "║  %-14s %s\n" "BUILD_DIR:" "$BUILD_DIR ║"
printf "║  %-14s %s\n" "OCJS_CONFIG:" "${OCJS_CONFIG:-<none>} ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

mkdir -p "$BUILD_DIR"/{bindings,sources}
mkdir -p "$OCJS_OUTPUT_DIR"

# ── Build flag validation ─────────────────────────────────────────────

validate_build_flags() {
  "$OCJS_PYTHON" -c "
import sys; sys.path.insert(0, 'src')
from ocjs_bindgen.config.flags import validate_build_flags, BuildFlagMismatch
try:
    validate_build_flags()
except BuildFlagMismatch as e:
    print(str(e), flush=True)
    sys.exit(1)
"
}

# ── Step functions ───────────────────────────────────────────────────

_ensure_standard_version_hxx() {
  local target="$OCCT_ROOT/src/FoundationClasses/TKernel/Standard/Standard_Version.hxx"
  local template="$OCCT_ROOT/adm/templates/Standard_Version.hxx.in"
  if [ -f "$target" ]; then
    return 0
  fi
  if [ ! -f "$template" ]; then
    echo "  WARNING: Standard_Version.hxx.in template not found" >&2
    return 0
  fi
  echo "  Generating Standard_Version.hxx from cmake template..."
  "$OCJS_PYTHON" -c "
import re
with open('$template') as f: c = f.read()
with open('$OCCT_ROOT/adm/cmake/version.cmake') as f: v = f.read()
major = re.search(r'OCC_VERSION_MAJOR\s+(\d+)', v).group(1)
minor = re.search(r'OCC_VERSION_MINOR\s+(\d+)', v).group(1)
maint = re.search(r'OCC_VERSION_MAINTENANCE\s+(\d+)', v).group(1)
c = c.replace('@OCC_VERSION_MAJOR@', major)
c = c.replace('@OCC_VERSION_MINOR@', minor)
c = c.replace('@OCC_VERSION_MAINTENANCE@', maint)
c = c.replace('@OCC_VERSION_DATE@', '2024-01-01')
c = c.replace('@SET_OCC_VERSION_DEVELOPMENT@', '#define OCC_VERSION_DEVELOPMENT \"dev\"')
with open('$target', 'w') as f: f.write(c)
print(f'  Generated Standard_Version.hxx (OCCT {major}.{minor}.{maint})')
"
}

step_pch() {
  echo "═══ Rebuilding flat includes + PCH ═══"
  rm -f build/pch.h.pch build/pch.h
  rm -rf build/occt-includes
  "$OCJS_PYTHON" -c "
import sys; sys.path.insert(0, 'src')
from ocjs_bindgen.config.paths import buildFlatIncludes, buildPch
buildFlatIncludes()
buildPch(threading='$THREADING')
"
  echo ""
}

step_docs() {
  echo "═══ Generating OCCT documentation JSON ═══"
  _ensure_doxygen
  "$OCJS_PYTHON" src/extract-docs.py
  echo ""
}

step_generate() {
  echo "═══ Generating bindings from OCCT headers ═══"

  find "$OCJS_ROOT/src" -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true

  local config="${OCJS_BINDGEN_CONFIG:-$OCJS_ROOT/bindgen-filters.yaml}"
  if [ -f "$config" ]; then
    echo "  Using bindgen config: $config"
    export OCJS_BINDGEN_CONFIG="$config"
  fi
  "$OCJS_PYTHON" scripts/generate-bindings.py \
    --config "$config" \
    --build-dir "$BUILD_DIR"
  echo ""
}

step_bindings() {
  echo "═══ Compiling bindings ═══"
  "$OCJS_PYTHON" src/compileBindings.py "$THREADING"
  echo ""
}

step_sources() {
  echo "═══ Compiling OCCT sources (CMake) ═══"
  step_sources_cmake
  echo ""
}

step_sources_cmake() {
  local cmake_build_dir="$OCJS_ROOT/build/occt-cmake"
  local lib_dir="$cmake_build_dir/lin32/clang/lib"
  local cmake_identity
  cmake_identity="$("$OCJS_PYTHON" scripts/cmake-state.py identity --root "$OCJS_ROOT")"
  echo "  OCCT library identity: $cmake_identity"
  # Libraries already published for this exact identity (patched OCCT, header
  # deps, semantic flags, cmake and emcc versions) and still matching their
  # ledger are reused as-is. The Docker build compiles OCCT in its own
  # occt-libs-* stage and copies the result here, so changes to bindgen,
  # filters or package metadata never recompile OCCT.
  if "$OCJS_PYTHON" scripts/cmake-state.py verify-published \
    --root "$OCJS_ROOT" \
    --destination "$BUILD_DIR/occt-libraries" \
    --identity "$cmake_identity"; then
    echo "  Reusing published OCCT libraries for identity ${cmake_identity:0:12}; skipping CMake."
    return 0
  fi
  "$OCJS_PYTHON" scripts/cmake-state.py prepare \
    --root "$OCJS_ROOT" \
    --scratch "$cmake_build_dir" \
    --identity "$cmake_identity"
  local existing_lib_count=0

  if [ -d "$lib_dir" ]; then
    existing_lib_count="$(find "$lib_dir" -maxdepth 1 -type f -name '*.a' -print | wc -l | tr -d ' ')"
  fi
  if [ "$existing_lib_count" -gt 0 ]; then
    echo "  CMake build directory exists with $existing_lib_count libraries, checking if rebuild needed..."
  fi

  local cmake_flags=(
    -DCMAKE_BUILD_TYPE=Release
    -DBUILD_LIBRARY_TYPE=Static
    -DBUILD_MODULE_FoundationClasses=ON
    -DBUILD_MODULE_ModelingData=ON
    -DBUILD_MODULE_ModelingAlgorithms=ON
    -DBUILD_MODULE_DataExchange=ON
    -DBUILD_MODULE_ApplicationFramework=ON
    -DBUILD_MODULE_Visualization=OFF
    -DBUILD_MODULE_Draw=OFF
    -DBUILD_DOC_Overview=OFF
    -DUSE_TCL=OFF
    -DUSE_TK=OFF
    -DUSE_RAPIDJSON=ON
    "-D3RDPARTY_RAPIDJSON_DIR=$RAPIDJSON_ROOT"
    "-D3RDPARTY_RAPIDJSON_INCLUDE_DIR=$RAPIDJSON_ROOT/include"
    "-D3RDPARTY_FREETYPE_DIR=$FREETYPE_ROOT"
    "-D3RDPARTY_FREETYPE_INCLUDE_DIR_freetype2=$FREETYPE_ROOT/include"
    "-D3RDPARTY_FREETYPE_INCLUDE_DIR_ft2build=$FREETYPE_ROOT/include"
  )

  local cflags="$OCJS_OPT -DIGNORE_NO_ATOMICS=1 -DOCCT_NO_PLUGINS -DHAVE_RAPIDJSON"
  local cxxflags="$cflags -frtti"
  local prefix_map
  for prefix_map in \
    "$OCJS_ROOT=/ocjs" \
    "$OCCT_ROOT=/occt" \
    "$EMSDK=/emsdk"; do
    cflags="$cflags -ffile-prefix-map=$prefix_map -fmacro-prefix-map=$prefix_map"
    cxxflags="$cxxflags -ffile-prefix-map=$prefix_map -fmacro-prefix-map=$prefix_map"
  done

  if [ "$OCJS_LTO" = "1" ]; then
    cflags="$cflags -flto"
    cxxflags="$cxxflags -flto"
  fi

  if [ "$OCJS_EXCEPTIONS" = "1" ]; then
    if [ "${OCJS_EH_MODE:-wasm}" = "js" ]; then
      cxxflags="$cxxflags -fexceptions"
    else
      cxxflags="$cxxflags -fwasm-exceptions"
    fi
    cxxflags="$cxxflags -DOCJS_EXCEPTIONS_ENABLED=1"
  else
    cflags="$cflags -sSUPPORT_LONGJMP=0"
    cxxflags="$cxxflags -sSUPPORT_LONGJMP=0"
  fi

  if [ "$OCJS_SIMD" = "1" ]; then
    cflags="$cflags -msimd128"
    cxxflags="$cxxflags -msimd128"
    if [ "$OCJS_RELAXED_SIMD" = "1" ]; then
      cflags="$cflags -mrelaxed-simd"
      cxxflags="$cxxflags -mrelaxed-simd"
    fi
  fi

  if [ "$THREADING" = "multi-threaded" ]; then
    cflags="$cflags -pthread"
    cxxflags="$cxxflags -pthread"
  fi

  if [ -n "$OCJS_DEFINES" ]; then
    IFS=',' read -ra defines <<< "$OCJS_DEFINES"
    for d in "${defines[@]}"; do
      d="$(echo "$d" | xargs)"
      [ -n "$d" ] && cflags="$cflags -D$d" && cxxflags="$cxxflags -D$d"
    done
  fi
  if [ -n "$OCJS_UNDEFINES" ]; then
    IFS=',' read -ra undefines <<< "$OCJS_UNDEFINES"
    for u in "${undefines[@]}"; do
      u="$(echo "$u" | xargs)"
      [ -n "$u" ] && cflags="$cflags -U$u" && cxxflags="$cxxflags -U$u"
    done
  fi

  if [ -n "$OCJS_EXTRA_CFLAGS" ]; then
    cflags="$cflags $OCJS_EXTRA_CFLAGS"
    cxxflags="$cxxflags $OCJS_EXTRA_CFLAGS"
  fi

  cmake_flags+=(
    "-DCMAKE_C_FLAGS=$cflags"
    "-DCMAKE_CXX_FLAGS=$cxxflags"
  )

  if [ "$OCJS_EXCEPTIONS" != "1" ]; then
    cmake_flags+=(
      "-DCMAKE_C_FLAGS_RELEASE=-DNDEBUG -sDISABLE_EXCEPTION_CATCHING=1 -sSUPPORT_LONGJMP=0 -UOCC_CONVERT_SIGNALS"
      "-DCMAKE_CXX_FLAGS_RELEASE=-DNDEBUG -sDISABLE_EXCEPTION_CATCHING=1 -sSUPPORT_LONGJMP=0 -UOCC_CONVERT_SIGNALS"
    )
  fi

  echo "  Configuring OCCT via CMake..."
  emcmake cmake -B "$cmake_build_dir" \
    "${cmake_flags[@]}" \
    -Wno-dev \
    "$OCCT_ROOT" 2>&1 | tail -5

  local nproc
  nproc=$(sysctl -n hw.ncpu 2>/dev/null || nproc 2>/dev/null || echo 4)
  echo "  Building OCCT with $nproc parallel jobs..."
  cmake --build "$cmake_build_dir" -j"$nproc" 2>&1 | tail -5

  local lib_count
  lib_count="$(find "$lib_dir" -maxdepth 1 -type f -name '*.a' -print | wc -l | tr -d ' ')"
  echo "  CMake produced $lib_count static libraries in $lib_dir"

  "$OCJS_PYTHON" scripts/cmake-state.py complete \
    --root "$OCJS_ROOT" \
    --scratch "$cmake_build_dir" \
    --identity "$cmake_identity"
  "$OCJS_PYTHON" scripts/cmake-state.py publish \
    --root "$OCJS_ROOT" \
    --source "$lib_dir" \
    --destination "$BUILD_DIR/occt-libraries" \
    --identity "$cmake_identity"
}

step_dts() {
  local yaml="$1"
  if [ ! -f "$yaml" ]; then
    echo "ERROR: YAML config not found: $yaml" >&2
    exit 1
  fi
  local yaml_abs
  yaml_abs="$(cd "$(dirname "$yaml")" && pwd)/$(basename "$yaml")"
  echo "═══ Regenerating .d.ts from $yaml_abs (no compile/link) ═══"
  cd "$(dirname "$yaml_abs")"
  PYTHONPATH="$OCJS_ROOT/src" "$OCJS_PYTHON" -m ocjs_bindgen.link.yaml_build --dts-only "$(basename "$yaml_abs")"
  cd "$SCRIPT_DIR"
  echo ""
}

step_bind_symbols() {
  local yaml="$1"
  if [ ! -f "$yaml" ]; then
    echo "ERROR: YAML config not found: $yaml" >&2
    exit 1
  fi
  local yaml_abs
  yaml_abs="$(cd "$(dirname "$yaml")" && pwd)/$(basename "$yaml")"
  echo "═══ Extracting Embind registration manifest from $yaml_abs ═══"
  # Dedicated NX-graph stage between `generate` and `link` — writes
  # `build/additional-bind-symbols.json` so the link-time `verifyBindings`
  # consumer (and the post-link `validate-build.py` consumer) can both
  # resolve Embind builtins without depending on the link stage having
  # opened libclang first. NX `link.dependsOn` ordering enforces the
  # producer/consumer contract; running this manually is fine too (e.g.
  # for local diagnostics or smoke-test driven invocations).
  PYTHONPATH="$OCJS_ROOT/src" "$OCJS_PYTHON" -m ocjs_bindgen.bind_symbols \
    --build-dir "$BUILD_DIR" "$yaml_abs"
  echo ""
}

step_link() {
  local yaml="$1"
  if [ ! -f "$yaml" ]; then
    echo "ERROR: YAML config not found: $yaml" >&2
    exit 1
  fi
  local yaml_abs
  yaml_abs="$(cd "$(dirname "$yaml")" && pwd)/$(basename "$yaml")"
  echo "═══ Linking WASM from $yaml_abs ═══"
  echo "  Output dir: $OCJS_OUTPUT_DIR"
  mkdir -p "$OCJS_OUTPUT_DIR"
  # Scope cleanup to the current build's name so multi-config workflows
  # (e.g. single-threaded + multi-threaded coexisting in dist/) don't wipe
  # the other config's artefacts. The build name lives at `mainBuild.name`
  # in the YAML (always the first `name:` field at column 0+2 indentation).
  local build_js build_base
  build_js=$(awk '$1 == "name:" {print $2; exit}' "$yaml_abs")
  if [ -z "$build_js" ]; then
    echo "ERROR: could not parse mainBuild.name from $yaml_abs" >&2
    exit 1
  fi
  build_base="${build_js%.js}"
  find "$OCJS_OUTPUT_DIR" -maxdepth 1 \( \
    -name "${build_base}.wasm" \
    -o -name "${build_js}" \
    -o -name "${build_base}.d.ts" \
    -o -name "${build_base}.js.symbols" \
    -o -name "${build_base}.provenance.json" \
    -o -name "${build_base}.build-manifest.json" \
  \) -delete 2>/dev/null || true
  cd "$OCJS_OUTPUT_DIR"
  PYTHONPATH="$OCJS_ROOT/src" "$OCJS_PYTHON" -m ocjs_bindgen.link.yaml_build "$yaml_abs"
  cd "$SCRIPT_DIR"
  echo ""
}

step_link_core() {
  local yaml="$1"
  local core_dir="$BUILD_DIR/link-core"
  rm -rf "$core_dir"
  rm -f "$BUILD_DIR/link-core.manifest.json" "$BUILD_DIR/link-core.link-report.json"
  mkdir -p "$core_dir"
  export OCJS_OUTPUT_DIR="$core_dir"
  export OCJS_LINK_REPORT="$BUILD_DIR/link-core.link-report.json"
  step_link "$yaml"
  "$OCJS_PYTHON" scripts/artifact-state.py write \
    --source "$core_dir" \
    --manifest "$BUILD_DIR/link-core.manifest.json"
}

step_materialize() {
  local yaml="$1"
  local build_js build_base marker
  build_js=$(awk '$1 == "name:" {print $2; exit}' "$yaml")
  build_base="${build_js%.js}"
  marker="$BUILD_DIR/materialized/$OCJS_CONFIG-$build_base.json"
  "$OCJS_PYTHON" scripts/artifact-state.py materialize \
    --source "$BUILD_DIR/link-core" \
    --manifest "$BUILD_DIR/link-core.manifest.json" \
    --destination "$OCJS_OUTPUT_DIR" \
    --marker "$marker"
}

step_apply_patches() {
  # The OCCT source patches below are HARD REQUIREMENTS for every
  # supported build (single-threaded and multi-threaded alike). The legacy
  # OCJS_PATCH_DUMP / OCJS_PATCH_STEPCAF env-var toggles were removed —
  # making required behaviour optional was a footgun (a `OCJS_PATCH_DUMP=false`
  # build silently produces an unusable WASM that fails at link or at runtime
  # depending on which symbols the consumer pulls in).
  echo "═══ Applying OCCT source patches ═══"

  "$OCJS_PYTHON" scripts/patch-state.py prepare \
    --root "$OCCT_ROOT" \
    --manifest "$BUILD_DIR/patches-applied.json" \
    --patch-root "$OCJS_ROOT/src/patches" \
    --embind "$EMSDK/upstream/emscripten/src/lib/libembind.js"

  echo "  Applying using-statement / V8 bugfix patches..."
  "$OCJS_PYTHON" src/patches/patch_using_statements.py
  echo "  Applying Standard_Dump stub patch..."
  "$OCJS_PYTHON" src/patches/patch_standard_dump.py
  echo "  Applying noexcept destructors patch (7 classes)..."
  "$OCJS_PYTHON" src/patches/patch_noexcept_destructors.py
  echo "  Applying STEPCAFControl_Controller DynamicType patch..."
  "$OCJS_PYTHON" src/patches/patch_stepcaf_dyntype.py
  echo "  Applying STEPCAF material density-unit patch..."
  "$OCJS_PYTHON" src/patches/patch_stepcaf_material_density_unit.py
  echo "  Applying Geom2dGcc_Circ2dTanCenGeo uninitialised-Index patch..."
  "$OCJS_PYTHON" src/patches/patch_geom2dgcc_tancengeo_index.py
  echo "  Applying BRepOffset MapSF iteration-order patch (#35)..."
  "$OCJS_PYTHON" src/patches/patch_offset_mapsf_order.py
  echo "  Applying NurbsConvert mesh-only face patch (#39)..."
  "$OCJS_PYTHON" src/patches/patch_nurbsconvert_mesh_only_face.py
  echo "  Applying strict-link symbol patches..."
  "$OCJS_PYTHON" src/patches/patch_strict_link_symbols.py
  _ensure_standard_version_hxx
  echo "  All patches applied."

  step_patch_embind

  "$OCJS_PYTHON" scripts/patch-state.py write \
    --root "$OCCT_ROOT" \
    --manifest "$BUILD_DIR/patches-applied.json" \
    --patch-root "$OCJS_ROOT/src/patches" \
    --embind "$EMSDK/upstream/emscripten/src/lib/libembind.js"
  echo ""
}

step_patch_embind() {
  # Patch-hygiene contract (see docs/policy/ocjs-trailing-default-emission-policy.md
  # rule 6 and docs/research/ocjs-libembind-phase-0-hygiene.md). On EVERY
  # invocation we:
  #   1. Verify the vendored pristine snapshot at
  #      src/vendor/pristine-libembind.js matches its expected SHA256.
  #   2. Reset deps/emsdk/upstream/emscripten/src/lib/libembind.js from the
  #      pristine snapshot (overwriting any prior patched / hot-edited state).
  #   3. Apply src/patches/libembind-overloading.patch.
  #   4. Verify the patched file's SHA256 matches the expected hash recorded
  #      at src/patches/libembind-overloading.expected.sha256.
  #
  # The prior hash-skip + reverse-apply scheme accumulated five duplicate
  # `$getSignature` definitions across iterative patch revisions because JS
  # object-literal duplicate-key semantics silently kept only the last copy,
  # producing non-deterministic dispatch behaviour across machines. The
  # pristine-reset + hash-verify pipeline makes the step idempotent at the
  # file level (not merely at the patch-hash level) and fails loudly if
  # either the pristine snapshot or the post-patch result drifts.
  echo "═══ Patching emsdk libembind.js (type-based overload dispatch) ═══"

  local embind_dir="$EMSDK/upstream/emscripten"
  local embind_file="$embind_dir/src/lib/libembind.js"
  local patch_file="$OCJS_ROOT/src/patches/libembind-overloading.patch"
  local pristine_file="$OCJS_ROOT/src/vendor/pristine-libembind.js"
  local pristine_hash_file="$OCJS_ROOT/src/vendor/pristine-libembind.expected.sha256"
  local expected_hash_file="$OCJS_ROOT/src/patches/libembind-overloading.expected.sha256"

  if [ ! -d "$embind_dir" ]; then
    echo "ERROR: emscripten directory not found at $embind_dir" >&2
    exit 1
  fi
  if [ ! -f "$pristine_file" ]; then
    echo "ERROR: pristine libembind snapshot not found at $pristine_file" >&2
    echo "       Re-fetch from https://raw.githubusercontent.com/emscripten-core/emscripten/<tag>/src/lib/libembind.js" >&2
    exit 1
  fi
  if [ ! -f "$patch_file" ]; then
    echo "ERROR: patch file not found at $patch_file" >&2
    exit 1
  fi

  local emsdk_version
  emsdk_version="$(tr -d '"[:space:]' 2>/dev/null < "$embind_dir/emscripten-version.txt")"
  if [ "$emsdk_version" != "6.0.5" ]; then
    echo "ERROR: libembind patch requires emsdk 6.0.5 but found $emsdk_version" >&2
    exit 1
  fi

  _sha256() {
    if command -v shasum >/dev/null 2>&1; then
      shasum -a 256 "$1" | awk '{print $1}'
    else
      sha256sum "$1" | awk '{print $1}'
    fi
  }

  if [ -f "$pristine_hash_file" ]; then
    local pristine_actual pristine_expected
    pristine_actual="$(_sha256 "$pristine_file")"
    pristine_expected="$(tr -d '[:space:]' < "$pristine_hash_file")"
    if [ "$pristine_actual" != "$pristine_expected" ]; then
      echo "ERROR: pristine snapshot SHA256 mismatch." >&2
      echo "  file:     $pristine_file" >&2
      echo "  expected: $pristine_expected" >&2
      echo "  actual:   $pristine_actual" >&2
      exit 1
    fi
  fi

  echo "  Resetting libembind.js from pristine snapshot..."
  mkdir -p "$(dirname "$embind_file")"
  cp "$pristine_file" "$embind_file"
  local reset_actual reset_expected
  reset_actual="$(_sha256 "$embind_file")"
  reset_expected="$(_sha256 "$pristine_file")"
  if [ "$reset_actual" != "$reset_expected" ]; then
    echo "ERROR: post-reset SHA256 mismatch (copy failed or destination tampered with)." >&2
    exit 1
  fi

  echo "  Applying libembind-overloading.patch..."
  cd "$embind_dir" || exit 1
  if ! patch -p0 -N --no-backup-if-mismatch < "$patch_file"; then
    patch_status=$?
    echo "ERROR: libembind patch failed (exit $patch_status) against pristine snapshot." >&2
    echo "       Pristine SHA256: $reset_actual" >&2
    echo "       Patch file:      $patch_file" >&2
    exit 1
  fi
  cd "$OCJS_ROOT" || exit 1

  local patched_actual
  patched_actual="$(_sha256 "$embind_file")"
  if [ -f "$expected_hash_file" ]; then
    local patched_expected
    patched_expected="$(tr -d '[:space:]' < "$expected_hash_file")"
    if [ "$patched_actual" != "$patched_expected" ]; then
      echo "ERROR: post-patch SHA256 mismatch." >&2
      echo "  file:     $embind_file" >&2
      echo "  expected: $patched_expected (from $expected_hash_file)" >&2
      echo "  actual:   $patched_actual" >&2
      echo "  Regenerate via:" >&2
      echo "    cp <pristine> <embind>; patch -p0 < $patch_file" >&2
      echo "    shasum -a 256 <embind> | awk '{print \$1}' > $expected_hash_file" >&2
      exit 1
    fi
  else
    echo "  WARNING: expected hash file not found at $expected_hash_file" >&2
    echo "           Skipping post-patch hash verification (run once and seed the hash)." >&2
  fi

  # Retain the hash-stamp file purely for diagnostic visibility — the
  # decision to reset+reapply no longer depends on it (we ALWAYS reset).
  echo "$patched_actual" > "$BUILD_DIR/embind-patch-hash"
  echo "  libembind.js patched successfully (sha256 $patched_actual)."
}

# (step_compile_all removed -- Nx manages task orchestration and caching)

# ── Parse commands ───────────────────────────────────────────────────

if [ $# -eq 0 ]; then
  echo "Usage: $0 <command> [<command>...] [<yaml-config>]"
  echo ""
  echo "Commands:"
  echo "  apply-patches    Apply OCCT source patches (idempotent)"
  echo "  pch              Rebuild flat includes + PCH"
  echo "  docs             Generate OCCT documentation JSON (for JSDoc)"
  echo "  generate         Generate binding .cpp files from OCCT headers"
  echo "  bindings         Compile bindings only"
  echo "  sources          Compile OCCT sources only"
  echo "  dts <yaml>       Regenerate .d.ts only from existing fragments (no compile/link)"
  echo "  bind-symbols <yaml> Extract Embind registrations -> build/additional-bind-symbols.json"
  echo "  link <yaml>      Link WASM binary from YAML config"
  echo "  link-core <yaml> Link into the internal cache-owned artifact directory"
  echo "  materialize <yaml> Copy cached artifacts to OCJS_OUTPUT_DIR"
  echo "  full <yaml>      Full pipeline (apply-patches + pch + generate + bindings + sources + link)"
  echo "  clean-generated  Remove generated .d.ts.json and .cpp (handles symlinks)"
  echo "  clean-objects    Remove compiled .o files from compiled-bindings/ (handles symlinks)"
  exit 1
fi

YAML_CONFIG=""
COMMANDS=()

while [ $# -gt 0 ]; do
  case "$1" in
    --help|-h)
      show_help
      ;;
    --config)
      shift
      if [ $# -eq 0 ]; then
        echo "ERROR: --config requires a configuration name" >&2
        exit 1
      fi
      export OCJS_CONFIG="$1"
      shift
      ;;
    pch|docs|generate|bindings|sources|occt-libraries|apply-patches|patch-embind)
      COMMANDS+=("$1")
      shift
      ;;
    validate)
      COMMANDS+=("$1")
      shift
      if [ $# -eq 0 ]; then
        echo "ERROR: validate requires a YAML config path argument" >&2
        exit 1
      fi
      YAML_CONFIG="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
      shift
      ;;
    dts|link|link-core|materialize|full|provenance|bind-symbols)
      COMMANDS+=("$1")
      shift
      if [ $# -eq 0 ]; then
        echo "ERROR: command requires a YAML config path argument" >&2
        exit 1
      fi
      YAML_CONFIG="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
      shift
      ;;
    *)
      if [ -f "$1" ] && [[ "$1" == *.yml ]]; then
        YAML_CONFIG="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
        shift
      else
        echo "ERROR: Unknown command or file: $1" >&2
        echo "Run './build-wasm.sh --help' for usage." >&2
        exit 1
      fi
      ;;
  esac
done

START_TIME=$(date +%s)

for cmd in "${COMMANDS[@]}"; do
  case "$cmd" in
    apply-patches) step_apply_patches ;;
    patch-embind) step_patch_embind ;;
    pch)       step_pch ;;
    docs)      step_docs ;;
    generate)  step_generate ;;
    bindings)  validate_build_flags && step_bindings ;;
    sources)   validate_build_flags && step_sources ;;
    occt-libraries) step_sources ;;
    dts)       step_dts "$YAML_CONFIG" ;;
    bind-symbols) step_bind_symbols "$YAML_CONFIG" ;;
    link-core)
      validate_build_flags
      step_link_core "$YAML_CONFIG"
      ;;
    materialize) step_materialize "$YAML_CONFIG" ;;
    link)
      # `link` must be self-contained when invoked as the Docker
      # ENTRYPOINT — no separate `provenance`/`validate` runs precede
      # it. `provenance.py init` seeds `build/provenance.json` so the
      # `prov.add_linking(...)` call inside `step_link` (which guards
      # on `_load()` returning a non-empty dict) actually records the
      # link section; the end-of-script `finalize` then promotes the
      # scratchpad to `<output>/<variant>.provenance.json`.
      # `validate-build.py` writes the companion `<variant>.build-manifest.json`
      # so CI smoke + downstream consumers (replicad, examples) can
      # round-trip the build-flag fingerprint without reaching back
      # into the build cache.
      validate_build_flags
      "$OCJS_PYTHON" "$OCJS_ROOT/src/provenance.py" init
      # V3 RE-SHIP: extract Embind registrations into
      # `build/additional-bind-symbols.json` BEFORE `step_link` runs the
      # link-time `verifyBindings` consumer. NX's own dep-graph enforces
      # this ordering when invoked via `nx run`; the shell entry mirrors
      # the contract for direct `./build-wasm.sh link <yaml>` invocations
      # so the producer never lags its consumer.
      step_bind_symbols "$YAML_CONFIG"
      step_link "$YAML_CONFIG"
      echo "═══ Post-link validation ═══"
      # V10 — unconditional hard-fail. Alias-resolved + builtin buckets
      # absorb every historical false positive in validate-build.py; any
      # surviving failure is a real link gap and must fail the wrapper.
      "$OCJS_PYTHON" "$OCJS_ROOT/scripts/validate-build.py" "$YAML_CONFIG" "$OCJS_OUTPUT_DIR" --build-dir "$BUILD_DIR"
      "$OCJS_PYTHON" src/provenance.py finalize --wasm-dir "$OCJS_OUTPUT_DIR" --yaml "$YAML_CONFIG"
      echo ""
      ;;
    validate)
      echo "═══ Validating YAML config: $YAML_CONFIG ═══"
      "$OCJS_PYTHON" -c "
import yaml, sys
sys.path.insert(0, '$OCJS_ROOT/src')
from cerberus import Validator
from ocjs_bindgen.config.yaml_sources import resolve_source_files
schema = eval(open('$OCJS_ROOT/src/customBuildSchema.py').read())
config = yaml.safe_load(open('$YAML_CONFIG'))
v = Validator(schema)
if v.validate(config, schema):
    normalized = v.normalized(config)
    resolve_source_files('$YAML_CONFIG', normalized.get('additionalCppFiles'), 'additionalCppFiles')
    builds = [normalized['mainBuild'], *normalized.get('extraBuilds', [])]
    for index, build in enumerate(builds):
        field = 'mainBuild.additionalBindFiles' if index == 0 else f'extraBuilds[{index - 1}].additionalBindFiles'
        resolve_source_files('$YAML_CONFIG', build.get('additionalBindFiles'), field)
    bindings = normalized['mainBuild']['bindings']
    name = normalized['mainBuild']['name']
    flags = normalized['mainBuild'].get('emccFlags', [])
    print(f'  Config valid: {len(bindings)} bindings')
    print(f'  Build name: {name}')
    print(f'  emccFlags: {len(flags)} flags')
    has_exc = any('-fexceptions' in f or '-fwasm-exceptions' in f for f in flags)
    has_exc_str = 'yes' if has_exc else 'no'
    print(f'  Exceptions: {has_exc_str}')
else:
    print(f'  INVALID: {v.errors}', file=sys.stderr)
    sys.exit(1)
"
      echo ""
      ;;
    provenance)
      # V5 RE-SHIP — preserve the scratchpad written by the prior `link`
      # subcommand. Calling `provenance.py init` here wiped the
      # `linking{}`, `postProcessing{}`, and `nCollectionManifest{}`
      # blocks `step_link` populates via `prov.add_linking(...)`; the
      # subsequent `finalize` then promoted the *empty* scratchpad to
      # `<dist>/<variant>.provenance.json`, dropping every link-time
      # fact downstream consumers (audit doc V5/V9 contracts,
      # `test_provenance_carries_ncollection_manifest_with_invariant`)
      # depend on. The NX task graph guarantees `link` runs first
      # (`provenance` `dependsOn: ["link"]`), so the scratchpad
      # already exists when this subcommand fires — `init` only re-
      # seeded for standalone CLI use, which we now serve by having
      # `finalize` no-op cleanly when the scratchpad is absent.
      echo "═══ Generating build provenance ═══"
      export OCJS_LINK_REPORT="$BUILD_DIR/link-core.link-report.json"
      export OCJS_ARTIFACT_MANIFEST="$BUILD_DIR/link-core.manifest.json"
      "$OCJS_PYTHON" src/provenance.py init
      "$OCJS_PYTHON" src/provenance.py finalize --wasm-dir "$OCJS_OUTPUT_DIR" --yaml "${YAML_CONFIG:-}"
      echo ""
      ;;
    full)
      # Same self-contained-`init` contract as `link` (see comment
      # there). Without it, `prov.add_linking(...)` inside `step_link`
      # silently no-ops and the end-of-script `finalize` writes
      # nothing — published artefacts only had a `.provenance.json`
      # because the host NX pipeline ran the `provenance` subcommand
      # in a separate invocation beforehand.
      "$OCJS_PYTHON" "$OCJS_ROOT/src/provenance.py" init
      step_apply_patches
      step_pch
      step_generate
      step_bindings
      step_sources_cmake
      # Same producer-before-consumer contract as the `link` subcommand —
      # see comment there for full rationale.
      step_bind_symbols "$YAML_CONFIG"
      step_link "$YAML_CONFIG"
      echo "═══ Post-build validation ═══"
      # V10 — unconditional hard-fail. See `link` subcommand for rationale.
      "$OCJS_PYTHON" "$OCJS_ROOT/scripts/validate-build.py" "$YAML_CONFIG" "$OCJS_OUTPUT_DIR" --build-dir "$BUILD_DIR"
      "$OCJS_PYTHON" src/provenance.py finalize --wasm-dir "$OCJS_OUTPUT_DIR" --yaml "$YAML_CONFIG"
      echo ""
      ;;
  esac
done

END_TIME=$(date +%s)
ELAPSED=$((END_TIME - START_TIME))

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                  Build Complete                         ║"
echo "╠══════════════════════════════════════════════════════════╣"
printf "║  %-14s %s\n" "Duration:" "${ELAPSED}s ║"
printf "║  %-14s %s\n" "Config:" "${OCJS_CONFIG:-<none>} ║"

if [ -n "$YAML_CONFIG" ]; then
  for wasm in "$OCJS_OUTPUT_DIR"/*.wasm; do
    if [ -f "$wasm" ]; then
      BASENAME="$(basename "$wasm")"
      SIZE=$(stat -f%z "$wasm" 2>/dev/null || stat -c%s "$wasm" 2>/dev/null || echo "0")
      SIZE_MB=$(awk -v s="$SIZE" 'BEGIN { printf "%.2f", s / 1048576 }' 2>/dev/null || echo "?")
      GZIP_SIZE=$(gzip -c "$wasm" 2>/dev/null | wc -c | tr -d ' ')
      GZIP_MB=$(awk -v s="$GZIP_SIZE" 'BEGIN { printf "%.2f", s / 1048576 }' 2>/dev/null || echo "?")
      printf "║  %-14s %s\n" "WASM:" "$BASENAME ($SIZE_MB MB, ${GZIP_MB} MB gzipped) ║"
    fi
  done
  for js in "$OCJS_OUTPUT_DIR"/*.js; do
    if [ -f "$js" ] && [[ "$js" != *.d.ts ]]; then
      SIZE=$(stat -f%z "$js" 2>/dev/null || stat -c%s "$js" 2>/dev/null || echo "0")
      SIZE_KB=$(awk -v s="$SIZE" 'BEGIN { printf "%.1f", s / 1024 }' 2>/dev/null || echo "?")
      printf "║  %-14s %s\n" "JS:" "$(basename "$js") (${SIZE_KB} KB) ║"
    fi
  done
  for dts in "$OCJS_OUTPUT_DIR"/*.d.ts; do
    if [ -f "$dts" ]; then
      SIZE=$(stat -f%z "$dts" 2>/dev/null || stat -c%s "$dts" 2>/dev/null || echo "0")
      SIZE_KB=$(awk -v s="$SIZE" 'BEGIN { printf "%.1f", s / 1024 }' 2>/dev/null || echo "?")
      printf "║  %-14s %s\n" "Types:" "$(basename "$dts") (${SIZE_KB} KB) ║"
    fi
  done
fi
echo "╚══════════════════════════════════════════════════════════╝"
