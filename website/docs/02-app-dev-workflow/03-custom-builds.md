---
sidebar_position: 3
---

# Creating Custom Builds

Custom builds are defined using YAML files. One YAML file can contain multiple modules (i.e. multiple builds). 

1. Pull the opencascade.js Docker image from Dockerhub
    ```
    docker pull donalffons/opencascade.js
    ```

2. Create a new file called test.yml with the following content
    ```yml
      mainBuild:
        name: rocketExample.js
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
        emccFlags:
          - -O3
          - -sEXPORT_ES6=1
          - -sUSE_ES6_IMPORT_META=0
          - -sEXPORTED_RUNTIME_METHODS=['FS']
          - -sINITIAL_MEMORY=100MB
          - -sMAXIMUM_MEMORY=4GB
          - -sALLOW_MEMORY_GROWTH=1
          - -sUSE_FREETYPE=1
      additionalCppCode: |
        #include <iostream>
        class CustomClass {
        public:
          static void SayHello() {
            std::cout << "Hello, World" << std::endl;
          }
        };
    ```

    This will:

    * Create a custom build with the default compiler flags.

    * Generate bindings for the classes defined in the `bindings` property.

    * Add the additional C++ Code from the field `additionalCppCode` into the C++ file, which is used for the build (the code will be placed after all include statements and before the `EMSCRIPTEN_BINDINGS` block). In order for the build system to expose this C++ code to JavaScript, it needs to be class-based (the build system currently cannot handle plain functions) and you must add the class name to the bindings object (in the example above, by specifying `symbol: CustomClass`).

    You can specify custom compilation flags using the `emccFlags` property (as an array) under the `mainBuild` property. See [here](https://github.com/emscripten-core/emscripten/blob/master/src/settings.js) for a complete list of settings. This property is optional and not specifying it will use the default values, used by the official OpenCascade.js build. `-sEXPORT_ES6=1` and `-sUSE_ES6_IMPORT_META=0` produce a ES6 module (as opposed to a UMD module), which should work nicely with most browser-based workflows. `-sEXTRA_EXPORTED_RUNTIME_METHODS=["FS"]` adds support for Emscripten's virtual file system. `-O3` is used to create an optimized build.

    Using `-O3` optimizations, Emscripten is able to perform dead code elimination. This results in very small binary sizes without the need to manually specify which OpenCascade sources to include during the build process.

  3. Run the docker Image against this file. In the directory, in which the yml file is located, run:

      ```
      docker run \
        --rm \
        -it \
        -v $(pwd):/src \
        -u $(id -u):$(id -g) \
        donalffons/opencascade.js \
        test.yml
      ```

      This will produce three files: `rocketExample.js` and `rocketExample.wasm` contain the JavaScript and WebAssembly code. `rocketExample.d.ts` contains Typescript defintions.

  4. Use the custom build in your JavaScript project like this:

      ```js
      import initOpenCascade from "opencascade.js";
      import opencascade from 'rocketExample.js';
      import opencascadeWasm from 'rocketExample.wasm';

      initOpenCascade({
        mainJs: opencascade,
        mainWasm: opencascadeWasm,
      }).then(oc => {
        // Custom build is ready to use!
      });
      ```
