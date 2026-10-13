import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const LOGO_PATH = resolve(
  import.meta.dirname,
  '../content/docs/package/examples/boolean-logo.mdx',
);

describe('boolean logo PBR materials', () => {
  it('should assign per-subset XCAF PBR materials with distinct colours', () => {
    const body = readFileSync(LOGO_PATH, 'utf8');
    expect(body).toContain('XCAFDoc_VisMaterialPBR');
    expect(body).toContain('XCAFDoc_VisMaterial');
    expect(body).toContain('TopoDS_Iterator');
    expect(body).toContain('BaseColor');
    expect(body).toContain('0.6, 0.5, 0, 1');
    expect(body).toContain('0.3, 0.3, 0.3, 1');
  });
});
