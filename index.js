import opencascade from "./dist/opencascade.js";
import opencascadeWasm from "./dist/opencascade.wasm";

import module_TKBinL_wasm from './dist/module.TKBinL.wasm';
import module_TKBinTObj_wasm from './dist/module.TKBinTObj.wasm';
import module_TKBin_wasm from './dist/module.TKBin.wasm';
import module_TKBinXCAF_wasm from './dist/module.TKBinXCAF.wasm';
import module_TKBool_wasm from './dist/module.TKBool.wasm';
import module_TKBO_wasm from './dist/module.TKBO.wasm';
import module_TKBRep_wasm from './dist/module.TKBRep.wasm';
import module_TKCAF_wasm from './dist/module.TKCAF.wasm';
import module_TKCDF_wasm from './dist/module.TKCDF.wasm';
import module_TKernel_wasm from './dist/module.TKernel.wasm';
import module_TKFeat_wasm from './dist/module.TKFeat.wasm';
import module_TKFillet_wasm from './dist/module.TKFillet.wasm';
import module_TKG2d_wasm from './dist/module.TKG2d.wasm';
import module_TKG3d_wasm from './dist/module.TKG3d.wasm';
import module_TKGeomAlgo_wasm from './dist/module.TKGeomAlgo.wasm';
import module_TKGeomBase_wasm from './dist/module.TKGeomBase.wasm';
import module_TKHLR_wasm from './dist/module.TKHLR.wasm';
import module_TKIGES_wasm from './dist/module.TKIGES.wasm';
import module_TKLCAF_wasm from './dist/module.TKLCAF.wasm';
import module_TKMath_wasm from './dist/module.TKMath.wasm';
import module_TKMeshVS_wasm from './dist/module.TKMeshVS.wasm';
import module_TKMesh_wasm from './dist/module.TKMesh.wasm';
import module_TKOffset_wasm from './dist/module.TKOffset.wasm';
import module_TKOpenGl_wasm from './dist/module.TKOpenGl.wasm';
import module_TKPrim_wasm from './dist/module.TKPrim.wasm';
import module_TKRWMesh_wasm from './dist/module.TKRWMesh.wasm';
import module_TKService_wasm from './dist/module.TKService.wasm';
import module_TKShHealing_wasm from './dist/module.TKShHealing.wasm';
import module_TKStdL_wasm from './dist/module.TKStdL.wasm';
import module_TKStd_wasm from './dist/module.TKStd.wasm';
import module_TKSTEP209_wasm from './dist/module.TKSTEP209.wasm';
import module_TKSTEPAttr_wasm from './dist/module.TKSTEPAttr.wasm';
import module_TKSTEPBase_wasm from './dist/module.TKSTEPBase.wasm';
import module_TKSTEP_wasm from './dist/module.TKSTEP.wasm';
import module_TKSTL_wasm from './dist/module.TKSTL.wasm';
import module_TKTObj_wasm from './dist/module.TKTObj.wasm';
import module_TKTopAlgo_wasm from './dist/module.TKTopAlgo.wasm';
import module_TKV3d_wasm from './dist/module.TKV3d.wasm';
import module_TKVCAF_wasm from './dist/module.TKVCAF.wasm';
import module_TKVRML_wasm from './dist/module.TKVRML.wasm';
import module_TKXCAF_wasm from './dist/module.TKXCAF.wasm';
import module_TKXDEIGES_wasm from './dist/module.TKXDEIGES.wasm';
import module_TKXDESTEP_wasm from './dist/module.TKXDESTEP.wasm';
import module_TKXMesh_wasm from './dist/module.TKXMesh.wasm';
import module_TKXmlL_wasm from './dist/module.TKXmlL.wasm';
import module_TKXmlTObj_wasm from './dist/module.TKXmlTObj.wasm';
import module_TKXml_wasm from './dist/module.TKXml.wasm';
import module_TKXmlXCAF_wasm from './dist/module.TKXmlXCAF.wasm';
import module_TKXSBase_wasm from './dist/module.TKXSBase.wasm';

export const initOpenCascade = () => {
  const loadLibraries = async (oc, libs, allowUndefined = false) => {
    const promises = [];
    for(let lib of libs) {
      console.log("start loading " + lib);
      promises.push(oc.loadDynamicLibrary(lib, {loadAsync: true, global: true, nodelete: true, allowUndefined}));
      console.log("finished loading");
    }
    await Promise.all(promises);
  };

  const loadLibrariesQueue = async (oc, libs, allowUndefined = false) => {
    for(let lib of libs) {
      await loadLibraries(oc, [lib], allowUndefined);
    }
  };

  return new Promise((resolve, reject) => {
    new opencascade({
      locateFile(path) {
        if(path.endsWith('.wasm')) {
          return opencascadeWasm;
        }
        return path;
      },
    }).then(async oc => {
      await loadLibrariesQueue(
        oc,
        [
          module_TKernel_wasm,
          module_TKMath_wasm,
          module_TKG2d_wasm,
          module_TKG3d_wasm,
          module_TKService_wasm,
          module_TKGeomBase_wasm,
          module_TKBRep_wasm,
          module_TKGeomAlgo_wasm,
          module_TKTopAlgo_wasm,
          module_TKHLR_wasm,
          module_TKShHealing_wasm,
          module_TKMesh_wasm,
          module_TKV3d_wasm,
          module_TKXSBase_wasm,
          module_TKSTEPBase_wasm,
          module_TKSTEP209_wasm,
          module_TKSTEPAttr_wasm,
          module_TKCDF_wasm,
          module_TKSTEP_wasm,
          module_TKLCAF_wasm,
          module_TKPrim_wasm,
          module_TKBO_wasm,
          module_TKCAF_wasm,
          module_TKVCAF_wasm,
          module_TKXCAF_wasm,
          module_TKXDESTEP_wasm,
          module_TKRWMesh_wasm,
          module_TKBool_wasm,
          module_TKFillet_wasm,
          module_TKBinL_wasm,
          module_TKTObj_wasm,
          module_TKBinTObj_wasm,
          module_TKBin_wasm,
          module_TKBinXCAF_wasm,
          module_TKFeat_wasm,
          module_TKIGES_wasm,
          module_TKMeshVS_wasm,
          module_TKOffset_wasm,
          module_TKOpenGl_wasm,
          module_TKStdL_wasm,
          module_TKStd_wasm,
          module_TKSTL_wasm,
          module_TKVRML_wasm,
          module_TKXDEIGES_wasm,
          module_TKXMesh_wasm,
          module_TKXmlL_wasm,
          module_TKXmlTObj_wasm,
          module_TKXml_wasm,
          module_TKXmlXCAF_wasm,
      ]);
      resolve(oc);
    });
  });
}
