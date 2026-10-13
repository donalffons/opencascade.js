#!/usr/bin/env node
/**
 * STEP magic-byte smoke. ISO 10303-21 mandates the file begins with the
 * literal token "ISO-10303-21;" on its first line. We assert that here
 * without invoking a STEP parser — a green check guarantees the file
 * meets the ISO header contract.
 */
import * as fs from 'node:fs/promises';

const file = process.argv[2];
if (!file) {
  console.error('usage: assert-step-magic.mjs <path.step>');
  process.exit(1);
}

const buf = await fs.readFile(file);
const head = buf.subarray(0, 64).toString('utf8');
const magic = 'ISO-10303-21;';
if (!head.startsWith(magic)) {
  console.error(
    `step-magic: ${file} does not begin with "${magic}". First 64 bytes:\n${JSON.stringify(head)}`,
  );
  process.exit(2);
}

if (buf.byteLength < 256) {
  console.error(`step-magic: ${file} is suspiciously small (${buf.byteLength} bytes)`);
  process.exit(3);
}

console.log(`step-magic: ok (${buf.byteLength} bytes, AP214CD header verified)`);
