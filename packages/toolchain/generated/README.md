# `generated/`

Generated artifacts shipped in the package's `files` allowlist. The committed
copies support development; the release workflow regenerates them from the
exact release images before packing:

```sh
npm run generate:toolchain -- 3.0.0-canary.<sha8>                      # release images must already exist
LIBCASCADE_IMAGE=ocjs-local:single-threaded npm run generate:toolchain   # local-image dev loop
```

Running it twice on a clean tree must produce identical bytes
(`test/generated.test.ts` asserts this when `$LIBCASCADE_IMAGE` is set).

| File | Generator | Source |
| --- | --- | --- |
| `occt-symbols.d.ts` | `scripts/generate-occt-symbols.mjs` | `dist/api-reference.json` classes + enums, the image's `build/ncollection-manifest.json` typedef aliases, and the image's Embind builtin registrations — the three buckets `resolve_requested_symbols` accepts. |
| `symbol-catalog.json` | `scripts/generate-symbol-catalog.mjs` | Same universe, reduced to `{name, kind, parents, referencedTypes}` (empty arrays omitted). Backbone for nearest-match suggestions and for W5 `detect`/`check`. No prose. |
| `emcc-settings.d.ts` | `scripts/generate-emcc-settings.mjs` | The **image's** emsdk `src/settings.js` (`var NAME = default;` + preceding `//` docs) plus `tools/settings.py`'s legacy/deprecated tables. Unknown grammar fails the generator rather than guessing a type. |
| `emcc-settings.meta.json` | same | Serialisation manifest (`memorySizes` / `commaLists` / `bracketLists` / `boolInts`) consumed by `src/config/render.ts` instead of a hand-maintained allowlist. |
| `images.json` | `scripts/generate-images.mjs` | The exact release version supplies both ghcr tags; the registry resolves them to immutable digests. The driver runs `repository@digest` and verifies the local repo digest after pulling; `$LIBCASCADE_IMAGE` skips regeneration and digest verification with a provenance warning. |

Inputs the generators need: `dist/api-reference.json` (gitignored — produced by a
full build or fetched from the release), a container engine with the toolchain
image, and network access to ghcr for digest resolution.
