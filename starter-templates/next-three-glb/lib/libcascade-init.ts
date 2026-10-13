'use client';

import { createInstance, type OpenCascadeInstance } from 'libcascade/single/init';

let cached: Promise<OpenCascadeInstance> | null = null;

/**
 * Canonical exactly-once libcascade init for Next 15 client components.
 *
 * `opencascade_single.wasm` is copied into `public/` by the `postinstall`
 * script, so `locateFile` resolves to the same-origin URL. Memoization
 * is module-scoped — Next.js component re-renders never re-init.
 */
export function getLibcascade(): Promise<OpenCascadeInstance> {
  if (cached === null) {
    const instance = createInstance({
      locateFile: () => '/opencascade_single.wasm',
    });
    cached = instance;
    return instance;
  }
  return cached;
}
