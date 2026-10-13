import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const GALLERY_PATH = resolve(
  import.meta.dirname,
  '../content/docs/package/getting-started/projects-using-libcascade.mdx',
);

const REQUIRED = [
  'ArchiYou',
  'BitByBit',
  'CascadeStudio',
  'Polygonjs',
  'Replicad',
  'Tau',
  'opencascade.js-examples',
] as const;

describe('projects gallery', () => {
  it('should list every required project with an outbound link', () => {
    const body = readFileSync(GALLERY_PATH, 'utf8');
    for (const name of REQUIRED) {
      expect(body, `missing ${name}`).toContain(name);
      const linkPattern = new RegExp(`\\[${name.replace('.', '\\.')}[^\\]]*\\]\\([^)]+\\)`);
      expect(body.match(linkPattern) ?? body.match(new RegExp(`\\[([^\\]]*${name}[^\\]]*)\\]\\(`)), `no link for ${name}`).toBeTruthy();
    }
  });
});
