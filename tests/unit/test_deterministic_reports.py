from pathlib import Path

from ocjs_bindgen.__main__ import _report_any_resolutions
from ocjs_bindgen.diagnostics import DIAGNOSTICS


def test_any_type_report_is_independent_of_diagnostic_insertion_order(
  tmp_path: Path, monkeypatch
) -> None:
  outputs = []
  for name, types in (
    ("forward", ("Zulu", "Alpha")),
    ("reverse", ("Alpha", "Zulu")),
  ):
    output = tmp_path / name
    monkeypatch.setenv("OCJS_MANIFEST_DIR", str(output))
    DIAGNOSTICS.reset()
    for type_name in types:
      DIAGNOSTICS.collect_any("unbound_reference", type_name)
    _report_any_resolutions()
    outputs.append((output / "any-type-report.json").read_bytes())

  DIAGNOSTICS.reset()
  assert outputs[0] == outputs[1]
