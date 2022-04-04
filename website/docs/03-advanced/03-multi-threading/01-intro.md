---
sidebar_position: 1
---

# Intro

OpenCascade supports multi-threading for certain operations, e.g. when creating triangulations using `BRepMesh_IncrementalMesh`. OpenCascade.js offers support for these multi-threaded operations using Emscripten's `-pthread` flag. Currently, multi-threading is done by spawing multiple worker-threads, which can access the same memory using a `SharedArrayBuffer`. For security reasons, usage of this feature requires you to host your site in cross-origin isolated mode, as described [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer). Refer to the [Emscripten documentation](https://emscripten.org/docs/porting/pthreads.html) for more information.

By default, OpenCascade.js is distributed as a single-threaded JavaScript library via NPM and a Docker Image, which allows you to create single-threaded [custom builds](#creating-a-custom-build). For the multi-threaded version, currently only a Docker Image is distributed, which you can use to create multi-threaded custom builds.
