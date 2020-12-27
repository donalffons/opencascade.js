import { TKBOLib } from './modules/TKBO.wasm';
import { TKBRepLib } from './modules/TKBRep.wasm';
import { TKBinLib } from './modules/TKBin.wasm';
import { TKBinLLib } from './modules/TKBinL.wasm';
import { TKBinTObjLib } from './modules/TKBinTObj.wasm';
import { TKBinXCAFLib } from './modules/TKBinXCAF.wasm';
import { TKBoolLib } from './modules/TKBool.wasm';
import { TKCAFLib } from './modules/TKCAF.wasm';
import { TKCDFLib } from './modules/TKCDF.wasm';
import { TKD3DHostLib } from './modules/TKD3DHost.wasm';
import { TKDCAFLib } from './modules/TKDCAF.wasm';
import { TKDrawLib } from './modules/TKDraw.wasm';
import { TKFeatLib } from './modules/TKFeat.wasm';
import { TKFilletLib } from './modules/TKFillet.wasm';
import { TKG2dLib } from './modules/TKG2d.wasm';
import { TKG3dLib } from './modules/TKG3d.wasm';
import { TKGeomAlgoLib } from './modules/TKGeomAlgo.wasm';
import { TKGeomBaseLib } from './modules/TKGeomBase.wasm';
import { TKHLRLib } from './modules/TKHLR.wasm';
import { TKIGESLib } from './modules/TKIGES.wasm';
import { TKIVtkLib } from './modules/TKIVtk.wasm';
import { TKIVtkDrawLib } from './modules/TKIVtkDraw.wasm';
import { TKLCAFLib } from './modules/TKLCAF.wasm';
import { TKMathLib } from './modules/TKMath.wasm';
import { TKMeshLib } from './modules/TKMesh.wasm';
import { TKMeshVSLib } from './modules/TKMeshVS.wasm';
import { TKOffsetLib } from './modules/TKOffset.wasm';
import { TKOpenGlLib } from './modules/TKOpenGl.wasm';
import { TKPrimLib } from './modules/TKPrim.wasm';
import { TKQADrawLib } from './modules/TKQADraw.wasm';
import { TKRWMeshLib } from './modules/TKRWMesh.wasm';
import { TKSTEPLib } from './modules/TKSTEP.wasm';
import { TKSTEP209Lib } from './modules/TKSTEP209.wasm';
import { TKSTEPAttrLib } from './modules/TKSTEPAttr.wasm';
import { TKSTEPBaseLib } from './modules/TKSTEPBase.wasm';
import { TKSTLLib } from './modules/TKSTL.wasm';
import { TKServiceLib } from './modules/TKService.wasm';
import { TKShHealingLib } from './modules/TKShHealing.wasm';
import { TKStdLib } from './modules/TKStd.wasm';
import { TKStdLLib } from './modules/TKStdL.wasm';
import { TKTObjLib } from './modules/TKTObj.wasm';
import { TKTObjDRAWLib } from './modules/TKTObjDRAW.wasm';
import { TKTopAlgoLib } from './modules/TKTopAlgo.wasm';
import { TKTopTestLib } from './modules/TKTopTest.wasm';
import { TKV3dLib } from './modules/TKV3d.wasm';
import { TKVCAFLib } from './modules/TKVCAF.wasm';
import { TKVRMLLib } from './modules/TKVRML.wasm';
import { TKViewerTestLib } from './modules/TKViewerTest.wasm';
import { TKXCAFLib } from './modules/TKXCAF.wasm';
import { TKXDEDRAWLib } from './modules/TKXDEDRAW.wasm';
import { TKXDEIGESLib } from './modules/TKXDEIGES.wasm';
import { TKXDESTEPLib } from './modules/TKXDESTEP.wasm';
import { TKXMeshLib } from './modules/TKXMesh.wasm';
import { TKXSBaseLib } from './modules/TKXSBase.wasm';
import { TKXSDRAWLib } from './modules/TKXSDRAW.wasm';
import { TKXmlLib } from './modules/TKXml.wasm';
import { TKXmlLLib } from './modules/TKXmlL.wasm';
import { TKXmlTObjLib } from './modules/TKXmlTObj.wasm';
import { TKXmlXCAFLib } from './modules/TKXmlXCAF.wasm';
import { TKernelLib } from './modules/TKernel.wasm';

type ModuleObject = {
  locateFile?: (f: string) => string,
  dynamicLibraries?: string[],
};

type resolved_path = string;
type resolved_node = string;
type resolved_parent_path = string;
type resolved_parent_node = string;

type FS = {
  FS: {
    analyzePath(path: string, dontResolveLastLink?: boolean): {
      isRoot: boolean,
      exists: boolean,
      error: Error,
      name: string,
      path: resolved_path,
      object: resolved_node,
      parentExists: boolean,
      parentPath: resolved_parent_path,
      parentObject: resolved_parent_node
    },
    unlink(path: string): void,
  }
};

type openCascadeInstance = FS & TKBOLib & TKBRepLib & TKBinLib & TKBinLLib & TKBinTObjLib & TKBinXCAFLib & TKBoolLib & TKCAFLib & TKCDFLib & TKD3DHostLib & TKDCAFLib & TKDrawLib & TKFeatLib & TKFilletLib & TKG2dLib & TKG3dLib & TKGeomAlgoLib & TKGeomBaseLib & TKHLRLib & TKIGESLib & TKIVtkLib & TKIVtkDrawLib & TKLCAFLib & TKMathLib & TKMeshLib & TKMeshVSLib & TKOffsetLib & TKOpenGlLib & TKPrimLib & TKQADrawLib & TKRWMeshLib & TKSTEPLib & TKSTEP209Lib & TKSTEPAttrLib & TKSTEPBaseLib & TKSTLLib & TKServiceLib & TKShHealingLib & TKStdLib & TKStdLLib & TKTObjLib & TKTObjDRAWLib & TKTopAlgoLib & TKTopTestLib & TKV3dLib & TKVCAFLib & TKVRMLLib & TKViewerTestLib & TKXCAFLib & TKXDEDRAWLib & TKXDEIGESLib & TKXDESTEPLib & TKXMeshLib & TKXSBaseLib & TKXSDRAWLib & TKXmlLib & TKXmlLLib & TKXmlTObjLib & TKXmlXCAFLib & TKernelLib;

declare function openCascade(module: ModuleObject): Promise<openCascadeInstance>;

export default openCascade;
