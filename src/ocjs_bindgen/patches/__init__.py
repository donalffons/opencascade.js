"""OCCT patch driver package.

PR 3.4 (partial) — target location for the existing
`src/patches/*.py` patch modules (apply via `./build-wasm.sh apply-patches`).
The script bodies remain at their legacy paths so `build-wasm.sh:36`,
`Dockerfile:77`, and `Dockerfile.wasm-build:61` keep working
byte-identically; a follow-up PR will move the bodies in and flip the
shell-script invocations together.
"""
