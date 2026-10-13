# libcascade — OCCT V8 WASM build image
#
# Build:
#   DOCKER_BUILDKIT=1 docker build -t opencascade-js .
#
# Per-tag production builds (consumer images):
#   docker buildx build --target final-single -t opencascade-js:single-threaded .
#   docker buildx build --target final-multi  -t opencascade-js:multi-threaded  .
#   docker buildx build --target bindgen-base -t opencascade-js:bindgen-base    .
#
# Default target is final-single (matches the canonical Quickstart tag).
#
# Run (single-mount Quickstart — outputs land next to your YAML):
#   docker run --rm \
#     -v "$(pwd):/src" \
#     -u "$(id -u):$(id -g)" \
#     opencascade-js link my.yml
#
# Persistent caching across runs (recommended for iterative work):
#   docker volume create ocjs-nx-cache ocjs-build-cache
#   docker run --rm \
#     -v ocjs-nx-cache:/opencascade.js/.nx \
#     -v ocjs-build-cache:/opencascade.js/build \
#     -v "$(pwd):/src" \
#     -u "$(id -u):$(id -g)" \
#     opencascade-js link my.yml
#
# Environment overrides:
#   docker run -e OCJS_OPT="-Os" -e OCJS_EXCEPTIONS=1 ... opencascade-js link my.yml
#
# YAML path resolution: relative paths (e.g. `link my.yml`) resolve against
# the bind-mounted WORKDIR (/src). Absolute paths (e.g. `link /src/my.yml`)
# are honoured as-is. See scripts/docker-entrypoint.sh::show_help for details.
#
# ─────────────────────────────────────────────────────────────────────────────
# Stage architecture (5 logical stages; final-{threading} are thin tag-bearing
# stages over the matching compiled-{threading} stage):
#
#   deps-base                  OS toolchain (emsdk + baked FreeType/zlib ports
#                              + apt + Node 24 + uv + Python 3.14)
#                              + clone-deps.sh (OCCT/rapidjson/freetype/LLVM 17 tarball)
#                              + LLVM 17 trim (~5 GB pruned in-RUN to ~250 MB)
#                              + apt/uv cache purge
#                              → invariant under in-repo source changes
#                              → not published
#
#   bindgen-base               deps-base + npm ci + apply-patches + pch + generate
#                              + delete generated .cpp/.h sources in same RUN
#                              → invariant under threading config
#                              → published as `:bindgen-base` (custom-bindings starting point)
#                              → consumers re-run `generate` against their own YAML
#
#   compiled-single-threaded   bindgen-base + (re)generate + compile-bindings
#   compiled-multi-threaded    + compile-sources (CMake static libs)
#                              + delete .cpp/.h sources, .cpp.o.d dep files, CMake scratch
#                              → fan-out per ARG threading
#                              → not published directly; final-{threading} adds metadata
#
#   final-single               compiled-{threading} + OCI labels + WORKDIR + ENTRYPOINT + CMD
#   final-multi                → published as `:single-threaded` / `:multi-threaded`
#
# Each named stage is independently buildable via `--target`. R10 in-RUN pruning
# is applied at every heavy stage; deletions stay inside the same RUN block so
# Docker layer storage actually shrinks (whiteout markers over fat parent layers
# would not).
#
# Notes on the underlying build pipeline:
#   - All dependency fetching (OCCT/rapidjson/freetype git clones, Python venv,
#     LLVM 17 tarball) is delegated to scripts/clone-deps.sh — the same script
#     the host build uses. The Dockerfile is a thin OS+toolchain layer on top.
#   - emsdk is the only dep clone-deps.sh skips here: the base image already
#     ships /emsdk with the `emsdk` launcher, and the script's §2 explicitly
#     detects this via `[ -x $EMSDK_DIR/emsdk ]`. A pre-symlink at
#     /opencascade.js/deps/emsdk → /emsdk activates that path.
#   - apt-installed Doxygen satisfies _ensure_doxygen at runtime (no GitHub download).
#   - The entrypoint dispatches recognised subcommands through `npx nx run` so
#     consumers benefit from Nx's content-addressed cache (warm runs ≤ 5 min).

# syntax=docker/dockerfile:1.7

# ═════════════════════════════════════════════════════════════════════════════
# Stage 1: deps-base
# OS toolchain + dependency clones, with LLVM 17 trim and cache purge folded
# into the clone-deps RUN so all of those bytes are gone from the layer.
# ═════════════════════════════════════════════════════════════════════════════
FROM emscripten/emsdk:6.0.5@sha256:76a44fff907397784decc435115d07fcb9587a4f1504977f39f3745e538e3a1e AS deps-base

LABEL org.opencontainers.image.title="libcascade (deps-base)" \
      org.opencontainers.image.description="OS toolchain + dependency clones (emsdk, Node 24, uv, Python 3.14, OCCT, rapidjson, freetype, LLVM 17 — header-trimmed)"

# The supported links use Emscripten's standard and legacy-SjLj FreeType ports,
# which download and build their shared zlib dependency on first use. Bake both
# variants into the published image's sysroot so consumer links never depend on
# that late network fetch. Compile stages use separate BuildKit cache mounts;
# their contents are not image data.
# Emscripten's port downloader has no retry policy, so bound retries here where
# a transient archive failure costs seconds rather than hours of compilation.
RUN for attempt in 1 2 3 4 5; do \
      embuilder build freetype freetype-legacysjlj && break; \
      [ "$attempt" -lt 5 ] || exit 1; \
      sleep "$((attempt * 5))"; \
    done

# ── System packages ─────────────────────────────────────────────────────────
# Notes on what is intentionally NOT installed:
#   - cmake: installed via the PyPI wheel `cmake==4.3.2` in the venv below.
#     Keeps host (`brew install cmake@4`) and container on the same major.
#   - python3/python3-pip/python3-venv: replaced by `uv python install 3.14.4`
#     which downloads python-build-standalone — bit-identical interpreter
#     lineage on macOS arm64 and Linux arm64. Foundation for libclang
#     parse-environment parity (see src/ocjs_bindgen/config/paths.py).
RUN --mount=type=cache,target=/var/cache/apt,id=ocjs-apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt/lists,id=ocjs-apt-lists,sharing=locked \
  apt-get update -y && \
  apt-get install -y --no-install-recommends \
    bash \
    build-essential \
    ca-certificates \
    curl \
    doxygen=1.9.8+ds-2ubuntu0.1 \
    git \
    gnupg \
    jq \
    libc6-dev \
    openjdk-21-jre-headless \
    unzip \
    xz-utils

# libc6-dev note: provides /usr/include/sys/types.h + friends (glibc userspace
# headers) that `_get_host_libc_include()` in src/ocjs_bindgen/config/paths.py
# routes libclang's parse pass at. Without this package, /usr/include has only
# /usr/include/stdint.h (from linux-libc-dev that build-essential pulls in) and
# OCCT headers transitively requesting <sys/types.h> fail to parse — the same
# silent type-degradation cascade that has historically struck libc++/libc
# version mismatches, just triggered by missing libc instead of mismatched
# libc++. On macOS Apple's SDK bundles a complete libc by default; on Linux it
# is a separate package.

# ── Node.js 24 (NodeSource) ─────────────────────────────────────────────────
RUN --mount=type=cache,target=/var/cache/apt,id=ocjs-apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt/lists,id=ocjs-apt-lists,sharing=locked \
  curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && \
  apt-get install -y --no-install-recommends nodejs

# ── uv (Python toolchain manager) + Python 3.14.4 ───────────────────────────
# uv installs python-build-standalone — same upstream CPython binary lineage
# on macOS arm64 and Linux arm64 for a given release tag. Replaces both apt
# python3* packages and pyenv. Host bootstrap is identical (see MAINTAINER.md).
#
# UV_PYTHON_INSTALL_DIR=/opt/uv-python relocates uv's python tree from
# /root/.local/share/uv/python/… (which has mode 0700 by default and breaks
# non-root execution via `docker run -u "$(id -u):$(id -g)"`) to a
# world-traversable /opt subtree. The venv at /opencascade.js/.venv/bin/python
# symlinks into this tree; without the relocation, non-root containers fail
# at startup with "python not found" because the symlink target lives under
# a directory the unprivileged user cannot traverse.
ENV UV_PYTHON_INSTALL_DIR=/opt/uv-python
RUN curl -LsSf https://astral.sh/uv/install.sh | \
      env UV_INSTALL_DIR=/usr/local/bin INSTALLER_NO_MODIFY_PATH=1 sh && \
    uv python install 3.14.4 && \
    chmod -R go+rX /opt/uv-python

# Put /usr/local/bin (uv) ahead of emsdk's bundled Node 22 so `node`/`npm`
# resolve to the NodeSource-installed v24. The venv path gets prepended
# below after clone-deps.sh creates it.
#
# Emcc still uses its bundled Node 22 internally via the NODE_JS absolute
# path in /emsdk/.emscripten — that's how emscripten orchestrates its own
# toolchain and is independent of $PATH lookups. We only need Node 24 for
# our project's `npx nx run …` / `npm ci` invocations, matching the host's
# Node version (see .nvmrc and package.json:engines).
ENV PATH="/opencascade.js/.venv/bin:/usr/local/bin:/usr/bin:/bin:${PATH}"
ENV OCJS_PYTHON_PROFILE=runtime

WORKDIR /opencascade.js/

# Pre-create the venv with the pinned Python so /opencascade.js/.venv/bin/python3
# lands on PATH BEFORE clone-deps.sh runs (its line 53 requires python3 to parse
# DEPS.json). The script's §3 fast-paths past an already-created venv and syncs
# the exact uv lock; this only bootstraps the python3 binary needed to parse it.
RUN uv venv --python 3.14.4 /opencascade.js/.venv

RUN mkdir -p /opencascade.js/deps && \
    ln -s /emsdk /opencascade.js/deps/emsdk

COPY DEPS.json pyproject.toml uv.lock /opencascade.js/
COPY scripts/clone-deps.sh scripts/prune-llvm.sh /opencascade.js/scripts/

# ── Dependency fetch + LLVM 17 trim + cache purge (mega-RUN, R10) ───────────
# clone-deps.sh §1-§4 fetches: OCCT/rapidjson/freetype git checkouts,
# Python .venv lock sync, LLVM 17 tarball extract (~5.6 GB).
#
# LLVM 17 trim: src/ocjs_bindgen/config/paths.py consumes only:
#   - deps/llvm-17/include/c++/v1/                  (libc++ generic headers)
#   - deps/llvm-17/include/<host-triple>/c++/v1/    (libc++ __config_site —
#                                                    Linux tarballs only;
#                                                    Apple bundles it under
#                                                    c++/v1/ directly)
#   - deps/llvm-17/lib/clang/17/include/            (clang resource headers)
# The actual libclang.so used by the parse pass is the pip wheel
# `libclang==18.1.1`. Everything else in the LLVM 17 tarball (bin/, the rest
# of lib/, libexec/, share/) is unused by the build and prunable.
# We retain all of include/ (~100 MB) rather than just include/c++/ because
# pruning the target-triple subdir hides __config_site (a hard requirement
# for libc++ <__config> to parse) — see paths.py::_get_libc_include_args.
#
# uv pip cache: cleared because the venv is now fully populated and the
# downloaded wheel cache (~150 MB) is dead weight in the image.
RUN bash scripts/clone-deps.sh --dest /opencascade.js/deps && \
    echo "── Trimming LLVM 17 vendored tarball (R10) ────────────────────────" && \
    bash scripts/prune-llvm.sh /opencascade.js/deps/llvm-17 && \
    echo "── LLVM 17 retained:" && \
    du -sh /opencascade.js/deps/llvm-17 && \
    echo "── Purging uv pip cache + apt lists ───────────────────────────────" && \
    uv cache clean && \
    rm -rf /root/.cache /tmp/* /var/tmp/* && \
    apt-get clean

# Convenience top-level symlinks: preserve the long-standing /occt, /rapidjson,
# /freetype, /llvm-17 paths so the `ENV OCCT_ROOT=/occt` defaults below (and
# any external bind-mount UX like `-v /my/occt:/occt`) keep working. The real
# bytes live under /opencascade.js/deps/<name>; these are just aliases.
RUN ln -s /opencascade.js/deps/OCCT      /occt && \
    ln -s /opencascade.js/deps/rapidjson /rapidjson && \
    ln -s /opencascade.js/deps/freetype  /freetype && \
    ln -s /opencascade.js/deps/llvm-17   /llvm-17

# ═════════════════════════════════════════════════════════════════════════════
# Stage 1b: occt-libs-{single,multi}-threaded
# OCCT static libraries, compiled from deps-base plus only the files that
# decide their bytes: the OCCT patches, the libembind snapshot the patch step
# verifies, the named flag configurations, build-wasm.sh, and the two state
# scripts. Bindgen, filter, YAML and package changes leave these layers cached,
# so they no longer recompile OCCT (30-57 min per threading mode). BuildKit
# also builds them alongside bindgen-content's generate on a cold cache.
#
# compiled-* copies build/occt-libraries/ in; build-wasm.sh then sees libraries
# already published for the identical cmake-state identity (patched OCCT tree,
# header deps, semantic flags, cmake and emcc versions) and skips CMake. If any
# of those differ, the identity check fails and compiled-* compiles OCCT itself.
# ═════════════════════════════════════════════════════════════════════════════
FROM deps-base AS occt-sources

COPY build-wasm.sh ./build-wasm.sh
COPY build-configs/configurations.json ./build-configs/configurations.json
COPY src/patches ./src/patches
COPY src/vendor ./src/vendor
COPY src/ocjs_bindgen/__init__.py src/ocjs_bindgen/build_state.py src/ocjs_bindgen/cmake_state.py \
     ./src/ocjs_bindgen/
COPY scripts/patch-state.py scripts/cmake-state.py ./scripts/
ENV OCCT_ROOT=/occt \
    RAPIDJSON_ROOT=/rapidjson \
    FREETYPE_ROOT=/freetype \
    EMSDK=/emsdk

FROM occt-sources AS occt-libs-single-threaded
ENV OCJS_CONFIG=single-threaded
RUN --mount=type=cache,target=/emsdk/upstream/emscripten/cache,id=ocjs-emsdk-single-threaded,sharing=locked \
    mkdir -p build && \
    ./build-wasm.sh apply-patches occt-libraries && \
    rm -rf build/occt-cmake

FROM occt-sources AS occt-libs-multi-threaded
ENV OCJS_CONFIG=multi-threaded
RUN --mount=type=cache,target=/emsdk/upstream/emscripten/cache,id=ocjs-emsdk-multi-threaded,sharing=locked \
    mkdir -p build && \
    ./build-wasm.sh apply-patches occt-libraries && \
    rm -rf build/occt-cmake

# ═════════════════════════════════════════════════════════════════════════════
# Stage 1d: binding-objects-seed-{single,multi}-threaded
# Empty by default. CI points these at the latest release image of the same
# threading mode (`--build-context binding-objects-seed-…=docker-image://…`),
# and compiled-* copies that image's build/compiled-bindings/ in before
# compiling. compileBindings.py keeps a seeded object only when its .identity
# matches the content hash of the new .cpp, the compile command, the PCH, the
# patched OCCT state and the compiler; it rebuilds the rest and deletes objects
# whose source is gone. So a bindgen change recompiles only the bindings it
# changed instead of all ~5,300 (57-101 min). Release reproducibility builds
# pass no seed and compile everything cold.
# ═════════════════════════════════════════════════════════════════════════════
FROM scratch AS binding-objects-seed-single-threaded
FROM scratch AS binding-objects-seed-multi-threaded

# ═════════════════════════════════════════════════════════════════════════════
# Stage 1c: npm-manifests
# package.json and package-lock.json with the root version pinned to 0.0.0.
# Every release bumps that version and nothing else in the build reads it, so
# installing from these copies keeps `npm ci` and every layer after it cached
# across releases. The real manifests are COPYed late into the published
# stages, where generate-api-reference.mjs and consumers read the version.
# ═════════════════════════════════════════════════════════════════════════════
FROM deps-base AS npm-manifests
WORKDIR /npm-manifests
COPY package.json package-lock.json ./
RUN jq '.version = "0.0.0"' package.json > package.json.tmp && \
    mv package.json.tmp package.json && \
    jq '.version = "0.0.0" | .packages[""].version = "0.0.0"' package-lock.json > package-lock.json.tmp && \
    mv package-lock.json.tmp package-lock.json

# ═════════════════════════════════════════════════════════════════════════════
# Stage 2: bindgen-base
# In-repo build system + npm ci + apply-patches + pch + generate, with
# generated .cpp/.h sources pruned in-RUN. Published as :bindgen-base — the
# custom-bindings starting point. Consumers re-run `generate` against their
# own YAML in the compile-bindings flow.
# ═════════════════════════════════════════════════════════════════════════════
# bindgen-content holds every heavy build artifact (apply-patches + pch +
# generate + non-root perm chmod) but does NOT include the runtime entrypoint
# COPY or OCI labels. The published `:bindgen-base` image and the `compiled-*`
# stages both derive from this content layer.
#
# Splitting the published `bindgen-base` stage off this content layer is the
# architectural pre-condition for entrypoint patches being a thin terminal-
# layer change: when scripts/docker-entrypoint.sh changes, the COPY layer in
# the published `bindgen-base` and the `final-*` stages cache-miss, but
# `bindgen-content` (and therefore `compiled-single-threaded` /
# `compiled-multi-threaded`) cache-hit because they don't reference the
# entrypoint script at all.
FROM deps-base AS bindgen-content

# Install Nx CLI + project devDeps deterministically from package-lock.json
COPY --from=npm-manifests /npm-manifests/package.json /npm-manifests/package-lock.json /opencascade.js/
COPY nx.json .nxignore project.json /opencascade.js/
RUN --mount=type=cache,target=/root/.npm,id=ocjs-npm,sharing=locked \
    npm ci --no-audit --no-fund

# Copy the build system. DEPS.json + scripts/clone-deps.sh were copied above
# (they are inputs to the dep-fetch RUN); this stage brings in the rest of
# the build system using an explicit allow-list of build-time scripts so the
# runtime-only docker-entrypoint.sh can be COPYed late in each ENTRYPOINT-
# bearing stage. That keeps future entrypoint patches as a thin terminal-
# layer change instead of invalidating apply-patches/pch/generate and the
# multi-GB compiled-* layers downstream.
#
# scripts/docker-entrypoint.sh   — runtime, late-COPYed in final-* + bindgen-base
# scripts/docker-e2e-validate.sh — host-only, never enters the image
# scripts/clone-deps.sh          — already in deps-base (line above), excluded here
COPY src ./src
COPY tsconfig.json* ./
COPY build-configs ./build-configs
COPY build-wasm.sh ./build-wasm.sh
COPY scripts/artifact-state.py scripts/cmake-state.py scripts/enumerate-symbols.py \
     scripts/generate-bindings.py scripts/patch-state.py scripts/validate-build.py \
     scripts/generate-api-reference.mjs ./scripts/
COPY scripts/lib ./scripts/lib
COPY bindgen-filters.yaml ./bindgen-filters.yaml
RUN chmod +x build-wasm.sh

# ── Default environment ─────────────────────────────────────────────────────
# The named configuration in build-configs/configurations.json drives every
# build flag (-O3, SIMD, mimalloc, eval_ctors, closure, threading, etc.).
# Override at runtime with `-e OCJS_CONFIG=<name>` (see
# build-configs/configurations.json for available named configurations) or
# per-flag overrides (`-e OCJS_OPT=-Os`, etc.).
ENV OCCT_ROOT=/occt
ENV RAPIDJSON_ROOT=/rapidjson
ENV FREETYPE_ROOT=/freetype
ENV EMSDK=/emsdk
# OCCT source patches (using-statement, Standard_Dump stub, noexcept dtors,
# STEPCAF DynamicType and material density units, Geom2dGcc_Circ2dTanCenGeo
# uninitialised Index, BRepOffset MapSF iteration order, NurbsConvert
# mesh-only face) are HARD
# REQUIREMENTS for every supported build —
# they're applied unconditionally by build-wasm.sh::step_apply_patches.
# The legacy OCJS_PATCH_DUMP / OCJS_PATCH_STEPCAF env-var toggles were
# removed because making required behaviour optional is a footgun.
# Output directory defaults to /src (the canonical Quickstart mount point)
# so single-mount `docker run -v "$(pwd):/src" …` writes artifacts next to
# the consumer's YAML automatically. Override with `-e OCJS_OUTPUT_DIR=<path>`
# + a matching `-v` mount for power users who want a separate output dir.
ENV OCJS_OUTPUT_DIR=/src
# Strict-types guardrail: defaults to warn-only -- the link step always
# prints a triage summary to stderr if the .d.ts contains rewrites-to-
# `unknown` method signatures or unbound class references (the silent
# type-loss failure mode from the May-2026 replicad regression). The
# build proceeds. CI consumers who want to escalate the warning to a
# hard build failure should set OCJS_STRICT_TYPES=1 explicitly at
# `docker run` time. See `ocjs_bindgen.link.yaml_build._enforce_strict_types_gate`
# for the policy.

RUN mkdir -p build/bindings build/sources

# ── apply-patches + pch + generate + prune (mega-RUN, R10) ──────────────────
# Apply OCCT patches, build flat includes + PCH, generate Embind .cpp + .h +
# .d.ts.json fragments — then delete the generated .cpp/.h sources INSIDE
# this same RUN so they never appear in any image layer. PCH (the expensive
# bit, ~600 MB) and .d.ts.json (the type-graph index, ~few MB) are kept.
#
# Consumers of :bindgen-base who want a custom YAML build re-run `generate`
# against their own YAML; the cached PCH + patched OCCT tree make that step
# fast (~10-30s). The compiled-{threading} child stages also re-run
# `generate` because they need the .cpp files back to compile against.
# ── apply-patches + pch + generate + prune + non-root perms (mega-RUN) ──────
# Folding `chmod -R go+w` for the writable-by-non-root paths INTO this same
# RUN is critical: a separate `chmod -R` layer copies every modified inode
# (PCH ≈ 600 MB, build/ tree ≈ 1.5 GB) into the new overlay layer because
# overlayfs treats permission changes as content changes — that produces a
# ~2 GB duplicate layer for what should be a metadata-only operation. By
# applying chmod in-place inside the same RUN, the perms commit alongside
# the original file content with zero duplication.
#
# Consumers running with `docker run -u "$(id -u):$(id -g)"` need readable and writable
# locations for Nx's content-addressed cache (.nx), build outputs (build/),
# and emsdk's per-run scratch. Without this chmod, the first non-root run
# fails with EACCES when Nx tries to create its .nx subdirectory under
# /opencascade.js (root:root mode 0755 by default).
RUN npx nx run ocjs:generate && \
    echo "── Pruning generated .cpp/.h sources (kept: .d.ts.json + PCH) ────" && \
    find build/bindings -type f -name '*.cpp' -delete && \
    find build/bindings -type f -name '*.h' -delete && \
    rm -rf /root/.npm/_cacache && \
    echo "── Setting non-root execution perms (folded; avoids 2 GB chmod layer) ──" && \
    mkdir -p /opencascade.js/.nx && \
    chmod -R go+rwX /opencascade.js/.nx /opencascade.js/build && \
    chmod go+w /opencascade.js && \
    echo "── Allowing git on vendored OCCT/rapidjson/freetype for non-root runs ──" && \
    git config --system --add safe.directory '*' && \
    echo "── Making emsdk libembind.js writable for non-root reset+repatch ──" && \
    chmod go+w /emsdk/upstream/emscripten/src/lib \
               /emsdk/upstream/emscripten/src/lib/libembind.js

# ═════════════════════════════════════════════════════════════════════════════
# Stage 2b: bindgen-base  (published as ghcr.io/taucad/opencascade.js:bindgen-base)
#
# Thin published wrapper around `bindgen-content`: adds OCI labels, the
# late-COPY of the runtime entrypoint, WORKDIR/ENTRYPOINT/CMD. Patching
# `scripts/docker-entrypoint.sh` invalidates only the COPY + ENTRYPOINT
# layers here (and the equivalents in `final-single` / `final-multi`); the
# heavy `bindgen-content` stage and the downstream `compiled-*` stages
# cache-hit because they never reference the entrypoint script.
# ═════════════════════════════════════════════════════════════════════════════
FROM bindgen-content AS bindgen-base

# ── OCI metadata for the published :bindgen-base image ──────────────────────
ARG REVISION
# Default 0 so a bare `docker build` (no --build-arg) bakes a *valid* epoch.
# An empty ARG bakes `ENV SOURCE_DATE_EPOCH=""`, and clang hard-fails
# invocation creation on a set-but-empty SOURCE_DATE_EPOCH — every
# consumer-side bind-symbols run then dies with an opaque
# TranslationUnitLoadError. CI always passes a real epoch, so byte
# reproducibility is unaffected by this default.
ARG OCJS_SOURCE_DATE_EPOCH=0
ARG VERSION
ARG SOURCE_URL=https://github.com/taucad/opencascade.js
ENV OCJS_SOURCE_COMMIT="${REVISION}" \
    SOURCE_DATE_EPOCH="${OCJS_SOURCE_DATE_EPOCH}"
LABEL org.opencontainers.image.title="libcascade (bindgen-base)" \
      org.opencontainers.image.description="Custom-bindings starting point: OCCT patches + PCH + generate index pre-baked (.cpp sources pruned; re-run generate against your YAML)" \
      org.opencontainers.image.source="${SOURCE_URL}" \
      org.opencontainers.image.url="${SOURCE_URL}" \
      org.opencontainers.image.revision="${REVISION}" \
      org.opencontainers.image.version="${VERSION}" \
      org.opencontainers.image.licenses="LGPL-2.1-only" \
      org.opencontainers.image.vendor="taucad"

# The real manifests: bindgen-content installed from version-free copies (see
# npm-manifests), so a release version bump only rebuilds these late layers.
COPY package.json package-lock.json /opencascade.js/

# R17: :bindgen-base ships with the same docker-entrypoint dispatcher as the
# final-{threading} images so consumers get a consistent UX across all
# published tags. Consumers wanting interactive shell override the entrypoint:
#   docker run --rm -it --entrypoint bash ghcr.io/taucad/opencascade.js:bindgen-base
COPY scripts/docker-entrypoint.sh /opencascade.js/scripts/docker-entrypoint.sh
WORKDIR /src
ENTRYPOINT ["/opencascade.js/scripts/docker-entrypoint.sh"]
CMD ["--help"]

# ═════════════════════════════════════════════════════════════════════════════
# Stage 3a: compiled-single-threaded
# ═════════════════════════════════════════════════════════════════════════════
# Note the `FROM bindgen-content` (not `bindgen-base`): inheriting from the
# pre-COPY content layer is what isolates `compiled-*` from entrypoint patches.
FROM bindgen-content AS compiled-single-threaded

# Reset to /opencascade.js for the build-tree RUNs; final-* will WORKDIR /src.
WORKDIR /opencascade.js/

# Nx daemon plugin workers fail under Docker+qemu (linux/amd64 on arm64 hosts):
# "Failed to start plugin worker for plugin nx/core/package-json". Disabling
# here keeps bindgen-content cacheable while fixing compiled-* + consumer link.
ENV NX_DAEMON=false
ENV OCJS_CONFIG=single-threaded
ENV THREADING=single-threaded

# ── (re)generate + compile-bindings + compile-sources + prune (mega-RUN) ────
# bindgen-base deleted the generated .cpp/.h files from its own layer so the
# published :bindgen-base image stays small. compiled-{threading} re-runs
# generate (cheap given PCH + patches are cached) to materialise the .cpp
# files, then compiles them, then prunes the source files + CMake scratch.
# .o files for bindings + OCCT static .a libs are kept (needed for link).
# The OCCT libraries come from occt-libs-{threading} (Stage 1b) through a bind
# mount, so they land in this layer exactly as a local compile would, and
# build-wasm.sh skips CMake because their identity matches. Binding objects
# from binding-objects-seed-{threading} (Stage 1d), when CI provides one, are
# copied the same way and reused only where their identity matches.
RUN --mount=type=cache,target=/emsdk/upstream/emscripten/cache,id=ocjs-emsdk-${OCJS_CONFIG},sharing=locked \
    --mount=type=bind,from=occt-libs-single-threaded,source=/opencascade.js/build/occt-libraries,target=/tmp/occt-libraries \
    --mount=type=bind,from=binding-objects-seed-single-threaded,target=/tmp/binding-objects-seed \
    cp -R /tmp/occt-libraries build/occt-libraries && \
    if [ -d /tmp/binding-objects-seed/opencascade.js/build/compiled-bindings ]; then \
      echo "── Seeding binding objects from the previous image (identity-checked) ──" && \
      cp -R /tmp/binding-objects-seed/opencascade.js/build/compiled-bindings build/compiled-bindings; \
    fi && \
    npx nx run ocjs:compile && \
    echo "── Pruning compile intermediates (kept: .o files + OCCT .a libs) ──" && \
    find build/bindings -type f -name '*.cpp' -delete && \
    find build/bindings -type f -name '*.h' -delete && \
    find build -type f -name '*.cpp.o.d' -delete && \
    rm -rf build/occt-cmake && \
    echo "── Re-applying non-root perms (folded; bindgen-base chmod stale here) ──" && \
    chmod -R go+rwX /opencascade.js/.nx /opencascade.js/build

# ═════════════════════════════════════════════════════════════════════════════
# Stage 3b: compiled-multi-threaded
# ═════════════════════════════════════════════════════════════════════════════
FROM bindgen-content AS compiled-multi-threaded

WORKDIR /opencascade.js/

ENV NX_DAEMON=false
ENV OCJS_CONFIG=multi-threaded
ENV THREADING=multi-threaded

RUN --mount=type=cache,target=/emsdk/upstream/emscripten/cache,id=ocjs-emsdk-${OCJS_CONFIG},sharing=locked \
    --mount=type=bind,from=occt-libs-multi-threaded,source=/opencascade.js/build/occt-libraries,target=/tmp/occt-libraries \
    --mount=type=bind,from=binding-objects-seed-multi-threaded,target=/tmp/binding-objects-seed \
    cp -R /tmp/occt-libraries build/occt-libraries && \
    if [ -d /tmp/binding-objects-seed/opencascade.js/build/compiled-bindings ]; then \
      echo "── Seeding binding objects from the previous image (identity-checked) ──" && \
      cp -R /tmp/binding-objects-seed/opencascade.js/build/compiled-bindings build/compiled-bindings; \
    fi && \
    npx nx run ocjs:compile && \
    echo "── Pruning compile intermediates (kept: .o files + OCCT .a libs) ──" && \
    find build/bindings -type f -name '*.cpp' -delete && \
    find build/bindings -type f -name '*.h' -delete && \
    find build -type f -name '*.cpp.o.d' -delete && \
    rm -rf build/occt-cmake && \
    echo "── Re-applying non-root perms (folded; bindgen-base chmod stale here) ──" && \
    chmod -R go+rwX /opencascade.js/.nx /opencascade.js/build

# ═════════════════════════════════════════════════════════════════════════════
# Stage 4a: final-single  (published as ghcr.io/taucad/opencascade.js:single-threaded)
# ═════════════════════════════════════════════════════════════════════════════
FROM compiled-single-threaded AS final-single

# ── OCI image metadata ──────────────────────────────────────────────────────
# REVISION/VERSION are injected by CI (docker/metadata-action + github.sha);
# SOURCE_URL defaults to the taucad fork and can be overridden for downstream
# rebuilds. Labels follow the opencontainers.org spec so `docker inspect` and
# GHCR's UI surface provenance, licensing, and source links automatically.
ARG REVISION
# Default 0 so a bare `docker build` (no --build-arg) bakes a *valid* epoch.
# An empty ARG bakes `ENV SOURCE_DATE_EPOCH=""`, and clang hard-fails
# invocation creation on a set-but-empty SOURCE_DATE_EPOCH — every
# consumer-side bind-symbols run then dies with an opaque
# TranslationUnitLoadError. CI always passes a real epoch, so byte
# reproducibility is unaffected by this default.
ARG OCJS_SOURCE_DATE_EPOCH=0
ARG VERSION
ARG SOURCE_URL=https://github.com/taucad/opencascade.js
ENV OCJS_SOURCE_COMMIT="${REVISION}" \
    SOURCE_DATE_EPOCH="${OCJS_SOURCE_DATE_EPOCH}"
LABEL org.opencontainers.image.title="libcascade (single-threaded)" \
      org.opencontainers.image.description="libcascade single-threaded WASM build image (warm cache, ≤5min link)" \
      org.opencontainers.image.source="${SOURCE_URL}" \
      org.opencontainers.image.url="${SOURCE_URL}" \
      org.opencontainers.image.revision="${REVISION}" \
      org.opencontainers.image.version="${VERSION}" \
      org.opencontainers.image.licenses="LGPL-2.1-only" \
      org.opencontainers.image.vendor="taucad"

# The real manifests: bindgen-content installed from version-free copies (see
# npm-manifests), so a release version bump only rebuilds these late layers.
COPY package.json package-lock.json /opencascade.js/

# WORKDIR /src makes the consumer's bind-mounted YAML directory the working
# directory at runtime. Combined with `ENV OCJS_OUTPUT_DIR=/src` in
# bindgen-base, the canonical single-mount Quickstart pattern
# (`docker run -v "$(pwd):/src" …`) writes artifacts next to the YAML.
#
# Late-COPY of docker-entrypoint.sh: see bindgen-base for the rationale —
# any future entrypoint patch only invalidates this terminal layer, not the
# multi-GB compiled-single-threaded content above.
COPY scripts/docker-entrypoint.sh /opencascade.js/scripts/docker-entrypoint.sh
WORKDIR /src

ENTRYPOINT ["/opencascade.js/scripts/docker-entrypoint.sh"]
CMD ["--help"]

# Non-published test surface. It derives from the exact production candidate
# and adds only pytest for CI integration and sentinel checks.
FROM final-single AS validation-single
ENV OCJS_PYTHON_PROFILE=test
RUN bash /opencascade.js/scripts/clone-deps.sh \
      --dest /opencascade.js/deps \
      --python-profile test && \
    uv cache clean && \
    rm -rf /root/.cache /tmp/* /var/tmp/*

# ═════════════════════════════════════════════════════════════════════════════
# Stage 4b: final-multi  (published as ghcr.io/taucad/opencascade.js:multi-threaded)
# ═════════════════════════════════════════════════════════════════════════════
FROM compiled-multi-threaded AS final-multi

ARG REVISION
# Default 0 so a bare `docker build` (no --build-arg) bakes a *valid* epoch.
# An empty ARG bakes `ENV SOURCE_DATE_EPOCH=""`, and clang hard-fails
# invocation creation on a set-but-empty SOURCE_DATE_EPOCH — every
# consumer-side bind-symbols run then dies with an opaque
# TranslationUnitLoadError. CI always passes a real epoch, so byte
# reproducibility is unaffected by this default.
ARG OCJS_SOURCE_DATE_EPOCH=0
ARG VERSION
ARG SOURCE_URL=https://github.com/taucad/opencascade.js
ENV OCJS_SOURCE_COMMIT="${REVISION}" \
    SOURCE_DATE_EPOCH="${OCJS_SOURCE_DATE_EPOCH}"
LABEL org.opencontainers.image.title="libcascade (multi-threaded)" \
      org.opencontainers.image.description="libcascade multi-threaded WASM build image (requires COOP/COEP on consumer pages)" \
      org.opencontainers.image.source="${SOURCE_URL}" \
      org.opencontainers.image.url="${SOURCE_URL}" \
      org.opencontainers.image.revision="${REVISION}" \
      org.opencontainers.image.version="${VERSION}" \
      org.opencontainers.image.licenses="LGPL-2.1-only" \
      org.opencontainers.image.vendor="taucad"

# The real manifests: bindgen-content installed from version-free copies (see
# npm-manifests), so a release version bump only rebuilds these late layers.
COPY package.json package-lock.json /opencascade.js/

# Late-COPY of docker-entrypoint.sh: see bindgen-base for the rationale —
# any future entrypoint patch only invalidates this terminal layer, not the
# multi-GB compiled-multi-threaded content above.
COPY scripts/docker-entrypoint.sh /opencascade.js/scripts/docker-entrypoint.sh
WORKDIR /src

ENTRYPOINT ["/opencascade.js/scripts/docker-entrypoint.sh"]
CMD ["--help"]
