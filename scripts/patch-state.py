#!/usr/bin/env python3
"""Validate and record the exact clone-owned OCCT/emsdk patch state."""

from __future__ import annotations

import argparse
import hashlib
import json
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from ocjs_bindgen.build_state import _write_json_atomic  # noqa: E402


def _status(root: Path) -> list[str]:
  result = subprocess.run(
    ["git", "-C", str(root), "status", "--porcelain=v1", "-z"],
    check=True,
    capture_output=True,
    text=True,
  )
  return sorted(
    entry[3:]
    for entry in result.stdout.split("\0")
    if entry
  )


def _record(path: Path, logical_path: str) -> dict[str, str | int]:
  if not path.is_file():
    raise RuntimeError(f"owned patched dependency path is not a file: {logical_path}")
  data = path.read_bytes()
  return {
    "path": logical_path,
    "size": len(data),
    "sha256": hashlib.sha256(data).hexdigest(),
  }


def _state(
  root: Path,
  patch_root: Path,
  embind_path: Path,
  dependency_paths: list[str] | None = None,
) -> dict[str, object]:
  dependency_paths = dependency_paths if dependency_paths is not None else _status(root)
  files = [
    _record(root / relative, relative)
    for relative in dependency_paths
  ]
  patch_files = [
    _record(path, path.name)
    for path in sorted(patch_root.glob("*"), key=lambda candidate: candidate.name)
    if path.suffix in {".py", ".patch"}
  ]
  embind = embind_path.read_bytes()
  return {
    "schema": "ocjs-patch-state-v1",
    "dependencyCommit": subprocess.check_output(
      ["git", "-C", str(root), "rev-parse", "HEAD"],
      text=True,
    ).strip(),
    "dependencyFiles": files,
    "patchInputs": patch_files,
    "libembind": {
      "size": len(embind),
      "sha256": hashlib.sha256(embind).hexdigest(),
    },
  }


def prepare(
  root: Path,
  manifest_path: Path,
  patch_root: Path,
  embind_path: Path,
) -> None:
  dirty = _status(root)
  if not dirty:
    return
  if not manifest_path.is_file():
    raise RuntimeError(
      "OCCT dependency is dirty without an ownership manifest: "
      + ", ".join(dirty)
    )
  manifest = json.loads(manifest_path.read_text())
  owned = {entry["path"] for entry in manifest.get("dependencyFiles", [])}
  unexpected = sorted(set(dirty) - owned)
  if unexpected:
    raise RuntimeError(
      "unowned OCCT dependency changes must be resolved before patching: "
      + ", ".join(unexpected)
    )
  try:
    if _state(root, patch_root, embind_path, dirty) == manifest:
      return
  except RuntimeError:
    pass
  for relative in sorted(owned):
    tracked = subprocess.run(
      ["git", "-C", str(root), "ls-files", "--error-unmatch", "--", relative],
      capture_output=True,
    ).returncode == 0
    if tracked:
      subprocess.run(
        ["git", "-C", str(root), "checkout", "--", relative],
        check=True,
      )
    else:
      (root / relative).unlink(missing_ok=True)


def write(
  root: Path,
  manifest_path: Path,
  patch_root: Path,
  embind_path: Path,
) -> None:
  _write_json_atomic(manifest_path, _state(root, patch_root, embind_path))


def main() -> None:
  parser = argparse.ArgumentParser()
  parser.add_argument("command", choices=("prepare", "write"))
  parser.add_argument("--root", required=True, type=Path)
  parser.add_argument("--manifest", required=True, type=Path)
  parser.add_argument("--patch-root", type=Path)
  parser.add_argument("--embind", type=Path)
  args = parser.parse_args()
  if args.patch_root is None or args.embind is None:
    parser.error(f"{args.command} requires --patch-root and --embind")
  if args.command == "prepare":
    prepare(args.root, args.manifest, args.patch_root, args.embind)
    return
  write(args.root, args.manifest, args.patch_root, args.embind)


if __name__ == "__main__":
  main()
