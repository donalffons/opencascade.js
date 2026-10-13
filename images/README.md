`logo.svg` is the square brandmark — the two-band C on the dark tile. Use it
anywhere an icon is expected; `banner.svg` is the wide lockup with the wordmark,
used at the top of the root README.

`logo no text.svg` was the previous ring mark and is retired.
madewithwebassembly.com referenced it by raw URL and needs repointing at
`logo.svg`.

`badges/` holds the static README badges, vendored from shields.io so npm and
GitHub load them from this repository instead of through the camo proxy, which
times out on shields.io cache misses and leaves the badge broken. Regenerate
with `curl -o badges/<name>.svg "https://img.shields.io/badge/..."`.
