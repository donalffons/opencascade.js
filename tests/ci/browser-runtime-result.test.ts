import { describe, expect, it } from 'vitest';
import { validateBrowserRuntimeResult } from '../../scripts/lib/browser-runtime-result.mjs';

describe('browser runtime result contract', () => {
  it('should accept a single-threaded ArrayBuffer shape result', () => {
    expect(() => validateBrowserRuntimeResult({
      browser: 'chromium',
      variant: 'single',
      result: { isolated: true, memoryKind: 'ArrayBuffer', shape: true },
      workerCount: 0,
      errors: [],
    })).not.toThrow();
  });

  it('should accept a fully parallel multi-threaded result', () => {
    expect(() => validateBrowserRuntimeResult({
      browser: 'webkit',
      variant: 'multi',
      result: {
        isolated: true,
        memoryKind: 'SharedArrayBuffer',
        shape: true,
        poolThreads: 4,
        meshDone: true,
      },
      workerCount: 4,
      errors: [],
    })).not.toThrow();
  });

  it('should reject browser errors and incomplete threading evidence', () => {
    const base = {
      browser: 'firefox',
      variant: 'multi',
      result: {
        isolated: true,
        memoryKind: 'SharedArrayBuffer',
        shape: true,
        poolThreads: 4,
        meshDone: true,
      },
      workerCount: 4,
      errors: [],
    };
    expect(() => validateBrowserRuntimeResult({ ...base, errors: ['pageerror: boom'] }))
      .toThrow('pageerror: boom');
    expect(() => validateBrowserRuntimeResult({ ...base, workerCount: 0 }))
      .toThrow('no pthread Web Workers');
    expect(() => validateBrowserRuntimeResult({
      ...base,
      result: { ...base.result, poolThreads: 1 },
    })).toThrow('thread pool did not exceed one thread');
  });
});
