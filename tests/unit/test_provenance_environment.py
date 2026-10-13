import importlib.util
from datetime import UTC, datetime
from pathlib import Path

import pytest

from ocjs_bindgen.provenance.clock import build_datetime

ROOT = Path(__file__).parents[2]
SPEC = importlib.util.spec_from_file_location("legacy_provenance", ROOT / "src" / "provenance.py")
PROVENANCE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader
SPEC.loader.exec_module(PROVENANCE)


def test_source_date_epoch_is_deterministic(monkeypatch):
    monkeypatch.setenv("SOURCE_DATE_EPOCH", "1778112000")
    assert build_datetime() == datetime(2026, 5, 7, tzinfo=UTC)


def test_source_date_epoch_rejects_malformed_values(monkeypatch):
    monkeypatch.setenv("SOURCE_DATE_EPOCH", "-1")
    with pytest.raises(ValueError, match="non-negative integer"):
        build_datetime()


def test_ocjs_source_commit_prefers_valid_environment(monkeypatch):
    sha = "d5736f09aabbccddeeff00112233445566778899"
    monkeypatch.setenv("OCJS_SOURCE_COMMIT", sha)
    assert PROVENANCE._ocjs_source_commit() == sha


def test_ocjs_source_commit_rejects_malformed_environment(monkeypatch):
    monkeypatch.setenv("OCJS_SOURCE_COMMIT", "d5736f09")
    with pytest.raises(ValueError, match="lowercase 40-character"):
        PROVENANCE._ocjs_source_commit()
