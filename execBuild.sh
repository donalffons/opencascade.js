#!/bin/bash

source /emscripten/emsdk_env.sh

./patience.sh &
python3.8 make.py wasm > /dev/null 2>&1
echo "done, killing everything"

ps aux | tail -n +2 | egrep -v "docker-init" | cut -b12-17 | xargs -t kill -9
