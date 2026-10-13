"""Unit tests for `ocjs_bindgen.codegen.typescript.jsdoc.wrapping`.

PR 3.2 — covers the soft-wrap and sentence-split fallback that protect
Monaco hover width from dense pseudocode prose.
"""

from __future__ import annotations

from ocjs_bindgen.codegen.typescript.jsdoc.wrapping import (
  LONG_PROSE_THRESHOLD,
  SOFT_WRAP_TARGET,
  soft_wrap_long_line,
  split_long_lines,
)


def test_short_line_returned_verbatim() -> None:
  assert soft_wrap_long_line("short") == ["short"]


def test_long_line_wraps_on_space_boundary() -> None:
  payload = ("word " * 400).rstrip()
  assert len(payload) > SOFT_WRAP_TARGET
  pieces = soft_wrap_long_line(payload)
  assert len(pieces) >= 2
  for piece in pieces:
    assert len(piece) <= SOFT_WRAP_TARGET
  assert " ".join(pieces) == payload


def test_split_long_lines_passes_short_unchanged() -> None:
  text = "Short paragraph one.\nShort paragraph two.\n"
  assert split_long_lines(text) == text


def test_split_long_lines_breaks_on_sentence_boundary() -> None:
  # Each fragment must exceed `MIN_FRAGMENT_LEN` (120 chars) to survive the
  # merge step in `split_long_lines`. Use long sentences (~150 chars each)
  # so the splitter actually emits multiple lines.
  long_sentence = "X " * 75 + "boundary."
  assert len(long_sentence) > 120
  src = long_sentence + " " + (long_sentence + " ") * 4
  assert len(src) > LONG_PROSE_THRESHOLD
  # Capitalize the start of each subsequent sentence so the
  # "(?<=\\.)\\s+(?=[A-Z])" sentence regex actually fires.
  capitalized = src.replace("boundary. x", "boundary. X")
  out = split_long_lines(capitalized)
  assert "\n" in out
  assert "boundary." in out


def test_empty_text_round_trips() -> None:
  assert split_long_lines("") == ""
  assert split_long_lines(None) is None  # type: ignore[arg-type]
