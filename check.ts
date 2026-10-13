import type { OpenCascadeInstance } from './dist/opencascade_single.js';
declare const oc: OpenCascadeInstance;
declare const face: any;
declare const loc: any;
const triResult = oc.BRep_Tool.Triangulation(face, loc, 0);
const tri = triResult.result;
type TriType = typeof tri;
const _check: TriType = tri;
tri.isNull();
