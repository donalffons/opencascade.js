#!/bin/bash
while true; do
  PS3='Please enter your choice: '
  options=(
    "Build docker image with tag 'opencascade.js'"
    "Build opencascade.js in docker container (run option 1 before using this option)"
    "Run tests (run option 1 before using this option)"
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
        docker run --init -it \
          -v "$(pwd)/dist/":"/opencascade.js/dist/" \
          -v "$(pwd)/src/":"/opencascade.js/src/" \
          -v "$(pwd)/build/":"/opencascade.js/build/" \
          opencascade.js build
        break
        ;;
      3)
        echo "Running tests for opencascade.js..."
        docker run --init -it \
          -v "$(pwd)/dist/":"/opencascade.js/dist/" \
          -v "$(pwd)/src/":"/opencascade.js/src/" \
          -v "$(pwd)/build/":"/opencascade.js/build/" \
          opencascade.js test
        break
        ;;
      4)
        echo "Starting opencascade.js docker container with a terminal for development & debugging..."
        docker run --init -it \
          --entrypoint=/bin/bash \
          -v "$(pwd)/dist/":"/opencascade.js/dist/" \
          -v "$(pwd)/src/":"/opencascade.js/src/" \
          -v "$(pwd)/build/":"/opencascade.js/build/" \
          opencascade.js
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
