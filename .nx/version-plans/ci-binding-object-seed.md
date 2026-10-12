---
ocjs: patch
---

Let image builds reuse binding objects from a previous image. The compiled stages copy `build/compiled-bindings/` from optional `binding-objects-seed-{threading}` build contexts, which are empty by default; CI points them at the latest release images. `compileBindings.py` keeps a seeded object only when its identity (source, command, PCH, patched OCCT state, compiler) matches, so a bindgen change recompiles only the bindings it touched. Release reproducibility builds still compile everything cold.
