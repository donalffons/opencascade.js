from pathlib import Path

from patches.patch_strict_link_symbols import apply


def test_strict_link_symbol_patch_is_complete_and_idempotent(tmp_path: Path) -> None:
  files = {
    "src/FoundationClasses/TKernel/TCollection/TCollection_AsciiString.hxx":
      "  static bool IsEqual(const TCollection_AsciiString& string1, const char* const string2);",
    "src/ModelingAlgorithms/TKFillet/BRepBlend/BRepBlend_CSWalking.cxx":
      "void BRepBlend_CSWalking::Perform(Blend_CSFunction& Func,",
    "src/FoundationClasses/TKernel/OSD/OSD_MemInfo.cxx": """#if defined(__EMSCRIPTEN__)
  #include <emscripten.h>

//! Return WebAssembly heap size in bytes.
  if (IsActive(MemHeapUsage) || IsActive(MemWorkingSet) || IsActive(MemWorkingSetPeak))
  {
    // /proc/%d/status is not emulated - get more info from mallinfo()
    const struct mallinfo aMI = mallinfo();""",
  }
  for relative, content in files.items():
    path = tmp_path / relative
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)

  assert {path.name for path in apply(tmp_path)} == {
    "TCollection_AsciiString.hxx",
    "BRepBlend_CSWalking.cxx",
    "OSD_MemInfo.cxx",
  }
  assert apply(tmp_path) == []

  ascii_string = (tmp_path / next(iter(files))).read_text()
  assert "return string1.IsEqual(string2);" in ascii_string
  walking = (tmp_path / list(files)[1]).read_text()
  assert "BRepBlend_CSWalking::IsDone() const" in walking
  assert "BRepBlend_CSWalking::Line() const" in walking
  mem_info = (tmp_path / list(files)[2]).read_text()
  assert '__attribute__((weak))' in mem_info
  assert "mallinfo != nullptr" in mem_info
