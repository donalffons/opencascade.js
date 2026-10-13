#!/usr/bin/env python3
"""Shared NCollection provenance checks for docker smoke + e2e gates."""

from __future__ import annotations

import json
import sys


def load_manifest(path: str) -> dict:
    with open(path, encoding="utf-8") as handle:
        return json.load(handle)


def structural_invariants(mani: dict) -> tuple[int, int, int]:
    linked = mani.get("linked")
    total = mani.get("total")
    dropped = mani.get("dropped")
    if linked is None or total is None or dropped is None:
        raise SystemExit(
            f"provenance.json missing nCollectionManifest "
            f"(linked={linked}, total={total}, dropped={dropped})"
        )
    if total == 0:
        print("WARNING: nCollectionManifest.total is 0; skipping checks.")
        raise SystemExit(0)
    if linked <= 0:
        raise SystemExit(f"nCollectionManifest.linked must be > 0 (got {linked})")
    if linked + dropped != total:
        raise SystemExit(
            f"invariant violated: linked({linked}) + dropped({dropped}) != total({total})"
        )
    return linked, total, dropped


def check_trim_ratio(path: str, max_ratio: float = 0.20) -> None:
    mani = load_manifest(path).get("nCollectionManifest") or {}
    linked, total, dropped = structural_invariants(mani)
    ratio = linked / total
    print(
        f"NCollection ratio: {linked}/{total} = {ratio:.3f} "
        f"(dropped {dropped}, budget ≤ {max_ratio:.2f})"
    )
    if ratio > max_ratio:
        raise SystemExit(
            f"trim filter ratio {ratio:.3f} exceeds budget {max_ratio:.3f}"
        )
    print(f"PASS: filter dropped {(1 - ratio) * 100:.1f}% of NCollection symbols")


def check_structural(path: str) -> None:
    mani = load_manifest(path).get("nCollectionManifest") or {}
    linked, total, dropped = structural_invariants(mani)
    ratio = linked / total
    print(
        f"Linked: {linked} / Total: {total} / Dropped: {dropped} "
        f"(ratio {ratio:.3f}, informational)"
    )
    print("PASS: nCollectionManifest structural invariants satisfied")


def main() -> None:
    if len(sys.argv) < 3:
        raise SystemExit("usage: docker-ncollection-check.py <structural|trim> <provenance.json>")
    mode, path = sys.argv[1], sys.argv[2]
    if mode == "structural":
        check_structural(path)
    elif mode == "trim":
        check_trim_ratio(path)
    else:
        raise SystemExit(f"unknown mode: {mode}")


if __name__ == "__main__":
    main()
