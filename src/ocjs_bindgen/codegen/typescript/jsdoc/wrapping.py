"""Long-line splitting and soft-wrapping for JSDoc bodies.

Extracted from `TypescriptBindings._soft_wrap_long_line` and
`TypescriptBindings._split_long_lines` (PR 2.4).
"""

from __future__ import annotations

import re

SENTENCE_SPLIT_RE = re.compile(r"(?<=\.)\s+(?=[A-Z])")
LONG_PROSE_THRESHOLD = 600
MIN_FRAGMENT_LEN = 120
SOFT_WRAP_TARGET = 1000


def soft_wrap_long_line(line):
  """Wrap a single overlong line on the nearest space boundary near
  `SOFT_WRAP_TARGET`. Used as the soft-wrap backstop when a paragraph has
  no `". (Capital)"` boundaries (e.g. dense pseudocode prose) but still
  overflows Monaco's hover width budget.
  """
  if len(line) <= SOFT_WRAP_TARGET:
    return [line]
  pieces: list[str] = []
  rest = line
  while len(rest) > SOFT_WRAP_TARGET:
    cut = rest.rfind(" ", 0, SOFT_WRAP_TARGET)
    if cut <= 0:
      cut = rest.find(" ", SOFT_WRAP_TARGET)
    if cut <= 0:
      pieces.append(rest)
      return pieces
    pieces.append(rest[:cut])
    rest = rest[cut + 1:]
  if rest:
    pieces.append(rest)
  return pieces


def split_long_lines(text):
  """Per-line variant of `extract-docs.py::_split_long_sentences`, applied
  after `_normalize_link_tokens` has expanded short `{@link X}` tokens into
  longer `{@link Y | \\`X\\`}` aliases. Splitting at extract time runs against
  the pre-expansion text, which can mask paragraphs that only become Monaco
  hover offenders once the alias text is added (alias expansion inflates
  length, re-check after rewriting). Splitting per-line keeps existing
  intentional paragraph breaks intact while only intervening when a single
  line crosses the threshold.
  Lines that still exceed `SOFT_WRAP_TARGET` after sentence splitting (rare,
  but happens for dense pseudocode prose with no `. ` boundaries) are
  soft-wrapped on space boundaries as a backstop.
  """
  if not text:
    return text
  out: list[str] = []
  for line in text.split("\n"):
    if len(line) <= LONG_PROSE_THRESHOLD:
      out.append(line)
      continue
    parts = SENTENCE_SPLIT_RE.split(line)
    if len(parts) >= 2:
      merged: list[str] = []
      for part in parts:
        if merged and len(part) < MIN_FRAGMENT_LEN:
          merged[-1] = merged[-1] + " " + part
        else:
          merged.append(part)
      candidate_lines = merged
    else:
      candidate_lines = [line]
    for cand in candidate_lines:
      out.extend(soft_wrap_long_line(cand))
  return "\n".join(out)
