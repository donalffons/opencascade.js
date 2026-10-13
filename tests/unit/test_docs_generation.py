from __future__ import annotations

import importlib.util
from pathlib import Path

import pytest

_SCRIPT = Path(__file__).parents[2] / "src" / "extract-docs.py"
_SPEC = importlib.util.spec_from_file_location("extract_docs", _SCRIPT)
assert _SPEC is not None and _SPEC.loader is not None
extract_docs = importlib.util.module_from_spec(_SPEC)
_SPEC.loader.exec_module(extract_docs)


def test_should_fail_when_doxygen_fails_even_if_stale_xml_exists(
  tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
  xml = tmp_path / "build" / "doxygen-xml" / "xml"
  xml.mkdir(parents=True)
  (xml / "index.xml").write_text("<doxygenindex/>")

  class Failed:
    returncode = 2
    stderr = "injected Doxygen failure"

  monkeypatch.setattr(extract_docs.shutil, "which", lambda _name: "doxygen")
  monkeypatch.setattr(extract_docs.subprocess, "run", lambda *_args, **_kwargs: Failed())

  with pytest.raises(RuntimeError, match="injected Doxygen failure"):
    extract_docs.run_doxygen(str(tmp_path), str(tmp_path / "occt"))
