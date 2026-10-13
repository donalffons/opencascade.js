"""Generated-surface census for the complete PR #2 contributor inventory."""

from __future__ import annotations

import json
import sys
from pathlib import Path

import pytest
import yaml

REPO_ROOT = Path(__file__).resolve().parents[2]
SENTINEL_DIR = REPO_ROOT / "tests" / "sentinel"
if str(SENTINEL_DIR) not in sys.path:
  sys.path.insert(0, str(SENTINEL_DIR))

from test_full_multi_browser_yaml import CONTRIBUTOR_SYMBOLS  # noqa: E402

CONFIG_PATHS = (
  REPO_ROOT / "build-configs" / "full.yml",
  REPO_ROOT / "build-configs" / "full_multi.yml",
  REPO_ROOT / "build-configs" / "full_multi_browser.yml",
)
DECLARATION_PATHS = (
  REPO_ROOT / "dist" / "opencascade_single.d.ts",
  REPO_ROOT / "dist" / "opencascade_multi.d.ts",
)
SMOKE_PATHS = (
  REPO_ROOT / "tests" / "smoke" / "smoke-fluidcad-math-workflows.test.ts",
  REPO_ROOT / "tests" / "smoke" / "smoke-contributor-math-symbols.test.ts",
)

@pytest.fixture(scope="module")
def generated_fragments() -> str:
  bindings = REPO_ROOT / "build" / "bindings"
  fragments = tuple(bindings.rglob("*.d.ts.json")) if bindings.is_dir() else ()
  if not fragments:
    pytest.skip("build/bindings is empty; run the native Nx ST build first")
  declarations: list[str] = []
  for fragment in fragments:
    payload = json.loads(fragment.read_text())
    declaration = payload.get(".d.ts")
    if isinstance(declaration, str):
      declarations.append(declaration)
  return "\n".join(declarations)


def _config_symbols(path: Path) -> set[str]:
  config = yaml.safe_load(path.read_text())
  return {entry["symbol"] for entry in config["mainBuild"]["bindings"]}


def test_exact_inventory_is_selected_in_every_full_configuration() -> None:
  selected = [_config_symbols(path) for path in CONFIG_PATHS]
  assert selected[0] == selected[1] == selected[2]
  for path, symbols in zip(CONFIG_PATHS, selected, strict=True):
    missing = CONTRIBUTOR_SYMBOLS - symbols
    assert not missing, f"{path.name} lost contributor symbols: {sorted(missing)}"


@pytest.mark.parametrize("symbol", sorted(CONTRIBUTOR_SYMBOLS))
def test_contributor_symbol_has_generated_fragment(
  symbol: str,
  generated_fragments: str,
) -> None:
  assert f"export declare class {symbol}" in generated_fragments


@pytest.mark.parametrize("declaration_path", DECLARATION_PATHS, ids=lambda path: path.stem)
def test_contributor_symbols_are_declared_in_st_and_mt_declarations(
  declaration_path: Path,
) -> None:
  if not declaration_path.is_file():
    pytest.skip(f"missing production declaration; run native ST/MT builds: {declaration_path}")
  declaration = declaration_path.read_text()
  missing = {
    symbol
    for symbol in CONTRIBUTOR_SYMBOLS
    if f"declare class {symbol}" not in declaration
  }
  assert not missing, f"{declaration_path.name} lacks registrations: {sorted(missing)}"


@pytest.mark.parametrize("symbol", sorted(CONTRIBUTOR_SYMBOLS))
def test_contributor_symbol_has_an_owning_runtime_smoke(symbol: str) -> None:
  owners = [path.name for path in SMOKE_PATHS if symbol in path.read_text()]
  assert owners, f"{symbol} has no owning runtime smoke case"
