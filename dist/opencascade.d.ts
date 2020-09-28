export declare function initOpenCascade(): Promise<opencascade>;

export interface opencascade {
  ready: Promise<opencascade>;
  
  _malloc: (size: number) => number;
  _free: (ptr: number) => void;
  HEAP8: Int8Array;
  HEAP16: Int16Array;
  HEAP32: Int32Array;
  HEAPU8: Uint8Array;
  HEAPU16: Uint16Array;
  HEAPU32: Uint32Array;
  HEAPF32: Float32Array;
  HEAPF64: Float64Array;

  APIHeaderSection_EditHeader: typeof APIHeaderSection_EditHeader;
  APIHeaderSection_MakeHeader: typeof APIHeaderSection_MakeHeader;
  Adaptor2d_Curve2d: typeof Adaptor2d_Curve2d;
  Adaptor2d_HCurve2d: typeof Adaptor2d_HCurve2d;
  Adaptor2d_HLine2d: typeof Adaptor2d_HLine2d;
  Adaptor2d_HOffsetCurve: typeof Adaptor2d_HOffsetCurve;
  Adaptor2d_Line2d: typeof Adaptor2d_Line2d;
  Adaptor2d_OffsetCurve: typeof Adaptor2d_OffsetCurve;
  Adaptor3d_Curve: typeof Adaptor3d_Curve;
  Adaptor3d_CurveOnSurface: typeof Adaptor3d_CurveOnSurface;
  Adaptor3d_HCurve: typeof Adaptor3d_HCurve;
  Adaptor3d_HCurveOnSurface: typeof Adaptor3d_HCurveOnSurface;
  Adaptor3d_HIsoCurve: typeof Adaptor3d_HIsoCurve;
  Adaptor3d_HSurface: typeof Adaptor3d_HSurface;
  Adaptor3d_HSurfaceTool: typeof Adaptor3d_HSurfaceTool;
  Adaptor3d_HVertex: typeof Adaptor3d_HVertex;
  Adaptor3d_InterFunc: typeof Adaptor3d_InterFunc;
  Adaptor3d_IsoCurve: typeof Adaptor3d_IsoCurve;
  Adaptor3d_Surface: typeof Adaptor3d_Surface;
  Adaptor3d_TopolTool: typeof Adaptor3d_TopolTool;
  AdvApp2Var_ApproxAFunc2Var: typeof AdvApp2Var_ApproxAFunc2Var;
  AdvApp2Var_ApproxF2var: typeof AdvApp2Var_ApproxF2var;
  AdvApp2Var_Context: typeof AdvApp2Var_Context;
  AdvApp2Var_Criterion: typeof AdvApp2Var_Criterion;
  AdvApp2Var_Data: typeof AdvApp2Var_Data;
  AdvApp2Var_EvaluatorFunc2Var: typeof AdvApp2Var_EvaluatorFunc2Var;
  AdvApp2Var_MathBase: typeof AdvApp2Var_MathBase;
  AdvApp2Var_Node: typeof AdvApp2Var_Node;
  AdvApp2Var_Patch: typeof AdvApp2Var_Patch;
  AdvApp2Var_SysBase: typeof AdvApp2Var_SysBase;
  AdvApprox_ApproxAFunction: typeof AdvApprox_ApproxAFunction;
  AdvApprox_Cutting: typeof AdvApprox_Cutting;
  AdvApprox_DichoCutting: typeof AdvApprox_DichoCutting;
  AdvApprox_EvaluatorFunction: typeof AdvApprox_EvaluatorFunction;
  AdvApprox_PrefAndRec: typeof AdvApprox_PrefAndRec;
  AdvApprox_PrefCutting: typeof AdvApprox_PrefCutting;
  AdvApprox_SimpleApprox: typeof AdvApprox_SimpleApprox;
  AppBlend_Approx: typeof AppBlend_Approx;
  AppCont_Function: typeof AppCont_Function;
  AppCont_LeastSquare: typeof AppCont_LeastSquare;
  AppParCurves: typeof AppParCurves;
  AppParCurves_ConstraintCouple: typeof AppParCurves_ConstraintCouple;
  AppParCurves_MultiBSpCurve: typeof AppParCurves_MultiBSpCurve;
  AppParCurves_MultiCurve: typeof AppParCurves_MultiCurve;
  AppParCurves_MultiPoint: typeof AppParCurves_MultiPoint;
  AppStdL_Application: typeof AppStdL_Application;
  AppStd_Application: typeof AppStd_Application;
  ApproxInt_KnotTools: typeof ApproxInt_KnotTools;
  ApproxInt_SvSurfaces: typeof ApproxInt_SvSurfaces;
  Approx_Curve2d: typeof Approx_Curve2d;
  Approx_Curve3d: typeof Approx_Curve3d;
  Approx_CurveOnSurface: typeof Approx_CurveOnSurface;
  Approx_CurvilinearParameter: typeof Approx_CurvilinearParameter;
  Approx_CurvlinFunc: typeof Approx_CurvlinFunc;
  Approx_FitAndDivide: typeof Approx_FitAndDivide;
  Approx_FitAndDivide2d: typeof Approx_FitAndDivide2d;
  Approx_MCurvesToBSpCurve: typeof Approx_MCurvesToBSpCurve;
  Approx_SameParameter: typeof Approx_SameParameter;
  Approx_SweepApproximation: typeof Approx_SweepApproximation;
  Approx_SweepFunction: typeof Approx_SweepFunction;
  BRepAdaptor_CompCurve: typeof BRepAdaptor_CompCurve;
  BRepAdaptor_Curve: typeof BRepAdaptor_Curve;
  BRepAdaptor_Curve2d: typeof BRepAdaptor_Curve2d;
  BRepAdaptor_HCompCurve: typeof BRepAdaptor_HCompCurve;
  BRepAdaptor_HCurve: typeof BRepAdaptor_HCurve;
  BRepAdaptor_HCurve2d: typeof BRepAdaptor_HCurve2d;
  BRepAdaptor_HSurface: typeof BRepAdaptor_HSurface;
  BRepAdaptor_Surface: typeof BRepAdaptor_Surface;
  BRepAlgo: typeof BRepAlgo;
  BRepAlgoAPI_Algo: typeof BRepAlgoAPI_Algo;
  BRepAlgoAPI_BooleanOperation: typeof BRepAlgoAPI_BooleanOperation;
  BRepAlgoAPI_BuilderAlgo: typeof BRepAlgoAPI_BuilderAlgo;
  BRepAlgoAPI_Check: typeof BRepAlgoAPI_Check;
  BRepAlgoAPI_Common: typeof BRepAlgoAPI_Common;
  BRepAlgoAPI_Cut: typeof BRepAlgoAPI_Cut;
  BRepAlgoAPI_Defeaturing: typeof BRepAlgoAPI_Defeaturing;
  BRepAlgoAPI_Fuse: typeof BRepAlgoAPI_Fuse;
  BRepAlgoAPI_Section: typeof BRepAlgoAPI_Section;
  BRepAlgoAPI_Splitter: typeof BRepAlgoAPI_Splitter;
  BRepAlgo_AsDes: typeof BRepAlgo_AsDes;
  BRepAlgo_BooleanOperation: typeof BRepAlgo_BooleanOperation;
  BRepAlgo_Common: typeof BRepAlgo_Common;
  BRepAlgo_Cut: typeof BRepAlgo_Cut;
  BRepAlgo_FaceRestrictor: typeof BRepAlgo_FaceRestrictor;
  BRepAlgo_Fuse: typeof BRepAlgo_Fuse;
  BRepAlgo_Image: typeof BRepAlgo_Image;
  BRepAlgo_Loop: typeof BRepAlgo_Loop;
  BRepAlgo_NormalProjection: typeof BRepAlgo_NormalProjection;
  BRepAlgo_Section: typeof BRepAlgo_Section;
  BRepAlgo_Tool: typeof BRepAlgo_Tool;
  BRepApprox_ApproxLine: typeof BRepApprox_ApproxLine;
  BRepApprox_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfApprox: typeof BRepApprox_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfApprox;
  BRepApprox_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfApprox: typeof BRepApprox_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfApprox;
  BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox: typeof BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox;
  BRepApprox_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfApprox: typeof BRepApprox_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfApprox;
  BRepApprox_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfApprox: typeof BRepApprox_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfApprox;
  BRepApprox_MyBSplGradientOfTheComputeLineOfApprox: typeof BRepApprox_MyBSplGradientOfTheComputeLineOfApprox;
  BRepApprox_MyGradientOfTheComputeLineBezierOfApprox: typeof BRepApprox_MyGradientOfTheComputeLineBezierOfApprox;
  BRepApprox_MyGradientbisOfTheComputeLineOfApprox: typeof BRepApprox_MyGradientbisOfTheComputeLineOfApprox;
  BRepApprox_ParFunctionOfMyGradientOfTheComputeLineBezierOfApprox: typeof BRepApprox_ParFunctionOfMyGradientOfTheComputeLineBezierOfApprox;
  BRepApprox_ParFunctionOfMyGradientbisOfTheComputeLineOfApprox: typeof BRepApprox_ParFunctionOfMyGradientbisOfTheComputeLineOfApprox;
  BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox: typeof BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox;
  BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox: typeof BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox;
  BRepApprox_SurfaceTool: typeof BRepApprox_SurfaceTool;
  BRepApprox_TheComputeLineBezierOfApprox: typeof BRepApprox_TheComputeLineBezierOfApprox;
  BRepApprox_TheComputeLineOfApprox: typeof BRepApprox_TheComputeLineOfApprox;
  BRepApprox_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfApprox: typeof BRepApprox_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfApprox;
  BRepApprox_TheImpPrmSvSurfacesOfApprox: typeof BRepApprox_TheImpPrmSvSurfacesOfApprox;
  BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox: typeof BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox;
  BRepApprox_TheMultiLineOfApprox: typeof BRepApprox_TheMultiLineOfApprox;
  BRepApprox_TheMultiLineToolOfApprox: typeof BRepApprox_TheMultiLineToolOfApprox;
  BRepApprox_ThePrmPrmSvSurfacesOfApprox: typeof BRepApprox_ThePrmPrmSvSurfacesOfApprox;
  BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox: typeof BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox;
  BRepBlend_AppFunc: typeof BRepBlend_AppFunc;
  BRepBlend_AppFuncRoot: typeof BRepBlend_AppFuncRoot;
  BRepBlend_AppFuncRst: typeof BRepBlend_AppFuncRst;
  BRepBlend_AppFuncRstRst: typeof BRepBlend_AppFuncRstRst;
  BRepBlend_AppSurf: typeof BRepBlend_AppSurf;
  BRepBlend_AppSurface: typeof BRepBlend_AppSurface;
  BRepBlend_BlendTool: typeof BRepBlend_BlendTool;
  BRepBlend_CSWalking: typeof BRepBlend_CSWalking;
  BRepBlend_CurvPointRadInv: typeof BRepBlend_CurvPointRadInv;
  BRepBlend_Extremity: typeof BRepBlend_Extremity;
  BRepBlend_HCurve2dTool: typeof BRepBlend_HCurve2dTool;
  BRepBlend_HCurveTool: typeof BRepBlend_HCurveTool;
  BRepBlend_Line: typeof BRepBlend_Line;
  BRepBlend_PointOnRst: typeof BRepBlend_PointOnRst;
  BRepBlend_RstRstConstRad: typeof BRepBlend_RstRstConstRad;
  BRepBlend_RstRstEvolRad: typeof BRepBlend_RstRstEvolRad;
  BRepBlend_RstRstLineBuilder: typeof BRepBlend_RstRstLineBuilder;
  BRepBlend_SurfCurvConstRadInv: typeof BRepBlend_SurfCurvConstRadInv;
  BRepBlend_SurfCurvEvolRadInv: typeof BRepBlend_SurfCurvEvolRadInv;
  BRepBlend_SurfPointConstRadInv: typeof BRepBlend_SurfPointConstRadInv;
  BRepBlend_SurfPointEvolRadInv: typeof BRepBlend_SurfPointEvolRadInv;
  BRepBlend_SurfRstConstRad: typeof BRepBlend_SurfRstConstRad;
  BRepBlend_SurfRstEvolRad: typeof BRepBlend_SurfRstEvolRad;
  BRepBlend_SurfRstLineBuilder: typeof BRepBlend_SurfRstLineBuilder;
  BRepBlend_Walking: typeof BRepBlend_Walking;
  BRepBndLib: typeof BRepBndLib;
  BRepBuilderAPI: typeof BRepBuilderAPI;
  BRepBuilderAPI_Collect: typeof BRepBuilderAPI_Collect;
  BRepBuilderAPI_Command: typeof BRepBuilderAPI_Command;
  BRepBuilderAPI_Copy: typeof BRepBuilderAPI_Copy;
  BRepBuilderAPI_FastSewing: typeof BRepBuilderAPI_FastSewing;
  BRepBuilderAPI_FindPlane: typeof BRepBuilderAPI_FindPlane;
  BRepBuilderAPI_GTransform: typeof BRepBuilderAPI_GTransform;
  BRepBuilderAPI_MakeEdge: typeof BRepBuilderAPI_MakeEdge;
  BRepBuilderAPI_MakeEdge2d: typeof BRepBuilderAPI_MakeEdge2d;
  BRepBuilderAPI_MakeFace: typeof BRepBuilderAPI_MakeFace;
  BRepBuilderAPI_MakePolygon: typeof BRepBuilderAPI_MakePolygon;
  BRepBuilderAPI_MakeShape: typeof BRepBuilderAPI_MakeShape;
  BRepBuilderAPI_MakeShell: typeof BRepBuilderAPI_MakeShell;
  BRepBuilderAPI_MakeSolid: typeof BRepBuilderAPI_MakeSolid;
  BRepBuilderAPI_MakeVertex: typeof BRepBuilderAPI_MakeVertex;
  BRepBuilderAPI_MakeWire: typeof BRepBuilderAPI_MakeWire;
  BRepBuilderAPI_ModifyShape: typeof BRepBuilderAPI_ModifyShape;
  BRepBuilderAPI_NurbsConvert: typeof BRepBuilderAPI_NurbsConvert;
  BRepBuilderAPI_Sewing: typeof BRepBuilderAPI_Sewing;
  BRepBuilderAPI_Transform: typeof BRepBuilderAPI_Transform;
  BRepBuilderAPI_VertexInspector: typeof BRepBuilderAPI_VertexInspector;
  BRepCheck: typeof BRepCheck;
  BRepCheck_Analyzer: typeof BRepCheck_Analyzer;
  BRepCheck_Edge: typeof BRepCheck_Edge;
  BRepCheck_Face: typeof BRepCheck_Face;
  BRepCheck_Result: typeof BRepCheck_Result;
  BRepCheck_Shell: typeof BRepCheck_Shell;
  BRepCheck_Solid: typeof BRepCheck_Solid;
  BRepCheck_Vertex: typeof BRepCheck_Vertex;
  BRepCheck_Wire: typeof BRepCheck_Wire;
  BRepClass3d: typeof BRepClass3d;
  BRepClass3d_Intersector3d: typeof BRepClass3d_Intersector3d;
  BRepClass3d_SClassifier: typeof BRepClass3d_SClassifier;
  BRepClass3d_SolidClassifier: typeof BRepClass3d_SolidClassifier;
  BRepClass3d_SolidExplorer: typeof BRepClass3d_SolidExplorer;
  BRepClass3d_SolidPassiveClassifier: typeof BRepClass3d_SolidPassiveClassifier;
  BRepClass_Edge: typeof BRepClass_Edge;
  BRepClass_FClass2dOfFClassifier: typeof BRepClass_FClass2dOfFClassifier;
  BRepClass_FClassifier: typeof BRepClass_FClassifier;
  BRepClass_FaceClassifier: typeof BRepClass_FaceClassifier;
  BRepClass_FaceExplorer: typeof BRepClass_FaceExplorer;
  BRepClass_FacePassiveClassifier: typeof BRepClass_FacePassiveClassifier;
  BRepClass_Intersector: typeof BRepClass_Intersector;
  BRepExtrema_DistShapeShape: typeof BRepExtrema_DistShapeShape;
  BRepExtrema_DistanceSS: typeof BRepExtrema_DistanceSS;
  BRepExtrema_ExtCC: typeof BRepExtrema_ExtCC;
  BRepExtrema_ExtCF: typeof BRepExtrema_ExtCF;
  BRepExtrema_ExtFF: typeof BRepExtrema_ExtFF;
  BRepExtrema_ExtPC: typeof BRepExtrema_ExtPC;
  BRepExtrema_ExtPF: typeof BRepExtrema_ExtPF;
  BRepExtrema_Poly: typeof BRepExtrema_Poly;
  BRepExtrema_SelfIntersection: typeof BRepExtrema_SelfIntersection;
  BRepExtrema_ShapeProximity: typeof BRepExtrema_ShapeProximity;
  BRepExtrema_SolutionElem: typeof BRepExtrema_SolutionElem;
  BRepExtrema_TriangleSet: typeof BRepExtrema_TriangleSet;
  BRepExtrema_UnCompatibleShape: typeof BRepExtrema_UnCompatibleShape;
  BRepFeat_Builder: typeof BRepFeat_Builder;
  BRepFeat_Form: typeof BRepFeat_Form;
  BRepFeat_Gluer: typeof BRepFeat_Gluer;
  BRepFeat_MakeCylindricalHole: typeof BRepFeat_MakeCylindricalHole;
  BRepFeat_MakeDPrism: typeof BRepFeat_MakeDPrism;
  BRepFeat_MakePipe: typeof BRepFeat_MakePipe;
  BRepFeat_MakePrism: typeof BRepFeat_MakePrism;
  BRepFeat_MakeRevol: typeof BRepFeat_MakeRevol;
  BRepFeat_MakeRevolutionForm: typeof BRepFeat_MakeRevolutionForm;
  BRepFeat_RibSlot: typeof BRepFeat_RibSlot;
  BRepFeat_SplitShape: typeof BRepFeat_SplitShape;
  BRepFill: typeof BRepFill;
  BRepFill_ACRLaw: typeof BRepFill_ACRLaw;
  BRepFill_AdvancedEvolved: typeof BRepFill_AdvancedEvolved;
  BRepFill_ApproxSeewing: typeof BRepFill_ApproxSeewing;
  BRepFill_CompatibleWires: typeof BRepFill_CompatibleWires;
  BRepFill_ComputeCLine: typeof BRepFill_ComputeCLine;
  BRepFill_CurveConstraint: typeof BRepFill_CurveConstraint;
  BRepFill_Draft: typeof BRepFill_Draft;
  BRepFill_DraftLaw: typeof BRepFill_DraftLaw;
  BRepFill_Edge3DLaw: typeof BRepFill_Edge3DLaw;
  BRepFill_EdgeFaceAndOrder: typeof BRepFill_EdgeFaceAndOrder;
  BRepFill_EdgeOnSurfLaw: typeof BRepFill_EdgeOnSurfLaw;
  BRepFill_Evolved: typeof BRepFill_Evolved;
  BRepFill_FaceAndOrder: typeof BRepFill_FaceAndOrder;
  BRepFill_Filling: typeof BRepFill_Filling;
  BRepFill_Generator: typeof BRepFill_Generator;
  BRepFill_LocationLaw: typeof BRepFill_LocationLaw;
  BRepFill_MultiLine: typeof BRepFill_MultiLine;
  BRepFill_NSections: typeof BRepFill_NSections;
  BRepFill_OffsetAncestors: typeof BRepFill_OffsetAncestors;
  BRepFill_OffsetWire: typeof BRepFill_OffsetWire;
  BRepFill_Pipe: typeof BRepFill_Pipe;
  BRepFill_PipeShell: typeof BRepFill_PipeShell;
  BRepFill_Section: typeof BRepFill_Section;
  BRepFill_SectionLaw: typeof BRepFill_SectionLaw;
  BRepFill_SectionPlacement: typeof BRepFill_SectionPlacement;
  BRepFill_ShapeLaw: typeof BRepFill_ShapeLaw;
  BRepFill_Sweep: typeof BRepFill_Sweep;
  BRepFill_TrimEdgeTool: typeof BRepFill_TrimEdgeTool;
  BRepFill_TrimShellCorner: typeof BRepFill_TrimShellCorner;
  BRepFill_TrimSurfaceTool: typeof BRepFill_TrimSurfaceTool;
  BRepFilletAPI_LocalOperation: typeof BRepFilletAPI_LocalOperation;
  BRepFilletAPI_MakeChamfer: typeof BRepFilletAPI_MakeChamfer;
  BRepFilletAPI_MakeFillet: typeof BRepFilletAPI_MakeFillet;
  BRepFilletAPI_MakeFillet2d: typeof BRepFilletAPI_MakeFillet2d;
  BRepGProp: typeof BRepGProp;
  BRepGProp_Cinert: typeof BRepGProp_Cinert;
  BRepGProp_Domain: typeof BRepGProp_Domain;
  BRepGProp_EdgeTool: typeof BRepGProp_EdgeTool;
  BRepGProp_Face: typeof BRepGProp_Face;
  BRepGProp_MeshCinert: typeof BRepGProp_MeshCinert;
  BRepGProp_MeshProps: typeof BRepGProp_MeshProps;
  BRepGProp_Sinert: typeof BRepGProp_Sinert;
  BRepGProp_TFunction: typeof BRepGProp_TFunction;
  BRepGProp_UFunction: typeof BRepGProp_UFunction;
  BRepGProp_Vinert: typeof BRepGProp_Vinert;
  BRepIntCurveSurface_Inter: typeof BRepIntCurveSurface_Inter;
  BRepLProp: typeof BRepLProp;
  BRepLProp_CLProps: typeof BRepLProp_CLProps;
  BRepLProp_CurveTool: typeof BRepLProp_CurveTool;
  BRepLProp_SLProps: typeof BRepLProp_SLProps;
  BRepLProp_SurfaceTool: typeof BRepLProp_SurfaceTool;
  BRepLib: typeof BRepLib;
  BRepLib_CheckCurveOnSurface: typeof BRepLib_CheckCurveOnSurface;
  BRepLib_Command: typeof BRepLib_Command;
  BRepLib_FindSurface: typeof BRepLib_FindSurface;
  BRepLib_FuseEdges: typeof BRepLib_FuseEdges;
  BRepLib_MakeEdge: typeof BRepLib_MakeEdge;
  BRepLib_MakeEdge2d: typeof BRepLib_MakeEdge2d;
  BRepLib_MakeFace: typeof BRepLib_MakeFace;
  BRepLib_MakePolygon: typeof BRepLib_MakePolygon;
  BRepLib_MakeShape: typeof BRepLib_MakeShape;
  BRepLib_MakeShell: typeof BRepLib_MakeShell;
  BRepLib_MakeSolid: typeof BRepLib_MakeSolid;
  BRepLib_MakeVertex: typeof BRepLib_MakeVertex;
  BRepLib_MakeWire: typeof BRepLib_MakeWire;
  BRepMAT2d_BisectingLocus: typeof BRepMAT2d_BisectingLocus;
  BRepMAT2d_Explorer: typeof BRepMAT2d_Explorer;
  BRepMAT2d_LinkTopoBilo: typeof BRepMAT2d_LinkTopoBilo;
  BRepMesh_BaseMeshAlgo: typeof BRepMesh_BaseMeshAlgo;
  BRepMesh_BoundaryParamsRangeSplitter: typeof BRepMesh_BoundaryParamsRangeSplitter;
  BRepMesh_Circle: typeof BRepMesh_Circle;
  BRepMesh_CircleInspector: typeof BRepMesh_CircleInspector;
  BRepMesh_CircleTool: typeof BRepMesh_CircleTool;
  BRepMesh_Classifier: typeof BRepMesh_Classifier;
  BRepMesh_ConeRangeSplitter: typeof BRepMesh_ConeRangeSplitter;
  BRepMesh_ConstrainedBaseMeshAlgo: typeof BRepMesh_ConstrainedBaseMeshAlgo;
  BRepMesh_Context: typeof BRepMesh_Context;
  BRepMesh_CurveTessellator: typeof BRepMesh_CurveTessellator;
  BRepMesh_CustomBaseMeshAlgo: typeof BRepMesh_CustomBaseMeshAlgo;
  BRepMesh_CylinderRangeSplitter: typeof BRepMesh_CylinderRangeSplitter;
  BRepMesh_DataStructureOfDelaun: typeof BRepMesh_DataStructureOfDelaun;
  BRepMesh_DefaultRangeSplitter: typeof BRepMesh_DefaultRangeSplitter;
  BRepMesh_Deflection: typeof BRepMesh_Deflection;
  BRepMesh_Delaun: typeof BRepMesh_Delaun;
  BRepMesh_DelaunayBaseMeshAlgo: typeof BRepMesh_DelaunayBaseMeshAlgo;
  BRepMesh_DiscretFactory: typeof BRepMesh_DiscretFactory;
  BRepMesh_DiscretRoot: typeof BRepMesh_DiscretRoot;
  BRepMesh_Edge: typeof BRepMesh_Edge;
  BRepMesh_EdgeDiscret: typeof BRepMesh_EdgeDiscret;
  BRepMesh_EdgeTessellationExtractor: typeof BRepMesh_EdgeTessellationExtractor;
  BRepMesh_FaceChecker: typeof BRepMesh_FaceChecker;
  BRepMesh_FaceDiscret: typeof BRepMesh_FaceDiscret;
  BRepMesh_FastDiscret: typeof BRepMesh_FastDiscret;
  BRepMesh_GeomTool: typeof BRepMesh_GeomTool;
  BRepMesh_IncrementalMesh: typeof BRepMesh_IncrementalMesh;
  BRepMesh_MeshAlgoFactory: typeof BRepMesh_MeshAlgoFactory;
  BRepMesh_MeshTool: typeof BRepMesh_MeshTool;
  BRepMesh_ModelBuilder: typeof BRepMesh_ModelBuilder;
  BRepMesh_ModelHealer: typeof BRepMesh_ModelHealer;
  BRepMesh_ModelPostProcessor: typeof BRepMesh_ModelPostProcessor;
  BRepMesh_ModelPreProcessor: typeof BRepMesh_ModelPreProcessor;
  BRepMesh_NURBSRangeSplitter: typeof BRepMesh_NURBSRangeSplitter;
  BRepMesh_OrientedEdge: typeof BRepMesh_OrientedEdge;
  BRepMesh_PairOfIndex: typeof BRepMesh_PairOfIndex;
  BRepMesh_SelectorOfDataStructureOfDelaun: typeof BRepMesh_SelectorOfDataStructureOfDelaun;
  BRepMesh_ShapeTool: typeof BRepMesh_ShapeTool;
  BRepMesh_ShapeVisitor: typeof BRepMesh_ShapeVisitor;
  BRepMesh_SphereRangeSplitter: typeof BRepMesh_SphereRangeSplitter;
  BRepMesh_TorusRangeSplitter: typeof BRepMesh_TorusRangeSplitter;
  BRepMesh_Triangle: typeof BRepMesh_Triangle;
  BRepMesh_UVParamRangeSplitter: typeof BRepMesh_UVParamRangeSplitter;
  BRepMesh_Vertex: typeof BRepMesh_Vertex;
  BRepMesh_VertexInspector: typeof BRepMesh_VertexInspector;
  BRepMesh_VertexTool: typeof BRepMesh_VertexTool;
  BRepOffset: typeof BRepOffset;
  BRepOffsetAPI_DraftAngle: typeof BRepOffsetAPI_DraftAngle;
  BRepOffsetAPI_MakeDraft: typeof BRepOffsetAPI_MakeDraft;
  BRepOffsetAPI_MakeEvolved: typeof BRepOffsetAPI_MakeEvolved;
  BRepOffsetAPI_MakeFilling: typeof BRepOffsetAPI_MakeFilling;
  BRepOffsetAPI_MakeOffset: typeof BRepOffsetAPI_MakeOffset;
  BRepOffsetAPI_MakeOffsetShape: typeof BRepOffsetAPI_MakeOffsetShape;
  BRepOffsetAPI_MakePipe: typeof BRepOffsetAPI_MakePipe;
  BRepOffsetAPI_MakePipeShell: typeof BRepOffsetAPI_MakePipeShell;
  BRepOffsetAPI_MakeThickSolid: typeof BRepOffsetAPI_MakeThickSolid;
  BRepOffsetAPI_MiddlePath: typeof BRepOffsetAPI_MiddlePath;
  BRepOffsetAPI_NormalProjection: typeof BRepOffsetAPI_NormalProjection;
  BRepOffsetAPI_ThruSections: typeof BRepOffsetAPI_ThruSections;
  BRepOffset_Analyse: typeof BRepOffset_Analyse;
  BRepOffset_Inter2d: typeof BRepOffset_Inter2d;
  BRepOffset_Inter3d: typeof BRepOffset_Inter3d;
  BRepOffset_Interval: typeof BRepOffset_Interval;
  BRepOffset_MakeLoops: typeof BRepOffset_MakeLoops;
  BRepOffset_MakeSimpleOffset: typeof BRepOffset_MakeSimpleOffset;
  BRepOffset_Offset: typeof BRepOffset_Offset;
  BRepOffset_SimpleOffset: typeof BRepOffset_SimpleOffset;
  BRepOffset_Tool: typeof BRepOffset_Tool;
  BRepPrimAPI_MakeBox: typeof BRepPrimAPI_MakeBox;
  BRepPrimAPI_MakeCone: typeof BRepPrimAPI_MakeCone;
  BRepPrimAPI_MakeCylinder: typeof BRepPrimAPI_MakeCylinder;
  BRepPrimAPI_MakeHalfSpace: typeof BRepPrimAPI_MakeHalfSpace;
  BRepPrimAPI_MakeOneAxis: typeof BRepPrimAPI_MakeOneAxis;
  BRepPrimAPI_MakePrism: typeof BRepPrimAPI_MakePrism;
  BRepPrimAPI_MakeRevol: typeof BRepPrimAPI_MakeRevol;
  BRepPrimAPI_MakeRevolution: typeof BRepPrimAPI_MakeRevolution;
  BRepPrimAPI_MakeSphere: typeof BRepPrimAPI_MakeSphere;
  BRepPrimAPI_MakeSweep: typeof BRepPrimAPI_MakeSweep;
  BRepPrimAPI_MakeTorus: typeof BRepPrimAPI_MakeTorus;
  BRepPrimAPI_MakeWedge: typeof BRepPrimAPI_MakeWedge;
  BRepPrim_Builder: typeof BRepPrim_Builder;
  BRepPrim_Cone: typeof BRepPrim_Cone;
  BRepPrim_Cylinder: typeof BRepPrim_Cylinder;
  BRepPrim_FaceBuilder: typeof BRepPrim_FaceBuilder;
  BRepPrim_GWedge: typeof BRepPrim_GWedge;
  BRepPrim_OneAxis: typeof BRepPrim_OneAxis;
  BRepPrim_Revolution: typeof BRepPrim_Revolution;
  BRepPrim_Sphere: typeof BRepPrim_Sphere;
  BRepPrim_Torus: typeof BRepPrim_Torus;
  BRepPrim_Wedge: typeof BRepPrim_Wedge;
  BRepProj_Projection: typeof BRepProj_Projection;
  BRepSweep_Builder: typeof BRepSweep_Builder;
  BRepSweep_Iterator: typeof BRepSweep_Iterator;
  BRepSweep_NumLinearRegularSweep: typeof BRepSweep_NumLinearRegularSweep;
  BRepSweep_Prism: typeof BRepSweep_Prism;
  BRepSweep_Revol: typeof BRepSweep_Revol;
  BRepSweep_Rotation: typeof BRepSweep_Rotation;
  BRepSweep_Tool: typeof BRepSweep_Tool;
  BRepSweep_Translation: typeof BRepSweep_Translation;
  BRepSweep_Trsf: typeof BRepSweep_Trsf;
  BRepToIGESBRep_Entity: typeof BRepToIGESBRep_Entity;
  BRepToIGES_BREntity: typeof BRepToIGES_BREntity;
  BRepToIGES_BRShell: typeof BRepToIGES_BRShell;
  BRepToIGES_BRSolid: typeof BRepToIGES_BRSolid;
  BRepToIGES_BRWire: typeof BRepToIGES_BRWire;
  BRepTools: typeof BRepTools;
  BRepTools_GTrsfModification: typeof BRepTools_GTrsfModification;
  BRepTools_History: typeof BRepTools_History;
  BRepTools_Modification: typeof BRepTools_Modification;
  BRepTools_Modifier: typeof BRepTools_Modifier;
  BRepTools_NurbsConvertModification: typeof BRepTools_NurbsConvertModification;
  BRepTools_Quilt: typeof BRepTools_Quilt;
  BRepTools_ReShape: typeof BRepTools_ReShape;
  BRepTools_ShapeSet: typeof BRepTools_ShapeSet;
  BRepTools_Substitution: typeof BRepTools_Substitution;
  BRepTools_TrsfModification: typeof BRepTools_TrsfModification;
  BRepTools_WireExplorer: typeof BRepTools_WireExplorer;
  BRepTopAdaptor_FClass2d: typeof BRepTopAdaptor_FClass2d;
  BRepTopAdaptor_HVertex: typeof BRepTopAdaptor_HVertex;
  BRepTopAdaptor_Tool: typeof BRepTopAdaptor_Tool;
  BRepTopAdaptor_TopolTool: typeof BRepTopAdaptor_TopolTool;
  BRep_Builder: typeof BRep_Builder;
  BRep_Curve3D: typeof BRep_Curve3D;
  BRep_CurveOn2Surfaces: typeof BRep_CurveOn2Surfaces;
  BRep_CurveOnClosedSurface: typeof BRep_CurveOnClosedSurface;
  BRep_CurveOnSurface: typeof BRep_CurveOnSurface;
  BRep_CurveRepresentation: typeof BRep_CurveRepresentation;
  BRep_GCurve: typeof BRep_GCurve;
  BRep_PointOnCurve: typeof BRep_PointOnCurve;
  BRep_PointOnCurveOnSurface: typeof BRep_PointOnCurveOnSurface;
  BRep_PointOnSurface: typeof BRep_PointOnSurface;
  BRep_PointRepresentation: typeof BRep_PointRepresentation;
  BRep_PointsOnSurface: typeof BRep_PointsOnSurface;
  BRep_Polygon3D: typeof BRep_Polygon3D;
  BRep_PolygonOnClosedSurface: typeof BRep_PolygonOnClosedSurface;
  BRep_PolygonOnClosedTriangulation: typeof BRep_PolygonOnClosedTriangulation;
  BRep_PolygonOnSurface: typeof BRep_PolygonOnSurface;
  BRep_PolygonOnTriangulation: typeof BRep_PolygonOnTriangulation;
  BRep_TEdge: typeof BRep_TEdge;
  BRep_TFace: typeof BRep_TFace;
  BRep_TVertex: typeof BRep_TVertex;
  BRep_Tool: typeof BRep_Tool;
  BSplCLib_Cache: typeof BSplCLib_Cache;
  BSplCLib_EvaluatorFunction: typeof BSplCLib_EvaluatorFunction;
  BSplSLib: typeof BSplSLib;
  BSplSLib_Cache: typeof BSplSLib_Cache;
  BSplSLib_EvaluatorFunction: typeof BSplSLib_EvaluatorFunction;
  BVH_BuildQueue: typeof BVH_BuildQueue;
  BVH_BuildThread: typeof BVH_BuildThread;
  BVH_BuilderTransient: typeof BVH_BuilderTransient;
  BVH_ObjectTransient: typeof BVH_ObjectTransient;
  BVH_Properties: typeof BVH_Properties;
  BVH_TreeBaseTransient: typeof BVH_TreeBaseTransient;
  BiTgte_Blend: typeof BiTgte_Blend;
  BiTgte_CurveOnEdge: typeof BiTgte_CurveOnEdge;
  BiTgte_CurveOnVertex: typeof BiTgte_CurveOnVertex;
  BiTgte_HCurveOnEdge: typeof BiTgte_HCurveOnEdge;
  BiTgte_HCurveOnVertex: typeof BiTgte_HCurveOnVertex;
  Bisector: typeof Bisector;
  Bisector_Bisec: typeof Bisector_Bisec;
  Bisector_BisecAna: typeof Bisector_BisecAna;
  Bisector_BisecCC: typeof Bisector_BisecCC;
  Bisector_BisecPC: typeof Bisector_BisecPC;
  Bisector_Curve: typeof Bisector_Curve;
  Bisector_FunctionH: typeof Bisector_FunctionH;
  Bisector_FunctionInter: typeof Bisector_FunctionInter;
  Bisector_Inter: typeof Bisector_Inter;
  Bisector_PointOnBis: typeof Bisector_PointOnBis;
  Bisector_PolyBis: typeof Bisector_PolyBis;
  BlendFunc_CSCircular: typeof BlendFunc_CSCircular;
  BlendFunc_CSConstRad: typeof BlendFunc_CSConstRad;
  BlendFunc_ChAsym: typeof BlendFunc_ChAsym;
  BlendFunc_ChAsymInv: typeof BlendFunc_ChAsymInv;
  BlendFunc_ChamfInv: typeof BlendFunc_ChamfInv;
  BlendFunc_Chamfer: typeof BlendFunc_Chamfer;
  BlendFunc_ConstRad: typeof BlendFunc_ConstRad;
  BlendFunc_ConstRadInv: typeof BlendFunc_ConstRadInv;
  BlendFunc_ConstThroat: typeof BlendFunc_ConstThroat;
  BlendFunc_ConstThroatInv: typeof BlendFunc_ConstThroatInv;
  BlendFunc_ConstThroatWithPenetration: typeof BlendFunc_ConstThroatWithPenetration;
  BlendFunc_ConstThroatWithPenetrationInv: typeof BlendFunc_ConstThroatWithPenetrationInv;
  BlendFunc_Corde: typeof BlendFunc_Corde;
  BlendFunc_EvolRad: typeof BlendFunc_EvolRad;
  BlendFunc_EvolRadInv: typeof BlendFunc_EvolRadInv;
  BlendFunc_GenChamfInv: typeof BlendFunc_GenChamfInv;
  BlendFunc_GenChamfer: typeof BlendFunc_GenChamfer;
  BlendFunc_Ruled: typeof BlendFunc_Ruled;
  BlendFunc_RuledInv: typeof BlendFunc_RuledInv;
  BlendFunc_Tensor: typeof BlendFunc_Tensor;
  Blend_AppFunction: typeof Blend_AppFunction;
  Blend_CSFunction: typeof Blend_CSFunction;
  Blend_CurvPointFuncInv: typeof Blend_CurvPointFuncInv;
  Blend_FuncInv: typeof Blend_FuncInv;
  Blend_Function: typeof Blend_Function;
  Blend_Point: typeof Blend_Point;
  Blend_RstRstFunction: typeof Blend_RstRstFunction;
  Blend_SurfCurvFuncInv: typeof Blend_SurfCurvFuncInv;
  Blend_SurfPointFuncInv: typeof Blend_SurfPointFuncInv;
  Blend_SurfRstFunction: typeof Blend_SurfRstFunction;
  BndLib: typeof BndLib;
  BndLib_Add2dCurve: typeof BndLib_Add2dCurve;
  BndLib_Add3dCurve: typeof BndLib_Add3dCurve;
  BndLib_AddSurface: typeof BndLib_AddSurface;
  Bnd_B2d: typeof Bnd_B2d;
  Bnd_B2f: typeof Bnd_B2f;
  Bnd_B3d: typeof Bnd_B3d;
  Bnd_B3f: typeof Bnd_B3f;
  Bnd_BoundSortBox: typeof Bnd_BoundSortBox;
  Bnd_BoundSortBox2d: typeof Bnd_BoundSortBox2d;
  Bnd_Box: typeof Bnd_Box;
  Bnd_Box2d: typeof Bnd_Box2d;
  Bnd_OBB: typeof Bnd_OBB;
  Bnd_Range: typeof Bnd_Range;
  Bnd_Sphere: typeof Bnd_Sphere;
  Bnd_Tools: typeof Bnd_Tools;
  CDF: typeof CDF;
  CDF_Application: typeof CDF_Application;
  CDF_Directory: typeof CDF_Directory;
  CDF_DirectoryIterator: typeof CDF_DirectoryIterator;
  CDF_FWOSDriver: typeof CDF_FWOSDriver;
  CDF_MetaDataDriver: typeof CDF_MetaDataDriver;
  CDF_MetaDataDriverError: typeof CDF_MetaDataDriverError;
  CDF_MetaDataDriverFactory: typeof CDF_MetaDataDriverFactory;
  CDF_Session: typeof CDF_Session;
  CDF_Store: typeof CDF_Store;
  CDF_StoreList: typeof CDF_StoreList;
  CDM_Application: typeof CDM_Application;
  CDM_Document: typeof CDM_Document;
  CDM_MetaData: typeof CDM_MetaData;
  CDM_Reference: typeof CDM_Reference;
  CDM_ReferenceIterator: typeof CDM_ReferenceIterator;
  CPnts_AbscissaPoint: typeof CPnts_AbscissaPoint;
  CPnts_MyGaussFunction: typeof CPnts_MyGaussFunction;
  CPnts_MyRootFunction: typeof CPnts_MyRootFunction;
  CPnts_UniformDeflection: typeof CPnts_UniformDeflection;
  CSLib: typeof CSLib;
  CSLib_Class2d: typeof CSLib_Class2d;
  CSLib_NormalPolyDef: typeof CSLib_NormalPolyDef;
  ChFi2d: typeof ChFi2d;
  ChFi2d_AnaFilletAlgo: typeof ChFi2d_AnaFilletAlgo;
  ChFi2d_Builder: typeof ChFi2d_Builder;
  ChFi2d_ChamferAPI: typeof ChFi2d_ChamferAPI;
  ChFi2d_FilletAPI: typeof ChFi2d_FilletAPI;
  ChFi2d_FilletAlgo: typeof ChFi2d_FilletAlgo;
  ChFi3d: typeof ChFi3d;
  ChFi3d_Builder: typeof ChFi3d_Builder;
  ChFi3d_ChBuilder: typeof ChFi3d_ChBuilder;
  ChFi3d_FilBuilder: typeof ChFi3d_FilBuilder;
  ChFi3d_SearchSing: typeof ChFi3d_SearchSing;
  ChFiDS_ChamfSpine: typeof ChFiDS_ChamfSpine;
  ChFiDS_CircSection: typeof ChFiDS_CircSection;
  ChFiDS_CommonPoint: typeof ChFiDS_CommonPoint;
  ChFiDS_ElSpine: typeof ChFiDS_ElSpine;
  ChFiDS_FaceInterference: typeof ChFiDS_FaceInterference;
  ChFiDS_FilSpine: typeof ChFiDS_FilSpine;
  ChFiDS_HElSpine: typeof ChFiDS_HElSpine;
  ChFiDS_Map: typeof ChFiDS_Map;
  ChFiDS_Regul: typeof ChFiDS_Regul;
  ChFiDS_Spine: typeof ChFiDS_Spine;
  ChFiDS_Stripe: typeof ChFiDS_Stripe;
  ChFiDS_StripeMap: typeof ChFiDS_StripeMap;
  ChFiDS_SurfData: typeof ChFiDS_SurfData;
  ChFiKPart_ComputeData: typeof ChFiKPart_ComputeData;
  Contap_ArcFunction: typeof Contap_ArcFunction;
  Contap_ContAna: typeof Contap_ContAna;
  Contap_Contour: typeof Contap_Contour;
  Contap_HContTool: typeof Contap_HContTool;
  Contap_HCurve2dTool: typeof Contap_HCurve2dTool;
  Contap_Line: typeof Contap_Line;
  Contap_Point: typeof Contap_Point;
  Contap_SurfFunction: typeof Contap_SurfFunction;
  Contap_SurfProps: typeof Contap_SurfProps;
  Contap_TheIWLineOfTheIWalking: typeof Contap_TheIWLineOfTheIWalking;
  Contap_TheIWalking: typeof Contap_TheIWalking;
  Contap_ThePathPointOfTheSearch: typeof Contap_ThePathPointOfTheSearch;
  Contap_TheSearch: typeof Contap_TheSearch;
  Contap_TheSearchInside: typeof Contap_TheSearchInside;
  Contap_TheSegmentOfTheSearch: typeof Contap_TheSegmentOfTheSearch;
  Convert_CircleToBSplineCurve: typeof Convert_CircleToBSplineCurve;
  Convert_CompBezierCurves2dToBSplineCurve2d: typeof Convert_CompBezierCurves2dToBSplineCurve2d;
  Convert_CompBezierCurvesToBSplineCurve: typeof Convert_CompBezierCurvesToBSplineCurve;
  Convert_CompPolynomialToPoles: typeof Convert_CompPolynomialToPoles;
  Convert_ConeToBSplineSurface: typeof Convert_ConeToBSplineSurface;
  Convert_ConicToBSplineCurve: typeof Convert_ConicToBSplineCurve;
  Convert_CylinderToBSplineSurface: typeof Convert_CylinderToBSplineSurface;
  Convert_ElementarySurfaceToBSplineSurface: typeof Convert_ElementarySurfaceToBSplineSurface;
  Convert_EllipseToBSplineCurve: typeof Convert_EllipseToBSplineCurve;
  Convert_GridPolynomialToPoles: typeof Convert_GridPolynomialToPoles;
  Convert_HyperbolaToBSplineCurve: typeof Convert_HyperbolaToBSplineCurve;
  Convert_ParabolaToBSplineCurve: typeof Convert_ParabolaToBSplineCurve;
  Convert_SphereToBSplineSurface: typeof Convert_SphereToBSplineSurface;
  Convert_TorusToBSplineSurface: typeof Convert_TorusToBSplineSurface;
  Draft: typeof Draft;
  Draft_EdgeInfo: typeof Draft_EdgeInfo;
  Draft_FaceInfo: typeof Draft_FaceInfo;
  Draft_Modification: typeof Draft_Modification;
  Draft_VertexInfo: typeof Draft_VertexInfo;
  DsgPrs: typeof DsgPrs;
  DsgPrs_AnglePresentation: typeof DsgPrs_AnglePresentation;
  DsgPrs_Chamf2dPresentation: typeof DsgPrs_Chamf2dPresentation;
  DsgPrs_ConcentricPresentation: typeof DsgPrs_ConcentricPresentation;
  DsgPrs_DatumPrs: typeof DsgPrs_DatumPrs;
  DsgPrs_DiameterPresentation: typeof DsgPrs_DiameterPresentation;
  DsgPrs_EllipseRadiusPresentation: typeof DsgPrs_EllipseRadiusPresentation;
  DsgPrs_EqualDistancePresentation: typeof DsgPrs_EqualDistancePresentation;
  DsgPrs_EqualRadiusPresentation: typeof DsgPrs_EqualRadiusPresentation;
  DsgPrs_FilletRadiusPresentation: typeof DsgPrs_FilletRadiusPresentation;
  DsgPrs_FixPresentation: typeof DsgPrs_FixPresentation;
  DsgPrs_IdenticPresentation: typeof DsgPrs_IdenticPresentation;
  DsgPrs_LengthPresentation: typeof DsgPrs_LengthPresentation;
  DsgPrs_MidPointPresentation: typeof DsgPrs_MidPointPresentation;
  DsgPrs_OffsetPresentation: typeof DsgPrs_OffsetPresentation;
  DsgPrs_ParalPresentation: typeof DsgPrs_ParalPresentation;
  DsgPrs_PerpenPresentation: typeof DsgPrs_PerpenPresentation;
  DsgPrs_ShadedPlanePresentation: typeof DsgPrs_ShadedPlanePresentation;
  DsgPrs_ShapeDirPresentation: typeof DsgPrs_ShapeDirPresentation;
  DsgPrs_SymbPresentation: typeof DsgPrs_SymbPresentation;
  DsgPrs_SymmetricPresentation: typeof DsgPrs_SymmetricPresentation;
  DsgPrs_TangentPresentation: typeof DsgPrs_TangentPresentation;
  DsgPrs_XYZAxisPresentation: typeof DsgPrs_XYZAxisPresentation;
  DsgPrs_XYZPlanePresentation: typeof DsgPrs_XYZPlanePresentation;
  ElCLib: typeof ElCLib;
  ElSLib: typeof ElSLib;
  Expr: typeof Expr;
  ExprIntrp: typeof ExprIntrp;
  ExprIntrp_Analysis: typeof ExprIntrp_Analysis;
  ExprIntrp_GenExp: typeof ExprIntrp_GenExp;
  ExprIntrp_GenFct: typeof ExprIntrp_GenFct;
  ExprIntrp_GenRel: typeof ExprIntrp_GenRel;
  ExprIntrp_Generator: typeof ExprIntrp_Generator;
  ExprIntrp_SyntaxError: typeof ExprIntrp_SyntaxError;
  Expr_Absolute: typeof Expr_Absolute;
  Expr_ArcCosine: typeof Expr_ArcCosine;
  Expr_ArcSine: typeof Expr_ArcSine;
  Expr_ArcTangent: typeof Expr_ArcTangent;
  Expr_ArgCosh: typeof Expr_ArgCosh;
  Expr_ArgSinh: typeof Expr_ArgSinh;
  Expr_ArgTanh: typeof Expr_ArgTanh;
  Expr_BinaryExpression: typeof Expr_BinaryExpression;
  Expr_BinaryFunction: typeof Expr_BinaryFunction;
  Expr_Cosh: typeof Expr_Cosh;
  Expr_Cosine: typeof Expr_Cosine;
  Expr_Difference: typeof Expr_Difference;
  Expr_Different: typeof Expr_Different;
  Expr_Division: typeof Expr_Division;
  Expr_Equal: typeof Expr_Equal;
  Expr_Exponential: typeof Expr_Exponential;
  Expr_Exponentiate: typeof Expr_Exponentiate;
  Expr_ExprFailure: typeof Expr_ExprFailure;
  Expr_FunctionDerivative: typeof Expr_FunctionDerivative;
  Expr_GeneralExpression: typeof Expr_GeneralExpression;
  Expr_GeneralFunction: typeof Expr_GeneralFunction;
  Expr_GeneralRelation: typeof Expr_GeneralRelation;
  Expr_GreaterThan: typeof Expr_GreaterThan;
  Expr_GreaterThanOrEqual: typeof Expr_GreaterThanOrEqual;
  Expr_InvalidAssignment: typeof Expr_InvalidAssignment;
  Expr_InvalidFunction: typeof Expr_InvalidFunction;
  Expr_InvalidOperand: typeof Expr_InvalidOperand;
  Expr_LessThan: typeof Expr_LessThan;
  Expr_LessThanOrEqual: typeof Expr_LessThanOrEqual;
  Expr_LogOf10: typeof Expr_LogOf10;
  Expr_LogOfe: typeof Expr_LogOfe;
  Expr_NamedConstant: typeof Expr_NamedConstant;
  Expr_NamedExpression: typeof Expr_NamedExpression;
  Expr_NamedFunction: typeof Expr_NamedFunction;
  Expr_NamedUnknown: typeof Expr_NamedUnknown;
  Expr_NotAssigned: typeof Expr_NotAssigned;
  Expr_NotEvaluable: typeof Expr_NotEvaluable;
  Expr_NumericValue: typeof Expr_NumericValue;
  Expr_PolyExpression: typeof Expr_PolyExpression;
  Expr_PolyFunction: typeof Expr_PolyFunction;
  Expr_Product: typeof Expr_Product;
  Expr_RUIterator: typeof Expr_RUIterator;
  Expr_RelationIterator: typeof Expr_RelationIterator;
  Expr_Sign: typeof Expr_Sign;
  Expr_Sine: typeof Expr_Sine;
  Expr_SingleRelation: typeof Expr_SingleRelation;
  Expr_Sinh: typeof Expr_Sinh;
  Expr_Square: typeof Expr_Square;
  Expr_SquareRoot: typeof Expr_SquareRoot;
  Expr_Sum: typeof Expr_Sum;
  Expr_SystemRelation: typeof Expr_SystemRelation;
  Expr_Tangent: typeof Expr_Tangent;
  Expr_Tanh: typeof Expr_Tanh;
  Expr_UnaryExpression: typeof Expr_UnaryExpression;
  Expr_UnaryFunction: typeof Expr_UnaryFunction;
  Expr_UnaryMinus: typeof Expr_UnaryMinus;
  Expr_UnknownIterator: typeof Expr_UnknownIterator;
  Extrema_CCLocFOfLocECC: typeof Extrema_CCLocFOfLocECC;
  Extrema_CCLocFOfLocECC2d: typeof Extrema_CCLocFOfLocECC2d;
  Extrema_Curve2dTool: typeof Extrema_Curve2dTool;
  Extrema_CurveTool: typeof Extrema_CurveTool;
  Extrema_ECC: typeof Extrema_ECC;
  Extrema_ECC2d: typeof Extrema_ECC2d;
  Extrema_ELPCOfLocateExtPC: typeof Extrema_ELPCOfLocateExtPC;
  Extrema_ELPCOfLocateExtPC2d: typeof Extrema_ELPCOfLocateExtPC2d;
  Extrema_EPCOfELPCOfLocateExtPC: typeof Extrema_EPCOfELPCOfLocateExtPC;
  Extrema_EPCOfELPCOfLocateExtPC2d: typeof Extrema_EPCOfELPCOfLocateExtPC2d;
  Extrema_EPCOfExtPC: typeof Extrema_EPCOfExtPC;
  Extrema_EPCOfExtPC2d: typeof Extrema_EPCOfExtPC2d;
  Extrema_ExtCC: typeof Extrema_ExtCC;
  Extrema_ExtCC2d: typeof Extrema_ExtCC2d;
  Extrema_ExtCS: typeof Extrema_ExtCS;
  Extrema_ExtElC: typeof Extrema_ExtElC;
  Extrema_ExtElC2d: typeof Extrema_ExtElC2d;
  Extrema_ExtElCS: typeof Extrema_ExtElCS;
  Extrema_ExtElSS: typeof Extrema_ExtElSS;
  Extrema_ExtPC: typeof Extrema_ExtPC;
  Extrema_ExtPC2d: typeof Extrema_ExtPC2d;
  Extrema_ExtPElC: typeof Extrema_ExtPElC;
  Extrema_ExtPElC2d: typeof Extrema_ExtPElC2d;
  Extrema_ExtPElS: typeof Extrema_ExtPElS;
  Extrema_ExtPExtS: typeof Extrema_ExtPExtS;
  Extrema_ExtPRevS: typeof Extrema_ExtPRevS;
  Extrema_ExtPS: typeof Extrema_ExtPS;
  Extrema_ExtSS: typeof Extrema_ExtSS;
  Extrema_FuncExtCS: typeof Extrema_FuncExtCS;
  Extrema_FuncExtSS: typeof Extrema_FuncExtSS;
  Extrema_FuncPSDist: typeof Extrema_FuncPSDist;
  Extrema_FuncPSNorm: typeof Extrema_FuncPSNorm;
  Extrema_GenExtCS: typeof Extrema_GenExtCS;
  Extrema_GenExtPS: typeof Extrema_GenExtPS;
  Extrema_GenExtSS: typeof Extrema_GenExtSS;
  Extrema_GenLocateExtCS: typeof Extrema_GenLocateExtCS;
  Extrema_GenLocateExtPS: typeof Extrema_GenLocateExtPS;
  Extrema_GenLocateExtSS: typeof Extrema_GenLocateExtSS;
  Extrema_GlobOptFuncCCC0: typeof Extrema_GlobOptFuncCCC0;
  Extrema_GlobOptFuncCCC1: typeof Extrema_GlobOptFuncCCC1;
  Extrema_GlobOptFuncCCC2: typeof Extrema_GlobOptFuncCCC2;
  Extrema_GlobOptFuncCS: typeof Extrema_GlobOptFuncCS;
  Extrema_LocECC: typeof Extrema_LocECC;
  Extrema_LocECC2d: typeof Extrema_LocECC2d;
  Extrema_LocEPCOfLocateExtPC: typeof Extrema_LocEPCOfLocateExtPC;
  Extrema_LocEPCOfLocateExtPC2d: typeof Extrema_LocEPCOfLocateExtPC2d;
  Extrema_LocateExtCC: typeof Extrema_LocateExtCC;
  Extrema_LocateExtCC2d: typeof Extrema_LocateExtCC2d;
  Extrema_LocateExtPC: typeof Extrema_LocateExtPC;
  Extrema_LocateExtPC2d: typeof Extrema_LocateExtPC2d;
  Extrema_PCFOfEPCOfELPCOfLocateExtPC: typeof Extrema_PCFOfEPCOfELPCOfLocateExtPC;
  Extrema_PCFOfEPCOfELPCOfLocateExtPC2d: typeof Extrema_PCFOfEPCOfELPCOfLocateExtPC2d;
  Extrema_PCFOfEPCOfExtPC: typeof Extrema_PCFOfEPCOfExtPC;
  Extrema_PCFOfEPCOfExtPC2d: typeof Extrema_PCFOfEPCOfExtPC2d;
  Extrema_PCLocFOfLocEPCOfLocateExtPC: typeof Extrema_PCLocFOfLocEPCOfLocateExtPC;
  Extrema_PCLocFOfLocEPCOfLocateExtPC2d: typeof Extrema_PCLocFOfLocEPCOfLocateExtPC2d;
  Extrema_POnCurv: typeof Extrema_POnCurv;
  Extrema_POnCurv2d: typeof Extrema_POnCurv2d;
  Extrema_POnSurf: typeof Extrema_POnSurf;
  Extrema_POnSurfParams: typeof Extrema_POnSurfParams;
  GCE2d_MakeArcOfCircle: typeof GCE2d_MakeArcOfCircle;
  GCE2d_MakeArcOfEllipse: typeof GCE2d_MakeArcOfEllipse;
  GCE2d_MakeArcOfHyperbola: typeof GCE2d_MakeArcOfHyperbola;
  GCE2d_MakeArcOfParabola: typeof GCE2d_MakeArcOfParabola;
  GCE2d_MakeCircle: typeof GCE2d_MakeCircle;
  GCE2d_MakeEllipse: typeof GCE2d_MakeEllipse;
  GCE2d_MakeHyperbola: typeof GCE2d_MakeHyperbola;
  GCE2d_MakeLine: typeof GCE2d_MakeLine;
  GCE2d_MakeMirror: typeof GCE2d_MakeMirror;
  GCE2d_MakeParabola: typeof GCE2d_MakeParabola;
  GCE2d_MakeRotation: typeof GCE2d_MakeRotation;
  GCE2d_MakeScale: typeof GCE2d_MakeScale;
  GCE2d_MakeSegment: typeof GCE2d_MakeSegment;
  GCE2d_MakeTranslation: typeof GCE2d_MakeTranslation;
  GCE2d_Root: typeof GCE2d_Root;
  GCPnts_AbscissaPoint: typeof GCPnts_AbscissaPoint;
  GCPnts_DistFunction2dMV: typeof GCPnts_DistFunction2dMV;
  GCPnts_DistFunctionMV: typeof GCPnts_DistFunctionMV;
  GCPnts_QuasiUniformAbscissa: typeof GCPnts_QuasiUniformAbscissa;
  GCPnts_QuasiUniformDeflection: typeof GCPnts_QuasiUniformDeflection;
  GCPnts_TangentialDeflection: typeof GCPnts_TangentialDeflection;
  GCPnts_UniformAbscissa: typeof GCPnts_UniformAbscissa;
  GCPnts_UniformDeflection: typeof GCPnts_UniformDeflection;
  GC_MakeArcOfCircle: typeof GC_MakeArcOfCircle;
  GC_MakeArcOfEllipse: typeof GC_MakeArcOfEllipse;
  GC_MakeArcOfHyperbola: typeof GC_MakeArcOfHyperbola;
  GC_MakeArcOfParabola: typeof GC_MakeArcOfParabola;
  GC_MakeCircle: typeof GC_MakeCircle;
  GC_MakeConicalSurface: typeof GC_MakeConicalSurface;
  GC_MakeCylindricalSurface: typeof GC_MakeCylindricalSurface;
  GC_MakeEllipse: typeof GC_MakeEllipse;
  GC_MakeHyperbola: typeof GC_MakeHyperbola;
  GC_MakeLine: typeof GC_MakeLine;
  GC_MakeMirror: typeof GC_MakeMirror;
  GC_MakePlane: typeof GC_MakePlane;
  GC_MakeRotation: typeof GC_MakeRotation;
  GC_MakeScale: typeof GC_MakeScale;
  GC_MakeSegment: typeof GC_MakeSegment;
  GC_MakeTranslation: typeof GC_MakeTranslation;
  GC_MakeTrimmedCone: typeof GC_MakeTrimmedCone;
  GC_MakeTrimmedCylinder: typeof GC_MakeTrimmedCylinder;
  GC_Root: typeof GC_Root;
  GProp: typeof GProp;
  GProp_CelGProps: typeof GProp_CelGProps;
  GProp_GProps: typeof GProp_GProps;
  GProp_PEquation: typeof GProp_PEquation;
  GProp_PGProps: typeof GProp_PGProps;
  GProp_PrincipalProps: typeof GProp_PrincipalProps;
  GProp_SelGProps: typeof GProp_SelGProps;
  GProp_UndefinedAxis: typeof GProp_UndefinedAxis;
  GProp_VelGProps: typeof GProp_VelGProps;
  GccAna_Circ2d2TanOn: typeof GccAna_Circ2d2TanOn;
  GccAna_Circ2d2TanRad: typeof GccAna_Circ2d2TanRad;
  GccAna_Circ2d3Tan: typeof GccAna_Circ2d3Tan;
  GccAna_Circ2dBisec: typeof GccAna_Circ2dBisec;
  GccAna_Circ2dTanCen: typeof GccAna_Circ2dTanCen;
  GccAna_Circ2dTanOnRad: typeof GccAna_Circ2dTanOnRad;
  GccAna_CircLin2dBisec: typeof GccAna_CircLin2dBisec;
  GccAna_CircPnt2dBisec: typeof GccAna_CircPnt2dBisec;
  GccAna_Lin2d2Tan: typeof GccAna_Lin2d2Tan;
  GccAna_Lin2dBisec: typeof GccAna_Lin2dBisec;
  GccAna_Lin2dTanObl: typeof GccAna_Lin2dTanObl;
  GccAna_Lin2dTanPar: typeof GccAna_Lin2dTanPar;
  GccAna_Lin2dTanPer: typeof GccAna_Lin2dTanPer;
  GccAna_LinPnt2dBisec: typeof GccAna_LinPnt2dBisec;
  GccAna_NoSolution: typeof GccAna_NoSolution;
  GccAna_Pnt2dBisec: typeof GccAna_Pnt2dBisec;
  GccEnt: typeof GccEnt;
  GccEnt_BadQualifier: typeof GccEnt_BadQualifier;
  GccEnt_QualifiedCirc: typeof GccEnt_QualifiedCirc;
  GccEnt_QualifiedLin: typeof GccEnt_QualifiedLin;
  GccInt_BCirc: typeof GccInt_BCirc;
  GccInt_BElips: typeof GccInt_BElips;
  GccInt_BHyper: typeof GccInt_BHyper;
  GccInt_BLine: typeof GccInt_BLine;
  GccInt_BParab: typeof GccInt_BParab;
  GccInt_BPoint: typeof GccInt_BPoint;
  GccInt_Bisec: typeof GccInt_Bisec;
  Geom2dAdaptor: typeof Geom2dAdaptor;
  Geom2dAdaptor_Curve: typeof Geom2dAdaptor_Curve;
  Geom2dAdaptor_GHCurve: typeof Geom2dAdaptor_GHCurve;
  Geom2dAdaptor_HCurve: typeof Geom2dAdaptor_HCurve;
  Geom2dConvert: typeof Geom2dConvert;
  Geom2dConvert_ApproxCurve: typeof Geom2dConvert_ApproxCurve;
  Geom2dConvert_BSplineCurveKnotSplitting: typeof Geom2dConvert_BSplineCurveKnotSplitting;
  Geom2dConvert_BSplineCurveToBezierCurve: typeof Geom2dConvert_BSplineCurveToBezierCurve;
  Geom2dConvert_CompCurveToBSplineCurve: typeof Geom2dConvert_CompCurveToBSplineCurve;
  Geom2dEvaluator_Curve: typeof Geom2dEvaluator_Curve;
  Geom2dEvaluator_OffsetCurve: typeof Geom2dEvaluator_OffsetCurve;
  Geom2dLProp_CLProps2d: typeof Geom2dLProp_CLProps2d;
  Geom2dLProp_CurAndInf2d: typeof Geom2dLProp_CurAndInf2d;
  Geom2dLProp_Curve2dTool: typeof Geom2dLProp_Curve2dTool;
  Geom2dLProp_FuncCurExt: typeof Geom2dLProp_FuncCurExt;
  Geom2dLProp_FuncCurNul: typeof Geom2dLProp_FuncCurNul;
  Geom2dLProp_NumericCurInf2d: typeof Geom2dLProp_NumericCurInf2d;
  Geom2dToIGES_Geom2dCurve: typeof Geom2dToIGES_Geom2dCurve;
  Geom2dToIGES_Geom2dEntity: typeof Geom2dToIGES_Geom2dEntity;
  Geom2dToIGES_Geom2dPoint: typeof Geom2dToIGES_Geom2dPoint;
  Geom2dToIGES_Geom2dVector: typeof Geom2dToIGES_Geom2dVector;
  Geom2d_AxisPlacement: typeof Geom2d_AxisPlacement;
  Geom2d_BSplineCurve: typeof Geom2d_BSplineCurve;
  Geom2d_BezierCurve: typeof Geom2d_BezierCurve;
  Geom2d_BoundedCurve: typeof Geom2d_BoundedCurve;
  Geom2d_CartesianPoint: typeof Geom2d_CartesianPoint;
  Geom2d_Circle: typeof Geom2d_Circle;
  Geom2d_Conic: typeof Geom2d_Conic;
  Geom2d_Curve: typeof Geom2d_Curve;
  Geom2d_Direction: typeof Geom2d_Direction;
  Geom2d_Ellipse: typeof Geom2d_Ellipse;
  Geom2d_Geometry: typeof Geom2d_Geometry;
  Geom2d_Hyperbola: typeof Geom2d_Hyperbola;
  Geom2d_Line: typeof Geom2d_Line;
  Geom2d_OffsetCurve: typeof Geom2d_OffsetCurve;
  Geom2d_Parabola: typeof Geom2d_Parabola;
  Geom2d_Point: typeof Geom2d_Point;
  Geom2d_Transformation: typeof Geom2d_Transformation;
  Geom2d_TrimmedCurve: typeof Geom2d_TrimmedCurve;
  Geom2d_UndefinedDerivative: typeof Geom2d_UndefinedDerivative;
  Geom2d_UndefinedValue: typeof Geom2d_UndefinedValue;
  Geom2d_Vector: typeof Geom2d_Vector;
  Geom2d_VectorWithMagnitude: typeof Geom2d_VectorWithMagnitude;
  GeomAPI: typeof GeomAPI;
  GeomAPI_ExtremaCurveCurve: typeof GeomAPI_ExtremaCurveCurve;
  GeomAPI_ExtremaCurveSurface: typeof GeomAPI_ExtremaCurveSurface;
  GeomAPI_ExtremaSurfaceSurface: typeof GeomAPI_ExtremaSurfaceSurface;
  GeomAPI_IntCS: typeof GeomAPI_IntCS;
  GeomAPI_IntSS: typeof GeomAPI_IntSS;
  GeomAPI_PointsToBSpline: typeof GeomAPI_PointsToBSpline;
  GeomAPI_PointsToBSplineSurface: typeof GeomAPI_PointsToBSplineSurface;
  GeomAPI_ProjectPointOnCurve: typeof GeomAPI_ProjectPointOnCurve;
  GeomAPI_ProjectPointOnSurf: typeof GeomAPI_ProjectPointOnSurf;
  GeomAdaptor: typeof GeomAdaptor;
  GeomAdaptor_Curve: typeof GeomAdaptor_Curve;
  GeomAdaptor_GHCurve: typeof GeomAdaptor_GHCurve;
  GeomAdaptor_GHSurface: typeof GeomAdaptor_GHSurface;
  GeomAdaptor_HCurve: typeof GeomAdaptor_HCurve;
  GeomAdaptor_HSurface: typeof GeomAdaptor_HSurface;
  GeomAdaptor_HSurfaceOfLinearExtrusion: typeof GeomAdaptor_HSurfaceOfLinearExtrusion;
  GeomAdaptor_HSurfaceOfRevolution: typeof GeomAdaptor_HSurfaceOfRevolution;
  GeomAdaptor_Surface: typeof GeomAdaptor_Surface;
  GeomAdaptor_SurfaceOfLinearExtrusion: typeof GeomAdaptor_SurfaceOfLinearExtrusion;
  GeomAdaptor_SurfaceOfRevolution: typeof GeomAdaptor_SurfaceOfRevolution;
  GeomConvert: typeof GeomConvert;
  GeomConvert_ApproxCurve: typeof GeomConvert_ApproxCurve;
  GeomConvert_ApproxSurface: typeof GeomConvert_ApproxSurface;
  GeomConvert_BSplineCurveKnotSplitting: typeof GeomConvert_BSplineCurveKnotSplitting;
  GeomConvert_BSplineCurveToBezierCurve: typeof GeomConvert_BSplineCurveToBezierCurve;
  GeomConvert_BSplineSurfaceKnotSplitting: typeof GeomConvert_BSplineSurfaceKnotSplitting;
  GeomConvert_BSplineSurfaceToBezierSurface: typeof GeomConvert_BSplineSurfaceToBezierSurface;
  GeomConvert_CompBezierSurfacesToBSplineSurface: typeof GeomConvert_CompBezierSurfacesToBSplineSurface;
  GeomConvert_CompCurveToBSplineCurve: typeof GeomConvert_CompCurveToBSplineCurve;
  GeomEvaluator_Curve: typeof GeomEvaluator_Curve;
  GeomEvaluator_OffsetCurve: typeof GeomEvaluator_OffsetCurve;
  GeomEvaluator_OffsetSurface: typeof GeomEvaluator_OffsetSurface;
  GeomEvaluator_Surface: typeof GeomEvaluator_Surface;
  GeomEvaluator_SurfaceOfExtrusion: typeof GeomEvaluator_SurfaceOfExtrusion;
  GeomEvaluator_SurfaceOfRevolution: typeof GeomEvaluator_SurfaceOfRevolution;
  GeomFill: typeof GeomFill;
  GeomFill_AppSurf: typeof GeomFill_AppSurf;
  GeomFill_AppSweep: typeof GeomFill_AppSweep;
  GeomFill_BSplineCurves: typeof GeomFill_BSplineCurves;
  GeomFill_BezierCurves: typeof GeomFill_BezierCurves;
  GeomFill_BoundWithSurf: typeof GeomFill_BoundWithSurf;
  GeomFill_Boundary: typeof GeomFill_Boundary;
  GeomFill_CircularBlendFunc: typeof GeomFill_CircularBlendFunc;
  GeomFill_ConstantBiNormal: typeof GeomFill_ConstantBiNormal;
  GeomFill_ConstrainedFilling: typeof GeomFill_ConstrainedFilling;
  GeomFill_Coons: typeof GeomFill_Coons;
  GeomFill_CoonsAlgPatch: typeof GeomFill_CoonsAlgPatch;
  GeomFill_CornerState: typeof GeomFill_CornerState;
  GeomFill_CorrectedFrenet: typeof GeomFill_CorrectedFrenet;
  GeomFill_CurveAndTrihedron: typeof GeomFill_CurveAndTrihedron;
  GeomFill_Curved: typeof GeomFill_Curved;
  GeomFill_Darboux: typeof GeomFill_Darboux;
  GeomFill_DegeneratedBound: typeof GeomFill_DegeneratedBound;
  GeomFill_DiscreteTrihedron: typeof GeomFill_DiscreteTrihedron;
  GeomFill_DraftTrihedron: typeof GeomFill_DraftTrihedron;
  GeomFill_EvolvedSection: typeof GeomFill_EvolvedSection;
  GeomFill_Filling: typeof GeomFill_Filling;
  GeomFill_Fixed: typeof GeomFill_Fixed;
  GeomFill_Frenet: typeof GeomFill_Frenet;
  GeomFill_FunctionDraft: typeof GeomFill_FunctionDraft;
  GeomFill_Generator: typeof GeomFill_Generator;
  GeomFill_GuideTrihedronAC: typeof GeomFill_GuideTrihedronAC;
  GeomFill_GuideTrihedronPlan: typeof GeomFill_GuideTrihedronPlan;
  GeomFill_Line: typeof GeomFill_Line;
  GeomFill_LocFunction: typeof GeomFill_LocFunction;
  GeomFill_LocationDraft: typeof GeomFill_LocationDraft;
  GeomFill_LocationGuide: typeof GeomFill_LocationGuide;
  GeomFill_LocationLaw: typeof GeomFill_LocationLaw;
  GeomFill_Pipe: typeof GeomFill_Pipe;
  GeomFill_PlanFunc: typeof GeomFill_PlanFunc;
  GeomFill_PolynomialConvertor: typeof GeomFill_PolynomialConvertor;
  GeomFill_Profiler: typeof GeomFill_Profiler;
  GeomFill_QuasiAngularConvertor: typeof GeomFill_QuasiAngularConvertor;
  GeomFill_SectionGenerator: typeof GeomFill_SectionGenerator;
  GeomFill_SectionLaw: typeof GeomFill_SectionLaw;
  GeomFill_SectionPlacement: typeof GeomFill_SectionPlacement;
  GeomFill_SimpleBound: typeof GeomFill_SimpleBound;
  GeomFill_SnglrFunc: typeof GeomFill_SnglrFunc;
  GeomFill_Stretch: typeof GeomFill_Stretch;
  GeomFill_Sweep: typeof GeomFill_Sweep;
  GeomFill_SweepFunction: typeof GeomFill_SweepFunction;
  GeomFill_Tensor: typeof GeomFill_Tensor;
  GeomFill_TgtField: typeof GeomFill_TgtField;
  GeomFill_TgtOnCoons: typeof GeomFill_TgtOnCoons;
  GeomFill_TrihedronLaw: typeof GeomFill_TrihedronLaw;
  GeomFill_TrihedronWithGuide: typeof GeomFill_TrihedronWithGuide;
  GeomFill_UniformSection: typeof GeomFill_UniformSection;
  GeomInt: typeof GeomInt;
  GeomInt_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfWLApprox: typeof GeomInt_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfWLApprox;
  GeomInt_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfWLApprox: typeof GeomInt_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfWLApprox;
  GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox: typeof GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox;
  GeomInt_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfWLApprox: typeof GeomInt_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfWLApprox;
  GeomInt_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfWLApprox: typeof GeomInt_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfWLApprox;
  GeomInt_LineConstructor: typeof GeomInt_LineConstructor;
  GeomInt_LineTool: typeof GeomInt_LineTool;
  GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox: typeof GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox;
  GeomInt_MyGradientOfTheComputeLineBezierOfWLApprox: typeof GeomInt_MyGradientOfTheComputeLineBezierOfWLApprox;
  GeomInt_MyGradientbisOfTheComputeLineOfWLApprox: typeof GeomInt_MyGradientbisOfTheComputeLineOfWLApprox;
  GeomInt_ParFunctionOfMyGradientOfTheComputeLineBezierOfWLApprox: typeof GeomInt_ParFunctionOfMyGradientOfTheComputeLineBezierOfWLApprox;
  GeomInt_ParFunctionOfMyGradientbisOfTheComputeLineOfWLApprox: typeof GeomInt_ParFunctionOfMyGradientbisOfTheComputeLineOfWLApprox;
  GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox: typeof GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox;
  GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox: typeof GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox;
  GeomInt_ParameterAndOrientation: typeof GeomInt_ParameterAndOrientation;
  GeomInt_TheComputeLineBezierOfWLApprox: typeof GeomInt_TheComputeLineBezierOfWLApprox;
  GeomInt_TheComputeLineOfWLApprox: typeof GeomInt_TheComputeLineOfWLApprox;
  GeomInt_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfWLApprox: typeof GeomInt_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfWLApprox;
  GeomInt_TheImpPrmSvSurfacesOfWLApprox: typeof GeomInt_TheImpPrmSvSurfacesOfWLApprox;
  GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox: typeof GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox;
  GeomInt_TheMultiLineOfWLApprox: typeof GeomInt_TheMultiLineOfWLApprox;
  GeomInt_TheMultiLineToolOfWLApprox: typeof GeomInt_TheMultiLineToolOfWLApprox;
  GeomInt_ThePrmPrmSvSurfacesOfWLApprox: typeof GeomInt_ThePrmPrmSvSurfacesOfWLApprox;
  GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox: typeof GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox;
  GeomLProp: typeof GeomLProp;
  GeomLProp_CLProps: typeof GeomLProp_CLProps;
  GeomLProp_CurveTool: typeof GeomLProp_CurveTool;
  GeomLProp_SLProps: typeof GeomLProp_SLProps;
  GeomLProp_SurfaceTool: typeof GeomLProp_SurfaceTool;
  GeomLib: typeof GeomLib;
  GeomLib_Check2dBSplineCurve: typeof GeomLib_Check2dBSplineCurve;
  GeomLib_CheckBSplineCurve: typeof GeomLib_CheckBSplineCurve;
  GeomLib_CheckCurveOnSurface: typeof GeomLib_CheckCurveOnSurface;
  GeomLib_DenominatorMultiplier: typeof GeomLib_DenominatorMultiplier;
  GeomLib_Interpolate: typeof GeomLib_Interpolate;
  GeomLib_IsPlanarSurface: typeof GeomLib_IsPlanarSurface;
  GeomLib_LogSample: typeof GeomLib_LogSample;
  GeomLib_MakeCurvefromApprox: typeof GeomLib_MakeCurvefromApprox;
  GeomLib_PolyFunc: typeof GeomLib_PolyFunc;
  GeomLib_Tool: typeof GeomLib_Tool;
  GeomPlate_Aij: typeof GeomPlate_Aij;
  GeomPlate_BuildAveragePlane: typeof GeomPlate_BuildAveragePlane;
  GeomPlate_BuildPlateSurface: typeof GeomPlate_BuildPlateSurface;
  GeomPlate_CurveConstraint: typeof GeomPlate_CurveConstraint;
  GeomPlate_MakeApprox: typeof GeomPlate_MakeApprox;
  GeomPlate_PlateG0Criterion: typeof GeomPlate_PlateG0Criterion;
  GeomPlate_PlateG1Criterion: typeof GeomPlate_PlateG1Criterion;
  GeomPlate_PointConstraint: typeof GeomPlate_PointConstraint;
  GeomPlate_Surface: typeof GeomPlate_Surface;
  GeomProjLib: typeof GeomProjLib;
  GeomToIGES_GeomCurve: typeof GeomToIGES_GeomCurve;
  GeomToIGES_GeomEntity: typeof GeomToIGES_GeomEntity;
  GeomToIGES_GeomPoint: typeof GeomToIGES_GeomPoint;
  GeomToIGES_GeomSurface: typeof GeomToIGES_GeomSurface;
  GeomToIGES_GeomVector: typeof GeomToIGES_GeomVector;
  GeomToStep_MakeAxis1Placement: typeof GeomToStep_MakeAxis1Placement;
  GeomToStep_MakeAxis2Placement2d: typeof GeomToStep_MakeAxis2Placement2d;
  GeomToStep_MakeAxis2Placement3d: typeof GeomToStep_MakeAxis2Placement3d;
  GeomToStep_MakeBSplineCurveWithKnots: typeof GeomToStep_MakeBSplineCurveWithKnots;
  GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve: typeof GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve;
  GeomToStep_MakeBSplineSurfaceWithKnots: typeof GeomToStep_MakeBSplineSurfaceWithKnots;
  GeomToStep_MakeBSplineSurfaceWithKnotsAndRationalBSplineSurface: typeof GeomToStep_MakeBSplineSurfaceWithKnotsAndRationalBSplineSurface;
  GeomToStep_MakeBoundedCurve: typeof GeomToStep_MakeBoundedCurve;
  GeomToStep_MakeBoundedSurface: typeof GeomToStep_MakeBoundedSurface;
  GeomToStep_MakeCartesianPoint: typeof GeomToStep_MakeCartesianPoint;
  GeomToStep_MakeCircle: typeof GeomToStep_MakeCircle;
  GeomToStep_MakeConic: typeof GeomToStep_MakeConic;
  GeomToStep_MakeConicalSurface: typeof GeomToStep_MakeConicalSurface;
  GeomToStep_MakeCurve: typeof GeomToStep_MakeCurve;
  GeomToStep_MakeCylindricalSurface: typeof GeomToStep_MakeCylindricalSurface;
  GeomToStep_MakeDirection: typeof GeomToStep_MakeDirection;
  GeomToStep_MakeElementarySurface: typeof GeomToStep_MakeElementarySurface;
  GeomToStep_MakeEllipse: typeof GeomToStep_MakeEllipse;
  GeomToStep_MakeHyperbola: typeof GeomToStep_MakeHyperbola;
  GeomToStep_MakeLine: typeof GeomToStep_MakeLine;
  GeomToStep_MakeParabola: typeof GeomToStep_MakeParabola;
  GeomToStep_MakePlane: typeof GeomToStep_MakePlane;
  GeomToStep_MakePolyline: typeof GeomToStep_MakePolyline;
  GeomToStep_MakeRectangularTrimmedSurface: typeof GeomToStep_MakeRectangularTrimmedSurface;
  GeomToStep_MakeSphericalSurface: typeof GeomToStep_MakeSphericalSurface;
  GeomToStep_MakeSurface: typeof GeomToStep_MakeSurface;
  GeomToStep_MakeSurfaceOfLinearExtrusion: typeof GeomToStep_MakeSurfaceOfLinearExtrusion;
  GeomToStep_MakeSurfaceOfRevolution: typeof GeomToStep_MakeSurfaceOfRevolution;
  GeomToStep_MakeSweptSurface: typeof GeomToStep_MakeSweptSurface;
  GeomToStep_MakeToroidalSurface: typeof GeomToStep_MakeToroidalSurface;
  GeomToStep_MakeVector: typeof GeomToStep_MakeVector;
  GeomToStep_Root: typeof GeomToStep_Root;
  GeomTools: typeof GeomTools;
  GeomTools_Curve2dSet: typeof GeomTools_Curve2dSet;
  GeomTools_CurveSet: typeof GeomTools_CurveSet;
  GeomTools_SurfaceSet: typeof GeomTools_SurfaceSet;
  Geom_Axis1Placement: typeof Geom_Axis1Placement;
  Geom_Axis2Placement: typeof Geom_Axis2Placement;
  Geom_AxisPlacement: typeof Geom_AxisPlacement;
  Geom_BSplineCurve: typeof Geom_BSplineCurve;
  Geom_BSplineSurface: typeof Geom_BSplineSurface;
  Geom_BezierCurve: typeof Geom_BezierCurve;
  Geom_BezierSurface: typeof Geom_BezierSurface;
  Geom_BoundedCurve: typeof Geom_BoundedCurve;
  Geom_BoundedSurface: typeof Geom_BoundedSurface;
  Geom_CartesianPoint: typeof Geom_CartesianPoint;
  Geom_Circle: typeof Geom_Circle;
  Geom_Conic: typeof Geom_Conic;
  Geom_ConicalSurface: typeof Geom_ConicalSurface;
  Geom_Curve: typeof Geom_Curve;
  Geom_CylindricalSurface: typeof Geom_CylindricalSurface;
  Geom_Direction: typeof Geom_Direction;
  Geom_ElementarySurface: typeof Geom_ElementarySurface;
  Geom_Ellipse: typeof Geom_Ellipse;
  Geom_Geometry: typeof Geom_Geometry;
  Geom_Hyperbola: typeof Geom_Hyperbola;
  Geom_Line: typeof Geom_Line;
  Geom_OffsetCurve: typeof Geom_OffsetCurve;
  Geom_OffsetSurface: typeof Geom_OffsetSurface;
  Geom_OsculatingSurface: typeof Geom_OsculatingSurface;
  Geom_Parabola: typeof Geom_Parabola;
  Geom_Plane: typeof Geom_Plane;
  Geom_Point: typeof Geom_Point;
  Geom_RectangularTrimmedSurface: typeof Geom_RectangularTrimmedSurface;
  Geom_SphericalSurface: typeof Geom_SphericalSurface;
  Geom_Surface: typeof Geom_Surface;
  Geom_SurfaceOfLinearExtrusion: typeof Geom_SurfaceOfLinearExtrusion;
  Geom_SurfaceOfRevolution: typeof Geom_SurfaceOfRevolution;
  Geom_SweptSurface: typeof Geom_SweptSurface;
  Geom_ToroidalSurface: typeof Geom_ToroidalSurface;
  Geom_Transformation: typeof Geom_Transformation;
  Geom_TrimmedCurve: typeof Geom_TrimmedCurve;
  Geom_UndefinedDerivative: typeof Geom_UndefinedDerivative;
  Geom_UndefinedValue: typeof Geom_UndefinedValue;
  Geom_Vector: typeof Geom_Vector;
  Geom_VectorWithMagnitude: typeof Geom_VectorWithMagnitude;
  Graphic3d_ArrayOfPoints: typeof Graphic3d_ArrayOfPoints;
  Graphic3d_ArrayOfPolygons: typeof Graphic3d_ArrayOfPolygons;
  Graphic3d_ArrayOfPolylines: typeof Graphic3d_ArrayOfPolylines;
  Graphic3d_ArrayOfPrimitives: typeof Graphic3d_ArrayOfPrimitives;
  Graphic3d_ArrayOfQuadrangleStrips: typeof Graphic3d_ArrayOfQuadrangleStrips;
  Graphic3d_ArrayOfQuadrangles: typeof Graphic3d_ArrayOfQuadrangles;
  Graphic3d_ArrayOfSegments: typeof Graphic3d_ArrayOfSegments;
  Graphic3d_ArrayOfTriangleFans: typeof Graphic3d_ArrayOfTriangleFans;
  Graphic3d_ArrayOfTriangleStrips: typeof Graphic3d_ArrayOfTriangleStrips;
  Graphic3d_ArrayOfTriangles: typeof Graphic3d_ArrayOfTriangles;
  Graphic3d_AspectFillArea3d: typeof Graphic3d_AspectFillArea3d;
  Graphic3d_AspectLine3d: typeof Graphic3d_AspectLine3d;
  Graphic3d_AspectMarker3d: typeof Graphic3d_AspectMarker3d;
  Graphic3d_AspectText3d: typeof Graphic3d_AspectText3d;
  Graphic3d_Aspects: typeof Graphic3d_Aspects;
  Graphic3d_AttribBuffer: typeof Graphic3d_AttribBuffer;
  Graphic3d_AxisAspect: typeof Graphic3d_AxisAspect;
  Graphic3d_BSDF: typeof Graphic3d_BSDF;
  Graphic3d_BoundBuffer: typeof Graphic3d_BoundBuffer;
  Graphic3d_Buffer: typeof Graphic3d_Buffer;
  Graphic3d_BvhCStructureSet: typeof Graphic3d_BvhCStructureSet;
  Graphic3d_CLight: typeof Graphic3d_CLight;
  Graphic3d_CStructure: typeof Graphic3d_CStructure;
  Graphic3d_CTexture: typeof Graphic3d_CTexture;
  Graphic3d_CView: typeof Graphic3d_CView;
  Graphic3d_Camera: typeof Graphic3d_Camera;
  Graphic3d_CameraTile: typeof Graphic3d_CameraTile;
  Graphic3d_ClipPlane: typeof Graphic3d_ClipPlane;
  Graphic3d_CubeMapOrder: typeof Graphic3d_CubeMapOrder;
  Graphic3d_CubeMapPacked: typeof Graphic3d_CubeMapPacked;
  Graphic3d_CubeMapSeparate: typeof Graphic3d_CubeMapSeparate;
  Graphic3d_CullingTool: typeof Graphic3d_CullingTool;
  Graphic3d_DataStructureManager: typeof Graphic3d_DataStructureManager;
  Graphic3d_FrameStats: typeof Graphic3d_FrameStats;
  Graphic3d_FrameStatsData: typeof Graphic3d_FrameStatsData;
  Graphic3d_FrameStatsDataTmp: typeof Graphic3d_FrameStatsDataTmp;
  Graphic3d_Fresnel: typeof Graphic3d_Fresnel;
  Graphic3d_GraduatedTrihedron: typeof Graphic3d_GraduatedTrihedron;
  Graphic3d_GraphicDriver: typeof Graphic3d_GraphicDriver;
  Graphic3d_Group: typeof Graphic3d_Group;
  Graphic3d_GroupDefinitionError: typeof Graphic3d_GroupDefinitionError;
  Graphic3d_HatchStyle: typeof Graphic3d_HatchStyle;
  Graphic3d_IndexBuffer: typeof Graphic3d_IndexBuffer;
  Graphic3d_Layer: typeof Graphic3d_Layer;
  Graphic3d_LightSet: typeof Graphic3d_LightSet;
  Graphic3d_MarkerImage: typeof Graphic3d_MarkerImage;
  Graphic3d_MaterialAspect: typeof Graphic3d_MaterialAspect;
  Graphic3d_MaterialDefinitionError: typeof Graphic3d_MaterialDefinitionError;
  Graphic3d_MediaTexture: typeof Graphic3d_MediaTexture;
  Graphic3d_MutableIndexBuffer: typeof Graphic3d_MutableIndexBuffer;
  Graphic3d_PresentationAttributes: typeof Graphic3d_PresentationAttributes;
  Graphic3d_PriorityDefinitionError: typeof Graphic3d_PriorityDefinitionError;
  Graphic3d_RenderingParams: typeof Graphic3d_RenderingParams;
  Graphic3d_SequenceOfHClipPlane: typeof Graphic3d_SequenceOfHClipPlane;
  Graphic3d_ShaderAttribute: typeof Graphic3d_ShaderAttribute;
  Graphic3d_ShaderObject: typeof Graphic3d_ShaderObject;
  Graphic3d_ShaderProgram: typeof Graphic3d_ShaderProgram;
  Graphic3d_ShaderVariable: typeof Graphic3d_ShaderVariable;
  Graphic3d_Structure: typeof Graphic3d_Structure;
  Graphic3d_StructureDefinitionError: typeof Graphic3d_StructureDefinitionError;
  Graphic3d_StructureManager: typeof Graphic3d_StructureManager;
  Graphic3d_Text: typeof Graphic3d_Text;
  Graphic3d_Texture1D: typeof Graphic3d_Texture1D;
  Graphic3d_Texture1Dmanual: typeof Graphic3d_Texture1Dmanual;
  Graphic3d_Texture1Dsegment: typeof Graphic3d_Texture1Dsegment;
  Graphic3d_Texture2D: typeof Graphic3d_Texture2D;
  Graphic3d_Texture2Dmanual: typeof Graphic3d_Texture2Dmanual;
  Graphic3d_Texture2Dplane: typeof Graphic3d_Texture2Dplane;
  Graphic3d_TextureEnv: typeof Graphic3d_TextureEnv;
  Graphic3d_TextureMap: typeof Graphic3d_TextureMap;
  Graphic3d_TextureParams: typeof Graphic3d_TextureParams;
  Graphic3d_TextureRoot: typeof Graphic3d_TextureRoot;
  Graphic3d_TextureSet: typeof Graphic3d_TextureSet;
  Graphic3d_TransformError: typeof Graphic3d_TransformError;
  Graphic3d_TransformPers: typeof Graphic3d_TransformPers;
  Graphic3d_ValidatedCubeMapOrder: typeof Graphic3d_ValidatedCubeMapOrder;
  Graphic3d_Vertex: typeof Graphic3d_Vertex;
  Graphic3d_ViewAffinity: typeof Graphic3d_ViewAffinity;
  Graphic3d_WorldViewProjState: typeof Graphic3d_WorldViewProjState;
  HLRAlgo: typeof HLRAlgo;
  HLRAlgo_BiPoint: typeof HLRAlgo_BiPoint;
  HLRAlgo_Coincidence: typeof HLRAlgo_Coincidence;
  HLRAlgo_EdgeIterator: typeof HLRAlgo_EdgeIterator;
  HLRAlgo_EdgeStatus: typeof HLRAlgo_EdgeStatus;
  HLRAlgo_EdgesBlock: typeof HLRAlgo_EdgesBlock;
  HLRAlgo_Interference: typeof HLRAlgo_Interference;
  HLRAlgo_Intersection: typeof HLRAlgo_Intersection;
  HLRAlgo_PolyAlgo: typeof HLRAlgo_PolyAlgo;
  HLRAlgo_PolyData: typeof HLRAlgo_PolyData;
  HLRAlgo_PolyHidingData: typeof HLRAlgo_PolyHidingData;
  HLRAlgo_PolyInternalData: typeof HLRAlgo_PolyInternalData;
  HLRAlgo_PolyInternalNode: typeof HLRAlgo_PolyInternalNode;
  HLRAlgo_PolyShellData: typeof HLRAlgo_PolyShellData;
  HLRAlgo_Projector: typeof HLRAlgo_Projector;
  HLRAlgo_WiresBlock: typeof HLRAlgo_WiresBlock;
  HLRAppli_ReflectLines: typeof HLRAppli_ReflectLines;
  HLRTopoBRep_DSFiller: typeof HLRTopoBRep_DSFiller;
  HLRTopoBRep_Data: typeof HLRTopoBRep_Data;
  HLRTopoBRep_FaceData: typeof HLRTopoBRep_FaceData;
  HLRTopoBRep_FaceIsoLiner: typeof HLRTopoBRep_FaceIsoLiner;
  HLRTopoBRep_OutLiner: typeof HLRTopoBRep_OutLiner;
  HLRTopoBRep_VData: typeof HLRTopoBRep_VData;
  HatchGen_Domain: typeof HatchGen_Domain;
  HatchGen_IntersectionPoint: typeof HatchGen_IntersectionPoint;
  HatchGen_PointOnElement: typeof HatchGen_PointOnElement;
  HatchGen_PointOnHatching: typeof HatchGen_PointOnHatching;
  Hatch_Hatcher: typeof Hatch_Hatcher;
  Hatch_Line: typeof Hatch_Line;
  Hatch_Parameter: typeof Hatch_Parameter;
  HeaderSection: typeof HeaderSection;
  HeaderSection_FileDescription: typeof HeaderSection_FileDescription;
  HeaderSection_FileName: typeof HeaderSection_FileName;
  HeaderSection_FileSchema: typeof HeaderSection_FileSchema;
  HeaderSection_Protocol: typeof HeaderSection_Protocol;
  Hermit: typeof Hermit;
  IFGraph_AllConnected: typeof IFGraph_AllConnected;
  IFGraph_AllShared: typeof IFGraph_AllShared;
  IFGraph_Articulations: typeof IFGraph_Articulations;
  IFGraph_Compare: typeof IFGraph_Compare;
  IFGraph_ConnectedComponants: typeof IFGraph_ConnectedComponants;
  IFGraph_Cumulate: typeof IFGraph_Cumulate;
  IFGraph_Cycles: typeof IFGraph_Cycles;
  IFGraph_ExternalSources: typeof IFGraph_ExternalSources;
  IFGraph_SCRoots: typeof IFGraph_SCRoots;
  IFGraph_StrongComponants: typeof IFGraph_StrongComponants;
  IFGraph_SubPartsIterator: typeof IFGraph_SubPartsIterator;
  IFSelect: typeof IFSelect;
  IFSelect_Act: typeof IFSelect_Act;
  IFSelect_Activator: typeof IFSelect_Activator;
  IFSelect_AppliedModifiers: typeof IFSelect_AppliedModifiers;
  IFSelect_BasicDumper: typeof IFSelect_BasicDumper;
  IFSelect_CheckCounter: typeof IFSelect_CheckCounter;
  IFSelect_ContextWrite: typeof IFSelect_ContextWrite;
  IFSelect_DispGlobal: typeof IFSelect_DispGlobal;
  IFSelect_DispPerCount: typeof IFSelect_DispPerCount;
  IFSelect_DispPerFiles: typeof IFSelect_DispPerFiles;
  IFSelect_DispPerOne: typeof IFSelect_DispPerOne;
  IFSelect_DispPerSignature: typeof IFSelect_DispPerSignature;
  IFSelect_Dispatch: typeof IFSelect_Dispatch;
  IFSelect_Editor: typeof IFSelect_Editor;
  IFSelect_Functions: typeof IFSelect_Functions;
  IFSelect_GeneralModifier: typeof IFSelect_GeneralModifier;
  IFSelect_GraphCounter: typeof IFSelect_GraphCounter;
  IFSelect_ListEditor: typeof IFSelect_ListEditor;
  IFSelect_ModelCopier: typeof IFSelect_ModelCopier;
  IFSelect_ModifEditForm: typeof IFSelect_ModifEditForm;
  IFSelect_ModifReorder: typeof IFSelect_ModifReorder;
  IFSelect_Modifier: typeof IFSelect_Modifier;
  IFSelect_PacketList: typeof IFSelect_PacketList;
  IFSelect_ParamEditor: typeof IFSelect_ParamEditor;
  IFSelect_SelectAnyList: typeof IFSelect_SelectAnyList;
  IFSelect_SelectAnyType: typeof IFSelect_SelectAnyType;
  IFSelect_SelectBase: typeof IFSelect_SelectBase;
  IFSelect_SelectCombine: typeof IFSelect_SelectCombine;
  IFSelect_SelectControl: typeof IFSelect_SelectControl;
  IFSelect_SelectDeduct: typeof IFSelect_SelectDeduct;
  IFSelect_SelectDiff: typeof IFSelect_SelectDiff;
  IFSelect_SelectEntityNumber: typeof IFSelect_SelectEntityNumber;
  IFSelect_SelectErrorEntities: typeof IFSelect_SelectErrorEntities;
  IFSelect_SelectExplore: typeof IFSelect_SelectExplore;
  IFSelect_SelectExtract: typeof IFSelect_SelectExtract;
  IFSelect_SelectFlag: typeof IFSelect_SelectFlag;
  IFSelect_SelectInList: typeof IFSelect_SelectInList;
  IFSelect_SelectIncorrectEntities: typeof IFSelect_SelectIncorrectEntities;
  IFSelect_SelectIntersection: typeof IFSelect_SelectIntersection;
  IFSelect_SelectModelEntities: typeof IFSelect_SelectModelEntities;
  IFSelect_SelectModelRoots: typeof IFSelect_SelectModelRoots;
  IFSelect_SelectPointed: typeof IFSelect_SelectPointed;
  IFSelect_SelectRange: typeof IFSelect_SelectRange;
  IFSelect_SelectRootComps: typeof IFSelect_SelectRootComps;
  IFSelect_SelectRoots: typeof IFSelect_SelectRoots;
  IFSelect_SelectSent: typeof IFSelect_SelectSent;
  IFSelect_SelectShared: typeof IFSelect_SelectShared;
  IFSelect_SelectSharing: typeof IFSelect_SelectSharing;
  IFSelect_SelectSignature: typeof IFSelect_SelectSignature;
  IFSelect_SelectSignedShared: typeof IFSelect_SelectSignedShared;
  IFSelect_SelectSignedSharing: typeof IFSelect_SelectSignedSharing;
  IFSelect_SelectSuite: typeof IFSelect_SelectSuite;
  IFSelect_SelectType: typeof IFSelect_SelectType;
  IFSelect_SelectUnion: typeof IFSelect_SelectUnion;
  IFSelect_SelectUnknownEntities: typeof IFSelect_SelectUnknownEntities;
  IFSelect_Selection: typeof IFSelect_Selection;
  IFSelect_SelectionIterator: typeof IFSelect_SelectionIterator;
  IFSelect_SessionDumper: typeof IFSelect_SessionDumper;
  IFSelect_SessionFile: typeof IFSelect_SessionFile;
  IFSelect_SessionPilot: typeof IFSelect_SessionPilot;
  IFSelect_ShareOut: typeof IFSelect_ShareOut;
  IFSelect_ShareOutResult: typeof IFSelect_ShareOutResult;
  IFSelect_SignAncestor: typeof IFSelect_SignAncestor;
  IFSelect_SignCategory: typeof IFSelect_SignCategory;
  IFSelect_SignCounter: typeof IFSelect_SignCounter;
  IFSelect_SignMultiple: typeof IFSelect_SignMultiple;
  IFSelect_SignType: typeof IFSelect_SignType;
  IFSelect_SignValidity: typeof IFSelect_SignValidity;
  IFSelect_Signature: typeof IFSelect_Signature;
  IFSelect_SignatureList: typeof IFSelect_SignatureList;
  IFSelect_TransformStandard: typeof IFSelect_TransformStandard;
  IFSelect_Transformer: typeof IFSelect_Transformer;
  IFSelect_WorkLibrary: typeof IFSelect_WorkLibrary;
  IFSelect_WorkSession: typeof IFSelect_WorkSession;
  IGESControl_ActorWrite: typeof IGESControl_ActorWrite;
  IGESControl_AlgoContainer: typeof IGESControl_AlgoContainer;
  IGESControl_Controller: typeof IGESControl_Controller;
  IGESControl_IGESBoundary: typeof IGESControl_IGESBoundary;
  IGESControl_Reader: typeof IGESControl_Reader;
  IGESControl_ToolContainer: typeof IGESControl_ToolContainer;
  IGESControl_Writer: typeof IGESControl_Writer;
  IMeshData_Curve: typeof IMeshData_Curve;
  IMeshData_Model: typeof IMeshData_Model;
  IMeshData_PCurve: typeof IMeshData_PCurve;
  IMeshData_ParametersList: typeof IMeshData_ParametersList;
  IMeshData_Shape: typeof IMeshData_Shape;
  IMeshData_StatusOwner: typeof IMeshData_StatusOwner;
  IMeshData_TessellatedShape: typeof IMeshData_TessellatedShape;
  IMeshTools_Context: typeof IMeshTools_Context;
  IMeshTools_CurveTessellator: typeof IMeshTools_CurveTessellator;
  IMeshTools_MeshAlgo: typeof IMeshTools_MeshAlgo;
  IMeshTools_MeshAlgoFactory: typeof IMeshTools_MeshAlgoFactory;
  IMeshTools_MeshBuilder: typeof IMeshTools_MeshBuilder;
  IMeshTools_ModelAlgo: typeof IMeshTools_ModelAlgo;
  IMeshTools_ModelBuilder: typeof IMeshTools_ModelBuilder;
  IMeshTools_ShapeExplorer: typeof IMeshTools_ShapeExplorer;
  IMeshTools_ShapeVisitor: typeof IMeshTools_ShapeVisitor;
  Image_AlienPixMap: typeof Image_AlienPixMap;
  Image_Diff: typeof Image_Diff;
  Image_PixMap: typeof Image_PixMap;
  Image_PixMapData: typeof Image_PixMapData;
  Image_Texture: typeof Image_Texture;
  IntAna2d_AnaIntersection: typeof IntAna2d_AnaIntersection;
  IntAna2d_Conic: typeof IntAna2d_Conic;
  IntAna2d_IntPoint: typeof IntAna2d_IntPoint;
  IntAna_Curve: typeof IntAna_Curve;
  IntAna_Int3Pln: typeof IntAna_Int3Pln;
  IntAna_IntConicQuad: typeof IntAna_IntConicQuad;
  IntAna_IntLinTorus: typeof IntAna_IntLinTorus;
  IntAna_IntQuadQuad: typeof IntAna_IntQuadQuad;
  IntAna_QuadQuadGeo: typeof IntAna_QuadQuadGeo;
  IntAna_Quadric: typeof IntAna_Quadric;
  IntCurveSurface_HInter: typeof IntCurveSurface_HInter;
  IntCurveSurface_Intersection: typeof IntCurveSurface_Intersection;
  IntCurveSurface_IntersectionPoint: typeof IntCurveSurface_IntersectionPoint;
  IntCurveSurface_IntersectionSegment: typeof IntCurveSurface_IntersectionSegment;
  IntCurveSurface_TheCSFunctionOfHInter: typeof IntCurveSurface_TheCSFunctionOfHInter;
  IntCurveSurface_TheExactHInter: typeof IntCurveSurface_TheExactHInter;
  IntCurveSurface_TheHCurveTool: typeof IntCurveSurface_TheHCurveTool;
  IntCurveSurface_TheInterferenceOfHInter: typeof IntCurveSurface_TheInterferenceOfHInter;
  IntCurveSurface_ThePolygonOfHInter: typeof IntCurveSurface_ThePolygonOfHInter;
  IntCurveSurface_ThePolygonToolOfHInter: typeof IntCurveSurface_ThePolygonToolOfHInter;
  IntCurveSurface_ThePolyhedronToolOfHInter: typeof IntCurveSurface_ThePolyhedronToolOfHInter;
  IntCurveSurface_TheQuadCurvExactHInter: typeof IntCurveSurface_TheQuadCurvExactHInter;
  IntCurveSurface_TheQuadCurvFuncOfTheQuadCurvExactHInter: typeof IntCurveSurface_TheQuadCurvFuncOfTheQuadCurvExactHInter;
  IntCurve_IConicTool: typeof IntCurve_IConicTool;
  IntCurve_IntConicConic: typeof IntCurve_IntConicConic;
  IntCurve_IntImpConicParConic: typeof IntCurve_IntImpConicParConic;
  IntCurve_MyImpParToolOfIntImpConicParConic: typeof IntCurve_MyImpParToolOfIntImpConicParConic;
  IntCurve_PConic: typeof IntCurve_PConic;
  IntCurve_PConicTool: typeof IntCurve_PConicTool;
  IntCurve_ProjectOnPConicTool: typeof IntCurve_ProjectOnPConicTool;
  IntCurvesFace_Intersector: typeof IntCurvesFace_Intersector;
  IntCurvesFace_ShapeIntersector: typeof IntCurvesFace_ShapeIntersector;
  IntPatch_ALine: typeof IntPatch_ALine;
  IntPatch_ALineToWLine: typeof IntPatch_ALineToWLine;
  IntPatch_ArcFunction: typeof IntPatch_ArcFunction;
  IntPatch_CSFunction: typeof IntPatch_CSFunction;
  IntPatch_CurvIntSurf: typeof IntPatch_CurvIntSurf;
  IntPatch_GLine: typeof IntPatch_GLine;
  IntPatch_HCurve2dTool: typeof IntPatch_HCurve2dTool;
  IntPatch_HInterTool: typeof IntPatch_HInterTool;
  IntPatch_ImpImpIntersection: typeof IntPatch_ImpImpIntersection;
  IntPatch_ImpPrmIntersection: typeof IntPatch_ImpPrmIntersection;
  IntPatch_InterferencePolyhedron: typeof IntPatch_InterferencePolyhedron;
  IntPatch_Intersection: typeof IntPatch_Intersection;
  IntPatch_Line: typeof IntPatch_Line;
  IntPatch_LineConstructor: typeof IntPatch_LineConstructor;
  IntPatch_Point: typeof IntPatch_Point;
  IntPatch_PointLine: typeof IntPatch_PointLine;
  IntPatch_PolyArc: typeof IntPatch_PolyArc;
  IntPatch_PolyLine: typeof IntPatch_PolyLine;
  IntPatch_Polygo: typeof IntPatch_Polygo;
  IntPatch_PolyhedronTool: typeof IntPatch_PolyhedronTool;
  IntPatch_PrmPrmIntersection: typeof IntPatch_PrmPrmIntersection;
  IntPatch_PrmPrmIntersection_T3Bits: typeof IntPatch_PrmPrmIntersection_T3Bits;
  IntPatch_RstInt: typeof IntPatch_RstInt;
  IntPatch_SpecialPoints: typeof IntPatch_SpecialPoints;
  IntPatch_TheIWLineOfTheIWalking: typeof IntPatch_TheIWLineOfTheIWalking;
  IntPatch_TheIWalking: typeof IntPatch_TheIWalking;
  IntPatch_ThePathPointOfTheSOnBounds: typeof IntPatch_ThePathPointOfTheSOnBounds;
  IntPatch_TheSOnBounds: typeof IntPatch_TheSOnBounds;
  IntPatch_TheSearchInside: typeof IntPatch_TheSearchInside;
  IntPatch_TheSegmentOfTheSOnBounds: typeof IntPatch_TheSegmentOfTheSOnBounds;
  IntPatch_TheSurfFunction: typeof IntPatch_TheSurfFunction;
  IntPatch_WLine: typeof IntPatch_WLine;
  IntPatch_WLineTool: typeof IntPatch_WLineTool;
  IntPolyh_Couple: typeof IntPolyh_Couple;
  IntPolyh_CoupleMapHasher: typeof IntPolyh_CoupleMapHasher;
  IntPolyh_Edge: typeof IntPolyh_Edge;
  IntPolyh_Intersection: typeof IntPolyh_Intersection;
  IntPolyh_Point: typeof IntPolyh_Point;
  IntPolyh_SectionLine: typeof IntPolyh_SectionLine;
  IntPolyh_StartPoint: typeof IntPolyh_StartPoint;
  IntPolyh_Tools: typeof IntPolyh_Tools;
  IntPolyh_Triangle: typeof IntPolyh_Triangle;
  IntRes2d_Domain: typeof IntRes2d_Domain;
  IntRes2d_Intersection: typeof IntRes2d_Intersection;
  IntRes2d_IntersectionPoint: typeof IntRes2d_IntersectionPoint;
  IntRes2d_IntersectionSegment: typeof IntRes2d_IntersectionSegment;
  IntRes2d_Transition: typeof IntRes2d_Transition;
  IntStart_SITopolTool: typeof IntStart_SITopolTool;
  IntSurf: typeof IntSurf;
  IntSurf_Couple: typeof IntSurf_Couple;
  IntSurf_InteriorPoint: typeof IntSurf_InteriorPoint;
  IntSurf_InteriorPointTool: typeof IntSurf_InteriorPointTool;
  IntSurf_LineOn2S: typeof IntSurf_LineOn2S;
  IntSurf_PathPoint: typeof IntSurf_PathPoint;
  IntSurf_PathPointTool: typeof IntSurf_PathPointTool;
  IntSurf_PntOn2S: typeof IntSurf_PntOn2S;
  IntSurf_Quadric: typeof IntSurf_Quadric;
  IntSurf_QuadricTool: typeof IntSurf_QuadricTool;
  IntSurf_Transition: typeof IntSurf_Transition;
  IntTools: typeof IntTools;
  IntTools_BaseRangeSample: typeof IntTools_BaseRangeSample;
  IntTools_BeanFaceIntersector: typeof IntTools_BeanFaceIntersector;
  IntTools_CArray1OfInteger: typeof IntTools_CArray1OfInteger;
  IntTools_CArray1OfReal: typeof IntTools_CArray1OfReal;
  IntTools_CommonPrt: typeof IntTools_CommonPrt;
  IntTools_Curve: typeof IntTools_Curve;
  IntTools_CurveRangeLocalizeData: typeof IntTools_CurveRangeLocalizeData;
  IntTools_CurveRangeSample: typeof IntTools_CurveRangeSample;
  IntTools_CurveRangeSampleMapHasher: typeof IntTools_CurveRangeSampleMapHasher;
  IntTools_EdgeEdge: typeof IntTools_EdgeEdge;
  IntTools_EdgeFace: typeof IntTools_EdgeFace;
  IntTools_FClass2d: typeof IntTools_FClass2d;
  IntTools_FaceFace: typeof IntTools_FaceFace;
  IntTools_MarkedRangeSet: typeof IntTools_MarkedRangeSet;
  IntTools_PntOn2Faces: typeof IntTools_PntOn2Faces;
  IntTools_Range: typeof IntTools_Range;
  IntTools_Root: typeof IntTools_Root;
  IntTools_ShrunkRange: typeof IntTools_ShrunkRange;
  IntTools_SurfaceRangeLocalizeData: typeof IntTools_SurfaceRangeLocalizeData;
  IntTools_SurfaceRangeSample: typeof IntTools_SurfaceRangeSample;
  IntTools_SurfaceRangeSampleMapHasher: typeof IntTools_SurfaceRangeSampleMapHasher;
  IntTools_Tools: typeof IntTools_Tools;
  IntTools_TopolTool: typeof IntTools_TopolTool;
  IntTools_WLineTool: typeof IntTools_WLineTool;
  IntWalk_PWalking: typeof IntWalk_PWalking;
  IntWalk_TheFunctionOfTheInt2S: typeof IntWalk_TheFunctionOfTheInt2S;
  IntWalk_TheInt2S: typeof IntWalk_TheInt2S;
  Interface_BitMap: typeof Interface_BitMap;
  Interface_Category: typeof Interface_Category;
  Interface_Check: typeof Interface_Check;
  Interface_CheckFailure: typeof Interface_CheckFailure;
  Interface_CheckIterator: typeof Interface_CheckIterator;
  Interface_CheckTool: typeof Interface_CheckTool;
  Interface_CopyControl: typeof Interface_CopyControl;
  Interface_CopyMap: typeof Interface_CopyMap;
  Interface_CopyTool: typeof Interface_CopyTool;
  Interface_EntityCluster: typeof Interface_EntityCluster;
  Interface_EntityIterator: typeof Interface_EntityIterator;
  Interface_EntityList: typeof Interface_EntityList;
  Interface_FileParameter: typeof Interface_FileParameter;
  Interface_FileReaderTool: typeof Interface_FileReaderTool;
  Interface_FloatWriter: typeof Interface_FloatWriter;
  Interface_GTool: typeof Interface_GTool;
  Interface_GeneralLib: typeof Interface_GeneralLib;
  Interface_GlobalNodeOfGeneralLib: typeof Interface_GlobalNodeOfGeneralLib;
  Interface_GlobalNodeOfReaderLib: typeof Interface_GlobalNodeOfReaderLib;
  Interface_GraphContent: typeof Interface_GraphContent;
  Interface_IntList: typeof Interface_IntList;
  Interface_IntVal: typeof Interface_IntVal;
  Interface_InterfaceError: typeof Interface_InterfaceError;
  Interface_InterfaceMismatch: typeof Interface_InterfaceMismatch;
  Interface_InterfaceModel: typeof Interface_InterfaceModel;
  Interface_LineBuffer: typeof Interface_LineBuffer;
  Interface_MSG: typeof Interface_MSG;
  Interface_MapAsciiStringHasher: typeof Interface_MapAsciiStringHasher;
  Interface_NodeOfGeneralLib: typeof Interface_NodeOfGeneralLib;
  Interface_NodeOfReaderLib: typeof Interface_NodeOfReaderLib;
  Interface_ParamList: typeof Interface_ParamList;
  Interface_ParamSet: typeof Interface_ParamSet;
  Interface_Protocol: typeof Interface_Protocol;
  Interface_ReaderLib: typeof Interface_ReaderLib;
  Interface_ReaderModule: typeof Interface_ReaderModule;
  Interface_ReportEntity: typeof Interface_ReportEntity;
  Interface_STAT: typeof Interface_STAT;
  Interface_ShareFlags: typeof Interface_ShareFlags;
  Interface_ShareTool: typeof Interface_ShareTool;
  Interface_SignLabel: typeof Interface_SignLabel;
  Interface_SignType: typeof Interface_SignType;
  Interface_Static: typeof Interface_Static;
  Interface_TypedValue: typeof Interface_TypedValue;
  Interface_UndefinedContent: typeof Interface_UndefinedContent;
  Interval: typeof Interval;
  Intf: typeof Intf;
  Intf_Interference: typeof Intf_Interference;
  Intf_InterferencePolygon2d: typeof Intf_InterferencePolygon2d;
  Intf_Polygon2d: typeof Intf_Polygon2d;
  Intf_SectionLine: typeof Intf_SectionLine;
  Intf_SectionPoint: typeof Intf_SectionPoint;
  Intf_TangentZone: typeof Intf_TangentZone;
  Intf_Tool: typeof Intf_Tool;
  Intrv_Interval: typeof Intrv_Interval;
  Intrv_Intervals: typeof Intrv_Intervals;
  LDOMBasicString: typeof LDOMBasicString;
  LDOMParser: typeof LDOMParser;
  LDOM_Attr: typeof LDOM_Attr;
  LDOM_BasicAttribute: typeof LDOM_BasicAttribute;
  LDOM_BasicElement: typeof LDOM_BasicElement;
  LDOM_BasicNode: typeof LDOM_BasicNode;
  LDOM_BasicText: typeof LDOM_BasicText;
  LDOM_CDATASection: typeof LDOM_CDATASection;
  LDOM_CharReference: typeof LDOM_CharReference;
  LDOM_CharacterData: typeof LDOM_CharacterData;
  LDOM_Comment: typeof LDOM_Comment;
  LDOM_Document: typeof LDOM_Document;
  LDOM_DocumentType: typeof LDOM_DocumentType;
  LDOM_Element: typeof LDOM_Element;
  LDOM_LDOMImplementation: typeof LDOM_LDOMImplementation;
  LDOM_NodeList: typeof LDOM_NodeList;
  LDOM_OSStream: typeof LDOM_OSStream;
  LDOM_Text: typeof LDOM_Text;
  LDOM_XmlReader: typeof LDOM_XmlReader;
  LDOM_XmlWriter: typeof LDOM_XmlWriter;
  LProp3d_CLProps: typeof LProp3d_CLProps;
  LProp3d_CurveTool: typeof LProp3d_CurveTool;
  LProp3d_SLProps: typeof LProp3d_SLProps;
  LProp3d_SurfaceTool: typeof LProp3d_SurfaceTool;
  LProp_AnalyticCurInf: typeof LProp_AnalyticCurInf;
  LProp_BadContinuity: typeof LProp_BadContinuity;
  LProp_CurAndInf: typeof LProp_CurAndInf;
  LProp_NotDefined: typeof LProp_NotDefined;
  Law: typeof Law;
  Law_BSpFunc: typeof Law_BSpFunc;
  Law_BSpline: typeof Law_BSpline;
  Law_BSplineKnotSplitting: typeof Law_BSplineKnotSplitting;
  Law_Composite: typeof Law_Composite;
  Law_Constant: typeof Law_Constant;
  Law_Function: typeof Law_Function;
  Law_Interpol: typeof Law_Interpol;
  Law_Linear: typeof Law_Linear;
  Law_S: typeof Law_S;
  LocOpe: typeof LocOpe;
  LocOpe_BuildShape: typeof LocOpe_BuildShape;
  LocOpe_BuildWires: typeof LocOpe_BuildWires;
  LocOpe_CSIntersector: typeof LocOpe_CSIntersector;
  LocOpe_CurveShapeIntersector: typeof LocOpe_CurveShapeIntersector;
  LocOpe_DPrism: typeof LocOpe_DPrism;
  LocOpe_FindEdges: typeof LocOpe_FindEdges;
  LocOpe_FindEdgesInFace: typeof LocOpe_FindEdgesInFace;
  LocOpe_GeneratedShape: typeof LocOpe_GeneratedShape;
  LocOpe_Generator: typeof LocOpe_Generator;
  LocOpe_GluedShape: typeof LocOpe_GluedShape;
  LocOpe_Gluer: typeof LocOpe_Gluer;
  LocOpe_LinearForm: typeof LocOpe_LinearForm;
  LocOpe_Pipe: typeof LocOpe_Pipe;
  LocOpe_PntFace: typeof LocOpe_PntFace;
  LocOpe_Prism: typeof LocOpe_Prism;
  LocOpe_SplitDrafts: typeof LocOpe_SplitDrafts;
  LocOpe_SplitShape: typeof LocOpe_SplitShape;
  LocOpe_Spliter: typeof LocOpe_Spliter;
  LocOpe_WiresOnShape: typeof LocOpe_WiresOnShape;
  LocalAnalysis: typeof LocalAnalysis;
  LocalAnalysis_CurveContinuity: typeof LocalAnalysis_CurveContinuity;
  LocalAnalysis_SurfaceContinuity: typeof LocalAnalysis_SurfaceContinuity;
  MAT2d_BiInt: typeof MAT2d_BiInt;
  MAT2d_Circuit: typeof MAT2d_Circuit;
  MAT2d_Connexion: typeof MAT2d_Connexion;
  MAT2d_MapBiIntHasher: typeof MAT2d_MapBiIntHasher;
  MAT2d_Mat2d: typeof MAT2d_Mat2d;
  MAT2d_MiniPath: typeof MAT2d_MiniPath;
  MAT2d_Tool2d: typeof MAT2d_Tool2d;
  MAT_Arc: typeof MAT_Arc;
  MAT_BasicElt: typeof MAT_BasicElt;
  MAT_Bisector: typeof MAT_Bisector;
  MAT_Edge: typeof MAT_Edge;
  MAT_Graph: typeof MAT_Graph;
  MAT_ListOfBisector: typeof MAT_ListOfBisector;
  MAT_ListOfEdge: typeof MAT_ListOfEdge;
  MAT_Node: typeof MAT_Node;
  MAT_TListNodeOfListOfBisector: typeof MAT_TListNodeOfListOfBisector;
  MAT_TListNodeOfListOfEdge: typeof MAT_TListNodeOfListOfEdge;
  MAT_Zone: typeof MAT_Zone;
  MeshVS_Buffer: typeof MeshVS_Buffer;
  MeshVS_CommonSensitiveEntity: typeof MeshVS_CommonSensitiveEntity;
  MeshVS_DataSource: typeof MeshVS_DataSource;
  MeshVS_DataSource3D: typeof MeshVS_DataSource3D;
  MeshVS_DeformedDataSource: typeof MeshVS_DeformedDataSource;
  MeshVS_Drawer: typeof MeshVS_Drawer;
  MeshVS_DummySensitiveEntity: typeof MeshVS_DummySensitiveEntity;
  MeshVS_ElementalColorPrsBuilder: typeof MeshVS_ElementalColorPrsBuilder;
  MeshVS_Mesh: typeof MeshVS_Mesh;
  MeshVS_MeshEntityOwner: typeof MeshVS_MeshEntityOwner;
  MeshVS_MeshOwner: typeof MeshVS_MeshOwner;
  MeshVS_MeshPrsBuilder: typeof MeshVS_MeshPrsBuilder;
  MeshVS_NodalColorPrsBuilder: typeof MeshVS_NodalColorPrsBuilder;
  MeshVS_PrsBuilder: typeof MeshVS_PrsBuilder;
  MeshVS_SensitiveFace: typeof MeshVS_SensitiveFace;
  MeshVS_SensitiveMesh: typeof MeshVS_SensitiveMesh;
  MeshVS_SensitivePolyhedron: typeof MeshVS_SensitivePolyhedron;
  MeshVS_SensitiveQuad: typeof MeshVS_SensitiveQuad;
  MeshVS_SensitiveSegment: typeof MeshVS_SensitiveSegment;
  MeshVS_TextPrsBuilder: typeof MeshVS_TextPrsBuilder;
  MeshVS_Tool: typeof MeshVS_Tool;
  MeshVS_VectorPrsBuilder: typeof MeshVS_VectorPrsBuilder;
  Message: typeof Message;
  Message_Alert: typeof Message_Alert;
  Message_Algorithm: typeof Message_Algorithm;
  Message_ExecStatus: typeof Message_ExecStatus;
  Message_Messenger: typeof Message_Messenger;
  Message_Msg: typeof Message_Msg;
  Message_MsgFile: typeof Message_MsgFile;
  Message_Printer: typeof Message_Printer;
  Message_PrinterOStream: typeof Message_PrinterOStream;
  Message_ProgressIndicator: typeof Message_ProgressIndicator;
  Message_ProgressScale: typeof Message_ProgressScale;
  Message_ProgressSentry: typeof Message_ProgressSentry;
  Message_Report: typeof Message_Report;
  MoniTool_AttrList: typeof MoniTool_AttrList;
  MoniTool_CaseData: typeof MoniTool_CaseData;
  MoniTool_DataInfo: typeof MoniTool_DataInfo;
  MoniTool_ElemHasher: typeof MoniTool_ElemHasher;
  MoniTool_Element: typeof MoniTool_Element;
  MoniTool_IntVal: typeof MoniTool_IntVal;
  MoniTool_MTHasher: typeof MoniTool_MTHasher;
  MoniTool_RealVal: typeof MoniTool_RealVal;
  MoniTool_SignShape: typeof MoniTool_SignShape;
  MoniTool_SignText: typeof MoniTool_SignText;
  MoniTool_Stat: typeof MoniTool_Stat;
  MoniTool_Timer: typeof MoniTool_Timer;
  MoniTool_TimerSentry: typeof MoniTool_TimerSentry;
  MoniTool_TransientElem: typeof MoniTool_TransientElem;
  MoniTool_TypedValue: typeof MoniTool_TypedValue;
  MyDirectPolynomialRoots: typeof MyDirectPolynomialRoots;
  NLPlate_HGPPConstraint: typeof NLPlate_HGPPConstraint;
  NLPlate_HPG0Constraint: typeof NLPlate_HPG0Constraint;
  NLPlate_HPG0G1Constraint: typeof NLPlate_HPG0G1Constraint;
  NLPlate_HPG0G2Constraint: typeof NLPlate_HPG0G2Constraint;
  NLPlate_HPG0G3Constraint: typeof NLPlate_HPG0G3Constraint;
  NLPlate_HPG1Constraint: typeof NLPlate_HPG1Constraint;
  NLPlate_HPG2Constraint: typeof NLPlate_HPG2Constraint;
  NLPlate_HPG3Constraint: typeof NLPlate_HPG3Constraint;
  NLPlate_NLPlate: typeof NLPlate_NLPlate;
  OSD: typeof OSD;
  OSD_Chronometer: typeof OSD_Chronometer;
  OSD_Directory: typeof OSD_Directory;
  OSD_DirectoryIterator: typeof OSD_DirectoryIterator;
  OSD_Disk: typeof OSD_Disk;
  OSD_Environment: typeof OSD_Environment;
  OSD_Error: typeof OSD_Error;
  OSD_Exception: typeof OSD_Exception;
  OSD_Exception_ACCESS_VIOLATION: typeof OSD_Exception_ACCESS_VIOLATION;
  OSD_Exception_ARRAY_BOUNDS_EXCEEDED: typeof OSD_Exception_ARRAY_BOUNDS_EXCEEDED;
  OSD_Exception_CTRL_BREAK: typeof OSD_Exception_CTRL_BREAK;
  OSD_Exception_FLT_DENORMAL_OPERAND: typeof OSD_Exception_FLT_DENORMAL_OPERAND;
  OSD_Exception_FLT_DIVIDE_BY_ZERO: typeof OSD_Exception_FLT_DIVIDE_BY_ZERO;
  OSD_Exception_FLT_INEXACT_RESULT: typeof OSD_Exception_FLT_INEXACT_RESULT;
  OSD_Exception_FLT_INVALID_OPERATION: typeof OSD_Exception_FLT_INVALID_OPERATION;
  OSD_Exception_FLT_OVERFLOW: typeof OSD_Exception_FLT_OVERFLOW;
  OSD_Exception_FLT_STACK_CHECK: typeof OSD_Exception_FLT_STACK_CHECK;
  OSD_Exception_FLT_UNDERFLOW: typeof OSD_Exception_FLT_UNDERFLOW;
  OSD_Exception_ILLEGAL_INSTRUCTION: typeof OSD_Exception_ILLEGAL_INSTRUCTION;
  OSD_Exception_INT_DIVIDE_BY_ZERO: typeof OSD_Exception_INT_DIVIDE_BY_ZERO;
  OSD_Exception_INT_OVERFLOW: typeof OSD_Exception_INT_OVERFLOW;
  OSD_Exception_INVALID_DISPOSITION: typeof OSD_Exception_INVALID_DISPOSITION;
  OSD_Exception_IN_PAGE_ERROR: typeof OSD_Exception_IN_PAGE_ERROR;
  OSD_Exception_NONCONTINUABLE_EXCEPTION: typeof OSD_Exception_NONCONTINUABLE_EXCEPTION;
  OSD_Exception_PRIV_INSTRUCTION: typeof OSD_Exception_PRIV_INSTRUCTION;
  OSD_Exception_STACK_OVERFLOW: typeof OSD_Exception_STACK_OVERFLOW;
  OSD_Exception_STATUS_NO_MEMORY: typeof OSD_Exception_STATUS_NO_MEMORY;
  OSD_FileIterator: typeof OSD_FileIterator;
  OSD_Host: typeof OSD_Host;
  OSD_MAllocHook: typeof OSD_MAllocHook;
  OSD_MemInfo: typeof OSD_MemInfo;
  OSD_OSDError: typeof OSD_OSDError;
  OSD_PerfMeter: typeof OSD_PerfMeter;
  OSD_Process: typeof OSD_Process;
  OSD_Protection: typeof OSD_Protection;
  OSD_SIGBUS: typeof OSD_SIGBUS;
  OSD_SIGHUP: typeof OSD_SIGHUP;
  OSD_SIGILL: typeof OSD_SIGILL;
  OSD_SIGINT: typeof OSD_SIGINT;
  OSD_SIGKILL: typeof OSD_SIGKILL;
  OSD_SIGQUIT: typeof OSD_SIGQUIT;
  OSD_SIGSEGV: typeof OSD_SIGSEGV;
  OSD_SIGSYS: typeof OSD_SIGSYS;
  OSD_SharedLibrary: typeof OSD_SharedLibrary;
  OSD_Signal: typeof OSD_Signal;
  OSD_Thread: typeof OSD_Thread;
  OSD_Timer: typeof OSD_Timer;
  PCDM: typeof PCDM;
  PCDM_DOMHeaderParser: typeof PCDM_DOMHeaderParser;
  PCDM_Document: typeof PCDM_Document;
  PCDM_DriverError: typeof PCDM_DriverError;
  PCDM_ReadWriter: typeof PCDM_ReadWriter;
  PCDM_ReadWriter_1: typeof PCDM_ReadWriter_1;
  PCDM_Reader: typeof PCDM_Reader;
  PCDM_Reference: typeof PCDM_Reference;
  PCDM_ReferenceIterator: typeof PCDM_ReferenceIterator;
  PCDM_RetrievalDriver: typeof PCDM_RetrievalDriver;
  PCDM_StorageDriver: typeof PCDM_StorageDriver;
  PCDM_Writer: typeof PCDM_Writer;
  PLib: typeof PLib;
  PLib_Base: typeof PLib_Base;
  PLib_DoubleJacobiPolynomial: typeof PLib_DoubleJacobiPolynomial;
  PLib_HermitJacobi: typeof PLib_HermitJacobi;
  PLib_JacobiPolynomial: typeof PLib_JacobiPolynomial;
  PeriodicInterval: typeof PeriodicInterval;
  Plate_D1: typeof Plate_D1;
  Plate_D2: typeof Plate_D2;
  Plate_D3: typeof Plate_D3;
  Plate_FreeGtoCConstraint: typeof Plate_FreeGtoCConstraint;
  Plate_GlobalTranslationConstraint: typeof Plate_GlobalTranslationConstraint;
  Plate_GtoCConstraint: typeof Plate_GtoCConstraint;
  Plate_LineConstraint: typeof Plate_LineConstraint;
  Plate_LinearScalarConstraint: typeof Plate_LinearScalarConstraint;
  Plate_LinearXYZConstraint: typeof Plate_LinearXYZConstraint;
  Plate_PinpointConstraint: typeof Plate_PinpointConstraint;
  Plate_PlaneConstraint: typeof Plate_PlaneConstraint;
  Plate_Plate: typeof Plate_Plate;
  Plate_SampledCurveConstraint: typeof Plate_SampledCurveConstraint;
  Plugin: typeof Plugin;
  Plugin_Failure: typeof Plugin_Failure;
  Poly: typeof Poly;
  Poly_CoherentLink: typeof Poly_CoherentLink;
  Poly_CoherentNode: typeof Poly_CoherentNode;
  Poly_CoherentTriangle: typeof Poly_CoherentTriangle;
  Poly_CoherentTriangulation: typeof Poly_CoherentTriangulation;
  Poly_Connect: typeof Poly_Connect;
  Poly_MakeLoops: typeof Poly_MakeLoops;
  Poly_MakeLoops2D: typeof Poly_MakeLoops2D;
  Poly_MakeLoops3D: typeof Poly_MakeLoops3D;
  Poly_Polygon2D: typeof Poly_Polygon2D;
  Poly_Polygon3D: typeof Poly_Polygon3D;
  Poly_PolygonOnTriangulation: typeof Poly_PolygonOnTriangulation;
  Poly_Triangle: typeof Poly_Triangle;
  Poly_Triangulation: typeof Poly_Triangulation;
  Precision: typeof Precision;
  ProjLib: typeof ProjLib;
  ProjLib_CompProjectedCurve: typeof ProjLib_CompProjectedCurve;
  ProjLib_ComputeApprox: typeof ProjLib_ComputeApprox;
  ProjLib_ComputeApproxOnPolarSurface: typeof ProjLib_ComputeApproxOnPolarSurface;
  ProjLib_Cone: typeof ProjLib_Cone;
  ProjLib_Cylinder: typeof ProjLib_Cylinder;
  ProjLib_HCompProjectedCurve: typeof ProjLib_HCompProjectedCurve;
  ProjLib_HProjectedCurve: typeof ProjLib_HProjectedCurve;
  ProjLib_Plane: typeof ProjLib_Plane;
  ProjLib_PrjFunc: typeof ProjLib_PrjFunc;
  ProjLib_PrjResolve: typeof ProjLib_PrjResolve;
  ProjLib_ProjectOnPlane: typeof ProjLib_ProjectOnPlane;
  ProjLib_ProjectedCurve: typeof ProjLib_ProjectedCurve;
  ProjLib_Projector: typeof ProjLib_Projector;
  ProjLib_Sphere: typeof ProjLib_Sphere;
  ProjLib_Torus: typeof ProjLib_Torus;
  Prs3d: typeof Prs3d;
  Prs3d_Arrow: typeof Prs3d_Arrow;
  Prs3d_ArrowAspect: typeof Prs3d_ArrowAspect;
  Prs3d_BasicAspect: typeof Prs3d_BasicAspect;
  Prs3d_DatumAspect: typeof Prs3d_DatumAspect;
  Prs3d_DimensionAspect: typeof Prs3d_DimensionAspect;
  Prs3d_DimensionUnits: typeof Prs3d_DimensionUnits;
  Prs3d_Drawer: typeof Prs3d_Drawer;
  Prs3d_InvalidAngle: typeof Prs3d_InvalidAngle;
  Prs3d_IsoAspect: typeof Prs3d_IsoAspect;
  Prs3d_LineAspect: typeof Prs3d_LineAspect;
  Prs3d_PlaneAspect: typeof Prs3d_PlaneAspect;
  Prs3d_PointAspect: typeof Prs3d_PointAspect;
  Prs3d_PresentationShadow: typeof Prs3d_PresentationShadow;
  Prs3d_Projector: typeof Prs3d_Projector;
  Prs3d_Root: typeof Prs3d_Root;
  Prs3d_ShadingAspect: typeof Prs3d_ShadingAspect;
  Prs3d_ShapeTool: typeof Prs3d_ShapeTool;
  Prs3d_Text: typeof Prs3d_Text;
  Prs3d_TextAspect: typeof Prs3d_TextAspect;
  Prs3d_ToolCylinder: typeof Prs3d_ToolCylinder;
  Prs3d_ToolDisk: typeof Prs3d_ToolDisk;
  Prs3d_ToolSector: typeof Prs3d_ToolSector;
  Prs3d_ToolSphere: typeof Prs3d_ToolSphere;
  PrsMgr_PresentableObject: typeof PrsMgr_PresentableObject;
  PrsMgr_Presentation: typeof PrsMgr_Presentation;
  PrsMgr_PresentationManager: typeof PrsMgr_PresentationManager;
  Quantity_Color: typeof Quantity_Color;
  Quantity_ColorDefinitionError: typeof Quantity_ColorDefinitionError;
  Quantity_ColorRGBA: typeof Quantity_ColorRGBA;
  Quantity_Date: typeof Quantity_Date;
  Quantity_DateDefinitionError: typeof Quantity_DateDefinitionError;
  Quantity_Period: typeof Quantity_Period;
  Quantity_PeriodDefinitionError: typeof Quantity_PeriodDefinitionError;
  RWGltf_CafReader: typeof RWGltf_CafReader;
  RWGltf_GltfLatePrimitiveArray: typeof RWGltf_GltfLatePrimitiveArray;
  RWGltf_GltfPrimArrayData: typeof RWGltf_GltfPrimArrayData;
  RWGltf_MaterialCommon: typeof RWGltf_MaterialCommon;
  RWGltf_MaterialMetallicRoughness: typeof RWGltf_MaterialMetallicRoughness;
  RWGltf_PrimitiveArrayReader: typeof RWGltf_PrimitiveArrayReader;
  RWGltf_TriangulationReader: typeof RWGltf_TriangulationReader;
  RWHeaderSection: typeof RWHeaderSection;
  RWHeaderSection_RWFileDescription: typeof RWHeaderSection_RWFileDescription;
  RWHeaderSection_RWFileName: typeof RWHeaderSection_RWFileName;
  RWHeaderSection_RWFileSchema: typeof RWHeaderSection_RWFileSchema;
  RWHeaderSection_ReadWriteModule: typeof RWHeaderSection_ReadWriteModule;
  RWMesh_CafReader: typeof RWMesh_CafReader;
  RWMesh_CoordinateSystemConverter: typeof RWMesh_CoordinateSystemConverter;
  RWObj: typeof RWObj;
  RWObj_CafReader: typeof RWObj_CafReader;
  RWObj_IShapeReceiver: typeof RWObj_IShapeReceiver;
  RWObj_MtlReader: typeof RWObj_MtlReader;
  RWObj_Reader: typeof RWObj_Reader;
  RWObj_TriangulationReader: typeof RWObj_TriangulationReader;
  RWStepAP203_RWCcDesignApproval: typeof RWStepAP203_RWCcDesignApproval;
  RWStepAP203_RWCcDesignCertification: typeof RWStepAP203_RWCcDesignCertification;
  RWStepAP203_RWCcDesignContract: typeof RWStepAP203_RWCcDesignContract;
  RWStepAP203_RWCcDesignDateAndTimeAssignment: typeof RWStepAP203_RWCcDesignDateAndTimeAssignment;
  RWStepAP203_RWCcDesignPersonAndOrganizationAssignment: typeof RWStepAP203_RWCcDesignPersonAndOrganizationAssignment;
  RWStepAP203_RWCcDesignSecurityClassification: typeof RWStepAP203_RWCcDesignSecurityClassification;
  RWStepAP203_RWCcDesignSpecificationReference: typeof RWStepAP203_RWCcDesignSpecificationReference;
  RWStepAP203_RWChange: typeof RWStepAP203_RWChange;
  RWStepAP203_RWChangeRequest: typeof RWStepAP203_RWChangeRequest;
  RWStepAP203_RWStartRequest: typeof RWStepAP203_RWStartRequest;
  RWStepAP203_RWStartWork: typeof RWStepAP203_RWStartWork;
  RWStepAP214: typeof RWStepAP214;
  RWStepAP214_RWAppliedApprovalAssignment: typeof RWStepAP214_RWAppliedApprovalAssignment;
  RWStepAP214_RWAppliedDateAndTimeAssignment: typeof RWStepAP214_RWAppliedDateAndTimeAssignment;
  RWStepAP214_RWAppliedDateAssignment: typeof RWStepAP214_RWAppliedDateAssignment;
  RWStepAP214_RWAppliedDocumentReference: typeof RWStepAP214_RWAppliedDocumentReference;
  RWStepAP214_RWAppliedExternalIdentificationAssignment: typeof RWStepAP214_RWAppliedExternalIdentificationAssignment;
  RWStepAP214_RWAppliedGroupAssignment: typeof RWStepAP214_RWAppliedGroupAssignment;
  RWStepAP214_RWAppliedOrganizationAssignment: typeof RWStepAP214_RWAppliedOrganizationAssignment;
  RWStepAP214_RWAppliedPersonAndOrganizationAssignment: typeof RWStepAP214_RWAppliedPersonAndOrganizationAssignment;
  RWStepAP214_RWAppliedPresentedItem: typeof RWStepAP214_RWAppliedPresentedItem;
  RWStepAP214_RWAppliedSecurityClassificationAssignment: typeof RWStepAP214_RWAppliedSecurityClassificationAssignment;
  RWStepAP214_RWAutoDesignActualDateAndTimeAssignment: typeof RWStepAP214_RWAutoDesignActualDateAndTimeAssignment;
  RWStepAP214_RWAutoDesignActualDateAssignment: typeof RWStepAP214_RWAutoDesignActualDateAssignment;
  RWStepAP214_RWAutoDesignApprovalAssignment: typeof RWStepAP214_RWAutoDesignApprovalAssignment;
  RWStepAP214_RWAutoDesignDateAndPersonAssignment: typeof RWStepAP214_RWAutoDesignDateAndPersonAssignment;
  RWStepAP214_RWAutoDesignDocumentReference: typeof RWStepAP214_RWAutoDesignDocumentReference;
  RWStepAP214_RWAutoDesignGroupAssignment: typeof RWStepAP214_RWAutoDesignGroupAssignment;
  RWStepAP214_RWAutoDesignNominalDateAndTimeAssignment: typeof RWStepAP214_RWAutoDesignNominalDateAndTimeAssignment;
  RWStepAP214_RWAutoDesignNominalDateAssignment: typeof RWStepAP214_RWAutoDesignNominalDateAssignment;
  RWStepAP214_RWAutoDesignOrganizationAssignment: typeof RWStepAP214_RWAutoDesignOrganizationAssignment;
  RWStepAP214_RWAutoDesignPersonAndOrganizationAssignment: typeof RWStepAP214_RWAutoDesignPersonAndOrganizationAssignment;
  RWStepAP214_RWAutoDesignPresentedItem: typeof RWStepAP214_RWAutoDesignPresentedItem;
  RWStepAP214_RWAutoDesignSecurityClassificationAssignment: typeof RWStepAP214_RWAutoDesignSecurityClassificationAssignment;
  RWStepAP214_RWClass: typeof RWStepAP214_RWClass;
  RWStepAP214_RWExternallyDefinedClass: typeof RWStepAP214_RWExternallyDefinedClass;
  RWStepAP214_RWExternallyDefinedGeneralProperty: typeof RWStepAP214_RWExternallyDefinedGeneralProperty;
  RWStepAP214_RWRepItemGroup: typeof RWStepAP214_RWRepItemGroup;
  RWStepAP214_ReadWriteModule: typeof RWStepAP214_ReadWriteModule;
  RWStepAP242_RWDraughtingModelItemAssociation: typeof RWStepAP242_RWDraughtingModelItemAssociation;
  RWStepAP242_RWGeometricItemSpecificUsage: typeof RWStepAP242_RWGeometricItemSpecificUsage;
  RWStepAP242_RWIdAttribute: typeof RWStepAP242_RWIdAttribute;
  RWStepAP242_RWItemIdentifiedRepresentationUsage: typeof RWStepAP242_RWItemIdentifiedRepresentationUsage;
  RWStepBasic_RWAction: typeof RWStepBasic_RWAction;
  RWStepBasic_RWActionAssignment: typeof RWStepBasic_RWActionAssignment;
  RWStepBasic_RWActionMethod: typeof RWStepBasic_RWActionMethod;
  RWStepBasic_RWActionRequestAssignment: typeof RWStepBasic_RWActionRequestAssignment;
  RWStepBasic_RWActionRequestSolution: typeof RWStepBasic_RWActionRequestSolution;
  RWStepBasic_RWAddress: typeof RWStepBasic_RWAddress;
  RWStepBasic_RWApplicationContext: typeof RWStepBasic_RWApplicationContext;
  RWStepBasic_RWApplicationContextElement: typeof RWStepBasic_RWApplicationContextElement;
  RWStepBasic_RWApplicationProtocolDefinition: typeof RWStepBasic_RWApplicationProtocolDefinition;
  RWStepBasic_RWApproval: typeof RWStepBasic_RWApproval;
  RWStepBasic_RWApprovalDateTime: typeof RWStepBasic_RWApprovalDateTime;
  RWStepBasic_RWApprovalPersonOrganization: typeof RWStepBasic_RWApprovalPersonOrganization;
  RWStepBasic_RWApprovalRelationship: typeof RWStepBasic_RWApprovalRelationship;
  RWStepBasic_RWApprovalRole: typeof RWStepBasic_RWApprovalRole;
  RWStepBasic_RWApprovalStatus: typeof RWStepBasic_RWApprovalStatus;
  RWStepBasic_RWCalendarDate: typeof RWStepBasic_RWCalendarDate;
  RWStepBasic_RWCertification: typeof RWStepBasic_RWCertification;
  RWStepBasic_RWCertificationAssignment: typeof RWStepBasic_RWCertificationAssignment;
  RWStepBasic_RWCertificationType: typeof RWStepBasic_RWCertificationType;
  RWStepBasic_RWCharacterizedObject: typeof RWStepBasic_RWCharacterizedObject;
  RWStepBasic_RWContract: typeof RWStepBasic_RWContract;
  RWStepBasic_RWContractAssignment: typeof RWStepBasic_RWContractAssignment;
  RWStepBasic_RWContractType: typeof RWStepBasic_RWContractType;
  RWStepBasic_RWConversionBasedUnit: typeof RWStepBasic_RWConversionBasedUnit;
  RWStepBasic_RWConversionBasedUnitAndAreaUnit: typeof RWStepBasic_RWConversionBasedUnitAndAreaUnit;
  RWStepBasic_RWConversionBasedUnitAndLengthUnit: typeof RWStepBasic_RWConversionBasedUnitAndLengthUnit;
  RWStepBasic_RWConversionBasedUnitAndMassUnit: typeof RWStepBasic_RWConversionBasedUnitAndMassUnit;
  RWStepBasic_RWConversionBasedUnitAndPlaneAngleUnit: typeof RWStepBasic_RWConversionBasedUnitAndPlaneAngleUnit;
  RWStepBasic_RWConversionBasedUnitAndRatioUnit: typeof RWStepBasic_RWConversionBasedUnitAndRatioUnit;
  RWStepBasic_RWConversionBasedUnitAndSolidAngleUnit: typeof RWStepBasic_RWConversionBasedUnitAndSolidAngleUnit;
  RWStepBasic_RWConversionBasedUnitAndTimeUnit: typeof RWStepBasic_RWConversionBasedUnitAndTimeUnit;
  RWStepBasic_RWConversionBasedUnitAndVolumeUnit: typeof RWStepBasic_RWConversionBasedUnitAndVolumeUnit;
  RWStepBasic_RWCoordinatedUniversalTimeOffset: typeof RWStepBasic_RWCoordinatedUniversalTimeOffset;
  RWStepBasic_RWDate: typeof RWStepBasic_RWDate;
  RWStepBasic_RWDateAndTime: typeof RWStepBasic_RWDateAndTime;
  RWStepBasic_RWDateRole: typeof RWStepBasic_RWDateRole;
  RWStepBasic_RWDateTimeRole: typeof RWStepBasic_RWDateTimeRole;
  RWStepBasic_RWDerivedUnit: typeof RWStepBasic_RWDerivedUnit;
  RWStepBasic_RWDerivedUnitElement: typeof RWStepBasic_RWDerivedUnitElement;
  RWStepBasic_RWDimensionalExponents: typeof RWStepBasic_RWDimensionalExponents;
  RWStepBasic_RWDocument: typeof RWStepBasic_RWDocument;
  RWStepBasic_RWDocumentFile: typeof RWStepBasic_RWDocumentFile;
  RWStepBasic_RWDocumentProductAssociation: typeof RWStepBasic_RWDocumentProductAssociation;
  RWStepBasic_RWDocumentProductEquivalence: typeof RWStepBasic_RWDocumentProductEquivalence;
  RWStepBasic_RWDocumentRelationship: typeof RWStepBasic_RWDocumentRelationship;
  RWStepBasic_RWDocumentRepresentationType: typeof RWStepBasic_RWDocumentRepresentationType;
  RWStepBasic_RWDocumentType: typeof RWStepBasic_RWDocumentType;
  RWStepBasic_RWDocumentUsageConstraint: typeof RWStepBasic_RWDocumentUsageConstraint;
  RWStepBasic_RWEffectivity: typeof RWStepBasic_RWEffectivity;
  RWStepBasic_RWEffectivityAssignment: typeof RWStepBasic_RWEffectivityAssignment;
  RWStepBasic_RWEulerAngles: typeof RWStepBasic_RWEulerAngles;
  RWStepBasic_RWExternalIdentificationAssignment: typeof RWStepBasic_RWExternalIdentificationAssignment;
  RWStepBasic_RWExternalSource: typeof RWStepBasic_RWExternalSource;
  RWStepBasic_RWExternallyDefinedItem: typeof RWStepBasic_RWExternallyDefinedItem;
  RWStepBasic_RWGeneralProperty: typeof RWStepBasic_RWGeneralProperty;
  RWStepBasic_RWGroup: typeof RWStepBasic_RWGroup;
  RWStepBasic_RWGroupAssignment: typeof RWStepBasic_RWGroupAssignment;
  RWStepBasic_RWGroupRelationship: typeof RWStepBasic_RWGroupRelationship;
  RWStepBasic_RWIdentificationAssignment: typeof RWStepBasic_RWIdentificationAssignment;
  RWStepBasic_RWIdentificationRole: typeof RWStepBasic_RWIdentificationRole;
  RWStepBasic_RWLengthMeasureWithUnit: typeof RWStepBasic_RWLengthMeasureWithUnit;
  RWStepBasic_RWLengthUnit: typeof RWStepBasic_RWLengthUnit;
  RWStepBasic_RWLocalTime: typeof RWStepBasic_RWLocalTime;
  RWStepBasic_RWMassMeasureWithUnit: typeof RWStepBasic_RWMassMeasureWithUnit;
  RWStepBasic_RWMassUnit: typeof RWStepBasic_RWMassUnit;
  RWStepBasic_RWMeasureWithUnit: typeof RWStepBasic_RWMeasureWithUnit;
  RWStepBasic_RWMechanicalContext: typeof RWStepBasic_RWMechanicalContext;
  RWStepBasic_RWNameAssignment: typeof RWStepBasic_RWNameAssignment;
  RWStepBasic_RWNamedUnit: typeof RWStepBasic_RWNamedUnit;
  RWStepBasic_RWObjectRole: typeof RWStepBasic_RWObjectRole;
  RWStepBasic_RWOrdinalDate: typeof RWStepBasic_RWOrdinalDate;
  RWStepBasic_RWOrganization: typeof RWStepBasic_RWOrganization;
  RWStepBasic_RWOrganizationRole: typeof RWStepBasic_RWOrganizationRole;
  RWStepBasic_RWOrganizationalAddress: typeof RWStepBasic_RWOrganizationalAddress;
  RWStepBasic_RWPerson: typeof RWStepBasic_RWPerson;
  RWStepBasic_RWPersonAndOrganization: typeof RWStepBasic_RWPersonAndOrganization;
  RWStepBasic_RWPersonAndOrganizationRole: typeof RWStepBasic_RWPersonAndOrganizationRole;
  RWStepBasic_RWPersonalAddress: typeof RWStepBasic_RWPersonalAddress;
  RWStepBasic_RWPlaneAngleMeasureWithUnit: typeof RWStepBasic_RWPlaneAngleMeasureWithUnit;
  RWStepBasic_RWPlaneAngleUnit: typeof RWStepBasic_RWPlaneAngleUnit;
  RWStepBasic_RWProduct: typeof RWStepBasic_RWProduct;
  RWStepBasic_RWProductCategory: typeof RWStepBasic_RWProductCategory;
  RWStepBasic_RWProductCategoryRelationship: typeof RWStepBasic_RWProductCategoryRelationship;
  RWStepBasic_RWProductConceptContext: typeof RWStepBasic_RWProductConceptContext;
  RWStepBasic_RWProductContext: typeof RWStepBasic_RWProductContext;
  RWStepBasic_RWProductDefinition: typeof RWStepBasic_RWProductDefinition;
  RWStepBasic_RWProductDefinitionContext: typeof RWStepBasic_RWProductDefinitionContext;
  RWStepBasic_RWProductDefinitionEffectivity: typeof RWStepBasic_RWProductDefinitionEffectivity;
  RWStepBasic_RWProductDefinitionFormation: typeof RWStepBasic_RWProductDefinitionFormation;
  RWStepBasic_RWProductDefinitionFormationRelationship: typeof RWStepBasic_RWProductDefinitionFormationRelationship;
  RWStepBasic_RWProductDefinitionFormationWithSpecifiedSource: typeof RWStepBasic_RWProductDefinitionFormationWithSpecifiedSource;
  RWStepBasic_RWProductDefinitionReference: typeof RWStepBasic_RWProductDefinitionReference;
  RWStepBasic_RWProductDefinitionReferenceWithLocalRepresentation: typeof RWStepBasic_RWProductDefinitionReferenceWithLocalRepresentation;
  RWStepBasic_RWProductDefinitionRelationship: typeof RWStepBasic_RWProductDefinitionRelationship;
  RWStepBasic_RWProductDefinitionWithAssociatedDocuments: typeof RWStepBasic_RWProductDefinitionWithAssociatedDocuments;
  RWStepBasic_RWProductRelatedProductCategory: typeof RWStepBasic_RWProductRelatedProductCategory;
  RWStepBasic_RWProductType: typeof RWStepBasic_RWProductType;
  RWStepBasic_RWRatioMeasureWithUnit: typeof RWStepBasic_RWRatioMeasureWithUnit;
  RWStepBasic_RWRoleAssociation: typeof RWStepBasic_RWRoleAssociation;
  RWStepBasic_RWSecurityClassification: typeof RWStepBasic_RWSecurityClassification;
  RWStepBasic_RWSecurityClassificationLevel: typeof RWStepBasic_RWSecurityClassificationLevel;
  RWStepBasic_RWSiUnit: typeof RWStepBasic_RWSiUnit;
  RWStepBasic_RWSiUnitAndAreaUnit: typeof RWStepBasic_RWSiUnitAndAreaUnit;
  RWStepBasic_RWSiUnitAndLengthUnit: typeof RWStepBasic_RWSiUnitAndLengthUnit;
  RWStepBasic_RWSiUnitAndMassUnit: typeof RWStepBasic_RWSiUnitAndMassUnit;
  RWStepBasic_RWSiUnitAndPlaneAngleUnit: typeof RWStepBasic_RWSiUnitAndPlaneAngleUnit;
  RWStepBasic_RWSiUnitAndRatioUnit: typeof RWStepBasic_RWSiUnitAndRatioUnit;
  RWStepBasic_RWSiUnitAndSolidAngleUnit: typeof RWStepBasic_RWSiUnitAndSolidAngleUnit;
  RWStepBasic_RWSiUnitAndThermodynamicTemperatureUnit: typeof RWStepBasic_RWSiUnitAndThermodynamicTemperatureUnit;
  RWStepBasic_RWSiUnitAndTimeUnit: typeof RWStepBasic_RWSiUnitAndTimeUnit;
  RWStepBasic_RWSiUnitAndVolumeUnit: typeof RWStepBasic_RWSiUnitAndVolumeUnit;
  RWStepBasic_RWSolidAngleMeasureWithUnit: typeof RWStepBasic_RWSolidAngleMeasureWithUnit;
  RWStepBasic_RWSolidAngleUnit: typeof RWStepBasic_RWSolidAngleUnit;
  RWStepBasic_RWThermodynamicTemperatureUnit: typeof RWStepBasic_RWThermodynamicTemperatureUnit;
  RWStepBasic_RWUncertaintyMeasureWithUnit: typeof RWStepBasic_RWUncertaintyMeasureWithUnit;
  RWStepBasic_RWVersionedActionRequest: typeof RWStepBasic_RWVersionedActionRequest;
  RWStepBasic_RWWeekOfYearAndDayDate: typeof RWStepBasic_RWWeekOfYearAndDayDate;
  RWStepDimTol_RWAngularityTolerance: typeof RWStepDimTol_RWAngularityTolerance;
  RWStepDimTol_RWCircularRunoutTolerance: typeof RWStepDimTol_RWCircularRunoutTolerance;
  RWStepDimTol_RWCoaxialityTolerance: typeof RWStepDimTol_RWCoaxialityTolerance;
  RWStepDimTol_RWCommonDatum: typeof RWStepDimTol_RWCommonDatum;
  RWStepDimTol_RWConcentricityTolerance: typeof RWStepDimTol_RWConcentricityTolerance;
  RWStepDimTol_RWCylindricityTolerance: typeof RWStepDimTol_RWCylindricityTolerance;
  RWStepDimTol_RWDatum: typeof RWStepDimTol_RWDatum;
  RWStepDimTol_RWDatumFeature: typeof RWStepDimTol_RWDatumFeature;
  RWStepDimTol_RWDatumReference: typeof RWStepDimTol_RWDatumReference;
  RWStepDimTol_RWDatumReferenceCompartment: typeof RWStepDimTol_RWDatumReferenceCompartment;
  RWStepDimTol_RWDatumReferenceElement: typeof RWStepDimTol_RWDatumReferenceElement;
  RWStepDimTol_RWDatumReferenceModifierWithValue: typeof RWStepDimTol_RWDatumReferenceModifierWithValue;
  RWStepDimTol_RWDatumSystem: typeof RWStepDimTol_RWDatumSystem;
  RWStepDimTol_RWDatumTarget: typeof RWStepDimTol_RWDatumTarget;
  RWStepDimTol_RWFlatnessTolerance: typeof RWStepDimTol_RWFlatnessTolerance;
  RWStepDimTol_RWGeneralDatumReference: typeof RWStepDimTol_RWGeneralDatumReference;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRef: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRef;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMod: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMod;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol;
  RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndUneqDisGeoTol: typeof RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndUneqDisGeoTol;
  RWStepDimTol_RWGeoTolAndGeoTolWthMaxTol: typeof RWStepDimTol_RWGeoTolAndGeoTolWthMaxTol;
  RWStepDimTol_RWGeoTolAndGeoTolWthMod: typeof RWStepDimTol_RWGeoTolAndGeoTolWthMod;
  RWStepDimTol_RWGeometricTolerance: typeof RWStepDimTol_RWGeometricTolerance;
  RWStepDimTol_RWGeometricToleranceRelationship: typeof RWStepDimTol_RWGeometricToleranceRelationship;
  RWStepDimTol_RWGeometricToleranceWithDatumReference: typeof RWStepDimTol_RWGeometricToleranceWithDatumReference;
  RWStepDimTol_RWGeometricToleranceWithDefinedAreaUnit: typeof RWStepDimTol_RWGeometricToleranceWithDefinedAreaUnit;
  RWStepDimTol_RWGeometricToleranceWithDefinedUnit: typeof RWStepDimTol_RWGeometricToleranceWithDefinedUnit;
  RWStepDimTol_RWGeometricToleranceWithMaximumTolerance: typeof RWStepDimTol_RWGeometricToleranceWithMaximumTolerance;
  RWStepDimTol_RWGeometricToleranceWithModifiers: typeof RWStepDimTol_RWGeometricToleranceWithModifiers;
  RWStepDimTol_RWLineProfileTolerance: typeof RWStepDimTol_RWLineProfileTolerance;
  RWStepDimTol_RWModifiedGeometricTolerance: typeof RWStepDimTol_RWModifiedGeometricTolerance;
  RWStepDimTol_RWNonUniformZoneDefinition: typeof RWStepDimTol_RWNonUniformZoneDefinition;
  RWStepDimTol_RWParallelismTolerance: typeof RWStepDimTol_RWParallelismTolerance;
  RWStepDimTol_RWPerpendicularityTolerance: typeof RWStepDimTol_RWPerpendicularityTolerance;
  RWStepDimTol_RWPlacedDatumTargetFeature: typeof RWStepDimTol_RWPlacedDatumTargetFeature;
  RWStepDimTol_RWPositionTolerance: typeof RWStepDimTol_RWPositionTolerance;
  RWStepDimTol_RWProjectedZoneDefinition: typeof RWStepDimTol_RWProjectedZoneDefinition;
  RWStepDimTol_RWRoundnessTolerance: typeof RWStepDimTol_RWRoundnessTolerance;
  RWStepDimTol_RWRunoutZoneDefinition: typeof RWStepDimTol_RWRunoutZoneDefinition;
  RWStepDimTol_RWRunoutZoneOrientation: typeof RWStepDimTol_RWRunoutZoneOrientation;
  RWStepDimTol_RWStraightnessTolerance: typeof RWStepDimTol_RWStraightnessTolerance;
  RWStepDimTol_RWSurfaceProfileTolerance: typeof RWStepDimTol_RWSurfaceProfileTolerance;
  RWStepDimTol_RWSymmetryTolerance: typeof RWStepDimTol_RWSymmetryTolerance;
  RWStepDimTol_RWToleranceZone: typeof RWStepDimTol_RWToleranceZone;
  RWStepDimTol_RWToleranceZoneDefinition: typeof RWStepDimTol_RWToleranceZoneDefinition;
  RWStepDimTol_RWToleranceZoneForm: typeof RWStepDimTol_RWToleranceZoneForm;
  RWStepDimTol_RWTotalRunoutTolerance: typeof RWStepDimTol_RWTotalRunoutTolerance;
  RWStepDimTol_RWUnequallyDisposedGeometricTolerance: typeof RWStepDimTol_RWUnequallyDisposedGeometricTolerance;
  RWStepElement_RWAnalysisItemWithinRepresentation: typeof RWStepElement_RWAnalysisItemWithinRepresentation;
  RWStepElement_RWCurve3dElementDescriptor: typeof RWStepElement_RWCurve3dElementDescriptor;
  RWStepElement_RWCurveElementEndReleasePacket: typeof RWStepElement_RWCurveElementEndReleasePacket;
  RWStepElement_RWCurveElementSectionDefinition: typeof RWStepElement_RWCurveElementSectionDefinition;
  RWStepElement_RWCurveElementSectionDerivedDefinitions: typeof RWStepElement_RWCurveElementSectionDerivedDefinitions;
  RWStepElement_RWElementDescriptor: typeof RWStepElement_RWElementDescriptor;
  RWStepElement_RWElementMaterial: typeof RWStepElement_RWElementMaterial;
  RWStepElement_RWSurface3dElementDescriptor: typeof RWStepElement_RWSurface3dElementDescriptor;
  RWStepElement_RWSurfaceElementProperty: typeof RWStepElement_RWSurfaceElementProperty;
  RWStepElement_RWSurfaceSection: typeof RWStepElement_RWSurfaceSection;
  RWStepElement_RWSurfaceSectionField: typeof RWStepElement_RWSurfaceSectionField;
  RWStepElement_RWSurfaceSectionFieldConstant: typeof RWStepElement_RWSurfaceSectionFieldConstant;
  RWStepElement_RWSurfaceSectionFieldVarying: typeof RWStepElement_RWSurfaceSectionFieldVarying;
  RWStepElement_RWUniformSurfaceSection: typeof RWStepElement_RWUniformSurfaceSection;
  RWStepElement_RWVolume3dElementDescriptor: typeof RWStepElement_RWVolume3dElementDescriptor;
  RWStepFEA_RWAlignedCurve3dElementCoordinateSystem: typeof RWStepFEA_RWAlignedCurve3dElementCoordinateSystem;
  RWStepFEA_RWAlignedSurface3dElementCoordinateSystem: typeof RWStepFEA_RWAlignedSurface3dElementCoordinateSystem;
  RWStepFEA_RWArbitraryVolume3dElementCoordinateSystem: typeof RWStepFEA_RWArbitraryVolume3dElementCoordinateSystem;
  RWStepFEA_RWConstantSurface3dElementCoordinateSystem: typeof RWStepFEA_RWConstantSurface3dElementCoordinateSystem;
  RWStepFEA_RWCurve3dElementProperty: typeof RWStepFEA_RWCurve3dElementProperty;
  RWStepFEA_RWCurve3dElementRepresentation: typeof RWStepFEA_RWCurve3dElementRepresentation;
  RWStepFEA_RWCurveElementEndOffset: typeof RWStepFEA_RWCurveElementEndOffset;
  RWStepFEA_RWCurveElementEndRelease: typeof RWStepFEA_RWCurveElementEndRelease;
  RWStepFEA_RWCurveElementInterval: typeof RWStepFEA_RWCurveElementInterval;
  RWStepFEA_RWCurveElementIntervalConstant: typeof RWStepFEA_RWCurveElementIntervalConstant;
  RWStepFEA_RWCurveElementIntervalLinearlyVarying: typeof RWStepFEA_RWCurveElementIntervalLinearlyVarying;
  RWStepFEA_RWCurveElementLocation: typeof RWStepFEA_RWCurveElementLocation;
  RWStepFEA_RWDummyNode: typeof RWStepFEA_RWDummyNode;
  RWStepFEA_RWElementGeometricRelationship: typeof RWStepFEA_RWElementGeometricRelationship;
  RWStepFEA_RWElementGroup: typeof RWStepFEA_RWElementGroup;
  RWStepFEA_RWElementRepresentation: typeof RWStepFEA_RWElementRepresentation;
  RWStepFEA_RWFeaAreaDensity: typeof RWStepFEA_RWFeaAreaDensity;
  RWStepFEA_RWFeaAxis2Placement3d: typeof RWStepFEA_RWFeaAxis2Placement3d;
  RWStepFEA_RWFeaCurveSectionGeometricRelationship: typeof RWStepFEA_RWFeaCurveSectionGeometricRelationship;
  RWStepFEA_RWFeaGroup: typeof RWStepFEA_RWFeaGroup;
  RWStepFEA_RWFeaLinearElasticity: typeof RWStepFEA_RWFeaLinearElasticity;
  RWStepFEA_RWFeaMassDensity: typeof RWStepFEA_RWFeaMassDensity;
  RWStepFEA_RWFeaMaterialPropertyRepresentation: typeof RWStepFEA_RWFeaMaterialPropertyRepresentation;
  RWStepFEA_RWFeaMaterialPropertyRepresentationItem: typeof RWStepFEA_RWFeaMaterialPropertyRepresentationItem;
  RWStepFEA_RWFeaModel: typeof RWStepFEA_RWFeaModel;
  RWStepFEA_RWFeaModel3d: typeof RWStepFEA_RWFeaModel3d;
  RWStepFEA_RWFeaModelDefinition: typeof RWStepFEA_RWFeaModelDefinition;
  RWStepFEA_RWFeaMoistureAbsorption: typeof RWStepFEA_RWFeaMoistureAbsorption;
  RWStepFEA_RWFeaParametricPoint: typeof RWStepFEA_RWFeaParametricPoint;
  RWStepFEA_RWFeaRepresentationItem: typeof RWStepFEA_RWFeaRepresentationItem;
  RWStepFEA_RWFeaSecantCoefficientOfLinearThermalExpansion: typeof RWStepFEA_RWFeaSecantCoefficientOfLinearThermalExpansion;
  RWStepFEA_RWFeaShellBendingStiffness: typeof RWStepFEA_RWFeaShellBendingStiffness;
  RWStepFEA_RWFeaShellMembraneBendingCouplingStiffness: typeof RWStepFEA_RWFeaShellMembraneBendingCouplingStiffness;
  RWStepFEA_RWFeaShellMembraneStiffness: typeof RWStepFEA_RWFeaShellMembraneStiffness;
  RWStepFEA_RWFeaShellShearStiffness: typeof RWStepFEA_RWFeaShellShearStiffness;
  RWStepFEA_RWFeaSurfaceSectionGeometricRelationship: typeof RWStepFEA_RWFeaSurfaceSectionGeometricRelationship;
  RWStepFEA_RWFeaTangentialCoefficientOfLinearThermalExpansion: typeof RWStepFEA_RWFeaTangentialCoefficientOfLinearThermalExpansion;
  RWStepFEA_RWFreedomAndCoefficient: typeof RWStepFEA_RWFreedomAndCoefficient;
  RWStepFEA_RWFreedomsList: typeof RWStepFEA_RWFreedomsList;
  RWStepFEA_RWGeometricNode: typeof RWStepFEA_RWGeometricNode;
  RWStepFEA_RWNode: typeof RWStepFEA_RWNode;
  RWStepFEA_RWNodeDefinition: typeof RWStepFEA_RWNodeDefinition;
  RWStepFEA_RWNodeGroup: typeof RWStepFEA_RWNodeGroup;
  RWStepFEA_RWNodeRepresentation: typeof RWStepFEA_RWNodeRepresentation;
  RWStepFEA_RWNodeSet: typeof RWStepFEA_RWNodeSet;
  RWStepFEA_RWNodeWithSolutionCoordinateSystem: typeof RWStepFEA_RWNodeWithSolutionCoordinateSystem;
  RWStepFEA_RWNodeWithVector: typeof RWStepFEA_RWNodeWithVector;
  RWStepFEA_RWParametricCurve3dElementCoordinateDirection: typeof RWStepFEA_RWParametricCurve3dElementCoordinateDirection;
  RWStepFEA_RWParametricCurve3dElementCoordinateSystem: typeof RWStepFEA_RWParametricCurve3dElementCoordinateSystem;
  RWStepFEA_RWParametricSurface3dElementCoordinateSystem: typeof RWStepFEA_RWParametricSurface3dElementCoordinateSystem;
  RWStepFEA_RWSurface3dElementRepresentation: typeof RWStepFEA_RWSurface3dElementRepresentation;
  RWStepFEA_RWVolume3dElementRepresentation: typeof RWStepFEA_RWVolume3dElementRepresentation;
  RWStepRepr_RWAllAroundShapeAspect: typeof RWStepRepr_RWAllAroundShapeAspect;
  RWStepRepr_RWApex: typeof RWStepRepr_RWApex;
  RWStepRepr_RWAssemblyComponentUsage: typeof RWStepRepr_RWAssemblyComponentUsage;
  RWStepRepr_RWAssemblyComponentUsageSubstitute: typeof RWStepRepr_RWAssemblyComponentUsageSubstitute;
  RWStepRepr_RWBetweenShapeAspect: typeof RWStepRepr_RWBetweenShapeAspect;
  RWStepRepr_RWCentreOfSymmetry: typeof RWStepRepr_RWCentreOfSymmetry;
  RWStepRepr_RWCharacterizedRepresentation: typeof RWStepRepr_RWCharacterizedRepresentation;
  RWStepRepr_RWCompGroupShAspAndCompShAspAndDatumFeatAndShAsp: typeof RWStepRepr_RWCompGroupShAspAndCompShAspAndDatumFeatAndShAsp;
  RWStepRepr_RWCompShAspAndDatumFeatAndShAsp: typeof RWStepRepr_RWCompShAspAndDatumFeatAndShAsp;
  RWStepRepr_RWCompositeGroupShapeAspect: typeof RWStepRepr_RWCompositeGroupShapeAspect;
  RWStepRepr_RWCompositeShapeAspect: typeof RWStepRepr_RWCompositeShapeAspect;
  RWStepRepr_RWCompoundRepresentationItem: typeof RWStepRepr_RWCompoundRepresentationItem;
  RWStepRepr_RWConfigurationDesign: typeof RWStepRepr_RWConfigurationDesign;
  RWStepRepr_RWConfigurationEffectivity: typeof RWStepRepr_RWConfigurationEffectivity;
  RWStepRepr_RWConfigurationItem: typeof RWStepRepr_RWConfigurationItem;
  RWStepRepr_RWConstructiveGeometryRepresentation: typeof RWStepRepr_RWConstructiveGeometryRepresentation;
  RWStepRepr_RWConstructiveGeometryRepresentationRelationship: typeof RWStepRepr_RWConstructiveGeometryRepresentationRelationship;
  RWStepRepr_RWContinuosShapeAspect: typeof RWStepRepr_RWContinuosShapeAspect;
  RWStepRepr_RWDataEnvironment: typeof RWStepRepr_RWDataEnvironment;
  RWStepRepr_RWDefinitionalRepresentation: typeof RWStepRepr_RWDefinitionalRepresentation;
  RWStepRepr_RWDerivedShapeAspect: typeof RWStepRepr_RWDerivedShapeAspect;
  RWStepRepr_RWDescriptiveRepresentationItem: typeof RWStepRepr_RWDescriptiveRepresentationItem;
  RWStepRepr_RWExtension: typeof RWStepRepr_RWExtension;
  RWStepRepr_RWFeatureForDatumTargetRelationship: typeof RWStepRepr_RWFeatureForDatumTargetRelationship;
  RWStepRepr_RWFunctionallyDefinedTransformation: typeof RWStepRepr_RWFunctionallyDefinedTransformation;
  RWStepRepr_RWGeometricAlignment: typeof RWStepRepr_RWGeometricAlignment;
  RWStepRepr_RWGlobalUncertaintyAssignedContext: typeof RWStepRepr_RWGlobalUncertaintyAssignedContext;
  RWStepRepr_RWGlobalUnitAssignedContext: typeof RWStepRepr_RWGlobalUnitAssignedContext;
  RWStepRepr_RWIntegerRepresentationItem: typeof RWStepRepr_RWIntegerRepresentationItem;
  RWStepRepr_RWItemDefinedTransformation: typeof RWStepRepr_RWItemDefinedTransformation;
  RWStepRepr_RWMakeFromUsageOption: typeof RWStepRepr_RWMakeFromUsageOption;
  RWStepRepr_RWMappedItem: typeof RWStepRepr_RWMappedItem;
  RWStepRepr_RWMaterialDesignation: typeof RWStepRepr_RWMaterialDesignation;
  RWStepRepr_RWMaterialProperty: typeof RWStepRepr_RWMaterialProperty;
  RWStepRepr_RWMaterialPropertyRepresentation: typeof RWStepRepr_RWMaterialPropertyRepresentation;
  RWStepRepr_RWMeasureRepresentationItem: typeof RWStepRepr_RWMeasureRepresentationItem;
  RWStepRepr_RWParallelOffset: typeof RWStepRepr_RWParallelOffset;
  RWStepRepr_RWParametricRepresentationContext: typeof RWStepRepr_RWParametricRepresentationContext;
  RWStepRepr_RWPerpendicularTo: typeof RWStepRepr_RWPerpendicularTo;
  RWStepRepr_RWProductConcept: typeof RWStepRepr_RWProductConcept;
  RWStepRepr_RWProductDefinitionShape: typeof RWStepRepr_RWProductDefinitionShape;
  RWStepRepr_RWPropertyDefinition: typeof RWStepRepr_RWPropertyDefinition;
  RWStepRepr_RWPropertyDefinitionRelationship: typeof RWStepRepr_RWPropertyDefinitionRelationship;
  RWStepRepr_RWPropertyDefinitionRepresentation: typeof RWStepRepr_RWPropertyDefinitionRepresentation;
  RWStepRepr_RWQuantifiedAssemblyComponentUsage: typeof RWStepRepr_RWQuantifiedAssemblyComponentUsage;
  RWStepRepr_RWReprItemAndLengthMeasureWithUnit: typeof RWStepRepr_RWReprItemAndLengthMeasureWithUnit;
  RWStepRepr_RWReprItemAndLengthMeasureWithUnitAndQRI: typeof RWStepRepr_RWReprItemAndLengthMeasureWithUnitAndQRI;
  RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnit: typeof RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnit;
  RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnitAndQRI: typeof RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnitAndQRI;
  RWStepRepr_RWRepresentation: typeof RWStepRepr_RWRepresentation;
  RWStepRepr_RWRepresentationContext: typeof RWStepRepr_RWRepresentationContext;
  RWStepRepr_RWRepresentationItem: typeof RWStepRepr_RWRepresentationItem;
  RWStepRepr_RWRepresentationMap: typeof RWStepRepr_RWRepresentationMap;
  RWStepRepr_RWRepresentationRelationship: typeof RWStepRepr_RWRepresentationRelationship;
  RWStepRepr_RWRepresentationRelationshipWithTransformation: typeof RWStepRepr_RWRepresentationRelationshipWithTransformation;
  RWStepRepr_RWShapeAspect: typeof RWStepRepr_RWShapeAspect;
  RWStepRepr_RWShapeAspectDerivingRelationship: typeof RWStepRepr_RWShapeAspectDerivingRelationship;
  RWStepRepr_RWShapeAspectRelationship: typeof RWStepRepr_RWShapeAspectRelationship;
  RWStepRepr_RWShapeAspectTransition: typeof RWStepRepr_RWShapeAspectTransition;
  RWStepRepr_RWShapeRepresentationRelationshipWithTransformation: typeof RWStepRepr_RWShapeRepresentationRelationshipWithTransformation;
  RWStepRepr_RWSpecifiedHigherUsageOccurrence: typeof RWStepRepr_RWSpecifiedHigherUsageOccurrence;
  RWStepRepr_RWStructuralResponseProperty: typeof RWStepRepr_RWStructuralResponseProperty;
  RWStepRepr_RWStructuralResponsePropertyDefinitionRepresentation: typeof RWStepRepr_RWStructuralResponsePropertyDefinitionRepresentation;
  RWStepRepr_RWTangent: typeof RWStepRepr_RWTangent;
  RWStepRepr_RWValueRepresentationItem: typeof RWStepRepr_RWValueRepresentationItem;
  RWStepShape_RWAdvancedBrepShapeRepresentation: typeof RWStepShape_RWAdvancedBrepShapeRepresentation;
  RWStepShape_RWAdvancedFace: typeof RWStepShape_RWAdvancedFace;
  RWStepShape_RWAngularLocation: typeof RWStepShape_RWAngularLocation;
  RWStepShape_RWAngularSize: typeof RWStepShape_RWAngularSize;
  RWStepShape_RWBlock: typeof RWStepShape_RWBlock;
  RWStepShape_RWBooleanResult: typeof RWStepShape_RWBooleanResult;
  RWStepShape_RWBoxDomain: typeof RWStepShape_RWBoxDomain;
  RWStepShape_RWBoxedHalfSpace: typeof RWStepShape_RWBoxedHalfSpace;
  RWStepShape_RWClosedShell: typeof RWStepShape_RWClosedShell;
  RWStepShape_RWCompoundShapeRepresentation: typeof RWStepShape_RWCompoundShapeRepresentation;
  RWStepShape_RWConnectedEdgeSet: typeof RWStepShape_RWConnectedEdgeSet;
  RWStepShape_RWConnectedFaceSet: typeof RWStepShape_RWConnectedFaceSet;
  RWStepShape_RWConnectedFaceShapeRepresentation: typeof RWStepShape_RWConnectedFaceShapeRepresentation;
  RWStepShape_RWConnectedFaceSubSet: typeof RWStepShape_RWConnectedFaceSubSet;
  RWStepShape_RWContextDependentShapeRepresentation: typeof RWStepShape_RWContextDependentShapeRepresentation;
  RWStepShape_RWCsgShapeRepresentation: typeof RWStepShape_RWCsgShapeRepresentation;
  RWStepShape_RWCsgSolid: typeof RWStepShape_RWCsgSolid;
  RWStepShape_RWDefinitionalRepresentationAndShapeRepresentation: typeof RWStepShape_RWDefinitionalRepresentationAndShapeRepresentation;
  RWStepShape_RWDimensionalCharacteristicRepresentation: typeof RWStepShape_RWDimensionalCharacteristicRepresentation;
  RWStepShape_RWDimensionalLocation: typeof RWStepShape_RWDimensionalLocation;
  RWStepShape_RWDimensionalLocationWithPath: typeof RWStepShape_RWDimensionalLocationWithPath;
  RWStepShape_RWDimensionalSize: typeof RWStepShape_RWDimensionalSize;
  RWStepShape_RWDimensionalSizeWithPath: typeof RWStepShape_RWDimensionalSizeWithPath;
  RWStepShape_RWEdge: typeof RWStepShape_RWEdge;
  RWStepShape_RWEdgeBasedWireframeModel: typeof RWStepShape_RWEdgeBasedWireframeModel;
  RWStepShape_RWEdgeBasedWireframeShapeRepresentation: typeof RWStepShape_RWEdgeBasedWireframeShapeRepresentation;
  RWStepShape_RWExtrudedAreaSolid: typeof RWStepShape_RWExtrudedAreaSolid;
  RWStepShape_RWExtrudedFaceSolid: typeof RWStepShape_RWExtrudedFaceSolid;
  RWStepShape_RWFace: typeof RWStepShape_RWFace;
  RWStepShape_RWFaceBasedSurfaceModel: typeof RWStepShape_RWFaceBasedSurfaceModel;
  RWStepShape_RWFaceOuterBound: typeof RWStepShape_RWFaceOuterBound;
  RWStepShape_RWFaceSurface: typeof RWStepShape_RWFaceSurface;
  RWStepShape_RWFacetedBrep: typeof RWStepShape_RWFacetedBrep;
  RWStepShape_RWFacetedBrepAndBrepWithVoids: typeof RWStepShape_RWFacetedBrepAndBrepWithVoids;
  RWStepShape_RWFacetedBrepShapeRepresentation: typeof RWStepShape_RWFacetedBrepShapeRepresentation;
  RWStepShape_RWGeometricCurveSet: typeof RWStepShape_RWGeometricCurveSet;
  RWStepShape_RWGeometricSet: typeof RWStepShape_RWGeometricSet;
  RWStepShape_RWGeometricallyBoundedSurfaceShapeRepresentation: typeof RWStepShape_RWGeometricallyBoundedSurfaceShapeRepresentation;
  RWStepShape_RWGeometricallyBoundedWireframeShapeRepresentation: typeof RWStepShape_RWGeometricallyBoundedWireframeShapeRepresentation;
  RWStepShape_RWHalfSpaceSolid: typeof RWStepShape_RWHalfSpaceSolid;
  RWStepShape_RWLimitsAndFits: typeof RWStepShape_RWLimitsAndFits;
  RWStepShape_RWLoop: typeof RWStepShape_RWLoop;
  RWStepShape_RWLoopAndPath: typeof RWStepShape_RWLoopAndPath;
  RWStepShape_RWManifoldSolidBrep: typeof RWStepShape_RWManifoldSolidBrep;
  RWStepShape_RWManifoldSurfaceShapeRepresentation: typeof RWStepShape_RWManifoldSurfaceShapeRepresentation;
  RWStepShape_RWMeasureQualification: typeof RWStepShape_RWMeasureQualification;
  RWStepShape_RWMeasureRepresentationItemAndQualifiedRepresentationItem: typeof RWStepShape_RWMeasureRepresentationItemAndQualifiedRepresentationItem;
  RWStepShape_RWNonManifoldSurfaceShapeRepresentation: typeof RWStepShape_RWNonManifoldSurfaceShapeRepresentation;
  RWStepShape_RWOpenShell: typeof RWStepShape_RWOpenShell;
  RWStepShape_RWOrientedClosedShell: typeof RWStepShape_RWOrientedClosedShell;
  RWStepShape_RWOrientedEdge: typeof RWStepShape_RWOrientedEdge;
  RWStepShape_RWOrientedFace: typeof RWStepShape_RWOrientedFace;
  RWStepShape_RWOrientedOpenShell: typeof RWStepShape_RWOrientedOpenShell;
  RWStepShape_RWOrientedPath: typeof RWStepShape_RWOrientedPath;
  RWStepShape_RWPath: typeof RWStepShape_RWPath;
  RWStepShape_RWPlusMinusTolerance: typeof RWStepShape_RWPlusMinusTolerance;
  RWStepShape_RWPointRepresentation: typeof RWStepShape_RWPointRepresentation;
  RWStepShape_RWPolyLoop: typeof RWStepShape_RWPolyLoop;
  RWStepShape_RWPrecisionQualifier: typeof RWStepShape_RWPrecisionQualifier;
  RWStepShape_RWQualifiedRepresentationItem: typeof RWStepShape_RWQualifiedRepresentationItem;
  RWStepShape_RWRevolvedAreaSolid: typeof RWStepShape_RWRevolvedAreaSolid;
  RWStepShape_RWRevolvedFaceSolid: typeof RWStepShape_RWRevolvedFaceSolid;
  RWStepShape_RWRightAngularWedge: typeof RWStepShape_RWRightAngularWedge;
  RWStepShape_RWRightCircularCone: typeof RWStepShape_RWRightCircularCone;
  RWStepShape_RWRightCircularCylinder: typeof RWStepShape_RWRightCircularCylinder;
  RWStepShape_RWSeamEdge: typeof RWStepShape_RWSeamEdge;
  RWStepShape_RWShapeDefinitionRepresentation: typeof RWStepShape_RWShapeDefinitionRepresentation;
  RWStepShape_RWShapeDimensionRepresentation: typeof RWStepShape_RWShapeDimensionRepresentation;
  RWStepShape_RWShapeRepresentation: typeof RWStepShape_RWShapeRepresentation;
  RWStepShape_RWShapeRepresentationWithParameters: typeof RWStepShape_RWShapeRepresentationWithParameters;
  RWStepShape_RWShellBasedSurfaceModel: typeof RWStepShape_RWShellBasedSurfaceModel;
  RWStepShape_RWSolidModel: typeof RWStepShape_RWSolidModel;
  RWStepShape_RWSolidReplica: typeof RWStepShape_RWSolidReplica;
  RWStepShape_RWSphere: typeof RWStepShape_RWSphere;
  RWStepShape_RWSubedge: typeof RWStepShape_RWSubedge;
  RWStepShape_RWSubface: typeof RWStepShape_RWSubface;
  RWStepShape_RWSweptAreaSolid: typeof RWStepShape_RWSweptAreaSolid;
  RWStepShape_RWSweptFaceSolid: typeof RWStepShape_RWSweptFaceSolid;
  RWStepShape_RWToleranceValue: typeof RWStepShape_RWToleranceValue;
  RWStepShape_RWTopologicalRepresentationItem: typeof RWStepShape_RWTopologicalRepresentationItem;
  RWStepShape_RWTorus: typeof RWStepShape_RWTorus;
  RWStepShape_RWTransitionalShapeRepresentation: typeof RWStepShape_RWTransitionalShapeRepresentation;
  RWStepShape_RWTypeQualifier: typeof RWStepShape_RWTypeQualifier;
  RWStepShape_RWValueFormatTypeQualifier: typeof RWStepShape_RWValueFormatTypeQualifier;
  RWStepShape_RWVertex: typeof RWStepShape_RWVertex;
  RWStepShape_RWVertexLoop: typeof RWStepShape_RWVertexLoop;
  RWStepShape_RWVertexPoint: typeof RWStepShape_RWVertexPoint;
  RWStepVisual_RWAnnotationCurveOccurrence: typeof RWStepVisual_RWAnnotationCurveOccurrence;
  RWStepVisual_RWAnnotationCurveOccurrenceAndAnnotationOccurrenceAndGeomReprItemAndReprItemAndStyledItem: typeof RWStepVisual_RWAnnotationCurveOccurrenceAndAnnotationOccurrenceAndGeomReprItemAndReprItemAndStyledItem;
  RWStepVisual_RWAnnotationFillArea: typeof RWStepVisual_RWAnnotationFillArea;
  RWStepVisual_RWAnnotationFillAreaOccurrence: typeof RWStepVisual_RWAnnotationFillAreaOccurrence;
  RWStepVisual_RWAnnotationOccurrence: typeof RWStepVisual_RWAnnotationOccurrence;
  RWStepVisual_RWAnnotationPlane: typeof RWStepVisual_RWAnnotationPlane;
  RWStepVisual_RWAreaInSet: typeof RWStepVisual_RWAreaInSet;
  RWStepVisual_RWBackgroundColour: typeof RWStepVisual_RWBackgroundColour;
  RWStepVisual_RWCameraImage: typeof RWStepVisual_RWCameraImage;
  RWStepVisual_RWCameraModel: typeof RWStepVisual_RWCameraModel;
  RWStepVisual_RWCameraModelD2: typeof RWStepVisual_RWCameraModelD2;
  RWStepVisual_RWCameraModelD3: typeof RWStepVisual_RWCameraModelD3;
  RWStepVisual_RWCameraModelD3MultiClipping: typeof RWStepVisual_RWCameraModelD3MultiClipping;
  RWStepVisual_RWCameraModelD3MultiClippingIntersection: typeof RWStepVisual_RWCameraModelD3MultiClippingIntersection;
  RWStepVisual_RWCameraModelD3MultiClippingUnion: typeof RWStepVisual_RWCameraModelD3MultiClippingUnion;
  RWStepVisual_RWCameraUsage: typeof RWStepVisual_RWCameraUsage;
  RWStepVisual_RWCharacterizedObjectAndCharacterizedRepresentationAndDraughtingModelAndRepresentation: typeof RWStepVisual_RWCharacterizedObjectAndCharacterizedRepresentationAndDraughtingModelAndRepresentation;
  RWStepVisual_RWColour: typeof RWStepVisual_RWColour;
  RWStepVisual_RWColourRgb: typeof RWStepVisual_RWColourRgb;
  RWStepVisual_RWColourSpecification: typeof RWStepVisual_RWColourSpecification;
  RWStepVisual_RWCompositeText: typeof RWStepVisual_RWCompositeText;
  RWStepVisual_RWCompositeTextWithExtent: typeof RWStepVisual_RWCompositeTextWithExtent;
  RWStepVisual_RWContextDependentInvisibility: typeof RWStepVisual_RWContextDependentInvisibility;
  RWStepVisual_RWContextDependentOverRidingStyledItem: typeof RWStepVisual_RWContextDependentOverRidingStyledItem;
  RWStepVisual_RWCoordinatesList: typeof RWStepVisual_RWCoordinatesList;
  RWStepVisual_RWCurveStyle: typeof RWStepVisual_RWCurveStyle;
  RWStepVisual_RWCurveStyleFont: typeof RWStepVisual_RWCurveStyleFont;
  RWStepVisual_RWCurveStyleFontPattern: typeof RWStepVisual_RWCurveStyleFontPattern;
  RWStepVisual_RWDraughtingCallout: typeof RWStepVisual_RWDraughtingCallout;
  RWStepVisual_RWDraughtingModel: typeof RWStepVisual_RWDraughtingModel;
  RWStepVisual_RWDraughtingPreDefinedColour: typeof RWStepVisual_RWDraughtingPreDefinedColour;
  RWStepVisual_RWDraughtingPreDefinedCurveFont: typeof RWStepVisual_RWDraughtingPreDefinedCurveFont;
  RWStepVisual_RWExternallyDefinedCurveFont: typeof RWStepVisual_RWExternallyDefinedCurveFont;
  RWStepVisual_RWFillAreaStyle: typeof RWStepVisual_RWFillAreaStyle;
  RWStepVisual_RWFillAreaStyleColour: typeof RWStepVisual_RWFillAreaStyleColour;
  RWStepVisual_RWInvisibility: typeof RWStepVisual_RWInvisibility;
  RWStepVisual_RWMechanicalDesignGeometricPresentationArea: typeof RWStepVisual_RWMechanicalDesignGeometricPresentationArea;
  RWStepVisual_RWMechanicalDesignGeometricPresentationRepresentation: typeof RWStepVisual_RWMechanicalDesignGeometricPresentationRepresentation;
  RWStepVisual_RWOverRidingStyledItem: typeof RWStepVisual_RWOverRidingStyledItem;
  RWStepVisual_RWPlanarBox: typeof RWStepVisual_RWPlanarBox;
  RWStepVisual_RWPlanarExtent: typeof RWStepVisual_RWPlanarExtent;
  RWStepVisual_RWPointStyle: typeof RWStepVisual_RWPointStyle;
  RWStepVisual_RWPreDefinedColour: typeof RWStepVisual_RWPreDefinedColour;
  RWStepVisual_RWPreDefinedCurveFont: typeof RWStepVisual_RWPreDefinedCurveFont;
  RWStepVisual_RWPreDefinedItem: typeof RWStepVisual_RWPreDefinedItem;
  RWStepVisual_RWPresentationArea: typeof RWStepVisual_RWPresentationArea;
  RWStepVisual_RWPresentationLayerAssignment: typeof RWStepVisual_RWPresentationLayerAssignment;
  RWStepVisual_RWPresentationLayerUsage: typeof RWStepVisual_RWPresentationLayerUsage;
  RWStepVisual_RWPresentationRepresentation: typeof RWStepVisual_RWPresentationRepresentation;
  RWStepVisual_RWPresentationSet: typeof RWStepVisual_RWPresentationSet;
  RWStepVisual_RWPresentationSize: typeof RWStepVisual_RWPresentationSize;
  RWStepVisual_RWPresentationStyleAssignment: typeof RWStepVisual_RWPresentationStyleAssignment;
  RWStepVisual_RWPresentationStyleByContext: typeof RWStepVisual_RWPresentationStyleByContext;
  RWStepVisual_RWPresentationView: typeof RWStepVisual_RWPresentationView;
  RWStepVisual_RWPresentedItemRepresentation: typeof RWStepVisual_RWPresentedItemRepresentation;
  RWStepVisual_RWStyledItem: typeof RWStepVisual_RWStyledItem;
  RWStepVisual_RWSurfaceSideStyle: typeof RWStepVisual_RWSurfaceSideStyle;
  RWStepVisual_RWSurfaceStyleBoundary: typeof RWStepVisual_RWSurfaceStyleBoundary;
  RWStepVisual_RWSurfaceStyleControlGrid: typeof RWStepVisual_RWSurfaceStyleControlGrid;
  RWStepVisual_RWSurfaceStyleFillArea: typeof RWStepVisual_RWSurfaceStyleFillArea;
  RWStepVisual_RWSurfaceStyleParameterLine: typeof RWStepVisual_RWSurfaceStyleParameterLine;
  RWStepVisual_RWSurfaceStyleSegmentationCurve: typeof RWStepVisual_RWSurfaceStyleSegmentationCurve;
  RWStepVisual_RWSurfaceStyleSilhouette: typeof RWStepVisual_RWSurfaceStyleSilhouette;
  RWStepVisual_RWSurfaceStyleUsage: typeof RWStepVisual_RWSurfaceStyleUsage;
  RWStepVisual_RWTemplate: typeof RWStepVisual_RWTemplate;
  RWStepVisual_RWTemplateInstance: typeof RWStepVisual_RWTemplateInstance;
  RWStepVisual_RWTessellatedAnnotationOccurrence: typeof RWStepVisual_RWTessellatedAnnotationOccurrence;
  RWStepVisual_RWTessellatedCurveSet: typeof RWStepVisual_RWTessellatedCurveSet;
  RWStepVisual_RWTessellatedGeometricSet: typeof RWStepVisual_RWTessellatedGeometricSet;
  RWStepVisual_RWTessellatedItem: typeof RWStepVisual_RWTessellatedItem;
  RWStepVisual_RWTextLiteral: typeof RWStepVisual_RWTextLiteral;
  RWStepVisual_RWTextStyle: typeof RWStepVisual_RWTextStyle;
  RWStepVisual_RWTextStyleForDefinedFont: typeof RWStepVisual_RWTextStyleForDefinedFont;
  RWStepVisual_RWTextStyleWithBoxCharacteristics: typeof RWStepVisual_RWTextStyleWithBoxCharacteristics;
  RWStepVisual_RWViewVolume: typeof RWStepVisual_RWViewVolume;
  RWStl: typeof RWStl;
  RWStl_Reader: typeof RWStl_Reader;
  Resource_LexicalCompare: typeof Resource_LexicalCompare;
  Resource_Manager: typeof Resource_Manager;
  Resource_NoSuchResource: typeof Resource_NoSuchResource;
  Resource_Unicode: typeof Resource_Unicode;
  STEPCAFControl_ActorWrite: typeof STEPCAFControl_ActorWrite;
  STEPCAFControl_Controller: typeof STEPCAFControl_Controller;
  STEPCAFControl_ExternFile: typeof STEPCAFControl_ExternFile;
  STEPCAFControl_GDTProperty: typeof STEPCAFControl_GDTProperty;
  STEPCAFControl_Reader: typeof STEPCAFControl_Reader;
  STEPCAFControl_Writer: typeof STEPCAFControl_Writer;
  STEPConstruct: typeof STEPConstruct;
  STEPConstruct_AP203Context: typeof STEPConstruct_AP203Context;
  STEPConstruct_Assembly: typeof STEPConstruct_Assembly;
  STEPConstruct_ContextTool: typeof STEPConstruct_ContextTool;
  STEPConstruct_ExternRefs: typeof STEPConstruct_ExternRefs;
  STEPConstruct_Part: typeof STEPConstruct_Part;
  STEPConstruct_PointHasher: typeof STEPConstruct_PointHasher;
  STEPConstruct_Styles: typeof STEPConstruct_Styles;
  STEPConstruct_Tool: typeof STEPConstruct_Tool;
  STEPConstruct_UnitContext: typeof STEPConstruct_UnitContext;
  STEPConstruct_ValidationProps: typeof STEPConstruct_ValidationProps;
  STEPControl_ActorRead: typeof STEPControl_ActorRead;
  STEPControl_ActorWrite: typeof STEPControl_ActorWrite;
  STEPControl_Controller: typeof STEPControl_Controller;
  STEPControl_Reader: typeof STEPControl_Reader;
  STEPControl_Writer: typeof STEPControl_Writer;
  STEPEdit: typeof STEPEdit;
  STEPEdit_EditContext: typeof STEPEdit_EditContext;
  STEPEdit_EditSDR: typeof STEPEdit_EditSDR;
  STEPSelections_AssemblyComponent: typeof STEPSelections_AssemblyComponent;
  STEPSelections_AssemblyExplorer: typeof STEPSelections_AssemblyExplorer;
  STEPSelections_AssemblyLink: typeof STEPSelections_AssemblyLink;
  STEPSelections_SelectAssembly: typeof STEPSelections_SelectAssembly;
  STEPSelections_SelectDerived: typeof STEPSelections_SelectDerived;
  STEPSelections_SelectFaces: typeof STEPSelections_SelectFaces;
  STEPSelections_SelectForTransfer: typeof STEPSelections_SelectForTransfer;
  STEPSelections_SelectGSCurves: typeof STEPSelections_SelectGSCurves;
  STEPSelections_SelectInstances: typeof STEPSelections_SelectInstances;
  Select3D_BVHIndexBuffer: typeof Select3D_BVHIndexBuffer;
  Select3D_InteriorSensitivePointSet: typeof Select3D_InteriorSensitivePointSet;
  Select3D_PointData: typeof Select3D_PointData;
  Select3D_SensitiveBox: typeof Select3D_SensitiveBox;
  Select3D_SensitiveCircle: typeof Select3D_SensitiveCircle;
  Select3D_SensitiveCurve: typeof Select3D_SensitiveCurve;
  Select3D_SensitiveEntity: typeof Select3D_SensitiveEntity;
  Select3D_SensitiveFace: typeof Select3D_SensitiveFace;
  Select3D_SensitiveGroup: typeof Select3D_SensitiveGroup;
  Select3D_SensitivePoint: typeof Select3D_SensitivePoint;
  Select3D_SensitivePoly: typeof Select3D_SensitivePoly;
  Select3D_SensitivePrimitiveArray: typeof Select3D_SensitivePrimitiveArray;
  Select3D_SensitiveSegment: typeof Select3D_SensitiveSegment;
  Select3D_SensitiveSet: typeof Select3D_SensitiveSet;
  Select3D_SensitiveTriangle: typeof Select3D_SensitiveTriangle;
  Select3D_SensitiveTriangulation: typeof Select3D_SensitiveTriangulation;
  Select3D_SensitiveWire: typeof Select3D_SensitiveWire;
  SelectBasics: typeof SelectBasics;
  SelectBasics_SelectingVolumeManager: typeof SelectBasics_SelectingVolumeManager;
  SelectMgr_AndFilter: typeof SelectMgr_AndFilter;
  SelectMgr_BaseFrustum: typeof SelectMgr_BaseFrustum;
  SelectMgr_CompositionFilter: typeof SelectMgr_CompositionFilter;
  SelectMgr_EntityOwner: typeof SelectMgr_EntityOwner;
  SelectMgr_Filter: typeof SelectMgr_Filter;
  SelectMgr_FrustumBuilder: typeof SelectMgr_FrustumBuilder;
  SelectMgr_OrFilter: typeof SelectMgr_OrFilter;
  SelectMgr_SelectableObject: typeof SelectMgr_SelectableObject;
  SelectMgr_SelectableObjectSet: typeof SelectMgr_SelectableObjectSet;
  SelectMgr_SelectingVolumeManager: typeof SelectMgr_SelectingVolumeManager;
  SelectMgr_Selection: typeof SelectMgr_Selection;
  SelectMgr_SelectionManager: typeof SelectMgr_SelectionManager;
  SelectMgr_SensitiveEntity: typeof SelectMgr_SensitiveEntity;
  SelectMgr_SensitiveEntitySet: typeof SelectMgr_SensitiveEntitySet;
  SelectMgr_SortCriterion: typeof SelectMgr_SortCriterion;
  SelectMgr_ToleranceMap: typeof SelectMgr_ToleranceMap;
  SelectMgr_TriangularFrustumSet: typeof SelectMgr_TriangularFrustumSet;
  SelectMgr_ViewClipRange: typeof SelectMgr_ViewClipRange;
  SelectMgr_ViewerSelector: typeof SelectMgr_ViewerSelector;
  ShapeAlgo: typeof ShapeAlgo;
  ShapeAlgo_AlgoContainer: typeof ShapeAlgo_AlgoContainer;
  ShapeAlgo_ToolContainer: typeof ShapeAlgo_ToolContainer;
  ShapeAnalysis: typeof ShapeAnalysis;
  ShapeAnalysis_CheckSmallFace: typeof ShapeAnalysis_CheckSmallFace;
  ShapeAnalysis_Curve: typeof ShapeAnalysis_Curve;
  ShapeAnalysis_Edge: typeof ShapeAnalysis_Edge;
  ShapeAnalysis_FreeBoundData: typeof ShapeAnalysis_FreeBoundData;
  ShapeAnalysis_FreeBounds: typeof ShapeAnalysis_FreeBounds;
  ShapeAnalysis_FreeBoundsProperties: typeof ShapeAnalysis_FreeBoundsProperties;
  ShapeAnalysis_Geom: typeof ShapeAnalysis_Geom;
  ShapeAnalysis_ShapeContents: typeof ShapeAnalysis_ShapeContents;
  ShapeAnalysis_ShapeTolerance: typeof ShapeAnalysis_ShapeTolerance;
  ShapeAnalysis_Shell: typeof ShapeAnalysis_Shell;
  ShapeAnalysis_Surface: typeof ShapeAnalysis_Surface;
  ShapeAnalysis_TransferParameters: typeof ShapeAnalysis_TransferParameters;
  ShapeAnalysis_TransferParametersProj: typeof ShapeAnalysis_TransferParametersProj;
  ShapeAnalysis_Wire: typeof ShapeAnalysis_Wire;
  ShapeAnalysis_WireOrder: typeof ShapeAnalysis_WireOrder;
  ShapeAnalysis_WireVertex: typeof ShapeAnalysis_WireVertex;
  ShapeBuild: typeof ShapeBuild;
  ShapeBuild_Edge: typeof ShapeBuild_Edge;
  ShapeBuild_ReShape: typeof ShapeBuild_ReShape;
  ShapeBuild_Vertex: typeof ShapeBuild_Vertex;
  ShapeConstruct: typeof ShapeConstruct;
  ShapeConstruct_Curve: typeof ShapeConstruct_Curve;
  ShapeConstruct_MakeTriangulation: typeof ShapeConstruct_MakeTriangulation;
  ShapeConstruct_ProjectCurveOnSurface: typeof ShapeConstruct_ProjectCurveOnSurface;
  ShapeCustom: typeof ShapeCustom;
  ShapeCustom_BSplineRestriction: typeof ShapeCustom_BSplineRestriction;
  ShapeCustom_ConvertToBSpline: typeof ShapeCustom_ConvertToBSpline;
  ShapeCustom_ConvertToRevolution: typeof ShapeCustom_ConvertToRevolution;
  ShapeCustom_Curve: typeof ShapeCustom_Curve;
  ShapeCustom_Curve2d: typeof ShapeCustom_Curve2d;
  ShapeCustom_DirectModification: typeof ShapeCustom_DirectModification;
  ShapeCustom_Modification: typeof ShapeCustom_Modification;
  ShapeCustom_RestrictionParameters: typeof ShapeCustom_RestrictionParameters;
  ShapeCustom_Surface: typeof ShapeCustom_Surface;
  ShapeCustom_SweptToElementary: typeof ShapeCustom_SweptToElementary;
  ShapeCustom_TrsfModification: typeof ShapeCustom_TrsfModification;
  ShapeExtend: typeof ShapeExtend;
  ShapeExtend_BasicMsgRegistrator: typeof ShapeExtend_BasicMsgRegistrator;
  ShapeExtend_ComplexCurve: typeof ShapeExtend_ComplexCurve;
  ShapeExtend_CompositeSurface: typeof ShapeExtend_CompositeSurface;
  ShapeExtend_Explorer: typeof ShapeExtend_Explorer;
  ShapeExtend_MsgRegistrator: typeof ShapeExtend_MsgRegistrator;
  ShapeExtend_WireData: typeof ShapeExtend_WireData;
  ShapeFix: typeof ShapeFix;
  ShapeFix_ComposeShell: typeof ShapeFix_ComposeShell;
  ShapeFix_EdgeConnect: typeof ShapeFix_EdgeConnect;
  ShapeFix_EdgeProjAux: typeof ShapeFix_EdgeProjAux;
  ShapeFix_Face: typeof ShapeFix_Face;
  ShapeFix_FaceConnect: typeof ShapeFix_FaceConnect;
  ShapeFix_FixSmallFace: typeof ShapeFix_FixSmallFace;
  ShapeFix_FixSmallSolid: typeof ShapeFix_FixSmallSolid;
  ShapeFix_FreeBounds: typeof ShapeFix_FreeBounds;
  ShapeFix_IntersectionTool: typeof ShapeFix_IntersectionTool;
  ShapeFix_Root: typeof ShapeFix_Root;
  ShapeFix_Shape: typeof ShapeFix_Shape;
  ShapeFix_ShapeTolerance: typeof ShapeFix_ShapeTolerance;
  ShapeFix_Shell: typeof ShapeFix_Shell;
  ShapeFix_Solid: typeof ShapeFix_Solid;
  ShapeFix_SplitCommonVertex: typeof ShapeFix_SplitCommonVertex;
  ShapeFix_SplitTool: typeof ShapeFix_SplitTool;
  ShapeFix_Wire: typeof ShapeFix_Wire;
  ShapeFix_WireVertex: typeof ShapeFix_WireVertex;
  ShapeFix_Wireframe: typeof ShapeFix_Wireframe;
  ShapePersistent: typeof ShapePersistent;
  ShapePersistent_HArray1: typeof ShapePersistent_HArray1;
  ShapePersistent_HArray2: typeof ShapePersistent_HArray2;
  ShapePersistent_HSequence: typeof ShapePersistent_HSequence;
  ShapeProcess: typeof ShapeProcess;
  ShapeProcessAPI_ApplySequence: typeof ShapeProcessAPI_ApplySequence;
  ShapeProcess_Context: typeof ShapeProcess_Context;
  ShapeProcess_OperLibrary: typeof ShapeProcess_OperLibrary;
  ShapeProcess_Operator: typeof ShapeProcess_Operator;
  ShapeProcess_ShapeContext: typeof ShapeProcess_ShapeContext;
  ShapeProcess_UOperator: typeof ShapeProcess_UOperator;
  ShapeUpgrade: typeof ShapeUpgrade;
  ShapeUpgrade_ClosedEdgeDivide: typeof ShapeUpgrade_ClosedEdgeDivide;
  ShapeUpgrade_ClosedFaceDivide: typeof ShapeUpgrade_ClosedFaceDivide;
  ShapeUpgrade_ConvertCurve2dToBezier: typeof ShapeUpgrade_ConvertCurve2dToBezier;
  ShapeUpgrade_ConvertCurve3dToBezier: typeof ShapeUpgrade_ConvertCurve3dToBezier;
  ShapeUpgrade_ConvertSurfaceToBezierBasis: typeof ShapeUpgrade_ConvertSurfaceToBezierBasis;
  ShapeUpgrade_EdgeDivide: typeof ShapeUpgrade_EdgeDivide;
  ShapeUpgrade_FaceDivide: typeof ShapeUpgrade_FaceDivide;
  ShapeUpgrade_FaceDivideArea: typeof ShapeUpgrade_FaceDivideArea;
  ShapeUpgrade_FixSmallBezierCurves: typeof ShapeUpgrade_FixSmallBezierCurves;
  ShapeUpgrade_FixSmallCurves: typeof ShapeUpgrade_FixSmallCurves;
  ShapeUpgrade_RemoveInternalWires: typeof ShapeUpgrade_RemoveInternalWires;
  ShapeUpgrade_RemoveLocations: typeof ShapeUpgrade_RemoveLocations;
  ShapeUpgrade_ShapeConvertToBezier: typeof ShapeUpgrade_ShapeConvertToBezier;
  ShapeUpgrade_ShapeDivide: typeof ShapeUpgrade_ShapeDivide;
  ShapeUpgrade_ShapeDivideAngle: typeof ShapeUpgrade_ShapeDivideAngle;
  ShapeUpgrade_ShapeDivideArea: typeof ShapeUpgrade_ShapeDivideArea;
  ShapeUpgrade_ShapeDivideClosed: typeof ShapeUpgrade_ShapeDivideClosed;
  ShapeUpgrade_ShapeDivideClosedEdges: typeof ShapeUpgrade_ShapeDivideClosedEdges;
  ShapeUpgrade_ShapeDivideContinuity: typeof ShapeUpgrade_ShapeDivideContinuity;
  ShapeUpgrade_ShellSewing: typeof ShapeUpgrade_ShellSewing;
  ShapeUpgrade_SplitCurve: typeof ShapeUpgrade_SplitCurve;
  ShapeUpgrade_SplitCurve2d: typeof ShapeUpgrade_SplitCurve2d;
  ShapeUpgrade_SplitCurve2dContinuity: typeof ShapeUpgrade_SplitCurve2dContinuity;
  ShapeUpgrade_SplitCurve3d: typeof ShapeUpgrade_SplitCurve3d;
  ShapeUpgrade_SplitCurve3dContinuity: typeof ShapeUpgrade_SplitCurve3dContinuity;
  ShapeUpgrade_SplitSurface: typeof ShapeUpgrade_SplitSurface;
  ShapeUpgrade_SplitSurfaceAngle: typeof ShapeUpgrade_SplitSurfaceAngle;
  ShapeUpgrade_SplitSurfaceArea: typeof ShapeUpgrade_SplitSurfaceArea;
  ShapeUpgrade_SplitSurfaceContinuity: typeof ShapeUpgrade_SplitSurfaceContinuity;
  ShapeUpgrade_Tool: typeof ShapeUpgrade_Tool;
  ShapeUpgrade_UnifySameDomain: typeof ShapeUpgrade_UnifySameDomain;
  ShapeUpgrade_WireDivide: typeof ShapeUpgrade_WireDivide;
  Standard: typeof Standard;
  Standard_AbortiveTransaction: typeof Standard_AbortiveTransaction;
  Standard_CLocaleSentry: typeof Standard_CLocaleSentry;
  Standard_Condition: typeof Standard_Condition;
  Standard_ConstructionError: typeof Standard_ConstructionError;
  Standard_DimensionError: typeof Standard_DimensionError;
  Standard_DimensionMismatch: typeof Standard_DimensionMismatch;
  Standard_DivideByZero: typeof Standard_DivideByZero;
  Standard_DomainError: typeof Standard_DomainError;
  Standard_Dump: typeof Standard_Dump;
  Standard_DumpSentry: typeof Standard_DumpSentry;
  Standard_Failure: typeof Standard_Failure;
  Standard_GUID: typeof Standard_GUID;
  Standard_ImmutableObject: typeof Standard_ImmutableObject;
  Standard_LicenseError: typeof Standard_LicenseError;
  Standard_LicenseNotFound: typeof Standard_LicenseNotFound;
  Standard_MMgrOpt: typeof Standard_MMgrOpt;
  Standard_MMgrRaw: typeof Standard_MMgrRaw;
  Standard_MMgrRoot: typeof Standard_MMgrRoot;
  Standard_MMgrTBBalloc: typeof Standard_MMgrTBBalloc;
  Standard_MultiplyDefined: typeof Standard_MultiplyDefined;
  Standard_NegativeValue: typeof Standard_NegativeValue;
  Standard_NoMoreObject: typeof Standard_NoMoreObject;
  Standard_NoSuchObject: typeof Standard_NoSuchObject;
  Standard_NotImplemented: typeof Standard_NotImplemented;
  Standard_NullObject: typeof Standard_NullObject;
  Standard_NullValue: typeof Standard_NullValue;
  Standard_NumericError: typeof Standard_NumericError;
  Standard_OutOfMemory: typeof Standard_OutOfMemory;
  Standard_OutOfRange: typeof Standard_OutOfRange;
  Standard_Overflow: typeof Standard_Overflow;
  Standard_Persistent: typeof Standard_Persistent;
  Standard_ProgramError: typeof Standard_ProgramError;
  Standard_RangeError: typeof Standard_RangeError;
  Standard_ReadBuffer: typeof Standard_ReadBuffer;
  Standard_ReadLineBuffer: typeof Standard_ReadLineBuffer;
  Standard_TooManyUsers: typeof Standard_TooManyUsers;
  Standard_Transient: typeof Standard_Transient;
  Standard_Type: typeof Standard_Type;
  Standard_TypeMismatch: typeof Standard_TypeMismatch;
  Standard_Underflow: typeof Standard_Underflow;
  StdDrivers: typeof StdDrivers;
  StdDrivers_DocumentRetrievalDriver: typeof StdDrivers_DocumentRetrievalDriver;
  StdFail_InfiniteSolutions: typeof StdFail_InfiniteSolutions;
  StdFail_NotDone: typeof StdFail_NotDone;
  StdFail_Undefined: typeof StdFail_Undefined;
  StdFail_UndefinedDerivative: typeof StdFail_UndefinedDerivative;
  StdFail_UndefinedValue: typeof StdFail_UndefinedValue;
  StdLDrivers: typeof StdLDrivers;
  StdLDrivers_DocumentRetrievalDriver: typeof StdLDrivers_DocumentRetrievalDriver;
  StdLPersistent: typeof StdLPersistent;
  StdLPersistent_Collection: typeof StdLPersistent_Collection;
  StdLPersistent_Data: typeof StdLPersistent_Data;
  StdLPersistent_Dependency: typeof StdLPersistent_Dependency;
  StdLPersistent_Document: typeof StdLPersistent_Document;
  StdLPersistent_HArray1: typeof StdLPersistent_HArray1;
  StdLPersistent_HArray2: typeof StdLPersistent_HArray2;
  StdLPersistent_HString: typeof StdLPersistent_HString;
  StdLPersistent_Value: typeof StdLPersistent_Value;
  StdLPersistent_Void: typeof StdLPersistent_Void;
  StdObjMgt_Persistent: typeof StdObjMgt_Persistent;
  StdObjMgt_ReadData: typeof StdObjMgt_ReadData;
  StdObjMgt_SharedObject: typeof StdObjMgt_SharedObject;
  StdObjMgt_WriteData: typeof StdObjMgt_WriteData;
  StdObject_Location: typeof StdObject_Location;
  StdObject_Shape: typeof StdObject_Shape;
  StdPersistent: typeof StdPersistent;
  StdPersistent_DataXtd: typeof StdPersistent_DataXtd;
  StdPersistent_HArray1: typeof StdPersistent_HArray1;
  StdPersistent_Naming: typeof StdPersistent_Naming;
  StdPersistent_PPrsStd: typeof StdPersistent_PPrsStd;
  StdPersistent_TopoDS: typeof StdPersistent_TopoDS;
  StdPrs_BndBox: typeof StdPrs_BndBox;
  StdPrs_Curve: typeof StdPrs_Curve;
  StdPrs_DeflectionCurve: typeof StdPrs_DeflectionCurve;
  StdPrs_HLRPolyShape: typeof StdPrs_HLRPolyShape;
  StdPrs_HLRShape: typeof StdPrs_HLRShape;
  StdPrs_HLRToolShape: typeof StdPrs_HLRToolShape;
  StdPrs_Isolines: typeof StdPrs_Isolines;
  StdPrs_Plane: typeof StdPrs_Plane;
  StdPrs_PoleCurve: typeof StdPrs_PoleCurve;
  StdPrs_ShadedShape: typeof StdPrs_ShadedShape;
  StdPrs_ShadedSurface: typeof StdPrs_ShadedSurface;
  StdPrs_ToolPoint: typeof StdPrs_ToolPoint;
  StdPrs_ToolRFace: typeof StdPrs_ToolRFace;
  StdPrs_ToolTriangulatedShape: typeof StdPrs_ToolTriangulatedShape;
  StdPrs_ToolVertex: typeof StdPrs_ToolVertex;
  StdPrs_WFDeflectionRestrictedFace: typeof StdPrs_WFDeflectionRestrictedFace;
  StdPrs_WFDeflectionSurface: typeof StdPrs_WFDeflectionSurface;
  StdPrs_WFPoleSurface: typeof StdPrs_WFPoleSurface;
  StdPrs_WFRestrictedFace: typeof StdPrs_WFRestrictedFace;
  StdPrs_WFShape: typeof StdPrs_WFShape;
  StdPrs_WFSurface: typeof StdPrs_WFSurface;
  StdSelect: typeof StdSelect;
  StdSelect_BRepOwner: typeof StdSelect_BRepOwner;
  StdSelect_BRepSelectionTool: typeof StdSelect_BRepSelectionTool;
  StdSelect_EdgeFilter: typeof StdSelect_EdgeFilter;
  StdSelect_FaceFilter: typeof StdSelect_FaceFilter;
  StdSelect_Prs: typeof StdSelect_Prs;
  StdSelect_Shape: typeof StdSelect_Shape;
  StdSelect_ShapeTypeFilter: typeof StdSelect_ShapeTypeFilter;
  StdSelect_ViewerSelector3d: typeof StdSelect_ViewerSelector3d;
  StdStorage: typeof StdStorage;
  StdStorage_Bucket: typeof StdStorage_Bucket;
  StdStorage_BucketIterator: typeof StdStorage_BucketIterator;
  StdStorage_BucketOfPersistent: typeof StdStorage_BucketOfPersistent;
  StdStorage_Data: typeof StdStorage_Data;
  StdStorage_HeaderData: typeof StdStorage_HeaderData;
  StdStorage_Root: typeof StdStorage_Root;
  StdStorage_RootData: typeof StdStorage_RootData;
  StdStorage_TypeData: typeof StdStorage_TypeData;
  StepAP203_ApprovedItem: typeof StepAP203_ApprovedItem;
  StepAP203_CcDesignApproval: typeof StepAP203_CcDesignApproval;
  StepAP203_CcDesignCertification: typeof StepAP203_CcDesignCertification;
  StepAP203_CcDesignContract: typeof StepAP203_CcDesignContract;
  StepAP203_CcDesignDateAndTimeAssignment: typeof StepAP203_CcDesignDateAndTimeAssignment;
  StepAP203_CcDesignPersonAndOrganizationAssignment: typeof StepAP203_CcDesignPersonAndOrganizationAssignment;
  StepAP203_CcDesignSecurityClassification: typeof StepAP203_CcDesignSecurityClassification;
  StepAP203_CcDesignSpecificationReference: typeof StepAP203_CcDesignSpecificationReference;
  StepAP203_CertifiedItem: typeof StepAP203_CertifiedItem;
  StepAP203_Change: typeof StepAP203_Change;
  StepAP203_ChangeRequest: typeof StepAP203_ChangeRequest;
  StepAP203_ChangeRequestItem: typeof StepAP203_ChangeRequestItem;
  StepAP203_ClassifiedItem: typeof StepAP203_ClassifiedItem;
  StepAP203_ContractedItem: typeof StepAP203_ContractedItem;
  StepAP203_DateTimeItem: typeof StepAP203_DateTimeItem;
  StepAP203_PersonOrganizationItem: typeof StepAP203_PersonOrganizationItem;
  StepAP203_SpecifiedItem: typeof StepAP203_SpecifiedItem;
  StepAP203_StartRequest: typeof StepAP203_StartRequest;
  StepAP203_StartRequestItem: typeof StepAP203_StartRequestItem;
  StepAP203_StartWork: typeof StepAP203_StartWork;
  StepAP203_WorkItem: typeof StepAP203_WorkItem;
  StepAP209_Construct: typeof StepAP209_Construct;
  StepAP214: typeof StepAP214;
  StepAP214_AppliedApprovalAssignment: typeof StepAP214_AppliedApprovalAssignment;
  StepAP214_AppliedDateAndTimeAssignment: typeof StepAP214_AppliedDateAndTimeAssignment;
  StepAP214_AppliedDateAssignment: typeof StepAP214_AppliedDateAssignment;
  StepAP214_AppliedDocumentReference: typeof StepAP214_AppliedDocumentReference;
  StepAP214_AppliedExternalIdentificationAssignment: typeof StepAP214_AppliedExternalIdentificationAssignment;
  StepAP214_AppliedGroupAssignment: typeof StepAP214_AppliedGroupAssignment;
  StepAP214_AppliedOrganizationAssignment: typeof StepAP214_AppliedOrganizationAssignment;
  StepAP214_AppliedPersonAndOrganizationAssignment: typeof StepAP214_AppliedPersonAndOrganizationAssignment;
  StepAP214_AppliedPresentedItem: typeof StepAP214_AppliedPresentedItem;
  StepAP214_AppliedSecurityClassificationAssignment: typeof StepAP214_AppliedSecurityClassificationAssignment;
  StepAP214_ApprovalItem: typeof StepAP214_ApprovalItem;
  StepAP214_AutoDesignActualDateAndTimeAssignment: typeof StepAP214_AutoDesignActualDateAndTimeAssignment;
  StepAP214_AutoDesignActualDateAssignment: typeof StepAP214_AutoDesignActualDateAssignment;
  StepAP214_AutoDesignApprovalAssignment: typeof StepAP214_AutoDesignApprovalAssignment;
  StepAP214_AutoDesignDateAndPersonAssignment: typeof StepAP214_AutoDesignDateAndPersonAssignment;
  StepAP214_AutoDesignDateAndPersonItem: typeof StepAP214_AutoDesignDateAndPersonItem;
  StepAP214_AutoDesignDateAndTimeItem: typeof StepAP214_AutoDesignDateAndTimeItem;
  StepAP214_AutoDesignDatedItem: typeof StepAP214_AutoDesignDatedItem;
  StepAP214_AutoDesignDocumentReference: typeof StepAP214_AutoDesignDocumentReference;
  StepAP214_AutoDesignGeneralOrgItem: typeof StepAP214_AutoDesignGeneralOrgItem;
  StepAP214_AutoDesignGroupAssignment: typeof StepAP214_AutoDesignGroupAssignment;
  StepAP214_AutoDesignGroupedItem: typeof StepAP214_AutoDesignGroupedItem;
  StepAP214_AutoDesignNominalDateAndTimeAssignment: typeof StepAP214_AutoDesignNominalDateAndTimeAssignment;
  StepAP214_AutoDesignNominalDateAssignment: typeof StepAP214_AutoDesignNominalDateAssignment;
  StepAP214_AutoDesignOrganizationAssignment: typeof StepAP214_AutoDesignOrganizationAssignment;
  StepAP214_AutoDesignOrganizationItem: typeof StepAP214_AutoDesignOrganizationItem;
  StepAP214_AutoDesignPersonAndOrganizationAssignment: typeof StepAP214_AutoDesignPersonAndOrganizationAssignment;
  StepAP214_AutoDesignPresentedItem: typeof StepAP214_AutoDesignPresentedItem;
  StepAP214_AutoDesignPresentedItemSelect: typeof StepAP214_AutoDesignPresentedItemSelect;
  StepAP214_AutoDesignReferencingItem: typeof StepAP214_AutoDesignReferencingItem;
  StepAP214_AutoDesignSecurityClassificationAssignment: typeof StepAP214_AutoDesignSecurityClassificationAssignment;
  StepAP214_Class: typeof StepAP214_Class;
  StepAP214_DateAndTimeItem: typeof StepAP214_DateAndTimeItem;
  StepAP214_DateItem: typeof StepAP214_DateItem;
  StepAP214_DocumentReferenceItem: typeof StepAP214_DocumentReferenceItem;
  StepAP214_ExternalIdentificationItem: typeof StepAP214_ExternalIdentificationItem;
  StepAP214_ExternallyDefinedClass: typeof StepAP214_ExternallyDefinedClass;
  StepAP214_ExternallyDefinedGeneralProperty: typeof StepAP214_ExternallyDefinedGeneralProperty;
  StepAP214_GroupItem: typeof StepAP214_GroupItem;
  StepAP214_OrganizationItem: typeof StepAP214_OrganizationItem;
  StepAP214_PersonAndOrganizationItem: typeof StepAP214_PersonAndOrganizationItem;
  StepAP214_PresentedItemSelect: typeof StepAP214_PresentedItemSelect;
  StepAP214_Protocol: typeof StepAP214_Protocol;
  StepAP214_RepItemGroup: typeof StepAP214_RepItemGroup;
  StepAP214_SecurityClassificationItem: typeof StepAP214_SecurityClassificationItem;
  StepAP242_DraughtingModelItemAssociation: typeof StepAP242_DraughtingModelItemAssociation;
  StepAP242_GeometricItemSpecificUsage: typeof StepAP242_GeometricItemSpecificUsage;
  StepAP242_IdAttribute: typeof StepAP242_IdAttribute;
  StepAP242_IdAttributeSelect: typeof StepAP242_IdAttributeSelect;
  StepAP242_ItemIdentifiedRepresentationUsage: typeof StepAP242_ItemIdentifiedRepresentationUsage;
  StepAP242_ItemIdentifiedRepresentationUsageDefinition: typeof StepAP242_ItemIdentifiedRepresentationUsageDefinition;
  StepBasic_Action: typeof StepBasic_Action;
  StepBasic_ActionAssignment: typeof StepBasic_ActionAssignment;
  StepBasic_ActionMethod: typeof StepBasic_ActionMethod;
  StepBasic_ActionRequestAssignment: typeof StepBasic_ActionRequestAssignment;
  StepBasic_ActionRequestSolution: typeof StepBasic_ActionRequestSolution;
  StepBasic_Address: typeof StepBasic_Address;
  StepBasic_ApplicationContext: typeof StepBasic_ApplicationContext;
  StepBasic_ApplicationContextElement: typeof StepBasic_ApplicationContextElement;
  StepBasic_ApplicationProtocolDefinition: typeof StepBasic_ApplicationProtocolDefinition;
  StepBasic_Approval: typeof StepBasic_Approval;
  StepBasic_ApprovalAssignment: typeof StepBasic_ApprovalAssignment;
  StepBasic_ApprovalDateTime: typeof StepBasic_ApprovalDateTime;
  StepBasic_ApprovalPersonOrganization: typeof StepBasic_ApprovalPersonOrganization;
  StepBasic_ApprovalRelationship: typeof StepBasic_ApprovalRelationship;
  StepBasic_ApprovalRole: typeof StepBasic_ApprovalRole;
  StepBasic_ApprovalStatus: typeof StepBasic_ApprovalStatus;
  StepBasic_AreaUnit: typeof StepBasic_AreaUnit;
  StepBasic_CalendarDate: typeof StepBasic_CalendarDate;
  StepBasic_Certification: typeof StepBasic_Certification;
  StepBasic_CertificationAssignment: typeof StepBasic_CertificationAssignment;
  StepBasic_CertificationType: typeof StepBasic_CertificationType;
  StepBasic_CharacterizedObject: typeof StepBasic_CharacterizedObject;
  StepBasic_Contract: typeof StepBasic_Contract;
  StepBasic_ContractAssignment: typeof StepBasic_ContractAssignment;
  StepBasic_ContractType: typeof StepBasic_ContractType;
  StepBasic_ConversionBasedUnit: typeof StepBasic_ConversionBasedUnit;
  StepBasic_ConversionBasedUnitAndAreaUnit: typeof StepBasic_ConversionBasedUnitAndAreaUnit;
  StepBasic_ConversionBasedUnitAndLengthUnit: typeof StepBasic_ConversionBasedUnitAndLengthUnit;
  StepBasic_ConversionBasedUnitAndMassUnit: typeof StepBasic_ConversionBasedUnitAndMassUnit;
  StepBasic_ConversionBasedUnitAndPlaneAngleUnit: typeof StepBasic_ConversionBasedUnitAndPlaneAngleUnit;
  StepBasic_ConversionBasedUnitAndRatioUnit: typeof StepBasic_ConversionBasedUnitAndRatioUnit;
  StepBasic_ConversionBasedUnitAndSolidAngleUnit: typeof StepBasic_ConversionBasedUnitAndSolidAngleUnit;
  StepBasic_ConversionBasedUnitAndTimeUnit: typeof StepBasic_ConversionBasedUnitAndTimeUnit;
  StepBasic_ConversionBasedUnitAndVolumeUnit: typeof StepBasic_ConversionBasedUnitAndVolumeUnit;
  StepBasic_CoordinatedUniversalTimeOffset: typeof StepBasic_CoordinatedUniversalTimeOffset;
  StepBasic_Date: typeof StepBasic_Date;
  StepBasic_DateAndTime: typeof StepBasic_DateAndTime;
  StepBasic_DateAndTimeAssignment: typeof StepBasic_DateAndTimeAssignment;
  StepBasic_DateAssignment: typeof StepBasic_DateAssignment;
  StepBasic_DateRole: typeof StepBasic_DateRole;
  StepBasic_DateTimeRole: typeof StepBasic_DateTimeRole;
  StepBasic_DateTimeSelect: typeof StepBasic_DateTimeSelect;
  StepBasic_DerivedUnit: typeof StepBasic_DerivedUnit;
  StepBasic_DerivedUnitElement: typeof StepBasic_DerivedUnitElement;
  StepBasic_DesignContext: typeof StepBasic_DesignContext;
  StepBasic_DigitalDocument: typeof StepBasic_DigitalDocument;
  StepBasic_DimensionalExponents: typeof StepBasic_DimensionalExponents;
  StepBasic_Document: typeof StepBasic_Document;
  StepBasic_DocumentFile: typeof StepBasic_DocumentFile;
  StepBasic_DocumentProductAssociation: typeof StepBasic_DocumentProductAssociation;
  StepBasic_DocumentProductEquivalence: typeof StepBasic_DocumentProductEquivalence;
  StepBasic_DocumentReference: typeof StepBasic_DocumentReference;
  StepBasic_DocumentRelationship: typeof StepBasic_DocumentRelationship;
  StepBasic_DocumentRepresentationType: typeof StepBasic_DocumentRepresentationType;
  StepBasic_DocumentType: typeof StepBasic_DocumentType;
  StepBasic_DocumentUsageConstraint: typeof StepBasic_DocumentUsageConstraint;
  StepBasic_Effectivity: typeof StepBasic_Effectivity;
  StepBasic_EffectivityAssignment: typeof StepBasic_EffectivityAssignment;
  StepBasic_EulerAngles: typeof StepBasic_EulerAngles;
  StepBasic_ExternalIdentificationAssignment: typeof StepBasic_ExternalIdentificationAssignment;
  StepBasic_ExternalSource: typeof StepBasic_ExternalSource;
  StepBasic_ExternallyDefinedItem: typeof StepBasic_ExternallyDefinedItem;
  StepBasic_GeneralProperty: typeof StepBasic_GeneralProperty;
  StepBasic_Group: typeof StepBasic_Group;
  StepBasic_GroupAssignment: typeof StepBasic_GroupAssignment;
  StepBasic_GroupRelationship: typeof StepBasic_GroupRelationship;
  StepBasic_IdentificationAssignment: typeof StepBasic_IdentificationAssignment;
  StepBasic_IdentificationRole: typeof StepBasic_IdentificationRole;
  StepBasic_LengthMeasureWithUnit: typeof StepBasic_LengthMeasureWithUnit;
  StepBasic_LengthUnit: typeof StepBasic_LengthUnit;
  StepBasic_LocalTime: typeof StepBasic_LocalTime;
  StepBasic_MassMeasureWithUnit: typeof StepBasic_MassMeasureWithUnit;
  StepBasic_MassUnit: typeof StepBasic_MassUnit;
  StepBasic_MeasureValueMember: typeof StepBasic_MeasureValueMember;
  StepBasic_MeasureWithUnit: typeof StepBasic_MeasureWithUnit;
  StepBasic_MechanicalContext: typeof StepBasic_MechanicalContext;
  StepBasic_NameAssignment: typeof StepBasic_NameAssignment;
  StepBasic_NamedUnit: typeof StepBasic_NamedUnit;
  StepBasic_ObjectRole: typeof StepBasic_ObjectRole;
  StepBasic_OrdinalDate: typeof StepBasic_OrdinalDate;
  StepBasic_Organization: typeof StepBasic_Organization;
  StepBasic_OrganizationAssignment: typeof StepBasic_OrganizationAssignment;
  StepBasic_OrganizationRole: typeof StepBasic_OrganizationRole;
  StepBasic_OrganizationalAddress: typeof StepBasic_OrganizationalAddress;
  StepBasic_Person: typeof StepBasic_Person;
  StepBasic_PersonAndOrganization: typeof StepBasic_PersonAndOrganization;
  StepBasic_PersonAndOrganizationAssignment: typeof StepBasic_PersonAndOrganizationAssignment;
  StepBasic_PersonAndOrganizationRole: typeof StepBasic_PersonAndOrganizationRole;
  StepBasic_PersonOrganizationSelect: typeof StepBasic_PersonOrganizationSelect;
  StepBasic_PersonalAddress: typeof StepBasic_PersonalAddress;
  StepBasic_PhysicallyModeledProductDefinition: typeof StepBasic_PhysicallyModeledProductDefinition;
  StepBasic_PlaneAngleMeasureWithUnit: typeof StepBasic_PlaneAngleMeasureWithUnit;
  StepBasic_PlaneAngleUnit: typeof StepBasic_PlaneAngleUnit;
  StepBasic_Product: typeof StepBasic_Product;
  StepBasic_ProductCategory: typeof StepBasic_ProductCategory;
  StepBasic_ProductCategoryRelationship: typeof StepBasic_ProductCategoryRelationship;
  StepBasic_ProductConceptContext: typeof StepBasic_ProductConceptContext;
  StepBasic_ProductContext: typeof StepBasic_ProductContext;
  StepBasic_ProductDefinition: typeof StepBasic_ProductDefinition;
  StepBasic_ProductDefinitionContext: typeof StepBasic_ProductDefinitionContext;
  StepBasic_ProductDefinitionEffectivity: typeof StepBasic_ProductDefinitionEffectivity;
  StepBasic_ProductDefinitionFormation: typeof StepBasic_ProductDefinitionFormation;
  StepBasic_ProductDefinitionFormationRelationship: typeof StepBasic_ProductDefinitionFormationRelationship;
  StepBasic_ProductDefinitionFormationWithSpecifiedSource: typeof StepBasic_ProductDefinitionFormationWithSpecifiedSource;
  StepBasic_ProductDefinitionOrReference: typeof StepBasic_ProductDefinitionOrReference;
  StepBasic_ProductDefinitionReference: typeof StepBasic_ProductDefinitionReference;
  StepBasic_ProductDefinitionReferenceWithLocalRepresentation: typeof StepBasic_ProductDefinitionReferenceWithLocalRepresentation;
  StepBasic_ProductDefinitionRelationship: typeof StepBasic_ProductDefinitionRelationship;
  StepBasic_ProductDefinitionWithAssociatedDocuments: typeof StepBasic_ProductDefinitionWithAssociatedDocuments;
  StepBasic_ProductOrFormationOrDefinition: typeof StepBasic_ProductOrFormationOrDefinition;
  StepBasic_ProductRelatedProductCategory: typeof StepBasic_ProductRelatedProductCategory;
  StepBasic_ProductType: typeof StepBasic_ProductType;
  StepBasic_RatioMeasureWithUnit: typeof StepBasic_RatioMeasureWithUnit;
  StepBasic_RatioUnit: typeof StepBasic_RatioUnit;
  StepBasic_RoleAssociation: typeof StepBasic_RoleAssociation;
  StepBasic_RoleSelect: typeof StepBasic_RoleSelect;
  StepBasic_SecurityClassification: typeof StepBasic_SecurityClassification;
  StepBasic_SecurityClassificationAssignment: typeof StepBasic_SecurityClassificationAssignment;
  StepBasic_SecurityClassificationLevel: typeof StepBasic_SecurityClassificationLevel;
  StepBasic_SiUnit: typeof StepBasic_SiUnit;
  StepBasic_SiUnitAndAreaUnit: typeof StepBasic_SiUnitAndAreaUnit;
  StepBasic_SiUnitAndLengthUnit: typeof StepBasic_SiUnitAndLengthUnit;
  StepBasic_SiUnitAndMassUnit: typeof StepBasic_SiUnitAndMassUnit;
  StepBasic_SiUnitAndPlaneAngleUnit: typeof StepBasic_SiUnitAndPlaneAngleUnit;
  StepBasic_SiUnitAndRatioUnit: typeof StepBasic_SiUnitAndRatioUnit;
  StepBasic_SiUnitAndSolidAngleUnit: typeof StepBasic_SiUnitAndSolidAngleUnit;
  StepBasic_SiUnitAndThermodynamicTemperatureUnit: typeof StepBasic_SiUnitAndThermodynamicTemperatureUnit;
  StepBasic_SiUnitAndTimeUnit: typeof StepBasic_SiUnitAndTimeUnit;
  StepBasic_SiUnitAndVolumeUnit: typeof StepBasic_SiUnitAndVolumeUnit;
  StepBasic_SizeMember: typeof StepBasic_SizeMember;
  StepBasic_SizeSelect: typeof StepBasic_SizeSelect;
  StepBasic_SolidAngleMeasureWithUnit: typeof StepBasic_SolidAngleMeasureWithUnit;
  StepBasic_SolidAngleUnit: typeof StepBasic_SolidAngleUnit;
  StepBasic_SourceItem: typeof StepBasic_SourceItem;
  StepBasic_ThermodynamicTemperatureUnit: typeof StepBasic_ThermodynamicTemperatureUnit;
  StepBasic_TimeMeasureWithUnit: typeof StepBasic_TimeMeasureWithUnit;
  StepBasic_TimeUnit: typeof StepBasic_TimeUnit;
  StepBasic_UncertaintyMeasureWithUnit: typeof StepBasic_UncertaintyMeasureWithUnit;
  StepBasic_Unit: typeof StepBasic_Unit;
  StepBasic_VersionedActionRequest: typeof StepBasic_VersionedActionRequest;
  StepBasic_VolumeUnit: typeof StepBasic_VolumeUnit;
  StepBasic_WeekOfYearAndDayDate: typeof StepBasic_WeekOfYearAndDayDate;
  StepData: typeof StepData;
  StepData_Described: typeof StepData_Described;
  StepData_ECDescr: typeof StepData_ECDescr;
  StepData_EDescr: typeof StepData_EDescr;
  StepData_ESDescr: typeof StepData_ESDescr;
  StepData_EnumTool: typeof StepData_EnumTool;
  StepData_Field: typeof StepData_Field;
  StepData_FieldList: typeof StepData_FieldList;
  StepData_FieldList1: typeof StepData_FieldList1;
  StepData_FieldListD: typeof StepData_FieldListD;
  StepData_FieldListN: typeof StepData_FieldListN;
  StepData_FileProtocol: typeof StepData_FileProtocol;
  StepData_FileRecognizer: typeof StepData_FileRecognizer;
  StepData_GlobalNodeOfWriterLib: typeof StepData_GlobalNodeOfWriterLib;
  StepData_NodeOfWriterLib: typeof StepData_NodeOfWriterLib;
  StepData_PDescr: typeof StepData_PDescr;
  StepData_Plex: typeof StepData_Plex;
  StepData_Protocol: typeof StepData_Protocol;
  StepData_ReadWriteModule: typeof StepData_ReadWriteModule;
  StepData_SelectArrReal: typeof StepData_SelectArrReal;
  StepData_SelectInt: typeof StepData_SelectInt;
  StepData_SelectMember: typeof StepData_SelectMember;
  StepData_SelectNamed: typeof StepData_SelectNamed;
  StepData_SelectReal: typeof StepData_SelectReal;
  StepData_SelectType: typeof StepData_SelectType;
  StepData_Simple: typeof StepData_Simple;
  StepData_StepDumper: typeof StepData_StepDumper;
  StepData_StepModel: typeof StepData_StepModel;
  StepData_StepReaderData: typeof StepData_StepReaderData;
  StepData_StepReaderTool: typeof StepData_StepReaderTool;
  StepData_StepWriter: typeof StepData_StepWriter;
  StepData_WriterLib: typeof StepData_WriterLib;
  StepDimTol_AngularityTolerance: typeof StepDimTol_AngularityTolerance;
  StepDimTol_CircularRunoutTolerance: typeof StepDimTol_CircularRunoutTolerance;
  StepDimTol_CoaxialityTolerance: typeof StepDimTol_CoaxialityTolerance;
  StepDimTol_CommonDatum: typeof StepDimTol_CommonDatum;
  StepDimTol_ConcentricityTolerance: typeof StepDimTol_ConcentricityTolerance;
  StepDimTol_CylindricityTolerance: typeof StepDimTol_CylindricityTolerance;
  StepDimTol_Datum: typeof StepDimTol_Datum;
  StepDimTol_DatumFeature: typeof StepDimTol_DatumFeature;
  StepDimTol_DatumOrCommonDatum: typeof StepDimTol_DatumOrCommonDatum;
  StepDimTol_DatumReference: typeof StepDimTol_DatumReference;
  StepDimTol_DatumReferenceCompartment: typeof StepDimTol_DatumReferenceCompartment;
  StepDimTol_DatumReferenceElement: typeof StepDimTol_DatumReferenceElement;
  StepDimTol_DatumReferenceModifier: typeof StepDimTol_DatumReferenceModifier;
  StepDimTol_DatumReferenceModifierWithValue: typeof StepDimTol_DatumReferenceModifierWithValue;
  StepDimTol_DatumSystem: typeof StepDimTol_DatumSystem;
  StepDimTol_DatumSystemOrReference: typeof StepDimTol_DatumSystemOrReference;
  StepDimTol_DatumTarget: typeof StepDimTol_DatumTarget;
  StepDimTol_FlatnessTolerance: typeof StepDimTol_FlatnessTolerance;
  StepDimTol_GeneralDatumReference: typeof StepDimTol_GeneralDatumReference;
  StepDimTol_GeoTolAndGeoTolWthDatRef: typeof StepDimTol_GeoTolAndGeoTolWthDatRef;
  StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol: typeof StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol;
  StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod: typeof StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod;
  StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol: typeof StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol;
  StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol: typeof StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol;
  StepDimTol_GeoTolAndGeoTolWthMaxTol: typeof StepDimTol_GeoTolAndGeoTolWthMaxTol;
  StepDimTol_GeoTolAndGeoTolWthMod: typeof StepDimTol_GeoTolAndGeoTolWthMod;
  StepDimTol_GeometricTolerance: typeof StepDimTol_GeometricTolerance;
  StepDimTol_GeometricToleranceRelationship: typeof StepDimTol_GeometricToleranceRelationship;
  StepDimTol_GeometricToleranceTarget: typeof StepDimTol_GeometricToleranceTarget;
  StepDimTol_GeometricToleranceWithDatumReference: typeof StepDimTol_GeometricToleranceWithDatumReference;
  StepDimTol_GeometricToleranceWithDefinedAreaUnit: typeof StepDimTol_GeometricToleranceWithDefinedAreaUnit;
  StepDimTol_GeometricToleranceWithDefinedUnit: typeof StepDimTol_GeometricToleranceWithDefinedUnit;
  StepDimTol_GeometricToleranceWithMaximumTolerance: typeof StepDimTol_GeometricToleranceWithMaximumTolerance;
  StepDimTol_GeometricToleranceWithModifiers: typeof StepDimTol_GeometricToleranceWithModifiers;
  StepDimTol_LineProfileTolerance: typeof StepDimTol_LineProfileTolerance;
  StepDimTol_ModifiedGeometricTolerance: typeof StepDimTol_ModifiedGeometricTolerance;
  StepDimTol_NonUniformZoneDefinition: typeof StepDimTol_NonUniformZoneDefinition;
  StepDimTol_ParallelismTolerance: typeof StepDimTol_ParallelismTolerance;
  StepDimTol_PerpendicularityTolerance: typeof StepDimTol_PerpendicularityTolerance;
  StepDimTol_PlacedDatumTargetFeature: typeof StepDimTol_PlacedDatumTargetFeature;
  StepDimTol_PositionTolerance: typeof StepDimTol_PositionTolerance;
  StepDimTol_ProjectedZoneDefinition: typeof StepDimTol_ProjectedZoneDefinition;
  StepDimTol_RoundnessTolerance: typeof StepDimTol_RoundnessTolerance;
  StepDimTol_RunoutZoneDefinition: typeof StepDimTol_RunoutZoneDefinition;
  StepDimTol_RunoutZoneOrientation: typeof StepDimTol_RunoutZoneOrientation;
  StepDimTol_ShapeToleranceSelect: typeof StepDimTol_ShapeToleranceSelect;
  StepDimTol_SimpleDatumReferenceModifierMember: typeof StepDimTol_SimpleDatumReferenceModifierMember;
  StepDimTol_StraightnessTolerance: typeof StepDimTol_StraightnessTolerance;
  StepDimTol_SurfaceProfileTolerance: typeof StepDimTol_SurfaceProfileTolerance;
  StepDimTol_SymmetryTolerance: typeof StepDimTol_SymmetryTolerance;
  StepDimTol_ToleranceZone: typeof StepDimTol_ToleranceZone;
  StepDimTol_ToleranceZoneDefinition: typeof StepDimTol_ToleranceZoneDefinition;
  StepDimTol_ToleranceZoneForm: typeof StepDimTol_ToleranceZoneForm;
  StepDimTol_ToleranceZoneTarget: typeof StepDimTol_ToleranceZoneTarget;
  StepDimTol_TotalRunoutTolerance: typeof StepDimTol_TotalRunoutTolerance;
  StepDimTol_UnequallyDisposedGeometricTolerance: typeof StepDimTol_UnequallyDisposedGeometricTolerance;
  StepElement_AnalysisItemWithinRepresentation: typeof StepElement_AnalysisItemWithinRepresentation;
  StepElement_Curve3dElementDescriptor: typeof StepElement_Curve3dElementDescriptor;
  StepElement_CurveElementEndReleasePacket: typeof StepElement_CurveElementEndReleasePacket;
  StepElement_CurveElementFreedom: typeof StepElement_CurveElementFreedom;
  StepElement_CurveElementFreedomMember: typeof StepElement_CurveElementFreedomMember;
  StepElement_CurveElementPurpose: typeof StepElement_CurveElementPurpose;
  StepElement_CurveElementPurposeMember: typeof StepElement_CurveElementPurposeMember;
  StepElement_CurveElementSectionDefinition: typeof StepElement_CurveElementSectionDefinition;
  StepElement_CurveElementSectionDerivedDefinitions: typeof StepElement_CurveElementSectionDerivedDefinitions;
  StepElement_ElementAspect: typeof StepElement_ElementAspect;
  StepElement_ElementAspectMember: typeof StepElement_ElementAspectMember;
  StepElement_ElementDescriptor: typeof StepElement_ElementDescriptor;
  StepElement_ElementMaterial: typeof StepElement_ElementMaterial;
  StepElement_MeasureOrUnspecifiedValue: typeof StepElement_MeasureOrUnspecifiedValue;
  StepElement_MeasureOrUnspecifiedValueMember: typeof StepElement_MeasureOrUnspecifiedValueMember;
  StepElement_Surface3dElementDescriptor: typeof StepElement_Surface3dElementDescriptor;
  StepElement_SurfaceElementProperty: typeof StepElement_SurfaceElementProperty;
  StepElement_SurfaceElementPurpose: typeof StepElement_SurfaceElementPurpose;
  StepElement_SurfaceElementPurposeMember: typeof StepElement_SurfaceElementPurposeMember;
  StepElement_SurfaceSection: typeof StepElement_SurfaceSection;
  StepElement_SurfaceSectionField: typeof StepElement_SurfaceSectionField;
  StepElement_SurfaceSectionFieldConstant: typeof StepElement_SurfaceSectionFieldConstant;
  StepElement_SurfaceSectionFieldVarying: typeof StepElement_SurfaceSectionFieldVarying;
  StepElement_UniformSurfaceSection: typeof StepElement_UniformSurfaceSection;
  StepElement_Volume3dElementDescriptor: typeof StepElement_Volume3dElementDescriptor;
  StepElement_VolumeElementPurpose: typeof StepElement_VolumeElementPurpose;
  StepElement_VolumeElementPurposeMember: typeof StepElement_VolumeElementPurposeMember;
  StepFEA_AlignedCurve3dElementCoordinateSystem: typeof StepFEA_AlignedCurve3dElementCoordinateSystem;
  StepFEA_AlignedSurface3dElementCoordinateSystem: typeof StepFEA_AlignedSurface3dElementCoordinateSystem;
  StepFEA_ArbitraryVolume3dElementCoordinateSystem: typeof StepFEA_ArbitraryVolume3dElementCoordinateSystem;
  StepFEA_ConstantSurface3dElementCoordinateSystem: typeof StepFEA_ConstantSurface3dElementCoordinateSystem;
  StepFEA_Curve3dElementProperty: typeof StepFEA_Curve3dElementProperty;
  StepFEA_Curve3dElementRepresentation: typeof StepFEA_Curve3dElementRepresentation;
  StepFEA_CurveElementEndCoordinateSystem: typeof StepFEA_CurveElementEndCoordinateSystem;
  StepFEA_CurveElementEndOffset: typeof StepFEA_CurveElementEndOffset;
  StepFEA_CurveElementEndRelease: typeof StepFEA_CurveElementEndRelease;
  StepFEA_CurveElementInterval: typeof StepFEA_CurveElementInterval;
  StepFEA_CurveElementIntervalConstant: typeof StepFEA_CurveElementIntervalConstant;
  StepFEA_CurveElementIntervalLinearlyVarying: typeof StepFEA_CurveElementIntervalLinearlyVarying;
  StepFEA_CurveElementLocation: typeof StepFEA_CurveElementLocation;
  StepFEA_DegreeOfFreedom: typeof StepFEA_DegreeOfFreedom;
  StepFEA_DegreeOfFreedomMember: typeof StepFEA_DegreeOfFreedomMember;
  StepFEA_DummyNode: typeof StepFEA_DummyNode;
  StepFEA_ElementGeometricRelationship: typeof StepFEA_ElementGeometricRelationship;
  StepFEA_ElementGroup: typeof StepFEA_ElementGroup;
  StepFEA_ElementOrElementGroup: typeof StepFEA_ElementOrElementGroup;
  StepFEA_ElementRepresentation: typeof StepFEA_ElementRepresentation;
  StepFEA_FeaAreaDensity: typeof StepFEA_FeaAreaDensity;
  StepFEA_FeaAxis2Placement3d: typeof StepFEA_FeaAxis2Placement3d;
  StepFEA_FeaCurveSectionGeometricRelationship: typeof StepFEA_FeaCurveSectionGeometricRelationship;
  StepFEA_FeaGroup: typeof StepFEA_FeaGroup;
  StepFEA_FeaLinearElasticity: typeof StepFEA_FeaLinearElasticity;
  StepFEA_FeaMassDensity: typeof StepFEA_FeaMassDensity;
  StepFEA_FeaMaterialPropertyRepresentation: typeof StepFEA_FeaMaterialPropertyRepresentation;
  StepFEA_FeaMaterialPropertyRepresentationItem: typeof StepFEA_FeaMaterialPropertyRepresentationItem;
  StepFEA_FeaModel: typeof StepFEA_FeaModel;
  StepFEA_FeaModel3d: typeof StepFEA_FeaModel3d;
  StepFEA_FeaModelDefinition: typeof StepFEA_FeaModelDefinition;
  StepFEA_FeaMoistureAbsorption: typeof StepFEA_FeaMoistureAbsorption;
  StepFEA_FeaParametricPoint: typeof StepFEA_FeaParametricPoint;
  StepFEA_FeaRepresentationItem: typeof StepFEA_FeaRepresentationItem;
  StepFEA_FeaSecantCoefficientOfLinearThermalExpansion: typeof StepFEA_FeaSecantCoefficientOfLinearThermalExpansion;
  StepFEA_FeaShellBendingStiffness: typeof StepFEA_FeaShellBendingStiffness;
  StepFEA_FeaShellMembraneBendingCouplingStiffness: typeof StepFEA_FeaShellMembraneBendingCouplingStiffness;
  StepFEA_FeaShellMembraneStiffness: typeof StepFEA_FeaShellMembraneStiffness;
  StepFEA_FeaShellShearStiffness: typeof StepFEA_FeaShellShearStiffness;
  StepFEA_FeaSurfaceSectionGeometricRelationship: typeof StepFEA_FeaSurfaceSectionGeometricRelationship;
  StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion: typeof StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion;
  StepFEA_FreedomAndCoefficient: typeof StepFEA_FreedomAndCoefficient;
  StepFEA_FreedomsList: typeof StepFEA_FreedomsList;
  StepFEA_GeometricNode: typeof StepFEA_GeometricNode;
  StepFEA_Node: typeof StepFEA_Node;
  StepFEA_NodeDefinition: typeof StepFEA_NodeDefinition;
  StepFEA_NodeGroup: typeof StepFEA_NodeGroup;
  StepFEA_NodeRepresentation: typeof StepFEA_NodeRepresentation;
  StepFEA_NodeSet: typeof StepFEA_NodeSet;
  StepFEA_NodeWithSolutionCoordinateSystem: typeof StepFEA_NodeWithSolutionCoordinateSystem;
  StepFEA_NodeWithVector: typeof StepFEA_NodeWithVector;
  StepFEA_ParametricCurve3dElementCoordinateDirection: typeof StepFEA_ParametricCurve3dElementCoordinateDirection;
  StepFEA_ParametricCurve3dElementCoordinateSystem: typeof StepFEA_ParametricCurve3dElementCoordinateSystem;
  StepFEA_ParametricSurface3dElementCoordinateSystem: typeof StepFEA_ParametricSurface3dElementCoordinateSystem;
  StepFEA_Surface3dElementRepresentation: typeof StepFEA_Surface3dElementRepresentation;
  StepFEA_SymmetricTensor22d: typeof StepFEA_SymmetricTensor22d;
  StepFEA_SymmetricTensor23d: typeof StepFEA_SymmetricTensor23d;
  StepFEA_SymmetricTensor23dMember: typeof StepFEA_SymmetricTensor23dMember;
  StepFEA_SymmetricTensor42d: typeof StepFEA_SymmetricTensor42d;
  StepFEA_SymmetricTensor43dMember: typeof StepFEA_SymmetricTensor43dMember;
  StepFEA_Volume3dElementRepresentation: typeof StepFEA_Volume3dElementRepresentation;
  StepGeom_Axis1Placement: typeof StepGeom_Axis1Placement;
  StepGeom_Axis2Placement: typeof StepGeom_Axis2Placement;
  StepGeom_Axis2Placement2d: typeof StepGeom_Axis2Placement2d;
  StepGeom_Axis2Placement3d: typeof StepGeom_Axis2Placement3d;
  StepGeom_BSplineCurve: typeof StepGeom_BSplineCurve;
  StepGeom_BSplineCurveWithKnots: typeof StepGeom_BSplineCurveWithKnots;
  StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve: typeof StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve;
  StepGeom_BSplineSurface: typeof StepGeom_BSplineSurface;
  StepGeom_BSplineSurfaceWithKnots: typeof StepGeom_BSplineSurfaceWithKnots;
  StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface: typeof StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface;
  StepGeom_BezierCurve: typeof StepGeom_BezierCurve;
  StepGeom_BezierCurveAndRationalBSplineCurve: typeof StepGeom_BezierCurveAndRationalBSplineCurve;
  StepGeom_BezierSurface: typeof StepGeom_BezierSurface;
  StepGeom_BezierSurfaceAndRationalBSplineSurface: typeof StepGeom_BezierSurfaceAndRationalBSplineSurface;
  StepGeom_BoundaryCurve: typeof StepGeom_BoundaryCurve;
  StepGeom_BoundedCurve: typeof StepGeom_BoundedCurve;
  StepGeom_BoundedSurface: typeof StepGeom_BoundedSurface;
  StepGeom_CartesianPoint: typeof StepGeom_CartesianPoint;
  StepGeom_CartesianTransformationOperator: typeof StepGeom_CartesianTransformationOperator;
  StepGeom_CartesianTransformationOperator2d: typeof StepGeom_CartesianTransformationOperator2d;
  StepGeom_CartesianTransformationOperator3d: typeof StepGeom_CartesianTransformationOperator3d;
  StepGeom_Circle: typeof StepGeom_Circle;
  StepGeom_CompositeCurve: typeof StepGeom_CompositeCurve;
  StepGeom_CompositeCurveOnSurface: typeof StepGeom_CompositeCurveOnSurface;
  StepGeom_CompositeCurveSegment: typeof StepGeom_CompositeCurveSegment;
  StepGeom_Conic: typeof StepGeom_Conic;
  StepGeom_ConicalSurface: typeof StepGeom_ConicalSurface;
  StepGeom_Curve: typeof StepGeom_Curve;
  StepGeom_CurveBoundedSurface: typeof StepGeom_CurveBoundedSurface;
  StepGeom_CurveOnSurface: typeof StepGeom_CurveOnSurface;
  StepGeom_CurveReplica: typeof StepGeom_CurveReplica;
  StepGeom_CylindricalSurface: typeof StepGeom_CylindricalSurface;
  StepGeom_DegeneratePcurve: typeof StepGeom_DegeneratePcurve;
  StepGeom_DegenerateToroidalSurface: typeof StepGeom_DegenerateToroidalSurface;
  StepGeom_Direction: typeof StepGeom_Direction;
  StepGeom_ElementarySurface: typeof StepGeom_ElementarySurface;
  StepGeom_Ellipse: typeof StepGeom_Ellipse;
  StepGeom_EvaluatedDegeneratePcurve: typeof StepGeom_EvaluatedDegeneratePcurve;
  StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx: typeof StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx;
  StepGeom_GeometricRepresentationContext: typeof StepGeom_GeometricRepresentationContext;
  StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext: typeof StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext;
  StepGeom_GeometricRepresentationContextAndParametricRepresentationContext: typeof StepGeom_GeometricRepresentationContextAndParametricRepresentationContext;
  StepGeom_GeometricRepresentationItem: typeof StepGeom_GeometricRepresentationItem;
  StepGeom_Hyperbola: typeof StepGeom_Hyperbola;
  StepGeom_IntersectionCurve: typeof StepGeom_IntersectionCurve;
  StepGeom_Line: typeof StepGeom_Line;
  StepGeom_OffsetCurve3d: typeof StepGeom_OffsetCurve3d;
  StepGeom_OffsetSurface: typeof StepGeom_OffsetSurface;
  StepGeom_OrientedSurface: typeof StepGeom_OrientedSurface;
  StepGeom_OuterBoundaryCurve: typeof StepGeom_OuterBoundaryCurve;
  StepGeom_Parabola: typeof StepGeom_Parabola;
  StepGeom_Pcurve: typeof StepGeom_Pcurve;
  StepGeom_PcurveOrSurface: typeof StepGeom_PcurveOrSurface;
  StepGeom_Placement: typeof StepGeom_Placement;
  StepGeom_Plane: typeof StepGeom_Plane;
  StepGeom_Point: typeof StepGeom_Point;
  StepGeom_PointOnCurve: typeof StepGeom_PointOnCurve;
  StepGeom_PointOnSurface: typeof StepGeom_PointOnSurface;
  StepGeom_PointReplica: typeof StepGeom_PointReplica;
  StepGeom_Polyline: typeof StepGeom_Polyline;
  StepGeom_QuasiUniformCurve: typeof StepGeom_QuasiUniformCurve;
  StepGeom_QuasiUniformCurveAndRationalBSplineCurve: typeof StepGeom_QuasiUniformCurveAndRationalBSplineCurve;
  StepGeom_QuasiUniformSurface: typeof StepGeom_QuasiUniformSurface;
  StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface: typeof StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface;
  StepGeom_RationalBSplineCurve: typeof StepGeom_RationalBSplineCurve;
  StepGeom_RationalBSplineSurface: typeof StepGeom_RationalBSplineSurface;
  StepGeom_RectangularCompositeSurface: typeof StepGeom_RectangularCompositeSurface;
  StepGeom_RectangularTrimmedSurface: typeof StepGeom_RectangularTrimmedSurface;
  StepGeom_ReparametrisedCompositeCurveSegment: typeof StepGeom_ReparametrisedCompositeCurveSegment;
  StepGeom_SeamCurve: typeof StepGeom_SeamCurve;
  StepGeom_SphericalSurface: typeof StepGeom_SphericalSurface;
  StepGeom_Surface: typeof StepGeom_Surface;
  StepGeom_SurfaceBoundary: typeof StepGeom_SurfaceBoundary;
  StepGeom_SurfaceCurve: typeof StepGeom_SurfaceCurve;
  StepGeom_SurfaceCurveAndBoundedCurve: typeof StepGeom_SurfaceCurveAndBoundedCurve;
  StepGeom_SurfaceOfLinearExtrusion: typeof StepGeom_SurfaceOfLinearExtrusion;
  StepGeom_SurfaceOfRevolution: typeof StepGeom_SurfaceOfRevolution;
  StepGeom_SurfacePatch: typeof StepGeom_SurfacePatch;
  StepGeom_SurfaceReplica: typeof StepGeom_SurfaceReplica;
  StepGeom_SweptSurface: typeof StepGeom_SweptSurface;
  StepGeom_ToroidalSurface: typeof StepGeom_ToroidalSurface;
  StepGeom_TrimmedCurve: typeof StepGeom_TrimmedCurve;
  StepGeom_TrimmingMember: typeof StepGeom_TrimmingMember;
  StepGeom_TrimmingSelect: typeof StepGeom_TrimmingSelect;
  StepGeom_UniformCurve: typeof StepGeom_UniformCurve;
  StepGeom_UniformCurveAndRationalBSplineCurve: typeof StepGeom_UniformCurveAndRationalBSplineCurve;
  StepGeom_UniformSurface: typeof StepGeom_UniformSurface;
  StepGeom_UniformSurfaceAndRationalBSplineSurface: typeof StepGeom_UniformSurfaceAndRationalBSplineSurface;
  StepGeom_Vector: typeof StepGeom_Vector;
  StepGeom_VectorOrDirection: typeof StepGeom_VectorOrDirection;
  StepRepr_AllAroundShapeAspect: typeof StepRepr_AllAroundShapeAspect;
  StepRepr_Apex: typeof StepRepr_Apex;
  StepRepr_AssemblyComponentUsage: typeof StepRepr_AssemblyComponentUsage;
  StepRepr_AssemblyComponentUsageSubstitute: typeof StepRepr_AssemblyComponentUsageSubstitute;
  StepRepr_BetweenShapeAspect: typeof StepRepr_BetweenShapeAspect;
  StepRepr_CentreOfSymmetry: typeof StepRepr_CentreOfSymmetry;
  StepRepr_CharacterizedDefinition: typeof StepRepr_CharacterizedDefinition;
  StepRepr_CharacterizedRepresentation: typeof StepRepr_CharacterizedRepresentation;
  StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp: typeof StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp;
  StepRepr_CompShAspAndDatumFeatAndShAsp: typeof StepRepr_CompShAspAndDatumFeatAndShAsp;
  StepRepr_CompositeGroupShapeAspect: typeof StepRepr_CompositeGroupShapeAspect;
  StepRepr_CompositeShapeAspect: typeof StepRepr_CompositeShapeAspect;
  StepRepr_CompoundRepresentationItem: typeof StepRepr_CompoundRepresentationItem;
  StepRepr_ConfigurationDesign: typeof StepRepr_ConfigurationDesign;
  StepRepr_ConfigurationDesignItem: typeof StepRepr_ConfigurationDesignItem;
  StepRepr_ConfigurationEffectivity: typeof StepRepr_ConfigurationEffectivity;
  StepRepr_ConfigurationItem: typeof StepRepr_ConfigurationItem;
  StepRepr_ConstructiveGeometryRepresentation: typeof StepRepr_ConstructiveGeometryRepresentation;
  StepRepr_ConstructiveGeometryRepresentationRelationship: typeof StepRepr_ConstructiveGeometryRepresentationRelationship;
  StepRepr_ContinuosShapeAspect: typeof StepRepr_ContinuosShapeAspect;
  StepRepr_DataEnvironment: typeof StepRepr_DataEnvironment;
  StepRepr_DefinitionalRepresentation: typeof StepRepr_DefinitionalRepresentation;
  StepRepr_DerivedShapeAspect: typeof StepRepr_DerivedShapeAspect;
  StepRepr_DescriptiveRepresentationItem: typeof StepRepr_DescriptiveRepresentationItem;
  StepRepr_Extension: typeof StepRepr_Extension;
  StepRepr_ExternallyDefinedRepresentation: typeof StepRepr_ExternallyDefinedRepresentation;
  StepRepr_FeatureForDatumTargetRelationship: typeof StepRepr_FeatureForDatumTargetRelationship;
  StepRepr_FunctionallyDefinedTransformation: typeof StepRepr_FunctionallyDefinedTransformation;
  StepRepr_GeometricAlignment: typeof StepRepr_GeometricAlignment;
  StepRepr_GlobalUncertaintyAssignedContext: typeof StepRepr_GlobalUncertaintyAssignedContext;
  StepRepr_GlobalUnitAssignedContext: typeof StepRepr_GlobalUnitAssignedContext;
  StepRepr_IntegerRepresentationItem: typeof StepRepr_IntegerRepresentationItem;
  StepRepr_ItemDefinedTransformation: typeof StepRepr_ItemDefinedTransformation;
  StepRepr_MakeFromUsageOption: typeof StepRepr_MakeFromUsageOption;
  StepRepr_MappedItem: typeof StepRepr_MappedItem;
  StepRepr_MaterialDesignation: typeof StepRepr_MaterialDesignation;
  StepRepr_MaterialProperty: typeof StepRepr_MaterialProperty;
  StepRepr_MaterialPropertyRepresentation: typeof StepRepr_MaterialPropertyRepresentation;
  StepRepr_MeasureRepresentationItem: typeof StepRepr_MeasureRepresentationItem;
  StepRepr_NextAssemblyUsageOccurrence: typeof StepRepr_NextAssemblyUsageOccurrence;
  StepRepr_ParallelOffset: typeof StepRepr_ParallelOffset;
  StepRepr_ParametricRepresentationContext: typeof StepRepr_ParametricRepresentationContext;
  StepRepr_PerpendicularTo: typeof StepRepr_PerpendicularTo;
  StepRepr_ProductConcept: typeof StepRepr_ProductConcept;
  StepRepr_ProductDefinitionShape: typeof StepRepr_ProductDefinitionShape;
  StepRepr_ProductDefinitionUsage: typeof StepRepr_ProductDefinitionUsage;
  StepRepr_PromissoryUsageOccurrence: typeof StepRepr_PromissoryUsageOccurrence;
  StepRepr_PropertyDefinition: typeof StepRepr_PropertyDefinition;
  StepRepr_PropertyDefinitionRelationship: typeof StepRepr_PropertyDefinitionRelationship;
  StepRepr_PropertyDefinitionRepresentation: typeof StepRepr_PropertyDefinitionRepresentation;
  StepRepr_QuantifiedAssemblyComponentUsage: typeof StepRepr_QuantifiedAssemblyComponentUsage;
  StepRepr_ReprItemAndLengthMeasureWithUnit: typeof StepRepr_ReprItemAndLengthMeasureWithUnit;
  StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI: typeof StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI;
  StepRepr_ReprItemAndMeasureWithUnit: typeof StepRepr_ReprItemAndMeasureWithUnit;
  StepRepr_ReprItemAndMeasureWithUnitAndQRI: typeof StepRepr_ReprItemAndMeasureWithUnitAndQRI;
  StepRepr_ReprItemAndPlaneAngleMeasureWithUnit: typeof StepRepr_ReprItemAndPlaneAngleMeasureWithUnit;
  StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI: typeof StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI;
  StepRepr_Representation: typeof StepRepr_Representation;
  StepRepr_RepresentationContext: typeof StepRepr_RepresentationContext;
  StepRepr_RepresentationItem: typeof StepRepr_RepresentationItem;
  StepRepr_RepresentationMap: typeof StepRepr_RepresentationMap;
  StepRepr_RepresentationRelationship: typeof StepRepr_RepresentationRelationship;
  StepRepr_RepresentationRelationshipWithTransformation: typeof StepRepr_RepresentationRelationshipWithTransformation;
  StepRepr_RepresentedDefinition: typeof StepRepr_RepresentedDefinition;
  StepRepr_ShapeAspect: typeof StepRepr_ShapeAspect;
  StepRepr_ShapeAspectDerivingRelationship: typeof StepRepr_ShapeAspectDerivingRelationship;
  StepRepr_ShapeAspectRelationship: typeof StepRepr_ShapeAspectRelationship;
  StepRepr_ShapeAspectTransition: typeof StepRepr_ShapeAspectTransition;
  StepRepr_ShapeDefinition: typeof StepRepr_ShapeDefinition;
  StepRepr_ShapeRepresentationRelationship: typeof StepRepr_ShapeRepresentationRelationship;
  StepRepr_ShapeRepresentationRelationshipWithTransformation: typeof StepRepr_ShapeRepresentationRelationshipWithTransformation;
  StepRepr_SpecifiedHigherUsageOccurrence: typeof StepRepr_SpecifiedHigherUsageOccurrence;
  StepRepr_StructuralResponseProperty: typeof StepRepr_StructuralResponseProperty;
  StepRepr_StructuralResponsePropertyDefinitionRepresentation: typeof StepRepr_StructuralResponsePropertyDefinitionRepresentation;
  StepRepr_SuppliedPartRelationship: typeof StepRepr_SuppliedPartRelationship;
  StepRepr_Tangent: typeof StepRepr_Tangent;
  StepRepr_Transformation: typeof StepRepr_Transformation;
  StepRepr_ValueRange: typeof StepRepr_ValueRange;
  StepRepr_ValueRepresentationItem: typeof StepRepr_ValueRepresentationItem;
  StepSelect_Activator: typeof StepSelect_Activator;
  StepSelect_FileModifier: typeof StepSelect_FileModifier;
  StepSelect_FloatFormat: typeof StepSelect_FloatFormat;
  StepSelect_ModelModifier: typeof StepSelect_ModelModifier;
  StepSelect_StepType: typeof StepSelect_StepType;
  StepSelect_WorkLibrary: typeof StepSelect_WorkLibrary;
  StepShape_AdvancedBrepShapeRepresentation: typeof StepShape_AdvancedBrepShapeRepresentation;
  StepShape_AdvancedFace: typeof StepShape_AdvancedFace;
  StepShape_AngularLocation: typeof StepShape_AngularLocation;
  StepShape_AngularSize: typeof StepShape_AngularSize;
  StepShape_Block: typeof StepShape_Block;
  StepShape_BooleanOperand: typeof StepShape_BooleanOperand;
  StepShape_BooleanResult: typeof StepShape_BooleanResult;
  StepShape_BoxDomain: typeof StepShape_BoxDomain;
  StepShape_BoxedHalfSpace: typeof StepShape_BoxedHalfSpace;
  StepShape_BrepWithVoids: typeof StepShape_BrepWithVoids;
  StepShape_ClosedShell: typeof StepShape_ClosedShell;
  StepShape_CompoundShapeRepresentation: typeof StepShape_CompoundShapeRepresentation;
  StepShape_ConnectedEdgeSet: typeof StepShape_ConnectedEdgeSet;
  StepShape_ConnectedFaceSet: typeof StepShape_ConnectedFaceSet;
  StepShape_ConnectedFaceShapeRepresentation: typeof StepShape_ConnectedFaceShapeRepresentation;
  StepShape_ConnectedFaceSubSet: typeof StepShape_ConnectedFaceSubSet;
  StepShape_ContextDependentShapeRepresentation: typeof StepShape_ContextDependentShapeRepresentation;
  StepShape_CsgPrimitive: typeof StepShape_CsgPrimitive;
  StepShape_CsgSelect: typeof StepShape_CsgSelect;
  StepShape_CsgShapeRepresentation: typeof StepShape_CsgShapeRepresentation;
  StepShape_CsgSolid: typeof StepShape_CsgSolid;
  StepShape_DefinitionalRepresentationAndShapeRepresentation: typeof StepShape_DefinitionalRepresentationAndShapeRepresentation;
  StepShape_DimensionalCharacteristic: typeof StepShape_DimensionalCharacteristic;
  StepShape_DimensionalCharacteristicRepresentation: typeof StepShape_DimensionalCharacteristicRepresentation;
  StepShape_DimensionalLocation: typeof StepShape_DimensionalLocation;
  StepShape_DimensionalLocationWithPath: typeof StepShape_DimensionalLocationWithPath;
  StepShape_DimensionalSize: typeof StepShape_DimensionalSize;
  StepShape_DimensionalSizeWithPath: typeof StepShape_DimensionalSizeWithPath;
  StepShape_DirectedDimensionalLocation: typeof StepShape_DirectedDimensionalLocation;
  StepShape_Edge: typeof StepShape_Edge;
  StepShape_EdgeBasedWireframeModel: typeof StepShape_EdgeBasedWireframeModel;
  StepShape_EdgeBasedWireframeShapeRepresentation: typeof StepShape_EdgeBasedWireframeShapeRepresentation;
  StepShape_EdgeCurve: typeof StepShape_EdgeCurve;
  StepShape_EdgeLoop: typeof StepShape_EdgeLoop;
  StepShape_ExtrudedAreaSolid: typeof StepShape_ExtrudedAreaSolid;
  StepShape_ExtrudedFaceSolid: typeof StepShape_ExtrudedFaceSolid;
  StepShape_Face: typeof StepShape_Face;
  StepShape_FaceBasedSurfaceModel: typeof StepShape_FaceBasedSurfaceModel;
  StepShape_FaceBound: typeof StepShape_FaceBound;
  StepShape_FaceOuterBound: typeof StepShape_FaceOuterBound;
  StepShape_FaceSurface: typeof StepShape_FaceSurface;
  StepShape_FacetedBrep: typeof StepShape_FacetedBrep;
  StepShape_FacetedBrepAndBrepWithVoids: typeof StepShape_FacetedBrepAndBrepWithVoids;
  StepShape_FacetedBrepShapeRepresentation: typeof StepShape_FacetedBrepShapeRepresentation;
  StepShape_GeometricCurveSet: typeof StepShape_GeometricCurveSet;
  StepShape_GeometricSet: typeof StepShape_GeometricSet;
  StepShape_GeometricSetSelect: typeof StepShape_GeometricSetSelect;
  StepShape_GeometricallyBoundedSurfaceShapeRepresentation: typeof StepShape_GeometricallyBoundedSurfaceShapeRepresentation;
  StepShape_GeometricallyBoundedWireframeShapeRepresentation: typeof StepShape_GeometricallyBoundedWireframeShapeRepresentation;
  StepShape_HalfSpaceSolid: typeof StepShape_HalfSpaceSolid;
  StepShape_LimitsAndFits: typeof StepShape_LimitsAndFits;
  StepShape_Loop: typeof StepShape_Loop;
  StepShape_LoopAndPath: typeof StepShape_LoopAndPath;
  StepShape_ManifoldSolidBrep: typeof StepShape_ManifoldSolidBrep;
  StepShape_ManifoldSurfaceShapeRepresentation: typeof StepShape_ManifoldSurfaceShapeRepresentation;
  StepShape_MeasureQualification: typeof StepShape_MeasureQualification;
  StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem: typeof StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem;
  StepShape_NonManifoldSurfaceShapeRepresentation: typeof StepShape_NonManifoldSurfaceShapeRepresentation;
  StepShape_OpenShell: typeof StepShape_OpenShell;
  StepShape_OrientedClosedShell: typeof StepShape_OrientedClosedShell;
  StepShape_OrientedEdge: typeof StepShape_OrientedEdge;
  StepShape_OrientedFace: typeof StepShape_OrientedFace;
  StepShape_OrientedOpenShell: typeof StepShape_OrientedOpenShell;
  StepShape_OrientedPath: typeof StepShape_OrientedPath;
  StepShape_Path: typeof StepShape_Path;
  StepShape_PlusMinusTolerance: typeof StepShape_PlusMinusTolerance;
  StepShape_PointRepresentation: typeof StepShape_PointRepresentation;
  StepShape_PolyLoop: typeof StepShape_PolyLoop;
  StepShape_PrecisionQualifier: typeof StepShape_PrecisionQualifier;
  StepShape_QualifiedRepresentationItem: typeof StepShape_QualifiedRepresentationItem;
  StepShape_ReversibleTopologyItem: typeof StepShape_ReversibleTopologyItem;
  StepShape_RevolvedAreaSolid: typeof StepShape_RevolvedAreaSolid;
  StepShape_RevolvedFaceSolid: typeof StepShape_RevolvedFaceSolid;
  StepShape_RightAngularWedge: typeof StepShape_RightAngularWedge;
  StepShape_RightCircularCone: typeof StepShape_RightCircularCone;
  StepShape_RightCircularCylinder: typeof StepShape_RightCircularCylinder;
  StepShape_SeamEdge: typeof StepShape_SeamEdge;
  StepShape_ShapeDefinitionRepresentation: typeof StepShape_ShapeDefinitionRepresentation;
  StepShape_ShapeDimensionRepresentation: typeof StepShape_ShapeDimensionRepresentation;
  StepShape_ShapeDimensionRepresentationItem: typeof StepShape_ShapeDimensionRepresentationItem;
  StepShape_ShapeRepresentation: typeof StepShape_ShapeRepresentation;
  StepShape_ShapeRepresentationWithParameters: typeof StepShape_ShapeRepresentationWithParameters;
  StepShape_Shell: typeof StepShape_Shell;
  StepShape_ShellBasedSurfaceModel: typeof StepShape_ShellBasedSurfaceModel;
  StepShape_SolidModel: typeof StepShape_SolidModel;
  StepShape_SolidReplica: typeof StepShape_SolidReplica;
  StepShape_Sphere: typeof StepShape_Sphere;
  StepShape_Subedge: typeof StepShape_Subedge;
  StepShape_Subface: typeof StepShape_Subface;
  StepShape_SurfaceModel: typeof StepShape_SurfaceModel;
  StepShape_SweptAreaSolid: typeof StepShape_SweptAreaSolid;
  StepShape_SweptFaceSolid: typeof StepShape_SweptFaceSolid;
  StepShape_ToleranceMethodDefinition: typeof StepShape_ToleranceMethodDefinition;
  StepShape_ToleranceValue: typeof StepShape_ToleranceValue;
  StepShape_TopologicalRepresentationItem: typeof StepShape_TopologicalRepresentationItem;
  StepShape_Torus: typeof StepShape_Torus;
  StepShape_TransitionalShapeRepresentation: typeof StepShape_TransitionalShapeRepresentation;
  StepShape_TypeQualifier: typeof StepShape_TypeQualifier;
  StepShape_ValueFormatTypeQualifier: typeof StepShape_ValueFormatTypeQualifier;
  StepShape_ValueQualifier: typeof StepShape_ValueQualifier;
  StepShape_Vertex: typeof StepShape_Vertex;
  StepShape_VertexLoop: typeof StepShape_VertexLoop;
  StepShape_VertexPoint: typeof StepShape_VertexPoint;
  StepToGeom: typeof StepToGeom;
  StepToTopoDS: typeof StepToTopoDS;
  StepToTopoDS_CartesianPointHasher: typeof StepToTopoDS_CartesianPointHasher;
  StepToTopoDS_GeometricTool: typeof StepToTopoDS_GeometricTool;
  StepToTopoDS_MakeTransformed: typeof StepToTopoDS_MakeTransformed;
  StepToTopoDS_NMTool: typeof StepToTopoDS_NMTool;
  StepToTopoDS_PointPair: typeof StepToTopoDS_PointPair;
  StepToTopoDS_PointPairHasher: typeof StepToTopoDS_PointPairHasher;
  StepToTopoDS_Root: typeof StepToTopoDS_Root;
  StepToTopoDS_Tool: typeof StepToTopoDS_Tool;
  StepToTopoDS_TranslateCompositeCurve: typeof StepToTopoDS_TranslateCompositeCurve;
  StepToTopoDS_TranslateCurveBoundedSurface: typeof StepToTopoDS_TranslateCurveBoundedSurface;
  StepToTopoDS_TranslateEdge: typeof StepToTopoDS_TranslateEdge;
  StepToTopoDS_TranslateEdgeLoop: typeof StepToTopoDS_TranslateEdgeLoop;
  StepToTopoDS_TranslateFace: typeof StepToTopoDS_TranslateFace;
  StepToTopoDS_TranslatePolyLoop: typeof StepToTopoDS_TranslatePolyLoop;
  StepToTopoDS_TranslateShell: typeof StepToTopoDS_TranslateShell;
  StepToTopoDS_TranslateVertex: typeof StepToTopoDS_TranslateVertex;
  StepToTopoDS_TranslateVertexLoop: typeof StepToTopoDS_TranslateVertexLoop;
  StepVisual_AnnotationCurveOccurrence: typeof StepVisual_AnnotationCurveOccurrence;
  StepVisual_AnnotationCurveOccurrenceAndAnnotationOccurrenceAndGeomReprItemAndReprItemAndStyledItem: typeof StepVisual_AnnotationCurveOccurrenceAndAnnotationOccurrenceAndGeomReprItemAndReprItemAndStyledItem;
  StepVisual_AnnotationFillArea: typeof StepVisual_AnnotationFillArea;
  StepVisual_AnnotationFillAreaOccurrence: typeof StepVisual_AnnotationFillAreaOccurrence;
  StepVisual_AnnotationOccurrence: typeof StepVisual_AnnotationOccurrence;
  StepVisual_AnnotationPlane: typeof StepVisual_AnnotationPlane;
  StepVisual_AnnotationPlaneElement: typeof StepVisual_AnnotationPlaneElement;
  StepVisual_AnnotationText: typeof StepVisual_AnnotationText;
  StepVisual_AnnotationTextOccurrence: typeof StepVisual_AnnotationTextOccurrence;
  StepVisual_AreaInSet: typeof StepVisual_AreaInSet;
  StepVisual_AreaOrView: typeof StepVisual_AreaOrView;
  StepVisual_BackgroundColour: typeof StepVisual_BackgroundColour;
  StepVisual_BoxCharacteristicSelect: typeof StepVisual_BoxCharacteristicSelect;
  StepVisual_CameraImage: typeof StepVisual_CameraImage;
  StepVisual_CameraImage2dWithScale: typeof StepVisual_CameraImage2dWithScale;
  StepVisual_CameraImage3dWithScale: typeof StepVisual_CameraImage3dWithScale;
  StepVisual_CameraModel: typeof StepVisual_CameraModel;
  StepVisual_CameraModelD2: typeof StepVisual_CameraModelD2;
  StepVisual_CameraModelD3: typeof StepVisual_CameraModelD3;
  StepVisual_CameraModelD3MultiClipping: typeof StepVisual_CameraModelD3MultiClipping;
  StepVisual_CameraModelD3MultiClippingInterectionSelect: typeof StepVisual_CameraModelD3MultiClippingInterectionSelect;
  StepVisual_CameraModelD3MultiClippingIntersection: typeof StepVisual_CameraModelD3MultiClippingIntersection;
  StepVisual_CameraModelD3MultiClippingUnion: typeof StepVisual_CameraModelD3MultiClippingUnion;
  StepVisual_CameraModelD3MultiClippingUnionSelect: typeof StepVisual_CameraModelD3MultiClippingUnionSelect;
  StepVisual_CameraUsage: typeof StepVisual_CameraUsage;
  StepVisual_CharacterizedObjectAndCharacterizedRepresentationAndDraughtingModelAndRepresentation: typeof StepVisual_CharacterizedObjectAndCharacterizedRepresentationAndDraughtingModelAndRepresentation;
  StepVisual_Colour: typeof StepVisual_Colour;
  StepVisual_ColourRgb: typeof StepVisual_ColourRgb;
  StepVisual_ColourSpecification: typeof StepVisual_ColourSpecification;
  StepVisual_CompositeText: typeof StepVisual_CompositeText;
  StepVisual_CompositeTextWithExtent: typeof StepVisual_CompositeTextWithExtent;
  StepVisual_ContextDependentInvisibility: typeof StepVisual_ContextDependentInvisibility;
  StepVisual_ContextDependentOverRidingStyledItem: typeof StepVisual_ContextDependentOverRidingStyledItem;
  StepVisual_CoordinatesList: typeof StepVisual_CoordinatesList;
  StepVisual_CurveStyle: typeof StepVisual_CurveStyle;
  StepVisual_CurveStyleFont: typeof StepVisual_CurveStyleFont;
  StepVisual_CurveStyleFontPattern: typeof StepVisual_CurveStyleFontPattern;
  StepVisual_CurveStyleFontSelect: typeof StepVisual_CurveStyleFontSelect;
  StepVisual_DirectionCountSelect: typeof StepVisual_DirectionCountSelect;
  StepVisual_DraughtingAnnotationOccurrence: typeof StepVisual_DraughtingAnnotationOccurrence;
  StepVisual_DraughtingCallout: typeof StepVisual_DraughtingCallout;
  StepVisual_DraughtingCalloutElement: typeof StepVisual_DraughtingCalloutElement;
  StepVisual_DraughtingModel: typeof StepVisual_DraughtingModel;
  StepVisual_DraughtingPreDefinedColour: typeof StepVisual_DraughtingPreDefinedColour;
  StepVisual_DraughtingPreDefinedCurveFont: typeof StepVisual_DraughtingPreDefinedCurveFont;
  StepVisual_ExternallyDefinedCurveFont: typeof StepVisual_ExternallyDefinedCurveFont;
  StepVisual_ExternallyDefinedTextFont: typeof StepVisual_ExternallyDefinedTextFont;
  StepVisual_FillAreaStyle: typeof StepVisual_FillAreaStyle;
  StepVisual_FillAreaStyleColour: typeof StepVisual_FillAreaStyleColour;
  StepVisual_FillStyleSelect: typeof StepVisual_FillStyleSelect;
  StepVisual_FontSelect: typeof StepVisual_FontSelect;
  StepVisual_Invisibility: typeof StepVisual_Invisibility;
  StepVisual_InvisibilityContext: typeof StepVisual_InvisibilityContext;
  StepVisual_InvisibleItem: typeof StepVisual_InvisibleItem;
  StepVisual_LayeredItem: typeof StepVisual_LayeredItem;
  StepVisual_MarkerMember: typeof StepVisual_MarkerMember;
  StepVisual_MarkerSelect: typeof StepVisual_MarkerSelect;
  StepVisual_MechanicalDesignGeometricPresentationArea: typeof StepVisual_MechanicalDesignGeometricPresentationArea;
  StepVisual_MechanicalDesignGeometricPresentationRepresentation: typeof StepVisual_MechanicalDesignGeometricPresentationRepresentation;
  StepVisual_NullStyleMember: typeof StepVisual_NullStyleMember;
  StepVisual_OverRidingStyledItem: typeof StepVisual_OverRidingStyledItem;
  StepVisual_PlanarBox: typeof StepVisual_PlanarBox;
  StepVisual_PlanarExtent: typeof StepVisual_PlanarExtent;
  StepVisual_PointStyle: typeof StepVisual_PointStyle;
  StepVisual_PreDefinedColour: typeof StepVisual_PreDefinedColour;
  StepVisual_PreDefinedCurveFont: typeof StepVisual_PreDefinedCurveFont;
  StepVisual_PreDefinedItem: typeof StepVisual_PreDefinedItem;
  StepVisual_PreDefinedTextFont: typeof StepVisual_PreDefinedTextFont;
  StepVisual_PresentationArea: typeof StepVisual_PresentationArea;
  StepVisual_PresentationLayerAssignment: typeof StepVisual_PresentationLayerAssignment;
  StepVisual_PresentationLayerUsage: typeof StepVisual_PresentationLayerUsage;
  StepVisual_PresentationRepresentation: typeof StepVisual_PresentationRepresentation;
  StepVisual_PresentationRepresentationSelect: typeof StepVisual_PresentationRepresentationSelect;
  StepVisual_PresentationSet: typeof StepVisual_PresentationSet;
  StepVisual_PresentationSize: typeof StepVisual_PresentationSize;
  StepVisual_PresentationSizeAssignmentSelect: typeof StepVisual_PresentationSizeAssignmentSelect;
  StepVisual_PresentationStyleAssignment: typeof StepVisual_PresentationStyleAssignment;
  StepVisual_PresentationStyleByContext: typeof StepVisual_PresentationStyleByContext;
  StepVisual_PresentationStyleSelect: typeof StepVisual_PresentationStyleSelect;
  StepVisual_PresentationView: typeof StepVisual_PresentationView;
  StepVisual_PresentedItem: typeof StepVisual_PresentedItem;
  StepVisual_PresentedItemRepresentation: typeof StepVisual_PresentedItemRepresentation;
  StepVisual_StyleContextSelect: typeof StepVisual_StyleContextSelect;
  StepVisual_StyledItem: typeof StepVisual_StyledItem;
  StepVisual_StyledItemTarget: typeof StepVisual_StyledItemTarget;
  StepVisual_SurfaceSideStyle: typeof StepVisual_SurfaceSideStyle;
  StepVisual_SurfaceStyleBoundary: typeof StepVisual_SurfaceStyleBoundary;
  StepVisual_SurfaceStyleControlGrid: typeof StepVisual_SurfaceStyleControlGrid;
  StepVisual_SurfaceStyleElementSelect: typeof StepVisual_SurfaceStyleElementSelect;
  StepVisual_SurfaceStyleFillArea: typeof StepVisual_SurfaceStyleFillArea;
  StepVisual_SurfaceStyleParameterLine: typeof StepVisual_SurfaceStyleParameterLine;
  StepVisual_SurfaceStyleSegmentationCurve: typeof StepVisual_SurfaceStyleSegmentationCurve;
  StepVisual_SurfaceStyleSilhouette: typeof StepVisual_SurfaceStyleSilhouette;
  StepVisual_SurfaceStyleUsage: typeof StepVisual_SurfaceStyleUsage;
  StepVisual_Template: typeof StepVisual_Template;
  StepVisual_TemplateInstance: typeof StepVisual_TemplateInstance;
  StepVisual_TessellatedAnnotationOccurrence: typeof StepVisual_TessellatedAnnotationOccurrence;
  StepVisual_TessellatedCurveSet: typeof StepVisual_TessellatedCurveSet;
  StepVisual_TessellatedGeometricSet: typeof StepVisual_TessellatedGeometricSet;
  StepVisual_TessellatedItem: typeof StepVisual_TessellatedItem;
  StepVisual_TextLiteral: typeof StepVisual_TextLiteral;
  StepVisual_TextOrCharacter: typeof StepVisual_TextOrCharacter;
  StepVisual_TextStyle: typeof StepVisual_TextStyle;
  StepVisual_TextStyleForDefinedFont: typeof StepVisual_TextStyleForDefinedFont;
  StepVisual_TextStyleWithBoxCharacteristics: typeof StepVisual_TextStyleWithBoxCharacteristics;
  StepVisual_ViewVolume: typeof StepVisual_ViewVolume;
  StlAPI: typeof StlAPI;
  StlAPI_Reader: typeof StlAPI_Reader;
  StlAPI_Writer: typeof StlAPI_Writer;
  Storage: typeof Storage;
  Storage_Bucket: typeof Storage_Bucket;
  Storage_BucketIterator: typeof Storage_BucketIterator;
  Storage_BucketOfPersistent: typeof Storage_BucketOfPersistent;
  Storage_CallBack: typeof Storage_CallBack;
  Storage_Data: typeof Storage_Data;
  Storage_DefaultCallBack: typeof Storage_DefaultCallBack;
  Storage_HeaderData: typeof Storage_HeaderData;
  Storage_InternalData: typeof Storage_InternalData;
  Storage_Root: typeof Storage_Root;
  Storage_RootData: typeof Storage_RootData;
  Storage_Schema: typeof Storage_Schema;
  Storage_StreamExtCharParityError: typeof Storage_StreamExtCharParityError;
  Storage_StreamFormatError: typeof Storage_StreamFormatError;
  Storage_StreamModeError: typeof Storage_StreamModeError;
  Storage_StreamReadError: typeof Storage_StreamReadError;
  Storage_StreamTypeMismatchError: typeof Storage_StreamTypeMismatchError;
  Storage_StreamUnknownTypeError: typeof Storage_StreamUnknownTypeError;
  Storage_StreamWriteError: typeof Storage_StreamWriteError;
  Storage_TypeData: typeof Storage_TypeData;
  Storage_TypedCallBack: typeof Storage_TypedCallBack;
  Sweep_NumShape: typeof Sweep_NumShape;
  Sweep_NumShapeIterator: typeof Sweep_NumShapeIterator;
  Sweep_NumShapeTool: typeof Sweep_NumShapeTool;
  TColStd_HPackedMapOfInteger: typeof TColStd_HPackedMapOfInteger;
  TColStd_PackedMapOfInteger: typeof TColStd_PackedMapOfInteger;
  TCollection: typeof TCollection;
  TCollection_AsciiString: typeof TCollection_AsciiString;
  TCollection_BaseSequence: typeof TCollection_BaseSequence;
  TCollection_BasicMap: typeof TCollection_BasicMap;
  TCollection_BasicMapIterator: typeof TCollection_BasicMapIterator;
  TCollection_ExtendedString: typeof TCollection_ExtendedString;
  TCollection_HAsciiString: typeof TCollection_HAsciiString;
  TCollection_HExtendedString: typeof TCollection_HExtendedString;
  TCollection_MapNode: typeof TCollection_MapNode;
  TCollection_SeqNode: typeof TCollection_SeqNode;
  TDF: typeof TDF;
  TDF_Attribute: typeof TDF_Attribute;
  TDF_AttributeDelta: typeof TDF_AttributeDelta;
  TDF_AttributeIterator: typeof TDF_AttributeIterator;
  TDF_ChildIDIterator: typeof TDF_ChildIDIterator;
  TDF_ChildIterator: typeof TDF_ChildIterator;
  TDF_ClosureMode: typeof TDF_ClosureMode;
  TDF_ClosureTool: typeof TDF_ClosureTool;
  TDF_ComparisonTool: typeof TDF_ComparisonTool;
  TDF_CopyLabel: typeof TDF_CopyLabel;
  TDF_CopyTool: typeof TDF_CopyTool;
  TDF_Data: typeof TDF_Data;
  TDF_DataSet: typeof TDF_DataSet;
  TDF_DefaultDeltaOnModification: typeof TDF_DefaultDeltaOnModification;
  TDF_DefaultDeltaOnRemoval: typeof TDF_DefaultDeltaOnRemoval;
  TDF_Delta: typeof TDF_Delta;
  TDF_DeltaOnAddition: typeof TDF_DeltaOnAddition;
  TDF_DeltaOnForget: typeof TDF_DeltaOnForget;
  TDF_DeltaOnModification: typeof TDF_DeltaOnModification;
  TDF_DeltaOnRemoval: typeof TDF_DeltaOnRemoval;
  TDF_DeltaOnResume: typeof TDF_DeltaOnResume;
  TDF_IDFilter: typeof TDF_IDFilter;
  TDF_Label: typeof TDF_Label;
  TDF_LabelMapHasher: typeof TDF_LabelMapHasher;
  TDF_Reference: typeof TDF_Reference;
  TDF_RelocationTable: typeof TDF_RelocationTable;
  TDF_TagSource: typeof TDF_TagSource;
  TDF_Tool: typeof TDF_Tool;
  TDF_Transaction: typeof TDF_Transaction;
  TDataStd: typeof TDataStd;
  TDataStd_AsciiString: typeof TDataStd_AsciiString;
  TDataStd_BooleanArray: typeof TDataStd_BooleanArray;
  TDataStd_BooleanList: typeof TDataStd_BooleanList;
  TDataStd_ByteArray: typeof TDataStd_ByteArray;
  TDataStd_ChildNodeIterator: typeof TDataStd_ChildNodeIterator;
  TDataStd_Comment: typeof TDataStd_Comment;
  TDataStd_Current: typeof TDataStd_Current;
  TDataStd_DeltaOnModificationOfByteArray: typeof TDataStd_DeltaOnModificationOfByteArray;
  TDataStd_DeltaOnModificationOfExtStringArray: typeof TDataStd_DeltaOnModificationOfExtStringArray;
  TDataStd_DeltaOnModificationOfIntArray: typeof TDataStd_DeltaOnModificationOfIntArray;
  TDataStd_DeltaOnModificationOfIntPackedMap: typeof TDataStd_DeltaOnModificationOfIntPackedMap;
  TDataStd_DeltaOnModificationOfRealArray: typeof TDataStd_DeltaOnModificationOfRealArray;
  TDataStd_Directory: typeof TDataStd_Directory;
  TDataStd_Expression: typeof TDataStd_Expression;
  TDataStd_ExtStringArray: typeof TDataStd_ExtStringArray;
  TDataStd_ExtStringList: typeof TDataStd_ExtStringList;
  TDataStd_HDataMapOfStringByte: typeof TDataStd_HDataMapOfStringByte;
  TDataStd_HDataMapOfStringHArray1OfInteger: typeof TDataStd_HDataMapOfStringHArray1OfInteger;
  TDataStd_HDataMapOfStringHArray1OfReal: typeof TDataStd_HDataMapOfStringHArray1OfReal;
  TDataStd_HDataMapOfStringInteger: typeof TDataStd_HDataMapOfStringInteger;
  TDataStd_HDataMapOfStringReal: typeof TDataStd_HDataMapOfStringReal;
  TDataStd_HDataMapOfStringString: typeof TDataStd_HDataMapOfStringString;
  TDataStd_IntPackedMap: typeof TDataStd_IntPackedMap;
  TDataStd_Integer: typeof TDataStd_Integer;
  TDataStd_IntegerArray: typeof TDataStd_IntegerArray;
  TDataStd_IntegerList: typeof TDataStd_IntegerList;
  TDataStd_Name: typeof TDataStd_Name;
  TDataStd_NamedData: typeof TDataStd_NamedData;
  TDataStd_NoteBook: typeof TDataStd_NoteBook;
  TDataStd_Real: typeof TDataStd_Real;
  TDataStd_RealArray: typeof TDataStd_RealArray;
  TDataStd_RealList: typeof TDataStd_RealList;
  TDataStd_ReferenceArray: typeof TDataStd_ReferenceArray;
  TDataStd_ReferenceList: typeof TDataStd_ReferenceList;
  TDataStd_Relation: typeof TDataStd_Relation;
  TDataStd_Tick: typeof TDataStd_Tick;
  TDataStd_TreeNode: typeof TDataStd_TreeNode;
  TDataStd_UAttribute: typeof TDataStd_UAttribute;
  TDataStd_Variable: typeof TDataStd_Variable;
  TDataXtd: typeof TDataXtd;
  TDataXtd_Axis: typeof TDataXtd_Axis;
  TDataXtd_Constraint: typeof TDataXtd_Constraint;
  TDataXtd_Geometry: typeof TDataXtd_Geometry;
  TDataXtd_Pattern: typeof TDataXtd_Pattern;
  TDataXtd_PatternStd: typeof TDataXtd_PatternStd;
  TDataXtd_Placement: typeof TDataXtd_Placement;
  TDataXtd_Plane: typeof TDataXtd_Plane;
  TDataXtd_Point: typeof TDataXtd_Point;
  TDataXtd_Position: typeof TDataXtd_Position;
  TDataXtd_Presentation: typeof TDataXtd_Presentation;
  TDataXtd_Shape: typeof TDataXtd_Shape;
  TDataXtd_Triangulation: typeof TDataXtd_Triangulation;
  TDocStd: typeof TDocStd;
  TDocStd_Application: typeof TDocStd_Application;
  TDocStd_ApplicationDelta: typeof TDocStd_ApplicationDelta;
  TDocStd_CompoundDelta: typeof TDocStd_CompoundDelta;
  TDocStd_Context: typeof TDocStd_Context;
  TDocStd_Document: typeof TDocStd_Document;
  TDocStd_Modified: typeof TDocStd_Modified;
  TDocStd_MultiTransactionManager: typeof TDocStd_MultiTransactionManager;
  TDocStd_Owner: typeof TDocStd_Owner;
  TDocStd_PathParser: typeof TDocStd_PathParser;
  TDocStd_XLink: typeof TDocStd_XLink;
  TDocStd_XLinkIterator: typeof TDocStd_XLinkIterator;
  TDocStd_XLinkRoot: typeof TDocStd_XLinkRoot;
  TDocStd_XLinkTool: typeof TDocStd_XLinkTool;
  TFunction_Driver: typeof TFunction_Driver;
  TFunction_DriverTable: typeof TFunction_DriverTable;
  TFunction_Function: typeof TFunction_Function;
  TFunction_GraphNode: typeof TFunction_GraphNode;
  TFunction_IFunction: typeof TFunction_IFunction;
  TFunction_Iterator: typeof TFunction_Iterator;
  TFunction_Logbook: typeof TFunction_Logbook;
  TFunction_Scope: typeof TFunction_Scope;
  TNaming: typeof TNaming;
  TNaming_Builder: typeof TNaming_Builder;
  TNaming_CopyShape: typeof TNaming_CopyShape;
  TNaming_DeltaOnModification: typeof TNaming_DeltaOnModification;
  TNaming_DeltaOnRemoval: typeof TNaming_DeltaOnRemoval;
  TNaming_Identifier: typeof TNaming_Identifier;
  TNaming_Iterator: typeof TNaming_Iterator;
  TNaming_IteratorOnShapesSet: typeof TNaming_IteratorOnShapesSet;
  TNaming_Localizer: typeof TNaming_Localizer;
  TNaming_Name: typeof TNaming_Name;
  TNaming_NamedShape: typeof TNaming_NamedShape;
  TNaming_Naming: typeof TNaming_Naming;
  TNaming_NamingTool: typeof TNaming_NamingTool;
  TNaming_NewShapeIterator: typeof TNaming_NewShapeIterator;
  TNaming_OldShapeIterator: typeof TNaming_OldShapeIterator;
  TNaming_RefShape: typeof TNaming_RefShape;
  TNaming_SameShapeIterator: typeof TNaming_SameShapeIterator;
  TNaming_Scope: typeof TNaming_Scope;
  TNaming_Selector: typeof TNaming_Selector;
  TNaming_ShapesSet: typeof TNaming_ShapesSet;
  TNaming_Tool: typeof TNaming_Tool;
  TNaming_TranslateTool: typeof TNaming_TranslateTool;
  TNaming_Translator: typeof TNaming_Translator;
  TNaming_UsedShapes: typeof TNaming_UsedShapes;
  TObj_Application: typeof TObj_Application;
  TObj_Assistant: typeof TObj_Assistant;
  TObj_CheckModel: typeof TObj_CheckModel;
  TObj_HiddenPartition: typeof TObj_HiddenPartition;
  TObj_LabelIterator: typeof TObj_LabelIterator;
  TObj_Model: typeof TObj_Model;
  TObj_ModelIterator: typeof TObj_ModelIterator;
  TObj_Object: typeof TObj_Object;
  TObj_ObjectIterator: typeof TObj_ObjectIterator;
  TObj_OcafObjectIterator: typeof TObj_OcafObjectIterator;
  TObj_Partition: typeof TObj_Partition;
  TObj_Persistence: typeof TObj_Persistence;
  TObj_ReferenceIterator: typeof TObj_ReferenceIterator;
  TObj_SequenceIterator: typeof TObj_SequenceIterator;
  TObj_TIntSparseArray: typeof TObj_TIntSparseArray;
  TObj_TModel: typeof TObj_TModel;
  TObj_TNameContainer: typeof TObj_TNameContainer;
  TObj_TObject: typeof TObj_TObject;
  TObj_TReference: typeof TObj_TReference;
  TObj_TXYZ: typeof TObj_TXYZ;
  TopAbs: typeof TopAbs;
  TopBas_TestInterference: typeof TopBas_TestInterference;
  TopCnx_EdgeFaceTransition: typeof TopCnx_EdgeFaceTransition;
  TopExp: typeof TopExp;
  TopExp_Explorer: typeof TopExp_Explorer;
  TopLoc_Datum3D: typeof TopLoc_Datum3D;
  TopLoc_ItemLocation: typeof TopLoc_ItemLocation;
  TopLoc_Location: typeof TopLoc_Location;
  TopLoc_SListNodeOfItemLocation: typeof TopLoc_SListNodeOfItemLocation;
  TopLoc_SListOfItemLocation: typeof TopLoc_SListOfItemLocation;
  TopOpeBRep: typeof TopOpeBRep;
  TopOpeBRepBuild_Area1dBuilder: typeof TopOpeBRepBuild_Area1dBuilder;
  TopOpeBRepBuild_Area2dBuilder: typeof TopOpeBRepBuild_Area2dBuilder;
  TopOpeBRepBuild_Area3dBuilder: typeof TopOpeBRepBuild_Area3dBuilder;
  TopOpeBRepBuild_AreaBuilder: typeof TopOpeBRepBuild_AreaBuilder;
  TopOpeBRepBuild_BlockBuilder: typeof TopOpeBRepBuild_BlockBuilder;
  TopOpeBRepBuild_BlockIterator: typeof TopOpeBRepBuild_BlockIterator;
  TopOpeBRepBuild_BuilderON: typeof TopOpeBRepBuild_BuilderON;
  TopOpeBRepBuild_CompositeClassifier: typeof TopOpeBRepBuild_CompositeClassifier;
  TopOpeBRepBuild_CorrectFace2d: typeof TopOpeBRepBuild_CorrectFace2d;
  TopOpeBRepBuild_EdgeBuilder: typeof TopOpeBRepBuild_EdgeBuilder;
  TopOpeBRepBuild_FaceAreaBuilder: typeof TopOpeBRepBuild_FaceAreaBuilder;
  TopOpeBRepBuild_FaceBuilder: typeof TopOpeBRepBuild_FaceBuilder;
  TopOpeBRepBuild_FuseFace: typeof TopOpeBRepBuild_FuseFace;
  TopOpeBRepBuild_GIter: typeof TopOpeBRepBuild_GIter;
  TopOpeBRepBuild_GTool: typeof TopOpeBRepBuild_GTool;
  TopOpeBRepBuild_GTopo: typeof TopOpeBRepBuild_GTopo;
  TopOpeBRepBuild_HBuilder: typeof TopOpeBRepBuild_HBuilder;
  TopOpeBRepBuild_Loop: typeof TopOpeBRepBuild_Loop;
  TopOpeBRepBuild_LoopClassifier: typeof TopOpeBRepBuild_LoopClassifier;
  TopOpeBRepBuild_LoopSet: typeof TopOpeBRepBuild_LoopSet;
  TopOpeBRepBuild_Pave: typeof TopOpeBRepBuild_Pave;
  TopOpeBRepBuild_PaveClassifier: typeof TopOpeBRepBuild_PaveClassifier;
  TopOpeBRepBuild_PaveSet: typeof TopOpeBRepBuild_PaveSet;
  TopOpeBRepBuild_ShapeListOfShape: typeof TopOpeBRepBuild_ShapeListOfShape;
  TopOpeBRepBuild_ShapeSet: typeof TopOpeBRepBuild_ShapeSet;
  TopOpeBRepBuild_ShellFaceClassifier: typeof TopOpeBRepBuild_ShellFaceClassifier;
  TopOpeBRepBuild_ShellFaceSet: typeof TopOpeBRepBuild_ShellFaceSet;
  TopOpeBRepBuild_ShellToSolid: typeof TopOpeBRepBuild_ShellToSolid;
  TopOpeBRepBuild_SolidAreaBuilder: typeof TopOpeBRepBuild_SolidAreaBuilder;
  TopOpeBRepBuild_SolidBuilder: typeof TopOpeBRepBuild_SolidBuilder;
  TopOpeBRepBuild_Tools: typeof TopOpeBRepBuild_Tools;
  TopOpeBRepBuild_Tools2d: typeof TopOpeBRepBuild_Tools2d;
  TopOpeBRepBuild_VertexInfo: typeof TopOpeBRepBuild_VertexInfo;
  TopOpeBRepBuild_WireEdgeClassifier: typeof TopOpeBRepBuild_WireEdgeClassifier;
  TopOpeBRepBuild_WireEdgeSet: typeof TopOpeBRepBuild_WireEdgeSet;
  TopOpeBRepBuild_WireToFace: typeof TopOpeBRepBuild_WireToFace;
  TopOpeBRepDS: typeof TopOpeBRepDS;
  TopOpeBRepDS_Association: typeof TopOpeBRepDS_Association;
  TopOpeBRepDS_BuildTool: typeof TopOpeBRepDS_BuildTool;
  TopOpeBRepDS_Check: typeof TopOpeBRepDS_Check;
  TopOpeBRepDS_Curve: typeof TopOpeBRepDS_Curve;
  TopOpeBRepDS_CurveData: typeof TopOpeBRepDS_CurveData;
  TopOpeBRepDS_CurveExplorer: typeof TopOpeBRepDS_CurveExplorer;
  TopOpeBRepDS_CurveIterator: typeof TopOpeBRepDS_CurveIterator;
  TopOpeBRepDS_CurvePointInterference: typeof TopOpeBRepDS_CurvePointInterference;
  TopOpeBRepDS_DataStructure: typeof TopOpeBRepDS_DataStructure;
  TopOpeBRepDS_Dumper: typeof TopOpeBRepDS_Dumper;
  TopOpeBRepDS_EIR: typeof TopOpeBRepDS_EIR;
  TopOpeBRepDS_Edge3dInterferenceTool: typeof TopOpeBRepDS_Edge3dInterferenceTool;
  TopOpeBRepDS_EdgeInterferenceTool: typeof TopOpeBRepDS_EdgeInterferenceTool;
  TopOpeBRepDS_EdgeVertexInterference: typeof TopOpeBRepDS_EdgeVertexInterference;
  TopOpeBRepDS_Explorer: typeof TopOpeBRepDS_Explorer;
  TopOpeBRepDS_FIR: typeof TopOpeBRepDS_FIR;
  TopOpeBRepDS_FaceEdgeInterference: typeof TopOpeBRepDS_FaceEdgeInterference;
  TopOpeBRepDS_FaceInterferenceTool: typeof TopOpeBRepDS_FaceInterferenceTool;
  TopOpeBRepDS_Filter: typeof TopOpeBRepDS_Filter;
  TopOpeBRepDS_GapFiller: typeof TopOpeBRepDS_GapFiller;
  TopOpeBRepDS_GapTool: typeof TopOpeBRepDS_GapTool;
  TopOpeBRepDS_GeometryData: typeof TopOpeBRepDS_GeometryData;
  TopOpeBRepDS_HDataStructure: typeof TopOpeBRepDS_HDataStructure;
  TopOpeBRepDS_Interference: typeof TopOpeBRepDS_Interference;
  TopOpeBRepDS_InterferenceIterator: typeof TopOpeBRepDS_InterferenceIterator;
  TopOpeBRepDS_InterferenceTool: typeof TopOpeBRepDS_InterferenceTool;
  TopOpeBRepDS_ListOfShapeOn1State: typeof TopOpeBRepDS_ListOfShapeOn1State;
  TopOpeBRepDS_Marker: typeof TopOpeBRepDS_Marker;
  TopOpeBRepDS_Point: typeof TopOpeBRepDS_Point;
  TopOpeBRepDS_PointData: typeof TopOpeBRepDS_PointData;
  TopOpeBRepDS_PointExplorer: typeof TopOpeBRepDS_PointExplorer;
  TopOpeBRepDS_PointIterator: typeof TopOpeBRepDS_PointIterator;
  TopOpeBRepDS_Reducer: typeof TopOpeBRepDS_Reducer;
  TopOpeBRepDS_ShapeData: typeof TopOpeBRepDS_ShapeData;
  TopOpeBRepDS_ShapeShapeInterference: typeof TopOpeBRepDS_ShapeShapeInterference;
  TopOpeBRepDS_ShapeWithState: typeof TopOpeBRepDS_ShapeWithState;
  TopOpeBRepDS_SolidSurfaceInterference: typeof TopOpeBRepDS_SolidSurfaceInterference;
  TopOpeBRepDS_Surface: typeof TopOpeBRepDS_Surface;
  TopOpeBRepDS_SurfaceCurveInterference: typeof TopOpeBRepDS_SurfaceCurveInterference;
  TopOpeBRepDS_SurfaceData: typeof TopOpeBRepDS_SurfaceData;
  TopOpeBRepDS_SurfaceExplorer: typeof TopOpeBRepDS_SurfaceExplorer;
  TopOpeBRepDS_SurfaceIterator: typeof TopOpeBRepDS_SurfaceIterator;
  TopOpeBRepDS_TKI: typeof TopOpeBRepDS_TKI;
  TopOpeBRepDS_TOOL: typeof TopOpeBRepDS_TOOL;
  TopOpeBRepDS_Transition: typeof TopOpeBRepDS_Transition;
  TopOpeBRepTool: typeof TopOpeBRepTool;
  TopOpeBRepTool_AncestorsTool: typeof TopOpeBRepTool_AncestorsTool;
  TopOpeBRepTool_BoxSort: typeof TopOpeBRepTool_BoxSort;
  TopOpeBRepTool_C2DF: typeof TopOpeBRepTool_C2DF;
  TopOpeBRepTool_CLASSI: typeof TopOpeBRepTool_CLASSI;
  TopOpeBRepTool_CORRISO: typeof TopOpeBRepTool_CORRISO;
  TopOpeBRepTool_CurveTool: typeof TopOpeBRepTool_CurveTool;
  TopOpeBRepTool_FuseEdges: typeof TopOpeBRepTool_FuseEdges;
  TopOpeBRepTool_GeomTool: typeof TopOpeBRepTool_GeomTool;
  TopOpeBRepTool_HBoxTool: typeof TopOpeBRepTool_HBoxTool;
  TopOpeBRepTool_PurgeInternalEdges: typeof TopOpeBRepTool_PurgeInternalEdges;
  TopOpeBRepTool_REGUS: typeof TopOpeBRepTool_REGUS;
  TopOpeBRepTool_REGUW: typeof TopOpeBRepTool_REGUW;
  TopOpeBRepTool_ShapeClassifier: typeof TopOpeBRepTool_ShapeClassifier;
  TopOpeBRepTool_ShapeExplorer: typeof TopOpeBRepTool_ShapeExplorer;
  TopOpeBRepTool_ShapeTool: typeof TopOpeBRepTool_ShapeTool;
  TopOpeBRepTool_SolidClassifier: typeof TopOpeBRepTool_SolidClassifier;
  TopOpeBRepTool_TOOL: typeof TopOpeBRepTool_TOOL;
  TopOpeBRepTool_connexity: typeof TopOpeBRepTool_connexity;
  TopOpeBRepTool_face: typeof TopOpeBRepTool_face;
  TopOpeBRepTool_makeTransition: typeof TopOpeBRepTool_makeTransition;
  TopOpeBRepTool_mkTondgE: typeof TopOpeBRepTool_mkTondgE;
  TopOpeBRep_Bipoint: typeof TopOpeBRep_Bipoint;
  TopOpeBRep_DSFiller: typeof TopOpeBRep_DSFiller;
  TopOpeBRep_EdgesFiller: typeof TopOpeBRep_EdgesFiller;
  TopOpeBRep_EdgesIntersector: typeof TopOpeBRep_EdgesIntersector;
  TopOpeBRep_FFDumper: typeof TopOpeBRep_FFDumper;
  TopOpeBRep_FFTransitionTool: typeof TopOpeBRep_FFTransitionTool;
  TopOpeBRep_FaceEdgeFiller: typeof TopOpeBRep_FaceEdgeFiller;
  TopOpeBRep_FaceEdgeIntersector: typeof TopOpeBRep_FaceEdgeIntersector;
  TopOpeBRep_FacesFiller: typeof TopOpeBRep_FacesFiller;
  TopOpeBRep_FacesIntersector: typeof TopOpeBRep_FacesIntersector;
  TopOpeBRep_GeomTool: typeof TopOpeBRep_GeomTool;
  TopOpeBRep_Hctxee2d: typeof TopOpeBRep_Hctxee2d;
  TopOpeBRep_Hctxff2d: typeof TopOpeBRep_Hctxff2d;
  TopOpeBRep_LineInter: typeof TopOpeBRep_LineInter;
  TopOpeBRep_Point2d: typeof TopOpeBRep_Point2d;
  TopOpeBRep_PointClassifier: typeof TopOpeBRep_PointClassifier;
  TopOpeBRep_PointGeomTool: typeof TopOpeBRep_PointGeomTool;
  TopOpeBRep_ShapeIntersector: typeof TopOpeBRep_ShapeIntersector;
  TopOpeBRep_ShapeIntersector2d: typeof TopOpeBRep_ShapeIntersector2d;
  TopOpeBRep_ShapeScanner: typeof TopOpeBRep_ShapeScanner;
  TopOpeBRep_VPointInter: typeof TopOpeBRep_VPointInter;
  TopOpeBRep_VPointInterClassifier: typeof TopOpeBRep_VPointInterClassifier;
  TopOpeBRep_VPointInterIterator: typeof TopOpeBRep_VPointInterIterator;
  TopOpeBRep_WPointInter: typeof TopOpeBRep_WPointInter;
  TopOpeBRep_WPointInterIterator: typeof TopOpeBRep_WPointInterIterator;
  TopTools: typeof TopTools;
  TopTools_LocationSet: typeof TopTools_LocationSet;
  TopTools_MutexForShapeProvider: typeof TopTools_MutexForShapeProvider;
  TopTools_OrientedShapeMapHasher: typeof TopTools_OrientedShapeMapHasher;
  TopTools_ShapeMapHasher: typeof TopTools_ShapeMapHasher;
  TopTools_ShapeSet: typeof TopTools_ShapeSet;
  TopTrans_CurveTransition: typeof TopTrans_CurveTransition;
  TopTrans_SurfaceTransition: typeof TopTrans_SurfaceTransition;
  TopoDS: typeof TopoDS;
  TopoDSToStep: typeof TopoDSToStep;
  TopoDSToStep_Builder: typeof TopoDSToStep_Builder;
  TopoDSToStep_FacetedTool: typeof TopoDSToStep_FacetedTool;
  TopoDSToStep_MakeBrepWithVoids: typeof TopoDSToStep_MakeBrepWithVoids;
  TopoDSToStep_MakeFacetedBrep: typeof TopoDSToStep_MakeFacetedBrep;
  TopoDSToStep_MakeFacetedBrepAndBrepWithVoids: typeof TopoDSToStep_MakeFacetedBrepAndBrepWithVoids;
  TopoDSToStep_MakeGeometricCurveSet: typeof TopoDSToStep_MakeGeometricCurveSet;
  TopoDSToStep_MakeManifoldSolidBrep: typeof TopoDSToStep_MakeManifoldSolidBrep;
  TopoDSToStep_MakeShellBasedSurfaceModel: typeof TopoDSToStep_MakeShellBasedSurfaceModel;
  TopoDSToStep_MakeStepEdge: typeof TopoDSToStep_MakeStepEdge;
  TopoDSToStep_MakeStepFace: typeof TopoDSToStep_MakeStepFace;
  TopoDSToStep_MakeStepVertex: typeof TopoDSToStep_MakeStepVertex;
  TopoDSToStep_MakeStepWire: typeof TopoDSToStep_MakeStepWire;
  TopoDSToStep_Root: typeof TopoDSToStep_Root;
  TopoDSToStep_Tool: typeof TopoDSToStep_Tool;
  TopoDSToStep_WireframeBuilder: typeof TopoDSToStep_WireframeBuilder;
  TopoDS_AlertWithShape: typeof TopoDS_AlertWithShape;
  TopoDS_Builder: typeof TopoDS_Builder;
  TopoDS_CompSolid: typeof TopoDS_CompSolid;
  TopoDS_Compound: typeof TopoDS_Compound;
  TopoDS_Edge: typeof TopoDS_Edge;
  TopoDS_Face: typeof TopoDS_Face;
  TopoDS_FrozenShape: typeof TopoDS_FrozenShape;
  TopoDS_HShape: typeof TopoDS_HShape;
  TopoDS_Iterator: typeof TopoDS_Iterator;
  TopoDS_LockedShape: typeof TopoDS_LockedShape;
  TopoDS_Shape: typeof TopoDS_Shape;
  TopoDS_Shell: typeof TopoDS_Shell;
  TopoDS_Solid: typeof TopoDS_Solid;
  TopoDS_TCompSolid: typeof TopoDS_TCompSolid;
  TopoDS_TCompound: typeof TopoDS_TCompound;
  TopoDS_TEdge: typeof TopoDS_TEdge;
  TopoDS_TFace: typeof TopoDS_TFace;
  TopoDS_TShape: typeof TopoDS_TShape;
  TopoDS_TShell: typeof TopoDS_TShell;
  TopoDS_TSolid: typeof TopoDS_TSolid;
  TopoDS_TVertex: typeof TopoDS_TVertex;
  TopoDS_TWire: typeof TopoDS_TWire;
  TopoDS_UnCompatibleShapes: typeof TopoDS_UnCompatibleShapes;
  TopoDS_Vertex: typeof TopoDS_Vertex;
  TopoDS_Wire: typeof TopoDS_Wire;
  TransferBRep_BinderOfShape: typeof TransferBRep_BinderOfShape;
  TransferBRep_OrientedShapeMapper: typeof TransferBRep_OrientedShapeMapper;
  TransferBRep_Reader: typeof TransferBRep_Reader;
  TransferBRep_ShapeBinder: typeof TransferBRep_ShapeBinder;
  TransferBRep_ShapeInfo: typeof TransferBRep_ShapeInfo;
  TransferBRep_ShapeListBinder: typeof TransferBRep_ShapeListBinder;
  TransferBRep_ShapeMapper: typeof TransferBRep_ShapeMapper;
  TransferBRep_TransferResultInfo: typeof TransferBRep_TransferResultInfo;
  Transfer_ActorDispatch: typeof Transfer_ActorDispatch;
  Transfer_ActorOfFinderProcess: typeof Transfer_ActorOfFinderProcess;
  Transfer_ActorOfProcessForFinder: typeof Transfer_ActorOfProcessForFinder;
  Transfer_ActorOfProcessForTransient: typeof Transfer_ActorOfProcessForTransient;
  Transfer_ActorOfTransientProcess: typeof Transfer_ActorOfTransientProcess;
  Transfer_Binder: typeof Transfer_Binder;
  Transfer_BinderOfTransientInteger: typeof Transfer_BinderOfTransientInteger;
  Transfer_DataInfo: typeof Transfer_DataInfo;
  Transfer_DispatchControl: typeof Transfer_DispatchControl;
  Transfer_FindHasher: typeof Transfer_FindHasher;
  Transfer_Finder: typeof Transfer_Finder;
  Transfer_FinderProcess: typeof Transfer_FinderProcess;
  Transfer_IteratorOfProcessForFinder: typeof Transfer_IteratorOfProcessForFinder;
  Transfer_IteratorOfProcessForTransient: typeof Transfer_IteratorOfProcessForTransient;
  Transfer_MapContainer: typeof Transfer_MapContainer;
  Transfer_MultipleBinder: typeof Transfer_MultipleBinder;
  Transfer_ProcessForFinder: typeof Transfer_ProcessForFinder;
  Transfer_ProcessForTransient: typeof Transfer_ProcessForTransient;
  Transfer_ResultFromModel: typeof Transfer_ResultFromModel;
  Transfer_ResultFromTransient: typeof Transfer_ResultFromTransient;
  Transfer_SimpleBinderOfTransient: typeof Transfer_SimpleBinderOfTransient;
  Transfer_TransferDeadLoop: typeof Transfer_TransferDeadLoop;
  Transfer_TransferDispatch: typeof Transfer_TransferDispatch;
  Transfer_TransferFailure: typeof Transfer_TransferFailure;
  Transfer_TransferInput: typeof Transfer_TransferInput;
  Transfer_TransferIterator: typeof Transfer_TransferIterator;
  Transfer_TransferOutput: typeof Transfer_TransferOutput;
  Transfer_TransientListBinder: typeof Transfer_TransientListBinder;
  Transfer_TransientMapper: typeof Transfer_TransientMapper;
  Transfer_TransientProcess: typeof Transfer_TransientProcess;
  Transfer_VoidBinder: typeof Transfer_VoidBinder;
  Units: typeof Units;
  UnitsAPI: typeof UnitsAPI;
  UnitsMethods: typeof UnitsMethods;
  Units_Dimensions: typeof Units_Dimensions;
  Units_Explorer: typeof Units_Explorer;
  Units_Lexicon: typeof Units_Lexicon;
  Units_MathSentence: typeof Units_MathSentence;
  Units_Measurement: typeof Units_Measurement;
  Units_NoSuchType: typeof Units_NoSuchType;
  Units_NoSuchUnit: typeof Units_NoSuchUnit;
  Units_Quantity: typeof Units_Quantity;
  Units_Sentence: typeof Units_Sentence;
  Units_ShiftedToken: typeof Units_ShiftedToken;
  Units_ShiftedUnit: typeof Units_ShiftedUnit;
  Units_Token: typeof Units_Token;
  Units_Unit: typeof Units_Unit;
  Units_UnitSentence: typeof Units_UnitSentence;
  Units_UnitsDictionary: typeof Units_UnitsDictionary;
  Units_UnitsLexicon: typeof Units_UnitsLexicon;
  Units_UnitsSystem: typeof Units_UnitsSystem;
  V3d: typeof V3d;
  V3d_AmbientLight: typeof V3d_AmbientLight;
  V3d_BadValue: typeof V3d_BadValue;
  V3d_CircularGrid: typeof V3d_CircularGrid;
  V3d_DirectionalLight: typeof V3d_DirectionalLight;
  V3d_Plane: typeof V3d_Plane;
  V3d_PositionLight: typeof V3d_PositionLight;
  V3d_PositionalLight: typeof V3d_PositionalLight;
  V3d_RectangularGrid: typeof V3d_RectangularGrid;
  V3d_SpotLight: typeof V3d_SpotLight;
  V3d_Trihedron: typeof V3d_Trihedron;
  V3d_UnMapped: typeof V3d_UnMapped;
  V3d_View: typeof V3d_View;
  V3d_Viewer: typeof V3d_Viewer;
  Vrml: typeof Vrml;
  VrmlAPI: typeof VrmlAPI;
  VrmlAPI_Writer: typeof VrmlAPI_Writer;
  VrmlConverter_Curve: typeof VrmlConverter_Curve;
  VrmlConverter_DeflectionCurve: typeof VrmlConverter_DeflectionCurve;
  VrmlConverter_Drawer: typeof VrmlConverter_Drawer;
  VrmlConverter_HLRShape: typeof VrmlConverter_HLRShape;
  VrmlConverter_IsoAspect: typeof VrmlConverter_IsoAspect;
  VrmlConverter_LineAspect: typeof VrmlConverter_LineAspect;
  VrmlConverter_PointAspect: typeof VrmlConverter_PointAspect;
  VrmlConverter_Projector: typeof VrmlConverter_Projector;
  VrmlConverter_ShadedShape: typeof VrmlConverter_ShadedShape;
  VrmlConverter_ShadingAspect: typeof VrmlConverter_ShadingAspect;
  VrmlConverter_WFDeflectionRestrictedFace: typeof VrmlConverter_WFDeflectionRestrictedFace;
  VrmlConverter_WFDeflectionShape: typeof VrmlConverter_WFDeflectionShape;
  VrmlConverter_WFRestrictedFace: typeof VrmlConverter_WFRestrictedFace;
  VrmlConverter_WFShape: typeof VrmlConverter_WFShape;
  VrmlData_Appearance: typeof VrmlData_Appearance;
  VrmlData_ArrayVec3d: typeof VrmlData_ArrayVec3d;
  VrmlData_Box: typeof VrmlData_Box;
  VrmlData_Color: typeof VrmlData_Color;
  VrmlData_Cone: typeof VrmlData_Cone;
  VrmlData_Coordinate: typeof VrmlData_Coordinate;
  VrmlData_Cylinder: typeof VrmlData_Cylinder;
  VrmlData_Faceted: typeof VrmlData_Faceted;
  VrmlData_Geometry: typeof VrmlData_Geometry;
  VrmlData_Group: typeof VrmlData_Group;
  VrmlData_ImageTexture: typeof VrmlData_ImageTexture;
  VrmlData_Material: typeof VrmlData_Material;
  VrmlData_Normal: typeof VrmlData_Normal;
  VrmlData_ShapeConvert: typeof VrmlData_ShapeConvert;
  VrmlData_ShapeNode: typeof VrmlData_ShapeNode;
  VrmlData_Sphere: typeof VrmlData_Sphere;
  VrmlData_Texture: typeof VrmlData_Texture;
  VrmlData_TextureCoordinate: typeof VrmlData_TextureCoordinate;
  VrmlData_TextureTransform: typeof VrmlData_TextureTransform;
  VrmlData_UnknownNode: typeof VrmlData_UnknownNode;
  VrmlData_WorldInfo: typeof VrmlData_WorldInfo;
  Vrml_AsciiText: typeof Vrml_AsciiText;
  Vrml_Cone: typeof Vrml_Cone;
  Vrml_Coordinate3: typeof Vrml_Coordinate3;
  Vrml_Cube: typeof Vrml_Cube;
  Vrml_Cylinder: typeof Vrml_Cylinder;
  Vrml_DirectionalLight: typeof Vrml_DirectionalLight;
  Vrml_FontStyle: typeof Vrml_FontStyle;
  Vrml_Group: typeof Vrml_Group;
  Vrml_IndexedFaceSet: typeof Vrml_IndexedFaceSet;
  Vrml_IndexedLineSet: typeof Vrml_IndexedLineSet;
  Vrml_Info: typeof Vrml_Info;
  Vrml_Instancing: typeof Vrml_Instancing;
  Vrml_LOD: typeof Vrml_LOD;
  Vrml_Material: typeof Vrml_Material;
  Vrml_MaterialBinding: typeof Vrml_MaterialBinding;
  Vrml_MatrixTransform: typeof Vrml_MatrixTransform;
  Vrml_Normal: typeof Vrml_Normal;
  Vrml_NormalBinding: typeof Vrml_NormalBinding;
  Vrml_OrthographicCamera: typeof Vrml_OrthographicCamera;
  Vrml_PerspectiveCamera: typeof Vrml_PerspectiveCamera;
  Vrml_PointLight: typeof Vrml_PointLight;
  Vrml_PointSet: typeof Vrml_PointSet;
  Vrml_Rotation: typeof Vrml_Rotation;
  Vrml_SFImage: typeof Vrml_SFImage;
  Vrml_SFRotation: typeof Vrml_SFRotation;
  Vrml_Scale: typeof Vrml_Scale;
  Vrml_Separator: typeof Vrml_Separator;
  Vrml_ShapeHints: typeof Vrml_ShapeHints;
  Vrml_Sphere: typeof Vrml_Sphere;
  Vrml_SpotLight: typeof Vrml_SpotLight;
  Vrml_Switch: typeof Vrml_Switch;
  Vrml_Texture2: typeof Vrml_Texture2;
  Vrml_Texture2Transform: typeof Vrml_Texture2Transform;
  Vrml_TextureCoordinate2: typeof Vrml_TextureCoordinate2;
  Vrml_Transform: typeof Vrml_Transform;
  Vrml_TransformSeparator: typeof Vrml_TransformSeparator;
  Vrml_Translation: typeof Vrml_Translation;
  Vrml_WWWAnchor: typeof Vrml_WWWAnchor;
  Vrml_WWWInline: typeof Vrml_WWWInline;
  WNT_ClassDefinitionError: typeof WNT_ClassDefinitionError;
  XCAFDimTolObjects_DatumObject: typeof XCAFDimTolObjects_DatumObject;
  XCAFDimTolObjects_DimensionObject: typeof XCAFDimTolObjects_DimensionObject;
  XCAFDimTolObjects_GeomToleranceObject: typeof XCAFDimTolObjects_GeomToleranceObject;
  XCAFDimTolObjects_Tool: typeof XCAFDimTolObjects_Tool;
  XCAFDoc: typeof XCAFDoc;
  XCAFDoc_Area: typeof XCAFDoc_Area;
  XCAFDoc_AssemblyItemId: typeof XCAFDoc_AssemblyItemId;
  XCAFDoc_AssemblyItemRef: typeof XCAFDoc_AssemblyItemRef;
  XCAFDoc_Centroid: typeof XCAFDoc_Centroid;
  XCAFDoc_ClippingPlaneTool: typeof XCAFDoc_ClippingPlaneTool;
  XCAFDoc_Color: typeof XCAFDoc_Color;
  XCAFDoc_ColorTool: typeof XCAFDoc_ColorTool;
  XCAFDoc_Datum: typeof XCAFDoc_Datum;
  XCAFDoc_DimTol: typeof XCAFDoc_DimTol;
  XCAFDoc_DimTolTool: typeof XCAFDoc_DimTolTool;
  XCAFDoc_Dimension: typeof XCAFDoc_Dimension;
  XCAFDoc_DocumentTool: typeof XCAFDoc_DocumentTool;
  XCAFDoc_Editor: typeof XCAFDoc_Editor;
  XCAFDoc_GraphNode: typeof XCAFDoc_GraphNode;
  XCAFDoc_LayerTool: typeof XCAFDoc_LayerTool;
  XCAFDoc_Location: typeof XCAFDoc_Location;
  XCAFDoc_Material: typeof XCAFDoc_Material;
  XCAFDoc_MaterialTool: typeof XCAFDoc_MaterialTool;
  XCAFDoc_Note: typeof XCAFDoc_Note;
  XCAFDoc_NoteBalloon: typeof XCAFDoc_NoteBalloon;
  XCAFDoc_NoteBinData: typeof XCAFDoc_NoteBinData;
  XCAFDoc_NoteComment: typeof XCAFDoc_NoteComment;
  XCAFDoc_NotesTool: typeof XCAFDoc_NotesTool;
  XCAFDoc_ShapeMapTool: typeof XCAFDoc_ShapeMapTool;
  XCAFDoc_ShapeTool: typeof XCAFDoc_ShapeTool;
  XCAFDoc_View: typeof XCAFDoc_View;
  XCAFDoc_ViewTool: typeof XCAFDoc_ViewTool;
  XCAFDoc_Volume: typeof XCAFDoc_Volume;
  XCAFNoteObjects_NoteObject: typeof XCAFNoteObjects_NoteObject;
  XCAFPrs: typeof XCAFPrs;
  XCAFPrs_AISObject: typeof XCAFPrs_AISObject;
  XCAFPrs_DocumentExplorer: typeof XCAFPrs_DocumentExplorer;
  XCAFPrs_DocumentIdIterator: typeof XCAFPrs_DocumentIdIterator;
  XCAFPrs_Driver: typeof XCAFPrs_Driver;
  XCAFPrs_Style: typeof XCAFPrs_Style;
  XCAFView_Object: typeof XCAFView_Object;
  XSAlgo: typeof XSAlgo;
  XSAlgo_AlgoContainer: typeof XSAlgo_AlgoContainer;
  XSAlgo_ToolContainer: typeof XSAlgo_ToolContainer;
  XSControl: typeof XSControl;
  XSControl_ConnectedShapes: typeof XSControl_ConnectedShapes;
  XSControl_Controller: typeof XSControl_Controller;
  XSControl_FuncShape: typeof XSControl_FuncShape;
  XSControl_Functions: typeof XSControl_Functions;
  XSControl_Reader: typeof XSControl_Reader;
  XSControl_SelectForTransfer: typeof XSControl_SelectForTransfer;
  XSControl_SignTransferStatus: typeof XSControl_SignTransferStatus;
  XSControl_TransferReader: typeof XSControl_TransferReader;
  XSControl_TransferWriter: typeof XSControl_TransferWriter;
  XSControl_Utils: typeof XSControl_Utils;
  XSControl_Vars: typeof XSControl_Vars;
  XSControl_WorkSession: typeof XSControl_WorkSession;
  XSControl_Writer: typeof XSControl_Writer;
  XmlDrivers: typeof XmlDrivers;
  XmlDrivers_DocumentRetrievalDriver: typeof XmlDrivers_DocumentRetrievalDriver;
  XmlDrivers_DocumentStorageDriver: typeof XmlDrivers_DocumentStorageDriver;
  XmlLDrivers: typeof XmlLDrivers;
  XmlLDrivers_DocumentRetrievalDriver: typeof XmlLDrivers_DocumentRetrievalDriver;
  XmlLDrivers_DocumentStorageDriver: typeof XmlLDrivers_DocumentStorageDriver;
  XmlLDrivers_NamespaceDef: typeof XmlLDrivers_NamespaceDef;
  XmlMDF: typeof XmlMDF;
  XmlMDF_ADriver: typeof XmlMDF_ADriver;
  XmlMDF_ADriverTable: typeof XmlMDF_ADriverTable;
  XmlMDF_ReferenceDriver: typeof XmlMDF_ReferenceDriver;
  XmlMDF_TagSourceDriver: typeof XmlMDF_TagSourceDriver;
  XmlMDataStd: typeof XmlMDataStd;
  XmlMDataStd_AsciiStringDriver: typeof XmlMDataStd_AsciiStringDriver;
  XmlMDataStd_BooleanArrayDriver: typeof XmlMDataStd_BooleanArrayDriver;
  XmlMDataStd_BooleanListDriver: typeof XmlMDataStd_BooleanListDriver;
  XmlMDataStd_ByteArrayDriver: typeof XmlMDataStd_ByteArrayDriver;
  XmlMDataStd_CommentDriver: typeof XmlMDataStd_CommentDriver;
  XmlMDataStd_DirectoryDriver: typeof XmlMDataStd_DirectoryDriver;
  XmlMDataStd_ExpressionDriver: typeof XmlMDataStd_ExpressionDriver;
  XmlMDataStd_ExtStringArrayDriver: typeof XmlMDataStd_ExtStringArrayDriver;
  XmlMDataStd_ExtStringListDriver: typeof XmlMDataStd_ExtStringListDriver;
  XmlMDataStd_IntPackedMapDriver: typeof XmlMDataStd_IntPackedMapDriver;
  XmlMDataStd_IntegerArrayDriver: typeof XmlMDataStd_IntegerArrayDriver;
  XmlMDataStd_IntegerDriver: typeof XmlMDataStd_IntegerDriver;
  XmlMDataStd_IntegerListDriver: typeof XmlMDataStd_IntegerListDriver;
  XmlMDataStd_NameDriver: typeof XmlMDataStd_NameDriver;
  XmlMDataStd_NamedDataDriver: typeof XmlMDataStd_NamedDataDriver;
  XmlMDataStd_NoteBookDriver: typeof XmlMDataStd_NoteBookDriver;
  XmlMDataStd_RealArrayDriver: typeof XmlMDataStd_RealArrayDriver;
  XmlMDataStd_RealDriver: typeof XmlMDataStd_RealDriver;
  XmlMDataStd_RealListDriver: typeof XmlMDataStd_RealListDriver;
  XmlMDataStd_ReferenceArrayDriver: typeof XmlMDataStd_ReferenceArrayDriver;
  XmlMDataStd_ReferenceListDriver: typeof XmlMDataStd_ReferenceListDriver;
  XmlMDataStd_RelationDriver: typeof XmlMDataStd_RelationDriver;
  XmlMDataStd_TickDriver: typeof XmlMDataStd_TickDriver;
  XmlMDataStd_TreeNodeDriver: typeof XmlMDataStd_TreeNodeDriver;
  XmlMDataStd_UAttributeDriver: typeof XmlMDataStd_UAttributeDriver;
  XmlMDataStd_VariableDriver: typeof XmlMDataStd_VariableDriver;
  XmlMDataXtd: typeof XmlMDataXtd;
  XmlMDataXtd_AxisDriver: typeof XmlMDataXtd_AxisDriver;
  XmlMDataXtd_ConstraintDriver: typeof XmlMDataXtd_ConstraintDriver;
  XmlMDataXtd_GeometryDriver: typeof XmlMDataXtd_GeometryDriver;
  XmlMDataXtd_PatternStdDriver: typeof XmlMDataXtd_PatternStdDriver;
  XmlMDataXtd_PlacementDriver: typeof XmlMDataXtd_PlacementDriver;
  XmlMDataXtd_PlaneDriver: typeof XmlMDataXtd_PlaneDriver;
  XmlMDataXtd_PointDriver: typeof XmlMDataXtd_PointDriver;
  XmlMDataXtd_PositionDriver: typeof XmlMDataXtd_PositionDriver;
  XmlMDataXtd_PresentationDriver: typeof XmlMDataXtd_PresentationDriver;
  XmlMDataXtd_ShapeDriver: typeof XmlMDataXtd_ShapeDriver;
  XmlMDataXtd_TriangulationDriver: typeof XmlMDataXtd_TriangulationDriver;
  XmlMDocStd: typeof XmlMDocStd;
  XmlMDocStd_XLinkDriver: typeof XmlMDocStd_XLinkDriver;
  XmlMFunction: typeof XmlMFunction;
  XmlMFunction_FunctionDriver: typeof XmlMFunction_FunctionDriver;
  XmlMFunction_GraphNodeDriver: typeof XmlMFunction_GraphNodeDriver;
  XmlMFunction_ScopeDriver: typeof XmlMFunction_ScopeDriver;
  XmlMNaming: typeof XmlMNaming;
  XmlMNaming_NamedShapeDriver: typeof XmlMNaming_NamedShapeDriver;
  XmlMNaming_NamingDriver: typeof XmlMNaming_NamingDriver;
  XmlMNaming_Shape1: typeof XmlMNaming_Shape1;
  XmlMXCAFDoc: typeof XmlMXCAFDoc;
  XmlMXCAFDoc_AreaDriver: typeof XmlMXCAFDoc_AreaDriver;
  XmlMXCAFDoc_AssemblyItemRefDriver: typeof XmlMXCAFDoc_AssemblyItemRefDriver;
  XmlMXCAFDoc_CentroidDriver: typeof XmlMXCAFDoc_CentroidDriver;
  XmlMXCAFDoc_ClippingPlaneToolDriver: typeof XmlMXCAFDoc_ClippingPlaneToolDriver;
  XmlMXCAFDoc_ColorDriver: typeof XmlMXCAFDoc_ColorDriver;
  XmlMXCAFDoc_ColorToolDriver: typeof XmlMXCAFDoc_ColorToolDriver;
  XmlMXCAFDoc_DatumDriver: typeof XmlMXCAFDoc_DatumDriver;
  XmlMXCAFDoc_DimTolDriver: typeof XmlMXCAFDoc_DimTolDriver;
  XmlMXCAFDoc_DimTolToolDriver: typeof XmlMXCAFDoc_DimTolToolDriver;
  XmlMXCAFDoc_DocumentToolDriver: typeof XmlMXCAFDoc_DocumentToolDriver;
  XmlMXCAFDoc_GraphNodeDriver: typeof XmlMXCAFDoc_GraphNodeDriver;
  XmlMXCAFDoc_LayerToolDriver: typeof XmlMXCAFDoc_LayerToolDriver;
  XmlMXCAFDoc_LocationDriver: typeof XmlMXCAFDoc_LocationDriver;
  XmlMXCAFDoc_MaterialDriver: typeof XmlMXCAFDoc_MaterialDriver;
  XmlMXCAFDoc_MaterialToolDriver: typeof XmlMXCAFDoc_MaterialToolDriver;
  XmlMXCAFDoc_NoteBalloonDriver: typeof XmlMXCAFDoc_NoteBalloonDriver;
  XmlMXCAFDoc_NoteBinDataDriver: typeof XmlMXCAFDoc_NoteBinDataDriver;
  XmlMXCAFDoc_NoteCommentDriver: typeof XmlMXCAFDoc_NoteCommentDriver;
  XmlMXCAFDoc_NoteDriver: typeof XmlMXCAFDoc_NoteDriver;
  XmlMXCAFDoc_NotesToolDriver: typeof XmlMXCAFDoc_NotesToolDriver;
  XmlMXCAFDoc_ShapeToolDriver: typeof XmlMXCAFDoc_ShapeToolDriver;
  XmlMXCAFDoc_ViewToolDriver: typeof XmlMXCAFDoc_ViewToolDriver;
  XmlMXCAFDoc_VolumeDriver: typeof XmlMXCAFDoc_VolumeDriver;
  XmlObjMgt: typeof XmlObjMgt;
  XmlObjMgt_Array1: typeof XmlObjMgt_Array1;
  XmlObjMgt_GP: typeof XmlObjMgt_GP;
  XmlObjMgt_Persistent: typeof XmlObjMgt_Persistent;
  XmlObjMgt_RRelocationTable: typeof XmlObjMgt_RRelocationTable;
  XmlObjMgt_SRelocationTable: typeof XmlObjMgt_SRelocationTable;
  XmlTObjDrivers: typeof XmlTObjDrivers;
  XmlTObjDrivers_DocumentRetrievalDriver: typeof XmlTObjDrivers_DocumentRetrievalDriver;
  XmlTObjDrivers_DocumentStorageDriver: typeof XmlTObjDrivers_DocumentStorageDriver;
  XmlTObjDrivers_IntSparseArrayDriver: typeof XmlTObjDrivers_IntSparseArrayDriver;
  XmlTObjDrivers_ModelDriver: typeof XmlTObjDrivers_ModelDriver;
  XmlTObjDrivers_ObjectDriver: typeof XmlTObjDrivers_ObjectDriver;
  XmlTObjDrivers_ReferenceDriver: typeof XmlTObjDrivers_ReferenceDriver;
  XmlTObjDrivers_XYZDriver: typeof XmlTObjDrivers_XYZDriver;
  XmlXCAFDrivers: typeof XmlXCAFDrivers;
  XmlXCAFDrivers_DocumentRetrievalDriver: typeof XmlXCAFDrivers_DocumentRetrievalDriver;
  XmlXCAFDrivers_DocumentStorageDriver: typeof XmlXCAFDrivers_DocumentStorageDriver;
  gce_MakeCirc: typeof gce_MakeCirc;
  gce_MakeCirc2d: typeof gce_MakeCirc2d;
  gce_MakeCone: typeof gce_MakeCone;
  gce_MakeCylinder: typeof gce_MakeCylinder;
  gce_MakeDir: typeof gce_MakeDir;
  gce_MakeDir2d: typeof gce_MakeDir2d;
  gce_MakeElips: typeof gce_MakeElips;
  gce_MakeElips2d: typeof gce_MakeElips2d;
  gce_MakeHypr: typeof gce_MakeHypr;
  gce_MakeHypr2d: typeof gce_MakeHypr2d;
  gce_MakeLin: typeof gce_MakeLin;
  gce_MakeLin2d: typeof gce_MakeLin2d;
  gce_MakeMirror: typeof gce_MakeMirror;
  gce_MakeMirror2d: typeof gce_MakeMirror2d;
  gce_MakeParab: typeof gce_MakeParab;
  gce_MakeParab2d: typeof gce_MakeParab2d;
  gce_MakePln: typeof gce_MakePln;
  gce_MakeRotation: typeof gce_MakeRotation;
  gce_MakeRotation2d: typeof gce_MakeRotation2d;
  gce_MakeScale: typeof gce_MakeScale;
  gce_MakeScale2d: typeof gce_MakeScale2d;
  gce_MakeTranslation: typeof gce_MakeTranslation;
  gce_MakeTranslation2d: typeof gce_MakeTranslation2d;
  gce_Root: typeof gce_Root;
  gp: typeof gp;
  gp_Ax1: typeof gp_Ax1;
  gp_Ax2: typeof gp_Ax2;
  gp_Ax22d: typeof gp_Ax22d;
  gp_Ax2d: typeof gp_Ax2d;
  gp_Ax3: typeof gp_Ax3;
  gp_Circ: typeof gp_Circ;
  gp_Circ2d: typeof gp_Circ2d;
  gp_Cone: typeof gp_Cone;
  gp_Cylinder: typeof gp_Cylinder;
  gp_Dir: typeof gp_Dir;
  gp_Dir2d: typeof gp_Dir2d;
  gp_Elips: typeof gp_Elips;
  gp_Elips2d: typeof gp_Elips2d;
  gp_GTrsf: typeof gp_GTrsf;
  gp_GTrsf2d: typeof gp_GTrsf2d;
  gp_Hypr: typeof gp_Hypr;
  gp_Hypr2d: typeof gp_Hypr2d;
  gp_Lin: typeof gp_Lin;
  gp_Lin2d: typeof gp_Lin2d;
  gp_Mat: typeof gp_Mat;
  gp_Mat2d: typeof gp_Mat2d;
  gp_Parab: typeof gp_Parab;
  gp_Parab2d: typeof gp_Parab2d;
  gp_Pln: typeof gp_Pln;
  gp_Pnt: typeof gp_Pnt;
  gp_Pnt2d: typeof gp_Pnt2d;
  gp_Quaternion: typeof gp_Quaternion;
  gp_QuaternionNLerp: typeof gp_QuaternionNLerp;
  gp_QuaternionSLerp: typeof gp_QuaternionSLerp;
  gp_Sphere: typeof gp_Sphere;
  gp_Torus: typeof gp_Torus;
  gp_Trsf: typeof gp_Trsf;
  gp_Trsf2d: typeof gp_Trsf2d;
  gp_Vec: typeof gp_Vec;
  gp_Vec2d: typeof gp_Vec2d;
  gp_XY: typeof gp_XY;
  gp_XYZ: typeof gp_XYZ;
  math: typeof math;
  math_BFGS: typeof math_BFGS;
  math_BissecNewton: typeof math_BissecNewton;
  math_BracketMinimum: typeof math_BracketMinimum;
  math_BracketedRoot: typeof math_BracketedRoot;
  math_BrentMinimum: typeof math_BrentMinimum;
  math_BullardGenerator: typeof math_BullardGenerator;
  math_ComputeGaussPointsAndWeights: typeof math_ComputeGaussPointsAndWeights;
  math_ComputeKronrodPointsAndWeights: typeof math_ComputeKronrodPointsAndWeights;
  math_Crout: typeof math_Crout;
  math_DirectPolynomialRoots: typeof math_DirectPolynomialRoots;
  math_DoubleTab: typeof math_DoubleTab;
  math_EigenValuesSearcher: typeof math_EigenValuesSearcher;
  math_FRPR: typeof math_FRPR;
  math_Function: typeof math_Function;
  math_FunctionAllRoots: typeof math_FunctionAllRoots;
  math_FunctionRoot: typeof math_FunctionRoot;
  math_FunctionRoots: typeof math_FunctionRoots;
  math_FunctionSample: typeof math_FunctionSample;
  math_FunctionSet: typeof math_FunctionSet;
  math_FunctionSetRoot: typeof math_FunctionSetRoot;
  math_FunctionSetWithDerivatives: typeof math_FunctionSetWithDerivatives;
  math_FunctionWithDerivative: typeof math_FunctionWithDerivative;
  math_Gauss: typeof math_Gauss;
  math_GaussLeastSquare: typeof math_GaussLeastSquare;
  math_GaussMultipleIntegration: typeof math_GaussMultipleIntegration;
  math_GaussSetIntegration: typeof math_GaussSetIntegration;
  math_GaussSingleIntegration: typeof math_GaussSingleIntegration;
  math_GlobOptMin: typeof math_GlobOptMin;
  math_Jacobi: typeof math_Jacobi;
  math_KronrodSingleIntegration: typeof math_KronrodSingleIntegration;
  math_MultipleVarFunction: typeof math_MultipleVarFunction;
  math_MultipleVarFunctionWithGradient: typeof math_MultipleVarFunctionWithGradient;
  math_MultipleVarFunctionWithHessian: typeof math_MultipleVarFunctionWithHessian;
  math_NewtonFunctionRoot: typeof math_NewtonFunctionRoot;
  math_NotSquare: typeof math_NotSquare;
  math_PSO: typeof math_PSO;
  math_PSOParticlesPool: typeof math_PSOParticlesPool;
  math_Powell: typeof math_Powell;
  math_SVD: typeof math_SVD;
  math_SingularMatrix: typeof math_SingularMatrix;
  math_TrigonometricEquationFunction: typeof math_TrigonometricEquationFunction;
  math_TrigonometricFunctionRoots: typeof math_TrigonometricFunctionRoots;
  math_Uzawa: typeof math_Uzawa;
  math_ValueAndWeight: typeof math_ValueAndWeight;
}

class APIHeaderSection_EditHeader extends IFSelect_Editor {
}

class APIHeaderSection_MakeHeader {
}

class Adaptor2d_Curve2d {
}

class Adaptor2d_HCurve2d extends Standard_Transient {
}

class Adaptor2d_HLine2d extends Adaptor2d_HCurve2d {
}

class Adaptor2d_HOffsetCurve extends Adaptor2d_HCurve2d {
}

class Adaptor2d_Line2d extends Adaptor2d_Curve2d {
}

class Adaptor2d_OffsetCurve extends Adaptor2d_Curve2d {
}

class Adaptor3d_Curve {
}

class Adaptor3d_CurveOnSurface extends Adaptor3d_Curve {
}

class Adaptor3d_HCurve extends Standard_Transient {
}

class Adaptor3d_HCurveOnSurface extends Adaptor3d_HCurve {
}

class Adaptor3d_HIsoCurve extends Adaptor3d_HCurve {
}

class Adaptor3d_HSurface extends Standard_Transient {
}

class Adaptor3d_HSurfaceTool {
}

class Adaptor3d_HVertex extends Standard_Transient {
}

class Adaptor3d_InterFunc extends math_FunctionWithDerivative {
}

class Adaptor3d_IsoCurve extends Adaptor3d_Curve {
}

class Adaptor3d_Surface {
}

class Adaptor3d_TopolTool extends Standard_Transient {
}

class AdvApp2Var_ApproxAFunc2Var {
}

class AdvApp2Var_ApproxF2var {
}

class AdvApp2Var_Context {
}

class AdvApp2Var_Criterion {
}

class AdvApp2Var_Data {
}

class AdvApp2Var_EvaluatorFunc2Var {
}

class AdvApp2Var_MathBase {
}

class AdvApp2Var_Node {
}

class AdvApp2Var_Patch {
}

class AdvApp2Var_SysBase {
}

class AdvApprox_ApproxAFunction {
}

class AdvApprox_Cutting {
}

class AdvApprox_DichoCutting extends AdvApprox_Cutting {
}

class AdvApprox_EvaluatorFunction {
}

class AdvApprox_PrefAndRec extends AdvApprox_Cutting {
}

class AdvApprox_PrefCutting extends AdvApprox_Cutting {
}

class AdvApprox_SimpleApprox {
}

class AppBlend_Approx {
}

class AppCont_Function {
}

class AppCont_LeastSquare {
}

class AppParCurves {
}

class AppParCurves_ConstraintCouple {
}

class AppParCurves_MultiBSpCurve extends AppParCurves_MultiCurve {
}

class AppParCurves_MultiCurve {
}

class AppParCurves_MultiPoint {
}

class AppStdL_Application extends TDocStd_Application {
}

class AppStd_Application extends TDocStd_Application {
}

class ApproxInt_KnotTools {
}

class ApproxInt_SvSurfaces {
}

class Approx_Curve2d {
}

class Approx_Curve3d {
}

class Approx_CurveOnSurface {
}

class Approx_CurvilinearParameter {
}

class Approx_CurvlinFunc extends Standard_Transient {
}

class Approx_FitAndDivide {
}

class Approx_FitAndDivide2d {
}

class Approx_MCurvesToBSpCurve {
}

class Approx_SameParameter {
}

class Approx_SweepApproximation {
}

class Approx_SweepFunction extends Standard_Transient {
}

class BRepAdaptor_CompCurve extends Adaptor3d_Curve {
}

class BRepAdaptor_Curve extends Adaptor3d_Curve {
}

class BRepAdaptor_Curve2d extends Geom2dAdaptor_Curve {
}

class BRepAdaptor_HCompCurve extends Adaptor3d_HCurve {
}

class BRepAdaptor_HCurve extends Adaptor3d_HCurve {
}

class BRepAdaptor_HCurve2d extends Adaptor2d_HCurve2d {
}

class BRepAdaptor_HSurface extends Adaptor3d_HSurface {
}

class BRepAdaptor_Surface extends Adaptor3d_Surface {
}

class BRepAlgo {
}

class BRepAlgoAPI_Algo extends BRepBuilderAPI_MakeShape {
}

class BRepAlgoAPI_BooleanOperation extends BRepAlgoAPI_BuilderAlgo {
}

class BRepAlgoAPI_BuilderAlgo extends BRepAlgoAPI_Algo {
}

class BRepAlgoAPI_Check extends BOPAlgo_Options {
}

class BRepAlgoAPI_Common extends BRepAlgoAPI_BooleanOperation {
}

class BRepAlgoAPI_Cut extends BRepAlgoAPI_BooleanOperation {
}

class BRepAlgoAPI_Defeaturing extends BRepAlgoAPI_Algo {
}

class BRepAlgoAPI_Fuse extends BRepAlgoAPI_BooleanOperation {
}

class BRepAlgoAPI_Section extends BRepAlgoAPI_BooleanOperation {
}

class BRepAlgoAPI_Splitter extends BRepAlgoAPI_BuilderAlgo {
}

class BRepAlgo_AsDes extends Standard_Transient {
}

class BRepAlgo_BooleanOperation extends BRepBuilderAPI_MakeShape {
}

class BRepAlgo_Common extends BRepAlgo_BooleanOperation {
}

class BRepAlgo_Cut extends BRepAlgo_BooleanOperation {
}

class BRepAlgo_FaceRestrictor {
}

class BRepAlgo_Fuse extends BRepAlgo_BooleanOperation {
}

class BRepAlgo_Image {
}

class BRepAlgo_Loop {
}

class BRepAlgo_NormalProjection {
}

class BRepAlgo_Section extends BRepAlgo_BooleanOperation {
}

class BRepAlgo_Tool {
}

class BRepApprox_ApproxLine extends Standard_Transient {
}

class BRepApprox_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfApprox extends math_BFGS {
}

class BRepApprox_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfApprox extends math_MultipleVarFunctionWithGradient {
}

class BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox {
}

class BRepApprox_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfApprox extends math_BFGS {
}

class BRepApprox_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfApprox extends math_BFGS {
}

class BRepApprox_MyBSplGradientOfTheComputeLineOfApprox {
}

class BRepApprox_MyGradientOfTheComputeLineBezierOfApprox {
}

class BRepApprox_MyGradientbisOfTheComputeLineOfApprox {
}

class BRepApprox_ParFunctionOfMyGradientOfTheComputeLineBezierOfApprox extends math_MultipleVarFunctionWithGradient {
}

class BRepApprox_ParFunctionOfMyGradientbisOfTheComputeLineOfApprox extends math_MultipleVarFunctionWithGradient {
}

class BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox {
}

class BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox {
}

class BRepApprox_SurfaceTool {
}

class BRepApprox_TheComputeLineBezierOfApprox {
}

class BRepApprox_TheComputeLineOfApprox {
}

class BRepApprox_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfApprox extends math_FunctionSetWithDerivatives {
}

class BRepApprox_TheImpPrmSvSurfacesOfApprox extends ApproxInt_SvSurfaces {
}

class BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox {
}

class BRepApprox_TheMultiLineOfApprox {
}

class BRepApprox_TheMultiLineToolOfApprox {
}

class BRepApprox_ThePrmPrmSvSurfacesOfApprox extends ApproxInt_SvSurfaces {
}

class BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox extends math_FunctionSetWithDerivatives {
}

class BRepBlend_AppFunc extends BRepBlend_AppFuncRoot {
}

class BRepBlend_AppFuncRoot extends Approx_SweepFunction {
}

class BRepBlend_AppFuncRst extends BRepBlend_AppFuncRoot {
}

class BRepBlend_AppFuncRstRst extends BRepBlend_AppFuncRoot {
}

class BRepBlend_AppSurf extends AppBlend_Approx {
}

class BRepBlend_AppSurface extends AppBlend_Approx {
}

class BRepBlend_BlendTool {
}

class BRepBlend_CSWalking {
}

class BRepBlend_CurvPointRadInv extends Blend_CurvPointFuncInv {
}

class BRepBlend_Extremity {
}

class BRepBlend_HCurve2dTool {
}

class BRepBlend_HCurveTool {
}

class BRepBlend_Line extends Standard_Transient {
}

class BRepBlend_PointOnRst {
}

class BRepBlend_RstRstConstRad extends Blend_RstRstFunction {
}

class BRepBlend_RstRstEvolRad extends Blend_RstRstFunction {
}

class BRepBlend_RstRstLineBuilder {
}

class BRepBlend_SurfCurvConstRadInv extends Blend_SurfCurvFuncInv {
}

class BRepBlend_SurfCurvEvolRadInv extends Blend_SurfCurvFuncInv {
}

class BRepBlend_SurfPointConstRadInv extends Blend_SurfPointFuncInv {
}

class BRepBlend_SurfPointEvolRadInv extends Blend_SurfPointFuncInv {
}

class BRepBlend_SurfRstConstRad extends Blend_SurfRstFunction {
}

class BRepBlend_SurfRstEvolRad extends Blend_SurfRstFunction {
}

class BRepBlend_SurfRstLineBuilder {
}

class BRepBlend_Walking {
}

class BRepBndLib {
}

class BRepBuilderAPI {
}

}

class BRepBuilderAPI_Collect {
}

class BRepBuilderAPI_Command {
}

class BRepBuilderAPI_Copy extends BRepBuilderAPI_ModifyShape {
}

class BRepBuilderAPI_FastSewing extends Standard_Transient {
}

class BRepBuilderAPI_FindPlane {
}

class BRepBuilderAPI_GTransform extends BRepBuilderAPI_ModifyShape {
}

class BRepBuilderAPI_MakeEdge extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_MakeEdge2d extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_MakeFace extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_MakePolygon extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_MakeShape extends BRepBuilderAPI_Command {
}

class BRepBuilderAPI_MakeShell extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_MakeSolid extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_MakeVertex extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_MakeWire extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_ModifyShape extends BRepBuilderAPI_MakeShape {
}

class BRepBuilderAPI_NurbsConvert extends BRepBuilderAPI_ModifyShape {
}

class BRepBuilderAPI_Sewing extends Standard_Transient {
}

class BRepBuilderAPI_Transform extends BRepBuilderAPI_ModifyShape {
}

class BRepBuilderAPI_VertexInspector extends NCollection_CellFilter_InspectorXYZ {
}

class BRepCheck {
}

class BRepCheck_Analyzer {
}

class BRepCheck_Edge extends BRepCheck_Result {
}

class BRepCheck_Face extends BRepCheck_Result {
}

class BRepCheck_Result extends Standard_Transient {
}

class BRepCheck_Shell extends BRepCheck_Result {
}

class BRepCheck_Solid extends BRepCheck_Result {
}

class BRepCheck_Vertex extends BRepCheck_Result {
}

class BRepCheck_Wire extends BRepCheck_Result {
}

class BRepClass3d {
}

}

}

class BRepClass3d_Intersector3d {
}

class BRepClass3d_SClassifier {
}

class BRepClass3d_SolidClassifier extends BRepClass3d_SClassifier {
}

class BRepClass3d_SolidExplorer {
}

class BRepClass3d_SolidPassiveClassifier {
}

class BRepClass_Edge {
}

class BRepClass_FClass2dOfFClassifier {
}

class BRepClass_FClassifier {
}

class BRepClass_FaceClassifier extends BRepClass_FClassifier {
}

class BRepClass_FaceExplorer {
}

class BRepClass_FacePassiveClassifier {
}

class BRepClass_Intersector extends Geom2dInt_IntConicCurveOfGInter {
}

class BRepExtrema_DistShapeShape {
}

class BRepExtrema_DistanceSS {
}

class BRepExtrema_ExtCC {
}

class BRepExtrema_ExtCF {
}

class BRepExtrema_ExtFF {
}

class BRepExtrema_ExtPC {
}

class BRepExtrema_ExtPF {
}

}

class BRepExtrema_Poly {
}

class BRepExtrema_SelfIntersection extends BRepExtrema_ElementFilter {
}

class BRepExtrema_ShapeProximity {
}

class BRepExtrema_SolutionElem {
}

class BRepExtrema_TriangleSet extends BVH_PrimitiveSet3d {
}

class BRepExtrema_UnCompatibleShape extends Standard_DomainError {
}

class BRepFeat_Builder extends BOPAlgo_BOP {
}

class BRepFeat_Form extends BRepBuilderAPI_MakeShape {
}

class BRepFeat_Gluer extends BRepBuilderAPI_MakeShape {
}

class BRepFeat_MakeCylindricalHole extends BRepFeat_Builder {
}

class BRepFeat_MakeDPrism extends BRepFeat_Form {
}

class BRepFeat_MakePipe extends BRepFeat_Form {
}

class BRepFeat_MakePrism extends BRepFeat_Form {
}

class BRepFeat_MakeRevol extends BRepFeat_Form {
}

class BRepFeat_MakeRevolutionForm extends BRepFeat_RibSlot {
}

class BRepFeat_RibSlot extends BRepBuilderAPI_MakeShape {
}

class BRepFeat_SplitShape extends BRepBuilderAPI_MakeShape {
}

class BRepFill {
}

class BRepFill_ACRLaw extends BRepFill_LocationLaw {
}

class BRepFill_AdvancedEvolved {
}

class BRepFill_ApproxSeewing {
}

class BRepFill_CompatibleWires {
}

class BRepFill_ComputeCLine {
}

class BRepFill_CurveConstraint extends GeomPlate_CurveConstraint {
}

class BRepFill_Draft {
}

class BRepFill_DraftLaw extends BRepFill_Edge3DLaw {
}

class BRepFill_Edge3DLaw extends BRepFill_LocationLaw {
}

class BRepFill_EdgeFaceAndOrder {
}

class BRepFill_EdgeOnSurfLaw extends BRepFill_LocationLaw {
}

class BRepFill_Evolved {
}

class BRepFill_FaceAndOrder {
}

class BRepFill_Filling {
}

class BRepFill_Generator {
}

class BRepFill_LocationLaw extends Standard_Transient {
}

class BRepFill_MultiLine extends AppCont_Function {
}

class BRepFill_NSections extends BRepFill_SectionLaw {
}

class BRepFill_OffsetAncestors {
}

class BRepFill_OffsetWire {
}

class BRepFill_Pipe {
}

class BRepFill_PipeShell extends Standard_Transient {
}

class BRepFill_Section {
}

class BRepFill_SectionLaw extends Standard_Transient {
}

class BRepFill_SectionPlacement {
}

class BRepFill_ShapeLaw extends BRepFill_SectionLaw {
}

class BRepFill_Sweep {
}

class BRepFill_TrimEdgeTool {
}

class BRepFill_TrimShellCorner {
}

class BRepFill_TrimSurfaceTool {
}

class BRepFilletAPI_LocalOperation extends BRepBuilderAPI_MakeShape {
}

class BRepFilletAPI_MakeChamfer extends BRepFilletAPI_LocalOperation {
}

class BRepFilletAPI_MakeFillet extends BRepFilletAPI_LocalOperation {
}

class BRepFilletAPI_MakeFillet2d extends BRepBuilderAPI_MakeShape {
}

class BRepGProp {
}

class BRepGProp_Cinert extends GProp_GProps {
}

class BRepGProp_Domain {
}

class BRepGProp_EdgeTool {
}

class BRepGProp_Face {
}

class BRepGProp_MeshCinert extends GProp_GProps {
}

class BRepGProp_MeshProps extends GProp_GProps {
}

class BRepGProp_Sinert extends GProp_GProps {
}

class BRepGProp_TFunction extends math_Function {
}

class BRepGProp_UFunction extends math_Function {
}

class BRepGProp_Vinert extends GProp_GProps {
}

class BRepIntCurveSurface_Inter {
}

class BRepLProp {
}

class BRepLProp_CLProps {
}

class BRepLProp_CurveTool {
}

class BRepLProp_SLProps {
}

class BRepLProp_SurfaceTool {
}

class BRepLib {
}

class BRepLib_CheckCurveOnSurface {
}

class BRepLib_Command {
}

class BRepLib_FindSurface {
}

class BRepLib_FuseEdges {
}

class BRepLib_MakeEdge extends BRepLib_MakeShape {
}

class BRepLib_MakeEdge2d extends BRepLib_MakeShape {
}

class BRepLib_MakeFace extends BRepLib_MakeShape {
}

class BRepLib_MakePolygon extends BRepLib_MakeShape {
}

class BRepLib_MakeShape extends BRepLib_Command {
}

class BRepLib_MakeShell extends BRepLib_MakeShape {
}

class BRepLib_MakeSolid extends BRepLib_MakeShape {
}

class BRepLib_MakeVertex extends BRepLib_MakeShape {
}

class BRepLib_MakeWire extends BRepLib_MakeShape {
}

class BRepMAT2d_BisectingLocus {
}

class BRepMAT2d_Explorer {
}

class BRepMAT2d_LinkTopoBilo {
}

class BRepMesh_BaseMeshAlgo extends IMeshTools_MeshAlgo {
}

class BRepMesh_BoundaryParamsRangeSplitter extends BRepMesh_NURBSRangeSplitter {
}

class BRepMesh_Circle {
}

class BRepMesh_CircleInspector extends NCollection_CellFilter_InspectorXY {
}

class BRepMesh_CircleTool {
}

class BRepMesh_Classifier extends Standard_Transient {
}

class BRepMesh_ConeRangeSplitter extends BRepMesh_DefaultRangeSplitter {
}

class BRepMesh_ConstrainedBaseMeshAlgo extends BRepMesh_BaseMeshAlgo {
}

class BRepMesh_Context extends IMeshTools_Context {
}

class BRepMesh_CurveTessellator extends IMeshTools_CurveTessellator {
}

class BRepMesh_CustomBaseMeshAlgo extends BRepMesh_ConstrainedBaseMeshAlgo {
}

class BRepMesh_CylinderRangeSplitter extends BRepMesh_DefaultRangeSplitter {
}

class BRepMesh_DataStructureOfDelaun extends Standard_Transient {
}

class BRepMesh_DefaultRangeSplitter {
}

class BRepMesh_Deflection extends Standard_Transient {
}

class BRepMesh_Delaun {
}

class BRepMesh_DelaunayBaseMeshAlgo extends BRepMesh_ConstrainedBaseMeshAlgo {
}

class BRepMesh_DiscretFactory {
}

class BRepMesh_DiscretRoot extends Standard_Transient {
}

class BRepMesh_Edge extends BRepMesh_OrientedEdge {
}

class BRepMesh_EdgeDiscret extends IMeshTools_ModelAlgo {
}

class BRepMesh_EdgeTessellationExtractor extends IMeshTools_CurveTessellator {
}

class BRepMesh_FaceChecker extends Standard_Transient {
}

class BRepMesh_FaceDiscret extends IMeshTools_ModelAlgo {
}

class BRepMesh_FastDiscret {
}

class BRepMesh_GeomTool {
}

class BRepMesh_IncrementalMesh extends BRepMesh_DiscretRoot {
}

class BRepMesh_MeshAlgoFactory extends IMeshTools_MeshAlgoFactory {
}

class BRepMesh_MeshTool extends Standard_Transient {
}

class BRepMesh_ModelBuilder extends IMeshTools_ModelBuilder {
}

class BRepMesh_ModelHealer extends IMeshTools_ModelAlgo {
}

class BRepMesh_ModelPostProcessor extends IMeshTools_ModelAlgo {
}

class BRepMesh_ModelPreProcessor extends IMeshTools_ModelAlgo {
}

class BRepMesh_NURBSRangeSplitter extends BRepMesh_UVParamRangeSplitter {
}

class BRepMesh_OrientedEdge {
}

class BRepMesh_PairOfIndex {
}

class BRepMesh_SelectorOfDataStructureOfDelaun extends Standard_Transient {
}

class BRepMesh_ShapeTool extends Standard_Transient {
}

class BRepMesh_ShapeVisitor extends IMeshTools_ShapeVisitor {
}

class BRepMesh_SphereRangeSplitter extends BRepMesh_DefaultRangeSplitter {
}

class BRepMesh_TorusRangeSplitter extends BRepMesh_UVParamRangeSplitter {
}

class BRepMesh_Triangle {
}

class BRepMesh_UVParamRangeSplitter extends BRepMesh_DefaultRangeSplitter {
}

class BRepMesh_Vertex {
}

class BRepMesh_VertexInspector extends NCollection_CellFilter_InspectorXY {
}

class BRepMesh_VertexTool extends Standard_Transient {
}

class BRepOffset {
}

class BRepOffsetAPI_DraftAngle extends BRepBuilderAPI_ModifyShape {
}

class BRepOffsetAPI_MakeDraft extends BRepBuilderAPI_MakeShape {
}

class BRepOffsetAPI_MakeEvolved extends BRepBuilderAPI_MakeShape {
}

class BRepOffsetAPI_MakeFilling extends BRepBuilderAPI_MakeShape {
}

class BRepOffsetAPI_MakeOffset extends BRepBuilderAPI_MakeShape {
}

class BRepOffsetAPI_MakeOffsetShape extends BRepBuilderAPI_MakeShape {
}

class BRepOffsetAPI_MakePipe extends BRepPrimAPI_MakeSweep {
}

class BRepOffsetAPI_MakePipeShell extends BRepPrimAPI_MakeSweep {
}

class BRepOffsetAPI_MakeThickSolid extends BRepOffsetAPI_MakeOffsetShape {
}

class BRepOffsetAPI_MiddlePath extends BRepBuilderAPI_MakeShape {
}

class BRepOffsetAPI_NormalProjection extends BRepBuilderAPI_MakeShape {
}

class BRepOffsetAPI_ThruSections extends BRepBuilderAPI_MakeShape {
}

class BRepOffset_Analyse {
}

class BRepOffset_Inter2d {
}

class BRepOffset_Inter3d {
}

class BRepOffset_Interval {
}

class BRepOffset_MakeLoops {
}

class BRepOffset_MakeSimpleOffset {
}

class BRepOffset_Offset {
}

class BRepOffset_SimpleOffset extends BRepTools_Modification {
}

class BRepOffset_Tool {
}

class BRepPrimAPI_MakeBox extends BRepBuilderAPI_MakeShape {
}

class BRepPrimAPI_MakeCone extends BRepPrimAPI_MakeOneAxis {
}

class BRepPrimAPI_MakeCylinder extends BRepPrimAPI_MakeOneAxis {
}

class BRepPrimAPI_MakeHalfSpace extends BRepBuilderAPI_MakeShape {
}

class BRepPrimAPI_MakeOneAxis extends BRepBuilderAPI_MakeShape {
}

class BRepPrimAPI_MakePrism extends BRepPrimAPI_MakeSweep {
}

class BRepPrimAPI_MakeRevol extends BRepPrimAPI_MakeSweep {
}

class BRepPrimAPI_MakeRevolution extends BRepPrimAPI_MakeOneAxis {
}

class BRepPrimAPI_MakeSphere extends BRepPrimAPI_MakeOneAxis {
}

class BRepPrimAPI_MakeSweep extends BRepBuilderAPI_MakeShape {
}

class BRepPrimAPI_MakeTorus extends BRepPrimAPI_MakeOneAxis {
}

class BRepPrimAPI_MakeWedge extends BRepBuilderAPI_MakeShape {
}

class BRepPrim_Builder {
}

class BRepPrim_Cone extends BRepPrim_Revolution {
}

class BRepPrim_Cylinder extends BRepPrim_Revolution {
}

class BRepPrim_FaceBuilder {
}

class BRepPrim_GWedge {
}

class BRepPrim_OneAxis {
}

class BRepPrim_Revolution extends BRepPrim_OneAxis {
}

class BRepPrim_Sphere extends BRepPrim_Revolution {
}

class BRepPrim_Torus extends BRepPrim_Revolution {
}

class BRepPrim_Wedge extends BRepPrim_GWedge {
}

class BRepProj_Projection {
}

class BRepSweep_Builder {
}

class BRepSweep_Iterator {
}

class BRepSweep_NumLinearRegularSweep {
}

class BRepSweep_Prism {
}

class BRepSweep_Revol {
}

class BRepSweep_Rotation extends BRepSweep_Trsf {
}

class BRepSweep_Tool {
}

class BRepSweep_Translation extends BRepSweep_Trsf {
}

class BRepSweep_Trsf extends BRepSweep_NumLinearRegularSweep {
}

class BRepToIGESBRep_Entity extends BRepToIGES_BREntity {
}

class BRepToIGES_BREntity {
}

class BRepToIGES_BRShell extends BRepToIGES_BREntity {
}

class BRepToIGES_BRSolid extends BRepToIGES_BREntity {
}

class BRepToIGES_BRWire extends BRepToIGES_BREntity {
}

class BRepTools {
}

class BRepTools_GTrsfModification extends BRepTools_Modification {
}

class BRepTools_History extends Standard_Transient {
}

class BRepTools_Modification extends Standard_Transient {
}

class BRepTools_Modifier {
}

class BRepTools_NurbsConvertModification extends BRepTools_Modification {
}

class BRepTools_Quilt {
}

class BRepTools_ReShape extends Standard_Transient {
}

class BRepTools_ShapeSet extends TopTools_ShapeSet {
}

class BRepTools_Substitution {
}

class BRepTools_TrsfModification extends BRepTools_Modification {
}

class BRepTools_WireExplorer {
}

class BRepTopAdaptor_FClass2d {
}

class BRepTopAdaptor_HVertex extends Adaptor3d_HVertex {
}

class BRepTopAdaptor_Tool {
}

class BRepTopAdaptor_TopolTool extends Adaptor3d_TopolTool {
}

class BRep_Builder extends TopoDS_Builder {
}

class BRep_Curve3D extends BRep_GCurve {
}

class BRep_CurveOn2Surfaces extends BRep_CurveRepresentation {
}

class BRep_CurveOnClosedSurface extends BRep_CurveOnSurface {
}

class BRep_CurveOnSurface extends BRep_GCurve {
}

class BRep_CurveRepresentation extends Standard_Transient {
}

class BRep_GCurve extends BRep_CurveRepresentation {
}

class BRep_PointOnCurve extends BRep_PointRepresentation {
}

class BRep_PointOnCurveOnSurface extends BRep_PointsOnSurface {
}

class BRep_PointOnSurface extends BRep_PointsOnSurface {
}

class BRep_PointRepresentation extends Standard_Transient {
}

class BRep_PointsOnSurface extends BRep_PointRepresentation {
}

class BRep_Polygon3D extends BRep_CurveRepresentation {
}

class BRep_PolygonOnClosedSurface extends BRep_PolygonOnSurface {
}

class BRep_PolygonOnClosedTriangulation extends BRep_PolygonOnTriangulation {
}

class BRep_PolygonOnSurface extends BRep_CurveRepresentation {
}

class BRep_PolygonOnTriangulation extends BRep_CurveRepresentation {
}

class BRep_TEdge extends TopoDS_TEdge {
}

class BRep_TFace extends TopoDS_TFace {
}

class BRep_TVertex extends TopoDS_TVertex {
}

class BRep_Tool {
}

class BSplCLib_Cache extends Standard_Transient {
}

class BSplCLib_EvaluatorFunction {
}

class BSplSLib {
}

class BSplSLib_Cache extends Standard_Transient {
}

class BSplSLib_EvaluatorFunction {
}

class BVH_BuildQueue {
}

class BVH_BuildThread extends Standard_Transient {
}

class BVH_BuilderTransient extends Standard_Transient {
}

class BVH_ObjectTransient extends Standard_Transient {
}

class BVH_Properties extends Standard_Transient {
}

class BVH_TreeBaseTransient extends Standard_Transient {
}

class BiTgte_Blend {
}

class BiTgte_CurveOnEdge extends Adaptor3d_Curve {
}

class BiTgte_CurveOnVertex extends Adaptor3d_Curve {
}

class BiTgte_HCurveOnEdge extends Adaptor3d_HCurve {
}

class BiTgte_HCurveOnVertex extends Adaptor3d_HCurve {
}

class Bisector {
}

class Bisector_Bisec {
}

class Bisector_BisecAna extends Bisector_Curve {
}

class Bisector_BisecCC extends Bisector_Curve {
}

class Bisector_BisecPC extends Bisector_Curve {
}

class Bisector_Curve extends Geom2d_Curve {
}

class Bisector_FunctionH extends math_FunctionWithDerivative {
}

class Bisector_FunctionInter extends math_FunctionWithDerivative {
}

class Bisector_Inter extends IntRes2d_Intersection {
}

class Bisector_PointOnBis {
}

class Bisector_PolyBis {
}

class BlendFunc_CSCircular extends Blend_CSFunction {
}

class BlendFunc_CSConstRad extends Blend_CSFunction {
}

class BlendFunc_ChAsym extends Blend_Function {
}

class BlendFunc_ChAsymInv extends Blend_FuncInv {
}

class BlendFunc_ChamfInv extends BlendFunc_GenChamfInv {
}

class BlendFunc_Chamfer extends BlendFunc_GenChamfer {
}

class BlendFunc_ConstRad extends Blend_Function {
}

class BlendFunc_ConstRadInv extends Blend_FuncInv {
}

class BlendFunc_ConstThroat extends BlendFunc_GenChamfer {
}

class BlendFunc_ConstThroatInv extends BlendFunc_GenChamfInv {
}

class BlendFunc_ConstThroatWithPenetration extends BlendFunc_ConstThroat {
}

class BlendFunc_ConstThroatWithPenetrationInv extends BlendFunc_ConstThroatInv {
}

class BlendFunc_Corde {
}

class BlendFunc_EvolRad extends Blend_Function {
}

class BlendFunc_EvolRadInv extends Blend_FuncInv {
}

class BlendFunc_GenChamfInv extends Blend_FuncInv {
}

class BlendFunc_GenChamfer extends Blend_Function {
}

class BlendFunc_Ruled extends Blend_Function {
}

class BlendFunc_RuledInv extends Blend_FuncInv {
}

class BlendFunc_Tensor {
}

class Blend_AppFunction extends math_FunctionSetWithDerivatives {
}

class Blend_CSFunction extends Blend_AppFunction {
}

class Blend_CurvPointFuncInv extends math_FunctionSetWithDerivatives {
}

class Blend_FuncInv extends math_FunctionSetWithDerivatives {
}

class Blend_Function extends Blend_AppFunction {
}

class Blend_Point {
}

class Blend_RstRstFunction extends Blend_AppFunction {
}

class Blend_SurfCurvFuncInv extends math_FunctionSetWithDerivatives {
}

class Blend_SurfPointFuncInv extends math_FunctionSetWithDerivatives {
}

class Blend_SurfRstFunction extends Blend_AppFunction {
}

class BndLib {
}

class BndLib_Add2dCurve {
}

class BndLib_Add3dCurve {
}

class BndLib_AddSurface {
}

class Bnd_B2d {
}

class Bnd_B2f {
}

class Bnd_B3d {
}

class Bnd_B3f {
}

class Bnd_BoundSortBox {
}

class Bnd_BoundSortBox2d {
}

class Bnd_Box {
}

class Bnd_Box2d {
}

class Bnd_OBB {
}

class Bnd_Range {
}

class Bnd_Sphere {
}

class Bnd_Tools {
}

class CDF {
}

class CDF_Application extends CDM_Application {
}

class CDF_Directory extends Standard_Transient {
}

class CDF_DirectoryIterator {
}

class CDF_FWOSDriver extends CDF_MetaDataDriver {
}

class CDF_MetaDataDriver extends Standard_Transient {
}

class CDF_MetaDataDriverError extends Standard_Failure {
}

class CDF_MetaDataDriverFactory extends Standard_Transient {
}

class CDF_Session extends Standard_Transient {
}

class CDF_Store {
}

class CDF_StoreList extends Standard_Transient {
}

class CDM_Application extends Standard_Transient {
}

class CDM_Document extends Standard_Transient {
}

class CDM_MetaData extends Standard_Transient {
}

class CDM_Reference extends Standard_Transient {
}

class CDM_ReferenceIterator {
}

class CPnts_AbscissaPoint {
}

class CPnts_MyGaussFunction extends math_Function {
}

class CPnts_MyRootFunction extends math_FunctionWithDerivative {
}

class CPnts_UniformDeflection {
}

class CSLib {
}

class CSLib_Class2d {
}

class CSLib_NormalPolyDef extends math_FunctionWithDerivative {
}

class ChFi2d {
}

class ChFi2d_AnaFilletAlgo {
}

class ChFi2d_Builder {
}

class ChFi2d_ChamferAPI {
}

class ChFi2d_FilletAPI {
}

class ChFi2d_FilletAlgo {
}

class ChFi3d {
}

class ChFi3d_Builder {
}

class ChFi3d_ChBuilder extends ChFi3d_Builder {
}

class ChFi3d_FilBuilder extends ChFi3d_Builder {
}

class ChFi3d_SearchSing extends math_FunctionWithDerivative {
}

class ChFiDS_ChamfSpine extends ChFiDS_Spine {
}

class ChFiDS_CircSection {
}

class ChFiDS_CommonPoint {
}

class ChFiDS_ElSpine extends Adaptor3d_Curve {
}

class ChFiDS_FaceInterference {
}

class ChFiDS_FilSpine extends ChFiDS_Spine {
}

class ChFiDS_HElSpine extends Adaptor3d_HCurve {
}

class ChFiDS_Map {
}

class ChFiDS_Regul {
}

class ChFiDS_Spine extends Standard_Transient {
}

class ChFiDS_Stripe extends Standard_Transient {
}

class ChFiDS_StripeMap {
}

class ChFiDS_SurfData extends Standard_Transient {
}

class ChFiKPart_ComputeData {
}

class Contap_ArcFunction extends math_FunctionWithDerivative {
}

class Contap_ContAna {
}

class Contap_Contour {
}

class Contap_HContTool {
}

class Contap_HCurve2dTool {
}

class Contap_Line {
}

class Contap_Point {
}

class Contap_SurfFunction extends math_FunctionSetWithDerivatives {
}

class Contap_SurfProps {
}

class Contap_TheIWLineOfTheIWalking extends Standard_Transient {
}

class Contap_TheIWalking {
}

class Contap_ThePathPointOfTheSearch {
}

class Contap_TheSearch {
}

class Contap_TheSearchInside {
}

class Contap_TheSegmentOfTheSearch {
}

class Convert_CircleToBSplineCurve extends Convert_ConicToBSplineCurve {
}

class Convert_CompBezierCurves2dToBSplineCurve2d {
}

class Convert_CompBezierCurvesToBSplineCurve {
}

class Convert_CompPolynomialToPoles {
}

class Convert_ConeToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
}

class Convert_ConicToBSplineCurve {
}

class Convert_CylinderToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
}

class Convert_ElementarySurfaceToBSplineSurface {
}

class Convert_EllipseToBSplineCurve extends Convert_ConicToBSplineCurve {
}

class Convert_GridPolynomialToPoles {
}

class Convert_HyperbolaToBSplineCurve extends Convert_ConicToBSplineCurve {
}

class Convert_ParabolaToBSplineCurve extends Convert_ConicToBSplineCurve {
}

class Convert_SphereToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
}

class Convert_TorusToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
}

class Draft {
}

class Draft_EdgeInfo {
}

class Draft_FaceInfo {
}

class Draft_Modification extends BRepTools_Modification {
}

class Draft_VertexInfo {
}

class DsgPrs {
}

class DsgPrs_AnglePresentation {
}

class DsgPrs_Chamf2dPresentation {
}

class DsgPrs_ConcentricPresentation {
}

class DsgPrs_DatumPrs extends Prs3d_Root {
}

class DsgPrs_DiameterPresentation {
}

class DsgPrs_EllipseRadiusPresentation {
}

class DsgPrs_EqualDistancePresentation {
}

class DsgPrs_EqualRadiusPresentation {
}

class DsgPrs_FilletRadiusPresentation {
}

class DsgPrs_FixPresentation {
}

class DsgPrs_IdenticPresentation {
}

class DsgPrs_LengthPresentation {
}

class DsgPrs_MidPointPresentation {
}

class DsgPrs_OffsetPresentation {
}

class DsgPrs_ParalPresentation {
}

class DsgPrs_PerpenPresentation {
}

class DsgPrs_ShadedPlanePresentation {
}

class DsgPrs_ShapeDirPresentation {
}

class DsgPrs_SymbPresentation {
}

class DsgPrs_SymmetricPresentation {
}

class DsgPrs_TangentPresentation {
}

class DsgPrs_XYZAxisPresentation {
}

class DsgPrs_XYZPlanePresentation {
}

class ElCLib {
}

class ElSLib {
}

class Expr {
}

class ExprIntrp {
}

class ExprIntrp_Analysis {
}

class ExprIntrp_GenExp extends ExprIntrp_Generator {
}

class ExprIntrp_GenFct extends ExprIntrp_Generator {
}

class ExprIntrp_GenRel extends ExprIntrp_Generator {
}

class ExprIntrp_Generator extends Standard_Transient {
}

class ExprIntrp_SyntaxError extends Standard_Failure {
}

class Expr_Absolute extends Expr_UnaryExpression {
}

class Expr_ArcCosine extends Expr_UnaryExpression {
}

class Expr_ArcSine extends Expr_UnaryExpression {
}

class Expr_ArcTangent extends Expr_UnaryExpression {
}

class Expr_ArgCosh extends Expr_UnaryExpression {
}

class Expr_ArgSinh extends Expr_UnaryExpression {
}

class Expr_ArgTanh extends Expr_UnaryExpression {
}

class Expr_BinaryExpression extends Expr_GeneralExpression {
}

class Expr_BinaryFunction extends Expr_BinaryExpression {
}

class Expr_Cosh extends Expr_UnaryExpression {
}

class Expr_Cosine extends Expr_UnaryExpression {
}

class Expr_Difference extends Expr_BinaryExpression {
}

class Expr_Different extends Expr_SingleRelation {
}

class Expr_Division extends Expr_BinaryExpression {
}

class Expr_Equal extends Expr_SingleRelation {
}

class Expr_Exponential extends Expr_UnaryExpression {
}

class Expr_Exponentiate extends Expr_BinaryExpression {
}

class Expr_ExprFailure extends Standard_Failure {
}

class Expr_FunctionDerivative extends Expr_GeneralFunction {
}

class Expr_GeneralExpression extends Standard_Transient {
}

class Expr_GeneralFunction extends Standard_Transient {
}

class Expr_GeneralRelation extends Standard_Transient {
}

class Expr_GreaterThan extends Expr_SingleRelation {
}

class Expr_GreaterThanOrEqual extends Expr_SingleRelation {
}

class Expr_InvalidAssignment extends Expr_ExprFailure {
}

class Expr_InvalidFunction extends Expr_ExprFailure {
}

class Expr_InvalidOperand extends Expr_ExprFailure {
}

class Expr_LessThan extends Expr_SingleRelation {
}

class Expr_LessThanOrEqual extends Expr_SingleRelation {
}

class Expr_LogOf10 extends Expr_UnaryExpression {
}

class Expr_LogOfe extends Expr_UnaryExpression {
}

class Expr_NamedConstant extends Expr_NamedExpression {
}

class Expr_NamedExpression extends Expr_GeneralExpression {
}

class Expr_NamedFunction extends Expr_GeneralFunction {
}

class Expr_NamedUnknown extends Expr_NamedExpression {
}

class Expr_NotAssigned extends Expr_ExprFailure {
}

class Expr_NotEvaluable extends Expr_ExprFailure {
}

class Expr_NumericValue extends Expr_GeneralExpression {
}

class Expr_PolyExpression extends Expr_GeneralExpression {
}

class Expr_PolyFunction extends Expr_PolyExpression {
}

class Expr_Product extends Expr_PolyExpression {
}

class Expr_RUIterator {
}

class Expr_RelationIterator {
}

class Expr_Sign extends Expr_UnaryExpression {
}

class Expr_Sine extends Expr_UnaryExpression {
}

class Expr_SingleRelation extends Expr_GeneralRelation {
}

class Expr_Sinh extends Expr_UnaryExpression {
}

class Expr_Square extends Expr_UnaryExpression {
}

class Expr_SquareRoot extends Expr_UnaryExpression {
}

class Expr_Sum extends Expr_PolyExpression {
}

class Expr_SystemRelation extends Expr_GeneralRelation {
}

class Expr_Tangent extends Expr_UnaryExpression {
}

class Expr_Tanh extends Expr_UnaryExpression {
}

class Expr_UnaryExpression extends Expr_GeneralExpression {
}

class Expr_UnaryFunction extends Expr_UnaryExpression {
}

class Expr_UnaryMinus extends Expr_UnaryExpression {
}

class Expr_UnknownIterator {
}

class Extrema_CCLocFOfLocECC extends math_FunctionSetWithDerivatives {
}

class Extrema_CCLocFOfLocECC2d extends math_FunctionSetWithDerivatives {
}

class Extrema_Curve2dTool {
}

class Extrema_CurveTool {
}

class Extrema_ECC {
}

class Extrema_ECC2d {
}

class Extrema_ELPCOfLocateExtPC {
}

class Extrema_ELPCOfLocateExtPC2d {
}

class Extrema_EPCOfELPCOfLocateExtPC {
}

class Extrema_EPCOfELPCOfLocateExtPC2d {
}

class Extrema_EPCOfExtPC {
}

class Extrema_EPCOfExtPC2d {
}

class Extrema_ExtCC {
}

class Extrema_ExtCC2d {
}

class Extrema_ExtCS {
}

class Extrema_ExtElC {
}

class Extrema_ExtElC2d {
}

class Extrema_ExtElCS {
}

class Extrema_ExtElSS {
}

class Extrema_ExtPC {
}

class Extrema_ExtPC2d {
}

class Extrema_ExtPElC {
}

class Extrema_ExtPElC2d {
}

class Extrema_ExtPElS {
}

class Extrema_ExtPExtS extends Standard_Transient {
}

class Extrema_ExtPRevS extends Standard_Transient {
}

class Extrema_ExtPS {
}

class Extrema_ExtSS {
}

class Extrema_FuncExtCS extends math_FunctionSetWithDerivatives {
}

class Extrema_FuncExtSS extends math_FunctionSetWithDerivatives {
}

class Extrema_FuncPSDist extends math_MultipleVarFunctionWithGradient {
}

class Extrema_FuncPSNorm extends math_FunctionSetWithDerivatives {
}

class Extrema_GenExtCS {
}

class Extrema_GenExtPS {
}

class Extrema_GenExtSS {
}

class Extrema_GenLocateExtCS {
}

class Extrema_GenLocateExtPS {
}

class Extrema_GenLocateExtSS {
}

class Extrema_GlobOptFuncCCC0 extends math_MultipleVarFunction {
}

class Extrema_GlobOptFuncCCC1 extends math_MultipleVarFunctionWithGradient {
}

class Extrema_GlobOptFuncCCC2 extends math_MultipleVarFunctionWithHessian {
}

class Extrema_GlobOptFuncCS extends math_MultipleVarFunctionWithHessian {
}

class Extrema_LocECC {
}

class Extrema_LocECC2d {
}

class Extrema_LocEPCOfLocateExtPC {
}

class Extrema_LocEPCOfLocateExtPC2d {
}

class Extrema_LocateExtCC {
}

class Extrema_LocateExtCC2d {
}

class Extrema_LocateExtPC {
}

class Extrema_LocateExtPC2d {
}

class Extrema_PCFOfEPCOfELPCOfLocateExtPC extends math_FunctionWithDerivative {
}

class Extrema_PCFOfEPCOfELPCOfLocateExtPC2d extends math_FunctionWithDerivative {
}

class Extrema_PCFOfEPCOfExtPC extends math_FunctionWithDerivative {
}

class Extrema_PCFOfEPCOfExtPC2d extends math_FunctionWithDerivative {
}

class Extrema_PCLocFOfLocEPCOfLocateExtPC extends math_FunctionWithDerivative {
}

class Extrema_PCLocFOfLocEPCOfLocateExtPC2d extends math_FunctionWithDerivative {
}

class Extrema_POnCurv {
}

class Extrema_POnCurv2d {
}

class Extrema_POnSurf {
}

class Extrema_POnSurfParams extends Extrema_POnSurf {
}

class GCE2d_MakeArcOfCircle extends GCE2d_Root {
}

class GCE2d_MakeArcOfEllipse extends GCE2d_Root {
}

class GCE2d_MakeArcOfHyperbola extends GCE2d_Root {
}

class GCE2d_MakeArcOfParabola extends GCE2d_Root {
}

class GCE2d_MakeCircle extends GCE2d_Root {
}

class GCE2d_MakeEllipse extends GCE2d_Root {
}

class GCE2d_MakeHyperbola extends GCE2d_Root {
}

class GCE2d_MakeLine extends GCE2d_Root {
}

class GCE2d_MakeMirror {
}

class GCE2d_MakeParabola extends GCE2d_Root {
}

class GCE2d_MakeRotation {
}

class GCE2d_MakeScale {
}

class GCE2d_MakeSegment extends GCE2d_Root {
}

class GCE2d_MakeTranslation {
}

class GCE2d_Root {
}

class GCPnts_AbscissaPoint {
}

class GCPnts_DistFunction2dMV extends math_MultipleVarFunction {
}

class GCPnts_DistFunctionMV extends math_MultipleVarFunction {
}

class GCPnts_QuasiUniformAbscissa {
}

class GCPnts_QuasiUniformDeflection {
}

class GCPnts_TangentialDeflection {
}

class GCPnts_UniformAbscissa {
}

class GCPnts_UniformDeflection {
}

class GC_MakeArcOfCircle extends GC_Root {
}

class GC_MakeArcOfEllipse extends GC_Root {
}

class GC_MakeArcOfHyperbola extends GC_Root {
}

class GC_MakeArcOfParabola extends GC_Root {
}

class GC_MakeCircle extends GC_Root {
}

class GC_MakeConicalSurface extends GC_Root {
}

class GC_MakeCylindricalSurface extends GC_Root {
}

class GC_MakeEllipse extends GC_Root {
}

class GC_MakeHyperbola extends GC_Root {
}

class GC_MakeLine extends GC_Root {
}

class GC_MakeMirror {
}

class GC_MakePlane extends GC_Root {
}

class GC_MakeRotation {
}

class GC_MakeScale {
}

class GC_MakeSegment extends GC_Root {
}

class GC_MakeTranslation {
}

class GC_MakeTrimmedCone extends GC_Root {
}

class GC_MakeTrimmedCylinder extends GC_Root {
}

class GC_Root {
}

class GProp {
}

class GProp_CelGProps extends GProp_GProps {
}

class GProp_GProps {
}

class GProp_PEquation {
}

class GProp_PGProps extends GProp_GProps {
}

class GProp_PrincipalProps {
}

class GProp_SelGProps extends GProp_GProps {
}

class GProp_UndefinedAxis extends Standard_DomainError {
}

class GProp_VelGProps extends GProp_GProps {
}

class GccAna_Circ2d2TanOn {
}

class GccAna_Circ2d2TanRad {
}

class GccAna_Circ2d3Tan {
}

class GccAna_Circ2dBisec {
}

class GccAna_Circ2dTanCen {
}

class GccAna_Circ2dTanOnRad {
}

class GccAna_CircLin2dBisec {
}

class GccAna_CircPnt2dBisec {
}

class GccAna_Lin2d2Tan {
}

class GccAna_Lin2dBisec {
}

class GccAna_Lin2dTanObl {
}

class GccAna_Lin2dTanPar {
}

class GccAna_Lin2dTanPer {
}

class GccAna_LinPnt2dBisec {
}

class GccAna_NoSolution extends Standard_Failure {
}

class GccAna_Pnt2dBisec {
}

class GccEnt {
}

class GccEnt_BadQualifier extends Standard_DomainError {
}

class GccEnt_QualifiedCirc {
}

class GccEnt_QualifiedLin {
}

class GccInt_BCirc extends GccInt_Bisec {
}

class GccInt_BElips extends GccInt_Bisec {
}

class GccInt_BHyper extends GccInt_Bisec {
}

class GccInt_BLine extends GccInt_Bisec {
}

class GccInt_BParab extends GccInt_Bisec {
}

class GccInt_BPoint extends GccInt_Bisec {
}

class GccInt_Bisec extends Standard_Transient {
}

class Geom2dAdaptor {
}

class Geom2dAdaptor_Curve extends Adaptor2d_Curve2d {
}

class Geom2dAdaptor_GHCurve extends Adaptor2d_HCurve2d {
}

class Geom2dAdaptor_HCurve extends Geom2dAdaptor_GHCurve {
}

class Geom2dConvert {
}

class Geom2dConvert_ApproxCurve {
}

class Geom2dConvert_BSplineCurveKnotSplitting {
}

class Geom2dConvert_BSplineCurveToBezierCurve {
}

class Geom2dConvert_CompCurveToBSplineCurve {
}

class Geom2dEvaluator_Curve extends Standard_Transient {
}

class Geom2dEvaluator_OffsetCurve extends Geom2dEvaluator_Curve {
}

class Geom2dLProp_CLProps2d {
}

class Geom2dLProp_CurAndInf2d extends LProp_CurAndInf {
}

class Geom2dLProp_Curve2dTool {
}

class Geom2dLProp_FuncCurExt extends math_FunctionWithDerivative {
}

class Geom2dLProp_FuncCurNul extends math_FunctionWithDerivative {
}

class Geom2dLProp_NumericCurInf2d {
}

class Geom2dToIGES_Geom2dCurve extends Geom2dToIGES_Geom2dEntity {
}

class Geom2dToIGES_Geom2dEntity {
}

class Geom2dToIGES_Geom2dPoint extends Geom2dToIGES_Geom2dEntity {
}

class Geom2dToIGES_Geom2dVector extends Geom2dToIGES_Geom2dEntity {
}

class Geom2d_AxisPlacement extends Geom2d_Geometry {
}

class Geom2d_BSplineCurve extends Geom2d_BoundedCurve {
}

class Geom2d_BezierCurve extends Geom2d_BoundedCurve {
}

class Geom2d_BoundedCurve extends Geom2d_Curve {
}

class Geom2d_CartesianPoint extends Geom2d_Point {
}

class Geom2d_Circle extends Geom2d_Conic {
}

class Geom2d_Conic extends Geom2d_Curve {
}

class Geom2d_Curve extends Geom2d_Geometry {
}

class Geom2d_Direction extends Geom2d_Vector {
}

class Geom2d_Ellipse extends Geom2d_Conic {
}

class Geom2d_Geometry extends Standard_Transient {
}

class Geom2d_Hyperbola extends Geom2d_Conic {
}

class Geom2d_Line extends Geom2d_Curve {
}

class Geom2d_OffsetCurve extends Geom2d_Curve {
}

class Geom2d_Parabola extends Geom2d_Conic {
}

class Geom2d_Point extends Geom2d_Geometry {
}

class Geom2d_Transformation extends Standard_Transient {
}

class Geom2d_TrimmedCurve extends Geom2d_BoundedCurve {
}

class Geom2d_UndefinedDerivative extends Standard_DomainError {
}

class Geom2d_UndefinedValue extends Standard_DomainError {
}

class Geom2d_Vector extends Geom2d_Geometry {
}

class Geom2d_VectorWithMagnitude extends Geom2d_Vector {
}

class GeomAPI {
}

class GeomAPI_ExtremaCurveCurve {
}

class GeomAPI_ExtremaCurveSurface {
}

class GeomAPI_ExtremaSurfaceSurface {
}

class GeomAPI_IntCS {
}

class GeomAPI_IntSS {
}

class GeomAPI_PointsToBSpline {
}

class GeomAPI_PointsToBSplineSurface {
}

class GeomAPI_ProjectPointOnCurve {
}

class GeomAPI_ProjectPointOnSurf {
}

class GeomAdaptor {
}

class GeomAdaptor_Curve extends Adaptor3d_Curve {
}

class GeomAdaptor_GHCurve extends Adaptor3d_HCurve {
}

class GeomAdaptor_GHSurface extends Adaptor3d_HSurface {
}

class GeomAdaptor_HCurve extends GeomAdaptor_GHCurve {
}

class GeomAdaptor_HSurface extends GeomAdaptor_GHSurface {
}

class GeomAdaptor_HSurfaceOfLinearExtrusion extends Adaptor3d_HSurface {
}

class GeomAdaptor_HSurfaceOfRevolution extends Adaptor3d_HSurface {
}

class GeomAdaptor_Surface extends Adaptor3d_Surface {
}

class GeomAdaptor_SurfaceOfLinearExtrusion extends GeomAdaptor_Surface {
}

class GeomAdaptor_SurfaceOfRevolution extends GeomAdaptor_Surface {
}

class GeomConvert {
}

class GeomConvert_ApproxCurve {
}

class GeomConvert_ApproxSurface {
}

class GeomConvert_BSplineCurveKnotSplitting {
}

class GeomConvert_BSplineCurveToBezierCurve {
}

class GeomConvert_BSplineSurfaceKnotSplitting {
}

class GeomConvert_BSplineSurfaceToBezierSurface {
}

class GeomConvert_CompBezierSurfacesToBSplineSurface {
}

class GeomConvert_CompCurveToBSplineCurve {
}

class GeomEvaluator_Curve extends Standard_Transient {
}

class GeomEvaluator_OffsetCurve extends GeomEvaluator_Curve {
}

class GeomEvaluator_OffsetSurface extends GeomEvaluator_Surface {
}

class GeomEvaluator_Surface extends Standard_Transient {
}

class GeomEvaluator_SurfaceOfExtrusion extends GeomEvaluator_Surface {
}

class GeomEvaluator_SurfaceOfRevolution extends GeomEvaluator_Surface {
}

class GeomFill {
}

class GeomFill_AppSurf extends AppBlend_Approx {
}

class GeomFill_AppSweep extends AppBlend_Approx {
}

class GeomFill_BSplineCurves {
}

class GeomFill_BezierCurves {
}

class GeomFill_BoundWithSurf extends GeomFill_Boundary {
}

class GeomFill_Boundary extends Standard_Transient {
}

class GeomFill_CircularBlendFunc extends Approx_SweepFunction {
}

class GeomFill_ConstantBiNormal extends GeomFill_TrihedronLaw {
}

class GeomFill_ConstrainedFilling {
}

class GeomFill_Coons extends GeomFill_Filling {
}

class GeomFill_CoonsAlgPatch extends Standard_Transient {
}

class GeomFill_CornerState {
}

class GeomFill_CorrectedFrenet extends GeomFill_TrihedronLaw {
}

class GeomFill_CurveAndTrihedron extends GeomFill_LocationLaw {
}

class GeomFill_Curved extends GeomFill_Filling {
}

class GeomFill_Darboux extends GeomFill_TrihedronLaw {
}

class GeomFill_DegeneratedBound extends GeomFill_Boundary {
}

class GeomFill_DiscreteTrihedron extends GeomFill_TrihedronLaw {
}

class GeomFill_DraftTrihedron extends GeomFill_TrihedronLaw {
}

class GeomFill_EvolvedSection extends GeomFill_SectionLaw {
}

class GeomFill_Filling {
}

class GeomFill_Fixed extends GeomFill_TrihedronLaw {
}

class GeomFill_Frenet extends GeomFill_TrihedronLaw {
}

class GeomFill_FunctionDraft extends math_FunctionSetWithDerivatives {
}

class GeomFill_Generator extends GeomFill_Profiler {
}

class GeomFill_GuideTrihedronAC extends GeomFill_TrihedronWithGuide {
}

class GeomFill_GuideTrihedronPlan extends GeomFill_TrihedronWithGuide {
}

class GeomFill_Line extends Standard_Transient {
}

class GeomFill_LocFunction {
}

class GeomFill_LocationDraft extends GeomFill_LocationLaw {
}

class GeomFill_LocationGuide extends GeomFill_LocationLaw {
}

class GeomFill_LocationLaw extends Standard_Transient {
}

class GeomFill_Pipe {
}

class GeomFill_PlanFunc extends math_FunctionWithDerivative {
}

class GeomFill_PolynomialConvertor {
}

class GeomFill_Profiler {
}

class GeomFill_QuasiAngularConvertor {
}

class GeomFill_SectionGenerator extends GeomFill_Profiler {
}

class GeomFill_SectionLaw extends Standard_Transient {
}

class GeomFill_SectionPlacement {
}

class GeomFill_SimpleBound extends GeomFill_Boundary {
}

class GeomFill_SnglrFunc extends Adaptor3d_Curve {
}

class GeomFill_Stretch extends GeomFill_Filling {
}

class GeomFill_Sweep {
}

class GeomFill_SweepFunction extends Approx_SweepFunction {
}

class GeomFill_Tensor {
}

class GeomFill_TgtField extends Standard_Transient {
}

class GeomFill_TgtOnCoons extends GeomFill_TgtField {
}

class GeomFill_TrihedronLaw extends Standard_Transient {
}

class GeomFill_TrihedronWithGuide extends GeomFill_TrihedronLaw {
}

class GeomFill_UniformSection extends GeomFill_SectionLaw {
}

class GeomInt {
}

class GeomInt_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfWLApprox extends math_BFGS {
}

class GeomInt_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfWLApprox extends math_MultipleVarFunctionWithGradient {
}

class GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox {
}

class GeomInt_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfWLApprox extends math_BFGS {
}

class GeomInt_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfWLApprox extends math_BFGS {
}

class GeomInt_LineConstructor {
}

class GeomInt_LineTool {
}

class GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox {
}

class GeomInt_MyGradientOfTheComputeLineBezierOfWLApprox {
}

class GeomInt_MyGradientbisOfTheComputeLineOfWLApprox {
}

class GeomInt_ParFunctionOfMyGradientOfTheComputeLineBezierOfWLApprox extends math_MultipleVarFunctionWithGradient {
}

class GeomInt_ParFunctionOfMyGradientbisOfTheComputeLineOfWLApprox extends math_MultipleVarFunctionWithGradient {
}

class GeomInt_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfWLApprox {
}

class GeomInt_ParLeastSquareOfMyGradientbisOfTheComputeLineOfWLApprox {
}

class GeomInt_ParameterAndOrientation {
}

class GeomInt_TheComputeLineBezierOfWLApprox {
}

class GeomInt_TheComputeLineOfWLApprox {
}

class GeomInt_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfWLApprox extends math_FunctionSetWithDerivatives {
}

class GeomInt_TheImpPrmSvSurfacesOfWLApprox extends ApproxInt_SvSurfaces {
}

class GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox {
}

class GeomInt_TheMultiLineOfWLApprox {
}

class GeomInt_TheMultiLineToolOfWLApprox {
}

class GeomInt_ThePrmPrmSvSurfacesOfWLApprox extends ApproxInt_SvSurfaces {
}

class GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox extends math_FunctionSetWithDerivatives {
}

class GeomLProp {
}

class GeomLProp_CLProps {
}

class GeomLProp_CurveTool {
}

class GeomLProp_SLProps {
}

class GeomLProp_SurfaceTool {
}

class GeomLib {
}

class GeomLib_Check2dBSplineCurve {
}

class GeomLib_CheckBSplineCurve {
}

class GeomLib_CheckCurveOnSurface {
}

class GeomLib_DenominatorMultiplier {
}

class GeomLib_Interpolate {
}

class GeomLib_IsPlanarSurface {
}

class GeomLib_LogSample extends math_FunctionSample {
}

class GeomLib_MakeCurvefromApprox {
}

class GeomLib_PolyFunc extends math_FunctionWithDerivative {
}

class GeomLib_Tool {
}

class GeomPlate_Aij {
}

class GeomPlate_BuildAveragePlane {
}

class GeomPlate_BuildPlateSurface {
}

class GeomPlate_CurveConstraint extends Standard_Transient {
}

class GeomPlate_MakeApprox {
}

class GeomPlate_PlateG0Criterion extends AdvApp2Var_Criterion {
}

class GeomPlate_PlateG1Criterion extends AdvApp2Var_Criterion {
}

class GeomPlate_PointConstraint extends Standard_Transient {
}

class GeomPlate_Surface extends Geom_Surface {
}

class GeomProjLib {
}

class GeomToIGES_GeomCurve extends GeomToIGES_GeomEntity {
}

class GeomToIGES_GeomEntity {
}

class GeomToIGES_GeomPoint extends GeomToIGES_GeomEntity {
}

class GeomToIGES_GeomSurface extends GeomToIGES_GeomEntity {
}

class GeomToIGES_GeomVector extends GeomToIGES_GeomEntity {
}

class GeomToStep_MakeAxis1Placement extends GeomToStep_Root {
}

class GeomToStep_MakeAxis2Placement2d extends GeomToStep_Root {
}

class GeomToStep_MakeAxis2Placement3d extends GeomToStep_Root {
}

class GeomToStep_MakeBSplineCurveWithKnots extends GeomToStep_Root {
}

class GeomToStep_MakeBSplineCurveWithKnotsAndRationalBSplineCurve extends GeomToStep_Root {
}

class GeomToStep_MakeBSplineSurfaceWithKnots extends GeomToStep_Root {
}

class GeomToStep_MakeBSplineSurfaceWithKnotsAndRationalBSplineSurface extends GeomToStep_Root {
}

class GeomToStep_MakeBoundedCurve extends GeomToStep_Root {
}

class GeomToStep_MakeBoundedSurface extends GeomToStep_Root {
}

class GeomToStep_MakeCartesianPoint extends GeomToStep_Root {
}

class GeomToStep_MakeCircle extends GeomToStep_Root {
}

class GeomToStep_MakeConic extends GeomToStep_Root {
}

class GeomToStep_MakeConicalSurface extends GeomToStep_Root {
}

class GeomToStep_MakeCurve extends GeomToStep_Root {
}

class GeomToStep_MakeCylindricalSurface extends GeomToStep_Root {
}

class GeomToStep_MakeDirection extends GeomToStep_Root {
}

class GeomToStep_MakeElementarySurface extends GeomToStep_Root {
}

class GeomToStep_MakeEllipse extends GeomToStep_Root {
}

class GeomToStep_MakeHyperbola extends GeomToStep_Root {
}

class GeomToStep_MakeLine extends GeomToStep_Root {
}

class GeomToStep_MakeParabola extends GeomToStep_Root {
}

class GeomToStep_MakePlane extends GeomToStep_Root {
}

class GeomToStep_MakePolyline extends GeomToStep_Root {
}

class GeomToStep_MakeRectangularTrimmedSurface extends GeomToStep_Root {
}

class GeomToStep_MakeSphericalSurface extends GeomToStep_Root {
}

class GeomToStep_MakeSurface extends GeomToStep_Root {
}

class GeomToStep_MakeSurfaceOfLinearExtrusion extends GeomToStep_Root {
}

class GeomToStep_MakeSurfaceOfRevolution extends GeomToStep_Root {
}

class GeomToStep_MakeSweptSurface extends GeomToStep_Root {
}

class GeomToStep_MakeToroidalSurface extends GeomToStep_Root {
}

class GeomToStep_MakeVector extends GeomToStep_Root {
}

class GeomToStep_Root {
}

class GeomTools {
}

class GeomTools_Curve2dSet {
}

class GeomTools_CurveSet {
}

class GeomTools_SurfaceSet {
}

class Geom_Axis1Placement extends Geom_AxisPlacement {
}

class Geom_Axis2Placement extends Geom_AxisPlacement {
}

class Geom_AxisPlacement extends Geom_Geometry {
}

class Geom_BSplineCurve extends Geom_BoundedCurve {
}

class Geom_BSplineSurface extends Geom_BoundedSurface {
}

class Geom_BezierCurve extends Geom_BoundedCurve {
}

class Geom_BezierSurface extends Geom_BoundedSurface {
}

class Geom_BoundedCurve extends Geom_Curve {
}

class Geom_BoundedSurface extends Geom_Surface {
}

class Geom_CartesianPoint extends Geom_Point {
}

class Geom_Circle extends Geom_Conic {
}

class Geom_Conic extends Geom_Curve {
}

class Geom_ConicalSurface extends Geom_ElementarySurface {
}

class Geom_Curve extends Geom_Geometry {
}

class Geom_CylindricalSurface extends Geom_ElementarySurface {
}

class Geom_Direction extends Geom_Vector {
}

class Geom_ElementarySurface extends Geom_Surface {
}

class Geom_Ellipse extends Geom_Conic {
}

class Geom_Geometry extends Standard_Transient {
}

class Geom_Hyperbola extends Geom_Conic {
}

class Geom_Line extends Geom_Curve {
}

class Geom_OffsetCurve extends Geom_Curve {
}

class Geom_OffsetSurface extends Geom_Surface {
}

class Geom_OsculatingSurface extends Standard_Transient {
}

class Geom_Parabola extends Geom_Conic {
}

class Geom_Plane extends Geom_ElementarySurface {
}

class Geom_Point extends Geom_Geometry {
}

class Geom_RectangularTrimmedSurface extends Geom_BoundedSurface {
}

class Geom_SphericalSurface extends Geom_ElementarySurface {
}

class Geom_Surface extends Geom_Geometry {
}

class Geom_SurfaceOfLinearExtrusion extends Geom_SweptSurface {
}

class Geom_SurfaceOfRevolution extends Geom_SweptSurface {
}

class Geom_SweptSurface extends Geom_Surface {
}

class Geom_ToroidalSurface extends Geom_ElementarySurface {
}

class Geom_Transformation extends Standard_Transient {
}

class Geom_TrimmedCurve extends Geom_BoundedCurve {
}

class Geom_UndefinedDerivative extends Standard_DomainError {
}

class Geom_UndefinedValue extends Standard_DomainError {
}

class Geom_Vector extends Geom_Geometry {
}

class Geom_VectorWithMagnitude extends Geom_Vector {
}

class Graphic3d_ArrayOfPoints extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_ArrayOfPolygons extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_ArrayOfPolylines extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_ArrayOfPrimitives extends Standard_Transient {
}

class Graphic3d_ArrayOfQuadrangleStrips extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_ArrayOfQuadrangles extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_ArrayOfSegments extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_ArrayOfTriangleFans extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_ArrayOfTriangleStrips extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_ArrayOfTriangles extends Graphic3d_ArrayOfPrimitives {
}

class Graphic3d_AspectFillArea3d extends Graphic3d_Aspects {
}

class Graphic3d_AspectLine3d extends Graphic3d_Aspects {
}

class Graphic3d_AspectMarker3d extends Graphic3d_Aspects {
}

class Graphic3d_AspectText3d extends Graphic3d_Aspects {
}

class Graphic3d_Aspects extends Standard_Transient {
}

class Graphic3d_AttribBuffer extends Graphic3d_Buffer {
}

class Graphic3d_AxisAspect {
}

class Graphic3d_BSDF {
}

class Graphic3d_BoundBuffer extends NCollection_Buffer {
}

class Graphic3d_Buffer extends NCollection_Buffer {
}

class Graphic3d_BvhCStructureSet extends BVH_PrimitiveSet3d {
}

}

class Graphic3d_CLight extends Standard_Transient {
}

class Graphic3d_CStructure extends Standard_Transient {
}

class Graphic3d_CTexture {
}

class Graphic3d_CView extends Graphic3d_DataStructureManager {
}

class Graphic3d_Camera extends Standard_Transient {
}

class Graphic3d_CameraTile {
}

class Graphic3d_ClipPlane extends Standard_Transient {
}

class Graphic3d_CubeMapOrder {
}

class Graphic3d_CubeMapPacked extends Graphic3d_CubeMap {
}

class Graphic3d_CubeMapSeparate extends Graphic3d_CubeMap {
}

class Graphic3d_CullingTool {
}

class Graphic3d_DataStructureManager extends Standard_Transient {
}

class Graphic3d_FrameStats extends Standard_Transient {
}

class Graphic3d_FrameStatsData {
}

class Graphic3d_FrameStatsDataTmp extends Graphic3d_FrameStatsData {
}

class Graphic3d_Fresnel {
}

class Graphic3d_GraduatedTrihedron {
}

class Graphic3d_GraphicDriver extends Standard_Transient {
}

class Graphic3d_Group extends Standard_Transient {
}

class Graphic3d_GroupDefinitionError extends Standard_OutOfRange {
}

class Graphic3d_HatchStyle extends Standard_Transient {
}

class Graphic3d_IndexBuffer extends Graphic3d_Buffer {
}

class Graphic3d_Layer extends Standard_Transient {
}

class Graphic3d_LightSet extends Standard_Transient {
}

class Graphic3d_MarkerImage extends Standard_Transient {
}

class Graphic3d_MaterialAspect {
}

class Graphic3d_MaterialDefinitionError extends Standard_OutOfRange {
}

class Graphic3d_MediaTexture extends Graphic3d_Texture2D {
}

class Graphic3d_MutableIndexBuffer extends Graphic3d_IndexBuffer {
}

class Graphic3d_PresentationAttributes extends Standard_Transient {
}

class Graphic3d_PriorityDefinitionError extends Standard_OutOfRange {
}

class Graphic3d_RenderingParams {
}

class Graphic3d_SequenceOfHClipPlane extends Standard_Transient {
}

class Graphic3d_ShaderAttribute extends Standard_Transient {
}

class Graphic3d_ShaderObject extends Standard_Transient {
}

class Graphic3d_ShaderProgram extends Standard_Transient {
}

class Graphic3d_ShaderVariable extends Standard_Transient {
}

class Graphic3d_Structure extends Standard_Transient {
}

class Graphic3d_StructureDefinitionError extends Standard_OutOfRange {
}

class Graphic3d_StructureManager extends Standard_Transient {
}

class Graphic3d_Text extends Standard_Transient {
}

class Graphic3d_Texture1D extends Graphic3d_TextureMap {
}

class Graphic3d_Texture1Dmanual extends Graphic3d_Texture1D {
}

class Graphic3d_Texture1Dsegment extends Graphic3d_Texture1D {
}

class Graphic3d_Texture2D extends Graphic3d_TextureMap {
}

class Graphic3d_Texture2Dmanual extends Graphic3d_Texture2D {
}

class Graphic3d_Texture2Dplane extends Graphic3d_Texture2D {
}

class Graphic3d_TextureEnv extends Graphic3d_TextureRoot {
}

class Graphic3d_TextureMap extends Graphic3d_TextureRoot {
}

class Graphic3d_TextureParams extends Standard_Transient {
}

class Graphic3d_TextureRoot extends Standard_Transient {
}

class Graphic3d_TextureSet extends Standard_Transient {
}

class Graphic3d_TransformError extends Standard_OutOfRange {
}

class Graphic3d_TransformPers extends Standard_Transient {
}

class Graphic3d_ValidatedCubeMapOrder {
}

class Graphic3d_Vertex {
}

class Graphic3d_ViewAffinity extends Standard_Transient {
}

class Graphic3d_WorldViewProjState {
}

class HLRAlgo {
}

class HLRAlgo_BiPoint {
}

class HLRAlgo_Coincidence {
}

class HLRAlgo_EdgeIterator {
}

class HLRAlgo_EdgeStatus {
}

class HLRAlgo_EdgesBlock extends Standard_Transient {
}

class HLRAlgo_Interference {
}

class HLRAlgo_Intersection {
}

class HLRAlgo_PolyAlgo extends Standard_Transient {
}

class HLRAlgo_PolyData extends Standard_Transient {
}

class HLRAlgo_PolyHidingData {
}

class HLRAlgo_PolyInternalData extends Standard_Transient {
}

class HLRAlgo_PolyInternalNode extends Standard_Transient {
}

class HLRAlgo_PolyShellData extends Standard_Transient {
}

class HLRAlgo_Projector {
}

class HLRAlgo_WiresBlock extends Standard_Transient {
}

class HLRAppli_ReflectLines {
}

class HLRTopoBRep_DSFiller {
}

class HLRTopoBRep_Data {
}

class HLRTopoBRep_FaceData {
}

class HLRTopoBRep_FaceIsoLiner {
}

class HLRTopoBRep_OutLiner extends Standard_Transient {
}

class HLRTopoBRep_VData {
}

class HatchGen_Domain {
}

class HatchGen_IntersectionPoint {
}

class HatchGen_PointOnElement extends HatchGen_IntersectionPoint {
}

class HatchGen_PointOnHatching extends HatchGen_IntersectionPoint {
}

class Hatch_Hatcher {
}

class Hatch_Line {
}

class Hatch_Parameter {
}

class HeaderSection {
}

class HeaderSection_FileDescription extends Standard_Transient {
}

class HeaderSection_FileName extends Standard_Transient {
}

class HeaderSection_FileSchema extends Standard_Transient {
}

class HeaderSection_Protocol extends StepData_Protocol {
}

class Hermit {
}

class IFGraph_AllConnected extends Interface_GraphContent {
}

class IFGraph_AllShared extends Interface_GraphContent {
}

class IFGraph_Articulations extends Interface_GraphContent {
}

class IFGraph_Compare extends Interface_GraphContent {
}

class IFGraph_ConnectedComponants extends IFGraph_SubPartsIterator {
}

class IFGraph_Cumulate extends Interface_GraphContent {
}

class IFGraph_Cycles extends IFGraph_SubPartsIterator {
}

class IFGraph_ExternalSources extends Interface_GraphContent {
}

class IFGraph_SCRoots extends IFGraph_StrongComponants {
}

class IFGraph_StrongComponants extends IFGraph_SubPartsIterator {
}

class IFGraph_SubPartsIterator {
}

class IFSelect {
}

class IFSelect_Act extends IFSelect_Activator {
}

class IFSelect_Activator extends Standard_Transient {
}

class IFSelect_AppliedModifiers extends Standard_Transient {
}

class IFSelect_BasicDumper extends IFSelect_SessionDumper {
}

class IFSelect_CheckCounter extends IFSelect_SignatureList {
}

class IFSelect_ContextWrite {
}

class IFSelect_DispGlobal extends IFSelect_Dispatch {
}

class IFSelect_DispPerCount extends IFSelect_Dispatch {
}

class IFSelect_DispPerFiles extends IFSelect_Dispatch {
}

class IFSelect_DispPerOne extends IFSelect_Dispatch {
}

class IFSelect_DispPerSignature extends IFSelect_Dispatch {
}

class IFSelect_Dispatch extends Standard_Transient {
}

class IFSelect_Editor extends Standard_Transient {
}

class IFSelect_Functions {
}

class IFSelect_GeneralModifier extends Standard_Transient {
}

class IFSelect_GraphCounter extends IFSelect_SignCounter {
}

class IFSelect_ListEditor extends Standard_Transient {
}

class IFSelect_ModelCopier extends Standard_Transient {
}

class IFSelect_ModifEditForm extends IFSelect_Modifier {
}

class IFSelect_ModifReorder extends IFSelect_Modifier {
}

class IFSelect_Modifier extends IFSelect_GeneralModifier {
}

class IFSelect_PacketList extends Standard_Transient {
}

class IFSelect_ParamEditor extends IFSelect_Editor {
}

class IFSelect_SelectAnyList extends IFSelect_SelectDeduct {
}

class IFSelect_SelectAnyType extends IFSelect_SelectExtract {
}

class IFSelect_SelectBase extends IFSelect_Selection {
}

class IFSelect_SelectCombine extends IFSelect_Selection {
}

class IFSelect_SelectControl extends IFSelect_Selection {
}

class IFSelect_SelectDeduct extends IFSelect_Selection {
}

class IFSelect_SelectDiff extends IFSelect_SelectControl {
}

class IFSelect_SelectEntityNumber extends IFSelect_SelectBase {
}

class IFSelect_SelectErrorEntities extends IFSelect_SelectExtract {
}

class IFSelect_SelectExplore extends IFSelect_SelectDeduct {
}

class IFSelect_SelectExtract extends IFSelect_SelectDeduct {
}

class IFSelect_SelectFlag extends IFSelect_SelectExtract {
}

class IFSelect_SelectInList extends IFSelect_SelectAnyList {
}

class IFSelect_SelectIncorrectEntities extends IFSelect_SelectFlag {
}

class IFSelect_SelectIntersection extends IFSelect_SelectCombine {
}

class IFSelect_SelectModelEntities extends IFSelect_SelectBase {
}

class IFSelect_SelectModelRoots extends IFSelect_SelectBase {
}

class IFSelect_SelectPointed extends IFSelect_SelectBase {
}

class IFSelect_SelectRange extends IFSelect_SelectExtract {
}

class IFSelect_SelectRootComps extends IFSelect_SelectExtract {
}

class IFSelect_SelectRoots extends IFSelect_SelectExtract {
}

class IFSelect_SelectSent extends IFSelect_SelectExtract {
}

class IFSelect_SelectShared extends IFSelect_SelectDeduct {
}

class IFSelect_SelectSharing extends IFSelect_SelectDeduct {
}

class IFSelect_SelectSignature extends IFSelect_SelectExtract {
}

class IFSelect_SelectSignedShared extends IFSelect_SelectExplore {
}

class IFSelect_SelectSignedSharing extends IFSelect_SelectExplore {
}

class IFSelect_SelectSuite extends IFSelect_SelectDeduct {
}

class IFSelect_SelectType extends IFSelect_SelectAnyType {
}

class IFSelect_SelectUnion extends IFSelect_SelectCombine {
}

class IFSelect_SelectUnknownEntities extends IFSelect_SelectExtract {
}

class IFSelect_Selection extends Standard_Transient {
}

class IFSelect_SelectionIterator {
}

class IFSelect_SessionDumper extends Standard_Transient {
}

class IFSelect_SessionFile {
}

class IFSelect_SessionPilot extends IFSelect_Activator {
}

class IFSelect_ShareOut extends Standard_Transient {
}

class IFSelect_ShareOutResult {
}

class IFSelect_SignAncestor extends IFSelect_SignType {
}

class IFSelect_SignCategory extends IFSelect_Signature {
}

class IFSelect_SignCounter extends IFSelect_SignatureList {
}

class IFSelect_SignMultiple extends IFSelect_Signature {
}

class IFSelect_SignType extends IFSelect_Signature {
}

class IFSelect_SignValidity extends IFSelect_Signature {
}

class IFSelect_Signature extends Interface_SignType {
}

class IFSelect_SignatureList extends Standard_Transient {
}

class IFSelect_TransformStandard extends IFSelect_Transformer {
}

class IFSelect_Transformer extends Standard_Transient {
}

class IFSelect_WorkLibrary extends Standard_Transient {
}

class IFSelect_WorkSession extends Standard_Transient {
}

class IGESControl_ActorWrite extends Transfer_ActorOfFinderProcess {
}

class IGESControl_AlgoContainer extends IGESToBRep_AlgoContainer {
}

class IGESControl_Controller extends XSControl_Controller {
}

class IGESControl_IGESBoundary extends IGESToBRep_IGESBoundary {
}

class IGESControl_Reader extends XSControl_Reader {
}

class IGESControl_ToolContainer extends IGESToBRep_ToolContainer {
}

class IGESControl_Writer {
}

class IMeshData_Curve extends IMeshData_ParametersList {
}

class IMeshData_Model extends IMeshData_Shape {
}

class IMeshData_PCurve extends IMeshData_ParametersList {
}

class IMeshData_ParametersList extends Standard_Transient {
}

class IMeshData_Shape extends Standard_Transient {
}

class IMeshData_StatusOwner {
}

class IMeshData_TessellatedShape extends IMeshData_Shape {
}

class IMeshTools_Context extends IMeshData_Shape {
}

class IMeshTools_CurveTessellator extends Standard_Transient {
}

class IMeshTools_MeshAlgo extends Standard_Transient {
}

class IMeshTools_MeshAlgoFactory extends Standard_Transient {
}

class IMeshTools_MeshBuilder extends Message_Algorithm {
}

class IMeshTools_ModelAlgo extends Standard_Transient {
}

class IMeshTools_ModelBuilder extends Message_Algorithm {
}

class IMeshTools_ShapeExplorer extends IMeshData_Shape {
}

class IMeshTools_ShapeVisitor extends Standard_Transient {
}

class Image_AlienPixMap extends Image_PixMap {
}

class Image_Diff extends Standard_Transient {
}

class Image_PixMap extends Standard_Transient {
}

class Image_PixMapData extends NCollection_Buffer {
}

class Image_Texture extends Standard_Transient {
}

class IntAna2d_AnaIntersection {
}

class IntAna2d_Conic {
}

class IntAna2d_IntPoint {
}

class IntAna_Curve {
}

class IntAna_Int3Pln {
}

class IntAna_IntConicQuad {
}

class IntAna_IntLinTorus {
}

class IntAna_IntQuadQuad {
}

class IntAna_QuadQuadGeo {
}

class IntAna_Quadric {
}

class IntCurveSurface_HInter extends IntCurveSurface_Intersection {
}

class IntCurveSurface_Intersection {
}

class IntCurveSurface_IntersectionPoint {
}

class IntCurveSurface_IntersectionSegment {
}

class IntCurveSurface_TheCSFunctionOfHInter extends math_FunctionSetWithDerivatives {
}

class IntCurveSurface_TheExactHInter {
}

class IntCurveSurface_TheHCurveTool {
}

class IntCurveSurface_TheInterferenceOfHInter extends Intf_Interference {
}

class IntCurveSurface_ThePolygonOfHInter {
}

class IntCurveSurface_ThePolygonToolOfHInter {
}

class IntCurveSurface_ThePolyhedronToolOfHInter {
}

class IntCurveSurface_TheQuadCurvExactHInter {
}

class IntCurveSurface_TheQuadCurvFuncOfTheQuadCurvExactHInter extends math_FunctionWithDerivative {
}

class IntCurve_IConicTool {
}

class IntCurve_IntConicConic extends IntRes2d_Intersection {
}

class IntCurve_IntImpConicParConic extends IntRes2d_Intersection {
}

class IntCurve_MyImpParToolOfIntImpConicParConic extends math_FunctionWithDerivative {
}

class IntCurve_PConic {
}

class IntCurve_PConicTool {
}

class IntCurve_ProjectOnPConicTool {
}

class IntCurvesFace_Intersector {
}

class IntCurvesFace_ShapeIntersector {
}

class IntPatch_ALine extends IntPatch_Line {
}

class IntPatch_ALineToWLine {
}

class IntPatch_ArcFunction extends math_FunctionWithDerivative {
}

class IntPatch_CSFunction extends math_FunctionSetWithDerivatives {
}

class IntPatch_CurvIntSurf {
}

class IntPatch_GLine extends IntPatch_Line {
}

class IntPatch_HCurve2dTool {
}

class IntPatch_HInterTool {
}

class IntPatch_ImpImpIntersection {
}

class IntPatch_ImpPrmIntersection {
}

class IntPatch_InterferencePolyhedron extends Intf_Interference {
}

class IntPatch_Intersection {
}

class IntPatch_Line extends Standard_Transient {
}

class IntPatch_LineConstructor {
}

class IntPatch_Point {
}

class IntPatch_PointLine extends IntPatch_Line {
}

class IntPatch_PolyArc extends IntPatch_Polygo {
}

class IntPatch_PolyLine extends IntPatch_Polygo {
}

class IntPatch_Polygo extends Intf_Polygon2d {
}

class IntPatch_PolyhedronTool {
}

class IntPatch_PrmPrmIntersection {
}

class IntPatch_PrmPrmIntersection_T3Bits {
}

class IntPatch_RstInt {
}

class IntPatch_SpecialPoints {
}

class IntPatch_TheIWLineOfTheIWalking extends Standard_Transient {
}

class IntPatch_TheIWalking {
}

class IntPatch_ThePathPointOfTheSOnBounds {
}

class IntPatch_TheSOnBounds {
}

class IntPatch_TheSearchInside {
}

class IntPatch_TheSegmentOfTheSOnBounds {
}

class IntPatch_TheSurfFunction extends math_FunctionSetWithDerivatives {
}

class IntPatch_WLine extends IntPatch_PointLine {
}

class IntPatch_WLineTool {
}

class IntPolyh_Couple {
}

class IntPolyh_CoupleMapHasher {
}

class IntPolyh_Edge {
}

class IntPolyh_Intersection {
}

class IntPolyh_Point {
}

class IntPolyh_SectionLine {
}

class IntPolyh_StartPoint {
}

class IntPolyh_Tools {
}

class IntPolyh_Triangle {
}

class IntRes2d_Domain {
}

class IntRes2d_Intersection {
}

class IntRes2d_IntersectionPoint {
}

class IntRes2d_IntersectionSegment {
}

class IntRes2d_Transition {
}

class IntStart_SITopolTool extends Standard_Transient {
}

class IntSurf {
}

class IntSurf_Couple {
}

class IntSurf_InteriorPoint {
}

class IntSurf_InteriorPointTool {
}

class IntSurf_LineOn2S extends Standard_Transient {
}

class IntSurf_PathPoint {
}

class IntSurf_PathPointTool {
}

class IntSurf_PntOn2S {
}

class IntSurf_Quadric {
}

class IntSurf_QuadricTool {
}

class IntSurf_Transition {
}

class IntTools {
}

class IntTools_BaseRangeSample {
}

class IntTools_BeanFaceIntersector {
}

class IntTools_CArray1OfInteger {
}

class IntTools_CArray1OfReal {
}

class IntTools_CommonPrt {
}

class IntTools_Curve {
}

class IntTools_CurveRangeLocalizeData {
}

class IntTools_CurveRangeSample extends IntTools_BaseRangeSample {
}

class IntTools_CurveRangeSampleMapHasher {
}

class IntTools_EdgeEdge {
}

class IntTools_EdgeFace {
}

class IntTools_FClass2d {
}

class IntTools_FaceFace {
}

class IntTools_MarkedRangeSet {
}

class IntTools_PntOn2Faces {
}

class IntTools_Range {
}

class IntTools_Root {
}

class IntTools_ShrunkRange {
}

class IntTools_SurfaceRangeLocalizeData {
}

class IntTools_SurfaceRangeSample {
}

class IntTools_SurfaceRangeSampleMapHasher {
}

class IntTools_Tools {
}

class IntTools_TopolTool extends Adaptor3d_TopolTool {
}

class IntTools_WLineTool {
}

class IntWalk_PWalking {
}

class IntWalk_TheFunctionOfTheInt2S extends math_FunctionSetWithDerivatives {
}

class IntWalk_TheInt2S {
}

class Interface_BitMap {
}

class Interface_Category {
}

class Interface_Check extends Standard_Transient {
}

class Interface_CheckFailure extends Interface_InterfaceError {
}

class Interface_CheckIterator {
}

class Interface_CheckTool {
}

class Interface_CopyControl extends Standard_Transient {
}

class Interface_CopyMap extends Interface_CopyControl {
}

class Interface_CopyTool {
}

class Interface_EntityCluster extends Standard_Transient {
}

class Interface_EntityIterator {
}

class Interface_EntityList {
}

class Interface_FileParameter {
}

class Interface_FileReaderTool {
}

class Interface_FloatWriter {
}

class Interface_GTool extends Standard_Transient {
}

class Interface_GeneralLib {
}

class Interface_GlobalNodeOfGeneralLib extends Standard_Transient {
}

class Interface_GlobalNodeOfReaderLib extends Standard_Transient {
}

class Interface_GraphContent extends Interface_EntityIterator {
}

class Interface_IntList {
}

class Interface_IntVal extends Standard_Transient {
}

class Interface_InterfaceError extends Standard_Failure {
}

class Interface_InterfaceMismatch extends Interface_InterfaceError {
}

class Interface_InterfaceModel extends Standard_Transient {
}

class Interface_LineBuffer {
}

class Interface_MSG {
}

class Interface_MapAsciiStringHasher {
}

class Interface_NodeOfGeneralLib extends Standard_Transient {
}

class Interface_NodeOfReaderLib extends Standard_Transient {
}

class Interface_ParamList extends Standard_Transient {
}

class Interface_ParamSet extends Standard_Transient {
}

class Interface_Protocol extends Standard_Transient {
}

class Interface_ReaderLib {
}

class Interface_ReaderModule extends Standard_Transient {
}

class Interface_ReportEntity extends Standard_Transient {
}

class Interface_STAT {
}

class Interface_ShareFlags {
}

class Interface_ShareTool {
}

class Interface_SignLabel extends MoniTool_SignText {
}

class Interface_SignType extends MoniTool_SignText {
}

class Interface_Static extends Interface_TypedValue {
}

class Interface_TypedValue extends MoniTool_TypedValue {
}

class Interface_UndefinedContent extends Standard_Transient {
}

class Interval {
}

class Intf {
}

class Intf_Interference {
}

class Intf_InterferencePolygon2d extends Intf_Interference {
}

class Intf_Polygon2d {
}

class Intf_SectionLine {
}

class Intf_SectionPoint {
}

class Intf_TangentZone {
}

class Intf_Tool {
}

class Intrv_Interval {
}

class Intrv_Intervals {
}

class LDOMBasicString {
}

class LDOMParser {
}

class LDOM_Attr extends LDOM_Node {
}

class LDOM_BasicAttribute extends LDOM_BasicNode {
}

class LDOM_BasicElement extends LDOM_BasicNode {
}

class LDOM_BasicNode {
}

class LDOM_BasicText extends LDOM_BasicNode {
}

class LDOM_CDATASection extends LDOM_Text {
}

class LDOM_CharReference {
}

class LDOM_CharacterData extends LDOM_Node {
}

class LDOM_Comment extends LDOM_CharacterData {
}

class LDOM_Document {
}

class LDOM_DocumentType {
}

class LDOM_Element extends LDOM_Node {
}

class LDOM_LDOMImplementation {
}

class LDOM_NodeList {
}

class LDOM_OSStream extends Standard_OStream {
}

}

class LDOM_Text extends LDOM_CharacterData {
}

class LDOM_XmlReader {
}

class LDOM_XmlWriter {
}

class LProp3d_CLProps {
}

class LProp3d_CurveTool {
}

class LProp3d_SLProps {
}

class LProp3d_SurfaceTool {
}

class LProp_AnalyticCurInf {
}

class LProp_BadContinuity extends Standard_Failure {
}

class LProp_CurAndInf {
}

class LProp_NotDefined extends Standard_Failure {
}

class Law {
}

class Law_BSpFunc extends Law_Function {
}

class Law_BSpline extends Standard_Transient {
}

class Law_BSplineKnotSplitting {
}

class Law_Composite extends Law_Function {
}

class Law_Constant extends Law_Function {
}

class Law_Function extends Standard_Transient {
}

class Law_Interpol extends Law_BSpFunc {
}

class Law_Linear extends Law_Function {
}

class Law_S extends Law_BSpFunc {
}

class LocOpe {
}

class LocOpe_BuildShape {
}

class LocOpe_BuildWires {
}

class LocOpe_CSIntersector {
}

class LocOpe_CurveShapeIntersector {
}

class LocOpe_DPrism {
}

class LocOpe_FindEdges {
}

class LocOpe_FindEdgesInFace {
}

class LocOpe_GeneratedShape extends Standard_Transient {
}

class LocOpe_Generator {
}

class LocOpe_GluedShape extends LocOpe_GeneratedShape {
}

class LocOpe_Gluer {
}

class LocOpe_LinearForm {
}

class LocOpe_Pipe {
}

class LocOpe_PntFace {
}

class LocOpe_Prism {
}

class LocOpe_SplitDrafts {
}

class LocOpe_SplitShape {
}

class LocOpe_Spliter {
}

class LocOpe_WiresOnShape extends Standard_Transient {
}

class LocalAnalysis {
}

class LocalAnalysis_CurveContinuity {
}

class LocalAnalysis_SurfaceContinuity {
}

class MAT2d_BiInt {
}

class MAT2d_Circuit extends Standard_Transient {
}

class MAT2d_Connexion extends Standard_Transient {
}

class MAT2d_MapBiIntHasher {
}

class MAT2d_Mat2d {
}

class MAT2d_MiniPath {
}

class MAT2d_Tool2d {
}

class MAT_Arc extends Standard_Transient {
}

class MAT_BasicElt extends Standard_Transient {
}

class MAT_Bisector extends Standard_Transient {
}

class MAT_Edge extends Standard_Transient {
}

class MAT_Graph extends Standard_Transient {
}

class MAT_ListOfBisector extends Standard_Transient {
}

class MAT_ListOfEdge extends Standard_Transient {
}

class MAT_Node extends Standard_Transient {
}

class MAT_TListNodeOfListOfBisector extends Standard_Transient {
}

class MAT_TListNodeOfListOfEdge extends Standard_Transient {
}

class MAT_Zone extends Standard_Transient {
}

class MeshVS_Buffer {
}

class MeshVS_CommonSensitiveEntity extends Select3D_SensitiveSet {
}

class MeshVS_DataSource extends Standard_Transient {
}

class MeshVS_DataSource3D extends MeshVS_DataSource {
}

class MeshVS_DeformedDataSource extends MeshVS_DataSource {
}

class MeshVS_Drawer extends Standard_Transient {
}

class MeshVS_DummySensitiveEntity extends Select3D_SensitiveEntity {
}

class MeshVS_ElementalColorPrsBuilder extends MeshVS_PrsBuilder {
}

class MeshVS_Mesh extends AIS_InteractiveObject {
}

class MeshVS_MeshEntityOwner extends SelectMgr_EntityOwner {
}

class MeshVS_MeshOwner extends SelectMgr_EntityOwner {
}

class MeshVS_MeshPrsBuilder extends MeshVS_PrsBuilder {
}

class MeshVS_NodalColorPrsBuilder extends MeshVS_PrsBuilder {
}

class MeshVS_PrsBuilder extends Standard_Transient {
}

class MeshVS_SensitiveFace extends Select3D_SensitiveFace {
}

class MeshVS_SensitiveMesh extends Select3D_SensitiveEntity {
}

class MeshVS_SensitivePolyhedron extends Select3D_SensitiveEntity {
}

class MeshVS_SensitiveQuad extends Select3D_SensitiveEntity {
}

class MeshVS_SensitiveSegment extends Select3D_SensitiveSegment {
}

class MeshVS_TextPrsBuilder extends MeshVS_PrsBuilder {
}

class MeshVS_Tool {
}

class MeshVS_VectorPrsBuilder extends MeshVS_PrsBuilder {
}

class Message {
}

class Message_Alert extends Standard_Transient {
}

class Message_Algorithm extends Standard_Transient {
}

class Message_ExecStatus {
}

class Message_Messenger extends Standard_Transient {
}

class Message_Msg {
}

class Message_MsgFile {
}

class Message_Printer extends Standard_Transient {
}

class Message_PrinterOStream extends Message_Printer {
}

class Message_ProgressIndicator extends Standard_Transient {
}

class Message_ProgressScale {
}

class Message_ProgressSentry {
}

class Message_Report extends Standard_Transient {
}

class MoniTool_AttrList {
}

class MoniTool_CaseData extends Standard_Transient {
}

class MoniTool_DataInfo {
}

class MoniTool_ElemHasher {
}

class MoniTool_Element extends Standard_Transient {
}

class MoniTool_IntVal extends Standard_Transient {
}

class MoniTool_MTHasher {
}

class MoniTool_RealVal extends Standard_Transient {
}

class MoniTool_SignShape extends MoniTool_SignText {
}

class MoniTool_SignText extends Standard_Transient {
}

class MoniTool_Stat {
}

class MoniTool_Timer extends Standard_Transient {
}

class MoniTool_TimerSentry {
}

class MoniTool_TransientElem extends MoniTool_Element {
}

class MoniTool_TypedValue extends Standard_Transient {
}

class MyDirectPolynomialRoots {
}

class NLPlate_HGPPConstraint extends Standard_Transient {
}

class NLPlate_HPG0Constraint extends NLPlate_HGPPConstraint {
}

class NLPlate_HPG0G1Constraint extends NLPlate_HPG0Constraint {
}

class NLPlate_HPG0G2Constraint extends NLPlate_HPG0G1Constraint {
}

class NLPlate_HPG0G3Constraint extends NLPlate_HPG0G2Constraint {
}

class NLPlate_HPG1Constraint extends NLPlate_HGPPConstraint {
}

class NLPlate_HPG2Constraint extends NLPlate_HPG1Constraint {
}

class NLPlate_HPG3Constraint extends NLPlate_HPG2Constraint {
}

class NLPlate_NLPlate {
}

class OSD {
}

class OSD_Chronometer {
}

class OSD_Directory extends OSD_FileNode {
}

class OSD_DirectoryIterator {
}

class OSD_Disk {
}

class OSD_Environment {
}

class OSD_Error {
}

class OSD_Exception extends Standard_Failure {
}

class OSD_Exception_ACCESS_VIOLATION extends OSD_Exception {
}

class OSD_Exception_ARRAY_BOUNDS_EXCEEDED extends OSD_Exception {
}

class OSD_Exception_CTRL_BREAK extends OSD_Exception {
}

class OSD_Exception_FLT_DENORMAL_OPERAND extends OSD_Exception {
}

class OSD_Exception_FLT_DIVIDE_BY_ZERO extends OSD_Exception {
}

class OSD_Exception_FLT_INEXACT_RESULT extends OSD_Exception {
}

class OSD_Exception_FLT_INVALID_OPERATION extends OSD_Exception {
}

class OSD_Exception_FLT_OVERFLOW extends OSD_Exception {
}

class OSD_Exception_FLT_STACK_CHECK extends OSD_Exception {
}

class OSD_Exception_FLT_UNDERFLOW extends OSD_Exception {
}

class OSD_Exception_ILLEGAL_INSTRUCTION extends OSD_Exception {
}

class OSD_Exception_INT_DIVIDE_BY_ZERO extends OSD_Exception {
}

class OSD_Exception_INT_OVERFLOW extends OSD_Exception {
}

class OSD_Exception_INVALID_DISPOSITION extends OSD_Exception {
}

class OSD_Exception_IN_PAGE_ERROR extends OSD_Exception {
}

class OSD_Exception_NONCONTINUABLE_EXCEPTION extends OSD_Exception {
}

class OSD_Exception_PRIV_INSTRUCTION extends OSD_Exception {
}

class OSD_Exception_STACK_OVERFLOW extends OSD_Exception {
}

class OSD_Exception_STATUS_NO_MEMORY extends OSD_Exception {
}

class OSD_FileIterator {
}

class OSD_Host {
}

class OSD_MAllocHook {
}

class OSD_MemInfo {
}

class OSD_OSDError extends Standard_Failure {
}

class OSD_PerfMeter {
}

class OSD_Process {
}

class OSD_Protection {
}

class OSD_SIGBUS extends OSD_Signal {
}

class OSD_SIGHUP extends OSD_Signal {
}

class OSD_SIGILL extends OSD_Signal {
}

class OSD_SIGINT extends OSD_Signal {
}

class OSD_SIGKILL extends OSD_Signal {
}

class OSD_SIGQUIT extends OSD_Signal {
}

class OSD_SIGSEGV extends OSD_Signal {
}

class OSD_SIGSYS extends OSD_Signal {
}

class OSD_SharedLibrary {
}

class OSD_Signal extends Standard_Failure {
}

class OSD_Thread {
}

class OSD_Timer extends OSD_Chronometer {
}

class PCDM {
}

class PCDM_DOMHeaderParser extends LDOMParser {
}

class PCDM_Document extends Standard_Persistent {
}

class PCDM_DriverError extends Standard_Failure {
}

class PCDM_ReadWriter extends Standard_Transient {
}

class PCDM_ReadWriter_1 extends PCDM_ReadWriter {
}

class PCDM_Reader extends Standard_Transient {
}

class PCDM_Reference {
}

class PCDM_ReferenceIterator extends Standard_Transient {
}

class PCDM_RetrievalDriver extends PCDM_Reader {
}

class PCDM_StorageDriver extends PCDM_Writer {
}

class PCDM_Writer extends Standard_Transient {
}

class PLib {
}

class PLib_Base extends Standard_Transient {
}

class PLib_DoubleJacobiPolynomial {
}

class PLib_HermitJacobi extends PLib_Base {
}

class PLib_JacobiPolynomial extends PLib_Base {
}

class PeriodicInterval {
}

class Plate_D1 {
}

class Plate_D2 {
}

class Plate_D3 {
}

class Plate_FreeGtoCConstraint {
}

class Plate_GlobalTranslationConstraint {
}

class Plate_GtoCConstraint {
}

class Plate_LineConstraint {
}

class Plate_LinearScalarConstraint {
}

class Plate_LinearXYZConstraint {
}

class Plate_PinpointConstraint {
}

class Plate_PlaneConstraint {
}

class Plate_Plate {
}

class Plate_SampledCurveConstraint {
}

class Plugin {
}

class Plugin_Failure extends Standard_Failure {
}

class Poly {
}

class Poly_CoherentLink {
}

class Poly_CoherentNode extends gp_XYZ {
}

class Poly_CoherentTriangle {
}

class Poly_CoherentTriangulation extends Standard_Transient {
}

class Poly_Connect {
}

class Poly_MakeLoops {
}

class Poly_MakeLoops2D extends Poly_MakeLoops {
}

class Poly_MakeLoops3D extends Poly_MakeLoops {
}

class Poly_Polygon2D extends Standard_Transient {
}

class Poly_Polygon3D extends Standard_Transient {
}

class Poly_PolygonOnTriangulation extends Standard_Transient {
}

class Poly_Triangle {
}

class Poly_Triangulation extends Standard_Transient {
}

class Precision {
}

class ProjLib {
}

class ProjLib_CompProjectedCurve extends Adaptor2d_Curve2d {
}

class ProjLib_ComputeApprox {
}

class ProjLib_ComputeApproxOnPolarSurface {
}

class ProjLib_Cone extends ProjLib_Projector {
}

class ProjLib_Cylinder extends ProjLib_Projector {
}

class ProjLib_HCompProjectedCurve extends Adaptor2d_HCurve2d {
}

class ProjLib_HProjectedCurve extends Adaptor2d_HCurve2d {
}

class ProjLib_Plane extends ProjLib_Projector {
}

class ProjLib_PrjFunc extends math_FunctionSetWithDerivatives {
}

class ProjLib_PrjResolve {
}

class ProjLib_ProjectOnPlane extends Adaptor3d_Curve {
}

class ProjLib_ProjectedCurve extends Adaptor2d_Curve2d {
}

class ProjLib_Projector {
}

class ProjLib_Sphere extends ProjLib_Projector {
}

class ProjLib_Torus extends ProjLib_Projector {
}

class Prs3d {
}

class Prs3d_Arrow extends Prs3d_Root {
}

class Prs3d_ArrowAspect extends Prs3d_BasicAspect {
}

class Prs3d_BasicAspect extends Standard_Transient {
}

class Prs3d_DatumAspect extends Prs3d_BasicAspect {
}

class Prs3d_DimensionAspect extends Prs3d_BasicAspect {
}

class Prs3d_DimensionUnits {
}

class Prs3d_Drawer extends Graphic3d_PresentationAttributes {
}

class Prs3d_InvalidAngle extends Standard_RangeError {
}

class Prs3d_IsoAspect extends Prs3d_LineAspect {
}

class Prs3d_LineAspect extends Prs3d_BasicAspect {
}

class Prs3d_PlaneAspect extends Prs3d_BasicAspect {
}

class Prs3d_PointAspect extends Prs3d_BasicAspect {
}

class Prs3d_PresentationShadow extends Graphic3d_Structure {
}

class Prs3d_Projector extends Standard_Transient {
}

class Prs3d_Root {
}

class Prs3d_ShadingAspect extends Prs3d_BasicAspect {
}

class Prs3d_ShapeTool {
}

class Prs3d_Text extends Prs3d_Root {
}

class Prs3d_TextAspect extends Prs3d_BasicAspect {
}

class Prs3d_ToolCylinder extends Prs3d_ToolQuadric {
}

class Prs3d_ToolDisk extends Prs3d_ToolQuadric {
}

class Prs3d_ToolSector extends Prs3d_ToolQuadric {
}

class Prs3d_ToolSphere extends Prs3d_ToolQuadric {
}

class PrsMgr_PresentableObject extends Standard_Transient {
}

class PrsMgr_Presentation extends Graphic3d_Structure {
}

class PrsMgr_PresentationManager extends Standard_Transient {
}

class Quantity_Color {
}

class Quantity_ColorDefinitionError extends Standard_DomainError {
}

class Quantity_ColorRGBA {
}

class Quantity_Date {
}

class Quantity_DateDefinitionError extends Standard_DomainError {
}

class Quantity_Period {
}

class Quantity_PeriodDefinitionError extends Standard_DomainError {
}

class RWGltf_CafReader extends RWMesh_CafReader {
}

class RWGltf_GltfLatePrimitiveArray extends Poly_Triangulation {
}

class RWGltf_GltfPrimArrayData {
}

class RWGltf_MaterialCommon extends Standard_Transient {
}

class RWGltf_MaterialMetallicRoughness extends Standard_Transient {
}

class RWGltf_PrimitiveArrayReader extends Standard_Transient {
}

class RWGltf_TriangulationReader extends RWGltf_PrimitiveArrayReader {
}

class RWHeaderSection {
}

class RWHeaderSection_RWFileDescription {
}

class RWHeaderSection_RWFileName {
}

class RWHeaderSection_RWFileSchema {
}

class RWHeaderSection_ReadWriteModule extends StepData_ReadWriteModule {
}

class RWMesh_CafReader extends Standard_Transient {
}

class RWMesh_CoordinateSystemConverter {
}

class RWObj {
}

class RWObj_CafReader extends RWMesh_CafReader {
}

class RWObj_IShapeReceiver {
}

class RWObj_MtlReader {
}

class RWObj_Reader extends Standard_Transient {
}

class RWObj_TriangulationReader extends RWObj_Reader {
}

class RWStepAP203_RWCcDesignApproval {
}

class RWStepAP203_RWCcDesignCertification {
}

class RWStepAP203_RWCcDesignContract {
}

class RWStepAP203_RWCcDesignDateAndTimeAssignment {
}

class RWStepAP203_RWCcDesignPersonAndOrganizationAssignment {
}

class RWStepAP203_RWCcDesignSecurityClassification {
}

class RWStepAP203_RWCcDesignSpecificationReference {
}

class RWStepAP203_RWChange {
}

class RWStepAP203_RWChangeRequest {
}

class RWStepAP203_RWStartRequest {
}

class RWStepAP203_RWStartWork {
}

class RWStepAP214 {
}

class RWStepAP214_RWAppliedApprovalAssignment {
}

class RWStepAP214_RWAppliedDateAndTimeAssignment {
}

class RWStepAP214_RWAppliedDateAssignment {
}

class RWStepAP214_RWAppliedDocumentReference {
}

class RWStepAP214_RWAppliedExternalIdentificationAssignment {
}

class RWStepAP214_RWAppliedGroupAssignment {
}

class RWStepAP214_RWAppliedOrganizationAssignment {
}

class RWStepAP214_RWAppliedPersonAndOrganizationAssignment {
}

class RWStepAP214_RWAppliedPresentedItem {
}

class RWStepAP214_RWAppliedSecurityClassificationAssignment {
}

class RWStepAP214_RWAutoDesignActualDateAndTimeAssignment {
}

class RWStepAP214_RWAutoDesignActualDateAssignment {
}

class RWStepAP214_RWAutoDesignApprovalAssignment {
}

class RWStepAP214_RWAutoDesignDateAndPersonAssignment {
}

class RWStepAP214_RWAutoDesignDocumentReference {
}

class RWStepAP214_RWAutoDesignGroupAssignment {
}

class RWStepAP214_RWAutoDesignNominalDateAndTimeAssignment {
}

class RWStepAP214_RWAutoDesignNominalDateAssignment {
}

class RWStepAP214_RWAutoDesignOrganizationAssignment {
}

class RWStepAP214_RWAutoDesignPersonAndOrganizationAssignment {
}

class RWStepAP214_RWAutoDesignPresentedItem {
}

class RWStepAP214_RWAutoDesignSecurityClassificationAssignment {
}

class RWStepAP214_RWClass {
}

class RWStepAP214_RWExternallyDefinedClass {
}

class RWStepAP214_RWExternallyDefinedGeneralProperty {
}

class RWStepAP214_RWRepItemGroup {
}

class RWStepAP214_ReadWriteModule extends StepData_ReadWriteModule {
}

class RWStepAP242_RWDraughtingModelItemAssociation {
}

class RWStepAP242_RWGeometricItemSpecificUsage {
}

class RWStepAP242_RWIdAttribute {
}

class RWStepAP242_RWItemIdentifiedRepresentationUsage {
}

class RWStepBasic_RWAction {
}

class RWStepBasic_RWActionAssignment {
}

class RWStepBasic_RWActionMethod {
}

class RWStepBasic_RWActionRequestAssignment {
}

class RWStepBasic_RWActionRequestSolution {
}

class RWStepBasic_RWAddress {
}

class RWStepBasic_RWApplicationContext {
}

class RWStepBasic_RWApplicationContextElement {
}

class RWStepBasic_RWApplicationProtocolDefinition {
}

class RWStepBasic_RWApproval {
}

class RWStepBasic_RWApprovalDateTime {
}

class RWStepBasic_RWApprovalPersonOrganization {
}

class RWStepBasic_RWApprovalRelationship {
}

class RWStepBasic_RWApprovalRole {
}

class RWStepBasic_RWApprovalStatus {
}

class RWStepBasic_RWCalendarDate {
}

class RWStepBasic_RWCertification {
}

class RWStepBasic_RWCertificationAssignment {
}

class RWStepBasic_RWCertificationType {
}

class RWStepBasic_RWCharacterizedObject {
}

class RWStepBasic_RWContract {
}

class RWStepBasic_RWContractAssignment {
}

class RWStepBasic_RWContractType {
}

class RWStepBasic_RWConversionBasedUnit {
}

class RWStepBasic_RWConversionBasedUnitAndAreaUnit {
}

class RWStepBasic_RWConversionBasedUnitAndLengthUnit {
}

class RWStepBasic_RWConversionBasedUnitAndMassUnit {
}

class RWStepBasic_RWConversionBasedUnitAndPlaneAngleUnit {
}

class RWStepBasic_RWConversionBasedUnitAndRatioUnit {
}

class RWStepBasic_RWConversionBasedUnitAndSolidAngleUnit {
}

class RWStepBasic_RWConversionBasedUnitAndTimeUnit {
}

class RWStepBasic_RWConversionBasedUnitAndVolumeUnit {
}

class RWStepBasic_RWCoordinatedUniversalTimeOffset {
}

class RWStepBasic_RWDate {
}

class RWStepBasic_RWDateAndTime {
}

class RWStepBasic_RWDateRole {
}

class RWStepBasic_RWDateTimeRole {
}

class RWStepBasic_RWDerivedUnit {
}

class RWStepBasic_RWDerivedUnitElement {
}

class RWStepBasic_RWDimensionalExponents {
}

class RWStepBasic_RWDocument {
}

class RWStepBasic_RWDocumentFile {
}

class RWStepBasic_RWDocumentProductAssociation {
}

class RWStepBasic_RWDocumentProductEquivalence {
}

class RWStepBasic_RWDocumentRelationship {
}

class RWStepBasic_RWDocumentRepresentationType {
}

class RWStepBasic_RWDocumentType {
}

class RWStepBasic_RWDocumentUsageConstraint {
}

class RWStepBasic_RWEffectivity {
}

class RWStepBasic_RWEffectivityAssignment {
}

class RWStepBasic_RWEulerAngles {
}

class RWStepBasic_RWExternalIdentificationAssignment {
}

class RWStepBasic_RWExternalSource {
}

class RWStepBasic_RWExternallyDefinedItem {
}

class RWStepBasic_RWGeneralProperty {
}

class RWStepBasic_RWGroup {
}

class RWStepBasic_RWGroupAssignment {
}

class RWStepBasic_RWGroupRelationship {
}

class RWStepBasic_RWIdentificationAssignment {
}

class RWStepBasic_RWIdentificationRole {
}

class RWStepBasic_RWLengthMeasureWithUnit {
}

class RWStepBasic_RWLengthUnit {
}

class RWStepBasic_RWLocalTime {
}

class RWStepBasic_RWMassMeasureWithUnit {
}

class RWStepBasic_RWMassUnit {
}

class RWStepBasic_RWMeasureWithUnit {
}

class RWStepBasic_RWMechanicalContext {
}

class RWStepBasic_RWNameAssignment {
}

class RWStepBasic_RWNamedUnit {
}

class RWStepBasic_RWObjectRole {
}

class RWStepBasic_RWOrdinalDate {
}

class RWStepBasic_RWOrganization {
}

class RWStepBasic_RWOrganizationRole {
}

class RWStepBasic_RWOrganizationalAddress {
}

class RWStepBasic_RWPerson {
}

class RWStepBasic_RWPersonAndOrganization {
}

class RWStepBasic_RWPersonAndOrganizationRole {
}

class RWStepBasic_RWPersonalAddress {
}

class RWStepBasic_RWPlaneAngleMeasureWithUnit {
}

class RWStepBasic_RWPlaneAngleUnit {
}

class RWStepBasic_RWProduct {
}

class RWStepBasic_RWProductCategory {
}

class RWStepBasic_RWProductCategoryRelationship {
}

class RWStepBasic_RWProductConceptContext {
}

class RWStepBasic_RWProductContext {
}

class RWStepBasic_RWProductDefinition {
}

class RWStepBasic_RWProductDefinitionContext {
}

class RWStepBasic_RWProductDefinitionEffectivity {
}

class RWStepBasic_RWProductDefinitionFormation {
}

class RWStepBasic_RWProductDefinitionFormationRelationship {
}

class RWStepBasic_RWProductDefinitionFormationWithSpecifiedSource {
}

class RWStepBasic_RWProductDefinitionReference {
}

class RWStepBasic_RWProductDefinitionReferenceWithLocalRepresentation {
}

class RWStepBasic_RWProductDefinitionRelationship {
}

class RWStepBasic_RWProductDefinitionWithAssociatedDocuments {
}

class RWStepBasic_RWProductRelatedProductCategory {
}

class RWStepBasic_RWProductType {
}

class RWStepBasic_RWRatioMeasureWithUnit {
}

class RWStepBasic_RWRoleAssociation {
}

class RWStepBasic_RWSecurityClassification {
}

class RWStepBasic_RWSecurityClassificationLevel {
}

class RWStepBasic_RWSiUnit {
}

class RWStepBasic_RWSiUnitAndAreaUnit {
}

class RWStepBasic_RWSiUnitAndLengthUnit {
}

class RWStepBasic_RWSiUnitAndMassUnit {
}

class RWStepBasic_RWSiUnitAndPlaneAngleUnit {
}

class RWStepBasic_RWSiUnitAndRatioUnit {
}

class RWStepBasic_RWSiUnitAndSolidAngleUnit {
}

class RWStepBasic_RWSiUnitAndThermodynamicTemperatureUnit {
}

class RWStepBasic_RWSiUnitAndTimeUnit {
}

class RWStepBasic_RWSiUnitAndVolumeUnit {
}

class RWStepBasic_RWSolidAngleMeasureWithUnit {
}

class RWStepBasic_RWSolidAngleUnit {
}

class RWStepBasic_RWThermodynamicTemperatureUnit {
}

class RWStepBasic_RWUncertaintyMeasureWithUnit {
}

class RWStepBasic_RWVersionedActionRequest {
}

class RWStepBasic_RWWeekOfYearAndDayDate {
}

class RWStepDimTol_RWAngularityTolerance {
}

class RWStepDimTol_RWCircularRunoutTolerance {
}

class RWStepDimTol_RWCoaxialityTolerance {
}

class RWStepDimTol_RWCommonDatum {
}

class RWStepDimTol_RWConcentricityTolerance {
}

class RWStepDimTol_RWCylindricityTolerance {
}

class RWStepDimTol_RWDatum {
}

class RWStepDimTol_RWDatumFeature {
}

class RWStepDimTol_RWDatumReference {
}

class RWStepDimTol_RWDatumReferenceCompartment {
}

class RWStepDimTol_RWDatumReferenceElement {
}

class RWStepDimTol_RWDatumReferenceModifierWithValue {
}

class RWStepDimTol_RWDatumSystem {
}

class RWStepDimTol_RWDatumTarget {
}

class RWStepDimTol_RWFlatnessTolerance {
}

class RWStepDimTol_RWGeneralDatumReference {
}

class RWStepDimTol_RWGeoTolAndGeoTolWthDatRef {
}

class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol {
}

class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
}

class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol {
}

class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndUneqDisGeoTol {
}

class RWStepDimTol_RWGeoTolAndGeoTolWthMaxTol {
}

class RWStepDimTol_RWGeoTolAndGeoTolWthMod {
}

class RWStepDimTol_RWGeometricTolerance {
}

class RWStepDimTol_RWGeometricToleranceRelationship {
}

class RWStepDimTol_RWGeometricToleranceWithDatumReference {
}

class RWStepDimTol_RWGeometricToleranceWithDefinedAreaUnit {
}

class RWStepDimTol_RWGeometricToleranceWithDefinedUnit {
}

class RWStepDimTol_RWGeometricToleranceWithMaximumTolerance {
}

class RWStepDimTol_RWGeometricToleranceWithModifiers {
}

class RWStepDimTol_RWLineProfileTolerance {
}

class RWStepDimTol_RWModifiedGeometricTolerance {
}

class RWStepDimTol_RWNonUniformZoneDefinition {
}

class RWStepDimTol_RWParallelismTolerance {
}

class RWStepDimTol_RWPerpendicularityTolerance {
}

class RWStepDimTol_RWPlacedDatumTargetFeature {
}

class RWStepDimTol_RWPositionTolerance {
}

class RWStepDimTol_RWProjectedZoneDefinition {
}

class RWStepDimTol_RWRoundnessTolerance {
}

class RWStepDimTol_RWRunoutZoneDefinition {
}

class RWStepDimTol_RWRunoutZoneOrientation {
}

class RWStepDimTol_RWStraightnessTolerance {
}

class RWStepDimTol_RWSurfaceProfileTolerance {
}

class RWStepDimTol_RWSymmetryTolerance {
}

class RWStepDimTol_RWToleranceZone {
}

class RWStepDimTol_RWToleranceZoneDefinition {
}

class RWStepDimTol_RWToleranceZoneForm {
}

class RWStepDimTol_RWTotalRunoutTolerance {
}

class RWStepDimTol_RWUnequallyDisposedGeometricTolerance {
}

class RWStepElement_RWAnalysisItemWithinRepresentation {
}

class RWStepElement_RWCurve3dElementDescriptor {
}

class RWStepElement_RWCurveElementEndReleasePacket {
}

class RWStepElement_RWCurveElementSectionDefinition {
}

class RWStepElement_RWCurveElementSectionDerivedDefinitions {
}

class RWStepElement_RWElementDescriptor {
}

class RWStepElement_RWElementMaterial {
}

class RWStepElement_RWSurface3dElementDescriptor {
}

class RWStepElement_RWSurfaceElementProperty {
}

class RWStepElement_RWSurfaceSection {
}

class RWStepElement_RWSurfaceSectionField {
}

class RWStepElement_RWSurfaceSectionFieldConstant {
}

class RWStepElement_RWSurfaceSectionFieldVarying {
}

class RWStepElement_RWUniformSurfaceSection {
}

class RWStepElement_RWVolume3dElementDescriptor {
}

class RWStepFEA_RWAlignedCurve3dElementCoordinateSystem {
}

class RWStepFEA_RWAlignedSurface3dElementCoordinateSystem {
}

class RWStepFEA_RWArbitraryVolume3dElementCoordinateSystem {
}

class RWStepFEA_RWConstantSurface3dElementCoordinateSystem {
}

class RWStepFEA_RWCurve3dElementProperty {
}

class RWStepFEA_RWCurve3dElementRepresentation {
}

class RWStepFEA_RWCurveElementEndOffset {
}

class RWStepFEA_RWCurveElementEndRelease {
}

class RWStepFEA_RWCurveElementInterval {
}

class RWStepFEA_RWCurveElementIntervalConstant {
}

class RWStepFEA_RWCurveElementIntervalLinearlyVarying {
}

class RWStepFEA_RWCurveElementLocation {
}

class RWStepFEA_RWDummyNode {
}

class RWStepFEA_RWElementGeometricRelationship {
}

class RWStepFEA_RWElementGroup {
}

class RWStepFEA_RWElementRepresentation {
}

class RWStepFEA_RWFeaAreaDensity {
}

class RWStepFEA_RWFeaAxis2Placement3d {
}

class RWStepFEA_RWFeaCurveSectionGeometricRelationship {
}

class RWStepFEA_RWFeaGroup {
}

class RWStepFEA_RWFeaLinearElasticity {
}

class RWStepFEA_RWFeaMassDensity {
}

class RWStepFEA_RWFeaMaterialPropertyRepresentation {
}

class RWStepFEA_RWFeaMaterialPropertyRepresentationItem {
}

class RWStepFEA_RWFeaModel {
}

class RWStepFEA_RWFeaModel3d {
}

class RWStepFEA_RWFeaModelDefinition {
}

class RWStepFEA_RWFeaMoistureAbsorption {
}

class RWStepFEA_RWFeaParametricPoint {
}

class RWStepFEA_RWFeaRepresentationItem {
}

class RWStepFEA_RWFeaSecantCoefficientOfLinearThermalExpansion {
}

class RWStepFEA_RWFeaShellBendingStiffness {
}

class RWStepFEA_RWFeaShellMembraneBendingCouplingStiffness {
}

class RWStepFEA_RWFeaShellMembraneStiffness {
}

class RWStepFEA_RWFeaShellShearStiffness {
}

class RWStepFEA_RWFeaSurfaceSectionGeometricRelationship {
}

class RWStepFEA_RWFeaTangentialCoefficientOfLinearThermalExpansion {
}

class RWStepFEA_RWFreedomAndCoefficient {
}

class RWStepFEA_RWFreedomsList {
}

class RWStepFEA_RWGeometricNode {
}

class RWStepFEA_RWNode {
}

class RWStepFEA_RWNodeDefinition {
}

class RWStepFEA_RWNodeGroup {
}

class RWStepFEA_RWNodeRepresentation {
}

class RWStepFEA_RWNodeSet {
}

class RWStepFEA_RWNodeWithSolutionCoordinateSystem {
}

class RWStepFEA_RWNodeWithVector {
}

class RWStepFEA_RWParametricCurve3dElementCoordinateDirection {
}

class RWStepFEA_RWParametricCurve3dElementCoordinateSystem {
}

class RWStepFEA_RWParametricSurface3dElementCoordinateSystem {
}

class RWStepFEA_RWSurface3dElementRepresentation {
}

class RWStepFEA_RWVolume3dElementRepresentation {
}

class RWStepRepr_RWAllAroundShapeAspect {
}

class RWStepRepr_RWApex {
}

class RWStepRepr_RWAssemblyComponentUsage {
}

class RWStepRepr_RWAssemblyComponentUsageSubstitute {
}

class RWStepRepr_RWBetweenShapeAspect {
}

class RWStepRepr_RWCentreOfSymmetry {
}

class RWStepRepr_RWCharacterizedRepresentation {
}

class RWStepRepr_RWCompGroupShAspAndCompShAspAndDatumFeatAndShAsp {
}

class RWStepRepr_RWCompShAspAndDatumFeatAndShAsp {
}

class RWStepRepr_RWCompositeGroupShapeAspect {
}

class RWStepRepr_RWCompositeShapeAspect {
}

class RWStepRepr_RWCompoundRepresentationItem {
}

class RWStepRepr_RWConfigurationDesign {
}

class RWStepRepr_RWConfigurationEffectivity {
}

class RWStepRepr_RWConfigurationItem {
}

class RWStepRepr_RWConstructiveGeometryRepresentation {
}

class RWStepRepr_RWConstructiveGeometryRepresentationRelationship {
}

class RWStepRepr_RWContinuosShapeAspect {
}

class RWStepRepr_RWDataEnvironment {
}

class RWStepRepr_RWDefinitionalRepresentation {
}

class RWStepRepr_RWDerivedShapeAspect {
}

class RWStepRepr_RWDescriptiveRepresentationItem {
}

class RWStepRepr_RWExtension {
}

class RWStepRepr_RWFeatureForDatumTargetRelationship {
}

class RWStepRepr_RWFunctionallyDefinedTransformation {
}

class RWStepRepr_RWGeometricAlignment {
}

class RWStepRepr_RWGlobalUncertaintyAssignedContext {
}

class RWStepRepr_RWGlobalUnitAssignedContext {
}

class RWStepRepr_RWIntegerRepresentationItem {
}

class RWStepRepr_RWItemDefinedTransformation {
}

class RWStepRepr_RWMakeFromUsageOption {
}

class RWStepRepr_RWMappedItem {
}

class RWStepRepr_RWMaterialDesignation {
}

class RWStepRepr_RWMaterialProperty {
}

class RWStepRepr_RWMaterialPropertyRepresentation {
}

class RWStepRepr_RWMeasureRepresentationItem {
}

class RWStepRepr_RWParallelOffset {
}

class RWStepRepr_RWParametricRepresentationContext {
}

class RWStepRepr_RWPerpendicularTo {
}

class RWStepRepr_RWProductConcept {
}

class RWStepRepr_RWProductDefinitionShape {
}

class RWStepRepr_RWPropertyDefinition {
}

class RWStepRepr_RWPropertyDefinitionRelationship {
}

class RWStepRepr_RWPropertyDefinitionRepresentation {
}

class RWStepRepr_RWQuantifiedAssemblyComponentUsage {
}

class RWStepRepr_RWReprItemAndLengthMeasureWithUnit {
}

class RWStepRepr_RWReprItemAndLengthMeasureWithUnitAndQRI {
}

class RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnit {
}

class RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnitAndQRI {
}

class RWStepRepr_RWRepresentation {
}

class RWStepRepr_RWRepresentationContext {
}

class RWStepRepr_RWRepresentationItem {
}

class RWStepRepr_RWRepresentationMap {
}

class RWStepRepr_RWRepresentationRelationship {
}

class RWStepRepr_RWRepresentationRelationshipWithTransformation {
}

class RWStepRepr_RWShapeAspect {
}

class RWStepRepr_RWShapeAspectDerivingRelationship {
}

class RWStepRepr_RWShapeAspectRelationship {
}

class RWStepRepr_RWShapeAspectTransition {
}

class RWStepRepr_RWShapeRepresentationRelationshipWithTransformation {
}

class RWStepRepr_RWSpecifiedHigherUsageOccurrence {
}

class RWStepRepr_RWStructuralResponseProperty {
}

class RWStepRepr_RWStructuralResponsePropertyDefinitionRepresentation {
}

class RWStepRepr_RWTangent {
}

class RWStepRepr_RWValueRepresentationItem {
}

class RWStepShape_RWAdvancedBrepShapeRepresentation {
}

class RWStepShape_RWAdvancedFace {
}

class RWStepShape_RWAngularLocation {
}

class RWStepShape_RWAngularSize {
}

class RWStepShape_RWBlock {
}

class RWStepShape_RWBooleanResult {
}

class RWStepShape_RWBoxDomain {
}

class RWStepShape_RWBoxedHalfSpace {
}

class RWStepShape_RWClosedShell {
}

class RWStepShape_RWCompoundShapeRepresentation {
}

class RWStepShape_RWConnectedEdgeSet {
}

class RWStepShape_RWConnectedFaceSet {
}

class RWStepShape_RWConnectedFaceShapeRepresentation {
}

class RWStepShape_RWConnectedFaceSubSet {
}

class RWStepShape_RWContextDependentShapeRepresentation {
}

class RWStepShape_RWCsgShapeRepresentation {
}

class RWStepShape_RWCsgSolid {
}

class RWStepShape_RWDefinitionalRepresentationAndShapeRepresentation {
}

class RWStepShape_RWDimensionalCharacteristicRepresentation {
}

class RWStepShape_RWDimensionalLocation {
}

class RWStepShape_RWDimensionalLocationWithPath {
}

class RWStepShape_RWDimensionalSize {
}

class RWStepShape_RWDimensionalSizeWithPath {
}

class RWStepShape_RWEdge {
}

class RWStepShape_RWEdgeBasedWireframeModel {
}

class RWStepShape_RWEdgeBasedWireframeShapeRepresentation {
}

class RWStepShape_RWExtrudedAreaSolid {
}

class RWStepShape_RWExtrudedFaceSolid {
}

class RWStepShape_RWFace {
}

class RWStepShape_RWFaceBasedSurfaceModel {
}

class RWStepShape_RWFaceOuterBound {
}

class RWStepShape_RWFaceSurface {
}

class RWStepShape_RWFacetedBrep {
}

class RWStepShape_RWFacetedBrepAndBrepWithVoids {
}

class RWStepShape_RWFacetedBrepShapeRepresentation {
}

class RWStepShape_RWGeometricCurveSet {
}

class RWStepShape_RWGeometricSet {
}

class RWStepShape_RWGeometricallyBoundedSurfaceShapeRepresentation {
}

class RWStepShape_RWGeometricallyBoundedWireframeShapeRepresentation {
}

class RWStepShape_RWHalfSpaceSolid {
}

class RWStepShape_RWLimitsAndFits {
}

class RWStepShape_RWLoop {
}

class RWStepShape_RWLoopAndPath {
}

class RWStepShape_RWManifoldSolidBrep {
}

class RWStepShape_RWManifoldSurfaceShapeRepresentation {
}

class RWStepShape_RWMeasureQualification {
}

class RWStepShape_RWMeasureRepresentationItemAndQualifiedRepresentationItem {
}

class RWStepShape_RWNonManifoldSurfaceShapeRepresentation {
}

class RWStepShape_RWOpenShell {
}

class RWStepShape_RWOrientedClosedShell {
}

class RWStepShape_RWOrientedEdge {
}

class RWStepShape_RWOrientedFace {
}

class RWStepShape_RWOrientedOpenShell {
}

class RWStepShape_RWOrientedPath {
}

class RWStepShape_RWPath {
}

class RWStepShape_RWPlusMinusTolerance {
}

class RWStepShape_RWPointRepresentation {
}

class RWStepShape_RWPolyLoop {
}

class RWStepShape_RWPrecisionQualifier {
}

class RWStepShape_RWQualifiedRepresentationItem {
}

class RWStepShape_RWRevolvedAreaSolid {
}

class RWStepShape_RWRevolvedFaceSolid {
}

class RWStepShape_RWRightAngularWedge {
}

class RWStepShape_RWRightCircularCone {
}

class RWStepShape_RWRightCircularCylinder {
}

class RWStepShape_RWSeamEdge {
}

class RWStepShape_RWShapeDefinitionRepresentation {
}

class RWStepShape_RWShapeDimensionRepresentation {
}

class RWStepShape_RWShapeRepresentation {
}

class RWStepShape_RWShapeRepresentationWithParameters {
}

class RWStepShape_RWShellBasedSurfaceModel {
}

class RWStepShape_RWSolidModel {
}

class RWStepShape_RWSolidReplica {
}

class RWStepShape_RWSphere {
}

class RWStepShape_RWSubedge {
}

class RWStepShape_RWSubface {
}

class RWStepShape_RWSweptAreaSolid {
}

class RWStepShape_RWSweptFaceSolid {
}

class RWStepShape_RWToleranceValue {
}

class RWStepShape_RWTopologicalRepresentationItem {
}

class RWStepShape_RWTorus {
}

class RWStepShape_RWTransitionalShapeRepresentation {
}

class RWStepShape_RWTypeQualifier {
}

class RWStepShape_RWValueFormatTypeQualifier {
}

class RWStepShape_RWVertex {
}

class RWStepShape_RWVertexLoop {
}

class RWStepShape_RWVertexPoint {
}

class RWStepVisual_RWAnnotationCurveOccurrence {
}

class RWStepVisual_RWAnnotationCurveOccurrenceAndAnnotationOccurrenceAndGeomReprItemAndReprItemAndStyledItem {
}

class RWStepVisual_RWAnnotationFillArea {
}

class RWStepVisual_RWAnnotationFillAreaOccurrence {
}

class RWStepVisual_RWAnnotationOccurrence {
}

class RWStepVisual_RWAnnotationPlane {
}

class RWStepVisual_RWAreaInSet {
}

class RWStepVisual_RWBackgroundColour {
}

class RWStepVisual_RWCameraImage {
}

class RWStepVisual_RWCameraModel {
}

class RWStepVisual_RWCameraModelD2 {
}

class RWStepVisual_RWCameraModelD3 {
}

class RWStepVisual_RWCameraModelD3MultiClipping {
}

class RWStepVisual_RWCameraModelD3MultiClippingIntersection {
}

class RWStepVisual_RWCameraModelD3MultiClippingUnion {
}

class RWStepVisual_RWCameraUsage {
}

class RWStepVisual_RWCharacterizedObjectAndCharacterizedRepresentationAndDraughtingModelAndRepresentation {
}

class RWStepVisual_RWColour {
}

class RWStepVisual_RWColourRgb {
}

class RWStepVisual_RWColourSpecification {
}

class RWStepVisual_RWCompositeText {
}

class RWStepVisual_RWCompositeTextWithExtent {
}

class RWStepVisual_RWContextDependentInvisibility {
}

class RWStepVisual_RWContextDependentOverRidingStyledItem {
}

class RWStepVisual_RWCoordinatesList {
}

class RWStepVisual_RWCurveStyle {
}

class RWStepVisual_RWCurveStyleFont {
}

class RWStepVisual_RWCurveStyleFontPattern {
}

class RWStepVisual_RWDraughtingCallout {
}

class RWStepVisual_RWDraughtingModel {
}

class RWStepVisual_RWDraughtingPreDefinedColour {
}

class RWStepVisual_RWDraughtingPreDefinedCurveFont {
}

class RWStepVisual_RWExternallyDefinedCurveFont {
}

class RWStepVisual_RWFillAreaStyle {
}

class RWStepVisual_RWFillAreaStyleColour {
}

class RWStepVisual_RWInvisibility {
}

class RWStepVisual_RWMechanicalDesignGeometricPresentationArea {
}

class RWStepVisual_RWMechanicalDesignGeometricPresentationRepresentation {
}

class RWStepVisual_RWOverRidingStyledItem {
}

class RWStepVisual_RWPlanarBox {
}

class RWStepVisual_RWPlanarExtent {
}

class RWStepVisual_RWPointStyle {
}

class RWStepVisual_RWPreDefinedColour {
}

class RWStepVisual_RWPreDefinedCurveFont {
}

class RWStepVisual_RWPreDefinedItem {
}

class RWStepVisual_RWPresentationArea {
}

class RWStepVisual_RWPresentationLayerAssignment {
}

class RWStepVisual_RWPresentationLayerUsage {
}

class RWStepVisual_RWPresentationRepresentation {
}

class RWStepVisual_RWPresentationSet {
}

class RWStepVisual_RWPresentationSize {
}

class RWStepVisual_RWPresentationStyleAssignment {
}

class RWStepVisual_RWPresentationStyleByContext {
}

class RWStepVisual_RWPresentationView {
}

class RWStepVisual_RWPresentedItemRepresentation {
}

class RWStepVisual_RWStyledItem {
}

class RWStepVisual_RWSurfaceSideStyle {
}

class RWStepVisual_RWSurfaceStyleBoundary {
}

class RWStepVisual_RWSurfaceStyleControlGrid {
}

class RWStepVisual_RWSurfaceStyleFillArea {
}

class RWStepVisual_RWSurfaceStyleParameterLine {
}

class RWStepVisual_RWSurfaceStyleSegmentationCurve {
}

class RWStepVisual_RWSurfaceStyleSilhouette {
}

class RWStepVisual_RWSurfaceStyleUsage {
}

class RWStepVisual_RWTemplate {
}

class RWStepVisual_RWTemplateInstance {
}

class RWStepVisual_RWTessellatedAnnotationOccurrence {
}

class RWStepVisual_RWTessellatedCurveSet {
}

class RWStepVisual_RWTessellatedGeometricSet {
}

class RWStepVisual_RWTessellatedItem {
}

class RWStepVisual_RWTextLiteral {
}

class RWStepVisual_RWTextStyle {
}

class RWStepVisual_RWTextStyleForDefinedFont {
}

class RWStepVisual_RWTextStyleWithBoxCharacteristics {
}

class RWStepVisual_RWViewVolume {
}

class RWStl {
}

class RWStl_Reader extends Standard_Transient {
}

class Resource_LexicalCompare {
}

class Resource_Manager extends Standard_Transient {
}

class Resource_NoSuchResource extends Standard_NoSuchObject {
}

class Resource_Unicode {
}

class STEPCAFControl_ActorWrite extends STEPControl_ActorWrite {
}

class STEPCAFControl_Controller extends STEPControl_Controller {
}

class STEPCAFControl_ExternFile extends Standard_Transient {
}

class STEPCAFControl_GDTProperty {
}

class STEPCAFControl_Reader {
}

class STEPCAFControl_Writer {
}

class STEPConstruct {
}

class STEPConstruct_AP203Context {
}

class STEPConstruct_Assembly {
}

class STEPConstruct_ContextTool {
}

class STEPConstruct_ExternRefs extends STEPConstruct_Tool {
}

class STEPConstruct_Part {
}

class STEPConstruct_PointHasher {
}

class STEPConstruct_Styles extends STEPConstruct_Tool {
}

class STEPConstruct_Tool {
}

class STEPConstruct_UnitContext {
}

class STEPConstruct_ValidationProps extends STEPConstruct_Tool {
}

class STEPControl_ActorRead extends Transfer_ActorOfTransientProcess {
}

class STEPControl_ActorWrite extends Transfer_ActorOfFinderProcess {
}

class STEPControl_Controller extends XSControl_Controller {
}

class STEPControl_Reader extends XSControl_Reader {
}

class STEPControl_Writer {
}

class STEPEdit {
}

class STEPEdit_EditContext extends IFSelect_Editor {
}

class STEPEdit_EditSDR extends IFSelect_Editor {
}

class STEPSelections_AssemblyComponent extends Standard_Transient {
}

class STEPSelections_AssemblyExplorer {
}

class STEPSelections_AssemblyLink extends Standard_Transient {
}

class STEPSelections_SelectAssembly extends IFSelect_SelectExplore {
}

class STEPSelections_SelectDerived extends StepSelect_StepType {
}

class STEPSelections_SelectFaces extends IFSelect_SelectExplore {
}

class STEPSelections_SelectForTransfer extends XSControl_SelectForTransfer {
}

class STEPSelections_SelectGSCurves extends IFSelect_SelectExplore {
}

class STEPSelections_SelectInstances extends IFSelect_SelectExplore {
}

class Select3D_BVHIndexBuffer extends Graphic3d_Buffer {
}

class Select3D_InteriorSensitivePointSet extends Select3D_SensitiveSet {
}

class Select3D_PointData {
}

class Select3D_SensitiveBox extends Select3D_SensitiveEntity {
}

class Select3D_SensitiveCircle extends Select3D_SensitivePoly {
}

class Select3D_SensitiveCurve extends Select3D_SensitivePoly {
}

class Select3D_SensitiveEntity extends Standard_Transient {
}

class Select3D_SensitiveFace extends Select3D_SensitiveEntity {
}

class Select3D_SensitiveGroup extends Select3D_SensitiveSet {
}

class Select3D_SensitivePoint extends Select3D_SensitiveEntity {
}

class Select3D_SensitivePoly extends Select3D_SensitiveSet {
}

class Select3D_SensitivePrimitiveArray extends Select3D_SensitiveSet {
}

class Select3D_SensitiveSegment extends Select3D_SensitiveEntity {
}

class Select3D_SensitiveSet extends Select3D_SensitiveEntity {
}

class Select3D_SensitiveTriangle extends Select3D_SensitiveEntity {
}

class Select3D_SensitiveTriangulation extends Select3D_SensitiveSet {
}

class Select3D_SensitiveWire extends Select3D_SensitiveSet {
}

class SelectBasics {
}

class SelectBasics_SelectingVolumeManager {
}

class SelectMgr_AndFilter extends SelectMgr_CompositionFilter {
}

class SelectMgr_BaseFrustum extends Standard_Transient {
}

class SelectMgr_CompositionFilter extends SelectMgr_Filter {
}

class SelectMgr_EntityOwner extends Standard_Transient {
}

class SelectMgr_Filter extends Standard_Transient {
}

class SelectMgr_FrustumBuilder extends Standard_Transient {
}

class SelectMgr_OrFilter extends SelectMgr_CompositionFilter {
}

}

class SelectMgr_SelectableObject extends PrsMgr_PresentableObject {
}

class SelectMgr_SelectableObjectSet {
}

class SelectMgr_SelectingVolumeManager extends SelectBasics_SelectingVolumeManager {
}

class SelectMgr_Selection extends Standard_Transient {
}

class SelectMgr_SelectionManager extends Standard_Transient {
}

class SelectMgr_SensitiveEntity extends Standard_Transient {
}

class SelectMgr_SensitiveEntitySet extends BVH_PrimitiveSet3d {
}

class SelectMgr_SortCriterion {
}

class SelectMgr_ToleranceMap {
}

}

class SelectMgr_TriangularFrustumSet extends SelectMgr_BaseFrustum {
}

class SelectMgr_ViewClipRange {
}

class SelectMgr_ViewerSelector extends Standard_Transient {
}

class ShapeAlgo {
}

class ShapeAlgo_AlgoContainer extends Standard_Transient {
}

class ShapeAlgo_ToolContainer extends Standard_Transient {
}

class ShapeAnalysis {
}

}

class ShapeAnalysis_CheckSmallFace {
}

class ShapeAnalysis_Curve {
}

class ShapeAnalysis_Edge {
}

class ShapeAnalysis_FreeBoundData extends Standard_Transient {
}

class ShapeAnalysis_FreeBounds {
}

class ShapeAnalysis_FreeBoundsProperties {
}

class ShapeAnalysis_Geom {
}

class ShapeAnalysis_ShapeContents {
}

class ShapeAnalysis_ShapeTolerance {
}

class ShapeAnalysis_Shell {
}

class ShapeAnalysis_Surface extends Standard_Transient {
}

class ShapeAnalysis_TransferParameters extends Standard_Transient {
}

class ShapeAnalysis_TransferParametersProj extends ShapeAnalysis_TransferParameters {
}

class ShapeAnalysis_Wire extends Standard_Transient {
}

class ShapeAnalysis_WireOrder {
}

class ShapeAnalysis_WireVertex {
}

class ShapeBuild {
}

class ShapeBuild_Edge {
}

class ShapeBuild_ReShape extends BRepTools_ReShape {
}

class ShapeBuild_Vertex {
}

class ShapeConstruct {
}

class ShapeConstruct_Curve {
}

class ShapeConstruct_MakeTriangulation extends BRepBuilderAPI_MakeShape {
}

class ShapeConstruct_ProjectCurveOnSurface extends Standard_Transient {
}

class ShapeCustom {
}

class ShapeCustom_BSplineRestriction extends ShapeCustom_Modification {
}

class ShapeCustom_ConvertToBSpline extends ShapeCustom_Modification {
}

class ShapeCustom_ConvertToRevolution extends ShapeCustom_Modification {
}

class ShapeCustom_Curve {
}

class ShapeCustom_Curve2d {
}

class ShapeCustom_DirectModification extends ShapeCustom_Modification {
}

class ShapeCustom_Modification extends BRepTools_Modification {
}

class ShapeCustom_RestrictionParameters extends Standard_Transient {
}

class ShapeCustom_Surface {
}

class ShapeCustom_SweptToElementary extends ShapeCustom_Modification {
}

class ShapeCustom_TrsfModification extends BRepTools_TrsfModification {
}

class ShapeExtend {
}

class ShapeExtend_BasicMsgRegistrator extends Standard_Transient {
}

class ShapeExtend_ComplexCurve extends Geom_Curve {
}

class ShapeExtend_CompositeSurface extends Geom_Surface {
}

class ShapeExtend_Explorer {
}

class ShapeExtend_MsgRegistrator extends ShapeExtend_BasicMsgRegistrator {
}

class ShapeExtend_WireData extends Standard_Transient {
}

class ShapeFix {
}

class ShapeFix_ComposeShell extends ShapeFix_Root {
}

class ShapeFix_EdgeConnect {
}

class ShapeFix_EdgeProjAux extends Standard_Transient {
}

class ShapeFix_Face extends ShapeFix_Root {
}

class ShapeFix_FaceConnect {
}

class ShapeFix_FixSmallFace extends ShapeFix_Root {
}

class ShapeFix_FixSmallSolid extends ShapeFix_Root {
}

class ShapeFix_FreeBounds {
}

class ShapeFix_IntersectionTool {
}

class ShapeFix_Root extends Standard_Transient {
}

class ShapeFix_Shape extends ShapeFix_Root {
}

class ShapeFix_ShapeTolerance {
}

class ShapeFix_Shell extends ShapeFix_Root {
}

class ShapeFix_Solid extends ShapeFix_Root {
}

class ShapeFix_SplitCommonVertex extends ShapeFix_Root {
}

class ShapeFix_SplitTool {
}

class ShapeFix_Wire extends ShapeFix_Root {
}

class ShapeFix_WireVertex {
}

class ShapeFix_Wireframe extends ShapeFix_Root {
}

class ShapePersistent {
}

class ShapePersistent_HArray1 {
}

class ShapePersistent_HArray2 {
}

class ShapePersistent_HSequence {
}

class ShapeProcess {
}

class ShapeProcessAPI_ApplySequence {
}

class ShapeProcess_Context extends Standard_Transient {
}

class ShapeProcess_OperLibrary {
}

class ShapeProcess_Operator extends Standard_Transient {
}

class ShapeProcess_ShapeContext extends ShapeProcess_Context {
}

class ShapeProcess_UOperator extends ShapeProcess_Operator {
}

class ShapeUpgrade {
}

class ShapeUpgrade_ClosedEdgeDivide extends ShapeUpgrade_EdgeDivide {
}

class ShapeUpgrade_ClosedFaceDivide extends ShapeUpgrade_FaceDivide {
}

class ShapeUpgrade_ConvertCurve2dToBezier extends ShapeUpgrade_SplitCurve2d {
}

class ShapeUpgrade_ConvertCurve3dToBezier extends ShapeUpgrade_SplitCurve3d {
}

class ShapeUpgrade_ConvertSurfaceToBezierBasis extends ShapeUpgrade_SplitSurface {
}

class ShapeUpgrade_EdgeDivide extends ShapeUpgrade_Tool {
}

class ShapeUpgrade_FaceDivide extends ShapeUpgrade_Tool {
}

class ShapeUpgrade_FaceDivideArea extends ShapeUpgrade_FaceDivide {
}

class ShapeUpgrade_FixSmallBezierCurves extends ShapeUpgrade_FixSmallCurves {
}

class ShapeUpgrade_FixSmallCurves extends ShapeUpgrade_Tool {
}

class ShapeUpgrade_RemoveInternalWires extends ShapeUpgrade_Tool {
}

class ShapeUpgrade_RemoveLocations extends Standard_Transient {
}

class ShapeUpgrade_ShapeConvertToBezier extends ShapeUpgrade_ShapeDivide {
}

class ShapeUpgrade_ShapeDivide {
}

class ShapeUpgrade_ShapeDivideAngle extends ShapeUpgrade_ShapeDivide {
}

class ShapeUpgrade_ShapeDivideArea extends ShapeUpgrade_ShapeDivide {
}

class ShapeUpgrade_ShapeDivideClosed extends ShapeUpgrade_ShapeDivide {
}

class ShapeUpgrade_ShapeDivideClosedEdges extends ShapeUpgrade_ShapeDivide {
}

class ShapeUpgrade_ShapeDivideContinuity extends ShapeUpgrade_ShapeDivide {
}

class ShapeUpgrade_ShellSewing {
}

class ShapeUpgrade_SplitCurve extends Standard_Transient {
}

class ShapeUpgrade_SplitCurve2d extends ShapeUpgrade_SplitCurve {
}

class ShapeUpgrade_SplitCurve2dContinuity extends ShapeUpgrade_SplitCurve2d {
}

class ShapeUpgrade_SplitCurve3d extends ShapeUpgrade_SplitCurve {
}

class ShapeUpgrade_SplitCurve3dContinuity extends ShapeUpgrade_SplitCurve3d {
}

class ShapeUpgrade_SplitSurface extends Standard_Transient {
}

class ShapeUpgrade_SplitSurfaceAngle extends ShapeUpgrade_SplitSurface {
}

class ShapeUpgrade_SplitSurfaceArea extends ShapeUpgrade_SplitSurface {
}

class ShapeUpgrade_SplitSurfaceContinuity extends ShapeUpgrade_SplitSurface {
}

class ShapeUpgrade_Tool extends Standard_Transient {
}

class ShapeUpgrade_UnifySameDomain extends Standard_Transient {
}

class ShapeUpgrade_WireDivide extends ShapeUpgrade_Tool {
}

class Standard {
}

class Standard_AbortiveTransaction extends Standard_Failure {
}

}

class Standard_CLocaleSentry {
}

class Standard_Condition {
}

class Standard_ConstructionError extends Standard_DomainError {
}

class Standard_DimensionError extends Standard_DomainError {
}

class Standard_DimensionMismatch extends Standard_DimensionError {
}

class Standard_DivideByZero extends Standard_NumericError {
}

class Standard_DomainError extends Standard_Failure {
}

class Standard_Dump {
}

class Standard_DumpSentry {
}

class Standard_Failure extends Standard_Transient {
}

class Standard_GUID {
}

class Standard_ImmutableObject extends Standard_DomainError {
}

class Standard_LicenseError extends Standard_Failure {
}

class Standard_LicenseNotFound extends Standard_LicenseError {
}

class Standard_MMgrOpt extends Standard_MMgrRoot {
}

class Standard_MMgrRaw extends Standard_MMgrRoot {
}

class Standard_MMgrRoot {
}

class Standard_MMgrTBBalloc extends Standard_MMgrRoot {
}

class Standard_MultiplyDefined extends Standard_DomainError {
}

}

class Standard_NegativeValue extends Standard_RangeError {
}

class Standard_NoMoreObject extends Standard_DomainError {
}

class Standard_NoSuchObject extends Standard_DomainError {
}

class Standard_NotImplemented extends Standard_ProgramError {
}

class Standard_NullObject extends Standard_DomainError {
}

class Standard_NullValue extends Standard_RangeError {
}

class Standard_NumericError extends Standard_Failure {
}

class Standard_OutOfMemory extends Standard_ProgramError {
}

class Standard_OutOfRange extends Standard_RangeError {
}

class Standard_Overflow extends Standard_NumericError {
}

class Standard_Persistent extends Standard_Transient {
}

class Standard_ProgramError extends Standard_Failure {
}

class Standard_RangeError extends Standard_DomainError {
}

class Standard_ReadBuffer {
}

class Standard_ReadLineBuffer {
}

class Standard_TooManyUsers extends Standard_LicenseError {
}

class Standard_Transient {
}

class Standard_Type extends Standard_Transient {
}

class Standard_TypeMismatch extends Standard_DomainError {
}

class Standard_Underflow extends Standard_NumericError {
}

class StdDrivers {
}

class StdDrivers_DocumentRetrievalDriver extends StdLDrivers_DocumentRetrievalDriver {
}

class StdFail_InfiniteSolutions extends Standard_Failure {
}

class StdFail_NotDone extends Standard_Failure {
}

class StdFail_Undefined extends Standard_Failure {
}

class StdFail_UndefinedDerivative extends Standard_DomainError {
}

class StdFail_UndefinedValue extends Standard_DomainError {
}

class StdLDrivers {
}

class StdLDrivers_DocumentRetrievalDriver extends PCDM_RetrievalDriver {
}

class StdLPersistent {
}

class StdLPersistent_Collection {
}

class StdLPersistent_Data extends StdObjMgt_Persistent {
}

class StdLPersistent_Dependency {
}

class StdLPersistent_Document extends StdObjMgt_Persistent {
}

}

class StdLPersistent_HArray1 {
}

class StdLPersistent_HArray2 {
}

class StdLPersistent_HString {
}

}

}

}

class StdLPersistent_Value {
}

}

class StdLPersistent_Void {
}

}

}

class StdObjMgt_Persistent extends Standard_Transient {
}

class StdObjMgt_ReadData {
}

class StdObjMgt_SharedObject {
}

class StdObjMgt_WriteData {
}

class StdObject_Location {
}

class StdObject_Shape {
}

class StdPersistent {
}

class StdPersistent_DataXtd {
}

}

}

class StdPersistent_HArray1 {
}

class StdPersistent_Naming {
}

class StdPersistent_PPrsStd {
}

class StdPersistent_TopoDS {
}

class StdPrs_BndBox extends Prs3d_Root {
}

class StdPrs_Curve extends Prs3d_Root {
}

class StdPrs_DeflectionCurve extends Prs3d_Root {
}

class StdPrs_HLRPolyShape extends Prs3d_Root {
}

class StdPrs_HLRShape extends Prs3d_Root {
}

class StdPrs_HLRToolShape {
}

class StdPrs_Isolines extends Prs3d_Root {
}

class StdPrs_Plane extends Prs3d_Root {
}

class StdPrs_PoleCurve extends Prs3d_Root {
}

class StdPrs_ShadedShape extends Prs3d_Root {
}

class StdPrs_ShadedSurface extends Prs3d_Root {
}

class StdPrs_ToolPoint {
}

class StdPrs_ToolRFace {
}

class StdPrs_ToolTriangulatedShape {
}

class StdPrs_ToolVertex {
}

class StdPrs_WFDeflectionRestrictedFace extends Prs3d_Root {
}

class StdPrs_WFDeflectionSurface extends Prs3d_Root {
}

class StdPrs_WFPoleSurface extends Prs3d_Root {
}

class StdPrs_WFRestrictedFace extends Prs3d_Root {
}

class StdPrs_WFShape extends Prs3d_Root {
}

class StdPrs_WFSurface extends Prs3d_Root {
}

class StdSelect {
}

class StdSelect_BRepOwner extends SelectMgr_EntityOwner {
}

class StdSelect_BRepSelectionTool {
}

class StdSelect_EdgeFilter extends SelectMgr_Filter {
}

class StdSelect_FaceFilter extends SelectMgr_Filter {
}

class StdSelect_Prs extends Prs3d_Presentation {
}

class StdSelect_Shape extends PrsMgr_PresentableObject {
}

class StdSelect_ShapeTypeFilter extends SelectMgr_Filter {
}

class StdSelect_ViewerSelector3d extends SelectMgr_ViewerSelector {
}

class StdStorage {
}

class StdStorage_Bucket {
}

class StdStorage_BucketIterator {
}

class StdStorage_BucketOfPersistent {
}

class StdStorage_Data extends Standard_Transient {
}

class StdStorage_HeaderData extends Standard_Transient {
}

class StdStorage_Root extends Standard_Transient {
}

class StdStorage_RootData extends Standard_Transient {
}

class StdStorage_TypeData extends Standard_Transient {
}

class StepAP203_ApprovedItem extends StepData_SelectType {
}

class StepAP203_CcDesignApproval extends StepBasic_ApprovalAssignment {
}

class StepAP203_CcDesignCertification extends StepBasic_CertificationAssignment {
}

class StepAP203_CcDesignContract extends StepBasic_ContractAssignment {
}

class StepAP203_CcDesignDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
}

class StepAP203_CcDesignPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
}

class StepAP203_CcDesignSecurityClassification extends StepBasic_SecurityClassificationAssignment {
}

class StepAP203_CcDesignSpecificationReference extends StepBasic_DocumentReference {
}

class StepAP203_CertifiedItem extends StepData_SelectType {
}

class StepAP203_Change extends StepBasic_ActionAssignment {
}

class StepAP203_ChangeRequest extends StepBasic_ActionRequestAssignment {
}

class StepAP203_ChangeRequestItem extends StepData_SelectType {
}

class StepAP203_ClassifiedItem extends StepData_SelectType {
}

class StepAP203_ContractedItem extends StepData_SelectType {
}

class StepAP203_DateTimeItem extends StepData_SelectType {
}

class StepAP203_PersonOrganizationItem extends StepData_SelectType {
}

class StepAP203_SpecifiedItem extends StepData_SelectType {
}

class StepAP203_StartRequest extends StepBasic_ActionRequestAssignment {
}

class StepAP203_StartRequestItem extends StepData_SelectType {
}

class StepAP203_StartWork extends StepBasic_ActionAssignment {
}

class StepAP203_WorkItem extends StepData_SelectType {
}

class StepAP209_Construct extends STEPConstruct_Tool {
}

class StepAP214 {
}

class StepAP214_AppliedApprovalAssignment extends StepBasic_ApprovalAssignment {
}

class StepAP214_AppliedDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
}

class StepAP214_AppliedDateAssignment extends StepBasic_DateAssignment {
}

class StepAP214_AppliedDocumentReference extends StepBasic_DocumentReference {
}

class StepAP214_AppliedExternalIdentificationAssignment extends StepBasic_ExternalIdentificationAssignment {
}

class StepAP214_AppliedGroupAssignment extends StepBasic_GroupAssignment {
}

class StepAP214_AppliedOrganizationAssignment extends StepBasic_OrganizationAssignment {
}

class StepAP214_AppliedPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
}

class StepAP214_AppliedPresentedItem extends StepVisual_PresentedItem {
}

class StepAP214_AppliedSecurityClassificationAssignment extends StepBasic_SecurityClassificationAssignment {
}

class StepAP214_ApprovalItem extends StepData_SelectType {
}

class StepAP214_AutoDesignActualDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
}

class StepAP214_AutoDesignActualDateAssignment extends StepBasic_DateAssignment {
}

class StepAP214_AutoDesignApprovalAssignment extends StepBasic_ApprovalAssignment {
}

class StepAP214_AutoDesignDateAndPersonAssignment extends StepBasic_PersonAndOrganizationAssignment {
}

class StepAP214_AutoDesignDateAndPersonItem extends StepData_SelectType {
}

class StepAP214_AutoDesignDateAndTimeItem extends StepData_SelectType {
}

class StepAP214_AutoDesignDatedItem extends StepData_SelectType {
}

class StepAP214_AutoDesignDocumentReference extends StepBasic_DocumentReference {
}

class StepAP214_AutoDesignGeneralOrgItem extends StepData_SelectType {
}

class StepAP214_AutoDesignGroupAssignment extends StepBasic_GroupAssignment {
}

class StepAP214_AutoDesignGroupedItem extends StepData_SelectType {
}

class StepAP214_AutoDesignNominalDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
}

class StepAP214_AutoDesignNominalDateAssignment extends StepBasic_DateAssignment {
}

class StepAP214_AutoDesignOrganizationAssignment extends StepBasic_OrganizationAssignment {
}

class StepAP214_AutoDesignOrganizationItem extends StepAP214_AutoDesignGeneralOrgItem {
}

class StepAP214_AutoDesignPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
}

class StepAP214_AutoDesignPresentedItem extends StepVisual_PresentedItem {
}

class StepAP214_AutoDesignPresentedItemSelect extends StepData_SelectType {
}

class StepAP214_AutoDesignReferencingItem extends StepData_SelectType {
}

class StepAP214_AutoDesignSecurityClassificationAssignment extends StepBasic_SecurityClassificationAssignment {
}

class StepAP214_Class extends StepBasic_Group {
}

class StepAP214_DateAndTimeItem extends StepAP214_ApprovalItem {
}

class StepAP214_DateItem extends StepAP214_ApprovalItem {
}

class StepAP214_DocumentReferenceItem extends StepData_SelectType {
}

class StepAP214_ExternalIdentificationItem extends StepData_SelectType {
}

class StepAP214_ExternallyDefinedClass extends StepAP214_Class {
}

class StepAP214_ExternallyDefinedGeneralProperty extends StepBasic_GeneralProperty {
}

class StepAP214_GroupItem extends StepData_SelectType {
}

class StepAP214_OrganizationItem extends StepAP214_ApprovalItem {
}

class StepAP214_PersonAndOrganizationItem extends StepAP214_ApprovalItem {
}

class StepAP214_PresentedItemSelect extends StepData_SelectType {
}

class StepAP214_Protocol extends StepData_Protocol {
}

class StepAP214_RepItemGroup extends StepBasic_Group {
}

class StepAP214_SecurityClassificationItem extends StepAP214_ApprovalItem {
}

class StepAP242_DraughtingModelItemAssociation extends StepAP242_ItemIdentifiedRepresentationUsage {
}

class StepAP242_GeometricItemSpecificUsage extends StepAP242_ItemIdentifiedRepresentationUsage {
}

class StepAP242_IdAttribute extends Standard_Transient {
}

class StepAP242_IdAttributeSelect extends StepData_SelectType {
}

class StepAP242_ItemIdentifiedRepresentationUsage extends Standard_Transient {
}

class StepAP242_ItemIdentifiedRepresentationUsageDefinition extends StepData_SelectType {
}

class StepBasic_Action extends Standard_Transient {
}

class StepBasic_ActionAssignment extends Standard_Transient {
}

class StepBasic_ActionMethod extends Standard_Transient {
}

class StepBasic_ActionRequestAssignment extends Standard_Transient {
}

class StepBasic_ActionRequestSolution extends Standard_Transient {
}

class StepBasic_Address extends Standard_Transient {
}

class StepBasic_ApplicationContext extends Standard_Transient {
}

class StepBasic_ApplicationContextElement extends Standard_Transient {
}

class StepBasic_ApplicationProtocolDefinition extends Standard_Transient {
}

class StepBasic_Approval extends Standard_Transient {
}

class StepBasic_ApprovalAssignment extends Standard_Transient {
}

class StepBasic_ApprovalDateTime extends Standard_Transient {
}

class StepBasic_ApprovalPersonOrganization extends Standard_Transient {
}

class StepBasic_ApprovalRelationship extends Standard_Transient {
}

class StepBasic_ApprovalRole extends Standard_Transient {
}

class StepBasic_ApprovalStatus extends Standard_Transient {
}

class StepBasic_AreaUnit extends StepBasic_NamedUnit {
}

class StepBasic_CalendarDate extends StepBasic_Date {
}

class StepBasic_Certification extends Standard_Transient {
}

class StepBasic_CertificationAssignment extends Standard_Transient {
}

class StepBasic_CertificationType extends Standard_Transient {
}

class StepBasic_CharacterizedObject extends Standard_Transient {
}

class StepBasic_Contract extends Standard_Transient {
}

class StepBasic_ContractAssignment extends Standard_Transient {
}

class StepBasic_ContractType extends Standard_Transient {
}

class StepBasic_ConversionBasedUnit extends StepBasic_NamedUnit {
}

class StepBasic_ConversionBasedUnitAndAreaUnit extends StepBasic_ConversionBasedUnit {
}

class StepBasic_ConversionBasedUnitAndLengthUnit extends StepBasic_ConversionBasedUnit {
}

class StepBasic_ConversionBasedUnitAndMassUnit extends StepBasic_ConversionBasedUnit {
}

class StepBasic_ConversionBasedUnitAndPlaneAngleUnit extends StepBasic_ConversionBasedUnit {
}

class StepBasic_ConversionBasedUnitAndRatioUnit extends StepBasic_ConversionBasedUnit {
}

class StepBasic_ConversionBasedUnitAndSolidAngleUnit extends StepBasic_ConversionBasedUnit {
}

class StepBasic_ConversionBasedUnitAndTimeUnit extends StepBasic_ConversionBasedUnit {
}

class StepBasic_ConversionBasedUnitAndVolumeUnit extends StepBasic_ConversionBasedUnit {
}

class StepBasic_CoordinatedUniversalTimeOffset extends Standard_Transient {
}

class StepBasic_Date extends Standard_Transient {
}

class StepBasic_DateAndTime extends Standard_Transient {
}

class StepBasic_DateAndTimeAssignment extends Standard_Transient {
}

class StepBasic_DateAssignment extends Standard_Transient {
}

class StepBasic_DateRole extends Standard_Transient {
}

class StepBasic_DateTimeRole extends Standard_Transient {
}

class StepBasic_DateTimeSelect extends StepData_SelectType {
}

class StepBasic_DerivedUnit extends Standard_Transient {
}

class StepBasic_DerivedUnitElement extends Standard_Transient {
}

class StepBasic_DesignContext extends StepBasic_ProductDefinitionContext {
}

class StepBasic_DigitalDocument extends StepBasic_Document {
}

class StepBasic_DimensionalExponents extends Standard_Transient {
}

class StepBasic_Document extends Standard_Transient {
}

class StepBasic_DocumentFile extends StepBasic_Document {
}

class StepBasic_DocumentProductAssociation extends Standard_Transient {
}

class StepBasic_DocumentProductEquivalence extends StepBasic_DocumentProductAssociation {
}

class StepBasic_DocumentReference extends Standard_Transient {
}

class StepBasic_DocumentRelationship extends Standard_Transient {
}

class StepBasic_DocumentRepresentationType extends Standard_Transient {
}

class StepBasic_DocumentType extends Standard_Transient {
}

class StepBasic_DocumentUsageConstraint extends Standard_Transient {
}

class StepBasic_Effectivity extends Standard_Transient {
}

class StepBasic_EffectivityAssignment extends Standard_Transient {
}

class StepBasic_EulerAngles extends Standard_Transient {
}

class StepBasic_ExternalIdentificationAssignment extends StepBasic_IdentificationAssignment {
}

class StepBasic_ExternalSource extends Standard_Transient {
}

class StepBasic_ExternallyDefinedItem extends Standard_Transient {
}

class StepBasic_GeneralProperty extends Standard_Transient {
}

class StepBasic_Group extends Standard_Transient {
}

class StepBasic_GroupAssignment extends Standard_Transient {
}

class StepBasic_GroupRelationship extends Standard_Transient {
}

class StepBasic_IdentificationAssignment extends Standard_Transient {
}

class StepBasic_IdentificationRole extends Standard_Transient {
}

class StepBasic_LengthMeasureWithUnit extends StepBasic_MeasureWithUnit {
}

class StepBasic_LengthUnit extends StepBasic_NamedUnit {
}

class StepBasic_LocalTime extends Standard_Transient {
}

class StepBasic_MassMeasureWithUnit extends StepBasic_MeasureWithUnit {
}

class StepBasic_MassUnit extends StepBasic_NamedUnit {
}

class StepBasic_MeasureValueMember extends StepData_SelectReal {
}

class StepBasic_MeasureWithUnit extends Standard_Transient {
}

class StepBasic_MechanicalContext extends StepBasic_ProductContext {
}

class StepBasic_NameAssignment extends Standard_Transient {
}

class StepBasic_NamedUnit extends Standard_Transient {
}

class StepBasic_ObjectRole extends Standard_Transient {
}

class StepBasic_OrdinalDate extends StepBasic_Date {
}

class StepBasic_Organization extends Standard_Transient {
}

class StepBasic_OrganizationAssignment extends Standard_Transient {
}

class StepBasic_OrganizationRole extends Standard_Transient {
}

class StepBasic_OrganizationalAddress extends StepBasic_Address {
}

class StepBasic_Person extends Standard_Transient {
}

class StepBasic_PersonAndOrganization extends Standard_Transient {
}

class StepBasic_PersonAndOrganizationAssignment extends Standard_Transient {
}

class StepBasic_PersonAndOrganizationRole extends Standard_Transient {
}

class StepBasic_PersonOrganizationSelect extends StepData_SelectType {
}

class StepBasic_PersonalAddress extends StepBasic_Address {
}

class StepBasic_PhysicallyModeledProductDefinition extends StepBasic_ProductDefinition {
}

class StepBasic_PlaneAngleMeasureWithUnit extends StepBasic_MeasureWithUnit {
}

class StepBasic_PlaneAngleUnit extends StepBasic_NamedUnit {
}

class StepBasic_Product extends Standard_Transient {
}

class StepBasic_ProductCategory extends Standard_Transient {
}

class StepBasic_ProductCategoryRelationship extends Standard_Transient {
}

class StepBasic_ProductConceptContext extends StepBasic_ApplicationContextElement {
}

class StepBasic_ProductContext extends StepBasic_ApplicationContextElement {
}

class StepBasic_ProductDefinition extends Standard_Transient {
}

class StepBasic_ProductDefinitionContext extends StepBasic_ApplicationContextElement {
}

class StepBasic_ProductDefinitionEffectivity extends StepBasic_Effectivity {
}

class StepBasic_ProductDefinitionFormation extends Standard_Transient {
}

class StepBasic_ProductDefinitionFormationRelationship extends Standard_Transient {
}

class StepBasic_ProductDefinitionFormationWithSpecifiedSource extends StepBasic_ProductDefinitionFormation {
}

class StepBasic_ProductDefinitionOrReference extends StepData_SelectType {
}

class StepBasic_ProductDefinitionReference extends Standard_Transient {
}

class StepBasic_ProductDefinitionReferenceWithLocalRepresentation extends StepBasic_ProductDefinition {
}

class StepBasic_ProductDefinitionRelationship extends Standard_Transient {
}

class StepBasic_ProductDefinitionWithAssociatedDocuments extends StepBasic_ProductDefinition {
}

class StepBasic_ProductOrFormationOrDefinition extends StepData_SelectType {
}

class StepBasic_ProductRelatedProductCategory extends StepBasic_ProductCategory {
}

class StepBasic_ProductType extends StepBasic_ProductRelatedProductCategory {
}

class StepBasic_RatioMeasureWithUnit extends StepBasic_MeasureWithUnit {
}

class StepBasic_RatioUnit extends StepBasic_NamedUnit {
}

class StepBasic_RoleAssociation extends Standard_Transient {
}

class StepBasic_RoleSelect extends StepData_SelectType {
}

class StepBasic_SecurityClassification extends Standard_Transient {
}

class StepBasic_SecurityClassificationAssignment extends Standard_Transient {
}

class StepBasic_SecurityClassificationLevel extends Standard_Transient {
}

class StepBasic_SiUnit extends StepBasic_NamedUnit {
}

class StepBasic_SiUnitAndAreaUnit extends StepBasic_SiUnit {
}

class StepBasic_SiUnitAndLengthUnit extends StepBasic_SiUnit {
}

class StepBasic_SiUnitAndMassUnit extends StepBasic_SiUnit {
}

class StepBasic_SiUnitAndPlaneAngleUnit extends StepBasic_SiUnit {
}

class StepBasic_SiUnitAndRatioUnit extends StepBasic_SiUnit {
}

class StepBasic_SiUnitAndSolidAngleUnit extends StepBasic_SiUnit {
}

class StepBasic_SiUnitAndThermodynamicTemperatureUnit extends StepBasic_SiUnit {
}

class StepBasic_SiUnitAndTimeUnit extends StepBasic_SiUnit {
}

class StepBasic_SiUnitAndVolumeUnit extends StepBasic_SiUnit {
}

class StepBasic_SizeMember extends StepData_SelectReal {
}

class StepBasic_SizeSelect extends StepData_SelectType {
}

class StepBasic_SolidAngleMeasureWithUnit extends StepBasic_MeasureWithUnit {
}

class StepBasic_SolidAngleUnit extends StepBasic_NamedUnit {
}

class StepBasic_SourceItem extends StepData_SelectType {
}

class StepBasic_ThermodynamicTemperatureUnit extends StepBasic_NamedUnit {
}

class StepBasic_TimeMeasureWithUnit extends StepBasic_MeasureWithUnit {
}

class StepBasic_TimeUnit extends StepBasic_NamedUnit {
}

class StepBasic_UncertaintyMeasureWithUnit extends StepBasic_MeasureWithUnit {
}

class StepBasic_Unit extends StepData_SelectType {
}

class StepBasic_VersionedActionRequest extends Standard_Transient {
}

class StepBasic_VolumeUnit extends StepBasic_NamedUnit {
}

class StepBasic_WeekOfYearAndDayDate extends StepBasic_Date {
}

class StepData {
}

class StepData_Described extends Standard_Transient {
}

class StepData_ECDescr extends StepData_EDescr {
}

class StepData_EDescr extends Standard_Transient {
}

class StepData_ESDescr extends StepData_EDescr {
}

class StepData_EnumTool {
}

class StepData_Field {
}

class StepData_FieldList {
}

class StepData_FieldList1 extends StepData_FieldList {
}

class StepData_FieldListD extends StepData_FieldList {
}

class StepData_FieldListN extends StepData_FieldList {
}

class StepData_FileProtocol extends StepData_Protocol {
}

class StepData_FileRecognizer extends Standard_Transient {
}

class StepData_GlobalNodeOfWriterLib extends Standard_Transient {
}

class StepData_NodeOfWriterLib extends Standard_Transient {
}

class StepData_PDescr extends Standard_Transient {
}

class StepData_Plex extends StepData_Described {
}

class StepData_Protocol extends Interface_Protocol {
}

class StepData_ReadWriteModule extends Interface_ReaderModule {
}

class StepData_SelectArrReal extends StepData_SelectNamed {
}

class StepData_SelectInt extends StepData_SelectMember {
}

class StepData_SelectMember extends Standard_Transient {
}

class StepData_SelectNamed extends StepData_SelectMember {
}

class StepData_SelectReal extends StepData_SelectMember {
}

class StepData_SelectType {
}

class StepData_Simple extends StepData_Described {
}

class StepData_StepDumper {
}

class StepData_StepModel extends Interface_InterfaceModel {
}

class StepData_StepReaderData extends Interface_FileReaderData {
}

class StepData_StepReaderTool extends Interface_FileReaderTool {
}

class StepData_StepWriter {
}

class StepData_WriterLib {
}

class StepDimTol_AngularityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
}

class StepDimTol_CircularRunoutTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
}

class StepDimTol_CoaxialityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
}

class StepDimTol_CommonDatum extends StepRepr_CompositeShapeAspect {
}

class StepDimTol_ConcentricityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
}

class StepDimTol_CylindricityTolerance extends StepDimTol_GeometricTolerance {
}

class StepDimTol_Datum extends StepRepr_ShapeAspect {
}

class StepDimTol_DatumFeature extends StepRepr_ShapeAspect {
}

class StepDimTol_DatumOrCommonDatum extends StepData_SelectType {
}

class StepDimTol_DatumReference extends Standard_Transient {
}

class StepDimTol_DatumReferenceCompartment extends StepDimTol_GeneralDatumReference {
}

class StepDimTol_DatumReferenceElement extends StepDimTol_GeneralDatumReference {
}

class StepDimTol_DatumReferenceModifier extends StepData_SelectType {
}

class StepDimTol_DatumReferenceModifierWithValue extends Standard_Transient {
}

class StepDimTol_DatumSystem extends StepRepr_ShapeAspect {
}

class StepDimTol_DatumSystemOrReference extends StepData_SelectType {
}

class StepDimTol_DatumTarget extends StepRepr_ShapeAspect {
}

class StepDimTol_FlatnessTolerance extends StepDimTol_GeometricTolerance {
}

class StepDimTol_GeneralDatumReference extends StepRepr_ShapeAspect {
}

class StepDimTol_GeoTolAndGeoTolWthDatRef extends StepDimTol_GeometricTolerance {
}

class StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol extends StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
}

class StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod extends StepDimTol_GeometricTolerance {
}

class StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol extends StepDimTol_GeometricTolerance {
}

class StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol extends StepDimTol_GeoTolAndGeoTolWthDatRef {
}

class StepDimTol_GeoTolAndGeoTolWthMaxTol extends StepDimTol_GeoTolAndGeoTolWthMod {
}

class StepDimTol_GeoTolAndGeoTolWthMod extends StepDimTol_GeometricTolerance {
}

class StepDimTol_GeometricTolerance extends Standard_Transient {
}

class StepDimTol_GeometricToleranceRelationship extends Standard_Transient {
}

class StepDimTol_GeometricToleranceTarget extends StepData_SelectType {
}

class StepDimTol_GeometricToleranceWithDatumReference extends StepDimTol_GeometricTolerance {
}

class StepDimTol_GeometricToleranceWithDefinedAreaUnit extends StepDimTol_GeometricToleranceWithDefinedUnit {
}

class StepDimTol_GeometricToleranceWithDefinedUnit extends StepDimTol_GeometricTolerance {
}

class StepDimTol_GeometricToleranceWithMaximumTolerance extends StepDimTol_GeometricToleranceWithModifiers {
}

class StepDimTol_GeometricToleranceWithModifiers extends StepDimTol_GeometricTolerance {
}

class StepDimTol_LineProfileTolerance extends StepDimTol_GeometricTolerance {
}

class StepDimTol_ModifiedGeometricTolerance extends StepDimTol_GeometricTolerance {
}

class StepDimTol_NonUniformZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
}

class StepDimTol_ParallelismTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
}

class StepDimTol_PerpendicularityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
}

class StepDimTol_PlacedDatumTargetFeature extends StepDimTol_DatumTarget {
}

class StepDimTol_PositionTolerance extends StepDimTol_GeometricTolerance {
}

class StepDimTol_ProjectedZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
}

class StepDimTol_RoundnessTolerance extends StepDimTol_GeometricTolerance {
}

class StepDimTol_RunoutZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
}

class StepDimTol_RunoutZoneOrientation extends Standard_Transient {
}

class StepDimTol_ShapeToleranceSelect extends StepData_SelectType {
}

class StepDimTol_SimpleDatumReferenceModifierMember extends StepData_SelectInt {
}

class StepDimTol_StraightnessTolerance extends StepDimTol_GeometricTolerance {
}

class StepDimTol_SurfaceProfileTolerance extends StepDimTol_GeometricTolerance {
}

class StepDimTol_SymmetryTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
}

class StepDimTol_ToleranceZone extends StepRepr_ShapeAspect {
}

class StepDimTol_ToleranceZoneDefinition extends Standard_Transient {
}

class StepDimTol_ToleranceZoneForm extends Standard_Transient {
}

class StepDimTol_ToleranceZoneTarget extends StepData_SelectType {
}

class StepDimTol_TotalRunoutTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
}

class StepDimTol_UnequallyDisposedGeometricTolerance extends StepDimTol_GeometricTolerance {
}

class StepElement_AnalysisItemWithinRepresentation extends Standard_Transient {
}

class StepElement_Curve3dElementDescriptor extends StepElement_ElementDescriptor {
}

class StepElement_CurveElementEndReleasePacket extends Standard_Transient {
}

class StepElement_CurveElementFreedom extends StepData_SelectType {
}

class StepElement_CurveElementFreedomMember extends StepData_SelectNamed {
}

class StepElement_CurveElementPurpose extends StepData_SelectType {
}

class StepElement_CurveElementPurposeMember extends StepData_SelectNamed {
}

class StepElement_CurveElementSectionDefinition extends Standard_Transient {
}

class StepElement_CurveElementSectionDerivedDefinitions extends StepElement_CurveElementSectionDefinition {
}

class StepElement_ElementAspect extends StepData_SelectType {
}

class StepElement_ElementAspectMember extends StepData_SelectNamed {
}

class StepElement_ElementDescriptor extends Standard_Transient {
}

class StepElement_ElementMaterial extends Standard_Transient {
}

class StepElement_MeasureOrUnspecifiedValue extends StepData_SelectType {
}

class StepElement_MeasureOrUnspecifiedValueMember extends StepData_SelectNamed {
}

class StepElement_Surface3dElementDescriptor extends StepElement_ElementDescriptor {
}

class StepElement_SurfaceElementProperty extends Standard_Transient {
}

class StepElement_SurfaceElementPurpose extends StepData_SelectType {
}

class StepElement_SurfaceElementPurposeMember extends StepData_SelectNamed {
}

class StepElement_SurfaceSection extends Standard_Transient {
}

class StepElement_SurfaceSectionField extends Standard_Transient {
}

class StepElement_SurfaceSectionFieldConstant extends StepElement_SurfaceSectionField {
}

class StepElement_SurfaceSectionFieldVarying extends StepElement_SurfaceSectionField {
}

class StepElement_UniformSurfaceSection extends StepElement_SurfaceSection {
}

class StepElement_Volume3dElementDescriptor extends StepElement_ElementDescriptor {
}

class StepElement_VolumeElementPurpose extends StepData_SelectType {
}

class StepElement_VolumeElementPurposeMember extends StepData_SelectNamed {
}

class StepFEA_AlignedCurve3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
}

class StepFEA_AlignedSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
}

class StepFEA_ArbitraryVolume3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
}

class StepFEA_ConstantSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
}

class StepFEA_Curve3dElementProperty extends Standard_Transient {
}

class StepFEA_Curve3dElementRepresentation extends StepFEA_ElementRepresentation {
}

class StepFEA_CurveElementEndCoordinateSystem extends StepData_SelectType {
}

class StepFEA_CurveElementEndOffset extends Standard_Transient {
}

class StepFEA_CurveElementEndRelease extends Standard_Transient {
}

class StepFEA_CurveElementInterval extends Standard_Transient {
}

class StepFEA_CurveElementIntervalConstant extends StepFEA_CurveElementInterval {
}

class StepFEA_CurveElementIntervalLinearlyVarying extends StepFEA_CurveElementInterval {
}

class StepFEA_CurveElementLocation extends Standard_Transient {
}

class StepFEA_DegreeOfFreedom extends StepData_SelectType {
}

class StepFEA_DegreeOfFreedomMember extends StepData_SelectNamed {
}

class StepFEA_DummyNode extends StepFEA_NodeRepresentation {
}

class StepFEA_ElementGeometricRelationship extends Standard_Transient {
}

class StepFEA_ElementGroup extends StepFEA_FeaGroup {
}

class StepFEA_ElementOrElementGroup extends StepData_SelectType {
}

class StepFEA_ElementRepresentation extends StepRepr_Representation {
}

class StepFEA_FeaAreaDensity extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaAxis2Placement3d extends StepGeom_Axis2Placement3d {
}

class StepFEA_FeaCurveSectionGeometricRelationship extends Standard_Transient {
}

class StepFEA_FeaGroup extends StepBasic_Group {
}

class StepFEA_FeaLinearElasticity extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaMassDensity extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaMaterialPropertyRepresentation extends StepRepr_MaterialPropertyRepresentation {
}

class StepFEA_FeaMaterialPropertyRepresentationItem extends StepRepr_RepresentationItem {
}

class StepFEA_FeaModel extends StepRepr_Representation {
}

class StepFEA_FeaModel3d extends StepFEA_FeaModel {
}

class StepFEA_FeaModelDefinition extends StepRepr_ShapeAspect {
}

class StepFEA_FeaMoistureAbsorption extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaParametricPoint extends StepGeom_Point {
}

class StepFEA_FeaRepresentationItem extends StepRepr_RepresentationItem {
}

class StepFEA_FeaSecantCoefficientOfLinearThermalExpansion extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaShellBendingStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaShellMembraneBendingCouplingStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaShellMembraneStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaShellShearStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FeaSurfaceSectionGeometricRelationship extends Standard_Transient {
}

class StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion extends StepFEA_FeaMaterialPropertyRepresentationItem {
}

class StepFEA_FreedomAndCoefficient extends Standard_Transient {
}

class StepFEA_FreedomsList extends Standard_Transient {
}

class StepFEA_GeometricNode extends StepFEA_NodeRepresentation {
}

class StepFEA_Node extends StepFEA_NodeRepresentation {
}

class StepFEA_NodeDefinition extends StepRepr_ShapeAspect {
}

class StepFEA_NodeGroup extends StepFEA_FeaGroup {
}

class StepFEA_NodeRepresentation extends StepRepr_Representation {
}

class StepFEA_NodeSet extends StepGeom_GeometricRepresentationItem {
}

class StepFEA_NodeWithSolutionCoordinateSystem extends StepFEA_Node {
}

class StepFEA_NodeWithVector extends StepFEA_Node {
}

class StepFEA_ParametricCurve3dElementCoordinateDirection extends StepFEA_FeaRepresentationItem {
}

class StepFEA_ParametricCurve3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
}

class StepFEA_ParametricSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
}

class StepFEA_Surface3dElementRepresentation extends StepFEA_ElementRepresentation {
}

class StepFEA_SymmetricTensor22d extends StepData_SelectType {
}

class StepFEA_SymmetricTensor23d extends StepData_SelectType {
}

class StepFEA_SymmetricTensor23dMember extends StepData_SelectArrReal {
}

class StepFEA_SymmetricTensor42d extends StepData_SelectType {
}

class StepFEA_SymmetricTensor43dMember extends StepData_SelectArrReal {
}

class StepFEA_Volume3dElementRepresentation extends StepFEA_ElementRepresentation {
}

class StepGeom_Axis1Placement extends StepGeom_Placement {
}

class StepGeom_Axis2Placement extends StepData_SelectType {
}

class StepGeom_Axis2Placement2d extends StepGeom_Placement {
}

class StepGeom_Axis2Placement3d extends StepGeom_Placement {
}

class StepGeom_BSplineCurve extends StepGeom_BoundedCurve {
}

class StepGeom_BSplineCurveWithKnots extends StepGeom_BSplineCurve {
}

class StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve extends StepGeom_BSplineCurve {
}

class StepGeom_BSplineSurface extends StepGeom_BoundedSurface {
}

class StepGeom_BSplineSurfaceWithKnots extends StepGeom_BSplineSurface {
}

class StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface extends StepGeom_BSplineSurface {
}

class StepGeom_BezierCurve extends StepGeom_BSplineCurve {
}

class StepGeom_BezierCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
}

class StepGeom_BezierSurface extends StepGeom_BSplineSurface {
}

class StepGeom_BezierSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
}

class StepGeom_BoundaryCurve extends StepGeom_CompositeCurveOnSurface {
}

class StepGeom_BoundedCurve extends StepGeom_Curve {
}

class StepGeom_BoundedSurface extends StepGeom_Surface {
}

class StepGeom_CartesianPoint extends StepGeom_Point {
}

class StepGeom_CartesianTransformationOperator extends StepGeom_GeometricRepresentationItem {
}

class StepGeom_CartesianTransformationOperator2d extends StepGeom_CartesianTransformationOperator {
}

class StepGeom_CartesianTransformationOperator3d extends StepGeom_CartesianTransformationOperator {
}

class StepGeom_Circle extends StepGeom_Conic {
}

class StepGeom_CompositeCurve extends StepGeom_BoundedCurve {
}

class StepGeom_CompositeCurveOnSurface extends StepGeom_CompositeCurve {
}

class StepGeom_CompositeCurveSegment extends Standard_Transient {
}

class StepGeom_Conic extends StepGeom_Curve {
}

class StepGeom_ConicalSurface extends StepGeom_ElementarySurface {
}

class StepGeom_Curve extends StepGeom_GeometricRepresentationItem {
}

class StepGeom_CurveBoundedSurface extends StepGeom_BoundedSurface {
}

class StepGeom_CurveOnSurface extends StepData_SelectType {
}

class StepGeom_CurveReplica extends StepGeom_Curve {
}

class StepGeom_CylindricalSurface extends StepGeom_ElementarySurface {
}

class StepGeom_DegeneratePcurve extends StepGeom_Point {
}

class StepGeom_DegenerateToroidalSurface extends StepGeom_ToroidalSurface {
}

class StepGeom_Direction extends StepGeom_GeometricRepresentationItem {
}

class StepGeom_ElementarySurface extends StepGeom_Surface {
}

class StepGeom_Ellipse extends StepGeom_Conic {
}

class StepGeom_EvaluatedDegeneratePcurve extends StepGeom_DegeneratePcurve {
}

class StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx extends StepRepr_RepresentationContext {
}

class StepGeom_GeometricRepresentationContext extends StepRepr_RepresentationContext {
}

class StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext extends StepRepr_RepresentationContext {
}

class StepGeom_GeometricRepresentationContextAndParametricRepresentationContext extends StepRepr_RepresentationContext {
}

class StepGeom_GeometricRepresentationItem extends StepRepr_RepresentationItem {
}

class StepGeom_Hyperbola extends StepGeom_Conic {
}

class StepGeom_IntersectionCurve extends StepGeom_SurfaceCurve {
}

class StepGeom_Line extends StepGeom_Curve {
}

class StepGeom_OffsetCurve3d extends StepGeom_Curve {
}

class StepGeom_OffsetSurface extends StepGeom_Surface {
}

class StepGeom_OrientedSurface extends StepGeom_Surface {
}

class StepGeom_OuterBoundaryCurve extends StepGeom_BoundaryCurve {
}

class StepGeom_Parabola extends StepGeom_Conic {
}

class StepGeom_Pcurve extends StepGeom_Curve {
}

class StepGeom_PcurveOrSurface extends StepData_SelectType {
}

class StepGeom_Placement extends StepGeom_GeometricRepresentationItem {
}

class StepGeom_Plane extends StepGeom_ElementarySurface {
}

class StepGeom_Point extends StepGeom_GeometricRepresentationItem {
}

class StepGeom_PointOnCurve extends StepGeom_Point {
}

class StepGeom_PointOnSurface extends StepGeom_Point {
}

class StepGeom_PointReplica extends StepGeom_Point {
}

class StepGeom_Polyline extends StepGeom_BoundedCurve {
}

class StepGeom_QuasiUniformCurve extends StepGeom_BSplineCurve {
}

class StepGeom_QuasiUniformCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
}

class StepGeom_QuasiUniformSurface extends StepGeom_BSplineSurface {
}

class StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
}

class StepGeom_RationalBSplineCurve extends StepGeom_BSplineCurve {
}

class StepGeom_RationalBSplineSurface extends StepGeom_BSplineSurface {
}

class StepGeom_RectangularCompositeSurface extends StepGeom_BoundedSurface {
}

class StepGeom_RectangularTrimmedSurface extends StepGeom_BoundedSurface {
}

class StepGeom_ReparametrisedCompositeCurveSegment extends StepGeom_CompositeCurveSegment {
}

class StepGeom_SeamCurve extends StepGeom_SurfaceCurve {
}

class StepGeom_SphericalSurface extends StepGeom_ElementarySurface {
}

class StepGeom_Surface extends StepGeom_GeometricRepresentationItem {
}

class StepGeom_SurfaceBoundary extends StepData_SelectType {
}

class StepGeom_SurfaceCurve extends StepGeom_Curve {
}

class StepGeom_SurfaceCurveAndBoundedCurve extends StepGeom_SurfaceCurve {
}

class StepGeom_SurfaceOfLinearExtrusion extends StepGeom_SweptSurface {
}

class StepGeom_SurfaceOfRevolution extends StepGeom_SweptSurface {
}

class StepGeom_SurfacePatch extends Standard_Transient {
}

class StepGeom_SurfaceReplica extends StepGeom_Surface {
}

class StepGeom_SweptSurface extends StepGeom_Surface {
}

class StepGeom_ToroidalSurface extends StepGeom_ElementarySurface {
}

class StepGeom_TrimmedCurve extends StepGeom_BoundedCurve {
}

class StepGeom_TrimmingMember extends StepData_SelectReal {
}

class StepGeom_TrimmingSelect extends StepData_SelectType {
}

class StepGeom_UniformCurve extends StepGeom_BSplineCurve {
}

class StepGeom_UniformCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
}

class StepGeom_UniformSurface extends StepGeom_BSplineSurface {
}

class StepGeom_UniformSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
}

class StepGeom_Vector extends StepGeom_GeometricRepresentationItem {
}

class StepGeom_VectorOrDirection extends StepData_SelectType {
}

class StepRepr_AllAroundShapeAspect extends StepRepr_ContinuosShapeAspect {
}

class StepRepr_Apex extends StepRepr_DerivedShapeAspect {
}

class StepRepr_AssemblyComponentUsage extends StepRepr_ProductDefinitionUsage {
}

class StepRepr_AssemblyComponentUsageSubstitute extends Standard_Transient {
}

class StepRepr_BetweenShapeAspect extends StepRepr_ContinuosShapeAspect {
}

class StepRepr_CentreOfSymmetry extends StepRepr_DerivedShapeAspect {
}

class StepRepr_CharacterizedDefinition extends StepData_SelectType {
}

class StepRepr_CharacterizedRepresentation extends StepRepr_Representation {
}

class StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp extends StepRepr_CompShAspAndDatumFeatAndShAsp {
}

class StepRepr_CompShAspAndDatumFeatAndShAsp extends StepRepr_ShapeAspect {
}

class StepRepr_CompositeGroupShapeAspect extends StepRepr_CompositeShapeAspect {
}

class StepRepr_CompositeShapeAspect extends StepRepr_ShapeAspect {
}

class StepRepr_CompoundRepresentationItem extends StepRepr_RepresentationItem {
}

class StepRepr_ConfigurationDesign extends Standard_Transient {
}

class StepRepr_ConfigurationDesignItem extends StepData_SelectType {
}

class StepRepr_ConfigurationEffectivity extends StepBasic_ProductDefinitionEffectivity {
}

class StepRepr_ConfigurationItem extends Standard_Transient {
}

class StepRepr_ConstructiveGeometryRepresentation extends StepRepr_Representation {
}

class StepRepr_ConstructiveGeometryRepresentationRelationship extends StepRepr_RepresentationRelationship {
}

class StepRepr_ContinuosShapeAspect extends StepRepr_CompositeShapeAspect {
}

class StepRepr_DataEnvironment extends Standard_Transient {
}

class StepRepr_DefinitionalRepresentation extends StepRepr_Representation {
}

class StepRepr_DerivedShapeAspect extends StepRepr_ShapeAspect {
}

class StepRepr_DescriptiveRepresentationItem extends StepRepr_RepresentationItem {
}

class StepRepr_Extension extends StepRepr_DerivedShapeAspect {
}

class StepRepr_ExternallyDefinedRepresentation extends StepRepr_Representation {
}

class StepRepr_FeatureForDatumTargetRelationship extends StepRepr_ShapeAspectRelationship {
}

class StepRepr_FunctionallyDefinedTransformation extends Standard_Transient {
}

class StepRepr_GeometricAlignment extends StepRepr_DerivedShapeAspect {
}

class StepRepr_GlobalUncertaintyAssignedContext extends StepRepr_RepresentationContext {
}

class StepRepr_GlobalUnitAssignedContext extends StepRepr_RepresentationContext {
}

class StepRepr_IntegerRepresentationItem extends StepRepr_RepresentationItem {
}

class StepRepr_ItemDefinedTransformation extends Standard_Transient {
}

class StepRepr_MakeFromUsageOption extends StepRepr_ProductDefinitionUsage {
}

class StepRepr_MappedItem extends StepRepr_RepresentationItem {
}

class StepRepr_MaterialDesignation extends Standard_Transient {
}

class StepRepr_MaterialProperty extends StepRepr_PropertyDefinition {
}

class StepRepr_MaterialPropertyRepresentation extends StepRepr_PropertyDefinitionRepresentation {
}

class StepRepr_MeasureRepresentationItem extends StepRepr_RepresentationItem {
}

class StepRepr_NextAssemblyUsageOccurrence extends StepRepr_AssemblyComponentUsage {
}

class StepRepr_ParallelOffset extends StepRepr_DerivedShapeAspect {
}

class StepRepr_ParametricRepresentationContext extends StepRepr_RepresentationContext {
}

class StepRepr_PerpendicularTo extends StepRepr_DerivedShapeAspect {
}

class StepRepr_ProductConcept extends Standard_Transient {
}

class StepRepr_ProductDefinitionShape extends StepRepr_PropertyDefinition {
}

class StepRepr_ProductDefinitionUsage extends StepBasic_ProductDefinitionRelationship {
}

class StepRepr_PromissoryUsageOccurrence extends StepRepr_AssemblyComponentUsage {
}

class StepRepr_PropertyDefinition extends Standard_Transient {
}

class StepRepr_PropertyDefinitionRelationship extends Standard_Transient {
}

class StepRepr_PropertyDefinitionRepresentation extends Standard_Transient {
}

class StepRepr_QuantifiedAssemblyComponentUsage extends StepRepr_AssemblyComponentUsage {
}

class StepRepr_ReprItemAndLengthMeasureWithUnit extends StepRepr_ReprItemAndMeasureWithUnit {
}

class StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnitAndQRI {
}

class StepRepr_ReprItemAndMeasureWithUnit extends StepRepr_RepresentationItem {
}

class StepRepr_ReprItemAndMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnit {
}

class StepRepr_ReprItemAndPlaneAngleMeasureWithUnit extends StepRepr_ReprItemAndMeasureWithUnit {
}

class StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnitAndQRI {
}

class StepRepr_Representation extends Standard_Transient {
}

class StepRepr_RepresentationContext extends Standard_Transient {
}

class StepRepr_RepresentationItem extends Standard_Transient {
}

class StepRepr_RepresentationMap extends Standard_Transient {
}

class StepRepr_RepresentationRelationship extends Standard_Transient {
}

class StepRepr_RepresentationRelationshipWithTransformation extends StepRepr_ShapeRepresentationRelationship {
}

class StepRepr_RepresentedDefinition extends StepData_SelectType {
}

class StepRepr_ShapeAspect extends Standard_Transient {
}

class StepRepr_ShapeAspectDerivingRelationship extends StepRepr_ShapeAspectRelationship {
}

class StepRepr_ShapeAspectRelationship extends Standard_Transient {
}

class StepRepr_ShapeAspectTransition extends StepRepr_ShapeAspectRelationship {
}

class StepRepr_ShapeDefinition extends StepData_SelectType {
}

class StepRepr_ShapeRepresentationRelationship extends StepRepr_RepresentationRelationship {
}

class StepRepr_ShapeRepresentationRelationshipWithTransformation extends StepRepr_RepresentationRelationshipWithTransformation {
}

class StepRepr_SpecifiedHigherUsageOccurrence extends StepRepr_AssemblyComponentUsage {
}

class StepRepr_StructuralResponseProperty extends StepRepr_PropertyDefinition {
}

class StepRepr_StructuralResponsePropertyDefinitionRepresentation extends StepRepr_PropertyDefinitionRepresentation {
}

class StepRepr_SuppliedPartRelationship extends StepBasic_ProductDefinitionRelationship {
}

class StepRepr_Tangent extends StepRepr_DerivedShapeAspect {
}

class StepRepr_Transformation extends StepData_SelectType {
}

class StepRepr_ValueRange extends StepRepr_CompoundRepresentationItem {
}

class StepRepr_ValueRepresentationItem extends StepRepr_RepresentationItem {
}

class StepSelect_Activator extends IFSelect_Activator {
}

class StepSelect_FileModifier extends IFSelect_GeneralModifier {
}

class StepSelect_FloatFormat extends StepSelect_FileModifier {
}

class StepSelect_ModelModifier extends IFSelect_Modifier {
}

class StepSelect_StepType extends IFSelect_Signature {
}

class StepSelect_WorkLibrary extends IFSelect_WorkLibrary {
}

class StepShape_AdvancedBrepShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_AdvancedFace extends StepShape_FaceSurface {
}

class StepShape_AngularLocation extends StepShape_DimensionalLocation {
}

class StepShape_AngularSize extends StepShape_DimensionalSize {
}

class StepShape_Block extends StepGeom_GeometricRepresentationItem {
}

class StepShape_BooleanOperand {
}

class StepShape_BooleanResult extends StepGeom_GeometricRepresentationItem {
}

class StepShape_BoxDomain extends Standard_Transient {
}

class StepShape_BoxedHalfSpace extends StepShape_HalfSpaceSolid {
}

class StepShape_BrepWithVoids extends StepShape_ManifoldSolidBrep {
}

class StepShape_ClosedShell extends StepShape_ConnectedFaceSet {
}

class StepShape_CompoundShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_ConnectedEdgeSet extends StepShape_TopologicalRepresentationItem {
}

class StepShape_ConnectedFaceSet extends StepShape_TopologicalRepresentationItem {
}

class StepShape_ConnectedFaceShapeRepresentation extends StepRepr_Representation {
}

class StepShape_ConnectedFaceSubSet extends StepShape_ConnectedFaceSet {
}

class StepShape_ContextDependentShapeRepresentation extends Standard_Transient {
}

class StepShape_CsgPrimitive extends StepData_SelectType {
}

class StepShape_CsgSelect {
}

class StepShape_CsgShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_CsgSolid extends StepShape_SolidModel {
}

class StepShape_DefinitionalRepresentationAndShapeRepresentation extends StepRepr_DefinitionalRepresentation {
}

class StepShape_DimensionalCharacteristic extends StepData_SelectType {
}

class StepShape_DimensionalCharacteristicRepresentation extends Standard_Transient {
}

class StepShape_DimensionalLocation extends StepRepr_ShapeAspectRelationship {
}

class StepShape_DimensionalLocationWithPath extends StepShape_DimensionalLocation {
}

class StepShape_DimensionalSize extends Standard_Transient {
}

class StepShape_DimensionalSizeWithPath extends StepShape_DimensionalSize {
}

class StepShape_DirectedDimensionalLocation extends StepShape_DimensionalLocation {
}

class StepShape_Edge extends StepShape_TopologicalRepresentationItem {
}

class StepShape_EdgeBasedWireframeModel extends StepGeom_GeometricRepresentationItem {
}

class StepShape_EdgeBasedWireframeShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_EdgeCurve extends StepShape_Edge {
}

class StepShape_EdgeLoop extends StepShape_Loop {
}

class StepShape_ExtrudedAreaSolid extends StepShape_SweptAreaSolid {
}

class StepShape_ExtrudedFaceSolid extends StepShape_SweptFaceSolid {
}

class StepShape_Face extends StepShape_TopologicalRepresentationItem {
}

class StepShape_FaceBasedSurfaceModel extends StepGeom_GeometricRepresentationItem {
}

class StepShape_FaceBound extends StepShape_TopologicalRepresentationItem {
}

class StepShape_FaceOuterBound extends StepShape_FaceBound {
}

class StepShape_FaceSurface extends StepShape_Face {
}

class StepShape_FacetedBrep extends StepShape_ManifoldSolidBrep {
}

class StepShape_FacetedBrepAndBrepWithVoids extends StepShape_ManifoldSolidBrep {
}

class StepShape_FacetedBrepShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_GeometricCurveSet extends StepShape_GeometricSet {
}

class StepShape_GeometricSet extends StepGeom_GeometricRepresentationItem {
}

class StepShape_GeometricSetSelect extends StepData_SelectType {
}

class StepShape_GeometricallyBoundedSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_GeometricallyBoundedWireframeShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_HalfSpaceSolid extends StepGeom_GeometricRepresentationItem {
}

class StepShape_LimitsAndFits extends Standard_Transient {
}

class StepShape_Loop extends StepShape_TopologicalRepresentationItem {
}

class StepShape_LoopAndPath extends StepShape_TopologicalRepresentationItem {
}

class StepShape_ManifoldSolidBrep extends StepShape_SolidModel {
}

class StepShape_ManifoldSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_MeasureQualification extends Standard_Transient {
}

class StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem extends StepRepr_RepresentationItem {
}

class StepShape_NonManifoldSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_OpenShell extends StepShape_ConnectedFaceSet {
}

class StepShape_OrientedClosedShell extends StepShape_ClosedShell {
}

class StepShape_OrientedEdge extends StepShape_Edge {
}

class StepShape_OrientedFace extends StepShape_Face {
}

class StepShape_OrientedOpenShell extends StepShape_OpenShell {
}

class StepShape_OrientedPath extends StepShape_Path {
}

class StepShape_Path extends StepShape_TopologicalRepresentationItem {
}

class StepShape_PlusMinusTolerance extends Standard_Transient {
}

class StepShape_PointRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_PolyLoop extends StepShape_Loop {
}

class StepShape_PrecisionQualifier extends Standard_Transient {
}

class StepShape_QualifiedRepresentationItem extends StepRepr_RepresentationItem {
}

class StepShape_ReversibleTopologyItem extends StepData_SelectType {
}

class StepShape_RevolvedAreaSolid extends StepShape_SweptAreaSolid {
}

class StepShape_RevolvedFaceSolid extends StepShape_SweptFaceSolid {
}

class StepShape_RightAngularWedge extends StepGeom_GeometricRepresentationItem {
}

class StepShape_RightCircularCone extends StepGeom_GeometricRepresentationItem {
}

class StepShape_RightCircularCylinder extends StepGeom_GeometricRepresentationItem {
}

class StepShape_SeamEdge extends StepShape_OrientedEdge {
}

class StepShape_ShapeDefinitionRepresentation extends StepRepr_PropertyDefinitionRepresentation {
}

class StepShape_ShapeDimensionRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_ShapeDimensionRepresentationItem extends StepData_SelectType {
}

class StepShape_ShapeRepresentation extends StepRepr_Representation {
}

class StepShape_ShapeRepresentationWithParameters extends StepShape_ShapeRepresentation {
}

class StepShape_Shell extends StepData_SelectType {
}

class StepShape_ShellBasedSurfaceModel extends StepGeom_GeometricRepresentationItem {
}

class StepShape_SolidModel extends StepGeom_GeometricRepresentationItem {
}

class StepShape_SolidReplica extends StepShape_SolidModel {
}

class StepShape_Sphere extends StepGeom_GeometricRepresentationItem {
}

class StepShape_Subedge extends StepShape_Edge {
}

class StepShape_Subface extends StepShape_Face {
}

class StepShape_SurfaceModel extends StepData_SelectType {
}

class StepShape_SweptAreaSolid extends StepShape_SolidModel {
}

class StepShape_SweptFaceSolid extends StepShape_SolidModel {
}

class StepShape_ToleranceMethodDefinition extends StepData_SelectType {
}

class StepShape_ToleranceValue extends Standard_Transient {
}

class StepShape_TopologicalRepresentationItem extends StepRepr_RepresentationItem {
}

class StepShape_Torus extends StepGeom_GeometricRepresentationItem {
}

class StepShape_TransitionalShapeRepresentation extends StepShape_ShapeRepresentation {
}

class StepShape_TypeQualifier extends Standard_Transient {
}

class StepShape_ValueFormatTypeQualifier extends Standard_Transient {
}

class StepShape_ValueQualifier extends StepData_SelectType {
}

class StepShape_Vertex extends StepShape_TopologicalRepresentationItem {
}

class StepShape_VertexLoop extends StepShape_Loop {
}

class StepShape_VertexPoint extends StepShape_Vertex {
}

class StepToGeom {
}

class StepToTopoDS {
}

class StepToTopoDS_CartesianPointHasher {
}

class StepToTopoDS_GeometricTool {
}

class StepToTopoDS_MakeTransformed extends StepToTopoDS_Root {
}

class StepToTopoDS_NMTool {
}

class StepToTopoDS_PointPair {
}

class StepToTopoDS_PointPairHasher {
}

class StepToTopoDS_Root {
}

class StepToTopoDS_Tool {
}

class StepToTopoDS_TranslateCompositeCurve extends StepToTopoDS_Root {
}

class StepToTopoDS_TranslateCurveBoundedSurface extends StepToTopoDS_Root {
}

class StepToTopoDS_TranslateEdge extends StepToTopoDS_Root {
}

class StepToTopoDS_TranslateEdgeLoop extends StepToTopoDS_Root {
}

class StepToTopoDS_TranslateFace extends StepToTopoDS_Root {
}

class StepToTopoDS_TranslatePolyLoop extends StepToTopoDS_Root {
}

class StepToTopoDS_TranslateShell extends StepToTopoDS_Root {
}

class StepToTopoDS_TranslateVertex extends StepToTopoDS_Root {
}

class StepToTopoDS_TranslateVertexLoop extends StepToTopoDS_Root {
}

class StepVisual_AnnotationCurveOccurrence extends StepVisual_AnnotationOccurrence {
}

class StepVisual_AnnotationCurveOccurrenceAndAnnotationOccurrenceAndGeomReprItemAndReprItemAndStyledItem extends StepVisual_AnnotationCurveOccurrence {
}

class StepVisual_AnnotationFillArea extends StepShape_GeometricCurveSet {
}

class StepVisual_AnnotationFillAreaOccurrence extends StepVisual_AnnotationOccurrence {
}

class StepVisual_AnnotationOccurrence extends StepVisual_StyledItem {
}

class StepVisual_AnnotationPlane extends StepVisual_AnnotationOccurrence {
}

class StepVisual_AnnotationPlaneElement extends StepData_SelectType {
}

class StepVisual_AnnotationText extends StepRepr_MappedItem {
}

class StepVisual_AnnotationTextOccurrence extends StepVisual_AnnotationOccurrence {
}

class StepVisual_AreaInSet extends Standard_Transient {
}

class StepVisual_AreaOrView extends StepData_SelectType {
}

class StepVisual_BackgroundColour extends StepVisual_Colour {
}

class StepVisual_BoxCharacteristicSelect {
}

class StepVisual_CameraImage extends StepRepr_MappedItem {
}

class StepVisual_CameraImage2dWithScale extends StepVisual_CameraImage {
}

class StepVisual_CameraImage3dWithScale extends StepVisual_CameraImage {
}

class StepVisual_CameraModel extends StepGeom_GeometricRepresentationItem {
}

class StepVisual_CameraModelD2 extends StepVisual_CameraModel {
}

class StepVisual_CameraModelD3 extends StepVisual_CameraModel {
}

class StepVisual_CameraModelD3MultiClipping extends StepVisual_CameraModelD3 {
}

class StepVisual_CameraModelD3MultiClippingInterectionSelect extends StepData_SelectType {
}

class StepVisual_CameraModelD3MultiClippingIntersection extends StepGeom_GeometricRepresentationItem {
}

class StepVisual_CameraModelD3MultiClippingUnion extends StepGeom_GeometricRepresentationItem {
}

class StepVisual_CameraModelD3MultiClippingUnionSelect extends StepData_SelectType {
}

class StepVisual_CameraUsage extends StepRepr_RepresentationMap {
}

class StepVisual_CharacterizedObjectAndCharacterizedRepresentationAndDraughtingModelAndRepresentation extends StepVisual_DraughtingModel {
}

class StepVisual_Colour extends Standard_Transient {
}

class StepVisual_ColourRgb extends StepVisual_ColourSpecification {
}

class StepVisual_ColourSpecification extends StepVisual_Colour {
}

class StepVisual_CompositeText extends StepGeom_GeometricRepresentationItem {
}

class StepVisual_CompositeTextWithExtent extends StepVisual_CompositeText {
}

class StepVisual_ContextDependentInvisibility extends StepVisual_Invisibility {
}

class StepVisual_ContextDependentOverRidingStyledItem extends StepVisual_OverRidingStyledItem {
}

class StepVisual_CoordinatesList extends StepVisual_TessellatedItem {
}

class StepVisual_CurveStyle extends Standard_Transient {
}

class StepVisual_CurveStyleFont extends Standard_Transient {
}

class StepVisual_CurveStyleFontPattern extends Standard_Transient {
}

class StepVisual_CurveStyleFontSelect extends StepData_SelectType {
}

class StepVisual_DirectionCountSelect {
}

class StepVisual_DraughtingAnnotationOccurrence extends StepVisual_AnnotationOccurrence {
}

class StepVisual_DraughtingCallout extends StepGeom_GeometricRepresentationItem {
}

class StepVisual_DraughtingCalloutElement extends StepData_SelectType {
}

class StepVisual_DraughtingModel extends StepRepr_Representation {
}

class StepVisual_DraughtingPreDefinedColour extends StepVisual_PreDefinedColour {
}

class StepVisual_DraughtingPreDefinedCurveFont extends StepVisual_PreDefinedCurveFont {
}

class StepVisual_ExternallyDefinedCurveFont extends StepBasic_ExternallyDefinedItem {
}

class StepVisual_ExternallyDefinedTextFont extends StepBasic_ExternallyDefinedItem {
}

class StepVisual_FillAreaStyle extends Standard_Transient {
}

class StepVisual_FillAreaStyleColour extends Standard_Transient {
}

class StepVisual_FillStyleSelect extends StepData_SelectType {
}

class StepVisual_FontSelect extends StepData_SelectType {
}

class StepVisual_Invisibility extends Standard_Transient {
}

class StepVisual_InvisibilityContext extends StepData_SelectType {
}

class StepVisual_InvisibleItem extends StepData_SelectType {
}

class StepVisual_LayeredItem extends StepData_SelectType {
}

class StepVisual_MarkerMember extends StepData_SelectInt {
}

class StepVisual_MarkerSelect extends StepData_SelectType {
}

class StepVisual_MechanicalDesignGeometricPresentationArea extends StepVisual_PresentationArea {
}

class StepVisual_MechanicalDesignGeometricPresentationRepresentation extends StepVisual_PresentationRepresentation {
}

class StepVisual_NullStyleMember extends StepData_SelectInt {
}

class StepVisual_OverRidingStyledItem extends StepVisual_StyledItem {
}

class StepVisual_PlanarBox extends StepVisual_PlanarExtent {
}

class StepVisual_PlanarExtent extends StepGeom_GeometricRepresentationItem {
}

class StepVisual_PointStyle extends Standard_Transient {
}

class StepVisual_PreDefinedColour extends StepVisual_Colour {
}

class StepVisual_PreDefinedCurveFont extends StepVisual_PreDefinedItem {
}

class StepVisual_PreDefinedItem extends Standard_Transient {
}

class StepVisual_PreDefinedTextFont extends StepVisual_PreDefinedItem {
}

class StepVisual_PresentationArea extends StepVisual_PresentationRepresentation {
}

class StepVisual_PresentationLayerAssignment extends Standard_Transient {
}

class StepVisual_PresentationLayerUsage extends Standard_Transient {
}

class StepVisual_PresentationRepresentation extends StepRepr_Representation {
}

class StepVisual_PresentationRepresentationSelect extends StepData_SelectType {
}

class StepVisual_PresentationSet extends Standard_Transient {
}

class StepVisual_PresentationSize extends Standard_Transient {
}

class StepVisual_PresentationSizeAssignmentSelect extends StepData_SelectType {
}

class StepVisual_PresentationStyleAssignment extends Standard_Transient {
}

class StepVisual_PresentationStyleByContext extends StepVisual_PresentationStyleAssignment {
}

class StepVisual_PresentationStyleSelect extends StepData_SelectType {
}

class StepVisual_PresentationView extends StepVisual_PresentationRepresentation {
}

class StepVisual_PresentedItem extends Standard_Transient {
}

class StepVisual_PresentedItemRepresentation extends Standard_Transient {
}

class StepVisual_StyleContextSelect extends StepData_SelectType {
}

class StepVisual_StyledItem extends StepRepr_RepresentationItem {
}

class StepVisual_StyledItemTarget extends StepData_SelectType {
}

class StepVisual_SurfaceSideStyle extends Standard_Transient {
}

class StepVisual_SurfaceStyleBoundary extends Standard_Transient {
}

class StepVisual_SurfaceStyleControlGrid extends Standard_Transient {
}

class StepVisual_SurfaceStyleElementSelect extends StepData_SelectType {
}

class StepVisual_SurfaceStyleFillArea extends Standard_Transient {
}

class StepVisual_SurfaceStyleParameterLine extends Standard_Transient {
}

class StepVisual_SurfaceStyleSegmentationCurve extends Standard_Transient {
}

class StepVisual_SurfaceStyleSilhouette extends Standard_Transient {
}

class StepVisual_SurfaceStyleUsage extends Standard_Transient {
}

class StepVisual_Template extends StepRepr_Representation {
}

class StepVisual_TemplateInstance extends StepRepr_MappedItem {
}

class StepVisual_TessellatedAnnotationOccurrence extends StepVisual_StyledItem {
}

class StepVisual_TessellatedCurveSet extends StepVisual_TessellatedItem {
}

class StepVisual_TessellatedGeometricSet extends StepVisual_TessellatedItem {
}

class StepVisual_TessellatedItem extends StepGeom_GeometricRepresentationItem {
}

class StepVisual_TextLiteral extends StepGeom_GeometricRepresentationItem {
}

class StepVisual_TextOrCharacter extends StepData_SelectType {
}

class StepVisual_TextStyle extends Standard_Transient {
}

class StepVisual_TextStyleForDefinedFont extends Standard_Transient {
}

class StepVisual_TextStyleWithBoxCharacteristics extends StepVisual_TextStyle {
}

class StepVisual_ViewVolume extends Standard_Transient {
}

class StlAPI {
}

class StlAPI_Reader {
}

class StlAPI_Writer {
}

class Storage {
}

class Storage_Bucket {
}

class Storage_BucketIterator {
}

class Storage_BucketOfPersistent {
}

class Storage_CallBack extends Standard_Transient {
}

class Storage_Data extends Standard_Transient {
}

class Storage_DefaultCallBack extends Storage_CallBack {
}

class Storage_HeaderData extends Standard_Transient {
}

class Storage_InternalData extends Standard_Transient {
}

class Storage_Root extends Standard_Transient {
}

class Storage_RootData extends Standard_Transient {
}

class Storage_Schema extends Standard_Transient {
}

class Storage_StreamExtCharParityError extends Storage_StreamReadError {
}

class Storage_StreamFormatError extends Standard_Failure {
}

class Storage_StreamModeError extends Standard_Failure {
}

class Storage_StreamReadError extends Standard_Failure {
}

class Storage_StreamTypeMismatchError extends Storage_StreamReadError {
}

class Storage_StreamUnknownTypeError extends Storage_StreamReadError {
}

class Storage_StreamWriteError extends Standard_Failure {
}

class Storage_TypeData extends Standard_Transient {
}

class Storage_TypedCallBack extends Standard_Transient {
}

class Sweep_NumShape {
}

class Sweep_NumShapeIterator {
}

class Sweep_NumShapeTool {
}

class TColStd_HPackedMapOfInteger extends Standard_Transient {
}

class TColStd_PackedMapOfInteger {
}

class TCollection {
}

class TCollection_AsciiString {
}

class TCollection_BaseSequence {
}

class TCollection_BasicMap {
}

class TCollection_BasicMapIterator {
}

class TCollection_ExtendedString {
}

class TCollection_HAsciiString extends Standard_Transient {
}

class TCollection_HExtendedString extends Standard_Transient {
}

class TCollection_MapNode extends Standard_Transient {
}

class TCollection_SeqNode extends Standard_Transient {
}

class TDF {
}

class TDF_Attribute extends Standard_Transient {
}

class TDF_AttributeDelta extends Standard_Transient {
}

class TDF_AttributeIterator {
}

class TDF_ChildIDIterator {
}

class TDF_ChildIterator {
}

class TDF_ClosureMode {
}

class TDF_ClosureTool {
}

class TDF_ComparisonTool {
}

class TDF_CopyLabel {
}

class TDF_CopyTool {
}

class TDF_Data extends Standard_Transient {
}

class TDF_DataSet extends Standard_Transient {
}

class TDF_DefaultDeltaOnModification extends TDF_DeltaOnModification {
}

class TDF_DefaultDeltaOnRemoval extends TDF_DeltaOnRemoval {
}

class TDF_Delta extends Standard_Transient {
}

class TDF_DeltaOnAddition extends TDF_AttributeDelta {
}

class TDF_DeltaOnForget extends TDF_AttributeDelta {
}

class TDF_DeltaOnModification extends TDF_AttributeDelta {
}

class TDF_DeltaOnRemoval extends TDF_AttributeDelta {
}

class TDF_DeltaOnResume extends TDF_AttributeDelta {
}

class TDF_IDFilter {
}

class TDF_Label {
}

class TDF_LabelMapHasher {
}

class TDF_Reference extends TDF_Attribute {
}

class TDF_RelocationTable extends Standard_Transient {
}

class TDF_TagSource extends TDF_Attribute {
}

class TDF_Tool {
}

class TDF_Transaction {
}

class TDataStd {
}

class TDataStd_AsciiString extends TDF_Attribute {
}

class TDataStd_BooleanArray extends TDF_Attribute {
}

class TDataStd_BooleanList extends TDF_Attribute {
}

class TDataStd_ByteArray extends TDF_Attribute {
}

class TDataStd_ChildNodeIterator {
}

class TDataStd_Comment extends TDF_Attribute {
}

class TDataStd_Current extends TDF_Attribute {
}

class TDataStd_DeltaOnModificationOfByteArray extends TDF_DeltaOnModification {
}

class TDataStd_DeltaOnModificationOfExtStringArray extends TDF_DeltaOnModification {
}

class TDataStd_DeltaOnModificationOfIntArray extends TDF_DeltaOnModification {
}

class TDataStd_DeltaOnModificationOfIntPackedMap extends TDF_DeltaOnModification {
}

class TDataStd_DeltaOnModificationOfRealArray extends TDF_DeltaOnModification {
}

class TDataStd_Directory extends TDF_Attribute {
}

class TDataStd_Expression extends TDF_Attribute {
}

class TDataStd_ExtStringArray extends TDF_Attribute {
}

class TDataStd_ExtStringList extends TDF_Attribute {
}

class TDataStd_HDataMapOfStringByte extends Standard_Transient {
}

class TDataStd_HDataMapOfStringHArray1OfInteger extends Standard_Transient {
}

class TDataStd_HDataMapOfStringHArray1OfReal extends Standard_Transient {
}

class TDataStd_HDataMapOfStringInteger extends Standard_Transient {
}

class TDataStd_HDataMapOfStringReal extends Standard_Transient {
}

class TDataStd_HDataMapOfStringString extends Standard_Transient {
}

class TDataStd_IntPackedMap extends TDF_Attribute {
}

class TDataStd_Integer extends TDF_Attribute {
}

class TDataStd_IntegerArray extends TDF_Attribute {
}

class TDataStd_IntegerList extends TDF_Attribute {
}

class TDataStd_Name extends TDF_Attribute {
}

class TDataStd_NamedData extends TDF_Attribute {
}

class TDataStd_NoteBook extends TDF_Attribute {
}

class TDataStd_Real extends TDF_Attribute {
}

class TDataStd_RealArray extends TDF_Attribute {
}

class TDataStd_RealList extends TDF_Attribute {
}

class TDataStd_ReferenceArray extends TDF_Attribute {
}

class TDataStd_ReferenceList extends TDF_Attribute {
}

class TDataStd_Relation extends TDF_Attribute {
}

class TDataStd_Tick extends TDF_Attribute {
}

class TDataStd_TreeNode extends TDF_Attribute {
}

class TDataStd_UAttribute extends TDF_Attribute {
}

class TDataStd_Variable extends TDF_Attribute {
}

class TDataXtd {
}

class TDataXtd_Axis extends TDF_Attribute {
}

class TDataXtd_Constraint extends TDF_Attribute {
}

class TDataXtd_Geometry extends TDF_Attribute {
}

class TDataXtd_Pattern extends TDF_Attribute {
}

class TDataXtd_PatternStd extends TDataXtd_Pattern {
}

class TDataXtd_Placement extends TDF_Attribute {
}

class TDataXtd_Plane extends TDF_Attribute {
}

class TDataXtd_Point extends TDF_Attribute {
}

class TDataXtd_Position extends TDF_Attribute {
}

class TDataXtd_Presentation extends TDF_Attribute {
}

class TDataXtd_Shape extends TDF_Attribute {
}

class TDataXtd_Triangulation extends TDF_Attribute {
}

class TDocStd {
}

class TDocStd_Application extends CDF_Application {
}

class TDocStd_ApplicationDelta extends Standard_Transient {
}

class TDocStd_CompoundDelta extends TDF_Delta {
}

class TDocStd_Context {
}

class TDocStd_Document extends CDM_Document {
}

class TDocStd_Modified extends TDF_Attribute {
}

class TDocStd_MultiTransactionManager extends Standard_Transient {
}

class TDocStd_Owner extends TDF_Attribute {
}

class TDocStd_PathParser {
}

class TDocStd_XLink extends TDF_Attribute {
}

class TDocStd_XLinkIterator {
}

class TDocStd_XLinkRoot extends TDF_Attribute {
}

class TDocStd_XLinkTool {
}

class TFunction_Driver extends Standard_Transient {
}

class TFunction_DriverTable extends Standard_Transient {
}

class TFunction_Function extends TDF_Attribute {
}

class TFunction_GraphNode extends TDF_Attribute {
}

class TFunction_IFunction {
}

class TFunction_Iterator {
}

class TFunction_Logbook extends TDF_Attribute {
}

class TFunction_Scope extends TDF_Attribute {
}

class TNaming {
}

class TNaming_Builder {
}

class TNaming_CopyShape {
}

class TNaming_DeltaOnModification extends TDF_DeltaOnModification {
}

class TNaming_DeltaOnRemoval extends TDF_DeltaOnRemoval {
}

class TNaming_Identifier {
}

class TNaming_Iterator {
}

class TNaming_IteratorOnShapesSet {
}

class TNaming_Localizer {
}

class TNaming_Name {
}

class TNaming_NamedShape extends TDF_Attribute {
}

class TNaming_Naming extends TDF_Attribute {
}

class TNaming_NamingTool {
}

class TNaming_NewShapeIterator {
}

class TNaming_OldShapeIterator {
}

class TNaming_RefShape {
}

class TNaming_SameShapeIterator {
}

class TNaming_Scope {
}

class TNaming_Selector {
}

class TNaming_ShapesSet {
}

class TNaming_Tool {
}

class TNaming_TranslateTool extends Standard_Transient {
}

class TNaming_Translator {
}

class TNaming_UsedShapes extends TDF_Attribute {
}

class TObj_Application extends TDocStd_Application {
}

class TObj_Assistant {
}

class TObj_CheckModel extends Message_Algorithm {
}

class TObj_HiddenPartition extends TObj_Partition {
}

class TObj_LabelIterator extends TObj_ObjectIterator {
}

class TObj_Model extends Standard_Transient {
}

class TObj_ModelIterator extends TObj_ObjectIterator {
}

class TObj_Object extends Standard_Transient {
}

class TObj_ObjectIterator extends Standard_Transient {
}

class TObj_OcafObjectIterator extends TObj_LabelIterator {
}

class TObj_Partition extends TObj_Object {
}

class TObj_Persistence {
}

class TObj_ReferenceIterator extends TObj_LabelIterator {
}

class TObj_SequenceIterator extends TObj_ObjectIterator {
}

class TObj_TIntSparseArray extends TDF_Attribute {
}

class TObj_TModel extends TDF_Attribute {
}

class TObj_TNameContainer extends TDF_Attribute {
}

class TObj_TObject extends TDF_Attribute {
}

class TObj_TReference extends TDF_Attribute {
}

class TObj_TXYZ extends TDF_Attribute {
}

class TopAbs {
}

class TopBas_TestInterference {
}

class TopCnx_EdgeFaceTransition {
}

class TopExp {
}

class TopExp_Explorer {
}

class TopLoc_Datum3D extends Standard_Transient {
}

class TopLoc_ItemLocation {
}

class TopLoc_Location {
}

class TopLoc_SListNodeOfItemLocation extends Standard_Transient {
}

class TopLoc_SListOfItemLocation {
}

class TopOpeBRep {
}

class TopOpeBRepBuild_Area1dBuilder extends TopOpeBRepBuild_AreaBuilder {
}

class TopOpeBRepBuild_Area2dBuilder extends TopOpeBRepBuild_AreaBuilder {
}

class TopOpeBRepBuild_Area3dBuilder extends TopOpeBRepBuild_AreaBuilder {
}

class TopOpeBRepBuild_AreaBuilder {
}

class TopOpeBRepBuild_BlockBuilder {
}

class TopOpeBRepBuild_BlockIterator {
}

class TopOpeBRepBuild_BuilderON {
}

class TopOpeBRepBuild_CompositeClassifier extends TopOpeBRepBuild_LoopClassifier {
}

class TopOpeBRepBuild_CorrectFace2d {
}

class TopOpeBRepBuild_EdgeBuilder extends TopOpeBRepBuild_Area1dBuilder {
}

class TopOpeBRepBuild_FaceAreaBuilder extends TopOpeBRepBuild_Area2dBuilder {
}

class TopOpeBRepBuild_FaceBuilder {
}

class TopOpeBRepBuild_FuseFace {
}

class TopOpeBRepBuild_GIter {
}

class TopOpeBRepBuild_GTool {
}

class TopOpeBRepBuild_GTopo {
}

class TopOpeBRepBuild_HBuilder extends Standard_Transient {
}

class TopOpeBRepBuild_Loop extends Standard_Transient {
}

class TopOpeBRepBuild_LoopClassifier {
}

class TopOpeBRepBuild_LoopSet {
}

class TopOpeBRepBuild_Pave extends TopOpeBRepBuild_Loop {
}

class TopOpeBRepBuild_PaveClassifier extends TopOpeBRepBuild_LoopClassifier {
}

class TopOpeBRepBuild_PaveSet extends TopOpeBRepBuild_LoopSet {
}

class TopOpeBRepBuild_ShapeListOfShape {
}

class TopOpeBRepBuild_ShapeSet {
}

class TopOpeBRepBuild_ShellFaceClassifier extends TopOpeBRepBuild_CompositeClassifier {
}

class TopOpeBRepBuild_ShellFaceSet extends TopOpeBRepBuild_ShapeSet {
}

class TopOpeBRepBuild_ShellToSolid {
}

class TopOpeBRepBuild_SolidAreaBuilder extends TopOpeBRepBuild_Area3dBuilder {
}

class TopOpeBRepBuild_SolidBuilder {
}

class TopOpeBRepBuild_Tools {
}

class TopOpeBRepBuild_Tools2d {
}

class TopOpeBRepBuild_VertexInfo {
}

class TopOpeBRepBuild_WireEdgeClassifier extends TopOpeBRepBuild_CompositeClassifier {
}

class TopOpeBRepBuild_WireEdgeSet extends TopOpeBRepBuild_ShapeSet {
}

class TopOpeBRepBuild_WireToFace {
}

class TopOpeBRepDS {
}

class TopOpeBRepDS_Association extends Standard_Transient {
}

class TopOpeBRepDS_BuildTool {
}

class TopOpeBRepDS_Check extends Standard_Transient {
}

class TopOpeBRepDS_Curve {
}

class TopOpeBRepDS_CurveData extends TopOpeBRepDS_GeometryData {
}

class TopOpeBRepDS_CurveExplorer {
}

class TopOpeBRepDS_CurveIterator extends TopOpeBRepDS_InterferenceIterator {
}

class TopOpeBRepDS_CurvePointInterference extends TopOpeBRepDS_Interference {
}

class TopOpeBRepDS_DataStructure {
}

class TopOpeBRepDS_Dumper {
}

class TopOpeBRepDS_EIR {
}

class TopOpeBRepDS_Edge3dInterferenceTool {
}

class TopOpeBRepDS_EdgeInterferenceTool {
}

class TopOpeBRepDS_EdgeVertexInterference extends TopOpeBRepDS_ShapeShapeInterference {
}

class TopOpeBRepDS_Explorer {
}

class TopOpeBRepDS_FIR {
}

class TopOpeBRepDS_FaceEdgeInterference extends TopOpeBRepDS_ShapeShapeInterference {
}

class TopOpeBRepDS_FaceInterferenceTool {
}

class TopOpeBRepDS_Filter {
}

class TopOpeBRepDS_GapFiller {
}

class TopOpeBRepDS_GapTool extends Standard_Transient {
}

class TopOpeBRepDS_GeometryData {
}

class TopOpeBRepDS_HDataStructure extends Standard_Transient {
}

class TopOpeBRepDS_Interference extends Standard_Transient {
}

class TopOpeBRepDS_InterferenceIterator {
}

class TopOpeBRepDS_InterferenceTool {
}

class TopOpeBRepDS_ListOfShapeOn1State {
}

class TopOpeBRepDS_Marker extends Standard_Transient {
}

class TopOpeBRepDS_Point {
}

class TopOpeBRepDS_PointData extends TopOpeBRepDS_GeometryData {
}

class TopOpeBRepDS_PointExplorer {
}

class TopOpeBRepDS_PointIterator extends TopOpeBRepDS_InterferenceIterator {
}

class TopOpeBRepDS_Reducer {
}

class TopOpeBRepDS_ShapeData {
}

class TopOpeBRepDS_ShapeShapeInterference extends TopOpeBRepDS_Interference {
}

class TopOpeBRepDS_ShapeWithState {
}

class TopOpeBRepDS_SolidSurfaceInterference extends TopOpeBRepDS_Interference {
}

class TopOpeBRepDS_Surface {
}

class TopOpeBRepDS_SurfaceCurveInterference extends TopOpeBRepDS_Interference {
}

class TopOpeBRepDS_SurfaceData extends TopOpeBRepDS_GeometryData {
}

class TopOpeBRepDS_SurfaceExplorer {
}

class TopOpeBRepDS_SurfaceIterator extends TopOpeBRepDS_InterferenceIterator {
}

class TopOpeBRepDS_TKI {
}

class TopOpeBRepDS_TOOL {
}

class TopOpeBRepDS_Transition {
}

class TopOpeBRepTool {
}

class TopOpeBRepTool_AncestorsTool {
}

class TopOpeBRepTool_BoxSort {
}

class TopOpeBRepTool_C2DF {
}

class TopOpeBRepTool_CLASSI {
}

class TopOpeBRepTool_CORRISO {
}

class TopOpeBRepTool_CurveTool {
}

class TopOpeBRepTool_FuseEdges {
}

class TopOpeBRepTool_GeomTool {
}

class TopOpeBRepTool_HBoxTool extends Standard_Transient {
}

class TopOpeBRepTool_PurgeInternalEdges {
}

class TopOpeBRepTool_REGUS {
}

class TopOpeBRepTool_REGUW {
}

class TopOpeBRepTool_ShapeClassifier {
}

class TopOpeBRepTool_ShapeExplorer extends TopExp_Explorer {
}

class TopOpeBRepTool_ShapeTool {
}

class TopOpeBRepTool_SolidClassifier {
}

class TopOpeBRepTool_TOOL {
}

class TopOpeBRepTool_connexity {
}

class TopOpeBRepTool_face {
}

class TopOpeBRepTool_makeTransition {
}

class TopOpeBRepTool_mkTondgE {
}

class TopOpeBRep_Bipoint {
}

class TopOpeBRep_DSFiller {
}

class TopOpeBRep_EdgesFiller {
}

class TopOpeBRep_EdgesIntersector {
}

class TopOpeBRep_FFDumper extends Standard_Transient {
}

class TopOpeBRep_FFTransitionTool {
}

class TopOpeBRep_FaceEdgeFiller {
}

class TopOpeBRep_FaceEdgeIntersector {
}

class TopOpeBRep_FacesFiller {
}

class TopOpeBRep_FacesIntersector {
}

class TopOpeBRep_GeomTool {
}

class TopOpeBRep_Hctxee2d extends Standard_Transient {
}

class TopOpeBRep_Hctxff2d extends Standard_Transient {
}

class TopOpeBRep_LineInter {
}

class TopOpeBRep_Point2d {
}

class TopOpeBRep_PointClassifier {
}

class TopOpeBRep_PointGeomTool {
}

class TopOpeBRep_ShapeIntersector {
}

class TopOpeBRep_ShapeIntersector2d {
}

class TopOpeBRep_ShapeScanner {
}

class TopOpeBRep_VPointInter {
}

class TopOpeBRep_VPointInterClassifier {
}

class TopOpeBRep_VPointInterIterator {
}

class TopOpeBRep_WPointInter {
}

class TopOpeBRep_WPointInterIterator {
}

class TopTools {
}

class TopTools_LocationSet {
}

class TopTools_MutexForShapeProvider {
}

class TopTools_OrientedShapeMapHasher {
}

class TopTools_ShapeMapHasher {
}

class TopTools_ShapeSet {
}

class TopTrans_CurveTransition {
}

class TopTrans_SurfaceTransition {
}

class TopoDS {
}

class TopoDSToStep {
}

class TopoDSToStep_Builder extends TopoDSToStep_Root {
}

class TopoDSToStep_FacetedTool {
}

class TopoDSToStep_MakeBrepWithVoids extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeFacetedBrep extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeFacetedBrepAndBrepWithVoids extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeGeometricCurveSet extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeManifoldSolidBrep extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeShellBasedSurfaceModel extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeStepEdge extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeStepFace extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeStepVertex extends TopoDSToStep_Root {
}

class TopoDSToStep_MakeStepWire extends TopoDSToStep_Root {
}

class TopoDSToStep_Root {
}

class TopoDSToStep_Tool {
}

class TopoDSToStep_WireframeBuilder extends TopoDSToStep_Root {
}

class TopoDS_AlertWithShape extends Message_Alert {
}

class TopoDS_Builder {
}

class TopoDS_CompSolid extends TopoDS_Shape {
}

class TopoDS_Compound extends TopoDS_Shape {
}

class TopoDS_Edge extends TopoDS_Shape {
}

class TopoDS_Face extends TopoDS_Shape {
}

class TopoDS_FrozenShape extends Standard_DomainError {
}

class TopoDS_HShape extends Standard_Transient {
}

class TopoDS_Iterator {
}

class TopoDS_LockedShape extends Standard_DomainError {
}

class TopoDS_Shape {
}

class TopoDS_Shell extends TopoDS_Shape {
}

class TopoDS_Solid extends TopoDS_Shape {
}

class TopoDS_TCompSolid extends TopoDS_TShape {
}

class TopoDS_TCompound extends TopoDS_TShape {
}

class TopoDS_TEdge extends TopoDS_TShape {
}

class TopoDS_TFace extends TopoDS_TShape {
}

class TopoDS_TShape extends Standard_Transient {
}

class TopoDS_TShell extends TopoDS_TShape {
}

class TopoDS_TSolid extends TopoDS_TShape {
}

class TopoDS_TVertex extends TopoDS_TShape {
}

class TopoDS_TWire extends TopoDS_TShape {
}

class TopoDS_UnCompatibleShapes extends Standard_DomainError {
}

class TopoDS_Vertex extends TopoDS_Shape {
}

class TopoDS_Wire extends TopoDS_Shape {
}

class TransferBRep_BinderOfShape extends Transfer_Binder {
}

class TransferBRep_OrientedShapeMapper extends Transfer_Finder {
}

class TransferBRep_Reader {
}

class TransferBRep_ShapeBinder extends TransferBRep_BinderOfShape {
}

class TransferBRep_ShapeInfo {
}

class TransferBRep_ShapeListBinder extends Transfer_Binder {
}

class TransferBRep_ShapeMapper extends Transfer_Finder {
}

class TransferBRep_TransferResultInfo extends Standard_Transient {
}

class Transfer_ActorDispatch extends Transfer_ActorOfTransientProcess {
}

class Transfer_ActorOfFinderProcess extends Transfer_ActorOfProcessForFinder {
}

class Transfer_ActorOfProcessForFinder extends Standard_Transient {
}

class Transfer_ActorOfProcessForTransient extends Standard_Transient {
}

class Transfer_ActorOfTransientProcess extends Transfer_ActorOfProcessForTransient {
}

class Transfer_Binder extends Standard_Transient {
}

class Transfer_BinderOfTransientInteger extends Transfer_SimpleBinderOfTransient {
}

class Transfer_DataInfo {
}

class Transfer_DispatchControl extends Interface_CopyControl {
}

class Transfer_FindHasher {
}

class Transfer_Finder extends Standard_Transient {
}

class Transfer_FinderProcess extends Transfer_ProcessForFinder {
}

class Transfer_IteratorOfProcessForFinder extends Transfer_TransferIterator {
}

class Transfer_IteratorOfProcessForTransient extends Transfer_TransferIterator {
}

class Transfer_MapContainer extends Standard_Transient {
}

class Transfer_MultipleBinder extends Transfer_Binder {
}

class Transfer_ProcessForFinder extends Standard_Transient {
}

class Transfer_ProcessForTransient extends Standard_Transient {
}

class Transfer_ResultFromModel extends Standard_Transient {
}

class Transfer_ResultFromTransient extends Standard_Transient {
}

class Transfer_SimpleBinderOfTransient extends Transfer_Binder {
}

class Transfer_TransferDeadLoop extends Transfer_TransferFailure {
}

class Transfer_TransferDispatch extends Interface_CopyTool {
}

class Transfer_TransferFailure extends Interface_InterfaceError {
}

class Transfer_TransferInput {
}

class Transfer_TransferIterator {
}

class Transfer_TransferOutput {
}

class Transfer_TransientListBinder extends Transfer_Binder {
}

class Transfer_TransientMapper extends Transfer_Finder {
}

class Transfer_TransientProcess extends Transfer_ProcessForTransient {
}

class Transfer_VoidBinder extends Transfer_Binder {
}

class Units {
}

class UnitsAPI {
}

class UnitsMethods {
}

class Units_Dimensions extends Standard_Transient {
}

class Units_Explorer {
}

class Units_Lexicon extends Standard_Transient {
}

class Units_MathSentence extends Units_Sentence {
}

class Units_Measurement {
}

class Units_NoSuchType extends Standard_NoSuchObject {
}

class Units_NoSuchUnit extends Standard_NoSuchObject {
}

class Units_Quantity extends Standard_Transient {
}

class Units_Sentence {
}

class Units_ShiftedToken extends Units_Token {
}

class Units_ShiftedUnit extends Units_Unit {
}

class Units_Token extends Standard_Transient {
}

class Units_Unit extends Standard_Transient {
}

class Units_UnitSentence extends Units_Sentence {
}

class Units_UnitsDictionary extends Standard_Transient {
}

class Units_UnitsLexicon extends Units_Lexicon {
}

class Units_UnitsSystem extends Standard_Transient {
}

class V3d {
}

class V3d_AmbientLight extends Graphic3d_CLight {
}

class V3d_BadValue extends Standard_OutOfRange {
}

class V3d_CircularGrid extends Aspect_CircularGrid {
}

class V3d_DirectionalLight extends V3d_PositionLight {
}

class V3d_Plane extends Standard_Transient {
}

class V3d_PositionLight extends Graphic3d_CLight {
}

class V3d_PositionalLight extends V3d_PositionLight {
}

class V3d_RectangularGrid extends Aspect_RectangularGrid {
}

class V3d_SpotLight extends V3d_PositionLight {
}

class V3d_Trihedron extends Standard_Transient {
}

class V3d_UnMapped extends Standard_DomainError {
}

class V3d_View extends Standard_Transient {
}

class V3d_Viewer extends Standard_Transient {
}

class Vrml {
}

class VrmlAPI {
}

class VrmlAPI_Writer {
}

class VrmlConverter_Curve {
}

class VrmlConverter_DeflectionCurve {
}

class VrmlConverter_Drawer extends Standard_Transient {
}

class VrmlConverter_HLRShape {
}

class VrmlConverter_IsoAspect extends VrmlConverter_LineAspect {
}

class VrmlConverter_LineAspect extends Standard_Transient {
}

class VrmlConverter_PointAspect extends Standard_Transient {
}

class VrmlConverter_Projector extends Standard_Transient {
}

class VrmlConverter_ShadedShape {
}

class VrmlConverter_ShadingAspect extends Standard_Transient {
}

class VrmlConverter_WFDeflectionRestrictedFace {
}

class VrmlConverter_WFDeflectionShape {
}

class VrmlConverter_WFRestrictedFace {
}

class VrmlConverter_WFShape {
}

class VrmlData_Appearance extends VrmlData_Node {
}

class VrmlData_ArrayVec3d extends VrmlData_Node {
}

class VrmlData_Box extends VrmlData_Geometry {
}

class VrmlData_Color extends VrmlData_ArrayVec3d {
}

class VrmlData_Cone extends VrmlData_Geometry {
}

class VrmlData_Coordinate extends VrmlData_ArrayVec3d {
}

class VrmlData_Cylinder extends VrmlData_Geometry {
}

class VrmlData_Faceted extends VrmlData_Geometry {
}

class VrmlData_Geometry extends VrmlData_Node {
}

class VrmlData_Group extends VrmlData_Node {
}

class VrmlData_ImageTexture extends VrmlData_Texture {
}

class VrmlData_Material extends VrmlData_Node {
}

class VrmlData_Normal extends VrmlData_ArrayVec3d {
}

class VrmlData_ShapeConvert {
}

class VrmlData_ShapeNode extends VrmlData_Node {
}

class VrmlData_Sphere extends VrmlData_Geometry {
}

class VrmlData_Texture extends VrmlData_Node {
}

class VrmlData_TextureCoordinate extends VrmlData_Node {
}

class VrmlData_TextureTransform extends VrmlData_Node {
}

class VrmlData_UnknownNode extends VrmlData_Node {
}

class VrmlData_WorldInfo extends VrmlData_Node {
}

class Vrml_AsciiText extends Standard_Transient {
}

class Vrml_Cone {
}

class Vrml_Coordinate3 extends Standard_Transient {
}

class Vrml_Cube {
}

class Vrml_Cylinder {
}

class Vrml_DirectionalLight {
}

class Vrml_FontStyle {
}

class Vrml_Group {
}

class Vrml_IndexedFaceSet extends Standard_Transient {
}

class Vrml_IndexedLineSet extends Standard_Transient {
}

class Vrml_Info {
}

class Vrml_Instancing {
}

class Vrml_LOD extends Standard_Transient {
}

class Vrml_Material extends Standard_Transient {
}

class Vrml_MaterialBinding {
}

class Vrml_MatrixTransform {
}

class Vrml_Normal extends Standard_Transient {
}

class Vrml_NormalBinding {
}

class Vrml_OrthographicCamera {
}

class Vrml_PerspectiveCamera {
}

class Vrml_PointLight {
}

class Vrml_PointSet {
}

class Vrml_Rotation {
}

class Vrml_SFImage extends Standard_Transient {
}

class Vrml_SFRotation {
}

class Vrml_Scale {
}

class Vrml_Separator {
}

class Vrml_ShapeHints {
}

class Vrml_Sphere {
}

class Vrml_SpotLight {
}

class Vrml_Switch {
}

class Vrml_Texture2 {
}

class Vrml_Texture2Transform {
}

class Vrml_TextureCoordinate2 extends Standard_Transient {
}

class Vrml_Transform {
}

class Vrml_TransformSeparator {
}

class Vrml_Translation {
}

class Vrml_WWWAnchor {
}

class Vrml_WWWInline {
}

class WNT_ClassDefinitionError extends Standard_ConstructionError {
}

class XCAFDimTolObjects_DatumObject extends Standard_Transient {
}

class XCAFDimTolObjects_DimensionObject extends Standard_Transient {
}

class XCAFDimTolObjects_GeomToleranceObject extends Standard_Transient {
}

class XCAFDimTolObjects_Tool {
}

class XCAFDoc {
}

class XCAFDoc_Area extends TDF_Attribute {
}

class XCAFDoc_AssemblyItemId {
}

class XCAFDoc_AssemblyItemRef extends TDF_Attribute {
}

class XCAFDoc_Centroid extends TDF_Attribute {
}

class XCAFDoc_ClippingPlaneTool extends TDF_Attribute {
}

class XCAFDoc_Color extends TDF_Attribute {
}

class XCAFDoc_ColorTool extends TDF_Attribute {
}

class XCAFDoc_Datum extends TDF_Attribute {
}

class XCAFDoc_DimTol extends TDF_Attribute {
}

class XCAFDoc_DimTolTool extends TDF_Attribute {
}

class XCAFDoc_Dimension extends TDF_Attribute {
}

class XCAFDoc_DocumentTool extends TDF_Attribute {
}

class XCAFDoc_Editor {
}

class XCAFDoc_GraphNode extends TDF_Attribute {
}

class XCAFDoc_LayerTool extends TDF_Attribute {
}

class XCAFDoc_Location extends TDF_Attribute {
}

class XCAFDoc_Material extends TDF_Attribute {
}

class XCAFDoc_MaterialTool extends TDF_Attribute {
}

class XCAFDoc_Note extends TDF_Attribute {
}

class XCAFDoc_NoteBalloon extends XCAFDoc_NoteComment {
}

class XCAFDoc_NoteBinData extends XCAFDoc_Note {
}

class XCAFDoc_NoteComment extends XCAFDoc_Note {
}

class XCAFDoc_NotesTool extends TDF_Attribute {
}

class XCAFDoc_ShapeMapTool extends TDF_Attribute {
}

class XCAFDoc_ShapeTool extends TDF_Attribute {
}

class XCAFDoc_View extends TDF_Attribute {
}

class XCAFDoc_ViewTool extends TDF_Attribute {
}

class XCAFDoc_Volume extends TDF_Attribute {
}

class XCAFNoteObjects_NoteObject extends Standard_Transient {
}

class XCAFPrs {
}

class XCAFPrs_AISObject extends AIS_ColoredShape {
}

class XCAFPrs_DocumentExplorer {
}

class XCAFPrs_DocumentIdIterator {
}

class XCAFPrs_Driver extends TPrsStd_Driver {
}

class XCAFPrs_Style {
}

class XCAFView_Object extends Standard_Transient {
}

class XSAlgo {
}

class XSAlgo_AlgoContainer extends Standard_Transient {
}

class XSAlgo_ToolContainer extends Standard_Transient {
}

class XSControl {
}

class XSControl_ConnectedShapes extends IFSelect_SelectExplore {
}

class XSControl_Controller extends Standard_Transient {
}

class XSControl_FuncShape {
}

class XSControl_Functions {
}

class XSControl_Reader {
}

class XSControl_SelectForTransfer extends IFSelect_SelectExtract {
}

class XSControl_SignTransferStatus extends IFSelect_Signature {
}

class XSControl_TransferReader extends Standard_Transient {
}

class XSControl_TransferWriter extends Standard_Transient {
}

class XSControl_Utils {
}

class XSControl_Vars extends Standard_Transient {
}

class XSControl_WorkSession extends IFSelect_WorkSession {
}

class XSControl_Writer {
}

class XmlDrivers {
}

class XmlDrivers_DocumentRetrievalDriver extends XmlLDrivers_DocumentRetrievalDriver {
}

class XmlDrivers_DocumentStorageDriver extends XmlLDrivers_DocumentStorageDriver {
}

class XmlLDrivers {
}

class XmlLDrivers_DocumentRetrievalDriver extends PCDM_RetrievalDriver {
}

class XmlLDrivers_DocumentStorageDriver extends PCDM_StorageDriver {
}

class XmlLDrivers_NamespaceDef {
}

class XmlMDF {
}

class XmlMDF_ADriver extends Standard_Transient {
}

class XmlMDF_ADriverTable extends Standard_Transient {
}

class XmlMDF_ReferenceDriver extends XmlMDF_ADriver {
}

class XmlMDF_TagSourceDriver extends XmlMDF_ADriver {
}

class XmlMDataStd {
}

class XmlMDataStd_AsciiStringDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_BooleanArrayDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_BooleanListDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_ByteArrayDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_CommentDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_DirectoryDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_ExpressionDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_ExtStringArrayDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_ExtStringListDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_IntPackedMapDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_IntegerArrayDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_IntegerDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_IntegerListDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_NameDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_NamedDataDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_NoteBookDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_RealArrayDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_RealDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_RealListDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_ReferenceArrayDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_ReferenceListDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_RelationDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_TickDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_TreeNodeDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_UAttributeDriver extends XmlMDF_ADriver {
}

class XmlMDataStd_VariableDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd {
}

class XmlMDataXtd_AxisDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_ConstraintDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_GeometryDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_PatternStdDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_PlacementDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_PlaneDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_PointDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_PositionDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_PresentationDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_ShapeDriver extends XmlMDF_ADriver {
}

class XmlMDataXtd_TriangulationDriver extends XmlMDF_ADriver {
}

class XmlMDocStd {
}

class XmlMDocStd_XLinkDriver extends XmlMDF_ADriver {
}

class XmlMFunction {
}

class XmlMFunction_FunctionDriver extends XmlMDF_ADriver {
}

class XmlMFunction_GraphNodeDriver extends XmlMDF_ADriver {
}

class XmlMFunction_ScopeDriver extends XmlMDF_ADriver {
}

class XmlMNaming {
}

class XmlMNaming_NamedShapeDriver extends XmlMDF_ADriver {
}

class XmlMNaming_NamingDriver extends XmlMDF_ADriver {
}

class XmlMNaming_Shape1 {
}

class XmlMXCAFDoc {
}

class XmlMXCAFDoc_AreaDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_AssemblyItemRefDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_CentroidDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_ClippingPlaneToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_ColorDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_ColorToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_DatumDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_DimTolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_DimTolToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_DocumentToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_GraphNodeDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_LayerToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_LocationDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_MaterialDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_MaterialToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_NoteBalloonDriver extends XmlMXCAFDoc_NoteCommentDriver {
}

class XmlMXCAFDoc_NoteBinDataDriver extends XmlMXCAFDoc_NoteDriver {
}

class XmlMXCAFDoc_NoteCommentDriver extends XmlMXCAFDoc_NoteDriver {
}

class XmlMXCAFDoc_NoteDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_NotesToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_ShapeToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_ViewToolDriver extends XmlMDF_ADriver {
}

class XmlMXCAFDoc_VolumeDriver extends XmlMDF_ADriver {
}

class XmlObjMgt {
}

class XmlObjMgt_Array1 {
}

class XmlObjMgt_GP {
}

class XmlObjMgt_Persistent {
}

class XmlObjMgt_RRelocationTable extends TColStd_DataMapOfIntegerTransient {
}

class XmlObjMgt_SRelocationTable extends TColStd_IndexedMapOfTransient {
}

class XmlTObjDrivers {
}

class XmlTObjDrivers_DocumentRetrievalDriver extends XmlLDrivers_DocumentRetrievalDriver {
}

class XmlTObjDrivers_DocumentStorageDriver extends XmlLDrivers_DocumentStorageDriver {
}

class XmlTObjDrivers_IntSparseArrayDriver extends XmlMDF_ADriver {
}

class XmlTObjDrivers_ModelDriver extends XmlMDF_ADriver {
}

class XmlTObjDrivers_ObjectDriver extends XmlMDF_ADriver {
}

class XmlTObjDrivers_ReferenceDriver extends XmlMDF_ADriver {
}

class XmlTObjDrivers_XYZDriver extends XmlMDF_ADriver {
}

class XmlXCAFDrivers {
}

class XmlXCAFDrivers_DocumentRetrievalDriver extends XmlDrivers_DocumentRetrievalDriver {
}

class XmlXCAFDrivers_DocumentStorageDriver extends XmlDrivers_DocumentStorageDriver {
}

class gce_MakeCirc extends gce_Root {
}

class gce_MakeCirc2d extends gce_Root {
}

class gce_MakeCone extends gce_Root {
}

class gce_MakeCylinder extends gce_Root {
}

class gce_MakeDir extends gce_Root {
}

class gce_MakeDir2d extends gce_Root {
}

class gce_MakeElips extends gce_Root {
}

class gce_MakeElips2d extends gce_Root {
}

class gce_MakeHypr extends gce_Root {
}

class gce_MakeHypr2d extends gce_Root {
}

class gce_MakeLin extends gce_Root {
}

class gce_MakeLin2d extends gce_Root {
}

class gce_MakeMirror {
}

class gce_MakeMirror2d {
}

class gce_MakeParab extends gce_Root {
}

class gce_MakeParab2d extends gce_Root {
}

class gce_MakePln extends gce_Root {
}

class gce_MakeRotation {
}

class gce_MakeRotation2d {
}

class gce_MakeScale {
}

class gce_MakeScale2d {
}

class gce_MakeTranslation {
}

class gce_MakeTranslation2d {
}

class gce_Root {
}

class gp {
}

class gp_Ax1 {
}

class gp_Ax2 {
}

class gp_Ax22d {
}

class gp_Ax2d {
}

class gp_Ax3 {
}

class gp_Circ {
}

class gp_Circ2d {
}

class gp_Cone {
}

class gp_Cylinder {
}

class gp_Dir {
}

class gp_Dir2d {
}

class gp_Elips {
}

class gp_Elips2d {
}

class gp_GTrsf {
}

class gp_GTrsf2d {
}

class gp_Hypr {
}

class gp_Hypr2d {
}

class gp_Lin {
}

class gp_Lin2d {
}

class gp_Mat {
}

class gp_Mat2d {
}

class gp_Parab {
}

class gp_Parab2d {
}

class gp_Pln {
}

class gp_Pnt {
}

class gp_Pnt2d {
}

class gp_Quaternion {
}

class gp_QuaternionNLerp {
}

class gp_QuaternionSLerp {
}

class gp_Sphere {
}

class gp_Torus {
}

class gp_Trsf {
}

class gp_Trsf2d {
}

class gp_Vec {
}

class gp_Vec2d {
}

class gp_XY {
}

class gp_XYZ {
}

class math {
}

class math_BFGS {
}

class math_BissecNewton {
}

class math_BracketMinimum {
}

class math_BracketedRoot {
}

class math_BrentMinimum {
}

class math_BullardGenerator {
}

class math_ComputeGaussPointsAndWeights {
}

class math_ComputeKronrodPointsAndWeights {
}

class math_Crout {
}

class math_DirectPolynomialRoots {
}

class math_DoubleTab {
}

class math_EigenValuesSearcher {
}

class math_FRPR {
}

class math_Function {
}

class math_FunctionAllRoots {
}

class math_FunctionRoot {
}

class math_FunctionRoots {
}

class math_FunctionSample {
}

class math_FunctionSet {
}

class math_FunctionSetRoot {
}

class math_FunctionSetWithDerivatives extends math_FunctionSet {
}

class math_FunctionWithDerivative extends math_Function {
}

class math_Gauss {
}

class math_GaussLeastSquare {
}

class math_GaussMultipleIntegration {
}

class math_GaussSetIntegration {
}

class math_GaussSingleIntegration {
}

class math_GlobOptMin {
}

class math_Jacobi {
}

class math_KronrodSingleIntegration {
}

class math_MultipleVarFunction {
}

class math_MultipleVarFunctionWithGradient extends math_MultipleVarFunction {
}

class math_MultipleVarFunctionWithHessian extends math_MultipleVarFunctionWithGradient {
}

class math_NewtonFunctionRoot {
}

class math_NotSquare extends Standard_DimensionError {
}

class math_PSO {
}

class math_PSOParticlesPool {
}

class math_Powell {
}

class math_SVD {
}

class math_SingularMatrix extends Standard_Failure {
}

class math_TrigonometricEquationFunction extends math_FunctionWithDerivative {
}

class math_TrigonometricFunctionRoots {
}

class math_Uzawa {
}

class math_ValueAndWeight {
}

