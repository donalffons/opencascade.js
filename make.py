import copy
import multiprocessing
import os
import patch
import requests
import shutil
import sys
import tarfile
from subprocess import Popen, PIPE, STDOUT

stage_counter = 0

INCLUDES = [
  os.path.join('.', 'occt', 'src', 'BRepGProp', 'BRepGProp.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepAlgoAPI', 'BRepAlgoAPI_BooleanOperation.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepAlgoAPI', 'BRepAlgoAPI_Fuse.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepAlgoAPI', 'BRepAlgoAPI_Cut.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_MakeEdge.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_MakeFace.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_MakeShape.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_MakeWire.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_ModifyShape.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_Transform.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepFilletAPI', 'BRepFilletAPI_LocalOperation.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepFilletAPI', 'BRepFilletAPI_MakeFillet.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepMesh', 'BRepMesh_IncrementalMesh.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeCylinder.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeOneAxis.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakePrism.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeSphere.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeSweep.hxx'),
  os.path.join('.', 'occt', 'src', 'GC', 'GC_MakeArcOfCircle.hxx'),
  os.path.join('.', 'occt', 'src', 'GC', 'GC_MakeSegment.hxx'),
  os.path.join('.', 'occt', 'src', 'GProp', 'GProp_GProps.hxx'),
  os.path.join('.', 'occt', 'src', 'Standard', 'Standard.hxx'),
  os.path.join('.', 'occt', 'src', 'TopAbs', 'TopAbs.hxx'),
  os.path.join('.', 'occt', 'src', 'TopExp', 'TopExp_Explorer.hxx'),
  os.path.join('.', 'occt', 'src', 'TopoDS', 'TopoDS.hxx'),
  os.path.join('.', 'occt', 'src', 'TopoDS', 'TopoDS_Shape.hxx'),
  os.path.join('.', 'occt', 'src', 'TopoDS', 'TopoDS_Wire.hxx'),
  os.path.join('.', 'occt', 'src', 'STEPControl', 'STEPControl_Reader.hxx'),
  os.path.join('.', 'Tesselator.h')
]

# Utilities

def which(program):
  for path in os.environ["PATH"].split(os.pathsep):
    exe_file = os.path.join(path, program)
    if os.path.exists(exe_file):
      return exe_file
  return None

def stage(text):
  global stage_counter
  stage_counter += 1
  text = "Stage %d: %s" % (stage_counter, text)
  print("")
  print("=" * len(text))
  print(text)
  print("=" * len(text))
  print("")

def build():
  this_dir = os.getcwd()
  # shutil.rmtree("build")
  if not os.path.exists('build'):
    os.makedirs('build')
  os.chdir('build')
  targetfile = "occt.tar.gz"

  ######################################
  if not os.path.exists('occt.tar.gz'):
    stage("downloading OCCT...")
    url = "https://git.dev.opencascade.org/gitweb/?p=occt.git;a=snapshot;h=fd47711d682be943f0e0a13d1fb54911b0499c31;sf=tgz"
    myfile = requests.get(url, stream=True)
    open(targetfile, 'wb').write(myfile.content)

  ######################################
  if not os.path.exists('occt'):
    stage("extracting OCCT, patching...")
    tar = tarfile.open(targetfile, "r:gz")
    tar.extractall("occt")
    tar.close()
    source = "occt/" + os.listdir("occt")[0] + "/"
    dest = "occt"
    files = os.listdir(source)
    for f in files:
      shutil.move(source+f, dest)
    pset = patch.fromfile("../patches/CMakeLists.txt.patch")
    pset.apply()
    pset = patch.fromfile("../patches/OSD_Path.cxx.patch")
    pset.apply()

  ######################################
  stage("checking EMSCRIPTEN...")
  EMSCRIPTEN_ROOT = os.environ.get('EMSCRIPTEN')
  if not EMSCRIPTEN_ROOT:
    emcc = which('emcc')
    EMSCRIPTEN_ROOT = os.path.dirname(emcc)
  if not EMSCRIPTEN_ROOT:
    print("ERROR: EMSCRIPTEN_ROOT environment variable (which should be equal to emscripten's root dir) not found")
    sys.exit(1)
  sys.path.append(EMSCRIPTEN_ROOT)
  import tools.shared as emscripten
  
  ######################################
  stage("build settings...")
  wasm = 'wasm' in sys.argv
  closure = 'closure' in sys.argv
  add_function_support = 'add_func' in sys.argv
  args = '-s ERROR_ON_UNDEFINED_SYMBOLS=0 -std=c++1z -O3 --llvm-lto 1 -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=["UTF8ToString"]'
  if add_function_support:
    args += ' -s RESERVED_FUNCTION_POINTERS=20 -s EXTRA_EXPORTED_RUNTIME_METHODS=["addFunction"]'  
  if not wasm:
    args += ' -s WASM=0 -s AGGRESSIVE_VARIABLE_ELIMINATION=1 -s ELIMINATE_DUPLICATE_FUNCTIONS=1 -s SINGLE_FILE=1 -s LEGACY_VM_SUPPORT=1'
  else:
    #args += ''' -s WASM=1 -s BINARYEN_IGNORE_IMPLICIT_TRAPS=1 -s BINARYEN_TRAP_MODE="clamp"'''
    args += ''' -s WASM=1 -s BINARYEN_IGNORE_IMPLICIT_TRAPS=1'''
  if closure:
    args += ' --closure 1 -s IGNORE_CLOSURE_COMPILER_ERRORS=1' # closure complains about the bullet Node class (Node is a DOM thing too)
  else:
    args += ' -s NO_DYNAMIC_EXECUTION=1'
  emcc_args = args.split(' ')
  emcc_args += ['-s', 'TOTAL_MEMORY=%d' % (64*1024*1024)] # default 64MB. Compile with ALLOW_MEMORY_GROWTH if you want a growable heap (slower though).
  emcc_args += ['-s', 'ALLOW_MEMORY_GROWTH=1'] # resizable heap, with some amount of slowness
  emcc_args += '-s EXPORT_NAME="opencascade" -s MODULARIZE=1'.split(' ')
  emcc_args += ['-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]']

  target = 'opencascade.js' if not wasm else 'opencascade.wasm.js'

  ######################################
  stage('generate bindings...')

  Popen([emscripten.PYTHON, os.path.join(EMSCRIPTEN_ROOT, 'tools', 'webidl_binder.py'), os.path.join(this_dir, 'opencascade.idl'), 'glue']).communicate()
  assert os.path.exists('glue.js')
  assert os.path.exists('glue.cpp')

  ######################################
  stage('Build bindings')

  myincludes = [
    '-I./occt/src/AIS/',
    '-I./occt/src/APIHeaderSection/',
    '-I./occt/src/Adaptor2d/',
    '-I./occt/src/Adaptor3d/',
    '-I./occt/src/AdvApp2Var/',
    '-I./occt/src/AdvApprox/',
    '-I./occt/src/AppBlend/',
    '-I./occt/src/AppCont/',
    '-I./occt/src/AppDef/',
    '-I./occt/src/AppParCurves/',
    '-I./occt/src/AppStd/',
    '-I./occt/src/AppStdL/',
    '-I./occt/src/Approx/',
    '-I./occt/src/ApproxInt/',
    '-I./occt/src/Aspect/',
    '-I./occt/src/BOPAlgo/',
    '-I./occt/src/BOPDS/',
    '-I./occt/src/BOPTest/',
    '-I./occt/src/BOPTools/',
    '-I./occt/src/BRep/',
    '-I./occt/src/BRepAdaptor/',
    '-I./occt/src/BRepAlgo/',
    '-I./occt/src/BRepAlgoAPI/',
    '-I./occt/src/BRepApprox/',
    '-I./occt/src/BRepBlend/',
    '-I./occt/src/BRepBndLib/',
    '-I./occt/src/BRepBuilderAPI/',
    '-I./occt/src/BRepCheck/',
    '-I./occt/src/BRepClass/',
    '-I./occt/src/BRepClass3d/',
    '-I./occt/src/BRepExtrema/',
    '-I./occt/src/BRepFeat/',
    '-I./occt/src/BRepFill/',
    '-I./occt/src/BRepFilletAPI/',
    '-I./occt/src/BRepGProp/',
    '-I./occt/src/BRepIntCurveSurface/',
    '-I./occt/src/BRepLProp/',
    '-I./occt/src/BRepLib/',
    '-I./occt/src/BRepMAT2d/',
    '-I./occt/src/BRepMesh/',
    '-I./occt/src/BRepMeshData/',
    '-I./occt/src/BRepOffset/',
    '-I./occt/src/BRepOffsetAPI/',
    '-I./occt/src/BRepPrim/',
    '-I./occt/src/BRepPrimAPI/',
    '-I./occt/src/BRepProj/',
    '-I./occt/src/BRepSweep/',
    '-I./occt/src/BRepTest/',
    '-I./occt/src/BRepToIGES/',
    '-I./occt/src/BRepToIGESBRep/',
    '-I./occt/src/BRepTools/',
    '-I./occt/src/BRepTopAdaptor/',
    '-I./occt/src/BSplCLib/',
    '-I./occt/src/BSplSLib/',
    '-I./occt/src/BVH/',
    '-I./occt/src/BiTgte/',
    '-I./occt/src/BinDrivers/',
    '-I./occt/src/BinLDrivers/',
    '-I./occt/src/BinMDF/',
    '-I./occt/src/BinMDataStd/',
    '-I./occt/src/BinMDataXtd/',
    '-I./occt/src/BinMDocStd/',
    '-I./occt/src/BinMFunction/',
    '-I./occt/src/BinMNaming/',
    '-I./occt/src/BinMXCAFDoc/',
    '-I./occt/src/BinObjMgt/',
    '-I./occt/src/BinTObjDrivers/',
    '-I./occt/src/BinTools/',
    '-I./occt/src/BinXCAFDrivers/',
    '-I./occt/src/Bisector/',
    '-I./occt/src/Blend/',
    '-I./occt/src/BlendFunc/',
    '-I./occt/src/Bnd/',
    '-I./occt/src/BndLib/',
    '-I./occt/src/CDF/',
    '-I./occt/src/CDM/',
    '-I./occt/src/CPnts/',
    '-I./occt/src/CSLib/',
    '-I./occt/src/ChFi2d/',
    '-I./occt/src/ChFi3d/',
    '-I./occt/src/ChFiDS/',
    '-I./occt/src/ChFiKPart/',
    '-I./occt/src/Cocoa/',
    '-I./occt/src/Contap/',
    '-I./occt/src/Convert/',
    '-I./occt/src/D3DHost/',
    '-I./occt/src/DBRep/',
    '-I./occt/src/DDF/',
    '-I./occt/src/DDataStd/',
    '-I./occt/src/DDocStd/',
    '-I./occt/src/DNaming/',
    '-I./occt/src/DPrsStd/',
    '-I./occt/src/DRAWEXE/',
    '-I./occt/src/Draft/',
    '-I./occt/src/Draw/',
    '-I./occt/src/DrawDim/',
    '-I./occt/src/DrawFairCurve/',
    '-I./occt/src/DrawResources/',
    '-I./occt/src/DrawTrSurf/',
    '-I./occt/src/DsgPrs/',
    '-I./occt/src/ElCLib/',
    '-I./occt/src/ElSLib/',
    '-I./occt/src/Expr/',
    '-I./occt/src/ExprIntrp/',
    '-I./occt/src/Extrema/',
    '-I./occt/src/FEmTool/',
    '-I./occt/src/FSD/',
    '-I./occt/src/FairCurve/',
    '-I./occt/src/FilletSurf/',
    '-I./occt/src/Font/',
    '-I./occt/src/GC/',
    '-I./occt/src/GCE2d/',
    '-I./occt/src/GCPnts/',
    '-I./occt/src/GProp/',
    '-I./occt/src/GccAna/',
    '-I./occt/src/GccEnt/',
    '-I./occt/src/GccInt/',
    '-I./occt/src/Geom/',
    '-I./occt/src/Geom2d/',
    '-I./occt/src/Geom2dAPI/',
    '-I./occt/src/Geom2dAdaptor/',
    '-I./occt/src/Geom2dConvert/',
    '-I./occt/src/Geom2dEvaluator/',
    '-I./occt/src/Geom2dGcc/',
    '-I./occt/src/Geom2dHatch/',
    '-I./occt/src/Geom2dInt/',
    '-I./occt/src/Geom2dLProp/',
    '-I./occt/src/Geom2dToIGES/',
    '-I./occt/src/GeomAPI/',
    '-I./occt/src/GeomAbs/',
    '-I./occt/src/GeomAdaptor/',
    '-I./occt/src/GeomConvert/',
    '-I./occt/src/GeomEvaluator/',
    '-I./occt/src/GeomFill/',
    '-I./occt/src/GeomInt/',
    '-I./occt/src/GeomLProp/',
    '-I./occt/src/GeomLib/',
    '-I./occt/src/GeomPlate/',
    '-I./occt/src/GeomProjLib/',
    '-I./occt/src/GeomToIGES/',
    '-I./occt/src/GeomToStep/',
    '-I./occt/src/GeomTools/',
    '-I./occt/src/GeometryTest/',
    '-I./occt/src/GeomliteTest/',
    '-I./occt/src/Graphic3d/',
    '-I./occt/src/HLRAlgo/',
    '-I./occt/src/HLRAppli/',
    '-I./occt/src/HLRBRep/',
    '-I./occt/src/HLRTest/',
    '-I./occt/src/HLRTopoBRep/',
    '-I./occt/src/Hatch/',
    '-I./occt/src/HatchGen/',
    '-I./occt/src/HeaderSection/',
    '-I./occt/src/Hermit/',
    '-I./occt/src/IFGraph/',
    '-I./occt/src/IFSelect/',
    '-I./occt/src/IGESAppli/',
    '-I./occt/src/IGESBasic/',
    '-I./occt/src/IGESCAFControl/',
    '-I./occt/src/IGESControl/',
    '-I./occt/src/IGESConvGeom/',
    '-I./occt/src/IGESData/',
    '-I./occt/src/IGESDefs/',
    '-I./occt/src/IGESDimen/',
    '-I./occt/src/IGESDraw/',
    '-I./occt/src/IGESFile/',
    '-I./occt/src/IGESGeom/',
    '-I./occt/src/IGESGraph/',
    '-I./occt/src/IGESSelect/',
    '-I./occt/src/IGESSolid/',
    '-I./occt/src/IGESToBRep/',
    '-I./occt/src/IMeshData/',
    '-I./occt/src/IMeshTools/',
    '-I./occt/src/IVtk/',
    '-I./occt/src/IVtkDraw/',
    '-I./occt/src/IVtkOCC/',
    '-I./occt/src/IVtkTools/',
    '-I./occt/src/IVtkVTK/',
    '-I./occt/src/Image/',
    '-I./occt/src/IntAna/',
    '-I./occt/src/IntAna2d/',
    '-I./occt/src/IntCurve/',
    '-I./occt/src/IntCurveSurface/',
    '-I./occt/src/IntCurvesFace/',
    '-I./occt/src/IntImp/',
    '-I./occt/src/IntImpParGen/',
    '-I./occt/src/IntPatch/',
    '-I./occt/src/IntPolyh/',
    '-I./occt/src/IntRes2d/',
    '-I./occt/src/IntStart/',
    '-I./occt/src/IntSurf/',
    '-I./occt/src/IntTools/',
    '-I./occt/src/IntWalk/',
    '-I./occt/src/Interface/',
    '-I./occt/src/InterfaceGraphic/',
    '-I./occt/src/Intf/',
    '-I./occt/src/Intrv/',
    '-I./occt/src/LDOM/',
    '-I./occt/src/LProp/',
    '-I./occt/src/LProp3d/',
    '-I./occt/src/Law/',
    '-I./occt/src/LibCtl/',
    '-I./occt/src/LocOpe/',
    '-I./occt/src/LocalAnalysis/',
    '-I./occt/src/MAT/',
    '-I./occt/src/MAT2d/',
    '-I./occt/src/MMgt/',
    '-I./occt/src/Media/',
    '-I./occt/src/MeshTest/',
    '-I./occt/src/MeshVS/',
    '-I./occt/src/Message/',
    '-I./occt/src/MoniTool/',
    '-I./occt/src/NCollection/',
    '-I./occt/src/NLPlate/',
    '-I./occt/src/OS/',
    '-I./occt/src/OSD/',
    '-I./occt/src/OpenGl/',
    '-I./occt/src/PCDM/',
    '-I./occt/src/PLib/',
    '-I./occt/src/Plate/',
    '-I./occt/src/Plugin/',
    '-I./occt/src/Poly/',
    '-I./occt/src/Precision/',
    '-I./occt/src/ProjLib/',
    '-I./occt/src/Prs3d/',
    '-I./occt/src/PrsMgr/',
    '-I./occt/src/QABugs/',
    '-I./occt/src/QADNaming/',
    '-I./occt/src/QADraw/',
    '-I./occt/src/QANCollection/',
    '-I./occt/src/Quantity/',
    '-I./occt/src/RWGltf/',
    '-I./occt/src/RWHeaderSection/',
    '-I./occt/src/RWMesh/',
    '-I./occt/src/RWObj/',
    '-I./occt/src/RWStepAP203/',
    '-I./occt/src/RWStepAP214/',
    '-I./occt/src/RWStepAP242/',
    '-I./occt/src/RWStepBasic/',
    '-I./occt/src/RWStepDimTol/',
    '-I./occt/src/RWStepElement/',
    '-I./occt/src/RWStepFEA/',
    '-I./occt/src/RWStepGeom/',
    '-I./occt/src/RWStepRepr/',
    '-I./occt/src/RWStepShape/',
    '-I./occt/src/RWStepVisual/',
    '-I./occt/src/RWStl/',
    '-I./occt/src/Resource/',
    '-I./occt/src/SHMessage/',
    '-I./occt/src/STEPCAFControl/',
    '-I./occt/src/STEPConstruct/',
    '-I./occt/src/STEPControl/',
    '-I./occt/src/STEPEdit/',
    '-I./occt/src/STEPSelections/',
    '-I./occt/src/SWDRAW/',
    '-I./occt/src/Select3D/',
    '-I./occt/src/SelectBasics/',
    '-I./occt/src/SelectMgr/',
    '-I./occt/src/Shaders/',
    '-I./occt/src/ShapeAlgo/',
    '-I./occt/src/ShapeAnalysis/',
    '-I./occt/src/ShapeBuild/',
    '-I./occt/src/ShapeConstruct/',
    '-I./occt/src/ShapeCustom/',
    '-I./occt/src/ShapeExtend/',
    '-I./occt/src/ShapeFix/',
    '-I./occt/src/ShapePersistent/',
    '-I./occt/src/ShapeProcess/',
    '-I./occt/src/ShapeProcessAPI/',
    '-I./occt/src/ShapeUpgrade/',
    '-I./occt/src/Standard/',
    '-I./occt/src/StdDrivers/',
    '-I./occt/src/StdFail/',
    '-I./occt/src/StdLDrivers/',
    '-I./occt/src/StdLPersistent/',
    '-I./occt/src/StdObjMgt/',
    '-I./occt/src/StdObject/',
    '-I./occt/src/StdPersistent/',
    '-I./occt/src/StdPrs/',
    '-I./occt/src/StdResource/',
    '-I./occt/src/StdSelect/',
    '-I./occt/src/StdStorage/',
    '-I./occt/src/StepAP203/',
    '-I./occt/src/StepAP209/',
    '-I./occt/src/StepAP214/',
    '-I./occt/src/StepAP242/',
    '-I./occt/src/StepBasic/',
    '-I./occt/src/StepData/',
    '-I./occt/src/StepDimTol/',
    '-I./occt/src/StepElement/',
    '-I./occt/src/StepFEA/',
    '-I./occt/src/StepFile/',
    '-I./occt/src/StepGeom/',
    '-I./occt/src/StepRepr/',
    '-I./occt/src/StepSelect/',
    '-I./occt/src/StepShape/',
    '-I./occt/src/StepToGeom/',
    '-I./occt/src/StepToTopoDS/',
    '-I./occt/src/StepVisual/',
    '-I./occt/src/StlAPI/',
    '-I./occt/src/Storage/',
    '-I./occt/src/Sweep/',
    '-I./occt/src/TColGeom/',
    '-I./occt/src/TColGeom2d/',
    '-I./occt/src/TColQuantity/',
    '-I./occt/src/TColStd/',
    '-I./occt/src/TColgp/',
    '-I./occt/src/TCollection/',
    '-I./occt/src/TDF/',
    '-I./occt/src/TDataStd/',
    '-I./occt/src/TDataXtd/',
    '-I./occt/src/TDocStd/',
    '-I./occt/src/TFunction/',
    '-I./occt/src/TKBO/',
    '-I./occt/src/TKBRep/',
    '-I./occt/src/TKBin/',
    '-I./occt/src/TKBinL/',
    '-I./occt/src/TKBinTObj/',
    '-I./occt/src/TKBinXCAF/',
    '-I./occt/src/TKBool/',
    '-I./occt/src/TKCAF/',
    '-I./occt/src/TKCDF/',
    '-I./occt/src/TKD3DHost/',
    '-I./occt/src/TKDCAF/',
    '-I./occt/src/TKDraw/',
    '-I./occt/src/TKFeat/',
    '-I./occt/src/TKFillet/',
    '-I./occt/src/TKG2d/',
    '-I./occt/src/TKG3d/',
    '-I./occt/src/TKGeomAlgo/',
    '-I./occt/src/TKGeomBase/',
    '-I./occt/src/TKHLR/',
    '-I./occt/src/TKIGES/',
    '-I./occt/src/TKIVtk/',
    '-I./occt/src/TKIVtkDraw/',
    '-I./occt/src/TKLCAF/',
    '-I./occt/src/TKMath/',
    '-I./occt/src/TKMesh/',
    '-I./occt/src/TKMeshVS/',
    '-I./occt/src/TKOffset/',
    '-I./occt/src/TKOpenGl/',
    '-I./occt/src/TKPrim/',
    '-I./occt/src/TKQADraw/',
    '-I./occt/src/TKRWMesh/',
    '-I./occt/src/TKSTEP/',
    '-I./occt/src/TKSTEP209/',
    '-I./occt/src/TKSTEPAttr/',
    '-I./occt/src/TKSTEPBase/',
    '-I./occt/src/TKSTL/',
    '-I./occt/src/TKService/',
    '-I./occt/src/TKShHealing/',
    '-I./occt/src/TKStd/',
    '-I./occt/src/TKStdL/',
    '-I./occt/src/TKTObj/',
    '-I./occt/src/TKTObjDRAW/',
    '-I./occt/src/TKTopAlgo/',
    '-I./occt/src/TKTopTest/',
    '-I./occt/src/TKV3d/',
    '-I./occt/src/TKVCAF/',
    '-I./occt/src/TKVRML/',
    '-I./occt/src/TKViewerTest/',
    '-I./occt/src/TKXCAF/',
    '-I./occt/src/TKXDEDRAW/',
    '-I./occt/src/TKXDEIGES/',
    '-I./occt/src/TKXDESTEP/',
    '-I./occt/src/TKXMesh/',
    '-I./occt/src/TKXSBase/',
    '-I./occt/src/TKXSDRAW/',
    '-I./occt/src/TKXml/',
    '-I./occt/src/TKXmlL/',
    '-I./occt/src/TKXmlTObj/',
    '-I./occt/src/TKXmlXCAF/',
    '-I./occt/src/TKernel/',
    '-I./occt/src/TNaming/',
    '-I./occt/src/TObj/',
    '-I./occt/src/TObjDRAW/',
    '-I./occt/src/TPrsStd/',
    '-I./occt/src/TShort/',
    '-I./occt/src/Textures/',
    '-I./occt/src/TopAbs/',
    '-I./occt/src/TopBas/',
    '-I./occt/src/TopClass/',
    '-I./occt/src/TopCnx/',
    '-I./occt/src/TopExp/',
    '-I./occt/src/TopLoc/',
    '-I./occt/src/TopOpeBRep/',
    '-I./occt/src/TopOpeBRepBuild/',
    '-I./occt/src/TopOpeBRepDS/',
    '-I./occt/src/TopOpeBRepTool/',
    '-I./occt/src/TopTools/',
    '-I./occt/src/TopTrans/',
    '-I./occt/src/TopoDS/',
    '-I./occt/src/TopoDSToStep/',
    '-I./occt/src/Transfer/',
    '-I./occt/src/TransferBRep/',
    '-I./occt/src/UTL/',
    '-I./occt/src/Units/',
    '-I./occt/src/UnitsAPI/',
    '-I./occt/src/UnitsMethods/',
    '-I./occt/src/V3d/',
    '-I./occt/src/ViewerTest/',
    '-I./occt/src/Vrml/',
    '-I./occt/src/VrmlAPI/',
    '-I./occt/src/VrmlConverter/',
    '-I./occt/src/VrmlData/',
    '-I./occt/src/WNT/',
    '-I./occt/src/XBRepMesh/',
    '-I./occt/src/XCAFApp/',
    '-I./occt/src/XCAFDimTolObjects/',
    '-I./occt/src/XCAFDoc/',
    '-I./occt/src/XCAFNoteObjects/',
    '-I./occt/src/XCAFPrs/',
    '-I./occt/src/XCAFView/',
    '-I./occt/src/XDEDRAW/',
    '-I./occt/src/XSAlgo/',
    '-I./occt/src/XSControl/',
    '-I./occt/src/XSDRAW/',
    '-I./occt/src/XSDRAWIGES/',
    '-I./occt/src/XSDRAWSTEP/',
    '-I./occt/src/XSDRAWSTLVRML/',
    '-I./occt/src/XSMessage/',
    '-I./occt/src/XSTEPResource/',
    '-I./occt/src/XmlDrivers/',
    '-I./occt/src/XmlLDrivers/',
    '-I./occt/src/XmlMDF/',
    '-I./occt/src/XmlMDataStd/',
    '-I./occt/src/XmlMDataXtd/',
    '-I./occt/src/XmlMDocStd/',
    '-I./occt/src/XmlMFunction/',
    '-I./occt/src/XmlMNaming/',
    '-I./occt/src/XmlMXCAFDoc/',
    '-I./occt/src/XmlObjMgt/',
    '-I./occt/src/XmlOcafResource/',
    '-I./occt/src/XmlTObjDrivers/',
    '-I./occt/src/XmlXCAFDrivers/',
    '-I./occt/src/Xw/',
    '-I./occt/src/gce/',
    '-I./occt/src/gp/',
    '-I./occt/src/math/',
    '-I./../',
    '-c',
    '-std=c++1z',
  ]
  args = copy.deepcopy(myincludes)
  for include in INCLUDES:
    args += ['-include', include]
  emscripten.Building.emcc('glue.cpp', args, 'glue.o')
  assert(os.path.exists('glue.o'))

  if not os.path.exists('build'):
    os.makedirs('build')
  os.chdir('build')

  # Configure with CMake on Windows, and with configure on Unix.
  cmake_build = True

  if cmake_build:
    stage('Configure via CMake')
    emscripten.Building.configure([
      emscripten.PYTHON,
      os.path.join(EMSCRIPTEN_ROOT, 'emcmake'),
      'cmake',
      '../occt/',
      '-DCMAKE_BUILD_TYPE=Debug',
      '-DBUILD_MODULE_Draw=OFF',
      '-D3RDPARTY_FREETYPE_DIR=/home/sebastian/Projects/OCCT_WA/freetype-2.10.0',
      '-D3RDPARTY_FREETYPE_INCLUDE_DIR_freetype2=/home/sebastian/Projects/OCCT_WA/freetype-2.10.0/include/freetype',
      '-D3RDPARTY_FREETYPE_INCLUDE_DIR_ft2build=/home/sebastian/Projects/OCCT_WA/freetype-2.10.0/include',
      '-D3RDPARTY_FREETYPE_LIBRARY_DIR=/home/sebastian/Projects/OCCT_WA/freetype-2.10.0/build',
      '-DBUILD_LIBRARY_TYPE=Static',
      '-DBUILD_MODULE_Draw=OFF',
      '-DCMAKE_CXX_FLAGS="-DIGNORE_NO_ATOMICS=1 -frtti"',
      '-D3RDPARTY_INCLUDE_DIRS=/home/sebastian/Projects/OCCT_WA/GL/'
    ])

  make_build = True
  if make_build:
    stage('Make')

    CORES = multiprocessing.cpu_count()

    emscripten.Building.make(['make', '-j', str(CORES)])

  stage('Link')

  bullet_libs = [
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKBO.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKBRep.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKBin.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKBinL.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKBinTObj.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKBinXCAF.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKBool.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKCAF.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKCDF.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKFeat.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKFillet.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKG2d.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKG3d.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKGeomAlgo.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKGeomBase.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKHLR.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKIGES.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKLCAF.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKMath.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKMesh.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKMeshVS.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKOffset.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKOpenGl.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKPrim.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKRWMesh.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKSTEP.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKSTEP209.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKSTEPAttr.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKSTEPBase.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKSTL.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKService.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKShHealing.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKStd.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKStdL.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKTObj.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKTopAlgo.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKV3d.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKVCAF.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKVRML.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXCAF.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXDEIGES.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXDESTEP.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXMesh.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXSBase.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXml.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXmlL.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXmlTObj.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKXmlXCAF.a'),
    os.path.join('build', 'lin32', 'clang', 'libd', 'libTKernel.a'),
    os.path.join('..', 'Tesselator.cpp'),
  ]

  stage('emcc: ' + ' '.join(emcc_args))
  os.chdir('..')
  if not os.path.exists('js'):
    os.makedirs('js')

  temp = os.path.join('.', 'js', target)
  emscripten.Building.emcc('-DNOTHING_WAKA_WAKA', emcc_args + ['glue.o'] + bullet_libs + myincludes[:len(myincludes)-2] + ['--js-transform', 'python %s' % os.path.join('..', 'bundle.py')], temp)
  # emscripten.Building.emcc('-DEMANGLE_SUPPORT=1', emcc_args + ['glue.o'] + bullet_libs + ['--js-transform', 'python %s' % os.path.join('..', 'bundle.py')], temp)

  assert os.path.exists(temp), 'Failed to create script code'

  stage('wrap')

  wrapped = '''
// This is opencascade.js, a port of Bullet Physics to JavaScript. zlib licensed.
''' + open(temp).read()

  open(temp, 'w').write(wrapped)

  os.chdir('..')
  if os.path.exists('dist'):
    shutil.rmtree('dist')
  shutil.copytree(os.path.join('build', 'js'), 'dist')

if __name__ == '__main__':
  build()

