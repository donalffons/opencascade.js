import { LibcascadeViewerLoader } from '../components/LibcascadeViewerLoader';

export default function HomePage(): React.ReactElement {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <LibcascadeViewerLoader />
    </main>
  );
}
