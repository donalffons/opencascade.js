# OpenCascade.js To-Do's

## 1. Typescript & "Intellisense" Support (non-breaking changes)

* Auto-Generate types for auto-generated bindings
* Allow for manual definitions of types for manually defined bindings
* Add comments to typescript definitions

## 2. Modularization / Dynamic Libraries (potentially breaking changes)

* Emscripten supports wasm-modules. Wasm-modules are separate wasm-files that can be loaded dynamically at run-time to add desired functionality.
* As more and more parts of the opencascade library are exported, the file size will grow bigger and bigger. The size of all static library files of the optimized emscripten-compiled opencascade library (in the `build/build/lin32/clang/lib` folder) is currently 187.6 MiB. This is probably the rough order of magnitude for the emscripten-compiled wasm-version of the library. This is far too much for most web-applications.
* To be able to use dynamic libraries, the initialization of the library (i.e. `new opencascade()`) must(?) take place in a web-worker. Using Emscripten`s `dynamicLibraries` array when initializing on the main-thread will result in an error in Chrome and probably all major browsers (maybe there is a workaround?). In most real-world applications, it would make sense to run openCascade computations in a separate worker-thread anyways. The additional complexity for setting this up should be kept at a minimum.
* It should be possible to select which parts of opencascade to load at run-time of the web application. The library therefore has to be broken up into separate modules.
* Probably, it would be a good idea to have one module for each folder in `build/occt/src`.
* It would be great, if the user of this library could chose between debug and release version of the library.
* Modularization will leed to smaller binaries, which will result in shorter build times per binary, which will hopefully bring the build system back to life.

## 3. Testing (non-breaking changes)

* Currently, there are no automatic tests in the library. There has already been [one reported issue](https://github.com/donalffons/opencascade.js/issues/11), in which Emscripten succesfully generated a WASM binary, which was unusable from JavaScript.
* It would be cool to run MakeBottle as a separate Github Action unit test (triggered on each commit etc.)

## 3. Auto-Binding (non-breaking changes)

* Investigate errors for currently disabled entities
* Auto-bind operators according to conventions.md
* Auto-generate for typedefs of template classes
* Look through `NCollection` module and generate auto-bindings for all entities inside.
* Make sure, the build system is not accidentally binding non-OpenCascade classes (e.g. from the `GL` folder)

## 4. Build System and Versioning (non-breaking changes)

* The build system is currently broken. The docker container running the build will become unresponsive and the gh-action builds will never succeed. However, the builds do finish successfully and generate perfectly usable binaries.
* Probably we should stop committing binaries to this repository or otherwise the file size will explode eventually...
* There must be a more clever way of doing this. Either use git-lfs or some other github- or npm-specific mechanism to distribute builds.

## 5. ThreeJS-Integration

* Built-in ThreeJS integration would be super cool.
* That integration layer should be kept as thin and as flexible as possible.
* A flexible and powerful tessellation system would be a good starting point. Some first steps have already been done and are available in the examples repository.
* At some point, multi-threaded tessellation would be super cool.
* An integration with React-Three-Fiber would be extremely nice.

## General / Other

* tidy up make.py
* Experiment with opencascade's built-in visualization and see if it works with Emscripten and if it's any good. Create example.
* Auto-generate some kind of documentation, which parts of the OpenCascade API have been exposed. Maybe with some percentage-indication that gives potential users a feeling for how much of OpenCascade can be used via JavaScript. That shouldn't be too hard to implement using the autobind script...
* Test with NodeJS runtime and write up some recommendations on how to use the library there.
