import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { usedByProjects } from '../lib/home-used-by';

const GALLERY_PATH = resolve(
  import.meta.dirname,
  '../content/docs/package/getting-started/projects-using-libcascade.mdx',
);

describe('home used-by strip', () => {
  it('should list every application from the projects gallery', () => {
    const body = readFileSync(GALLERY_PATH, 'utf8');
    for (const { name } of usedByProjects) {
      expect(body, `missing ${name} in gallery MDX`).toContain(name);
    }
  });
});
