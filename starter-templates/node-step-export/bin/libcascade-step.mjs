#!/usr/bin/env node
// Thin entrypoint that defers to the TS source via tsx for the dev/CI loop.
// For production builds, prefer `tsx src/main.ts <args>` directly or compile to JS.
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '..', 'src', 'main.ts');
const child = spawn('tsx', [src, ...process.argv.slice(2)], { stdio: 'inherit' });
child.on('exit', (code) => process.exit(code ?? 0));
