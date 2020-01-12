import os
import requests
import shutil
import sys
import tarfile

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
  # shutil.rmtree("build")
  if not os.path.exists('build'):
    os.makedirs('build')
  os.chdir('build')

  if not os.path.exists('occt.tar.gz'):
    stage("download OCCT...")
    url = "https://git.dev.opencascade.org/gitweb/?p=occt.git;a=snapshot;h=0858125fd4ef81ca2965e1aa2f49c5960d7dcc62;sf=tgz"
    myfile = requests.get(url, stream=True)
    targetfile = "occt.tar.gz"
    open(targetfile, 'wb').write(myfile.content)

  if not os.path.exists('occt'):
    stage("extracting OCCT...")
    tar = tarfile.open(targetfile, "r:gz")
    tar.extractall("occt")
    tar.close()

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

if __name__ == '__main__':
  build()

