#!/usr/bin/env python3
"""
Benchmark harness for build123d (Python + native OCCT via OCP).

Usage:
  python3 python/run_bench.py --warmup 2 --iters 7 --out results/python-latest.json
"""

from __future__ import annotations

import argparse
import json
import statistics
import sys
import time
from pathlib import Path

_PY_DIR = Path(__file__).resolve().parent
if str(_PY_DIR) not in sys.path:
    sys.path.insert(0, str(_PY_DIR))


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--warmup", type=int, default=2)
    p.add_argument("--iters", type=int, default=7)
    p.add_argument("--out", type=str, default="")
    args = p.parse_args()

    t_import0 = time.perf_counter()
    from samples import SAMPLES  # noqa: E402 — timed cold import (build123d + OCP)
    import_seconds = time.perf_counter() - t_import0

    order = sorted(SAMPLES.keys())
    results = {
        "engine": "build123d-python-ocp-native",
        "importSeconds": import_seconds,
        "warmup": args.warmup,
        "iterations": args.iters,
        "samples": {},
    }

    for name in order:
        fn = SAMPLES[name]
        for _ in range(args.warmup):
            fn()
        times: list[float] = []
        for _ in range(args.iters):
            t0 = time.perf_counter()
            fn()
            times.append((time.perf_counter() - t0) * 1000.0)
        results["samples"][name] = {
            "medianMs": statistics.median(times),
            "meanMs": statistics.mean(times),
            "minMs": min(times),
            "maxMs": max(times),
            "timesMs": times,
        }

    payload = json.dumps(results, indent=2)
    if args.out:
        out_path = Path(args.out)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(payload)
    print(payload)


if __name__ == "__main__":
    main()
