OpenCascade.js
==============

This is OpenCascade.js - a port of the [OpenCascade](https://www.opencascade.com/) CAD library to JavaScript and WebAssembly via Emscripten.

Current OCCT version: [V7_4_0p1](https://git.dev.opencascade.org/gitweb/?p=occt.git;a=commit;h=33d9a6fa21ca4fa711da7066655aa2ba854545ee)

![opencascade.js - Build Library](https://github.com/donalffons/opencascade.js/workflows/opencascade.js%20-%20Build%20Library/badge.svg)

# Projects & Examples:

* [OpenCascade.js-examples](https://github.com/donalffons/opencascade.js-examples) contains general examples on how to use the library.
* [CascadeStudio](https://zalo.github.io/CascadeStudio/) is a SCAD (Scripted-Computer-Aided-Design) editor, which runs in the browser.

# Which parts of the OpenCascade library are supported?

The answer: 74.59%

![](https://image-charts.com/chart?cht=p3&chs=700x250&chd=t:25.4,74.6&chl=Unsupported|Supported&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1)

[Detailed list of supported classes](https://github.com/donalffons/opencascade.js/blob/embind/dist/OutputDocumentation.md)

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
      -v "$(pwd)/emscripten-cache/":"/emscripten/upstream/ \
      -v "$(pwd)/embind/":"/opencascade/embind/" \
      opencascade.js
    ```
    Or on windows
    ```
    docker run -it ^
      -v "%cd%\build":"/opencascade/build/" ^
      -v "%cd%\node_modules":"/opencascade/node_modules/" ^
      -v "%cd%\dist":"/opencascade/dist/" ^
      -v "%cd%\emscripten-cache":"/emscripten/upstream/emscripten/cache/" ^
      -v "%cd%\embind":"/opencascade/embind/" ^
      opencascade.js
    ```
    This command will run the container and will also set up some directories, which will be shared with your host system. This speeds up your development process, as temporary build files will be written and saved on your host machine's disk. The resulting build files are output to the `dist` folder.

4. You have to run the `docker build` and `docker run` commands after each change, for every build.

# Exposing additional OpenCascade APIs

Emscripten's Embind system is used to expose OpenCascade APIs to JavaScript. The Embind definitions are located in the `embind` folder. Please look at the [code conventions document](https://github.com/donalffons/opencascade.js/blob/embind/embind/conventions.md) for best practices on how to expose additional APIs.
