(These instructions are for the upcoming `@beta` release. All information is likely to change. See [here](https://github.com/donalffons/opencascade.js/tree/v1.1.1) for instructions of the `v1.1.1` release.)

# Workflow when building Apps

## 1. Use the pre-built version of the library

As a starting point for your projects, you can use the pre-built version of the library, which is distributed via NPM. This version contains the entirety of the currently supported API surface and is therefore ideal for development, prototyping or applications that require access to the entire OpenCascade.js API.

However, this version comes with the drawback that it includes a lot of code that you might never use in your application. Still, this code has to be downloaded and compiled to each user's system architecture, using up bandwidth, memory and processing power (during instantiation / compilation).

## 2. Create custom builds for production

To solve the previously mentioned issues, this project provides a way to create custom builds. Custom builds allow you to define
* The parts of the OpenCascade library should be included.
* The parts of the API that you are using in your application (called bindings).
* Which compiler settings to use during a build.

# Using Pre-built modules

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
    import initOpenCascade from "opencascade.js";

    initOpenCascade().then(oc => {
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

# Progress indicators and cancelling of long-running processes (user break)

Have a look at [progressIndicator.test.ts](/test/progressIndicator.test.ts) for a working example.

OpenCascade offers support for progress indicators and user breaks via the `Message_ProgressIndicator` base class. Specializations of this base class can be used in calls to certain methods (e.g. `BRepAlgoAPI_Fuse::BRepAlgoAPI_Fuse`) to report the progress of a long-running operation or to cancel it. Since OpenCascade requires the user to derive a custom class based on `Message_ProgressIndicator` (called `MyProgressIndicator` from here) which isn't currently supported by OpenCascade.js, using those features in OpenCascade.js requires creating a custom build.

When deriving your specialized `MyProgressIndicator` class, you have to override 1 - 3 methods.

**Show:** This method must be overriden, as it is a purely virtual method. It is called by OpenCascade internally, whenever there is an update to the value of the progress of the current operation.

**UserBreak:** This method can be overriden if required. It returns a boolean value, indicating if a long-running process should be cancelled. By default, it returns `false`.

**Reset:** This method can be overriden if required. It is called when a new long-running process is started.

## Step 1: Pull the latest Docker image

```sh
docker pull donalffons/opencascade.js
```

## Step 2: Create a custom build with the required bindings

The 3 methods mentioned above are marked as `protected` in the declaration of `Message_ProgressIndicator`. They need to be public to be accessible by Emscripten. In addition, we don't want to override OpenCascade.js' implementation of `Message_ProgressIndicator`. Therefore we derive a simple specialization named `Message_ProgressIndicator_JS` from `Message_ProgressIndicator`.

```cpp
struct Message_ProgressIndicator_JS : public Message_ProgressIndicator {
  using Message_ProgressIndicator::Show;
  using Message_ProgressIndicator::UserBreak;
  using Message_ProgressIndicator::Reset;
};
```

Later, we want to derive our own specialization from `Message_ProgressIndicator_JS`. Following [Emscripten's documentation](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html#deriving-from-c-classes-in-javascript) on that matter, we set up a wrapper (to allow overriding the mentioned methods from JavaScript) and the required bindings:

```cpp
struct Message_ProgressIndicator_JSWrapper : public wrapper<Message_ProgressIndicator_JS> {
  EMSCRIPTEN_WRAPPER(Message_ProgressIndicator_JSWrapper);
  void Show(const Message_ProgressScope& theScope, const Standard_Boolean isForce) {
    val valTheScope = val::object();
    valTheScope.set("current", &theScope);
    return call<void>("Show", valTheScope, isForce);
  }
  Standard_Boolean UserBreak() {
    return call<Standard_Boolean>("UserBreak");
  }
  void Reset() {
    return call<void>("Reset");
  }
};

EMSCRIPTEN_BINDINGS(Message_ProgressIndicator_JS) {
  class_<Message_ProgressIndicator_JS, base<Message_ProgressIndicator>>("Message_ProgressIndicator_JS")
    // Same bindings as Message_ProgressIndicator
    .class_function("get_type_name", &Message_ProgressIndicator_JS::get_type_name, allow_raw_pointers())
    .class_function("get_type_descriptor", &Message_ProgressIndicator_JS::get_type_descriptor, allow_raw_pointers())
    .function("DynamicType", &Message_ProgressIndicator_JS::DynamicType, allow_raw_pointers())
    .function("Start_1", select_overload<Message_ProgressRange(), Message_ProgressIndicator_JS>(&Message_ProgressIndicator_JS::Start), allow_raw_pointers())
    .class_function("Start_2", select_overload<Message_ProgressRange(const opencascade::handle<Message_ProgressIndicator> & theProgress)>(&Message_ProgressIndicator_JS::Start), allow_raw_pointers())
    .function("GetPosition", &Message_ProgressIndicator_JS::GetPosition, allow_raw_pointers())

    // Extra bindings for deriving a specialized class in JS
    .function("Show", &Message_ProgressIndicator_JS::Show, pure_virtual())
    .function("UserBreak", optional_override([](Message_ProgressIndicator_JS& self) {
      return self.Message_ProgressIndicator_JS::UserBreak();
    }))
    .function("Reset", optional_override([](Message_ProgressIndicator_JS& self) {
      return self.Message_ProgressIndicator_JS::Reset();
    }))
    .allow_subclass<Message_ProgressIndicator_JSWrapper>("Message_ProgressIndicator_JSWrapper")
  ;
}
```

Next, we throw all this code into a custom build definition and create our custom build.

## Step 3: Derive a specialization from `Message_ProgressIndicator_JS` and use it in JS

Again following [Emscripten's documentation](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html#extend-example), we create `MyProgressIndicator` as a specialization of `Message_ProgressIndicator_JS` (and therefore `Message_ProgressIndicator`) and implement our own logic for `Show`. We can then use it in certain OpenCascade API's like `BRepAlgoAPI_Fuse` in this example.

```js
const MyProgressIndicator = oc.Message_ProgressIndicator_JS.extend("Message_ProgressIndicator_JS", {
  Show: function (theScope, isForce) {
    console.log("Show", this.GetPosition());
  },
});
const p = new MyProgressIndicator();
const box1 = new oc.BRepPrimAPI_MakeBox_3(new oc.gp_Pnt_3(0, 0, 0), 2, 1, 1);
const box2 = new oc.BRepPrimAPI_MakeBox_3(new oc.gp_Pnt_3(1, 0, 0), 2, 1, 1);
const myBody = new oc.BRepAlgoAPI_Fuse_3(box1.Shape(), box2.Shape(), p.Start_1());
```

Note, how you can call `this.GetPosition()` from that method's body, i.e. `this` gives you access to the classes properties, as you would expect. This code gives the following output:

```
Show 0
Show 0.035
...
Show 0.9955000000000034
Show 1
```

# Multi-Threading

OpenCascade supports multi-threading for certain operations, e.g. when creating triangulations using `BRepMesh_IncrementalMesh`. OpenCascade.js offers support for these multi-threaded operations using Emscripten's `-pthread` flag. Currently, multi-threading is done by spawing multiple worker-threads, which can access the same memory using a `SharedArrayBuffer`. For security reasons, usage of this feature requires you to host your site in cross-origin isolated mode, as described [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer). Refer to the [Emscripten documentation](https://emscripten.org/docs/porting/pthreads.html) for more information.

By default, OpenCascade.js is distributed as a single-threaded JavaScript library via NPM and a Docker Image, which allows you to create single-threaded [custom builds](#creating-a-custom-build). For the multi-threaded version, currently only a Docker Image is distributed, which you can use to create multi-threaded custom builds.

The simplest way is to create a full build of the library:

```sh
docker run \
  -v $(pwd):/src \
  -u $(id -u):$(id -g) \
  donalffons/opencascade.js:multi-threaded \
  /opencascade.js/builds/opencascade.full.yml
```

This will output 3 files (as opposed to 2 when creating a single-threaded build) into the current folder: `openascade.full.js`, `opencascade.full.wasm` and `opencascade.worker.js`. The web worker will be used for spawning new threads. This file must be accessible at run-time and depending on your bundler and folder structure, you might have to define the file path at which it can be accessed when initializing OpenCascade.js using the optional `worker` property.

```js
import initOpenCascade from "opencascade.js";
import opencascade from "./openascade.full.js";
import opencascadeWasm from "./openascade.full.wasm";
// When building web-apps, you might want to import the worker to give your bundler a chance to hash the file name.
// import opencascadeWorker from "./openascade.full.worker.js";

initOpenCascade({
  mainJs: opencascade,
  mainWasm: opencascadeWasm,
  worker: "/path/to/opencascade.full.worker.js", // or pass opencascadeWorker (contain a string with the path to the worker)
}).then(oc => {
  // ready to use multi-threaded build
});
```

# Developer Documentation

The following flow-chart gives a broad overview of the steps performed by the build system.

```mermaid
flowchart TB
    subgraph DockerBuild
        direction TB
        DockerBuildA(Prepare Build Environment) --> DockerBuildB
        DockerBuildB(Apply Patches) --> DockerBuildC & DockerBuildE
        DockerBuildC(Generate Bindings) --> DockerBuildD
        DockerBuildD(Compile Bindings) --> DockerBuildF
        DockerBuildE(Compile Sources) --> DockerBuildF
        DockerBuildF(Pre-built sources and bindings)
    end
    subgraph DockerRun
        direction TB
        subgraph Prebuilt
            direction TB
            PrebuiltA(Pre-built sources and bindings)
        end
        subgraph AdditionalCppCode
            direction TB
            AdditionalCppCodeB(Generate Bindings) --> AdditionalCppCodeC
            AdditionalCppCodeC(Compile Bindings)
            AdditionalCppCodeD(Compile Sources)
        end
        subgraph AdditionalBindCode
            direction TB
            AdditionalBindCodeA(Compile)
        end
        AdditionalCppCode --> DockerRunA
        AdditionalBindCode --> DockerRunA
        Prebuilt --> DockerRunA
        DockerRunA(Select Bindings to Include) --> DockerRunB
        DockerRunB(Link) --> DockerRunC
        DockerRunC(Finished Build result)
    end
    DockerBuild --> DockerRun
```
