import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { hashBindings, hashFile } from '../../scripts/generate-api-reference.mjs';

describe('API-reference input identity', () => {
  let directory: string;
  let binding: string;
  let symbols: string;

  beforeAll(() => {
    directory = mkdtempSync(join(tmpdir(), 'ocjs-api-reference-'));
    binding = join(directory, 'Class.d.ts.json');
    symbols = join(directory, 'opencascade_single.js.symbols');
    writeFileSync(binding, '{"kind":"class",".d.ts":"export class A {}"}');
    writeFileSync(symbols, 'first');
  });

  afterAll(() => {
    rmSync(directory, { recursive: true, force: true });
  });

  it('should invalidate the feed identity for binding-only and symbol-only changes', async () => {
    const firstBindings = await hashBindings([binding], directory);
    const firstSymbols = await hashFile(symbols);
    writeFileSync(binding, '{"kind":"class",".d.ts":"export class B {}"}');
    writeFileSync(symbols, 'second');
    expect(await hashBindings([binding], directory)).not.toBe(firstBindings);
    expect(await hashFile(symbols)).not.toBe(firstSymbols);
  });
});
