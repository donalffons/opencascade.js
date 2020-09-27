#!/bin/bash

# 
case $1 in
  "test")
    yarn && yarn test
    ;;
  *) # build
    python3.8 make.py wasm
    ;;
esac
