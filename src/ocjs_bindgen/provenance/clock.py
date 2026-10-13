"""Deterministic build timestamps shared by provenance producers."""

from __future__ import annotations

import os
import subprocess
from datetime import UTC, datetime
from pathlib import Path


def build_datetime() -> datetime:
    raw = os.environ.get("SOURCE_DATE_EPOCH")
    if not raw:
        root = Path(os.environ.get("OCJS_ROOT", Path.cwd()))
        result = subprocess.run(
            ["git", "-C", str(root), "show", "-s", "--format=%ct", "HEAD"],
            capture_output=True,
            text=True,
        )
        if result.returncode != 0 or not result.stdout.strip().isdigit():
            raise ValueError(
                "SOURCE_DATE_EPOCH is required for publication outside a Git checkout"
            )
        raw = result.stdout.strip()
    if not raw.isdigit():
        raise ValueError("SOURCE_DATE_EPOCH must be a non-negative integer")
    return datetime.fromtimestamp(int(raw), UTC)
