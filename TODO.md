# OpenCascade.js To-Do's

## 1. Examples and Tests

* Make custom build for examples on website - so that they work on older / weaker devices
* Allow interactive code editing on the home page
  * Either by building a simple "Playground" page using [monaco](https://microsoft.github.io/monaco-editor/)
  * Or by linking to example code using CodeSandbox / StackBlitz
* When the above step done, we can archive the examples repository
* Add more examples and / or tests

## 2. Starter Templates

* Create starter templates for different frameworks (ongoing)
* Add documentation page to website
* CI/CD so that starter templates are automatically updated and published
* Make starter templates downloadable from website

## 3. Community Project Section

* Add section about featured community projects?!
* Ask first if the community really wants / needs that (yet) or not

## 4. Explicit binding-tests / smoke-tests

* Add more smoke tests for binding generation (wip at /test/testBindings.test.ts)
* Also add smoke tests for typescript definitions (need to find a system that works)

## 5. Exception support

* Add support + bindings for exceptions

## 6. Straighten out support for reference types

* Passing objects as references is not consistent with passing built-in types, right now. The fix should be fairly easy and non-breaking.
* It is impossible to return references to built-in types, right now. Is there a way to avoid a breaking change?

## 7. Default values in bindings

* Add support for default values

## 8. More flexibility when defining custom build bindings in YAML files

* Currently, only "symbol: bla" is supported.
* Add support for regex
* Maybe support for inline python functions?!

## 9. TSDoc comments in typescript definitions

* Helpful in IDEs that support intellisense

## 10. Other

* Experiment with opencascade's built-in visualization and see if it works with Emscripten and if it's any good. Create example.
