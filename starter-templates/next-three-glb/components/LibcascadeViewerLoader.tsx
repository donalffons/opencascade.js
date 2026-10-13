'use client';

import dynamic from 'next/dynamic';

// Next 16 forbids `next/dynamic({ ssr: false })` inside Server Components, so
// the dynamic import lives in this tiny client wrapper. The server-rendered
// HomePage imports `<LibcascadeViewerLoader />`, which then loads the WASM-driven
// `<LibcascadeViewer />` only in the browser.
const LibcascadeViewer = dynamic(
  () => import('./LibcascadeViewer').then((m) => m.LibcascadeViewer),
  {
    ssr: false,
    loading: () => <div style={{ padding: 16 }}>loading viewer…</div>,
  },
);

export function LibcascadeViewerLoader(): React.ReactElement {
  return <LibcascadeViewer />;
}
