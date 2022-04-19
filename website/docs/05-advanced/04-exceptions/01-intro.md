---
sidebar_position: 1
---

# Intro

Exceptions are used in OpenCascade to handle certain types of errors. OpenCascade.js uses Emscripten's non-native exception implementation to allow JavaScript code to handle exceptions that were thrown from C++ / WebAssembly. Emscripten's non-native implementation is well supported on all major browsers and runtimes but comes with the drawback of greatly increased file size and a performance penalty. Native WebAssembly exceptions will improve this, but are not yet well supported in common browsers and runtimes.

:::info Check out the WebAssembly Roadmap...

...at [webassembly.org/roadmap](https://webassembly.org/roadmap/) to track the progress of new WebAssembly features.

:::
