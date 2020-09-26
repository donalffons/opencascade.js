OpenCascade.js
==============

This is OpenCascade.js - a port of the [OpenCascade](https://www.opencascade.com/) CAD library to JavaScript and WebAssembly via Emscripten.

Current OCCT version: [V7_4_0p1](https://git.dev.opencascade.org/gitweb/?p=occt.git;a=commit;h=33d9a6fa21ca4fa711da7066655aa2ba854545ee)

![opencascade.js - Build Library](https://github.com/donalffons/opencascade.js/workflows/opencascade.js%20-%20Build%20Library/badge.svg)

# Projects & Examples:

* [CascadeStudio](https://github.com/zalo/CascadeStudio) is a SCAD (Scripted-Computer-Aided-Design) editor, which runs in the browser.
* [OpenCascade.js-examples](https://github.com/donalffons/opencascade.js-examples) contains general examples on how to use the library.

# FAQ

## Which parts of the OpenCascade library are supported?

As of right now, approximately 72% of all classes defined in OpenCascade are supported. Some of those classes have been tested and are confirmed working via WebAssembly. However, large parts of this project are currently untested.

![](https://image-charts.com/chart?cht=p3&chs=700x250&chd=t:25.6,74.4&chl=Unsupported\n(28.2%)|Supported\n(71.8%)&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1)

[Detailed list of supported classes](dist/Supported%20APIs.md)

Many `typedef`'d template classes are currently not supported by the build system. If you need support for a particular feature, feel free to add it yourself or [reach out](https://github.com/donalffons/opencascade.js/issues).

## What if I need some parts of the OpenCascade library in my project that are currently not supported by the build system?

Adding missing features is easy. Just go ahead and edit the [`manualBindings.h`](embind/manualBindings.h) header-file and add your custom bindings. Some examples are already in that file. A full overview of Emscripten's Embind system can be found [here](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html). Please try to stick to the [conventions](embind/conventions.md).

You can also try to modify the binding auto-generation code, although this can be a slightly more difficult challenge.

Please make a pull request if you add or improve anything in this project.

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
