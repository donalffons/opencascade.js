#!/bin/bash
while true; do
  PS3='Please enter your choice: '
  options=(
    "Build docker image with tag 'opencascade.js'"
    "Build opencascade.js in docker container (run option 1 before using this option)"
    "Start opencascade.js docker container with a terminal for development & debugging (run option 1 before using this option)"
    "Quit"
  )

  select opt in "${options[@]}"; do
    case $REPLY in
      1)
        echo "Building docker image with tag 'opencascade.js'..."
        docker build . -t opencascade.js
        break
        ;;
      2)
        echo "Building opencascade.js in docker container..."
        docker run -it \
          -v "$(pwd)/build/":"/opencascade/build/" \
          -v "$(pwd)/node_modules/":"/opencascade/node_modules/" \
          -v "$(pwd)/dist/":"/opencascade/dist/" \
          -v "$(pwd)/emscripten-cache/":"/emscripten/upstream/emscripten/cache/" \
          -v "$(pwd)/build/":"/opencascade/build/" \
          -v "$(pwd)/embind/":"/opencascade/embind/" \
          opencascade.js
        break
        ;;
      3)
        echo "Starting opencascade.js docker container with a terminal for development & debugging..."
        docker run -it \
          --entrypoint=/bin/bash \
          -v "$(pwd)/build/":"/opencascade/build/" \
          -v "$(pwd)/node_modules/":"/opencascade/node_modules/" \
          -v "$(pwd)/dist/":"/opencascade/dist/" \
          -v "$(pwd)/emscripten-cache/":"/emscripten/upstream/emscripten/cache/" \
          -v "$(pwd)/build/":"/opencascade/build/" \
          -v "$(pwd)/embind/":"/opencascade/embind/" \
          opencascade.js
        break
        ;;
      4)
        echo "Bye..."
        exit
        ;;
      *) echo "What's that?" >&2
    esac
  done
done
