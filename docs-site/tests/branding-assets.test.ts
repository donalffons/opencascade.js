import { describe, it, expect } from 'vitest';
import { readFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const PUBLIC = resolve(import.meta.dirname, '../public');

describe('branding assets', () => {
  it('should ship non-empty favicon.ico and logo.svg', () => {
    for (const file of ['favicon.ico', 'logo.svg'] as const) {
      const path = resolve(PUBLIC, file);
      expect(statSync(path).size).toBeGreaterThan(0);
    }
  });

  it('should ship sidebar brand icons under public/icons', () => {
    for (const file of ['icons/npm.svg', 'icons/docker.svg', 'icons/webassembly.svg'] as const) {
      const path = resolve(PUBLIC, file);
      expect(statSync(path).size).toBeGreaterThan(0);
      expect(readFileSync(path, 'utf8').includes('<svg')).toBe(true);
    }
  });

  it('should parse logo.svg as XML with an svg root', () => {
    const svg = readFileSync(resolve(PUBLIC, 'logo.svg'), 'utf8');
    expect(svg.includes('<svg')).toBe(true);
  });

  it('should start favicon.ico with the ICO magic bytes', () => {
    const bytes = readFileSync(resolve(PUBLIC, 'favicon.ico'));
    expect(bytes[0]).toBe(0);
    expect(bytes[1]).toBe(0);
  });
});
