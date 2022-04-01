---
sidebar_position: 1
---

# About OpenCascade.js

*(All instructions on this site are for the upcoming `@beta` release. All information is likely to change. See [here](https://github.com/donalffons/opencascade.js/tree/v1.1.1) for instructions of the `v1.1.1` release.)*

OpenCascade.js is a port of the [OpenCascade](https://www.opencascade.com) CAD library to JavaScript and WebAssembly via Emscripten. That means that it allows you to create applications using the OpenCascade CAD Kernel that run in the browser, on your server or on pretty much any device that supports WebAssembly.

## Projects & Examples:

* [ArchiYou](https://archiyou.com/): Library, Code-CAD Design Tool, Community Hub
* [BitByBit](https://bitbybit.dev/): Code- & node-based - CAD Design Tool
* [CascadeStudio](https://github.com/zalo/CascadeStudio): Library and Code-CAD Design Tool
* [RepliCAD](https://replicad.xyz/): Library and Code-CAD Design Tool
* [OpenCascade.js-examples](https://github.com/donalffons/opencascade.js-examples): Contains general examples on how to use the library.

## Getting Started

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
    // For Webpack 4, you have to add the following properties to the "node" object (e.g. Create-React-App, ...)
    node: {
      fs: "empty"
    }
    // For Webpack 5, you you have to add the following properties to the "fallback" object (e.g. NextJs, ...)
    fallback: {
      fs: false,
      perf_hooks: false,
      os: false,
      worker_threads: false,
      crypto: false,
      stream: false
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
