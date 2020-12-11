declare const libName = "./modules/TKGeomBase.wasm.d.ts";
export default libName;

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = string;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

export declare class AdvApp2Var_Context {
  TotalDimension(): Graphic3d_ZLayerId;
  TotalNumberSSP(): Graphic3d_ArrayFlags;
  FavorIso(): MeshVS_BuilderPriority;
  UOrder(): MeshVS_DisplayModeFlags;
  VOrder(): XCAFPrs_DocumentExplorerFlags;
  ULimit(): Standard_Integer;
  VLimit(): Standard_Integer;
  UJacDeg(): Standard_Integer;
  VJacDeg(): Standard_Integer;
  UJacMax(): any;
  VJacMax(): any;
  URoots(): any;
  VRoots(): any;
  UGauss(): any;
  VGauss(): any;
  IToler(): any;
  FToler(): any;
  CToler(): any;
}

  export declare class AdvApp2Var_Context_1 extends AdvApp2Var_Context {
    constructor();
  }

  export declare class AdvApp2Var_Context_2 extends AdvApp2Var_Context {
    constructor(ifav: Standard_Integer, iu: Standard_Integer, iv: Standard_Integer, nlimu: Standard_Integer, nlimv: Standard_Integer, iprecis: Standard_Integer, nb1Dss: Standard_Integer, nb2Dss: Standard_Integer, nb3Dss: Standard_Integer, tol1D: any, tol2D: any, tol3D: any, tof1D: any, tof2D: any, tof3D: any);
  }

export declare class AdvApp2Var_EvaluatorFunc2Var {
  Evaluate(theDimension: Standard_Integer, theUStartEnd: Standard_Real, theVStartEnd: Standard_Real, theFavorIso: Standard_Integer, theConstParam: Standard_Real, theNbParams: Standard_Integer, theParameters: Standard_Real, theUOrder: Standard_Integer, theVOrder: Standard_Integer, theResult: Standard_Real, theErrorCode: Standard_Integer): void;
}

export declare class AdvApp2Var_Patch extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  IsDiscretised(): Standard_Boolean;
  Discretise(Conditions: AdvApp2Var_Context, Constraints: AdvApp2Var_Framework, func: AdvApp2Var_EvaluatorFunc2Var): void;
  IsApproximated(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  MakeApprox(Conditions: AdvApp2Var_Context, Constraints: AdvApp2Var_Framework, NumDec: Standard_Integer): void;
  AddConstraints(Conditions: AdvApp2Var_Context, Constraints: AdvApp2Var_Framework): void;
  AddErrors(Constraints: AdvApp2Var_Framework): void;
  ChangeDomain(a: Standard_Real, b: Standard_Real, c: Standard_Real, d: Standard_Real): void;
  ResetApprox(): void;
  OverwriteApprox(): void;
  U0(): Standard_Real;
  U1(): Standard_Real;
  V0(): Standard_Real;
  V1(): Standard_Real;
  UOrder(): Standard_Integer;
  VOrder(): Standard_Integer;
  CutSense_1(): Standard_Integer;
  CutSense_2(Crit: AdvApp2Var_Criterion, NumDec: Standard_Integer): Standard_Integer;
  NbCoeffInU(): Standard_Integer;
  NbCoeffInV(): Standard_Integer;
  ChangeNbCoeff(NbCoeffU: Standard_Integer, NbCoeffV: Standard_Integer): void;
  Poles(SSPIndex: Standard_Integer, Conditions: AdvApp2Var_Context): any;
  Coefficients(SSPIndex: Standard_Integer, Conditions: AdvApp2Var_Context): any;
  MaxErrors(): any;
  AverageErrors(): any;
  IsoErrors(): any;
  CritValue(): Standard_Real;
  SetCritValue(dist: Standard_Real): void;
}

  export declare class AdvApp2Var_Patch_1 extends AdvApp2Var_Patch {
    constructor();
  }

  export declare class AdvApp2Var_Patch_2 extends AdvApp2Var_Patch {
    constructor(U0: Standard_Real, U1: Standard_Real, V0: Standard_Real, V1: Standard_Real, iu: Standard_Integer, iv: Standard_Integer);
  }

export declare class AdvApp2Var_Network {
  FirstNotApprox(Index: Standard_Integer): Standard_Boolean;
  ChangePatch(Index: Standard_Integer): AdvApp2Var_Patch;
  UpdateInU(CuttingValue: Standard_Real): void;
  UpdateInV(CuttingValue: Standard_Real): void;
  SameDegree(iu: Standard_Integer, iv: Standard_Integer, ncfu: Standard_Integer, ncfv: Standard_Integer): void;
  NbPatch(): Standard_Integer;
  NbPatchInU(): Standard_Integer;
  NbPatchInV(): Standard_Integer;
  UParameter(Index: Standard_Integer): Standard_Real;
  VParameter(Index: Standard_Integer): Standard_Real;
  Patch(UIndex: Standard_Integer, VIndex: Standard_Integer): AdvApp2Var_Patch;
}

  export declare class AdvApp2Var_Network_1 extends AdvApp2Var_Network {
    constructor();
  }

  export declare class AdvApp2Var_Network_2 extends AdvApp2Var_Network {
    constructor(Net: AdvApp2Var_SequenceOfPatch, TheU: TColStd_SequenceOfReal, TheV: TColStd_SequenceOfReal);
  }

export declare class AdvApp2Var_Node extends Standard_Transient {
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
  Coord(): gp_XY;
  SetCoord(x1: Standard_Real, x2: Standard_Real): void;
  UOrder(): Standard_Integer;
  VOrder(): Standard_Integer;
  SetPoint(iu: Standard_Integer, iv: Standard_Integer, Pt: gp_Pnt): void;
  Point(iu: Standard_Integer, iv: Standard_Integer): gp_Pnt;
  SetError(iu: Standard_Integer, iv: Standard_Integer, error: Standard_Real): void;
  Error(iu: Standard_Integer, iv: Standard_Integer): Standard_Real;
}

  export declare class AdvApp2Var_Node_1 extends AdvApp2Var_Node {
    constructor();
  }

  export declare class AdvApp2Var_Node_2 extends AdvApp2Var_Node {
    constructor(iu: Standard_Integer, iv: Standard_Integer);
  }

  export declare class AdvApp2Var_Node_3 extends AdvApp2Var_Node {
    constructor(UV: gp_XY, iu: Standard_Integer, iv: Standard_Integer);
  }

export declare class AdvApp2Var_Framework {
  FirstNotApprox(IndexIso: Standard_Integer, IndexStrip: Standard_Integer): any;
  FirstNode(Type: GeomAbs_IsoType, IndexIso: Standard_Integer, IndexStrip: Standard_Integer): Standard_Integer;
  LastNode(Type: GeomAbs_IsoType, IndexIso: Standard_Integer, IndexStrip: Standard_Integer): Standard_Integer;
  ChangeIso(IndexIso: Standard_Integer, IndexStrip: Standard_Integer, anIso: any): void;
  Node_1(IndexNode: Standard_Integer): any;
  Node_2(U: Standard_Real, V: Standard_Real): any;
  IsoU(U: Standard_Real, V0: Standard_Real, V1: Standard_Real): AdvApp2Var_Iso;
  IsoV(U0: Standard_Real, U1: Standard_Real, V: Standard_Real): AdvApp2Var_Iso;
  UpdateInU(CuttingValue: Standard_Real): void;
  UpdateInV(CuttingValue: Standard_Real): void;
  UEquation(IndexIso: Standard_Integer, IndexStrip: Standard_Integer): any;
  VEquation(IndexIso: Standard_Integer, IndexStrip: Standard_Integer): any;
}

  export declare class AdvApp2Var_Framework_1 extends AdvApp2Var_Framework {
    constructor();
  }

  export declare class AdvApp2Var_Framework_2 extends AdvApp2Var_Framework {
    constructor(Frame: AdvApp2Var_SequenceOfNode, UFrontier: AdvApp2Var_SequenceOfStrip, VFrontier: AdvApp2Var_SequenceOfStrip);
  }

export declare class AdvApp2Var_ApproxAFunc2Var {
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  Surface(Index: Standard_Integer): any;
  UDegree(): Standard_Integer;
  VDegree(): Standard_Integer;
  NumSubSpaces(Dimension: Standard_Integer): Standard_Integer;
  MaxError_1(Dimension: Standard_Integer): any;
  AverageError_1(Dimension: Standard_Integer): any;
  UFrontError_1(Dimension: Standard_Integer): any;
  VFrontError_1(Dimension: Standard_Integer): any;
  MaxError_2(Dimension: Standard_Integer, Index: Standard_Integer): Standard_Real;
  AverageError_2(Dimension: Standard_Integer, Index: Standard_Integer): Standard_Real;
  UFrontError_2(Dimension: Standard_Integer, Index: Standard_Integer): Standard_Real;
  VFrontError_2(Dimension: Standard_Integer, Index: Standard_Integer): Standard_Real;
  CritError(Dimension: Standard_Integer, Index: Standard_Integer): Standard_Real;
  Dump(o: Standard_OStream): void;
}

  export declare class AdvApp2Var_ApproxAFunc2Var_1 extends AdvApp2Var_ApproxAFunc2Var {
    constructor(Num1DSS: Standard_Integer, Num2DSS: Standard_Integer, Num3DSS: Standard_Integer, OneDTol: any, TwoDTol: any, ThreeDTol: any, OneDTolFr: any, TwoDTolFr: any, ThreeDTolFr: any, FirstInU: Standard_Real, LastInU: Standard_Real, FirstInV: Standard_Real, LastInV: Standard_Real, FavorIso: GeomAbs_IsoType, ContInU: GeomAbs_Shape, ContInV: GeomAbs_Shape, PrecisCode: Standard_Integer, MaxDegInU: Standard_Integer, MaxDegInV: Standard_Integer, MaxPatch: Standard_Integer, Func: AdvApp2Var_EvaluatorFunc2Var, UChoice: AdvApprox_Cutting, VChoice: AdvApprox_Cutting);
  }

  export declare class AdvApp2Var_ApproxAFunc2Var_2 extends AdvApp2Var_ApproxAFunc2Var {
    constructor(Num1DSS: Standard_Integer, Num2DSS: Standard_Integer, Num3DSS: Standard_Integer, OneDTol: any, TwoDTol: any, ThreeDTol: any, OneDTolFr: any, TwoDTolFr: any, ThreeDTolFr: any, FirstInU: Standard_Real, LastInU: Standard_Real, FirstInV: Standard_Real, LastInV: Standard_Real, FavorIso: GeomAbs_IsoType, ContInU: GeomAbs_Shape, ContInV: GeomAbs_Shape, PrecisCode: Standard_Integer, MaxDegInU: Standard_Integer, MaxDegInV: Standard_Integer, MaxPatch: Standard_Integer, Func: AdvApp2Var_EvaluatorFunc2Var, Crit: AdvApp2Var_Criterion, UChoice: AdvApprox_Cutting, VChoice: AdvApprox_Cutting);
  }

export declare class AdvApp2Var_ApproxF2var {
  constructor();
  mma2fnc_(ndimen: integer, nbsesp: integer, ndimse: integer, uvfonc: doublereal, foncnp: AdvApp2Var_EvaluatorFunc2Var, tconst: doublereal, isofav: integer, nbroot: integer, rootlg: doublereal, iordre: integer, ideriv: integer, ndgjac: integer, nbcrmx: integer, ncflim: integer, epsapr: doublereal, ncoeff: integer, courbe: doublereal, nbcrbe: integer, somtab: doublereal, diftab: doublereal, contr1: doublereal, contr2: doublereal, tabdec: doublereal, errmax: doublereal, errmoy: doublereal, iercod: integer): number;
  mma2roo_(nbpntu: integer, nbpntv: integer, urootl: doublereal, vrootl: doublereal): number;
  mma2jmx_(ndgjac: integer, iordre: integer, xjacmx: doublereal): number;
  mmapptt_(a0: integer, a1: integer, a2: integer, a3: doublereal, a4: integer): number;
  mma2cdi_(ndimen: integer, nbpntu: integer, urootl: doublereal, nbpntv: integer, vrootl: doublereal, iordru: integer, iordrv: integer, contr1: doublereal, contr2: doublereal, contr3: doublereal, contr4: doublereal, sotbu1: doublereal, sotbu2: doublereal, ditbu1: doublereal, ditbu2: doublereal, sotbv1: doublereal, sotbv2: doublereal, ditbv1: doublereal, ditbv2: doublereal, sosotb: doublereal, soditb: doublereal, disotb: doublereal, diditb: doublereal, iercod: integer): number;
  mma2ds1_(ndimen: integer, uintfn: doublereal, vintfn: doublereal, foncnp: AdvApp2Var_EvaluatorFunc2Var, nbpntu: integer, nbpntv: integer, urootb: doublereal, vrootb: doublereal, isofav: integer, sosotb: doublereal, disotb: doublereal, soditb: doublereal, diditb: doublereal, fpntab: doublereal, ttable: doublereal, iercod: integer): number;
  mma2ce1_(numdec: integer, ndimen: integer, nbsesp: integer, ndimse: integer, ndminu: integer, ndminv: integer, ndguli: integer, ndgvli: integer, ndjacu: integer, ndjacv: integer, iordru: integer, iordrv: integer, nbpntu: integer, nbpntv: integer, epsapr: doublereal, sosotb: doublereal, disotb: doublereal, soditb: doublereal, diditb: doublereal, patjac: doublereal, errmax: doublereal, errmoy: doublereal, ndegpu: integer, ndegpv: integer, itydec: integer, iercod: integer): number;
  mma2can_(a0: integer, a1: integer, a2: integer, a3: integer, a4: integer, a5: integer, a6: integer, a7: doublereal, a8: doublereal, a9: doublereal, a10: integer): number;
  mma1her_(a0: integer, a1: doublereal, a2: integer): number;
  mma2ac2_(a0: integer, a1: integer, a2: integer, a3: integer, a4: integer, a5: integer, a6: doublereal, a7: integer, a8: doublereal, a9: doublereal, a10: doublereal): number;
  mma2ac3_(a0: integer, a1: integer, a2: integer, a3: integer, a4: integer, a5: integer, a6: doublereal, a7: integer, a8: doublereal, a9: doublereal, a10: doublereal): number;
  mma2ac1_(a0: integer, a1: integer, a2: integer, a3: integer, a4: integer, a5: doublereal, a6: doublereal, a7: doublereal, a8: doublereal, a9: doublereal, a10: doublereal, a11: doublereal): number;
  mma2fx6_(ncfmxu: integer, ncfmxv: integer, ndimen: integer, nbsesp: integer, ndimse: integer, nbupat: integer, nbvpat: integer, iordru: integer, iordrv: integer, epsapr: doublereal, epsfro: doublereal, patcan: doublereal, errmax: doublereal, ncoefu: integer, ncoefv: integer): number;
}

export declare class AdvApp2Var_Criterion {
  Value(P: AdvApp2Var_Patch, C: AdvApp2Var_Context): void;
  IsSatisfied(P: AdvApp2Var_Patch): Standard_Boolean;
  MaxValue(): Standard_Real;
  Type(): AdvApp2Var_CriterionType;
  Repartition(): AdvApp2Var_CriterionRepartition;
}

export declare class AdvApp2Var_Data {
  constructor();
  Getmdnombr(): mdnombr_1_;
  Getminombr(): minombr_1_;
  Getmaovpar(): maovpar_1_;
  Getmaovpch(): maovpch_1_;
  Getmlgdrtl(): mlgdrtl_1_;
  Getmmjcobi(): mmjcobi_1_;
  Getmmcmcnp(): mmcmcnp_1_;
  Getmmapgss(): mmapgss_1_;
  Getmmapgs0(): mmapgs0_1_;
  Getmmapgs1(): mmapgs1_1_;
  Getmmapgs2(): mmapgs2_1_;
}

export declare class AdvApp2Var_MathBase {
  constructor();
  mmapcmp_(a0: integer, a1: integer, a2: integer, a3: number, a4: number): number;
  mmdrc11_(a0: integer, a1: integer, a2: integer, a3: doublereal, a4: doublereal, a5: doublereal): number;
  mmfmca9_(a0: integer, a1: integer, a2: integer, a3: integer, a4: integer, a5: integer, a6: doublereal, a7: doublereal): number;
  mmfmcb5_(a0: integer, a1: integer, a2: integer, a3: doublereal, a4: integer, a5: integer, a6: integer, a7: doublereal, a8: integer): number;
  mmwprcs_(a0: doublereal, a1: doublereal, a2: doublereal, a3: doublereal, a4: integer, a5: integer): void;
  mmcglc1_(ndimax: integer, ndimen: integer, ncoeff: integer, courbe: doublereal, tdebut: doublereal, tfinal: doublereal, epsiln: doublereal, xlongc: doublereal, erreur: doublereal, iercod: integer): number;
  mmbulld_(nbcoln: integer, nblign: integer, dtabtr: doublereal, numcle: integer): number;
  mmcdriv_(ndimen: integer, ncoeff: integer, courbe: doublereal, ideriv: integer, ncofdv: integer, crvdrv: doublereal): number;
  mmcvctx_(ndimen: integer, ncofmx: integer, nderiv: integer, ctrtes: doublereal, crvres: doublereal, tabaux: doublereal, xmatri: doublereal, iercod: integer): number;
  mdsptpt_(ndimen: integer, point1: doublereal, point2: doublereal, distan: doublereal): number;
  mmaperx_(ncofmx: integer, ndimen: integer, ncoeff: integer, iordre: integer, crvjac: doublereal, ncfnew: integer, ycvmax: doublereal, errmax: doublereal, iercod: integer): number;
  mmdrvck_(ncoeff: integer, ndimen: integer, courbe: doublereal, ideriv: integer, tparam: doublereal, pntcrb: doublereal): number;
  mmeps1_(epsilo: doublereal): number;
  mmfmca8_(ndimen: integer, ncoefu: integer, ncoefv: integer, ndimax: integer, ncfumx: integer, ncfvmx: integer, tabini: doublereal, tabres: doublereal): number;
  mmfmcar_(ndimen: integer, ncofmx: integer, ncoefu: integer, ncoefv: integer, patold: doublereal, upara1: doublereal, upara2: doublereal, vpara1: doublereal, vpara2: doublereal, patnew: doublereal, iercod: integer): number;
  mmfmtb1_(maxsz1: integer, table1: doublereal, isize1: integer, jsize1: integer, maxsz2: integer, table2: doublereal, isize2: integer, jsize2: integer, iercod: integer): number;
  mmgaus1_(ndimf: integer, bfunx: any, k: integer, xd: doublereal, xf: doublereal, saux1: doublereal, saux2: doublereal, somme: doublereal, niter: integer, iercod: integer): number;
  mmhjcan_(ndimen: integer, ncourb: integer, ncftab: integer, orcont: integer, ncflim: integer, tcbold: doublereal, tdecop: doublereal, tcbnew: doublereal, iercod: integer): number;
  mminltt_(ncolmx: integer, nlgnmx: integer, tabtri: doublereal, nbrcol: integer, nbrlgn: integer, ajoute: doublereal, epseg: doublereal, iercod: integer): number;
  mmjaccv_(ncoef: integer, ndim: integer, ider: integer, crvlgd: doublereal, polaux: doublereal, crvcan: doublereal): number;
  mmpobas_(tparam: doublereal, iordre: integer, ncoeff: integer, nderiv: integer, valbas: doublereal, iercod: integer): number;
  mmmpocur_(ncofmx: integer, ndim: integer, ndeg: integer, courbe: doublereal, tparam: doublereal, tabval: doublereal): number;
  mmposui_(dimmat: integer, nistoc: integer, aposit: integer, posuiv: integer, iercod: integer): number;
  mmresol_(hdimen: integer, gdimen: integer, hnstoc: integer, gnstoc: integer, mnstoc: integer, matsyh: doublereal, matsyg: doublereal, vecsyh: doublereal, vecsyg: doublereal, hposit: integer, hposui: integer, gposit: integer, mmposui: integer, mposit: integer, vecsol: doublereal, iercod: integer): number;
  mmrtptt_(ndglgd: integer, rtlegd: doublereal): number;
  mmsrre2_(tparam: doublereal, nbrval: integer, tablev: doublereal, epsil: doublereal, numint: integer, itypen: integer, iercod: integer): number;
  mmtrpjj_(ncofmx: integer, ndimen: integer, ncoeff: integer, epsi3d: doublereal, iordre: integer, crvlgd: doublereal, ycvmax: doublereal, errmax: doublereal, ncfnew: integer): number;
  mmunivt_(ndimen: integer, vector: doublereal, vecnrm: doublereal, epsiln: doublereal, iercod: integer): number;
  mmvncol_(ndimen: integer, vecin: doublereal, vecout: doublereal, iercod: integer): number;
  msc_(ndimen: integer, vecte1: doublereal, vecte2: doublereal): doublereal;
  mvsheld_(n: integer, is: integer, dtab: doublereal, icle: integer): number;
  mmarcin_(ndimax: integer, ndim: integer, ncoeff: integer, crvold: doublereal, u0: doublereal, u1: doublereal, crvnew: doublereal, iercod: integer): number;
  mmcvinv_(ndimax: integer, ncoef: integer, ndim: integer, curveo: doublereal, curve: doublereal): number;
  mmjacan_(ideriv: integer, ndeg: integer, poljac: doublereal, polcan: doublereal): number;
  mmpocrb_(ndimax: integer, ncoeff: integer, courbe: doublereal, ndim: integer, tparam: doublereal, pntcrb: doublereal): number;
  mmmrslwd_(normax: integer, nordre: integer, ndim: integer, amat: doublereal, bmat: doublereal, epspiv: doublereal, aaux: doublereal, xmat: doublereal, iercod: integer): number;
  mmveps3_(eps03: doublereal): number;
  pow__di(x: doublereal, n: integer): doublereal;
  mzsnorm_(ndimen: integer, vecteu: doublereal): doublereal;
}

export declare class AdvApp2Var_SysBase {
  constructor()
  mainial_(): number;
  macinit_(a0: number, a1: number): number;
  mcrdelt_(iunit: integer, isize: integer, t: void, iofset: intptr_t, iercod: integer): number;
  mcrfill_(size: integer, tin: void, tout: void): number;
  mcrrqst_(iunit: integer, isize: integer, t: void, iofset: intptr_t, iercod: integer): number;
  mnfndeb_(): integer;
  do__fio(): number;
  do__lio(): number;
  macrai4_(nbelem: integer, maxelm: integer, itablo: integer, iofset: intptr_t, iercod: integer): number;
  macrar8_(nbelem: integer, maxelm: integer, xtablo: doublereal, iofset: intptr_t, iercod: integer): number;
  macrdi4_(nbelem: integer, maxelm: integer, itablo: integer, iofset: intptr_t, iercod: integer): number;
  macrdr8_(nbelem: integer, maxelm: integer, xtablo: doublereal, iofset: intptr_t, iercod: integer): number;
  maermsg_(cnompg: string, icoder: integer, cnompg_len: ftnlen): number;
  maitbr8_(itaill: integer, xtab: doublereal, xval: doublereal): number;
  maovsr8_(ivalcs: integer): number;
  mgenmsg_(nomprg: string, nomprg_len: ftnlen): number;
  mgsomsg_(nomprg: string, nomprg_len: ftnlen): number;
  miraz_(taille: integer, adt: void): void;
  msifill_(nbintg: integer, ivecin: integer, ivecou: integer): number;
  msrfill_(nbreel: integer, vecent: doublereal, vecsor: doublereal): number;
  mswrdbg_(ctexte: string, ctexte_len: ftnlen): number;
  mvriraz_(taille: integer, adt: void): void;
}

export declare class AppCont_Function {
  GetNumberOfPoints(theNbPnt: Standard_Integer, theNbPnt2d: Standard_Integer): void;
  GetNbOf3dPoints(): Standard_Integer;
  GetNbOf2dPoints(): Standard_Integer;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Value(theU: Standard_Real, thePnt2d: NCollection_Array1<gp_Pnt2d>, thePnt: NCollection_Array1<gp_Pnt>): Standard_Boolean;
  D1(theU: Standard_Real, theVec2d: NCollection_Array1<gp_Vec2d>, theVec: NCollection_Array1<gp_Vec>): Standard_Boolean;
  PeriodInformation(a0: Standard_Integer, IsPeriodic: Standard_Boolean, thePeriod: Standard_Real): void;
}

export declare class AppParCurves_MultiPoint {
  SetPoint(Index: Standard_Integer, Point: gp_Pnt): void;
  Point(Index: Standard_Integer): gp_Pnt;
  SetPoint2d(Index: Standard_Integer, Point: gp_Pnt2d): void;
  Point2d(Index: Standard_Integer): gp_Pnt2d;
  Dimension(Index: Standard_Integer): Standard_Integer;
  NbPoints(): Standard_Integer;
  NbPoints2d(): Standard_Integer;
  Transform(CuIndex: Standard_Integer, x: Standard_Real, dx: Standard_Real, y: Standard_Real, dy: Standard_Real, z: Standard_Real, dz: Standard_Real): void;
  Transform2d(CuIndex: Standard_Integer, x: Standard_Real, dx: Standard_Real, y: Standard_Real, dy: Standard_Real): void;
  Dump(o: Standard_OStream): void;
}

  export declare class AppParCurves_MultiPoint_1 extends AppParCurves_MultiPoint {
    constructor();
  }

  export declare class AppParCurves_MultiPoint_2 extends AppParCurves_MultiPoint {
    constructor(NbPoints: Standard_Integer, NbPoints2d: Standard_Integer);
  }

  export declare class AppParCurves_MultiPoint_3 extends AppParCurves_MultiPoint {
    constructor(tabP: TColgp_Array1OfPnt);
  }

  export declare class AppParCurves_MultiPoint_4 extends AppParCurves_MultiPoint {
    constructor(tabP2d: TColgp_Array1OfPnt2d);
  }

  export declare class AppParCurves_MultiPoint_5 extends AppParCurves_MultiPoint {
    constructor(tabP: TColgp_Array1OfPnt, tabP2d: TColgp_Array1OfPnt2d);
  }

export declare class AppParCurves_MultiCurve {
  SetNbPoles(nbPoles: Standard_Integer): void;
  SetValue(Index: Standard_Integer, MPoint: AppParCurves_MultiPoint): void;
  NbCurves(): Standard_Integer;
  NbPoles(): Standard_Integer;
  Degree(): Standard_Integer;
  Dimension(CuIndex: Standard_Integer): Standard_Integer;
  Curve_1(CuIndex: Standard_Integer, TabPnt: TColgp_Array1OfPnt): void;
  Curve_2(CuIndex: Standard_Integer, TabPnt: TColgp_Array1OfPnt2d): void;
  Value_1(Index: Standard_Integer): AppParCurves_MultiPoint;
  Pole(CuIndex: Standard_Integer, Nieme: Standard_Integer): gp_Pnt;
  Pole2d(CuIndex: Standard_Integer, Nieme: Standard_Integer): gp_Pnt2d;
  Transform(CuIndex: Standard_Integer, x: Standard_Real, dx: Standard_Real, y: Standard_Real, dy: Standard_Real, z: Standard_Real, dz: Standard_Real): void;
  Transform2d(CuIndex: Standard_Integer, x: Standard_Real, dx: Standard_Real, y: Standard_Real, dy: Standard_Real): void;
  Value_2(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt): void;
  Value_3(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt2d): void;
  D1_1(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt, V1: gp_Vec): void;
  D1_2(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt2d, V1: gp_Vec2d): void;
  D2_1(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D2_2(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  Dump(o: Standard_OStream): void;
}

  export declare class AppParCurves_MultiCurve_1 extends AppParCurves_MultiCurve {
    constructor();
  }

  export declare class AppParCurves_MultiCurve_2 extends AppParCurves_MultiCurve {
    constructor(NbPol: Standard_Integer);
  }

  export declare class AppParCurves_MultiCurve_3 extends AppParCurves_MultiCurve {
    constructor(tabMU: AppParCurves_Array1OfMultiPoint);
  }

export declare class AppCont_LeastSquare {
  constructor(SSP: AppCont_Function, U0: Standard_Real, U1: Standard_Real, FirstCons: AppParCurves_Constraint, LastCons: AppParCurves_Constraint, Deg: Standard_Integer, NbPoints: Standard_Integer)
  Value(): AppParCurves_MultiCurve;
  Error(F: Standard_Real, MaxE3d: Standard_Real, MaxE2d: Standard_Real): void;
  IsDone(): Standard_Boolean;
}

export declare class AppParCurves_MultiBSpCurve extends AppParCurves_MultiCurve {
  SetKnots(theKnots: TColStd_Array1OfReal): void;
  SetMultiplicities(theMults: TColStd_Array1OfInteger): void;
  Knots(): TColStd_Array1OfReal;
  Multiplicities(): TColStd_Array1OfInteger;
  Degree(): Standard_Integer;
  Value_1(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt): void;
  Value_2(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt2d): void;
  D1_1(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt, V1: gp_Vec): void;
  D1_2(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt2d, V1: gp_Vec2d): void;
  D2_1(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D2_2(CuIndex: Standard_Integer, U: Standard_Real, Pt: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  Dump(o: Standard_OStream): void;
}

  export declare class AppParCurves_MultiBSpCurve_1 extends AppParCurves_MultiBSpCurve {
    constructor();
  }

  export declare class AppParCurves_MultiBSpCurve_2 extends AppParCurves_MultiBSpCurve {
    constructor(NbPol: Standard_Integer);
  }

  export declare class AppParCurves_MultiBSpCurve_3 extends AppParCurves_MultiBSpCurve {
    constructor(tabMU: AppParCurves_Array1OfMultiPoint, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger);
  }

  export declare class AppParCurves_MultiBSpCurve_4 extends AppParCurves_MultiBSpCurve {
    constructor(SC: AppParCurves_MultiCurve, Knots: TColStd_Array1OfReal, Mults: TColStd_Array1OfInteger);
  }

export declare class AppParCurves_ConstraintCouple {
  Index(): Standard_Integer;
  Constraint(): AppParCurves_Constraint;
  SetIndex(TheIndex: Standard_Integer): void;
  SetConstraint(Cons: AppParCurves_Constraint): void;
}

  export declare class AppParCurves_ConstraintCouple_1 extends AppParCurves_ConstraintCouple {
    constructor();
  }

  export declare class AppParCurves_ConstraintCouple_2 extends AppParCurves_ConstraintCouple {
    constructor(TheIndex: Standard_Integer, Cons: AppParCurves_Constraint);
  }

export declare class AppParCurves {
  constructor();
  BernsteinMatrix(NbPoles: Standard_Integer, U: math_Vector, A: math_Matrix): void;
  Bernstein(NbPoles: Standard_Integer, U: math_Vector, A: math_Matrix, DA: math_Matrix): void;
  SecondDerivativeBernstein(U: Standard_Real, DDA: math_Vector): void;
  SplineFunction(NbPoles: Standard_Integer, Degree: Standard_Integer, Parameters: math_Vector, FlatKnots: math_Vector, A: math_Matrix, DA: math_Matrix, Index: math_IntegerVector): void;
}

export declare class Approx_Curve2d {
  constructor(C2D: any, First: Standard_Real, Last: Standard_Real, TolU: Standard_Real, TolV: Standard_Real, Continuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegments: Standard_Integer)
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  Curve(): any;
  MaxError2dU(): Standard_Real;
  MaxError2dV(): Standard_Real;
}

export declare class Approx_Curve3d {
  constructor(Curve: any, Tol3d: Standard_Real, Order: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer)
  Curve(): any;
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  MaxError(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

export declare class Approx_CurveOnSurface {
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  Curve3d(): any;
  MaxError3d(): Standard_Real;
  Curve2d(): any;
  MaxError2dU(): Standard_Real;
  MaxError2dV(): Standard_Real;
  Perform(theMaxSegments: Standard_Integer, theMaxDegree: Standard_Integer, theContinuity: GeomAbs_Shape, theOnly3d: Standard_Boolean, theOnly2d: Standard_Boolean): void;
}

  export declare class Approx_CurveOnSurface_1 extends Approx_CurveOnSurface {
    constructor(C2D: any, Surf: any, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real, Continuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegments: Standard_Integer, Only3d: Standard_Boolean, Only2d: Standard_Boolean);
  }

  export declare class Approx_CurveOnSurface_2 extends Approx_CurveOnSurface {
    constructor(theC2D: any, theSurf: any, theFirst: Standard_Real, theLast: Standard_Real, theTol: Standard_Real);
  }

export declare class Approx_CurvilinearParameter {
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  Curve3d(): any;
  MaxError3d(): Standard_Real;
  Curve2d1(): any;
  MaxError2d1(): Standard_Real;
  Curve2d2(): any;
  MaxError2d2(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

  export declare class Approx_CurvilinearParameter_1 extends Approx_CurvilinearParameter {
    constructor(C3D: any, Tol: Standard_Real, Order: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegments: Standard_Integer);
  }

  export declare class Approx_CurvilinearParameter_2 extends Approx_CurvilinearParameter {
    constructor(C2D: any, Surf: any, Tol: Standard_Real, Order: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegments: Standard_Integer);
  }

  export declare class Approx_CurvilinearParameter_3 extends Approx_CurvilinearParameter {
    constructor(C2D1: any, Surf1: any, C2D2: any, Surf2: any, Tol: Standard_Real, Order: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegments: Standard_Integer);
  }

export declare class Approx_CurvlinFunc extends Standard_Transient {
  SetTol(Tol: Standard_Real): void;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): void;
  Length_1(): void;
  Length_2(C: Adaptor3d_Curve, FirstU: Standard_Real, LasrU: Standard_Real): Standard_Real;
  GetLength(): Standard_Real;
  GetUParameter(C: Adaptor3d_Curve, S: Standard_Real, NumberOfCurve: Standard_Integer): Standard_Real;
  GetSParameter_1(U: Standard_Real): Standard_Real;
  EvalCase1(S: Standard_Real, Order: Standard_Integer, Result: TColStd_Array1OfReal): Standard_Boolean;
  EvalCase2(S: Standard_Real, Order: Standard_Integer, Result: TColStd_Array1OfReal): Standard_Boolean;
  EvalCase3(S: Standard_Real, Order: Standard_Integer, Result: TColStd_Array1OfReal): Standard_Boolean;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Approx_CurvlinFunc_1 extends Approx_CurvlinFunc {
    constructor(C: any, Tol: Standard_Real);
  }

  export declare class Approx_CurvlinFunc_2 extends Approx_CurvlinFunc {
    constructor(C2D: any, S: any, Tol: Standard_Real);
  }

  export declare class Approx_CurvlinFunc_3 extends Approx_CurvlinFunc {
    constructor(C2D1: any, C2D2: any, S1: any, S2: any, Tol: Standard_Real);
  }

export declare class Approx_FitAndDivide {
  Perform(Line: AppCont_Function): void;
  SetDegrees(degreemin: Standard_Integer, degreemax: Standard_Integer): void;
  SetTolerances(Tolerance3d: Standard_Real, Tolerance2d: Standard_Real): void;
  SetConstraints(FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint): void;
  SetMaxSegments(theMaxSegments: Standard_Integer): void;
  SetInvOrder(theInvOrder: Standard_Boolean): void;
  SetHangChecking(theHangChecking: Standard_Boolean): void;
  IsAllApproximated(): Standard_Boolean;
  IsToleranceReached(): Standard_Boolean;
  Error(Index: Standard_Integer, tol3d: Standard_Real, tol2d: Standard_Real): void;
  NbMultiCurves(): Standard_Integer;
  Value(Index: Standard_Integer): AppParCurves_MultiCurve;
  Parameters(Index: Standard_Integer, firstp: Standard_Real, lastp: Standard_Real): void;
}

  export declare class Approx_FitAndDivide_1 extends Approx_FitAndDivide {
    constructor(Line: AppCont_Function, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, cutting: Standard_Boolean, FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint);
  }

  export declare class Approx_FitAndDivide_2 extends Approx_FitAndDivide {
    constructor(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, cutting: Standard_Boolean, FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint);
  }

export declare class Approx_FitAndDivide2d {
  Perform(Line: AppCont_Function): void;
  SetDegrees(degreemin: Standard_Integer, degreemax: Standard_Integer): void;
  SetTolerances(Tolerance3d: Standard_Real, Tolerance2d: Standard_Real): void;
  SetConstraints(FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint): void;
  SetMaxSegments(theMaxSegments: Standard_Integer): void;
  SetInvOrder(theInvOrder: Standard_Boolean): void;
  SetHangChecking(theHangChecking: Standard_Boolean): void;
  IsAllApproximated(): Standard_Boolean;
  IsToleranceReached(): Standard_Boolean;
  Error(Index: Standard_Integer, tol3d: Standard_Real, tol2d: Standard_Real): void;
  NbMultiCurves(): Standard_Integer;
  Value(Index: Standard_Integer): AppParCurves_MultiCurve;
  Parameters(Index: Standard_Integer, firstp: Standard_Real, lastp: Standard_Real): void;
}

  export declare class Approx_FitAndDivide2d_1 extends Approx_FitAndDivide2d {
    constructor(Line: AppCont_Function, degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, cutting: Standard_Boolean, FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint);
  }

  export declare class Approx_FitAndDivide2d_2 extends Approx_FitAndDivide2d {
    constructor(degreemin: Standard_Integer, degreemax: Standard_Integer, Tolerance3d: Standard_Real, Tolerance2d: Standard_Real, cutting: Standard_Boolean, FirstC: AppParCurves_Constraint, LastC: AppParCurves_Constraint);
  }

export declare class Approx_MCurvesToBSpCurve {
  constructor()
  Reset(): void;
  Append(MC: AppParCurves_MultiCurve): void;
  Perform_1(): void;
  Perform_2(TheSeq: AppParCurves_SequenceOfMultiCurve): void;
  Value(): AppParCurves_MultiBSpCurve;
  ChangeValue(): AppParCurves_MultiBSpCurve;
}

export declare class Approx_SameParameter {
  IsDone(): Standard_Boolean;
  TolReached(): Standard_Real;
  IsSameParameter(): Standard_Boolean;
  Curve2d(): any;
}

  export declare class Approx_SameParameter_1 extends Approx_SameParameter {
    constructor(C3D: any, C2D: any, S: any, Tol: Standard_Real);
  }

  export declare class Approx_SameParameter_2 extends Approx_SameParameter {
    constructor(C3D: any, C2D: any, S: any, Tol: Standard_Real);
  }

  export declare class Approx_SameParameter_3 extends Approx_SameParameter {
    constructor(C3D: any, C2D: any, S: any, Tol: Standard_Real);
  }

export declare class Approx_SweepApproximation {
  constructor(Func: any)
  Perform(First: Standard_Real, Last: Standard_Real, Tol3d: Standard_Real, BoundTol: Standard_Real, Tol2d: Standard_Real, TolAngular: Standard_Real, Continuity: GeomAbs_Shape, Degmax: Standard_Integer, Segmax: Standard_Integer): void;
  Eval(Parameter: Standard_Real, DerivativeRequest: Standard_Integer, First: Standard_Real, Last: Standard_Real, Result: Standard_Real): Standard_Integer;
  IsDone(): Standard_Boolean;
  SurfShape(UDegree: Standard_Integer, VDegree: Standard_Integer, NbUPoles: Standard_Integer, NbVPoles: Standard_Integer, NbUKnots: Standard_Integer, NbVKnots: Standard_Integer): void;
  Surface(TPoles: TColgp_Array2OfPnt, TWeights: TColStd_Array2OfReal, TUKnots: TColStd_Array1OfReal, TVKnots: TColStd_Array1OfReal, TUMults: TColStd_Array1OfInteger, TVMults: TColStd_Array1OfInteger): void;
  UDegree(): Standard_Integer;
  VDegree(): Standard_Integer;
  SurfPoles(): TColgp_Array2OfPnt;
  SurfWeights(): TColStd_Array2OfReal;
  SurfUKnots(): TColStd_Array1OfReal;
  SurfVKnots(): TColStd_Array1OfReal;
  SurfUMults(): TColStd_Array1OfInteger;
  SurfVMults(): TColStd_Array1OfInteger;
  MaxErrorOnSurf(): Standard_Real;
  AverageErrorOnSurf(): Standard_Real;
  NbCurves2d(): Standard_Integer;
  Curves2dShape(Degree: Standard_Integer, NbPoles: Standard_Integer, NbKnots: Standard_Integer): void;
  Curve2d(Index: Standard_Integer, TPoles: TColgp_Array1OfPnt2d, TKnots: TColStd_Array1OfReal, TMults: TColStd_Array1OfInteger): void;
  Curves2dDegree(): Standard_Integer;
  Curve2dPoles(Index: Standard_Integer): TColgp_Array1OfPnt2d;
  Curves2dKnots(): TColStd_Array1OfReal;
  Curves2dMults(): TColStd_Array1OfInteger;
  Max2dError(Index: Standard_Integer): Standard_Real;
  Average2dError(Index: Standard_Integer): Standard_Real;
  TolCurveOnSurf(Index: Standard_Integer): Standard_Real;
  Dump(o: Standard_OStream): void;
}

export declare class Approx_SweepFunction extends Standard_Transient {
  D0(Param: Standard_Real, First: Standard_Real, Last: Standard_Real, Poles: TColgp_Array1OfPnt, Poles2d: TColgp_Array1OfPnt2d, Weigths: TColStd_Array1OfReal): Standard_Boolean;
  D1(Param: Standard_Real, First: Standard_Real, Last: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal): Standard_Boolean;
  D2(Param: Standard_Real, First: Standard_Real, Last: Standard_Real, Poles: TColgp_Array1OfPnt, DPoles: TColgp_Array1OfVec, D2Poles: TColgp_Array1OfVec, Poles2d: TColgp_Array1OfPnt2d, DPoles2d: TColgp_Array1OfVec2d, D2Poles2d: TColgp_Array1OfVec2d, Weigths: TColStd_Array1OfReal, DWeigths: TColStd_Array1OfReal, D2Weigths: TColStd_Array1OfReal): Standard_Boolean;
  Nb2dCurves(): Standard_Integer;
  SectionShape(NbPoles: Standard_Integer, NbKnots: Standard_Integer, Degree: Standard_Integer): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  Mults(TMults: TColStd_Array1OfInteger): void;
  IsRational(): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  Resolution(Index: Standard_Integer, Tol: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  GetTolerance(BoundTol: Standard_Real, SurfTol: Standard_Real, AngleTol: Standard_Real, Tol3d: TColStd_Array1OfReal): void;
  SetTolerance(Tol3d: Standard_Real, Tol2d: Standard_Real): void;
  BarycentreOfSurf(): gp_Pnt;
  MaximalSection(): Standard_Real;
  GetMinimalWeight(Weigths: TColStd_Array1OfReal): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Extrema_ECC {
  SetParams(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real): void;
  SetTolerance(Tol: Standard_Real): void;
  SetSingleSolutionFlag(theSingleSolutionFlag: Standard_Boolean): void;
  GetSingleSolutionFlag(): Standard_Boolean;
  Perform(): void;
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv, P2: Extrema_POnCurv): void;
}

  export declare class Extrema_ECC_1 extends Extrema_ECC {
    constructor();
  }

  export declare class Extrema_ECC_2 extends Extrema_ECC {
    constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve);
  }

  export declare class Extrema_ECC_3 extends Extrema_ECC {
    constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real);
  }

export declare class Extrema_POnCurv {
  SetValues(U: Standard_Real, P: gp_Pnt): void;
  Value(): gp_Pnt;
  Parameter(): Standard_Real;
}

  export declare class Extrema_POnCurv_1 extends Extrema_POnCurv {
    constructor();
  }

  export declare class Extrema_POnCurv_2 extends Extrema_POnCurv {
    constructor(U: Standard_Real, P: gp_Pnt);
  }

export declare class Extrema_ExtCC {
  SetCurve_1(theRank: Standard_Integer, C: Adaptor3d_Curve): void;
  SetCurve_2(theRank: Standard_Integer, C: Adaptor3d_Curve, Uinf: Standard_Real, Usup: Standard_Real): void;
  SetRange(theRank: Standard_Integer, Uinf: Standard_Real, Usup: Standard_Real): void;
  SetTolerance(theRank: Standard_Integer, Tol: Standard_Real): void;
  Perform(): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  IsParallel(): Standard_Boolean;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv, P2: Extrema_POnCurv): void;
  TrimmedSquareDistances(dist11: Standard_Real, distP12: Standard_Real, distP21: Standard_Real, distP22: Standard_Real, P11: gp_Pnt, P12: gp_Pnt, P21: gp_Pnt, P22: gp_Pnt): void;
  SetSingleSolutionFlag(theSingleSolutionFlag: Standard_Boolean): void;
  GetSingleSolutionFlag(): Standard_Boolean;
}

  export declare class Extrema_ExtCC_1 extends Extrema_ExtCC {
    constructor(TolC1: Standard_Real, TolC2: Standard_Real);
  }

  export declare class Extrema_ExtCC_2 extends Extrema_ExtCC {
    constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve, TolC1: Standard_Real, TolC2: Standard_Real);
  }

  export declare class Extrema_ExtCC_3 extends Extrema_ExtCC {
    constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, TolC1: Standard_Real, TolC2: Standard_Real);
  }

export declare class Extrema_POnSurf {
  Value(): gp_Pnt;
  SetParameters(theU: Standard_Real, theV: Standard_Real, thePnt: gp_Pnt): void;
  Parameter(U: Standard_Real, V: Standard_Real): void;
}

  export declare class Extrema_POnSurf_1 extends Extrema_POnSurf {
    constructor();
  }

  export declare class Extrema_POnSurf_2 extends Extrema_POnSurf {
    constructor(U: Standard_Real, V: Standard_Real, P: gp_Pnt);
  }

export declare class Extrema_ExtElCS {
  Perform_1(C: gp_Lin, S: gp_Pln): void;
  Perform_2(C: gp_Lin, S: gp_Cylinder): void;
  Perform_3(C: gp_Lin, S: gp_Cone): void;
  Perform_4(C: gp_Lin, S: gp_Sphere): void;
  Perform_5(C: gp_Lin, S: gp_Torus): void;
  Perform_6(C: gp_Circ, S: gp_Pln): void;
  Perform_7(C: gp_Circ, S: gp_Cylinder): void;
  Perform_8(C: gp_Circ, S: gp_Cone): void;
  Perform_9(C: gp_Circ, S: gp_Sphere): void;
  Perform_10(C: gp_Circ, S: gp_Torus): void;
  Perform_11(C: gp_Hypr, S: gp_Pln): void;
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv, P2: Extrema_POnSurf): void;
}

  export declare class Extrema_ExtElCS_1 extends Extrema_ExtElCS {
    constructor();
  }

  export declare class Extrema_ExtElCS_2 extends Extrema_ExtElCS {
    constructor(C: gp_Lin, S: gp_Pln);
  }

  export declare class Extrema_ExtElCS_3 extends Extrema_ExtElCS {
    constructor(C: gp_Lin, S: gp_Cylinder);
  }

  export declare class Extrema_ExtElCS_4 extends Extrema_ExtElCS {
    constructor(C: gp_Lin, S: gp_Cone);
  }

  export declare class Extrema_ExtElCS_5 extends Extrema_ExtElCS {
    constructor(C: gp_Lin, S: gp_Sphere);
  }

  export declare class Extrema_ExtElCS_6 extends Extrema_ExtElCS {
    constructor(C: gp_Lin, S: gp_Torus);
  }

  export declare class Extrema_ExtElCS_7 extends Extrema_ExtElCS {
    constructor(C: gp_Circ, S: gp_Pln);
  }

  export declare class Extrema_ExtElCS_8 extends Extrema_ExtElCS {
    constructor(C: gp_Circ, S: gp_Cylinder);
  }

  export declare class Extrema_ExtElCS_9 extends Extrema_ExtElCS {
    constructor(C: gp_Circ, S: gp_Cone);
  }

  export declare class Extrema_ExtElCS_10 extends Extrema_ExtElCS {
    constructor(C: gp_Circ, S: gp_Sphere);
  }

  export declare class Extrema_ExtElCS_11 extends Extrema_ExtElCS {
    constructor(C: gp_Circ, S: gp_Torus);
  }

  export declare class Extrema_ExtElCS_12 extends Extrema_ExtElCS {
    constructor(C: gp_Hypr, S: gp_Pln);
  }

export declare class Extrema_ExtCS {
  Initialize(S: Adaptor3d_Surface, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real, TolC: Standard_Real, TolS: Standard_Real): void;
  Perform(C: Adaptor3d_Curve, Uinf: Standard_Real, Usup: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv, P2: Extrema_POnSurf): void;
}

  export declare class Extrema_ExtCS_1 extends Extrema_ExtCS {
    constructor();
  }

  export declare class Extrema_ExtCS_2 extends Extrema_ExtCS {
    constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface, TolC: Standard_Real, TolS: Standard_Real);
  }

  export declare class Extrema_ExtCS_3 extends Extrema_ExtCS {
    constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface, UCinf: Standard_Real, UCsup: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real, TolC: Standard_Real, TolS: Standard_Real);
  }

export declare class Extrema_ExtElSS {
  Perform_1(S1: gp_Pln, S2: gp_Pln): void;
  Perform_2(S1: gp_Pln, S2: gp_Sphere): void;
  Perform_3(S1: gp_Sphere, S2: gp_Sphere): void;
  Perform_4(S1: gp_Sphere, S2: gp_Cylinder): void;
  Perform_5(S1: gp_Sphere, S2: gp_Cone): void;
  Perform_6(S1: gp_Sphere, S2: gp_Torus): void;
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnSurf, P2: Extrema_POnSurf): void;
}

  export declare class Extrema_ExtElSS_1 extends Extrema_ExtElSS {
    constructor();
  }

  export declare class Extrema_ExtElSS_2 extends Extrema_ExtElSS {
    constructor(S1: gp_Pln, S2: gp_Pln);
  }

  export declare class Extrema_ExtElSS_3 extends Extrema_ExtElSS {
    constructor(S1: gp_Pln, S2: gp_Sphere);
  }

  export declare class Extrema_ExtElSS_4 extends Extrema_ExtElSS {
    constructor(S1: gp_Sphere, S2: gp_Sphere);
  }

  export declare class Extrema_ExtElSS_5 extends Extrema_ExtElSS {
    constructor(S1: gp_Sphere, S2: gp_Cylinder);
  }

  export declare class Extrema_ExtElSS_6 extends Extrema_ExtElSS {
    constructor(S1: gp_Sphere, S2: gp_Cone);
  }

  export declare class Extrema_ExtElSS_7 extends Extrema_ExtElSS {
    constructor(S1: gp_Sphere, S2: gp_Torus);
  }

export declare class Extrema_ExtSS {
  Initialize(S2: Adaptor3d_Surface, Uinf2: Standard_Real, Usup2: Standard_Real, Vinf2: Standard_Real, Vsup2: Standard_Real, TolS1: Standard_Real): void;
  Perform(S1: Adaptor3d_Surface, Uinf1: Standard_Real, Usup1: Standard_Real, Vinf1: Standard_Real, Vsup1: Standard_Real, TolS1: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnSurf, P2: Extrema_POnSurf): void;
}

  export declare class Extrema_ExtSS_1 extends Extrema_ExtSS {
    constructor();
  }

  export declare class Extrema_ExtSS_2 extends Extrema_ExtSS {
    constructor(S1: Adaptor3d_Surface, S2: Adaptor3d_Surface, TolS1: Standard_Real, TolS2: Standard_Real);
  }

  export declare class Extrema_ExtSS_3 extends Extrema_ExtSS {
    constructor(S1: Adaptor3d_Surface, S2: Adaptor3d_Surface, Uinf1: Standard_Real, Usup1: Standard_Real, Vinf1: Standard_Real, Vsup1: Standard_Real, Uinf2: Standard_Real, Usup2: Standard_Real, Vinf2: Standard_Real, Vsup2: Standard_Real, TolS1: Standard_Real, TolS2: Standard_Real);
  }

export declare class Extrema_ExtPElC {
  Perform_1(P: gp_Pnt, C: gp_Lin, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  Perform_2(P: gp_Pnt, C: gp_Circ, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  Perform_3(P: gp_Pnt, C: gp_Elips, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  Perform_4(P: gp_Pnt, C: gp_Hypr, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  Perform_5(P: gp_Pnt, C: gp_Parab, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv;
}

  export declare class Extrema_ExtPElC_1 extends Extrema_ExtPElC {
    constructor();
  }

  export declare class Extrema_ExtPElC_2 extends Extrema_ExtPElC {
    constructor(P: gp_Pnt, C: gp_Lin, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

  export declare class Extrema_ExtPElC_3 extends Extrema_ExtPElC {
    constructor(P: gp_Pnt, C: gp_Circ, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

  export declare class Extrema_ExtPElC_4 extends Extrema_ExtPElC {
    constructor(P: gp_Pnt, C: gp_Elips, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

  export declare class Extrema_ExtPElC_5 extends Extrema_ExtPElC {
    constructor(P: gp_Pnt, C: gp_Hypr, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

  export declare class Extrema_ExtPElC_6 extends Extrema_ExtPElC {
    constructor(P: gp_Pnt, C: gp_Parab, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

export declare class Extrema_PCFOfEPCOfExtPC extends math_FunctionWithDerivative {
  Initialize(C: Adaptor3d_Curve): void;
  SetPoint(P: gp_Pnt): void;
  Value(U: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(U: Standard_Real, DF: Standard_Real): Standard_Boolean;
  Values(U: Standard_Real, F: Standard_Real, DF: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv;
  SubIntervalInitialize(theUfirst: Standard_Real, theUlast: Standard_Real): void;
  SearchOfTolerance(): Standard_Real;
}

  export declare class Extrema_PCFOfEPCOfExtPC_1 extends Extrema_PCFOfEPCOfExtPC {
    constructor();
  }

  export declare class Extrema_PCFOfEPCOfExtPC_2 extends Extrema_PCFOfEPCOfExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve);
  }

export declare class Extrema_EPCOfExtPC {
  Initialize_1(C: Adaptor3d_Curve, NbU: Standard_Integer, TolU: Standard_Real, TolF: Standard_Real): void;
  Initialize_2(C: Adaptor3d_Curve, NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real): void;
  Initialize_3(C: Adaptor3d_Curve): void;
  Initialize_4(NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv;
}

  export declare class Extrema_EPCOfExtPC_1 extends Extrema_EPCOfExtPC {
    constructor();
  }

  export declare class Extrema_EPCOfExtPC_2 extends Extrema_EPCOfExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, NbU: Standard_Integer, TolU: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_EPCOfExtPC_3 extends Extrema_EPCOfExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real);
  }

export declare class Extrema_ExtPC {
  Initialize(C: Adaptor3d_Curve, Uinf: Standard_Real, Usup: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  SquareDistance(N: Standard_Integer): Standard_Real;
  NbExt(): Standard_Integer;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv;
  TrimmedSquareDistances(dist1: Standard_Real, dist2: Standard_Real, P1: gp_Pnt, P2: gp_Pnt): void;
}

  export declare class Extrema_ExtPC_1 extends Extrema_ExtPC {
    constructor();
  }

  export declare class Extrema_ExtPC_2 extends Extrema_ExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, Uinf: Standard_Real, Usup: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_ExtPC_3 extends Extrema_ExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, TolF: Standard_Real);
  }

export declare class Extrema_ExtPElS {
  Perform_1(P: gp_Pnt, S: gp_Cylinder, Tol: Standard_Real): void;
  Perform_2(P: gp_Pnt, S: gp_Pln, Tol: Standard_Real): void;
  Perform_3(P: gp_Pnt, S: gp_Cone, Tol: Standard_Real): void;
  Perform_4(P: gp_Pnt, S: gp_Torus, Tol: Standard_Real): void;
  Perform_5(P: gp_Pnt, S: gp_Sphere, Tol: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Point(N: Standard_Integer): Extrema_POnSurf;
}

  export declare class Extrema_ExtPElS_1 extends Extrema_ExtPElS {
    constructor();
  }

  export declare class Extrema_ExtPElS_2 extends Extrema_ExtPElS {
    constructor(P: gp_Pnt, S: gp_Cylinder, Tol: Standard_Real);
  }

  export declare class Extrema_ExtPElS_3 extends Extrema_ExtPElS {
    constructor(P: gp_Pnt, S: gp_Pln, Tol: Standard_Real);
  }

  export declare class Extrema_ExtPElS_4 extends Extrema_ExtPElS {
    constructor(P: gp_Pnt, S: gp_Cone, Tol: Standard_Real);
  }

  export declare class Extrema_ExtPElS_5 extends Extrema_ExtPElS {
    constructor(P: gp_Pnt, S: gp_Torus, Tol: Standard_Real);
  }

  export declare class Extrema_ExtPElS_6 extends Extrema_ExtPElS {
    constructor(P: gp_Pnt, S: gp_Sphere, Tol: Standard_Real);
  }

export declare class Extrema_POnSurfParams extends Extrema_POnSurf {
  SetSqrDistance(theSqrDistance: Standard_Real): void;
  GetSqrDistance(): Standard_Real;
  SetElementType(theElementType: Extrema_ElementType): void;
  GetElementType(): Extrema_ElementType;
  SetIndices(theIndexU: Standard_Integer, theIndexV: Standard_Integer): void;
  GetIndices(theIndexU: Standard_Integer, theIndexV: Standard_Integer): void;
}

  export declare class Extrema_POnSurfParams_1 extends Extrema_POnSurfParams {
    constructor();
  }

  export declare class Extrema_POnSurfParams_2 extends Extrema_POnSurfParams {
    constructor(theU: Standard_Real, theV: Standard_Real, thePnt: gp_Pnt);
  }

export declare class Extrema_FuncPSNorm extends math_FunctionSetWithDerivatives {
  Initialize(S: Adaptor3d_Surface): void;
  SetPoint(P: gp_Pnt): void;
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(UV: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(UV: math_Vector, DF: math_Matrix): Standard_Boolean;
  Values(UV: math_Vector, F: math_Vector, DF: math_Matrix): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Point(N: Standard_Integer): Extrema_POnSurf;
}

  export declare class Extrema_FuncPSNorm_1 extends Extrema_FuncPSNorm {
    constructor();
  }

  export declare class Extrema_FuncPSNorm_2 extends Extrema_FuncPSNorm {
    constructor(P: gp_Pnt, S: Adaptor3d_Surface);
  }

export declare class Extrema_GenExtPS {
  Initialize_1(S: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, TolU: Standard_Real, TolV: Standard_Real): void;
  Initialize_2(S: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  SetFlag(F: Extrema_ExtFlag): void;
  SetAlgo(A: Extrema_ExtAlgo): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Point(N: Standard_Integer): Extrema_POnSurf;
}

  export declare class Extrema_GenExtPS_1 extends Extrema_GenExtPS {
    constructor();
  }

  export declare class Extrema_GenExtPS_2 extends Extrema_GenExtPS {
    constructor(P: gp_Pnt, S: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, TolU: Standard_Real, TolV: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo);
  }

  export declare class Extrema_GenExtPS_3 extends Extrema_GenExtPS {
    constructor(P: gp_Pnt, S: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, TolU: Standard_Real, TolV: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo);
  }

export declare class Extrema_ExtPS {
  Initialize(S: Adaptor3d_Surface, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Point(N: Standard_Integer): Extrema_POnSurf;
  TrimmedSquareDistances(dUfVf: Standard_Real, dUfVl: Standard_Real, dUlVf: Standard_Real, dUlVl: Standard_Real, PUfVf: gp_Pnt, PUfVl: gp_Pnt, PUlVf: gp_Pnt, PUlVl: gp_Pnt): void;
  SetFlag(F: Extrema_ExtFlag): void;
  SetAlgo(A: Extrema_ExtAlgo): void;
}

  export declare class Extrema_ExtPS_1 extends Extrema_ExtPS {
    constructor();
  }

  export declare class Extrema_ExtPS_2 extends Extrema_ExtPS {
    constructor(P: gp_Pnt, S: Adaptor3d_Surface, TolU: Standard_Real, TolV: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo);
  }

  export declare class Extrema_ExtPS_3 extends Extrema_ExtPS {
    constructor(P: gp_Pnt, S: Adaptor3d_Surface, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real, TolU: Standard_Real, TolV: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo);
  }

export declare class GeomLib_CheckCurveOnSurface {
  Init_1(theCurve: any, theSurface: any, theFirst: Standard_Real, theLast: Standard_Real, theTolRange: Standard_Real): void;
  Init_2(): void;
  Perform(thePCurve: any, isTheMultyTheradDisabled: Standard_Boolean): void;
  Curve(): any;
  Surface(): any;
  Range(theFirst: Standard_Real, theLast: Standard_Real): void;
  IsDone(): Standard_Boolean;
  ErrorStatus(): Standard_Integer;
  MaxDistance(): Standard_Real;
  MaxParameter(): Standard_Real;
}

  export declare class GeomLib_CheckCurveOnSurface_1 extends GeomLib_CheckCurveOnSurface {
    constructor();
  }

  export declare class GeomLib_CheckCurveOnSurface_2 extends GeomLib_CheckCurveOnSurface {
    constructor(theCurve: any, theSurface: any, theFirst: Standard_Real, theLast: Standard_Real, theTolRange: Standard_Real);
  }

export declare class GCPnts_TangentialDeflection {
  Initialize_1(C: Adaptor3d_Curve, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real): void;
  Initialize_2(C: Adaptor3d_Curve, FirstParameter: Standard_Real, LastParameter: Standard_Real, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real): void;
  Initialize_3(C: Adaptor2d_Curve2d, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real): void;
  Initialize_4(C: Adaptor2d_Curve2d, FirstParameter: Standard_Real, LastParameter: Standard_Real, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real): void;
  AddPoint(thePnt: gp_Pnt, theParam: Standard_Real, theIsReplace: Standard_Boolean): Standard_Integer;
  NbPoints(): Standard_Integer;
  Parameter(I: Standard_Integer): Standard_Real;
  Value(I: Standard_Integer): gp_Pnt;
  ArcAngularStep(theRadius: Standard_Real, theLinearDeflection: Standard_Real, theAngularDeflection: Standard_Real, theMinLength: Standard_Real): Standard_Real;
}

  export declare class GCPnts_TangentialDeflection_1 extends GCPnts_TangentialDeflection {
    constructor();
  }

  export declare class GCPnts_TangentialDeflection_2 extends GCPnts_TangentialDeflection {
    constructor(C: Adaptor3d_Curve, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real);
  }

  export declare class GCPnts_TangentialDeflection_3 extends GCPnts_TangentialDeflection {
    constructor(C: Adaptor3d_Curve, FirstParameter: Standard_Real, LastParameter: Standard_Real, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real);
  }

  export declare class GCPnts_TangentialDeflection_4 extends GCPnts_TangentialDeflection {
    constructor(C: Adaptor2d_Curve2d, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real);
  }

  export declare class GCPnts_TangentialDeflection_5 extends GCPnts_TangentialDeflection {
    constructor(C: Adaptor2d_Curve2d, FirstParameter: Standard_Real, LastParameter: Standard_Real, AngularDeflection: Standard_Real, CurvatureDeflection: Standard_Real, MinimumOfPoints: Standard_Integer, UTol: Standard_Real, theMinLen: Standard_Real);
  }

export declare class GeomLib {
  constructor();
  To3d(Position: gp_Ax2, Curve2d: any): any;
  GTransform(Curve: any, GTrsf: gp_GTrsf2d): any;
  SameRange(Tolerance: Standard_Real, Curve2dPtr: any, First: Standard_Real, Last: Standard_Real, RequestedFirst: Standard_Real, RequestedLast: Standard_Real, NewCurve2dPtr: any): void;
  BuildCurve3d(Tolerance: Standard_Real, CurvePtr: Adaptor3d_CurveOnSurface, FirstParameter: Standard_Real, LastParameter: Standard_Real, NewCurvePtr: any, MaxDeviation: Standard_Real, AverageDeviation: Standard_Real, Continuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegment: Standard_Integer): void;
  AdjustExtremity(Curve: any, P1: gp_Pnt, P2: gp_Pnt, T1: gp_Vec, T2: gp_Vec): void;
  ExtendCurveToPoint(Curve: any, Point: gp_Pnt, Cont: Standard_Integer, After: Standard_Boolean): void;
  ExtendSurfByLength(Surf: any, Length: Standard_Real, Cont: Standard_Integer, InU: Standard_Boolean, After: Standard_Boolean): void;
  AxeOfInertia(Points: TColgp_Array1OfPnt, Axe: gp_Ax2, IsSingular: Standard_Boolean, Tol: Standard_Real): void;
  Inertia(Points: TColgp_Array1OfPnt, Bary: gp_Pnt, XDir: gp_Dir, YDir: gp_Dir, Xgap: Standard_Real, YGap: Standard_Real, ZGap: Standard_Real): void;
  RemovePointsFromArray(NumPoints: Standard_Integer, InParameters: TColStd_Array1OfReal, OutParameters: any): void;
  DensifyArray1OfReal(MinNumPoints: Standard_Integer, InParameters: TColStd_Array1OfReal, OutParameters: any): void;
  FuseIntervals(Interval1: TColStd_Array1OfReal, Interval2: TColStd_Array1OfReal, Fusion: TColStd_SequenceOfReal, Confusion: Standard_Real): void;
  EvalMaxParametricDistance(Curve: Adaptor3d_Curve, AReferenceCurve: Adaptor3d_Curve, Tolerance: Standard_Real, Parameters: TColStd_Array1OfReal, MaxDistance: Standard_Real): void;
  EvalMaxDistanceAlongParameter(Curve: Adaptor3d_Curve, AReferenceCurve: Adaptor3d_Curve, Tolerance: Standard_Real, Parameters: TColStd_Array1OfReal, MaxDistance: Standard_Real): void;
  CancelDenominatorDerivative(BSurf: any, UDirection: Standard_Boolean, VDirection: Standard_Boolean): void;
  NormEstim(S: any, UV: gp_Pnt2d, Tol: Standard_Real, N: gp_Dir): Standard_Integer;
  IsClosed(S: any, Tol: Standard_Real, isUClosed: Standard_Boolean, isVClosed: Standard_Boolean): void;
  IsBSplUClosed(S: any, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  IsBSplVClosed(S: any, V1: Standard_Real, V2: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  IsBzUClosed(S: any, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  IsBzVClosed(S: any, V1: Standard_Real, V2: Standard_Real, Tol: Standard_Real): Standard_Boolean;
  isIsoLine(theC2D: any, theIsU: Standard_Boolean, theParam: Standard_Real, theIsForward: Standard_Boolean): Standard_Boolean;
  buildC3dOnIsoLine(theC2D: any, theSurf: any, theFirst: Standard_Real, theLast: Standard_Real, theTolerance: Standard_Real, theIsU: Standard_Boolean, theParam: Standard_Real, theIsForward: Standard_Boolean): any;
}

export declare class Extrema_PCLocFOfLocEPCOfLocateExtPC extends math_FunctionWithDerivative {
  Initialize(C: Adaptor3d_Curve): void;
  SetPoint(P: gp_Pnt): void;
  Value(U: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(U: Standard_Real, DF: Standard_Real): Standard_Boolean;
  Values(U: Standard_Real, F: Standard_Real, DF: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv;
  SubIntervalInitialize(theUfirst: Standard_Real, theUlast: Standard_Real): void;
  SearchOfTolerance(): Standard_Real;
}

  export declare class Extrema_PCLocFOfLocEPCOfLocateExtPC_1 extends Extrema_PCLocFOfLocEPCOfLocateExtPC {
    constructor();
  }

  export declare class Extrema_PCLocFOfLocEPCOfLocateExtPC_2 extends Extrema_PCLocFOfLocEPCOfLocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve);
  }

export declare class Extrema_LocEPCOfLocateExtPC {
  Initialize(C: Adaptor3d_Curve, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real): void;
  Perform(P: gp_Pnt, U0: Standard_Real): void;
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  IsMin(): Standard_Boolean;
  Point(): Extrema_POnCurv;
}

  export declare class Extrema_LocEPCOfLocateExtPC_1 extends Extrema_LocEPCOfLocateExtPC {
    constructor();
  }

  export declare class Extrema_LocEPCOfLocateExtPC_2 extends Extrema_LocEPCOfLocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, U0: Standard_Real, TolU: Standard_Real);
  }

  export declare class Extrema_LocEPCOfLocateExtPC_3 extends Extrema_LocEPCOfLocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, U0: Standard_Real, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real);
  }

export declare class Extrema_PCFOfEPCOfELPCOfLocateExtPC extends math_FunctionWithDerivative {
  Initialize(C: Adaptor3d_Curve): void;
  SetPoint(P: gp_Pnt): void;
  Value(U: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(U: Standard_Real, DF: Standard_Real): Standard_Boolean;
  Values(U: Standard_Real, F: Standard_Real, DF: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv;
  SubIntervalInitialize(theUfirst: Standard_Real, theUlast: Standard_Real): void;
  SearchOfTolerance(): Standard_Real;
}

  export declare class Extrema_PCFOfEPCOfELPCOfLocateExtPC_1 extends Extrema_PCFOfEPCOfELPCOfLocateExtPC {
    constructor();
  }

  export declare class Extrema_PCFOfEPCOfELPCOfLocateExtPC_2 extends Extrema_PCFOfEPCOfELPCOfLocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve);
  }

export declare class Extrema_EPCOfELPCOfLocateExtPC {
  Initialize_1(C: Adaptor3d_Curve, NbU: Standard_Integer, TolU: Standard_Real, TolF: Standard_Real): void;
  Initialize_2(C: Adaptor3d_Curve, NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real): void;
  Initialize_3(C: Adaptor3d_Curve): void;
  Initialize_4(NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv;
}

  export declare class Extrema_EPCOfELPCOfLocateExtPC_1 extends Extrema_EPCOfELPCOfLocateExtPC {
    constructor();
  }

  export declare class Extrema_EPCOfELPCOfLocateExtPC_2 extends Extrema_EPCOfELPCOfLocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, NbU: Standard_Integer, TolU: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_EPCOfELPCOfLocateExtPC_3 extends Extrema_EPCOfELPCOfLocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real);
  }

export declare class Extrema_ELPCOfLocateExtPC {
  Initialize(C: Adaptor3d_Curve, Uinf: Standard_Real, Usup: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  SquareDistance(N: Standard_Integer): Standard_Real;
  NbExt(): Standard_Integer;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv;
  TrimmedSquareDistances(dist1: Standard_Real, dist2: Standard_Real, P1: gp_Pnt, P2: gp_Pnt): void;
}

  export declare class Extrema_ELPCOfLocateExtPC_1 extends Extrema_ELPCOfLocateExtPC {
    constructor();
  }

  export declare class Extrema_ELPCOfLocateExtPC_2 extends Extrema_ELPCOfLocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, Uinf: Standard_Real, Usup: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_ELPCOfLocateExtPC_3 extends Extrema_ELPCOfLocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, TolF: Standard_Real);
  }

export declare class Extrema_LocateExtPC {
  Initialize(C: Adaptor3d_Curve, Umin: Standard_Real, Usup: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt, U0: Standard_Real): void;
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  IsMin(): Standard_Boolean;
  Point(): Extrema_POnCurv;
}

  export declare class Extrema_LocateExtPC_1 extends Extrema_LocateExtPC {
    constructor();
  }

  export declare class Extrema_LocateExtPC_2 extends Extrema_LocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, U0: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_LocateExtPC_3 extends Extrema_LocateExtPC {
    constructor(P: gp_Pnt, C: Adaptor3d_Curve, U0: Standard_Real, Umin: Standard_Real, Usup: Standard_Real, TolF: Standard_Real);
  }

export declare class GeomTools_SurfaceSet {
  constructor()
  Clear(): void;
  Add(S: any): Standard_Integer;
  Surface(I: Standard_Integer): any;
  Index(S: any): Standard_Integer;
  Dump(OS: Standard_OStream): void;
  Write(OS: Standard_OStream, theProgress: Message_ProgressRange): void;
  Read(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  PrintSurface(S: any, OS: Standard_OStream, compact: Standard_Boolean): void;
  ReadSurface(IS: Standard_IStream): any;
}

export declare class GeomTools_CurveSet {
  constructor()
  Clear(): void;
  Add(C: any): Standard_Integer;
  Curve(I: Standard_Integer): any;
  Index(C: any): Standard_Integer;
  Dump(OS: Standard_OStream): void;
  Write(OS: Standard_OStream, theProgress: Message_ProgressRange): void;
  Read(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  PrintCurve(C: any, OS: Standard_OStream, compact: Standard_Boolean): void;
  ReadCurve(IS: Standard_IStream): any;
}

export declare class GeomTools_Curve2dSet {
  constructor()
  Clear(): void;
  Add(C: any): Standard_Integer;
  Curve2d(I: Standard_Integer): any;
  Index(C: any): Standard_Integer;
  Dump(OS: Standard_OStream): void;
  Write(OS: Standard_OStream, theProgress: Message_ProgressRange): void;
  Read(IS: Standard_IStream, theProgress: Message_ProgressRange): void;
  PrintCurve2d(C: any, OS: Standard_OStream, compact: Standard_Boolean): void;
  ReadCurve2d(IS: Standard_IStream): any;
}

export declare class BndLib {
  constructor();
  Add_1(L: gp_Lin, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_2(L: gp_Lin2d, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_3(C: gp_Circ, Tol: Standard_Real, B: Bnd_Box): void;
  Add_4(C: gp_Circ, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_5(C: gp_Circ2d, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_6(C: gp_Circ2d, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_7(C: gp_Elips, Tol: Standard_Real, B: Bnd_Box): void;
  Add_8(C: gp_Elips, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_9(C: gp_Elips2d, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_10(C: gp_Elips2d, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_11(P: gp_Parab, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_12(P: gp_Parab2d, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_13(H: gp_Hypr, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_14(H: gp_Hypr2d, P1: Standard_Real, P2: Standard_Real, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_15(S: gp_Cylinder, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_16(S: gp_Cylinder, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_17(S: gp_Cone, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_18(S: gp_Cone, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_19(S: gp_Sphere, Tol: Standard_Real, B: Bnd_Box): void;
  Add_20(S: gp_Sphere, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  Add_21(P: gp_Torus, Tol: Standard_Real, B: Bnd_Box): void;
  Add_22(P: gp_Torus, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
}

export declare class BndLib_Add2dCurve {
  constructor();
  Add_1(C: Adaptor2d_Curve2d, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_2(C: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real, B: Bnd_Box2d): void;
  Add_3(C: any, Tol: Standard_Real, Box: Bnd_Box2d): void;
  Add_4(C: any, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real, B: Bnd_Box2d): void;
  AddOptimal(C: any, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real, B: Bnd_Box2d): void;
}

export declare class BndLib_Add3dCurve {
  constructor();
  Add_1(C: Adaptor3d_Curve, Tol: Standard_Real, B: Bnd_Box): void;
  Add_2(C: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  AddOptimal_1(C: Adaptor3d_Curve, Tol: Standard_Real, B: Bnd_Box): void;
  AddOptimal_2(C: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  AddGenCurv(C: Adaptor3d_Curve, UMin: Standard_Real, UMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
}

export declare class BndLib_AddSurface {
  constructor();
  Add_1(S: Adaptor3d_Surface, Tol: Standard_Real, B: Bnd_Box): void;
  Add_2(S: Adaptor3d_Surface, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  AddOptimal_1(S: Adaptor3d_Surface, Tol: Standard_Real, B: Bnd_Box): void;
  AddOptimal_2(S: Adaptor3d_Surface, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
  AddGenSurf(S: Adaptor3d_Surface, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, Tol: Standard_Real, B: Bnd_Box): void;
}

export declare class CPnts_MyGaussFunction extends math_Function {
  constructor()
  Init(F: CPnts_RealFunction, D: Standard_Address): void;
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
}

export declare class CPnts_MyRootFunction extends math_FunctionWithDerivative {
  constructor()
  Init_1(F: CPnts_RealFunction, D: Standard_Address, Order: Standard_Integer): void;
  Init_2(X0: Standard_Real, L: Standard_Real): void;
  Init_3(X0: Standard_Real, L: Standard_Real, Tol: Standard_Real): void;
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, Df: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, Df: Standard_Real): Standard_Boolean;
}

export declare class CPnts_AbscissaPoint {
  Length_1(C: Adaptor3d_Curve): Standard_Real;
  Length_2(C: Adaptor2d_Curve2d): Standard_Real;
  Length_3(C: Adaptor3d_Curve, Tol: Standard_Real): Standard_Real;
  Length_4(C: Adaptor2d_Curve2d, Tol: Standard_Real): Standard_Real;
  Length_5(C: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real): Standard_Real;
  Length_6(C: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real): Standard_Real;
  Length_7(C: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real): Standard_Real;
  Length_8(C: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real): Standard_Real;
  Init_1(C: Adaptor3d_Curve): void;
  Init_2(C: Adaptor2d_Curve2d): void;
  Init_3(C: Adaptor3d_Curve, Tol: Standard_Real): void;
  Init_4(C: Adaptor2d_Curve2d, Tol: Standard_Real): void;
  Init_5(C: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real): void;
  Init_6(C: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real): void;
  Init_7(C: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real): void;
  Init_8(C: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real): void;
  Perform_1(Abscissa: Standard_Real, U0: Standard_Real, Resolution: Standard_Real): void;
  Perform_2(Abscissa: Standard_Real, U0: Standard_Real, Ui: Standard_Real, Resolution: Standard_Real): void;
  AdvPerform(Abscissa: Standard_Real, U0: Standard_Real, Ui: Standard_Real, Resolution: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Parameter(): Standard_Real;
  SetParameter(P: Standard_Real): void;
}

  export declare class CPnts_AbscissaPoint_1 extends CPnts_AbscissaPoint {
    constructor();
  }

  export declare class CPnts_AbscissaPoint_2 extends CPnts_AbscissaPoint {
    constructor(C: Adaptor3d_Curve, Abscissa: Standard_Real, U0: Standard_Real, Resolution: Standard_Real);
  }

  export declare class CPnts_AbscissaPoint_3 extends CPnts_AbscissaPoint {
    constructor(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, U0: Standard_Real, Resolution: Standard_Real);
  }

  export declare class CPnts_AbscissaPoint_4 extends CPnts_AbscissaPoint {
    constructor(C: Adaptor3d_Curve, Abscissa: Standard_Real, U0: Standard_Real, Ui: Standard_Real, Resolution: Standard_Real);
  }

  export declare class CPnts_AbscissaPoint_5 extends CPnts_AbscissaPoint {
    constructor(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, U0: Standard_Real, Ui: Standard_Real, Resolution: Standard_Real);
  }

export declare class CPnts_UniformDeflection {
  Initialize_1(C: Adaptor3d_Curve, Deflection: Standard_Real, Resolution: Standard_Real, WithControl: Standard_Boolean): void;
  Initialize_2(C: Adaptor2d_Curve2d, Deflection: Standard_Real, Resolution: Standard_Real, WithControl: Standard_Boolean): void;
  Initialize_3(C: Adaptor3d_Curve, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, Resolution: Standard_Real, WithControl: Standard_Boolean): void;
  Initialize_4(C: Adaptor2d_Curve2d, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, Resolution: Standard_Real, WithControl: Standard_Boolean): void;
  IsAllDone(): Standard_Boolean;
  Next(): void;
  More(): Standard_Boolean;
  Value(): Standard_Real;
  Point(): gp_Pnt;
}

  export declare class CPnts_UniformDeflection_1 extends CPnts_UniformDeflection {
    constructor();
  }

  export declare class CPnts_UniformDeflection_2 extends CPnts_UniformDeflection {
    constructor(C: Adaptor3d_Curve, Deflection: Standard_Real, Resolution: Standard_Real, WithControl: Standard_Boolean);
  }

  export declare class CPnts_UniformDeflection_3 extends CPnts_UniformDeflection {
    constructor(C: Adaptor2d_Curve2d, Deflection: Standard_Real, Resolution: Standard_Real, WithControl: Standard_Boolean);
  }

  export declare class CPnts_UniformDeflection_4 extends CPnts_UniformDeflection {
    constructor(C: Adaptor3d_Curve, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, Resolution: Standard_Real, WithControl: Standard_Boolean);
  }

  export declare class CPnts_UniformDeflection_5 extends CPnts_UniformDeflection {
    constructor(C: Adaptor2d_Curve2d, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, Resolution: Standard_Real, WithControl: Standard_Boolean);
  }

export declare class Extrema_LocateExtCC {
  constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve, U0: Standard_Real, V0: Standard_Real)
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  Point(P1: Extrema_POnCurv, P2: Extrema_POnCurv): void;
}

export declare class Extrema_POnCurv2d {
  SetValues(U: Standard_Real, P: gp_Pnt2d): void;
  Value(): gp_Pnt2d;
  Parameter(): Standard_Real;
}

  export declare class Extrema_POnCurv2d_1 extends Extrema_POnCurv2d {
    constructor();
  }

  export declare class Extrema_POnCurv2d_2 extends Extrema_POnCurv2d {
    constructor(U: Standard_Real, P: gp_Pnt2d);
  }

export declare class Extrema_CCLocFOfLocECC extends math_FunctionSetWithDerivatives {
  SetCurve(theRank: Standard_Integer, C1: Adaptor3d_Curve): void;
  SetTolerance(theTol: Standard_Real): void;
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(UV: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(UV: math_Vector, DF: math_Matrix): Standard_Boolean;
  Values(UV: math_Vector, F: math_Vector, DF: math_Matrix): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv, P2: Extrema_POnCurv): void;
  CurvePtr(theRank: Standard_Integer): Standard_Address;
  Tolerance(): Standard_Real;
  SubIntervalInitialize(theUfirst: math_Vector, theUlast: math_Vector): void;
  SearchOfTolerance(C: Standard_Address): Standard_Real;
}

  export declare class Extrema_CCLocFOfLocECC_1 extends Extrema_CCLocFOfLocECC {
    constructor(thetol: Standard_Real);
  }

  export declare class Extrema_CCLocFOfLocECC_2 extends Extrema_CCLocFOfLocECC {
    constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve, thetol: Standard_Real);
  }

export declare class Extrema_CCLocFOfLocECC2d extends math_FunctionSetWithDerivatives {
  SetCurve(theRank: Standard_Integer, C1: Adaptor2d_Curve2d): void;
  SetTolerance(theTol: Standard_Real): void;
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(UV: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(UV: math_Vector, DF: math_Matrix): Standard_Boolean;
  Values(UV: math_Vector, F: math_Vector, DF: math_Matrix): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv2d, P2: Extrema_POnCurv2d): void;
  CurvePtr(theRank: Standard_Integer): Standard_Address;
  Tolerance(): Standard_Real;
  SubIntervalInitialize(theUfirst: math_Vector, theUlast: math_Vector): void;
  SearchOfTolerance(C: Standard_Address): Standard_Real;
}

  export declare class Extrema_CCLocFOfLocECC2d_1 extends Extrema_CCLocFOfLocECC2d {
    constructor(thetol: Standard_Real);
  }

  export declare class Extrema_CCLocFOfLocECC2d_2 extends Extrema_CCLocFOfLocECC2d {
    constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d, thetol: Standard_Real);
  }

export declare class Extrema_Curve2dTool {
  constructor();
  FirstParameter(C: Adaptor2d_Curve2d): Standard_Real;
  LastParameter(C: Adaptor2d_Curve2d): Standard_Real;
  Continuity(C: Adaptor2d_Curve2d): GeomAbs_Shape;
  NbIntervals(C: Adaptor2d_Curve2d, S: GeomAbs_Shape): Standard_Integer;
  Intervals(C: Adaptor2d_Curve2d, T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  DeflCurvIntervals(C: Adaptor2d_Curve2d): any;
  IsClosed(C: Adaptor2d_Curve2d): Standard_Boolean;
  IsPeriodic(C: Adaptor2d_Curve2d): Standard_Boolean;
  Period(C: Adaptor2d_Curve2d): Standard_Real;
  Value(C: Adaptor2d_Curve2d, U: Standard_Real): gp_Pnt2d;
  D0(C: Adaptor2d_Curve2d, U: Standard_Real, P: gp_Pnt2d): void;
  D1(C: Adaptor2d_Curve2d, U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(C: Adaptor2d_Curve2d, U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(C: Adaptor2d_Curve2d, U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(C: Adaptor2d_Curve2d, U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(C: Adaptor2d_Curve2d, R3d: Standard_Real): Standard_Real;
  GetType(C: Adaptor2d_Curve2d): GeomAbs_CurveType;
  Line(C: Adaptor2d_Curve2d): gp_Lin2d;
  Circle(C: Adaptor2d_Curve2d): gp_Circ2d;
  Ellipse(C: Adaptor2d_Curve2d): gp_Elips2d;
  Hyperbola(C: Adaptor2d_Curve2d): gp_Hypr2d;
  Parabola(C: Adaptor2d_Curve2d): gp_Parab2d;
  Degree(C: Adaptor2d_Curve2d): Standard_Integer;
  IsRational(C: Adaptor2d_Curve2d): Standard_Boolean;
  NbPoles(C: Adaptor2d_Curve2d): Standard_Integer;
  NbKnots(C: Adaptor2d_Curve2d): Standard_Integer;
  Bezier(C: Adaptor2d_Curve2d): any;
  BSpline(C: Adaptor2d_Curve2d): any;
}

export declare class Extrema_CurveTool {
  constructor();
  FirstParameter(C: Adaptor3d_Curve): Standard_Real;
  LastParameter(C: Adaptor3d_Curve): Standard_Real;
  Continuity(C: Adaptor3d_Curve): GeomAbs_Shape;
  NbIntervals(C: Adaptor3d_Curve, S: GeomAbs_Shape): Standard_Integer;
  Intervals(C: Adaptor3d_Curve, T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  DeflCurvIntervals(C: Adaptor3d_Curve): any;
  IsPeriodic(C: Adaptor3d_Curve): Standard_Boolean;
  Period(C: Adaptor3d_Curve): Standard_Real;
  Resolution(C: Adaptor3d_Curve, R3d: Standard_Real): Standard_Real;
  GetType(C: Adaptor3d_Curve): GeomAbs_CurveType;
  Value(C: Adaptor3d_Curve, U: Standard_Real): gp_Pnt;
  D0(C: Adaptor3d_Curve, U: Standard_Real, P: gp_Pnt): void;
  D1(C: Adaptor3d_Curve, U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(C: Adaptor3d_Curve, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(C: Adaptor3d_Curve, U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(C: Adaptor3d_Curve, U: Standard_Real, N: Standard_Integer): gp_Vec;
  Line(C: Adaptor3d_Curve): gp_Lin;
  Circle(C: Adaptor3d_Curve): gp_Circ;
  Ellipse(C: Adaptor3d_Curve): gp_Elips;
  Hyperbola(C: Adaptor3d_Curve): gp_Hypr;
  Parabola(C: Adaptor3d_Curve): gp_Parab;
  Degree(C: Adaptor3d_Curve): Standard_Integer;
  IsRational(C: Adaptor3d_Curve): Standard_Boolean;
  NbPoles(C: Adaptor3d_Curve): Standard_Integer;
  NbKnots(C: Adaptor3d_Curve): Standard_Integer;
  Bezier(C: Adaptor3d_Curve): any;
  BSpline(C: Adaptor3d_Curve): any;
}

export declare class Extrema_ECC2d {
  SetParams(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real): void;
  SetTolerance(Tol: Standard_Real): void;
  SetSingleSolutionFlag(theSingleSolutionFlag: Standard_Boolean): void;
  GetSingleSolutionFlag(): Standard_Boolean;
  Perform(): void;
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv2d, P2: Extrema_POnCurv2d): void;
}

  export declare class Extrema_ECC2d_1 extends Extrema_ECC2d {
    constructor();
  }

  export declare class Extrema_ECC2d_2 extends Extrema_ECC2d {
    constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d);
  }

  export declare class Extrema_ECC2d_3 extends Extrema_ECC2d {
    constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real);
  }

export declare class Extrema_ExtPElC2d {
  Perform_1(P: gp_Pnt2d, L: gp_Lin2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  Perform_2(P: gp_Pnt2d, C: gp_Circ2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  Perform_3(P: gp_Pnt2d, C: gp_Elips2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  Perform_4(P: gp_Pnt2d, C: gp_Hypr2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  Perform_5(P: gp_Pnt2d, C: gp_Parab2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv2d;
}

  export declare class Extrema_ExtPElC2d_1 extends Extrema_ExtPElC2d {
    constructor();
  }

  export declare class Extrema_ExtPElC2d_2 extends Extrema_ExtPElC2d {
    constructor(P: gp_Pnt2d, C: gp_Lin2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

  export declare class Extrema_ExtPElC2d_3 extends Extrema_ExtPElC2d {
    constructor(P: gp_Pnt2d, C: gp_Circ2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

  export declare class Extrema_ExtPElC2d_4 extends Extrema_ExtPElC2d {
    constructor(P: gp_Pnt2d, C: gp_Elips2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

  export declare class Extrema_ExtPElC2d_5 extends Extrema_ExtPElC2d {
    constructor(P: gp_Pnt2d, C: gp_Hypr2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

  export declare class Extrema_ExtPElC2d_6 extends Extrema_ExtPElC2d {
    constructor(P: gp_Pnt2d, C: gp_Parab2d, Tol: Standard_Real, Uinf: Standard_Real, Usup: Standard_Real);
  }

export declare class Extrema_PCFOfEPCOfELPCOfLocateExtPC2d extends math_FunctionWithDerivative {
  Initialize(C: Adaptor2d_Curve2d): void;
  SetPoint(P: gp_Pnt2d): void;
  Value(U: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(U: Standard_Real, DF: Standard_Real): Standard_Boolean;
  Values(U: Standard_Real, F: Standard_Real, DF: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv2d;
  SubIntervalInitialize(theUfirst: Standard_Real, theUlast: Standard_Real): void;
  SearchOfTolerance(): Standard_Real;
}

  export declare class Extrema_PCFOfEPCOfELPCOfLocateExtPC2d_1 extends Extrema_PCFOfEPCOfELPCOfLocateExtPC2d {
    constructor();
  }

  export declare class Extrema_PCFOfEPCOfELPCOfLocateExtPC2d_2 extends Extrema_PCFOfEPCOfELPCOfLocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d);
  }

export declare class Extrema_EPCOfELPCOfLocateExtPC2d {
  Initialize_1(C: Adaptor2d_Curve2d, NbU: Standard_Integer, TolU: Standard_Real, TolF: Standard_Real): void;
  Initialize_2(C: Adaptor2d_Curve2d, NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real): void;
  Initialize_3(C: Adaptor2d_Curve2d): void;
  Initialize_4(NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt2d): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv2d;
}

  export declare class Extrema_EPCOfELPCOfLocateExtPC2d_1 extends Extrema_EPCOfELPCOfLocateExtPC2d {
    constructor();
  }

  export declare class Extrema_EPCOfELPCOfLocateExtPC2d_2 extends Extrema_EPCOfELPCOfLocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, NbU: Standard_Integer, TolU: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_EPCOfELPCOfLocateExtPC2d_3 extends Extrema_EPCOfELPCOfLocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real);
  }

export declare class Extrema_ELPCOfLocateExtPC2d {
  Initialize(C: Adaptor2d_Curve2d, Uinf: Standard_Real, Usup: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt2d): void;
  IsDone(): Standard_Boolean;
  SquareDistance(N: Standard_Integer): Standard_Real;
  NbExt(): Standard_Integer;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv2d;
  TrimmedSquareDistances(dist1: Standard_Real, dist2: Standard_Real, P1: gp_Pnt2d, P2: gp_Pnt2d): void;
}

  export declare class Extrema_ELPCOfLocateExtPC2d_1 extends Extrema_ELPCOfLocateExtPC2d {
    constructor();
  }

  export declare class Extrema_ELPCOfLocateExtPC2d_2 extends Extrema_ELPCOfLocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, Uinf: Standard_Real, Usup: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_ELPCOfLocateExtPC2d_3 extends Extrema_ELPCOfLocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, TolF: Standard_Real);
  }

export declare class Extrema_PCFOfEPCOfExtPC2d extends math_FunctionWithDerivative {
  Initialize(C: Adaptor2d_Curve2d): void;
  SetPoint(P: gp_Pnt2d): void;
  Value(U: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(U: Standard_Real, DF: Standard_Real): Standard_Boolean;
  Values(U: Standard_Real, F: Standard_Real, DF: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv2d;
  SubIntervalInitialize(theUfirst: Standard_Real, theUlast: Standard_Real): void;
  SearchOfTolerance(): Standard_Real;
}

  export declare class Extrema_PCFOfEPCOfExtPC2d_1 extends Extrema_PCFOfEPCOfExtPC2d {
    constructor();
  }

  export declare class Extrema_PCFOfEPCOfExtPC2d_2 extends Extrema_PCFOfEPCOfExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d);
  }

export declare class Extrema_EPCOfExtPC2d {
  Initialize_1(C: Adaptor2d_Curve2d, NbU: Standard_Integer, TolU: Standard_Real, TolF: Standard_Real): void;
  Initialize_2(C: Adaptor2d_Curve2d, NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real): void;
  Initialize_3(C: Adaptor2d_Curve2d): void;
  Initialize_4(NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt2d): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv2d;
}

  export declare class Extrema_EPCOfExtPC2d_1 extends Extrema_EPCOfExtPC2d {
    constructor();
  }

  export declare class Extrema_EPCOfExtPC2d_2 extends Extrema_EPCOfExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, NbU: Standard_Integer, TolU: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_EPCOfExtPC2d_3 extends Extrema_EPCOfExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, NbU: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real, TolF: Standard_Real);
  }

export declare class Extrema_ExtCC2d {
  Initialize(C2: Adaptor2d_Curve2d, V1: Standard_Real, V2: Standard_Real, TolC1: Standard_Real, TolC2: Standard_Real): void;
  Perform(C1: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  IsParallel(): Standard_Boolean;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv2d, P2: Extrema_POnCurv2d): void;
  TrimmedSquareDistances(dist11: Standard_Real, distP12: Standard_Real, distP21: Standard_Real, distP22: Standard_Real, P11: gp_Pnt2d, P12: gp_Pnt2d, P21: gp_Pnt2d, P22: gp_Pnt2d): void;
  SetSingleSolutionFlag(theSingleSolutionFlag: Standard_Boolean): void;
  GetSingleSolutionFlag(): Standard_Boolean;
}

  export declare class Extrema_ExtCC2d_1 extends Extrema_ExtCC2d {
    constructor();
  }

  export declare class Extrema_ExtCC2d_2 extends Extrema_ExtCC2d {
    constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d, TolC1: Standard_Real, TolC2: Standard_Real);
  }

  export declare class Extrema_ExtCC2d_3 extends Extrema_ExtCC2d {
    constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, TolC1: Standard_Real, TolC2: Standard_Real);
  }

export declare class Extrema_ExtElC {
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv, P2: Extrema_POnCurv): void;
}

  export declare class Extrema_ExtElC_1 extends Extrema_ExtElC {
    constructor();
  }

  export declare class Extrema_ExtElC_2 extends Extrema_ExtElC {
    constructor(C1: gp_Lin, C2: gp_Lin, AngTol: Standard_Real);
  }

  export declare class Extrema_ExtElC_3 extends Extrema_ExtElC {
    constructor(C1: gp_Lin, C2: gp_Circ, Tol: Standard_Real);
  }

  export declare class Extrema_ExtElC_4 extends Extrema_ExtElC {
    constructor(C1: gp_Lin, C2: gp_Elips);
  }

  export declare class Extrema_ExtElC_5 extends Extrema_ExtElC {
    constructor(C1: gp_Lin, C2: gp_Hypr);
  }

  export declare class Extrema_ExtElC_6 extends Extrema_ExtElC {
    constructor(C1: gp_Lin, C2: gp_Parab);
  }

  export declare class Extrema_ExtElC_7 extends Extrema_ExtElC {
    constructor(C1: gp_Circ, C2: gp_Circ);
  }

export declare class Extrema_ExtElC2d {
  IsDone(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Points(N: Standard_Integer, P1: Extrema_POnCurv2d, P2: Extrema_POnCurv2d): void;
}

  export declare class Extrema_ExtElC2d_1 extends Extrema_ExtElC2d {
    constructor();
  }

  export declare class Extrema_ExtElC2d_2 extends Extrema_ExtElC2d {
    constructor(C1: gp_Lin2d, C2: gp_Lin2d, AngTol: Standard_Real);
  }

  export declare class Extrema_ExtElC2d_3 extends Extrema_ExtElC2d {
    constructor(C1: gp_Lin2d, C2: gp_Circ2d, Tol: Standard_Real);
  }

  export declare class Extrema_ExtElC2d_4 extends Extrema_ExtElC2d {
    constructor(C1: gp_Lin2d, C2: gp_Elips2d);
  }

  export declare class Extrema_ExtElC2d_5 extends Extrema_ExtElC2d {
    constructor(C1: gp_Lin2d, C2: gp_Hypr2d);
  }

  export declare class Extrema_ExtElC2d_6 extends Extrema_ExtElC2d {
    constructor(C1: gp_Lin2d, C2: gp_Parab2d);
  }

  export declare class Extrema_ExtElC2d_7 extends Extrema_ExtElC2d {
    constructor(C1: gp_Circ2d, C2: gp_Circ2d);
  }

  export declare class Extrema_ExtElC2d_8 extends Extrema_ExtElC2d {
    constructor(C1: gp_Circ2d, C2: gp_Elips2d);
  }

  export declare class Extrema_ExtElC2d_9 extends Extrema_ExtElC2d {
    constructor(C1: gp_Circ2d, C2: gp_Hypr2d);
  }

  export declare class Extrema_ExtElC2d_10 extends Extrema_ExtElC2d {
    constructor(C1: gp_Circ2d, C2: gp_Parab2d);
  }

export declare class Extrema_ExtPC2d {
  Initialize(C: Adaptor2d_Curve2d, Uinf: Standard_Real, Usup: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt2d): void;
  IsDone(): Standard_Boolean;
  SquareDistance(N: Standard_Integer): Standard_Real;
  NbExt(): Standard_Integer;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv2d;
  TrimmedSquareDistances(dist1: Standard_Real, dist2: Standard_Real, P1: gp_Pnt2d, P2: gp_Pnt2d): void;
}

  export declare class Extrema_ExtPC2d_1 extends Extrema_ExtPC2d {
    constructor();
  }

  export declare class Extrema_ExtPC2d_2 extends Extrema_ExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, Uinf: Standard_Real, Usup: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_ExtPC2d_3 extends Extrema_ExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, TolF: Standard_Real);
  }

export declare class Extrema_ExtPExtS extends Standard_Transient {
  Initialize(S: any, Uinf: Standard_Real, Usup: Standard_Real, Vinf: Standard_Real, Vsup: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Point(N: Standard_Integer): Extrema_POnSurf;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Extrema_ExtPExtS_1 extends Extrema_ExtPExtS {
    constructor();
  }

  export declare class Extrema_ExtPExtS_2 extends Extrema_ExtPExtS {
    constructor(P: gp_Pnt, S: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, TolU: Standard_Real, TolV: Standard_Real);
  }

  export declare class Extrema_ExtPExtS_3 extends Extrema_ExtPExtS {
    constructor(P: gp_Pnt, S: any, TolU: Standard_Real, TolV: Standard_Real);
  }

export declare class Extrema_ExtPRevS extends Standard_Transient {
  Initialize(S: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, TolU: Standard_Real, TolV: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  Point(N: Standard_Integer): Extrema_POnSurf;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class Extrema_ExtPRevS_1 extends Extrema_ExtPRevS {
    constructor();
  }

  export declare class Extrema_ExtPRevS_2 extends Extrema_ExtPRevS {
    constructor(P: gp_Pnt, S: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, TolU: Standard_Real, TolV: Standard_Real);
  }

  export declare class Extrema_ExtPRevS_3 extends Extrema_ExtPRevS {
    constructor(P: gp_Pnt, S: any, TolU: Standard_Real, TolV: Standard_Real);
  }

export declare class Extrema_FuncExtCS extends math_FunctionSetWithDerivatives {
  Initialize(C: Adaptor3d_Curve, S: Adaptor3d_Surface): void;
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(UV: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(UV: math_Vector, DF: math_Matrix): Standard_Boolean;
  Values(UV: math_Vector, F: math_Vector, DF: math_Matrix): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  PointOnCurve(N: Standard_Integer): Extrema_POnCurv;
  PointOnSurface(N: Standard_Integer): Extrema_POnSurf;
}

  export declare class Extrema_FuncExtCS_1 extends Extrema_FuncExtCS {
    constructor();
  }

  export declare class Extrema_FuncExtCS_2 extends Extrema_FuncExtCS {
    constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface);
  }

export declare class Extrema_FuncExtSS extends math_FunctionSetWithDerivatives {
  Initialize(S1: Adaptor3d_Surface, S2: Adaptor3d_Surface): void;
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(UV: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(UV: math_Vector, DF: math_Matrix): Standard_Boolean;
  Values(UV: math_Vector, F: math_Vector, DF: math_Matrix): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  PointOnS1(N: Standard_Integer): Extrema_POnSurf;
  PointOnS2(N: Standard_Integer): Extrema_POnSurf;
}

  export declare class Extrema_FuncExtSS_1 extends Extrema_FuncExtSS {
    constructor();
  }

  export declare class Extrema_FuncExtSS_2 extends Extrema_FuncExtSS {
    constructor(S1: Adaptor3d_Surface, S2: Adaptor3d_Surface);
  }

export declare class Extrema_FuncPSDist extends math_MultipleVarFunctionWithGradient {
  constructor(theS: Adaptor3d_Surface, theP: gp_Pnt)
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values(X: math_Vector, F: Standard_Real, G: math_Vector): Standard_Boolean;
}

export declare class Extrema_GenExtCS {
  Initialize_1(S: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, Tol2: Standard_Real): void;
  Initialize_2(S: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Tol2: Standard_Real): void;
  Perform_1(C: Adaptor3d_Curve, NbT: Standard_Integer, Tol1: Standard_Real): void;
  Perform_2(C: Adaptor3d_Curve, NbT: Standard_Integer, tmin: Standard_Real, tsup: Standard_Real, Tol1: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  PointOnCurve(N: Standard_Integer): Extrema_POnCurv;
  PointOnSurface(N: Standard_Integer): Extrema_POnSurf;
}

  export declare class Extrema_GenExtCS_1 extends Extrema_GenExtCS {
    constructor();
  }

  export declare class Extrema_GenExtCS_2 extends Extrema_GenExtCS {
    constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface, NbT: Standard_Integer, NbU: Standard_Integer, NbV: Standard_Integer, Tol1: Standard_Real, Tol2: Standard_Real);
  }

  export declare class Extrema_GenExtCS_3 extends Extrema_GenExtCS {
    constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface, NbT: Standard_Integer, NbU: Standard_Integer, NbV: Standard_Integer, tmin: Standard_Real, tsup: Standard_Real, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Tol1: Standard_Real, Tol2: Standard_Real);
  }

export declare class Extrema_GenExtSS {
  Initialize_1(S2: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, Tol2: Standard_Real): void;
  Initialize_2(S2: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, U2min: Standard_Real, U2sup: Standard_Real, V2min: Standard_Real, V2sup: Standard_Real, Tol2: Standard_Real): void;
  Perform_1(S1: Adaptor3d_Surface, Tol1: Standard_Real): void;
  Perform_2(S1: Adaptor3d_Surface, U1min: Standard_Real, U1sup: Standard_Real, V1min: Standard_Real, V1sup: Standard_Real, Tol1: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  PointOnS1(N: Standard_Integer): Extrema_POnSurf;
  PointOnS2(N: Standard_Integer): Extrema_POnSurf;
}

  export declare class Extrema_GenExtSS_1 extends Extrema_GenExtSS {
    constructor();
  }

  export declare class Extrema_GenExtSS_2 extends Extrema_GenExtSS {
    constructor(S1: Adaptor3d_Surface, S2: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, Tol1: Standard_Real, Tol2: Standard_Real);
  }

  export declare class Extrema_GenExtSS_3 extends Extrema_GenExtSS {
    constructor(S1: Adaptor3d_Surface, S2: Adaptor3d_Surface, NbU: Standard_Integer, NbV: Standard_Integer, U1min: Standard_Real, U1sup: Standard_Real, V1min: Standard_Real, V1sup: Standard_Real, U2min: Standard_Real, U2sup: Standard_Real, V2min: Standard_Real, V2sup: Standard_Real, Tol1: Standard_Real, Tol2: Standard_Real);
  }

export declare class Extrema_GenLocateExtCS {
  Perform(C: Adaptor3d_Curve, S: Adaptor3d_Surface, T: Standard_Real, U: Standard_Real, V: Standard_Real, Tol1: Standard_Real, Tol2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  PointOnCurve(): Extrema_POnCurv;
  PointOnSurface(): Extrema_POnSurf;
}

  export declare class Extrema_GenLocateExtCS_1 extends Extrema_GenLocateExtCS {
    constructor();
  }

  export declare class Extrema_GenLocateExtCS_2 extends Extrema_GenLocateExtCS {
    constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface, T: Standard_Real, U: Standard_Real, V: Standard_Real, Tol1: Standard_Real, Tol2: Standard_Real);
  }

export declare class Extrema_GenLocateExtPS {
  constructor(theS: Adaptor3d_Surface, theTolU: Standard_Real, theTolV: Standard_Real)
  Perform(theP: gp_Pnt, theU0: Standard_Real, theV0: Standard_Real, isDistanceCriteria: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  Point(): Extrema_POnSurf;
}

export declare class Extrema_GenLocateExtSS {
  Perform(S1: Adaptor3d_Surface, S2: Adaptor3d_Surface, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, Tol1: Standard_Real, Tol2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  PointOnS1(): Extrema_POnSurf;
  PointOnS2(): Extrema_POnSurf;
}

  export declare class Extrema_GenLocateExtSS_1 extends Extrema_GenLocateExtSS {
    constructor();
  }

  export declare class Extrema_GenLocateExtSS_2 extends Extrema_GenLocateExtSS {
    constructor(S1: Adaptor3d_Surface, S2: Adaptor3d_Surface, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real, Tol1: Standard_Real, Tol2: Standard_Real);
  }

export declare class Extrema_GlobOptFuncCCC0 extends math_MultipleVarFunction {
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
}

  export declare class Extrema_GlobOptFuncCCC0_1 extends Extrema_GlobOptFuncCCC0 {
    constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve);
  }

  export declare class Extrema_GlobOptFuncCCC0_2 extends Extrema_GlobOptFuncCCC0 {
    constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d);
  }

export declare class Extrema_GlobOptFuncCCC1 extends math_MultipleVarFunctionWithGradient {
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values(X: math_Vector, F: Standard_Real, G: math_Vector): Standard_Boolean;
}

  export declare class Extrema_GlobOptFuncCCC1_1 extends Extrema_GlobOptFuncCCC1 {
    constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve);
  }

  export declare class Extrema_GlobOptFuncCCC1_2 extends Extrema_GlobOptFuncCCC1 {
    constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d);
  }

export declare class Extrema_GlobOptFuncCCC2 extends math_MultipleVarFunctionWithHessian {
  NbVariables(): Standard_Integer;
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  Gradient(X: math_Vector, G: math_Vector): Standard_Boolean;
  Values_1(X: math_Vector, F: Standard_Real, G: math_Vector): Standard_Boolean;
  Values_2(X: math_Vector, F: Standard_Real, G: math_Vector, H: math_Matrix): Standard_Boolean;
}

  export declare class Extrema_GlobOptFuncCCC2_1 extends Extrema_GlobOptFuncCCC2 {
    constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve);
  }

  export declare class Extrema_GlobOptFuncCCC2_2 extends Extrema_GlobOptFuncCCC2 {
    constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d);
  }

export declare class Extrema_GlobOptFuncCQuadric extends math_MultipleVarFunction {
  LoadQuad(S: Adaptor3d_Surface, theUf: Standard_Real, theUl: Standard_Real, theVf: Standard_Real, theVl: Standard_Real): void;
  NbVariables(): Standard_Integer;
  Value(theX: math_Vector, theF: Standard_Real): Standard_Boolean;
  QuadricParameters(theCT: math_Vector, theUV: math_Vector): void;
}

  export declare class Extrema_GlobOptFuncCQuadric_1 extends Extrema_GlobOptFuncCQuadric {
    constructor(C: Adaptor3d_Curve);
  }

  export declare class Extrema_GlobOptFuncCQuadric_2 extends Extrema_GlobOptFuncCQuadric {
    constructor(C: Adaptor3d_Curve, theTf: Standard_Real, theTl: Standard_Real);
  }

  export declare class Extrema_GlobOptFuncCQuadric_3 extends Extrema_GlobOptFuncCQuadric {
    constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface);
  }

export declare class Extrema_GlobOptFuncCS extends math_MultipleVarFunctionWithHessian {
  constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface)
  NbVariables(): Standard_Integer;
  Value(theX: math_Vector, theF: Standard_Real): Standard_Boolean;
  Gradient(theX: math_Vector, theG: math_Vector): Standard_Boolean;
  Values_1(theX: math_Vector, theF: Standard_Real, theG: math_Vector): Standard_Boolean;
  Values_2(theX: math_Vector, theF: Standard_Real, theG: math_Vector, theH: math_Matrix): Standard_Boolean;
}

export declare class Extrema_GlobOptFuncConicS extends math_MultipleVarFunction {
  LoadConic(S: Adaptor3d_Curve, theTf: Standard_Real, theTl: Standard_Real): void;
  NbVariables(): Standard_Integer;
  Value(theX: math_Vector, theF: Standard_Real): Standard_Boolean;
  ConicParameter(theUV: math_Vector): Standard_Real;
}

  export declare class Extrema_GlobOptFuncConicS_1 extends Extrema_GlobOptFuncConicS {
    constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface);
  }

  export declare class Extrema_GlobOptFuncConicS_2 extends Extrema_GlobOptFuncConicS {
    constructor(S: Adaptor3d_Surface);
  }

  export declare class Extrema_GlobOptFuncConicS_3 extends Extrema_GlobOptFuncConicS {
    constructor(S: Adaptor3d_Surface, theUf: Standard_Real, theUl: Standard_Real, theVf: Standard_Real, theVl: Standard_Real);
  }

export declare class Extrema_LocECC {
  constructor(C1: Adaptor3d_Curve, C2: Adaptor3d_Curve, U0: Standard_Real, V0: Standard_Real, TolU: Standard_Real, TolV: Standard_Real)
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  Point(P1: Extrema_POnCurv, P2: Extrema_POnCurv): void;
}

export declare class Extrema_LocECC2d {
  constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d, U0: Standard_Real, V0: Standard_Real, TolU: Standard_Real, TolV: Standard_Real)
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  Point(P1: Extrema_POnCurv2d, P2: Extrema_POnCurv2d): void;
}

export declare class Extrema_PCLocFOfLocEPCOfLocateExtPC2d extends math_FunctionWithDerivative {
  Initialize(C: Adaptor2d_Curve2d): void;
  SetPoint(P: gp_Pnt2d): void;
  Value(U: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(U: Standard_Real, DF: Standard_Real): Standard_Boolean;
  Values(U: Standard_Real, F: Standard_Real, DF: Standard_Real): Standard_Boolean;
  GetStateNumber(): Standard_Integer;
  NbExt(): Standard_Integer;
  SquareDistance(N: Standard_Integer): Standard_Real;
  IsMin(N: Standard_Integer): Standard_Boolean;
  Point(N: Standard_Integer): Extrema_POnCurv2d;
  SubIntervalInitialize(theUfirst: Standard_Real, theUlast: Standard_Real): void;
  SearchOfTolerance(): Standard_Real;
}

  export declare class Extrema_PCLocFOfLocEPCOfLocateExtPC2d_1 extends Extrema_PCLocFOfLocEPCOfLocateExtPC2d {
    constructor();
  }

  export declare class Extrema_PCLocFOfLocEPCOfLocateExtPC2d_2 extends Extrema_PCLocFOfLocEPCOfLocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d);
  }

export declare class Extrema_LocEPCOfLocateExtPC2d {
  Initialize(C: Adaptor2d_Curve2d, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real): void;
  Perform(P: gp_Pnt2d, U0: Standard_Real): void;
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  IsMin(): Standard_Boolean;
  Point(): Extrema_POnCurv2d;
}

  export declare class Extrema_LocEPCOfLocateExtPC2d_1 extends Extrema_LocEPCOfLocateExtPC2d {
    constructor();
  }

  export declare class Extrema_LocEPCOfLocateExtPC2d_2 extends Extrema_LocEPCOfLocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, U0: Standard_Real, TolU: Standard_Real);
  }

  export declare class Extrema_LocEPCOfLocateExtPC2d_3 extends Extrema_LocEPCOfLocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, U0: Standard_Real, Umin: Standard_Real, Usup: Standard_Real, TolU: Standard_Real);
  }

export declare class Extrema_LocateExtCC2d {
  constructor(C1: Adaptor2d_Curve2d, C2: Adaptor2d_Curve2d, U0: Standard_Real, V0: Standard_Real)
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  Point(P1: Extrema_POnCurv2d, P2: Extrema_POnCurv2d): void;
}

export declare class Extrema_LocateExtPC2d {
  Initialize(C: Adaptor2d_Curve2d, Umin: Standard_Real, Usup: Standard_Real, TolF: Standard_Real): void;
  Perform(P: gp_Pnt2d, U0: Standard_Real): void;
  IsDone(): Standard_Boolean;
  SquareDistance(): Standard_Real;
  IsMin(): Standard_Boolean;
  Point(): Extrema_POnCurv2d;
}

  export declare class Extrema_LocateExtPC2d_1 extends Extrema_LocateExtPC2d {
    constructor();
  }

  export declare class Extrema_LocateExtPC2d_2 extends Extrema_LocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, U0: Standard_Real, TolF: Standard_Real);
  }

  export declare class Extrema_LocateExtPC2d_3 extends Extrema_LocateExtPC2d {
    constructor(P: gp_Pnt2d, C: Adaptor2d_Curve2d, U0: Standard_Real, Umin: Standard_Real, Usup: Standard_Real, TolF: Standard_Real);
  }

export declare class FEmTool_Assembly {
  constructor(Dependence: TColStd_Array2OfInteger, Table: any)
  NullifyMatrix(): void;
  AddMatrix(Element: Standard_Integer, Dimension1: Standard_Integer, Dimension2: Standard_Integer, Mat: math_Matrix): void;
  NullifyVector(): void;
  AddVector(Element: Standard_Integer, Dimension: Standard_Integer, Vec: math_Vector): void;
  ResetConstraint(): void;
  NullifyConstraint(): void;
  AddConstraint(IndexofConstraint: Standard_Integer, Element: Standard_Integer, Dimension: Standard_Integer, LinearForm: math_Vector, Value: Standard_Real): void;
  Solve(): Standard_Boolean;
  Solution(Solution: math_Vector): void;
  NbGlobVar(): Standard_Integer;
  GetAssemblyTable(AssTable: any): void;
}

export declare class FEmTool_Curve extends Standard_Transient {
  constructor(Dimension: Standard_Integer, NbElements: Standard_Integer, TheBase: any, Tolerance: Standard_Real)
  Knots(): TColStd_Array1OfReal;
  SetElement(IndexOfElement: Standard_Integer, Coeffs: TColStd_Array2OfReal): void;
  D0(U: Standard_Real, Pnt: TColStd_Array1OfReal): void;
  D1(U: Standard_Real, Vec: TColStd_Array1OfReal): void;
  D2(U: Standard_Real, Vec: TColStd_Array1OfReal): void;
  Length(FirstU: Standard_Real, LastU: Standard_Real, Length: Standard_Real): void;
  GetElement(IndexOfElement: Standard_Integer, Coeffs: TColStd_Array2OfReal): void;
  GetPolynom(Coeffs: TColStd_Array1OfReal): void;
  NbElements(): Standard_Integer;
  Dimension(): Standard_Integer;
  Base(): any;
  Degree(IndexOfElement: Standard_Integer): Standard_Integer;
  SetDegree(IndexOfElement: Standard_Integer, Degree: Standard_Integer): void;
  ReduceDegree(IndexOfElement: Standard_Integer, Tol: Standard_Real, NewDegree: Standard_Integer, MaxError: Standard_Real): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class FEmTool_ElementaryCriterion extends Standard_Transient {
  Set_1(Coeff: any): void;
  Set_2(FirstKnot: Standard_Real, LastKnot: Standard_Real): void;
  DependenceTable(): any;
  Value(): Standard_Real;
  Hessian(Dim1: Standard_Integer, Dim2: Standard_Integer, H: math_Matrix): void;
  Gradient(Dim: Standard_Integer, G: math_Vector): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class FEmTool_ElementsOfRefMatrix extends math_FunctionSet {
  constructor(TheBase: any, DerOrder: Standard_Integer)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
}

export declare class FEmTool_LinearFlexion extends FEmTool_ElementaryCriterion {
  constructor(WorkDegree: Standard_Integer, ConstraintOrder: GeomAbs_Shape)
  DependenceTable(): any;
  Value(): Standard_Real;
  Hessian(Dimension1: Standard_Integer, Dimension2: Standard_Integer, H: math_Matrix): void;
  Gradient(Dimension: Standard_Integer, G: math_Vector): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class FEmTool_LinearJerk extends FEmTool_ElementaryCriterion {
  constructor(WorkDegree: Standard_Integer, ConstraintOrder: GeomAbs_Shape)
  DependenceTable(): any;
  Value(): Standard_Real;
  Hessian(Dimension1: Standard_Integer, Dimension2: Standard_Integer, H: math_Matrix): void;
  Gradient(Dimension: Standard_Integer, G: math_Vector): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class FEmTool_LinearTension extends FEmTool_ElementaryCriterion {
  constructor(WorkDegree: Standard_Integer, ConstraintOrder: GeomAbs_Shape)
  DependenceTable(): any;
  Value(): Standard_Real;
  Hessian(Dimension1: Standard_Integer, Dimension2: Standard_Integer, H: math_Matrix): void;
  Gradient(Dimension: Standard_Integer, G: math_Vector): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class FEmTool_SparseMatrix extends Standard_Transient {
  Init(Value: Standard_Real): void;
  ChangeValue(I: Standard_Integer, J: Standard_Integer): Standard_Real;
  Decompose(): Standard_Boolean;
  Solve_1(B: math_Vector, X: math_Vector): void;
  Prepare(): Standard_Boolean;
  Solve_2(B: math_Vector, Init: math_Vector, X: math_Vector, Residual: math_Vector, Tolerance: Standard_Real, NbIterations: Standard_Integer): void;
  Multiplied(X: math_Vector, MX: math_Vector): void;
  RowNumber(): Standard_Integer;
  ColNumber(): Standard_Integer;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class FEmTool_ProfileMatrix extends FEmTool_SparseMatrix {
  constructor(FirstIndexes: TColStd_Array1OfInteger)
  Init(Value: Standard_Real): void;
  ChangeValue(I: Standard_Integer, J: Standard_Integer): Standard_Real;
  Decompose(): Standard_Boolean;
  Solve_1(B: math_Vector, X: math_Vector): void;
  Prepare(): Standard_Boolean;
  Solve_2(B: math_Vector, Init: math_Vector, X: math_Vector, Residual: math_Vector, Tolerance: Standard_Real, NbIterations: Standard_Integer): void;
  Multiplied(X: math_Vector, MX: math_Vector): void;
  RowNumber(): Standard_Integer;
  ColNumber(): Standard_Integer;
  IsInProfile(i: Standard_Integer, j: Standard_Integer): Standard_Boolean;
  OutM(): void;
  OutS(): void;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

export declare class Geom2dConvert_CompCurveToBSplineCurve {
  Add_1(NewCurve: any, Tolerance: Standard_Real, After: Standard_Boolean): Standard_Boolean;
  BSplineCurve(): any;
  Clear(): void;
}

  export declare class Geom2dConvert_CompCurveToBSplineCurve_1 extends Geom2dConvert_CompCurveToBSplineCurve {
    constructor(Parameterisation: Convert_ParameterisationType);
  }

  export declare class Geom2dConvert_CompCurveToBSplineCurve_2 extends Geom2dConvert_CompCurveToBSplineCurve {
    constructor(BasisCurve: any, Parameterisation: Convert_ParameterisationType);
  }

export declare class GC_Root {
  constructor();
  IsDone(): Standard_Boolean;
  Status(): gce_ErrorType;
}

export declare class GC_MakeArcOfCircle extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeArcOfCircle_1 extends GC_MakeArcOfCircle {
    constructor(Circ: gp_Circ, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_2 extends GC_MakeArcOfCircle {
    constructor(Circ: gp_Circ, P: gp_Pnt, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_3 extends GC_MakeArcOfCircle {
    constructor(Circ: gp_Circ, P1: gp_Pnt, P2: gp_Pnt, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_4 extends GC_MakeArcOfCircle {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class GC_MakeArcOfCircle_5 extends GC_MakeArcOfCircle {
    constructor(P1: gp_Pnt, V: gp_Vec, P2: gp_Pnt);
  }

export declare class GC_MakeArcOfEllipse extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeArcOfEllipse_1 extends GC_MakeArcOfEllipse {
    constructor(Elips: gp_Elips, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfEllipse_2 extends GC_MakeArcOfEllipse {
    constructor(Elips: gp_Elips, P: gp_Pnt, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfEllipse_3 extends GC_MakeArcOfEllipse {
    constructor(Elips: gp_Elips, P1: gp_Pnt, P2: gp_Pnt, Sense: Standard_Boolean);
  }

export declare class GC_MakeArcOfHyperbola extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeArcOfHyperbola_1 extends GC_MakeArcOfHyperbola {
    constructor(Hypr: gp_Hypr, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfHyperbola_2 extends GC_MakeArcOfHyperbola {
    constructor(Hypr: gp_Hypr, P: gp_Pnt, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfHyperbola_3 extends GC_MakeArcOfHyperbola {
    constructor(Hypr: gp_Hypr, P1: gp_Pnt, P2: gp_Pnt, Sense: Standard_Boolean);
  }

export declare class GC_MakeArcOfParabola extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeArcOfParabola_1 extends GC_MakeArcOfParabola {
    constructor(Parab: gp_Parab, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfParabola_2 extends GC_MakeArcOfParabola {
    constructor(Parab: gp_Parab, P: gp_Pnt, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfParabola_3 extends GC_MakeArcOfParabola {
    constructor(Parab: gp_Parab, P1: gp_Pnt, P2: gp_Pnt, Sense: Standard_Boolean);
  }

export declare class GC_MakeCircle extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeCircle_1 extends GC_MakeCircle {
    constructor(C: gp_Circ);
  }

  export declare class GC_MakeCircle_2 extends GC_MakeCircle {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

  export declare class GC_MakeCircle_3 extends GC_MakeCircle {
    constructor(Circ: gp_Circ, Dist: Standard_Real);
  }

  export declare class GC_MakeCircle_4 extends GC_MakeCircle {
    constructor(Circ: gp_Circ, Point: gp_Pnt);
  }

  export declare class GC_MakeCircle_5 extends GC_MakeCircle {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class GC_MakeCircle_6 extends GC_MakeCircle {
    constructor(Center: gp_Pnt, Norm: gp_Dir, Radius: Standard_Real);
  }

  export declare class GC_MakeCircle_7 extends GC_MakeCircle {
    constructor(Center: gp_Pnt, PtAxis: gp_Pnt, Radius: Standard_Real);
  }

  export declare class GC_MakeCircle_8 extends GC_MakeCircle {
    constructor(Axis: gp_Ax1, Radius: Standard_Real);
  }

export declare class GC_MakeConicalSurface extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeConicalSurface_1 extends GC_MakeConicalSurface {
    constructor(A2: gp_Ax2, Ang: Standard_Real, Radius: Standard_Real);
  }

  export declare class GC_MakeConicalSurface_2 extends GC_MakeConicalSurface {
    constructor(C: gp_Cone);
  }

  export declare class GC_MakeConicalSurface_3 extends GC_MakeConicalSurface {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, P4: gp_Pnt);
  }

  export declare class GC_MakeConicalSurface_4 extends GC_MakeConicalSurface {
    constructor(P1: gp_Pnt, P2: gp_Pnt, R1: Standard_Real, R2: Standard_Real);
  }

export declare class GC_MakeCylindricalSurface extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeCylindricalSurface_1 extends GC_MakeCylindricalSurface {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

  export declare class GC_MakeCylindricalSurface_2 extends GC_MakeCylindricalSurface {
    constructor(C: gp_Cylinder);
  }

  export declare class GC_MakeCylindricalSurface_3 extends GC_MakeCylindricalSurface {
    constructor(Cyl: gp_Cylinder, Point: gp_Pnt);
  }

  export declare class GC_MakeCylindricalSurface_4 extends GC_MakeCylindricalSurface {
    constructor(Cyl: gp_Cylinder, Dist: Standard_Real);
  }

  export declare class GC_MakeCylindricalSurface_5 extends GC_MakeCylindricalSurface {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class GC_MakeCylindricalSurface_6 extends GC_MakeCylindricalSurface {
    constructor(Axis: gp_Ax1, Radius: Standard_Real);
  }

  export declare class GC_MakeCylindricalSurface_7 extends GC_MakeCylindricalSurface {
    constructor(Circ: gp_Circ);
  }

export declare class GC_MakeEllipse extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeEllipse_1 extends GC_MakeEllipse {
    constructor(E: gp_Elips);
  }

  export declare class GC_MakeEllipse_2 extends GC_MakeEllipse {
    constructor(A2: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

  export declare class GC_MakeEllipse_3 extends GC_MakeEllipse {
    constructor(S1: gp_Pnt, S2: gp_Pnt, Center: gp_Pnt);
  }

export declare class GC_MakeHyperbola extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeHyperbola_1 extends GC_MakeHyperbola {
    constructor(H: gp_Hypr);
  }

  export declare class GC_MakeHyperbola_2 extends GC_MakeHyperbola {
    constructor(A2: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

  export declare class GC_MakeHyperbola_3 extends GC_MakeHyperbola {
    constructor(S1: gp_Pnt, S2: gp_Pnt, Center: gp_Pnt);
  }

export declare class GC_MakeLine extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeLine_1 extends GC_MakeLine {
    constructor(A1: gp_Ax1);
  }

  export declare class GC_MakeLine_2 extends GC_MakeLine {
    constructor(L: gp_Lin);
  }

  export declare class GC_MakeLine_3 extends GC_MakeLine {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class GC_MakeLine_4 extends GC_MakeLine {
    constructor(Lin: gp_Lin, Point: gp_Pnt);
  }

  export declare class GC_MakeLine_5 extends GC_MakeLine {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

export declare class GC_MakeMirror {
  Value(): any;
}

  export declare class GC_MakeMirror_1 extends GC_MakeMirror {
    constructor(Point: gp_Pnt);
  }

  export declare class GC_MakeMirror_2 extends GC_MakeMirror {
    constructor(Axis: gp_Ax1);
  }

  export declare class GC_MakeMirror_3 extends GC_MakeMirror {
    constructor(Line: gp_Lin);
  }

  export declare class GC_MakeMirror_4 extends GC_MakeMirror {
    constructor(Point: gp_Pnt, Direc: gp_Dir);
  }

  export declare class GC_MakeMirror_5 extends GC_MakeMirror {
    constructor(Plane: gp_Pln);
  }

  export declare class GC_MakeMirror_6 extends GC_MakeMirror {
    constructor(Plane: gp_Ax2);
  }

export declare class GC_MakePlane extends GC_Root {
  Value(): any;
}

  export declare class GC_MakePlane_1 extends GC_MakePlane {
    constructor(Pl: gp_Pln);
  }

  export declare class GC_MakePlane_2 extends GC_MakePlane {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class GC_MakePlane_3 extends GC_MakePlane {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real);
  }

  export declare class GC_MakePlane_4 extends GC_MakePlane {
    constructor(Pln: gp_Pln, Point: gp_Pnt);
  }

  export declare class GC_MakePlane_5 extends GC_MakePlane {
    constructor(Pln: gp_Pln, Dist: Standard_Real);
  }

  export declare class GC_MakePlane_6 extends GC_MakePlane {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class GC_MakePlane_7 extends GC_MakePlane {
    constructor(Axis: gp_Ax1);
  }

export declare class GC_MakeRotation {
  Value(): any;
}

  export declare class GC_MakeRotation_1 extends GC_MakeRotation {
    constructor(Line: gp_Lin, Angle: Standard_Real);
  }

  export declare class GC_MakeRotation_2 extends GC_MakeRotation {
    constructor(Axis: gp_Ax1, Angle: Standard_Real);
  }

  export declare class GC_MakeRotation_3 extends GC_MakeRotation {
    constructor(Point: gp_Pnt, Direc: gp_Dir, Angle: Standard_Real);
  }

export declare class GC_MakeScale {
  constructor(Point: gp_Pnt, Scale: Standard_Real)
  Value(): any;
}

export declare class GC_MakeSegment extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeSegment_1 extends GC_MakeSegment {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class GC_MakeSegment_2 extends GC_MakeSegment {
    constructor(Line: gp_Lin, U1: Standard_Real, U2: Standard_Real);
  }

  export declare class GC_MakeSegment_3 extends GC_MakeSegment {
    constructor(Line: gp_Lin, Point: gp_Pnt, Ulast: Standard_Real);
  }

  export declare class GC_MakeSegment_4 extends GC_MakeSegment {
    constructor(Line: gp_Lin, P1: gp_Pnt, P2: gp_Pnt);
  }

export declare class GC_MakeTranslation {
  Value(): any;
}

  export declare class GC_MakeTranslation_1 extends GC_MakeTranslation {
    constructor(Vect: gp_Vec);
  }

  export declare class GC_MakeTranslation_2 extends GC_MakeTranslation {
    constructor(Point1: gp_Pnt, Point2: gp_Pnt);
  }

export declare class GC_MakeTrimmedCone extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeTrimmedCone_1 extends GC_MakeTrimmedCone {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, P4: gp_Pnt);
  }

  export declare class GC_MakeTrimmedCone_2 extends GC_MakeTrimmedCone {
    constructor(P1: gp_Pnt, P2: gp_Pnt, R1: Standard_Real, R2: Standard_Real);
  }

export declare class GC_MakeTrimmedCylinder extends GC_Root {
  Value(): any;
}

  export declare class GC_MakeTrimmedCylinder_1 extends GC_MakeTrimmedCylinder {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class GC_MakeTrimmedCylinder_2 extends GC_MakeTrimmedCylinder {
    constructor(Circ: gp_Circ, Height: Standard_Real);
  }

  export declare class GC_MakeTrimmedCylinder_3 extends GC_MakeTrimmedCylinder {
    constructor(A1: gp_Ax1, Radius: Standard_Real, Height: Standard_Real);
  }

export declare class GCE2d_Root {
  constructor();
  IsDone(): Standard_Boolean;
  Status(): gce_ErrorType;
}

export declare class GCE2d_MakeArcOfCircle extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeArcOfCircle_1 extends GCE2d_MakeArcOfCircle {
    constructor(Circ: gp_Circ2d, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfCircle_2 extends GCE2d_MakeArcOfCircle {
    constructor(Circ: gp_Circ2d, P: gp_Pnt2d, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfCircle_3 extends GCE2d_MakeArcOfCircle {
    constructor(Circ: gp_Circ2d, P1: gp_Pnt2d, P2: gp_Pnt2d, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfCircle_4 extends GCE2d_MakeArcOfCircle {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d, P3: gp_Pnt2d);
  }

  export declare class GCE2d_MakeArcOfCircle_5 extends GCE2d_MakeArcOfCircle {
    constructor(P1: gp_Pnt2d, V: gp_Vec2d, P2: gp_Pnt2d);
  }

export declare class GCE2d_MakeArcOfEllipse extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeArcOfEllipse_1 extends GCE2d_MakeArcOfEllipse {
    constructor(Elips: gp_Elips2d, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfEllipse_2 extends GCE2d_MakeArcOfEllipse {
    constructor(Elips: gp_Elips2d, P: gp_Pnt2d, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfEllipse_3 extends GCE2d_MakeArcOfEllipse {
    constructor(Elips: gp_Elips2d, P1: gp_Pnt2d, P2: gp_Pnt2d, Sense: Standard_Boolean);
  }

export declare class GCE2d_MakeArcOfHyperbola extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeArcOfHyperbola_1 extends GCE2d_MakeArcOfHyperbola {
    constructor(Hypr: gp_Hypr2d, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfHyperbola_2 extends GCE2d_MakeArcOfHyperbola {
    constructor(Hypr: gp_Hypr2d, P: gp_Pnt2d, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfHyperbola_3 extends GCE2d_MakeArcOfHyperbola {
    constructor(Hypr: gp_Hypr2d, P1: gp_Pnt2d, P2: gp_Pnt2d, Sense: Standard_Boolean);
  }

export declare class GCE2d_MakeArcOfParabola extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeArcOfParabola_1 extends GCE2d_MakeArcOfParabola {
    constructor(Parab: gp_Parab2d, Alpha1: Standard_Real, Alpha2: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfParabola_2 extends GCE2d_MakeArcOfParabola {
    constructor(Parab: gp_Parab2d, P: gp_Pnt2d, Alpha: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeArcOfParabola_3 extends GCE2d_MakeArcOfParabola {
    constructor(Parab: gp_Parab2d, P1: gp_Pnt2d, P2: gp_Pnt2d, Sense: Standard_Boolean);
  }

export declare class GCE2d_MakeCircle extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeCircle_1 extends GCE2d_MakeCircle {
    constructor(C: gp_Circ2d);
  }

  export declare class GCE2d_MakeCircle_2 extends GCE2d_MakeCircle {
    constructor(A: gp_Ax2d, Radius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeCircle_3 extends GCE2d_MakeCircle {
    constructor(A: gp_Ax22d, Radius: Standard_Real);
  }

  export declare class GCE2d_MakeCircle_4 extends GCE2d_MakeCircle {
    constructor(Circ: gp_Circ2d, Dist: Standard_Real);
  }

  export declare class GCE2d_MakeCircle_5 extends GCE2d_MakeCircle {
    constructor(Circ: gp_Circ2d, Point: gp_Pnt2d);
  }

  export declare class GCE2d_MakeCircle_6 extends GCE2d_MakeCircle {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d, P3: gp_Pnt2d);
  }

  export declare class GCE2d_MakeCircle_7 extends GCE2d_MakeCircle {
    constructor(P: gp_Pnt2d, Radius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeCircle_8 extends GCE2d_MakeCircle {
    constructor(Center: gp_Pnt2d, Point: gp_Pnt2d, Sense: Standard_Boolean);
  }

export declare class GCE2d_MakeEllipse extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeEllipse_1 extends GCE2d_MakeEllipse {
    constructor(E: gp_Elips2d);
  }

  export declare class GCE2d_MakeEllipse_2 extends GCE2d_MakeEllipse {
    constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeEllipse_3 extends GCE2d_MakeEllipse {
    constructor(Axis: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

  export declare class GCE2d_MakeEllipse_4 extends GCE2d_MakeEllipse {
    constructor(S1: gp_Pnt2d, S2: gp_Pnt2d, Center: gp_Pnt2d);
  }

export declare class GCE2d_MakeHyperbola extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeHyperbola_1 extends GCE2d_MakeHyperbola {
    constructor(H: gp_Hypr2d);
  }

  export declare class GCE2d_MakeHyperbola_2 extends GCE2d_MakeHyperbola {
    constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeHyperbola_3 extends GCE2d_MakeHyperbola {
    constructor(Axis: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

  export declare class GCE2d_MakeHyperbola_4 extends GCE2d_MakeHyperbola {
    constructor(S1: gp_Pnt2d, S2: gp_Pnt2d, Center: gp_Pnt2d);
  }

export declare class GCE2d_MakeLine extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeLine_1 extends GCE2d_MakeLine {
    constructor(A: gp_Ax2d);
  }

  export declare class GCE2d_MakeLine_2 extends GCE2d_MakeLine {
    constructor(L: gp_Lin2d);
  }

  export declare class GCE2d_MakeLine_3 extends GCE2d_MakeLine {
    constructor(P: gp_Pnt2d, V: gp_Dir2d);
  }

  export declare class GCE2d_MakeLine_4 extends GCE2d_MakeLine {
    constructor(Lin: gp_Lin2d, Point: gp_Pnt2d);
  }

  export declare class GCE2d_MakeLine_5 extends GCE2d_MakeLine {
    constructor(Lin: gp_Lin2d, Dist: Standard_Real);
  }

  export declare class GCE2d_MakeLine_6 extends GCE2d_MakeLine {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

export declare class GCE2d_MakeMirror {
  Value(): any;
}

  export declare class GCE2d_MakeMirror_1 extends GCE2d_MakeMirror {
    constructor(Point: gp_Pnt2d);
  }

  export declare class GCE2d_MakeMirror_2 extends GCE2d_MakeMirror {
    constructor(Axis: gp_Ax2d);
  }

  export declare class GCE2d_MakeMirror_3 extends GCE2d_MakeMirror {
    constructor(Line: gp_Lin2d);
  }

  export declare class GCE2d_MakeMirror_4 extends GCE2d_MakeMirror {
    constructor(Point: gp_Pnt2d, Direc: gp_Dir2d);
  }

export declare class GCE2d_MakeParabola extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeParabola_1 extends GCE2d_MakeParabola {
    constructor(Prb: gp_Parab2d);
  }

  export declare class GCE2d_MakeParabola_2 extends GCE2d_MakeParabola {
    constructor(Axis: gp_Ax22d, Focal: Standard_Real);
  }

  export declare class GCE2d_MakeParabola_3 extends GCE2d_MakeParabola {
    constructor(MirrorAxis: gp_Ax2d, Focal: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeParabola_4 extends GCE2d_MakeParabola {
    constructor(D: gp_Ax2d, F: gp_Pnt2d, Sense: Standard_Boolean);
  }

  export declare class GCE2d_MakeParabola_5 extends GCE2d_MakeParabola {
    constructor(S1: gp_Pnt2d, O: gp_Pnt2d);
  }

export declare class GCE2d_MakeRotation {
  constructor(Point: gp_Pnt2d, Angle: Standard_Real)
  Value(): any;
}

export declare class GCE2d_MakeScale {
  constructor(Point: gp_Pnt2d, Scale: Standard_Real)
  Value(): any;
}

export declare class GCE2d_MakeSegment extends GCE2d_Root {
  Value(): any;
}

  export declare class GCE2d_MakeSegment_1 extends GCE2d_MakeSegment {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

  export declare class GCE2d_MakeSegment_2 extends GCE2d_MakeSegment {
    constructor(P1: gp_Pnt2d, V: gp_Dir2d, P2: gp_Pnt2d);
  }

  export declare class GCE2d_MakeSegment_3 extends GCE2d_MakeSegment {
    constructor(Line: gp_Lin2d, U1: Standard_Real, U2: Standard_Real);
  }

  export declare class GCE2d_MakeSegment_4 extends GCE2d_MakeSegment {
    constructor(Line: gp_Lin2d, Point: gp_Pnt2d, Ulast: Standard_Real);
  }

  export declare class GCE2d_MakeSegment_5 extends GCE2d_MakeSegment {
    constructor(Line: gp_Lin2d, P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

export declare class GCE2d_MakeTranslation {
  Value(): any;
}

  export declare class GCE2d_MakeTranslation_1 extends GCE2d_MakeTranslation {
    constructor(Vect: gp_Vec2d);
  }

  export declare class GCE2d_MakeTranslation_2 extends GCE2d_MakeTranslation {
    constructor(Point1: gp_Pnt2d, Point2: gp_Pnt2d);
  }

export declare class GCPnts_AbscissaPoint {
  Length_1(C: Adaptor3d_Curve): Standard_Real;
  Length_2(C: Adaptor2d_Curve2d): Standard_Real;
  Length_3(C: Adaptor3d_Curve, Tol: Standard_Real): Standard_Real;
  Length_4(C: Adaptor2d_Curve2d, Tol: Standard_Real): Standard_Real;
  Length_5(C: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real): Standard_Real;
  Length_6(C: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real): Standard_Real;
  Length_7(C: Adaptor3d_Curve, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real): Standard_Real;
  Length_8(C: Adaptor2d_Curve2d, U1: Standard_Real, U2: Standard_Real, Tol: Standard_Real): Standard_Real;
  IsDone(): Standard_Boolean;
  Parameter(): Standard_Real;
}

  export declare class GCPnts_AbscissaPoint_1 extends GCPnts_AbscissaPoint {
    constructor();
  }

  export declare class GCPnts_AbscissaPoint_2 extends GCPnts_AbscissaPoint {
    constructor(C: Adaptor3d_Curve, Abscissa: Standard_Real, U0: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_3 extends GCPnts_AbscissaPoint {
    constructor(Tol: Standard_Real, C: Adaptor3d_Curve, Abscissa: Standard_Real, U0: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_4 extends GCPnts_AbscissaPoint {
    constructor(Tol: Standard_Real, C: Adaptor2d_Curve2d, Abscissa: Standard_Real, U0: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_5 extends GCPnts_AbscissaPoint {
    constructor(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, U0: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_6 extends GCPnts_AbscissaPoint {
    constructor(C: Adaptor3d_Curve, Abscissa: Standard_Real, U0: Standard_Real, Ui: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_7 extends GCPnts_AbscissaPoint {
    constructor(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, U0: Standard_Real, Ui: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_8 extends GCPnts_AbscissaPoint {
    constructor(C: Adaptor3d_Curve, Abscissa: Standard_Real, U0: Standard_Real, Ui: Standard_Real, Tol: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_9 extends GCPnts_AbscissaPoint {
    constructor(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, U0: Standard_Real, Ui: Standard_Real, Tol: Standard_Real);
  }

export declare class GCPnts_DistFunctionMV extends math_MultipleVarFunction {
  constructor(theCurvLinDist: GCPnts_DistFunction)
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  NbVariables(): Standard_Integer;
}

export declare class GCPnts_DistFunction2dMV extends math_MultipleVarFunction {
  constructor(theCurvLinDist: GCPnts_DistFunction2d)
  Value(X: math_Vector, F: Standard_Real): Standard_Boolean;
  NbVariables(): Standard_Integer;
}

export declare class GCPnts_QuasiUniformAbscissa {
  Initialize_1(C: Adaptor3d_Curve, NbPoints: Standard_Integer): void;
  Initialize_2(C: Adaptor3d_Curve, NbPoints: Standard_Integer, U1: Standard_Real, U2: Standard_Real): void;
  Initialize_3(C: Adaptor2d_Curve2d, NbPoints: Standard_Integer): void;
  Initialize_4(C: Adaptor2d_Curve2d, NbPoints: Standard_Integer, U1: Standard_Real, U2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Parameter(Index: Standard_Integer): Standard_Real;
}

  export declare class GCPnts_QuasiUniformAbscissa_1 extends GCPnts_QuasiUniformAbscissa {
    constructor();
  }

  export declare class GCPnts_QuasiUniformAbscissa_2 extends GCPnts_QuasiUniformAbscissa {
    constructor(C: Adaptor3d_Curve, NbPoints: Standard_Integer);
  }

  export declare class GCPnts_QuasiUniformAbscissa_3 extends GCPnts_QuasiUniformAbscissa {
    constructor(C: Adaptor3d_Curve, NbPoints: Standard_Integer, U1: Standard_Real, U2: Standard_Real);
  }

  export declare class GCPnts_QuasiUniformAbscissa_4 extends GCPnts_QuasiUniformAbscissa {
    constructor(C: Adaptor2d_Curve2d, NbPoints: Standard_Integer);
  }

  export declare class GCPnts_QuasiUniformAbscissa_5 extends GCPnts_QuasiUniformAbscissa {
    constructor(C: Adaptor2d_Curve2d, NbPoints: Standard_Integer, U1: Standard_Real, U2: Standard_Real);
  }

export declare class GCPnts_QuasiUniformDeflection {
  Initialize_1(C: Adaptor3d_Curve, Deflection: Standard_Real, Continuity: GeomAbs_Shape): void;
  Initialize_2(C: Adaptor2d_Curve2d, Deflection: Standard_Real, Continuity: GeomAbs_Shape): void;
  Initialize_3(C: Adaptor3d_Curve, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, Continuity: GeomAbs_Shape): void;
  Initialize_4(C: Adaptor2d_Curve2d, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, Continuity: GeomAbs_Shape): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Parameter(Index: Standard_Integer): Standard_Real;
  Value(Index: Standard_Integer): gp_Pnt;
  Deflection(): Standard_Real;
}

  export declare class GCPnts_QuasiUniformDeflection_1 extends GCPnts_QuasiUniformDeflection {
    constructor();
  }

  export declare class GCPnts_QuasiUniformDeflection_2 extends GCPnts_QuasiUniformDeflection {
    constructor(C: Adaptor3d_Curve, Deflection: Standard_Real, Continuity: GeomAbs_Shape);
  }

  export declare class GCPnts_QuasiUniformDeflection_3 extends GCPnts_QuasiUniformDeflection {
    constructor(C: Adaptor2d_Curve2d, Deflection: Standard_Real, Continuity: GeomAbs_Shape);
  }

  export declare class GCPnts_QuasiUniformDeflection_4 extends GCPnts_QuasiUniformDeflection {
    constructor(C: Adaptor3d_Curve, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, Continuity: GeomAbs_Shape);
  }

  export declare class GCPnts_QuasiUniformDeflection_5 extends GCPnts_QuasiUniformDeflection {
    constructor(C: Adaptor2d_Curve2d, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, Continuity: GeomAbs_Shape);
  }

export declare class GCPnts_UniformAbscissa {
  Initialize_1(C: Adaptor3d_Curve, Abscissa: Standard_Real, Toler: Standard_Real): void;
  Initialize_2(C: Adaptor3d_Curve, Abscissa: Standard_Real, U1: Standard_Real, U2: Standard_Real, Toler: Standard_Real): void;
  Initialize_3(C: Adaptor3d_Curve, NbPoints: Standard_Integer, Toler: Standard_Real): void;
  Initialize_4(C: Adaptor3d_Curve, NbPoints: Standard_Integer, U1: Standard_Real, U2: Standard_Real, Toler: Standard_Real): void;
  Initialize_5(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, Toler: Standard_Real): void;
  Initialize_6(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, U1: Standard_Real, U2: Standard_Real, Toler: Standard_Real): void;
  Initialize_7(C: Adaptor2d_Curve2d, NbPoints: Standard_Integer, Toler: Standard_Real): void;
  Initialize_8(C: Adaptor2d_Curve2d, NbPoints: Standard_Integer, U1: Standard_Real, U2: Standard_Real, Toler: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Parameter(Index: Standard_Integer): Standard_Real;
  Abscissa(): Standard_Real;
}

  export declare class GCPnts_UniformAbscissa_1 extends GCPnts_UniformAbscissa {
    constructor();
  }

  export declare class GCPnts_UniformAbscissa_2 extends GCPnts_UniformAbscissa {
    constructor(C: Adaptor3d_Curve, Abscissa: Standard_Real, Toler: Standard_Real);
  }

  export declare class GCPnts_UniformAbscissa_3 extends GCPnts_UniformAbscissa {
    constructor(C: Adaptor3d_Curve, Abscissa: Standard_Real, U1: Standard_Real, U2: Standard_Real, Toler: Standard_Real);
  }

  export declare class GCPnts_UniformAbscissa_4 extends GCPnts_UniformAbscissa {
    constructor(C: Adaptor3d_Curve, NbPoints: Standard_Integer, Toler: Standard_Real);
  }

  export declare class GCPnts_UniformAbscissa_5 extends GCPnts_UniformAbscissa {
    constructor(C: Adaptor3d_Curve, NbPoints: Standard_Integer, U1: Standard_Real, U2: Standard_Real, Toler: Standard_Real);
  }

  export declare class GCPnts_UniformAbscissa_6 extends GCPnts_UniformAbscissa {
    constructor(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, Toler: Standard_Real);
  }

  export declare class GCPnts_UniformAbscissa_7 extends GCPnts_UniformAbscissa {
    constructor(C: Adaptor2d_Curve2d, Abscissa: Standard_Real, U1: Standard_Real, U2: Standard_Real, Toler: Standard_Real);
  }

  export declare class GCPnts_UniformAbscissa_8 extends GCPnts_UniformAbscissa {
    constructor(C: Adaptor2d_Curve2d, NbPoints: Standard_Integer, Toler: Standard_Real);
  }

  export declare class GCPnts_UniformAbscissa_9 extends GCPnts_UniformAbscissa {
    constructor(C: Adaptor2d_Curve2d, NbPoints: Standard_Integer, U1: Standard_Real, U2: Standard_Real, Toler: Standard_Real);
  }

export declare class GCPnts_UniformDeflection {
  Initialize_1(C: Adaptor3d_Curve, Deflection: Standard_Real, WithControl: Standard_Boolean): void;
  Initialize_2(C: Adaptor2d_Curve2d, Deflection: Standard_Real, WithControl: Standard_Boolean): void;
  Initialize_3(C: Adaptor3d_Curve, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, WithControl: Standard_Boolean): void;
  Initialize_4(C: Adaptor2d_Curve2d, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, WithControl: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Parameter(Index: Standard_Integer): Standard_Real;
  Value(Index: Standard_Integer): gp_Pnt;
  Deflection(): Standard_Real;
}

  export declare class GCPnts_UniformDeflection_1 extends GCPnts_UniformDeflection {
    constructor();
  }

  export declare class GCPnts_UniformDeflection_2 extends GCPnts_UniformDeflection {
    constructor(C: Adaptor3d_Curve, Deflection: Standard_Real, WithControl: Standard_Boolean);
  }

  export declare class GCPnts_UniformDeflection_3 extends GCPnts_UniformDeflection {
    constructor(C: Adaptor2d_Curve2d, Deflection: Standard_Real, WithControl: Standard_Boolean);
  }

  export declare class GCPnts_UniformDeflection_4 extends GCPnts_UniformDeflection {
    constructor(C: Adaptor3d_Curve, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, WithControl: Standard_Boolean);
  }

  export declare class GCPnts_UniformDeflection_5 extends GCPnts_UniformDeflection {
    constructor(C: Adaptor2d_Curve2d, Deflection: Standard_Real, U1: Standard_Real, U2: Standard_Real, WithControl: Standard_Boolean);
  }

export declare class Geom2dConvert {
  constructor();
  SplitBSplineCurve_1(C: any, FromK1: Standard_Integer, ToK2: Standard_Integer, SameOrientation: Standard_Boolean): any;
  SplitBSplineCurve_2(C: any, FromU1: Standard_Real, ToU2: Standard_Real, ParametricTolerance: Standard_Real, SameOrientation: Standard_Boolean): any;
  CurveToBSplineCurve(C: any, Parameterisation: Convert_ParameterisationType): any;
  ConcatG1(ArrayOfCurves: TColGeom2d_Array1OfBSplineCurve, ArrayOfToler: TColStd_Array1OfReal, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real): void;
  ConcatC1_1(ArrayOfCurves: TColGeom2d_Array1OfBSplineCurve, ArrayOfToler: TColStd_Array1OfReal, ArrayOfIndices: any, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real): void;
  ConcatC1_2(ArrayOfCurves: TColGeom2d_Array1OfBSplineCurve, ArrayOfToler: TColStd_Array1OfReal, ArrayOfIndices: any, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real, AngularTolerance: Standard_Real): void;
  C0BSplineToC1BSplineCurve(BS: any, Tolerance: Standard_Real): void;
  C0BSplineToArrayOfC1BSplineCurve_1(BS: any, tabBS: any, Tolerance: Standard_Real): void;
  C0BSplineToArrayOfC1BSplineCurve_2(BS: any, tabBS: any, AngularTolerance: Standard_Real, Tolerance: Standard_Real): void;
}

export declare class Geom2dConvert_ApproxCurve {
  Curve(): any;
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  MaxError(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

  export declare class Geom2dConvert_ApproxCurve_1 extends Geom2dConvert_ApproxCurve {
    constructor(Curve: any, Tol2d: Standard_Real, Order: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer);
  }

  export declare class Geom2dConvert_ApproxCurve_2 extends Geom2dConvert_ApproxCurve {
    constructor(Curve: any, Tol2d: Standard_Real, Order: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer);
  }

export declare class Geom2dConvert_BSplineCurveKnotSplitting {
  constructor(BasisCurve: any, ContinuityRange: Standard_Integer)
  NbSplits(): Standard_Integer;
  Splitting(SplitValues: TColStd_Array1OfInteger): void;
  SplitValue(Index: Standard_Integer): Standard_Integer;
}

export declare class Geom2dConvert_BSplineCurveToBezierCurve {
  Arc(Index: Standard_Integer): any;
  Arcs(Curves: TColGeom2d_Array1OfBezierCurve): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  NbArcs(): Standard_Integer;
}

  export declare class Geom2dConvert_BSplineCurveToBezierCurve_1 extends Geom2dConvert_BSplineCurveToBezierCurve {
    constructor(BasisCurve: any);
  }

  export declare class Geom2dConvert_BSplineCurveToBezierCurve_2 extends Geom2dConvert_BSplineCurveToBezierCurve {
    constructor(BasisCurve: any, U1: Standard_Real, U2: Standard_Real, ParametricTolerance: Standard_Real);
  }

export declare class GeomConvert {
  constructor();
  SplitBSplineCurve_1(C: any, FromK1: Standard_Integer, ToK2: Standard_Integer, SameOrientation: Standard_Boolean): any;
  SplitBSplineCurve_2(C: any, FromU1: Standard_Real, ToU2: Standard_Real, ParametricTolerance: Standard_Real, SameOrientation: Standard_Boolean): any;
  SplitBSplineSurface_1(S: any, FromUK1: Standard_Integer, ToUK2: Standard_Integer, FromVK1: Standard_Integer, ToVK2: Standard_Integer, SameUOrientation: Standard_Boolean, SameVOrientation: Standard_Boolean): any;
  SplitBSplineSurface_2(S: any, FromK1: Standard_Integer, ToK2: Standard_Integer, USplit: Standard_Boolean, SameOrientation: Standard_Boolean): any;
  SplitBSplineSurface_3(S: any, FromU1: Standard_Real, ToU2: Standard_Real, FromV1: Standard_Real, ToV2: Standard_Real, ParametricTolerance: Standard_Real, SameUOrientation: Standard_Boolean, SameVOrientation: Standard_Boolean): any;
  SplitBSplineSurface_4(S: any, FromParam1: Standard_Real, ToParam2: Standard_Real, USplit: Standard_Boolean, ParametricTolerance: Standard_Real, SameOrientation: Standard_Boolean): any;
  CurveToBSplineCurve(C: any, Parameterisation: Convert_ParameterisationType): any;
  SurfaceToBSplineSurface(S: any): any;
  ConcatG1(ArrayOfCurves: TColGeom_Array1OfBSplineCurve, ArrayOfToler: TColStd_Array1OfReal, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real): void;
  ConcatC1_1(ArrayOfCurves: TColGeom_Array1OfBSplineCurve, ArrayOfToler: TColStd_Array1OfReal, ArrayOfIndices: any, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real): void;
  ConcatC1_2(ArrayOfCurves: TColGeom_Array1OfBSplineCurve, ArrayOfToler: TColStd_Array1OfReal, ArrayOfIndices: any, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real, AngularTolerance: Standard_Real): void;
  C0BSplineToC1BSplineCurve(BS: any, tolerance: Standard_Real, AngularTolerance: Standard_Real): void;
  C0BSplineToArrayOfC1BSplineCurve_1(BS: any, tabBS: any, tolerance: Standard_Real): void;
  C0BSplineToArrayOfC1BSplineCurve_2(BS: any, tabBS: any, AngularTolerance: Standard_Real, tolerance: Standard_Real): void;
}

export declare class GeomConvert_ApproxCurve {
  Curve(): any;
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  MaxError(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

  export declare class GeomConvert_ApproxCurve_1 extends GeomConvert_ApproxCurve {
    constructor(Curve: any, Tol3d: Standard_Real, Order: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer);
  }

  export declare class GeomConvert_ApproxCurve_2 extends GeomConvert_ApproxCurve {
    constructor(Curve: any, Tol3d: Standard_Real, Order: GeomAbs_Shape, MaxSegments: Standard_Integer, MaxDegree: Standard_Integer);
  }

export declare class GeomConvert_ApproxSurface {
  Surface(): any;
  IsDone(): Standard_Boolean;
  HasResult(): Standard_Boolean;
  MaxError(): Standard_Real;
  Dump(o: Standard_OStream): void;
}

  export declare class GeomConvert_ApproxSurface_1 extends GeomConvert_ApproxSurface {
    constructor(Surf: any, Tol3d: Standard_Real, UContinuity: GeomAbs_Shape, VContinuity: GeomAbs_Shape, MaxDegU: Standard_Integer, MaxDegV: Standard_Integer, MaxSegments: Standard_Integer, PrecisCode: Standard_Integer);
  }

  export declare class GeomConvert_ApproxSurface_2 extends GeomConvert_ApproxSurface {
    constructor(Surf: any, Tol3d: Standard_Real, UContinuity: GeomAbs_Shape, VContinuity: GeomAbs_Shape, MaxDegU: Standard_Integer, MaxDegV: Standard_Integer, MaxSegments: Standard_Integer, PrecisCode: Standard_Integer);
  }

export declare class GeomConvert_BSplineCurveKnotSplitting {
  constructor(BasisCurve: any, ContinuityRange: Standard_Integer)
  NbSplits(): Standard_Integer;
  Splitting(SplitValues: TColStd_Array1OfInteger): void;
  SplitValue(Index: Standard_Integer): Standard_Integer;
}

export declare class GeomConvert_BSplineCurveToBezierCurve {
  Arc(Index: Standard_Integer): any;
  Arcs(Curves: TColGeom_Array1OfBezierCurve): void;
  Knots(TKnots: TColStd_Array1OfReal): void;
  NbArcs(): Standard_Integer;
}

  export declare class GeomConvert_BSplineCurveToBezierCurve_1 extends GeomConvert_BSplineCurveToBezierCurve {
    constructor(BasisCurve: any);
  }

  export declare class GeomConvert_BSplineCurveToBezierCurve_2 extends GeomConvert_BSplineCurveToBezierCurve {
    constructor(BasisCurve: any, U1: Standard_Real, U2: Standard_Real, ParametricTolerance: Standard_Real);
  }

export declare class GeomConvert_BSplineSurfaceKnotSplitting {
  constructor(BasisSurface: any, UContinuityRange: Standard_Integer, VContinuityRange: Standard_Integer)
  NbUSplits(): Standard_Integer;
  NbVSplits(): Standard_Integer;
  Splitting(USplit: TColStd_Array1OfInteger, VSplit: TColStd_Array1OfInteger): void;
  USplitValue(UIndex: Standard_Integer): Standard_Integer;
  VSplitValue(VIndex: Standard_Integer): Standard_Integer;
}

export declare class GeomConvert_BSplineSurfaceToBezierSurface {
  Patch(UIndex: Standard_Integer, VIndex: Standard_Integer): any;
  Patches(Surfaces: TColGeom_Array2OfBezierSurface): void;
  UKnots(TKnots: TColStd_Array1OfReal): void;
  VKnots(TKnots: TColStd_Array1OfReal): void;
  NbUPatches(): Standard_Integer;
  NbVPatches(): Standard_Integer;
}

  export declare class GeomConvert_BSplineSurfaceToBezierSurface_1 extends GeomConvert_BSplineSurfaceToBezierSurface {
    constructor(BasisSurface: any);
  }

  export declare class GeomConvert_BSplineSurfaceToBezierSurface_2 extends GeomConvert_BSplineSurfaceToBezierSurface {
    constructor(BasisSurface: any, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, ParametricTolerance: Standard_Real);
  }

export declare class GeomConvert_CompBezierSurfacesToBSplineSurface {
  NbUKnots(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  Poles(): any;
  UKnots(): any;
  UDegree(): Standard_Integer;
  VKnots(): any;
  VDegree(): Standard_Integer;
  UMultiplicities(): any;
  VMultiplicities(): any;
  IsDone(): Standard_Boolean;
}

  export declare class GeomConvert_CompBezierSurfacesToBSplineSurface_1 extends GeomConvert_CompBezierSurfacesToBSplineSurface {
    constructor(Beziers: TColGeom_Array2OfBezierSurface);
  }

  export declare class GeomConvert_CompBezierSurfacesToBSplineSurface_2 extends GeomConvert_CompBezierSurfacesToBSplineSurface {
    constructor(Beziers: TColGeom_Array2OfBezierSurface, Tolerance: Standard_Real, RemoveKnots: Standard_Boolean);
  }

  export declare class GeomConvert_CompBezierSurfacesToBSplineSurface_3 extends GeomConvert_CompBezierSurfacesToBSplineSurface {
    constructor(Beziers: TColGeom_Array2OfBezierSurface, UKnots: TColStd_Array1OfReal, VKnots: TColStd_Array1OfReal, UContinuity: GeomAbs_Shape, VContinuity: GeomAbs_Shape, Tolerance: Standard_Real);
  }

export declare class GeomConvert_CompCurveToBSplineCurve {
  Add_1(NewCurve: any, Tolerance: Standard_Real, After: Standard_Boolean, WithRatio: Standard_Boolean, MinM: Standard_Integer): Standard_Boolean;
  BSplineCurve(): any;
  Clear(): void;
}

  export declare class GeomConvert_CompCurveToBSplineCurve_1 extends GeomConvert_CompCurveToBSplineCurve {
    constructor(Parameterisation: Convert_ParameterisationType);
  }

  export declare class GeomConvert_CompCurveToBSplineCurve_2 extends GeomConvert_CompCurveToBSplineCurve {
    constructor(BasisCurve: any, Parameterisation: Convert_ParameterisationType);
  }

export declare class GeomLib_Check2dBSplineCurve {
  constructor(Curve: any, Tolerance: Standard_Real, AngularTolerance: Standard_Real)
  IsDone(): Standard_Boolean;
  NeedTangentFix(FirstFlag: Standard_Boolean, SecondFlag: Standard_Boolean): void;
  FixTangent(FirstFlag: Standard_Boolean, LastFlag: Standard_Boolean): void;
  FixedTangent(FirstFlag: Standard_Boolean, LastFlag: Standard_Boolean): any;
}

export declare class GeomLib_CheckBSplineCurve {
  constructor(Curve: any, Tolerance: Standard_Real, AngularTolerance: Standard_Real)
  IsDone(): Standard_Boolean;
  NeedTangentFix(FirstFlag: Standard_Boolean, SecondFlag: Standard_Boolean): void;
  FixTangent(FirstFlag: Standard_Boolean, LastFlag: Standard_Boolean): void;
  FixedTangent(FirstFlag: Standard_Boolean, LastFlag: Standard_Boolean): any;
}

export declare class GeomLib_DenominatorMultiplier {
  constructor(Surface: any, KnotVector: TColStd_Array1OfReal)
  Value(UParameter: Standard_Real, VParameter: Standard_Real): Standard_Real;
}

export declare class GeomLib_Interpolate {
  constructor(Degree: Standard_Integer, NumPoints: Standard_Integer, Points: TColgp_Array1OfPnt, Parameters: TColStd_Array1OfReal)
  IsDone(): Standard_Boolean;
  Error(): GeomLib_InterpolationErrors;
  Curve(): any;
}

export declare class GeomLib_IsPlanarSurface {
  constructor(S: any, Tol: Standard_Real)
  IsPlanar(): Standard_Boolean;
  Plan(): gp_Pln;
}

export declare class GeomLib_LogSample extends math_FunctionSample {
  constructor(A: Standard_Real, B: Standard_Real, N: Standard_Integer)
  GetParameter(Index: Standard_Integer): Standard_Real;
}

export declare class GeomLib_MakeCurvefromApprox {
  constructor(Approx: AdvApprox_ApproxAFunction)
  IsDone(): Standard_Boolean;
  Nb1DSpaces(): Standard_Integer;
  Nb2DSpaces(): Standard_Integer;
  Nb3DSpaces(): Standard_Integer;
  Curve2d_1(Index2d: Standard_Integer): any;
  Curve2dFromTwo1d(Index1d: Standard_Integer, Index2d: Standard_Integer): any;
  Curve2d_2(Index1d: Standard_Integer, Index2d: Standard_Integer): any;
  Curve_1(Index3d: Standard_Integer): any;
  Curve_2(Index1D: Standard_Integer, Index3D: Standard_Integer): any;
}

export declare class GeomLib_PolyFunc extends math_FunctionWithDerivative {
  constructor(Coeffs: math_Vector)
  Value(X: Standard_Real, F: Standard_Real): Standard_Boolean;
  Derivative(X: Standard_Real, D: Standard_Real): Standard_Boolean;
  Values(X: Standard_Real, F: Standard_Real, D: Standard_Real): Standard_Boolean;
}

export declare class GeomLib_Tool {
  constructor();
  Parameter_1(Curve: any, Point: gp_Pnt, MaxDist: Standard_Real, U: Standard_Real): Standard_Boolean;
  Parameters(Surface: any, Point: gp_Pnt, MaxDist: Standard_Real, U: Standard_Real, V: Standard_Real): Standard_Boolean;
  Parameter_2(Curve: any, Point: gp_Pnt2d, MaxDist: Standard_Real, U: Standard_Real): Standard_Boolean;
}

export declare class GeomProjLib {
  constructor();
  Curve2d_1(C: any, First: Standard_Real, Last: Standard_Real, S: any, UFirst: Standard_Real, ULast: Standard_Real, VFirst: Standard_Real, VLast: Standard_Real, Tolerance: Standard_Real): any;
  Curve2d_2(C: any, First: Standard_Real, Last: Standard_Real, S: any, Tolerance: Standard_Real): any;
  Curve2d_3(C: any, First: Standard_Real, Last: Standard_Real, S: any): any;
  Curve2d_4(C: any, S: any): any;
  Curve2d_5(C: any, S: any, UDeb: Standard_Real, UFin: Standard_Real, VDeb: Standard_Real, VFin: Standard_Real): any;
  Curve2d_6(C: any, S: any, UDeb: Standard_Real, UFin: Standard_Real, VDeb: Standard_Real, VFin: Standard_Real, Tolerance: Standard_Real): any;
  Project(C: any, S: any): any;
  ProjectOnPlane(Curve: any, Plane: any, Dir: gp_Dir, KeepParametrization: Standard_Boolean): any;
}

export declare class GeomTools {
  constructor();
  Dump_1(S: any, OS: Standard_OStream): void;
  Write_1(S: any, OS: Standard_OStream): void;
  Read_1(S: any, IS: Standard_IStream): void;
  Dump_2(C: any, OS: Standard_OStream): void;
  Write_2(C: any, OS: Standard_OStream): void;
  Read_2(C: any, IS: Standard_IStream): void;
  Dump_3(C: any, OS: Standard_OStream): void;
  Write_3(C: any, OS: Standard_OStream): void;
  Read_3(C: any, IS: Standard_IStream): void;
  SetUndefinedTypeHandler(aHandler: any): void;
  GetUndefinedTypeHandler(): any;
  GetReal(IS: Standard_IStream, theValue: Standard_Real): void;
}

export declare class Hermit {
  constructor();
  Solution_1(BS: any, TolPoles: Standard_Real, TolKnots: Standard_Real): any;
  Solution_2(BS: any, TolPoles: Standard_Real, TolKnots: Standard_Real): any;
  Solutionbis(BS: any, Knotmin: Standard_Real, Knotmax: Standard_Real, TolPoles: Standard_Real, TolKnots: Standard_Real): void;
}

export declare class IntAna_Curve {
  constructor()
  SetCylinderQuadValues(Cylinder: gp_Cylinder, Qxx: Standard_Real, Qyy: Standard_Real, Qzz: Standard_Real, Qxy: Standard_Real, Qxz: Standard_Real, Qyz: Standard_Real, Qx: Standard_Real, Qy: Standard_Real, Qz: Standard_Real, Q1: Standard_Real, Tol: Standard_Real, DomInf: Standard_Real, DomSup: Standard_Real, TwoZForATheta: Standard_Boolean, ZIsPositive: Standard_Boolean): void;
  SetConeQuadValues(Cone: gp_Cone, Qxx: Standard_Real, Qyy: Standard_Real, Qzz: Standard_Real, Qxy: Standard_Real, Qxz: Standard_Real, Qyz: Standard_Real, Qx: Standard_Real, Qy: Standard_Real, Qz: Standard_Real, Q1: Standard_Real, Tol: Standard_Real, DomInf: Standard_Real, DomSup: Standard_Real, TwoZForATheta: Standard_Boolean, ZIsPositive: Standard_Boolean): void;
  IsOpen(): Standard_Boolean;
  Domain(theFirst: Standard_Real, theLast: Standard_Real): void;
  IsConstant(): Standard_Boolean;
  IsFirstOpen(): Standard_Boolean;
  IsLastOpen(): Standard_Boolean;
  Value(Theta: Standard_Real): gp_Pnt;
  D1u(Theta: Standard_Real, P: gp_Pnt, V: gp_Vec): Standard_Boolean;
  FindParameter(P: gp_Pnt, theParams: TColStd_ListOfReal): void;
  SetIsFirstOpen(Flag: Standard_Boolean): void;
  SetIsLastOpen(Flag: Standard_Boolean): void;
  SetDomain(theFirst: Standard_Real, theLast: Standard_Real): void;
}

export declare class IntAna_Int3Pln {
  Perform(P1: gp_Pln, P2: gp_Pln, P3: gp_Pln): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  Value(): gp_Pnt;
}

  export declare class IntAna_Int3Pln_1 extends IntAna_Int3Pln {
    constructor();
  }

  export declare class IntAna_Int3Pln_2 extends IntAna_Int3Pln {
    constructor(P1: gp_Pln, P2: gp_Pln, P3: gp_Pln);
  }

export declare class IntAna_IntConicQuad {
  Perform_1(L: gp_Lin, Q: IntAna_Quadric): void;
  Perform_2(C: gp_Circ, Q: IntAna_Quadric): void;
  Perform_3(E: gp_Elips, Q: IntAna_Quadric): void;
  Perform_4(P: gp_Parab, Q: IntAna_Quadric): void;
  Perform_5(H: gp_Hypr, Q: IntAna_Quadric): void;
  Perform_6(L: gp_Lin, P: gp_Pln, Tolang: Standard_Real, Tol: Standard_Real, Len: Standard_Real): void;
  Perform_7(C: gp_Circ, P: gp_Pln, Tolang: Standard_Real, Tol: Standard_Real): void;
  Perform_8(E: gp_Elips, P: gp_Pln, Tolang: Standard_Real, Tol: Standard_Real): void;
  Perform_9(Pb: gp_Parab, P: gp_Pln, Tolang: Standard_Real): void;
  Perform_10(H: gp_Hypr, P: gp_Pln, Tolang: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IsInQuadric(): Standard_Boolean;
  IsParallel(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(N: Standard_Integer): gp_Pnt;
  ParamOnConic(N: Standard_Integer): Standard_Real;
}

  export declare class IntAna_IntConicQuad_1 extends IntAna_IntConicQuad {
    constructor();
  }

  export declare class IntAna_IntConicQuad_2 extends IntAna_IntConicQuad {
    constructor(L: gp_Lin, Q: IntAna_Quadric);
  }

  export declare class IntAna_IntConicQuad_3 extends IntAna_IntConicQuad {
    constructor(C: gp_Circ, Q: IntAna_Quadric);
  }

  export declare class IntAna_IntConicQuad_4 extends IntAna_IntConicQuad {
    constructor(E: gp_Elips, Q: IntAna_Quadric);
  }

  export declare class IntAna_IntConicQuad_5 extends IntAna_IntConicQuad {
    constructor(P: gp_Parab, Q: IntAna_Quadric);
  }

  export declare class IntAna_IntConicQuad_6 extends IntAna_IntConicQuad {
    constructor(H: gp_Hypr, Q: IntAna_Quadric);
  }

  export declare class IntAna_IntConicQuad_7 extends IntAna_IntConicQuad {
    constructor(L: gp_Lin, P: gp_Pln, Tolang: Standard_Real, Tol: Standard_Real, Len: Standard_Real);
  }

  export declare class IntAna_IntConicQuad_8 extends IntAna_IntConicQuad {
    constructor(C: gp_Circ, P: gp_Pln, Tolang: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntAna_IntConicQuad_9 extends IntAna_IntConicQuad {
    constructor(E: gp_Elips, P: gp_Pln, Tolang: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntAna_IntConicQuad_10 extends IntAna_IntConicQuad {
    constructor(Pb: gp_Parab, P: gp_Pln, Tolang: Standard_Real);
  }

  export declare class IntAna_IntConicQuad_11 extends IntAna_IntConicQuad {
    constructor(H: gp_Hypr, P: gp_Pln, Tolang: Standard_Real);
  }

export declare class IntAna_IntLinTorus {
  Perform(L: gp_Lin, T: gp_Torus): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Value(Index: Standard_Integer): gp_Pnt;
  ParamOnLine(Index: Standard_Integer): Standard_Real;
  ParamOnTorus(Index: Standard_Integer, FI: Standard_Real, THETA: Standard_Real): void;
}

  export declare class IntAna_IntLinTorus_1 extends IntAna_IntLinTorus {
    constructor();
  }

  export declare class IntAna_IntLinTorus_2 extends IntAna_IntLinTorus {
    constructor(L: gp_Lin, T: gp_Torus);
  }

export declare class IntAna_IntQuadQuad {
  Perform_1(C: gp_Cylinder, Q: IntAna_Quadric, Tol: Standard_Real): void;
  Perform_2(C: gp_Cone, Q: IntAna_Quadric, Tol: Standard_Real): void;
  IsDone(): Standard_Boolean;
  IdenticalElements(): Standard_Boolean;
  NbCurve(): Standard_Integer;
  Curve(N: Standard_Integer): IntAna_Curve;
  NbPnt(): Standard_Integer;
  Point(N: Standard_Integer): gp_Pnt;
  Parameters(N: Standard_Integer, U1: Standard_Real, U2: Standard_Real): void;
  HasNextCurve(I: Standard_Integer): Standard_Boolean;
  NextCurve(I: Standard_Integer, theOpposite: Standard_Boolean): Standard_Integer;
  HasPreviousCurve(I: Standard_Integer): Standard_Boolean;
  PreviousCurve(I: Standard_Integer, theOpposite: Standard_Boolean): Standard_Integer;
}

  export declare class IntAna_IntQuadQuad_1 extends IntAna_IntQuadQuad {
    constructor();
  }

  export declare class IntAna_IntQuadQuad_2 extends IntAna_IntQuadQuad {
    constructor(C: gp_Cylinder, Q: IntAna_Quadric, Tol: Standard_Real);
  }

  export declare class IntAna_IntQuadQuad_3 extends IntAna_IntQuadQuad {
    constructor(C: gp_Cone, Q: IntAna_Quadric, Tol: Standard_Real);
  }

export declare class IntAna_QuadQuadGeo {
  Perform_1(P1: gp_Pln, P2: gp_Pln, TolAng: Standard_Real, Tol: Standard_Real): void;
  Perform_2(P: gp_Pln, C: gp_Cylinder, Tolang: Standard_Real, Tol: Standard_Real, H: Standard_Real): void;
  Perform_3(P: gp_Pln, S: gp_Sphere): void;
  Perform_4(P: gp_Pln, C: gp_Cone, Tolang: Standard_Real, Tol: Standard_Real): void;
  Perform_5(Cyl1: gp_Cylinder, Cyl2: gp_Cylinder, Tol: Standard_Real): void;
  Perform_6(Cyl: gp_Cylinder, Sph: gp_Sphere, Tol: Standard_Real): void;
  Perform_7(Cyl: gp_Cylinder, Con: gp_Cone, Tol: Standard_Real): void;
  Perform_8(Sph1: gp_Sphere, Sph2: gp_Sphere, Tol: Standard_Real): void;
  Perform_9(Sph: gp_Sphere, Con: gp_Cone, Tol: Standard_Real): void;
  Perform_10(Con1: gp_Cone, Con2: gp_Cone, Tol: Standard_Real): void;
  Perform_11(Pln: gp_Pln, Tor: gp_Torus, Tol: Standard_Real): void;
  Perform_12(Cyl: gp_Cylinder, Tor: gp_Torus, Tol: Standard_Real): void;
  Perform_13(Con: gp_Cone, Tor: gp_Torus, Tol: Standard_Real): void;
  Perform_14(Sph: gp_Sphere, Tor: gp_Torus, Tol: Standard_Real): void;
  Perform_15(Tor1: gp_Torus, Tor2: gp_Torus, Tol: Standard_Real): void;
  IsDone(): Standard_Boolean;
  TypeInter(): IntAna_ResultType;
  NbSolutions(): Standard_Integer;
  Point(Num: Standard_Integer): gp_Pnt;
  Line(Num: Standard_Integer): gp_Lin;
  Circle(Num: Standard_Integer): gp_Circ;
  Ellipse(Num: Standard_Integer): gp_Elips;
  Parabola(Num: Standard_Integer): gp_Parab;
  Hyperbola(Num: Standard_Integer): gp_Hypr;
  HasCommonGen(): Standard_Boolean;
  PChar(): gp_Pnt;
}

  export declare class IntAna_QuadQuadGeo_1 extends IntAna_QuadQuadGeo {
    constructor();
  }

  export declare class IntAna_QuadQuadGeo_2 extends IntAna_QuadQuadGeo {
    constructor(P1: gp_Pln, P2: gp_Pln, TolAng: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_3 extends IntAna_QuadQuadGeo {
    constructor(P: gp_Pln, C: gp_Cylinder, Tolang: Standard_Real, Tol: Standard_Real, H: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_4 extends IntAna_QuadQuadGeo {
    constructor(P: gp_Pln, S: gp_Sphere);
  }

  export declare class IntAna_QuadQuadGeo_5 extends IntAna_QuadQuadGeo {
    constructor(P: gp_Pln, C: gp_Cone, Tolang: Standard_Real, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_6 extends IntAna_QuadQuadGeo {
    constructor(Cyl1: gp_Cylinder, Cyl2: gp_Cylinder, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_7 extends IntAna_QuadQuadGeo {
    constructor(Cyl: gp_Cylinder, Sph: gp_Sphere, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_8 extends IntAna_QuadQuadGeo {
    constructor(Cyl: gp_Cylinder, Con: gp_Cone, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_9 extends IntAna_QuadQuadGeo {
    constructor(Sph1: gp_Sphere, Sph2: gp_Sphere, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_10 extends IntAna_QuadQuadGeo {
    constructor(Sph: gp_Sphere, Con: gp_Cone, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_11 extends IntAna_QuadQuadGeo {
    constructor(Con1: gp_Cone, Con2: gp_Cone, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_12 extends IntAna_QuadQuadGeo {
    constructor(Pln: gp_Pln, Tor: gp_Torus, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_13 extends IntAna_QuadQuadGeo {
    constructor(Cyl: gp_Cylinder, Tor: gp_Torus, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_14 extends IntAna_QuadQuadGeo {
    constructor(Con: gp_Cone, Tor: gp_Torus, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_15 extends IntAna_QuadQuadGeo {
    constructor(Sph: gp_Sphere, Tor: gp_Torus, Tol: Standard_Real);
  }

  export declare class IntAna_QuadQuadGeo_16 extends IntAna_QuadQuadGeo {
    constructor(Tor1: gp_Torus, Tor2: gp_Torus, Tol: Standard_Real);
  }

export declare class IntAna_Quadric {
  SetQuadric_1(P: gp_Pln): void;
  SetQuadric_2(Sph: gp_Sphere): void;
  SetQuadric_3(Con: gp_Cone): void;
  SetQuadric_4(Cyl: gp_Cylinder): void;
  Coefficients(xCXX: Standard_Real, xCYY: Standard_Real, xCZZ: Standard_Real, xCXY: Standard_Real, xCXZ: Standard_Real, xCYZ: Standard_Real, xCX: Standard_Real, xCY: Standard_Real, xCZ: Standard_Real, xCCte: Standard_Real): void;
  NewCoefficients(xCXX: Standard_Real, xCYY: Standard_Real, xCZZ: Standard_Real, xCXY: Standard_Real, xCXZ: Standard_Real, xCYZ: Standard_Real, xCX: Standard_Real, xCY: Standard_Real, xCZ: Standard_Real, xCCte: Standard_Real, Axis: gp_Ax3): void;
  SpecialPoints(): NCollection_List<gp_Pnt>;
}

  export declare class IntAna_Quadric_1 extends IntAna_Quadric {
    constructor();
  }

  export declare class IntAna_Quadric_2 extends IntAna_Quadric {
    constructor(P: gp_Pln);
  }

  export declare class IntAna_Quadric_3 extends IntAna_Quadric {
    constructor(Sph: gp_Sphere);
  }

  export declare class IntAna_Quadric_4 extends IntAna_Quadric {
    constructor(Cyl: gp_Cylinder);
  }

  export declare class IntAna_Quadric_5 extends IntAna_Quadric {
    constructor(Cone: gp_Cone);
  }

export declare class IntAna2d_IntPoint {
  SetValue_1(X: Standard_Real, Y: Standard_Real, U1: Standard_Real, U2: Standard_Real): void;
  SetValue_2(X: Standard_Real, Y: Standard_Real, U1: Standard_Real): void;
  Value(): gp_Pnt2d;
  SecondIsImplicit(): Standard_Boolean;
  ParamOnFirst(): Standard_Real;
  ParamOnSecond(): Standard_Real;
}

  export declare class IntAna2d_IntPoint_1 extends IntAna2d_IntPoint {
    constructor(X: Standard_Real, Y: Standard_Real, U1: Standard_Real, U2: Standard_Real);
  }

  export declare class IntAna2d_IntPoint_2 extends IntAna2d_IntPoint {
    constructor(X: Standard_Real, Y: Standard_Real, U1: Standard_Real);
  }

  export declare class IntAna2d_IntPoint_3 extends IntAna2d_IntPoint {
    constructor();
  }

export declare class IntAna2d_AnaIntersection {
  Perform_1(L1: gp_Lin2d, L2: gp_Lin2d): void;
  Perform_2(C1: gp_Circ2d, C2: gp_Circ2d): void;
  Perform_3(L: gp_Lin2d, C: gp_Circ2d): void;
  Perform_4(L: gp_Lin2d, C: IntAna2d_Conic): void;
  Perform_5(C: gp_Circ2d, Co: IntAna2d_Conic): void;
  Perform_6(E: gp_Elips2d, C: IntAna2d_Conic): void;
  Perform_7(P: gp_Parab2d, C: IntAna2d_Conic): void;
  Perform_8(H: gp_Hypr2d, C: IntAna2d_Conic): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  IdenticalElements(): Standard_Boolean;
  ParallelElements(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(N: Standard_Integer): IntAna2d_IntPoint;
}

  export declare class IntAna2d_AnaIntersection_1 extends IntAna2d_AnaIntersection {
    constructor();
  }

  export declare class IntAna2d_AnaIntersection_2 extends IntAna2d_AnaIntersection {
    constructor(L1: gp_Lin2d, L2: gp_Lin2d);
  }

  export declare class IntAna2d_AnaIntersection_3 extends IntAna2d_AnaIntersection {
    constructor(C1: gp_Circ2d, C2: gp_Circ2d);
  }

  export declare class IntAna2d_AnaIntersection_4 extends IntAna2d_AnaIntersection {
    constructor(L: gp_Lin2d, C: gp_Circ2d);
  }

  export declare class IntAna2d_AnaIntersection_5 extends IntAna2d_AnaIntersection {
    constructor(L: gp_Lin2d, C: IntAna2d_Conic);
  }

  export declare class IntAna2d_AnaIntersection_6 extends IntAna2d_AnaIntersection {
    constructor(C: gp_Circ2d, Co: IntAna2d_Conic);
  }

  export declare class IntAna2d_AnaIntersection_7 extends IntAna2d_AnaIntersection {
    constructor(E: gp_Elips2d, C: IntAna2d_Conic);
  }

  export declare class IntAna2d_AnaIntersection_8 extends IntAna2d_AnaIntersection {
    constructor(P: gp_Parab2d, C: IntAna2d_Conic);
  }

  export declare class IntAna2d_AnaIntersection_9 extends IntAna2d_AnaIntersection {
    constructor(H: gp_Hypr2d, C: IntAna2d_Conic);
  }

export declare class IntAna2d_Conic {
  Value(X: Standard_Real, Y: Standard_Real): Standard_Real;
  Grad(X: Standard_Real, Y: Standard_Real): gp_XY;
  ValAndGrad(X: Standard_Real, Y: Standard_Real, Val: Standard_Real, Grd: gp_XY): void;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real, F: Standard_Real): void;
  NewCoefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real, E: Standard_Real, F: Standard_Real, Axis: gp_Ax2d): void;
}

  export declare class IntAna2d_Conic_1 extends IntAna2d_Conic {
    constructor(C: gp_Circ2d);
  }

  export declare class IntAna2d_Conic_2 extends IntAna2d_Conic {
    constructor(C: gp_Lin2d);
  }

  export declare class IntAna2d_Conic_3 extends IntAna2d_Conic {
    constructor(C: gp_Parab2d);
  }

  export declare class IntAna2d_Conic_4 extends IntAna2d_Conic {
    constructor(C: gp_Hypr2d);
  }

  export declare class IntAna2d_Conic_5 extends IntAna2d_Conic {
    constructor(C: gp_Elips2d);
  }

export declare class MyDirectPolynomialRoots {
  NbSolutions(): Standard_Integer;
  Value(i: Standard_Integer): Standard_Real;
  IsDone(): Standard_Real;
  InfiniteRoots(): Standard_Boolean;
}

  export declare class MyDirectPolynomialRoots_1 extends MyDirectPolynomialRoots {
    constructor(A4: Standard_Real, A3: Standard_Real, A2: Standard_Real, A1: Standard_Real, A0: Standard_Real);
  }

  export declare class MyDirectPolynomialRoots_2 extends MyDirectPolynomialRoots {
    constructor(A2: Standard_Real, A1: Standard_Real, A0: Standard_Real);
  }

export declare class ProjLib {
  constructor();
  Project_1(Pl: gp_Pln, P: gp_Pnt): gp_Pnt2d;
  Project_2(Pl: gp_Pln, L: gp_Lin): gp_Lin2d;
  Project_3(Pl: gp_Pln, C: gp_Circ): gp_Circ2d;
  Project_4(Pl: gp_Pln, E: gp_Elips): gp_Elips2d;
  Project_5(Pl: gp_Pln, P: gp_Parab): gp_Parab2d;
  Project_6(Pl: gp_Pln, H: gp_Hypr): gp_Hypr2d;
  Project_7(Cy: gp_Cylinder, P: gp_Pnt): gp_Pnt2d;
  Project_8(Cy: gp_Cylinder, L: gp_Lin): gp_Lin2d;
  Project_9(Cy: gp_Cylinder, Ci: gp_Circ): gp_Lin2d;
  Project_10(Co: gp_Cone, P: gp_Pnt): gp_Pnt2d;
  Project_11(Co: gp_Cone, L: gp_Lin): gp_Lin2d;
  Project_12(Co: gp_Cone, Ci: gp_Circ): gp_Lin2d;
  Project_13(Sp: gp_Sphere, P: gp_Pnt): gp_Pnt2d;
  Project_14(Sp: gp_Sphere, Ci: gp_Circ): gp_Lin2d;
  Project_15(To: gp_Torus, P: gp_Pnt): gp_Pnt2d;
  Project_16(To: gp_Torus, Ci: gp_Circ): gp_Lin2d;
  MakePCurveOfType(PC: ProjLib_ProjectedCurve, aC: any): void;
  IsAnaSurf(theAS: any): Standard_Boolean;
}

export declare class ProjLib_CompProjectedCurve extends Adaptor2d_Curve2d {
  Init(): void;
  Load_1(S: any): void;
  Load_2(C: any): void;
  GetSurface(): any;
  GetCurve(): any;
  GetTolerance(TolU: Standard_Real, TolV: Standard_Real): void;
  NbCurves(): Standard_Integer;
  Bounds(Index: Standard_Integer, Udeb: Standard_Real, Ufin: Standard_Real): void;
  IsSinglePnt(Index: Standard_Integer, P: gp_Pnt2d): Standard_Boolean;
  IsUIso(Index: Standard_Integer, U: Standard_Real): Standard_Boolean;
  IsVIso(Index: Standard_Integer, V: Standard_Real): Standard_Boolean;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Trim(FirstParam: Standard_Real, LastParam: Standard_Real, Tol: Standard_Real): any;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  MaxDistance(Index: Standard_Integer): Standard_Real;
  GetSequence(): any;
  GetType(): GeomAbs_CurveType;
}

  export declare class ProjLib_CompProjectedCurve_1 extends ProjLib_CompProjectedCurve {
    constructor();
  }

  export declare class ProjLib_CompProjectedCurve_2 extends ProjLib_CompProjectedCurve {
    constructor(S: any, C: any, TolU: Standard_Real, TolV: Standard_Real);
  }

  export declare class ProjLib_CompProjectedCurve_3 extends ProjLib_CompProjectedCurve {
    constructor(S: any, C: any, TolU: Standard_Real, TolV: Standard_Real, MaxDist: Standard_Real);
  }

export declare class ProjLib_ComputeApprox {
  Perform(C: any, S: any): void;
  SetTolerance(theTolerance: Standard_Real): void;
  SetDegree(theDegMin: Standard_Integer, theDegMax: Standard_Integer): void;
  SetMaxSegments(theMaxSegments: Standard_Integer): void;
  SetBndPnt(theBndPnt: AppParCurves_Constraint): void;
  BSpline(): any;
  Bezier(): any;
  Tolerance(): Standard_Real;
}

  export declare class ProjLib_ComputeApprox_1 extends ProjLib_ComputeApprox {
    constructor();
  }

  export declare class ProjLib_ComputeApprox_2 extends ProjLib_ComputeApprox {
    constructor(C: any, S: any, Tol: Standard_Real);
  }

export declare class ProjLib_ComputeApproxOnPolarSurface {
  SetDegree(theDegMin: Standard_Integer, theDegMax: Standard_Integer): void;
  SetMaxSegments(theMaxSegments: Standard_Integer): void;
  SetBndPnt(theBndPnt: AppParCurves_Constraint): void;
  SetMaxDist(theMaxDist: Standard_Real): void;
  SetTolerance(theTolerance: Standard_Real): void;
  Perform_1(C: any, S: any): void;
  Perform_2(InitCurve2d: any, C: any, S: any): any;
  BuildInitialCurve2d(Curve: any, S: any): any;
  ProjectUsingInitialCurve2d(Curve: any, S: any, InitCurve2d: any): any;
  BSpline(): any;
  Curve2d(): any;
  IsDone(): Standard_Boolean;
  Tolerance(): Standard_Real;
}

  export declare class ProjLib_ComputeApproxOnPolarSurface_1 extends ProjLib_ComputeApproxOnPolarSurface {
    constructor();
  }

  export declare class ProjLib_ComputeApproxOnPolarSurface_2 extends ProjLib_ComputeApproxOnPolarSurface {
    constructor(C: any, S: any, Tol: Standard_Real);
  }

  export declare class ProjLib_ComputeApproxOnPolarSurface_3 extends ProjLib_ComputeApproxOnPolarSurface {
    constructor(InitCurve2d: any, C: any, S: any, Tol: Standard_Real);
  }

  export declare class ProjLib_ComputeApproxOnPolarSurface_4 extends ProjLib_ComputeApproxOnPolarSurface {
    constructor(InitCurve2d: any, InitCurve2dBis: any, C: any, S: any, Tol: Standard_Real);
  }

export declare class ProjLib_Projector {
  constructor()
  IsDone(): Standard_Boolean;
  Done(): void;
  GetType(): GeomAbs_CurveType;
  SetBSpline(C: any): void;
  SetBezier(C: any): void;
  SetType(Type: GeomAbs_CurveType): void;
  IsPeriodic(): Standard_Boolean;
  SetPeriodic(): void;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Bezier(): any;
  BSpline(): any;
  Project_1(L: gp_Lin): void;
  Project_2(C: gp_Circ): void;
  Project_3(E: gp_Elips): void;
  Project_4(P: gp_Parab): void;
  Project_5(H: gp_Hypr): void;
  UFrame(CFirst: Standard_Real, CLast: Standard_Real, UFirst: Standard_Real, Period: Standard_Real): void;
  VFrame(CFirst: Standard_Real, CLast: Standard_Real, VFirst: Standard_Real, Period: Standard_Real): void;
}

export declare class ProjLib_Cone extends ProjLib_Projector {
  Init(Co: gp_Cone): void;
  Project_1(L: gp_Lin): void;
  Project_2(C: gp_Circ): void;
  Project_3(E: gp_Elips): void;
  Project_4(P: gp_Parab): void;
  Project_5(H: gp_Hypr): void;
}

  export declare class ProjLib_Cone_1 extends ProjLib_Cone {
    constructor();
  }

  export declare class ProjLib_Cone_2 extends ProjLib_Cone {
    constructor(Co: gp_Cone);
  }

  export declare class ProjLib_Cone_3 extends ProjLib_Cone {
    constructor(Co: gp_Cone, L: gp_Lin);
  }

  export declare class ProjLib_Cone_4 extends ProjLib_Cone {
    constructor(Co: gp_Cone, C: gp_Circ);
  }

export declare class ProjLib_Cylinder extends ProjLib_Projector {
  Init(Cyl: gp_Cylinder): void;
  Project_1(L: gp_Lin): void;
  Project_2(C: gp_Circ): void;
  Project_3(E: gp_Elips): void;
  Project_4(P: gp_Parab): void;
  Project_5(H: gp_Hypr): void;
}

  export declare class ProjLib_Cylinder_1 extends ProjLib_Cylinder {
    constructor();
  }

  export declare class ProjLib_Cylinder_2 extends ProjLib_Cylinder {
    constructor(Cyl: gp_Cylinder);
  }

  export declare class ProjLib_Cylinder_3 extends ProjLib_Cylinder {
    constructor(Cyl: gp_Cylinder, L: gp_Lin);
  }

  export declare class ProjLib_Cylinder_4 extends ProjLib_Cylinder {
    constructor(Cyl: gp_Cylinder, C: gp_Circ);
  }

  export declare class ProjLib_Cylinder_5 extends ProjLib_Cylinder {
    constructor(Cyl: gp_Cylinder, E: gp_Elips);
  }

export declare class ProjLib_HCompProjectedCurve extends Adaptor2d_HCurve2d {
  Set(C: ProjLib_CompProjectedCurve): void;
  Curve2d(): Adaptor2d_Curve2d;
  ChangeCurve2d(): ProjLib_CompProjectedCurve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ProjLib_HCompProjectedCurve_1 extends ProjLib_HCompProjectedCurve {
    constructor();
  }

  export declare class ProjLib_HCompProjectedCurve_2 extends ProjLib_HCompProjectedCurve {
    constructor(C: ProjLib_CompProjectedCurve);
  }

export declare class ProjLib_ProjectedCurve extends Adaptor2d_Curve2d {
  Load_1(Tolerance: Standard_Real): void;
  Load_2(S: any): void;
  Perform(C: any): void;
  SetDegree(theDegMin: Standard_Integer, theDegMax: Standard_Integer): void;
  SetMaxSegments(theMaxSegments: Standard_Integer): void;
  SetBndPnt(theBndPnt: AppParCurves_Constraint): void;
  SetMaxDist(theMaxDist: Standard_Real): void;
  GetSurface(): any;
  GetCurve(): any;
  GetTolerance(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
}

  export declare class ProjLib_ProjectedCurve_1 extends ProjLib_ProjectedCurve {
    constructor();
  }

  export declare class ProjLib_ProjectedCurve_2 extends ProjLib_ProjectedCurve {
    constructor(S: any);
  }

  export declare class ProjLib_ProjectedCurve_3 extends ProjLib_ProjectedCurve {
    constructor(S: any, C: any);
  }

  export declare class ProjLib_ProjectedCurve_4 extends ProjLib_ProjectedCurve {
    constructor(S: any, C: any, Tol: Standard_Real);
  }

export declare class ProjLib_HProjectedCurve extends Adaptor2d_HCurve2d {
  Set(C: ProjLib_ProjectedCurve): void;
  Curve2d(): Adaptor2d_Curve2d;
  ChangeCurve2d(): ProjLib_ProjectedCurve;
  get_type_name(): string;
  get_type_descriptor(): any;
  DynamicType(): any;
}

  export declare class ProjLib_HProjectedCurve_1 extends ProjLib_HProjectedCurve {
    constructor();
  }

  export declare class ProjLib_HProjectedCurve_2 extends ProjLib_HProjectedCurve {
    constructor(C: ProjLib_ProjectedCurve);
  }

export declare class ProjLib_Plane extends ProjLib_Projector {
  Init(Pl: gp_Pln): void;
  Project_1(L: gp_Lin): void;
  Project_2(C: gp_Circ): void;
  Project_3(E: gp_Elips): void;
  Project_4(P: gp_Parab): void;
  Project_5(H: gp_Hypr): void;
}

  export declare class ProjLib_Plane_1 extends ProjLib_Plane {
    constructor();
  }

  export declare class ProjLib_Plane_2 extends ProjLib_Plane {
    constructor(Pl: gp_Pln);
  }

  export declare class ProjLib_Plane_3 extends ProjLib_Plane {
    constructor(Pl: gp_Pln, L: gp_Lin);
  }

  export declare class ProjLib_Plane_4 extends ProjLib_Plane {
    constructor(Pl: gp_Pln, C: gp_Circ);
  }

  export declare class ProjLib_Plane_5 extends ProjLib_Plane {
    constructor(Pl: gp_Pln, E: gp_Elips);
  }

  export declare class ProjLib_Plane_6 extends ProjLib_Plane {
    constructor(Pl: gp_Pln, P: gp_Parab);
  }

  export declare class ProjLib_Plane_7 extends ProjLib_Plane {
    constructor(Pl: gp_Pln, H: gp_Hypr);
  }

export declare class ProjLib_PrjFunc extends math_FunctionSetWithDerivatives {
  constructor(C: Adaptor3d_CurvePtr, FixVal: Standard_Real, S: Adaptor3d_SurfacePtr, Fix: Standard_Integer)
  NbVariables(): Standard_Integer;
  NbEquations(): Standard_Integer;
  Value(X: math_Vector, F: math_Vector): Standard_Boolean;
  Derivatives(X: math_Vector, D: math_Matrix): Standard_Boolean;
  Values(X: math_Vector, F: math_Vector, D: math_Matrix): Standard_Boolean;
  Solution(): gp_Pnt2d;
}

export declare class ProjLib_PrjResolve {
  constructor(C: Adaptor3d_Curve, S: Adaptor3d_Surface, Fix: Standard_Integer)
  Perform(t: Standard_Real, U: Standard_Real, V: Standard_Real, Tol: gp_Pnt2d, Inf: gp_Pnt2d, Sup: gp_Pnt2d, FTol: Standard_Real, StrictInside: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  Solution(): gp_Pnt2d;
}

export declare class ProjLib_ProjectOnPlane extends Adaptor3d_Curve {
  Load(C: any, Tolerance: Standard_Real, KeepParametrization: Standard_Boolean): void;
  GetPlane(): gp_Ax3;
  GetDirection(): gp_Dir;
  GetCurve(): any;
  GetResult(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: TColStd_Array1OfReal, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
}

  export declare class ProjLib_ProjectOnPlane_1 extends ProjLib_ProjectOnPlane {
    constructor();
  }

  export declare class ProjLib_ProjectOnPlane_2 extends ProjLib_ProjectOnPlane {
    constructor(Pl: gp_Ax3);
  }

  export declare class ProjLib_ProjectOnPlane_3 extends ProjLib_ProjectOnPlane {
    constructor(Pl: gp_Ax3, D: gp_Dir);
  }

export declare class ProjLib_Sphere extends ProjLib_Projector {
  Init(Sp: gp_Sphere): void;
  Project_1(L: gp_Lin): void;
  Project_2(C: gp_Circ): void;
  Project_3(E: gp_Elips): void;
  Project_4(P: gp_Parab): void;
  Project_5(H: gp_Hypr): void;
  SetInBounds(U: Standard_Real): void;
}

  export declare class ProjLib_Sphere_1 extends ProjLib_Sphere {
    constructor();
  }

  export declare class ProjLib_Sphere_2 extends ProjLib_Sphere {
    constructor(Sp: gp_Sphere);
  }

  export declare class ProjLib_Sphere_3 extends ProjLib_Sphere {
    constructor(Sp: gp_Sphere, C: gp_Circ);
  }

export declare class ProjLib_Torus extends ProjLib_Projector {
  Init(To: gp_Torus): void;
  Project_1(L: gp_Lin): void;
  Project_2(C: gp_Circ): void;
  Project_3(E: gp_Elips): void;
  Project_4(P: gp_Parab): void;
  Project_5(H: gp_Hypr): void;
}

  export declare class ProjLib_Torus_1 extends ProjLib_Torus {
    constructor();
  }

  export declare class ProjLib_Torus_2 extends ProjLib_Torus {
    constructor(To: gp_Torus);
  }

  export declare class ProjLib_Torus_3 extends ProjLib_Torus {
    constructor(To: gp_Torus, C: gp_Circ);
  }

export declare class gce_Root {
  constructor();
  IsDone(): Standard_Boolean;
  Status(): gce_ErrorType;
}

export declare class gce_MakeCirc extends gce_Root {
  Value(): gp_Circ;
  Operator(): gp_Circ;
}

  export declare class gce_MakeCirc_1 extends gce_MakeCirc {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

  export declare class gce_MakeCirc_2 extends gce_MakeCirc {
    constructor(Circ: gp_Circ, Dist: Standard_Real);
  }

  export declare class gce_MakeCirc_3 extends gce_MakeCirc {
    constructor(Circ: gp_Circ, Point: gp_Pnt);
  }

  export declare class gce_MakeCirc_4 extends gce_MakeCirc {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class gce_MakeCirc_5 extends gce_MakeCirc {
    constructor(Center: gp_Pnt, Norm: gp_Dir, Radius: Standard_Real);
  }

  export declare class gce_MakeCirc_6 extends gce_MakeCirc {
    constructor(Center: gp_Pnt, Plane: gp_Pln, Radius: Standard_Real);
  }

  export declare class gce_MakeCirc_7 extends gce_MakeCirc {
    constructor(Center: gp_Pnt, Ptaxis: gp_Pnt, Radius: Standard_Real);
  }

  export declare class gce_MakeCirc_8 extends gce_MakeCirc {
    constructor(Axis: gp_Ax1, Radius: Standard_Real);
  }

export declare class gce_MakeCirc2d extends gce_Root {
  Value(): gp_Circ2d;
  Operator(): gp_Circ2d;
}

  export declare class gce_MakeCirc2d_1 extends gce_MakeCirc2d {
    constructor(XAxis: gp_Ax2d, Radius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class gce_MakeCirc2d_2 extends gce_MakeCirc2d {
    constructor(Axis: gp_Ax22d, Radius: Standard_Real);
  }

  export declare class gce_MakeCirc2d_3 extends gce_MakeCirc2d {
    constructor(Circ: gp_Circ2d, Dist: Standard_Real);
  }

  export declare class gce_MakeCirc2d_4 extends gce_MakeCirc2d {
    constructor(Circ: gp_Circ2d, Point: gp_Pnt2d);
  }

  export declare class gce_MakeCirc2d_5 extends gce_MakeCirc2d {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d, P3: gp_Pnt2d);
  }

  export declare class gce_MakeCirc2d_6 extends gce_MakeCirc2d {
    constructor(Center: gp_Pnt2d, Radius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class gce_MakeCirc2d_7 extends gce_MakeCirc2d {
    constructor(Center: gp_Pnt2d, Point: gp_Pnt2d, Sense: Standard_Boolean);
  }

export declare class gce_MakeCone extends gce_Root {
  Value(): gp_Cone;
  Operator(): gp_Cone;
}

  export declare class gce_MakeCone_1 extends gce_MakeCone {
    constructor(A2: gp_Ax2, Ang: Standard_Real, Radius: Standard_Real);
  }

  export declare class gce_MakeCone_2 extends gce_MakeCone {
    constructor(Cone: gp_Cone, Point: gp_Pnt);
  }

  export declare class gce_MakeCone_3 extends gce_MakeCone {
    constructor(Cone: gp_Cone, Dist: Standard_Real);
  }

  export declare class gce_MakeCone_4 extends gce_MakeCone {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, P4: gp_Pnt);
  }

  export declare class gce_MakeCone_5 extends gce_MakeCone {
    constructor(Axis: gp_Ax1, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class gce_MakeCone_6 extends gce_MakeCone {
    constructor(Axis: gp_Lin, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class gce_MakeCone_7 extends gce_MakeCone {
    constructor(P1: gp_Pnt, P2: gp_Pnt, R1: Standard_Real, R2: Standard_Real);
  }

export declare class gce_MakeCylinder extends gce_Root {
  Value(): gp_Cylinder;
  Operator(): gp_Cylinder;
}

  export declare class gce_MakeCylinder_1 extends gce_MakeCylinder {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

  export declare class gce_MakeCylinder_2 extends gce_MakeCylinder {
    constructor(Cyl: gp_Cylinder, Point: gp_Pnt);
  }

  export declare class gce_MakeCylinder_3 extends gce_MakeCylinder {
    constructor(Cyl: gp_Cylinder, Dist: Standard_Real);
  }

  export declare class gce_MakeCylinder_4 extends gce_MakeCylinder {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class gce_MakeCylinder_5 extends gce_MakeCylinder {
    constructor(Axis: gp_Ax1, Radius: Standard_Real);
  }

  export declare class gce_MakeCylinder_6 extends gce_MakeCylinder {
    constructor(Circ: gp_Circ);
  }

export declare class gce_MakeDir extends gce_Root {
  Value(): gp_Dir;
  Operator(): gp_Dir;
}

  export declare class gce_MakeDir_1 extends gce_MakeDir {
    constructor(V: gp_Vec);
  }

  export declare class gce_MakeDir_2 extends gce_MakeDir {
    constructor(Coord: gp_XYZ);
  }

  export declare class gce_MakeDir_3 extends gce_MakeDir {
    constructor(Xv: Standard_Real, Yv: Standard_Real, Zv: Standard_Real);
  }

  export declare class gce_MakeDir_4 extends gce_MakeDir {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

export declare class gce_MakeDir2d extends gce_Root {
  Value(): gp_Dir2d;
  Operator(): gp_Dir2d;
}

  export declare class gce_MakeDir2d_1 extends gce_MakeDir2d {
    constructor(V: gp_Vec2d);
  }

  export declare class gce_MakeDir2d_2 extends gce_MakeDir2d {
    constructor(Coord: gp_XY);
  }

  export declare class gce_MakeDir2d_3 extends gce_MakeDir2d {
    constructor(Xv: Standard_Real, Yv: Standard_Real);
  }

  export declare class gce_MakeDir2d_4 extends gce_MakeDir2d {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

export declare class gce_MakeElips extends gce_Root {
  Value(): gp_Elips;
  Operator(): gp_Elips;
}

  export declare class gce_MakeElips_1 extends gce_MakeElips {
    constructor(A2: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

  export declare class gce_MakeElips_2 extends gce_MakeElips {
    constructor(S1: gp_Pnt, S2: gp_Pnt, Center: gp_Pnt);
  }

export declare class gce_MakeElips2d extends gce_Root {
  Value(): gp_Elips2d;
  Operator(): gp_Elips2d;
}

  export declare class gce_MakeElips2d_1 extends gce_MakeElips2d {
    constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class gce_MakeElips2d_2 extends gce_MakeElips2d {
    constructor(A: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

  export declare class gce_MakeElips2d_3 extends gce_MakeElips2d {
    constructor(S1: gp_Pnt2d, S2: gp_Pnt2d, Center: gp_Pnt2d);
  }

export declare class gce_MakeHypr extends gce_Root {
  Value(): gp_Hypr;
  Operator(): gp_Hypr;
}

  export declare class gce_MakeHypr_1 extends gce_MakeHypr {
    constructor(A2: gp_Ax2, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

  export declare class gce_MakeHypr_2 extends gce_MakeHypr {
    constructor(S1: gp_Pnt, S2: gp_Pnt, Center: gp_Pnt);
  }

export declare class gce_MakeHypr2d extends gce_Root {
  Value(): gp_Hypr2d;
  Operator(): gp_Hypr2d;
}

  export declare class gce_MakeHypr2d_1 extends gce_MakeHypr2d {
    constructor(S1: gp_Pnt2d, S2: gp_Pnt2d, Center: gp_Pnt2d);
  }

  export declare class gce_MakeHypr2d_2 extends gce_MakeHypr2d {
    constructor(MajorAxis: gp_Ax2d, MajorRadius: Standard_Real, MinorRadius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class gce_MakeHypr2d_3 extends gce_MakeHypr2d {
    constructor(A: gp_Ax22d, MajorRadius: Standard_Real, MinorRadius: Standard_Real);
  }

export declare class gce_MakeLin extends gce_Root {
  Value(): gp_Lin;
  Operator(): gp_Lin;
}

  export declare class gce_MakeLin_1 extends gce_MakeLin {
    constructor(A1: gp_Ax1);
  }

  export declare class gce_MakeLin_2 extends gce_MakeLin {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class gce_MakeLin_3 extends gce_MakeLin {
    constructor(Lin: gp_Lin, Point: gp_Pnt);
  }

  export declare class gce_MakeLin_4 extends gce_MakeLin {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

export declare class gce_MakeLin2d extends gce_Root {
  Value(): gp_Lin2d;
  Operator(): gp_Lin2d;
}

  export declare class gce_MakeLin2d_1 extends gce_MakeLin2d {
    constructor(A: gp_Ax2d);
  }

  export declare class gce_MakeLin2d_2 extends gce_MakeLin2d {
    constructor(P: gp_Pnt2d, V: gp_Dir2d);
  }

  export declare class gce_MakeLin2d_3 extends gce_MakeLin2d {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real);
  }

  export declare class gce_MakeLin2d_4 extends gce_MakeLin2d {
    constructor(Lin: gp_Lin2d, Dist: Standard_Real);
  }

  export declare class gce_MakeLin2d_5 extends gce_MakeLin2d {
    constructor(Lin: gp_Lin2d, Point: gp_Pnt2d);
  }

  export declare class gce_MakeLin2d_6 extends gce_MakeLin2d {
    constructor(P1: gp_Pnt2d, P2: gp_Pnt2d);
  }

export declare class gce_MakeMirror {
  Value(): gp_Trsf;
  Operator(): gp_Trsf;
}

  export declare class gce_MakeMirror_1 extends gce_MakeMirror {
    constructor(Point: gp_Pnt);
  }

  export declare class gce_MakeMirror_2 extends gce_MakeMirror {
    constructor(Axis: gp_Ax1);
  }

  export declare class gce_MakeMirror_3 extends gce_MakeMirror {
    constructor(Line: gp_Lin);
  }

  export declare class gce_MakeMirror_4 extends gce_MakeMirror {
    constructor(Point: gp_Pnt, Direc: gp_Dir);
  }

  export declare class gce_MakeMirror_5 extends gce_MakeMirror {
    constructor(Plane: gp_Pln);
  }

  export declare class gce_MakeMirror_6 extends gce_MakeMirror {
    constructor(Plane: gp_Ax2);
  }

export declare class gce_MakeMirror2d {
  Value(): gp_Trsf2d;
  Operator(): gp_Trsf2d;
}

  export declare class gce_MakeMirror2d_1 extends gce_MakeMirror2d {
    constructor(Point: gp_Pnt2d);
  }

  export declare class gce_MakeMirror2d_2 extends gce_MakeMirror2d {
    constructor(Axis: gp_Ax2d);
  }

  export declare class gce_MakeMirror2d_3 extends gce_MakeMirror2d {
    constructor(Line: gp_Lin2d);
  }

  export declare class gce_MakeMirror2d_4 extends gce_MakeMirror2d {
    constructor(Point: gp_Pnt2d, Direc: gp_Dir2d);
  }

export declare class gce_MakeParab extends gce_Root {
  Value(): gp_Parab;
  Operator(): gp_Parab;
}

  export declare class gce_MakeParab_1 extends gce_MakeParab {
    constructor(A2: gp_Ax2, Focal: Standard_Real);
  }

  export declare class gce_MakeParab_2 extends gce_MakeParab {
    constructor(D: gp_Ax1, F: gp_Pnt);
  }

export declare class gce_MakeParab2d extends gce_Root {
  Value(): gp_Parab2d;
  Operator(): gp_Parab2d;
}

  export declare class gce_MakeParab2d_1 extends gce_MakeParab2d {
    constructor(MirrorAxis: gp_Ax2d, Focal: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class gce_MakeParab2d_2 extends gce_MakeParab2d {
    constructor(A: gp_Ax22d, Focal: Standard_Real);
  }

  export declare class gce_MakeParab2d_3 extends gce_MakeParab2d {
    constructor(D: gp_Ax2d, F: gp_Pnt2d, Sense: Standard_Boolean);
  }

  export declare class gce_MakeParab2d_4 extends gce_MakeParab2d {
    constructor(S1: gp_Pnt2d, Center: gp_Pnt2d, Sense: Standard_Boolean);
  }

export declare class gce_MakePln extends gce_Root {
  Value(): gp_Pln;
  Operator(): gp_Pln;
}

  export declare class gce_MakePln_1 extends gce_MakePln {
    constructor(A2: gp_Ax2);
  }

  export declare class gce_MakePln_2 extends gce_MakePln {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class gce_MakePln_3 extends gce_MakePln {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real);
  }

  export declare class gce_MakePln_4 extends gce_MakePln {
    constructor(Pln: gp_Pln, Point: gp_Pnt);
  }

  export declare class gce_MakePln_5 extends gce_MakePln {
    constructor(Pln: gp_Pln, Dist: Standard_Real);
  }

  export declare class gce_MakePln_6 extends gce_MakePln {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt);
  }

  export declare class gce_MakePln_7 extends gce_MakePln {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class gce_MakePln_8 extends gce_MakePln {
    constructor(Axis: gp_Ax1);
  }

export declare class gce_MakeRotation {
  Value(): gp_Trsf;
  Operator(): gp_Trsf;
}

  export declare class gce_MakeRotation_1 extends gce_MakeRotation {
    constructor(Line: gp_Lin, Angle: Standard_Real);
  }

  export declare class gce_MakeRotation_2 extends gce_MakeRotation {
    constructor(Axis: gp_Ax1, Angle: Standard_Real);
  }

  export declare class gce_MakeRotation_3 extends gce_MakeRotation {
    constructor(Point: gp_Pnt, Direc: gp_Dir, Angle: Standard_Real);
  }

export declare class gce_MakeRotation2d {
  constructor(Point: gp_Pnt2d, Angle: Standard_Real)
  Value(): gp_Trsf2d;
  Operator(): gp_Trsf2d;
}

export declare class gce_MakeScale {
  constructor(Point: gp_Pnt, Scale: Standard_Real)
  Value(): gp_Trsf;
  Operator(): gp_Trsf;
}

export declare class gce_MakeScale2d {
  constructor(Point: gp_Pnt2d, Scale: Standard_Real)
  Value(): gp_Trsf2d;
  Operator(): gp_Trsf2d;
}

export declare class gce_MakeTranslation {
  Value(): gp_Trsf;
  Operator(): gp_Trsf;
}

  export declare class gce_MakeTranslation_1 extends gce_MakeTranslation {
    constructor(Vect: gp_Vec);
  }

  export declare class gce_MakeTranslation_2 extends gce_MakeTranslation {
    constructor(Point1: gp_Pnt, Point2: gp_Pnt);
  }

export declare class gce_MakeTranslation2d {
  Value(): gp_Trsf2d;
  Operator(): gp_Trsf2d;
}

  export declare class gce_MakeTranslation2d_1 extends gce_MakeTranslation2d {
    constructor(Vect: gp_Vec2d);
  }

  export declare class gce_MakeTranslation2d_2 extends gce_MakeTranslation2d {
    constructor(Point1: gp_Pnt2d, Point2: gp_Pnt2d);
  }

export declare class AdvApp2Var_SequenceOfStrip extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: AdvApp2Var_SequenceOfStrip): AdvApp2Var_SequenceOfStrip;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: AdvApp2Var_Strip): void;
  Append_2(theSeq: AdvApp2Var_SequenceOfStrip): void;
  Prepend_1(theItem: AdvApp2Var_Strip): void;
  Prepend_2(theSeq: AdvApp2Var_SequenceOfStrip): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: AdvApp2Var_Strip): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: AdvApp2Var_SequenceOfStrip): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: AdvApp2Var_SequenceOfStrip): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: AdvApp2Var_Strip): void;
  Split(theIndex: Standard_Integer, theSeq: AdvApp2Var_SequenceOfStrip): void;
  First(): AdvApp2Var_Strip;
  ChangeFirst(): AdvApp2Var_Strip;
  Last(): AdvApp2Var_Strip;
  ChangeLast(): AdvApp2Var_Strip;
  Value(theIndex: Standard_Integer): AdvApp2Var_Strip;
  ChangeValue(theIndex: Standard_Integer): AdvApp2Var_Strip;
  SetValue(theIndex: Standard_Integer, theItem: AdvApp2Var_Strip): void;
}

  export declare class AdvApp2Var_SequenceOfStrip_1 extends AdvApp2Var_SequenceOfStrip {
    constructor();
  }

  export declare class AdvApp2Var_SequenceOfStrip_2 extends AdvApp2Var_SequenceOfStrip {
    constructor(theAllocator: any);
  }

  export declare class AdvApp2Var_SequenceOfStrip_3 extends AdvApp2Var_SequenceOfStrip {
    constructor(theOther: AdvApp2Var_SequenceOfStrip);
  }

export declare class AppParCurves_Array1OfMultiPoint {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: AppParCurves_MultiPoint): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: AppParCurves_Array1OfMultiPoint): AppParCurves_Array1OfMultiPoint;
  Move(theOther: AppParCurves_Array1OfMultiPoint): AppParCurves_Array1OfMultiPoint;
  First(): AppParCurves_MultiPoint;
  ChangeFirst(): AppParCurves_MultiPoint;
  Last(): AppParCurves_MultiPoint;
  ChangeLast(): AppParCurves_MultiPoint;
  Value(theIndex: Standard_Integer): AppParCurves_MultiPoint;
  ChangeValue(theIndex: Standard_Integer): AppParCurves_MultiPoint;
  SetValue(theIndex: Standard_Integer, theItem: AppParCurves_MultiPoint): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class AppParCurves_Array1OfMultiPoint_1 extends AppParCurves_Array1OfMultiPoint {
    constructor();
  }

  export declare class AppParCurves_Array1OfMultiPoint_2 extends AppParCurves_Array1OfMultiPoint {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class AppParCurves_Array1OfMultiPoint_3 extends AppParCurves_Array1OfMultiPoint {
    constructor(theOther: AppParCurves_Array1OfMultiPoint);
  }

  export declare class AppParCurves_Array1OfMultiPoint_4 extends AppParCurves_Array1OfMultiPoint {
    constructor(theOther: AppParCurves_Array1OfMultiPoint);
  }

  export declare class AppParCurves_Array1OfMultiPoint_5 extends AppParCurves_Array1OfMultiPoint {
    constructor(theBegin: AppParCurves_MultiPoint, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_AppParCurves_HArray1OfMultiPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppParCurves_HArray1OfMultiPoint): void;
  get(): AppParCurves_HArray1OfMultiPoint;
}

  export declare class Handle_AppParCurves_HArray1OfMultiPoint_1 extends Handle_AppParCurves_HArray1OfMultiPoint {
    constructor();
  }

  export declare class Handle_AppParCurves_HArray1OfMultiPoint_2 extends Handle_AppParCurves_HArray1OfMultiPoint {
    constructor(thePtr: AppParCurves_HArray1OfMultiPoint);
  }

  export declare class Handle_AppParCurves_HArray1OfMultiPoint_3 extends Handle_AppParCurves_HArray1OfMultiPoint {
    constructor(theHandle: Handle_AppParCurves_HArray1OfMultiPoint);
  }

  export declare class Handle_AppParCurves_HArray1OfMultiPoint_4 extends Handle_AppParCurves_HArray1OfMultiPoint {
    constructor(theHandle: Handle_AppParCurves_HArray1OfMultiPoint);
  }

export declare class AppDef_Array1OfMultiPointConstraint {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: AppDef_MultiPointConstraint): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: AppDef_Array1OfMultiPointConstraint): AppDef_Array1OfMultiPointConstraint;
  Move(theOther: AppDef_Array1OfMultiPointConstraint): AppDef_Array1OfMultiPointConstraint;
  First(): AppDef_MultiPointConstraint;
  ChangeFirst(): AppDef_MultiPointConstraint;
  Last(): AppDef_MultiPointConstraint;
  ChangeLast(): AppDef_MultiPointConstraint;
  Value(theIndex: Standard_Integer): AppDef_MultiPointConstraint;
  ChangeValue(theIndex: Standard_Integer): AppDef_MultiPointConstraint;
  SetValue(theIndex: Standard_Integer, theItem: AppDef_MultiPointConstraint): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class AppDef_Array1OfMultiPointConstraint_1 extends AppDef_Array1OfMultiPointConstraint {
    constructor();
  }

  export declare class AppDef_Array1OfMultiPointConstraint_2 extends AppDef_Array1OfMultiPointConstraint {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class AppDef_Array1OfMultiPointConstraint_3 extends AppDef_Array1OfMultiPointConstraint {
    constructor(theOther: AppDef_Array1OfMultiPointConstraint);
  }

  export declare class AppDef_Array1OfMultiPointConstraint_4 extends AppDef_Array1OfMultiPointConstraint {
    constructor(theOther: AppDef_Array1OfMultiPointConstraint);
  }

  export declare class AppDef_Array1OfMultiPointConstraint_5 extends AppDef_Array1OfMultiPointConstraint {
    constructor(theBegin: AppDef_MultiPointConstraint, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_AppDef_HArray1OfMultiPointConstraint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppDef_HArray1OfMultiPointConstraint): void;
  get(): AppDef_HArray1OfMultiPointConstraint;
}

  export declare class Handle_AppDef_HArray1OfMultiPointConstraint_1 extends Handle_AppDef_HArray1OfMultiPointConstraint {
    constructor();
  }

  export declare class Handle_AppDef_HArray1OfMultiPointConstraint_2 extends Handle_AppDef_HArray1OfMultiPointConstraint {
    constructor(thePtr: AppDef_HArray1OfMultiPointConstraint);
  }

  export declare class Handle_AppDef_HArray1OfMultiPointConstraint_3 extends Handle_AppDef_HArray1OfMultiPointConstraint {
    constructor(theHandle: Handle_AppDef_HArray1OfMultiPointConstraint);
  }

  export declare class Handle_AppDef_HArray1OfMultiPointConstraint_4 extends Handle_AppDef_HArray1OfMultiPointConstraint {
    constructor(theHandle: Handle_AppDef_HArray1OfMultiPointConstraint);
  }

export declare class AppParCurves_Array1OfConstraintCouple {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: AppParCurves_ConstraintCouple): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: AppParCurves_Array1OfConstraintCouple): AppParCurves_Array1OfConstraintCouple;
  Move(theOther: AppParCurves_Array1OfConstraintCouple): AppParCurves_Array1OfConstraintCouple;
  First(): AppParCurves_ConstraintCouple;
  ChangeFirst(): AppParCurves_ConstraintCouple;
  Last(): AppParCurves_ConstraintCouple;
  ChangeLast(): AppParCurves_ConstraintCouple;
  Value(theIndex: Standard_Integer): AppParCurves_ConstraintCouple;
  ChangeValue(theIndex: Standard_Integer): AppParCurves_ConstraintCouple;
  SetValue(theIndex: Standard_Integer, theItem: AppParCurves_ConstraintCouple): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class AppParCurves_Array1OfConstraintCouple_1 extends AppParCurves_Array1OfConstraintCouple {
    constructor();
  }

  export declare class AppParCurves_Array1OfConstraintCouple_2 extends AppParCurves_Array1OfConstraintCouple {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class AppParCurves_Array1OfConstraintCouple_3 extends AppParCurves_Array1OfConstraintCouple {
    constructor(theOther: AppParCurves_Array1OfConstraintCouple);
  }

  export declare class AppParCurves_Array1OfConstraintCouple_4 extends AppParCurves_Array1OfConstraintCouple {
    constructor(theOther: AppParCurves_Array1OfConstraintCouple);
  }

  export declare class AppParCurves_Array1OfConstraintCouple_5 extends AppParCurves_Array1OfConstraintCouple {
    constructor(theBegin: AppParCurves_ConstraintCouple, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_AppParCurves_HArray1OfConstraintCouple {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppParCurves_HArray1OfConstraintCouple): void;
  get(): AppParCurves_HArray1OfConstraintCouple;
}

  export declare class Handle_AppParCurves_HArray1OfConstraintCouple_1 extends Handle_AppParCurves_HArray1OfConstraintCouple {
    constructor();
  }

  export declare class Handle_AppParCurves_HArray1OfConstraintCouple_2 extends Handle_AppParCurves_HArray1OfConstraintCouple {
    constructor(thePtr: AppParCurves_HArray1OfConstraintCouple);
  }

  export declare class Handle_AppParCurves_HArray1OfConstraintCouple_3 extends Handle_AppParCurves_HArray1OfConstraintCouple {
    constructor(theHandle: Handle_AppParCurves_HArray1OfConstraintCouple);
  }

  export declare class Handle_AppParCurves_HArray1OfConstraintCouple_4 extends Handle_AppParCurves_HArray1OfConstraintCouple {
    constructor(theHandle: Handle_AppParCurves_HArray1OfConstraintCouple);
  }

export declare class AppParCurves_SequenceOfMultiCurve extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: AppParCurves_SequenceOfMultiCurve): AppParCurves_SequenceOfMultiCurve;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: AppParCurves_MultiCurve): void;
  Append_2(theSeq: AppParCurves_SequenceOfMultiCurve): void;
  Prepend_1(theItem: AppParCurves_MultiCurve): void;
  Prepend_2(theSeq: AppParCurves_SequenceOfMultiCurve): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: AppParCurves_MultiCurve): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: AppParCurves_SequenceOfMultiCurve): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: AppParCurves_SequenceOfMultiCurve): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: AppParCurves_MultiCurve): void;
  Split(theIndex: Standard_Integer, theSeq: AppParCurves_SequenceOfMultiCurve): void;
  First(): AppParCurves_MultiCurve;
  ChangeFirst(): AppParCurves_MultiCurve;
  Last(): AppParCurves_MultiCurve;
  ChangeLast(): AppParCurves_MultiCurve;
  Value(theIndex: Standard_Integer): AppParCurves_MultiCurve;
  ChangeValue(theIndex: Standard_Integer): AppParCurves_MultiCurve;
  SetValue(theIndex: Standard_Integer, theItem: AppParCurves_MultiCurve): void;
}

  export declare class AppParCurves_SequenceOfMultiCurve_1 extends AppParCurves_SequenceOfMultiCurve {
    constructor();
  }

  export declare class AppParCurves_SequenceOfMultiCurve_2 extends AppParCurves_SequenceOfMultiCurve {
    constructor(theAllocator: any);
  }

  export declare class AppParCurves_SequenceOfMultiCurve_3 extends AppParCurves_SequenceOfMultiCurve {
    constructor(theOther: AppParCurves_SequenceOfMultiCurve);
  }

export declare class Handle_FEmTool_HAssemblyTable {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FEmTool_HAssemblyTable): void;
  get(): FEmTool_HAssemblyTable;
}

  export declare class Handle_FEmTool_HAssemblyTable_1 extends Handle_FEmTool_HAssemblyTable {
    constructor();
  }

  export declare class Handle_FEmTool_HAssemblyTable_2 extends Handle_FEmTool_HAssemblyTable {
    constructor(thePtr: FEmTool_HAssemblyTable);
  }

  export declare class Handle_FEmTool_HAssemblyTable_3 extends Handle_FEmTool_HAssemblyTable {
    constructor(theHandle: Handle_FEmTool_HAssemblyTable);
  }

  export declare class Handle_FEmTool_HAssemblyTable_4 extends Handle_FEmTool_HAssemblyTable {
    constructor(theHandle: Handle_FEmTool_HAssemblyTable);
  }

export declare class Handle_AppDef_SmoothCriterion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppDef_SmoothCriterion): void;
  get(): AppDef_SmoothCriterion;
}

  export declare class Handle_AppDef_SmoothCriterion_1 extends Handle_AppDef_SmoothCriterion {
    constructor();
  }

  export declare class Handle_AppDef_SmoothCriterion_2 extends Handle_AppDef_SmoothCriterion {
    constructor(thePtr: AppDef_SmoothCriterion);
  }

  export declare class Handle_AppDef_SmoothCriterion_3 extends Handle_AppDef_SmoothCriterion {
    constructor(theHandle: Handle_AppDef_SmoothCriterion);
  }

  export declare class Handle_AppDef_SmoothCriterion_4 extends Handle_AppDef_SmoothCriterion {
    constructor(theHandle: Handle_AppDef_SmoothCriterion);
  }

export declare class Handle_AppDef_LinearCriteria {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppDef_LinearCriteria): void;
  get(): AppDef_LinearCriteria;
}

  export declare class Handle_AppDef_LinearCriteria_1 extends Handle_AppDef_LinearCriteria {
    constructor();
  }

  export declare class Handle_AppDef_LinearCriteria_2 extends Handle_AppDef_LinearCriteria {
    constructor(thePtr: AppDef_LinearCriteria);
  }

  export declare class Handle_AppDef_LinearCriteria_3 extends Handle_AppDef_LinearCriteria {
    constructor(theHandle: Handle_AppDef_LinearCriteria);
  }

  export declare class Handle_AppDef_LinearCriteria_4 extends Handle_AppDef_LinearCriteria {
    constructor(theHandle: Handle_AppDef_LinearCriteria);
  }

export declare class AppParCurves_Array1OfMultiBSpCurve {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: AppParCurves_MultiBSpCurve): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: AppParCurves_Array1OfMultiBSpCurve): AppParCurves_Array1OfMultiBSpCurve;
  Move(theOther: AppParCurves_Array1OfMultiBSpCurve): AppParCurves_Array1OfMultiBSpCurve;
  First(): AppParCurves_MultiBSpCurve;
  ChangeFirst(): AppParCurves_MultiBSpCurve;
  Last(): AppParCurves_MultiBSpCurve;
  ChangeLast(): AppParCurves_MultiBSpCurve;
  Value(theIndex: Standard_Integer): AppParCurves_MultiBSpCurve;
  ChangeValue(theIndex: Standard_Integer): AppParCurves_MultiBSpCurve;
  SetValue(theIndex: Standard_Integer, theItem: AppParCurves_MultiBSpCurve): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class AppParCurves_Array1OfMultiBSpCurve_1 extends AppParCurves_Array1OfMultiBSpCurve {
    constructor();
  }

  export declare class AppParCurves_Array1OfMultiBSpCurve_2 extends AppParCurves_Array1OfMultiBSpCurve {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class AppParCurves_Array1OfMultiBSpCurve_3 extends AppParCurves_Array1OfMultiBSpCurve {
    constructor(theOther: AppParCurves_Array1OfMultiBSpCurve);
  }

  export declare class AppParCurves_Array1OfMultiBSpCurve_4 extends AppParCurves_Array1OfMultiBSpCurve {
    constructor(theOther: AppParCurves_Array1OfMultiBSpCurve);
  }

  export declare class AppParCurves_Array1OfMultiBSpCurve_5 extends AppParCurves_Array1OfMultiBSpCurve {
    constructor(theBegin: AppParCurves_MultiBSpCurve, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class AppParCurves_Array1OfMultiCurve {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: AppParCurves_MultiCurve): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: AppParCurves_Array1OfMultiCurve): AppParCurves_Array1OfMultiCurve;
  Move(theOther: AppParCurves_Array1OfMultiCurve): AppParCurves_Array1OfMultiCurve;
  First(): AppParCurves_MultiCurve;
  ChangeFirst(): AppParCurves_MultiCurve;
  Last(): AppParCurves_MultiCurve;
  ChangeLast(): AppParCurves_MultiCurve;
  Value(theIndex: Standard_Integer): AppParCurves_MultiCurve;
  ChangeValue(theIndex: Standard_Integer): AppParCurves_MultiCurve;
  SetValue(theIndex: Standard_Integer, theItem: AppParCurves_MultiCurve): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class AppParCurves_Array1OfMultiCurve_1 extends AppParCurves_Array1OfMultiCurve {
    constructor();
  }

  export declare class AppParCurves_Array1OfMultiCurve_2 extends AppParCurves_Array1OfMultiCurve {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class AppParCurves_Array1OfMultiCurve_3 extends AppParCurves_Array1OfMultiCurve {
    constructor(theOther: AppParCurves_Array1OfMultiCurve);
  }

  export declare class AppParCurves_Array1OfMultiCurve_4 extends AppParCurves_Array1OfMultiCurve {
    constructor(theOther: AppParCurves_Array1OfMultiCurve);
  }

  export declare class AppParCurves_Array1OfMultiCurve_5 extends AppParCurves_Array1OfMultiCurve {
    constructor(theBegin: AppParCurves_MultiCurve, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_AppParCurves_HArray1OfMultiBSpCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppParCurves_HArray1OfMultiBSpCurve): void;
  get(): AppParCurves_HArray1OfMultiBSpCurve;
}

  export declare class Handle_AppParCurves_HArray1OfMultiBSpCurve_1 extends Handle_AppParCurves_HArray1OfMultiBSpCurve {
    constructor();
  }

  export declare class Handle_AppParCurves_HArray1OfMultiBSpCurve_2 extends Handle_AppParCurves_HArray1OfMultiBSpCurve {
    constructor(thePtr: AppParCurves_HArray1OfMultiBSpCurve);
  }

  export declare class Handle_AppParCurves_HArray1OfMultiBSpCurve_3 extends Handle_AppParCurves_HArray1OfMultiBSpCurve {
    constructor(theHandle: Handle_AppParCurves_HArray1OfMultiBSpCurve);
  }

  export declare class Handle_AppParCurves_HArray1OfMultiBSpCurve_4 extends Handle_AppParCurves_HArray1OfMultiBSpCurve {
    constructor(theHandle: Handle_AppParCurves_HArray1OfMultiBSpCurve);
  }

export declare class Handle_AppParCurves_HArray1OfMultiCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: AppParCurves_HArray1OfMultiCurve): void;
  get(): AppParCurves_HArray1OfMultiCurve;
}

  export declare class Handle_AppParCurves_HArray1OfMultiCurve_1 extends Handle_AppParCurves_HArray1OfMultiCurve {
    constructor();
  }

  export declare class Handle_AppParCurves_HArray1OfMultiCurve_2 extends Handle_AppParCurves_HArray1OfMultiCurve {
    constructor(thePtr: AppParCurves_HArray1OfMultiCurve);
  }

  export declare class Handle_AppParCurves_HArray1OfMultiCurve_3 extends Handle_AppParCurves_HArray1OfMultiCurve {
    constructor(theHandle: Handle_AppParCurves_HArray1OfMultiCurve);
  }

  export declare class Handle_AppParCurves_HArray1OfMultiCurve_4 extends Handle_AppParCurves_HArray1OfMultiCurve {
    constructor(theHandle: Handle_AppParCurves_HArray1OfMultiCurve);
  }

export declare class AppParCurves_SequenceOfMultiBSpCurve extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: AppParCurves_SequenceOfMultiBSpCurve): AppParCurves_SequenceOfMultiBSpCurve;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: AppParCurves_MultiBSpCurve): void;
  Append_2(theSeq: AppParCurves_SequenceOfMultiBSpCurve): void;
  Prepend_1(theItem: AppParCurves_MultiBSpCurve): void;
  Prepend_2(theSeq: AppParCurves_SequenceOfMultiBSpCurve): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: AppParCurves_MultiBSpCurve): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: AppParCurves_SequenceOfMultiBSpCurve): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: AppParCurves_SequenceOfMultiBSpCurve): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: AppParCurves_MultiBSpCurve): void;
  Split(theIndex: Standard_Integer, theSeq: AppParCurves_SequenceOfMultiBSpCurve): void;
  First(): AppParCurves_MultiBSpCurve;
  ChangeFirst(): AppParCurves_MultiBSpCurve;
  Last(): AppParCurves_MultiBSpCurve;
  ChangeLast(): AppParCurves_MultiBSpCurve;
  Value(theIndex: Standard_Integer): AppParCurves_MultiBSpCurve;
  ChangeValue(theIndex: Standard_Integer): AppParCurves_MultiBSpCurve;
  SetValue(theIndex: Standard_Integer, theItem: AppParCurves_MultiBSpCurve): void;
}

  export declare class AppParCurves_SequenceOfMultiBSpCurve_1 extends AppParCurves_SequenceOfMultiBSpCurve {
    constructor();
  }

  export declare class AppParCurves_SequenceOfMultiBSpCurve_2 extends AppParCurves_SequenceOfMultiBSpCurve {
    constructor(theAllocator: any);
  }

  export declare class AppParCurves_SequenceOfMultiBSpCurve_3 extends AppParCurves_SequenceOfMultiBSpCurve {
    constructor(theOther: AppParCurves_SequenceOfMultiBSpCurve);
  }

export declare class Approx_Array1OfGTrsf2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_GTrsf2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Approx_Array1OfGTrsf2d): Approx_Array1OfGTrsf2d;
  Move(theOther: Approx_Array1OfGTrsf2d): Approx_Array1OfGTrsf2d;
  First(): gp_GTrsf2d;
  ChangeFirst(): gp_GTrsf2d;
  Last(): gp_GTrsf2d;
  ChangeLast(): gp_GTrsf2d;
  Value(theIndex: Standard_Integer): gp_GTrsf2d;
  ChangeValue(theIndex: Standard_Integer): gp_GTrsf2d;
  SetValue(theIndex: Standard_Integer, theItem: gp_GTrsf2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Approx_Array1OfGTrsf2d_1 extends Approx_Array1OfGTrsf2d {
    constructor();
  }

  export declare class Approx_Array1OfGTrsf2d_2 extends Approx_Array1OfGTrsf2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Approx_Array1OfGTrsf2d_3 extends Approx_Array1OfGTrsf2d {
    constructor(theOther: Approx_Array1OfGTrsf2d);
  }

  export declare class Approx_Array1OfGTrsf2d_4 extends Approx_Array1OfGTrsf2d {
    constructor(theOther: Approx_Array1OfGTrsf2d);
  }

  export declare class Approx_Array1OfGTrsf2d_5 extends Approx_Array1OfGTrsf2d {
    constructor(theBegin: gp_GTrsf2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Approx_CurvlinFunc {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Approx_CurvlinFunc): void;
  get(): Approx_CurvlinFunc;
}

  export declare class Handle_Approx_CurvlinFunc_1 extends Handle_Approx_CurvlinFunc {
    constructor();
  }

  export declare class Handle_Approx_CurvlinFunc_2 extends Handle_Approx_CurvlinFunc {
    constructor(thePtr: Approx_CurvlinFunc);
  }

  export declare class Handle_Approx_CurvlinFunc_3 extends Handle_Approx_CurvlinFunc {
    constructor(theHandle: Handle_Approx_CurvlinFunc);
  }

  export declare class Handle_Approx_CurvlinFunc_4 extends Handle_Approx_CurvlinFunc {
    constructor(theHandle: Handle_Approx_CurvlinFunc);
  }

export declare class Handle_Approx_HArray1OfAdHSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Approx_HArray1OfAdHSurface): void;
  get(): Approx_HArray1OfAdHSurface;
}

  export declare class Handle_Approx_HArray1OfAdHSurface_1 extends Handle_Approx_HArray1OfAdHSurface {
    constructor();
  }

  export declare class Handle_Approx_HArray1OfAdHSurface_2 extends Handle_Approx_HArray1OfAdHSurface {
    constructor(thePtr: Approx_HArray1OfAdHSurface);
  }

  export declare class Handle_Approx_HArray1OfAdHSurface_3 extends Handle_Approx_HArray1OfAdHSurface {
    constructor(theHandle: Handle_Approx_HArray1OfAdHSurface);
  }

  export declare class Handle_Approx_HArray1OfAdHSurface_4 extends Handle_Approx_HArray1OfAdHSurface {
    constructor(theHandle: Handle_Approx_HArray1OfAdHSurface);
  }

export declare class Handle_Approx_HArray1OfGTrsf2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Approx_HArray1OfGTrsf2d): void;
  get(): Approx_HArray1OfGTrsf2d;
}

  export declare class Handle_Approx_HArray1OfGTrsf2d_1 extends Handle_Approx_HArray1OfGTrsf2d {
    constructor();
  }

  export declare class Handle_Approx_HArray1OfGTrsf2d_2 extends Handle_Approx_HArray1OfGTrsf2d {
    constructor(thePtr: Approx_HArray1OfGTrsf2d);
  }

  export declare class Handle_Approx_HArray1OfGTrsf2d_3 extends Handle_Approx_HArray1OfGTrsf2d {
    constructor(theHandle: Handle_Approx_HArray1OfGTrsf2d);
  }

  export declare class Handle_Approx_HArray1OfGTrsf2d_4 extends Handle_Approx_HArray1OfGTrsf2d {
    constructor(theHandle: Handle_Approx_HArray1OfGTrsf2d);
  }

export declare class Handle_Approx_SweepFunction {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Approx_SweepFunction): void;
  get(): Approx_SweepFunction;
}

  export declare class Handle_Approx_SweepFunction_1 extends Handle_Approx_SweepFunction {
    constructor();
  }

  export declare class Handle_Approx_SweepFunction_2 extends Handle_Approx_SweepFunction {
    constructor(thePtr: Approx_SweepFunction);
  }

  export declare class Handle_Approx_SweepFunction_3 extends Handle_Approx_SweepFunction {
    constructor(theHandle: Handle_Approx_SweepFunction);
  }

  export declare class Handle_Approx_SweepFunction_4 extends Handle_Approx_SweepFunction {
    constructor(theHandle: Handle_Approx_SweepFunction);
  }

export declare class Extrema_SequenceOfPOnCurv extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: Extrema_SequenceOfPOnCurv): Extrema_SequenceOfPOnCurv;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Extrema_POnCurv): void;
  Append_2(theSeq: Extrema_SequenceOfPOnCurv): void;
  Prepend_1(theItem: Extrema_POnCurv): void;
  Prepend_2(theSeq: Extrema_SequenceOfPOnCurv): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Extrema_POnCurv): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnCurv): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnCurv): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Extrema_POnCurv): void;
  Split(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnCurv): void;
  First(): Extrema_POnCurv;
  ChangeFirst(): Extrema_POnCurv;
  Last(): Extrema_POnCurv;
  ChangeLast(): Extrema_POnCurv;
  Value(theIndex: Standard_Integer): Extrema_POnCurv;
  ChangeValue(theIndex: Standard_Integer): Extrema_POnCurv;
  SetValue(theIndex: Standard_Integer, theItem: Extrema_POnCurv): void;
}

  export declare class Extrema_SequenceOfPOnCurv_1 extends Extrema_SequenceOfPOnCurv {
    constructor();
  }

  export declare class Extrema_SequenceOfPOnCurv_2 extends Extrema_SequenceOfPOnCurv {
    constructor(theAllocator: any);
  }

  export declare class Extrema_SequenceOfPOnCurv_3 extends Extrema_SequenceOfPOnCurv {
    constructor(theOther: Extrema_SequenceOfPOnCurv);
  }

export declare class Extrema_Array1OfPOnCurv {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Extrema_POnCurv): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Extrema_Array1OfPOnCurv): Extrema_Array1OfPOnCurv;
  Move(theOther: Extrema_Array1OfPOnCurv): Extrema_Array1OfPOnCurv;
  First(): Extrema_POnCurv;
  ChangeFirst(): Extrema_POnCurv;
  Last(): Extrema_POnCurv;
  ChangeLast(): Extrema_POnCurv;
  Value(theIndex: Standard_Integer): Extrema_POnCurv;
  ChangeValue(theIndex: Standard_Integer): Extrema_POnCurv;
  SetValue(theIndex: Standard_Integer, theItem: Extrema_POnCurv): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Extrema_Array1OfPOnCurv_1 extends Extrema_Array1OfPOnCurv {
    constructor();
  }

  export declare class Extrema_Array1OfPOnCurv_2 extends Extrema_Array1OfPOnCurv {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Extrema_Array1OfPOnCurv_3 extends Extrema_Array1OfPOnCurv {
    constructor(theOther: Extrema_Array1OfPOnCurv);
  }

  export declare class Extrema_Array1OfPOnCurv_4 extends Extrema_Array1OfPOnCurv {
    constructor(theOther: Extrema_Array1OfPOnCurv);
  }

  export declare class Extrema_Array1OfPOnCurv_5 extends Extrema_Array1OfPOnCurv {
    constructor(theBegin: Extrema_POnCurv, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Extrema_HArray1OfPOnCurv {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_HArray1OfPOnCurv): void;
  get(): Extrema_HArray1OfPOnCurv;
}

  export declare class Handle_Extrema_HArray1OfPOnCurv_1 extends Handle_Extrema_HArray1OfPOnCurv {
    constructor();
  }

  export declare class Handle_Extrema_HArray1OfPOnCurv_2 extends Handle_Extrema_HArray1OfPOnCurv {
    constructor(thePtr: Extrema_HArray1OfPOnCurv);
  }

  export declare class Handle_Extrema_HArray1OfPOnCurv_3 extends Handle_Extrema_HArray1OfPOnCurv {
    constructor(theHandle: Handle_Extrema_HArray1OfPOnCurv);
  }

  export declare class Handle_Extrema_HArray1OfPOnCurv_4 extends Handle_Extrema_HArray1OfPOnCurv {
    constructor(theHandle: Handle_Extrema_HArray1OfPOnCurv);
  }

export declare class Extrema_Array1OfPOnSurf {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Extrema_POnSurf): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Extrema_Array1OfPOnSurf): Extrema_Array1OfPOnSurf;
  Move(theOther: Extrema_Array1OfPOnSurf): Extrema_Array1OfPOnSurf;
  First(): Extrema_POnSurf;
  ChangeFirst(): Extrema_POnSurf;
  Last(): Extrema_POnSurf;
  ChangeLast(): Extrema_POnSurf;
  Value(theIndex: Standard_Integer): Extrema_POnSurf;
  ChangeValue(theIndex: Standard_Integer): Extrema_POnSurf;
  SetValue(theIndex: Standard_Integer, theItem: Extrema_POnSurf): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Extrema_Array1OfPOnSurf_1 extends Extrema_Array1OfPOnSurf {
    constructor();
  }

  export declare class Extrema_Array1OfPOnSurf_2 extends Extrema_Array1OfPOnSurf {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Extrema_Array1OfPOnSurf_3 extends Extrema_Array1OfPOnSurf {
    constructor(theOther: Extrema_Array1OfPOnSurf);
  }

  export declare class Extrema_Array1OfPOnSurf_4 extends Extrema_Array1OfPOnSurf {
    constructor(theOther: Extrema_Array1OfPOnSurf);
  }

  export declare class Extrema_Array1OfPOnSurf_5 extends Extrema_Array1OfPOnSurf {
    constructor(theBegin: Extrema_POnSurf, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_Extrema_HArray1OfPOnSurf {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_HArray1OfPOnSurf): void;
  get(): Extrema_HArray1OfPOnSurf;
}

  export declare class Handle_Extrema_HArray1OfPOnSurf_1 extends Handle_Extrema_HArray1OfPOnSurf {
    constructor();
  }

  export declare class Handle_Extrema_HArray1OfPOnSurf_2 extends Handle_Extrema_HArray1OfPOnSurf {
    constructor(thePtr: Extrema_HArray1OfPOnSurf);
  }

  export declare class Handle_Extrema_HArray1OfPOnSurf_3 extends Handle_Extrema_HArray1OfPOnSurf {
    constructor(theHandle: Handle_Extrema_HArray1OfPOnSurf);
  }

  export declare class Handle_Extrema_HArray1OfPOnSurf_4 extends Handle_Extrema_HArray1OfPOnSurf {
    constructor(theHandle: Handle_Extrema_HArray1OfPOnSurf);
  }

export declare class Extrema_SequenceOfPOnSurf extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: Extrema_SequenceOfPOnSurf): Extrema_SequenceOfPOnSurf;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Extrema_POnSurf): void;
  Append_2(theSeq: Extrema_SequenceOfPOnSurf): void;
  Prepend_1(theItem: Extrema_POnSurf): void;
  Prepend_2(theSeq: Extrema_SequenceOfPOnSurf): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Extrema_POnSurf): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnSurf): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnSurf): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Extrema_POnSurf): void;
  Split(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnSurf): void;
  First(): Extrema_POnSurf;
  ChangeFirst(): Extrema_POnSurf;
  Last(): Extrema_POnSurf;
  ChangeLast(): Extrema_POnSurf;
  Value(theIndex: Standard_Integer): Extrema_POnSurf;
  ChangeValue(theIndex: Standard_Integer): Extrema_POnSurf;
  SetValue(theIndex: Standard_Integer, theItem: Extrema_POnSurf): void;
}

  export declare class Extrema_SequenceOfPOnSurf_1 extends Extrema_SequenceOfPOnSurf {
    constructor();
  }

  export declare class Extrema_SequenceOfPOnSurf_2 extends Extrema_SequenceOfPOnSurf {
    constructor(theAllocator: any);
  }

  export declare class Extrema_SequenceOfPOnSurf_3 extends Extrema_SequenceOfPOnSurf {
    constructor(theOther: Extrema_SequenceOfPOnSurf);
  }

export declare class Extrema_Array2OfPOnSurfParams {
  Init(theValue: Extrema_POnSurfParams): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: Extrema_Array2OfPOnSurfParams): Extrema_Array2OfPOnSurfParams;
  Move(theOther: Extrema_Array2OfPOnSurfParams): Extrema_Array2OfPOnSurfParams;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Extrema_POnSurfParams;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Extrema_POnSurfParams;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Extrema_POnSurfParams): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Extrema_Array2OfPOnSurfParams_1 extends Extrema_Array2OfPOnSurfParams {
    constructor();
  }

  export declare class Extrema_Array2OfPOnSurfParams_2 extends Extrema_Array2OfPOnSurfParams {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class Extrema_Array2OfPOnSurfParams_3 extends Extrema_Array2OfPOnSurfParams {
    constructor(theOther: Extrema_Array2OfPOnSurfParams);
  }

  export declare class Extrema_Array2OfPOnSurfParams_4 extends Extrema_Array2OfPOnSurfParams {
    constructor(theOther: Extrema_Array2OfPOnSurfParams);
  }

  export declare class Extrema_Array2OfPOnSurfParams_5 extends Extrema_Array2OfPOnSurfParams {
    constructor(theBegin: Extrema_POnSurfParams, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Handle_Extrema_HArray2OfPOnSurfParams {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_HArray2OfPOnSurfParams): void;
  get(): Extrema_HArray2OfPOnSurfParams;
}

  export declare class Handle_Extrema_HArray2OfPOnSurfParams_1 extends Handle_Extrema_HArray2OfPOnSurfParams {
    constructor();
  }

  export declare class Handle_Extrema_HArray2OfPOnSurfParams_2 extends Handle_Extrema_HArray2OfPOnSurfParams {
    constructor(thePtr: Extrema_HArray2OfPOnSurfParams);
  }

  export declare class Handle_Extrema_HArray2OfPOnSurfParams_3 extends Handle_Extrema_HArray2OfPOnSurfParams {
    constructor(theHandle: Handle_Extrema_HArray2OfPOnSurfParams);
  }

  export declare class Handle_Extrema_HArray2OfPOnSurfParams_4 extends Handle_Extrema_HArray2OfPOnSurfParams {
    constructor(theHandle: Handle_Extrema_HArray2OfPOnSurfParams);
  }

export declare class Extrema_HUBTreeOfSphere {
  get_1(): Extrema_UBTreeOfSphere;
  get_2(): Extrema_UBTreeOfSphere;
  DownCast(theOther: any): Extrema_HUBTreeOfSphere;
}

  export declare class Extrema_HUBTreeOfSphere_2 extends Extrema_HUBTreeOfSphere {
    constructor();
  }

  export declare class Extrema_HUBTreeOfSphere_3 extends Extrema_HUBTreeOfSphere {
    constructor(theObject: Extrema_UBTreeOfSphere);
  }

export declare class Extrema_Array1OfPOnCurv2d {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: Extrema_POnCurv2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: Extrema_Array1OfPOnCurv2d): Extrema_Array1OfPOnCurv2d;
  Move(theOther: Extrema_Array1OfPOnCurv2d): Extrema_Array1OfPOnCurv2d;
  First(): Extrema_POnCurv2d;
  ChangeFirst(): Extrema_POnCurv2d;
  Last(): Extrema_POnCurv2d;
  ChangeLast(): Extrema_POnCurv2d;
  Value(theIndex: Standard_Integer): Extrema_POnCurv2d;
  ChangeValue(theIndex: Standard_Integer): Extrema_POnCurv2d;
  SetValue(theIndex: Standard_Integer, theItem: Extrema_POnCurv2d): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Extrema_Array1OfPOnCurv2d_1 extends Extrema_Array1OfPOnCurv2d {
    constructor();
  }

  export declare class Extrema_Array1OfPOnCurv2d_2 extends Extrema_Array1OfPOnCurv2d {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class Extrema_Array1OfPOnCurv2d_3 extends Extrema_Array1OfPOnCurv2d {
    constructor(theOther: Extrema_Array1OfPOnCurv2d);
  }

  export declare class Extrema_Array1OfPOnCurv2d_4 extends Extrema_Array1OfPOnCurv2d {
    constructor(theOther: Extrema_Array1OfPOnCurv2d);
  }

  export declare class Extrema_Array1OfPOnCurv2d_5 extends Extrema_Array1OfPOnCurv2d {
    constructor(theBegin: Extrema_POnCurv2d, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Extrema_Array2OfPOnCurv {
  Init(theValue: Extrema_POnCurv): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: Extrema_Array2OfPOnCurv): Extrema_Array2OfPOnCurv;
  Move(theOther: Extrema_Array2OfPOnCurv): Extrema_Array2OfPOnCurv;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Extrema_POnCurv;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Extrema_POnCurv;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Extrema_POnCurv): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Extrema_Array2OfPOnCurv_1 extends Extrema_Array2OfPOnCurv {
    constructor();
  }

  export declare class Extrema_Array2OfPOnCurv_2 extends Extrema_Array2OfPOnCurv {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class Extrema_Array2OfPOnCurv_3 extends Extrema_Array2OfPOnCurv {
    constructor(theOther: Extrema_Array2OfPOnCurv);
  }

  export declare class Extrema_Array2OfPOnCurv_4 extends Extrema_Array2OfPOnCurv {
    constructor(theOther: Extrema_Array2OfPOnCurv);
  }

  export declare class Extrema_Array2OfPOnCurv_5 extends Extrema_Array2OfPOnCurv {
    constructor(theBegin: Extrema_POnCurv, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Extrema_Array2OfPOnCurv2d {
  Init(theValue: Extrema_POnCurv2d): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: Extrema_Array2OfPOnCurv2d): Extrema_Array2OfPOnCurv2d;
  Move(theOther: Extrema_Array2OfPOnCurv2d): Extrema_Array2OfPOnCurv2d;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Extrema_POnCurv2d;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Extrema_POnCurv2d;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Extrema_POnCurv2d): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Extrema_Array2OfPOnCurv2d_1 extends Extrema_Array2OfPOnCurv2d {
    constructor();
  }

  export declare class Extrema_Array2OfPOnCurv2d_2 extends Extrema_Array2OfPOnCurv2d {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class Extrema_Array2OfPOnCurv2d_3 extends Extrema_Array2OfPOnCurv2d {
    constructor(theOther: Extrema_Array2OfPOnCurv2d);
  }

  export declare class Extrema_Array2OfPOnCurv2d_4 extends Extrema_Array2OfPOnCurv2d {
    constructor(theOther: Extrema_Array2OfPOnCurv2d);
  }

  export declare class Extrema_Array2OfPOnCurv2d_5 extends Extrema_Array2OfPOnCurv2d {
    constructor(theBegin: Extrema_POnCurv2d, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Extrema_Array2OfPOnSurf {
  Init(theValue: Extrema_POnSurf): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  NbRows(): Standard_Integer;
  NbColumns(): Standard_Integer;
  RowLength(): Standard_Integer;
  ColLength(): Standard_Integer;
  LowerRow(): Standard_Integer;
  UpperRow(): Standard_Integer;
  LowerCol(): Standard_Integer;
  UpperCol(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  Assign(theOther: Extrema_Array2OfPOnSurf): Extrema_Array2OfPOnSurf;
  Move(theOther: Extrema_Array2OfPOnSurf): Extrema_Array2OfPOnSurf;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Extrema_POnSurf;
  ChangeValue(theRow: Standard_Integer, theCol: Standard_Integer): Extrema_POnSurf;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theItem: Extrema_POnSurf): void;
  Resize(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class Extrema_Array2OfPOnSurf_1 extends Extrema_Array2OfPOnSurf {
    constructor();
  }

  export declare class Extrema_Array2OfPOnSurf_2 extends Extrema_Array2OfPOnSurf {
    constructor(theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

  export declare class Extrema_Array2OfPOnSurf_3 extends Extrema_Array2OfPOnSurf {
    constructor(theOther: Extrema_Array2OfPOnSurf);
  }

  export declare class Extrema_Array2OfPOnSurf_4 extends Extrema_Array2OfPOnSurf {
    constructor(theOther: Extrema_Array2OfPOnSurf);
  }

  export declare class Extrema_Array2OfPOnSurf_5 extends Extrema_Array2OfPOnSurf {
    constructor(theBegin: Extrema_POnSurf, theRowLower: Standard_Integer, theRowUpper: Standard_Integer, theColLower: Standard_Integer, theColUpper: Standard_Integer);
  }

export declare class Extrema_SequenceOfPOnCurv2d extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: Extrema_SequenceOfPOnCurv2d): Extrema_SequenceOfPOnCurv2d;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: Extrema_POnCurv2d): void;
  Append_2(theSeq: Extrema_SequenceOfPOnCurv2d): void;
  Prepend_1(theItem: Extrema_POnCurv2d): void;
  Prepend_2(theSeq: Extrema_SequenceOfPOnCurv2d): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: Extrema_POnCurv2d): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnCurv2d): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnCurv2d): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: Extrema_POnCurv2d): void;
  Split(theIndex: Standard_Integer, theSeq: Extrema_SequenceOfPOnCurv2d): void;
  First(): Extrema_POnCurv2d;
  ChangeFirst(): Extrema_POnCurv2d;
  Last(): Extrema_POnCurv2d;
  ChangeLast(): Extrema_POnCurv2d;
  Value(theIndex: Standard_Integer): Extrema_POnCurv2d;
  ChangeValue(theIndex: Standard_Integer): Extrema_POnCurv2d;
  SetValue(theIndex: Standard_Integer, theItem: Extrema_POnCurv2d): void;
}

  export declare class Extrema_SequenceOfPOnCurv2d_1 extends Extrema_SequenceOfPOnCurv2d {
    constructor();
  }

  export declare class Extrema_SequenceOfPOnCurv2d_2 extends Extrema_SequenceOfPOnCurv2d {
    constructor(theAllocator: any);
  }

  export declare class Extrema_SequenceOfPOnCurv2d_3 extends Extrema_SequenceOfPOnCurv2d {
    constructor(theOther: Extrema_SequenceOfPOnCurv2d);
  }

export declare class Handle_Extrema_ExtPExtS {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_ExtPExtS): void;
  get(): Extrema_ExtPExtS;
}

  export declare class Handle_Extrema_ExtPExtS_1 extends Handle_Extrema_ExtPExtS {
    constructor();
  }

  export declare class Handle_Extrema_ExtPExtS_2 extends Handle_Extrema_ExtPExtS {
    constructor(thePtr: Extrema_ExtPExtS);
  }

  export declare class Handle_Extrema_ExtPExtS_3 extends Handle_Extrema_ExtPExtS {
    constructor(theHandle: Handle_Extrema_ExtPExtS);
  }

  export declare class Handle_Extrema_ExtPExtS_4 extends Handle_Extrema_ExtPExtS {
    constructor(theHandle: Handle_Extrema_ExtPExtS);
  }

export declare class Handle_Extrema_ExtPRevS {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_ExtPRevS): void;
  get(): Extrema_ExtPRevS;
}

  export declare class Handle_Extrema_ExtPRevS_1 extends Handle_Extrema_ExtPRevS {
    constructor();
  }

  export declare class Handle_Extrema_ExtPRevS_2 extends Handle_Extrema_ExtPRevS {
    constructor(thePtr: Extrema_ExtPRevS);
  }

  export declare class Handle_Extrema_ExtPRevS_3 extends Handle_Extrema_ExtPRevS {
    constructor(theHandle: Handle_Extrema_ExtPRevS);
  }

  export declare class Handle_Extrema_ExtPRevS_4 extends Handle_Extrema_ExtPRevS {
    constructor(theHandle: Handle_Extrema_ExtPRevS);
  }

export declare class Handle_Extrema_HArray1OfPOnCurv2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_HArray1OfPOnCurv2d): void;
  get(): Extrema_HArray1OfPOnCurv2d;
}

  export declare class Handle_Extrema_HArray1OfPOnCurv2d_1 extends Handle_Extrema_HArray1OfPOnCurv2d {
    constructor();
  }

  export declare class Handle_Extrema_HArray1OfPOnCurv2d_2 extends Handle_Extrema_HArray1OfPOnCurv2d {
    constructor(thePtr: Extrema_HArray1OfPOnCurv2d);
  }

  export declare class Handle_Extrema_HArray1OfPOnCurv2d_3 extends Handle_Extrema_HArray1OfPOnCurv2d {
    constructor(theHandle: Handle_Extrema_HArray1OfPOnCurv2d);
  }

  export declare class Handle_Extrema_HArray1OfPOnCurv2d_4 extends Handle_Extrema_HArray1OfPOnCurv2d {
    constructor(theHandle: Handle_Extrema_HArray1OfPOnCurv2d);
  }

export declare class Handle_Extrema_HArray2OfPOnCurv {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_HArray2OfPOnCurv): void;
  get(): Extrema_HArray2OfPOnCurv;
}

  export declare class Handle_Extrema_HArray2OfPOnCurv_1 extends Handle_Extrema_HArray2OfPOnCurv {
    constructor();
  }

  export declare class Handle_Extrema_HArray2OfPOnCurv_2 extends Handle_Extrema_HArray2OfPOnCurv {
    constructor(thePtr: Extrema_HArray2OfPOnCurv);
  }

  export declare class Handle_Extrema_HArray2OfPOnCurv_3 extends Handle_Extrema_HArray2OfPOnCurv {
    constructor(theHandle: Handle_Extrema_HArray2OfPOnCurv);
  }

  export declare class Handle_Extrema_HArray2OfPOnCurv_4 extends Handle_Extrema_HArray2OfPOnCurv {
    constructor(theHandle: Handle_Extrema_HArray2OfPOnCurv);
  }

export declare class Handle_Extrema_HArray2OfPOnCurv2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_HArray2OfPOnCurv2d): void;
  get(): Extrema_HArray2OfPOnCurv2d;
}

  export declare class Handle_Extrema_HArray2OfPOnCurv2d_1 extends Handle_Extrema_HArray2OfPOnCurv2d {
    constructor();
  }

  export declare class Handle_Extrema_HArray2OfPOnCurv2d_2 extends Handle_Extrema_HArray2OfPOnCurv2d {
    constructor(thePtr: Extrema_HArray2OfPOnCurv2d);
  }

  export declare class Handle_Extrema_HArray2OfPOnCurv2d_3 extends Handle_Extrema_HArray2OfPOnCurv2d {
    constructor(theHandle: Handle_Extrema_HArray2OfPOnCurv2d);
  }

  export declare class Handle_Extrema_HArray2OfPOnCurv2d_4 extends Handle_Extrema_HArray2OfPOnCurv2d {
    constructor(theHandle: Handle_Extrema_HArray2OfPOnCurv2d);
  }

export declare class Handle_Extrema_HArray2OfPOnSurf {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Extrema_HArray2OfPOnSurf): void;
  get(): Extrema_HArray2OfPOnSurf;
}

  export declare class Handle_Extrema_HArray2OfPOnSurf_1 extends Handle_Extrema_HArray2OfPOnSurf {
    constructor();
  }

  export declare class Handle_Extrema_HArray2OfPOnSurf_2 extends Handle_Extrema_HArray2OfPOnSurf {
    constructor(thePtr: Extrema_HArray2OfPOnSurf);
  }

  export declare class Handle_Extrema_HArray2OfPOnSurf_3 extends Handle_Extrema_HArray2OfPOnSurf {
    constructor(theHandle: Handle_Extrema_HArray2OfPOnSurf);
  }

  export declare class Handle_Extrema_HArray2OfPOnSurf_4 extends Handle_Extrema_HArray2OfPOnSurf {
    constructor(theHandle: Handle_Extrema_HArray2OfPOnSurf);
  }

export declare class FEmTool_SeqOfLinConstr extends NCollection_BaseSequence {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Reverse(): void;
  Exchange(I: Standard_Integer, J: Standard_Integer): void;
  delNode(theNode: NCollection_SeqNode, theAl: any): void;
  Clear(theAllocator: any): void;
  Assign(theOther: FEmTool_SeqOfLinConstr): FEmTool_SeqOfLinConstr;
  Remove_2(theIndex: Standard_Integer): void;
  Remove_3(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): void;
  Append_1(theItem: FEmTool_ListOfVectors): void;
  Append_2(theSeq: FEmTool_SeqOfLinConstr): void;
  Prepend_1(theItem: FEmTool_ListOfVectors): void;
  Prepend_2(theSeq: FEmTool_SeqOfLinConstr): void;
  InsertBefore_1(theIndex: Standard_Integer, theItem: FEmTool_ListOfVectors): void;
  InsertBefore_2(theIndex: Standard_Integer, theSeq: FEmTool_SeqOfLinConstr): void;
  InsertAfter_2(theIndex: Standard_Integer, theSeq: FEmTool_SeqOfLinConstr): void;
  InsertAfter_3(theIndex: Standard_Integer, theItem: FEmTool_ListOfVectors): void;
  Split(theIndex: Standard_Integer, theSeq: FEmTool_SeqOfLinConstr): void;
  First(): FEmTool_ListOfVectors;
  ChangeFirst(): FEmTool_ListOfVectors;
  Last(): FEmTool_ListOfVectors;
  ChangeLast(): FEmTool_ListOfVectors;
  Value(theIndex: Standard_Integer): FEmTool_ListOfVectors;
  ChangeValue(theIndex: Standard_Integer): FEmTool_ListOfVectors;
  SetValue(theIndex: Standard_Integer, theItem: FEmTool_ListOfVectors): void;
}

  export declare class FEmTool_SeqOfLinConstr_1 extends FEmTool_SeqOfLinConstr {
    constructor();
  }

  export declare class FEmTool_SeqOfLinConstr_2 extends FEmTool_SeqOfLinConstr {
    constructor(theAllocator: any);
  }

  export declare class FEmTool_SeqOfLinConstr_3 extends FEmTool_SeqOfLinConstr {
    constructor(theOther: FEmTool_SeqOfLinConstr);
  }

export declare class Handle_FEmTool_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FEmTool_Curve): void;
  get(): FEmTool_Curve;
}

  export declare class Handle_FEmTool_Curve_1 extends Handle_FEmTool_Curve {
    constructor();
  }

  export declare class Handle_FEmTool_Curve_2 extends Handle_FEmTool_Curve {
    constructor(thePtr: FEmTool_Curve);
  }

  export declare class Handle_FEmTool_Curve_3 extends Handle_FEmTool_Curve {
    constructor(theHandle: Handle_FEmTool_Curve);
  }

  export declare class Handle_FEmTool_Curve_4 extends Handle_FEmTool_Curve {
    constructor(theHandle: Handle_FEmTool_Curve);
  }

export declare class Handle_FEmTool_ElementaryCriterion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FEmTool_ElementaryCriterion): void;
  get(): FEmTool_ElementaryCriterion;
}

  export declare class Handle_FEmTool_ElementaryCriterion_1 extends Handle_FEmTool_ElementaryCriterion {
    constructor();
  }

  export declare class Handle_FEmTool_ElementaryCriterion_2 extends Handle_FEmTool_ElementaryCriterion {
    constructor(thePtr: FEmTool_ElementaryCriterion);
  }

  export declare class Handle_FEmTool_ElementaryCriterion_3 extends Handle_FEmTool_ElementaryCriterion {
    constructor(theHandle: Handle_FEmTool_ElementaryCriterion);
  }

  export declare class Handle_FEmTool_ElementaryCriterion_4 extends Handle_FEmTool_ElementaryCriterion {
    constructor(theHandle: Handle_FEmTool_ElementaryCriterion);
  }

export declare class Handle_FEmTool_LinearFlexion {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FEmTool_LinearFlexion): void;
  get(): FEmTool_LinearFlexion;
}

  export declare class Handle_FEmTool_LinearFlexion_1 extends Handle_FEmTool_LinearFlexion {
    constructor();
  }

  export declare class Handle_FEmTool_LinearFlexion_2 extends Handle_FEmTool_LinearFlexion {
    constructor(thePtr: FEmTool_LinearFlexion);
  }

  export declare class Handle_FEmTool_LinearFlexion_3 extends Handle_FEmTool_LinearFlexion {
    constructor(theHandle: Handle_FEmTool_LinearFlexion);
  }

  export declare class Handle_FEmTool_LinearFlexion_4 extends Handle_FEmTool_LinearFlexion {
    constructor(theHandle: Handle_FEmTool_LinearFlexion);
  }

export declare class Handle_FEmTool_LinearJerk {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FEmTool_LinearJerk): void;
  get(): FEmTool_LinearJerk;
}

  export declare class Handle_FEmTool_LinearJerk_1 extends Handle_FEmTool_LinearJerk {
    constructor();
  }

  export declare class Handle_FEmTool_LinearJerk_2 extends Handle_FEmTool_LinearJerk {
    constructor(thePtr: FEmTool_LinearJerk);
  }

  export declare class Handle_FEmTool_LinearJerk_3 extends Handle_FEmTool_LinearJerk {
    constructor(theHandle: Handle_FEmTool_LinearJerk);
  }

  export declare class Handle_FEmTool_LinearJerk_4 extends Handle_FEmTool_LinearJerk {
    constructor(theHandle: Handle_FEmTool_LinearJerk);
  }

export declare class Handle_FEmTool_LinearTension {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FEmTool_LinearTension): void;
  get(): FEmTool_LinearTension;
}

  export declare class Handle_FEmTool_LinearTension_1 extends Handle_FEmTool_LinearTension {
    constructor();
  }

  export declare class Handle_FEmTool_LinearTension_2 extends Handle_FEmTool_LinearTension {
    constructor(thePtr: FEmTool_LinearTension);
  }

  export declare class Handle_FEmTool_LinearTension_3 extends Handle_FEmTool_LinearTension {
    constructor(theHandle: Handle_FEmTool_LinearTension);
  }

  export declare class Handle_FEmTool_LinearTension_4 extends Handle_FEmTool_LinearTension {
    constructor(theHandle: Handle_FEmTool_LinearTension);
  }

export declare class Handle_FEmTool_SparseMatrix {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FEmTool_SparseMatrix): void;
  get(): FEmTool_SparseMatrix;
}

  export declare class Handle_FEmTool_SparseMatrix_1 extends Handle_FEmTool_SparseMatrix {
    constructor();
  }

  export declare class Handle_FEmTool_SparseMatrix_2 extends Handle_FEmTool_SparseMatrix {
    constructor(thePtr: FEmTool_SparseMatrix);
  }

  export declare class Handle_FEmTool_SparseMatrix_3 extends Handle_FEmTool_SparseMatrix {
    constructor(theHandle: Handle_FEmTool_SparseMatrix);
  }

  export declare class Handle_FEmTool_SparseMatrix_4 extends Handle_FEmTool_SparseMatrix {
    constructor(theHandle: Handle_FEmTool_SparseMatrix);
  }

export declare class Handle_FEmTool_ProfileMatrix {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: FEmTool_ProfileMatrix): void;
  get(): FEmTool_ProfileMatrix;
}

  export declare class Handle_FEmTool_ProfileMatrix_1 extends Handle_FEmTool_ProfileMatrix {
    constructor();
  }

  export declare class Handle_FEmTool_ProfileMatrix_2 extends Handle_FEmTool_ProfileMatrix {
    constructor(thePtr: FEmTool_ProfileMatrix);
  }

  export declare class Handle_FEmTool_ProfileMatrix_3 extends Handle_FEmTool_ProfileMatrix {
    constructor(theHandle: Handle_FEmTool_ProfileMatrix);
  }

  export declare class Handle_FEmTool_ProfileMatrix_4 extends Handle_FEmTool_ProfileMatrix {
    constructor(theHandle: Handle_FEmTool_ProfileMatrix);
  }

export declare class GeomLib_Array1OfMat {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Init(theValue: gp_Mat): void;
  Size(): Standard_Integer;
  Length(): Standard_Integer;
  IsEmpty(): Standard_Boolean;
  Lower(): Standard_Integer;
  Upper(): Standard_Integer;
  IsDeletable(): Standard_Boolean;
  IsAllocated(): Standard_Boolean;
  Assign(theOther: GeomLib_Array1OfMat): GeomLib_Array1OfMat;
  Move(theOther: GeomLib_Array1OfMat): GeomLib_Array1OfMat;
  First(): gp_Mat;
  ChangeFirst(): gp_Mat;
  Last(): gp_Mat;
  ChangeLast(): gp_Mat;
  Value(theIndex: Standard_Integer): gp_Mat;
  ChangeValue(theIndex: Standard_Integer): gp_Mat;
  SetValue(theIndex: Standard_Integer, theItem: gp_Mat): void;
  Resize(theLower: Standard_Integer, theUpper: Standard_Integer, theToCopyData: Standard_Boolean): void;
}

  export declare class GeomLib_Array1OfMat_1 extends GeomLib_Array1OfMat {
    constructor();
  }

  export declare class GeomLib_Array1OfMat_2 extends GeomLib_Array1OfMat {
    constructor(theLower: Standard_Integer, theUpper: Standard_Integer);
  }

  export declare class GeomLib_Array1OfMat_3 extends GeomLib_Array1OfMat {
    constructor(theOther: GeomLib_Array1OfMat);
  }

  export declare class GeomLib_Array1OfMat_4 extends GeomLib_Array1OfMat {
    constructor(theOther: GeomLib_Array1OfMat);
  }

  export declare class GeomLib_Array1OfMat_5 extends GeomLib_Array1OfMat {
    constructor(theBegin: gp_Mat, theLower: Standard_Integer, theUpper: Standard_Integer);
  }

export declare class Handle_GeomTools_UndefinedTypeHandler {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomTools_UndefinedTypeHandler): void;
  get(): GeomTools_UndefinedTypeHandler;
}

  export declare class Handle_GeomTools_UndefinedTypeHandler_1 extends Handle_GeomTools_UndefinedTypeHandler {
    constructor();
  }

  export declare class Handle_GeomTools_UndefinedTypeHandler_2 extends Handle_GeomTools_UndefinedTypeHandler {
    constructor(thePtr: GeomTools_UndefinedTypeHandler);
  }

  export declare class Handle_GeomTools_UndefinedTypeHandler_3 extends Handle_GeomTools_UndefinedTypeHandler {
    constructor(theHandle: Handle_GeomTools_UndefinedTypeHandler);
  }

  export declare class Handle_GeomTools_UndefinedTypeHandler_4 extends Handle_GeomTools_UndefinedTypeHandler {
    constructor(theHandle: Handle_GeomTools_UndefinedTypeHandler);
  }

export declare class IntAna_ListOfCurve extends NCollection_BaseList {
  begin(): any;
  end(): any;
  cbegin(): any;
  cend(): any;
  Size(): Standard_Integer;
  Assign(theOther: IntAna_ListOfCurve): IntAna_ListOfCurve;
  Clear(theAllocator: any): void;
  First_1(): IntAna_Curve;
  First_2(): IntAna_Curve;
  Last_1(): IntAna_Curve;
  Last_2(): IntAna_Curve;
  Append_1(theItem: IntAna_Curve): IntAna_Curve;
  Append_3(theOther: IntAna_ListOfCurve): void;
  Prepend_1(theItem: IntAna_Curve): IntAna_Curve;
  Prepend_2(theOther: IntAna_ListOfCurve): void;
  RemoveFirst(): void;
  Reverse(): void;
}

  export declare class IntAna_ListOfCurve_1 extends IntAna_ListOfCurve {
    constructor();
  }

  export declare class IntAna_ListOfCurve_2 extends IntAna_ListOfCurve {
    constructor(theAllocator: any);
  }

  export declare class IntAna_ListOfCurve_3 extends IntAna_ListOfCurve {
    constructor(theOther: IntAna_ListOfCurve);
  }

export declare class Handle_ProjLib_HSequenceOfHSequenceOfPnt {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ProjLib_HSequenceOfHSequenceOfPnt): void;
  get(): ProjLib_HSequenceOfHSequenceOfPnt;
}

  export declare class Handle_ProjLib_HSequenceOfHSequenceOfPnt_1 extends Handle_ProjLib_HSequenceOfHSequenceOfPnt {
    constructor();
  }

  export declare class Handle_ProjLib_HSequenceOfHSequenceOfPnt_2 extends Handle_ProjLib_HSequenceOfHSequenceOfPnt {
    constructor(thePtr: ProjLib_HSequenceOfHSequenceOfPnt);
  }

  export declare class Handle_ProjLib_HSequenceOfHSequenceOfPnt_3 extends Handle_ProjLib_HSequenceOfHSequenceOfPnt {
    constructor(theHandle: Handle_ProjLib_HSequenceOfHSequenceOfPnt);
  }

  export declare class Handle_ProjLib_HSequenceOfHSequenceOfPnt_4 extends Handle_ProjLib_HSequenceOfHSequenceOfPnt {
    constructor(theHandle: Handle_ProjLib_HSequenceOfHSequenceOfPnt);
  }

export declare class Handle_ProjLib_HCompProjectedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ProjLib_HCompProjectedCurve): void;
  get(): ProjLib_HCompProjectedCurve;
}

  export declare class Handle_ProjLib_HCompProjectedCurve_1 extends Handle_ProjLib_HCompProjectedCurve {
    constructor();
  }

  export declare class Handle_ProjLib_HCompProjectedCurve_2 extends Handle_ProjLib_HCompProjectedCurve {
    constructor(thePtr: ProjLib_HCompProjectedCurve);
  }

  export declare class Handle_ProjLib_HCompProjectedCurve_3 extends Handle_ProjLib_HCompProjectedCurve {
    constructor(theHandle: Handle_ProjLib_HCompProjectedCurve);
  }

  export declare class Handle_ProjLib_HCompProjectedCurve_4 extends Handle_ProjLib_HCompProjectedCurve {
    constructor(theHandle: Handle_ProjLib_HCompProjectedCurve);
  }

export declare class Handle_ProjLib_HProjectedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ProjLib_HProjectedCurve): void;
  get(): ProjLib_HProjectedCurve;
}

  export declare class Handle_ProjLib_HProjectedCurve_1 extends Handle_ProjLib_HProjectedCurve {
    constructor();
  }

  export declare class Handle_ProjLib_HProjectedCurve_2 extends Handle_ProjLib_HProjectedCurve {
    constructor(thePtr: ProjLib_HProjectedCurve);
  }

  export declare class Handle_ProjLib_HProjectedCurve_3 extends Handle_ProjLib_HProjectedCurve {
    constructor(theHandle: Handle_ProjLib_HProjectedCurve);
  }

  export declare class Handle_ProjLib_HProjectedCurve_4 extends Handle_ProjLib_HProjectedCurve {
    constructor(theHandle: Handle_ProjLib_HProjectedCurve);
  }

export declare type AdvApp2Var_CriterionType = {
  AdvApp2Var_Absolute: {};
  AdvApp2Var_Relative: {};
}

export declare type AdvApp2Var_CriterionRepartition = {
  AdvApp2Var_Regular: {};
  AdvApp2Var_Incremental: {};
}

export declare type AppParCurves_Constraint = {
  AppParCurves_NoConstraint: {};
  AppParCurves_PassPoint: {};
  AppParCurves_TangencyPoint: {};
  AppParCurves_CurvaturePoint: {};
}

export declare type Approx_ParametrizationType = {
  Approx_ChordLength: {};
  Approx_Centripetal: {};
  Approx_IsoParametric: {};
}

export declare type Approx_Status = {
  Approx_PointsAdded: {};
  Approx_NoPointsAdded: {};
  Approx_NoApproximation: {};
}

export declare type Extrema_ExtAlgo = {
  Extrema_ExtAlgo_Grad: {};
  Extrema_ExtAlgo_Tree: {};
}

export declare type Extrema_ExtFlag = {
  Extrema_ExtFlag_MIN: {};
  Extrema_ExtFlag_MAX: {};
  Extrema_ExtFlag_MINMAX: {};
}

export declare type Extrema_ElementType = {
  Extrema_Node: {};
  Extrema_UIsoEdge: {};
  Extrema_VIsoEdge: {};
  Extrema_Face: {};
}

export declare type gce_ErrorType = {
  gce_Done: {};
  gce_ConfusedPoints: {};
  gce_NegativeRadius: {};
  gce_ColinearPoints: {};
  gce_IntersectionError: {};
  gce_NullAxis: {};
  gce_NullAngle: {};
  gce_NullRadius: {};
  gce_InvertAxis: {};
  gce_BadAngle: {};
  gce_InvertRadius: {};
  gce_NullFocusLength: {};
  gce_NullVector: {};
  gce_BadEquation: {};
}

export declare type GCPnts_AbscissaType = {
  GCPnts_LengthParametrized: {};
  GCPnts_Parametrized: {};
  GCPnts_AbsComposite: {};
}

export declare type GCPnts_DeflectionType = {
  GCPnts_Linear: {};
  GCPnts_Circular: {};
  GCPnts_Curved: {};
  GCPnts_DefComposite: {};
}

export declare type GeomLib_InterpolationErrors = {
  GeomLib_NoError: {};
  GeomLib_NotEnoughtPoints: {};
  GeomLib_DegreeSmallerThan3: {};
  GeomLib_InversionProblem: {};
}

export declare type IntAna_ResultType = {
  IntAna_Point: {};
  IntAna_Line: {};
  IntAna_Circle: {};
  IntAna_PointAndCircle: {};
  IntAna_Ellipse: {};
  IntAna_Parabola: {};
  IntAna_Hyperbola: {};
  IntAna_Empty: {};
  IntAna_Same: {};
  IntAna_NoGeometricSolution: {};
}

export declare type TKGeomBaseLib = {
  AdvApp2Var_Context_1: typeof AdvApp2Var_Context_1;
  AdvApp2Var_Context_2: typeof AdvApp2Var_Context_2;
  AdvApp2Var_Patch_1: typeof AdvApp2Var_Patch_1;
  AdvApp2Var_Patch_2: typeof AdvApp2Var_Patch_2;
  AdvApp2Var_Network_1: typeof AdvApp2Var_Network_1;
  AdvApp2Var_Network_2: typeof AdvApp2Var_Network_2;
  AdvApp2Var_Node_1: typeof AdvApp2Var_Node_1;
  AdvApp2Var_Node_2: typeof AdvApp2Var_Node_2;
  AdvApp2Var_Node_3: typeof AdvApp2Var_Node_3;
  AdvApp2Var_Framework_1: typeof AdvApp2Var_Framework_1;
  AdvApp2Var_Framework_2: typeof AdvApp2Var_Framework_2;
  AdvApp2Var_ApproxAFunc2Var_1: typeof AdvApp2Var_ApproxAFunc2Var_1;
  AdvApp2Var_ApproxAFunc2Var_2: typeof AdvApp2Var_ApproxAFunc2Var_2;
  AdvApp2Var_SysBase: typeof AdvApp2Var_SysBase;
  AppParCurves_MultiPoint_1: typeof AppParCurves_MultiPoint_1;
  AppParCurves_MultiPoint_2: typeof AppParCurves_MultiPoint_2;
  AppParCurves_MultiPoint_3: typeof AppParCurves_MultiPoint_3;
  AppParCurves_MultiPoint_4: typeof AppParCurves_MultiPoint_4;
  AppParCurves_MultiPoint_5: typeof AppParCurves_MultiPoint_5;
  AppParCurves_MultiCurve_1: typeof AppParCurves_MultiCurve_1;
  AppParCurves_MultiCurve_2: typeof AppParCurves_MultiCurve_2;
  AppParCurves_MultiCurve_3: typeof AppParCurves_MultiCurve_3;
  AppCont_LeastSquare: typeof AppCont_LeastSquare;
  AppParCurves_MultiBSpCurve_1: typeof AppParCurves_MultiBSpCurve_1;
  AppParCurves_MultiBSpCurve_2: typeof AppParCurves_MultiBSpCurve_2;
  AppParCurves_MultiBSpCurve_3: typeof AppParCurves_MultiBSpCurve_3;
  AppParCurves_MultiBSpCurve_4: typeof AppParCurves_MultiBSpCurve_4;
  AppParCurves_ConstraintCouple_1: typeof AppParCurves_ConstraintCouple_1;
  AppParCurves_ConstraintCouple_2: typeof AppParCurves_ConstraintCouple_2;
  Approx_Curve2d: typeof Approx_Curve2d;
  Approx_Curve3d: typeof Approx_Curve3d;
  Approx_CurveOnSurface_1: typeof Approx_CurveOnSurface_1;
  Approx_CurveOnSurface_2: typeof Approx_CurveOnSurface_2;
  Approx_CurvilinearParameter_1: typeof Approx_CurvilinearParameter_1;
  Approx_CurvilinearParameter_2: typeof Approx_CurvilinearParameter_2;
  Approx_CurvilinearParameter_3: typeof Approx_CurvilinearParameter_3;
  Approx_CurvlinFunc_1: typeof Approx_CurvlinFunc_1;
  Approx_CurvlinFunc_2: typeof Approx_CurvlinFunc_2;
  Approx_CurvlinFunc_3: typeof Approx_CurvlinFunc_3;
  Approx_FitAndDivide_1: typeof Approx_FitAndDivide_1;
  Approx_FitAndDivide_2: typeof Approx_FitAndDivide_2;
  Approx_FitAndDivide2d_1: typeof Approx_FitAndDivide2d_1;
  Approx_FitAndDivide2d_2: typeof Approx_FitAndDivide2d_2;
  Approx_MCurvesToBSpCurve: typeof Approx_MCurvesToBSpCurve;
  Approx_SameParameter_1: typeof Approx_SameParameter_1;
  Approx_SameParameter_2: typeof Approx_SameParameter_2;
  Approx_SameParameter_3: typeof Approx_SameParameter_3;
  Approx_SweepApproximation: typeof Approx_SweepApproximation;
  Extrema_ECC_1: typeof Extrema_ECC_1;
  Extrema_ECC_2: typeof Extrema_ECC_2;
  Extrema_ECC_3: typeof Extrema_ECC_3;
  Extrema_POnCurv_1: typeof Extrema_POnCurv_1;
  Extrema_POnCurv_2: typeof Extrema_POnCurv_2;
  Extrema_ExtCC_1: typeof Extrema_ExtCC_1;
  Extrema_ExtCC_2: typeof Extrema_ExtCC_2;
  Extrema_ExtCC_3: typeof Extrema_ExtCC_3;
  Extrema_POnSurf_1: typeof Extrema_POnSurf_1;
  Extrema_POnSurf_2: typeof Extrema_POnSurf_2;
  Extrema_ExtElCS_1: typeof Extrema_ExtElCS_1;
  Extrema_ExtElCS_2: typeof Extrema_ExtElCS_2;
  Extrema_ExtElCS_3: typeof Extrema_ExtElCS_3;
  Extrema_ExtElCS_4: typeof Extrema_ExtElCS_4;
  Extrema_ExtElCS_5: typeof Extrema_ExtElCS_5;
  Extrema_ExtElCS_6: typeof Extrema_ExtElCS_6;
  Extrema_ExtElCS_7: typeof Extrema_ExtElCS_7;
  Extrema_ExtElCS_8: typeof Extrema_ExtElCS_8;
  Extrema_ExtElCS_9: typeof Extrema_ExtElCS_9;
  Extrema_ExtElCS_10: typeof Extrema_ExtElCS_10;
  Extrema_ExtElCS_11: typeof Extrema_ExtElCS_11;
  Extrema_ExtElCS_12: typeof Extrema_ExtElCS_12;
  Extrema_ExtCS_1: typeof Extrema_ExtCS_1;
  Extrema_ExtCS_2: typeof Extrema_ExtCS_2;
  Extrema_ExtCS_3: typeof Extrema_ExtCS_3;
  Extrema_ExtElSS_1: typeof Extrema_ExtElSS_1;
  Extrema_ExtElSS_2: typeof Extrema_ExtElSS_2;
  Extrema_ExtElSS_3: typeof Extrema_ExtElSS_3;
  Extrema_ExtElSS_4: typeof Extrema_ExtElSS_4;
  Extrema_ExtElSS_5: typeof Extrema_ExtElSS_5;
  Extrema_ExtElSS_6: typeof Extrema_ExtElSS_6;
  Extrema_ExtElSS_7: typeof Extrema_ExtElSS_7;
  Extrema_ExtSS_1: typeof Extrema_ExtSS_1;
  Extrema_ExtSS_2: typeof Extrema_ExtSS_2;
  Extrema_ExtSS_3: typeof Extrema_ExtSS_3;
  Extrema_ExtPElC_1: typeof Extrema_ExtPElC_1;
  Extrema_ExtPElC_2: typeof Extrema_ExtPElC_2;
  Extrema_ExtPElC_3: typeof Extrema_ExtPElC_3;
  Extrema_ExtPElC_4: typeof Extrema_ExtPElC_4;
  Extrema_ExtPElC_5: typeof Extrema_ExtPElC_5;
  Extrema_ExtPElC_6: typeof Extrema_ExtPElC_6;
  Extrema_PCFOfEPCOfExtPC_1: typeof Extrema_PCFOfEPCOfExtPC_1;
  Extrema_PCFOfEPCOfExtPC_2: typeof Extrema_PCFOfEPCOfExtPC_2;
  Extrema_EPCOfExtPC_1: typeof Extrema_EPCOfExtPC_1;
  Extrema_EPCOfExtPC_2: typeof Extrema_EPCOfExtPC_2;
  Extrema_EPCOfExtPC_3: typeof Extrema_EPCOfExtPC_3;
  Extrema_ExtPC_1: typeof Extrema_ExtPC_1;
  Extrema_ExtPC_2: typeof Extrema_ExtPC_2;
  Extrema_ExtPC_3: typeof Extrema_ExtPC_3;
  Extrema_ExtPElS_1: typeof Extrema_ExtPElS_1;
  Extrema_ExtPElS_2: typeof Extrema_ExtPElS_2;
  Extrema_ExtPElS_3: typeof Extrema_ExtPElS_3;
  Extrema_ExtPElS_4: typeof Extrema_ExtPElS_4;
  Extrema_ExtPElS_5: typeof Extrema_ExtPElS_5;
  Extrema_ExtPElS_6: typeof Extrema_ExtPElS_6;
  Extrema_POnSurfParams_1: typeof Extrema_POnSurfParams_1;
  Extrema_POnSurfParams_2: typeof Extrema_POnSurfParams_2;
  Extrema_FuncPSNorm_1: typeof Extrema_FuncPSNorm_1;
  Extrema_FuncPSNorm_2: typeof Extrema_FuncPSNorm_2;
  Extrema_GenExtPS_1: typeof Extrema_GenExtPS_1;
  Extrema_GenExtPS_2: typeof Extrema_GenExtPS_2;
  Extrema_GenExtPS_3: typeof Extrema_GenExtPS_3;
  Extrema_ExtPS_1: typeof Extrema_ExtPS_1;
  Extrema_ExtPS_2: typeof Extrema_ExtPS_2;
  Extrema_ExtPS_3: typeof Extrema_ExtPS_3;
  GeomLib_CheckCurveOnSurface_1: typeof GeomLib_CheckCurveOnSurface_1;
  GeomLib_CheckCurveOnSurface_2: typeof GeomLib_CheckCurveOnSurface_2;
  GCPnts_TangentialDeflection_1: typeof GCPnts_TangentialDeflection_1;
  GCPnts_TangentialDeflection_2: typeof GCPnts_TangentialDeflection_2;
  GCPnts_TangentialDeflection_3: typeof GCPnts_TangentialDeflection_3;
  GCPnts_TangentialDeflection_4: typeof GCPnts_TangentialDeflection_4;
  GCPnts_TangentialDeflection_5: typeof GCPnts_TangentialDeflection_5;
  Extrema_PCLocFOfLocEPCOfLocateExtPC_1: typeof Extrema_PCLocFOfLocEPCOfLocateExtPC_1;
  Extrema_PCLocFOfLocEPCOfLocateExtPC_2: typeof Extrema_PCLocFOfLocEPCOfLocateExtPC_2;
  Extrema_LocEPCOfLocateExtPC_1: typeof Extrema_LocEPCOfLocateExtPC_1;
  Extrema_LocEPCOfLocateExtPC_2: typeof Extrema_LocEPCOfLocateExtPC_2;
  Extrema_LocEPCOfLocateExtPC_3: typeof Extrema_LocEPCOfLocateExtPC_3;
  Extrema_PCFOfEPCOfELPCOfLocateExtPC_1: typeof Extrema_PCFOfEPCOfELPCOfLocateExtPC_1;
  Extrema_PCFOfEPCOfELPCOfLocateExtPC_2: typeof Extrema_PCFOfEPCOfELPCOfLocateExtPC_2;
  Extrema_EPCOfELPCOfLocateExtPC_1: typeof Extrema_EPCOfELPCOfLocateExtPC_1;
  Extrema_EPCOfELPCOfLocateExtPC_2: typeof Extrema_EPCOfELPCOfLocateExtPC_2;
  Extrema_EPCOfELPCOfLocateExtPC_3: typeof Extrema_EPCOfELPCOfLocateExtPC_3;
  Extrema_ELPCOfLocateExtPC_1: typeof Extrema_ELPCOfLocateExtPC_1;
  Extrema_ELPCOfLocateExtPC_2: typeof Extrema_ELPCOfLocateExtPC_2;
  Extrema_ELPCOfLocateExtPC_3: typeof Extrema_ELPCOfLocateExtPC_3;
  Extrema_LocateExtPC_1: typeof Extrema_LocateExtPC_1;
  Extrema_LocateExtPC_2: typeof Extrema_LocateExtPC_2;
  Extrema_LocateExtPC_3: typeof Extrema_LocateExtPC_3;
  GeomTools_SurfaceSet: typeof GeomTools_SurfaceSet;
  GeomTools_CurveSet: typeof GeomTools_CurveSet;
  GeomTools_Curve2dSet: typeof GeomTools_Curve2dSet;
  CPnts_MyGaussFunction: typeof CPnts_MyGaussFunction;
  CPnts_MyRootFunction: typeof CPnts_MyRootFunction;
  CPnts_AbscissaPoint_1: typeof CPnts_AbscissaPoint_1;
  CPnts_AbscissaPoint_2: typeof CPnts_AbscissaPoint_2;
  CPnts_AbscissaPoint_3: typeof CPnts_AbscissaPoint_3;
  CPnts_AbscissaPoint_4: typeof CPnts_AbscissaPoint_4;
  CPnts_AbscissaPoint_5: typeof CPnts_AbscissaPoint_5;
  CPnts_UniformDeflection_1: typeof CPnts_UniformDeflection_1;
  CPnts_UniformDeflection_2: typeof CPnts_UniformDeflection_2;
  CPnts_UniformDeflection_3: typeof CPnts_UniformDeflection_3;
  CPnts_UniformDeflection_4: typeof CPnts_UniformDeflection_4;
  CPnts_UniformDeflection_5: typeof CPnts_UniformDeflection_5;
  Extrema_LocateExtCC: typeof Extrema_LocateExtCC;
  Extrema_POnCurv2d_1: typeof Extrema_POnCurv2d_1;
  Extrema_POnCurv2d_2: typeof Extrema_POnCurv2d_2;
  Extrema_CCLocFOfLocECC_1: typeof Extrema_CCLocFOfLocECC_1;
  Extrema_CCLocFOfLocECC_2: typeof Extrema_CCLocFOfLocECC_2;
  Extrema_CCLocFOfLocECC2d_1: typeof Extrema_CCLocFOfLocECC2d_1;
  Extrema_CCLocFOfLocECC2d_2: typeof Extrema_CCLocFOfLocECC2d_2;
  Extrema_ECC2d_1: typeof Extrema_ECC2d_1;
  Extrema_ECC2d_2: typeof Extrema_ECC2d_2;
  Extrema_ECC2d_3: typeof Extrema_ECC2d_3;
  Extrema_ExtPElC2d_1: typeof Extrema_ExtPElC2d_1;
  Extrema_ExtPElC2d_2: typeof Extrema_ExtPElC2d_2;
  Extrema_ExtPElC2d_3: typeof Extrema_ExtPElC2d_3;
  Extrema_ExtPElC2d_4: typeof Extrema_ExtPElC2d_4;
  Extrema_ExtPElC2d_5: typeof Extrema_ExtPElC2d_5;
  Extrema_ExtPElC2d_6: typeof Extrema_ExtPElC2d_6;
  Extrema_PCFOfEPCOfELPCOfLocateExtPC2d_1: typeof Extrema_PCFOfEPCOfELPCOfLocateExtPC2d_1;
  Extrema_PCFOfEPCOfELPCOfLocateExtPC2d_2: typeof Extrema_PCFOfEPCOfELPCOfLocateExtPC2d_2;
  Extrema_EPCOfELPCOfLocateExtPC2d_1: typeof Extrema_EPCOfELPCOfLocateExtPC2d_1;
  Extrema_EPCOfELPCOfLocateExtPC2d_2: typeof Extrema_EPCOfELPCOfLocateExtPC2d_2;
  Extrema_EPCOfELPCOfLocateExtPC2d_3: typeof Extrema_EPCOfELPCOfLocateExtPC2d_3;
  Extrema_ELPCOfLocateExtPC2d_1: typeof Extrema_ELPCOfLocateExtPC2d_1;
  Extrema_ELPCOfLocateExtPC2d_2: typeof Extrema_ELPCOfLocateExtPC2d_2;
  Extrema_ELPCOfLocateExtPC2d_3: typeof Extrema_ELPCOfLocateExtPC2d_3;
  Extrema_PCFOfEPCOfExtPC2d_1: typeof Extrema_PCFOfEPCOfExtPC2d_1;
  Extrema_PCFOfEPCOfExtPC2d_2: typeof Extrema_PCFOfEPCOfExtPC2d_2;
  Extrema_EPCOfExtPC2d_1: typeof Extrema_EPCOfExtPC2d_1;
  Extrema_EPCOfExtPC2d_2: typeof Extrema_EPCOfExtPC2d_2;
  Extrema_EPCOfExtPC2d_3: typeof Extrema_EPCOfExtPC2d_3;
  Extrema_ExtCC2d_1: typeof Extrema_ExtCC2d_1;
  Extrema_ExtCC2d_2: typeof Extrema_ExtCC2d_2;
  Extrema_ExtCC2d_3: typeof Extrema_ExtCC2d_3;
  Extrema_ExtElC_1: typeof Extrema_ExtElC_1;
  Extrema_ExtElC_2: typeof Extrema_ExtElC_2;
  Extrema_ExtElC_3: typeof Extrema_ExtElC_3;
  Extrema_ExtElC_4: typeof Extrema_ExtElC_4;
  Extrema_ExtElC_5: typeof Extrema_ExtElC_5;
  Extrema_ExtElC_6: typeof Extrema_ExtElC_6;
  Extrema_ExtElC_7: typeof Extrema_ExtElC_7;
  Extrema_ExtElC2d_1: typeof Extrema_ExtElC2d_1;
  Extrema_ExtElC2d_2: typeof Extrema_ExtElC2d_2;
  Extrema_ExtElC2d_3: typeof Extrema_ExtElC2d_3;
  Extrema_ExtElC2d_4: typeof Extrema_ExtElC2d_4;
  Extrema_ExtElC2d_5: typeof Extrema_ExtElC2d_5;
  Extrema_ExtElC2d_6: typeof Extrema_ExtElC2d_6;
  Extrema_ExtElC2d_7: typeof Extrema_ExtElC2d_7;
  Extrema_ExtElC2d_8: typeof Extrema_ExtElC2d_8;
  Extrema_ExtElC2d_9: typeof Extrema_ExtElC2d_9;
  Extrema_ExtElC2d_10: typeof Extrema_ExtElC2d_10;
  Extrema_ExtPC2d_1: typeof Extrema_ExtPC2d_1;
  Extrema_ExtPC2d_2: typeof Extrema_ExtPC2d_2;
  Extrema_ExtPC2d_3: typeof Extrema_ExtPC2d_3;
  Extrema_ExtPExtS_1: typeof Extrema_ExtPExtS_1;
  Extrema_ExtPExtS_2: typeof Extrema_ExtPExtS_2;
  Extrema_ExtPExtS_3: typeof Extrema_ExtPExtS_3;
  Extrema_ExtPRevS_1: typeof Extrema_ExtPRevS_1;
  Extrema_ExtPRevS_2: typeof Extrema_ExtPRevS_2;
  Extrema_ExtPRevS_3: typeof Extrema_ExtPRevS_3;
  Extrema_FuncExtCS_1: typeof Extrema_FuncExtCS_1;
  Extrema_FuncExtCS_2: typeof Extrema_FuncExtCS_2;
  Extrema_FuncExtSS_1: typeof Extrema_FuncExtSS_1;
  Extrema_FuncExtSS_2: typeof Extrema_FuncExtSS_2;
  Extrema_FuncPSDist: typeof Extrema_FuncPSDist;
  Extrema_GenExtCS_1: typeof Extrema_GenExtCS_1;
  Extrema_GenExtCS_2: typeof Extrema_GenExtCS_2;
  Extrema_GenExtCS_3: typeof Extrema_GenExtCS_3;
  Extrema_GenExtSS_1: typeof Extrema_GenExtSS_1;
  Extrema_GenExtSS_2: typeof Extrema_GenExtSS_2;
  Extrema_GenExtSS_3: typeof Extrema_GenExtSS_3;
  Extrema_GenLocateExtCS_1: typeof Extrema_GenLocateExtCS_1;
  Extrema_GenLocateExtCS_2: typeof Extrema_GenLocateExtCS_2;
  Extrema_GenLocateExtPS: typeof Extrema_GenLocateExtPS;
  Extrema_GenLocateExtSS_1: typeof Extrema_GenLocateExtSS_1;
  Extrema_GenLocateExtSS_2: typeof Extrema_GenLocateExtSS_2;
  Extrema_GlobOptFuncCCC0_1: typeof Extrema_GlobOptFuncCCC0_1;
  Extrema_GlobOptFuncCCC0_2: typeof Extrema_GlobOptFuncCCC0_2;
  Extrema_GlobOptFuncCCC1_1: typeof Extrema_GlobOptFuncCCC1_1;
  Extrema_GlobOptFuncCCC1_2: typeof Extrema_GlobOptFuncCCC1_2;
  Extrema_GlobOptFuncCCC2_1: typeof Extrema_GlobOptFuncCCC2_1;
  Extrema_GlobOptFuncCCC2_2: typeof Extrema_GlobOptFuncCCC2_2;
  Extrema_GlobOptFuncCQuadric_1: typeof Extrema_GlobOptFuncCQuadric_1;
  Extrema_GlobOptFuncCQuadric_2: typeof Extrema_GlobOptFuncCQuadric_2;
  Extrema_GlobOptFuncCQuadric_3: typeof Extrema_GlobOptFuncCQuadric_3;
  Extrema_GlobOptFuncCS: typeof Extrema_GlobOptFuncCS;
  Extrema_GlobOptFuncConicS_1: typeof Extrema_GlobOptFuncConicS_1;
  Extrema_GlobOptFuncConicS_2: typeof Extrema_GlobOptFuncConicS_2;
  Extrema_GlobOptFuncConicS_3: typeof Extrema_GlobOptFuncConicS_3;
  Extrema_LocECC: typeof Extrema_LocECC;
  Extrema_LocECC2d: typeof Extrema_LocECC2d;
  Extrema_PCLocFOfLocEPCOfLocateExtPC2d_1: typeof Extrema_PCLocFOfLocEPCOfLocateExtPC2d_1;
  Extrema_PCLocFOfLocEPCOfLocateExtPC2d_2: typeof Extrema_PCLocFOfLocEPCOfLocateExtPC2d_2;
  Extrema_LocEPCOfLocateExtPC2d_1: typeof Extrema_LocEPCOfLocateExtPC2d_1;
  Extrema_LocEPCOfLocateExtPC2d_2: typeof Extrema_LocEPCOfLocateExtPC2d_2;
  Extrema_LocEPCOfLocateExtPC2d_3: typeof Extrema_LocEPCOfLocateExtPC2d_3;
  Extrema_LocateExtCC2d: typeof Extrema_LocateExtCC2d;
  Extrema_LocateExtPC2d_1: typeof Extrema_LocateExtPC2d_1;
  Extrema_LocateExtPC2d_2: typeof Extrema_LocateExtPC2d_2;
  Extrema_LocateExtPC2d_3: typeof Extrema_LocateExtPC2d_3;
  FEmTool_Assembly: typeof FEmTool_Assembly;
  FEmTool_Curve: typeof FEmTool_Curve;
  FEmTool_ElementsOfRefMatrix: typeof FEmTool_ElementsOfRefMatrix;
  FEmTool_LinearFlexion: typeof FEmTool_LinearFlexion;
  FEmTool_LinearJerk: typeof FEmTool_LinearJerk;
  FEmTool_LinearTension: typeof FEmTool_LinearTension;
  FEmTool_ProfileMatrix: typeof FEmTool_ProfileMatrix;
  Geom2dConvert_CompCurveToBSplineCurve_1: typeof Geom2dConvert_CompCurveToBSplineCurve_1;
  Geom2dConvert_CompCurveToBSplineCurve_2: typeof Geom2dConvert_CompCurveToBSplineCurve_2;
  GC_MakeArcOfCircle_1: typeof GC_MakeArcOfCircle_1;
  GC_MakeArcOfCircle_2: typeof GC_MakeArcOfCircle_2;
  GC_MakeArcOfCircle_3: typeof GC_MakeArcOfCircle_3;
  GC_MakeArcOfCircle_4: typeof GC_MakeArcOfCircle_4;
  GC_MakeArcOfCircle_5: typeof GC_MakeArcOfCircle_5;
  GC_MakeArcOfEllipse_1: typeof GC_MakeArcOfEllipse_1;
  GC_MakeArcOfEllipse_2: typeof GC_MakeArcOfEllipse_2;
  GC_MakeArcOfEllipse_3: typeof GC_MakeArcOfEllipse_3;
  GC_MakeArcOfHyperbola_1: typeof GC_MakeArcOfHyperbola_1;
  GC_MakeArcOfHyperbola_2: typeof GC_MakeArcOfHyperbola_2;
  GC_MakeArcOfHyperbola_3: typeof GC_MakeArcOfHyperbola_3;
  GC_MakeArcOfParabola_1: typeof GC_MakeArcOfParabola_1;
  GC_MakeArcOfParabola_2: typeof GC_MakeArcOfParabola_2;
  GC_MakeArcOfParabola_3: typeof GC_MakeArcOfParabola_3;
  GC_MakeCircle_1: typeof GC_MakeCircle_1;
  GC_MakeCircle_2: typeof GC_MakeCircle_2;
  GC_MakeCircle_3: typeof GC_MakeCircle_3;
  GC_MakeCircle_4: typeof GC_MakeCircle_4;
  GC_MakeCircle_5: typeof GC_MakeCircle_5;
  GC_MakeCircle_6: typeof GC_MakeCircle_6;
  GC_MakeCircle_7: typeof GC_MakeCircle_7;
  GC_MakeCircle_8: typeof GC_MakeCircle_8;
  GC_MakeConicalSurface_1: typeof GC_MakeConicalSurface_1;
  GC_MakeConicalSurface_2: typeof GC_MakeConicalSurface_2;
  GC_MakeConicalSurface_3: typeof GC_MakeConicalSurface_3;
  GC_MakeConicalSurface_4: typeof GC_MakeConicalSurface_4;
  GC_MakeCylindricalSurface_1: typeof GC_MakeCylindricalSurface_1;
  GC_MakeCylindricalSurface_2: typeof GC_MakeCylindricalSurface_2;
  GC_MakeCylindricalSurface_3: typeof GC_MakeCylindricalSurface_3;
  GC_MakeCylindricalSurface_4: typeof GC_MakeCylindricalSurface_4;
  GC_MakeCylindricalSurface_5: typeof GC_MakeCylindricalSurface_5;
  GC_MakeCylindricalSurface_6: typeof GC_MakeCylindricalSurface_6;
  GC_MakeCylindricalSurface_7: typeof GC_MakeCylindricalSurface_7;
  GC_MakeEllipse_1: typeof GC_MakeEllipse_1;
  GC_MakeEllipse_2: typeof GC_MakeEllipse_2;
  GC_MakeEllipse_3: typeof GC_MakeEllipse_3;
  GC_MakeHyperbola_1: typeof GC_MakeHyperbola_1;
  GC_MakeHyperbola_2: typeof GC_MakeHyperbola_2;
  GC_MakeHyperbola_3: typeof GC_MakeHyperbola_3;
  GC_MakeLine_1: typeof GC_MakeLine_1;
  GC_MakeLine_2: typeof GC_MakeLine_2;
  GC_MakeLine_3: typeof GC_MakeLine_3;
  GC_MakeLine_4: typeof GC_MakeLine_4;
  GC_MakeLine_5: typeof GC_MakeLine_5;
  GC_MakeMirror_1: typeof GC_MakeMirror_1;
  GC_MakeMirror_2: typeof GC_MakeMirror_2;
  GC_MakeMirror_3: typeof GC_MakeMirror_3;
  GC_MakeMirror_4: typeof GC_MakeMirror_4;
  GC_MakeMirror_5: typeof GC_MakeMirror_5;
  GC_MakeMirror_6: typeof GC_MakeMirror_6;
  GC_MakePlane_1: typeof GC_MakePlane_1;
  GC_MakePlane_2: typeof GC_MakePlane_2;
  GC_MakePlane_3: typeof GC_MakePlane_3;
  GC_MakePlane_4: typeof GC_MakePlane_4;
  GC_MakePlane_5: typeof GC_MakePlane_5;
  GC_MakePlane_6: typeof GC_MakePlane_6;
  GC_MakePlane_7: typeof GC_MakePlane_7;
  GC_MakeRotation_1: typeof GC_MakeRotation_1;
  GC_MakeRotation_2: typeof GC_MakeRotation_2;
  GC_MakeRotation_3: typeof GC_MakeRotation_3;
  GC_MakeScale: typeof GC_MakeScale;
  GC_MakeSegment_1: typeof GC_MakeSegment_1;
  GC_MakeSegment_2: typeof GC_MakeSegment_2;
  GC_MakeSegment_3: typeof GC_MakeSegment_3;
  GC_MakeSegment_4: typeof GC_MakeSegment_4;
  GC_MakeTranslation_1: typeof GC_MakeTranslation_1;
  GC_MakeTranslation_2: typeof GC_MakeTranslation_2;
  GC_MakeTrimmedCone_1: typeof GC_MakeTrimmedCone_1;
  GC_MakeTrimmedCone_2: typeof GC_MakeTrimmedCone_2;
  GC_MakeTrimmedCylinder_1: typeof GC_MakeTrimmedCylinder_1;
  GC_MakeTrimmedCylinder_2: typeof GC_MakeTrimmedCylinder_2;
  GC_MakeTrimmedCylinder_3: typeof GC_MakeTrimmedCylinder_3;
  GCE2d_MakeArcOfCircle_1: typeof GCE2d_MakeArcOfCircle_1;
  GCE2d_MakeArcOfCircle_2: typeof GCE2d_MakeArcOfCircle_2;
  GCE2d_MakeArcOfCircle_3: typeof GCE2d_MakeArcOfCircle_3;
  GCE2d_MakeArcOfCircle_4: typeof GCE2d_MakeArcOfCircle_4;
  GCE2d_MakeArcOfCircle_5: typeof GCE2d_MakeArcOfCircle_5;
  GCE2d_MakeArcOfEllipse_1: typeof GCE2d_MakeArcOfEllipse_1;
  GCE2d_MakeArcOfEllipse_2: typeof GCE2d_MakeArcOfEllipse_2;
  GCE2d_MakeArcOfEllipse_3: typeof GCE2d_MakeArcOfEllipse_3;
  GCE2d_MakeArcOfHyperbola_1: typeof GCE2d_MakeArcOfHyperbola_1;
  GCE2d_MakeArcOfHyperbola_2: typeof GCE2d_MakeArcOfHyperbola_2;
  GCE2d_MakeArcOfHyperbola_3: typeof GCE2d_MakeArcOfHyperbola_3;
  GCE2d_MakeArcOfParabola_1: typeof GCE2d_MakeArcOfParabola_1;
  GCE2d_MakeArcOfParabola_2: typeof GCE2d_MakeArcOfParabola_2;
  GCE2d_MakeArcOfParabola_3: typeof GCE2d_MakeArcOfParabola_3;
  GCE2d_MakeCircle_1: typeof GCE2d_MakeCircle_1;
  GCE2d_MakeCircle_2: typeof GCE2d_MakeCircle_2;
  GCE2d_MakeCircle_3: typeof GCE2d_MakeCircle_3;
  GCE2d_MakeCircle_4: typeof GCE2d_MakeCircle_4;
  GCE2d_MakeCircle_5: typeof GCE2d_MakeCircle_5;
  GCE2d_MakeCircle_6: typeof GCE2d_MakeCircle_6;
  GCE2d_MakeCircle_7: typeof GCE2d_MakeCircle_7;
  GCE2d_MakeCircle_8: typeof GCE2d_MakeCircle_8;
  GCE2d_MakeEllipse_1: typeof GCE2d_MakeEllipse_1;
  GCE2d_MakeEllipse_2: typeof GCE2d_MakeEllipse_2;
  GCE2d_MakeEllipse_3: typeof GCE2d_MakeEllipse_3;
  GCE2d_MakeEllipse_4: typeof GCE2d_MakeEllipse_4;
  GCE2d_MakeHyperbola_1: typeof GCE2d_MakeHyperbola_1;
  GCE2d_MakeHyperbola_2: typeof GCE2d_MakeHyperbola_2;
  GCE2d_MakeHyperbola_3: typeof GCE2d_MakeHyperbola_3;
  GCE2d_MakeHyperbola_4: typeof GCE2d_MakeHyperbola_4;
  GCE2d_MakeLine_1: typeof GCE2d_MakeLine_1;
  GCE2d_MakeLine_2: typeof GCE2d_MakeLine_2;
  GCE2d_MakeLine_3: typeof GCE2d_MakeLine_3;
  GCE2d_MakeLine_4: typeof GCE2d_MakeLine_4;
  GCE2d_MakeLine_5: typeof GCE2d_MakeLine_5;
  GCE2d_MakeLine_6: typeof GCE2d_MakeLine_6;
  GCE2d_MakeMirror_1: typeof GCE2d_MakeMirror_1;
  GCE2d_MakeMirror_2: typeof GCE2d_MakeMirror_2;
  GCE2d_MakeMirror_3: typeof GCE2d_MakeMirror_3;
  GCE2d_MakeMirror_4: typeof GCE2d_MakeMirror_4;
  GCE2d_MakeParabola_1: typeof GCE2d_MakeParabola_1;
  GCE2d_MakeParabola_2: typeof GCE2d_MakeParabola_2;
  GCE2d_MakeParabola_3: typeof GCE2d_MakeParabola_3;
  GCE2d_MakeParabola_4: typeof GCE2d_MakeParabola_4;
  GCE2d_MakeParabola_5: typeof GCE2d_MakeParabola_5;
  GCE2d_MakeRotation: typeof GCE2d_MakeRotation;
  GCE2d_MakeScale: typeof GCE2d_MakeScale;
  GCE2d_MakeSegment_1: typeof GCE2d_MakeSegment_1;
  GCE2d_MakeSegment_2: typeof GCE2d_MakeSegment_2;
  GCE2d_MakeSegment_3: typeof GCE2d_MakeSegment_3;
  GCE2d_MakeSegment_4: typeof GCE2d_MakeSegment_4;
  GCE2d_MakeSegment_5: typeof GCE2d_MakeSegment_5;
  GCE2d_MakeTranslation_1: typeof GCE2d_MakeTranslation_1;
  GCE2d_MakeTranslation_2: typeof GCE2d_MakeTranslation_2;
  GCPnts_AbscissaPoint_1: typeof GCPnts_AbscissaPoint_1;
  GCPnts_AbscissaPoint_2: typeof GCPnts_AbscissaPoint_2;
  GCPnts_AbscissaPoint_3: typeof GCPnts_AbscissaPoint_3;
  GCPnts_AbscissaPoint_4: typeof GCPnts_AbscissaPoint_4;
  GCPnts_AbscissaPoint_5: typeof GCPnts_AbscissaPoint_5;
  GCPnts_AbscissaPoint_6: typeof GCPnts_AbscissaPoint_6;
  GCPnts_AbscissaPoint_7: typeof GCPnts_AbscissaPoint_7;
  GCPnts_AbscissaPoint_8: typeof GCPnts_AbscissaPoint_8;
  GCPnts_AbscissaPoint_9: typeof GCPnts_AbscissaPoint_9;
  GCPnts_DistFunctionMV: typeof GCPnts_DistFunctionMV;
  GCPnts_DistFunction2dMV: typeof GCPnts_DistFunction2dMV;
  GCPnts_QuasiUniformAbscissa_1: typeof GCPnts_QuasiUniformAbscissa_1;
  GCPnts_QuasiUniformAbscissa_2: typeof GCPnts_QuasiUniformAbscissa_2;
  GCPnts_QuasiUniformAbscissa_3: typeof GCPnts_QuasiUniformAbscissa_3;
  GCPnts_QuasiUniformAbscissa_4: typeof GCPnts_QuasiUniformAbscissa_4;
  GCPnts_QuasiUniformAbscissa_5: typeof GCPnts_QuasiUniformAbscissa_5;
  GCPnts_QuasiUniformDeflection_1: typeof GCPnts_QuasiUniformDeflection_1;
  GCPnts_QuasiUniformDeflection_2: typeof GCPnts_QuasiUniformDeflection_2;
  GCPnts_QuasiUniformDeflection_3: typeof GCPnts_QuasiUniformDeflection_3;
  GCPnts_QuasiUniformDeflection_4: typeof GCPnts_QuasiUniformDeflection_4;
  GCPnts_QuasiUniformDeflection_5: typeof GCPnts_QuasiUniformDeflection_5;
  GCPnts_UniformAbscissa_1: typeof GCPnts_UniformAbscissa_1;
  GCPnts_UniformAbscissa_2: typeof GCPnts_UniformAbscissa_2;
  GCPnts_UniformAbscissa_3: typeof GCPnts_UniformAbscissa_3;
  GCPnts_UniformAbscissa_4: typeof GCPnts_UniformAbscissa_4;
  GCPnts_UniformAbscissa_5: typeof GCPnts_UniformAbscissa_5;
  GCPnts_UniformAbscissa_6: typeof GCPnts_UniformAbscissa_6;
  GCPnts_UniformAbscissa_7: typeof GCPnts_UniformAbscissa_7;
  GCPnts_UniformAbscissa_8: typeof GCPnts_UniformAbscissa_8;
  GCPnts_UniformAbscissa_9: typeof GCPnts_UniformAbscissa_9;
  GCPnts_UniformDeflection_1: typeof GCPnts_UniformDeflection_1;
  GCPnts_UniformDeflection_2: typeof GCPnts_UniformDeflection_2;
  GCPnts_UniformDeflection_3: typeof GCPnts_UniformDeflection_3;
  GCPnts_UniformDeflection_4: typeof GCPnts_UniformDeflection_4;
  GCPnts_UniformDeflection_5: typeof GCPnts_UniformDeflection_5;
  Geom2dConvert_ApproxCurve_1: typeof Geom2dConvert_ApproxCurve_1;
  Geom2dConvert_ApproxCurve_2: typeof Geom2dConvert_ApproxCurve_2;
  Geom2dConvert_BSplineCurveKnotSplitting: typeof Geom2dConvert_BSplineCurveKnotSplitting;
  Geom2dConvert_BSplineCurveToBezierCurve_1: typeof Geom2dConvert_BSplineCurveToBezierCurve_1;
  Geom2dConvert_BSplineCurveToBezierCurve_2: typeof Geom2dConvert_BSplineCurveToBezierCurve_2;
  GeomConvert_ApproxCurve_1: typeof GeomConvert_ApproxCurve_1;
  GeomConvert_ApproxCurve_2: typeof GeomConvert_ApproxCurve_2;
  GeomConvert_ApproxSurface_1: typeof GeomConvert_ApproxSurface_1;
  GeomConvert_ApproxSurface_2: typeof GeomConvert_ApproxSurface_2;
  GeomConvert_BSplineCurveKnotSplitting: typeof GeomConvert_BSplineCurveKnotSplitting;
  GeomConvert_BSplineCurveToBezierCurve_1: typeof GeomConvert_BSplineCurveToBezierCurve_1;
  GeomConvert_BSplineCurveToBezierCurve_2: typeof GeomConvert_BSplineCurveToBezierCurve_2;
  GeomConvert_BSplineSurfaceKnotSplitting: typeof GeomConvert_BSplineSurfaceKnotSplitting;
  GeomConvert_BSplineSurfaceToBezierSurface_1: typeof GeomConvert_BSplineSurfaceToBezierSurface_1;
  GeomConvert_BSplineSurfaceToBezierSurface_2: typeof GeomConvert_BSplineSurfaceToBezierSurface_2;
  GeomConvert_CompBezierSurfacesToBSplineSurface_1: typeof GeomConvert_CompBezierSurfacesToBSplineSurface_1;
  GeomConvert_CompBezierSurfacesToBSplineSurface_2: typeof GeomConvert_CompBezierSurfacesToBSplineSurface_2;
  GeomConvert_CompBezierSurfacesToBSplineSurface_3: typeof GeomConvert_CompBezierSurfacesToBSplineSurface_3;
  GeomConvert_CompCurveToBSplineCurve_1: typeof GeomConvert_CompCurveToBSplineCurve_1;
  GeomConvert_CompCurveToBSplineCurve_2: typeof GeomConvert_CompCurveToBSplineCurve_2;
  GeomLib_Check2dBSplineCurve: typeof GeomLib_Check2dBSplineCurve;
  GeomLib_CheckBSplineCurve: typeof GeomLib_CheckBSplineCurve;
  GeomLib_DenominatorMultiplier: typeof GeomLib_DenominatorMultiplier;
  GeomLib_Interpolate: typeof GeomLib_Interpolate;
  GeomLib_IsPlanarSurface: typeof GeomLib_IsPlanarSurface;
  GeomLib_LogSample: typeof GeomLib_LogSample;
  GeomLib_MakeCurvefromApprox: typeof GeomLib_MakeCurvefromApprox;
  GeomLib_PolyFunc: typeof GeomLib_PolyFunc;
  IntAna_Curve: typeof IntAna_Curve;
  IntAna_Int3Pln_1: typeof IntAna_Int3Pln_1;
  IntAna_Int3Pln_2: typeof IntAna_Int3Pln_2;
  IntAna_IntConicQuad_1: typeof IntAna_IntConicQuad_1;
  IntAna_IntConicQuad_2: typeof IntAna_IntConicQuad_2;
  IntAna_IntConicQuad_3: typeof IntAna_IntConicQuad_3;
  IntAna_IntConicQuad_4: typeof IntAna_IntConicQuad_4;
  IntAna_IntConicQuad_5: typeof IntAna_IntConicQuad_5;
  IntAna_IntConicQuad_6: typeof IntAna_IntConicQuad_6;
  IntAna_IntConicQuad_7: typeof IntAna_IntConicQuad_7;
  IntAna_IntConicQuad_8: typeof IntAna_IntConicQuad_8;
  IntAna_IntConicQuad_9: typeof IntAna_IntConicQuad_9;
  IntAna_IntConicQuad_10: typeof IntAna_IntConicQuad_10;
  IntAna_IntConicQuad_11: typeof IntAna_IntConicQuad_11;
  IntAna_IntLinTorus_1: typeof IntAna_IntLinTorus_1;
  IntAna_IntLinTorus_2: typeof IntAna_IntLinTorus_2;
  IntAna_IntQuadQuad_1: typeof IntAna_IntQuadQuad_1;
  IntAna_IntQuadQuad_2: typeof IntAna_IntQuadQuad_2;
  IntAna_IntQuadQuad_3: typeof IntAna_IntQuadQuad_3;
  IntAna_QuadQuadGeo_1: typeof IntAna_QuadQuadGeo_1;
  IntAna_QuadQuadGeo_2: typeof IntAna_QuadQuadGeo_2;
  IntAna_QuadQuadGeo_3: typeof IntAna_QuadQuadGeo_3;
  IntAna_QuadQuadGeo_4: typeof IntAna_QuadQuadGeo_4;
  IntAna_QuadQuadGeo_5: typeof IntAna_QuadQuadGeo_5;
  IntAna_QuadQuadGeo_6: typeof IntAna_QuadQuadGeo_6;
  IntAna_QuadQuadGeo_7: typeof IntAna_QuadQuadGeo_7;
  IntAna_QuadQuadGeo_8: typeof IntAna_QuadQuadGeo_8;
  IntAna_QuadQuadGeo_9: typeof IntAna_QuadQuadGeo_9;
  IntAna_QuadQuadGeo_10: typeof IntAna_QuadQuadGeo_10;
  IntAna_QuadQuadGeo_11: typeof IntAna_QuadQuadGeo_11;
  IntAna_QuadQuadGeo_12: typeof IntAna_QuadQuadGeo_12;
  IntAna_QuadQuadGeo_13: typeof IntAna_QuadQuadGeo_13;
  IntAna_QuadQuadGeo_14: typeof IntAna_QuadQuadGeo_14;
  IntAna_QuadQuadGeo_15: typeof IntAna_QuadQuadGeo_15;
  IntAna_QuadQuadGeo_16: typeof IntAna_QuadQuadGeo_16;
  IntAna_Quadric_1: typeof IntAna_Quadric_1;
  IntAna_Quadric_2: typeof IntAna_Quadric_2;
  IntAna_Quadric_3: typeof IntAna_Quadric_3;
  IntAna_Quadric_4: typeof IntAna_Quadric_4;
  IntAna_Quadric_5: typeof IntAna_Quadric_5;
  IntAna2d_IntPoint_1: typeof IntAna2d_IntPoint_1;
  IntAna2d_IntPoint_2: typeof IntAna2d_IntPoint_2;
  IntAna2d_IntPoint_3: typeof IntAna2d_IntPoint_3;
  IntAna2d_AnaIntersection_1: typeof IntAna2d_AnaIntersection_1;
  IntAna2d_AnaIntersection_2: typeof IntAna2d_AnaIntersection_2;
  IntAna2d_AnaIntersection_3: typeof IntAna2d_AnaIntersection_3;
  IntAna2d_AnaIntersection_4: typeof IntAna2d_AnaIntersection_4;
  IntAna2d_AnaIntersection_5: typeof IntAna2d_AnaIntersection_5;
  IntAna2d_AnaIntersection_6: typeof IntAna2d_AnaIntersection_6;
  IntAna2d_AnaIntersection_7: typeof IntAna2d_AnaIntersection_7;
  IntAna2d_AnaIntersection_8: typeof IntAna2d_AnaIntersection_8;
  IntAna2d_AnaIntersection_9: typeof IntAna2d_AnaIntersection_9;
  IntAna2d_Conic_1: typeof IntAna2d_Conic_1;
  IntAna2d_Conic_2: typeof IntAna2d_Conic_2;
  IntAna2d_Conic_3: typeof IntAna2d_Conic_3;
  IntAna2d_Conic_4: typeof IntAna2d_Conic_4;
  IntAna2d_Conic_5: typeof IntAna2d_Conic_5;
  MyDirectPolynomialRoots_1: typeof MyDirectPolynomialRoots_1;
  MyDirectPolynomialRoots_2: typeof MyDirectPolynomialRoots_2;
  ProjLib_CompProjectedCurve_1: typeof ProjLib_CompProjectedCurve_1;
  ProjLib_CompProjectedCurve_2: typeof ProjLib_CompProjectedCurve_2;
  ProjLib_CompProjectedCurve_3: typeof ProjLib_CompProjectedCurve_3;
  ProjLib_ComputeApprox_1: typeof ProjLib_ComputeApprox_1;
  ProjLib_ComputeApprox_2: typeof ProjLib_ComputeApprox_2;
  ProjLib_ComputeApproxOnPolarSurface_1: typeof ProjLib_ComputeApproxOnPolarSurface_1;
  ProjLib_ComputeApproxOnPolarSurface_2: typeof ProjLib_ComputeApproxOnPolarSurface_2;
  ProjLib_ComputeApproxOnPolarSurface_3: typeof ProjLib_ComputeApproxOnPolarSurface_3;
  ProjLib_ComputeApproxOnPolarSurface_4: typeof ProjLib_ComputeApproxOnPolarSurface_4;
  ProjLib_Projector: typeof ProjLib_Projector;
  ProjLib_Cone_1: typeof ProjLib_Cone_1;
  ProjLib_Cone_2: typeof ProjLib_Cone_2;
  ProjLib_Cone_3: typeof ProjLib_Cone_3;
  ProjLib_Cone_4: typeof ProjLib_Cone_4;
  ProjLib_Cylinder_1: typeof ProjLib_Cylinder_1;
  ProjLib_Cylinder_2: typeof ProjLib_Cylinder_2;
  ProjLib_Cylinder_3: typeof ProjLib_Cylinder_3;
  ProjLib_Cylinder_4: typeof ProjLib_Cylinder_4;
  ProjLib_Cylinder_5: typeof ProjLib_Cylinder_5;
  ProjLib_HCompProjectedCurve_1: typeof ProjLib_HCompProjectedCurve_1;
  ProjLib_HCompProjectedCurve_2: typeof ProjLib_HCompProjectedCurve_2;
  ProjLib_ProjectedCurve_1: typeof ProjLib_ProjectedCurve_1;
  ProjLib_ProjectedCurve_2: typeof ProjLib_ProjectedCurve_2;
  ProjLib_ProjectedCurve_3: typeof ProjLib_ProjectedCurve_3;
  ProjLib_ProjectedCurve_4: typeof ProjLib_ProjectedCurve_4;
  ProjLib_HProjectedCurve_1: typeof ProjLib_HProjectedCurve_1;
  ProjLib_HProjectedCurve_2: typeof ProjLib_HProjectedCurve_2;
  ProjLib_Plane_1: typeof ProjLib_Plane_1;
  ProjLib_Plane_2: typeof ProjLib_Plane_2;
  ProjLib_Plane_3: typeof ProjLib_Plane_3;
  ProjLib_Plane_4: typeof ProjLib_Plane_4;
  ProjLib_Plane_5: typeof ProjLib_Plane_5;
  ProjLib_Plane_6: typeof ProjLib_Plane_6;
  ProjLib_Plane_7: typeof ProjLib_Plane_7;
  ProjLib_PrjFunc: typeof ProjLib_PrjFunc;
  ProjLib_PrjResolve: typeof ProjLib_PrjResolve;
  ProjLib_ProjectOnPlane_1: typeof ProjLib_ProjectOnPlane_1;
  ProjLib_ProjectOnPlane_2: typeof ProjLib_ProjectOnPlane_2;
  ProjLib_ProjectOnPlane_3: typeof ProjLib_ProjectOnPlane_3;
  ProjLib_Sphere_1: typeof ProjLib_Sphere_1;
  ProjLib_Sphere_2: typeof ProjLib_Sphere_2;
  ProjLib_Sphere_3: typeof ProjLib_Sphere_3;
  ProjLib_Torus_1: typeof ProjLib_Torus_1;
  ProjLib_Torus_2: typeof ProjLib_Torus_2;
  ProjLib_Torus_3: typeof ProjLib_Torus_3;
  gce_MakeCirc_1: typeof gce_MakeCirc_1;
  gce_MakeCirc_2: typeof gce_MakeCirc_2;
  gce_MakeCirc_3: typeof gce_MakeCirc_3;
  gce_MakeCirc_4: typeof gce_MakeCirc_4;
  gce_MakeCirc_5: typeof gce_MakeCirc_5;
  gce_MakeCirc_6: typeof gce_MakeCirc_6;
  gce_MakeCirc_7: typeof gce_MakeCirc_7;
  gce_MakeCirc_8: typeof gce_MakeCirc_8;
  gce_MakeCirc2d_1: typeof gce_MakeCirc2d_1;
  gce_MakeCirc2d_2: typeof gce_MakeCirc2d_2;
  gce_MakeCirc2d_3: typeof gce_MakeCirc2d_3;
  gce_MakeCirc2d_4: typeof gce_MakeCirc2d_4;
  gce_MakeCirc2d_5: typeof gce_MakeCirc2d_5;
  gce_MakeCirc2d_6: typeof gce_MakeCirc2d_6;
  gce_MakeCirc2d_7: typeof gce_MakeCirc2d_7;
  gce_MakeCone_1: typeof gce_MakeCone_1;
  gce_MakeCone_2: typeof gce_MakeCone_2;
  gce_MakeCone_3: typeof gce_MakeCone_3;
  gce_MakeCone_4: typeof gce_MakeCone_4;
  gce_MakeCone_5: typeof gce_MakeCone_5;
  gce_MakeCone_6: typeof gce_MakeCone_6;
  gce_MakeCone_7: typeof gce_MakeCone_7;
  gce_MakeCylinder_1: typeof gce_MakeCylinder_1;
  gce_MakeCylinder_2: typeof gce_MakeCylinder_2;
  gce_MakeCylinder_3: typeof gce_MakeCylinder_3;
  gce_MakeCylinder_4: typeof gce_MakeCylinder_4;
  gce_MakeCylinder_5: typeof gce_MakeCylinder_5;
  gce_MakeCylinder_6: typeof gce_MakeCylinder_6;
  gce_MakeDir_1: typeof gce_MakeDir_1;
  gce_MakeDir_2: typeof gce_MakeDir_2;
  gce_MakeDir_3: typeof gce_MakeDir_3;
  gce_MakeDir_4: typeof gce_MakeDir_4;
  gce_MakeDir2d_1: typeof gce_MakeDir2d_1;
  gce_MakeDir2d_2: typeof gce_MakeDir2d_2;
  gce_MakeDir2d_3: typeof gce_MakeDir2d_3;
  gce_MakeDir2d_4: typeof gce_MakeDir2d_4;
  gce_MakeElips_1: typeof gce_MakeElips_1;
  gce_MakeElips_2: typeof gce_MakeElips_2;
  gce_MakeElips2d_1: typeof gce_MakeElips2d_1;
  gce_MakeElips2d_2: typeof gce_MakeElips2d_2;
  gce_MakeElips2d_3: typeof gce_MakeElips2d_3;
  gce_MakeHypr_1: typeof gce_MakeHypr_1;
  gce_MakeHypr_2: typeof gce_MakeHypr_2;
  gce_MakeHypr2d_1: typeof gce_MakeHypr2d_1;
  gce_MakeHypr2d_2: typeof gce_MakeHypr2d_2;
  gce_MakeHypr2d_3: typeof gce_MakeHypr2d_3;
  gce_MakeLin_1: typeof gce_MakeLin_1;
  gce_MakeLin_2: typeof gce_MakeLin_2;
  gce_MakeLin_3: typeof gce_MakeLin_3;
  gce_MakeLin_4: typeof gce_MakeLin_4;
  gce_MakeLin2d_1: typeof gce_MakeLin2d_1;
  gce_MakeLin2d_2: typeof gce_MakeLin2d_2;
  gce_MakeLin2d_3: typeof gce_MakeLin2d_3;
  gce_MakeLin2d_4: typeof gce_MakeLin2d_4;
  gce_MakeLin2d_5: typeof gce_MakeLin2d_5;
  gce_MakeLin2d_6: typeof gce_MakeLin2d_6;
  gce_MakeMirror_1: typeof gce_MakeMirror_1;
  gce_MakeMirror_2: typeof gce_MakeMirror_2;
  gce_MakeMirror_3: typeof gce_MakeMirror_3;
  gce_MakeMirror_4: typeof gce_MakeMirror_4;
  gce_MakeMirror_5: typeof gce_MakeMirror_5;
  gce_MakeMirror_6: typeof gce_MakeMirror_6;
  gce_MakeMirror2d_1: typeof gce_MakeMirror2d_1;
  gce_MakeMirror2d_2: typeof gce_MakeMirror2d_2;
  gce_MakeMirror2d_3: typeof gce_MakeMirror2d_3;
  gce_MakeMirror2d_4: typeof gce_MakeMirror2d_4;
  gce_MakeParab_1: typeof gce_MakeParab_1;
  gce_MakeParab_2: typeof gce_MakeParab_2;
  gce_MakeParab2d_1: typeof gce_MakeParab2d_1;
  gce_MakeParab2d_2: typeof gce_MakeParab2d_2;
  gce_MakeParab2d_3: typeof gce_MakeParab2d_3;
  gce_MakeParab2d_4: typeof gce_MakeParab2d_4;
  gce_MakePln_1: typeof gce_MakePln_1;
  gce_MakePln_2: typeof gce_MakePln_2;
  gce_MakePln_3: typeof gce_MakePln_3;
  gce_MakePln_4: typeof gce_MakePln_4;
  gce_MakePln_5: typeof gce_MakePln_5;
  gce_MakePln_6: typeof gce_MakePln_6;
  gce_MakePln_7: typeof gce_MakePln_7;
  gce_MakePln_8: typeof gce_MakePln_8;
  gce_MakeRotation_1: typeof gce_MakeRotation_1;
  gce_MakeRotation_2: typeof gce_MakeRotation_2;
  gce_MakeRotation_3: typeof gce_MakeRotation_3;
  gce_MakeRotation2d: typeof gce_MakeRotation2d;
  gce_MakeScale: typeof gce_MakeScale;
  gce_MakeScale2d: typeof gce_MakeScale2d;
  gce_MakeTranslation_1: typeof gce_MakeTranslation_1;
  gce_MakeTranslation_2: typeof gce_MakeTranslation_2;
  gce_MakeTranslation2d_1: typeof gce_MakeTranslation2d_1;
  gce_MakeTranslation2d_2: typeof gce_MakeTranslation2d_2;
  AdvApp2Var_SequenceOfStrip_1: typeof AdvApp2Var_SequenceOfStrip_1;
  AdvApp2Var_SequenceOfStrip_2: typeof AdvApp2Var_SequenceOfStrip_2;
  AdvApp2Var_SequenceOfStrip_3: typeof AdvApp2Var_SequenceOfStrip_3;
  AppParCurves_Array1OfMultiPoint_1: typeof AppParCurves_Array1OfMultiPoint_1;
  AppParCurves_Array1OfMultiPoint_2: typeof AppParCurves_Array1OfMultiPoint_2;
  AppParCurves_Array1OfMultiPoint_3: typeof AppParCurves_Array1OfMultiPoint_3;
  AppParCurves_Array1OfMultiPoint_4: typeof AppParCurves_Array1OfMultiPoint_4;
  AppParCurves_Array1OfMultiPoint_5: typeof AppParCurves_Array1OfMultiPoint_5;
  Handle_AppParCurves_HArray1OfMultiPoint_1: typeof Handle_AppParCurves_HArray1OfMultiPoint_1;
  Handle_AppParCurves_HArray1OfMultiPoint_2: typeof Handle_AppParCurves_HArray1OfMultiPoint_2;
  Handle_AppParCurves_HArray1OfMultiPoint_3: typeof Handle_AppParCurves_HArray1OfMultiPoint_3;
  Handle_AppParCurves_HArray1OfMultiPoint_4: typeof Handle_AppParCurves_HArray1OfMultiPoint_4;
  AppDef_Array1OfMultiPointConstraint_1: typeof AppDef_Array1OfMultiPointConstraint_1;
  AppDef_Array1OfMultiPointConstraint_2: typeof AppDef_Array1OfMultiPointConstraint_2;
  AppDef_Array1OfMultiPointConstraint_3: typeof AppDef_Array1OfMultiPointConstraint_3;
  AppDef_Array1OfMultiPointConstraint_4: typeof AppDef_Array1OfMultiPointConstraint_4;
  AppDef_Array1OfMultiPointConstraint_5: typeof AppDef_Array1OfMultiPointConstraint_5;
  Handle_AppDef_HArray1OfMultiPointConstraint_1: typeof Handle_AppDef_HArray1OfMultiPointConstraint_1;
  Handle_AppDef_HArray1OfMultiPointConstraint_2: typeof Handle_AppDef_HArray1OfMultiPointConstraint_2;
  Handle_AppDef_HArray1OfMultiPointConstraint_3: typeof Handle_AppDef_HArray1OfMultiPointConstraint_3;
  Handle_AppDef_HArray1OfMultiPointConstraint_4: typeof Handle_AppDef_HArray1OfMultiPointConstraint_4;
  AppParCurves_Array1OfConstraintCouple_1: typeof AppParCurves_Array1OfConstraintCouple_1;
  AppParCurves_Array1OfConstraintCouple_2: typeof AppParCurves_Array1OfConstraintCouple_2;
  AppParCurves_Array1OfConstraintCouple_3: typeof AppParCurves_Array1OfConstraintCouple_3;
  AppParCurves_Array1OfConstraintCouple_4: typeof AppParCurves_Array1OfConstraintCouple_4;
  AppParCurves_Array1OfConstraintCouple_5: typeof AppParCurves_Array1OfConstraintCouple_5;
  Handle_AppParCurves_HArray1OfConstraintCouple_1: typeof Handle_AppParCurves_HArray1OfConstraintCouple_1;
  Handle_AppParCurves_HArray1OfConstraintCouple_2: typeof Handle_AppParCurves_HArray1OfConstraintCouple_2;
  Handle_AppParCurves_HArray1OfConstraintCouple_3: typeof Handle_AppParCurves_HArray1OfConstraintCouple_3;
  Handle_AppParCurves_HArray1OfConstraintCouple_4: typeof Handle_AppParCurves_HArray1OfConstraintCouple_4;
  AppParCurves_SequenceOfMultiCurve_1: typeof AppParCurves_SequenceOfMultiCurve_1;
  AppParCurves_SequenceOfMultiCurve_2: typeof AppParCurves_SequenceOfMultiCurve_2;
  AppParCurves_SequenceOfMultiCurve_3: typeof AppParCurves_SequenceOfMultiCurve_3;
  Handle_FEmTool_HAssemblyTable_1: typeof Handle_FEmTool_HAssemblyTable_1;
  Handle_FEmTool_HAssemblyTable_2: typeof Handle_FEmTool_HAssemblyTable_2;
  Handle_FEmTool_HAssemblyTable_3: typeof Handle_FEmTool_HAssemblyTable_3;
  Handle_FEmTool_HAssemblyTable_4: typeof Handle_FEmTool_HAssemblyTable_4;
  Handle_AppDef_SmoothCriterion_1: typeof Handle_AppDef_SmoothCriterion_1;
  Handle_AppDef_SmoothCriterion_2: typeof Handle_AppDef_SmoothCriterion_2;
  Handle_AppDef_SmoothCriterion_3: typeof Handle_AppDef_SmoothCriterion_3;
  Handle_AppDef_SmoothCriterion_4: typeof Handle_AppDef_SmoothCriterion_4;
  Handle_AppDef_LinearCriteria_1: typeof Handle_AppDef_LinearCriteria_1;
  Handle_AppDef_LinearCriteria_2: typeof Handle_AppDef_LinearCriteria_2;
  Handle_AppDef_LinearCriteria_3: typeof Handle_AppDef_LinearCriteria_3;
  Handle_AppDef_LinearCriteria_4: typeof Handle_AppDef_LinearCriteria_4;
  AppParCurves_Array1OfMultiBSpCurve_1: typeof AppParCurves_Array1OfMultiBSpCurve_1;
  AppParCurves_Array1OfMultiBSpCurve_2: typeof AppParCurves_Array1OfMultiBSpCurve_2;
  AppParCurves_Array1OfMultiBSpCurve_3: typeof AppParCurves_Array1OfMultiBSpCurve_3;
  AppParCurves_Array1OfMultiBSpCurve_4: typeof AppParCurves_Array1OfMultiBSpCurve_4;
  AppParCurves_Array1OfMultiBSpCurve_5: typeof AppParCurves_Array1OfMultiBSpCurve_5;
  AppParCurves_Array1OfMultiCurve_1: typeof AppParCurves_Array1OfMultiCurve_1;
  AppParCurves_Array1OfMultiCurve_2: typeof AppParCurves_Array1OfMultiCurve_2;
  AppParCurves_Array1OfMultiCurve_3: typeof AppParCurves_Array1OfMultiCurve_3;
  AppParCurves_Array1OfMultiCurve_4: typeof AppParCurves_Array1OfMultiCurve_4;
  AppParCurves_Array1OfMultiCurve_5: typeof AppParCurves_Array1OfMultiCurve_5;
  Handle_AppParCurves_HArray1OfMultiBSpCurve_1: typeof Handle_AppParCurves_HArray1OfMultiBSpCurve_1;
  Handle_AppParCurves_HArray1OfMultiBSpCurve_2: typeof Handle_AppParCurves_HArray1OfMultiBSpCurve_2;
  Handle_AppParCurves_HArray1OfMultiBSpCurve_3: typeof Handle_AppParCurves_HArray1OfMultiBSpCurve_3;
  Handle_AppParCurves_HArray1OfMultiBSpCurve_4: typeof Handle_AppParCurves_HArray1OfMultiBSpCurve_4;
  Handle_AppParCurves_HArray1OfMultiCurve_1: typeof Handle_AppParCurves_HArray1OfMultiCurve_1;
  Handle_AppParCurves_HArray1OfMultiCurve_2: typeof Handle_AppParCurves_HArray1OfMultiCurve_2;
  Handle_AppParCurves_HArray1OfMultiCurve_3: typeof Handle_AppParCurves_HArray1OfMultiCurve_3;
  Handle_AppParCurves_HArray1OfMultiCurve_4: typeof Handle_AppParCurves_HArray1OfMultiCurve_4;
  AppParCurves_SequenceOfMultiBSpCurve_1: typeof AppParCurves_SequenceOfMultiBSpCurve_1;
  AppParCurves_SequenceOfMultiBSpCurve_2: typeof AppParCurves_SequenceOfMultiBSpCurve_2;
  AppParCurves_SequenceOfMultiBSpCurve_3: typeof AppParCurves_SequenceOfMultiBSpCurve_3;
  Approx_Array1OfGTrsf2d_1: typeof Approx_Array1OfGTrsf2d_1;
  Approx_Array1OfGTrsf2d_2: typeof Approx_Array1OfGTrsf2d_2;
  Approx_Array1OfGTrsf2d_3: typeof Approx_Array1OfGTrsf2d_3;
  Approx_Array1OfGTrsf2d_4: typeof Approx_Array1OfGTrsf2d_4;
  Approx_Array1OfGTrsf2d_5: typeof Approx_Array1OfGTrsf2d_5;
  Handle_Approx_CurvlinFunc_1: typeof Handle_Approx_CurvlinFunc_1;
  Handle_Approx_CurvlinFunc_2: typeof Handle_Approx_CurvlinFunc_2;
  Handle_Approx_CurvlinFunc_3: typeof Handle_Approx_CurvlinFunc_3;
  Handle_Approx_CurvlinFunc_4: typeof Handle_Approx_CurvlinFunc_4;
  Handle_Approx_HArray1OfAdHSurface_1: typeof Handle_Approx_HArray1OfAdHSurface_1;
  Handle_Approx_HArray1OfAdHSurface_2: typeof Handle_Approx_HArray1OfAdHSurface_2;
  Handle_Approx_HArray1OfAdHSurface_3: typeof Handle_Approx_HArray1OfAdHSurface_3;
  Handle_Approx_HArray1OfAdHSurface_4: typeof Handle_Approx_HArray1OfAdHSurface_4;
  Handle_Approx_HArray1OfGTrsf2d_1: typeof Handle_Approx_HArray1OfGTrsf2d_1;
  Handle_Approx_HArray1OfGTrsf2d_2: typeof Handle_Approx_HArray1OfGTrsf2d_2;
  Handle_Approx_HArray1OfGTrsf2d_3: typeof Handle_Approx_HArray1OfGTrsf2d_3;
  Handle_Approx_HArray1OfGTrsf2d_4: typeof Handle_Approx_HArray1OfGTrsf2d_4;
  Handle_Approx_SweepFunction_1: typeof Handle_Approx_SweepFunction_1;
  Handle_Approx_SweepFunction_2: typeof Handle_Approx_SweepFunction_2;
  Handle_Approx_SweepFunction_3: typeof Handle_Approx_SweepFunction_3;
  Handle_Approx_SweepFunction_4: typeof Handle_Approx_SweepFunction_4;
  Extrema_SequenceOfPOnCurv_1: typeof Extrema_SequenceOfPOnCurv_1;
  Extrema_SequenceOfPOnCurv_2: typeof Extrema_SequenceOfPOnCurv_2;
  Extrema_SequenceOfPOnCurv_3: typeof Extrema_SequenceOfPOnCurv_3;
  Extrema_Array1OfPOnCurv_1: typeof Extrema_Array1OfPOnCurv_1;
  Extrema_Array1OfPOnCurv_2: typeof Extrema_Array1OfPOnCurv_2;
  Extrema_Array1OfPOnCurv_3: typeof Extrema_Array1OfPOnCurv_3;
  Extrema_Array1OfPOnCurv_4: typeof Extrema_Array1OfPOnCurv_4;
  Extrema_Array1OfPOnCurv_5: typeof Extrema_Array1OfPOnCurv_5;
  Handle_Extrema_HArray1OfPOnCurv_1: typeof Handle_Extrema_HArray1OfPOnCurv_1;
  Handle_Extrema_HArray1OfPOnCurv_2: typeof Handle_Extrema_HArray1OfPOnCurv_2;
  Handle_Extrema_HArray1OfPOnCurv_3: typeof Handle_Extrema_HArray1OfPOnCurv_3;
  Handle_Extrema_HArray1OfPOnCurv_4: typeof Handle_Extrema_HArray1OfPOnCurv_4;
  Extrema_Array1OfPOnSurf_1: typeof Extrema_Array1OfPOnSurf_1;
  Extrema_Array1OfPOnSurf_2: typeof Extrema_Array1OfPOnSurf_2;
  Extrema_Array1OfPOnSurf_3: typeof Extrema_Array1OfPOnSurf_3;
  Extrema_Array1OfPOnSurf_4: typeof Extrema_Array1OfPOnSurf_4;
  Extrema_Array1OfPOnSurf_5: typeof Extrema_Array1OfPOnSurf_5;
  Handle_Extrema_HArray1OfPOnSurf_1: typeof Handle_Extrema_HArray1OfPOnSurf_1;
  Handle_Extrema_HArray1OfPOnSurf_2: typeof Handle_Extrema_HArray1OfPOnSurf_2;
  Handle_Extrema_HArray1OfPOnSurf_3: typeof Handle_Extrema_HArray1OfPOnSurf_3;
  Handle_Extrema_HArray1OfPOnSurf_4: typeof Handle_Extrema_HArray1OfPOnSurf_4;
  Extrema_SequenceOfPOnSurf_1: typeof Extrema_SequenceOfPOnSurf_1;
  Extrema_SequenceOfPOnSurf_2: typeof Extrema_SequenceOfPOnSurf_2;
  Extrema_SequenceOfPOnSurf_3: typeof Extrema_SequenceOfPOnSurf_3;
  Extrema_Array2OfPOnSurfParams_1: typeof Extrema_Array2OfPOnSurfParams_1;
  Extrema_Array2OfPOnSurfParams_2: typeof Extrema_Array2OfPOnSurfParams_2;
  Extrema_Array2OfPOnSurfParams_3: typeof Extrema_Array2OfPOnSurfParams_3;
  Extrema_Array2OfPOnSurfParams_4: typeof Extrema_Array2OfPOnSurfParams_4;
  Extrema_Array2OfPOnSurfParams_5: typeof Extrema_Array2OfPOnSurfParams_5;
  Handle_Extrema_HArray2OfPOnSurfParams_1: typeof Handle_Extrema_HArray2OfPOnSurfParams_1;
  Handle_Extrema_HArray2OfPOnSurfParams_2: typeof Handle_Extrema_HArray2OfPOnSurfParams_2;
  Handle_Extrema_HArray2OfPOnSurfParams_3: typeof Handle_Extrema_HArray2OfPOnSurfParams_3;
  Handle_Extrema_HArray2OfPOnSurfParams_4: typeof Handle_Extrema_HArray2OfPOnSurfParams_4;
  Extrema_HUBTreeOfSphere_2: typeof Extrema_HUBTreeOfSphere_2;
  Extrema_HUBTreeOfSphere_3: typeof Extrema_HUBTreeOfSphere_3;
  Extrema_Array1OfPOnCurv2d_1: typeof Extrema_Array1OfPOnCurv2d_1;
  Extrema_Array1OfPOnCurv2d_2: typeof Extrema_Array1OfPOnCurv2d_2;
  Extrema_Array1OfPOnCurv2d_3: typeof Extrema_Array1OfPOnCurv2d_3;
  Extrema_Array1OfPOnCurv2d_4: typeof Extrema_Array1OfPOnCurv2d_4;
  Extrema_Array1OfPOnCurv2d_5: typeof Extrema_Array1OfPOnCurv2d_5;
  Extrema_Array2OfPOnCurv_1: typeof Extrema_Array2OfPOnCurv_1;
  Extrema_Array2OfPOnCurv_2: typeof Extrema_Array2OfPOnCurv_2;
  Extrema_Array2OfPOnCurv_3: typeof Extrema_Array2OfPOnCurv_3;
  Extrema_Array2OfPOnCurv_4: typeof Extrema_Array2OfPOnCurv_4;
  Extrema_Array2OfPOnCurv_5: typeof Extrema_Array2OfPOnCurv_5;
  Extrema_Array2OfPOnCurv2d_1: typeof Extrema_Array2OfPOnCurv2d_1;
  Extrema_Array2OfPOnCurv2d_2: typeof Extrema_Array2OfPOnCurv2d_2;
  Extrema_Array2OfPOnCurv2d_3: typeof Extrema_Array2OfPOnCurv2d_3;
  Extrema_Array2OfPOnCurv2d_4: typeof Extrema_Array2OfPOnCurv2d_4;
  Extrema_Array2OfPOnCurv2d_5: typeof Extrema_Array2OfPOnCurv2d_5;
  Extrema_Array2OfPOnSurf_1: typeof Extrema_Array2OfPOnSurf_1;
  Extrema_Array2OfPOnSurf_2: typeof Extrema_Array2OfPOnSurf_2;
  Extrema_Array2OfPOnSurf_3: typeof Extrema_Array2OfPOnSurf_3;
  Extrema_Array2OfPOnSurf_4: typeof Extrema_Array2OfPOnSurf_4;
  Extrema_Array2OfPOnSurf_5: typeof Extrema_Array2OfPOnSurf_5;
  Extrema_SequenceOfPOnCurv2d_1: typeof Extrema_SequenceOfPOnCurv2d_1;
  Extrema_SequenceOfPOnCurv2d_2: typeof Extrema_SequenceOfPOnCurv2d_2;
  Extrema_SequenceOfPOnCurv2d_3: typeof Extrema_SequenceOfPOnCurv2d_3;
  Handle_Extrema_ExtPExtS_1: typeof Handle_Extrema_ExtPExtS_1;
  Handle_Extrema_ExtPExtS_2: typeof Handle_Extrema_ExtPExtS_2;
  Handle_Extrema_ExtPExtS_3: typeof Handle_Extrema_ExtPExtS_3;
  Handle_Extrema_ExtPExtS_4: typeof Handle_Extrema_ExtPExtS_4;
  Handle_Extrema_ExtPRevS_1: typeof Handle_Extrema_ExtPRevS_1;
  Handle_Extrema_ExtPRevS_2: typeof Handle_Extrema_ExtPRevS_2;
  Handle_Extrema_ExtPRevS_3: typeof Handle_Extrema_ExtPRevS_3;
  Handle_Extrema_ExtPRevS_4: typeof Handle_Extrema_ExtPRevS_4;
  Handle_Extrema_HArray1OfPOnCurv2d_1: typeof Handle_Extrema_HArray1OfPOnCurv2d_1;
  Handle_Extrema_HArray1OfPOnCurv2d_2: typeof Handle_Extrema_HArray1OfPOnCurv2d_2;
  Handle_Extrema_HArray1OfPOnCurv2d_3: typeof Handle_Extrema_HArray1OfPOnCurv2d_3;
  Handle_Extrema_HArray1OfPOnCurv2d_4: typeof Handle_Extrema_HArray1OfPOnCurv2d_4;
  Handle_Extrema_HArray2OfPOnCurv_1: typeof Handle_Extrema_HArray2OfPOnCurv_1;
  Handle_Extrema_HArray2OfPOnCurv_2: typeof Handle_Extrema_HArray2OfPOnCurv_2;
  Handle_Extrema_HArray2OfPOnCurv_3: typeof Handle_Extrema_HArray2OfPOnCurv_3;
  Handle_Extrema_HArray2OfPOnCurv_4: typeof Handle_Extrema_HArray2OfPOnCurv_4;
  Handle_Extrema_HArray2OfPOnCurv2d_1: typeof Handle_Extrema_HArray2OfPOnCurv2d_1;
  Handle_Extrema_HArray2OfPOnCurv2d_2: typeof Handle_Extrema_HArray2OfPOnCurv2d_2;
  Handle_Extrema_HArray2OfPOnCurv2d_3: typeof Handle_Extrema_HArray2OfPOnCurv2d_3;
  Handle_Extrema_HArray2OfPOnCurv2d_4: typeof Handle_Extrema_HArray2OfPOnCurv2d_4;
  Handle_Extrema_HArray2OfPOnSurf_1: typeof Handle_Extrema_HArray2OfPOnSurf_1;
  Handle_Extrema_HArray2OfPOnSurf_2: typeof Handle_Extrema_HArray2OfPOnSurf_2;
  Handle_Extrema_HArray2OfPOnSurf_3: typeof Handle_Extrema_HArray2OfPOnSurf_3;
  Handle_Extrema_HArray2OfPOnSurf_4: typeof Handle_Extrema_HArray2OfPOnSurf_4;
  FEmTool_SeqOfLinConstr_1: typeof FEmTool_SeqOfLinConstr_1;
  FEmTool_SeqOfLinConstr_2: typeof FEmTool_SeqOfLinConstr_2;
  FEmTool_SeqOfLinConstr_3: typeof FEmTool_SeqOfLinConstr_3;
  Handle_FEmTool_Curve_1: typeof Handle_FEmTool_Curve_1;
  Handle_FEmTool_Curve_2: typeof Handle_FEmTool_Curve_2;
  Handle_FEmTool_Curve_3: typeof Handle_FEmTool_Curve_3;
  Handle_FEmTool_Curve_4: typeof Handle_FEmTool_Curve_4;
  Handle_FEmTool_ElementaryCriterion_1: typeof Handle_FEmTool_ElementaryCriterion_1;
  Handle_FEmTool_ElementaryCriterion_2: typeof Handle_FEmTool_ElementaryCriterion_2;
  Handle_FEmTool_ElementaryCriterion_3: typeof Handle_FEmTool_ElementaryCriterion_3;
  Handle_FEmTool_ElementaryCriterion_4: typeof Handle_FEmTool_ElementaryCriterion_4;
  Handle_FEmTool_LinearFlexion_1: typeof Handle_FEmTool_LinearFlexion_1;
  Handle_FEmTool_LinearFlexion_2: typeof Handle_FEmTool_LinearFlexion_2;
  Handle_FEmTool_LinearFlexion_3: typeof Handle_FEmTool_LinearFlexion_3;
  Handle_FEmTool_LinearFlexion_4: typeof Handle_FEmTool_LinearFlexion_4;
  Handle_FEmTool_LinearJerk_1: typeof Handle_FEmTool_LinearJerk_1;
  Handle_FEmTool_LinearJerk_2: typeof Handle_FEmTool_LinearJerk_2;
  Handle_FEmTool_LinearJerk_3: typeof Handle_FEmTool_LinearJerk_3;
  Handle_FEmTool_LinearJerk_4: typeof Handle_FEmTool_LinearJerk_4;
  Handle_FEmTool_LinearTension_1: typeof Handle_FEmTool_LinearTension_1;
  Handle_FEmTool_LinearTension_2: typeof Handle_FEmTool_LinearTension_2;
  Handle_FEmTool_LinearTension_3: typeof Handle_FEmTool_LinearTension_3;
  Handle_FEmTool_LinearTension_4: typeof Handle_FEmTool_LinearTension_4;
  Handle_FEmTool_SparseMatrix_1: typeof Handle_FEmTool_SparseMatrix_1;
  Handle_FEmTool_SparseMatrix_2: typeof Handle_FEmTool_SparseMatrix_2;
  Handle_FEmTool_SparseMatrix_3: typeof Handle_FEmTool_SparseMatrix_3;
  Handle_FEmTool_SparseMatrix_4: typeof Handle_FEmTool_SparseMatrix_4;
  Handle_FEmTool_ProfileMatrix_1: typeof Handle_FEmTool_ProfileMatrix_1;
  Handle_FEmTool_ProfileMatrix_2: typeof Handle_FEmTool_ProfileMatrix_2;
  Handle_FEmTool_ProfileMatrix_3: typeof Handle_FEmTool_ProfileMatrix_3;
  Handle_FEmTool_ProfileMatrix_4: typeof Handle_FEmTool_ProfileMatrix_4;
  GeomLib_Array1OfMat_1: typeof GeomLib_Array1OfMat_1;
  GeomLib_Array1OfMat_2: typeof GeomLib_Array1OfMat_2;
  GeomLib_Array1OfMat_3: typeof GeomLib_Array1OfMat_3;
  GeomLib_Array1OfMat_4: typeof GeomLib_Array1OfMat_4;
  GeomLib_Array1OfMat_5: typeof GeomLib_Array1OfMat_5;
  Handle_GeomTools_UndefinedTypeHandler_1: typeof Handle_GeomTools_UndefinedTypeHandler_1;
  Handle_GeomTools_UndefinedTypeHandler_2: typeof Handle_GeomTools_UndefinedTypeHandler_2;
  Handle_GeomTools_UndefinedTypeHandler_3: typeof Handle_GeomTools_UndefinedTypeHandler_3;
  Handle_GeomTools_UndefinedTypeHandler_4: typeof Handle_GeomTools_UndefinedTypeHandler_4;
  IntAna_ListOfCurve_1: typeof IntAna_ListOfCurve_1;
  IntAna_ListOfCurve_2: typeof IntAna_ListOfCurve_2;
  IntAna_ListOfCurve_3: typeof IntAna_ListOfCurve_3;
  Handle_ProjLib_HSequenceOfHSequenceOfPnt_1: typeof Handle_ProjLib_HSequenceOfHSequenceOfPnt_1;
  Handle_ProjLib_HSequenceOfHSequenceOfPnt_2: typeof Handle_ProjLib_HSequenceOfHSequenceOfPnt_2;
  Handle_ProjLib_HSequenceOfHSequenceOfPnt_3: typeof Handle_ProjLib_HSequenceOfHSequenceOfPnt_3;
  Handle_ProjLib_HSequenceOfHSequenceOfPnt_4: typeof Handle_ProjLib_HSequenceOfHSequenceOfPnt_4;
  Handle_ProjLib_HCompProjectedCurve_1: typeof Handle_ProjLib_HCompProjectedCurve_1;
  Handle_ProjLib_HCompProjectedCurve_2: typeof Handle_ProjLib_HCompProjectedCurve_2;
  Handle_ProjLib_HCompProjectedCurve_3: typeof Handle_ProjLib_HCompProjectedCurve_3;
  Handle_ProjLib_HCompProjectedCurve_4: typeof Handle_ProjLib_HCompProjectedCurve_4;
  Handle_ProjLib_HProjectedCurve_1: typeof Handle_ProjLib_HProjectedCurve_1;
  Handle_ProjLib_HProjectedCurve_2: typeof Handle_ProjLib_HProjectedCurve_2;
  Handle_ProjLib_HProjectedCurve_3: typeof Handle_ProjLib_HProjectedCurve_3;
  Handle_ProjLib_HProjectedCurve_4: typeof Handle_ProjLib_HProjectedCurve_4;
  AdvApp2Var_CriterionType: typeof AdvApp2Var_CriterionType;
  AdvApp2Var_CriterionRepartition: typeof AdvApp2Var_CriterionRepartition;
  AppParCurves_Constraint: typeof AppParCurves_Constraint;
  Approx_ParametrizationType: typeof Approx_ParametrizationType;
  Approx_Status: typeof Approx_Status;
  Extrema_ExtAlgo: typeof Extrema_ExtAlgo;
  Extrema_ExtFlag: typeof Extrema_ExtFlag;
  Extrema_ElementType: typeof Extrema_ElementType;
  gce_ErrorType: typeof gce_ErrorType;
  GCPnts_AbscissaType: typeof GCPnts_AbscissaType;
  GCPnts_DeflectionType: typeof GCPnts_DeflectionType;
  GeomLib_InterpolationErrors: typeof GeomLib_InterpolationErrors;
  IntAna_ResultType: typeof IntAna_ResultType;
};
