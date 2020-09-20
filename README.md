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

As of right now, we supported 74.59% of all classes defined in OpenCascade.

![](https://image-charts.com/chart?cht=p3&chs=700x250&chd=t:25.4,74.6&chl=Unsupported|Supported&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1)

[Detailed list of supported classes](dist/Supported%20APIs.md)

This number does not include `typedef`'d template classes, as these are not yet supported by the build system. There is however support vor all `Handle_`-types (which specialize the `opencascade::handle<...>` template class).

## What if I need some parts of the OpenCascade library in my project that are currently not supported by the build system?

Adding missing features is easy. Just go ahead and edit the [`manualBindings.h`](embind/manualBindings.h) header-file and add your custom bindings. Some examples are already in that file. A full overview of Emscripten's Embind system can be found [here](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html). Please try to stick to the [conventions](embind/conventions.md).

You can also try to modify the binding auto-generation code, although this can be a slightly more difficult challenge.

Please make a pull request if you add or improve anything in this project.

## Is this a fork of the OpenCascade library?

No. This project is making almost no changes to the OpenCascade library, apart from a few very small modifications which are applied as patches. All this project does is
* Compile the OpenCascade library using the Emscripten compiler
* Analyze the OpenCascade headers using libclang and auto-generate bind-code to expose the library to JavaScript
* Link the WASM-binaries and provide some convenience functions so that you can easily use the library in your JavaScript projects

## Who is going to keep this project up-to-date with the OpenCascade library?

This project is (hopefully) keeping itself (mostly) up-to-date with the OpenCascade library, since 99% of all bindings are generated automatically. The build-system downloads a tagged commit from the [OpenCascade git server](https://git.dev.opencascade.org/gitweb/?p=occt.git;a=summary), analyzes it and auto-generates all bindings.

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

# Contributing

Contributions are welcome! Feel free to have a look at the [todo-list](Todo.md) if you need some inspiration on what else needs to be done.
