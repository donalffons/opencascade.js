---
ocjs: patch
---

Custom builds that leave `STACK_SIZE` unset now link with an 8 MB stack, matching the published builds, instead of emcc's 64 KB default that deep OCCT recursion overflows silently. The shipped `.js.symbols` map is now written by the link step's final `wasm-opt` pass, so its function indices match the `.wasm` that ships.
