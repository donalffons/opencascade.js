import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    // SharedArrayBuffer is gated behind cross-origin isolation. libcascade uses it
    // internally for parallel meshing in supported builds, so the headers
    // are kept enabled even when the current `opencascade_single.wasm` build
    // does not require them — flipping them on later is a no-op.
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ];
  },
};

export default nextConfig;
