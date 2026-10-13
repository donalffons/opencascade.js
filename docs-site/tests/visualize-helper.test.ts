import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const HELPER_PATH = resolve(
  import.meta.dirname,
  '../content/docs/package/guides/visualize-shape-helper.mdx',
);
const EXAMPLES_DIR = resolve(import.meta.dirname, '../content/docs/package/examples');

describe('visualize shape helper', () => {
  it('should document visualizeShapes and visualizeDoc and be referenced from an example', () => {
    const body = readFileSync(HELPER_PATH, 'utf8');
    expect(body).toContain('visualizeDoc');
    expect(body).toContain('visualizeShapes');
    expect(body).toContain('RWGltf_CafWriter');

    const exampleFiles = readdirSync(EXAMPLES_DIR).filter((f) => f.endsWith('.mdx'));
    const referenced = exampleFiles.some((file) =>
      readFileSync(join(EXAMPLES_DIR, file), 'utf8').includes('visualize-shape-helper'),
    );
    expect(referenced).toBe(true);
  });
});
