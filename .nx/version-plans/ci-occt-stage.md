---
ocjs: patch
---

Compile OCCT in its own Docker stage keyed only on the inputs that shape the static libraries, and install npm dependencies from version-free manifests. Bindgen, filter, YAML and release version changes no longer recompile OCCT in the published images. `build-wasm.sh` now reuses `build/occt-libraries/` when it was already published for the same CMake identity and still matches its ledger, and gains an `occt-libraries` command for a build tree that holds only OCCT.
