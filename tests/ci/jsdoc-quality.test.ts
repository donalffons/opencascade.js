import { Linter } from 'eslint';
import { describe, expect, it } from 'vitest';

import ocjsLintPlugin from '../../tools/eslint-plugin/index.js';

const verify = (source: string) => {
  const linter = new Linter();
  return linter.verify(source, [
    {
      plugins: { 'ocjs-lint': ocjsLintPlugin },
      rules: { 'ocjs-lint/jsdoc-quality': 'error' },
    },
  ]);
};

const invalidCases: ReadonlyArray<{
  readonly name: string;
  readonly source: string;
  readonly messageId: string;
}> = [
  {
    name: 'research path',
    source: '/** See `docs/research/build-notes.md`. */\nconst value = 1;',
    messageId: 'internalReference',
  },
  {
    name: 'local user path',
    source: '/** See `/Users/example/work/build-notes.md`. */\nconst value = 1;',
    messageId: 'internalReference',
  },
  {
    name: 'blueprint reference',
    source: '/** Implements the blueprint. */\nconst value = 1;',
    messageId: 'internalReference',
  },
  {
    name: 'audit reference',
    source: '/** Implements this audit. */\nconst value = 1;',
    messageId: 'internalReference',
  },
  {
    name: 'recommendation reference',
    source: '/** Implements recommendation 3.2. */\nconst value = 1;',
    messageId: 'internalReference',
  },
  ...['R1', 'R8.1', 'wave W3', 'Phase 2', 'Finding 4', 'Row 30', 'rule-2'].map(
    (reference) => ({
      name: `planning label ${reference}`,
      source: `/** Implements ${reference}. */\nconst value = 1;`,
      messageId: 'internalReference',
    }),
  ),
  ...[
    'currently',
    'today',
    'at present',
    'for now',
    'not yet',
    'has yet',
    'have yet',
    'future work',
    'in the future',
    'planned',
    'will eventually',
    'used to',
    'previously',
    'roadmap',
    'forward-looking placeholder',
  ].map((claim) => ({
    name: `temporal claim ${claim}`,
    source: `/** This ${claim} selects one variant. */\nconst value = 1;`,
    messageId: 'temporalClaim',
  })),
  ...[
    'powerful',
    'flexible',
    'easy to use',
    'Welcome to',
    'simply',
    'just enough',
    'as you can see',
    'obviously',
    'clearly',
    'blazing fast',
    'lightning fast',
    'state of the art',
    'world class',
    'cutting edge',
    'best in class',
    'next generation',
    'revolutionary',
    'game changing',
  ].map((phrase) => ({
    name: `anti-slop phrase ${phrase}`,
    source: `/** A ${phrase} build API. */\nconst value = 1;`,
    messageId: 'slop',
  })),
  {
    name: '121 prose words',
    source: `/** ${Array.from({ length: 121 }, () => 'word').join(' ')} */\nconst value = 1;`,
    messageId: 'tooLong',
  },
  {
    name: 'parameter description',
    source: '/** @param value - See `docs/research/value.md`. */\nconst read = (value) => value;',
    messageId: 'internalReference',
  },
  {
    name: 'return description',
    source: '/** @returns The value currently selected. */\nconst read = () => 1;',
    messageId: 'temporalClaim',
  },
];

describe('ocjs-lint/jsdoc-quality', () => {
  for (const testCase of invalidCases) {
    it(`rejects ${testCase.name}`, () => {
      const messages = verify(testCase.source);
      expect(messages).toHaveLength(1);
      expect(messages[0]?.messageId).toBe(testCase.messageId);
    });
  }

  it('accepts current contracts, inline code, URLs, units, and real null semantics', () => {
    const messages = verify(`
      /**
       * A W3C-compatible OCCT setting measured in 128 MB units.
       * A \`null\` value removes the inherited setting.
       * See https://example.com/reference/R1-guide for the public protocol.
       * This guard prevents future regressions.
       *
       * @param value - The setting value.
       * @returns The serialized setting.
       */
      const serialize = (value) => String(value);
    `);
    expect(messages).toEqual([]);
  });

  it('excludes JSDoc type syntax from prose checks', () => {
    const messages = verify(`
      /**
       * @param {Flexible} value - The input value.
       * @returns {Planned} The output value.
       */
      const read = (value) => value;
    `);
    expect(messages).toEqual([]);
  });

  it('excludes fenced example code from the prose limit', () => {
    const code = Array.from({ length: 130 }, (_, index) => `const value${index} = ${index};`).join('\n');
    const messages = verify(`
      /**
       * Builds one configured variant.
       *
       * @example
       * \`\`\`typescript
       * ${code}
       * \`\`\`
       */
      const build = () => undefined;
    `);
    expect(messages).toEqual([]);
  });

  it('honors the generated Emscripten provenance suppression', () => {
    const messages = verify(`
      /* eslint-disable ocjs-lint/jsdoc-quality -- copied verbatim from pinned Emscripten settings.js */
      /** This currently follows R1 from the blueprint. */
      const generatedSetting = 1;
      /* eslint-enable ocjs-lint/jsdoc-quality */
      /** Implements R1. */
      const authoredSetting = 2;
    `);
    expect(messages).toHaveLength(1);
    expect(messages[0]?.messageId).toBe('internalReference');
  });
});
