---
sidebar_position: 3
---

# Configuring your Bundler

## Why Import the `.wasm` Assets

OpenCascade.js uses the `import` syntax to import the compiled `.wasm` asset. This will allow your bundler to handle that file for you. A correctly configured bundler will rename that file and include a content hash in the filename. You can then host this asset using [infinite caching duration headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#response_directives). This is very important for two reasons.

1. The `.wasm` asset is very large. You don't want to download it every time a page is visited.
2. The `.wasm` asset gets compiled to each visitor's system architecture. This takes a significant amount of time and memory.

Unfortunately, bundlers behave inconsistently when dealing with `.wasm` assets, which is why you probably have to configure it, as described below.

:::note In case you don't use a bundler...
... (e.g. if you're using NodeJS) you can use the Emscripten-generated files directly, i.e. `opencascade.js/dist/opencascade.full.js` and `opencascade.js/dist/opencascade.full.wasm` from the NPM package. Please refer to the [Emscripten documentation](https://emscripten.org/) on how to use those.
:::

## Configuring your Bundler

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
