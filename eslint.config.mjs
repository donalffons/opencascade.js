/**
 * Repository ESLint config.
 *
 * Applies the JSDoc quality rule to JavaScript and TypeScript sources and the
 * type-aware disposable rule to code that owns Embind handles.
 */

import tseslint from 'typescript-eslint';
import ocjsLintPlugin from './tools/eslint-plugin/index.js';

// Root lint owns JSDoc only; docs-site lint evaluates the real Next/React rules.
const directiveOnlyRule = { create: () => ({}) };

export default tseslint.config(
  {
    ignores: [
      'build/**',
      '.nx/**',
      'build-configs/*.d.ts',
      'dist/**',
      '**/dist/**',
      '**/.next/**',
      'packages/toolchain/dist/**',
      'deps/**',
      'node_modules/**',
      // Per-test Docker build-flow artifacts (gitignored): the custom `link`
      // builds emit `.d.ts`/`.js` modules here that aren't part of the test
      // tsconfig project and must not be type-aware linted.
      'tests/docker/.work/**',
      'tests/docker/.trial/**',
      // Scratch directory the `libcascade` CLI renders ymls into.
      'packages/toolchain/test/fixture/.libcascade/**',
      // Verbatim libembind snapshots are third-party generator inputs.
      'src/vendor/pristine-libembind.js',
      'experiments/**/libembind*.js',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}'],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      'ocjs-lint': ocjsLintPlugin,
      '@next/next': { rules: { 'no-img-element': directiveOnlyRule } },
      'react-hooks': { rules: { 'set-state-in-effect': directiveOnlyRule } },
    },
    rules: {
      'ocjs-lint/jsdoc-quality': 'error',
    },
  },
  {
    files: ['docs-site/**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}'],
    linterOptions: {
      // These directives are active under the docs site's Next.js config.
      reportUnusedDisableDirectives: 'off',
    },
  },
  {
    files: ['tests/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tests/tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      // Register `@typescript-eslint` so pre-existing
      // `/* eslint-disable @typescript-eslint/... */` directives in the
      // test sources resolve to real rule names (otherwise ESLint 9
      // surfaces them as "Definition for rule was not found" errors).
      // All TS rules stay off — we only consume the
      // `ocjs-lint/require-using-on-disposable` checker here.
      '@typescript-eslint': tseslint.plugin,
    },
    linterOptions: {
      // Pre-existing test files carry oxlint-style `eslint-disable`
      // comments that don't always match an enabled ESLint rule;
      // suppress the bookkeeping noise so we can focus on the real
      // leak diagnostics.
      reportUnusedDisableDirectives: 'off',
    },
    rules: {
      'ocjs-lint/require-using-on-disposable': 'error',
    },
  },
  {
    // `@libcascade/toolchain` — pure Node/TS, no embind handles, so the
    // disposable checker has nothing to say here. Type-aware parsing still runs
    // so the package is covered by the same `npm run lint` invocation.
    files: ['packages/toolchain/**/*.ts'],
    // Compile-failure fixtures are intentionally outside the package's
    // TypeScript project. The repository-wide syntax-only JSDoc rule still
    // checks them through the earlier config layer.
    ignores: ['packages/toolchain/test/fixtures/**'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './packages/toolchain/tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'ocjs-lint/require-using-on-disposable': 'error',
    },
  },
);
