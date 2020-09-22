#!/bin/bash

source /emscripten/emsdk_env.sh

./patience.sh &
python3.8 make.py wasm > /dev/null 2>&1
echo "done."
