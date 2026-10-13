#!/usr/bin/python3

import hashlib
import json
import multiprocessing
import os
import subprocess
import tempfile
import uuid
from argparse import ArgumentParser
from functools import lru_cache, partial
from pathlib import Path

from filter.filterPackages import filterPackages
from ocjs_bindgen.build_state import _write_json_atomic
from ocjs_bindgen.config.flags import (
  EXTRA_COMPILE_FLAGS,
  PATH_PREFIX_FLAGS,
  SIMD_FLAGS,
  WASM_EXCEPTION_FLAGS,
  BuildFlagMismatch,
  validate_build_flags,
)
from ocjs_bindgen.config.paths import BUILD_DIR, FLAT_INCLUDE_DIR, PCH_FILE, getFlatIncludePaths

libraryBasePath = BUILD_DIR + "/bindings"
COMPILED_BINDINGS_DIR = BUILD_DIR + "/compiled-bindings"

OPT_LEVEL = os.environ.get("OCJS_OPT", "-O0")
USE_LTO = os.environ.get("OCJS_LTO", "0") == "1"

_flat_include_paths = getFlatIncludePaths()
_use_pch = os.path.exists(PCH_FILE)


@lru_cache(maxsize=1)
def _compiler_identity():
  injected = os.environ.get("OCJS_COMPILER_IDENTITY")
  if injected:
    return injected
  emsdk = os.environ.get("EMSDK")
  compiler = str(Path(emsdk) / "upstream" / "emscripten" / "emcc") if emsdk else "emcc"
  result = subprocess.run(
    [compiler, "--version"],
    capture_output=True,
    text=True,
  )
  if result.returncode != 0:
    raise RuntimeError("unable to resolve emcc compiler identity")
  return hashlib.sha256(result.stdout.encode()).hexdigest()


def _normalize_command(command):
  roots = (
    (os.environ.get("OCJS_ROOT"), "/ocjs"),
    (os.environ.get("OCCT_ROOT"), "/occt"),
    (os.environ.get("EMSDK"), "/emsdk"),
  )
  normalized = []
  for argument in map(str, command):
    for actual, virtual in roots:
      if actual:
        argument = argument.replace(actual, virtual)
    normalized.append(argument)
  return normalized


# Cache barrier: any .o file older than build-flags.json was compiled with
# different flags (e.g. EXC=0 vs EXC=1) and must be rebuilt. Without this,
# the per-file mtime check (.o newer than .cpp) silently keeps stale objects
# when env-driven flags change but generated .cpp content stays identical.
def _classify_error(stderr_text):
  """Classify a compilation error into a category from the stderr output."""
  if not stderr_text:
    return "unknown"
  text = stderr_text.lower()
  if "undefined symbol" in text or "undeclared identifier" in text:
    return "undefined_symbol"
  if "no matching function" in text or "no viable overload" in text:
    return "overload_resolution"
  if "incomplete type" in text:
    return "incomplete_type"
  if "no member named" in text:
    return "missing_member"
  if "template" in text and ("argument" in text or "instantiation" in text):
    return "template_error"
  if "private" in text or "protected" in text:
    return "access_specifier"
  if "error:" in text:
    return "compile_error"
  return "unknown"


def _cpp_to_object_path(
  cpp_path,
  source_root=libraryBasePath,
  output_root=COMPILED_BINDINGS_DIR,
):
  """Map a .cpp source path under build/bindings/ to its .cpp.o path under build/compiled-bindings/."""
  rel = os.path.relpath(cpp_path, source_root)
  return os.path.join(output_root, rel + ".o")


def _file_digest(path):
  if not path or not os.path.isfile(path):
    return "missing"
  with open(path, "rb") as stream:
    return hashlib.sha256(stream.read()).hexdigest()


def _manifest_identity(path, keys):
  try:
    with open(path) as stream:
      manifest = json.load(stream)
  except (FileNotFoundError, json.JSONDecodeError):
    return "missing"
  semantic = {key: manifest[key] for key in keys}
  return hashlib.sha256(
    json.dumps(semantic, sort_keys=True, separators=(",", ":")).encode()
  ).hexdigest()


def object_identity(
  source_path,
  command,
  *,
  pch_path=PCH_FILE,
  pch_identity=None,
  dependency_identity=None,
  generator_identity=None,
  compiler_identity=None,
):
  payload = {
    "schema": "ocjs-binding-object-v1",
    "source": _file_digest(source_path),
    "command": _normalize_command(command),
    "pch": pch_identity or _file_digest(pch_path),
    "dependency": dependency_identity or _file_digest(os.path.join(BUILD_DIR, "patches-applied.json")),
    "generator": generator_identity or _file_digest(os.path.join(BUILD_DIR, "bindings-manifest.json")),
    "compiler": compiler_identity or _compiler_identity(),
  }
  return hashlib.sha256(
    json.dumps(payload, sort_keys=True, separators=(",", ":")).encode()
  ).hexdigest()


def _identity_path(object_path):
  return object_path + ".identity"


def object_needs_build(source_path, object_path, command, *, expected_identity=None):
  if not os.path.isfile(object_path):
    return True
  try:
    with open(_identity_path(object_path)) as stream:
      stored = stream.read().strip()
  except FileNotFoundError:
    return True
  return stored != (expected_identity or object_identity(source_path, command))


def _shared_identity_context():
  return {
    "pch_identity": _file_digest(PCH_FILE),
    "dependency_identity": _manifest_identity(
      os.path.join(BUILD_DIR, "patches-applied.json"),
      ("schema", "dependencyCommit", "dependencyFiles"),
    ),
    "generator_identity": _manifest_identity(
      os.path.join(BUILD_DIR, "bindings-manifest.json"),
      ("schema",),
    ),
    "compiler_identity": _compiler_identity(),
  }


def _write_identity(object_path, identity):
  directory = os.path.dirname(object_path)
  fd, temporary = tempfile.mkstemp(prefix=".identity.tmp-", dir=directory)
  try:
    with os.fdopen(fd, "w") as stream:
      stream.write(identity + "\n")
    os.replace(temporary, _identity_path(object_path))
  except BaseException:
    os.unlink(temporary)
    raise


def compile_atomic(command, object_path):
  temporary = f"{object_path}.tmp-{os.getpid()}-{uuid.uuid4().hex}.o"
  try:
    result = subprocess.run(
      [*command, "-o", temporary],
      capture_output=True,
      text=True,
    )
    if result.returncode == 0:
      os.replace(temporary, object_path)
    return result
  finally:
    try:
      os.unlink(temporary)
    except FileNotFoundError:
      pass


def _compile_command(args, item):
  exception_flags = WASM_EXCEPTION_FLAGS
  command = [
    "emcc",
    "-std=c++17",
    *(["-flto"] if USE_LTO else []),
    *exception_flags,
    *SIMD_FLAGS,
    *EXTRA_COMPILE_FLAGS,
    *PATH_PREFIX_FLAGS,
    "-DIGNORE_NO_ATOMICS=1",
    "-DOCCT_NO_PLUGINS",
    "-frtti",
    "-DHAVE_RAPIDJSON",
    OPT_LEVEL,
    "-Wno-unused-parameter",
    "-Wno-unused-variable",
    "-Werror=return-type",
    "-Wno-non-virtual-dtor",
    "-pthread" if args["threading"] == "multi-threaded" else "",
    *(["-include-pch", PCH_FILE] if _use_pch else []),
    *["-I" + p for p in _flat_include_paths],
    "-c", item,
  ]
  return [entry for entry in command if entry]


def buildOneFile(args, item):
  source_root = args.get("source_root", libraryBasePath)
  output_root = args.get("output_root", COMPILED_BINDINGS_DIR)
  o_path = _cpp_to_object_path(item, source_root, output_root)
  os.makedirs(os.path.dirname(o_path), exist_ok=True)
  command = _compile_command(args, item)
  identity = object_identity(item, command, **args["identity_context"])
  needs_build = object_needs_build(
    item,
    o_path,
    command,
    expected_identity=identity,
  )

  if needs_build:
    print("building " + item, flush=True)
    result = compile_atomic(command, o_path)
    if result.returncode != 0:
      Path(o_path).unlink(missing_ok=True)
      Path(_identity_path(o_path)).unlink(missing_ok=True)
      print("FAILED: " + item, flush=True)
      stderr_text = result.stderr or ""
      if stderr_text:
        lines = stderr_text.strip().split('\n')
        for line in lines[-5:]:
          print("  " + line, flush=True)
      error_type = _classify_error(stderr_text)
      first_error = ""
      for line in stderr_text.split('\n'):
        if "error:" in line:
          first_error = line.strip()
          break
      return {"status": "failed", "file": item, "error_type": error_type, "message": first_error}
    _write_identity(o_path, identity)
    return {"status": "succeeded", "file": item}
  else:
    return {"status": "cached", "file": item}

def compileCustomCodeBindings(
  args,
  *,
  source_root=None,
  output_root=None,
):
  source_root = source_root or libraryBasePath + "/myMain.h"
  output_root = output_root or COMPILED_BINDINGS_DIR + "/myMain.h"
  filesToBuild = []
  for dirpath, dirnames, filenames in os.walk(source_root):
    dirnames.sort()
    filenames.sort()
    filesToBuild.extend(map(lambda x: dirpath + "/" + x, filter(lambda x: x.endswith(".cpp"), filenames)))

  build_args = {
    **args,
    "source_root": source_root,
    "output_root": output_root,
    "identity_context": _shared_identity_context(),
  }
  with multiprocessing.Pool(processes=min(multiprocessing.cpu_count(), 8)) as p:
    results = p.map(partial(buildOneFile, build_args), sorted(filesToBuild))
  failed = [result for result in results if result["status"] == "failed"]
  if failed:
    raise RuntimeError(f"{len(failed)} custom binding object(s) failed to compile")

def _is_filtered_binding(filepath):
  """Check if a binding file belongs to a filtered package."""
  rel = filepath.replace(libraryBasePath + "/", "")
  parts = rel.split("/")
  for part in parts:
    if not filterPackages(part):
      return True
  return False

if __name__ == "__main__":
  try:
    validate_build_flags()
  except BuildFlagMismatch as e:
    print(str(e), flush=True)
    raise SystemExit(1) from None

  parser = ArgumentParser()
  parser.add_argument(dest="threading", choices=["single-threaded", "multi-threaded"], help="Build in single vs. multi-threaded mode")
  args = parser.parse_args()

  filesToBuild = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath):
    dirnames.sort()
    filenames.sort()
    for f in filenames:
      if f.endswith(".cpp"):
        fullpath = dirpath + "/" + f
        if not _is_filtered_binding(fullpath):
          filesToBuild.append(fullpath)

  expected_objects = {
    _cpp_to_object_path(path)
    for path in filesToBuild
  }
  expected_identities = {
    _identity_path(path)
    for path in expected_objects
  }
  if os.path.isdir(COMPILED_BINDINGS_DIR):
    for dirpath, dirnames, filenames in os.walk(COMPILED_BINDINGS_DIR):
      dirnames.sort()
      filenames.sort()
      for filename in filenames:
        path = os.path.join(dirpath, filename)
        if ".tmp-" in filename:
          os.remove(path)
        elif filename.endswith(".cpp.o") and path not in expected_objects:
          os.remove(path)
          os.remove(_identity_path(path)) if os.path.exists(_identity_path(path)) else None
        elif filename.endswith(".identity") and path not in expected_identities:
          os.remove(path)

  if _use_pch:
    print(f"Using PCH: {PCH_FILE}")
  else:
    print("WARNING: No PCH found -- compilation will be ~25x slower. Run buildPch.py first.")
  print(f"Using flat includes: {FLAT_INCLUDE_DIR}")

  nproc = int(os.environ.get("OCJS_COMPILE_WORKERS", min(multiprocessing.cpu_count(), 8)))
  print(f"Compiling {len(filesToBuild)} binding files with {nproc} workers...", flush=True)
  with multiprocessing.Pool(processes=nproc) as p:
    results = p.map(partial(buildOneFile, {
      "threading": args.threading,
      "identity_context": _shared_identity_context(),
    }), sorted(filesToBuild))

  succeeded = sum(1 for r in results if r["status"] == "succeeded")
  cached = sum(1 for r in results if r["status"] == "cached")
  failed = sum(1 for r in results if r["status"] == "failed")
  total = len(results)

  failure_details = [r for r in results if r["status"] == "failed"]
  error_categories = {}
  for f in failure_details:
    cat = f.get("error_type", "unknown")
    error_categories.setdefault(cat, []).append(f["file"])

  print("\nBinding compilation summary:")
  print(f"  Total:     {total}")
  print(f"  Succeeded: {succeeded}")
  print(f"  Cached:    {cached}")
  print(f"  Failed:    {failed}")
  if error_categories:
    print("  Failure breakdown:")
    for cat, files in sorted(error_categories.items(), key=lambda x: -len(x[1])):
      print(f"    {cat}: {len(files)}")
  if failed > 0:
    print(f"  ({failed} failures are expected \u2014 not all OCCT classes compile with embind)")
    print("  Required bindings will be verified during the link step.")

  report = {
    "total": total,
    "failed": failed,
    "error_categories": {cat: len(files) for cat, files in error_categories.items()},
    "objects": [
      os.path.relpath(_cpp_to_object_path(path), COMPILED_BINDINGS_DIR)
      for path in sorted(filesToBuild)
      if os.path.isfile(_cpp_to_object_path(path))
    ],
    "failures": [
      {
        "file": os.path.relpath(r["file"], libraryBasePath),
        "error_type": r.get("error_type", "unknown"),
        "message": r.get("message", ""),
      }
      for r in failure_details
    ],
  }
  report_path = os.path.join(COMPILED_BINDINGS_DIR, "binding-report.json")
  os.makedirs(os.path.dirname(report_path), exist_ok=True)
  _write_json_atomic(Path(report_path), report)
  print(f"\nBinding report written to {report_path}")
