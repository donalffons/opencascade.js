# OpenCascade.js To-Do's

## 1. Typescript & "Intellisense" Support (non-breaking changes)

* Auto-Generate types for auto-generated bindings
* Allow for manual definitions of types for manually defined bindings
* Add comments to typescript definitions

## 2. Testing (non-breaking changes)

* Currently, there are no automatic tests in the library. There has already been [one reported issue](https://github.com/donalffons/opencascade.js/issues/11), in which Emscripten succesfully generated a WASM binary, which was unusable from JavaScript.
* It would be cool to run MakeBottle as a separate Github Action unit test (triggered on each commit etc.)

## 3. Auto-Binding (non-breaking changes)

* Investigate errors for currently disabled entities
* Auto-bind operators according to conventions.md
* Auto-generate for typedefs of template classes

## 4. ThreeJS-Integration

* Better ThreeJS integration would be super cool.
* A flexible and powerful tessellation system would be a good starting point. Some first steps have already been done and are available in the examples repository.
* `RWGltf_CafWriter` could be a good candidate for performing tessellation. A drawback seems to be that it tends to produce many distinct parts which lead to performance issues in ThreeJS.
* At some point, multi-threaded tessellation would be super cool.
* An integration with React-Three-Fiber would be extremely nice.

## 5. General / Other

* Experiment with opencascade's built-in visualization and see if it works with Emscripten and if it's any good. Create example.
* Auto-generate some kind of documentation, which parts of the OpenCascade API have been exposed. Maybe with some percentage-indication that gives potential users a feeling for how much of OpenCascade can be used via JavaScript. That shouldn't be too hard to implement using the autobind script...
* Test with NodeJS runtime and write up some recommendations on how to use the library there.
