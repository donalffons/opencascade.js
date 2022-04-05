---
sidebar_position: 1
---

# Workflow Overview

OpenCascade.js (as is OpenCascade) is a very large library and chances are that you don't need to ship the entirety of the library to your users when you're releasing your application. On the other hand, during development it is very handy to have the entire library available. Normally when developing JavaScript applications, bundlers are used that perform "tree shaking" to eliminate unused code. Unfortunately, tree shaking is not available for WebAssembly.

Instead, we encourage you to follow a 2-step development process.

## 1. Use the pre-built version of the library

As a starting point for your projects, you can use the pre-built version of the library, which is distributed via NPM. This version contains the entirety of the currently supported API surface and is therefore ideal for development, prototyping or applications that require access to the entire OpenCascade.js API.

However, this version comes with the drawback that it includes a lot of code that you might never use in your application. Still, this code has to be downloaded and compiled to each user's system architecture, using up bandwidth, memory and processing power (during instantiation / compilation).

## 2. Create custom builds for production

To solve the previously mentioned issues, this project provides a way to create custom builds. Custom builds allow you to define
* The parts of the OpenCascade library should be included.
* The parts of the API that you are using in your application (called bindings).
* Which compiler settings to use during a build.
