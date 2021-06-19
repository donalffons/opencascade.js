(These instructions are for the upcoming `@beta` release. All information is likely to change. See [here](https://github.com/donalffons/opencascade.js/tree/v1.1.1) for instructions of the `v1.1.1` release.)

# Workflow when building Apps

## 1. Use pre-built modules for development and prototyping*

This library comes with several pre-built WASM modules (shipped via the NPM package), which are mostly meant to be used during development and prototyping. While those pre-built modules make it possible to use large parts of the OpenCascade API, they come with the following drawbacks:

1. Long download times, high memory consumption:

    * The pre-built modules are very large and contain a lot of WASM-code. This code has to be downloaded and compiled to the client's native target architecture, before it can run.

2. Long startup times:

    * The pre-built modules contain a lot of bindings. Bindings allow C++ functionality to be accessed from JavaScript. During startup of the library, Emscripten is "crafting" a new JavaScript function for each binding.

    * When linking in a new WASM module, Emscripten tries to resolve all of its imports (i.e. functions that should arrrive from other modules) and therefore has to iterate through all exports many times. When an import can be resolved, a new JavaScript function is "crafted".

## 2. Create custom builds for production

To solve those issues, this project provides a way to create custom builds. Custom builds allow you to define
* The parts of the OpenCascade library should be included, i.e. which WASM code should be generated.
* The bindings that should be generated.
* Which compiler settings to use during a build.

# Using Pre-built modules

## Install, import and instantiate

1. Add the library as a dependency to your project

    ```
    npm install opencascade.js@beta
    ```

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

3. In your JavaScript file, instantiate the library:

    ```js
    import {
      initOpenCascade,
      ocCore,
      ocModelingAlgorithms,
      ocVisualApplication,
      ocDataExchangeBase,
      ocDataExchangeExtra,
    } from "opencascade.js";

    initOpenCascade({
      libs: [ // Specify which modules to use and the sequence in which to load them
        ocCore,
        ocModelingAlgorithms,
        ocVisualApplication,
        ocDataExchangeBase,
        ocDataExchangeExtra,
      ]
    }).then(oc => {
      // Check out the examples on how to use this library!
    });
    ```

## Module loading Sequence

The sequence in which the libraries are loaded matters. Emscripten requires that there are no unresolved imports after each library load. To identify the correct loading sequence, have a look at the [module dependency graphs in the OCCT documentation](https://dev.opencascade.org/doc/refman/html/index.html). Before a module can be loaded, all its dependencies (indicated by arrows) must have been loaded.

## Types of pre-built modules

Pre-built modules are shipped in two flavors.

1. OpenCascade-defined modules (prefixed with `TK`)

    Supported Modules:
    ```
    TKernel, TKMath, TKG2d, TKG3d, TKService, TKGeomBase, TKBRep, TKGeomAlgo, TKTopAlgo, TKHLR, TKShHealing, TKMesh, TKV3d, TKXSBase, TKSTEPBase, TKSTEP209, TKSTEPAttr, TKCDF, TKSTEP, TKLCAF, TKPrim, TKBO, TKCAF, TKVCAF, TKXCAF, TKXDESTEP, TKRWMesh, TKBool, TKFillet, TKBinL, TKTObj, TKBinTObj, TKBin, TKBinXCAF, TKFeat, TKIGES, TKMeshVS, TKOffset, TKStdL, TKStd, TKSTL, TKVRML, TKXDEIGES, TKXMesh, TKXmlL, TKXmlTObj, TKXml, TKXmlXCAF
    ```

    Currently unsupported Modules:
    ```
    TKOpenGl, TKViewerTest, TKD3DHost, TKIVtk, TKDraw, TKIVtkDraw, TKDCAF, KQADraw, TKTopTest, TKXDEDRAW, TKXSDRAW, TKTObjDRAW
    ```

    For more information about these modules, have a look at the [OCCT documentation](https://dev.opencascade.org/doc/refman/html/index.html).

2. OpenCascade.js-defined modules (prefixed with `oc`)

    Starting OpenCascade.js by using the OpenCascade-defined modules is possible. However, the large number of Modules increases the startup times significantly, compared to loading the library in a "standalone" version (that's because Emscripten is resolving all imports after each library is loaded by "crafting" additional JavaScript functions to link the libraries).

    The shortest startup time would be possible with one big "standalone" build of the library. Unfortunately this is currently not possible, as browsers limit the number of exports of WASM modules to 100,000. Therefore, this project combines the OpenCascade-modules into larger modules like this:

    ```
    ocCore:
      TKernel, TKMath, TKG2d, TKG3d, TKGeomBase, TKBRep

    ocModelingAlgorithms:
      TKGeomAlgo, TKTopAlgo, TKShHealing, TKPrim, TKHLR, TKBO, TKMesh, TKBool, TKFillet, TKFeat, TKOffset

    ocVisualApplication:
      TKCDF, TKLCAF, TKBinL, TKCAF, TKTObj, TKXmlL, TKStdL, TKBin, TKBinTObj, TKVCAF, TKXml, TKXmlTObj, TKStd, TKService, TKV3d, TKOpenGl, TKMeshVS

    ocDataExchangeBase:
      TKXSBase, TKSTL, TKSTEPBase, TKSTEP209, TKSTEPAttr
      
    ocDataExchangeExtra:
      TKIGES, TKXCAF, TKXDEIGES, TKVRML, TKXmlXCAF, TKBinXCAF, TKRWMesh, TKSTEP, TKXDESTEP
    ```

You can mix and match between the two as you like, as long as the loading sequence constraints are observed, i.e.

  ```js
  import {
    initOpenCascade,
    ocCore,
    ocModelingAlgorithms,
    ocVisualApplication,
    TKXSBase,
    TKIGES,
    TKXCAF,
    TKXDEIGES,
  } from "opencascade.js";

  initOpenCascade({
    libs: [ // Specify which modules to use and the sequence in which to load them
      ocCore,
      ocModelingAlgorithms,
      ocVisualApplication,
      TKXSBase,
      TKIGES,
      TKXCAF,
      TKXDEIGES,
    ]
  }).then(oc => {
      // Check out the examples on how to use this library!
  });
  ```

# Creating a custom build

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

        - symbol: CustomClass
      additionalCppCode: |
        #include <iostream>
        class CustomClass {
        public:
          static void SayHello() {
            std::cout << "Hello, World" << std::endl;
          }
        };
      emccFlags:
        - -sEXPORT_ES6=1
        - -sUSE_ES6_IMPORT_META=0
        - -sEXPORTED_RUNTIME_METHODS=["FS"]
        - -O3
    ```

    This will:

    * Create a "standalone"-build of the library without support for dynamically linked libraries. Standalone builds must have the `.js` extension, which is why this build is called `rocketExample.js`.

    * Generate bindings for the classes defined in the `bindings` property.

    * Add the additional C++ Code from the field `additionalCppCode` into the C++ file, which is used for the build (the code will be placed after all include statements and before the `EMSCRIPTEN_BINDINGS` block). In order for the build system to expose this C++ code to JavaScript, it needs to be class-based (the build system currently cannot handle plain functions) and you must add the class name to the bindings object (in the example above, by specifying `symbol: CustomClass`).

    * Apply the flags given in the `emccFlags` property during compilation. See [here](https://github.com/emscripten-core/emscripten/blob/master/src/settings.js) for a complete list of settings. `-sEXPORT_ES6=1` and `-sUSE_ES6_IMPORT_META=0` produce a ES6 module (as opposed to a UMD module), which should work nicely with most browser-based workflows. `-sEXTRA_EXPORTED_RUNTIME_METHODS=["FS"]` adds support for Emscripten's virtual file system. `-O3` is used to create an optimized build.

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
        locateFile: file => opencascadeWasm,
      }).then(oc => {
        // Custom build is ready to use!
      });
      ```

# Mapping between C++ and JS APIs

## Overloaded methods

Overloads of C++ functions cannot always be mapped to overloaded JS functions without introducing ambiguities (simply due to differences of C++ and JS). Therefore, the API of this project enumerates all overloads of a function by appending _1, _2, ... to its name by the sequence in which they appear in the declaration.

E.g. if you look into the OpenCascade documentation for [BRepMesh_IncrementalMesh](https://dev.opencascade.org/doc/refman/html/class_b_rep_mesh___incremental_mesh.html), `Perform_1` would give you

```cpp
virtual void Perform (const Message_ProgressRange &theRange=Message_ProgressRange())
```

while `Perform_2` would give you

```cpp
void Perform (const Handle< IMeshTools_Context > &theContext, const Message_ProgressRange &theRange=Message_ProgressRange())
```

## References to built-in data types

While C++ has general support for reference types, JavaScript does not. In JavaScript, when calling a function with arguments, all arguments are passed as (shallow) copies. 

OpenCascade utilizes these reference types quite often as return values, like in this function from the class BRepTools, where `UMin`, `UMax`, `VMin` and `VMax` are all references to a Standard_Real (aka double). When executed, the function mutates the value of those references, thereby "returning" their values.

```cpp
UVBounds(const TopoDS_Face &F, Standard_Real &UMin, Standard_Real &UMax, Standard_Real &VMin, Standard_Real &VMax)
```

In order to use methods with reference types via OpenCascade.js, you have to follow the schema below.

```js
const path = [[-50, 0, 0], [50, 0, 0], [50, 100, 0]].map(([x, y, z]) => new this.oc.gp_Pnt_3(x, y, z));
const makePolygon = new this.oc.BRepBuilderAPI_MakePolygon_3(path[0], path[1], path[2], true);
const wire = makePolygon.Wire();
const makeFace = new this.oc.BRepBuilderAPI_MakeFace_15(wire, false);
const u0 = { current: 0 };
const u1 = { current: 0 };
const v0 = { current: 0 };
const v1 = { current: 0 };
this.oc.BRepTools.UVBounds_1(makeFace.Face(), u0, u1, v0, v1);
console.log({u0, u1, v0, v1});
```

As a side note: You are free to either pass in a "reference type" or a built-in number. The latter doesn't make much sense in this particular example, but is supported (and might make sense for other use cases):

```js
this.oc.BRepTools.UVBounds_1(makeFace.Face(), 123, 234, 345, 456);
```
