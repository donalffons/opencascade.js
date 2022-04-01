// patch __dirname
import { dirname } from 'path';
import { fileURLToPath } from 'url';
globalThis.__dirname = dirname(fileURLToPath(import.meta.url));

// patch require
import { createRequire } from 'module';
globalThis.require = createRequire(import.meta.url);

import ocFullJS from "./opencascade.full.js";

const initOpenCascade = ({
  mainJS = ocFullJS,
  mainWasm = `${globalThis.__dirname}/opencascade.full.wasm`,
  worker = undefined,
  libs = [],
  module = {},
} = {}) => {
  return new Promise((resolve, reject) => {
    new mainJS({
      locateFile(path) {
        if (path.endsWith('.wasm')) {
          return mainWasm;
        }
        if (path.endsWith('.worker.js') && !!worker) {
          return worker;
        }
        return path;
      },
      ...module
    }).then(async oc => {
      for (let lib of libs) {
        await oc.loadDynamicLibrary(lib, { loadAsync: true, global: true, nodelete: true, allowUndefined: false });
      }
      resolve(oc);
    });
  });
};

export default initOpenCascade;
