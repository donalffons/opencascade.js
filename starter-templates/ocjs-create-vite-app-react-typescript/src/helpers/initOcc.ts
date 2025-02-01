import openCascade from "opencascade.js/dist/opencascade.full.js";
import openCascadeWasm from "opencascade.js/dist/opencascade.full.wasm?url";

export async function initOcc() {
  //@ts-ignore
  return await openCascade({
    locateFile: () => openCascadeWasm,
  });
}
