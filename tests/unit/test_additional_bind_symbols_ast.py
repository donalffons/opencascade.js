"""AST-driven additional-bind-symbols.json producer unit tests.

Real-libclang fixture coverage for the Phase 2 producer/consumer pair:

  - Producer: :func:`ocjs_bindgen.ast.parse.parse_binding_source` +
    :func:`ocjs_bindgen.ast.walker.extract_class_registrations` parse the
    same combined `BUILTIN_BINDINGS_SOURCE + consumer additionalBindFiles`
    TU the link stage compiles via `emcc -c`. The extracted Embind
    registration names are serialised to
    ``build/additional-bind-symbols.json``.
  - Consumer: :func:`ocjs_bindgen.link.manifest_registry.builtin_binding_symbols`
    reads that manifest. Its degradation behaviour (missing / malformed)
    is pinned by `test_manifest_registry.py`; here we exercise the
    producer end of the contract.

Test design follows ``docs/policy/testing-policy.md``:
  - Real libclang parsing throughout — no regex anywhere in test or
    fixture. The whole point of Phase 2 was to retire regex-based C++
    extraction; testing that policy with regex would defeat itself.
  - ``OCJS_ROOT`` / ``EMSDK`` etc. resolved via :func:`_skip_if_no_toolchain`
    so the suite still passes on minimal CI runners that don't ship the
    vendored LLVM 17 tarball.
  - Fixtures are inline C++ strings co-located with the assertions so
    the test reads as a complete contract spec.
"""

from __future__ import annotations

import importlib
import textwrap

import pytest

pytestmark = pytest.mark.libclang


def _skip_if_no_toolchain() -> tuple:
  """Return (`parse_binding_source`, `extract_class_registrations`,
  `include_paths`) when the vendored LLVM 17 + emsdk toolchain is present,
  otherwise skip the test.

  The Phase 2 producer depends on libclang resolving ``<emscripten/bind.h>``
  + libc++ headers; both come from the host setup that
  ``scripts/clone-deps.sh`` provisions. CI runners without those deps can't
  exercise this producer at all — skipping there keeps the suite green
  while the native NX build in Phase 9 covers the same path end-to-end.
  """
  try:
    paths_mod = importlib.import_module("ocjs_bindgen.config.paths")
    include_paths = paths_mod.getBindingSourceParseIncludePaths()
  except RuntimeError as e:
    pytest.skip(f"libclang toolchain not provisioned: {e}")
  parse_mod = importlib.import_module("ocjs_bindgen.ast.parse")
  walker_mod = importlib.import_module("ocjs_bindgen.ast.walker")
  return (
    parse_mod.parse_binding_source,
    walker_mod.extract_class_registrations,
    include_paths,
  )


def _extract(source: str) -> set[str]:
  """Parse `source` via libclang and return the Embind registration name
  set the AST walker extracts. Shared helper so each test reads as a
  fixture + assertion pair without import boilerplate.
  """
  parse_binding_source, extract_class_registrations, include_paths = (
    _skip_if_no_toolchain()
  )
  tu = parse_binding_source(source, include_paths)
  return extract_class_registrations(tu)


# ----------------------------------------------------------------------------
# Canonical BUILTIN_BINDINGS_SOURCE block — verifies the OCJS builtins
# extract to the exact frozen set the post-link validator expects.
# ----------------------------------------------------------------------------


def test_canonical_builtin_block_extracts_exactly_three_names() -> None:
  """The frozen contract — the OCJS BUILTIN_BINDINGS_SOURCE block
  registers exactly `OCJS`, `TopoDS`, `TColStd_IndexedDataMapOfStringString`.
  This pins the wire contract for `build/additional-bind-symbols.json`'s
  baseline (any future addition to the builtin block must update this
  assertion in the same change).
  """
  from ocjs_bindgen.link.yaml_build import BUILTIN_BINDINGS_SOURCE
  registered = _extract(BUILTIN_BINDINGS_SOURCE)
  assert registered == {
    "OCJS",
    "TopoDS",
    "TColStd_IndexedDataMapOfStringString",
  }


# ----------------------------------------------------------------------------
# Consumer-flavoured binding file (replicad shape) — verifies the
# walker handles real-world snippets without regex assumptions.
# ----------------------------------------------------------------------------


def test_consumer_additional_bind_code_extracts_each_registration() -> None:
  """Replicad-shaped snippet: a class + value object + register_vector
  + register_map mix. The walker must surface every JS-visible Name
  exactly once, regardless of `class_<T>` template arity or trailing
  builder chains.
  """
  source = textwrap.dedent(r"""
    #include <emscripten/bind.h>
    struct ShapeWrapper {
      int clone() { return 0; }
    };
    struct MeshData {
      int vertices;
    };
    using namespace emscripten;
    EMSCRIPTEN_BINDINGS(consumer) {
      class_<ShapeWrapper>("ShapeWrapper")
        .constructor<>()
        .function("clone", &ShapeWrapper::clone);
      value_object<MeshData>("MeshData")
        .field("vertices", &MeshData::vertices);
      function("make_shape", optional_override([]() { return 1; }));
      register_vector<int>("VectorInt");
      register_map<int, double>("MapIntDouble");
    }
    """)
  registered = _extract(source)
  assert registered == {
    "ShapeWrapper",
    "MeshData",
    "make_shape",
    "VectorInt",
    "MapIntDouble",
  }


def test_unnamed_register_optional_parses_and_registers_no_name() -> None:
  """emsdk declares ``register_optional<T>()`` with no name argument, so
  consumer code written against it must parse (a stub taking a name made
  the parse fail, issue #39) and must not contribute a JS-visible name.
  """
  source = textwrap.dedent(r"""
    #include <emscripten/bind.h>
    struct Probe {};
    EMSCRIPTEN_BINDINGS(consumer_optional) {
      emscripten::register_optional<double>();
      emscripten::class_<Probe>("Probe");
    }
    """)
  assert _extract(source) == {"Probe"}


# ----------------------------------------------------------------------------
# Comments / string literals / preprocessor — every form of "looks like a
# class_<X>(...) call but isn't" must be invisible to the AST walker.
# ----------------------------------------------------------------------------


def test_comments_containing_class_call_text_are_ignored() -> None:
  """libclang strips comments before AST construction, so a comment that
  happens to contain ``class_<Fake>("FakeName")`` produces ZERO matches.
  This proves the regex failure mode is structurally impossible here.
  """
  source = textwrap.dedent(r"""
    #include <emscripten/bind.h>
    struct Real {};
    using namespace emscripten;
    EMSCRIPTEN_BINDINGS(comments) {
      // class_<Fake>("CommentLineFakeName")
      /* class_<Fake>("CommentBlockFakeName") */
      class_<Real>("RealName");
    }
    """)
  registered = _extract(source)
  assert registered == {"RealName"}
  assert "CommentLineFakeName" not in registered
  assert "CommentBlockFakeName" not in registered


def test_string_literals_containing_class_call_text_are_ignored() -> None:
  """A C++ string literal whose contents look like an Embind call is one
  STRING_LITERAL cursor — never a CALL_EXPR. The walker must not surface
  ``"StringLitFakeName"`` from inside an outer string.
  """
  source = textwrap.dedent(r"""
    #include <emscripten/bind.h>
    struct Real {};
    using namespace emscripten;
    EMSCRIPTEN_BINDINGS(stringlits) {
      const char* docs = "class_<Fake>(\"StringLitFakeName\")";
      (void)docs;
      class_<Real>("RealClassName");
    }
    """)
  registered = _extract(source)
  assert registered == {"RealClassName"}
  assert "StringLitFakeName" not in registered


def test_ifdef_false_branches_contribute_no_registrations() -> None:
  """Preprocessor-disabled blocks must NOT contribute registrations —
  libclang respects ``#if 0 / #endif`` so the inactive branch never
  reaches the AST and the walker has nothing to find.
  """
  source = textwrap.dedent(r"""
    #include <emscripten/bind.h>
    struct Active {};
    struct Inactive {};
    using namespace emscripten;
    EMSCRIPTEN_BINDINGS(ifdef) {
      class_<Active>("Active");
    #if 0
      class_<Inactive>("DisabledByIfdef");
    #endif
    }
    """)
  registered = _extract(source)
  assert registered == {"Active"}
  assert "DisabledByIfdef" not in registered


# ----------------------------------------------------------------------------
# Edge cases — empty TUs and union-of-builtin-plus-consumer parity.
# ----------------------------------------------------------------------------


def test_empty_translation_unit_returns_empty_set() -> None:
  """A snippet with no Embind registrations (header-only,
  declaration-only, etc.) must produce an empty set rather than fail.
  """
  source = "#include <emscripten/bind.h>\nstruct Lonely {};\n"
  registered = _extract(source)
  assert registered == set()


def test_parse_errors_fail_instead_of_emitting_an_empty_manifest() -> None:
  """A missing header must surface the libclang diagnostic immediately.

  Before this guard, a clean checkout without ``build/occt-includes`` could
  parse the canonical built-in block into an empty AST and only fail later as
  a set mismatch (or, outside tests, write an incomplete symbol manifest).
  """
  parse_binding_source, _, include_paths = _skip_if_no_toolchain()
  source = '#include <ocjs_header_that_does_not_exist.hxx>\n'
  with pytest.raises(
    RuntimeError,
    match="refusing to emit an incomplete registration manifest",
  ):
    parse_binding_source(source, include_paths)


def test_builtin_plus_consumer_unions_in_single_tu() -> None:
  """The link stage concatenates ``BUILTIN_BINDINGS_SOURCE`` with
  the consumer's ``additionalBindFiles`` and compiles them as ONE TU.
  The walker must return the UNION of both sources because that's
  exactly what `manifest_registry.builtin_binding_symbols` will use to
  satisfy requested bindings.
  """
  from ocjs_bindgen.link.yaml_build import BUILTIN_BINDINGS_SOURCE
  consumer = textwrap.dedent(r"""
    struct ConsumerThing {};
    EMSCRIPTEN_BINDINGS(consumer_extra) {
      emscripten::class_<ConsumerThing>("ConsumerThing");
    }
    """)
  registered = _extract(BUILTIN_BINDINGS_SOURCE + "\n" + consumer)
  assert registered >= {
    "OCJS",
    "TopoDS",
    "TColStd_IndexedDataMapOfStringString",
    "ConsumerThing",
  }
