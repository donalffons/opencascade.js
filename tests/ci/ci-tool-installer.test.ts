import { hash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { createServer, type Server } from 'node:http';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { afterEach, describe, expect, it } from 'vitest';

const execFileAsync = promisify(execFile);
const installer = join(import.meta.dirname, '../../scripts/install-ci-tool.sh');
const scratch: string[] = [];
const servers: Server[] = [];

const sha256 = (value: Buffer | string) => hash('sha256', value);

const fixture = async () => {
  const root = await mkdtemp(join(tmpdir(), 'ocjs-ci-tool-'));
  scratch.push(root);
  const payload = join(root, 'payload');
  const archive = join(root, 'fixture.tar.gz');
  const binaryBytes = '#!/bin/sh\necho fixture\n';
  await mkdir(payload);
  await writeFile(join(payload, 'actionlint'), binaryBytes);
  await execFileAsync('tar', ['-czf', archive, '-C', payload, 'actionlint']);
  const archiveBytes = await readFile(archive);
  return { archiveBytes, binaryBytes, root };
};

const serve = async (archive: Buffer, failures = 0, finalStatus = 200) => {
  let requests = 0;
  // The server must outlive this helper; afterEach closes every registered instance.
  // eslint-disable-next-line ocjs-lint/require-using-on-disposable
  const server = createServer((_request, response) => {
    requests += 1;
    if (requests <= failures) {
      response.writeHead(503).end('retry');
      return;
    }
    response
      .writeHead(finalStatus, { 'content-type': finalStatus === 200 ? 'application/gzip' : 'text/plain' })
      .end(finalStatus === 200 ? archive : 'missing');
  });
  servers.push(server);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  if (!address || typeof address === 'string') throw new Error('fixture server did not bind');
  return { baseUrl: `http://127.0.0.1:${address.port}`, requests: () => requests };
};

const writeManifest = async (
  root: string,
  baseUrl: string,
  archive: Buffer,
  binary: string,
  archiveHash = sha256(archive),
) => {
  const manifest = join(root, 'DEPS.json');
  await writeFile(
    manifest,
    JSON.stringify({
      ci_tools: {
        actionlint: {
          version: 'test',
          base_url: baseUrl,
          platforms: {
            'linux-amd64': {
              filename: 'fixture.tar.gz',
              sha256: archiveHash,
              binary_sha256: sha256(binary),
            },
          },
        },
      },
    }),
  );
  return manifest;
};

afterEach(async () => {
  await Promise.all(servers.splice(0).map((server) => new Promise<void>((resolve) => server.close(() => resolve()))));
  await Promise.all(scratch.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

describe('pinned CI tool installer', () => {
  it('retries transient acquisition and installs only verified bytes', async () => {
    const { archiveBytes, binaryBytes, root } = await fixture();
    const server = await serve(archiveBytes, 2);
    const manifest = await writeManifest(root, server.baseUrl, archiveBytes, binaryBytes);
    const destination = join(root, 'tools');

    await execFileAsync(installer, ['--tool', 'actionlint', '--dest', destination, '--manifest', manifest], {
      env: { ...process.env, OCJS_CI_TOOL_PLATFORM: 'linux-amd64' },
    });

    expect(server.requests()).toBe(3);
    expect(await readFile(join(destination, 'bin/actionlint'), 'utf8')).toBe(binaryBytes);
  }, 15_000);

  it('fails a checksum mismatch without retrying the verified result', async () => {
    const { archiveBytes, binaryBytes, root } = await fixture();
    const server = await serve(archiveBytes);
    const manifest = await writeManifest(root, server.baseUrl, archiveBytes, binaryBytes, '0'.repeat(64));

    await expect(
      execFileAsync(installer, ['--tool', 'actionlint', '--dest', join(root, 'tools'), '--manifest', manifest], {
        env: { ...process.env, OCJS_CI_TOOL_PLATFORM: 'linux-amd64' },
      }),
    ).rejects.toThrow();
    expect(server.requests()).toBe(1);
  });

  it('does not retry a permanent HTTP error', async () => {
    const { archiveBytes, binaryBytes, root } = await fixture();
    const server = await serve(archiveBytes, 0, 404);
    const manifest = await writeManifest(root, server.baseUrl, archiveBytes, binaryBytes);

    await expect(
      execFileAsync(installer, ['--tool', 'actionlint', '--dest', join(root, 'tools'), '--manifest', manifest], {
        env: { ...process.env, OCJS_CI_TOOL_PLATFORM: 'linux-amd64' },
      }),
    ).rejects.toThrow();
    expect(server.requests()).toBe(1);
  });
});
