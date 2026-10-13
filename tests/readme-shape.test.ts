/**
 * Repository-internal shape guards for README.md and MAINTAINER.md.
 *
 * The README is the persona-routed top page for consumers. Its three load-
 * bearing properties — a bounded length, the reader-path table, and a working
 * pointer at MAINTAINER.md — must not drift accidentally.
 *
 * These assertions are repository-internal: they say nothing about external repos.
 */
import { describe, it, expect } from 'vitest';
import * as fs from 'node:fs';
import * as path from 'node:path';

const REPO_ROOT = path.resolve(__dirname, '..');
const README_PATH = path.join(REPO_ROOT, 'README.md');
const MAINTAINER_PATH = path.join(REPO_ROOT, 'MAINTAINER.md');

const README_LINE_BUDGET = 220;

const MAINTAINER_REQUIRED_SECTIONS = [
  '## Quick Start (Native Build)',
  '## Build Configuration',
  '### YAML Configs',
  '### Configurations',
  '### Environment Variables',
  '## Customizing Your Build',
  '## Build Commands',
] as const;

const README_REQUIRED_SECTIONS = [
  '## Install',
  '## Multi-threading',
  '## Toolchain',
  '## Container images',
  "## What's new in v3",
  '## Documentation',
  '## Projects using libcascade',
  '## Contributing',
  '## License',
] as const;

describe('README.md shape', () => {
  it('exists', () => {
    expect(fs.existsSync(README_PATH)).toBe(true);
  });

  it(`is at most ${README_LINE_BUDGET} lines (persona-routed top page)`, () => {
    const lineCount = fs.readFileSync(README_PATH, 'utf-8').split('\n').length;
    expect(lineCount).toBeLessThanOrEqual(README_LINE_BUDGET);
  });

  it('contains the reader-path table before the first section', () => {
    const body = fs.readFileSync(README_PATH, 'utf-8');
    const personaIdx = body.indexOf('| I want to…');
    expect(personaIdx).toBeGreaterThanOrEqual(0);

    const firstH2Match = body.match(/^## .+$/m);
    expect(firstH2Match).not.toBeNull();
    expect(personaIdx).toBeLessThan(firstH2Match!.index!);
    expect(firstH2Match![0]).toBe('## Install');
  });

  it.each(README_REQUIRED_SECTIONS)('contains the %s section', (heading) => {
    const body = fs.readFileSync(README_PATH, 'utf-8');
    expect(body).toContain(heading);
  });

  it('links to MAINTAINER.md', () => {
    const body = fs.readFileSync(README_PATH, 'utf-8');
    expect(body).toMatch(/\(MAINTAINER\.md(#[\w-]+)?\)/);
  });

  it('should present libcascade as the npm package', () => {
    const body = fs.readFileSync(README_PATH, 'utf-8');
    expect(body).toContain('npm install libcascade');
    expect(body).toContain("import oc from 'libcascade';");
    expect(body).not.toContain('Tau-maintained fork');
  });
});

describe('MAINTAINER.md shape', () => {
  it('exists', () => {
    expect(fs.existsSync(MAINTAINER_PATH)).toBe(true);
  });

  it.each(MAINTAINER_REQUIRED_SECTIONS)(
    'contains the %s section migrated from the legacy README',
    (heading) => {
      const body = fs.readFileSync(MAINTAINER_PATH, 'utf-8');
      expect(body).toContain(heading);
    },
  );
});
