import { getLibcascade } from './libcascade-init';
import { buildShape } from './build-shape';
import { shapeToGlb } from './shape-to-glb';
import { createViewer } from './three-viewer';

const status = document.getElementById('status')!;
const canvas = document.getElementById('libcascade-canvas') as HTMLCanvasElement | null;
if (!canvas) throw new Error('canvas #libcascade-canvas not found');

const viewer = createViewer(canvas);

try {
  status.textContent = 'loading OCCT WASM (multi-threaded)…';
  const oc = await getLibcascade();
  const threadCount = oc.OSD_ThreadPool.DefaultPool(-1).NbThreads();

  status.textContent = `building shape (${threadCount} threads)…`;
  using shape = buildShape(oc);

  status.textContent = `meshing → GLB (${threadCount} threads)…`;
  const glb = shapeToGlb(oc, shape);

  status.textContent = `rendered (${glb.byteLength} bytes, ${threadCount} threads)`;
  viewer.load(glb);
} catch (err) {
  const decoded = await decodeOcctError(err);
  status.textContent = `error: ${decoded}`;
  console.error('OCCT pipeline failed:', decoded);
  throw err;
}

/**
 * libcascade v3 throws `WebAssembly.Exception` instances when an OCCT C++ exception
 * crosses the WASM boundary. `getExceptionMessage` returns `[type, message]`;
 * the type token is omitted here because the message is what end-users want.
 */
async function decodeOcctError(err: unknown): Promise<string> {
  if (typeof WebAssembly !== 'undefined' && err instanceof WebAssembly.Exception) {
    const oc = await getLibcascade();
    const [, message] = oc.getExceptionMessage(err);
    return message;
  }
  if (err instanceof Error) return err.message;
  return String(err);
}
