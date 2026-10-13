import { execFileSync } from 'node:child_process';

export const buildDate = (env = process.env) => {
  let raw = env.SOURCE_DATE_EPOCH;
  if (!raw) {
    try {
      raw = execFileSync('git', ['show', '-s', '--format=%ct', 'HEAD'], {
        cwd: env.OCJS_ROOT ?? process.cwd(),
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
    } catch {
      throw new Error('SOURCE_DATE_EPOCH is required for publication outside a Git checkout');
    }
  }
  if (!/^\d+$/.test(raw)) {
    throw new Error('SOURCE_DATE_EPOCH must be a non-negative integer');
  }
  return new Date(Number(raw) * 1000);
};
