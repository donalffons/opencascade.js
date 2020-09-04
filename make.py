import copy
import multiprocessing
import os
import patch
import requests
import shutil
import sys
import tarfile
import subprocess
from subprocess import Popen, PIPE, STDOUT

stage_counter = 0

INCLUDES = [
  os.path.join('.', 'occt', 'src', 'BRepGProp', 'BRepGProp.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepAlgoAPI', 'BRepAlgoAPI_BooleanOperation.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepAlgoAPI', 'BRepAlgoAPI_Fuse.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepAlgoAPI', 'BRepAlgoAPI_Cut.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepAlgoAPI', 'BRepAlgoAPI_Common.hxx'),
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
  os.path.join('.', 'occt', 'src', 'GC', 'GC_MakeCircle.hxx'),
  os.path.join('.', 'occt', 'src', 'GC', 'GC_MakeEllipse.hxx'),
  os.path.join('.', 'occt', 'src', 'GC', 'GC_MakeHyperbola.hxx'),
  os.path.join('.', 'occt', 'src', 'GC', 'GC_MakeArcOfParabola.hxx'),
  os.path.join('.', 'occt', 'src', 'GProp', 'GProp_GProps.hxx'),
  os.path.join('.', 'occt', 'src', 'Standard', 'Standard.hxx'),
  os.path.join('.', 'occt', 'src', 'TopAbs', 'TopAbs.hxx'),
  os.path.join('.', 'occt', 'src', 'TopExp', 'TopExp_Explorer.hxx'),
  os.path.join('.', 'occt', 'src', 'TopoDS', 'TopoDS.hxx'),
  os.path.join('.', 'occt', 'src', 'TopoDS', 'TopoDS_Shape.hxx'),
  os.path.join('.', 'occt', 'src', 'TopoDS', 'TopoDS_Wire.hxx'),
  os.path.join('.', 'occt', 'src', 'STEPControl', 'STEPControl_Reader.hxx'),
  os.path.join('.', 'occt', 'src', 'XSControl', 'XSControl_Reader.hxx'),
  os.path.join('.', 'occt', 'src', 'Poly', 'Poly_Connect.hxx'),
  os.path.join('.', 'occt', 'src', 'TColgp', 'TColgp_Array1OfDir.hxx'),
  os.path.join('.', 'occt', 'src', 'TColgp', 'TColgp_Array1OfPnt.hxx'),
  os.path.join('.', 'occt', 'src', 'StdPrs', 'StdPrs_ToolTriangulatedShape.hxx'),
  os.path.join('.', 'occt', 'src', 'IGESControl', 'IGESControl_Reader.hxx'),
  os.path.join('.', 'occt', 'src', 'Bnd', 'Bnd_OBB.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBndLib', 'BRepBndLib.hxx'),
  os.path.join('.', 'occt', 'src', 'gp', 'gp_Pln.hxx'),
  os.path.join('.', 'occt', 'src', 'gp', 'gp_Trsf.hxx'),
  os.path.join('.', 'occt', 'src', 'gp', 'gp_Circ.hxx'),
  os.path.join('.', 'occt', 'src', 'gp', 'gp_Elips.hxx'),
  os.path.join('.', 'occt', 'src', 'gp', 'gp_Hypr.hxx'),
  os.path.join('.', 'occt', 'src', 'gp', 'gp_Parab.hxx'),
  os.path.join('.', 'occt', 'src', 'StlAPI', 'StlAPI_Reader.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_Sewing.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_MakeVertex.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_MakePolygon.hxx'),
  os.path.join('.', 'occt', 'src', 'GeomAPI', 'GeomAPI_PointsToBSpline.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_Curve.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_BezierCurve.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_BSplineCurve.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepAdaptor', 'BRepAdaptor_Curve.hxx'),
  os.path.join('.', 'occt', 'src', 'GCPnts', 'GCPnts_TangentialDeflection.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_Plane.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_Conic.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_Circle.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_Ellipse.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_Hyperbola.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_Parabola.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepOffsetAPI', 'BRepOffsetAPI_MakeThickSolid.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom', 'Geom_CylindricalSurface.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom2d', 'Geom2d_Ellipse.hxx'),
  os.path.join('.', 'occt', 'src', 'Geom2d', 'Geom2d_TrimmedCurve.hxx'),
  os.path.join('.', 'occt', 'src', 'GCE2d', 'GCE2d_MakeSegment.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepLib', 'BRepLib.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepOffsetAPI', 'BRepOffsetAPI_ThruSections.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepOffsetAPI', 'BRepOffsetAPI_MakePipe.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepOffsetAPI', 'BRepOffsetAPI_MakePipeShell.hxx'),
  os.path.join('.', 'occt', 'src', 'ShapeFix', 'ShapeFix_Face.hxx'),
  os.path.join('.', 'occt', 'src', 'ShapeFix', 'ShapeFix_Shape.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepBuilderAPI', 'BRepBuilderAPI_MakeSolid.hxx'),
  os.path.join('.', 'occt', 'src', 'STEPControl', 'STEPControl_Writer.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeBox.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeCone.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeHalfSpace.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakePrism.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeRevol.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeRevolution.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeSphere.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeTorus.hxx'),
  os.path.join('.', 'occt', 'src', 'BRepPrimAPI', 'BRepPrimAPI_MakeWedge.hxx'),
  os.path.join('.', 'occt', 'src', 'Poly', 'Poly_PolygonOnTriangulation.hxx'),
  os.path.join('.', 'typedefs.h')
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

  if not os.path.exists('build'):
    os.makedirs('build')
  os.chdir('build')
  targetfile = "occt.tar.gz"

  ######################################
  if not os.path.exists('occt.tar.gz'):
    stage("downloading OCCT...")
    url = "https://git.dev.opencascade.org/gitweb/?p=occt.git;a=snapshot;h=33d9a6fa21ca4fa711da7066655aa2ba854545ee;sf=tgz"
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
    patch.fromfile("../patches/CMakeLists.txt.patch").apply()
    pset = patch.fromfile("../patches/OSD_Path.cxx.patch").apply()
    pset = patch.fromfile("../patches/OSD_Process.cxx.patch").apply()
    pset = patch.fromfile("../patches/Bnd_Box.hxx.patch").apply()
    pset = patch.fromfile("../patches/BRepGProp.hxx.patch").apply()

  if not os.path.exists('regal'):
    stage("downloading and extracting regal...")
    url = "https://github.com/p3/regal/archive/master.tar.gz"
    myfile = requests.get(url, stream=True)
    open("regal.tar.gz", 'wb').write(myfile.content)
    tar = tarfile.open("regal.tar.gz", "r:gz")
    tar.extractall("regal")
    tar.close()

  if not os.path.exists('freetype'):
    stage("downloading and extracting freetype...")
    url = "https://git.savannah.gnu.org/cgit/freetype/freetype2.git/snapshot/freetype2-VER-2-10-1.tar.gz"
    myfile = requests.get(url, stream=True)
    open("freetype.tar.gz", 'wb').write(myfile.content)
    tar = tarfile.open("freetype.tar.gz", "r:gz")
    tar.extractall("freetype")
    tar.close()

  if not os.path.exists('fontconfig'):
    stage("downloading and extracting fontconfig...")
    url = "https://gitlab.freedesktop.org/fontconfig/fontconfig/-/archive/2.13.92/fontconfig-2.13.92.tar.gz"
    myfile = requests.get(url, stream=True)
    open("fontconfig.tar.gz", 'wb').write(myfile.content)
    tar = tarfile.open("fontconfig.tar.gz", "r:gz")
    tar.extractall("fontconfig")
    tar.close()

  ######################################
  stage("checking EMSCRIPTEN...")
  envEMSDK = os.environ.get('EMSDK')
  if not envEMSDK:
    print("ERROR: envEMSDK environment> variable not found")
    sys.exit(1)
  sys.path.append(os.path.join(envEMSDK, 'upstream', 'emscripten'))
  import tools.building as emscripten

  #####################################
  stage('Build bindings')

  myincludes = [x[1] for x in os.walk(os.path.join('.', 'occt', 'src'))][0]
  myincludes = ['-I./occt/src/{0}'.format(s) for s in myincludes]
  myincludes.extend([
    '-I./../',
    '-c',
    '-std=c++1z',
  ])

  args = copy.deepcopy(myincludes)
  for include in INCLUDES:
    args += ['-include', include]

  if not os.path.exists('build'):
    os.makedirs('build')
  os.chdir('build')

  cmake_build = True

  if cmake_build:
    stage('Configure via CMake')
    emscripten.configure([
      'cmake',
      '../occt/',
      '-DCMAKE_BUILD_TYPE=Release',
      '-D3RDPARTY_FREETYPE_INCLUDE_DIR_freetype2=../freetype/freetype2-VER-2-10-1/include/freetype',
      '-D3RDPARTY_FREETYPE_INCLUDE_DIR_ft2build=../freetype/freetype2-VER-2-10-1/include',
      '-DBUILD_LIBRARY_TYPE=Static',
      '-DCMAKE_CXX_FLAGS="-DIGNORE_NO_ATOMICS=1 -frtti"',
      '-D3RDPARTY_INCLUDE_DIRS=../regal/regal-master/src/apitrace/thirdparty/khronos/\;../fontconfig/fontconfig-2.13.92',
      '-DUSE_GLES2=ON',
      '-DBUILD_MODULE_Draw=OFF',
      '-DBUILD_ADDITIONAL_TOOLKITS=OFF',
      '-DBUILD_MODULE_Visualization=OFF',
      '-DBUILD_MODULE_ApplicationFramework=OFF'
    ])

  ###############
  stage('Make')

  CORES = multiprocessing.cpu_count()

  make_build = True

  if make_build:
    emscripten.make(['make', '-j', str(CORES)])

  ######################################
  stage('generate bindings...')

  os.chdir('../../embind')
  subprocess.call(['./autobind.py'])
  os.chdir('../build')
  
  ######################################
  stage("build settings...")
  wasm = 'wasm' in sys.argv
  closure = 'closure' in sys.argv
  add_function_support = 'add_func' in sys.argv
  args = '-std=c++1z -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=["UTF8ToString"]'
  args += ' -O3'
  if add_function_support:
    args += ' -s RESERVED_FUNCTION_POINTERS=20 -s EXTRA_EXPORTED_RUNTIME_METHODS=["addFunction"]'  
  if wasm:
    args += ''' -s WASM=1'''
  else:
    args += ' -s WASM=0 -s ELIMINATE_DUPLICATE_FUNCTIONS=1 -s SINGLE_FILE=1 -s LEGACY_VM_SUPPORT=1'
  if closure:
    args += ' --closure 1 -s IGNORE_CLOSURE_COMPILER_ERRORS=1'
  else:
    args += ' -s NO_DYNAMIC_EXECUTION=1'
  emcc_args = args.split(' ')
  emcc_args += ['-s', 'TOTAL_MEMORY=%d' % (64*1024*1024)]
  emcc_args += ['-s', 'ALLOW_MEMORY_GROWTH=1']
  emcc_args += '-s EXPORT_NAME="opencascade"'.split(' ')
  emcc_args += '-s MODULARIZE=1'.split(' ')
  emcc_args += ['-s', 'EXTRA_EXPORTED_RUNTIME_METHODS=["FS"]']
  emcc_args += ['-s', 'EXPORT_ES6=1']
  emcc_args += ['-s', 'USE_ES6_IMPORT_META=0']
  emcc_args += ['-s', 'AGGRESSIVE_VARIABLE_ELIMINATION=1']
  
  # Debugging options
  # emcc_args += ['-s', 'ASSERTIONS=2']
  # emcc_args += ['-s', 'STACK_OVERFLOW_CHECK=1']
  # emcc_args += ['-s', 'DEMANGLE_SUPPORT=1']
  # emcc_args += ['-s', 'DISABLE_EXCEPTION_CATCHING=0']
  # emcc_args += ['-g']

  stage('Link')

  os.chdir('build')
  opencascade_libs = os.listdir(os.path.join('.', 'lin32', 'clang', 'lib'))
  opencascade_libs = [os.path.join('.', 'build', 'lin32', 'clang', 'lib', s) for s in opencascade_libs]

  stage('emcc: ' + ' '.join(emcc_args))
  os.chdir('..')
  if not os.path.exists('js'):
    os.makedirs('js')

  target = 'opencascade.js' if not wasm else 'opencascade.wasm.js'
  temp = os.path.join('.', 'js', target)
  shutil.copytree(os.path.join('..', 'embind'), os.path.join('.', 'embind'), dirs_exist_ok=True)

  includePrefix = os.path.join(".", "occt", "src")
  includePaths = os.listdir(includePrefix)
  includeArgs = [
    '-I' + os.path.join('.', 'occt', 'src'),
  ]
  for path in includePaths:
    includeArgs.append('-I' + os.path.join(".", includePrefix, path))

  emccArgs = ['--bind'] + includeArgs + opencascade_libs + emcc_args
  emscripten.emcc(os.path.join('.', 'bindings.cpp'), emccArgs, temp)

  stage('wrap')

  wrapped = '''
// This is opencascade.js.
''' + open(temp).read()

  open(temp, 'w').write(wrapped)
  
  os.chdir("..")
  if not os.path.exists('dist'):
    os.makedirs('dist')
    
  print("----------")
  print(os.getcwd())
  print("----------")

  if not wasm:
    shutil.copyfile(os.path.join('build', 'js', 'opencascade.js'), os.path.join('dist', 'opencascade.js'))
  else:
    shutil.copyfile(os.path.join('build', 'js', 'opencascade.wasm.js'), os.path.join('dist', 'opencascade.wasm.js'))
    shutil.copyfile(os.path.join('build', 'js', 'opencascade.wasm.wasm'), os.path.join('dist', 'opencascade.wasm.wasm'))

  print(os.system("ls -hl build/js/"))

if __name__ == '__main__':
  build()

