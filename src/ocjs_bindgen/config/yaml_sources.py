"""Resolve file-backed build inputs relative to their owning YAML file."""

from __future__ import annotations

import hashlib
import os
from pathlib import Path


def resolve_source_files(
    yaml_path: str,
    configured_paths: list[str] | None,
    field: str,
) -> list[dict[str, str]]:
    yaml_dir = Path(yaml_path).resolve().parent
    resolved_files: list[dict[str, str]] = []
    for configured_path in configured_paths or []:
        candidate = Path(configured_path)
        resolved = (
            candidate.resolve()
            if candidate.is_absolute()
            else (yaml_dir / candidate).resolve()
        )
        if not resolved.exists():
            raise FileNotFoundError(
                f"{field}: file not found: {resolved} (from '{configured_path}')"
            )
        if not resolved.is_file():
            raise IsADirectoryError(
                f"{field}: path is not a file: {resolved} (from '{configured_path}')"
            )
        try:
            content = resolved.read_text(encoding="utf-8")
        except (OSError, UnicodeError) as error:
            raise OSError(
                f"{field}: cannot read: {resolved} (from '{configured_path}'): {error}"
            ) from error
        resolved_files.append(
            {
                "path": os.path.relpath(resolved, yaml_dir).replace(os.sep, "/"),
                "absolutePath": str(resolved),
                "sha256": hashlib.sha256(content.encode("utf-8")).hexdigest(),
                "content": content,
            }
        )
    return resolved_files


def source_file_manifest(
    field: str,
    resolved_files: list[dict[str, str]],
) -> list[dict[str, str]]:
    return [
        {"field": field, "path": entry["path"], "sha256": entry["sha256"]}
        for entry in resolved_files
    ]
