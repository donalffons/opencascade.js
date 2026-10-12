---
ocjs: patch
---

Register `std::optional<T>` for every optional output parameter and genuine `std::optional<T>` parameter in the fragment that uses it, so custom builds no longer fail with `Cannot construct ... due to unbound types`. Additional bind code can now call emsdk's unnamed `register_optional<T>()` (#39).
