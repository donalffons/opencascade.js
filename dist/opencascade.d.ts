export default opencascade;
declare function opencascade<T>(target?: T): Promise<T & typeof opencascade>;
declare module opencascade {
  function destroy(obj: any): void;
  function _malloc(size: number): number;
  function _free(ptr: number): void;
  const HEAP8: Int8Array;
  const HEAP16: Int16Array;
  const HEAP32: Int32Array;
  const HEAPU8: Uint8Array;
  const HEAPU16: Uint16Array;
  const HEAPU32: Uint32Array;
  const HEAPF32: Float32Array;
  const HEAPF64: Float64Array;
  type Standard_Real = number;
  type Standard_Boolean = boolean;
  type Standard_Integer = number;
  type Standard_CString = string;

  class APIHeaderSection_EditHeader extends IFSelect_Editor {
    constructor();
  }
  class APIHeaderSection_MakeHeader {
  }
  class Adaptor2d_Curve2d {
    constructor();
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
    constructor();
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
    constructor();
  }
  class Adaptor3d_HVertex extends Standard_Transient {
  }
  class Adaptor3d_InterFunc extends math_FunctionWithDerivative {
    constructor();
  }
  class Adaptor3d_IsoCurve extends Adaptor3d_Curve {
  }
  class Adaptor3d_Surface {
    constructor();
  }
  class Adaptor3d_TopolTool extends Standard_Transient {
  }
  class AdvApp2Var_ApproxAFunc2Var {
  }
  class AdvApp2Var_ApproxF2var {
    constructor();
  }
  class AdvApp2Var_Context {
  }
  class AdvApp2Var_Criterion {
  }
  class AdvApp2Var_Data {
    constructor();
  }
  class AdvApp2Var_EvaluatorFunc2Var {
  }
  class AdvApp2Var_MathBase {
    constructor();
  }
  class AdvApp2Var_Node {
  }
  class AdvApp2Var_Patch {
  }
  class AdvApp2Var_SysBase {
    constructor();
  }
  class AdvApprox_ApproxAFunction {
  }
  class AdvApprox_Cutting {
  }
  class AdvApprox_DichoCutting extends AdvApprox_Cutting {
    constructor();
  }
  class AdvApprox_EvaluatorFunction {
  }
  class AdvApprox_PrefAndRec extends AdvApprox_Cutting {
    constructor();
  }
  class AdvApprox_PrefCutting extends AdvApprox_Cutting {
    constructor();
  }
  class AdvApprox_SimpleApprox {
    constructor();
  }
  class AppBlend_Approx {
  }
  class AppCont_Function {
  }
  class AppCont_LeastSquare {
    constructor();
  }
  class AppParCurves {
    constructor();
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
    constructor();
  }
  class AppStd_Application extends TDocStd_Application {
    constructor();
  }
  class ApproxInt_KnotTools {
    constructor();
  }
  class ApproxInt_SvSurfaces {
  }
  class Approx_Curve2d {
    constructor();
  }
  class Approx_Curve3d {
    constructor();
  }
  class Approx_CurveOnSurface {
    constructor();
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
    constructor();
  }
  class Approx_SameParameter {
  }
  class Approx_SweepApproximation {
    constructor();
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
    constructor();
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
    constructor();
  }
  class BRepAlgoAPI_Fuse extends BRepAlgoAPI_BooleanOperation {
  }
  class BRepAlgoAPI_Section extends BRepAlgoAPI_BooleanOperation {
  }
  class BRepAlgoAPI_Splitter extends BRepAlgoAPI_BuilderAlgo {
  }
  class BRepAlgo_AsDes extends Standard_Transient {
    constructor();
  }
  class BRepAlgo_BooleanOperation extends BRepBuilderAPI_MakeShape {
  }
  class BRepAlgo_Common extends BRepAlgo_BooleanOperation {
    constructor();
  }
  class BRepAlgo_Cut extends BRepAlgo_BooleanOperation {
    constructor();
  }
  class BRepAlgo_FaceRestrictor {
    constructor();
  }
  class BRepAlgo_Fuse extends BRepAlgo_BooleanOperation {
    constructor();
  }
  class BRepAlgo_Image {
    constructor();
  }
  class BRepAlgo_Loop {
    constructor();
  }
  class BRepAlgo_NormalProjection {
  }
  class BRepAlgo_Section extends BRepAlgo_BooleanOperation {
  }
  class BRepAlgo_Tool {
    constructor();
  }
  class BRepApprox_ApproxLine extends Standard_Transient {
  }
  class BRepApprox_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfApprox extends math_BFGS {
    constructor();
  }
  class BRepApprox_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfApprox extends math_MultipleVarFunctionWithGradient {
    constructor();
  }
  class BRepApprox_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfApprox {
  }
  class BRepApprox_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfApprox extends math_BFGS {
    constructor();
  }
  class BRepApprox_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfApprox extends math_BFGS {
    constructor();
  }
  class BRepApprox_MyBSplGradientOfTheComputeLineOfApprox {
  }
  class BRepApprox_MyGradientOfTheComputeLineBezierOfApprox {
    constructor();
  }
  class BRepApprox_MyGradientbisOfTheComputeLineOfApprox {
    constructor();
  }
  class BRepApprox_ParFunctionOfMyGradientOfTheComputeLineBezierOfApprox extends math_MultipleVarFunctionWithGradient {
    constructor();
  }
  class BRepApprox_ParFunctionOfMyGradientbisOfTheComputeLineOfApprox extends math_MultipleVarFunctionWithGradient {
    constructor();
  }
  class BRepApprox_ParLeastSquareOfMyGradientOfTheComputeLineBezierOfApprox {
  }
  class BRepApprox_ParLeastSquareOfMyGradientbisOfTheComputeLineOfApprox {
  }
  class BRepApprox_SurfaceTool {
    constructor();
  }
  class BRepApprox_TheComputeLineBezierOfApprox {
  }
  class BRepApprox_TheComputeLineOfApprox {
  }
  class BRepApprox_TheFunctionOfTheInt2SOfThePrmPrmSvSurfacesOfApprox extends math_FunctionSetWithDerivatives {
    constructor();
  }
  class BRepApprox_TheImpPrmSvSurfacesOfApprox extends ApproxInt_SvSurfaces {
  }
  class BRepApprox_TheInt2SOfThePrmPrmSvSurfacesOfApprox {
  }
  class BRepApprox_TheMultiLineOfApprox {
  }
  class BRepApprox_TheMultiLineToolOfApprox {
    constructor();
  }
  class BRepApprox_ThePrmPrmSvSurfacesOfApprox extends ApproxInt_SvSurfaces {
    constructor();
  }
  class BRepApprox_TheZerImpFuncOfTheImpPrmSvSurfacesOfApprox extends math_FunctionSetWithDerivatives {
  }
  class BRepBlend_AppFunc extends BRepBlend_AppFuncRoot {
    constructor();
  }
  class BRepBlend_AppFuncRoot extends Approx_SweepFunction {
  }
  class BRepBlend_AppFuncRst extends BRepBlend_AppFuncRoot {
    constructor();
  }
  class BRepBlend_AppFuncRstRst extends BRepBlend_AppFuncRoot {
    constructor();
  }
  class BRepBlend_AppSurf extends AppBlend_Approx {
  }
  class BRepBlend_AppSurface extends AppBlend_Approx {
    constructor();
  }
  class BRepBlend_BlendTool {
    constructor();
  }
  class BRepBlend_CSWalking {
    constructor();
  }
  class BRepBlend_CurvPointRadInv extends Blend_CurvPointFuncInv {
    constructor();
  }
  class BRepBlend_Extremity {
  }
  class BRepBlend_HCurve2dTool {
    constructor();
  }
  class BRepBlend_HCurveTool {
    constructor();
  }
  class BRepBlend_Line extends Standard_Transient {
    constructor();
  }
  class BRepBlend_PointOnRst {
  }
  class BRepBlend_RstRstConstRad extends Blend_RstRstFunction {
    constructor();
  }
  class BRepBlend_RstRstEvolRad extends Blend_RstRstFunction {
    constructor();
  }
  class BRepBlend_RstRstLineBuilder {
    constructor();
  }
  class BRepBlend_SurfCurvConstRadInv extends Blend_SurfCurvFuncInv {
    constructor();
  }
  class BRepBlend_SurfCurvEvolRadInv extends Blend_SurfCurvFuncInv {
    constructor();
  }
  class BRepBlend_SurfPointConstRadInv extends Blend_SurfPointFuncInv {
    constructor();
  }
  class BRepBlend_SurfPointEvolRadInv extends Blend_SurfPointFuncInv {
    constructor();
  }
  class BRepBlend_SurfRstConstRad extends Blend_SurfRstFunction {
    constructor();
  }
  class BRepBlend_SurfRstEvolRad extends Blend_SurfRstFunction {
    constructor();
  }
  class BRepBlend_SurfRstLineBuilder {
    constructor();
  }
  class BRepBlend_Walking {
    constructor();
  }
  class BRepBndLib {
    constructor();
  }
  class BRepBuilderAPI {
    constructor();
  }
  class BRepBuilderAPI_BndBoxTreeSelector extends BRepBuilderAPI_BndBoxTree::Selector {
    constructor();
  }
  class BRepBuilderAPI_Collect {
    constructor();
  }
  class BRepBuilderAPI_Command {
  }
  class BRepBuilderAPI_Copy extends BRepBuilderAPI_ModifyShape {
  }
  class BRepBuilderAPI_FastSewing extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class BRepBuilderAPI_MakeWire extends BRepBuilderAPI_MakeShape {
  }
  class BRepBuilderAPI_ModifyShape extends BRepBuilderAPI_MakeShape {
  }
  class BRepBuilderAPI_NurbsConvert extends BRepBuilderAPI_ModifyShape {
  }
  class BRepBuilderAPI_Sewing extends Standard_Transient {
    constructor();
  }
  class BRepBuilderAPI_Transform extends BRepBuilderAPI_ModifyShape {
  }
  class BRepBuilderAPI_VertexInspector extends NCollection_CellFilter_InspectorXYZ {
    constructor();
  }
  class BRepCheck {
    constructor();
  }
  class BRepCheck_Analyzer {
    constructor();
  }
  class BRepCheck_Edge extends BRepCheck_Result {
    constructor();
  }
  class BRepCheck_Face extends BRepCheck_Result {
    constructor();
  }
  class BRepCheck_Result extends Standard_Transient {
  }
  class BRepCheck_Shell extends BRepCheck_Result {
    constructor();
  }
  class BRepCheck_Solid extends BRepCheck_Result {
    constructor();
  }
  class BRepCheck_Vertex extends BRepCheck_Result {
    constructor();
  }
  class BRepCheck_Wire extends BRepCheck_Result {
    constructor();
  }
  class BRepClass3d {
    constructor();
  }
  class BRepClass3d_BndBoxTreeSelectorLine extends BRepClass3d_BndBoxTree::Selector {
    constructor();
  }
  class BRepClass3d_BndBoxTreeSelectorPoint extends BRepClass3d_BndBoxTree::Selector {
    constructor();
  }
  class BRepClass3d_Intersector3d {
    constructor();
  }
  class BRepClass3d_SClassifier {
  }
  class BRepClass3d_SolidClassifier extends BRepClass3d_SClassifier {
  }
  class BRepClass3d_SolidExplorer {
  }
  class BRepClass3d_SolidPassiveClassifier {
    constructor();
  }
  class BRepClass_Edge {
  }
  class BRepClass_FClass2dOfFClassifier {
    constructor();
  }
  class BRepClass_FClassifier {
  }
  class BRepClass_FaceClassifier extends BRepClass_FClassifier {
  }
  class BRepClass_FaceExplorer {
    constructor();
  }
  class BRepClass_FacePassiveClassifier {
    constructor();
  }
  class BRepClass_Intersector extends Geom2dInt_IntConicCurveOfGInter {
    constructor();
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
  class BRepExtrema_OverlapTool extends BVH_PairTraverse<Standard_Real, 3> {
  }
  class BRepExtrema_Poly {
    constructor();
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
    constructor();
  }
  class BRepFeat_Form extends BRepBuilderAPI_MakeShape {
  }
  class BRepFeat_Gluer extends BRepBuilderAPI_MakeShape {
  }
  class BRepFeat_MakeCylindricalHole extends BRepFeat_Builder {
    constructor();
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
    constructor();
  }
  class BRepFill_ACRLaw extends BRepFill_LocationLaw {
    constructor();
  }
  class BRepFill_AdvancedEvolved {
    constructor();
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
    constructor();
  }
  class BRepFill_DraftLaw extends BRepFill_Edge3DLaw {
    constructor();
  }
  class BRepFill_Edge3DLaw extends BRepFill_LocationLaw {
    constructor();
  }
  class BRepFill_EdgeFaceAndOrder {
  }
  class BRepFill_EdgeOnSurfLaw extends BRepFill_LocationLaw {
    constructor();
  }
  class BRepFill_Evolved {
  }
  class BRepFill_FaceAndOrder {
  }
  class BRepFill_Filling {
    constructor();
  }
  class BRepFill_Generator {
    constructor();
  }
  class BRepFill_LocationLaw extends Standard_Transient {
    constructor();
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
    constructor();
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
    constructor();
  }
  class BRepFill_TrimEdgeTool {
  }
  class BRepFill_TrimShellCorner {
    constructor();
  }
  class BRepFill_TrimSurfaceTool {
    constructor();
  }
  class BRepFilletAPI_LocalOperation extends BRepBuilderAPI_MakeShape {
  }
  class BRepFilletAPI_MakeChamfer extends BRepFilletAPI_LocalOperation {
    constructor();
  }
  class BRepFilletAPI_MakeFillet extends BRepFilletAPI_LocalOperation {
    constructor();
  }
  class BRepFilletAPI_MakeFillet2d extends BRepBuilderAPI_MakeShape {
  }
  class BRepGProp {
    constructor();
  }
  class BRepGProp_Cinert extends GProp_GProps {
  }
  class BRepGProp_Domain {
  }
  class BRepGProp_EdgeTool {
    constructor();
  }
  class BRepGProp_Face {
  }
  class BRepGProp_MeshCinert extends GProp_GProps {
    constructor();
  }
  class BRepGProp_MeshProps extends GProp_GProps {
    constructor();
  }
  class BRepGProp_Sinert extends GProp_GProps {
  }
  class BRepGProp_TFunction extends math_Function {
    constructor();
  }
  class BRepGProp_UFunction extends math_Function {
    constructor();
  }
  class BRepGProp_Vinert extends GProp_GProps {
  }
  class BRepIntCurveSurface_Inter {
    constructor();
  }
  class BRepLProp {
    constructor();
  }
  class BRepLProp_CLProps {
  }
  class BRepLProp_CurveTool {
    constructor();
  }
  class BRepLProp_SLProps {
  }
  class BRepLProp_SurfaceTool {
    constructor();
  }
  class BRepLib {
    constructor();
  }
  class BRepLib_CheckCurveOnSurface {
  }
  class BRepLib_Command {
  }
  class BRepLib_FindSurface {
  }
  class BRepLib_FuseEdges {
    constructor();
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
    constructor();
  }
  class BRepLib_MakeWire extends BRepLib_MakeShape {
  }
  class BRepMAT2d_BisectingLocus {
    constructor();
  }
  class BRepMAT2d_Explorer {
  }
  class BRepMAT2d_LinkTopoBilo {
  }
  class BRepMesh_BaseMeshAlgo extends IMeshTools_MeshAlgo {
  }
  class BRepMesh_BoundaryParamsRangeSplitter extends BRepMesh_NURBSRangeSplitter {
    constructor();
  }
  class BRepMesh_Circle {
  }
  class BRepMesh_CircleInspector extends NCollection_CellFilter_InspectorXY {
    constructor();
  }
  class BRepMesh_CircleTool {
  }
  class BRepMesh_Classifier extends Standard_Transient {
    constructor();
  }
  class BRepMesh_ConeRangeSplitter extends BRepMesh_DefaultRangeSplitter {
    constructor();
  }
  class BRepMesh_ConstrainedBaseMeshAlgo extends BRepMesh_BaseMeshAlgo {
  }
  class BRepMesh_Context extends IMeshTools_Context {
    constructor();
  }
  class BRepMesh_CurveTessellator extends IMeshTools_CurveTessellator {
  }
  class BRepMesh_CustomBaseMeshAlgo extends BRepMesh_ConstrainedBaseMeshAlgo {
  }
  class BRepMesh_CylinderRangeSplitter extends BRepMesh_DefaultRangeSplitter {
    constructor();
  }
  class BRepMesh_DataStructureOfDelaun extends Standard_Transient {
    constructor();
  }
  class BRepMesh_DefaultRangeSplitter {
    constructor();
  }
  class BRepMesh_Deflection extends Standard_Transient {
    constructor();
  }
  class BRepMesh_Delaun {
  }
  class BRepMesh_DelaunayBaseMeshAlgo extends BRepMesh_ConstrainedBaseMeshAlgo {
    constructor();
  }
  class BRepMesh_DiscretFactory {
  }
  class BRepMesh_DiscretRoot extends Standard_Transient {
  }
  class BRepMesh_Edge extends BRepMesh_OrientedEdge {
  }
  class BRepMesh_EdgeDiscret extends IMeshTools_ModelAlgo {
    constructor();
  }
  class BRepMesh_EdgeTessellationExtractor extends IMeshTools_CurveTessellator {
    constructor();
  }
  class BRepMesh_FaceChecker extends Standard_Transient {
    constructor();
  }
  class BRepMesh_FaceDiscret extends IMeshTools_ModelAlgo {
    constructor();
  }
  class BRepMesh_FastDiscret {
    constructor();
  }
  class BRepMesh_GeomTool {
  }
  class BRepMesh_IncrementalMesh extends BRepMesh_DiscretRoot {
  }
  class BRepMesh_MeshAlgoFactory extends IMeshTools_MeshAlgoFactory {
    constructor();
  }
  class BRepMesh_MeshTool extends Standard_Transient {
    constructor();
  }
  class BRepMesh_ModelBuilder extends IMeshTools_ModelBuilder {
    constructor();
  }
  class BRepMesh_ModelHealer extends IMeshTools_ModelAlgo {
    constructor();
  }
  class BRepMesh_ModelPostProcessor extends IMeshTools_ModelAlgo {
    constructor();
  }
  class BRepMesh_ModelPreProcessor extends IMeshTools_ModelAlgo {
    constructor();
  }
  class BRepMesh_NURBSRangeSplitter extends BRepMesh_UVParamRangeSplitter {
    constructor();
  }
  class BRepMesh_OrientedEdge {
  }
  class BRepMesh_PairOfIndex {
    constructor();
  }
  class BRepMesh_SelectorOfDataStructureOfDelaun extends Standard_Transient {
  }
  class BRepMesh_ShapeTool extends Standard_Transient {
    constructor();
  }
  class BRepMesh_ShapeVisitor extends IMeshTools_ShapeVisitor {
    constructor();
  }
  class BRepMesh_SphereRangeSplitter extends BRepMesh_DefaultRangeSplitter {
    constructor();
  }
  class BRepMesh_TorusRangeSplitter extends BRepMesh_UVParamRangeSplitter {
    constructor();
  }
  class BRepMesh_Triangle {
  }
  class BRepMesh_UVParamRangeSplitter extends BRepMesh_DefaultRangeSplitter {
    constructor();
  }
  class BRepMesh_Vertex {
  }
  class BRepMesh_VertexInspector extends NCollection_CellFilter_InspectorXY {
    constructor();
  }
  class BRepMesh_VertexTool extends Standard_Transient {
    constructor();
  }
  class BRepOffset {
    constructor();
  }
  class BRepOffsetAPI_DraftAngle extends BRepBuilderAPI_ModifyShape {
  }
  class BRepOffsetAPI_MakeDraft extends BRepBuilderAPI_MakeShape {
    constructor();
  }
  class BRepOffsetAPI_MakeEvolved extends BRepBuilderAPI_MakeShape {
  }
  class BRepOffsetAPI_MakeFilling extends BRepBuilderAPI_MakeShape {
    constructor();
  }
  class BRepOffsetAPI_MakeOffset extends BRepBuilderAPI_MakeShape {
  }
  class BRepOffsetAPI_MakeOffsetShape extends BRepBuilderAPI_MakeShape {
  }
  class BRepOffsetAPI_MakePipe extends BRepPrimAPI_MakeSweep {
  }
  class BRepOffsetAPI_MakePipeShell extends BRepPrimAPI_MakeSweep {
    constructor();
  }
  class BRepOffsetAPI_MakeThickSolid extends BRepOffsetAPI_MakeOffsetShape {
  }
  class BRepOffsetAPI_MiddlePath extends BRepBuilderAPI_MakeShape {
    constructor();
  }
  class BRepOffsetAPI_NormalProjection extends BRepBuilderAPI_MakeShape {
  }
  class BRepOffsetAPI_ThruSections extends BRepBuilderAPI_MakeShape {
    constructor();
  }
  class BRepOffset_Analyse {
  }
  class BRepOffset_Inter2d {
    constructor();
  }
  class BRepOffset_Inter3d {
    constructor();
  }
  class BRepOffset_Interval {
  }
  class BRepOffset_MakeLoops {
    constructor();
  }
  class BRepOffset_MakeSimpleOffset {
  }
  class BRepOffset_Offset {
  }
  class BRepOffset_SimpleOffset extends BRepTools_Modification {
    constructor();
  }
  class BRepOffset_Tool {
    constructor();
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
    constructor();
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
    constructor();
  }
  class BRepSweep_Iterator {
    constructor();
  }
  class BRepSweep_NumLinearRegularSweep {
  }
  class BRepSweep_Prism {
  }
  class BRepSweep_Revol {
  }
  class BRepSweep_Rotation extends BRepSweep_Trsf {
    constructor();
  }
  class BRepSweep_Tool {
    constructor();
  }
  class BRepSweep_Translation extends BRepSweep_Trsf {
    constructor();
  }
  class BRepSweep_Trsf extends BRepSweep_NumLinearRegularSweep {
  }
  class BRepToIGESBRep_Entity extends BRepToIGES_BREntity {
    constructor();
  }
  class BRepToIGES_BREntity {
    constructor();
  }
  class BRepToIGES_BRShell extends BRepToIGES_BREntity {
  }
  class BRepToIGES_BRSolid extends BRepToIGES_BREntity {
  }
  class BRepToIGES_BRWire extends BRepToIGES_BREntity {
  }
  class BRepTools {
    constructor();
  }
  class BRepTools_GTrsfModification extends BRepTools_Modification {
    constructor();
  }
  class BRepTools_History extends Standard_Transient {
    constructor();
  }
  class BRepTools_Modification extends Standard_Transient {
  }
  class BRepTools_Modifier {
  }
  class BRepTools_NurbsConvertModification extends BRepTools_Modification {
    constructor();
  }
  class BRepTools_Quilt {
    constructor();
  }
  class BRepTools_ReShape extends Standard_Transient {
    constructor();
  }
  class BRepTools_ShapeSet extends TopTools_ShapeSet {
  }
  class BRepTools_Substitution {
    constructor();
  }
  class BRepTools_TrsfModification extends BRepTools_Modification {
    constructor();
  }
  class BRepTools_WireExplorer {
  }
  class BRepTopAdaptor_FClass2d {
    constructor();
  }
  class BRepTopAdaptor_HVertex extends Adaptor3d_HVertex {
    constructor();
  }
  class BRepTopAdaptor_Tool {
  }
  class BRepTopAdaptor_TopolTool extends Adaptor3d_TopolTool {
  }
  class BRep_Builder extends TopoDS_Builder {
    constructor();
  }
  class BRep_Curve3D extends BRep_GCurve {
    constructor();
  }
  class BRep_CurveOn2Surfaces extends BRep_CurveRepresentation {
    constructor();
  }
  class BRep_CurveOnClosedSurface extends BRep_CurveOnSurface {
    constructor();
  }
  class BRep_CurveOnSurface extends BRep_GCurve {
    constructor();
  }
  class BRep_CurveRepresentation extends Standard_Transient {
  }
  class BRep_GCurve extends BRep_CurveRepresentation {
  }
  class BRep_PointOnCurve extends BRep_PointRepresentation {
    constructor();
  }
  class BRep_PointOnCurveOnSurface extends BRep_PointsOnSurface {
    constructor();
  }
  class BRep_PointOnSurface extends BRep_PointsOnSurface {
    constructor();
  }
  class BRep_PointRepresentation extends Standard_Transient {
  }
  class BRep_PointsOnSurface extends BRep_PointRepresentation {
  }
  class BRep_Polygon3D extends BRep_CurveRepresentation {
    constructor();
  }
  class BRep_PolygonOnClosedSurface extends BRep_PolygonOnSurface {
    constructor();
  }
  class BRep_PolygonOnClosedTriangulation extends BRep_PolygonOnTriangulation {
    constructor();
  }
  class BRep_PolygonOnSurface extends BRep_CurveRepresentation {
    constructor();
  }
  class BRep_PolygonOnTriangulation extends BRep_CurveRepresentation {
    constructor();
  }
  class BRep_TEdge extends TopoDS_TEdge {
    constructor();
  }
  class BRep_TFace extends TopoDS_TFace {
    constructor();
  }
  class BRep_TVertex extends TopoDS_TVertex {
    constructor();
  }
  class BRep_Tool {
    constructor();
  }
  class BSplCLib_Cache extends Standard_Transient {
  }
  class BSplCLib_EvaluatorFunction {
  }
  class BSplSLib {
    constructor();
  }
  class BSplSLib_Cache extends Standard_Transient {
    constructor();
  }
  class BSplSLib_EvaluatorFunction {
  }
  class BVH_BuildQueue {
    constructor();
  }
  class BVH_BuildThread extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class Bisector_Bisec {
    constructor();
  }
  class Bisector_BisecAna extends Bisector_Curve {
    constructor();
  }
  class Bisector_BisecCC extends Bisector_Curve {
  }
  class Bisector_BisecPC extends Bisector_Curve {
  }
  class Bisector_Curve extends Geom2d_Curve {
  }
  class Bisector_FunctionH extends math_FunctionWithDerivative {
    constructor();
  }
  class Bisector_FunctionInter extends math_FunctionWithDerivative {
  }
  class Bisector_Inter extends IntRes2d_Intersection {
  }
  class Bisector_PointOnBis {
  }
  class Bisector_PolyBis {
    constructor();
  }
  class BlendFunc_CSCircular extends Blend_CSFunction {
    constructor();
  }
  class BlendFunc_CSConstRad extends Blend_CSFunction {
    constructor();
  }
  class BlendFunc_ChAsym extends Blend_Function {
    constructor();
  }
  class BlendFunc_ChAsymInv extends Blend_FuncInv {
    constructor();
  }
  class BlendFunc_ChamfInv extends BlendFunc_GenChamfInv {
    constructor();
  }
  class BlendFunc_Chamfer extends BlendFunc_GenChamfer {
    constructor();
  }
  class BlendFunc_ConstRad extends Blend_Function {
    constructor();
  }
  class BlendFunc_ConstRadInv extends Blend_FuncInv {
    constructor();
  }
  class BlendFunc_ConstThroat extends BlendFunc_GenChamfer {
    constructor();
  }
  class BlendFunc_ConstThroatInv extends BlendFunc_GenChamfInv {
    constructor();
  }
  class BlendFunc_ConstThroatWithPenetration extends BlendFunc_ConstThroat {
    constructor();
  }
  class BlendFunc_ConstThroatWithPenetrationInv extends BlendFunc_ConstThroatInv {
    constructor();
  }
  class BlendFunc_Corde {
    constructor();
  }
  class BlendFunc_EvolRad extends Blend_Function {
    constructor();
  }
  class BlendFunc_EvolRadInv extends Blend_FuncInv {
    constructor();
  }
  class BlendFunc_GenChamfInv extends Blend_FuncInv {
  }
  class BlendFunc_GenChamfer extends Blend_Function {
  }
  class BlendFunc_Ruled extends Blend_Function {
    constructor();
  }
  class BlendFunc_RuledInv extends Blend_FuncInv {
    constructor();
  }
  class BlendFunc_Tensor {
    constructor();
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
    constructor();
  }
  class BndLib_Add2dCurve {
    constructor();
  }
  class BndLib_Add3dCurve {
    constructor();
  }
  class BndLib_AddSurface {
    constructor();
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
    constructor();
  }
  class Bnd_BoundSortBox2d {
    constructor();
  }
  class Bnd_Box {
  }
  class Bnd_Box2d {
    constructor();
  }
  class Bnd_OBB {
  }
  class Bnd_Range {
  }
  class Bnd_Sphere {
  }
  class Bnd_Tools {
    constructor();
  }
  class CDF {
    constructor();
  }
  class CDF_Application extends CDM_Application {
  }
  class CDF_Directory extends Standard_Transient {
    constructor();
  }
  class CDF_DirectoryIterator {
  }
  class CDF_FWOSDriver extends CDF_MetaDataDriver {
    constructor();
  }
  class CDF_MetaDataDriver extends Standard_Transient {
  }
  class CDF_MetaDataDriverError extends Standard_Failure {
  }
  class CDF_MetaDataDriverFactory extends Standard_Transient {
  }
  class CDF_Session extends Standard_Transient {
    constructor();
  }
  class CDF_Store {
    constructor();
  }
  class CDF_StoreList extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class CPnts_AbscissaPoint {
  }
  class CPnts_MyGaussFunction extends math_Function {
    constructor();
  }
  class CPnts_MyRootFunction extends math_FunctionWithDerivative {
    constructor();
  }
  class CPnts_UniformDeflection {
  }
  class CSLib {
    constructor();
  }
  class CSLib_Class2d {
  }
  class CSLib_NormalPolyDef extends math_FunctionWithDerivative {
    constructor();
  }
  class ChFi2d {
    constructor();
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
    constructor();
  }
  class ChFi3d_Builder {
  }
  class ChFi3d_ChBuilder extends ChFi3d_Builder {
    constructor();
  }
  class ChFi3d_FilBuilder extends ChFi3d_Builder {
    constructor();
  }
  class ChFi3d_SearchSing extends math_FunctionWithDerivative {
    constructor();
  }
  class ChFiDS_ChamfSpine extends ChFiDS_Spine {
  }
  class ChFiDS_CircSection {
    constructor();
  }
  class ChFiDS_CommonPoint {
    constructor();
  }
  class ChFiDS_ElSpine extends Adaptor3d_Curve {
    constructor();
  }
  class ChFiDS_FaceInterference {
    constructor();
  }
  class ChFiDS_FilSpine extends ChFiDS_Spine {
  }
  class ChFiDS_HElSpine extends Adaptor3d_HCurve {
  }
  class ChFiDS_Map {
    constructor();
  }
  class ChFiDS_Regul {
    constructor();
  }
  class ChFiDS_Spine extends Standard_Transient {
  }
  class ChFiDS_Stripe extends Standard_Transient {
    constructor();
  }
  class ChFiDS_StripeMap {
    constructor();
  }
  class ChFiDS_SurfData extends Standard_Transient {
    constructor();
  }
  class ChFiKPart_ComputeData {
    constructor();
  }
  class Contap_ArcFunction extends math_FunctionWithDerivative {
    constructor();
  }
  class Contap_ContAna {
    constructor();
  }
  class Contap_Contour {
  }
  class Contap_HContTool {
    constructor();
  }
  class Contap_HCurve2dTool {
    constructor();
  }
  class Contap_Line {
    constructor();
  }
  class Contap_Point {
  }
  class Contap_SurfFunction extends math_FunctionSetWithDerivatives {
    constructor();
  }
  class Contap_SurfProps {
    constructor();
  }
  class Contap_TheIWLineOfTheIWalking extends Standard_Transient {
    constructor();
  }
  class Contap_TheIWalking {
    constructor();
  }
  class Contap_ThePathPointOfTheSearch {
  }
  class Contap_TheSearch {
    constructor();
  }
  class Contap_TheSearchInside {
  }
  class Contap_TheSegmentOfTheSearch {
    constructor();
  }
  class Convert_CircleToBSplineCurve extends Convert_ConicToBSplineCurve {
  }
  class Convert_CompBezierCurves2dToBSplineCurve2d {
    constructor();
  }
  class Convert_CompBezierCurvesToBSplineCurve {
    constructor();
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
    constructor();
  }
  class Convert_ParabolaToBSplineCurve extends Convert_ConicToBSplineCurve {
    constructor();
  }
  class Convert_SphereToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
  }
  class Convert_TorusToBSplineSurface extends Convert_ElementarySurfaceToBSplineSurface {
  }
  class Draft {
    constructor();
  }
  class Draft_EdgeInfo {
  }
  class Draft_FaceInfo {
  }
  class Draft_Modification extends BRepTools_Modification {
    constructor();
  }
  class Draft_VertexInfo {
    constructor();
  }
  class DsgPrs {
    constructor();
  }
  class DsgPrs_AnglePresentation {
    constructor();
  }
  class DsgPrs_Chamf2dPresentation {
    constructor();
  }
  class DsgPrs_ConcentricPresentation {
    constructor();
  }
  class DsgPrs_DatumPrs extends Prs3d_Root {
    constructor();
  }
  class DsgPrs_DiameterPresentation {
    constructor();
  }
  class DsgPrs_EllipseRadiusPresentation {
    constructor();
  }
  class DsgPrs_EqualDistancePresentation {
    constructor();
  }
  class DsgPrs_EqualRadiusPresentation {
    constructor();
  }
  class DsgPrs_FilletRadiusPresentation {
    constructor();
  }
  class DsgPrs_FixPresentation {
    constructor();
  }
  class DsgPrs_IdenticPresentation {
    constructor();
  }
  class DsgPrs_LengthPresentation {
    constructor();
  }
  class DsgPrs_MidPointPresentation {
    constructor();
  }
  class DsgPrs_OffsetPresentation {
    constructor();
  }
  class DsgPrs_ParalPresentation {
    constructor();
  }
  class DsgPrs_PerpenPresentation {
    constructor();
  }
  class DsgPrs_ShadedPlanePresentation {
    constructor();
  }
  class DsgPrs_ShapeDirPresentation {
    constructor();
  }
  class DsgPrs_SymbPresentation {
    constructor();
  }
  class DsgPrs_SymmetricPresentation {
    constructor();
  }
  class DsgPrs_TangentPresentation {
    constructor();
  }
  class DsgPrs_XYZAxisPresentation {
    constructor();
  }
  class DsgPrs_XYZPlanePresentation {
    constructor();
  }
  class ElCLib {
    constructor();
  }
  class ElSLib {
    constructor();
  }
  class Expr {
    constructor();
  }
  class ExprIntrp {
    constructor();
  }
  class ExprIntrp_Analysis {
    constructor();
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
    constructor();
  }
  class Expr_ArcCosine extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_ArcSine extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_ArcTangent extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_ArgCosh extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_ArgSinh extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_ArgTanh extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_BinaryExpression extends Expr_GeneralExpression {
  }
  class Expr_BinaryFunction extends Expr_BinaryExpression {
    constructor();
  }
  class Expr_Cosh extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_Cosine extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_Difference extends Expr_BinaryExpression {
    constructor();
  }
  class Expr_Different extends Expr_SingleRelation {
    constructor();
  }
  class Expr_Division extends Expr_BinaryExpression {
    constructor();
  }
  class Expr_Equal extends Expr_SingleRelation {
    constructor();
  }
  class Expr_Exponential extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_Exponentiate extends Expr_BinaryExpression {
    constructor();
  }
  class Expr_ExprFailure extends Standard_Failure {
  }
  class Expr_FunctionDerivative extends Expr_GeneralFunction {
    constructor();
  }
  class Expr_GeneralExpression extends Standard_Transient {
  }
  class Expr_GeneralFunction extends Standard_Transient {
  }
  class Expr_GeneralRelation extends Standard_Transient {
  }
  class Expr_GreaterThan extends Expr_SingleRelation {
    constructor();
  }
  class Expr_GreaterThanOrEqual extends Expr_SingleRelation {
    constructor();
  }
  class Expr_InvalidAssignment extends Expr_ExprFailure {
  }
  class Expr_InvalidFunction extends Expr_ExprFailure {
  }
  class Expr_InvalidOperand extends Expr_ExprFailure {
  }
  class Expr_LessThan extends Expr_SingleRelation {
    constructor();
  }
  class Expr_LessThanOrEqual extends Expr_SingleRelation {
    constructor();
  }
  class Expr_LogOf10 extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_LogOfe extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_NamedConstant extends Expr_NamedExpression {
    constructor();
  }
  class Expr_NamedExpression extends Expr_GeneralExpression {
  }
  class Expr_NamedFunction extends Expr_GeneralFunction {
    constructor();
  }
  class Expr_NamedUnknown extends Expr_NamedExpression {
    constructor();
  }
  class Expr_NotAssigned extends Expr_ExprFailure {
  }
  class Expr_NotEvaluable extends Expr_ExprFailure {
  }
  class Expr_NumericValue extends Expr_GeneralExpression {
    constructor();
  }
  class Expr_PolyExpression extends Expr_GeneralExpression {
  }
  class Expr_PolyFunction extends Expr_PolyExpression {
    constructor();
  }
  class Expr_Product extends Expr_PolyExpression {
  }
  class Expr_RUIterator {
    constructor();
  }
  class Expr_RelationIterator {
    constructor();
  }
  class Expr_Sign extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_Sine extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_SingleRelation extends Expr_GeneralRelation {
  }
  class Expr_Sinh extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_Square extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_SquareRoot extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_Sum extends Expr_PolyExpression {
  }
  class Expr_SystemRelation extends Expr_GeneralRelation {
    constructor();
  }
  class Expr_Tangent extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_Tanh extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_UnaryExpression extends Expr_GeneralExpression {
  }
  class Expr_UnaryFunction extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_UnaryMinus extends Expr_UnaryExpression {
    constructor();
  }
  class Expr_UnknownIterator {
    constructor();
  }
  class Extrema_CCLocFOfLocECC extends math_FunctionSetWithDerivatives {
  }
  class Extrema_CCLocFOfLocECC2d extends math_FunctionSetWithDerivatives {
  }
  class Extrema_Curve2dTool {
    constructor();
  }
  class Extrema_CurveTool {
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
  }
  class Extrema_LocECC {
    constructor();
  }
  class Extrema_LocECC2d {
    constructor();
  }
  class Extrema_LocEPCOfLocateExtPC {
  }
  class Extrema_LocEPCOfLocateExtPC2d {
  }
  class Extrema_LocateExtCC {
    constructor();
  }
  class Extrema_LocateExtCC2d {
    constructor();
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
    constructor();
  }
  class GCE2d_MakeScale {
    constructor();
  }
  class GCE2d_MakeSegment extends GCE2d_Root {
  }
  class GCE2d_MakeTranslation {
  }
  class GCE2d_Root {
    constructor();
  }
  class GCPnts_AbscissaPoint {
  }
  class GCPnts_DistFunction2dMV extends math_MultipleVarFunction {
    constructor();
  }
  class GCPnts_DistFunctionMV extends math_MultipleVarFunction {
    constructor();
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
    constructor();
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
    constructor();
  }
  class GProp {
    constructor();
  }
  class GProp_CelGProps extends GProp_GProps {
  }
  class GProp_GProps {
  }
  class GProp_PEquation {
    constructor();
  }
  class GProp_PGProps extends GProp_GProps {
  }
  class GProp_PrincipalProps {
    constructor();
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
    constructor();
  }
  class GccAna_Circ2dTanCen {
  }
  class GccAna_Circ2dTanOnRad {
  }
  class GccAna_CircLin2dBisec {
    constructor();
  }
  class GccAna_CircPnt2dBisec {
  }
  class GccAna_Lin2d2Tan {
  }
  class GccAna_Lin2dBisec {
    constructor();
  }
  class GccAna_Lin2dTanObl {
  }
  class GccAna_Lin2dTanPar {
  }
  class GccAna_Lin2dTanPer {
  }
  class GccAna_LinPnt2dBisec {
    constructor();
  }
  class GccAna_NoSolution extends Standard_Failure {
  }
  class GccAna_Pnt2dBisec {
    constructor();
  }
  class GccEnt {
    constructor();
  }
  class GccEnt_BadQualifier extends Standard_DomainError {
  }
  class GccEnt_QualifiedCirc {
    constructor();
  }
  class GccEnt_QualifiedLin {
    constructor();
  }
  class GccInt_BCirc extends GccInt_Bisec {
    constructor();
  }
  class GccInt_BElips extends GccInt_Bisec {
    constructor();
  }
  class GccInt_BHyper extends GccInt_Bisec {
    constructor();
  }
  class GccInt_BLine extends GccInt_Bisec {
    constructor();
  }
  class GccInt_BParab extends GccInt_Bisec {
    constructor();
  }
  class GccInt_BPoint extends GccInt_Bisec {
    constructor();
  }
  class GccInt_Bisec extends Standard_Transient {
  }
  class Geom2dAdaptor {
    constructor();
  }
  class Geom2dAdaptor_Curve extends Adaptor2d_Curve2d {
  }
  class Geom2dAdaptor_GHCurve extends Adaptor2d_HCurve2d {
  }
  class Geom2dAdaptor_HCurve extends Geom2dAdaptor_GHCurve {
  }
  class Geom2dConvert {
    constructor();
  }
  class Geom2dConvert_ApproxCurve {
  }
  class Geom2dConvert_BSplineCurveKnotSplitting {
    constructor();
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
    constructor();
  }
  class Geom2dLProp_Curve2dTool {
    constructor();
  }
  class Geom2dLProp_FuncCurExt extends math_FunctionWithDerivative {
    constructor();
  }
  class Geom2dLProp_FuncCurNul extends math_FunctionWithDerivative {
    constructor();
  }
  class Geom2dLProp_NumericCurInf2d {
    constructor();
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
    constructor();
  }
  class Geom2d_Parabola extends Geom2d_Conic {
  }
  class Geom2d_Point extends Geom2d_Geometry {
  }
  class Geom2d_Transformation extends Standard_Transient {
  }
  class Geom2d_TrimmedCurve extends Geom2d_BoundedCurve {
    constructor();
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
    constructor();
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
    constructor();
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
    constructor();
  }
  class GeomConvert_ApproxCurve {
  }
  class GeomConvert_ApproxSurface {
  }
  class GeomConvert_BSplineCurveKnotSplitting {
    constructor();
  }
  class GeomConvert_BSplineCurveToBezierCurve {
  }
  class GeomConvert_BSplineSurfaceKnotSplitting {
    constructor();
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
    constructor();
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
    constructor();
  }
  class GeomFill_Boundary extends Standard_Transient {
  }
  class GeomFill_CircularBlendFunc extends Approx_SweepFunction {
    constructor();
  }
  class GeomFill_ConstantBiNormal extends GeomFill_TrihedronLaw {
    constructor();
  }
  class GeomFill_ConstrainedFilling {
    constructor();
  }
  class GeomFill_Coons extends GeomFill_Filling {
  }
  class GeomFill_CoonsAlgPatch extends Standard_Transient {
    constructor();
  }
  class GeomFill_CornerState {
    constructor();
  }
  class GeomFill_CorrectedFrenet extends GeomFill_TrihedronLaw {
  }
  class GeomFill_CurveAndTrihedron extends GeomFill_LocationLaw {
    constructor();
  }
  class GeomFill_Curved extends GeomFill_Filling {
  }
  class GeomFill_Darboux extends GeomFill_TrihedronLaw {
    constructor();
  }
  class GeomFill_DegeneratedBound extends GeomFill_Boundary {
    constructor();
  }
  class GeomFill_DiscreteTrihedron extends GeomFill_TrihedronLaw {
    constructor();
  }
  class GeomFill_DraftTrihedron extends GeomFill_TrihedronLaw {
    constructor();
  }
  class GeomFill_EvolvedSection extends GeomFill_SectionLaw {
    constructor();
  }
  class GeomFill_Filling {
    constructor();
  }
  class GeomFill_Fixed extends GeomFill_TrihedronLaw {
    constructor();
  }
  class GeomFill_Frenet extends GeomFill_TrihedronLaw {
    constructor();
  }
  class GeomFill_FunctionDraft extends math_FunctionSetWithDerivatives {
    constructor();
  }
  class GeomFill_Generator extends GeomFill_Profiler {
    constructor();
  }
  class GeomFill_GuideTrihedronAC extends GeomFill_TrihedronWithGuide {
    constructor();
  }
  class GeomFill_GuideTrihedronPlan extends GeomFill_TrihedronWithGuide {
    constructor();
  }
  class GeomFill_Line extends Standard_Transient {
  }
  class GeomFill_LocFunction {
    constructor();
  }
  class GeomFill_LocationDraft extends GeomFill_LocationLaw {
    constructor();
  }
  class GeomFill_LocationGuide extends GeomFill_LocationLaw {
    constructor();
  }
  class GeomFill_LocationLaw extends Standard_Transient {
  }
  class GeomFill_Pipe {
  }
  class GeomFill_PlanFunc extends math_FunctionWithDerivative {
    constructor();
  }
  class GeomFill_PolynomialConvertor {
    constructor();
  }
  class GeomFill_Profiler {
    constructor();
  }
  class GeomFill_QuasiAngularConvertor {
    constructor();
  }
  class GeomFill_SectionGenerator extends GeomFill_Profiler {
    constructor();
  }
  class GeomFill_SectionLaw extends Standard_Transient {
  }
  class GeomFill_SectionPlacement {
    constructor();
  }
  class GeomFill_SimpleBound extends GeomFill_Boundary {
    constructor();
  }
  class GeomFill_SnglrFunc extends Adaptor3d_Curve {
    constructor();
  }
  class GeomFill_Stretch extends GeomFill_Filling {
  }
  class GeomFill_Sweep {
    constructor();
  }
  class GeomFill_SweepFunction extends Approx_SweepFunction {
    constructor();
  }
  class GeomFill_Tensor {
    constructor();
  }
  class GeomFill_TgtField extends Standard_Transient {
  }
  class GeomFill_TgtOnCoons extends GeomFill_TgtField {
    constructor();
  }
  class GeomFill_TrihedronLaw extends Standard_Transient {
  }
  class GeomFill_TrihedronWithGuide extends GeomFill_TrihedronLaw {
  }
  class GeomFill_UniformSection extends GeomFill_SectionLaw {
    constructor();
  }
  class GeomInt {
    constructor();
  }
  class GeomInt_BSpGradient_BFGSOfMyBSplGradientOfTheComputeLineOfWLApprox extends math_BFGS {
    constructor();
  }
  class GeomInt_BSpParFunctionOfMyBSplGradientOfTheComputeLineOfWLApprox extends math_MultipleVarFunctionWithGradient {
    constructor();
  }
  class GeomInt_BSpParLeastSquareOfMyBSplGradientOfTheComputeLineOfWLApprox {
  }
  class GeomInt_Gradient_BFGSOfMyGradientOfTheComputeLineBezierOfWLApprox extends math_BFGS {
    constructor();
  }
  class GeomInt_Gradient_BFGSOfMyGradientbisOfTheComputeLineOfWLApprox extends math_BFGS {
    constructor();
  }
  class GeomInt_LineConstructor {
    constructor();
  }
  class GeomInt_LineTool {
    constructor();
  }
  class GeomInt_MyBSplGradientOfTheComputeLineOfWLApprox {
  }
  class GeomInt_MyGradientOfTheComputeLineBezierOfWLApprox {
    constructor();
  }
  class GeomInt_MyGradientbisOfTheComputeLineOfWLApprox {
    constructor();
  }
  class GeomInt_ParFunctionOfMyGradientOfTheComputeLineBezierOfWLApprox extends math_MultipleVarFunctionWithGradient {
    constructor();
  }
  class GeomInt_ParFunctionOfMyGradientbisOfTheComputeLineOfWLApprox extends math_MultipleVarFunctionWithGradient {
    constructor();
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
    constructor();
  }
  class GeomInt_TheImpPrmSvSurfacesOfWLApprox extends ApproxInt_SvSurfaces {
  }
  class GeomInt_TheInt2SOfThePrmPrmSvSurfacesOfWLApprox {
  }
  class GeomInt_TheMultiLineOfWLApprox {
  }
  class GeomInt_TheMultiLineToolOfWLApprox {
    constructor();
  }
  class GeomInt_ThePrmPrmSvSurfacesOfWLApprox extends ApproxInt_SvSurfaces {
    constructor();
  }
  class GeomInt_TheZerImpFuncOfTheImpPrmSvSurfacesOfWLApprox extends math_FunctionSetWithDerivatives {
  }
  class GeomLProp {
    constructor();
  }
  class GeomLProp_CLProps {
  }
  class GeomLProp_CurveTool {
    constructor();
  }
  class GeomLProp_SLProps {
  }
  class GeomLProp_SurfaceTool {
    constructor();
  }
  class GeomLib {
    constructor();
  }
  class GeomLib_Check2dBSplineCurve {
    constructor();
  }
  class GeomLib_CheckBSplineCurve {
    constructor();
  }
  class GeomLib_CheckCurveOnSurface {
  }
  class GeomLib_DenominatorMultiplier {
    constructor();
  }
  class GeomLib_Interpolate {
    constructor();
  }
  class GeomLib_IsPlanarSurface {
    constructor();
  }
  class GeomLib_LogSample extends math_FunctionSample {
    constructor();
  }
  class GeomLib_MakeCurvefromApprox {
    constructor();
  }
  class GeomLib_PolyFunc extends math_FunctionWithDerivative {
    constructor();
  }
  class GeomLib_Tool {
    constructor();
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
    constructor();
  }
  class GeomPlate_PlateG1Criterion extends AdvApp2Var_Criterion {
    constructor();
  }
  class GeomPlate_PointConstraint extends Standard_Transient {
  }
  class GeomPlate_Surface extends Geom_Surface {
    constructor();
  }
  class GeomProjLib {
    constructor();
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
    constructor();
  }
  class GeomToStep_MakeBSplineSurfaceWithKnotsAndRationalBSplineSurface extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeBoundedCurve extends GeomToStep_Root {
  }
  class GeomToStep_MakeBoundedSurface extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeCartesianPoint extends GeomToStep_Root {
  }
  class GeomToStep_MakeCircle extends GeomToStep_Root {
  }
  class GeomToStep_MakeConic extends GeomToStep_Root {
  }
  class GeomToStep_MakeConicalSurface extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeCurve extends GeomToStep_Root {
  }
  class GeomToStep_MakeCylindricalSurface extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeDirection extends GeomToStep_Root {
  }
  class GeomToStep_MakeElementarySurface extends GeomToStep_Root {
    constructor();
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
    constructor();
  }
  class GeomToStep_MakeSphericalSurface extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeSurface extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeSurfaceOfLinearExtrusion extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeSurfaceOfRevolution extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeSweptSurface extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeToroidalSurface extends GeomToStep_Root {
    constructor();
  }
  class GeomToStep_MakeVector extends GeomToStep_Root {
  }
  class GeomToStep_Root {
    constructor();
  }
  class GeomTools {
    constructor();
  }
  class GeomTools_Curve2dSet {
    constructor();
  }
  class GeomTools_CurveSet {
    constructor();
  }
  class GeomTools_SurfaceSet {
    constructor();
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
    constructor();
  }
  class Geom_OffsetSurface extends Geom_Surface {
    constructor();
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
    constructor();
  }
  class Geom_SurfaceOfRevolution extends Geom_SweptSurface {
    constructor();
  }
  class Geom_SweptSurface extends Geom_Surface {
  }
  class Geom_ToroidalSurface extends Geom_ElementarySurface {
  }
  class Geom_Transformation extends Standard_Transient {
  }
  class Geom_TrimmedCurve extends Geom_BoundedCurve {
    constructor();
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
    constructor();
  }
  class Graphic3d_AttribBuffer extends Graphic3d_Buffer {
    constructor();
  }
  class Graphic3d_AxisAspect {
    constructor();
  }
  class Graphic3d_BSDF {
    constructor();
  }
  class Graphic3d_BoundBuffer extends NCollection_Buffer {
    constructor();
  }
  class Graphic3d_Buffer extends NCollection_Buffer {
    constructor();
  }
  class Graphic3d_BvhCStructureSet extends BVH_PrimitiveSet3d {
    constructor();
  }
  class Graphic3d_BvhCStructureSetTrsfPers extends BVH_Set<Standard_Real, 3> {
    constructor();
  }
  class Graphic3d_CLight extends Standard_Transient {
    constructor();
  }
  class Graphic3d_CStructure extends Standard_Transient {
  }
  class Graphic3d_CTexture {
    constructor();
  }
  class Graphic3d_CView extends Graphic3d_DataStructureManager {
  }
  class Graphic3d_Camera extends Standard_Transient {
  }
  class Graphic3d_CameraTile {
    constructor();
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
    constructor();
  }
  class Graphic3d_DataStructureManager extends Standard_Transient {
  }
  class Graphic3d_FrameStats extends Standard_Transient {
  }
  class Graphic3d_FrameStatsData {
    constructor();
  }
  class Graphic3d_FrameStatsDataTmp extends Graphic3d_FrameStatsData {
    constructor();
  }
  class Graphic3d_Fresnel {
    constructor();
  }
  class Graphic3d_GraduatedTrihedron {
    constructor();
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
    constructor();
  }
  class Graphic3d_Layer extends Standard_Transient {
    constructor();
  }
  class Graphic3d_LightSet extends Standard_Transient {
    constructor();
  }
  class Graphic3d_MarkerImage extends Standard_Transient {
  }
  class Graphic3d_MaterialAspect {
  }
  class Graphic3d_MaterialDefinitionError extends Standard_OutOfRange {
  }
  class Graphic3d_MediaTexture extends Graphic3d_Texture2D {
    constructor();
  }
  class Graphic3d_MutableIndexBuffer extends Graphic3d_IndexBuffer {
    constructor();
  }
  class Graphic3d_PresentationAttributes extends Standard_Transient {
    constructor();
  }
  class Graphic3d_PriorityDefinitionError extends Standard_OutOfRange {
  }
  class Graphic3d_RenderingParams {
    constructor();
  }
  class Graphic3d_SequenceOfHClipPlane extends Standard_Transient {
    constructor();
  }
  class Graphic3d_ShaderAttribute extends Standard_Transient {
    constructor();
  }
  class Graphic3d_ShaderObject extends Standard_Transient {
  }
  class Graphic3d_ShaderProgram extends Standard_Transient {
    constructor();
  }
  class Graphic3d_ShaderVariable extends Standard_Transient {
  }
  class Graphic3d_Structure extends Standard_Transient {
    constructor();
  }
  class Graphic3d_StructureDefinitionError extends Standard_OutOfRange {
  }
  class Graphic3d_StructureManager extends Standard_Transient {
    constructor();
  }
  class Graphic3d_Text extends Standard_Transient {
    constructor();
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
    constructor();
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
    constructor();
  }
  class Graphic3d_WorldViewProjState {
  }
  class HLRAlgo {
    constructor();
  }
  class HLRAlgo_BiPoint {
  }
  class HLRAlgo_Coincidence {
    constructor();
  }
  class HLRAlgo_EdgeIterator {
    constructor();
  }
  class HLRAlgo_EdgeStatus {
  }
  class HLRAlgo_EdgesBlock extends Standard_Transient {
    constructor();
  }
  class HLRAlgo_Interference {
  }
  class HLRAlgo_Intersection {
  }
  class HLRAlgo_PolyAlgo extends Standard_Transient {
    constructor();
  }
  class HLRAlgo_PolyData extends Standard_Transient {
    constructor();
  }
  class HLRAlgo_PolyHidingData {
    constructor();
  }
  class HLRAlgo_PolyInternalData extends Standard_Transient {
    constructor();
  }
  class HLRAlgo_PolyInternalNode extends Standard_Transient {
    constructor();
  }
  class HLRAlgo_PolyShellData extends Standard_Transient {
    constructor();
  }
  class HLRAlgo_Projector {
  }
  class HLRAlgo_WiresBlock extends Standard_Transient {
    constructor();
  }
  class HLRAppli_ReflectLines {
    constructor();
  }
  class HLRTopoBRep_DSFiller {
    constructor();
  }
  class HLRTopoBRep_Data {
    constructor();
  }
  class HLRTopoBRep_FaceData {
    constructor();
  }
  class HLRTopoBRep_FaceIsoLiner {
    constructor();
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
    constructor();
  }
  class Hatch_Line {
  }
  class Hatch_Parameter {
  }
  class HeaderSection {
    constructor();
  }
  class HeaderSection_FileDescription extends Standard_Transient {
    constructor();
  }
  class HeaderSection_FileName extends Standard_Transient {
    constructor();
  }
  class HeaderSection_FileSchema extends Standard_Transient {
    constructor();
  }
  class HeaderSection_Protocol extends StepData_Protocol {
    constructor();
  }
  class Hermit {
    constructor();
  }
  class IFGraph_AllConnected extends Interface_GraphContent {
  }
  class IFGraph_AllShared extends Interface_GraphContent {
  }
  class IFGraph_Articulations extends Interface_GraphContent {
    constructor();
  }
  class IFGraph_Compare extends Interface_GraphContent {
    constructor();
  }
  class IFGraph_ConnectedComponants extends IFGraph_SubPartsIterator {
    constructor();
  }
  class IFGraph_Cumulate extends Interface_GraphContent {
    constructor();
  }
  class IFGraph_Cycles extends IFGraph_SubPartsIterator {
  }
  class IFGraph_ExternalSources extends Interface_GraphContent {
    constructor();
  }
  class IFGraph_SCRoots extends IFGraph_StrongComponants {
  }
  class IFGraph_StrongComponants extends IFGraph_SubPartsIterator {
    constructor();
  }
  class IFGraph_SubPartsIterator {
  }
  class IFSelect {
    constructor();
  }
  class IFSelect_Act extends IFSelect_Activator {
    constructor();
  }
  class IFSelect_Activator extends Standard_Transient {
  }
  class IFSelect_AppliedModifiers extends Standard_Transient {
    constructor();
  }
  class IFSelect_BasicDumper extends IFSelect_SessionDumper {
    constructor();
  }
  class IFSelect_CheckCounter extends IFSelect_SignatureList {
    constructor();
  }
  class IFSelect_ContextWrite {
  }
  class IFSelect_DispGlobal extends IFSelect_Dispatch {
    constructor();
  }
  class IFSelect_DispPerCount extends IFSelect_Dispatch {
    constructor();
  }
  class IFSelect_DispPerFiles extends IFSelect_Dispatch {
    constructor();
  }
  class IFSelect_DispPerOne extends IFSelect_Dispatch {
    constructor();
  }
  class IFSelect_DispPerSignature extends IFSelect_Dispatch {
    constructor();
  }
  class IFSelect_Dispatch extends Standard_Transient {
  }
  class IFSelect_Editor extends Standard_Transient {
  }
  class IFSelect_Functions {
    constructor();
  }
  class IFSelect_GeneralModifier extends Standard_Transient {
  }
  class IFSelect_GraphCounter extends IFSelect_SignCounter {
    constructor();
  }
  class IFSelect_ListEditor extends Standard_Transient {
  }
  class IFSelect_ModelCopier extends Standard_Transient {
    constructor();
  }
  class IFSelect_ModifEditForm extends IFSelect_Modifier {
    constructor();
  }
  class IFSelect_ModifReorder extends IFSelect_Modifier {
    constructor();
  }
  class IFSelect_Modifier extends IFSelect_GeneralModifier {
  }
  class IFSelect_PacketList extends Standard_Transient {
    constructor();
  }
  class IFSelect_ParamEditor extends IFSelect_Editor {
    constructor();
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
    constructor();
  }
  class IFSelect_SelectEntityNumber extends IFSelect_SelectBase {
    constructor();
  }
  class IFSelect_SelectErrorEntities extends IFSelect_SelectExtract {
    constructor();
  }
  class IFSelect_SelectExplore extends IFSelect_SelectDeduct {
  }
  class IFSelect_SelectExtract extends IFSelect_SelectDeduct {
  }
  class IFSelect_SelectFlag extends IFSelect_SelectExtract {
    constructor();
  }
  class IFSelect_SelectInList extends IFSelect_SelectAnyList {
  }
  class IFSelect_SelectIncorrectEntities extends IFSelect_SelectFlag {
    constructor();
  }
  class IFSelect_SelectIntersection extends IFSelect_SelectCombine {
    constructor();
  }
  class IFSelect_SelectModelEntities extends IFSelect_SelectBase {
    constructor();
  }
  class IFSelect_SelectModelRoots extends IFSelect_SelectBase {
    constructor();
  }
  class IFSelect_SelectPointed extends IFSelect_SelectBase {
    constructor();
  }
  class IFSelect_SelectRange extends IFSelect_SelectExtract {
    constructor();
  }
  class IFSelect_SelectRootComps extends IFSelect_SelectExtract {
    constructor();
  }
  class IFSelect_SelectRoots extends IFSelect_SelectExtract {
    constructor();
  }
  class IFSelect_SelectSent extends IFSelect_SelectExtract {
    constructor();
  }
  class IFSelect_SelectShared extends IFSelect_SelectDeduct {
    constructor();
  }
  class IFSelect_SelectSharing extends IFSelect_SelectDeduct {
    constructor();
  }
  class IFSelect_SelectSignature extends IFSelect_SelectExtract {
  }
  class IFSelect_SelectSignedShared extends IFSelect_SelectExplore {
    constructor();
  }
  class IFSelect_SelectSignedSharing extends IFSelect_SelectExplore {
    constructor();
  }
  class IFSelect_SelectSuite extends IFSelect_SelectDeduct {
    constructor();
  }
  class IFSelect_SelectType extends IFSelect_SelectAnyType {
  }
  class IFSelect_SelectUnion extends IFSelect_SelectCombine {
    constructor();
  }
  class IFSelect_SelectUnknownEntities extends IFSelect_SelectExtract {
    constructor();
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
    constructor();
  }
  class IFSelect_ShareOut extends Standard_Transient {
    constructor();
  }
  class IFSelect_ShareOutResult {
  }
  class IFSelect_SignAncestor extends IFSelect_SignType {
    constructor();
  }
  class IFSelect_SignCategory extends IFSelect_Signature {
    constructor();
  }
  class IFSelect_SignCounter extends IFSelect_SignatureList {
  }
  class IFSelect_SignMultiple extends IFSelect_Signature {
    constructor();
  }
  class IFSelect_SignType extends IFSelect_Signature {
    constructor();
  }
  class IFSelect_SignValidity extends IFSelect_Signature {
    constructor();
  }
  class IFSelect_Signature extends Interface_SignType {
  }
  class IFSelect_SignatureList extends Standard_Transient {
    constructor();
  }
  class IFSelect_TransformStandard extends IFSelect_Transformer {
    constructor();
  }
  class IFSelect_Transformer extends Standard_Transient {
  }
  class IFSelect_WorkLibrary extends Standard_Transient {
  }
  class IFSelect_WorkSession extends Standard_Transient {
    constructor();
  }
  class IGESControl_ActorWrite extends Transfer_ActorOfFinderProcess {
    constructor();
  }
  class IGESControl_AlgoContainer extends IGESToBRep_AlgoContainer {
    constructor();
  }
  class IGESControl_Controller extends XSControl_Controller {
    constructor();
  }
  class IGESControl_IGESBoundary extends IGESToBRep_IGESBoundary {
  }
  class IGESControl_Reader extends XSControl_Reader {
  }
  class IGESControl_ToolContainer extends IGESToBRep_ToolContainer {
    constructor();
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
    constructor();
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
    constructor();
  }
  class IMeshTools_ShapeVisitor extends Standard_Transient {
  }
  class Image_AlienPixMap extends Image_PixMap {
    constructor();
  }
  class Image_Diff extends Standard_Transient {
    constructor();
  }
  class Image_PixMap extends Standard_Transient {
    constructor();
  }
  class Image_PixMapData extends NCollection_Buffer {
    constructor();
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
    constructor();
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
    constructor();
  }
  class IntCurveSurface_Intersection {
  }
  class IntCurveSurface_IntersectionPoint {
  }
  class IntCurveSurface_IntersectionSegment {
  }
  class IntCurveSurface_TheCSFunctionOfHInter extends math_FunctionSetWithDerivatives {
    constructor();
  }
  class IntCurveSurface_TheExactHInter {
  }
  class IntCurveSurface_TheHCurveTool {
    constructor();
  }
  class IntCurveSurface_TheInterferenceOfHInter extends Intf_Interference {
  }
  class IntCurveSurface_ThePolygonOfHInter {
  }
  class IntCurveSurface_ThePolygonToolOfHInter {
    constructor();
  }
  class IntCurveSurface_ThePolyhedronToolOfHInter {
    constructor();
  }
  class IntCurveSurface_TheQuadCurvExactHInter {
    constructor();
  }
  class IntCurveSurface_TheQuadCurvFuncOfTheQuadCurvExactHInter extends math_FunctionWithDerivative {
    constructor();
  }
  class IntCurve_IConicTool {
  }
  class IntCurve_IntConicConic extends IntRes2d_Intersection {
  }
  class IntCurve_IntImpConicParConic extends IntRes2d_Intersection {
  }
  class IntCurve_MyImpParToolOfIntImpConicParConic extends math_FunctionWithDerivative {
    constructor();
  }
  class IntCurve_PConic {
  }
  class IntCurve_PConicTool {
    constructor();
  }
  class IntCurve_ProjectOnPConicTool {
    constructor();
  }
  class IntCurvesFace_Intersector {
    constructor();
  }
  class IntCurvesFace_ShapeIntersector {
    constructor();
  }
  class IntPatch_ALine extends IntPatch_Line {
  }
  class IntPatch_ALineToWLine {
    constructor();
  }
  class IntPatch_ArcFunction extends math_FunctionWithDerivative {
    constructor();
  }
  class IntPatch_CSFunction extends math_FunctionSetWithDerivatives {
    constructor();
  }
  class IntPatch_CurvIntSurf {
  }
  class IntPatch_GLine extends IntPatch_Line {
  }
  class IntPatch_HCurve2dTool {
    constructor();
  }
  class IntPatch_HInterTool {
    constructor();
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
    constructor();
  }
  class IntPatch_Point {
    constructor();
  }
  class IntPatch_PointLine extends IntPatch_Line {
  }
  class IntPatch_PolyArc extends IntPatch_Polygo {
    constructor();
  }
  class IntPatch_PolyLine extends IntPatch_Polygo {
  }
  class IntPatch_Polygo extends Intf_Polygon2d {
  }
  class IntPatch_PolyhedronTool {
    constructor();
  }
  class IntPatch_PrmPrmIntersection {
    constructor();
  }
  class IntPatch_PrmPrmIntersection_T3Bits {
    constructor();
  }
  class IntPatch_RstInt {
    constructor();
  }
  class IntPatch_SpecialPoints {
    constructor();
  }
  class IntPatch_TheIWLineOfTheIWalking extends Standard_Transient {
    constructor();
  }
  class IntPatch_TheIWalking {
    constructor();
  }
  class IntPatch_ThePathPointOfTheSOnBounds {
  }
  class IntPatch_TheSOnBounds {
    constructor();
  }
  class IntPatch_TheSearchInside {
  }
  class IntPatch_TheSegmentOfTheSOnBounds {
    constructor();
  }
  class IntPatch_TheSurfFunction extends math_FunctionSetWithDerivatives {
  }
  class IntPatch_WLine extends IntPatch_PointLine {
  }
  class IntPatch_WLineTool {
    constructor();
  }
  class IntPolyh_Couple {
  }
  class IntPolyh_CoupleMapHasher {
    constructor();
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
    constructor();
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
    constructor();
  }
  class IntSurf_Couple {
  }
  class IntSurf_InteriorPoint {
  }
  class IntSurf_InteriorPointTool {
    constructor();
  }
  class IntSurf_LineOn2S extends Standard_Transient {
    constructor();
  }
  class IntSurf_PathPoint {
  }
  class IntSurf_PathPointTool {
    constructor();
  }
  class IntSurf_PntOn2S {
    constructor();
  }
  class IntSurf_Quadric {
  }
  class IntSurf_QuadricTool {
    constructor();
  }
  class IntSurf_Transition {
  }
  class IntTools {
    constructor();
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
    constructor();
  }
  class IntTools_CurveRangeSample extends IntTools_BaseRangeSample {
  }
  class IntTools_CurveRangeSampleMapHasher {
    constructor();
  }
  class IntTools_EdgeEdge {
  }
  class IntTools_EdgeFace {
    constructor();
  }
  class IntTools_FClass2d {
  }
  class IntTools_FaceFace {
    constructor();
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
    constructor();
  }
  class IntTools_SurfaceRangeLocalizeData {
  }
  class IntTools_SurfaceRangeSample {
  }
  class IntTools_SurfaceRangeSampleMapHasher {
    constructor();
  }
  class IntTools_Tools {
    constructor();
  }
  class IntTools_TopolTool extends Adaptor3d_TopolTool {
  }
  class IntTools_WLineTool {
    constructor();
  }
  class IntWalk_PWalking {
  }
  class IntWalk_TheFunctionOfTheInt2S extends math_FunctionSetWithDerivatives {
    constructor();
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
    constructor();
  }
  class Interface_CopyTool {
  }
  class Interface_EntityCluster extends Standard_Transient {
  }
  class Interface_EntityIterator {
  }
  class Interface_EntityList {
    constructor();
  }
  class Interface_FileParameter {
    constructor();
  }
  class Interface_FileReaderTool {
  }
  class Interface_FloatWriter {
    constructor();
  }
  class Interface_GTool extends Standard_Transient {
  }
  class Interface_GeneralLib {
  }
  class Interface_GlobalNodeOfGeneralLib extends Standard_Transient {
    constructor();
  }
  class Interface_GlobalNodeOfReaderLib extends Standard_Transient {
    constructor();
  }
  class Interface_GraphContent extends Interface_EntityIterator {
  }
  class Interface_IntList {
  }
  class Interface_IntVal extends Standard_Transient {
    constructor();
  }
  class Interface_InterfaceError extends Standard_Failure {
  }
  class Interface_InterfaceMismatch extends Interface_InterfaceError {
  }
  class Interface_InterfaceModel extends Standard_Transient {
  }
  class Interface_LineBuffer {
    constructor();
  }
  class Interface_MSG {
  }
  class Interface_MapAsciiStringHasher {
    constructor();
  }
  class Interface_NodeOfGeneralLib extends Standard_Transient {
    constructor();
  }
  class Interface_NodeOfReaderLib extends Standard_Transient {
    constructor();
  }
  class Interface_ParamList extends Standard_Transient {
    constructor();
  }
  class Interface_ParamSet extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class Interface_SignType extends MoniTool_SignText {
  }
  class Interface_Static extends Interface_TypedValue {
  }
  class Interface_TypedValue extends MoniTool_TypedValue {
    constructor();
  }
  class Interface_UndefinedContent extends Standard_Transient {
    constructor();
  }
  class Interval {
  }
  class Intf {
    constructor();
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
    constructor();
  }
  class Intrv_Interval {
  }
  class Intrv_Intervals {
  }
  class LDOMBasicString {
  }
  class LDOMParser {
    constructor();
  }
  class LDOM_Attr extends LDOM_Node {
  }
  class LDOM_BasicAttribute extends LDOM_BasicNode {
    constructor();
  }
  class LDOM_BasicElement extends LDOM_BasicNode {
    constructor();
  }
  class LDOM_BasicNode {
  }
  class LDOM_BasicText extends LDOM_BasicNode {
    constructor();
  }
  class LDOM_CDATASection extends LDOM_Text {
  }
  class LDOM_CharReference {
    constructor();
  }
  class LDOM_CharacterData extends LDOM_Node {
  }
  class LDOM_Comment extends LDOM_CharacterData {
  }
  class LDOM_Document {
  }
  class LDOM_DocumentType {
    constructor();
  }
  class LDOM_Element extends LDOM_Node {
  }
  class LDOM_LDOMImplementation {
    constructor();
  }
  class LDOM_NodeList {
  }
  class LDOM_OSStream extends Standard_OStream {
    constructor();
  }
  class LDOM_SBuffer extends std::streambuf {
    constructor();
  }
  class LDOM_Text extends LDOM_CharacterData {
  }
  class LDOM_XmlReader {
    constructor();
  }
  class LDOM_XmlWriter {
    constructor();
  }
  class LProp3d_CLProps {
  }
  class LProp3d_CurveTool {
    constructor();
  }
  class LProp3d_SLProps {
  }
  class LProp3d_SurfaceTool {
    constructor();
  }
  class LProp_AnalyticCurInf {
    constructor();
  }
  class LProp_BadContinuity extends Standard_Failure {
  }
  class LProp_CurAndInf {
    constructor();
  }
  class LProp_NotDefined extends Standard_Failure {
  }
  class Law {
    constructor();
  }
  class Law_BSpFunc extends Law_Function {
  }
  class Law_BSpline extends Standard_Transient {
  }
  class Law_BSplineKnotSplitting {
    constructor();
  }
  class Law_Composite extends Law_Function {
  }
  class Law_Constant extends Law_Function {
    constructor();
  }
  class Law_Function extends Standard_Transient {
  }
  class Law_Interpol extends Law_BSpFunc {
    constructor();
  }
  class Law_Linear extends Law_Function {
    constructor();
  }
  class Law_S extends Law_BSpFunc {
    constructor();
  }
  class LocOpe {
    constructor();
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
    constructor();
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
    constructor();
  }
  class LocalAnalysis {
    constructor();
  }
  class LocalAnalysis_CurveContinuity {
    constructor();
  }
  class LocalAnalysis_SurfaceContinuity {
  }
  class MAT2d_BiInt {
    constructor();
  }
  class MAT2d_Circuit extends Standard_Transient {
    constructor();
  }
  class MAT2d_Connexion extends Standard_Transient {
  }
  class MAT2d_MapBiIntHasher {
    constructor();
  }
  class MAT2d_Mat2d {
    constructor();
  }
  class MAT2d_MiniPath {
    constructor();
  }
  class MAT2d_Tool2d {
    constructor();
  }
  class MAT_Arc extends Standard_Transient {
    constructor();
  }
  class MAT_BasicElt extends Standard_Transient {
    constructor();
  }
  class MAT_Bisector extends Standard_Transient {
    constructor();
  }
  class MAT_Edge extends Standard_Transient {
    constructor();
  }
  class MAT_Graph extends Standard_Transient {
    constructor();
  }
  class MAT_ListOfBisector extends Standard_Transient {
    constructor();
  }
  class MAT_ListOfEdge extends Standard_Transient {
    constructor();
  }
  class MAT_Node extends Standard_Transient {
    constructor();
  }
  class MAT_TListNodeOfListOfBisector extends Standard_Transient {
  }
  class MAT_TListNodeOfListOfEdge extends Standard_Transient {
  }
  class MAT_Zone extends Standard_Transient {
  }
  class MeshVS_Buffer {
    constructor();
  }
  class MeshVS_CommonSensitiveEntity extends Select3D_SensitiveSet {
    constructor();
  }
  class MeshVS_DataSource extends Standard_Transient {
  }
  class MeshVS_DataSource3D extends MeshVS_DataSource {
  }
  class MeshVS_DeformedDataSource extends MeshVS_DataSource {
    constructor();
  }
  class MeshVS_Drawer extends Standard_Transient {
    constructor();
  }
  class MeshVS_DummySensitiveEntity extends Select3D_SensitiveEntity {
    constructor();
  }
  class MeshVS_ElementalColorPrsBuilder extends MeshVS_PrsBuilder {
    constructor();
  }
  class MeshVS_Mesh extends AIS_InteractiveObject {
    constructor();
  }
  class MeshVS_MeshEntityOwner extends SelectMgr_EntityOwner {
    constructor();
  }
  class MeshVS_MeshOwner extends SelectMgr_EntityOwner {
    constructor();
  }
  class MeshVS_MeshPrsBuilder extends MeshVS_PrsBuilder {
    constructor();
  }
  class MeshVS_NodalColorPrsBuilder extends MeshVS_PrsBuilder {
    constructor();
  }
  class MeshVS_PrsBuilder extends Standard_Transient {
  }
  class MeshVS_SensitiveFace extends Select3D_SensitiveFace {
    constructor();
  }
  class MeshVS_SensitiveMesh extends Select3D_SensitiveEntity {
    constructor();
  }
  class MeshVS_SensitivePolyhedron extends Select3D_SensitiveEntity {
    constructor();
  }
  class MeshVS_SensitiveQuad extends Select3D_SensitiveEntity {
  }
  class MeshVS_SensitiveSegment extends Select3D_SensitiveSegment {
    constructor();
  }
  class MeshVS_TextPrsBuilder extends MeshVS_PrsBuilder {
    constructor();
  }
  class MeshVS_Tool {
    constructor();
  }
  class MeshVS_VectorPrsBuilder extends MeshVS_PrsBuilder {
    constructor();
  }
  class Message {
    constructor();
  }
  class Message_Alert extends Standard_Transient {
    constructor();
  }
  class Message_Algorithm extends Standard_Transient {
    constructor();
  }
  class Message_ExecStatus {
  }
  class Message_Messenger extends Standard_Transient {
  }
  class Message_Msg {
  }
  class Message_MsgFile {
    constructor();
  }
  class Message_Printer extends Standard_Transient {
  }
  class Message_PrinterOStream extends Message_Printer {
  }
  class Message_ProgressIndicator extends Standard_Transient {
  }
  class Message_ProgressScale {
    constructor();
  }
  class Message_ProgressSentry {
  }
  class Message_Report extends Standard_Transient {
    constructor();
  }
  class MoniTool_AttrList {
  }
  class MoniTool_CaseData extends Standard_Transient {
    constructor();
  }
  class MoniTool_DataInfo {
    constructor();
  }
  class MoniTool_ElemHasher {
    constructor();
  }
  class MoniTool_Element extends Standard_Transient {
  }
  class MoniTool_IntVal extends Standard_Transient {
    constructor();
  }
  class MoniTool_MTHasher {
    constructor();
  }
  class MoniTool_RealVal extends Standard_Transient {
    constructor();
  }
  class MoniTool_SignShape extends MoniTool_SignText {
    constructor();
  }
  class MoniTool_SignText extends Standard_Transient {
  }
  class MoniTool_Stat {
  }
  class MoniTool_Timer extends Standard_Transient {
    constructor();
  }
  class MoniTool_TimerSentry {
  }
  class MoniTool_TransientElem extends MoniTool_Element {
    constructor();
  }
  class MoniTool_TypedValue extends Standard_Transient {
  }
  class MyDirectPolynomialRoots {
  }
  class NLPlate_HGPPConstraint extends Standard_Transient {
  }
  class NLPlate_HPG0Constraint extends NLPlate_HGPPConstraint {
    constructor();
  }
  class NLPlate_HPG0G1Constraint extends NLPlate_HPG0Constraint {
    constructor();
  }
  class NLPlate_HPG0G2Constraint extends NLPlate_HPG0G1Constraint {
    constructor();
  }
  class NLPlate_HPG0G3Constraint extends NLPlate_HPG0G2Constraint {
    constructor();
  }
  class NLPlate_HPG1Constraint extends NLPlate_HGPPConstraint {
    constructor();
  }
  class NLPlate_HPG2Constraint extends NLPlate_HPG1Constraint {
    constructor();
  }
  class NLPlate_HPG3Constraint extends NLPlate_HPG2Constraint {
    constructor();
  }
  class NLPlate_NLPlate {
    constructor();
  }
  class OSD {
    constructor();
  }
  class OSD_Chronometer {
    constructor();
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
    constructor();
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
    constructor();
  }
  class OSD_MAllocHook {
    constructor();
  }
  class OSD_MemInfo {
    constructor();
  }
  class OSD_OSDError extends Standard_Failure {
  }
  class OSD_PerfMeter {
  }
  class OSD_Process {
    constructor();
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
    constructor();
  }
  class PCDM {
    constructor();
  }
  class PCDM_DOMHeaderParser extends LDOMParser {
    constructor();
  }
  class PCDM_Document extends Standard_Persistent {
    constructor();
  }
  class PCDM_DriverError extends Standard_Failure {
  }
  class PCDM_ReadWriter extends Standard_Transient {
  }
  class PCDM_ReadWriter_1 extends PCDM_ReadWriter {
    constructor();
  }
  class PCDM_Reader extends Standard_Transient {
  }
  class PCDM_Reference {
  }
  class PCDM_ReferenceIterator extends Standard_Transient {
    constructor();
  }
  class PCDM_RetrievalDriver extends PCDM_Reader {
  }
  class PCDM_StorageDriver extends PCDM_Writer {
    constructor();
  }
  class PCDM_Writer extends Standard_Transient {
  }
  class PLib {
    constructor();
  }
  class PLib_Base extends Standard_Transient {
  }
  class PLib_DoubleJacobiPolynomial {
  }
  class PLib_HermitJacobi extends PLib_Base {
    constructor();
  }
  class PLib_JacobiPolynomial extends PLib_Base {
    constructor();
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
    constructor();
  }
  class Plate_GtoCConstraint {
  }
  class Plate_LineConstraint {
    constructor();
  }
  class Plate_LinearScalarConstraint {
  }
  class Plate_LinearXYZConstraint {
  }
  class Plate_PinpointConstraint {
  }
  class Plate_PlaneConstraint {
    constructor();
  }
  class Plate_Plate {
  }
  class Plate_SampledCurveConstraint {
    constructor();
  }
  class Plugin {
    constructor();
  }
  class Plugin_Failure extends Standard_Failure {
  }
  class Poly {
    constructor();
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
    constructor();
  }
  class Poly_MakeLoops3D extends Poly_MakeLoops {
    constructor();
  }
  class Poly_Polygon2D extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class ProjLib {
    constructor();
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
    constructor();
  }
  class ProjLib_PrjResolve {
    constructor();
  }
  class ProjLib_ProjectOnPlane extends Adaptor3d_Curve {
  }
  class ProjLib_ProjectedCurve extends Adaptor2d_Curve2d {
  }
  class ProjLib_Projector {
    constructor();
  }
  class ProjLib_Sphere extends ProjLib_Projector {
  }
  class ProjLib_Torus extends ProjLib_Projector {
  }
  class Prs3d {
    constructor();
  }
  class Prs3d_Arrow extends Prs3d_Root {
    constructor();
  }
  class Prs3d_ArrowAspect extends Prs3d_BasicAspect {
  }
  class Prs3d_BasicAspect extends Standard_Transient {
  }
  class Prs3d_DatumAspect extends Prs3d_BasicAspect {
    constructor();
  }
  class Prs3d_DimensionAspect extends Prs3d_BasicAspect {
    constructor();
  }
  class Prs3d_DimensionUnits {
  }
  class Prs3d_Drawer extends Graphic3d_PresentationAttributes {
    constructor();
  }
  class Prs3d_InvalidAngle extends Standard_RangeError {
  }
  class Prs3d_IsoAspect extends Prs3d_LineAspect {
    constructor();
  }
  class Prs3d_LineAspect extends Prs3d_BasicAspect {
  }
  class Prs3d_PlaneAspect extends Prs3d_BasicAspect {
    constructor();
  }
  class Prs3d_PointAspect extends Prs3d_BasicAspect {
  }
  class Prs3d_PresentationShadow extends Graphic3d_Structure {
    constructor();
  }
  class Prs3d_Projector extends Standard_Transient {
  }
  class Prs3d_Root {
    constructor();
  }
  class Prs3d_ShadingAspect extends Prs3d_BasicAspect {
  }
  class Prs3d_ShapeTool {
    constructor();
  }
  class Prs3d_Text extends Prs3d_Root {
    constructor();
  }
  class Prs3d_TextAspect extends Prs3d_BasicAspect {
  }
  class Prs3d_ToolCylinder extends Prs3d_ToolQuadric {
    constructor();
  }
  class Prs3d_ToolDisk extends Prs3d_ToolQuadric {
    constructor();
  }
  class Prs3d_ToolSector extends Prs3d_ToolQuadric {
    constructor();
  }
  class Prs3d_ToolSphere extends Prs3d_ToolQuadric {
    constructor();
  }
  class PrsMgr_PresentableObject extends Standard_Transient {
  }
  class PrsMgr_Presentation extends Graphic3d_Structure {
  }
  class PrsMgr_PresentationManager extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class RWGltf_GltfLatePrimitiveArray extends Poly_Triangulation {
    constructor();
  }
  class RWGltf_GltfPrimArrayData {
  }
  class RWGltf_MaterialCommon extends Standard_Transient {
    constructor();
  }
  class RWGltf_MaterialMetallicRoughness extends Standard_Transient {
    constructor();
  }
  class RWGltf_PrimitiveArrayReader extends Standard_Transient {
  }
  class RWGltf_TriangulationReader extends RWGltf_PrimitiveArrayReader {
    constructor();
  }
  class RWHeaderSection {
    constructor();
  }
  class RWHeaderSection_RWFileDescription {
    constructor();
  }
  class RWHeaderSection_RWFileName {
    constructor();
  }
  class RWHeaderSection_RWFileSchema {
    constructor();
  }
  class RWHeaderSection_ReadWriteModule extends StepData_ReadWriteModule {
    constructor();
  }
  class RWMesh_CafReader extends Standard_Transient {
  }
  class RWMesh_CoordinateSystemConverter {
    constructor();
  }
  class RWObj {
    constructor();
  }
  class RWObj_CafReader extends RWMesh_CafReader {
    constructor();
  }
  class RWObj_IShapeReceiver {
  }
  class RWObj_MtlReader {
    constructor();
  }
  class RWObj_Reader extends Standard_Transient {
  }
  class RWObj_TriangulationReader extends RWObj_Reader {
    constructor();
  }
  class RWStepAP203_RWCcDesignApproval {
    constructor();
  }
  class RWStepAP203_RWCcDesignCertification {
    constructor();
  }
  class RWStepAP203_RWCcDesignContract {
    constructor();
  }
  class RWStepAP203_RWCcDesignDateAndTimeAssignment {
    constructor();
  }
  class RWStepAP203_RWCcDesignPersonAndOrganizationAssignment {
    constructor();
  }
  class RWStepAP203_RWCcDesignSecurityClassification {
    constructor();
  }
  class RWStepAP203_RWCcDesignSpecificationReference {
    constructor();
  }
  class RWStepAP203_RWChange {
    constructor();
  }
  class RWStepAP203_RWChangeRequest {
    constructor();
  }
  class RWStepAP203_RWStartRequest {
    constructor();
  }
  class RWStepAP203_RWStartWork {
    constructor();
  }
  class RWStepAP214 {
    constructor();
  }
  class RWStepAP214_RWAppliedApprovalAssignment {
    constructor();
  }
  class RWStepAP214_RWAppliedDateAndTimeAssignment {
    constructor();
  }
  class RWStepAP214_RWAppliedDateAssignment {
    constructor();
  }
  class RWStepAP214_RWAppliedDocumentReference {
    constructor();
  }
  class RWStepAP214_RWAppliedExternalIdentificationAssignment {
    constructor();
  }
  class RWStepAP214_RWAppliedGroupAssignment {
    constructor();
  }
  class RWStepAP214_RWAppliedOrganizationAssignment {
    constructor();
  }
  class RWStepAP214_RWAppliedPersonAndOrganizationAssignment {
    constructor();
  }
  class RWStepAP214_RWAppliedPresentedItem {
    constructor();
  }
  class RWStepAP214_RWAppliedSecurityClassificationAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignActualDateAndTimeAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignActualDateAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignApprovalAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignDateAndPersonAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignDocumentReference {
    constructor();
  }
  class RWStepAP214_RWAutoDesignGroupAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignNominalDateAndTimeAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignNominalDateAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignOrganizationAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignPersonAndOrganizationAssignment {
    constructor();
  }
  class RWStepAP214_RWAutoDesignPresentedItem {
    constructor();
  }
  class RWStepAP214_RWAutoDesignSecurityClassificationAssignment {
    constructor();
  }
  class RWStepAP214_RWClass {
    constructor();
  }
  class RWStepAP214_RWExternallyDefinedClass {
    constructor();
  }
  class RWStepAP214_RWExternallyDefinedGeneralProperty {
    constructor();
  }
  class RWStepAP214_RWRepItemGroup {
    constructor();
  }
  class RWStepAP214_ReadWriteModule extends StepData_ReadWriteModule {
    constructor();
  }
  class RWStepAP242_RWDraughtingModelItemAssociation {
    constructor();
  }
  class RWStepAP242_RWGeometricItemSpecificUsage {
    constructor();
  }
  class RWStepAP242_RWIdAttribute {
    constructor();
  }
  class RWStepAP242_RWItemIdentifiedRepresentationUsage {
    constructor();
  }
  class RWStepBasic_RWAction {
    constructor();
  }
  class RWStepBasic_RWActionAssignment {
    constructor();
  }
  class RWStepBasic_RWActionMethod {
    constructor();
  }
  class RWStepBasic_RWActionRequestAssignment {
    constructor();
  }
  class RWStepBasic_RWActionRequestSolution {
    constructor();
  }
  class RWStepBasic_RWAddress {
    constructor();
  }
  class RWStepBasic_RWApplicationContext {
    constructor();
  }
  class RWStepBasic_RWApplicationContextElement {
    constructor();
  }
  class RWStepBasic_RWApplicationProtocolDefinition {
    constructor();
  }
  class RWStepBasic_RWApproval {
    constructor();
  }
  class RWStepBasic_RWApprovalDateTime {
    constructor();
  }
  class RWStepBasic_RWApprovalPersonOrganization {
    constructor();
  }
  class RWStepBasic_RWApprovalRelationship {
    constructor();
  }
  class RWStepBasic_RWApprovalRole {
    constructor();
  }
  class RWStepBasic_RWApprovalStatus {
    constructor();
  }
  class RWStepBasic_RWCalendarDate {
    constructor();
  }
  class RWStepBasic_RWCertification {
    constructor();
  }
  class RWStepBasic_RWCertificationAssignment {
    constructor();
  }
  class RWStepBasic_RWCertificationType {
    constructor();
  }
  class RWStepBasic_RWCharacterizedObject {
    constructor();
  }
  class RWStepBasic_RWContract {
    constructor();
  }
  class RWStepBasic_RWContractAssignment {
    constructor();
  }
  class RWStepBasic_RWContractType {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnit {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnitAndAreaUnit {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnitAndLengthUnit {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnitAndMassUnit {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnitAndPlaneAngleUnit {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnitAndRatioUnit {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnitAndSolidAngleUnit {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnitAndTimeUnit {
    constructor();
  }
  class RWStepBasic_RWConversionBasedUnitAndVolumeUnit {
    constructor();
  }
  class RWStepBasic_RWCoordinatedUniversalTimeOffset {
    constructor();
  }
  class RWStepBasic_RWDate {
    constructor();
  }
  class RWStepBasic_RWDateAndTime {
    constructor();
  }
  class RWStepBasic_RWDateRole {
    constructor();
  }
  class RWStepBasic_RWDateTimeRole {
    constructor();
  }
  class RWStepBasic_RWDerivedUnit {
    constructor();
  }
  class RWStepBasic_RWDerivedUnitElement {
    constructor();
  }
  class RWStepBasic_RWDimensionalExponents {
    constructor();
  }
  class RWStepBasic_RWDocument {
    constructor();
  }
  class RWStepBasic_RWDocumentFile {
    constructor();
  }
  class RWStepBasic_RWDocumentProductAssociation {
    constructor();
  }
  class RWStepBasic_RWDocumentProductEquivalence {
    constructor();
  }
  class RWStepBasic_RWDocumentRelationship {
    constructor();
  }
  class RWStepBasic_RWDocumentRepresentationType {
    constructor();
  }
  class RWStepBasic_RWDocumentType {
    constructor();
  }
  class RWStepBasic_RWDocumentUsageConstraint {
    constructor();
  }
  class RWStepBasic_RWEffectivity {
    constructor();
  }
  class RWStepBasic_RWEffectivityAssignment {
    constructor();
  }
  class RWStepBasic_RWEulerAngles {
    constructor();
  }
  class RWStepBasic_RWExternalIdentificationAssignment {
    constructor();
  }
  class RWStepBasic_RWExternalSource {
    constructor();
  }
  class RWStepBasic_RWExternallyDefinedItem {
    constructor();
  }
  class RWStepBasic_RWGeneralProperty {
    constructor();
  }
  class RWStepBasic_RWGroup {
    constructor();
  }
  class RWStepBasic_RWGroupAssignment {
    constructor();
  }
  class RWStepBasic_RWGroupRelationship {
    constructor();
  }
  class RWStepBasic_RWIdentificationAssignment {
    constructor();
  }
  class RWStepBasic_RWIdentificationRole {
    constructor();
  }
  class RWStepBasic_RWLengthMeasureWithUnit {
    constructor();
  }
  class RWStepBasic_RWLengthUnit {
    constructor();
  }
  class RWStepBasic_RWLocalTime {
    constructor();
  }
  class RWStepBasic_RWMassMeasureWithUnit {
    constructor();
  }
  class RWStepBasic_RWMassUnit {
    constructor();
  }
  class RWStepBasic_RWMeasureWithUnit {
    constructor();
  }
  class RWStepBasic_RWMechanicalContext {
    constructor();
  }
  class RWStepBasic_RWNameAssignment {
    constructor();
  }
  class RWStepBasic_RWNamedUnit {
    constructor();
  }
  class RWStepBasic_RWObjectRole {
    constructor();
  }
  class RWStepBasic_RWOrdinalDate {
    constructor();
  }
  class RWStepBasic_RWOrganization {
    constructor();
  }
  class RWStepBasic_RWOrganizationRole {
    constructor();
  }
  class RWStepBasic_RWOrganizationalAddress {
    constructor();
  }
  class RWStepBasic_RWPerson {
    constructor();
  }
  class RWStepBasic_RWPersonAndOrganization {
    constructor();
  }
  class RWStepBasic_RWPersonAndOrganizationRole {
    constructor();
  }
  class RWStepBasic_RWPersonalAddress {
    constructor();
  }
  class RWStepBasic_RWPlaneAngleMeasureWithUnit {
    constructor();
  }
  class RWStepBasic_RWPlaneAngleUnit {
    constructor();
  }
  class RWStepBasic_RWProduct {
    constructor();
  }
  class RWStepBasic_RWProductCategory {
    constructor();
  }
  class RWStepBasic_RWProductCategoryRelationship {
    constructor();
  }
  class RWStepBasic_RWProductConceptContext {
    constructor();
  }
  class RWStepBasic_RWProductContext {
    constructor();
  }
  class RWStepBasic_RWProductDefinition {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionContext {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionEffectivity {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionFormation {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionFormationRelationship {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionFormationWithSpecifiedSource {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionReference {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionReferenceWithLocalRepresentation {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionRelationship {
    constructor();
  }
  class RWStepBasic_RWProductDefinitionWithAssociatedDocuments {
    constructor();
  }
  class RWStepBasic_RWProductRelatedProductCategory {
    constructor();
  }
  class RWStepBasic_RWProductType {
    constructor();
  }
  class RWStepBasic_RWRatioMeasureWithUnit {
    constructor();
  }
  class RWStepBasic_RWRoleAssociation {
    constructor();
  }
  class RWStepBasic_RWSecurityClassification {
    constructor();
  }
  class RWStepBasic_RWSecurityClassificationLevel {
    constructor();
  }
  class RWStepBasic_RWSiUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndAreaUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndLengthUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndMassUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndPlaneAngleUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndRatioUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndSolidAngleUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndThermodynamicTemperatureUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndTimeUnit {
    constructor();
  }
  class RWStepBasic_RWSiUnitAndVolumeUnit {
    constructor();
  }
  class RWStepBasic_RWSolidAngleMeasureWithUnit {
    constructor();
  }
  class RWStepBasic_RWSolidAngleUnit {
    constructor();
  }
  class RWStepBasic_RWThermodynamicTemperatureUnit {
    constructor();
  }
  class RWStepBasic_RWUncertaintyMeasureWithUnit {
    constructor();
  }
  class RWStepBasic_RWVersionedActionRequest {
    constructor();
  }
  class RWStepBasic_RWWeekOfYearAndDayDate {
    constructor();
  }
  class RWStepDimTol_RWAngularityTolerance {
    constructor();
  }
  class RWStepDimTol_RWCircularRunoutTolerance {
    constructor();
  }
  class RWStepDimTol_RWCoaxialityTolerance {
    constructor();
  }
  class RWStepDimTol_RWCommonDatum {
    constructor();
  }
  class RWStepDimTol_RWConcentricityTolerance {
    constructor();
  }
  class RWStepDimTol_RWCylindricityTolerance {
    constructor();
  }
  class RWStepDimTol_RWDatum {
    constructor();
  }
  class RWStepDimTol_RWDatumFeature {
    constructor();
  }
  class RWStepDimTol_RWDatumReference {
    constructor();
  }
  class RWStepDimTol_RWDatumReferenceCompartment {
    constructor();
  }
  class RWStepDimTol_RWDatumReferenceElement {
    constructor();
  }
  class RWStepDimTol_RWDatumReferenceModifierWithValue {
    constructor();
  }
  class RWStepDimTol_RWDatumSystem {
    constructor();
  }
  class RWStepDimTol_RWDatumTarget {
    constructor();
  }
  class RWStepDimTol_RWFlatnessTolerance {
    constructor();
  }
  class RWStepDimTol_RWGeneralDatumReference {
    constructor();
  }
  class RWStepDimTol_RWGeoTolAndGeoTolWthDatRef {
    constructor();
  }
  class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol {
    constructor();
  }
  class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
    constructor();
  }
  class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol {
    constructor();
  }
  class RWStepDimTol_RWGeoTolAndGeoTolWthDatRefAndUneqDisGeoTol {
    constructor();
  }
  class RWStepDimTol_RWGeoTolAndGeoTolWthMaxTol {
    constructor();
  }
  class RWStepDimTol_RWGeoTolAndGeoTolWthMod {
    constructor();
  }
  class RWStepDimTol_RWGeometricTolerance {
    constructor();
  }
  class RWStepDimTol_RWGeometricToleranceRelationship {
    constructor();
  }
  class RWStepDimTol_RWGeometricToleranceWithDatumReference {
    constructor();
  }
  class RWStepDimTol_RWGeometricToleranceWithDefinedAreaUnit {
    constructor();
  }
  class RWStepDimTol_RWGeometricToleranceWithDefinedUnit {
    constructor();
  }
  class RWStepDimTol_RWGeometricToleranceWithMaximumTolerance {
    constructor();
  }
  class RWStepDimTol_RWGeometricToleranceWithModifiers {
    constructor();
  }
  class RWStepDimTol_RWLineProfileTolerance {
    constructor();
  }
  class RWStepDimTol_RWModifiedGeometricTolerance {
    constructor();
  }
  class RWStepDimTol_RWNonUniformZoneDefinition {
    constructor();
  }
  class RWStepDimTol_RWParallelismTolerance {
    constructor();
  }
  class RWStepDimTol_RWPerpendicularityTolerance {
    constructor();
  }
  class RWStepDimTol_RWPlacedDatumTargetFeature {
    constructor();
  }
  class RWStepDimTol_RWPositionTolerance {
    constructor();
  }
  class RWStepDimTol_RWProjectedZoneDefinition {
    constructor();
  }
  class RWStepDimTol_RWRoundnessTolerance {
    constructor();
  }
  class RWStepDimTol_RWRunoutZoneDefinition {
    constructor();
  }
  class RWStepDimTol_RWRunoutZoneOrientation {
    constructor();
  }
  class RWStepDimTol_RWStraightnessTolerance {
    constructor();
  }
  class RWStepDimTol_RWSurfaceProfileTolerance {
    constructor();
  }
  class RWStepDimTol_RWSymmetryTolerance {
    constructor();
  }
  class RWStepDimTol_RWToleranceZone {
    constructor();
  }
  class RWStepDimTol_RWToleranceZoneDefinition {
    constructor();
  }
  class RWStepDimTol_RWToleranceZoneForm {
    constructor();
  }
  class RWStepDimTol_RWTotalRunoutTolerance {
    constructor();
  }
  class RWStepDimTol_RWUnequallyDisposedGeometricTolerance {
    constructor();
  }
  class RWStepElement_RWAnalysisItemWithinRepresentation {
    constructor();
  }
  class RWStepElement_RWCurve3dElementDescriptor {
    constructor();
  }
  class RWStepElement_RWCurveElementEndReleasePacket {
    constructor();
  }
  class RWStepElement_RWCurveElementSectionDefinition {
    constructor();
  }
  class RWStepElement_RWCurveElementSectionDerivedDefinitions {
    constructor();
  }
  class RWStepElement_RWElementDescriptor {
    constructor();
  }
  class RWStepElement_RWElementMaterial {
    constructor();
  }
  class RWStepElement_RWSurface3dElementDescriptor {
    constructor();
  }
  class RWStepElement_RWSurfaceElementProperty {
    constructor();
  }
  class RWStepElement_RWSurfaceSection {
    constructor();
  }
  class RWStepElement_RWSurfaceSectionField {
    constructor();
  }
  class RWStepElement_RWSurfaceSectionFieldConstant {
    constructor();
  }
  class RWStepElement_RWSurfaceSectionFieldVarying {
    constructor();
  }
  class RWStepElement_RWUniformSurfaceSection {
    constructor();
  }
  class RWStepElement_RWVolume3dElementDescriptor {
    constructor();
  }
  class RWStepFEA_RWAlignedCurve3dElementCoordinateSystem {
    constructor();
  }
  class RWStepFEA_RWAlignedSurface3dElementCoordinateSystem {
    constructor();
  }
  class RWStepFEA_RWArbitraryVolume3dElementCoordinateSystem {
    constructor();
  }
  class RWStepFEA_RWConstantSurface3dElementCoordinateSystem {
    constructor();
  }
  class RWStepFEA_RWCurve3dElementProperty {
    constructor();
  }
  class RWStepFEA_RWCurve3dElementRepresentation {
    constructor();
  }
  class RWStepFEA_RWCurveElementEndOffset {
    constructor();
  }
  class RWStepFEA_RWCurveElementEndRelease {
    constructor();
  }
  class RWStepFEA_RWCurveElementInterval {
    constructor();
  }
  class RWStepFEA_RWCurveElementIntervalConstant {
    constructor();
  }
  class RWStepFEA_RWCurveElementIntervalLinearlyVarying {
    constructor();
  }
  class RWStepFEA_RWCurveElementLocation {
    constructor();
  }
  class RWStepFEA_RWDummyNode {
    constructor();
  }
  class RWStepFEA_RWElementGeometricRelationship {
    constructor();
  }
  class RWStepFEA_RWElementGroup {
    constructor();
  }
  class RWStepFEA_RWElementRepresentation {
    constructor();
  }
  class RWStepFEA_RWFeaAreaDensity {
    constructor();
  }
  class RWStepFEA_RWFeaAxis2Placement3d {
    constructor();
  }
  class RWStepFEA_RWFeaCurveSectionGeometricRelationship {
    constructor();
  }
  class RWStepFEA_RWFeaGroup {
    constructor();
  }
  class RWStepFEA_RWFeaLinearElasticity {
    constructor();
  }
  class RWStepFEA_RWFeaMassDensity {
    constructor();
  }
  class RWStepFEA_RWFeaMaterialPropertyRepresentation {
    constructor();
  }
  class RWStepFEA_RWFeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class RWStepFEA_RWFeaModel {
    constructor();
  }
  class RWStepFEA_RWFeaModel3d {
    constructor();
  }
  class RWStepFEA_RWFeaModelDefinition {
    constructor();
  }
  class RWStepFEA_RWFeaMoistureAbsorption {
    constructor();
  }
  class RWStepFEA_RWFeaParametricPoint {
    constructor();
  }
  class RWStepFEA_RWFeaRepresentationItem {
    constructor();
  }
  class RWStepFEA_RWFeaSecantCoefficientOfLinearThermalExpansion {
    constructor();
  }
  class RWStepFEA_RWFeaShellBendingStiffness {
    constructor();
  }
  class RWStepFEA_RWFeaShellMembraneBendingCouplingStiffness {
    constructor();
  }
  class RWStepFEA_RWFeaShellMembraneStiffness {
    constructor();
  }
  class RWStepFEA_RWFeaShellShearStiffness {
    constructor();
  }
  class RWStepFEA_RWFeaSurfaceSectionGeometricRelationship {
    constructor();
  }
  class RWStepFEA_RWFeaTangentialCoefficientOfLinearThermalExpansion {
    constructor();
  }
  class RWStepFEA_RWFreedomAndCoefficient {
    constructor();
  }
  class RWStepFEA_RWFreedomsList {
    constructor();
  }
  class RWStepFEA_RWGeometricNode {
    constructor();
  }
  class RWStepFEA_RWNode {
    constructor();
  }
  class RWStepFEA_RWNodeDefinition {
    constructor();
  }
  class RWStepFEA_RWNodeGroup {
    constructor();
  }
  class RWStepFEA_RWNodeRepresentation {
    constructor();
  }
  class RWStepFEA_RWNodeSet {
    constructor();
  }
  class RWStepFEA_RWNodeWithSolutionCoordinateSystem {
    constructor();
  }
  class RWStepFEA_RWNodeWithVector {
    constructor();
  }
  class RWStepFEA_RWParametricCurve3dElementCoordinateDirection {
    constructor();
  }
  class RWStepFEA_RWParametricCurve3dElementCoordinateSystem {
    constructor();
  }
  class RWStepFEA_RWParametricSurface3dElementCoordinateSystem {
    constructor();
  }
  class RWStepFEA_RWSurface3dElementRepresentation {
    constructor();
  }
  class RWStepFEA_RWVolume3dElementRepresentation {
    constructor();
  }
  class RWStepRepr_RWAllAroundShapeAspect {
    constructor();
  }
  class RWStepRepr_RWApex {
    constructor();
  }
  class RWStepRepr_RWAssemblyComponentUsage {
    constructor();
  }
  class RWStepRepr_RWAssemblyComponentUsageSubstitute {
    constructor();
  }
  class RWStepRepr_RWBetweenShapeAspect {
    constructor();
  }
  class RWStepRepr_RWCentreOfSymmetry {
    constructor();
  }
  class RWStepRepr_RWCharacterizedRepresentation {
    constructor();
  }
  class RWStepRepr_RWCompGroupShAspAndCompShAspAndDatumFeatAndShAsp {
    constructor();
  }
  class RWStepRepr_RWCompShAspAndDatumFeatAndShAsp {
    constructor();
  }
  class RWStepRepr_RWCompositeGroupShapeAspect {
    constructor();
  }
  class RWStepRepr_RWCompositeShapeAspect {
    constructor();
  }
  class RWStepRepr_RWCompoundRepresentationItem {
    constructor();
  }
  class RWStepRepr_RWConfigurationDesign {
    constructor();
  }
  class RWStepRepr_RWConfigurationEffectivity {
    constructor();
  }
  class RWStepRepr_RWConfigurationItem {
    constructor();
  }
  class RWStepRepr_RWConstructiveGeometryRepresentation {
    constructor();
  }
  class RWStepRepr_RWConstructiveGeometryRepresentationRelationship {
    constructor();
  }
  class RWStepRepr_RWContinuosShapeAspect {
    constructor();
  }
  class RWStepRepr_RWDataEnvironment {
    constructor();
  }
  class RWStepRepr_RWDefinitionalRepresentation {
    constructor();
  }
  class RWStepRepr_RWDerivedShapeAspect {
    constructor();
  }
  class RWStepRepr_RWDescriptiveRepresentationItem {
    constructor();
  }
  class RWStepRepr_RWExtension {
    constructor();
  }
  class RWStepRepr_RWFeatureForDatumTargetRelationship {
    constructor();
  }
  class RWStepRepr_RWFunctionallyDefinedTransformation {
    constructor();
  }
  class RWStepRepr_RWGeometricAlignment {
    constructor();
  }
  class RWStepRepr_RWGlobalUncertaintyAssignedContext {
    constructor();
  }
  class RWStepRepr_RWGlobalUnitAssignedContext {
    constructor();
  }
  class RWStepRepr_RWIntegerRepresentationItem {
    constructor();
  }
  class RWStepRepr_RWItemDefinedTransformation {
    constructor();
  }
  class RWStepRepr_RWMakeFromUsageOption {
    constructor();
  }
  class RWStepRepr_RWMappedItem {
    constructor();
  }
  class RWStepRepr_RWMaterialDesignation {
    constructor();
  }
  class RWStepRepr_RWMaterialProperty {
    constructor();
  }
  class RWStepRepr_RWMaterialPropertyRepresentation {
    constructor();
  }
  class RWStepRepr_RWMeasureRepresentationItem {
    constructor();
  }
  class RWStepRepr_RWParallelOffset {
    constructor();
  }
  class RWStepRepr_RWParametricRepresentationContext {
    constructor();
  }
  class RWStepRepr_RWPerpendicularTo {
    constructor();
  }
  class RWStepRepr_RWProductConcept {
    constructor();
  }
  class RWStepRepr_RWProductDefinitionShape {
    constructor();
  }
  class RWStepRepr_RWPropertyDefinition {
    constructor();
  }
  class RWStepRepr_RWPropertyDefinitionRelationship {
    constructor();
  }
  class RWStepRepr_RWPropertyDefinitionRepresentation {
    constructor();
  }
  class RWStepRepr_RWQuantifiedAssemblyComponentUsage {
    constructor();
  }
  class RWStepRepr_RWReprItemAndLengthMeasureWithUnit {
    constructor();
  }
  class RWStepRepr_RWReprItemAndLengthMeasureWithUnitAndQRI {
    constructor();
  }
  class RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnit {
    constructor();
  }
  class RWStepRepr_RWReprItemAndPlaneAngleMeasureWithUnitAndQRI {
    constructor();
  }
  class RWStepRepr_RWRepresentation {
    constructor();
  }
  class RWStepRepr_RWRepresentationContext {
    constructor();
  }
  class RWStepRepr_RWRepresentationItem {
    constructor();
  }
  class RWStepRepr_RWRepresentationMap {
    constructor();
  }
  class RWStepRepr_RWRepresentationRelationship {
    constructor();
  }
  class RWStepRepr_RWRepresentationRelationshipWithTransformation {
    constructor();
  }
  class RWStepRepr_RWShapeAspect {
    constructor();
  }
  class RWStepRepr_RWShapeAspectDerivingRelationship {
    constructor();
  }
  class RWStepRepr_RWShapeAspectRelationship {
    constructor();
  }
  class RWStepRepr_RWShapeAspectTransition {
    constructor();
  }
  class RWStepRepr_RWShapeRepresentationRelationshipWithTransformation {
    constructor();
  }
  class RWStepRepr_RWSpecifiedHigherUsageOccurrence {
    constructor();
  }
  class RWStepRepr_RWStructuralResponseProperty {
    constructor();
  }
  class RWStepRepr_RWStructuralResponsePropertyDefinitionRepresentation {
    constructor();
  }
  class RWStepRepr_RWTangent {
    constructor();
  }
  class RWStepRepr_RWValueRepresentationItem {
    constructor();
  }
  class RWStepShape_RWAdvancedBrepShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWAdvancedFace {
    constructor();
  }
  class RWStepShape_RWAngularLocation {
    constructor();
  }
  class RWStepShape_RWAngularSize {
    constructor();
  }
  class RWStepShape_RWBlock {
    constructor();
  }
  class RWStepShape_RWBooleanResult {
    constructor();
  }
  class RWStepShape_RWBoxDomain {
    constructor();
  }
  class RWStepShape_RWBoxedHalfSpace {
    constructor();
  }
  class RWStepShape_RWClosedShell {
    constructor();
  }
  class RWStepShape_RWCompoundShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWConnectedEdgeSet {
    constructor();
  }
  class RWStepShape_RWConnectedFaceSet {
    constructor();
  }
  class RWStepShape_RWConnectedFaceShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWConnectedFaceSubSet {
    constructor();
  }
  class RWStepShape_RWContextDependentShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWCsgShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWCsgSolid {
    constructor();
  }
  class RWStepShape_RWDefinitionalRepresentationAndShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWDimensionalCharacteristicRepresentation {
    constructor();
  }
  class RWStepShape_RWDimensionalLocation {
    constructor();
  }
  class RWStepShape_RWDimensionalLocationWithPath {
    constructor();
  }
  class RWStepShape_RWDimensionalSize {
    constructor();
  }
  class RWStepShape_RWDimensionalSizeWithPath {
    constructor();
  }
  class RWStepShape_RWEdge {
    constructor();
  }
  class RWStepShape_RWEdgeBasedWireframeModel {
    constructor();
  }
  class RWStepShape_RWEdgeBasedWireframeShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWExtrudedAreaSolid {
    constructor();
  }
  class RWStepShape_RWExtrudedFaceSolid {
    constructor();
  }
  class RWStepShape_RWFace {
    constructor();
  }
  class RWStepShape_RWFaceBasedSurfaceModel {
    constructor();
  }
  class RWStepShape_RWFaceOuterBound {
    constructor();
  }
  class RWStepShape_RWFaceSurface {
    constructor();
  }
  class RWStepShape_RWFacetedBrep {
    constructor();
  }
  class RWStepShape_RWFacetedBrepAndBrepWithVoids {
    constructor();
  }
  class RWStepShape_RWFacetedBrepShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWGeometricCurveSet {
    constructor();
  }
  class RWStepShape_RWGeometricSet {
    constructor();
  }
  class RWStepShape_RWGeometricallyBoundedSurfaceShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWGeometricallyBoundedWireframeShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWHalfSpaceSolid {
    constructor();
  }
  class RWStepShape_RWLimitsAndFits {
    constructor();
  }
  class RWStepShape_RWLoop {
    constructor();
  }
  class RWStepShape_RWLoopAndPath {
    constructor();
  }
  class RWStepShape_RWManifoldSolidBrep {
    constructor();
  }
  class RWStepShape_RWManifoldSurfaceShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWMeasureQualification {
    constructor();
  }
  class RWStepShape_RWMeasureRepresentationItemAndQualifiedRepresentationItem {
    constructor();
  }
  class RWStepShape_RWNonManifoldSurfaceShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWOpenShell {
    constructor();
  }
  class RWStepShape_RWOrientedClosedShell {
    constructor();
  }
  class RWStepShape_RWOrientedEdge {
    constructor();
  }
  class RWStepShape_RWOrientedFace {
    constructor();
  }
  class RWStepShape_RWOrientedOpenShell {
    constructor();
  }
  class RWStepShape_RWOrientedPath {
    constructor();
  }
  class RWStepShape_RWPath {
    constructor();
  }
  class RWStepShape_RWPlusMinusTolerance {
    constructor();
  }
  class RWStepShape_RWPointRepresentation {
    constructor();
  }
  class RWStepShape_RWPolyLoop {
    constructor();
  }
  class RWStepShape_RWPrecisionQualifier {
    constructor();
  }
  class RWStepShape_RWQualifiedRepresentationItem {
    constructor();
  }
  class RWStepShape_RWRevolvedAreaSolid {
    constructor();
  }
  class RWStepShape_RWRevolvedFaceSolid {
    constructor();
  }
  class RWStepShape_RWRightAngularWedge {
    constructor();
  }
  class RWStepShape_RWRightCircularCone {
    constructor();
  }
  class RWStepShape_RWRightCircularCylinder {
    constructor();
  }
  class RWStepShape_RWSeamEdge {
    constructor();
  }
  class RWStepShape_RWShapeDefinitionRepresentation {
    constructor();
  }
  class RWStepShape_RWShapeDimensionRepresentation {
    constructor();
  }
  class RWStepShape_RWShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWShapeRepresentationWithParameters {
    constructor();
  }
  class RWStepShape_RWShellBasedSurfaceModel {
    constructor();
  }
  class RWStepShape_RWSolidModel {
    constructor();
  }
  class RWStepShape_RWSolidReplica {
    constructor();
  }
  class RWStepShape_RWSphere {
    constructor();
  }
  class RWStepShape_RWSubedge {
    constructor();
  }
  class RWStepShape_RWSubface {
    constructor();
  }
  class RWStepShape_RWSweptAreaSolid {
    constructor();
  }
  class RWStepShape_RWSweptFaceSolid {
    constructor();
  }
  class RWStepShape_RWToleranceValue {
    constructor();
  }
  class RWStepShape_RWTopologicalRepresentationItem {
    constructor();
  }
  class RWStepShape_RWTorus {
    constructor();
  }
  class RWStepShape_RWTransitionalShapeRepresentation {
    constructor();
  }
  class RWStepShape_RWTypeQualifier {
    constructor();
  }
  class RWStepShape_RWValueFormatTypeQualifier {
    constructor();
  }
  class RWStepShape_RWVertex {
    constructor();
  }
  class RWStepShape_RWVertexLoop {
    constructor();
  }
  class RWStepShape_RWVertexPoint {
    constructor();
  }
  class RWStepVisual_RWAnnotationCurveOccurrence {
    constructor();
  }
  class RWStepVisual_RWAnnotationCurveOccurrenceAndAnnotationOccurrenceAndGeomReprItemAndReprItemAndStyledItem {
    constructor();
  }
  class RWStepVisual_RWAnnotationFillArea {
    constructor();
  }
  class RWStepVisual_RWAnnotationFillAreaOccurrence {
    constructor();
  }
  class RWStepVisual_RWAnnotationOccurrence {
    constructor();
  }
  class RWStepVisual_RWAnnotationPlane {
    constructor();
  }
  class RWStepVisual_RWAreaInSet {
    constructor();
  }
  class RWStepVisual_RWBackgroundColour {
    constructor();
  }
  class RWStepVisual_RWCameraImage {
    constructor();
  }
  class RWStepVisual_RWCameraModel {
    constructor();
  }
  class RWStepVisual_RWCameraModelD2 {
    constructor();
  }
  class RWStepVisual_RWCameraModelD3 {
    constructor();
  }
  class RWStepVisual_RWCameraModelD3MultiClipping {
    constructor();
  }
  class RWStepVisual_RWCameraModelD3MultiClippingIntersection {
    constructor();
  }
  class RWStepVisual_RWCameraModelD3MultiClippingUnion {
    constructor();
  }
  class RWStepVisual_RWCameraUsage {
    constructor();
  }
  class RWStepVisual_RWCharacterizedObjectAndCharacterizedRepresentationAndDraughtingModelAndRepresentation {
    constructor();
  }
  class RWStepVisual_RWColour {
    constructor();
  }
  class RWStepVisual_RWColourRgb {
    constructor();
  }
  class RWStepVisual_RWColourSpecification {
    constructor();
  }
  class RWStepVisual_RWCompositeText {
    constructor();
  }
  class RWStepVisual_RWCompositeTextWithExtent {
    constructor();
  }
  class RWStepVisual_RWContextDependentInvisibility {
    constructor();
  }
  class RWStepVisual_RWContextDependentOverRidingStyledItem {
    constructor();
  }
  class RWStepVisual_RWCoordinatesList {
    constructor();
  }
  class RWStepVisual_RWCurveStyle {
    constructor();
  }
  class RWStepVisual_RWCurveStyleFont {
    constructor();
  }
  class RWStepVisual_RWCurveStyleFontPattern {
    constructor();
  }
  class RWStepVisual_RWDraughtingCallout {
    constructor();
  }
  class RWStepVisual_RWDraughtingModel {
    constructor();
  }
  class RWStepVisual_RWDraughtingPreDefinedColour {
    constructor();
  }
  class RWStepVisual_RWDraughtingPreDefinedCurveFont {
    constructor();
  }
  class RWStepVisual_RWExternallyDefinedCurveFont {
    constructor();
  }
  class RWStepVisual_RWFillAreaStyle {
    constructor();
  }
  class RWStepVisual_RWFillAreaStyleColour {
    constructor();
  }
  class RWStepVisual_RWInvisibility {
    constructor();
  }
  class RWStepVisual_RWMechanicalDesignGeometricPresentationArea {
    constructor();
  }
  class RWStepVisual_RWMechanicalDesignGeometricPresentationRepresentation {
    constructor();
  }
  class RWStepVisual_RWOverRidingStyledItem {
    constructor();
  }
  class RWStepVisual_RWPlanarBox {
    constructor();
  }
  class RWStepVisual_RWPlanarExtent {
    constructor();
  }
  class RWStepVisual_RWPointStyle {
    constructor();
  }
  class RWStepVisual_RWPreDefinedColour {
    constructor();
  }
  class RWStepVisual_RWPreDefinedCurveFont {
    constructor();
  }
  class RWStepVisual_RWPreDefinedItem {
    constructor();
  }
  class RWStepVisual_RWPresentationArea {
    constructor();
  }
  class RWStepVisual_RWPresentationLayerAssignment {
    constructor();
  }
  class RWStepVisual_RWPresentationLayerUsage {
    constructor();
  }
  class RWStepVisual_RWPresentationRepresentation {
    constructor();
  }
  class RWStepVisual_RWPresentationSet {
    constructor();
  }
  class RWStepVisual_RWPresentationSize {
    constructor();
  }
  class RWStepVisual_RWPresentationStyleAssignment {
    constructor();
  }
  class RWStepVisual_RWPresentationStyleByContext {
    constructor();
  }
  class RWStepVisual_RWPresentationView {
    constructor();
  }
  class RWStepVisual_RWPresentedItemRepresentation {
    constructor();
  }
  class RWStepVisual_RWStyledItem {
    constructor();
  }
  class RWStepVisual_RWSurfaceSideStyle {
    constructor();
  }
  class RWStepVisual_RWSurfaceStyleBoundary {
    constructor();
  }
  class RWStepVisual_RWSurfaceStyleControlGrid {
    constructor();
  }
  class RWStepVisual_RWSurfaceStyleFillArea {
    constructor();
  }
  class RWStepVisual_RWSurfaceStyleParameterLine {
    constructor();
  }
  class RWStepVisual_RWSurfaceStyleSegmentationCurve {
    constructor();
  }
  class RWStepVisual_RWSurfaceStyleSilhouette {
    constructor();
  }
  class RWStepVisual_RWSurfaceStyleUsage {
    constructor();
  }
  class RWStepVisual_RWTemplate {
    constructor();
  }
  class RWStepVisual_RWTemplateInstance {
    constructor();
  }
  class RWStepVisual_RWTessellatedAnnotationOccurrence {
    constructor();
  }
  class RWStepVisual_RWTessellatedCurveSet {
    constructor();
  }
  class RWStepVisual_RWTessellatedGeometricSet {
    constructor();
  }
  class RWStepVisual_RWTessellatedItem {
    constructor();
  }
  class RWStepVisual_RWTextLiteral {
    constructor();
  }
  class RWStepVisual_RWTextStyle {
    constructor();
  }
  class RWStepVisual_RWTextStyleForDefinedFont {
    constructor();
  }
  class RWStepVisual_RWTextStyleWithBoxCharacteristics {
    constructor();
  }
  class RWStepVisual_RWViewVolume {
    constructor();
  }
  class RWStl {
    constructor();
  }
  class RWStl_Reader extends Standard_Transient {
  }
  class Resource_LexicalCompare {
    constructor();
  }
  class Resource_Manager extends Standard_Transient {
  }
  class Resource_NoSuchResource extends Standard_NoSuchObject {
  }
  class Resource_Unicode {
    constructor();
  }
  class STEPCAFControl_ActorWrite extends STEPControl_ActorWrite {
    constructor();
  }
  class STEPCAFControl_Controller extends STEPControl_Controller {
    constructor();
  }
  class STEPCAFControl_ExternFile extends Standard_Transient {
    constructor();
  }
  class STEPCAFControl_GDTProperty {
    constructor();
  }
  class STEPCAFControl_Reader {
  }
  class STEPCAFControl_Writer {
  }
  class STEPConstruct {
    constructor();
  }
  class STEPConstruct_AP203Context {
    constructor();
  }
  class STEPConstruct_Assembly {
    constructor();
  }
  class STEPConstruct_ContextTool {
  }
  class STEPConstruct_ExternRefs extends STEPConstruct_Tool {
  }
  class STEPConstruct_Part {
    constructor();
  }
  class STEPConstruct_PointHasher {
    constructor();
  }
  class STEPConstruct_Styles extends STEPConstruct_Tool {
  }
  class STEPConstruct_Tool {
  }
  class STEPConstruct_UnitContext {
    constructor();
  }
  class STEPConstruct_ValidationProps extends STEPConstruct_Tool {
  }
  class STEPControl_ActorRead extends Transfer_ActorOfTransientProcess {
    constructor();
  }
  class STEPControl_ActorWrite extends Transfer_ActorOfFinderProcess {
    constructor();
  }
  class STEPControl_Controller extends XSControl_Controller {
    constructor();
  }
  class STEPControl_Reader extends XSControl_Reader {
  }
  class STEPControl_Writer {
  }
  class STEPEdit {
    constructor();
  }
  class STEPEdit_EditContext extends IFSelect_Editor {
    constructor();
  }
  class STEPEdit_EditSDR extends IFSelect_Editor {
    constructor();
  }
  class STEPSelections_AssemblyComponent extends Standard_Transient {
  }
  class STEPSelections_AssemblyExplorer {
    constructor();
  }
  class STEPSelections_AssemblyLink extends Standard_Transient {
  }
  class STEPSelections_SelectAssembly extends IFSelect_SelectExplore {
    constructor();
  }
  class STEPSelections_SelectDerived extends StepSelect_StepType {
    constructor();
  }
  class STEPSelections_SelectFaces extends IFSelect_SelectExplore {
    constructor();
  }
  class STEPSelections_SelectForTransfer extends XSControl_SelectForTransfer {
  }
  class STEPSelections_SelectGSCurves extends IFSelect_SelectExplore {
    constructor();
  }
  class STEPSelections_SelectInstances extends IFSelect_SelectExplore {
    constructor();
  }
  class Select3D_BVHIndexBuffer extends Graphic3d_Buffer {
    constructor();
  }
  class Select3D_InteriorSensitivePointSet extends Select3D_SensitiveSet {
    constructor();
  }
  class Select3D_PointData {
    constructor();
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
    constructor();
  }
  class Select3D_SensitivePoly extends Select3D_SensitiveSet {
  }
  class Select3D_SensitivePrimitiveArray extends Select3D_SensitiveSet {
    constructor();
  }
  class Select3D_SensitiveSegment extends Select3D_SensitiveEntity {
    constructor();
  }
  class Select3D_SensitiveSet extends Select3D_SensitiveEntity {
  }
  class Select3D_SensitiveTriangle extends Select3D_SensitiveEntity {
    constructor();
  }
  class Select3D_SensitiveTriangulation extends Select3D_SensitiveSet {
  }
  class Select3D_SensitiveWire extends Select3D_SensitiveSet {
    constructor();
  }
  class SelectBasics {
    constructor();
  }
  class SelectBasics_SelectingVolumeManager {
  }
  class SelectMgr_AndFilter extends SelectMgr_CompositionFilter {
    constructor();
  }
  class SelectMgr_BaseFrustum extends Standard_Transient {
    constructor();
  }
  class SelectMgr_CompositionFilter extends SelectMgr_Filter {
  }
  class SelectMgr_EntityOwner extends Standard_Transient {
  }
  class SelectMgr_Filter extends Standard_Transient {
  }
  class SelectMgr_FrustumBuilder extends Standard_Transient {
    constructor();
  }
  class SelectMgr_OrFilter extends SelectMgr_CompositionFilter {
    constructor();
  }
  class SelectMgr_RectangularFrustum extends SelectMgr_Frustum<4> {
    constructor();
  }
  class SelectMgr_SelectableObject extends PrsMgr_PresentableObject {
  }
  class SelectMgr_SelectableObjectSet {
    constructor();
  }
  class SelectMgr_SelectingVolumeManager extends SelectBasics_SelectingVolumeManager {
    constructor();
  }
  class SelectMgr_Selection extends Standard_Transient {
    constructor();
  }
  class SelectMgr_SelectionManager extends Standard_Transient {
    constructor();
  }
  class SelectMgr_SensitiveEntity extends Standard_Transient {
    constructor();
  }
  class SelectMgr_SensitiveEntitySet extends BVH_PrimitiveSet3d {
    constructor();
  }
  class SelectMgr_SortCriterion {
    constructor();
  }
  class SelectMgr_ToleranceMap {
    constructor();
  }
  class SelectMgr_TriangularFrustum extends SelectMgr_Frustum<3> {
    constructor();
  }
  class SelectMgr_TriangularFrustumSet extends SelectMgr_BaseFrustum {
    constructor();
  }
  class SelectMgr_ViewClipRange {
    constructor();
  }
  class SelectMgr_ViewerSelector extends Standard_Transient {
  }
  class ShapeAlgo {
    constructor();
  }
  class ShapeAlgo_AlgoContainer extends Standard_Transient {
    constructor();
  }
  class ShapeAlgo_ToolContainer extends Standard_Transient {
    constructor();
  }
  class ShapeAnalysis {
    constructor();
  }
  class ShapeAnalysis_BoxBndTreeSelector extends ShapeAnalysis_BoxBndTree::Selector {
    constructor();
  }
  class ShapeAnalysis_CheckSmallFace {
    constructor();
  }
  class ShapeAnalysis_Curve {
    constructor();
  }
  class ShapeAnalysis_Edge {
    constructor();
  }
  class ShapeAnalysis_FreeBoundData extends Standard_Transient {
  }
  class ShapeAnalysis_FreeBounds {
  }
  class ShapeAnalysis_FreeBoundsProperties {
  }
  class ShapeAnalysis_Geom {
    constructor();
  }
  class ShapeAnalysis_ShapeContents {
    constructor();
  }
  class ShapeAnalysis_ShapeTolerance {
    constructor();
  }
  class ShapeAnalysis_Shell {
    constructor();
  }
  class ShapeAnalysis_Surface extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class ShapeBuild {
    constructor();
  }
  class ShapeBuild_Edge {
    constructor();
  }
  class ShapeBuild_ReShape extends BRepTools_ReShape {
    constructor();
  }
  class ShapeBuild_Vertex {
    constructor();
  }
  class ShapeConstruct {
    constructor();
  }
  class ShapeConstruct_Curve {
    constructor();
  }
  class ShapeConstruct_MakeTriangulation extends BRepBuilderAPI_MakeShape {
  }
  class ShapeConstruct_ProjectCurveOnSurface extends Standard_Transient {
    constructor();
  }
  class ShapeCustom {
    constructor();
  }
  class ShapeCustom_BSplineRestriction extends ShapeCustom_Modification {
  }
  class ShapeCustom_ConvertToBSpline extends ShapeCustom_Modification {
    constructor();
  }
  class ShapeCustom_ConvertToRevolution extends ShapeCustom_Modification {
    constructor();
  }
  class ShapeCustom_Curve {
  }
  class ShapeCustom_Curve2d {
    constructor();
  }
  class ShapeCustom_DirectModification extends ShapeCustom_Modification {
    constructor();
  }
  class ShapeCustom_Modification extends BRepTools_Modification {
  }
  class ShapeCustom_RestrictionParameters extends Standard_Transient {
    constructor();
  }
  class ShapeCustom_Surface {
  }
  class ShapeCustom_SweptToElementary extends ShapeCustom_Modification {
    constructor();
  }
  class ShapeCustom_TrsfModification extends BRepTools_TrsfModification {
    constructor();
  }
  class ShapeExtend {
    constructor();
  }
  class ShapeExtend_BasicMsgRegistrator extends Standard_Transient {
    constructor();
  }
  class ShapeExtend_ComplexCurve extends Geom_Curve {
  }
  class ShapeExtend_CompositeSurface extends Geom_Surface {
  }
  class ShapeExtend_Explorer {
    constructor();
  }
  class ShapeExtend_MsgRegistrator extends ShapeExtend_BasicMsgRegistrator {
    constructor();
  }
  class ShapeExtend_WireData extends Standard_Transient {
  }
  class ShapeFix {
    constructor();
  }
  class ShapeFix_ComposeShell extends ShapeFix_Root {
    constructor();
  }
  class ShapeFix_EdgeConnect {
    constructor();
  }
  class ShapeFix_EdgeProjAux extends Standard_Transient {
  }
  class ShapeFix_Face extends ShapeFix_Root {
  }
  class ShapeFix_FaceConnect {
    constructor();
  }
  class ShapeFix_FixSmallFace extends ShapeFix_Root {
    constructor();
  }
  class ShapeFix_FixSmallSolid extends ShapeFix_Root {
    constructor();
  }
  class ShapeFix_FreeBounds {
  }
  class ShapeFix_IntersectionTool {
    constructor();
  }
  class ShapeFix_Root extends Standard_Transient {
    constructor();
  }
  class ShapeFix_Shape extends ShapeFix_Root {
  }
  class ShapeFix_ShapeTolerance {
    constructor();
  }
  class ShapeFix_Shell extends ShapeFix_Root {
  }
  class ShapeFix_Solid extends ShapeFix_Root {
  }
  class ShapeFix_SplitCommonVertex extends ShapeFix_Root {
    constructor();
  }
  class ShapeFix_SplitTool {
    constructor();
  }
  class ShapeFix_Wire extends ShapeFix_Root {
  }
  class ShapeFix_WireVertex {
    constructor();
  }
  class ShapeFix_Wireframe extends ShapeFix_Root {
  }
  class ShapePersistent {
    constructor();
  }
  class ShapePersistent_HArray1 {
    constructor();
  }
  class ShapePersistent_HArray2 {
    constructor();
  }
  class ShapePersistent_HSequence {
    constructor();
  }
  class ShapeProcess {
    constructor();
  }
  class ShapeProcessAPI_ApplySequence {
    constructor();
  }
  class ShapeProcess_Context extends Standard_Transient {
  }
  class ShapeProcess_OperLibrary {
    constructor();
  }
  class ShapeProcess_Operator extends Standard_Transient {
  }
  class ShapeProcess_ShapeContext extends ShapeProcess_Context {
  }
  class ShapeProcess_UOperator extends ShapeProcess_Operator {
    constructor();
  }
  class ShapeUpgrade {
    constructor();
  }
  class ShapeUpgrade_ClosedEdgeDivide extends ShapeUpgrade_EdgeDivide {
    constructor();
  }
  class ShapeUpgrade_ClosedFaceDivide extends ShapeUpgrade_FaceDivide {
  }
  class ShapeUpgrade_ConvertCurve2dToBezier extends ShapeUpgrade_SplitCurve2d {
    constructor();
  }
  class ShapeUpgrade_ConvertCurve3dToBezier extends ShapeUpgrade_SplitCurve3d {
    constructor();
  }
  class ShapeUpgrade_ConvertSurfaceToBezierBasis extends ShapeUpgrade_SplitSurface {
    constructor();
  }
  class ShapeUpgrade_EdgeDivide extends ShapeUpgrade_Tool {
    constructor();
  }
  class ShapeUpgrade_FaceDivide extends ShapeUpgrade_Tool {
  }
  class ShapeUpgrade_FaceDivideArea extends ShapeUpgrade_FaceDivide {
  }
  class ShapeUpgrade_FixSmallBezierCurves extends ShapeUpgrade_FixSmallCurves {
    constructor();
  }
  class ShapeUpgrade_FixSmallCurves extends ShapeUpgrade_Tool {
    constructor();
  }
  class ShapeUpgrade_RemoveInternalWires extends ShapeUpgrade_Tool {
  }
  class ShapeUpgrade_RemoveLocations extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class ShapeUpgrade_ShapeDivideClosedEdges extends ShapeUpgrade_ShapeDivide {
    constructor();
  }
  class ShapeUpgrade_ShapeDivideContinuity extends ShapeUpgrade_ShapeDivide {
  }
  class ShapeUpgrade_ShellSewing {
    constructor();
  }
  class ShapeUpgrade_SplitCurve extends Standard_Transient {
    constructor();
  }
  class ShapeUpgrade_SplitCurve2d extends ShapeUpgrade_SplitCurve {
    constructor();
  }
  class ShapeUpgrade_SplitCurve2dContinuity extends ShapeUpgrade_SplitCurve2d {
    constructor();
  }
  class ShapeUpgrade_SplitCurve3d extends ShapeUpgrade_SplitCurve {
    constructor();
  }
  class ShapeUpgrade_SplitCurve3dContinuity extends ShapeUpgrade_SplitCurve3d {
    constructor();
  }
  class ShapeUpgrade_SplitSurface extends Standard_Transient {
    constructor();
  }
  class ShapeUpgrade_SplitSurfaceAngle extends ShapeUpgrade_SplitSurface {
    constructor();
  }
  class ShapeUpgrade_SplitSurfaceArea extends ShapeUpgrade_SplitSurface {
    constructor();
  }
  class ShapeUpgrade_SplitSurfaceContinuity extends ShapeUpgrade_SplitSurface {
    constructor();
  }
  class ShapeUpgrade_Tool extends Standard_Transient {
    constructor();
  }
  class ShapeUpgrade_UnifySameDomain extends Standard_Transient {
  }
  class ShapeUpgrade_WireDivide extends ShapeUpgrade_Tool {
    constructor();
  }
  class Standard {
    constructor();
  }
  class Standard_AbortiveTransaction extends Standard_Failure {
  }
  class Standard_ArrayStreamBuffer extends std::streambuf {
    constructor();
  }
  class Standard_CLocaleSentry {
    constructor();
  }
  class Standard_Condition {
    constructor();
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
    constructor();
  }
  class Standard_DumpSentry {
    constructor();
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
    constructor();
  }
  class Standard_MMgrRaw extends Standard_MMgrRoot {
    constructor();
  }
  class Standard_MMgrRoot {
  }
  class Standard_MMgrTBBalloc extends Standard_MMgrRoot {
    constructor();
  }
  class Standard_MultiplyDefined extends Standard_DomainError {
  }
  class Standard_Mutex extends Standard_ErrorHandler::Callback {
    constructor();
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
    constructor();
  }
  class Standard_OutOfRange extends Standard_RangeError {
  }
  class Standard_Overflow extends Standard_NumericError {
  }
  class Standard_Persistent extends Standard_Transient {
    constructor();
  }
  class Standard_ProgramError extends Standard_Failure {
  }
  class Standard_RangeError extends Standard_DomainError {
  }
  class Standard_ReadBuffer {
    constructor();
  }
  class Standard_ReadLineBuffer {
    constructor();
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
    constructor();
  }
  class StdDrivers_DocumentRetrievalDriver extends StdLDrivers_DocumentRetrievalDriver {
    constructor();
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
    constructor();
  }
  class StdLDrivers_DocumentRetrievalDriver extends PCDM_RetrievalDriver {
    constructor();
  }
  class StdLPersistent {
    constructor();
  }
  class StdLPersistent_Collection {
    constructor();
  }
  class StdLPersistent_Data extends StdObjMgt_Persistent {
    constructor();
  }
  class StdLPersistent_Dependency {
    constructor();
  }
  class StdLPersistent_Document extends StdObjMgt_Persistent {
    constructor();
  }
  class StdLPersistent_Function extends StdObjMgt_Attribute<TFunction_Function> {
    constructor();
  }
  class StdLPersistent_HArray1 {
    constructor();
  }
  class StdLPersistent_HArray2 {
    constructor();
  }
  class StdLPersistent_HString {
    constructor();
  }
  class StdLPersistent_NamedData extends StdObjMgt_Attribute<TDataStd_NamedData> {
    constructor();
  }
  class StdLPersistent_Real extends StdObjMgt_Attribute<TDataStd_Real> {
    constructor();
  }
  class StdLPersistent_TreeNode extends StdObjMgt_Attribute<TDataStd_TreeNode>::Static {
    constructor();
  }
  class StdLPersistent_Value {
    constructor();
  }
  class StdLPersistent_Variable extends StdObjMgt_Attribute<TDataStd_Variable> {
    constructor();
  }
  class StdLPersistent_Void {
    constructor();
  }
  class StdLPersistent_XLink extends StdObjMgt_Attribute<TDocStd_XLink> {
    constructor();
  }
  class StdObjMgt_MapOfInstantiators extends NCollection_DataMap<TCollection_AsciiString, StdObjMgt_Persistent::Instantiator, TCollection_AsciiString> {
    constructor();
  }
  class StdObjMgt_Persistent extends Standard_Transient {
  }
  class StdObjMgt_ReadData {
    constructor();
  }
  class StdObjMgt_SharedObject {
    constructor();
  }
  class StdObjMgt_WriteData {
    constructor();
  }
  class StdObject_Location {
    constructor();
  }
  class StdObject_Shape {
    constructor();
  }
  class StdPersistent {
    constructor();
  }
  class StdPersistent_DataXtd {
    constructor();
  }
  class StdPersistent_DataXtd_Constraint extends StdObjMgt_Attribute<TDataXtd_Constraint> {
    constructor();
  }
  class StdPersistent_DataXtd_PatternStd extends StdObjMgt_Attribute<TDataXtd_PatternStd> {
    constructor();
  }
  class StdPersistent_HArray1 {
    constructor();
  }
  class StdPersistent_Naming {
    constructor();
  }
  class StdPersistent_PPrsStd {
    constructor();
  }
  class StdPersistent_TopoDS {
    constructor();
  }
  class StdPrs_BndBox extends Prs3d_Root {
    constructor();
  }
  class StdPrs_Curve extends Prs3d_Root {
    constructor();
  }
  class StdPrs_DeflectionCurve extends Prs3d_Root {
    constructor();
  }
  class StdPrs_HLRPolyShape extends Prs3d_Root {
    constructor();
  }
  class StdPrs_HLRShape extends Prs3d_Root {
    constructor();
  }
  class StdPrs_HLRToolShape {
    constructor();
  }
  class StdPrs_Isolines extends Prs3d_Root {
    constructor();
  }
  class StdPrs_Plane extends Prs3d_Root {
    constructor();
  }
  class StdPrs_PoleCurve extends Prs3d_Root {
    constructor();
  }
  class StdPrs_ShadedShape extends Prs3d_Root {
    constructor();
  }
  class StdPrs_ShadedSurface extends Prs3d_Root {
    constructor();
  }
  class StdPrs_ToolPoint {
    constructor();
  }
  class StdPrs_ToolRFace {
  }
  class StdPrs_ToolTriangulatedShape {
    constructor();
  }
  class StdPrs_ToolVertex {
    constructor();
  }
  class StdPrs_WFDeflectionRestrictedFace extends Prs3d_Root {
    constructor();
  }
  class StdPrs_WFDeflectionSurface extends Prs3d_Root {
    constructor();
  }
  class StdPrs_WFPoleSurface extends Prs3d_Root {
    constructor();
  }
  class StdPrs_WFRestrictedFace extends Prs3d_Root {
    constructor();
  }
  class StdPrs_WFShape extends Prs3d_Root {
    constructor();
  }
  class StdPrs_WFSurface extends Prs3d_Root {
    constructor();
  }
  class StdSelect {
    constructor();
  }
  class StdSelect_BRepOwner extends SelectMgr_EntityOwner {
  }
  class StdSelect_BRepSelectionTool {
    constructor();
  }
  class StdSelect_EdgeFilter extends SelectMgr_Filter {
    constructor();
  }
  class StdSelect_FaceFilter extends SelectMgr_Filter {
    constructor();
  }
  class StdSelect_Prs extends Prs3d_Presentation {
    constructor();
  }
  class StdSelect_Shape extends PrsMgr_PresentableObject {
    constructor();
  }
  class StdSelect_ShapeTypeFilter extends SelectMgr_Filter {
    constructor();
  }
  class StdSelect_ViewerSelector3d extends SelectMgr_ViewerSelector {
    constructor();
  }
  class StdStorage {
    constructor();
  }
  class StdStorage_Bucket {
  }
  class StdStorage_BucketIterator {
    constructor();
  }
  class StdStorage_BucketOfPersistent {
    constructor();
  }
  class StdStorage_Data extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class StepAP203_CcDesignApproval extends StepBasic_ApprovalAssignment {
    constructor();
  }
  class StepAP203_CcDesignCertification extends StepBasic_CertificationAssignment {
    constructor();
  }
  class StepAP203_CcDesignContract extends StepBasic_ContractAssignment {
    constructor();
  }
  class StepAP203_CcDesignDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
    constructor();
  }
  class StepAP203_CcDesignPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
    constructor();
  }
  class StepAP203_CcDesignSecurityClassification extends StepBasic_SecurityClassificationAssignment {
    constructor();
  }
  class StepAP203_CcDesignSpecificationReference extends StepBasic_DocumentReference {
    constructor();
  }
  class StepAP203_CertifiedItem extends StepData_SelectType {
    constructor();
  }
  class StepAP203_Change extends StepBasic_ActionAssignment {
    constructor();
  }
  class StepAP203_ChangeRequest extends StepBasic_ActionRequestAssignment {
    constructor();
  }
  class StepAP203_ChangeRequestItem extends StepData_SelectType {
    constructor();
  }
  class StepAP203_ClassifiedItem extends StepData_SelectType {
    constructor();
  }
  class StepAP203_ContractedItem extends StepData_SelectType {
    constructor();
  }
  class StepAP203_DateTimeItem extends StepData_SelectType {
    constructor();
  }
  class StepAP203_PersonOrganizationItem extends StepData_SelectType {
    constructor();
  }
  class StepAP203_SpecifiedItem extends StepData_SelectType {
    constructor();
  }
  class StepAP203_StartRequest extends StepBasic_ActionRequestAssignment {
    constructor();
  }
  class StepAP203_StartRequestItem extends StepData_SelectType {
    constructor();
  }
  class StepAP203_StartWork extends StepBasic_ActionAssignment {
    constructor();
  }
  class StepAP203_WorkItem extends StepData_SelectType {
    constructor();
  }
  class StepAP209_Construct extends STEPConstruct_Tool {
  }
  class StepAP214 {
    constructor();
  }
  class StepAP214_AppliedApprovalAssignment extends StepBasic_ApprovalAssignment {
    constructor();
  }
  class StepAP214_AppliedDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
    constructor();
  }
  class StepAP214_AppliedDateAssignment extends StepBasic_DateAssignment {
    constructor();
  }
  class StepAP214_AppliedDocumentReference extends StepBasic_DocumentReference {
    constructor();
  }
  class StepAP214_AppliedExternalIdentificationAssignment extends StepBasic_ExternalIdentificationAssignment {
    constructor();
  }
  class StepAP214_AppliedGroupAssignment extends StepBasic_GroupAssignment {
    constructor();
  }
  class StepAP214_AppliedOrganizationAssignment extends StepBasic_OrganizationAssignment {
    constructor();
  }
  class StepAP214_AppliedPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
    constructor();
  }
  class StepAP214_AppliedPresentedItem extends StepVisual_PresentedItem {
    constructor();
  }
  class StepAP214_AppliedSecurityClassificationAssignment extends StepBasic_SecurityClassificationAssignment {
    constructor();
  }
  class StepAP214_ApprovalItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_AutoDesignActualDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
    constructor();
  }
  class StepAP214_AutoDesignActualDateAssignment extends StepBasic_DateAssignment {
    constructor();
  }
  class StepAP214_AutoDesignApprovalAssignment extends StepBasic_ApprovalAssignment {
    constructor();
  }
  class StepAP214_AutoDesignDateAndPersonAssignment extends StepBasic_PersonAndOrganizationAssignment {
    constructor();
  }
  class StepAP214_AutoDesignDateAndPersonItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_AutoDesignDateAndTimeItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_AutoDesignDatedItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_AutoDesignDocumentReference extends StepBasic_DocumentReference {
    constructor();
  }
  class StepAP214_AutoDesignGeneralOrgItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_AutoDesignGroupAssignment extends StepBasic_GroupAssignment {
    constructor();
  }
  class StepAP214_AutoDesignGroupedItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_AutoDesignNominalDateAndTimeAssignment extends StepBasic_DateAndTimeAssignment {
    constructor();
  }
  class StepAP214_AutoDesignNominalDateAssignment extends StepBasic_DateAssignment {
    constructor();
  }
  class StepAP214_AutoDesignOrganizationAssignment extends StepBasic_OrganizationAssignment {
    constructor();
  }
  class StepAP214_AutoDesignOrganizationItem extends StepAP214_AutoDesignGeneralOrgItem {
    constructor();
  }
  class StepAP214_AutoDesignPersonAndOrganizationAssignment extends StepBasic_PersonAndOrganizationAssignment {
    constructor();
  }
  class StepAP214_AutoDesignPresentedItem extends StepVisual_PresentedItem {
    constructor();
  }
  class StepAP214_AutoDesignPresentedItemSelect extends StepData_SelectType {
    constructor();
  }
  class StepAP214_AutoDesignReferencingItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_AutoDesignSecurityClassificationAssignment extends StepBasic_SecurityClassificationAssignment {
    constructor();
  }
  class StepAP214_Class extends StepBasic_Group {
    constructor();
  }
  class StepAP214_DateAndTimeItem extends StepAP214_ApprovalItem {
    constructor();
  }
  class StepAP214_DateItem extends StepAP214_ApprovalItem {
    constructor();
  }
  class StepAP214_DocumentReferenceItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_ExternalIdentificationItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_ExternallyDefinedClass extends StepAP214_Class {
    constructor();
  }
  class StepAP214_ExternallyDefinedGeneralProperty extends StepBasic_GeneralProperty {
    constructor();
  }
  class StepAP214_GroupItem extends StepData_SelectType {
    constructor();
  }
  class StepAP214_OrganizationItem extends StepAP214_ApprovalItem {
    constructor();
  }
  class StepAP214_PersonAndOrganizationItem extends StepAP214_ApprovalItem {
    constructor();
  }
  class StepAP214_PresentedItemSelect extends StepData_SelectType {
    constructor();
  }
  class StepAP214_Protocol extends StepData_Protocol {
    constructor();
  }
  class StepAP214_RepItemGroup extends StepBasic_Group {
    constructor();
  }
  class StepAP214_SecurityClassificationItem extends StepAP214_ApprovalItem {
    constructor();
  }
  class StepAP242_DraughtingModelItemAssociation extends StepAP242_ItemIdentifiedRepresentationUsage {
    constructor();
  }
  class StepAP242_GeometricItemSpecificUsage extends StepAP242_ItemIdentifiedRepresentationUsage {
    constructor();
  }
  class StepAP242_IdAttribute extends Standard_Transient {
    constructor();
  }
  class StepAP242_IdAttributeSelect extends StepData_SelectType {
    constructor();
  }
  class StepAP242_ItemIdentifiedRepresentationUsage extends Standard_Transient {
    constructor();
  }
  class StepAP242_ItemIdentifiedRepresentationUsageDefinition extends StepData_SelectType {
    constructor();
  }
  class StepBasic_Action extends Standard_Transient {
    constructor();
  }
  class StepBasic_ActionAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_ActionMethod extends Standard_Transient {
    constructor();
  }
  class StepBasic_ActionRequestAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_ActionRequestSolution extends Standard_Transient {
    constructor();
  }
  class StepBasic_Address extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApplicationContext extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApplicationContextElement extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApplicationProtocolDefinition extends Standard_Transient {
    constructor();
  }
  class StepBasic_Approval extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApprovalAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApprovalDateTime extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApprovalPersonOrganization extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApprovalRelationship extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApprovalRole extends Standard_Transient {
    constructor();
  }
  class StepBasic_ApprovalStatus extends Standard_Transient {
    constructor();
  }
  class StepBasic_AreaUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_CalendarDate extends StepBasic_Date {
    constructor();
  }
  class StepBasic_Certification extends Standard_Transient {
    constructor();
  }
  class StepBasic_CertificationAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_CertificationType extends Standard_Transient {
    constructor();
  }
  class StepBasic_CharacterizedObject extends Standard_Transient {
    constructor();
  }
  class StepBasic_Contract extends Standard_Transient {
    constructor();
  }
  class StepBasic_ContractAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_ContractType extends Standard_Transient {
    constructor();
  }
  class StepBasic_ConversionBasedUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_ConversionBasedUnitAndAreaUnit extends StepBasic_ConversionBasedUnit {
    constructor();
  }
  class StepBasic_ConversionBasedUnitAndLengthUnit extends StepBasic_ConversionBasedUnit {
    constructor();
  }
  class StepBasic_ConversionBasedUnitAndMassUnit extends StepBasic_ConversionBasedUnit {
    constructor();
  }
  class StepBasic_ConversionBasedUnitAndPlaneAngleUnit extends StepBasic_ConversionBasedUnit {
    constructor();
  }
  class StepBasic_ConversionBasedUnitAndRatioUnit extends StepBasic_ConversionBasedUnit {
    constructor();
  }
  class StepBasic_ConversionBasedUnitAndSolidAngleUnit extends StepBasic_ConversionBasedUnit {
    constructor();
  }
  class StepBasic_ConversionBasedUnitAndTimeUnit extends StepBasic_ConversionBasedUnit {
    constructor();
  }
  class StepBasic_ConversionBasedUnitAndVolumeUnit extends StepBasic_ConversionBasedUnit {
    constructor();
  }
  class StepBasic_CoordinatedUniversalTimeOffset extends Standard_Transient {
    constructor();
  }
  class StepBasic_Date extends Standard_Transient {
    constructor();
  }
  class StepBasic_DateAndTime extends Standard_Transient {
    constructor();
  }
  class StepBasic_DateAndTimeAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_DateAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_DateRole extends Standard_Transient {
    constructor();
  }
  class StepBasic_DateTimeRole extends Standard_Transient {
    constructor();
  }
  class StepBasic_DateTimeSelect extends StepData_SelectType {
    constructor();
  }
  class StepBasic_DerivedUnit extends Standard_Transient {
    constructor();
  }
  class StepBasic_DerivedUnitElement extends Standard_Transient {
    constructor();
  }
  class StepBasic_DesignContext extends StepBasic_ProductDefinitionContext {
    constructor();
  }
  class StepBasic_DigitalDocument extends StepBasic_Document {
    constructor();
  }
  class StepBasic_DimensionalExponents extends Standard_Transient {
    constructor();
  }
  class StepBasic_Document extends Standard_Transient {
    constructor();
  }
  class StepBasic_DocumentFile extends StepBasic_Document {
    constructor();
  }
  class StepBasic_DocumentProductAssociation extends Standard_Transient {
    constructor();
  }
  class StepBasic_DocumentProductEquivalence extends StepBasic_DocumentProductAssociation {
    constructor();
  }
  class StepBasic_DocumentReference extends Standard_Transient {
    constructor();
  }
  class StepBasic_DocumentRelationship extends Standard_Transient {
    constructor();
  }
  class StepBasic_DocumentRepresentationType extends Standard_Transient {
    constructor();
  }
  class StepBasic_DocumentType extends Standard_Transient {
    constructor();
  }
  class StepBasic_DocumentUsageConstraint extends Standard_Transient {
    constructor();
  }
  class StepBasic_Effectivity extends Standard_Transient {
    constructor();
  }
  class StepBasic_EffectivityAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_EulerAngles extends Standard_Transient {
    constructor();
  }
  class StepBasic_ExternalIdentificationAssignment extends StepBasic_IdentificationAssignment {
    constructor();
  }
  class StepBasic_ExternalSource extends Standard_Transient {
    constructor();
  }
  class StepBasic_ExternallyDefinedItem extends Standard_Transient {
    constructor();
  }
  class StepBasic_GeneralProperty extends Standard_Transient {
    constructor();
  }
  class StepBasic_Group extends Standard_Transient {
    constructor();
  }
  class StepBasic_GroupAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_GroupRelationship extends Standard_Transient {
    constructor();
  }
  class StepBasic_IdentificationAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_IdentificationRole extends Standard_Transient {
    constructor();
  }
  class StepBasic_LengthMeasureWithUnit extends StepBasic_MeasureWithUnit {
    constructor();
  }
  class StepBasic_LengthUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_LocalTime extends Standard_Transient {
    constructor();
  }
  class StepBasic_MassMeasureWithUnit extends StepBasic_MeasureWithUnit {
    constructor();
  }
  class StepBasic_MassUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_MeasureValueMember extends StepData_SelectReal {
    constructor();
  }
  class StepBasic_MeasureWithUnit extends Standard_Transient {
    constructor();
  }
  class StepBasic_MechanicalContext extends StepBasic_ProductContext {
    constructor();
  }
  class StepBasic_NameAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_NamedUnit extends Standard_Transient {
    constructor();
  }
  class StepBasic_ObjectRole extends Standard_Transient {
    constructor();
  }
  class StepBasic_OrdinalDate extends StepBasic_Date {
    constructor();
  }
  class StepBasic_Organization extends Standard_Transient {
    constructor();
  }
  class StepBasic_OrganizationAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_OrganizationRole extends Standard_Transient {
    constructor();
  }
  class StepBasic_OrganizationalAddress extends StepBasic_Address {
    constructor();
  }
  class StepBasic_Person extends Standard_Transient {
    constructor();
  }
  class StepBasic_PersonAndOrganization extends Standard_Transient {
    constructor();
  }
  class StepBasic_PersonAndOrganizationAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_PersonAndOrganizationRole extends Standard_Transient {
    constructor();
  }
  class StepBasic_PersonOrganizationSelect extends StepData_SelectType {
    constructor();
  }
  class StepBasic_PersonalAddress extends StepBasic_Address {
    constructor();
  }
  class StepBasic_PhysicallyModeledProductDefinition extends StepBasic_ProductDefinition {
    constructor();
  }
  class StepBasic_PlaneAngleMeasureWithUnit extends StepBasic_MeasureWithUnit {
    constructor();
  }
  class StepBasic_PlaneAngleUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_Product extends Standard_Transient {
    constructor();
  }
  class StepBasic_ProductCategory extends Standard_Transient {
    constructor();
  }
  class StepBasic_ProductCategoryRelationship extends Standard_Transient {
    constructor();
  }
  class StepBasic_ProductConceptContext extends StepBasic_ApplicationContextElement {
    constructor();
  }
  class StepBasic_ProductContext extends StepBasic_ApplicationContextElement {
    constructor();
  }
  class StepBasic_ProductDefinition extends Standard_Transient {
    constructor();
  }
  class StepBasic_ProductDefinitionContext extends StepBasic_ApplicationContextElement {
    constructor();
  }
  class StepBasic_ProductDefinitionEffectivity extends StepBasic_Effectivity {
    constructor();
  }
  class StepBasic_ProductDefinitionFormation extends Standard_Transient {
    constructor();
  }
  class StepBasic_ProductDefinitionFormationRelationship extends Standard_Transient {
    constructor();
  }
  class StepBasic_ProductDefinitionFormationWithSpecifiedSource extends StepBasic_ProductDefinitionFormation {
    constructor();
  }
  class StepBasic_ProductDefinitionOrReference extends StepData_SelectType {
    constructor();
  }
  class StepBasic_ProductDefinitionReference extends Standard_Transient {
    constructor();
  }
  class StepBasic_ProductDefinitionReferenceWithLocalRepresentation extends StepBasic_ProductDefinition {
    constructor();
  }
  class StepBasic_ProductDefinitionRelationship extends Standard_Transient {
    constructor();
  }
  class StepBasic_ProductDefinitionWithAssociatedDocuments extends StepBasic_ProductDefinition {
    constructor();
  }
  class StepBasic_ProductOrFormationOrDefinition extends StepData_SelectType {
    constructor();
  }
  class StepBasic_ProductRelatedProductCategory extends StepBasic_ProductCategory {
    constructor();
  }
  class StepBasic_ProductType extends StepBasic_ProductRelatedProductCategory {
    constructor();
  }
  class StepBasic_RatioMeasureWithUnit extends StepBasic_MeasureWithUnit {
    constructor();
  }
  class StepBasic_RatioUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_RoleAssociation extends Standard_Transient {
    constructor();
  }
  class StepBasic_RoleSelect extends StepData_SelectType {
    constructor();
  }
  class StepBasic_SecurityClassification extends Standard_Transient {
    constructor();
  }
  class StepBasic_SecurityClassificationAssignment extends Standard_Transient {
    constructor();
  }
  class StepBasic_SecurityClassificationLevel extends Standard_Transient {
    constructor();
  }
  class StepBasic_SiUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_SiUnitAndAreaUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SiUnitAndLengthUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SiUnitAndMassUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SiUnitAndPlaneAngleUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SiUnitAndRatioUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SiUnitAndSolidAngleUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SiUnitAndThermodynamicTemperatureUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SiUnitAndTimeUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SiUnitAndVolumeUnit extends StepBasic_SiUnit {
    constructor();
  }
  class StepBasic_SizeMember extends StepData_SelectReal {
    constructor();
  }
  class StepBasic_SizeSelect extends StepData_SelectType {
    constructor();
  }
  class StepBasic_SolidAngleMeasureWithUnit extends StepBasic_MeasureWithUnit {
    constructor();
  }
  class StepBasic_SolidAngleUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_SourceItem extends StepData_SelectType {
    constructor();
  }
  class StepBasic_ThermodynamicTemperatureUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_TimeMeasureWithUnit extends StepBasic_MeasureWithUnit {
    constructor();
  }
  class StepBasic_TimeUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_UncertaintyMeasureWithUnit extends StepBasic_MeasureWithUnit {
    constructor();
  }
  class StepBasic_Unit extends StepData_SelectType {
    constructor();
  }
  class StepBasic_VersionedActionRequest extends Standard_Transient {
    constructor();
  }
  class StepBasic_VolumeUnit extends StepBasic_NamedUnit {
    constructor();
  }
  class StepBasic_WeekOfYearAndDayDate extends StepBasic_Date {
    constructor();
  }
  class StepData {
    constructor();
  }
  class StepData_Described extends Standard_Transient {
  }
  class StepData_ECDescr extends StepData_EDescr {
    constructor();
  }
  class StepData_EDescr extends Standard_Transient {
  }
  class StepData_ESDescr extends StepData_EDescr {
    constructor();
  }
  class StepData_EnumTool {
    constructor();
  }
  class StepData_Field {
  }
  class StepData_FieldList {
    constructor();
  }
  class StepData_FieldList1 extends StepData_FieldList {
    constructor();
  }
  class StepData_FieldListD extends StepData_FieldList {
    constructor();
  }
  class StepData_FieldListN extends StepData_FieldList {
    constructor();
  }
  class StepData_FileProtocol extends StepData_Protocol {
    constructor();
  }
  class StepData_FileRecognizer extends Standard_Transient {
  }
  class StepData_GlobalNodeOfWriterLib extends Standard_Transient {
    constructor();
  }
  class StepData_NodeOfWriterLib extends Standard_Transient {
    constructor();
  }
  class StepData_PDescr extends Standard_Transient {
    constructor();
  }
  class StepData_Plex extends StepData_Described {
    constructor();
  }
  class StepData_Protocol extends Interface_Protocol {
    constructor();
  }
  class StepData_ReadWriteModule extends Interface_ReaderModule {
  }
  class StepData_SelectArrReal extends StepData_SelectNamed {
    constructor();
  }
  class StepData_SelectInt extends StepData_SelectMember {
    constructor();
  }
  class StepData_SelectMember extends Standard_Transient {
    constructor();
  }
  class StepData_SelectNamed extends StepData_SelectMember {
    constructor();
  }
  class StepData_SelectReal extends StepData_SelectMember {
    constructor();
  }
  class StepData_SelectType {
  }
  class StepData_Simple extends StepData_Described {
    constructor();
  }
  class StepData_StepDumper {
    constructor();
  }
  class StepData_StepModel extends Interface_InterfaceModel {
    constructor();
  }
  class StepData_StepReaderData extends Interface_FileReaderData {
    constructor();
  }
  class StepData_StepReaderTool extends Interface_FileReaderTool {
    constructor();
  }
  class StepData_StepWriter {
    constructor();
  }
  class StepData_WriterLib {
  }
  class StepDimTol_AngularityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }
  class StepDimTol_CircularRunoutTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }
  class StepDimTol_CoaxialityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }
  class StepDimTol_CommonDatum extends StepRepr_CompositeShapeAspect {
    constructor();
  }
  class StepDimTol_ConcentricityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }
  class StepDimTol_CylindricityTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_Datum extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepDimTol_DatumFeature extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepDimTol_DatumOrCommonDatum extends StepData_SelectType {
    constructor();
  }
  class StepDimTol_DatumReference extends Standard_Transient {
    constructor();
  }
  class StepDimTol_DatumReferenceCompartment extends StepDimTol_GeneralDatumReference {
    constructor();
  }
  class StepDimTol_DatumReferenceElement extends StepDimTol_GeneralDatumReference {
    constructor();
  }
  class StepDimTol_DatumReferenceModifier extends StepData_SelectType {
    constructor();
  }
  class StepDimTol_DatumReferenceModifierWithValue extends Standard_Transient {
    constructor();
  }
  class StepDimTol_DatumSystem extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepDimTol_DatumSystemOrReference extends StepData_SelectType {
    constructor();
  }
  class StepDimTol_DatumTarget extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepDimTol_FlatnessTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_GeneralDatumReference extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepDimTol_GeoTolAndGeoTolWthDatRef extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMaxTol extends StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod {
    constructor();
  }
  class StepDimTol_GeoTolAndGeoTolWthDatRefAndGeoTolWthMod extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_GeoTolAndGeoTolWthDatRefAndModGeoTolAndPosTol extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_GeoTolAndGeoTolWthDatRefAndUneqDisGeoTol extends StepDimTol_GeoTolAndGeoTolWthDatRef {
    constructor();
  }
  class StepDimTol_GeoTolAndGeoTolWthMaxTol extends StepDimTol_GeoTolAndGeoTolWthMod {
    constructor();
  }
  class StepDimTol_GeoTolAndGeoTolWthMod extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_GeometricTolerance extends Standard_Transient {
    constructor();
  }
  class StepDimTol_GeometricToleranceRelationship extends Standard_Transient {
    constructor();
  }
  class StepDimTol_GeometricToleranceTarget extends StepData_SelectType {
    constructor();
  }
  class StepDimTol_GeometricToleranceWithDatumReference extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_GeometricToleranceWithDefinedAreaUnit extends StepDimTol_GeometricToleranceWithDefinedUnit {
    constructor();
  }
  class StepDimTol_GeometricToleranceWithDefinedUnit extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_GeometricToleranceWithMaximumTolerance extends StepDimTol_GeometricToleranceWithModifiers {
    constructor();
  }
  class StepDimTol_GeometricToleranceWithModifiers extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_LineProfileTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_ModifiedGeometricTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_NonUniformZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
    constructor();
  }
  class StepDimTol_ParallelismTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }
  class StepDimTol_PerpendicularityTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }
  class StepDimTol_PlacedDatumTargetFeature extends StepDimTol_DatumTarget {
    constructor();
  }
  class StepDimTol_PositionTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_ProjectedZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
    constructor();
  }
  class StepDimTol_RoundnessTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_RunoutZoneDefinition extends StepDimTol_ToleranceZoneDefinition {
    constructor();
  }
  class StepDimTol_RunoutZoneOrientation extends Standard_Transient {
    constructor();
  }
  class StepDimTol_ShapeToleranceSelect extends StepData_SelectType {
    constructor();
  }
  class StepDimTol_SimpleDatumReferenceModifierMember extends StepData_SelectInt {
    constructor();
  }
  class StepDimTol_StraightnessTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_SurfaceProfileTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepDimTol_SymmetryTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }
  class StepDimTol_ToleranceZone extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepDimTol_ToleranceZoneDefinition extends Standard_Transient {
    constructor();
  }
  class StepDimTol_ToleranceZoneForm extends Standard_Transient {
    constructor();
  }
  class StepDimTol_ToleranceZoneTarget extends StepData_SelectType {
    constructor();
  }
  class StepDimTol_TotalRunoutTolerance extends StepDimTol_GeometricToleranceWithDatumReference {
    constructor();
  }
  class StepDimTol_UnequallyDisposedGeometricTolerance extends StepDimTol_GeometricTolerance {
    constructor();
  }
  class StepElement_AnalysisItemWithinRepresentation extends Standard_Transient {
    constructor();
  }
  class StepElement_Curve3dElementDescriptor extends StepElement_ElementDescriptor {
    constructor();
  }
  class StepElement_CurveElementEndReleasePacket extends Standard_Transient {
    constructor();
  }
  class StepElement_CurveElementFreedom extends StepData_SelectType {
    constructor();
  }
  class StepElement_CurveElementFreedomMember extends StepData_SelectNamed {
    constructor();
  }
  class StepElement_CurveElementPurpose extends StepData_SelectType {
    constructor();
  }
  class StepElement_CurveElementPurposeMember extends StepData_SelectNamed {
    constructor();
  }
  class StepElement_CurveElementSectionDefinition extends Standard_Transient {
    constructor();
  }
  class StepElement_CurveElementSectionDerivedDefinitions extends StepElement_CurveElementSectionDefinition {
    constructor();
  }
  class StepElement_ElementAspect extends StepData_SelectType {
    constructor();
  }
  class StepElement_ElementAspectMember extends StepData_SelectNamed {
    constructor();
  }
  class StepElement_ElementDescriptor extends Standard_Transient {
    constructor();
  }
  class StepElement_ElementMaterial extends Standard_Transient {
    constructor();
  }
  class StepElement_MeasureOrUnspecifiedValue extends StepData_SelectType {
    constructor();
  }
  class StepElement_MeasureOrUnspecifiedValueMember extends StepData_SelectNamed {
    constructor();
  }
  class StepElement_Surface3dElementDescriptor extends StepElement_ElementDescriptor {
    constructor();
  }
  class StepElement_SurfaceElementProperty extends Standard_Transient {
    constructor();
  }
  class StepElement_SurfaceElementPurpose extends StepData_SelectType {
    constructor();
  }
  class StepElement_SurfaceElementPurposeMember extends StepData_SelectNamed {
    constructor();
  }
  class StepElement_SurfaceSection extends Standard_Transient {
    constructor();
  }
  class StepElement_SurfaceSectionField extends Standard_Transient {
    constructor();
  }
  class StepElement_SurfaceSectionFieldConstant extends StepElement_SurfaceSectionField {
    constructor();
  }
  class StepElement_SurfaceSectionFieldVarying extends StepElement_SurfaceSectionField {
    constructor();
  }
  class StepElement_UniformSurfaceSection extends StepElement_SurfaceSection {
    constructor();
  }
  class StepElement_Volume3dElementDescriptor extends StepElement_ElementDescriptor {
    constructor();
  }
  class StepElement_VolumeElementPurpose extends StepData_SelectType {
    constructor();
  }
  class StepElement_VolumeElementPurposeMember extends StepData_SelectNamed {
    constructor();
  }
  class StepFEA_AlignedCurve3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
    constructor();
  }
  class StepFEA_AlignedSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
    constructor();
  }
  class StepFEA_ArbitraryVolume3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
    constructor();
  }
  class StepFEA_ConstantSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
    constructor();
  }
  class StepFEA_Curve3dElementProperty extends Standard_Transient {
    constructor();
  }
  class StepFEA_Curve3dElementRepresentation extends StepFEA_ElementRepresentation {
    constructor();
  }
  class StepFEA_CurveElementEndCoordinateSystem extends StepData_SelectType {
    constructor();
  }
  class StepFEA_CurveElementEndOffset extends Standard_Transient {
    constructor();
  }
  class StepFEA_CurveElementEndRelease extends Standard_Transient {
    constructor();
  }
  class StepFEA_CurveElementInterval extends Standard_Transient {
    constructor();
  }
  class StepFEA_CurveElementIntervalConstant extends StepFEA_CurveElementInterval {
    constructor();
  }
  class StepFEA_CurveElementIntervalLinearlyVarying extends StepFEA_CurveElementInterval {
    constructor();
  }
  class StepFEA_CurveElementLocation extends Standard_Transient {
    constructor();
  }
  class StepFEA_DegreeOfFreedom extends StepData_SelectType {
    constructor();
  }
  class StepFEA_DegreeOfFreedomMember extends StepData_SelectNamed {
    constructor();
  }
  class StepFEA_DummyNode extends StepFEA_NodeRepresentation {
    constructor();
  }
  class StepFEA_ElementGeometricRelationship extends Standard_Transient {
    constructor();
  }
  class StepFEA_ElementGroup extends StepFEA_FeaGroup {
    constructor();
  }
  class StepFEA_ElementOrElementGroup extends StepData_SelectType {
    constructor();
  }
  class StepFEA_ElementRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepFEA_FeaAreaDensity extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaAxis2Placement3d extends StepGeom_Axis2Placement3d {
    constructor();
  }
  class StepFEA_FeaCurveSectionGeometricRelationship extends Standard_Transient {
    constructor();
  }
  class StepFEA_FeaGroup extends StepBasic_Group {
    constructor();
  }
  class StepFEA_FeaLinearElasticity extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaMassDensity extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaMaterialPropertyRepresentation extends StepRepr_MaterialPropertyRepresentation {
    constructor();
  }
  class StepFEA_FeaMaterialPropertyRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepFEA_FeaModel extends StepRepr_Representation {
    constructor();
  }
  class StepFEA_FeaModel3d extends StepFEA_FeaModel {
    constructor();
  }
  class StepFEA_FeaModelDefinition extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepFEA_FeaMoistureAbsorption extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaParametricPoint extends StepGeom_Point {
    constructor();
  }
  class StepFEA_FeaRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepFEA_FeaSecantCoefficientOfLinearThermalExpansion extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaShellBendingStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaShellMembraneBendingCouplingStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaShellMembraneStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaShellShearStiffness extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FeaSurfaceSectionGeometricRelationship extends Standard_Transient {
    constructor();
  }
  class StepFEA_FeaTangentialCoefficientOfLinearThermalExpansion extends StepFEA_FeaMaterialPropertyRepresentationItem {
    constructor();
  }
  class StepFEA_FreedomAndCoefficient extends Standard_Transient {
    constructor();
  }
  class StepFEA_FreedomsList extends Standard_Transient {
    constructor();
  }
  class StepFEA_GeometricNode extends StepFEA_NodeRepresentation {
    constructor();
  }
  class StepFEA_Node extends StepFEA_NodeRepresentation {
    constructor();
  }
  class StepFEA_NodeDefinition extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepFEA_NodeGroup extends StepFEA_FeaGroup {
    constructor();
  }
  class StepFEA_NodeRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepFEA_NodeSet extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepFEA_NodeWithSolutionCoordinateSystem extends StepFEA_Node {
    constructor();
  }
  class StepFEA_NodeWithVector extends StepFEA_Node {
    constructor();
  }
  class StepFEA_ParametricCurve3dElementCoordinateDirection extends StepFEA_FeaRepresentationItem {
    constructor();
  }
  class StepFEA_ParametricCurve3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
    constructor();
  }
  class StepFEA_ParametricSurface3dElementCoordinateSystem extends StepFEA_FeaRepresentationItem {
    constructor();
  }
  class StepFEA_Surface3dElementRepresentation extends StepFEA_ElementRepresentation {
    constructor();
  }
  class StepFEA_SymmetricTensor22d extends StepData_SelectType {
    constructor();
  }
  class StepFEA_SymmetricTensor23d extends StepData_SelectType {
    constructor();
  }
  class StepFEA_SymmetricTensor23dMember extends StepData_SelectArrReal {
    constructor();
  }
  class StepFEA_SymmetricTensor42d extends StepData_SelectType {
    constructor();
  }
  class StepFEA_SymmetricTensor43dMember extends StepData_SelectArrReal {
    constructor();
  }
  class StepFEA_Volume3dElementRepresentation extends StepFEA_ElementRepresentation {
    constructor();
  }
  class StepGeom_Axis1Placement extends StepGeom_Placement {
    constructor();
  }
  class StepGeom_Axis2Placement extends StepData_SelectType {
    constructor();
  }
  class StepGeom_Axis2Placement2d extends StepGeom_Placement {
    constructor();
  }
  class StepGeom_Axis2Placement3d extends StepGeom_Placement {
    constructor();
  }
  class StepGeom_BSplineCurve extends StepGeom_BoundedCurve {
    constructor();
  }
  class StepGeom_BSplineCurveWithKnots extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_BSplineCurveWithKnotsAndRationalBSplineCurve extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_BSplineSurface extends StepGeom_BoundedSurface {
    constructor();
  }
  class StepGeom_BSplineSurfaceWithKnots extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_BSplineSurfaceWithKnotsAndRationalBSplineSurface extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_BezierCurve extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_BezierCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_BezierSurface extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_BezierSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_BoundaryCurve extends StepGeom_CompositeCurveOnSurface {
    constructor();
  }
  class StepGeom_BoundedCurve extends StepGeom_Curve {
    constructor();
  }
  class StepGeom_BoundedSurface extends StepGeom_Surface {
    constructor();
  }
  class StepGeom_CartesianPoint extends StepGeom_Point {
    constructor();
  }
  class StepGeom_CartesianTransformationOperator extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepGeom_CartesianTransformationOperator2d extends StepGeom_CartesianTransformationOperator {
    constructor();
  }
  class StepGeom_CartesianTransformationOperator3d extends StepGeom_CartesianTransformationOperator {
    constructor();
  }
  class StepGeom_Circle extends StepGeom_Conic {
    constructor();
  }
  class StepGeom_CompositeCurve extends StepGeom_BoundedCurve {
    constructor();
  }
  class StepGeom_CompositeCurveOnSurface extends StepGeom_CompositeCurve {
    constructor();
  }
  class StepGeom_CompositeCurveSegment extends Standard_Transient {
    constructor();
  }
  class StepGeom_Conic extends StepGeom_Curve {
    constructor();
  }
  class StepGeom_ConicalSurface extends StepGeom_ElementarySurface {
    constructor();
  }
  class StepGeom_Curve extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepGeom_CurveBoundedSurface extends StepGeom_BoundedSurface {
    constructor();
  }
  class StepGeom_CurveOnSurface extends StepData_SelectType {
    constructor();
  }
  class StepGeom_CurveReplica extends StepGeom_Curve {
    constructor();
  }
  class StepGeom_CylindricalSurface extends StepGeom_ElementarySurface {
    constructor();
  }
  class StepGeom_DegeneratePcurve extends StepGeom_Point {
    constructor();
  }
  class StepGeom_DegenerateToroidalSurface extends StepGeom_ToroidalSurface {
    constructor();
  }
  class StepGeom_Direction extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepGeom_ElementarySurface extends StepGeom_Surface {
    constructor();
  }
  class StepGeom_Ellipse extends StepGeom_Conic {
    constructor();
  }
  class StepGeom_EvaluatedDegeneratePcurve extends StepGeom_DegeneratePcurve {
    constructor();
  }
  class StepGeom_GeomRepContextAndGlobUnitAssCtxAndGlobUncertaintyAssCtx extends StepRepr_RepresentationContext {
    constructor();
  }
  class StepGeom_GeometricRepresentationContext extends StepRepr_RepresentationContext {
    constructor();
  }
  class StepGeom_GeometricRepresentationContextAndGlobalUnitAssignedContext extends StepRepr_RepresentationContext {
    constructor();
  }
  class StepGeom_GeometricRepresentationContextAndParametricRepresentationContext extends StepRepr_RepresentationContext {
    constructor();
  }
  class StepGeom_GeometricRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepGeom_Hyperbola extends StepGeom_Conic {
    constructor();
  }
  class StepGeom_IntersectionCurve extends StepGeom_SurfaceCurve {
    constructor();
  }
  class StepGeom_Line extends StepGeom_Curve {
    constructor();
  }
  class StepGeom_OffsetCurve3d extends StepGeom_Curve {
    constructor();
  }
  class StepGeom_OffsetSurface extends StepGeom_Surface {
    constructor();
  }
  class StepGeom_OrientedSurface extends StepGeom_Surface {
    constructor();
  }
  class StepGeom_OuterBoundaryCurve extends StepGeom_BoundaryCurve {
    constructor();
  }
  class StepGeom_Parabola extends StepGeom_Conic {
    constructor();
  }
  class StepGeom_Pcurve extends StepGeom_Curve {
    constructor();
  }
  class StepGeom_PcurveOrSurface extends StepData_SelectType {
    constructor();
  }
  class StepGeom_Placement extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepGeom_Plane extends StepGeom_ElementarySurface {
    constructor();
  }
  class StepGeom_Point extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepGeom_PointOnCurve extends StepGeom_Point {
    constructor();
  }
  class StepGeom_PointOnSurface extends StepGeom_Point {
    constructor();
  }
  class StepGeom_PointReplica extends StepGeom_Point {
    constructor();
  }
  class StepGeom_Polyline extends StepGeom_BoundedCurve {
    constructor();
  }
  class StepGeom_QuasiUniformCurve extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_QuasiUniformCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_QuasiUniformSurface extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_QuasiUniformSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_RationalBSplineCurve extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_RationalBSplineSurface extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_RectangularCompositeSurface extends StepGeom_BoundedSurface {
    constructor();
  }
  class StepGeom_RectangularTrimmedSurface extends StepGeom_BoundedSurface {
    constructor();
  }
  class StepGeom_ReparametrisedCompositeCurveSegment extends StepGeom_CompositeCurveSegment {
    constructor();
  }
  class StepGeom_SeamCurve extends StepGeom_SurfaceCurve {
    constructor();
  }
  class StepGeom_SphericalSurface extends StepGeom_ElementarySurface {
    constructor();
  }
  class StepGeom_Surface extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepGeom_SurfaceBoundary extends StepData_SelectType {
    constructor();
  }
  class StepGeom_SurfaceCurve extends StepGeom_Curve {
    constructor();
  }
  class StepGeom_SurfaceCurveAndBoundedCurve extends StepGeom_SurfaceCurve {
    constructor();
  }
  class StepGeom_SurfaceOfLinearExtrusion extends StepGeom_SweptSurface {
    constructor();
  }
  class StepGeom_SurfaceOfRevolution extends StepGeom_SweptSurface {
    constructor();
  }
  class StepGeom_SurfacePatch extends Standard_Transient {
    constructor();
  }
  class StepGeom_SurfaceReplica extends StepGeom_Surface {
    constructor();
  }
  class StepGeom_SweptSurface extends StepGeom_Surface {
    constructor();
  }
  class StepGeom_ToroidalSurface extends StepGeom_ElementarySurface {
    constructor();
  }
  class StepGeom_TrimmedCurve extends StepGeom_BoundedCurve {
    constructor();
  }
  class StepGeom_TrimmingMember extends StepData_SelectReal {
    constructor();
  }
  class StepGeom_TrimmingSelect extends StepData_SelectType {
    constructor();
  }
  class StepGeom_UniformCurve extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_UniformCurveAndRationalBSplineCurve extends StepGeom_BSplineCurve {
    constructor();
  }
  class StepGeom_UniformSurface extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_UniformSurfaceAndRationalBSplineSurface extends StepGeom_BSplineSurface {
    constructor();
  }
  class StepGeom_Vector extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepGeom_VectorOrDirection extends StepData_SelectType {
    constructor();
  }
  class StepRepr_AllAroundShapeAspect extends StepRepr_ContinuosShapeAspect {
    constructor();
  }
  class StepRepr_Apex extends StepRepr_DerivedShapeAspect {
    constructor();
  }
  class StepRepr_AssemblyComponentUsage extends StepRepr_ProductDefinitionUsage {
    constructor();
  }
  class StepRepr_AssemblyComponentUsageSubstitute extends Standard_Transient {
    constructor();
  }
  class StepRepr_BetweenShapeAspect extends StepRepr_ContinuosShapeAspect {
    constructor();
  }
  class StepRepr_CentreOfSymmetry extends StepRepr_DerivedShapeAspect {
    constructor();
  }
  class StepRepr_CharacterizedDefinition extends StepData_SelectType {
    constructor();
  }
  class StepRepr_CharacterizedRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepRepr_CompGroupShAspAndCompShAspAndDatumFeatAndShAsp extends StepRepr_CompShAspAndDatumFeatAndShAsp {
    constructor();
  }
  class StepRepr_CompShAspAndDatumFeatAndShAsp extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepRepr_CompositeGroupShapeAspect extends StepRepr_CompositeShapeAspect {
    constructor();
  }
  class StepRepr_CompositeShapeAspect extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepRepr_CompoundRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepRepr_ConfigurationDesign extends Standard_Transient {
    constructor();
  }
  class StepRepr_ConfigurationDesignItem extends StepData_SelectType {
    constructor();
  }
  class StepRepr_ConfigurationEffectivity extends StepBasic_ProductDefinitionEffectivity {
    constructor();
  }
  class StepRepr_ConfigurationItem extends Standard_Transient {
    constructor();
  }
  class StepRepr_ConstructiveGeometryRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepRepr_ConstructiveGeometryRepresentationRelationship extends StepRepr_RepresentationRelationship {
    constructor();
  }
  class StepRepr_ContinuosShapeAspect extends StepRepr_CompositeShapeAspect {
    constructor();
  }
  class StepRepr_DataEnvironment extends Standard_Transient {
    constructor();
  }
  class StepRepr_DefinitionalRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepRepr_DerivedShapeAspect extends StepRepr_ShapeAspect {
    constructor();
  }
  class StepRepr_DescriptiveRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepRepr_Extension extends StepRepr_DerivedShapeAspect {
    constructor();
  }
  class StepRepr_ExternallyDefinedRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepRepr_FeatureForDatumTargetRelationship extends StepRepr_ShapeAspectRelationship {
    constructor();
  }
  class StepRepr_FunctionallyDefinedTransformation extends Standard_Transient {
    constructor();
  }
  class StepRepr_GeometricAlignment extends StepRepr_DerivedShapeAspect {
    constructor();
  }
  class StepRepr_GlobalUncertaintyAssignedContext extends StepRepr_RepresentationContext {
    constructor();
  }
  class StepRepr_GlobalUnitAssignedContext extends StepRepr_RepresentationContext {
    constructor();
  }
  class StepRepr_IntegerRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepRepr_ItemDefinedTransformation extends Standard_Transient {
    constructor();
  }
  class StepRepr_MakeFromUsageOption extends StepRepr_ProductDefinitionUsage {
    constructor();
  }
  class StepRepr_MappedItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepRepr_MaterialDesignation extends Standard_Transient {
    constructor();
  }
  class StepRepr_MaterialProperty extends StepRepr_PropertyDefinition {
    constructor();
  }
  class StepRepr_MaterialPropertyRepresentation extends StepRepr_PropertyDefinitionRepresentation {
    constructor();
  }
  class StepRepr_MeasureRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepRepr_NextAssemblyUsageOccurrence extends StepRepr_AssemblyComponentUsage {
    constructor();
  }
  class StepRepr_ParallelOffset extends StepRepr_DerivedShapeAspect {
    constructor();
  }
  class StepRepr_ParametricRepresentationContext extends StepRepr_RepresentationContext {
    constructor();
  }
  class StepRepr_PerpendicularTo extends StepRepr_DerivedShapeAspect {
    constructor();
  }
  class StepRepr_ProductConcept extends Standard_Transient {
    constructor();
  }
  class StepRepr_ProductDefinitionShape extends StepRepr_PropertyDefinition {
    constructor();
  }
  class StepRepr_ProductDefinitionUsage extends StepBasic_ProductDefinitionRelationship {
    constructor();
  }
  class StepRepr_PromissoryUsageOccurrence extends StepRepr_AssemblyComponentUsage {
    constructor();
  }
  class StepRepr_PropertyDefinition extends Standard_Transient {
    constructor();
  }
  class StepRepr_PropertyDefinitionRelationship extends Standard_Transient {
    constructor();
  }
  class StepRepr_PropertyDefinitionRepresentation extends Standard_Transient {
    constructor();
  }
  class StepRepr_QuantifiedAssemblyComponentUsage extends StepRepr_AssemblyComponentUsage {
    constructor();
  }
  class StepRepr_ReprItemAndLengthMeasureWithUnit extends StepRepr_ReprItemAndMeasureWithUnit {
    constructor();
  }
  class StepRepr_ReprItemAndLengthMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnitAndQRI {
    constructor();
  }
  class StepRepr_ReprItemAndMeasureWithUnit extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepRepr_ReprItemAndMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnit {
    constructor();
  }
  class StepRepr_ReprItemAndPlaneAngleMeasureWithUnit extends StepRepr_ReprItemAndMeasureWithUnit {
    constructor();
  }
  class StepRepr_ReprItemAndPlaneAngleMeasureWithUnitAndQRI extends StepRepr_ReprItemAndMeasureWithUnitAndQRI {
    constructor();
  }
  class StepRepr_Representation extends Standard_Transient {
    constructor();
  }
  class StepRepr_RepresentationContext extends Standard_Transient {
    constructor();
  }
  class StepRepr_RepresentationItem extends Standard_Transient {
    constructor();
  }
  class StepRepr_RepresentationMap extends Standard_Transient {
    constructor();
  }
  class StepRepr_RepresentationRelationship extends Standard_Transient {
    constructor();
  }
  class StepRepr_RepresentationRelationshipWithTransformation extends StepRepr_ShapeRepresentationRelationship {
    constructor();
  }
  class StepRepr_RepresentedDefinition extends StepData_SelectType {
    constructor();
  }
  class StepRepr_ShapeAspect extends Standard_Transient {
    constructor();
  }
  class StepRepr_ShapeAspectDerivingRelationship extends StepRepr_ShapeAspectRelationship {
    constructor();
  }
  class StepRepr_ShapeAspectRelationship extends Standard_Transient {
    constructor();
  }
  class StepRepr_ShapeAspectTransition extends StepRepr_ShapeAspectRelationship {
    constructor();
  }
  class StepRepr_ShapeDefinition extends StepData_SelectType {
    constructor();
  }
  class StepRepr_ShapeRepresentationRelationship extends StepRepr_RepresentationRelationship {
    constructor();
  }
  class StepRepr_ShapeRepresentationRelationshipWithTransformation extends StepRepr_RepresentationRelationshipWithTransformation {
    constructor();
  }
  class StepRepr_SpecifiedHigherUsageOccurrence extends StepRepr_AssemblyComponentUsage {
    constructor();
  }
  class StepRepr_StructuralResponseProperty extends StepRepr_PropertyDefinition {
    constructor();
  }
  class StepRepr_StructuralResponsePropertyDefinitionRepresentation extends StepRepr_PropertyDefinitionRepresentation {
    constructor();
  }
  class StepRepr_SuppliedPartRelationship extends StepBasic_ProductDefinitionRelationship {
    constructor();
  }
  class StepRepr_Tangent extends StepRepr_DerivedShapeAspect {
    constructor();
  }
  class StepRepr_Transformation extends StepData_SelectType {
    constructor();
  }
  class StepRepr_ValueRange extends StepRepr_CompoundRepresentationItem {
    constructor();
  }
  class StepRepr_ValueRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepSelect_Activator extends IFSelect_Activator {
    constructor();
  }
  class StepSelect_FileModifier extends IFSelect_GeneralModifier {
  }
  class StepSelect_FloatFormat extends StepSelect_FileModifier {
    constructor();
  }
  class StepSelect_ModelModifier extends IFSelect_Modifier {
  }
  class StepSelect_StepType extends IFSelect_Signature {
    constructor();
  }
  class StepSelect_WorkLibrary extends IFSelect_WorkLibrary {
    constructor();
  }
  class StepShape_AdvancedBrepShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_AdvancedFace extends StepShape_FaceSurface {
    constructor();
  }
  class StepShape_AngularLocation extends StepShape_DimensionalLocation {
    constructor();
  }
  class StepShape_AngularSize extends StepShape_DimensionalSize {
    constructor();
  }
  class StepShape_Block extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_BooleanOperand {
    constructor();
  }
  class StepShape_BooleanResult extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_BoxDomain extends Standard_Transient {
    constructor();
  }
  class StepShape_BoxedHalfSpace extends StepShape_HalfSpaceSolid {
    constructor();
  }
  class StepShape_BrepWithVoids extends StepShape_ManifoldSolidBrep {
    constructor();
  }
  class StepShape_ClosedShell extends StepShape_ConnectedFaceSet {
    constructor();
  }
  class StepShape_CompoundShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_ConnectedEdgeSet extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_ConnectedFaceSet extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_ConnectedFaceShapeRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepShape_ConnectedFaceSubSet extends StepShape_ConnectedFaceSet {
    constructor();
  }
  class StepShape_ContextDependentShapeRepresentation extends Standard_Transient {
    constructor();
  }
  class StepShape_CsgPrimitive extends StepData_SelectType {
    constructor();
  }
  class StepShape_CsgSelect {
    constructor();
  }
  class StepShape_CsgShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_CsgSolid extends StepShape_SolidModel {
    constructor();
  }
  class StepShape_DefinitionalRepresentationAndShapeRepresentation extends StepRepr_DefinitionalRepresentation {
    constructor();
  }
  class StepShape_DimensionalCharacteristic extends StepData_SelectType {
    constructor();
  }
  class StepShape_DimensionalCharacteristicRepresentation extends Standard_Transient {
    constructor();
  }
  class StepShape_DimensionalLocation extends StepRepr_ShapeAspectRelationship {
    constructor();
  }
  class StepShape_DimensionalLocationWithPath extends StepShape_DimensionalLocation {
    constructor();
  }
  class StepShape_DimensionalSize extends Standard_Transient {
    constructor();
  }
  class StepShape_DimensionalSizeWithPath extends StepShape_DimensionalSize {
    constructor();
  }
  class StepShape_DirectedDimensionalLocation extends StepShape_DimensionalLocation {
    constructor();
  }
  class StepShape_Edge extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_EdgeBasedWireframeModel extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_EdgeBasedWireframeShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_EdgeCurve extends StepShape_Edge {
    constructor();
  }
  class StepShape_EdgeLoop extends StepShape_Loop {
    constructor();
  }
  class StepShape_ExtrudedAreaSolid extends StepShape_SweptAreaSolid {
    constructor();
  }
  class StepShape_ExtrudedFaceSolid extends StepShape_SweptFaceSolid {
    constructor();
  }
  class StepShape_Face extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_FaceBasedSurfaceModel extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_FaceBound extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_FaceOuterBound extends StepShape_FaceBound {
    constructor();
  }
  class StepShape_FaceSurface extends StepShape_Face {
    constructor();
  }
  class StepShape_FacetedBrep extends StepShape_ManifoldSolidBrep {
    constructor();
  }
  class StepShape_FacetedBrepAndBrepWithVoids extends StepShape_ManifoldSolidBrep {
    constructor();
  }
  class StepShape_FacetedBrepShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_GeometricCurveSet extends StepShape_GeometricSet {
    constructor();
  }
  class StepShape_GeometricSet extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_GeometricSetSelect extends StepData_SelectType {
    constructor();
  }
  class StepShape_GeometricallyBoundedSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_GeometricallyBoundedWireframeShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_HalfSpaceSolid extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_LimitsAndFits extends Standard_Transient {
    constructor();
  }
  class StepShape_Loop extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_LoopAndPath extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_ManifoldSolidBrep extends StepShape_SolidModel {
    constructor();
  }
  class StepShape_ManifoldSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_MeasureQualification extends Standard_Transient {
    constructor();
  }
  class StepShape_MeasureRepresentationItemAndQualifiedRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepShape_NonManifoldSurfaceShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_OpenShell extends StepShape_ConnectedFaceSet {
    constructor();
  }
  class StepShape_OrientedClosedShell extends StepShape_ClosedShell {
    constructor();
  }
  class StepShape_OrientedEdge extends StepShape_Edge {
    constructor();
  }
  class StepShape_OrientedFace extends StepShape_Face {
    constructor();
  }
  class StepShape_OrientedOpenShell extends StepShape_OpenShell {
    constructor();
  }
  class StepShape_OrientedPath extends StepShape_Path {
    constructor();
  }
  class StepShape_Path extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_PlusMinusTolerance extends Standard_Transient {
    constructor();
  }
  class StepShape_PointRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_PolyLoop extends StepShape_Loop {
    constructor();
  }
  class StepShape_PrecisionQualifier extends Standard_Transient {
    constructor();
  }
  class StepShape_QualifiedRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepShape_ReversibleTopologyItem extends StepData_SelectType {
    constructor();
  }
  class StepShape_RevolvedAreaSolid extends StepShape_SweptAreaSolid {
    constructor();
  }
  class StepShape_RevolvedFaceSolid extends StepShape_SweptFaceSolid {
    constructor();
  }
  class StepShape_RightAngularWedge extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_RightCircularCone extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_RightCircularCylinder extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_SeamEdge extends StepShape_OrientedEdge {
    constructor();
  }
  class StepShape_ShapeDefinitionRepresentation extends StepRepr_PropertyDefinitionRepresentation {
    constructor();
  }
  class StepShape_ShapeDimensionRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_ShapeDimensionRepresentationItem extends StepData_SelectType {
    constructor();
  }
  class StepShape_ShapeRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepShape_ShapeRepresentationWithParameters extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_Shell extends StepData_SelectType {
    constructor();
  }
  class StepShape_ShellBasedSurfaceModel extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_SolidModel extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_SolidReplica extends StepShape_SolidModel {
    constructor();
  }
  class StepShape_Sphere extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_Subedge extends StepShape_Edge {
    constructor();
  }
  class StepShape_Subface extends StepShape_Face {
    constructor();
  }
  class StepShape_SurfaceModel extends StepData_SelectType {
    constructor();
  }
  class StepShape_SweptAreaSolid extends StepShape_SolidModel {
    constructor();
  }
  class StepShape_SweptFaceSolid extends StepShape_SolidModel {
    constructor();
  }
  class StepShape_ToleranceMethodDefinition extends StepData_SelectType {
    constructor();
  }
  class StepShape_ToleranceValue extends Standard_Transient {
    constructor();
  }
  class StepShape_TopologicalRepresentationItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepShape_Torus extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepShape_TransitionalShapeRepresentation extends StepShape_ShapeRepresentation {
    constructor();
  }
  class StepShape_TypeQualifier extends Standard_Transient {
    constructor();
  }
  class StepShape_ValueFormatTypeQualifier extends Standard_Transient {
    constructor();
  }
  class StepShape_ValueQualifier extends StepData_SelectType {
    constructor();
  }
  class StepShape_Vertex extends StepShape_TopologicalRepresentationItem {
    constructor();
  }
  class StepShape_VertexLoop extends StepShape_Loop {
    constructor();
  }
  class StepShape_VertexPoint extends StepShape_Vertex {
    constructor();
  }
  class StepToGeom {
    constructor();
  }
  class StepToTopoDS {
    constructor();
  }
  class StepToTopoDS_CartesianPointHasher {
    constructor();
  }
  class StepToTopoDS_GeometricTool {
    constructor();
  }
  class StepToTopoDS_MakeTransformed extends StepToTopoDS_Root {
    constructor();
  }
  class StepToTopoDS_NMTool {
  }
  class StepToTopoDS_PointPair {
    constructor();
  }
  class StepToTopoDS_PointPairHasher {
    constructor();
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
    constructor();
  }
  class StepVisual_AnnotationCurveOccurrenceAndAnnotationOccurrenceAndGeomReprItemAndReprItemAndStyledItem extends StepVisual_AnnotationCurveOccurrence {
    constructor();
  }
  class StepVisual_AnnotationFillArea extends StepShape_GeometricCurveSet {
    constructor();
  }
  class StepVisual_AnnotationFillAreaOccurrence extends StepVisual_AnnotationOccurrence {
    constructor();
  }
  class StepVisual_AnnotationOccurrence extends StepVisual_StyledItem {
    constructor();
  }
  class StepVisual_AnnotationPlane extends StepVisual_AnnotationOccurrence {
    constructor();
  }
  class StepVisual_AnnotationPlaneElement extends StepData_SelectType {
    constructor();
  }
  class StepVisual_AnnotationText extends StepRepr_MappedItem {
    constructor();
  }
  class StepVisual_AnnotationTextOccurrence extends StepVisual_AnnotationOccurrence {
    constructor();
  }
  class StepVisual_AreaInSet extends Standard_Transient {
    constructor();
  }
  class StepVisual_AreaOrView extends StepData_SelectType {
    constructor();
  }
  class StepVisual_BackgroundColour extends StepVisual_Colour {
    constructor();
  }
  class StepVisual_BoxCharacteristicSelect {
    constructor();
  }
  class StepVisual_CameraImage extends StepRepr_MappedItem {
    constructor();
  }
  class StepVisual_CameraImage2dWithScale extends StepVisual_CameraImage {
    constructor();
  }
  class StepVisual_CameraImage3dWithScale extends StepVisual_CameraImage {
    constructor();
  }
  class StepVisual_CameraModel extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepVisual_CameraModelD2 extends StepVisual_CameraModel {
    constructor();
  }
  class StepVisual_CameraModelD3 extends StepVisual_CameraModel {
    constructor();
  }
  class StepVisual_CameraModelD3MultiClipping extends StepVisual_CameraModelD3 {
    constructor();
  }
  class StepVisual_CameraModelD3MultiClippingInterectionSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_CameraModelD3MultiClippingIntersection extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepVisual_CameraModelD3MultiClippingUnion extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepVisual_CameraModelD3MultiClippingUnionSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_CameraUsage extends StepRepr_RepresentationMap {
    constructor();
  }
  class StepVisual_CharacterizedObjectAndCharacterizedRepresentationAndDraughtingModelAndRepresentation extends StepVisual_DraughtingModel {
    constructor();
  }
  class StepVisual_Colour extends Standard_Transient {
    constructor();
  }
  class StepVisual_ColourRgb extends StepVisual_ColourSpecification {
    constructor();
  }
  class StepVisual_ColourSpecification extends StepVisual_Colour {
    constructor();
  }
  class StepVisual_CompositeText extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepVisual_CompositeTextWithExtent extends StepVisual_CompositeText {
    constructor();
  }
  class StepVisual_ContextDependentInvisibility extends StepVisual_Invisibility {
    constructor();
  }
  class StepVisual_ContextDependentOverRidingStyledItem extends StepVisual_OverRidingStyledItem {
    constructor();
  }
  class StepVisual_CoordinatesList extends StepVisual_TessellatedItem {
    constructor();
  }
  class StepVisual_CurveStyle extends Standard_Transient {
    constructor();
  }
  class StepVisual_CurveStyleFont extends Standard_Transient {
    constructor();
  }
  class StepVisual_CurveStyleFontPattern extends Standard_Transient {
    constructor();
  }
  class StepVisual_CurveStyleFontSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_DirectionCountSelect {
    constructor();
  }
  class StepVisual_DraughtingAnnotationOccurrence extends StepVisual_AnnotationOccurrence {
    constructor();
  }
  class StepVisual_DraughtingCallout extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepVisual_DraughtingCalloutElement extends StepData_SelectType {
    constructor();
  }
  class StepVisual_DraughtingModel extends StepRepr_Representation {
    constructor();
  }
  class StepVisual_DraughtingPreDefinedColour extends StepVisual_PreDefinedColour {
    constructor();
  }
  class StepVisual_DraughtingPreDefinedCurveFont extends StepVisual_PreDefinedCurveFont {
    constructor();
  }
  class StepVisual_ExternallyDefinedCurveFont extends StepBasic_ExternallyDefinedItem {
    constructor();
  }
  class StepVisual_ExternallyDefinedTextFont extends StepBasic_ExternallyDefinedItem {
    constructor();
  }
  class StepVisual_FillAreaStyle extends Standard_Transient {
    constructor();
  }
  class StepVisual_FillAreaStyleColour extends Standard_Transient {
    constructor();
  }
  class StepVisual_FillStyleSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_FontSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_Invisibility extends Standard_Transient {
    constructor();
  }
  class StepVisual_InvisibilityContext extends StepData_SelectType {
    constructor();
  }
  class StepVisual_InvisibleItem extends StepData_SelectType {
    constructor();
  }
  class StepVisual_LayeredItem extends StepData_SelectType {
    constructor();
  }
  class StepVisual_MarkerMember extends StepData_SelectInt {
    constructor();
  }
  class StepVisual_MarkerSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_MechanicalDesignGeometricPresentationArea extends StepVisual_PresentationArea {
    constructor();
  }
  class StepVisual_MechanicalDesignGeometricPresentationRepresentation extends StepVisual_PresentationRepresentation {
    constructor();
  }
  class StepVisual_NullStyleMember extends StepData_SelectInt {
    constructor();
  }
  class StepVisual_OverRidingStyledItem extends StepVisual_StyledItem {
    constructor();
  }
  class StepVisual_PlanarBox extends StepVisual_PlanarExtent {
    constructor();
  }
  class StepVisual_PlanarExtent extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepVisual_PointStyle extends Standard_Transient {
    constructor();
  }
  class StepVisual_PreDefinedColour extends StepVisual_Colour {
    constructor();
  }
  class StepVisual_PreDefinedCurveFont extends StepVisual_PreDefinedItem {
    constructor();
  }
  class StepVisual_PreDefinedItem extends Standard_Transient {
    constructor();
  }
  class StepVisual_PreDefinedTextFont extends StepVisual_PreDefinedItem {
    constructor();
  }
  class StepVisual_PresentationArea extends StepVisual_PresentationRepresentation {
    constructor();
  }
  class StepVisual_PresentationLayerAssignment extends Standard_Transient {
    constructor();
  }
  class StepVisual_PresentationLayerUsage extends Standard_Transient {
    constructor();
  }
  class StepVisual_PresentationRepresentation extends StepRepr_Representation {
    constructor();
  }
  class StepVisual_PresentationRepresentationSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_PresentationSet extends Standard_Transient {
    constructor();
  }
  class StepVisual_PresentationSize extends Standard_Transient {
    constructor();
  }
  class StepVisual_PresentationSizeAssignmentSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_PresentationStyleAssignment extends Standard_Transient {
    constructor();
  }
  class StepVisual_PresentationStyleByContext extends StepVisual_PresentationStyleAssignment {
    constructor();
  }
  class StepVisual_PresentationStyleSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_PresentationView extends StepVisual_PresentationRepresentation {
    constructor();
  }
  class StepVisual_PresentedItem extends Standard_Transient {
    constructor();
  }
  class StepVisual_PresentedItemRepresentation extends Standard_Transient {
    constructor();
  }
  class StepVisual_StyleContextSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_StyledItem extends StepRepr_RepresentationItem {
    constructor();
  }
  class StepVisual_StyledItemTarget extends StepData_SelectType {
    constructor();
  }
  class StepVisual_SurfaceSideStyle extends Standard_Transient {
    constructor();
  }
  class StepVisual_SurfaceStyleBoundary extends Standard_Transient {
    constructor();
  }
  class StepVisual_SurfaceStyleControlGrid extends Standard_Transient {
    constructor();
  }
  class StepVisual_SurfaceStyleElementSelect extends StepData_SelectType {
    constructor();
  }
  class StepVisual_SurfaceStyleFillArea extends Standard_Transient {
    constructor();
  }
  class StepVisual_SurfaceStyleParameterLine extends Standard_Transient {
    constructor();
  }
  class StepVisual_SurfaceStyleSegmentationCurve extends Standard_Transient {
    constructor();
  }
  class StepVisual_SurfaceStyleSilhouette extends Standard_Transient {
    constructor();
  }
  class StepVisual_SurfaceStyleUsage extends Standard_Transient {
    constructor();
  }
  class StepVisual_Template extends StepRepr_Representation {
    constructor();
  }
  class StepVisual_TemplateInstance extends StepRepr_MappedItem {
    constructor();
  }
  class StepVisual_TessellatedAnnotationOccurrence extends StepVisual_StyledItem {
    constructor();
  }
  class StepVisual_TessellatedCurveSet extends StepVisual_TessellatedItem {
    constructor();
  }
  class StepVisual_TessellatedGeometricSet extends StepVisual_TessellatedItem {
    constructor();
  }
  class StepVisual_TessellatedItem extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepVisual_TextLiteral extends StepGeom_GeometricRepresentationItem {
    constructor();
  }
  class StepVisual_TextOrCharacter extends StepData_SelectType {
    constructor();
  }
  class StepVisual_TextStyle extends Standard_Transient {
    constructor();
  }
  class StepVisual_TextStyleForDefinedFont extends Standard_Transient {
    constructor();
  }
  class StepVisual_TextStyleWithBoxCharacteristics extends StepVisual_TextStyle {
    constructor();
  }
  class StepVisual_ViewVolume extends Standard_Transient {
    constructor();
  }
  class StlAPI {
    constructor();
  }
  class StlAPI_Reader {
    constructor();
  }
  class StlAPI_Writer {
    constructor();
  }
  class Storage {
    constructor();
  }
  class Storage_Bucket {
  }
  class Storage_BucketIterator {
    constructor();
  }
  class Storage_BucketOfPersistent {
    constructor();
  }
  class Storage_CallBack extends Standard_Transient {
  }
  class Storage_Data extends Standard_Transient {
    constructor();
  }
  class Storage_DefaultCallBack extends Storage_CallBack {
    constructor();
  }
  class Storage_HeaderData extends Standard_Transient {
    constructor();
  }
  class Storage_InternalData extends Standard_Transient {
    constructor();
  }
  class Storage_Root extends Standard_Transient {
  }
  class Storage_RootData extends Standard_Transient {
    constructor();
  }
  class Storage_Schema extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class Storage_TypedCallBack extends Standard_Transient {
  }
  class Sweep_NumShape {
  }
  class Sweep_NumShapeIterator {
    constructor();
  }
  class Sweep_NumShapeTool {
    constructor();
  }
  class TColStd_HPackedMapOfInteger extends Standard_Transient {
  }
  class TColStd_PackedMapOfInteger {
  }
  class TCollection {
    constructor();
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
    constructor();
  }
  class TCollection_SeqNode extends Standard_Transient {
    constructor();
  }
  class TDF {
    constructor();
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
    constructor();
  }
  class TDF_ClosureTool {
    constructor();
  }
  class TDF_ComparisonTool {
    constructor();
  }
  class TDF_CopyLabel {
  }
  class TDF_CopyTool {
    constructor();
  }
  class TDF_Data extends Standard_Transient {
    constructor();
  }
  class TDF_DataSet extends Standard_Transient {
    constructor();
  }
  class TDF_DefaultDeltaOnModification extends TDF_DeltaOnModification {
    constructor();
  }
  class TDF_DefaultDeltaOnRemoval extends TDF_DeltaOnRemoval {
    constructor();
  }
  class TDF_Delta extends Standard_Transient {
    constructor();
  }
  class TDF_DeltaOnAddition extends TDF_AttributeDelta {
    constructor();
  }
  class TDF_DeltaOnForget extends TDF_AttributeDelta {
    constructor();
  }
  class TDF_DeltaOnModification extends TDF_AttributeDelta {
  }
  class TDF_DeltaOnRemoval extends TDF_AttributeDelta {
  }
  class TDF_DeltaOnResume extends TDF_AttributeDelta {
    constructor();
  }
  class TDF_IDFilter {
    constructor();
  }
  class TDF_Label {
    constructor();
  }
  class TDF_LabelMapHasher {
    constructor();
  }
  class TDF_Reference extends TDF_Attribute {
    constructor();
  }
  class TDF_RelocationTable extends Standard_Transient {
    constructor();
  }
  class TDF_TagSource extends TDF_Attribute {
    constructor();
  }
  class TDF_Tool {
    constructor();
  }
  class TDF_Transaction {
  }
  class TDataStd {
    constructor();
  }
  class TDataStd_AsciiString extends TDF_Attribute {
    constructor();
  }
  class TDataStd_BooleanArray extends TDF_Attribute {
    constructor();
  }
  class TDataStd_BooleanList extends TDF_Attribute {
    constructor();
  }
  class TDataStd_ByteArray extends TDF_Attribute {
    constructor();
  }
  class TDataStd_ChildNodeIterator {
  }
  class TDataStd_Comment extends TDF_Attribute {
    constructor();
  }
  class TDataStd_Current extends TDF_Attribute {
    constructor();
  }
  class TDataStd_DeltaOnModificationOfByteArray extends TDF_DeltaOnModification {
    constructor();
  }
  class TDataStd_DeltaOnModificationOfExtStringArray extends TDF_DeltaOnModification {
    constructor();
  }
  class TDataStd_DeltaOnModificationOfIntArray extends TDF_DeltaOnModification {
    constructor();
  }
  class TDataStd_DeltaOnModificationOfIntPackedMap extends TDF_DeltaOnModification {
    constructor();
  }
  class TDataStd_DeltaOnModificationOfRealArray extends TDF_DeltaOnModification {
    constructor();
  }
  class TDataStd_Directory extends TDF_Attribute {
    constructor();
  }
  class TDataStd_Expression extends TDF_Attribute {
    constructor();
  }
  class TDataStd_ExtStringArray extends TDF_Attribute {
    constructor();
  }
  class TDataStd_ExtStringList extends TDF_Attribute {
    constructor();
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
    constructor();
  }
  class TDataStd_Integer extends TDF_Attribute {
    constructor();
  }
  class TDataStd_IntegerArray extends TDF_Attribute {
    constructor();
  }
  class TDataStd_IntegerList extends TDF_Attribute {
    constructor();
  }
  class TDataStd_Name extends TDF_Attribute {
    constructor();
  }
  class TDataStd_NamedData extends TDF_Attribute {
    constructor();
  }
  class TDataStd_NoteBook extends TDF_Attribute {
    constructor();
  }
  class TDataStd_Real extends TDF_Attribute {
    constructor();
  }
  class TDataStd_RealArray extends TDF_Attribute {
    constructor();
  }
  class TDataStd_RealList extends TDF_Attribute {
    constructor();
  }
  class TDataStd_ReferenceArray extends TDF_Attribute {
    constructor();
  }
  class TDataStd_ReferenceList extends TDF_Attribute {
    constructor();
  }
  class TDataStd_Relation extends TDF_Attribute {
    constructor();
  }
  class TDataStd_Tick extends TDF_Attribute {
    constructor();
  }
  class TDataStd_TreeNode extends TDF_Attribute {
    constructor();
  }
  class TDataStd_UAttribute extends TDF_Attribute {
    constructor();
  }
  class TDataStd_Variable extends TDF_Attribute {
    constructor();
  }
  class TDataXtd {
    constructor();
  }
  class TDataXtd_Axis extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Constraint extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Geometry extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Pattern extends TDF_Attribute {
  }
  class TDataXtd_PatternStd extends TDataXtd_Pattern {
    constructor();
  }
  class TDataXtd_Placement extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Plane extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Point extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Position extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Presentation extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Shape extends TDF_Attribute {
    constructor();
  }
  class TDataXtd_Triangulation extends TDF_Attribute {
    constructor();
  }
  class TDocStd {
    constructor();
  }
  class TDocStd_Application extends CDF_Application {
    constructor();
  }
  class TDocStd_ApplicationDelta extends Standard_Transient {
    constructor();
  }
  class TDocStd_CompoundDelta extends TDF_Delta {
    constructor();
  }
  class TDocStd_Context {
    constructor();
  }
  class TDocStd_Document extends CDM_Document {
    constructor();
  }
  class TDocStd_Modified extends TDF_Attribute {
    constructor();
  }
  class TDocStd_MultiTransactionManager extends Standard_Transient {
    constructor();
  }
  class TDocStd_Owner extends TDF_Attribute {
    constructor();
  }
  class TDocStd_PathParser {
    constructor();
  }
  class TDocStd_XLink extends TDF_Attribute {
    constructor();
  }
  class TDocStd_XLinkIterator {
  }
  class TDocStd_XLinkRoot extends TDF_Attribute {
  }
  class TDocStd_XLinkTool {
    constructor();
  }
  class TFunction_Driver extends Standard_Transient {
  }
  class TFunction_DriverTable extends Standard_Transient {
    constructor();
  }
  class TFunction_Function extends TDF_Attribute {
    constructor();
  }
  class TFunction_GraphNode extends TDF_Attribute {
    constructor();
  }
  class TFunction_IFunction {
  }
  class TFunction_Iterator {
  }
  class TFunction_Logbook extends TDF_Attribute {
    constructor();
  }
  class TFunction_Scope extends TDF_Attribute {
    constructor();
  }
  class TNaming {
    constructor();
  }
  class TNaming_Builder {
    constructor();
  }
  class TNaming_CopyShape {
    constructor();
  }
  class TNaming_DeltaOnModification extends TDF_DeltaOnModification {
    constructor();
  }
  class TNaming_DeltaOnRemoval extends TDF_DeltaOnRemoval {
    constructor();
  }
  class TNaming_Identifier {
  }
  class TNaming_Iterator {
  }
  class TNaming_IteratorOnShapesSet {
  }
  class TNaming_Localizer {
    constructor();
  }
  class TNaming_Name {
    constructor();
  }
  class TNaming_NamedShape extends TDF_Attribute {
    constructor();
  }
  class TNaming_Naming extends TDF_Attribute {
    constructor();
  }
  class TNaming_NamingTool {
    constructor();
  }
  class TNaming_NewShapeIterator {
  }
  class TNaming_OldShapeIterator {
  }
  class TNaming_RefShape {
  }
  class TNaming_SameShapeIterator {
    constructor();
  }
  class TNaming_Scope {
  }
  class TNaming_Selector {
    constructor();
  }
  class TNaming_ShapesSet {
  }
  class TNaming_Tool {
    constructor();
  }
  class TNaming_TranslateTool extends Standard_Transient {
    constructor();
  }
  class TNaming_Translator {
    constructor();
  }
  class TNaming_UsedShapes extends TDF_Attribute {
  }
  class TObj_Application extends TDocStd_Application {
  }
  class TObj_Assistant {
    constructor();
  }
  class TObj_CheckModel extends Message_Algorithm {
    constructor();
  }
  class TObj_HiddenPartition extends TObj_Partition {
    constructor();
  }
  class TObj_LabelIterator extends TObj_ObjectIterator {
  }
  class TObj_Model extends Standard_Transient {
  }
  class TObj_ModelIterator extends TObj_ObjectIterator {
    constructor();
  }
  class TObj_Object extends Standard_Transient {
  }
  class TObj_ObjectIterator extends Standard_Transient {
    constructor();
  }
  class TObj_OcafObjectIterator extends TObj_LabelIterator {
    constructor();
  }
  class TObj_Partition extends TObj_Object {
  }
  class TObj_Persistence {
  }
  class TObj_ReferenceIterator extends TObj_LabelIterator {
    constructor();
  }
  class TObj_SequenceIterator extends TObj_ObjectIterator {
    constructor();
  }
  class TObj_TIntSparseArray extends TDF_Attribute {
    constructor();
  }
  class TObj_TModel extends TDF_Attribute {
    constructor();
  }
  class TObj_TNameContainer extends TDF_Attribute {
    constructor();
  }
  class TObj_TObject extends TDF_Attribute {
    constructor();
  }
  class TObj_TReference extends TDF_Attribute {
    constructor();
  }
  class TObj_TXYZ extends TDF_Attribute {
    constructor();
  }
  class TopAbs {
    constructor();
  }
  class TopBas_TestInterference {
  }
  class TopCnx_EdgeFaceTransition {
    constructor();
  }
  class TopExp {
    constructor();
  }
  class TopExp_Explorer {
  }
  class TopLoc_Datum3D extends Standard_Transient {
  }
  class TopLoc_ItemLocation {
    constructor();
  }
  class TopLoc_Location {
  }
  class TopLoc_SListNodeOfItemLocation extends Standard_Transient {
    constructor();
  }
  class TopLoc_SListOfItemLocation {
  }
  class TopOpeBRep {
    constructor();
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
    constructor();
  }
  class TopOpeBRepBuild_GTopo {
  }
  class TopOpeBRepBuild_HBuilder extends Standard_Transient {
    constructor();
  }
  class TopOpeBRepBuild_Loop extends Standard_Transient {
  }
  class TopOpeBRepBuild_LoopClassifier {
  }
  class TopOpeBRepBuild_LoopSet {
    constructor();
  }
  class TopOpeBRepBuild_Pave extends TopOpeBRepBuild_Loop {
    constructor();
  }
  class TopOpeBRepBuild_PaveClassifier extends TopOpeBRepBuild_LoopClassifier {
    constructor();
  }
  class TopOpeBRepBuild_PaveSet extends TopOpeBRepBuild_LoopSet {
    constructor();
  }
  class TopOpeBRepBuild_ShapeListOfShape {
  }
  class TopOpeBRepBuild_ShapeSet {
    constructor();
  }
  class TopOpeBRepBuild_ShellFaceClassifier extends TopOpeBRepBuild_CompositeClassifier {
    constructor();
  }
  class TopOpeBRepBuild_ShellFaceSet extends TopOpeBRepBuild_ShapeSet {
  }
  class TopOpeBRepBuild_ShellToSolid {
    constructor();
  }
  class TopOpeBRepBuild_SolidAreaBuilder extends TopOpeBRepBuild_Area3dBuilder {
  }
  class TopOpeBRepBuild_SolidBuilder {
  }
  class TopOpeBRepBuild_Tools {
    constructor();
  }
  class TopOpeBRepBuild_Tools2d {
    constructor();
  }
  class TopOpeBRepBuild_VertexInfo {
    constructor();
  }
  class TopOpeBRepBuild_WireEdgeClassifier extends TopOpeBRepBuild_CompositeClassifier {
    constructor();
  }
  class TopOpeBRepBuild_WireEdgeSet extends TopOpeBRepBuild_ShapeSet {
    constructor();
  }
  class TopOpeBRepBuild_WireToFace {
    constructor();
  }
  class TopOpeBRepDS {
    constructor();
  }
  class TopOpeBRepDS_Association extends Standard_Transient {
    constructor();
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
    constructor();
  }
  class TopOpeBRepDS_CurvePointInterference extends TopOpeBRepDS_Interference {
    constructor();
  }
  class TopOpeBRepDS_DataStructure {
    constructor();
  }
  class TopOpeBRepDS_Dumper {
    constructor();
  }
  class TopOpeBRepDS_EIR {
    constructor();
  }
  class TopOpeBRepDS_Edge3dInterferenceTool {
    constructor();
  }
  class TopOpeBRepDS_EdgeInterferenceTool {
    constructor();
  }
  class TopOpeBRepDS_EdgeVertexInterference extends TopOpeBRepDS_ShapeShapeInterference {
  }
  class TopOpeBRepDS_Explorer {
  }
  class TopOpeBRepDS_FIR {
    constructor();
  }
  class TopOpeBRepDS_FaceEdgeInterference extends TopOpeBRepDS_ShapeShapeInterference {
    constructor();
  }
  class TopOpeBRepDS_FaceInterferenceTool {
    constructor();
  }
  class TopOpeBRepDS_Filter {
    constructor();
  }
  class TopOpeBRepDS_GapFiller {
    constructor();
  }
  class TopOpeBRepDS_GapTool extends Standard_Transient {
  }
  class TopOpeBRepDS_GeometryData {
  }
  class TopOpeBRepDS_HDataStructure extends Standard_Transient {
    constructor();
  }
  class TopOpeBRepDS_Interference extends Standard_Transient {
  }
  class TopOpeBRepDS_InterferenceIterator {
  }
  class TopOpeBRepDS_InterferenceTool {
    constructor();
  }
  class TopOpeBRepDS_ListOfShapeOn1State {
    constructor();
  }
  class TopOpeBRepDS_Marker extends Standard_Transient {
    constructor();
  }
  class TopOpeBRepDS_Point {
  }
  class TopOpeBRepDS_PointData extends TopOpeBRepDS_GeometryData {
  }
  class TopOpeBRepDS_PointExplorer {
  }
  class TopOpeBRepDS_PointIterator extends TopOpeBRepDS_InterferenceIterator {
    constructor();
  }
  class TopOpeBRepDS_Reducer {
    constructor();
  }
  class TopOpeBRepDS_ShapeData {
    constructor();
  }
  class TopOpeBRepDS_ShapeShapeInterference extends TopOpeBRepDS_Interference {
    constructor();
  }
  class TopOpeBRepDS_ShapeWithState {
    constructor();
  }
  class TopOpeBRepDS_SolidSurfaceInterference extends TopOpeBRepDS_Interference {
    constructor();
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
    constructor();
  }
  class TopOpeBRepDS_TKI {
    constructor();
  }
  class TopOpeBRepDS_TOOL {
    constructor();
  }
  class TopOpeBRepDS_Transition {
  }
  class TopOpeBRepTool {
    constructor();
  }
  class TopOpeBRepTool_AncestorsTool {
    constructor();
  }
  class TopOpeBRepTool_BoxSort {
  }
  class TopOpeBRepTool_C2DF {
  }
  class TopOpeBRepTool_CLASSI {
    constructor();
  }
  class TopOpeBRepTool_CORRISO {
  }
  class TopOpeBRepTool_CurveTool {
  }
  class TopOpeBRepTool_FuseEdges {
    constructor();
  }
  class TopOpeBRepTool_GeomTool {
    constructor();
  }
  class TopOpeBRepTool_HBoxTool extends Standard_Transient {
    constructor();
  }
  class TopOpeBRepTool_PurgeInternalEdges {
    constructor();
  }
  class TopOpeBRepTool_REGUS {
    constructor();
  }
  class TopOpeBRepTool_REGUW {
    constructor();
  }
  class TopOpeBRepTool_ShapeClassifier {
  }
  class TopOpeBRepTool_ShapeExplorer extends TopExp_Explorer {
  }
  class TopOpeBRepTool_ShapeTool {
    constructor();
  }
  class TopOpeBRepTool_SolidClassifier {
    constructor();
  }
  class TopOpeBRepTool_TOOL {
    constructor();
  }
  class TopOpeBRepTool_connexity {
  }
  class TopOpeBRepTool_face {
    constructor();
  }
  class TopOpeBRepTool_makeTransition {
    constructor();
  }
  class TopOpeBRepTool_mkTondgE {
    constructor();
  }
  class TopOpeBRep_Bipoint {
  }
  class TopOpeBRep_DSFiller {
    constructor();
  }
  class TopOpeBRep_EdgesFiller {
    constructor();
  }
  class TopOpeBRep_EdgesIntersector {
    constructor();
  }
  class TopOpeBRep_FFDumper extends Standard_Transient {
    constructor();
  }
  class TopOpeBRep_FFTransitionTool {
    constructor();
  }
  class TopOpeBRep_FaceEdgeFiller {
    constructor();
  }
  class TopOpeBRep_FaceEdgeIntersector {
    constructor();
  }
  class TopOpeBRep_FacesFiller {
    constructor();
  }
  class TopOpeBRep_FacesIntersector {
    constructor();
  }
  class TopOpeBRep_GeomTool {
    constructor();
  }
  class TopOpeBRep_Hctxee2d extends Standard_Transient {
    constructor();
  }
  class TopOpeBRep_Hctxff2d extends Standard_Transient {
    constructor();
  }
  class TopOpeBRep_LineInter {
    constructor();
  }
  class TopOpeBRep_Point2d {
    constructor();
  }
  class TopOpeBRep_PointClassifier {
    constructor();
  }
  class TopOpeBRep_PointGeomTool {
    constructor();
  }
  class TopOpeBRep_ShapeIntersector {
    constructor();
  }
  class TopOpeBRep_ShapeIntersector2d {
    constructor();
  }
  class TopOpeBRep_ShapeScanner {
    constructor();
  }
  class TopOpeBRep_VPointInter {
    constructor();
  }
  class TopOpeBRep_VPointInterClassifier {
    constructor();
  }
  class TopOpeBRep_VPointInterIterator {
  }
  class TopOpeBRep_WPointInter {
    constructor();
  }
  class TopOpeBRep_WPointInterIterator {
  }
  class TopTools {
    constructor();
  }
  class TopTools_LocationSet {
    constructor();
  }
  class TopTools_MutexForShapeProvider {
    constructor();
  }
  class TopTools_OrientedShapeMapHasher {
    constructor();
  }
  class TopTools_ShapeMapHasher {
    constructor();
  }
  class TopTools_ShapeSet {
    constructor();
  }
  class TopTrans_CurveTransition {
    constructor();
  }
  class TopTrans_SurfaceTransition {
    constructor();
  }
  class TopoDS {
    constructor();
  }
  class TopoDSToStep {
    constructor();
  }
  class TopoDSToStep_Builder extends TopoDSToStep_Root {
  }
  class TopoDSToStep_FacetedTool {
    constructor();
  }
  class TopoDSToStep_MakeBrepWithVoids extends TopoDSToStep_Root {
    constructor();
  }
  class TopoDSToStep_MakeFacetedBrep extends TopoDSToStep_Root {
  }
  class TopoDSToStep_MakeFacetedBrepAndBrepWithVoids extends TopoDSToStep_Root {
    constructor();
  }
  class TopoDSToStep_MakeGeometricCurveSet extends TopoDSToStep_Root {
    constructor();
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
    constructor();
  }
  class TopoDS_Builder {
    constructor();
  }
  class TopoDS_CompSolid extends TopoDS_Shape {
    constructor();
  }
  class TopoDS_Compound extends TopoDS_Shape {
    constructor();
  }
  class TopoDS_Edge extends TopoDS_Shape {
    constructor();
  }
  class TopoDS_Face extends TopoDS_Shape {
    constructor();
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
    constructor();
  }
  class TopoDS_Shell extends TopoDS_Shape {
    constructor();
  }
  class TopoDS_Solid extends TopoDS_Shape {
    constructor();
  }
  class TopoDS_TCompSolid extends TopoDS_TShape {
    constructor();
  }
  class TopoDS_TCompound extends TopoDS_TShape {
    constructor();
  }
  class TopoDS_TEdge extends TopoDS_TShape {
  }
  class TopoDS_TFace extends TopoDS_TShape {
    constructor();
  }
  class TopoDS_TShape extends Standard_Transient {
  }
  class TopoDS_TShell extends TopoDS_TShape {
    constructor();
  }
  class TopoDS_TSolid extends TopoDS_TShape {
    constructor();
  }
  class TopoDS_TVertex extends TopoDS_TShape {
  }
  class TopoDS_TWire extends TopoDS_TShape {
    constructor();
  }
  class TopoDS_UnCompatibleShapes extends Standard_DomainError {
  }
  class TopoDS_Vertex extends TopoDS_Shape {
    constructor();
  }
  class TopoDS_Wire extends TopoDS_Shape {
    constructor();
  }
  class TransferBRep_BinderOfShape extends Transfer_Binder {
  }
  class TransferBRep_OrientedShapeMapper extends Transfer_Finder {
    constructor();
  }
  class TransferBRep_Reader {
    constructor();
  }
  class TransferBRep_ShapeBinder extends TransferBRep_BinderOfShape {
  }
  class TransferBRep_ShapeInfo {
    constructor();
  }
  class TransferBRep_ShapeListBinder extends Transfer_Binder {
  }
  class TransferBRep_ShapeMapper extends Transfer_Finder {
    constructor();
  }
  class TransferBRep_TransferResultInfo extends Standard_Transient {
    constructor();
  }
  class Transfer_ActorDispatch extends Transfer_ActorOfTransientProcess {
  }
  class Transfer_ActorOfFinderProcess extends Transfer_ActorOfProcessForFinder {
    constructor();
  }
  class Transfer_ActorOfProcessForFinder extends Standard_Transient {
    constructor();
  }
  class Transfer_ActorOfProcessForTransient extends Standard_Transient {
    constructor();
  }
  class Transfer_ActorOfTransientProcess extends Transfer_ActorOfProcessForTransient {
    constructor();
  }
  class Transfer_Binder extends Standard_Transient {
  }
  class Transfer_BinderOfTransientInteger extends Transfer_SimpleBinderOfTransient {
    constructor();
  }
  class Transfer_DataInfo {
    constructor();
  }
  class Transfer_DispatchControl extends Interface_CopyControl {
    constructor();
  }
  class Transfer_FindHasher {
    constructor();
  }
  class Transfer_Finder extends Standard_Transient {
  }
  class Transfer_FinderProcess extends Transfer_ProcessForFinder {
    constructor();
  }
  class Transfer_IteratorOfProcessForFinder extends Transfer_TransferIterator {
    constructor();
  }
  class Transfer_IteratorOfProcessForTransient extends Transfer_TransferIterator {
    constructor();
  }
  class Transfer_MapContainer extends Standard_Transient {
    constructor();
  }
  class Transfer_MultipleBinder extends Transfer_Binder {
    constructor();
  }
  class Transfer_ProcessForFinder extends Standard_Transient {
  }
  class Transfer_ProcessForTransient extends Standard_Transient {
  }
  class Transfer_ResultFromModel extends Standard_Transient {
    constructor();
  }
  class Transfer_ResultFromTransient extends Standard_Transient {
    constructor();
  }
  class Transfer_SimpleBinderOfTransient extends Transfer_Binder {
    constructor();
  }
  class Transfer_TransferDeadLoop extends Transfer_TransferFailure {
  }
  class Transfer_TransferDispatch extends Interface_CopyTool {
  }
  class Transfer_TransferFailure extends Interface_InterfaceError {
  }
  class Transfer_TransferInput {
    constructor();
  }
  class Transfer_TransferIterator {
    constructor();
  }
  class Transfer_TransferOutput {
  }
  class Transfer_TransientListBinder extends Transfer_Binder {
  }
  class Transfer_TransientMapper extends Transfer_Finder {
    constructor();
  }
  class Transfer_TransientProcess extends Transfer_ProcessForTransient {
    constructor();
  }
  class Transfer_VoidBinder extends Transfer_Binder {
    constructor();
  }
  class Units {
    constructor();
  }
  class UnitsAPI {
    constructor();
  }
  class UnitsMethods {
    constructor();
  }
  class Units_Dimensions extends Standard_Transient {
    constructor();
  }
  class Units_Explorer {
  }
  class Units_Lexicon extends Standard_Transient {
    constructor();
  }
  class Units_MathSentence extends Units_Sentence {
    constructor();
  }
  class Units_Measurement {
  }
  class Units_NoSuchType extends Standard_NoSuchObject {
  }
  class Units_NoSuchUnit extends Standard_NoSuchObject {
  }
  class Units_Quantity extends Standard_Transient {
    constructor();
  }
  class Units_Sentence {
    constructor();
  }
  class Units_ShiftedToken extends Units_Token {
    constructor();
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
    constructor();
  }
  class Units_UnitsLexicon extends Units_Lexicon {
    constructor();
  }
  class Units_UnitsSystem extends Standard_Transient {
  }
  class V3d {
    constructor();
  }
  class V3d_AmbientLight extends Graphic3d_CLight {
  }
  class V3d_BadValue extends Standard_OutOfRange {
  }
  class V3d_CircularGrid extends Aspect_CircularGrid {
    constructor();
  }
  class V3d_DirectionalLight extends V3d_PositionLight {
  }
  class V3d_Plane extends Standard_Transient {
    constructor();
  }
  class V3d_PositionLight extends Graphic3d_CLight {
  }
  class V3d_PositionalLight extends V3d_PositionLight {
  }
  class V3d_RectangularGrid extends Aspect_RectangularGrid {
    constructor();
  }
  class V3d_SpotLight extends V3d_PositionLight {
  }
  class V3d_Trihedron extends Standard_Transient {
    constructor();
  }
  class V3d_UnMapped extends Standard_DomainError {
  }
  class V3d_View extends Standard_Transient {
  }
  class V3d_Viewer extends Standard_Transient {
  }
  class Vrml {
    constructor();
  }
  class VrmlAPI {
    constructor();
  }
  class VrmlAPI_Writer {
    constructor();
  }
  class VrmlConverter_Curve {
    constructor();
  }
  class VrmlConverter_DeflectionCurve {
    constructor();
  }
  class VrmlConverter_Drawer extends Standard_Transient {
    constructor();
  }
  class VrmlConverter_HLRShape {
    constructor();
  }
  class VrmlConverter_IsoAspect extends VrmlConverter_LineAspect {
  }
  class VrmlConverter_LineAspect extends Standard_Transient {
  }
  class VrmlConverter_PointAspect extends Standard_Transient {
  }
  class VrmlConverter_Projector extends Standard_Transient {
    constructor();
  }
  class VrmlConverter_ShadedShape {
    constructor();
  }
  class VrmlConverter_ShadingAspect extends Standard_Transient {
    constructor();
  }
  class VrmlConverter_WFDeflectionRestrictedFace {
    constructor();
  }
  class VrmlConverter_WFDeflectionShape {
    constructor();
  }
  class VrmlConverter_WFRestrictedFace {
    constructor();
  }
  class VrmlConverter_WFShape {
    constructor();
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
    constructor();
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
    constructor();
  }
  class Vrml_Coordinate3 extends Standard_Transient {
  }
  class Vrml_Cube {
    constructor();
  }
  class Vrml_Cylinder {
    constructor();
  }
  class Vrml_DirectionalLight {
  }
  class Vrml_FontStyle {
    constructor();
  }
  class Vrml_Group {
    constructor();
  }
  class Vrml_IndexedFaceSet extends Standard_Transient {
  }
  class Vrml_IndexedLineSet extends Standard_Transient {
  }
  class Vrml_Info {
    constructor();
  }
  class Vrml_Instancing {
    constructor();
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
    constructor();
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
    constructor();
  }
  class Vrml_Sphere {
    constructor();
  }
  class Vrml_SpotLight {
  }
  class Vrml_Switch {
    constructor();
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
    constructor();
  }
  class Vrml_Translation {
  }
  class Vrml_WWWAnchor {
    constructor();
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
    constructor();
  }
  class XCAFDoc {
    constructor();
  }
  class XCAFDoc_Area extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_AssemblyItemId {
  }
  class XCAFDoc_AssemblyItemRef extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Centroid extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_ClippingPlaneTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Color extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_ColorTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Datum extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_DimTol extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_DimTolTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Dimension extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_DocumentTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Editor {
    constructor();
  }
  class XCAFDoc_GraphNode extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_LayerTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Location extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Material extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_MaterialTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Note extends TDF_Attribute {
  }
  class XCAFDoc_NoteBalloon extends XCAFDoc_NoteComment {
    constructor();
  }
  class XCAFDoc_NoteBinData extends XCAFDoc_Note {
    constructor();
  }
  class XCAFDoc_NoteComment extends XCAFDoc_Note {
    constructor();
  }
  class XCAFDoc_NotesTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_ShapeMapTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_ShapeTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_View extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_ViewTool extends TDF_Attribute {
    constructor();
  }
  class XCAFDoc_Volume extends TDF_Attribute {
    constructor();
  }
  class XCAFNoteObjects_NoteObject extends Standard_Transient {
  }
  class XCAFPrs {
    constructor();
  }
  class XCAFPrs_AISObject extends AIS_ColoredShape {
    constructor();
  }
  class XCAFPrs_DocumentExplorer {
  }
  class XCAFPrs_DocumentIdIterator {
    constructor();
  }
  class XCAFPrs_Driver extends TPrsStd_Driver {
    constructor();
  }
  class XCAFPrs_Style {
    constructor();
  }
  class XCAFView_Object extends Standard_Transient {
  }
  class XSAlgo {
    constructor();
  }
  class XSAlgo_AlgoContainer extends Standard_Transient {
    constructor();
  }
  class XSAlgo_ToolContainer extends Standard_Transient {
    constructor();
  }
  class XSControl {
    constructor();
  }
  class XSControl_ConnectedShapes extends IFSelect_SelectExplore {
  }
  class XSControl_Controller extends Standard_Transient {
  }
  class XSControl_FuncShape {
    constructor();
  }
  class XSControl_Functions {
    constructor();
  }
  class XSControl_Reader {
  }
  class XSControl_SelectForTransfer extends IFSelect_SelectExtract {
  }
  class XSControl_SignTransferStatus extends IFSelect_Signature {
  }
  class XSControl_TransferReader extends Standard_Transient {
    constructor();
  }
  class XSControl_TransferWriter extends Standard_Transient {
    constructor();
  }
  class XSControl_Utils {
    constructor();
  }
  class XSControl_Vars extends Standard_Transient {
    constructor();
  }
  class XSControl_WorkSession extends IFSelect_WorkSession {
    constructor();
  }
  class XSControl_Writer {
  }
  class XmlDrivers {
    constructor();
  }
  class XmlDrivers_DocumentRetrievalDriver extends XmlLDrivers_DocumentRetrievalDriver {
    constructor();
  }
  class XmlDrivers_DocumentStorageDriver extends XmlLDrivers_DocumentStorageDriver {
    constructor();
  }
  class XmlLDrivers {
    constructor();
  }
  class XmlLDrivers_DocumentRetrievalDriver extends PCDM_RetrievalDriver {
    constructor();
  }
  class XmlLDrivers_DocumentStorageDriver extends PCDM_StorageDriver {
    constructor();
  }
  class XmlLDrivers_NamespaceDef {
  }
  class XmlMDF {
    constructor();
  }
  class XmlMDF_ADriver extends Standard_Transient {
  }
  class XmlMDF_ADriverTable extends Standard_Transient {
    constructor();
  }
  class XmlMDF_ReferenceDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDF_TagSourceDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd {
    constructor();
  }
  class XmlMDataStd_AsciiStringDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_BooleanArrayDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_BooleanListDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_ByteArrayDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_CommentDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_DirectoryDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_ExpressionDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_ExtStringArrayDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_ExtStringListDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_IntPackedMapDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_IntegerArrayDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_IntegerDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_IntegerListDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_NameDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_NamedDataDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_NoteBookDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_RealArrayDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_RealDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_RealListDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_ReferenceArrayDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_ReferenceListDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_RelationDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_TickDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_TreeNodeDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_UAttributeDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataStd_VariableDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd {
    constructor();
  }
  class XmlMDataXtd_AxisDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_ConstraintDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_GeometryDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_PatternStdDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_PlacementDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_PlaneDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_PointDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_PositionDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_PresentationDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_ShapeDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDataXtd_TriangulationDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMDocStd {
    constructor();
  }
  class XmlMDocStd_XLinkDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMFunction {
    constructor();
  }
  class XmlMFunction_FunctionDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMFunction_GraphNodeDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMFunction_ScopeDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMNaming {
    constructor();
  }
  class XmlMNaming_NamedShapeDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMNaming_NamingDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMNaming_Shape1 {
  }
  class XmlMXCAFDoc {
    constructor();
  }
  class XmlMXCAFDoc_AreaDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_AssemblyItemRefDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_CentroidDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_ClippingPlaneToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_ColorDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_ColorToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_DatumDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_DimTolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_DimTolToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_DocumentToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_GraphNodeDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_LayerToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_LocationDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_MaterialDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_MaterialToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_NoteBalloonDriver extends XmlMXCAFDoc_NoteCommentDriver {
    constructor();
  }
  class XmlMXCAFDoc_NoteBinDataDriver extends XmlMXCAFDoc_NoteDriver {
    constructor();
  }
  class XmlMXCAFDoc_NoteCommentDriver extends XmlMXCAFDoc_NoteDriver {
    constructor();
  }
  class XmlMXCAFDoc_NoteDriver extends XmlMDF_ADriver {
  }
  class XmlMXCAFDoc_NotesToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_ShapeToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_ViewToolDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlMXCAFDoc_VolumeDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlObjMgt {
    constructor();
  }
  class XmlObjMgt_Array1 {
  }
  class XmlObjMgt_GP {
    constructor();
  }
  class XmlObjMgt_Persistent {
  }
  class XmlObjMgt_RRelocationTable extends TColStd_DataMapOfIntegerTransient {
    constructor();
  }
  class XmlObjMgt_SRelocationTable extends TColStd_IndexedMapOfTransient {
    constructor();
  }
  class XmlTObjDrivers {
    constructor();
  }
  class XmlTObjDrivers_DocumentRetrievalDriver extends XmlLDrivers_DocumentRetrievalDriver {
    constructor();
  }
  class XmlTObjDrivers_DocumentStorageDriver extends XmlLDrivers_DocumentStorageDriver {
    constructor();
  }
  class XmlTObjDrivers_IntSparseArrayDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlTObjDrivers_ModelDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlTObjDrivers_ObjectDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlTObjDrivers_ReferenceDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlTObjDrivers_XYZDriver extends XmlMDF_ADriver {
    constructor();
  }
  class XmlXCAFDrivers {
    constructor();
  }
  class XmlXCAFDrivers_DocumentRetrievalDriver extends XmlDrivers_DocumentRetrievalDriver {
    constructor();
  }
  class XmlXCAFDrivers_DocumentStorageDriver extends XmlDrivers_DocumentStorageDriver {
    constructor();
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
    constructor();
  }
  class gce_MakeScale {
    constructor();
  }
  class gce_MakeScale2d {
    constructor();
  }
  class gce_MakeTranslation {
  }
  class gce_MakeTranslation2d {
  }
  class gce_Root {
    constructor();
  }
  class gp {
    constructor();
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
    constructor();
  }
  class math_BFGS {
    constructor();
  }
  class math_BissecNewton {
    constructor();
  }
  class math_BracketMinimum {
  }
  class math_BracketedRoot {
    constructor();
  }
  class math_BrentMinimum {
  }
  class math_BullardGenerator {
    constructor();
  }
  class math_ComputeGaussPointsAndWeights {
    constructor();
  }
  class math_ComputeKronrodPointsAndWeights {
    constructor();
  }
  class math_Crout {
    constructor();
  }
  class math_DirectPolynomialRoots {
  }
  class math_DoubleTab {
  }
  class math_EigenValuesSearcher {
    constructor();
  }
  class math_FRPR {
    constructor();
  }
  class math_Function {
  }
  class math_FunctionAllRoots {
    constructor();
  }
  class math_FunctionRoot {
  }
  class math_FunctionRoots {
    constructor();
  }
  class math_FunctionSample {
    constructor();
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
    constructor();
  }
  class math_GaussLeastSquare {
    constructor();
  }
  class math_GaussMultipleIntegration {
    constructor();
  }
  class math_GaussSetIntegration {
    constructor();
  }
  class math_GaussSingleIntegration {
  }
  class math_GlobOptMin {
    constructor();
  }
  class math_Jacobi {
    constructor();
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
    constructor();
  }
  class math_PSOParticlesPool {
    constructor();
  }
  class math_Powell {
    constructor();
  }
  class math_SVD {
    constructor();
  }
  class math_SingularMatrix extends Standard_Failure {
  }
  class math_TrigonometricEquationFunction extends math_FunctionWithDerivative {
    constructor();
  }
  class math_TrigonometricFunctionRoots {
  }
  class math_Uzawa {
  }
  class math_ValueAndWeight {
  }
}
