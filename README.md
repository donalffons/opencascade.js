OpenCascade.js
==============

This is OpenCascade.js - a port of the [OpenCascade](https://www.opencascade.com/) CAD library to JavaScript and WebAssembly via emScripten.

# Build it

You may encounter build issues when there are whitespaces in the path to OpenCascade.js. Its best to avoid those.

You can build OpenCascade.js yourself, as follows:

1. Get Emscripten from http://emscripten.org and set it up. See http://kripken.github.io/emscripten-site/docs/getting_started/

2. Run the build script, `python2 make.py` for the JavaScript version and `python2 make.py wasm` for the WebAssembly version. Build results are written to the `dist` folder.

# Use it

1. Build the library. Currently, there is no pre-built version available. But this will change soon.
2. Add the library as a dependency to your project
 ```sh
 # with yarn
 yarn add file:path/to/opencascadejs

 # with npm
 npm install file:path/to/opencascadejs
 ```
  3. Assuming that you use webpack in your project, you need to add the following configuration to your `webpack.config.js`

  ``` javascript
  module: {
    rules: [
      {
        test: /opencascade\.wasm\.wasm$/,
        type: "javascript/auto",
        loader: "file-loader"
      }
    ]
  }
  ```
  This will make sure that the path to the opencascade WASM file is made available by webpack. This is required in order for `WebAssembly.InstantiateStreaming` to work.

4. Use the library in your project:
``` javascript
import { initOpenCascade } from "opencascade.js";
initOpenCascade().then(openCascade => {
  // use it!
});
```

# Exposing additional OpenCascade API parts

Certain parts of the OpenCascade API are already exposed. If you need additional API parts, go ahead and edit the `opencascade.idl` file. This file defined the exposed parts of the interface via the WebIDL Interface Description Language.
