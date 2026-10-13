import os


def immutable_cmake_libraries(
  cmake_lib_dir: str,
  library_manifest: dict[str, object],
) -> list[str]:
  """Return every immutable OCCT archive in manifest order."""
  libraries = []
  for entry in library_manifest.get("files", []):
    item = entry["path"]
    if os.path.dirname(item):
      raise RuntimeError(f"CMake library inventory path must be flat: {item}")
    libraries.append(os.path.join(cmake_lib_dir, item))
  return libraries
