#!/usr/bin/env python3
"""Write or materialize the exact cached link artifact inventory."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from ocjs_bindgen.build_state import (  # noqa: E402
  _write_json_atomic,
  build_content_ledger,
  materialize_ledger,
)


def main() -> None:
  parser = argparse.ArgumentParser()
  parser.add_argument("command", choices=("write", "materialize"))
  parser.add_argument("--source", required=True, type=Path)
  parser.add_argument("--manifest", required=True, type=Path)
  parser.add_argument("--destination", type=Path)
  parser.add_argument("--marker", type=Path)
  args = parser.parse_args()

  if args.command == "write":
    ledger = build_content_ledger(args.source)
    if not ledger["files"]:
      raise RuntimeError("link produced no artifacts")
    _write_json_atomic(args.manifest, ledger)
    return

  if args.destination is None:
    parser.error("materialize requires --destination")
  import json

  ledger = json.loads(args.manifest.read_text())
  materialize_ledger(
    args.source,
    args.destination,
    ledger,
    marker_path=args.marker,
  )


if __name__ == "__main__":
  main()
