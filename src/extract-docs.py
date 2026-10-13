#!/usr/bin/env python3
"""Extract structured documentation from OCCT headers via Doxygen XML.

Produces build/occt-docs.json — a cached JSON lookup table keyed by C++ symbol
name, consumed by bindings.py to inject JSDoc into generated TypeScript definitions.

Usage:
    python3 src/extract-docs.py

Nx owns cache invalidation. Each execution publishes a complete fresh JSON file.
"""

import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
from xml.etree import ElementTree as ET


def _extractor_fingerprint() -> str:
    """SHA-256 of this script so cache busts when extraction logic changes.

    OCCT commit alone is not sufficient: when `_render_description`,
    `_extract_simplesects`, or any other extraction shape changes, the cached
    `occt-docs.json` no longer matches what the emitter expects. Mixing the
    extractor's own SHA into the cache key keeps regeneration automatic.
    """
    try:
        with open(__file__, "rb") as f:
            return hashlib.sha256(f.read()).hexdigest()[:12]
    except OSError:
        return "unknown"


def _occt_commit(occt_root: str) -> str:
    """Return the current OCCT HEAD commit hash."""
    try:
        return subprocess.check_output(
            ["git", "-C", occt_root, "rev-parse", "HEAD"], text=True
        ).strip()
    except Exception:
        return "unknown"


# --- Inline / block Markdown renderer for Doxygen XML descriptions ----------
#
# Doxygen splits class/method documentation into <briefdescription> (the first
# sentence) and <detaileddescription> (everything else). Earlier versions of
# this extractor flattened both with `_description_text`, dropping all bullet
# lists, paragraph breaks, computeroutput, and refs and producing JSDoc whose
# IntelliSense tooltips trailed off on a dangling `:` or comma. The renderer
# below preserves the structure that matters for IDE tooltips:
#
#   <para>            → paragraph (block-separated by blank lines)
#   <itemizedlist>    → `- item` Markdown bullets
#   <orderedlist>     → `N. item` numbered list
#   <programlisting>  → fenced code block
#   <computeroutput>  → backtick-wrapped inline code
#   <ref kindref=...> → `{@link Name}` for compound refs, backticks otherwise
#   <bold>/<emphasis> → `**bold**` / `*italic*`
#   <simplesect/parameterlist/xrefsect> → dropped here; handled by dedicated
#     extractors (`_extract_params`, `_extract_return`, `_extract_simplesects`,
#     `_is_deprecated`) so they don't appear twice in the final JSDoc.

_SKIP_TAGS = frozenset({"simplesect", "parameterlist", "xrefsect"})
_BLOCK_CHILDREN = frozenset({
    "itemizedlist", "orderedlist", "programlisting", "verbatim", "preformatted",
})

# Sentence-splitting for long prose blocks.
# Doxygen frequently produces multi-thousand-character paragraphs that render as
# one unwieldy line in Monaco hovers. Splitting at ". (Capital)" boundaries
# makes long prose scannable without altering its semantic content.
_SENTENCE_SPLIT_RE = re.compile(r"(?<=\.)\s+(?=[A-Z])")
_LONG_PROSE_THRESHOLD = 600
_MIN_FRAGMENT_LEN = 200


def _split_long_sentences(text: str) -> str:
    """Split prose longer than _LONG_PROSE_THRESHOLD chars at ". (Capital)"
    boundaries.

    Returns text with newlines inserted at sentence boundaries; if no split
    qualifies (input is short, no boundary matches, or every fragment is too
    small), returns the input unchanged. Adjacent fragments shorter than
    `_MIN_FRAGMENT_LEN` are re-merged into the preceding line so the output
    doesn't fragment short technical sentences (statuses, equations, etc.) into
    visual confetti.
    """
    if not text or len(text) <= _LONG_PROSE_THRESHOLD:
        return text
    parts = _SENTENCE_SPLIT_RE.split(text)
    if len(parts) < 2:
        return text
    merged: list[str] = []
    for part in parts:
        if merged and len(part) < _MIN_FRAGMENT_LEN:
            merged[-1] = merged[-1] + " " + part
        elif merged and len(merged[-1]) < _MIN_FRAGMENT_LEN:
            merged[-1] = merged[-1] + " " + part
        else:
            merged.append(part)
    if len(merged) < 2:
        return text
    return "\n".join(merged)


def _plain_text(node) -> str:
    """Collapsed plain-text content of `node` (whitespace normalised).

    `ElementTree.tostring(node, method="text")` includes `node.tail` in the
    output, which would absorb the period that follows e.g.
    `<computeroutput>Value()</computeroutput>.` into the rendered code span.
    We walk subtree text manually to keep the tail outside the result.
    """
    if node is None:
        return ""
    parts = []
    if node.text:
        parts.append(node.text)
    for child in node:
        parts.append(_plain_text(child))
        if child.tail:
            parts.append(child.tail)
    return " ".join("".join(parts).split())


def _inline_child(child) -> str:
    """Render a single XML child as inline Markdown (no block structure)."""
    tag = child.tag
    if tag in _SKIP_TAGS:
        return ""
    if tag == "computeroutput":
        inner = _plain_text(child)
        return f"`{inner}`" if inner else ""
    if tag == "ref":
        text = _plain_text(child)
        if not text:
            return ""
        kindref = child.get("kindref", "")
        return f"{{@link {text}}}" if kindref == "compound" else f"`{text}`"
    if tag == "bold":
        inner = _inline_md(child).strip()
        return f"**{inner}**" if inner else ""
    if tag == "emphasis":
        inner = _inline_md(child).strip()
        return f"*{inner}*" if inner else ""
    if tag == "ndash":
        return "-"
    if tag == "mdash":
        return "--"
    if tag == "linebreak":
        return " "
    if tag in ("ulink", "anchor"):
        inner = _inline_md(child).strip() or _plain_text(child)
        url = child.get("url", "")
        if url and inner:
            return f"[{inner}]({url})"
        return inner
    # Unknown / structural child encountered in inline context — flatten its
    # inline content and drop the surrounding tag.
    return _inline_md(child)


def _inline_md(node) -> str:
    """Render a node's text + inline-tagged children as a single Markdown string.

    Whitespace is collapsed so that the resulting string is a single logical
    line (newlines from the XML pretty-printing don't survive). Block-level
    children encountered here are flattened to inline; callers needing block
    structure use `_render_blocks` instead.
    """
    if node is None:
        return ""
    parts = []
    if node.text:
        parts.append(node.text)
    for child in node:
        parts.append(_inline_child(child))
        if child.tail:
            parts.append(child.tail)
    return " ".join("".join(parts).split())


def _render_listitem(li) -> str:
    """Render a <listitem> as a single inline Markdown line (joined paras).

    Long bullet items (>_LONG_PROSE_THRESHOLD chars) are softly broken at
    sentence boundaries via `_split_long_sentences`. The lazy-continuation
    rule of CommonMark keeps the resulting newlines part of the same bullet
    when rendered in Monaco.
    """
    chunks = []
    for child in li:
        if child.tag == "para":
            chunk = _inline_md(child).strip()
            if chunk:
                chunks.append(chunk)
        elif child.tag in _SKIP_TAGS:
            continue
        else:
            chunk = _inline_md(child).strip()
            if chunk:
                chunks.append(chunk)
    return _split_long_sentences(" ".join(chunks))


def _render_para(para_node):
    """Yield block-level Markdown strings from a single <para>.

    Doxygen often packs an `<itemizedlist>` or `<programlisting>` *inside*
    a `<para>` rather than as a sibling, so a single para can produce
    multiple Markdown blocks (intro line, list, trailing prose).

    Flushed prose is routed through `_split_long_sentences` so the
    monstrously long paragraphs in OCCT (often >2k chars) become scannable
    in Monaco hovers without altering their semantic content.
    """
    inline_buf = []

    def flush():
        text = "".join(inline_buf)
        normalised = " ".join(text.split())
        inline_buf.clear()
        return _split_long_sentences(normalised.strip())

    if para_node.text:
        inline_buf.append(para_node.text)
    for child in para_node:
        ctag = child.tag
        if ctag in _SKIP_TAGS:
            if child.tail:
                inline_buf.append(child.tail)
            continue
        if ctag in _BLOCK_CHILDREN:
            pre = flush()
            if pre:
                yield pre
            yield from _render_block(child)
        else:
            inline_buf.append(_inline_child(child))
        if child.tail:
            inline_buf.append(child.tail)
    pre = flush()
    if pre:
        yield pre


def _render_block(node):
    """Yield zero or more block-level Markdown strings from a single XML node."""
    tag = node.tag
    if tag in _SKIP_TAGS:
        return
    if tag == "para":
        yield from _render_para(node)
        return
    if tag == "itemizedlist":
        items = []
        for li in node.findall("listitem"):
            text = _render_listitem(li)
            if text:
                items.append(f"- {text}")
        if items:
            yield "\n".join(items)
        return
    if tag == "orderedlist":
        items = []
        for index, li in enumerate(node.findall("listitem"), 1):
            text = _render_listitem(li)
            if text:
                items.append(f"{index}. {text}")
        if items:
            yield "\n".join(items)
        return
    if tag in ("programlisting", "verbatim", "preformatted"):
        body = _plain_text(node)
        if body:
            yield f"```\n{body}\n```"
        return
    if tag in ("sect1", "sect2", "sect3", "sect4"):
        yield from _render_blocks_in(node)
        return
    if tag == "title":
        title = _inline_md(node).strip()
        if title:
            yield f"**{title}**"
        return
    inline = _inline_md(node).strip()
    if inline:
        yield inline


def _render_blocks_in(container):
    """Yield block-level Markdown strings from a container's children."""
    if container is None:
        return
    if container.text and container.text.strip():
        yield container.text.strip()
    for child in container:
        yield from _render_block(child)
        if child.tail and child.tail.strip():
            yield child.tail.strip()


def _render_description(desc_element) -> str:
    """Render a Doxygen description into Markdown with paragraph spacing.

    Returns an empty string when the element produces no renderable content
    (after dropping simplesect/parameterlist/xrefsect, which are emitted via
    dedicated JSDoc tags by the consumer in `bindings.py`).
    """
    if desc_element is None:
        return ""
    blocks = list(_render_blocks_in(desc_element))
    return "\n\n".join(b for b in blocks if b.strip()).strip()


def _inline_text(desc_element) -> str:
    """Single-line inline rendering of a description element.

    Used for `@param` and `@returns` tag values where multi-line Markdown
    can't be expressed safely. Equivalent to the old `_description_text`
    behaviour but reuses the inline renderer so refs / computeroutput render
    the same way as in block context.
    """
    if desc_element is None:
        return ""
    return _inline_md(desc_element)


def _brief_text(desc_element) -> str:
    """Inline rendering of a `<briefdescription>` element with sentence splits.

    Class/member/enum briefs are stored as a single string (the JSDoc emitter
    in `bindings.py` splits on `\\n` to produce separate ` * ` lines). OCCT
    sometimes packs ~2k characters into a brief paragraph, so we route the
    rendered text through `_split_long_sentences` to keep Monaco hovers
    scannable.
    """
    return _split_long_sentences(_inline_text(desc_element))


def _extract_simplesects(detailed):
    """Pull notes / warnings / sees out of a description element.

    Returns three lists:
      notes:    list[str]               (rendered Markdown, one per @note)
      warnings: list[str]               (rendered Markdown, one per @warning)
      sees:     list[dict[str, str]]    {"target": str, "kindref": "compound" | "member" | ""}

    `<simplesect kind="see">` may contain multiple `<ref>` siblings or just
    bare text; each ref becomes a separate entry so the consumer can emit
    a `@see {@link Foo}` per target. Bare-text sees fall back to
    `target=text, kindref=""` so `bindings.py` can decide whether to wrap
    in `{@link}`.
    """
    notes, warnings, sees = [], [], []
    if detailed is None:
        return notes, warnings, sees
    for ss in detailed.iter("simplesect"):
        kind = ss.get("kind", "")
        if kind == "note":
            md = _inline_md(ss).strip()
            if md:
                notes.append(md)
        elif kind == "warning":
            md = _inline_md(ss).strip()
            if md:
                warnings.append(md)
        elif kind == "see":
            refs = ss.findall(".//ref")
            if refs:
                for ref in refs:
                    target = _plain_text(ref)
                    if target:
                        sees.append({"target": target, "kindref": ref.get("kindref", "")})
            else:
                txt = _inline_md(ss).strip()
                if txt:
                    sees.append({"target": txt, "kindref": ""})
    return notes, warnings, sees


# --- Doxygen tag extraction --------------------------------------------------


def _extract_params(memberdef_element) -> list:
    """Extract @param documentation from a memberdef's detaileddescription."""
    params = []
    detailed = memberdef_element.find("detaileddescription")
    if detailed is None:
        return params
    for parameterlist in detailed.iter("parameterlist"):
        kind = parameterlist.get("kind", "")
        if kind != "param":
            continue
        for item in parameterlist.findall("parameteritem"):
            names = []
            for namelist in item.findall("parameternamelist"):
                for pn in namelist.findall("parametername"):
                    text = (pn.text or "").strip()
                    if text:
                        names.append(text)
            desc_el = item.find("parameterdescription")
            desc_text = _inline_text(desc_el) if desc_el is not None else ""
            for name in names:
                params.append({"name": name, "description": desc_text})
    return params


def _extract_return(memberdef_element) -> str:
    """Extract @return documentation from a memberdef's detaileddescription."""
    detailed = memberdef_element.find("detaileddescription")
    if detailed is None:
        return ""
    for simplesect in detailed.iter("simplesect"):
        kind = simplesect.get("kind", "")
        if kind == "return":
            return _inline_text(simplesect)
    return ""


def _is_deprecated(element) -> bool:
    """Check if an element has @deprecated annotation."""
    detailed = element.find("detaileddescription")
    if detailed is None:
        return False
    for simplesect in detailed.iter("simplesect"):
        if simplesect.get("kind", "") == "deprecated":
            return True
    for xrefsect in detailed.iter("xrefsect"):
        title = xrefsect.find("xreftitle")
        if title is not None and "deprecated" in (title.text or "").lower():
            return True
    brief = element.find("briefdescription")
    if brief is not None:
        brief_text = _inline_text(brief).lower()
        if "@deprecated" in brief_text or "is deprecated" in brief_text:
            return True
    return False


def _extract_type_text(type_element) -> str:
    """Extract type as plain text from a Doxygen type element."""
    if type_element is None:
        return ""
    return ET.tostring(type_element, encoding="unicode", method="text").strip()


def _process_compound_xml(xml_path: str, docs: dict):
    """Parse a single compound XML file and populate the docs dict."""
    try:
        tree = ET.parse(xml_path)
    except ET.ParseError:
        return

    root = tree.getroot()

    for compounddef in root.findall("compounddef"):
        kind = compounddef.get("kind", "")
        compound_name = compounddef.findtext("compoundname", "").strip()

        if kind in ("class", "struct"):
            brief = _brief_text(compounddef.find("briefdescription"))
            class_detailed_el = compounddef.find("detaileddescription")
            detailed = _render_description(class_detailed_el)
            class_notes, class_warnings, class_sees = _extract_simplesects(class_detailed_el)
            deprecated = _is_deprecated(compounddef)

            members = {}
            for sectiondef in compounddef.findall("sectiondef"):
                sec_kind = sectiondef.get("kind", "")
                if "public" not in sec_kind:
                    continue
                for memberdef in sectiondef.findall("memberdef"):
                    mem_kind = memberdef.get("kind", "")
                    mem_name = memberdef.findtext("name", "").strip()
                    if not mem_name:
                        continue
                    mem_brief = _brief_text(memberdef.find("briefdescription"))
                    mem_detailed_el = memberdef.find("detaileddescription")
                    mem_detailed = _render_description(mem_detailed_el)
                    mem_notes, mem_warnings, mem_sees = _extract_simplesects(mem_detailed_el)
                    mem_params = _extract_params(memberdef)
                    mem_returns = _extract_return(memberdef)
                    mem_return_type = _extract_type_text(memberdef.find("type"))
                    mem_deprecated = _is_deprecated(memberdef)

                    member_entry = {
                        "kind": mem_kind,
                        "brief": mem_brief,
                    }
                    if mem_detailed:
                        member_entry["detailed"] = mem_detailed
                    if mem_notes:
                        member_entry["notes"] = mem_notes
                    if mem_warnings:
                        member_entry["warnings"] = mem_warnings
                    if mem_sees:
                        member_entry["sees"] = mem_sees
                    if mem_params:
                        member_entry["params"] = mem_params
                    if mem_returns:
                        member_entry["returns_description"] = mem_returns
                    if mem_return_type:
                        member_entry["returns"] = mem_return_type
                    if mem_deprecated:
                        member_entry["deprecated"] = True

                    param_elements = memberdef.findall("param")
                    member_entry["param_count"] = len(param_elements)

                    if mem_kind == "enum":
                        enum_members = {}
                        for ev in memberdef.findall("enumvalue"):
                            ev_name = ev.findtext("name", "").strip()
                            if not ev_name:
                                continue
                            ev_brief = _brief_text(ev.find("briefdescription"))
                            ev_detailed_el = ev.find("detaileddescription")
                            ev_detailed = _render_description(ev_detailed_el)
                            ev_notes, ev_warnings, ev_sees = _extract_simplesects(ev_detailed_el)
                            ev_entry = {"kind": "enumvalue", "brief": ev_brief}
                            if ev_detailed:
                                ev_entry["detailed"] = ev_detailed
                            if ev_notes:
                                ev_entry["notes"] = ev_notes
                            if ev_warnings:
                                ev_entry["warnings"] = ev_warnings
                            if ev_sees:
                                ev_entry["sees"] = ev_sees
                            enum_members[ev_name] = ev_entry
                        if mem_brief or enum_members:
                            toplevel_key = compound_name + "_" + mem_name
                            docs[toplevel_key] = {
                                "kind": "enum",
                                "brief": mem_brief,
                                "detailed": _render_description(mem_detailed_el),
                                "members": enum_members,
                                "deprecated": mem_deprecated,
                            }

                    if mem_name in members:
                        existing = members[mem_name]
                        if "overloads" in existing:
                            existing["overloads"].append(member_entry)
                        else:
                            members[mem_name] = {
                                "overloads": [existing, member_entry]
                            }
                    else:
                        members[mem_name] = member_entry

            if brief or members or detailed:
                class_record = {
                    "kind": kind,
                    "brief": brief,
                    "detailed": detailed,
                    "members": members,
                    "deprecated": deprecated,
                }
                if class_notes:
                    class_record["notes"] = class_notes
                if class_warnings:
                    class_record["warnings"] = class_warnings
                if class_sees:
                    class_record["sees"] = class_sees
                docs[compound_name] = class_record

        elif kind == "file":
            for sectiondef in compounddef.findall("sectiondef"):
                sec_kind = sectiondef.get("kind", "")
                if sec_kind not in ("enum", "typedef", "func"):
                    continue
                for memberdef in sectiondef.findall("memberdef"):
                    mem_kind = memberdef.get("kind", "")
                    mem_name = memberdef.findtext("name", "").strip()
                    if not mem_name:
                        continue

                    if mem_kind == "enum":
                        enum_brief = _brief_text(memberdef.find("briefdescription"))
                        enum_detailed = _render_description(memberdef.find("detaileddescription"))
                        enum_deprecated = _is_deprecated(memberdef)

                        enum_members = {}
                        for ev in memberdef.findall("enumvalue"):
                            ev_name = ev.findtext("name", "").strip()
                            if not ev_name:
                                continue
                            ev_brief = _brief_text(ev.find("briefdescription"))
                            ev_detailed_el = ev.find("detaileddescription")
                            ev_detailed = _render_description(ev_detailed_el)
                            ev_notes, ev_warnings, ev_sees = _extract_simplesects(ev_detailed_el)
                            ev_entry = {"kind": "enumvalue", "brief": ev_brief}
                            if ev_detailed:
                                ev_entry["detailed"] = ev_detailed
                            if ev_notes:
                                ev_entry["notes"] = ev_notes
                            if ev_warnings:
                                ev_entry["warnings"] = ev_warnings
                            if ev_sees:
                                ev_entry["sees"] = ev_sees
                            enum_members[ev_name] = ev_entry

                        if enum_brief or enum_members:
                            docs[mem_name] = {
                                "kind": "enum",
                                "brief": enum_brief,
                                "detailed": enum_detailed,
                                "members": enum_members,
                                "deprecated": enum_deprecated,
                            }


def run_doxygen(ocjs_root: str, occt_root: str):
    """Run Doxygen to produce XML output.

    Prefers system `doxygen` (apt/Homebrew). The repo-local pinned binary at
    `tools/doxygen/bin/doxygen` is only used as a fallback when the system
    binary is missing AND the pinned binary is both present AND executable.

    Rationale: the pinned download path in build-wasm.sh used to fetch an
    x86_64-only Linux tarball — fine on amd64 hosts, but on arm64 Linux
    (Docker Desktop on Apple Silicon, GitHub Actions ubuntu-24.04-arm,
    Raspberry Pi CI) the binary failed to execute and this function
    silently fell back to system doxygen anyway. The legacy code only
    checked `isfile` (not `os.access(X_OK)`), so a present-but-unexecutable
    pinned binary blocked the system fallback.
    """
    doxyfile = os.path.join(ocjs_root, "src", "occt-docs.doxyfile")
    pinned = os.path.join(ocjs_root, "tools", "doxygen", "bin", "doxygen")

    if shutil.which("doxygen"):
        doxygen_bin = "doxygen"
    elif os.path.isfile(pinned) and os.access(pinned, os.X_OK):
        doxygen_bin = pinned
    else:
        doxygen_bin = "doxygen"  # let subprocess raise so the user sees the missing-binary error

    env = os.environ.copy()
    env["OCCT_ROOT"] = occt_root
    env["OCJS_ROOT"] = ocjs_root

    shutil.rmtree(os.path.join(ocjs_root, "build", "doxygen-xml"), ignore_errors=True)
    print("  Running Doxygen on OCCT headers...")
    result = subprocess.run(
        [doxygen_bin, doxyfile],
        env=env,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        detail = "\n".join((result.stderr or "").strip().splitlines()[-5:])
        raise RuntimeError(
            f"Doxygen exited with code {result.returncode}"
            + (f":\n{detail}" if detail else "")
        )


def extract_docs(ocjs_root: str) -> dict:
    """Parse all Doxygen XML files and return the documentation dict."""
    xml_dir = os.path.join(ocjs_root, "build", "doxygen-xml", "xml")
    index_xml = os.path.join(xml_dir, "index.xml")

    if not os.path.isfile(index_xml):
        print(f"  ERROR: Doxygen XML not found at {index_xml}", file=sys.stderr)
        return {}

    docs = {}
    tree = ET.parse(index_xml)
    root = tree.getroot()

    compound_files = []
    for compound_el in root.findall("compound"):
        kind = compound_el.get("kind", "")
        if kind in ("class", "struct", "file"):
            refid = compound_el.get("refid", "")
            if refid:
                compound_files.append(os.path.join(xml_dir, refid + ".xml"))

    total = len(compound_files)
    print(f"  Parsing {total} compound XML files...")
    for i, xml_path in enumerate(compound_files):
        if os.path.isfile(xml_path):
            _process_compound_xml(xml_path, docs)
        if (i + 1) % 2000 == 0:
            print(f"    ...{i + 1}/{total}")

    return docs


def main():
    ocjs_root = os.environ.get("OCJS_ROOT", os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    occt_root = os.environ.get("OCCT_ROOT", os.path.join(os.path.dirname(ocjs_root), "OCCT"))

    if not os.path.isdir(occt_root):
        print(f"  ERROR: OCCT_ROOT not found: {occt_root}", file=sys.stderr)
        sys.exit(1)

    output_json = os.path.join(ocjs_root, "build", "occt-docs.json")

    current_commit = _occt_commit(occt_root)
    extractor_sha = _extractor_fingerprint()

    print(f"  OCCT commit: {current_commit[:12]} | extractor: {extractor_sha}")

    os.makedirs(os.path.join(ocjs_root, "build"), exist_ok=True)

    run_doxygen(ocjs_root, occt_root)
    docs = extract_docs(ocjs_root)

    classes = sum(1 for v in docs.values() if v["kind"] in ("class", "struct"))
    enums = sum(1 for v in docs.values() if v["kind"] == "enum")
    total_members = sum(len(v.get("members", {})) for v in docs.values())
    documented_members = sum(
        1 for v in docs.values()
        for m in v.get("members", {}).values()
        if m.get("brief")
    )

    print(f"  Extracted docs: {classes} classes, {enums} enums, "
          f"{documented_members}/{total_members} documented members")

    temporary = output_json + ".tmp"
    with open(temporary, "w") as f:
        json.dump(docs, f, sort_keys=True, separators=(",", ":"))
        f.write("\n")
    os.replace(temporary, output_json)

    size_mb = os.path.getsize(output_json) / (1024 * 1024)
    print(f"  Written: {output_json} ({size_mb:.1f} MB)")


if __name__ == "__main__":
    main()
