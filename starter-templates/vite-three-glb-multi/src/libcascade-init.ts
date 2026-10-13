import { createInstance, type OpenCascadeInstance } from 'libcascade/multi/init';
import wasmUrl from 'libcascade/multi/wasm?url';

let cached: Promise<OpenCascadeInstance> | null = null;

/**
 * Canonical exactly-once libcascade multi-threaded init for browser bundles.
 *
 * `createInstance` handles the pthread plumbing (worker script resolution,
 * thread-pool sizing) and rejects with an actionable error when the page is
 * not cross-origin isolated. Parallel defaults are activated once — see the
 * Package multi-threading guide.
 */
export function getLibcascade(): Promise<OpenCascadeInstance> {
  if (cached === null) {
    const instance = createInstance({ locateFile: () => wasmUrl }).then((oc) => {
      oc.BOPAlgo_Options.SetParallelMode(true);
      oc.BRepMesh_IncrementalMesh.SetParallelDefault(true);
      return oc;
    });
    cached = instance;
    return instance;
  }
  return cached;
}
