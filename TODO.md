# OpenCascade.js To-Do's

## 1. AdditionalCppCode

* not specifying additionalCppCode should give you the default tools from opencascade.full.yml

## 2. Improve Bindings

* Passing objects as references is not consistent with passing built-in types, right now. The fix should be fairly easy and non-breaking.
* It is impossible to return references to built-in types, right now. Is there a way to avoid a breaking change?
* If a function takes a c-style string as a parameter, currently we wrap this into a std::string instead, because that is compatible with Embind. However, certain APIs like STEPCAFControl_Writer::Transfer behave differently if the c-style string is a null pointer. Currently, that case cannot be covered with the current bindings.

## 3. Examples and Tests

* Allow interactive code editing on the home page
  * Either by building a simple "Playground" page using [monaco](https://microsoft.github.io/monaco-editor/)
  * Or by linking to example code using CodeSandbox / StackBlitz
* When the above step done, we can archive the examples repository
* Add more examples and / or tests

## 4. Starter Templates

* Create starter templates for different frameworks (ongoing)
* Add documentation page to website
* CI/CD so that starter templates are automatically updated and published
* Make starter templates downloadable from website

## 5. Community Project Section

* Add section about featured community projects?!
* Ask first if the community really wants / needs that (yet) or not

## 6. Default values in bindings

* Add support for default values

## 7. More flexibility when defining custom build bindings in YAML files

* Currently, only "symbol: bla" is supported.
* Add support for regex
* Maybe support for inline python functions?!

## 8. TSDoc comments in typescript definitions

* Helpful in IDEs that support intellisense

## 9. Other

* Experiment with opencascade's built-in visualization and see if it works with Emscripten and if it's any good. Create example.
