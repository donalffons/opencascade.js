from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
EMCC = REPO_ROOT / "deps/emsdk/upstream/emscripten/emcc"
FIXTURE = REPO_ROOT / "tests/fixtures/mallinfo-weak.cpp"


@pytest.mark.parametrize(
  ("allocator", "expect_definition"),
  (("dlmalloc", True), ("mimalloc", False)),
)
def test_optional_mallinfo_links_strictly_for_supported_allocators(
  tmp_path: Path,
  allocator: str,
  expect_definition: bool,
) -> None:
  if not EMCC.is_file() or shutil.which("node") is None:
    pytest.skip("vendored Emscripten and Node are required")
  output = tmp_path / f"mallinfo-{allocator}.mjs"
  command = [
    str(EMCC),
    str(FIXTURE),
    f"-sMALLOC={allocator}",
    "-sERROR_ON_UNDEFINED_SYMBOLS=1",
    "-sENVIRONMENT=node",
    "-sEXIT_RUNTIME=1",
    "-o",
    str(output),
  ]
  if expect_definition:
    command.insert(2, "-DEXPECT_MALLINFO")
  subprocess.run(command, check=True)
  subprocess.run(["node", str(output)], check=True)
