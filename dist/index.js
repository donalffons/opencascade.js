import ocMainJS from "./opencascade.js";
export { ocMainJS }
import ocMainWasm from "./opencascade.wasm";
export { ocMainWasm }

export { default as TKMath } from './module.TKMath.wasm';
export { default as TKG2d } from './module.TKG2d.wasm';
export { default as TKG3d } from './module.TKG3d.wasm';
export { default as TKService } from './module.TKService.wasm';
export { default as TKGeomBase } from './module.TKGeomBase.wasm';
export { default as TKBRep } from './module.TKBRep.wasm';
export { default as TKGeomAlgo } from './module.TKGeomAlgo.wasm';
export { default as TKTopAlgo } from './module.TKTopAlgo.wasm';
export { default as TKHLR } from './module.TKHLR.wasm';
export { default as TKShHealing } from './module.TKShHealing.wasm';
export { default as TKMesh } from './module.TKMesh.wasm';
export { default as TKV3d } from './module.TKV3d.wasm';
export { default as TKXSBase } from './module.TKXSBase.wasm';
export { default as TKSTEPBase } from './module.TKSTEPBase.wasm';
export { default as TKSTEP209 } from './module.TKSTEP209.wasm';
export { default as TKSTEPAttr } from './module.TKSTEPAttr.wasm';
export { default as TKCDF } from './module.TKCDF.wasm';
export { default as TKSTEP } from './module.TKSTEP.wasm';
export { default as TKLCAF } from './module.TKLCAF.wasm';
export { default as TKPrim } from './module.TKPrim.wasm';
export { default as TKBO } from './module.TKBO.wasm';
export { default as TKCAF } from './module.TKCAF.wasm';
export { default as TKVCAF } from './module.TKVCAF.wasm';
export { default as TKXCAF } from './module.TKXCAF.wasm';
export { default as TKXDESTEP } from './module.TKXDESTEP.wasm';
export { default as TKRWMesh } from './module.TKRWMesh.wasm';
export { default as TKBool } from './module.TKBool.wasm';
export { default as TKFillet } from './module.TKFillet.wasm';
export { default as TKBinL } from './module.TKBinL.wasm';
export { default as TKTObj } from './module.TKTObj.wasm';
export { default as TKBinTObj } from './module.TKBinTObj.wasm';
export { default as TKBin } from './module.TKBin.wasm';
export { default as TKBinXCAF } from './module.TKBinXCAF.wasm';
export { default as TKFeat } from './module.TKFeat.wasm';
export { default as TKIGES } from './module.TKIGES.wasm';
export { default as TKMeshVS } from './module.TKMeshVS.wasm';
export { default as TKOffset } from './module.TKOffset.wasm';
export { default as TKStdL } from './module.TKStdL.wasm';
export { default as TKStd } from './module.TKStd.wasm';
export { default as TKSTL } from './module.TKSTL.wasm';
export { default as TKVRML } from './module.TKVRML.wasm';
export { default as TKXDEIGES } from './module.TKXDEIGES.wasm';
export { default as TKXMesh } from './module.TKXMesh.wasm';
export { default as TKXmlL } from './module.TKXmlL.wasm';
export { default as TKXmlTObj } from './module.TKXmlTObj.wasm';
export { default as TKXml } from './module.TKXml.wasm';
export { default as TKXmlXCAF } from './module.TKXmlXCAF.wasm';

export { default as ocCore } from "./opencascade.core.wasm";
export { default as ocDataExchangeBase } from "./opencascade.dataExchangeBase.wasm";
export { default as ocDataExchangeExtra } from "./opencascade.dataExchangeExtra.wasm";
export { default as ocModelingAlgorithms } from "./opencascade.modelingAlgorithms.wasm";
export { default as ocVisualApplication } from "./opencascade.visualApplication.wasm";

export const initOpenCascade = ({
    mainJS = ocMainJS,
    mainWasm = ocMainWasm,
    libs = [],
    module = {},
  } = {}) => {
  return new Promise((resolve, reject) => {
    new mainJS({
      locateFile(path) {
        if(path.endsWith('.wasm')) {
          return mainWasm;
        }
        return path;
      },
      ...module
    }).then(async oc => {
      for(let lib of libs) {
        await oc.loadDynamicLibrary(lib, {loadAsync: true, global: true, nodelete: true, allowUndefined: false});
      }
      resolve(oc);
    });
  });
}
