#!/usr/bin/env bash
# docker-entrypoint.sh — dispatch container subcommands through Nx so consumers
# get content-addressed caching across `docker run` invocations.
#
# Recognised forms:
#   link <yaml>         -> nx run ocjs:link  (Nx graph pulls every transitive
#                                             dep with cache reuse)
#   compile-bindings    -> nx run ocjs:compile-bindings
#   compile-sources    -> nx run ocjs:compile-sources
#   pch                 -> nx run ocjs:pch
#   generate            -> nx run ocjs:generate
#   apply-patches       -> nx run ocjs:apply-patches
#   validate <yaml>     -> build-wasm.sh validate <yaml>   (no Nx caching needed)
#   nx <args...>        -> npx nx <args...>                (escape hatch)
#   --help|-h           -> show this help
#
# Everything else falls through to build-wasm.sh.
#
# YAML path resolution: relative paths (e.g. `link sample.yml` or
# `link configs/foo.yml`) resolve against the consumer's bind-mounted WORKDIR
# (= /src in the canonical Quickstart), NOT against the OCJS workspace root
# at /opencascade.js. Absolute paths (e.g. `link /src/sample.yml`) are honoured
# as-is. This mirrors the legacy `donalffons/opencascade.js` UX so consumers
# never type `/src/` in the common case.
#
# OCJS_YAML is set from the resolved YAML path so the Nx `link` target (whose
# cache key depends on OCJS_YAML + a sha of the file contents) hashes correctly.
# OCJS_OUTPUT_DIR defaults to /src so the canonical single-mount Quickstart
# pattern (`docker run -v "$(pwd):/src" …`) writes outputs next to the
# consumer's YAML automatically; power users override it with
# `-e OCJS_OUTPUT_DIR=<path>` + a matching `-v` mount.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OCJS_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Capture the consumer's WORKDIR (= /src per Dockerfile) BEFORE we cd to the
# OCJS workspace root, so relative YAML arguments resolve against the
# bind-mount instead of /opencascade.js.
HOST_PWD="$PWD"

show_help() {
  cat <<'EOF'
docker-entrypoint.sh — libcascade Docker dispatcher

Subcommands (Nx-cached):
  link <yaml>           Build the bindings end-to-end. Nx walks the dependency
                        graph (apply-patches → pch → generate → compile-bindings
                        → compile-sources → link) and re-uses any cached step
                        whose inputs are unchanged. Fresh container = full
                        build; cached re-run with persistent volumes = link
                        only.
  compile-bindings      Recompile Embind .cpp files
  compile-sources       Recompile OCCT static libraries via CMake
  pch                   Rebuild flat includes + precompiled header
  generate              Regenerate Embind .cpp + .d.ts.json fragments
  apply-patches         (Re)apply OCCT source patches

Subcommands (non-cached):
  validate <yaml>       Validate YAML config without building
  nx <args...>          Pass-through to `npx nx <args...>`

Anything else is forwarded to /opencascade.js/build-wasm.sh.

YAML path resolution:
  Relative paths resolve against the bind-mounted WORKDIR (/src). Absolute
  paths are honoured as-is. Examples below all reach the same file when
  $(pwd)/sample.yml is mounted:

    link sample.yml          (bare; recommended)
    link ./sample.yml        (relative)
    link /src/sample.yml     (absolute; for power users)

Canonical single-mount Quickstart:
  docker run --rm \
    -v "$(pwd):/src" \
    -u "$(id -u):$(id -g)" \
    ghcr.io/taucad/opencascade.js:single-threaded link sample.yml

Persistent caches across runs (iterative work):
  docker volume create ocjs-nx-cache ocjs-build-cache
  docker run --rm \
    -v ocjs-nx-cache:/opencascade.js/.nx \
    -v ocjs-build-cache:/opencascade.js/build \
    -v "$(pwd):/src" \
    -u "$(id -u):$(id -g)" \
    ghcr.io/taucad/opencascade.js:single-threaded link sample.yml
EOF
}

if [ "$#" -eq 0 ]; then
  show_help
  exit 1
fi

cmd="$1"
shift || true

case "$cmd" in
  --help|-h|help)
    show_help
    exit 0
    ;;
esac

cd "$OCJS_ROOT"

# Resolve a YAML positional argument against the consumer's bind-mounted
# WORKDIR (HOST_PWD) when it is relative, leaving absolute paths untouched.
# Echoes the resolved path on stdout so callers can capture it.
resolve_yaml_path() {
  local yaml="$1"
  case "$yaml" in
    /*) printf '%s\n' "$yaml" ;;
    *)  printf '%s/%s\n' "$HOST_PWD" "$yaml" ;;
  esac
}

run_nx_with_yaml() {
  local target="$1"
  local yaml="${2:-}"
  if [ -z "$yaml" ]; then
    echo "ERROR: '$cmd' requires a YAML config path argument" >&2
    show_help
    exit 1
  fi
  yaml="$(resolve_yaml_path "$yaml")"
  if [ ! -f "$yaml" ]; then
    echo "ERROR: YAML config not found: $yaml" >&2
    exit 1
  fi
  local yaml_abs
  yaml_abs="$(cd "$(dirname "$yaml")" && pwd)/$(basename "$yaml")"
  export OCJS_YAML="$yaml_abs"
  exec npx nx run "ocjs:$target"
}

run_nx_simple() {
  local target="$1"
  exec npx nx run "ocjs:$target"
}

case "$cmd" in
  link)
    # Nx dependsOn pulls apply-patches, pch, generate, compile-bindings, and
    # compile-sources transitively, with cache reuse wherever inputs are
    # unchanged.
    run_nx_with_yaml "link" "${1:-}"
    ;;
  apply-patches|pch|generate|compile-bindings|compile-sources|dts|provenance|validate-build)
    run_nx_simple "$cmd"
    ;;
  validate)
    yaml="${1:-}"
    if [ -z "$yaml" ]; then
      echo "ERROR: validate requires a YAML config path argument" >&2
      exit 1
    fi
    yaml="$(resolve_yaml_path "$yaml")"
    if [ ! -f "$yaml" ]; then
      echo "ERROR: YAML config not found: $yaml" >&2
      exit 1
    fi
    exec ./build-wasm.sh validate "$yaml"
    ;;
  nx)
    exec npx nx "$@"
    ;;
  *)
    # Backwards compatibility: forward anything unrecognised to build-wasm.sh.
    # Note: the catch-all does NOT apply HOST_PWD-relative resolution, so any
    # YAML positional after a legacy subcommand needs to be absolute or
    # /opencascade.js-relative.
    exec ./build-wasm.sh "$cmd" "$@"
    ;;
esac
