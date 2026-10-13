#!/usr/bin/env python3
"""Generate a complete bindings tree and publish it atomically."""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from ocjs_bindgen.build_state import (
  _write_json_atomic,
  build_content_ledger,
  replace_tree,
)


def main() -> None:
  parser = argparse.ArgumentParser()
  parser.add_argument("--config", required=True)
  parser.add_argument("--build-dir", required=True, type=Path)
  args = parser.parse_args()
  build_dir = args.build_dir.resolve()
  build_dir.mkdir(parents=True, exist_ok=True)
  stage = Path(tempfile.mkdtemp(prefix=".generate-stage-", dir=build_dir))
  try:
    bindings = stage / "bindings"
    env = os.environ.copy()
    env["OCJS_MANIFEST_DIR"] = str(stage)
    subprocess.run(
      [
        sys.executable,
        "-m",
        "ocjs_bindgen",
        "--config",
        args.config,
        "--output",
        str(bindings),
      ],
      check=True,
      env=env,
    )
    ledger = build_content_ledger(bindings)
    if not ledger["files"]:
      raise RuntimeError("binding generator produced an empty output tree")
    replace_tree(
      build_dir / "bindings",
      lambda target: shutil.copytree(bindings, target, dirs_exist_ok=True),
    )
    _write_json_atomic(build_dir / "bindings-manifest.json", ledger)
    for name in ("ncollection-manifest.json", "any-type-report.json"):
      generated_manifest = stage / name
      destination_manifest = build_dir / name
      if generated_manifest.is_file():
        os.replace(generated_manifest, destination_manifest)
      elif destination_manifest.exists():
        destination_manifest.unlink()
  finally:
    shutil.rmtree(stage, ignore_errors=True)


if __name__ == "__main__":
  main()
