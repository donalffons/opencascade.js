OpenCascade.js
==============

This is OpenCascade.js - a port of the [OpenCascade](https://www.opencascade.com/) CAD library to JavaScript and WebAssembly via Emscripten.

![opencascade.js - Build Library](https://github.com/donalffons/opencascade.js/workflows/opencascade.js%20-%20Build%20Library/badge.svg)

# Projects & Examples:

* [OpenCascade.js-examples](https://github.com/donalffons/opencascade.js-examples) contains general examples on how to use the library.
* [CascadeStudio](https://zalo.github.io/CascadeStudio/) is a SCAD (Scripted-Computer-Aided-Design) editor, which runs in the browser.

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

You can build OpenCascade.js yourself. The easiest way to do that is to use the provided Docker image, which sets up a small Ubuntu container within your host system, which is correctly configured for building the library. Follow these steps:

1. Get [Docker](https://www.docker.com/) and install it

2. Build the container. Open a command prompt or terminal in the directory of `opencascade.js` and enter:
    ```
    docker build -t opencascade.js .
    ```
    This will build the container with the instructions given in the `Dockerfile` and give it the tag (name) `opencascade.js`.

3. Run the build. If you're on Linux, enter:
    ```
    docker run -it \
      -v "$(pwd)/build/":"/opencascade/build/" \
      -v "$(pwd)/node_modules/":"/opencascade/node_modules/" \
      -v "$(pwd)/dist/":"/opencascade/dist/" \
      -v "$(pwd)/emscripten-cache/":"/emscripten/upstream/emscripten/cache/" \
      opencascade.js
    ```
    Or on windows
    ```
    docker run -it ^
      -v "%cd%\build":"/opencascade/build/" ^
      -v "%cd%\node_modules":"/opencascade/node_modules/" ^
      -v "%cd%\dist":"/opencascade/dist/" ^
      -v "%cd%\emscripten-cache":"/emscripten/upstream/emscripten/cache/" ^
      opencascade.js
    ```
    This command will run the container and will also set up 4 directories, which will be shared with your host system. This speeds up your development process, as temporary build files (in the `build` and `node_modules` folders) and emscripten cache files (in the `emscripten-cache` folder) will be written and saved on your host machine's disk. The resulting build files are output to the `dist` folder.

# Exposing additional OpenCascade API's

Certain parts of the OpenCascade API are already exposed. If you need additional API's, go ahead and edit the `opencascade.idl` file. This file defines the exposed parts of the interface via the WebIDL Interface Description Language.
