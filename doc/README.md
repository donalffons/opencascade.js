(These instructions are for the upcoming `@beta` release. All information is likely to change. See [here](https://github.com/donalffons/opencascade.js/tree/v1.1.1) for instructions of the `v1.1.1` release.)

# Building apps

## Use pre-built modules for development and prototyping

This library comes with several pre-built WASM modules (shipped via the NPM package), which are mostly meant to be used during development and prototyping. While those pre-built modules make it possible to use large parts of the OpenCascade API, they come with the following drawbacks:

1. Long download times, high memory consumption:

    * The pre-built modules are very large and contain a lot of WASM-code. This code has to be downloaded and compiled to the client's native target architecture, before it can run.

2. Long startup times:

    * The pre-built modules contain a lot of bindings. Bindings allow C++ functionality to be accessed from JavaScript. During startup of the library, Emscripten is "crafting" a new JavaScript function for each binding.

    * When linking in a new WASM module, Emscripten tries to resolve all of its imports (i.e. functions that should arrrive from other modules) and therefore has to iterate through all exports many times. When an import can be resolved, a new JavaScript function is "crafted".

## Create custom builds for production

To solve those issues, this project provides a way to create custom builds. Custom builds allow you to define
* The parts of the OpenCascade library should be included, i.e. which WASM code should be generated.
* The bindings that should be generated.
* Which compiler settings to use during a build.

# Create a custom build

Custom builds are defined using YAML files. One YAML file can contain multiple modules (i.e. multiple builds). 

1. Pull the opencascade.js Docker image from Dockerhub
    ```
    docker pull donalffons/opencascade.js
    ```

2. Create a new file called test.yml with the following content
    ```yml
    rocketExample.js:
      bindings:
        - symbol: STEPCAFControl_Reader
        - symbol: IFSelect_ReturnStatus
        - symbol: TCollection_ExtendedString
        - symbol: TDocStd_Document
        - symbol: Handle_TDocStd_Document
        - symbol: Message_ProgressRange
        - symbol: XCAFDoc_DocumentTool
        - symbol: TDF_LabelSequence
        - symbol: XCAFDoc_ShapeTool
        - symbol: TCollection_AsciiString
        - symbol: RWGltf_CafWriter
        - symbol: BRepTools
        - symbol: BRepMesh_IncrementalMesh
        - symbol: TColStd_IndexedDataMapOfStringString
        - symbol: CDM_Document
        - symbol: Standard_Transient
        - symbol: TDF_Label
        - symbol: TDataStd_GenericEmpty
        - symbol: TDF_Attribute
        - symbol: Handle_XCAFDoc_ShapeTool
        - symbol: NCollection_BaseSequence
        - symbol: TopoDS_Shape
        - symbol: BRepMesh_DiscretRoot
        - symbol: NCollection_BaseMap
      emccFlags:
        - -sEXPORT_ES6=1
        - -sUSE_ES6_IMPORT_META=0
        - -sEXTRA_EXPORTED_RUNTIME_METHODS=["FS"]
        - -O3
        - -sAGGRESSIVE_VARIABLE_ELIMINATION=1
    ```

    This will:

    * Create a "standalone"-build of the library (i.e. neither `MAIN_MODULE` nor `SIDE_MODULE`) without support for dynamically linked libraries. Standalone builds must have the `.js` extension, which is why this build is called `rocketExample.js`.

    * Generate bindings for the classes defined in the `bindings` property.

    * Apply the flags given in the `emccFlags` property during compilation. See [here](https://github.com/emscripten-core/emscripten/blob/master/src/settings.js) for a complete list of settings. `-sEXPORT_ES6=1` and `sUSE_ES6_IMPORT_META=0` produce a ES6 module (as opposed to a UMD module), which should work nicely with most browser-based workflows. `-sEXTRA_EXPORTED_RUNTIME_METHODS=["FS"]` adds support for Emscripten's virtual file system. `-O3` and `-sAGGRESSIVE_VARIABLE_ELIMINATION=1` are used to create an optimized build.

    When creating builds in "standalone"-mode and applying `-O3` optimizations, Emscripten is able to perform dead code elimination. This results in very small binary sizes without the need to manually specify which OpenCascade sources to include during the build process.

  3. Run the docker Image against this file. In the directory, in which the yml file is located, run:

      ```
      docker run \
        --rm \
        -v $(pwd):/src \
        -u $(id -u):$(id -g) \
        donalffons/opencascade.js \
        test.yml
      ```

      This will produce two files `rocketExample.js` and `rocketExample.wasm` in the current directory.

  4. Use the custom build in your JavaScript project like this:

      ```js
      import opencascade from 'rocketExample.js';
      import opencascadeWasm from 'rocketExample.wasm';

      opencascade({
        locateFile(path) {
          if(path.endsWith('.wasm')) {
            return opencascadeWasm;
          }
          return path;
        },
      }).then(oc => {
        // Custom build is ready to use!
      });
      ```
