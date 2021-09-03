
![opencascade.js - Build Library](https://github.com/donalffons/opencascade.js/workflows/opencascade.js%20-%20Build%20Library/badge.svg)
![OpenCascade Version](https://img.shields.io/badge/OpenCascade%20Version-7.5.3-green.svg)

<p align="center">
  <img src="https://github.com/donalffons/opencascade.js/raw/master/images/logo.svg" alt="Logo" width="50%">

  <h3 align="center">OpenCascade.js</h3>

  <p align="center">
    A port of the <a href="https://www.opencascade.com/">OpenCascade</a> CAD library to JavaScript and WebAssembly via Emscripten.
    <br />
    <a href="./doc/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/donalffons/opencascade.js-examples">Examples</a>
    ·
    <a href="https://github.com/donalffons/opencascade.js/issues">Issues</a>
    ·
    <a href="https://github.com/donalffons/opencascade.js/discussions">Discuss</a>
  </p>
</p>

# Projects & Examples:

* [CascadeStudio](https://github.com/zalo/CascadeStudio) is a SCAD (Scripted-Computer-Aided-Design) editor, which runs in the browser.
* [OpenCascade.js-examples](https://github.com/donalffons/opencascade.js-examples) contains general examples on how to use the library.

# Getting Started

(These instructions are for the upcoming `@beta` release. All information is likely to change. See [here](https://github.com/donalffons/opencascade.js/tree/v1.1.1) for instructions of the `v1.1.1` release.)

1. Add the library as a dependency to your project

    ```
    npm install opencascade.js@beta
    ```

**Option A:** If you're using a bundler like Webpack (browser-based and server-side applications)

2. Configure your bundler to load `.wasm` files as URLs. If you don't want to use a bundler, you can manually pass in the URLs to the WASM files in the next step.

    For webpack, first add the `file-loader` dependency.

    ```
    npm install file-loader --save-dev
    ```
    
    Then add the following configuration to your `webpack.config.js`.

    ``` javascript
    module: {
      rules: [
        {
          test: /\.wasm$/,
          type: "javascript/auto",
          loader: "file-loader"
        }
      ]
    },
    node: {
      fs: "empty"
    }
    ```
    
    If you're using create-react-app, you'll need to install react-app-rewired, then save the following as config-overrides.js
    ``` javascript
    module.exports = {
      webpack: (config) => {
        config.module.rules.find(k => k.oneOf !== undefined).oneOf.unshift(
          {
            test: /\.wasm$/,
            type: "javascript/auto",
            loader: "file-loader",
            options: {
              name: "static/js/[name].[contenthash:8].[ext]",
            },
          }
        );
        return config;
      },
    };
    ```
    
    A CRA+opencascade.js reference example is available [here](https://github.com/MattFerraro/openCascadeTest1).

3. In your JavaScript file, instantiate the library:

    ```js
    import initOpenCascade from "opencascade.js";

    initOpenCascade().then(oc => {
      // Check out the examples on how to use this library!
    });
    ```

**Option B:** If you're using Node.js without a bundler in a server-side application

2. In this case, you can import the library directly without having to configure your bundler

    ```js
    import initOpenCascade from "opencascade.js/dist/node.js";

    initOpenCascade().then(oc => {
      // Check out the examples on how to use this library!
    });
    ```

# FAQ

## Is this a fork of the OpenCascade library?

No. This project is making no changes to the OpenCascade library, apart from few very small modifications which are applied as patches. All this project does is
* Download a tagged commit from the [OpenCascade git server](https://git.dev.opencascade.org/gitweb/?p=occt.git;a=summary).
* Compile the OpenCascade library using the Emscripten compiler.
* Analyze the OpenCascade headers using libclang and auto-generate bind-code to expose the library to JavaScript.
* Link the WASM-binaries and provide some convenience functions so that you can easily use the library in your JavaScript projects.

## Who is going to keep this project up-to-date with the OpenCascade library?

This project is (hopefully) keeping itself (mostly) up-to-date with the OpenCascade library, since most bindings are generated automatically.

# Contributing

Contributions are welcome! Feel free to have a look at the [todo-list](TODO.md) if you need some inspiration on what else needs to be done.
