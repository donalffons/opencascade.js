from __future__ import annotations

from pathlib import Path

PATCH = Path(__file__).parents[2] / "src" / "patches" / "libembind-overloading.patch"


def test_should_promote_first_member_and_static_registration_to_owned_dispatchers() -> None:
  source = PATCH.read_text()

  assert "createOwnedSignatureDispatcher" in source
  assert "proto[methodName] = createOwnedSignatureDispatcher" not in source
  assert source.count("createOwnedSignatureDispatcher(proto, methodName, humanName") >= 4
  assert "First registrations use the same owned dispatcher representation" in source
  assert source.count("Reserve source-registration order before dependency callbacks run.") == 4
  assert "unboundTypesHandler.signatureArray = rawSignatureArray" in source
  assert "constructor_body[argCount - 1].signaturesArray.push(rawSignatureArray)" in source
