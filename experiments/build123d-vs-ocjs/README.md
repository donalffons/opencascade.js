# build123d (Python + OCP) vs opencascade.js (Node + WASM) — benchmark harness

This folder contains **10 paired workloads** from simple primitives through heavy booleans, loft, sweep, surface filling, filleting, and meshing. Each pair applies the **same OCCT algorithms** with comparable parameters so timing differences isolate **Python/pybind11 + native OCCT** vs **Node + Emscripten WASM**.

## Prerequisites

### opencascade.js (OCJS)

- Built artifacts under `repos/opencascade.js/build-configs/`:
  - `opencascade_single.js`
  - `opencascade_single.wasm`
- Node.js 20+ recommended.

### build123d (Python)

- Python 3.10+
- `pip install build123d` **or** editable install from a local checkout:

  ```bash
  pip install -e ../../../build123d
  ```

  (From `experiments/build123d-vs-ocjs`, three levels up reaches `repos/`; `build123d` is a sibling of `opencascade.js` when both are cloned side by side.)

## Run

```bash
cd experiments/build123d-vs-ocjs

# OCJS (median of timed iterations, after warmup)
node ocjs/run-bench.mjs --warmup 2 --iters 7 --out results/ocjs-latest.json

# Python / build123d
python3 python/run_bench.py --warmup 2 --iters 7 --out results/python-latest.json
```

Merge side-by-side (requires both JSON files):

```bash
node ocjs/merge-results.mjs results/python-latest.json results/ocjs-latest.json --out results/comparison.json
```

## Workloads (summary)

| ID | Name | Complexity | OCCT focus |
| --- | --- | --- | --- |
| 01 | `primitive_box` | low | `BRepPrimAPI_MakeBox` |
| 02 | `primitive_cylinder` | low | `BRepPrimAPI_MakeCylinder` |
| 03 | `boolean_fuse` | low | `BRepAlgoAPI_Fuse` |
| 04 | `boolean_cut_grid` | medium | Many `BRepAlgoAPI_Cut` |
| 05 | `loft_thru_sections` | medium | `BRepOffsetAPI_ThruSections` |
| 06 | `pipe_shell_sweep` | medium | `BRepOffsetAPI_MakePipeShell` |
| 07 | `surface_filling_patch` | medium–high | `BRepOffsetAPI_MakeFilling` |
| 08 | `fillet_all_edges` | medium–high | `BRepFilletAPI_MakeFillet` (all 12 edges) |
| 09 | `fuse_many_boxes` | high | Long `BRepAlgoAPI_Fuse` chain |
| 10 | `mesh_incremental` | high | `BRepMesh_IncrementalMesh` on fuse-many result |

## Interpreting results

- **OCJS load time** includes WASM compilation + `WebAssembly.instantiate` (reported once).
- **Python** import time for `build123d` is large on cold start; the harness measures **per-sample work only** after imports (see `python/run_bench.py`).
- Ratios **Python_time / OCJS_time** &lt; 1 mean Python+native was faster for that sample on your machine.

See `results/` in this experiment directory for methodology and recorded runs.
