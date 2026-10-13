import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import {
  artifactLedger,
  compareArtifactLedgers,
  requireSinglePackResult,
} from '../../scripts/package-candidate.mjs';
import { codePointCompare } from '../../scripts/generate-api-reference.mjs';

describe('deterministic artifact contracts', () => {
  const directories: string[] = [];

  afterEach(() => {
    for (const directory of directories.splice(0)) {
      rmSync(directory, { recursive: true, force: true });
    }
  });

  it('should use locale-independent code-point ordering', () => {
    const values = ['z', 'ä', 'A', 'a', 'Z'];
    expect(values.toSorted(codePointCompare)).toEqual(['A', 'Z', 'a', 'z', 'ä']);
  });

  it('should produce the same ledger for reversed file creation', () => {
    const first = mkdtempSync(join(tmpdir(), 'ocjs-ledger-a-'));
    const second = mkdtempSync(join(tmpdir(), 'ocjs-ledger-b-'));
    directories.push(first, second);
    for (const [root, names] of [
      [first, ['b.js', 'a.js']],
      [second, ['a.js', 'b.js']],
    ] as const) {
      for (const name of names) writeFileSync(join(root, name), name);
    }

    expect(artifactLedger(first)).toEqual(artifactLedger(second));
  });

  it('should reject altered artifact bytes with the affected path', () => {
    const first = mkdtempSync(join(tmpdir(), 'ocjs-ledger-a-'));
    const second = mkdtempSync(join(tmpdir(), 'ocjs-ledger-b-'));
    directories.push(first, second);
    writeFileSync(join(first, 'artifact.js'), 'first');
    writeFileSync(join(second, 'artifact.js'), 'other');

    expect(() => compareArtifactLedgers(artifactLedger(first), artifactLedger(second)))
      .toThrowError(/artifact\.js/);
  });

  it('should require exactly one npm pack result', () => {
    expect(() => requireSinglePackResult([])).toThrowError(/exactly one/i);
    expect(() => requireSinglePackResult([{ filename: 'a.tgz' }, { filename: 'b.tgz' }]))
      .toThrowError(/a\.tgz.*b\.tgz/);
    expect(requireSinglePackResult([{ filename: 'only.tgz' }])).toEqual({ filename: 'only.tgz' });
  });

  it('should separate cached linking from destination materialization', () => {
    const project = JSON.parse(readFileSync('project.json', 'utf8'));
    expect(project.targets['link-core'].cache).toBe(true);
    expect(project.targets['link-core'].inputs).not.toContainEqual({ env: 'OCJS_OUTPUT_DIR' });
    expect(project.targets.materialize).toMatchObject({
      cache: false,
      dependsOn: ['link-core'],
    });
    expect(project.targets.validate.dependsOn).toEqual(['materialize']);
    expect(project.targets.provenance.dependsOn).toEqual(['validate']);
  });

  it('should keep exact tool and artifact cardinality in hosted workflows', () => {
    const workflow = readFileSync('.github/workflows/docker.yml', 'utf8');
    const reproducibility = readFileSync('.github/workflows/reproducibility.yml', 'utf8');
    expect(workflow).not.toContain('merge-multiple: true');
    expect(workflow).not.toContain("node-version: '24'");
    expect(workflow).toContain("node-version-file: '.nvmrc'");
    expect(workflow).not.toContain('/actions/runs/');
    expect(reproducibility).toContain('max-parallel: 2');
    expect(reproducibility).toContain('no-cache: true');
    expect(reproducibility).toContain('runs-on: ubuntu-24.04-arm');
    expect(reproducibility).toContain('platforms: linux/arm64');
    expect(reproducibility).toContain('--compare-ledgers');
    expect(
      reproducibility.match(/ref: \$\{\{ needs\.prepare\.outputs\.full_sha \}\}/g),
    ).toHaveLength(2);
  });
});
