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

### Hello World

```js ocjs
code: |
  const box = new oc.BRepPrimAPI_MakeBox_2(1, 1, 1);
  const sphere = new oc.BRepPrimAPI_MakeSphere_5(new oc.gp_Pnt_3(0.5, 0.5, 0.5), 0.65);
  const cut = new oc.BRepAlgoAPI_Cut_3(box.Shape(), sphere.Shape(), new oc.Message_ProgressRange_1());
  cut.Build(new oc.Message_ProgressRange_1());
  visualize(cut.Shape());
```

### OCJS Logo

```js ocjs
code: |
  const largeCyl = new oc.BRepPrimAPI_MakeCylinder_2(1, 0.1, Math.PI * 31/32);
  const smallCyl = new oc.BRepPrimAPI_MakeCylinder_2(0.75, 0.1, Math.PI * 31/32);
  const cut = new oc.BRepAlgoAPI_Cut_3(largeCyl.Shape(), smallCyl.Shape(), new oc.Message_ProgressRange_1());
  cut.Build(new oc.Message_ProgressRange_1());
  const cShape = cut.Shape();

  const getTf = (r) => {
    const tf = new oc.gp_Trsf_1();
    tf.SetRotation_1(new oc.gp_Ax1_2(new oc.gp_Pnt_1(), new oc.gp_Dir_4(0, 0, 1)), r);
    return tf;
  };
  const leftC = cShape.Moved(new oc.TopLoc_Location_2(getTf(Math.PI/2-Math.PI/8)), false);
  const rightC = cShape.Moved(new oc.TopLoc_Location_2(getTf(-Math.PI/2-Math.PI/8)), false);
  visualize([leftC, rightC], false);
```

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
