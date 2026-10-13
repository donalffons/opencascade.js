#!/usr/bin/env python3
"""Guard OCCT CMake scratch identity and publish immutable libraries."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from ocjs_bindgen.cmake_state import CMakeState

_SEMANTIC_ENV = (
  "OCJS_OPT",
  "OCJS_EXTRA_CFLAGS",
  "OCJS_LTO",
  "OCJS_EXCEPTIONS",
  "OCJS_EH_MODE",
  "OCJS_SIMD",
  "OCJS_RELAXED_SIMD",
  "THREADING",
  "OCJS_DEFINES",
  "OCJS_UNDEFINES",
)


IDENTITY_INPUTS = "identity-inputs.json"


def identity_inputs(root: Path) -> dict[str, object]:
  patch_manifest = root / "build" / "patches-applied.json"
  patch_state = json.loads(patch_manifest.read_text())
  occt_state = {
    "commit": patch_state["dependencyCommit"],
    "files": patch_state["dependencyFiles"],
  }

  def dependency_path(env_name: str, default_relative: str) -> Path:
    # Relative overrides resolve against the checkout, as build-wasm.sh
    # (which cds there first) resolves them.
    configured = os.environ.get(env_name)
    return root / configured if configured else root / default_relative

  def git_commit(path: Path) -> str:
    return subprocess.check_output(
      ["git", "-C", str(path), "rev-parse", "HEAD"],
      text=True,
    ).strip()

  freetype_root = dependency_path("FREETYPE_ROOT", "deps/freetype")
  rapidjson_root = dependency_path("RAPIDJSON_ROOT", "deps/rapidjson")
  emsdk_root = dependency_path("EMSDK", "deps/emsdk")

  payload = {
    "schema": "ocjs-cmake-identity-v1",
    "occtState": hashlib.sha256(
      json.dumps(occt_state, sort_keys=True, separators=(",", ":")).encode()
    ).hexdigest(),
    "headerDependencies": {
      "freetype": git_commit(freetype_root),
      "rapidjson": git_commit(rapidjson_root),
    },
    "flags": {name: os.environ.get(name, "") for name in _SEMANTIC_ENV},
    "cmake": subprocess.check_output(["cmake", "--version"], text=True).splitlines()[0],
    "emcc": subprocess.check_output(
      [str(emsdk_root / "upstream" / "emscripten" / "emcc"), "--version"],
      text=True,
    ).splitlines()[0],
  }
  return payload


def identity(root: Path) -> str:
  return hashlib.sha256(
    json.dumps(identity_inputs(root), sort_keys=True, separators=(",", ":")).encode()
  ).hexdigest()


def _differences(published: object, current: object, prefix: str = "") -> list[str]:
  if isinstance(published, dict) and isinstance(current, dict):
    lines: list[str] = []
    for key in sorted(set(published) | set(current)):
      lines.extend(
        _differences(published.get(key), current.get(key), f"{prefix}{key}.")
      )
    return lines
  if published == current:
    return []
  return [f"    {prefix.rstrip('.')}: published {published!r}, current {current!r}"]


def main() -> None:
  parser = argparse.ArgumentParser()
  parser.add_argument(
    "command",
    choices=("identity", "prepare", "complete", "publish", "verify-published"),
  )
  parser.add_argument("--root", required=True, type=Path)
  parser.add_argument("--scratch", type=Path)
  parser.add_argument("--source", type=Path)
  parser.add_argument("--destination", type=Path)
  parser.add_argument("--identity")
  args = parser.parse_args()
  if args.command == "identity":
    print(identity(args.root.resolve()))
    return
  if not args.identity:
    parser.error(f"{args.command} requires --identity")
  if args.command in {"prepare", "complete"}:
    if args.scratch is None:
      parser.error(f"{args.command} requires --scratch")
    state = CMakeState(args.scratch)
    if args.command == "prepare":
      reused = state.prepare(args.identity)
      print("reusing compatible CMake scratch" if reused else "initialized CMake scratch")
    else:
      state.complete(args.identity)
    return
  if args.command == "verify-published":
    if args.destination is None:
      parser.error("verify-published requires --destination")
    if CMakeState.published_matches(args.destination, identity=args.identity):
      return
    manifest_path = args.destination / "manifest.json"
    if manifest_path.is_file():
      published = json.loads(manifest_path.read_text()).get("identity", "<none>")
      print(
        f"  Published OCCT libraries not reusable (identity {published[:12]}, "
        f"current {args.identity[:12]}); compiling OCCT.",
        file=sys.stderr,
      )
      inputs_path = args.destination / IDENTITY_INPUTS
      if inputs_path.is_file():
        differences = _differences(
          json.loads(inputs_path.read_text()),
          identity_inputs(args.root.resolve()),
        )
        if differences:
          print("  Identity inputs that differ:", file=sys.stderr)
          print("\n".join(differences), file=sys.stderr)
    sys.exit(1)
  if args.source is None or args.destination is None:
    parser.error("publish requires --source and --destination")
  CMakeState.publish_libraries(
    args.source,
    args.destination,
    identity=args.identity,
  )
  # Kept beside the manifest, outside its ledger, so a later identity mismatch
  # can name the input that changed instead of two opaque hashes.
  (args.destination / IDENTITY_INPUTS).write_text(
    json.dumps(identity_inputs(args.root.resolve()), indent=2, sort_keys=True) + "\n"
  )


if __name__ == "__main__":
  main()
