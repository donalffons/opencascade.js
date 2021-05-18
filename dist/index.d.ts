import { openCascadeInstance, openCascadeModuleObject } from "opencascade.js/dist/opencascade";

export function initOpenCascade(
  settings: {
    mainJS?: openCascadeInstance,
    mainWasm?: string,
    libs?: string[],
    module?: openCascadeModuleObject,
  },
): Promise<openCascadeInstance>;

const main: openCascadeInstance;
const mainWasm: string;
const TKernel: string;
const TKMath: string;
const TKG2d: string;
const TKG3d: string;
const TKService: string;
const TKGeomBase: string;
const TKBRep: string;
const TKGeomAlgo: string;
const TKTopAlgo: string;
const TKHLR: string;
const TKShHealing: string;
const TKMesh: string;
const TKV3d: string;
const TKXSBase: string;
const TKSTEPBase: string;
const TKSTEP209: string;
const TKSTEPAttr: string;
const TKCDF: string;
const TKSTEP: string;
const TKLCAF: string;
const TKPrim: string;
const TKBO: string;
const TKCAF: string;
const TKVCAF: string;
const TKXCAF: string;
const TKXDESTEP: string;
const TKRWMesh: string;
const TKBool: string;
const TKFillet: string;
const TKBinL: string;
const TKTObj: string;
const TKBinTObj: string;
const TKBin: string;
const TKBinXCAF: string;
const TKFeat: string;
const TKIGES: string;
const TKMeshVS: string;
const TKOffset: string;
const TKOpenGl: string;
const TKStdL: string;
const TKStd: string;
const TKSTL: string;
const TKVRML: string;
const TKXDEIGES: string;
const TKXMesh: string;
const TKXmlL: string;
const TKXmlTObj: string;
const TKXml: string;
const TKXmlXCAF: string;

export { main, mainWasm, TKernel, TKMath, TKG2d, TKG3d, TKService, TKGeomBase, TKBRep, TKGeomAlgo, TKTopAlgo, TKHLR, TKShHealing, TKMesh, TKV3d, TKXSBase, TKSTEPBase, TKSTEP209, TKSTEPAttr, TKCDF, TKSTEP, TKLCAF, TKPrim, TKBO, TKCAF, TKVCAF, TKXCAF, TKXDESTEP, TKRWMesh, TKBool, TKFillet, TKBinL, TKTObj, TKBinTObj, TKBin, TKBinXCAF, TKFeat, TKIGES, TKMeshVS, TKOffset, TKOpenGl, TKStdL, TKStd, TKSTL, TKVRML, TKXDEIGES, TKXMesh, TKXmlL, TKXmlTObj, TKXml, TKXmlXCAF };

const ocCore: string;
const ocCoreWasm: string;
const ocModelingAlgorithms: string;
const ocVisualApplication: string;
const ocDataExchangeBase: string;
const ocDataExchangeExtra: string;

export { ocCore, ocCoreWasm, ocDataExchangeBase, ocDataExchangeExtra, ocModelingAlgorithms, ocVisualApplication };
