#!/usr/bin/env python3
"""Restore OCCT definitions required by strict Emscripten links."""

from __future__ import annotations

import os
import sys
from pathlib import Path

PATCHES = {
  "src/FoundationClasses/TKernel/TCollection/TCollection_AsciiString.hxx": (
    """  static bool IsEqual(const TCollection_AsciiString& string1, const char* const string2);""",
    """  inline static bool IsEqual(const TCollection_AsciiString& string1,
                             const char* const string2)
  {
    return string1.IsEqual(string2);
  }""",
  ),
  "src/ModelingAlgorithms/TKFillet/BRepBlend/BRepBlend_CSWalking.cxx": (
    """void BRepBlend_CSWalking::Perform(Blend_CSFunction& Func,""",
    """bool BRepBlend_CSWalking::IsDone() const
{
  return done;
}

const occ::handle<BRepBlend_Line>& BRepBlend_CSWalking::Line() const
{
  if (!done)
  {
    throw StdFail_NotDone();
  }
  return line;
}

void BRepBlend_CSWalking::Perform(Blend_CSFunction& Func,""",
  ),
  "src/FoundationClasses/TKernel/OSD/OSD_MemInfo.cxx": (
    """#if defined(__EMSCRIPTEN__)
  #include <emscripten.h>

//! Return WebAssembly heap size in bytes.""",
    """#if defined(__EMSCRIPTEN__)
  #include <emscripten.h>

extern \"C\" struct mallinfo mallinfo() __attribute__((weak));

//! Return WebAssembly heap size in bytes.""",
  ),
}

MALLINFO_CALL = (
  """  if (IsActive(MemHeapUsage) || IsActive(MemWorkingSet) || IsActive(MemWorkingSetPeak))
  {
    // /proc/%d/status is not emulated - get more info from mallinfo()
    const struct mallinfo aMI = mallinfo();""",
  """  if (mallinfo != nullptr
      && (IsActive(MemHeapUsage) || IsActive(MemWorkingSet) || IsActive(MemWorkingSetPeak)))
  {
    // /proc/%d/status is not emulated - get more info from mallinfo() when provided by the allocator.
    const struct mallinfo aMI = mallinfo();""",
)


def replace_once(content: str, before: str, after: str, path: Path) -> tuple[str, bool]:
  if after in content:
    return content, False
  count = content.count(before)
  if count != 1:
    raise RuntimeError(f"{path}: expected one patch anchor, found {count}")
  return content.replace(before, after, 1), True


def patch_file(path: Path, replacements: tuple[tuple[str, str], ...]) -> bool:
  content = path.read_text()
  changed = False
  for before, after in replacements:
    content, replacement_changed = replace_once(content, before, after, path)
    changed = replacement_changed or changed
  if changed:
    path.write_text(content)
  return changed


def apply(occt_root: Path) -> list[Path]:
  changed = []
  for relative, replacement in PATCHES.items():
    path = occt_root / relative
    replacements = (replacement,)
    if path.name == "OSD_MemInfo.cxx":
      replacements += (MALLINFO_CALL,)
    if patch_file(path, replacements):
      changed.append(path)
  return changed


def main() -> None:
  root = os.environ.get("OCCT_ROOT")
  if not root:
    raise RuntimeError("OCCT_ROOT is required")
  changed = apply(Path(root))
  if changed:
    print("Patched strict-link symbols: " + ", ".join(path.name for path in changed))
  else:
    print("Strict-link symbol patches already applied")


if __name__ == "__main__":
  try:
    main()
  except RuntimeError as error:
    print(f"ERROR: {error}", file=sys.stderr)
    raise SystemExit(1) from error
