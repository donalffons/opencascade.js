// glue-size-diff.mjs — measure JS-glue and WASM size delta per primitive.
//
// Strategy:
//   1. Read mod-rows.wasm + mod-rows.mjs (baseline; no per-row binding).
//   2. Read mod-rows-val.wasm + .mjs (val-discrimination variant).
//   3. Read mod-rows-optional.wasm + .mjs (std::optional variant).
//   4. Report (jsBytesDelta, wasmBytesDelta) per variant vs baseline.
//
// In scaffold mode the artefacts may not exist; we return null deltas with
// an explicit pending marker so the runner aggregates a complete table.

import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');

const sizeOf = (path) => (existsSync(path) ? statSync(path).size : null);

const measureVariant = (label, mjsPath, wasmPath) => ({
  label,
  jsBytes: sizeOf(mjsPath),
  wasmBytes: sizeOf(wasmPath),
});

export const measureGlueSizes = () => {
  const baseline = measureVariant('baseline', join(ROOT, 'mod-rows.mjs'), join(ROOT, 'mod-rows.wasm'));
  const valVariant = measureVariant('val', join(ROOT, 'mod-rows-val.mjs'), join(ROOT, 'mod-rows-val.wasm'));
  const optVariant = measureVariant('optional', join(ROOT, 'mod-rows-optional.mjs'), join(ROOT, 'mod-rows-optional.wasm'));

  const delta = (variant) => {
    if (
      baseline.jsBytes === null ||
      baseline.wasmBytes === null ||
      variant.jsBytes === null ||
      variant.wasmBytes === null
    ) {
      return { jsBytesDelta: null, wasmBytesDelta: null, scaffold: true };
    }
    return {
      jsBytesDelta: variant.jsBytes - baseline.jsBytes,
      wasmBytesDelta: variant.wasmBytes - baseline.wasmBytes,
      scaffold: false,
    };
  };

  return {
    baseline,
    val: { ...valVariant, ...delta(valVariant) },
    optional: { ...optVariant, ...delta(optVariant) },
    note:
      baseline.jsBytes === null
        ? 'baseline build artefacts missing — run `./build.sh all` to populate'
        : 'measured against current build artefacts',
  };
};
