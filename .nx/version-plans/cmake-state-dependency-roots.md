---
ocjs: patch
---

Fingerprint the CMake scratch identity from the `EMSDK`, `FREETYPE_ROOT` and `RAPIDJSON_ROOT` directories the build actually uses, so builds with those set outside `deps/` no longer fail or hash the wrong checkout.
