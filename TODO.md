# OpenCascade.js To-Do's

## 1. Testing (non-breaking changes)

* Add tests + examples
  * Bottle example
  * Polygon
  * STEP loading
  * GLTF export
  * references to built-in types
  * Multithreaded tessellation, usage of Message_ProgressRange

## 2. Examples

* Show some love to the examples, simplify, cleanup
* Remove custom tessellation code, instead export to GLTF
* Integrate them into the main repository

## 3. Documentation
* [Let's make a website!](https://github.com/donalffons/opencascade.js/pull/102)
  * Use typedoc to create a reference documentation
  * Add starter templates
  * Add page about featured community projects
* Add `tsdoc` comments, extracted from OpenCascade sources

## 4. Improve Bindings

* Add support for references to built-ins as return types, as mentioned [here](https://github.com/donalffons/opencascade.js/issues/94#issuecomment-1008318474)
* Add support for default values

## 5. Other

* Experiment with opencascade's built-in visualization and see if it works with Emscripten and if it's any good. Create example.
