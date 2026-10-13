"""Package filter — reads YAML exclusions for OCCT package names."""

import os as _os


def _load_excluded_packages():
  ocjs_root = _os.environ.get("OCJS_ROOT", "/opencascade.js")
  config_path = _os.environ.get("OCJS_BINDGEN_CONFIG", _os.path.join(ocjs_root, "bindgen-filters.yaml"))
  if not _os.path.isfile(config_path):
    return set(), set()
  try:
    import yaml
    with open(config_path) as f:
      cfg = yaml.safe_load(f)
    packages = set(cfg.get("exclude", {}).get("packages", []))
    prefixes = set()
    for entry in cfg.get("exclude", {}).get("classes", []):
      if isinstance(entry, dict) and "prefix" in entry:
        prefixes.add(entry["prefix"])
    return packages, prefixes
  except Exception:
    return set(), set()


_EXCLUDED_PACKAGES, _EXCLUDED_PREFIXES = _load_excluded_packages()


def filterPackages(packageName):
  if packageName == "":
    return False

  if packageName in _EXCLUDED_PACKAGES:
    return False

  for prefix in _EXCLUDED_PREFIXES:
    if packageName.startswith(prefix):
      return False

  return True
