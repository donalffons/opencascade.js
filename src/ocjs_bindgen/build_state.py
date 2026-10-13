"""Content-addressed, relocatable build-state primitives."""

from __future__ import annotations

import errno
import hashlib
import json
import os
import shutil
import tempfile
from collections.abc import Callable
from pathlib import Path
from typing import Any


def _canonical_json(value: Any) -> bytes:
  return json.dumps(value, sort_keys=True, separators=(",", ":")).encode()


def _write_json_atomic(path: Path, value: Any) -> None:
  path.parent.mkdir(parents=True, exist_ok=True)
  fd, temporary = tempfile.mkstemp(prefix=f".{path.name}.tmp-", dir=path.parent)
  try:
    os.fchmod(fd, 0o644)
    with os.fdopen(fd, "wb") as stream:
      stream.write(_canonical_json(value) + b"\n")
    os.replace(temporary, path)
  except BaseException:
    Path(temporary).unlink(missing_ok=True)
    raise


def build_content_ledger(
  root: Path,
  *,
  logical_name: Callable[[Path], str] | None = None,
  include: Callable[[Path], bool] | None = None,
) -> dict[str, Any]:
  root = root.resolve()
  files = sorted(
    (
      path
      for path in root.rglob("*")
      if path.is_file() and (include is None or include(path))
    ),
    key=lambda path: path.relative_to(root).as_posix(),
  )
  logical_paths: dict[str, list[str]] = {}
  for path in files:
    logical = logical_name(path) if logical_name else path.relative_to(root).as_posix()
    logical_paths.setdefault(logical, []).append(path.relative_to(root).as_posix())
  collisions = {
    logical: paths
    for logical, paths in logical_paths.items()
    if len(paths) > 1
  }
  if collisions:
    details = "; ".join(
      f"{logical}=[{', '.join(paths)}]"
      for logical, paths in sorted(collisions.items())
    )
    raise ValueError(f"duplicate logical build paths: {details}")

  entries = []
  for path in files:
    data = path.read_bytes()
    entries.append({
      "path": path.relative_to(root).as_posix(),
      "size": len(data),
      "sha256": hashlib.sha256(data).hexdigest(),
    })
  return {
    "schema": "ocjs-content-ledger-v1",
    "sha256": hashlib.sha256(_canonical_json(entries)).hexdigest(),
    "files": entries,
  }


def replace_tree(destination: Path, populate: Callable[[Path], None]) -> None:
  destination = destination.resolve()
  destination.parent.mkdir(parents=True, exist_ok=True)
  stage = Path(tempfile.mkdtemp(
    prefix=f".{destination.name}.stage-",
    dir=destination.parent,
  ))
  backup = destination.with_name(f".{destination.name}.backup-{os.getpid()}")
  try:
    populate(stage)
    backup_exists = False
    if destination.exists():
      backup.unlink(missing_ok=True) if backup.is_file() else shutil.rmtree(backup, ignore_errors=True)
      try:
        os.replace(destination, backup)
      except OSError as error:
        if error.errno != errno.EXDEV:
          raise
        shutil.move(destination, backup)
      backup_exists = True
    try:
      os.replace(stage, destination)
    except BaseException:
      if backup_exists:
        os.replace(backup, destination)
      raise
    if backup_exists:
      shutil.rmtree(backup)
  finally:
    shutil.rmtree(stage, ignore_errors=True)


def materialize_ledger(
  source: Path,
  destination: Path,
  ledger: dict[str, Any],
  *,
  marker_path: Path | None = None,
) -> None:
  source = source.resolve()
  destination = destination.resolve()
  actual = build_content_ledger(source)
  if actual != ledger:
    raise ValueError("source artifacts do not match the requested content ledger")
  destination.mkdir(parents=True, exist_ok=True)

  marker = marker_path or destination / ".ocjs-artifacts.json"
  marker.parent.mkdir(parents=True, exist_ok=True)
  previous: dict[str, Any] = {}
  if marker.is_file():
    previous = json.loads(marker.read_text())
  current_paths = {entry["path"] for entry in ledger["files"]}
  for entry in previous.get("files", []):
    relative = entry.get("path")
    if relative and relative not in current_paths:
      (destination / relative).unlink(missing_ok=True)

  for entry in ledger["files"]:
    relative = entry["path"]
    target = destination / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    fd, temporary = tempfile.mkstemp(prefix=f".{target.name}.tmp-", dir=target.parent)
    os.close(fd)
    try:
      shutil.copyfile(source / relative, temporary)
      os.replace(temporary, target)
    finally:
      Path(temporary).unlink(missing_ok=True)
  _write_json_atomic(marker, ledger)
