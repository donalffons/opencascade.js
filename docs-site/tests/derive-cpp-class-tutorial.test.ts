import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const TUTORIAL_PATH = resolve(
  import.meta.dirname,
  '../content/docs/toolchain/guides/derive-cpp-class-in-js.mdx',
);

const REQUIRED = [
  'EMSCRIPTEN_WRAPPER',
  'allow_subclass',
  'Message_ProgressIndicator',
  'UserBreak',
  '.extend(',
  'pure_virtual',
  'optional_override',
] as const;

const FORBIDDEN_SUFFIXES = ['Start_1', 'Start_2', 'Show_1', 'Show_2'] as const;

describe('derive-cpp-class tutorial', () => {
  it('should document V3 derive-class surfaces without legacy overload suffixes', () => {
    const body = readFileSync(TUTORIAL_PATH, 'utf8');
    for (const token of REQUIRED) {
      expect(body, `missing ${token}`).toContain(token);
    }
    for (const suffix of FORBIDDEN_SUFFIXES) {
      expect(body, `found obsolete ${suffix}`).not.toContain(suffix);
    }
    expect(body.includes('Coming in Phase 2')).toBe(false);
  });
});
