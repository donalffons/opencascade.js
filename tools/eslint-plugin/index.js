/**
 * Local ESLint plugin: `ocjs-lint`
 *
 * Vendored from the upstream tau-lint workspace plugin to keep
 * `libcascade` self-contained — the published source repository must not
 * carry a hard reference to a sibling `libs/oxlint/` checkout.
 *
 * The plugin contains repository-specific ownership and documentation guards.
 *
 * @typedef {import('eslint').ESLint.Plugin} Plugin
 */

import { jsdocQualityRule } from './jsdoc-quality.js';
import { requireUsingOnDisposableRule } from './require-using-on-disposable.js';

/** @type {Plugin} */
const plugin = {
  meta: {
    name: 'ocjs-lint',
    version: '1.1.0',
  },
  rules: {
    'jsdoc-quality': jsdocQualityRule,
    'require-using-on-disposable': requireUsingOnDisposableRule,
  },
};

export default plugin;
