#!/bin/bash
while true; do
  PS3='Please enter your choice: '
  options=(
    "Build docker image with tag 'opencascade.js'"
    "Build opencascade.js in docker container (run option 1 before using this option)"
    "Start opencascade.js docker container with a terminal for development & debugging (run option 1 before using this option)"
    "Clear all caches"
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
        docker run --init -it \
          -v "$(pwd)/build/":"/opencascade/build/" \
          -v "$(pwd)/dist/":"/opencascade/dist/" \
          -v "$(pwd)/emscripten-cache/":"/emscripten/upstream/emscripten/cache/" \
          -v "$(pwd)/embind/":"/opencascade/embind/" \
          opencascade.js
        break
        ;;
      3)
        echo "Starting opencascade.js docker container with a terminal for development & debugging..."
        docker run --init -it \
          --entrypoint=/bin/bash \
          -v "$(pwd)/build/":"/opencascade/build/" \
          -v "$(pwd)/dist/":"/opencascade/dist/" \
          -v "$(pwd)/emscripten-cache/":"/emscripten/upstream/emscripten/cache/" \
          -v "$(pwd)/build/":"/opencascade/build/" \
          -v "$(pwd)/embind/":"/opencascade/embind/" \
          opencascade.js
        break
        ;;
      4)
        echo "Clearing all caches..."
        sudo rm build emscripten-cache -fr
        break
        ;;
      5)
        echo "Bye..."
        exit
        ;;
      *) echo "What's that?" >&2
    esac
  done
done
