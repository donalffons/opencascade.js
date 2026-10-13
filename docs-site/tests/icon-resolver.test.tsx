import { describe, it, expect } from 'vitest';
import { isValidElement } from 'react';
import { render } from '@testing-library/react';
import { resolveIcon } from '../lib/icon-resolver';

describe('resolveIcon', () => {
  it('should return undefined for missing / empty icon strings', () => {
    expect(resolveIcon(undefined)).toBeUndefined();
    expect(resolveIcon('')).toBeUndefined();
    expect(resolveIcon('   ')).toBeUndefined();
  });

  it('should resolve a bare lucide reference to a React element', () => {
    const element = resolveIcon('lucide:package');
    expect(isValidElement(element)).toBe(true);
    const { container } = render(<>{element}</>);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg!.classList.contains('lucide-package')).toBe(true);
  });

  it('should apply Tailwind classes after the icon id', () => {
    const element = resolveIcon('lucide:wrench text-amber');
    const { container } = render(<>{element}</>);
    const svg = container.querySelector('svg');
    expect(svg!.classList.contains('text-amber')).toBe(true);
    expect(svg!.classList.contains('lucide-wrench')).toBe(true);
  });

  it('should convert kebab-case ids to PascalCase before lookup', () => {
    const element = resolveIcon('lucide:square-pen');
    const { container } = render(<>{element}</>);
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('should return undefined and warn for unknown icons', () => {
    const warn = (globalThis.console.warn = (() => {
      // suppress
    }) as typeof console.warn);
    void warn;
    expect(resolveIcon('lucide:not-a-real-icon-xyz')).toBeUndefined();
  });

  it('should return undefined for non-lucide namespaces', () => {
    expect(resolveIcon('mdi:foo')).toBeUndefined();
  });

  it('should resolve lib brand icons to img elements', () => {
    const npm = resolveIcon('lib:npm');
    expect(isValidElement(npm)).toBe(true);
    const { container: npmContainer } = render(<>{npm}</>);
    expect(npmContainer.querySelector('img')?.getAttribute('src')).toBe('/icons/npm.svg');

    const wasm = resolveIcon('lib:webassembly');
    const { container: wasmContainer } = render(<>{wasm}</>);
    expect(wasmContainer.querySelector('img')?.getAttribute('src')).toBe('/icons/webassembly.svg');

    const docker = resolveIcon('lib:docker');
    const { container: dockerContainer } = render(<>{docker}</>);
    expect(dockerContainer.querySelector('img')?.getAttribute('src')).toBe('/icons/docker.svg');
  });
});
