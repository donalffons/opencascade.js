OpenCascade.js
==============

This is OpenCascade.js - a port of the [OpenCascade](https://www.opencascade.com/) CAD library to JavaScript and WebAssembly via emScripten.

# Build

You may encounter build issues when there are whitespaces in the path to OpenCascade.js. Its best to avoid those.

You can build OpenCascade.js yourself, as follows:

1. Get Emscripten from http://emscripten.org and set it up. See http://kripken.github.io/emscripten-site/docs/getting_started/

2. Run the build script, `python2 make.py` for the JavaScript version and `python2 make.py wasm` for the WebAssembly version. Build results are written to the `dist` folder.

# Exposing additional OpenCascade API parts

Certain parts of the OpenCascade API are already exposed. If you need additional API parts, go ahead and edit the `opencascade.idl` file. This file defined the exposed parts of the interface via the WebIDL Interface Description Language.
