#!/usr/bin/env bash
# build.sh — link a minimum-viable OCCT WASM module without invoking the
# OCJS bindgen / nx pipeline. Uses the prebuilt OCCT toolkit archives in
# build/occt-cmake/lin32/clang/lib/libTK*.a as link inputs, and a single
# hand-written bindings file as the only thing we compile.
#
# Build time: ~10–20s per corpus (linker dominates; binding source is tiny).
# Usage: ./build.sh [a|b|all]   (default: all)

set -euo pipefail
cd "$(dirname "$0")"

OCJS_ROOT="$(cd ../.. && pwd)"
# We deliberately use the sibling-PoC's assimpjs emsdk (also emcc 5.0.1,
# binary-compatible with the OCCT toolkit archives) so we can reuse the
# proven apply-libembind-patch workflow. The OCCT .a files are pure C++
# WASM with no embind dependency, so they link cleanly against either
# emsdk as long as the emcc version matches.
EMSDK_ENV="/Users/rifont/git/tau/repos/assimpjs/emsdk/emsdk_env.sh"
OCCT_INCLUDES="${OCJS_ROOT}/build/occt-includes"
OCCT_LIBDIR="${OCJS_ROOT}/build/occt-cmake/lin32/clang/lib"

WHICH="${1:-all}"

# Apply the libembind snapshot. Default is the production patch + arity-pad
# extension layered on top (R1 layered validation). Override with
# LIBEMBIND_MODE=c1|c1+pad|prod|prod+pad (see apply-libembind.sh).
"$(dirname "$0")/apply-libembind.sh" "${LIBEMBIND_MODE:-prod+pad}" > /dev/null

# Activate emsdk (emcc 5.0.1 — same version OCCT was built with).
# shellcheck disable=SC1090
source "${EMSDK_ENV}" > /dev/null 2>&1

# Compile flags must match build/build-flags.json so the prebuilt OCCT
# objects are ABI-compatible. Pulled from build-configs/full.yml emccFlags
# block at the bottom.
EMCC_COMPILE_FLAGS=(
  -std=c++20
  -O3
  -fwasm-exceptions
  -msimd128
  -DOCCT_NO_DUMP
  -UOCC_CONVERT_SIGNALS
  -I "${OCCT_INCLUDES}"
)

# Toolkits we actually exercise. emcc resolves -lTK<name> against
# OCCT_LIBDIR/libTK<name>.a; only the .o objects we reference get pulled
# in (no whole-archive). Order matters for some legacy linkers; we list
# dependents first.
TOOLKITS=(
  -lTKMesh         # BRepMesh_IncrementalMesh
  -lTKBO           # transitive: meshing pulls boolean ops
  -lTKShHealing    # transitive
  -lTKBool         # transitive
  -lTKFillet       # transitive
  -lTKOffset       # transitive
  -lTKHLR          # transitive
  -lTKPrim         # BRepPrimAPI_Make*
  -lTKTopAlgo      # TopExp_Explorer
  -lTKBRep         # TopoDS_*, BRep_Tool
  -lTKGeomAlgo     # transitive
  -lTKGeomBase     # transitive
  -lTKG3d          # gp_*
  -lTKG2d          # gp_*
  -lTKMath         # gp_Pnt, gp_Vec arithmetic
  -lTKernel        # base allocator / handle machinery
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
  local variant="$1"
  local src="bindings-${variant}.cpp"
  local label="mod-${variant}"
  local out="${label}.mjs"
  local export_name="create_${variant/-/_}"
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

build_r2() {
  # R2: link bindings-optional.cpp + bindings-r2-dup-optional.cpp into a
  # single module so both TUs' EMSCRIPTEN_BINDINGS blocks execute,
  # double-registering `std::optional<bool>` and `std::optional<double>`.
  local out="mod-r2.mjs"
  echo "── building ${out} from bindings-optional.cpp + bindings-r2-dup-optional.cpp ──"
  local t0
  t0=$(date +%s)
  emcc \
    "${EMCC_COMPILE_FLAGS[@]}" \
    bindings-optional.cpp bindings-r2-dup-optional.cpp \
    "${EMCC_LINK_FLAGS[@]}" \
    -sEXPORT_NAME="create_r2" \
    -o "${out}"
  local elapsed=$(( $(date +%s) - t0 ))
  ls -la mod-r2.wasm mod-r2.mjs 2>&1 | awk '{printf "  %10s  %s\n", $5, $NF}'
  echo "  link time: ${elapsed}s"
}

build_t5_eval_ctors() {
  # T5: rebuild Corpus B with -sEVAL_CTORS=2 added on top of the
  # existing -O3 flags. EVAL_CTORS makes the optimizer evaluate C++
  # static constructors at link time when possible, then bake the
  # resulting global state into the wasm initial memory. If the
  # arity-pad / optional-wildcard logic interacts badly with that path
  # (e.g. EMSCRIPTEN_BINDINGS init order changing such that
  # signaturesArray ends up in a different shape), the c1+pad
  # behaviour could shift.
  local out="mod-optional.t5.mjs"
  echo "── T5: building ${out} with -sEVAL_CTORS=2 added ──"
  local t0
  t0=$(date +%s)
  emcc \
    "${EMCC_COMPILE_FLAGS[@]}" \
    bindings-optional.cpp \
    "${EMCC_LINK_FLAGS[@]}" \
    -sEVAL_CTORS=2 \
    -sEXPORT_NAME="create_optional_t5" \
    -o "${out}"
  local elapsed=$(( $(date +%s) - t0 ))
  ls -la mod-optional.t5.wasm mod-optional.t5.mjs 2>&1 | awk '{printf "  %10s  %s\n", $5, $NF}'
  echo "  link time: ${elapsed}s"
}

build_r6_illegal() {
  # R6 loud-fail verification. This build target is EXPECTED to fail —
  # std::optional<T&> is rejected by libc++/libstdc++ until C++26.
  # We compile only (no link), capture the error, and write it to a
  # file the README and r6 test can quote verbatim.
  echo "── R6 loud-fail probe: compiling bindings-r6-illegal-ref.cpp (expected FAIL) ──"
  local log="r6-illegal.compile.log"
  if emcc "${EMCC_COMPILE_FLAGS[@]}" -c bindings-r6-illegal-ref.cpp -o /tmp/r6-illegal.o > "${log}" 2>&1; then
    echo "  UNEXPECTED: compiled cleanly. R6 loud-fail invariant is broken." >&2
    return 0
  else
    local first_err
    first_err=$(grep -E 'static_assert|error:' "${log}" | head -3)
    echo "  expected compile failure observed:"
    echo "${first_err}" | sed 's/^/    /'
    echo "  full log: ${log}"
    return 0
  fi
}

case "${WHICH}" in
  current)        build_one current ;;
  optional)       build_one optional ;;
  r2)             build_r2 ;;
  r6-illegal)     build_r6_illegal ;;
  t5-eval-ctors)  build_t5_eval_ctors ;;
  all)            build_one current; build_one optional ;;
  all+r2)         build_one current; build_one optional; build_r2 ;;
  *)              echo "Usage: $0 [current|optional|r2|r6-illegal|t5-eval-ctors|all|all+r2]" >&2; exit 1 ;;
esac

echo "✓ build complete"
