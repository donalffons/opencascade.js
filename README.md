OpenCascade.js
==============

This is OpenCascade.js - a port of the [OpenCascade](https://www.opencascade.com/) CAD library to JavaScript and WebAssembly via Emscripten.

Current OCCT version: [V7_4_0p1](https://git.dev.opencascade.org/gitweb/?p=occt.git;a=commit;h=33d9a6fa21ca4fa711da7066655aa2ba854545ee)

![opencascade.js - Build Library](https://github.com/donalffons/opencascade.js/workflows/opencascade.js%20-%20Build%20Library/badge.svg)

# Projects & Examples:

* [CascadeStudio](https://github.com/zalo/CascadeStudio) is a SCAD (Scripted-Computer-Aided-Design) editor, which runs in the browser.
* [OpenCascade.js-examples](https://github.com/donalffons/opencascade.js-examples) contains general examples on how to use the library.

# FAQ

## Is this a fork of the OpenCascade library?

No. This project is making no changes to the OpenCascade library, apart from few very small modifications which are applied as patches. All this project does is
* Download a tagged commit from the [OpenCascade git server](https://git.dev.opencascade.org/gitweb/?p=occt.git;a=summary).
* Compile the OpenCascade library using the Emscripten compiler.
* Analyze the OpenCascade headers using libclang and auto-generate bind-code to expose the library to JavaScript.
* Link the WASM-binaries and provide some convenience functions so that you can easily use the library in your JavaScript projects.

## Who is going to keep this project up-to-date with the OpenCascade library?

This project is (hopefully) keeping itself (mostly) up-to-date with the OpenCascade library, since most bindings are generated automatically.

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

You can build OpenCascade.js yourself. The easiest way to do that is to build and run the docker container, which is correctly configured for building the library. Follow these steps:

## On Linux

If you're using Linux (probably also if you're on MacOS), you may want to use the `build.sh` script. This is a helper-script, which will allow you to

  * build the container
  * execute the build
  * open a shell inside the container
  * clear your build cache

## On Windows

To build the container, open a command prompt or terminal in the directory of `opencascade.js` and enter:

    ```
    docker build -t opencascade.js .
    ```

Then execute the build, while sharing several folders with your current directory:

    ```
    docker run -it ^
      -v "%cd%\build":"/opencascade/build/" ^
      -v "%cd%\dist":"/opencascade/dist/" ^
      -v "%cd%\emscripten-cache":"/emscripten/upstream/emscripten/cache/" ^
      -v "%cd%\embind":"/opencascade/embind/" ^
      opencascade.js
    ```

## Re-building

Currrently, you have to run the `docker build` and `docker run` commands after each change, for every build.

# Contributing

Contributions are welcome! Feel free to have a look at the [todo-list](Todo.md) if you need some inspiration on what else needs to be done.
