OpenCascade.js
==============

This is OpenCascade.js - a port of the [OpenCascade](https://www.opencascade.com/) CAD library to JavaScript and WebAssembly via Emscripten.

See [here](https://github.com/donalffons/opencascade.js-examples) for examples on how to use this library.

# Use it

1. Add the library as a dependency to your project

    ```sh
    # with yarn
    yarn add opencascade.js
    # with npm
    npm install opencascade.js
    ```

2. Assuming that you use webpack in your project, you need to add the following configuration to your `webpack.config.js`

    ``` javascript
    module: {
      rules: [
        {
          test: /opencascade\.wasm\.wasm$/,
          type: "javascript/auto",
          loader: "file-loader"
        }
      ]
    },
    node: {
      fs: "empty"
    }
    ```
    You will also need to add `file-loader` as a dev-dependency to your project, i.e.

    ```sh
    # with yarn
    yarn add file-loader --dev
    # with npm
    npm install file-loader --save-dev
    ```

    This will

    * make sure that the path to the opencascade WASM file is made available by webpack. This is required to enable support for `WebAssembly.InstantiateStreaming` & Co.
    * stop webpack from complaining about `fs` being undefined in the Emscripten-generated loading script.
    
    For more info, see [here](https://gist.github.com/surma/b2705b6cca29357ebea1c9e6e15684cc).

3. Use the library in your project:
    ``` javascript
    import { initOpenCascade } from "opencascade.js";
    initOpenCascade().then(openCascade => {
      // use it!
    });
    ```
    This code will load the WebAssembly version of the library.

# Build it

You may encounter build issues if there are whitespaces in the path to OpenCascade.js. Its best to avoid those.

You can build OpenCascade.js yourself, as follows:

1. Get [Emscripten](http://emscripten.org) and [set it up](http://kripken.github.io/emscripten-site/docs/getting_started/).

2. Run the build script, `python2 make.py` for the JavaScript version and `python2 make.py wasm` for the WebAssembly version. Build results are written to the `dist` folder.

# Exposing additional OpenCascade API's

Certain parts of the OpenCascade API are already exposed. If you need additional API's, go ahead and edit the `opencascade.idl` file. This file defines the exposed parts of the interface via the WebIDL Interface Description Language.
