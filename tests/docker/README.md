# Docker build-flow tests

These tests exercise the **published GHCR images** end-to-end: they run
`ghcr.io/taucad/opencascade.js:{single,multi}-threaded link <yaml>` against the
fixtures in [`fixtures/`](./fixtures), then load the produced ES module and
assert observable behaviour (OCCT instantiates, custom symbols are bound,
symbol filtering excludes unlisted classes, the multi image reports parallel
mode, progress-indicator callbacks fire, and invalid YAML is rejected).

They are the modern replacement for the legacy Docker-driven custom-build suite
(`test/customBuilds.test.ts`, `test/multi-threaded.test.ts`,
`test/progressIndicator.test.ts`).

## Running

The suite is **opt-in** — it requires Docker and takes several minutes per
`link` build, so it is excluded from the default `pnpm test` smoke pass.

```bash
# Pull the published images (first run only):
docker pull ghcr.io/taucad/opencascade.js:single-threaded
docker pull ghcr.io/taucad/opencascade.js:multi-threaded

# Run the suite:
OCJS_DOCKER_TESTS=1 pnpm test:docker
```

Without `OCJS_DOCKER_TESTS=1` (or without Docker) every case is skipped.

Candidate CI jobs also set `OCJS_DOCKER_OUTPUT_DIR` so the multi-threaded
runtime assertions reuse the full-multi artifacts built by the preceding E2E
step. Local runs leave it unset and exercise the custom multi-threaded fixture.

## How it works

- `docker-helpers.ts` stages the fixture source directory into a fresh per-test workdir under
  `tests/docker/.work/<name>/` (gitignored, inside the repo so Docker Desktop's
  default `/Users` file sharing exposes it as `/src`) and runs the image with
  the documented single-mount Quickstart:

  ```bash
  docker run --rm -v "$workDir:/src" -u "$(id -u):$(id -g)" \
    ghcr.io/taucad/opencascade.js:single-threaded link simple.yml
  ```

- It deliberately does **not** mount volumes over `/opencascade.js/build`: the
  image bakes the warm build cache (PCH + patched OCCT static libs + compiled
  binding objects), so a custom `link` re-runs only `generate` + link for the
  YAML's symbol subset (minutes). Mounting an empty volume there would shadow
  the baked cache and force a multi-hour cold rebuild.

## Fixtures

| Fixture                  | Image  | Verifies |
| ------------------------ | ------ | -------- |
| `simple.yml`             | single | `additionalCppFiles` class is bound; OCCT instantiates; unlisted `TopoDS_Face` is filtered out |
| `errorUnknownProp1.yml`  | single | Unknown key nested under `mainBuild` is rejected (non-zero exit) |
| `errorUnknownProp2.yml`  | single | Unknown top-level key is rejected (non-zero exit) |
| `multi-threaded.yml`     | multi  | pthread module reports `OSD_ThreadPool.NbThreads() > 1` and meshes a 50-sphere compound in parallel |
| `progress-indicator.yml` | single | JS-derived `Message_ProgressIndicator_JS` observes `Show` callbacks during a fuse; `UserBreak` cancels |
