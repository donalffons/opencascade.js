#!/bin/bash

# 
case $1 in
  "test")
    which node
    node --version
    which yarn
    yarn --version
    yarn && yarn test
    ;;
  *) # build
    python3.8 make.py wasm
    ;;
esac
