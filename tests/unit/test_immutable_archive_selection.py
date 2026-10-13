from pathlib import Path

import pytest
import yaml

from ocjs_bindgen.link.libraries import immutable_cmake_libraries

REPO_ROOT = Path(__file__).resolve().parents[2]


def test_public_package_filters_do_not_prune_native_archives(
) -> None:
  manifest = {
    "files": [
      {"path": "libTKernel.a"},
      {"path": "libTKService.a"},
      {"path": "libTKV3d.a"},
    ],
  }

  assert immutable_cmake_libraries("/occt", manifest) == [
    "/occt/libTKernel.a",
    "/occt/libTKService.a",
    "/occt/libTKV3d.a",
  ]

  filters = yaml.safe_load((REPO_ROOT / "bindgen-filters.yaml").read_text())
  assert {"TKService", "TKV3d"} <= set(filters["exclude"]["packages"])
  excluded_classes = filters["exclude"]["classes"]
  assert {"Image_Texture", "Graphic3d_Texture2D"} <= set(
    item for item in excluded_classes if isinstance(item, str)
  )


def test_immutable_archive_inventory_rejects_nested_paths() -> None:
  with pytest.raises(RuntimeError, match="must be flat"):
    immutable_cmake_libraries(
      "/occt",
      {"files": [{"path": "nested/libTKernel.a"}]},
    )
