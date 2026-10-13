"""Generated-fragment contract for OCCT V8 ``std::string_view`` bindings."""

from __future__ import annotations

import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
TCOLLECTION = (
    REPO_ROOT
    / "build"
    / "bindings"
    / "FoundationClasses"
    / "TKernel"
    / "TCollection"
)


def _fragment(class_name: str, suffix: str) -> Path:
    return TCOLLECTION / f"{class_name}.hxx" / f"{class_name}.{suffix}"


def _class_body(declaration: str, class_name: str) -> str:
    marker = f"export declare class {class_name} {{"
    assert marker in declaration
    return declaration.split(marker, 1)[1].split("\n}", 1)[0]


def test_generated_cpp_uses_only_owning_strings_at_embind_boundaries() -> None:
    ascii_cpp = _fragment("TCollection_AsciiString", "cpp").read_text()
    extended_cpp = _fragment("TCollection_ExtendedString", "cpp").read_text()

    assert "new TCollection_AsciiString(arg0.as<std::string>())" in ascii_cpp
    assert "self.AssignCat(arg0.as<std::string>().c_str())" in ascii_cpp
    assert "new TCollection_ExtendedString(arg0.as<std::u16string>())" in extended_cpp
    assert "self.AssignCat(arg0.as<std::u16string>())" in extended_cpp
    assert 'arg0["length"].as<unsigned>() == 1' in ascii_cpp
    assert 'arg0["length"].as<unsigned>() == 1' in extended_cpp
    assert 'module_property("string_view")' not in ascii_cpp
    assert 'module_property("basic_string_view")' not in ascii_cpp

    for generated in (ascii_cpp, extended_cpp):
        assert ".as<std::string_view>" not in generated
        assert ".as<std::u16string_view>" not in generated
        assert ".as<std::basic_string_view" not in generated


def test_generated_declarations_expose_string_view_inputs_as_typescript_strings() -> None:
    ascii_dts = json.loads(
        _fragment("TCollection_AsciiString", "d.ts.json").read_text()
    )[".d.ts"]
    extended_dts = json.loads(
        _fragment("TCollection_ExtendedString", "d.ts.json").read_text()
    )[".d.ts"]
    ascii_class = _class_body(ascii_dts, "TCollection_AsciiString")
    extended_class = _class_body(extended_dts, "TCollection_ExtendedString")

    assert "constructor(theStringView: string);" in ascii_class
    assert "AssignCat(theCString: string): void;" in ascii_class
    assert "constructor(theStringView: string);" in extended_class
    assert "AssignCat(theStringView: string): void;" in extended_class
    assert "TCollection_AsciiString_" not in ascii_dts
