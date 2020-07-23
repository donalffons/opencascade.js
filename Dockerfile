FROM ubuntu:18.04

RUN apt update -y
RUN apt install -y build-essential python2.7 python-pip git cmake bash
RUN pip install patch requests

WORKDIR /emscripten/
RUN git clone https://github.com/emscripten-core/emsdk.git .
RUN ./emsdk install 1.39.11 && \
    ./emsdk activate 1.39.11

WORKDIR /opencascade/

COPY . .

SHELL ["/bin/bash", "-c"]

ENTRYPOINT \
  source /emscripten/emsdk_env.sh &&\
  python2.7 make.py && \
  python2.7 make.py wasm
