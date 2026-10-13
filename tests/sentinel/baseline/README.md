# Sentinel Baseline

Frozen generated-fragment artifacts that the parity harness diffs against.

## Layout

| Path                         | Contents                                                                                                                                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `per_header/`                | Per-fragment `.cpp` and `.d.ts.json` for the 10 sentinel headers from [`SENTINEL_HEADERS.md`](../SENTINEL_HEADERS.md). Diffed by `test_artifact_parity.py` (Layer 1, <30 s).                                                    |
| `full_tree.sha256`           | SHA-256 of every `.cpp` and `.d.ts.json` under `build/bindings/` after `nx run ocjs:generate`. Diffed by `test_tree_parity.py` (Layer 2, ~10 min).                                                     |

## Refresh policy

The baseline is **frozen for the duration of the refactor**. Any drift detected
by the parity harness is a refactor regression and must be diagnosed at source
before the offending PR can land.

After an audited OCCT upgrade or an intentional binding-contract change,
regenerate the affected baseline layers in a dedicated commit:

```bash
pnpm nx run ocjs:generate
python tests/sentinel/refresh_baseline.py
```

The refresh commit must cite the OCCT or binding-contract change and explain
the artifact delta in its body. Never refresh a baseline merely to silence an
unexplained parity failure.

Published candidate binaries are not compared with a historical digest:
source identity, host toolchains, and intentional generator changes
legitimately change those bytes. Exact reproducibility belongs to the source
parity layers above. Each native amd64/arm64 push candidate independently
validates all six current ST/MT artifacts and executes the same runtime smoke
before its image digest can be promoted.
