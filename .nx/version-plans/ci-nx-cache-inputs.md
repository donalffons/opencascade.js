---
ocjs: patch
---

Fix the multi-threaded image recompiling all of OCCT on every consumer link. `compile-sources` and `compile-bindings` hashed `build/build-flags.json` and `build/pch.h.pch` from the file snapshot Nx takes when a run starts, so the image baked a cache entry keyed on the single-threaded flags left by the shared bindgen layer. They now hash the `pch` task's outputs after it runs, and a new `.nxignore` keeps `build/` and `deps/` out of Nx's file map inside the image.
