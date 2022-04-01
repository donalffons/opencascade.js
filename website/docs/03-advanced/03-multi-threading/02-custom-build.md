---
sidebar_position: 2
---

# Create a Multi-Threading-Enabled Custom Build

Have a look at [this test](/test/multi-threaded.test.ts) for a working example.

Start by pulling the latest Docker image with multi-threading support.

```sh
docker pull donalffons/opencascade.js:multi-threaded
```

Next, create a custom build definition. The following will create a full build (based on [this one](/builds/opencascade.full.yml), which is distributed as the NPM package) with multi-threading support.

```yml
mainBuild:
  # not specifying any bindings will bind everything
  emccFlags:
    # These are just the default values as defined in /src/customBuildSchema.py
    - -O3
    - -sEXPORT_ES6=1
    - -sUSE_ES6_IMPORT_META=0
    - -sEXPORTED_RUNTIME_METHODS=['FS']
    - -sINITIAL_MEMORY=100MB
    - -sMAXIMUM_MEMORY=4GB
    - -sALLOW_MEMORY_GROWTH=1
    - -sUSE_FREETYPE=1
    - -sLLD_REPORT_UNDEFINED
    - --no-entry

    # Currently, the thread pool size has to be defined at compile time, otherwise
    # the execution will hang indefinitely during initialization. The value below
    # will allocate as many threads as there are cpu cores in the system - for
    # the browser. When building a NodeJS application, you might want to use
    # ='require("os").cpus().length' instead.
    - -sPTHREAD_POOL_SIZE='navigator.hardwareConcurrency'
  name: customBuild.multi-threaded.js

additionalCppCode: |
  #include "/opencascade.js/builds/library.h"
```

```sh
docker run \
  -v $(pwd):/src \
  -u $(id -u):$(id -g) \
  donalffons/opencascade.js:multi-threaded \
  ./opencascade.full.multi-threaded.yml
```

This will output 3 files (as opposed to 2 when creating a single-threaded build) into the current folder: `opencascade.full.multi-threaded.js`, `opencascade.full.multi-threaded.wasm` and `opencascade.full.multi-threaded.worker.js`. The web worker will be used for spawning new threads. This file must be accessible at run-time and depending on your bundler and folder structure, you might have to define the file path at which it can be accessed when initializing OpenCascade.js using the optional `worker` property.

```js
import initOpenCascade from "opencascade.js";
import opencascade from "./openascade.full.js";
import opencascadeWasm from "./openascade.full.wasm";
// When building web-apps, you might want to import the worker to give your bundler a chance to hash the file name.
// import opencascadeWorker from "./openascade.full.worker.js";

initOpenCascade({
  mainJs: opencascade,
  mainWasm: opencascadeWasm,
  worker: "/path/to/opencascade.full.worker.js", // or pass opencascadeWorker (containing a string with the path to the worker)
}).then(oc => {
  // ready to use multi-threaded build
});
```

That's it - multi-threading should now be enabled.
