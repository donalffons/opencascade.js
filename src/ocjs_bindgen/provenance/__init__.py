"""Build-provenance recorder package.

PR 3.4 (partial) — target location for the existing
`src/provenance.py` orphan script. The script body remains at the
legacy path so `build-wasm.sh:{839,840,863}` keep working
byte-identically; a follow-up PR will move the body in and flip the
shell-script invocations together.
"""
