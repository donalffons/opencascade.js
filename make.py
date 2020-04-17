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
  os.path.join('.', 'occt', 'src', 'XSControl', 'XSControl_Reader.hxx'),
  os.path.join('.', 'occt', 'src', 'Poly', 'Poly_Connect.hxx'),
  os.path.join('.', 'occt', 'src', 'TColgp', 'TColgp_Array1OfDir.hxx'),
  os.path.join('.', 'occt', 'src', 'StdPrs', 'StdPrs_ToolTriangulatedShape.hxx'),
  os.path.join('.', 'occt', 'src', 'IGESControl', 'IGESControl_Reader.hxx'),
  os.path.join('.', 'Tesselator.h'),
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
    pset = patch.fromfile("../patches/OSD_Process.cxx.patch")
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
  args = '-std=c++1z -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=["UTF8ToString"]'
  args += ' -O1'
  # args += ' -O3 --llvm-lto 1'
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

  # Debugging options
  # emcc_args += ['-s', 'ASSERTIONS=2']
  # emcc_args += ['-s', 'STACK_OVERFLOW_CHECK=1']
  # emcc_args += ['-s', 'DEMANGLE_SUPPORT=1']
  # emcc_args += ['-s', 'DISABLE_EXCEPTION_CATCHING=0']
  # emcc_args += ['-g']

  target = 'opencascade.js' if not wasm else 'opencascade.wasm.js'

  ######################################
  stage('generate bindings...')

  Popen([emscripten.PYTHON, os.path.join(EMSCRIPTEN_ROOT, 'tools', 'webidl_binder.py'), os.path.join(this_dir, 'opencascade.idl'), 'glue']).communicate()
  assert os.path.exists('glue.js')
  assert os.path.exists('glue.cpp')

  ######################################
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
      os.path.join(EMSCRIPTEN_ROOT, 'emcmake'),
      'cmake',
      '../occt/',
      '-DCMAKE_BUILD_TYPE=Debug',
      '-D3RDPARTY_FREETYPE_DIR=/home/sebastian/Projects/OCCT_WA/freetype-2.10.0',
      '-D3RDPARTY_FREETYPE_INCLUDE_DIR_freetype2=/home/sebastian/Projects/OCCT_WA/freetype-2.10.0/include/freetype',
      '-D3RDPARTY_FREETYPE_INCLUDE_DIR_ft2build=/home/sebastian/Projects/OCCT_WA/freetype-2.10.0/include',
      '-D3RDPARTY_FREETYPE_LIBRARY_DIR=/home/sebastian/Projects/OCCT_WA/freetype-2.10.0/build',
      '-DBUILD_LIBRARY_TYPE=Static',
      '-DCMAKE_CXX_FLAGS="-DIGNORE_NO_ATOMICS=1 -frtti"',
      '-D3RDPARTY_INCLUDE_DIRS=/home/sebastian/Projects/OCCT_WA/regal/src/apitrace/thirdparty/khronos/\;/home/sebastian/Projects/OCCT_WA/fontconfig',
      '-DUSE_GLES2=ON',
      '-DBUILD_MODULE_Draw=OFF'
    ])

  make_build = True
  if make_build:
    stage('Make')

    CORES = multiprocessing.cpu_count()

    emscripten.Building.make(['make', '-j', str(CORES)])

  stage('Link')

  opencascade_libs = os.listdir(os.path.join('.', 'lin32', 'clang', 'libd'))
  opencascade_libs = [os.path.join('.', 'build', 'lin32', 'clang', 'libd', s) for s in opencascade_libs]
  opencascade_libs.extend([
    os.path.join('..', 'Tesselator.cpp')
  ])

  stage('emcc: ' + ' '.join(emcc_args))
  os.chdir('..')
  if not os.path.exists('js'):
    os.makedirs('js')

  temp = os.path.join('.', 'js', target)
  emscripten.Building.emcc('-DNOTHING_WAKA_WAKA', emcc_args + ['glue.o'] + opencascade_libs + myincludes[:len(myincludes)-2] + ['--js-transform', 'python %s' % os.path.join('..', 'bundle.py')], temp)
  # emscripten.Building.emcc('-DEMANGLE_SUPPORT=1', emcc_args + ['glue.o'] + opencascade_libs + ['--js-transform', 'python %s' % os.path.join('..', 'bundle.py')], temp)

  assert os.path.exists(temp), 'Failed to create script code'

  stage('wrap')

  wrapped = '''
// This is opencascade.js.
''' + open(temp).read()

  open(temp, 'w').write(wrapped)

  os.chdir('..')
  if os.path.exists('dist'):
    shutil.rmtree('dist')
  shutil.copytree(os.path.join('build', 'js'), 'dist')

if __name__ == '__main__':
  build()

