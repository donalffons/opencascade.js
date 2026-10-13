"""C++ compile-driver package.

PR 3.4 (partial) — target location for the existing
`src/compileBindings.py` orphan driver. The script body remains at its
legacy path so `build-wasm.sh` and the Docker entry points keep working
byte-identically; a follow-up PR will move the body in. The legacy
`src/compileSources.py` driver was deleted once `build-wasm.sh:step_sources_cmake`
fully superseded it.
"""
