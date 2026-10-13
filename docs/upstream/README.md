# Upstream-bound patches

Fixes for defects in vendored dependencies that belong upstream, staged here
until they are submitted and land.

Each entry is a pair:

- `<slug>.patch` — a `git am`-able patch against the dependency's default
  branch, with the commit message the upstream project should receive.
- `<slug>.md` — the issue write-up: minimal repro, evidence, and the current
  submission status.

Everything here is also carried locally, because a submitted fix does not help
a build until it ships. The local carrier for each patch is named in its `.md`.
Delete the pair once the upstream release that contains the fix is pinned and
the local carrier is removed.

| Patch | Upstream | Status |
| --- | --- | --- |
| [`occt-geom2dgcc-circ2dtancengeo-uninitialised-index`](occt-geom2dgcc-circ2dtancengeo-uninitialised-index.md) | [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | Prepared, not submitted |
