"""
Build provenance tracking for WASM artifacts.

Generates a JSON sidecar document that captures the complete recipe
for reproducing a WASM binary. Built incrementally across build stages:
  1. init       — toolchain info, env vars, source commits
  2. add-linking — symbol list, link flags, pre/post-opt sizes (called by buildFromYaml.py)
  3. finalize   — output file hashes, section analysis

Usage (from build-wasm.sh):
  python3 src/provenance.py init
  python3 src/provenance.py add-linking --yaml <path> --symbols 233 --flags '...' --pre-size 19900000 --post-size 19885932
  python3 src/provenance.py finalize --wasm-dir <path>
"""

import hashlib
import json
import os
import re
import subprocess
import sys
from pathlib import Path

from ocjs_bindgen.build_state import _write_json_atomic
from ocjs_bindgen.provenance.clock import build_datetime

OCJS_ROOT = os.environ.get("OCJS_ROOT", os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OCCT_ROOT = os.environ.get("OCCT_ROOT", "")
BUILD_DIR = os.path.join(OCJS_ROOT, "build")
PROVENANCE_FILE = os.path.join(BUILD_DIR, "provenance.json")
LINK_REPORT_FILE = os.environ.get(
    "OCJS_LINK_REPORT",
    os.path.join(BUILD_DIR, "link-report.json"),
)


def _file_hash(path: str) -> str:
    h = hashlib.sha256()
    try:
        with open(path, "rb") as f:
            for chunk in iter(lambda: f.read(65536), b""):
                h.update(chunk)
        return h.hexdigest()
    except (FileNotFoundError, PermissionError):
        return "unknown"


def _git_commit(repo_path: str) -> str:
    if not repo_path or not os.path.isdir(repo_path):
        return "unknown"
    try:
        result = subprocess.run(
            ["git", "-C", repo_path, "rev-parse", "HEAD"],
            capture_output=True, text=True, timeout=5,
        )
        return result.stdout.strip() if result.returncode == 0 else "unknown"
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return "unknown"


def _ocjs_source_commit() -> str:
    injected = os.environ.get("OCJS_SOURCE_COMMIT")
    if injected:
        if not re.fullmatch(r"[0-9a-f]{40}", injected):
            raise ValueError("OCJS_SOURCE_COMMIT must be a lowercase 40-character hexadecimal commit")
        return injected
    return _git_commit(OCJS_ROOT)


def _get_emscripten_version() -> str:
    try:
        result = subprocess.run(
            ["emcc", "--version"],
            capture_output=True, text=True, timeout=5,
        )
        first_line = result.stdout.strip().split("\n")[0]
        for part in first_line.split():
            if part[0].isdigit():
                return part
    except (FileNotFoundError, subprocess.TimeoutExpired, IndexError):
        pass
    return "unknown"


def _get_llvm_version() -> str:
    try:
        result = subprocess.run(
            ["clang", "--version"],
            capture_output=True, text=True, timeout=5,
        )
        for part in result.stdout.split():
            if part[0].isdigit() and "." in part:
                return part.split(".")[0]
    except (FileNotFoundError, subprocess.TimeoutExpired, IndexError):
        pass
    return "unknown"


def _get_wasm_opt_version() -> str:
    emsdk = os.environ.get("EMSDK", "")
    wasm_opt = os.path.join(emsdk, "upstream", "bin", "wasm-opt") if emsdk else "wasm-opt"
    try:
        result = subprocess.run(
            [wasm_opt, "--version"],
            capture_output=True, text=True, timeout=5,
        )
        return result.stdout.strip().split()[-1] if result.stdout.strip() else "unknown"
    except (FileNotFoundError, subprocess.TimeoutExpired, IndexError):
        return "unknown"


def _get_python_version() -> str:
    return f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"


def _get_command_version(command: list[str]) -> str:
    try:
        result = subprocess.run(
            command,
            capture_output=True,
            text=True,
            timeout=5,
        )
        output = (result.stdout or result.stderr).strip()
        return output.splitlines()[0] if result.returncode == 0 and output else "unknown"
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return "unknown"


def _filter_hash() -> str:
    filter_file = os.path.join(OCJS_ROOT, "src", "filter", "filterPackages.py")
    if os.path.exists(filter_file):
        return _file_hash(filter_file)[:12]
    return "nofilter"


def _get_filtered_packages() -> list:
    """Extract the list of filtered package names from filterPackages.py."""
    filter_file = os.path.join(OCJS_ROOT, "src", "filter", "filterPackages.py")
    if not os.path.exists(filter_file):
        return []
    packages = []
    with open(filter_file) as f:
        in_list = False
        for line in f:
            stripped = line.strip()
            if "packageName in [" in stripped:
                in_list = True
                continue
            if in_list:
                if stripped.startswith("]"):
                    break
                if stripped.startswith('"') and stripped.rstrip(",").endswith('"'):
                    pkg = stripped.strip('",').strip()
                    if pkg:
                        packages.append(pkg)
    return packages


def _stat_file(path: str) -> int:
    try:
        return os.path.getsize(path)
    except (FileNotFoundError, OSError):
        return 0


def _wasm_sections(wasm_path: str) -> dict:
    """Extract WASM section sizes using wasm-objdump if available."""
    emsdk = os.environ.get("EMSDK", "")
    objdump = os.path.join(emsdk, "upstream", "bin", "wasm-objdump") if emsdk else "wasm-objdump"
    try:
        result = subprocess.run(
            [objdump, "-h", wasm_path],
            capture_output=True, text=True, timeout=30,
        )
        if result.returncode != 0:
            return {}

        sections = {}
        for line in result.stdout.split("\n"):
            parts = line.strip().split()
            if len(parts) >= 3 and parts[0].startswith("\""):
                name = parts[0].strip('"')
                try:
                    size = int(parts[-2], 16) if parts[-2].startswith("0x") else int(parts[-2])
                    sections[name] = size
                except (ValueError, IndexError):
                    pass
        return sections
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return {}


def _load() -> dict:
    if os.path.exists(PROVENANCE_FILE):
        with open(PROVENANCE_FILE) as f:
            return json.load(f)
    return {}


def _save(data: dict) -> None:
    _write_json_atomic(Path(PROVENANCE_FILE), data)


def _build_compile_flags(opt: str, lto: bool, exceptions: str) -> list:
    """Reconstruct the emcc compile flags from build env vars."""
    flags = [opt]
    if lto:
        flags.append("-flto")
    if exceptions == "1":
        flags.append("-fwasm-exceptions")
    else:
        flags.append("-sDISABLE_EXCEPTION_CATCHING=1")
    defines = os.environ.get("OCJS_DEFINES", "")
    if defines:
        flags.extend(f"-D{d.strip()}" for d in defines.split(",") if d.strip())
    undefines = os.environ.get("OCJS_UNDEFINES", "")
    if undefines:
        flags.extend(f"-U{u.strip()}" for u in undefines.split(",") if u.strip())
    simd = os.environ.get("OCJS_SIMD", "")
    if simd == "1":
        flags.append("-msimd128")
    custom = os.environ.get("OCJS_EXTRA_CFLAGS", "")
    if custom:
        flags.extend(custom.split())
    return flags


def _load_deps_json() -> dict:
    """Load pinned commit hashes from DEPS.json for provenance tracking."""
    deps_file = os.path.join(OCJS_ROOT, "DEPS.json")
    if not os.path.exists(deps_file):
        return {}
    try:
        with open(deps_file) as f:
            data = json.load(f)
        deps = data.get("dependencies", {})
        return {
            name: {
                k: v
                for k, v in info.items()
                if k in (
                    "commit",
                    "docker_digest",
                    "docker_image",
                    "emsdk_version",
                    "version",
                )
            }
            for name, info in deps.items()
        }
    except (json.JSONDecodeError, KeyError):
        return {}


def init() -> None:
    opt = os.environ.get("OCJS_OPT", "-O2")
    lto = os.environ.get("OCJS_LTO", "1") == "1"
    exceptions = os.environ.get("OCJS_EXCEPTIONS", "0")
    threading = os.environ.get("THREADING", "single-threaded")

    exc_mode = "wasm-native" if exceptions == "1" else "none"

    lto_slug = "LTO" if lto else "noLTO"
    exc_slug = "wasmExc" if exceptions == "1" else "noExc"
    thread_slug = "multi" if "multi" in threading else "single"
    built_at = build_datetime()
    build_id = f"{built_at.strftime('%Y%m%dT%H%M%S')}-{opt.lstrip('-')}-{lto_slug}-{thread_slug}"
    pinned_deps = _load_deps_json()
    emscripten_dep = pinned_deps.get("emscripten", {})
    builder_image = emscripten_dep.get("docker_image", "")
    builder_digest = emscripten_dep.get("docker_digest", "")

    cache_key_parts = [
        opt.lstrip("-"),
        lto_slug,
        exc_slug,
        thread_slug,
        _filter_hash()[:8],
        _git_commit(OCCT_ROOT)[:6],
    ]

    provenance = {
        "schema": "wasm-build-provenance-v2",
        "buildId": build_id,
        "timestamp": built_at.isoformat(),

        "toolchain": {
            "emscripten": _get_emscripten_version(),
            "llvm": _get_llvm_version(),
            "wasmOpt": _get_wasm_opt_version(),
            "python": _get_python_version(),
            "node": _get_command_version(["node", "--version"]),
            "npm": _get_command_version(["npm", "--version"]),
            "cmake": _get_command_version(["cmake", "--version"]),
            "doxygen": _get_command_version(["doxygen", "--version"]),
            "builder": (
                f"{builder_image}@{builder_digest}"
                if builder_image and builder_digest
                else "unknown"
            ),
        },

        "source": {
            "occtCommit": _git_commit(OCCT_ROOT),
            "opencascadejsCommit": _ocjs_source_commit(),
            "filterPackagesHash": _filter_hash(),
            "pinnedDeps": pinned_deps,
        },

        "compilation": {
            "cacheKey": "-".join(cache_key_parts),
            "optimization": opt,
            "lto": lto,
            "exceptions": exc_mode,
            "threading": threading,
            "wasmOptLevel": os.environ.get("OCJS_WASM_OPT_LEVEL", "-O3"),
            "emccCompileFlags": _build_compile_flags(opt, lto, exceptions),
        },

        "linking": {},
        "postProcessing": {},
        "output": {},
        "sections": {},

        "filtering": {
            "excludedPackages": _get_filtered_packages(),
        },
    }

    _save(provenance)


def add_linking(
    yaml_config: str = "",
    yaml_hash: str = "",
    bound_symbols: int = 0,
    symbol_list: list = None,
    emcc_flags: list = None,
    wasm_opt_flags: list = None,
    pre_opt_size: int = 0,
    post_opt_size: int = 0,
    ncollection_linked: int = 0,
    ncollection_total: int = 0,
    ncollection_dropped: int = 0,
    source_files: list | None = None,
) -> None:
    """V5 — record link-stage facts including the auto-linked NCollection
    count.

    The ``ncollection_*`` kwargs are written into a new top-level
    ``nCollectionManifest`` block on the provenance document. Their
    semantics mirror what
    ``yaml_build.main::_filter_auto_symbols_by_scope`` already computes:

      * ``linked``  — auto-discovered NCollection canonicals the link
        actually pulled in (size of the kept set).
      * ``total``   — full discovery set before YAML-scope filtering
        (size of the raw manifest).
      * ``dropped`` — entries the scope filter eliminated
        (``total - linked``; written explicitly so consumers don't
        re-derive it).

    Schema ``wasm-build-provenance-v2`` excludes execution-local timing and
    cache state. The fields are reachable only
    via this in-process call; ``provenance.py main()`` deliberately
    does NOT expose CLI flags for them so an out-of-band caller can't
    write values that contradict what the link actually produced.
    """
    link_report = {
      "schema": "ocjs-link-report-v1",
      "linking": {
        "yamlConfig": os.path.basename(yaml_config) if yaml_config else "",
        "yamlConfigHash": yaml_hash,
        "boundSymbols": bound_symbols,
        "symbolList": symbol_list or [],
        "emccFlags": emcc_flags or [],
        "sourceFiles": source_files or [],
      },
    }

    opt_reduction = "0.0%"
    if pre_opt_size > 0 and post_opt_size > 0:
        reduction_pct = (1 - post_opt_size / pre_opt_size) * 100
        opt_reduction = f"{reduction_pct:.1f}%"

    link_report["postProcessing"] = {
        "wasmOptFlags": wasm_opt_flags or [],
        "preOptSize": pre_opt_size,
        "postOptSize": post_opt_size,
        "optReduction": opt_reduction,
    }

    link_report["nCollectionManifest"] = {
        "linked": ncollection_linked,
        "total": ncollection_total,
        "dropped": ncollection_dropped,
    }
    _write_json_atomic(Path(LINK_REPORT_FILE), link_report)

    prov = _load()
    if prov:
        prov.update({
            key: link_report[key]
            for key in ("linking", "postProcessing", "nCollectionManifest")
        })
        _save(prov)


def _variant_name_from_yaml(yaml_path: str) -> str:
    """Extract the variant name from a YAML config (e.g. 'replicad_single' from mainBuild.name 'replicad_single.js')."""
    try:
        import yaml
        with open(yaml_path) as f:
            config = yaml.safe_load(f)
        name = config.get("mainBuild", {}).get("name", "")
        return os.path.splitext(name)[0] if name else ""
    except Exception:
        return ""


def finalize(wasm_dir: str = "", yaml_config: str = "") -> None:
    prov = _load()
    if not prov:
        return
    if os.path.isfile(LINK_REPORT_FILE):
        with open(LINK_REPORT_FILE) as f:
            link_report = json.load(f)
        prov.update({
            key: link_report[key]
            for key in ("linking", "postProcessing", "nCollectionManifest")
            if key in link_report
        })

    if wasm_dir and os.path.isdir(wasm_dir):
        manifest_path = os.environ.get("OCJS_ARTIFACT_MANIFEST")
        if manifest_path:
            with open(manifest_path) as f:
                artifact_manifest = json.load(f)
            selected_files = []
            for entry in artifact_manifest.get("files", []):
                name = entry["path"]
                full = os.path.join(wasm_dir, name)
                if _stat_file(full) != entry["size"] or _file_hash(full) != entry["sha256"]:
                    raise ValueError(f"materialized artifact does not match inventory: {name}")
                selected_files.append(name)
        else:
            variant = _variant_name_from_yaml(yaml_config) if yaml_config else ""
            prefix = f"{variant}." if variant else ""
            selected_files = [
                name
                for name in os.listdir(wasm_dir)
                if not prefix or name.startswith(prefix)
            ]
        wasm_files = sorted(f for f in selected_files if f.endswith(".wasm"))
        js_files = sorted(f for f in selected_files if f.endswith(".js") and not f.endswith(".d.ts"))
        dts_files = sorted(f for f in selected_files if f.endswith(".d.ts"))

        outputs = {}
        for wf in wasm_files:
            full = os.path.join(wasm_dir, wf)
            size = _stat_file(full)
            sha = _file_hash(full)
            outputs[wf] = {
                "size": size,
                "sha256": sha[:16],
            }

            sections = _wasm_sections(full)
            if sections:
                prov["sections"][wf] = sections

        for jf in js_files:
            outputs[jf] = {"size": _stat_file(os.path.join(wasm_dir, jf))}
        for df in dts_files:
            full = os.path.join(wasm_dir, df)
            line_count = 0
            try:
                with open(full) as f:
                    line_count = sum(1 for _ in f)
            except (FileNotFoundError, UnicodeDecodeError):
                pass
            outputs[df] = {"size": _stat_file(full), "lines": line_count}

        prov["output"] = outputs

    variant = _variant_name_from_yaml(yaml_config) if yaml_config else ""
    filename = f"{variant}.provenance.json" if variant else "provenance.json"
    dest = os.path.join(wasm_dir, filename) if wasm_dir else PROVENANCE_FILE

    _write_json_atomic(Path(PROVENANCE_FILE), prov)
    if dest != PROVENANCE_FILE:
        _write_json_atomic(Path(dest), prov)
        print(f"Provenance written to {dest}")


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: provenance.py <init|add-linking|finalize> [args...]")
        sys.exit(1)

    command = sys.argv[1]

    if command == "init":
        init()
    elif command == "add-linking":
        kwargs = {}
        args = sys.argv[2:]
        i = 0
        while i < len(args):
            if args[i] == "--yaml" and i + 1 < len(args):
                kwargs["yaml_config"] = args[i + 1]
                i += 2
            elif args[i] == "--symbols" and i + 1 < len(args):
                kwargs["bound_symbols"] = int(args[i + 1])
                i += 2
            elif args[i] == "--pre-size" and i + 1 < len(args):
                kwargs["pre_opt_size"] = int(args[i + 1])
                i += 2
            elif args[i] == "--post-size" and i + 1 < len(args):
                kwargs["post_opt_size"] = int(args[i + 1])
                i += 2
            else:
                i += 1
        add_linking(**kwargs)
    elif command == "finalize":
        wasm_dir = ""
        yaml_config = ""
        args = sys.argv[2:]
        i = 0
        while i < len(args):
            if args[i] == "--wasm-dir" and i + 1 < len(args):
                wasm_dir = args[i + 1]
                i += 2
            elif args[i] == "--yaml" and i + 1 < len(args):
                yaml_config = args[i + 1]
                i += 2
            else:
                i += 1
        finalize(wasm_dir=wasm_dir, yaml_config=yaml_config)
    else:
        print(f"Unknown command: {command}")
        sys.exit(1)


if __name__ == "__main__":
    main()
