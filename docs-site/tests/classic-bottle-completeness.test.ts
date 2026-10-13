import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const BOTTLE_PATH = resolve(
  import.meta.dirname,
  '../content/docs/package/examples/classic-bottle.mdx',
);

const REQUIRED_SYMBOLS = [
  'BRepOffsetAPI_MakeThickSolid',
  'Geom_CylindricalSurface',
  'Geom2d_Ellipse',
  'Geom2d_TrimmedCurve',
  'BRepOffsetAPI_ThruSections',
  'TopoDS_Compound',
  'BRep_Builder',
] as const;

describe('classic bottle completeness', () => {
  it('should include hollow threading and compound assembly without legacy pointers', () => {
    const body = readFileSync(BOTTLE_PATH, 'utf8');
    for (const symbol of REQUIRED_SYMBOLS) {
      expect(body, `missing ${symbol}`).toContain(symbol);
    }
    expect(body.toLowerCase()).not.toContain('see legacy example');
    expect(body.toLowerCase()).not.toContain('see the legacy');
  });
});
