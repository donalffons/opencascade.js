# Maintainer Guide

Build-from-source, configuration, and release workflow for libcascade. Consumers reaching for the `libcascade` npm package should start from [README.md](README.md) — this document is for maintainers and contributors building OCCT WASM locally.

## Table of Contents

- [Quick Start (Native Build)](#quick-start-native-build)
- [Build Configuration](#build-configuration)
  - [YAML Configs](#yaml-configs)
  - [Configurations](#configurations)
  - [Environment Variables](#environment-variables)
- [CI and Release Ownership](#ci-and-release-ownership)
  - [Publication Channels](#publication-channels)
  - [npm Trusted Publishing](#npm-trusted-publishing)
  - [Cutting a Release](#cutting-a-release)
- [Customizing Your Build](#customizing-your-build)
- [Build Commands](#build-commands)
- [Docker End-to-End Validation](#docker-end-to-end-validation)
- [Additional Documentation](#additional-documentation)

## Quick Start (Native Build)

Prerequisites: Git, [uv](https://docs.astral.sh/uv/), and a C++ toolchain. `uv` installs the pinned Python 3.14 environment.

```bash
# 1. Clone the libcascade source repository
git clone https://github.com/taucad/opencascade.js.git
cd opencascade.js

# 2. Clone every dependency at its DEPS.json pin and sync uv.lock
./scripts/clone-deps.sh --dest deps
source deps/emsdk/emsdk_env.sh

# 3. Install locked JavaScript tools
npm ci

# 4. Build WASM (use nohup — full builds take 10-30+ min)
nohup env OCJS_LTO=0 ./build-wasm.sh full build-configs/full.yml > build.log 2>&1 &
tail -f build.log
```

> **Tip:** Full builds take 10-30+ minutes (longer with cold caches). Using `nohup` ensures the build continues if your terminal session disconnects. For link-only rebuilds (~1-2 min), `nohup` is optional.

Output files appear alongside the YAML config: `opencascade_single.wasm`, `opencascade_single.js`, `opencascade_single.d.ts`.

## Build Configuration

### YAML Configs

YAML configs define which OCCT classes are bound to JavaScript:

- `build-configs/full.yml` — all symbols, single-threaded, native WASM exceptions on by default with `getExceptionMessage` runtime helpers

See the [YAML schema](https://libcascade.xyz/docs/toolchain/reference/yaml-schema) for the full contract, including `additionalCppFiles` and per-build `additionalBindFiles`.

### Configurations

Named compile-time configurations live in [`build-configs/configurations.json`](build-configs/configurations.json). Apply one with `--config`:

```bash
# Production default — what the published tarball is built with: -O3, baseline SIMD,
# BigInt, native WASM exceptions, EVAL_CTORS=2, Closure, converge, mimalloc.
./build-wasm.sh --config single-threaded full build-configs/full.yml

# Size-tuned variant: -Os compile + wasm-opt -O3, same feature set, smaller binary
./build-wasm.sh --config single-threaded-smallest full build-configs/full.yml

# Threaded variant for SAB/COOP+COEP-isolated deployments
./build-wasm.sh --config multi-threaded full build-configs/full.yml

# Debug — fastest build, -O0 compile + wasm-opt -O0, SIMD off, converge off
./build-wasm.sh --config debug full build-configs/full.yml
```

Add your own entry to `configurations.json` to define a new configuration. See [BUILD_SYSTEM.md](BUILD_SYSTEM.md) for the full list of `OCJS_*` keys.

The published npm tarball ships **both** build outputs:

| Artifact prefix        | Config                              | Subpath export                               |
| ---------------------- | ----------------------------------- | -------------------------------------------- |
| `opencascade_single.*` | `single-threaded` + `full.yml`      | `libcascade` / `libcascade/wasm`             |
| `opencascade_multi.*`  | `multi-threaded` + `full_multi.yml` | `libcascade/multi` / `libcascade/multi/wasm` |

Each six-file set includes a matching `*.provenance.json` sidecar (`dist/opencascade_single.provenance.json` and `dist/opencascade_multi.provenance.json`).

### Environment Variables

Two layers of "default" matter here. The **bare default** is what `build-wasm.sh` falls back to if you set neither an env var nor a `--config`. The **shipped `full.yml` build** is what the published `libcascade` tarball was actually linked with. Its YAML owns link-only `emccFlags` such as `-sWASM_BIGINT` and `-sEVAL_CTORS=2`; named entries in [`build-configs/configurations.json`](build-configs/configurations.json) own compile and optimizer settings.

| Variable            | Bare default      | Shipped `full.yml` build | Description                                                                                                          |
| ------------------- | ----------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `OCJS_OPT`          | `-O2`             | `-O3`                    | Compile optimization level                                                                                           |
| `OCJS_LTO`          | `1`               | `0`                      | LTO at compile time. Empirically harmful for OCCT — see the [custom emcc flags guide](https://libcascade.xyz/docs/toolchain/guides/custom-emcc-flags). |
| `OCJS_EXCEPTIONS`   | `0`               | `1`                      | Native WASM exceptions. Shipped build forces this on for decodable C++ exceptions.                                   |
| `OCJS_SIMD`         | `0`               | `1`                      | Baseline WASM SIMD (`-msimd128`). Universally supported.                                                             |
| `OCJS_RELAXED_SIMD` | `0`               | `0`                      | Relaxed SIMD ops on top of `OCJS_SIMD`. Safari 26.x cannot parse these — leave off for cross-browser builds.         |
| `OCJS_EXTRA_CFLAGS` | _(empty)_         | _(empty)_                | Extra compile flags appended to C/CXX (e.g. `"-mllvm -inline-threshold=128"`).                                       |
| `OCJS_DEFINES`      | _(empty)_         | `OCCT_NO_DUMP`           | Comma-separated list of `-D` macros.                                                                                 |
| `OCJS_UNDEFINES`    | _(empty)_         | `OCC_CONVERT_SIGNALS`    | Comma-separated list of `-U` undefines.                                                                              |
| `THREADING`         | `single-threaded` | `single-threaded`        | Threading mode (`single-threaded` or `multi-threaded`).                                                              |

The bare-default column is only relevant if you invoke `build-wasm.sh` without `--config` _and_ without `OCJS_CONFIG` — the script's own fallback selects the `single-threaded` configuration when both are unset, so in practice you always get the rightmost column unless you go out of your way to disable it.

## CI and Release Ownership

| Responsibility | Owner |
| --- | --- |
| Source, workflow, shell, Python, ST/MT, bindgen, browser, package, template, docs, and prose checks | `.github/workflows/docker.yml` → `CI gate` |
| Branch and release GHCR images, SBOM/provenance, signing, npm publication, registry verification, annotated tags, and GitHub Releases | `.github/workflows/docker.yml` |
| Vercel preview and production deployment from the exact tested package candidate | `.github/workflows/docker.yml` after `CI gate` |
| GHCR branch/cache expiry without deleting releases or referrers | `.github/workflows/ghcr-retention.yml` |
| Fast-forward-only `main` mirror for the historical upstream PR | `.github/workflows/mirror-upstream-pr-head.yml` |
| Dependency and pinned-action updates | `.github/dependabot.yml` |

`CI gate` is the required aggregate. Vercel's Git integration is disabled in
`docs-site/vercel.json`; it must not create an independent build from a source
push. The long candidate workflow is the sole deployment owner because the
site consumes `api-reference.json` generated from the built WASM/declaration
artifacts. Production deployment rechecks the remote `main` SHA immediately
before promotion, so a completed older run cannot overwrite a newer main.

The workflow builds every Docker stage natively on amd64 and arm64 for
`main` pushes and explicitly dispatched canaries. Pull requests validate all
three stages natively on the standard ARM64 runner without publishing, after
quality and prose checks pass. Each final image passes the same runtime
contract on its native host. Pull requests read trusted stage-local registry
caches but do not export BuildKit state: GitHub's cache service can block an
otherwise complete native build until the job timeout. Pull-request dependency
caches are deleted when the pull request closes. Published images contain
runtime Python dependencies only. Pytest runs in a non-published child of the exact
single-threaded candidate, while actionlint, Ruff, and Vale remain CI tools.
Native toolchains may produce different bytes, so the tested amd64 ST/MT
outputs are the canonical npm inputs while both tested image digests are
required for GHCR promotion. The workflow packs those outputs plus the
deterministic API-reference feed into one immutable tarball. The same tarball
then drives installed-package, browser, starter-template, docs, publication,
registry, and Vercel jobs. Pull-request runs cancel superseded attempts;
publishing runs queue and are never canceled.

### Publication Channels

| Event | npm packages | GHCR | Vercel |
| --- | --- | --- | --- |
| Pull request targeting `main` | none | validation only | same-repository PR preview after `CI gate` |
| Feature-branch push without a PR | no workflow | no workflow | no workflow |
| Manual branch dispatch | `libcascade` + `@libcascade/toolchain` `X.Y.Z-canary.<sha8>` under `canary` | signed `X.Y.Z-canary.<sha8>-<stage>` manifests | none |
| Ordinary `main` push | none | signed `main`/full-SHA manifests | production from the exact candidate |
| Merged `chore(release): ocjs vX.Y.Z-beta.N` | both packages at the exact version under `beta` | signed version manifests | production from the exact candidate |
| Merged `chore(release): ocjs vX.Y.Z` | both packages at the exact version under `latest` | signed version manifests and moving stable aliases | production from the exact candidate |

Canary identities use only the planned stable core and the source SHA. They
contain no date, are immutable across retries, and are not Git tags or GitHub
Releases. `canary`, `beta`, and `latest` are mutable discovery tags; lock or
deploy exact versions.

### npm Trusted Publishing

Configure both `libcascade` and `@libcascade/toolchain` once under
**Settings → Trusted publishing**:

- provider: GitHub Actions
- organization/user: `taucad`
- repository: `opencascade.js`
- workflow filename: `docker.yml`
- environment: leave empty because manual canaries and releases share the
  repository workflow

Do not add `NPM_TOKEN` or `NODE_AUTH_TOKEN`. The publish job uses Node 24,
npm 11.5.1, `id-token: write`, and no source checkout. The maintainer performs
the one-time namespace bootstrap manually; after Trusted Publishing succeeds,
routine local publication is forbidden. Verify npm provenance, enable the
package setting that requires two-factor authentication and disallows tokens,
and revoke obsolete automation tokens.

There are two complementary provenance layers:

- `dist/*.provenance.json` records the OCJS/OCCT/toolchain recipe embedded beside each WASM file.
- npm/Sigstore provenance cryptographically ties the published tarball to `taucad/opencascade.js`, `.github/workflows/docker.yml`, and the full source commit.

The registry gates require both layers to agree, verify both tarballs' integrity
and signatures, install both exact published versions, boot ST and MT, resolve
the toolchain's root, driver, and CLI exports, and verify all three promoted
GHCR signatures. If either exact npm version already exists, its publish job
compares the registry tarball with the candidate. It succeeds only for
identical bytes and provenance; changed bytes under an existing version fail
without moving tags or creating a release.

Release publication is deliberately ordered: all candidate and consumer gates,
then release reproducibility, `libcascade` under the intended `beta` or
`latest` tag, immutable version/SHA GHCR manifests, registry verification,
release-matched `@libcascade/toolchain` metadata and publication, stable moving
GHCR aliases, and finally the annotated Git tag and GitHub Release. Both npm
packages use Trusted Publishing with provenance from `docker.yml`; the release
cannot finalize until their exact registry bytes, signatures, exports, and
source identity verify. Untagged candidate image digests may exist before the
gates because they are content-addressed and cannot be selected by a release
tag.

### Cutting a Release

Contributors add `.nx/version-plans/*.md` files to package-affecting pull
requests. Pull requests and ordinary `main` builds do not change the checked
version; an explicit manual dispatch applies a canary version only in its
disposable candidate workspace.

Publish a canary from a branch only when an external consumer needs it:

```bash
gh workflow run docker.yml --repo taucad/opencascade.js --ref <branch>
```

The run summary reports the exact `libcascade` and `@libcascade/toolchain`
install commands and immutable single-threaded, multi-threaded, and
bindgen-base GHCR pull commands. It does not deploy Vercel.

Use the project skill to inspect or prepare a release:

```bash
/release-ocjs status
/release-ocjs prepare 3.0.0-beta.1
/release-ocjs submit 3.0.0
```

The underlying non-publishing helper is also available directly:

```bash
npm run release:prepare -- 3.0.0-beta.1 --dry-run
npm run release:prepare -- 3.0.0 --dry-run
```

A beta release validates the requested numeric `beta.N` against the stable
version implied by the pending Version Plans. A stable release must exactly
match the planned SemVer. Both generate their changelog entry. Beta releases
retain the pending plans so later betas and the stable release resolve the same
version; only the stable release consumes them. A beta PR contains exactly
`package.json`, `package-lock.json`, and `CHANGELOG.md`. A stable PR also
deletes the consumed Version Plan files. The subject is
`chore(release): ocjs v<version>` with an optional terminal `(#<PR>)` suffix
preceded by one space on a squash-merge commit.

After that PR is merged, CI publishes and verifies the exact `libcascade` and
`@libcascade/toolchain` candidates, then creates/verifies the annotated
`v<version>` tag and GitHub Release. No release PR comments are required: the
CI summary, npm provenance, annotated tag, and GitHub Release are the durable
record. Never create the tag before both npm packages verify.

If a release run stops after publication begins while its release commit is
still the current `main` head, resume that same semantic version:

```bash
gh workflow run docker.yml \
  --repo taucad/opencascade.js \
  --ref main \
  -f operation=resume-release \
  -f version=3.0.0-beta.1 \
  -f release_sha=<full-40-character-release-sha>
```

The resume operation requires `release_sha` to equal the dispatch's
`GITHUB_SHA`. npm provenance records that workflow source identity, not a later
detached checkout, so historical-main resumes would publish a false source
claim and are rejected before any build starts. The operation validates the
release subject, package version, changelog, changed files, and Version Plan
lifecycle, then rebuilds the exact source through the same gates. An absent
immutable object is created, an exact object is reused, and any mismatch stops
the run. It never republishes an existing npm version, mutates an npm dist-tag
separately, or overwrites an immutable GHCR tag. If `main` has advanced, rerun
the original failed job when possible. A failure before npm publication does
not consume the version: fix the workflow through a protected PR and prepare
the same version again. Once npm has published a version, changed artifacts or
source identity require a new authorized version.

### Local documentation from CI artifacts

`docs-site/data/` is ignored and always derived from the package-owned
`libcascade/api-reference.json`. A local source build can generate the feed with
`npx nx run ocjs:api-reference` after producing the required ST artifacts.
Alternatively, download a tested `candidate.tgz` from a workflow run and build
entirely offline from it:

```bash
gh run download <run-id> --name npm-candidate-<run-id> --dir ./tmp-candidate
OCJS_API_REFERENCE_SOURCE=../tmp-candidate/candidate.tgz \
  pnpm --dir docs-site build
```

The sync is byte-idempotent for an unchanged feed and atomically replaces all
derived shards, so removed symbols cannot survive as stale checked data.

## Customizing Your Build

Create a custom YAML config with only the symbols your application needs:

1. Copy `build-configs/full.yml` as a starting point
2. Remove symbols you don't use from `bindings`
3. Add file-backed wrappers through `additionalCppFiles` only when bindgen cannot discover the needed surface automatically.
4. Validate: `./build-wasm.sh validate build-configs/my-config.yml`
5. Build: `./build-wasm.sh link build-configs/my-config.yml`

Fewer symbols = smaller WASM binary. Each symbol adds ~15-25 KB.

## Build Commands

```bash
# Full build — always use nohup (10-30+ min)
nohup env ./build-wasm.sh full <yaml> > build.log 2>&1 &

./build-wasm.sh link <yaml>        # Link only (fastest, reuses .o files)
./build-wasm.sh validate <yaml>    # Validate config without building
./build-wasm.sh --help             # Full usage information
```

## Docker End-to-End Validation

`scripts/docker-e2e-validate.sh` is the canonical local and CI image gate. It performs one bounded consumer link, requires exactly six outputs, validates structural provenance, and runs a JS smoke. `final-single` additionally retains the link-filter trim gate; `bindgen-base` regenerates, compiles, links, and runs the minimal `tests/docker/fixtures/simple.yml` build.

Build and test the default local single-threaded image through Nx:

```bash
npm exec nx -- run ocjs:docker-e2e
```

To validate existing images directly, pass the stage, matching YAML, platform, and source identity explicitly:

```bash
OCJS_E2E_IMAGE=ghcr.io/taucad/opencascade.js:3.0.0-canary.<sha8>-single-threaded \
OCJS_E2E_STAGE=final-single \
OCJS_E2E_BUILD_CONFIG=build-configs/full.yml \
OCJS_DOCKER_PLATFORM=linux/amd64 \
OCJS_EXPECTED_SHA=<full-commit-sha> \
SOURCE_DATE_EPOCH=<commit-epoch> \
./scripts/docker-e2e-validate.sh

OCJS_E2E_IMAGE=ghcr.io/taucad/opencascade.js:3.0.0-canary.<sha8>-multi-threaded \
OCJS_E2E_STAGE=final-multi \
OCJS_E2E_BUILD_CONFIG=build-configs/full_multi.yml \
OCJS_DOCKER_PLATFORM=linux/arm64 \
OCJS_EXPECTED_SHA=<full-commit-sha> \
SOURCE_DATE_EPOCH=<commit-epoch> \
./scripts/docker-e2e-validate.sh

OCJS_E2E_IMAGE=ghcr.io/taucad/opencascade.js:3.0.0-canary.<sha8>-bindgen-base \
OCJS_E2E_STAGE=bindgen-base \
OCJS_DOCKER_PLATFORM=linux/amd64 \
OCJS_EXPECTED_SHA=<full-commit-sha> \
SOURCE_DATE_EPOCH=<commit-epoch> \
./scripts/docker-e2e-validate.sh
```

The single `LINK_BUDGET_S` environment variable controls the full consumer-link ceiling. Timing remains in logs; distributable provenance and build-manifest sidecars contain reproducible build facts only.

The weekly/manual `reproducibility.yml` workflow builds two isolated
Linux/arm64 `final-single` images in parallel on standard ARM64 runners with cold caches, runs the
runtime smoke against both, and compares their exact artifact ledgers. Stable
publication calls the same workflow for the release commit and cannot publish
until it passes. Each cold job uses GitHub's native four-hour job timeout.

## Additional Documentation

- [BREAKING_CHANGES.md](BREAKING_CHANGES.md) — consumer migration guide
- [CHANGELOG.md](CHANGELOG.md) — release notes
- [BUILD_SYSTEM.md](BUILD_SYSTEM.md) — full `OCJS_*` env-var matrix and configuration authoring
- [YAML schema](https://libcascade.xyz/docs/toolchain/reference/yaml-schema) — YAML schema reference
- [Custom emcc flags](https://libcascade.xyz/docs/toolchain/guides/custom-emcc-flags) — tuning size, speed, and build time
- [Trim symbols](https://libcascade.xyz/docs/toolchain/guides/trim-symbols) — trim from `full.yml` to a consumer-sized build
- [Extend with C++](https://libcascade.xyz/docs/toolchain/guides/extend-with-cpp) — generated C++ and raw Embind files
- [Reproducible CI](https://libcascade.xyz/docs/toolchain/guides/reproducible-ci) — pin-by-SHA, provenance, SBOM, and lockfile discipline
- [docs/upstream/](docs/upstream/) — dependency fixes staged for upstream submission, each paired with the local patch that carries it until upstream ships
- [TODO.md](TODO.md) — contributor backlog
