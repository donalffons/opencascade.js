#!/usr/bin/env python3
"""Patch OCCT STEPCAF density units from g³·cm² to g·cm⁻³.

The pinned OCCT V8_0_1 writer hard-codes the two DERIVED_UNIT_ELEMENT
exponents in STEPCAFControl_Writer::writeMaterials. The consumer regression is
``tests/smoke/smoke-stepcaf-writer.test.ts``; source hashes fail closed on drift.
"""

import hashlib
import os
import sys
from pathlib import Path

PRISTINE_SHA256 = "1950769f30b740640400d7dae2e09a7651e4626451181a33b97292b4dea113b0"
PATCHED_SHA256 = "2a1afb05ef2f06a18a9bb53cef67b99b0d933f997edad0d492683a2a67a3d543"
REPLACEMENTS = (
    ("aDUE1->Init(aSMU, 3.0);", "aDUE1->Init(aSMU, 1.0);"),
    ("aDUE2->Init(aSLU, 2.0);", "aDUE2->Init(aSLU, -3.0);"),
)


def patch(content: bytes) -> bytes:
    digest = hashlib.sha256(content).hexdigest()
    if digest == PATCHED_SHA256:
        return content
    if digest != PRISTINE_SHA256:
        raise ValueError(f"unexpected STEPCAFControl_Writer source hash {digest}; re-verify density anchors")
    source = content.decode("utf-8")
    for old, new in REPLACEMENTS:
        if source.count(old) != 1:
            raise ValueError(f"expected one density anchor {old!r}, found {source.count(old)}")
        source = source.replace(old, new, 1)
    result = source.encode("utf-8")
    if hashlib.sha256(result).hexdigest() != PATCHED_SHA256:
        raise ValueError("patched STEPCAFControl_Writer hash mismatch; re-verify the source")
    return result


def main() -> None:
    root = os.environ.get("OCCT_ROOT")
    if not root:
        raise ValueError("OCCT_ROOT must name the pinned OCCT source tree")
    target = Path(root) / "src/DataExchange/TKDESTEP/STEPCAFControl/STEPCAFControl_Writer.cxx"
    original = target.read_bytes()
    updated = patch(original)
    if updated != original:
        target.write_bytes(updated)
        print(f"Patched STEPCAF density units: {target}")
    else:
        print(f"Already patched STEPCAF density units: {target}")


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError) as error:
        print(f"ERROR: {error}", file=sys.stderr)
        sys.exit(1)
