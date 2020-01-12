import os
import requests
import shutil
import sys
import tarfile
from subprocess import Popen, PIPE, STDOUT

stage_counter = 0

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

  ######################################
  if not os.path.exists('occt.tar.gz'):
    stage("download OCCT...")
    url = "https://git.dev.opencascade.org/gitweb/?p=occt.git;a=snapshot;h=0858125fd4ef81ca2965e1aa2f49c5960d7dcc62;sf=tgz"
    myfile = requests.get(url, stream=True)
    targetfile = "occt.tar.gz"
    open(targetfile, 'wb').write(myfile.content)

  ######################################
  if not os.path.exists('occt'):
    stage("extracting OCCT...")
    tar = tarfile.open(targetfile, "r:gz")
    tar.extractall("occt")
    tar.close()

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
  args = '-s ERROR_ON_UNDEFINED_SYMBOLS=0 -std=c++1z -O3 --llvm-lto 1 -s NO_EXIT_RUNTIME=1 -s NO_FILESYSTEM=1 -s EXPORTED_RUNTIME_METHODS=["UTF8ToString"]'
  if add_function_support:
    args += ' -s RESERVED_FUNCTION_POINTERS=20 -s EXTRA_EXPORTED_RUNTIME_METHODS=["addFunction"]'  
  if not wasm:
    args += ' -s WASM=0 -s AGGRESSIVE_VARIABLE_ELIMINATION=1 -s ELIMINATE_DUPLICATE_FUNCTIONS=1 -s SINGLE_FILE=1 -s LEGACY_VM_SUPPORT=1'
  else:
    args += ''' -s WASM=1 -s BINARYEN_IGNORE_IMPLICIT_TRAPS=1 -s BINARYEN_TRAP_MODE="clamp"'''
  if closure:
    args += ' --closure 1 -s IGNORE_CLOSURE_COMPILER_ERRORS=1' # closure complains about the bullet Node class (Node is a DOM thing too)
  else:
    args += ' -s NO_DYNAMIC_EXECUTION=1'
  emcc_args = args.split(' ')
  emcc_args += ['-s', 'TOTAL_MEMORY=%d' % (64*1024*1024)] # default 64MB. Compile with ALLOW_MEMORY_GROWTH if you want a growable heap (slower though).
  #emcc_args += ['-s', 'ALLOW_MEMORY_GROWTH=1'] # resizable heap, with some amount of slowness
  emcc_args += '-s EXPORT_NAME="oce" -s MODULARIZE=1'.split(' ')

  target = 'oce.js' if not wasm else 'oce.wasm.js'

  ######################################
  stage('generate bindings...')

  print(os.path.join(EMSCRIPTEN_ROOT, 'tools', 'webidl_binder.py'))
  Popen([emscripten.PYTHON, os.path.join(EMSCRIPTEN_ROOT, 'tools', 'webidl_binder.py'), os.path.join(this_dir, 'oce.idl'), 'glue']).communicate()
  assert os.path.exists('glue.js')
  assert os.path.exists('glue.cpp')


if __name__ == '__main__':
  build()

