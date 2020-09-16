These are sorted by priority (according to my gut feeling...)

# 1. Typescript & "Intellisense" Support

* Auto-Generate types for auto-generated bindings
* Allow for manual definitions of types for manually defined bindings
* Add comments to typescript definitions

# 2. Auto-Binding

* Investigate errors for currently disabled entities
* Auto-bind operators according to conventions.md
* Auto-generate for typedefs of template classes

# 3. Build System and Versioning

* Probably we should stop committing binaries to this repository or otherwise the file size will explode eventually...
* There must be a more clever way of doing this. Either use git-lfs or some other github- or npm-specific mechanism to distribute builds.

# 4. Modularization

* Emscripten supports wasm-modules. Wasm-modules are separate wasm-files that can be loaded dynamically at run-time to add desired functionality.
* As more and more parts of the opencascade library are exported, the file size will grow bigger and bigger. The size of all static library files of the optimized emscripten-compiled opencascade library (in the `build/build/lin32/clang/lib` folder) is currently 187.6 MiB. This is probably the rough order of magnitude for the emscripten-compiled wasm-version of the library. This is far too much for most web-applications.
* It should be possible to select which parts of opencascade to load at run-time of the web application. The library therefore has to be broken up into separate modules.
* Probably, it would be a good idea to have one module for each folder in `build/occt/src`.
* It would be great, if the user of this library could chose between debug and release version of the library.

# 5. ThreeJS-Integration

* Built-in ThreeJS integration would be super cool.
* That integration layer should be kept as thin and as flexible as possible.
* A flexible and powerful tessellation system would be a good starting point. Some first steps have already been done and are available in the examples repository.
* At some point, multi-threaded tessellation would be super cool.
* An integration with React-Three-Fiber would be extremely nice.

# General / Other

* tidy up make.py
* Experiment with opencascade's built-in visualization and see if it works with Emscripten and if it's any good. Create example.
* Auto-generate some kind of documentation, which parts of the OpenCascade API have been exposed. Maybe with some percentage-indication that gives potential users a feeling for how much of OpenCascade can be used via JavaScript. That shouldn't be too hard to implement using the autobind script...
