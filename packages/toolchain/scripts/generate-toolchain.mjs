#!/usr/bin/env node

import { generateImages } from './generate-images.mjs';

const version = process.argv[2];
if (process.env.LIBCASCADE_IMAGE) {
  process.stderr.write('libcascade: keeping the committed image pins while generating from LIBCASCADE_IMAGE.\n');
} else {
  await generateImages({ version });
}

await import('./generate-occt-symbols.mjs');
await import('./generate-symbol-catalog.mjs');
await import('./generate-emcc-settings.mjs');
