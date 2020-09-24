# Changelog

## v1.0.0
* First version using Embind and automatically generated bindings.
* Lots of breaking changes in this version. Most notably:
** Overloaded methods and constructors are now fully supported (on all supported classes). Please have a look at the [conventions](embind/conventions.md) for details.
** Static methods have a slightly different interface. Before, you would call them via `openCascade.ClassName.prototype.staticMethod()`. Now, you call them via `openCascade.ClassName.staticMethod()`.
* Largely improved coverage of the OpenCascade API

## v0.1.19
* Last version with WebIDL bindings.
