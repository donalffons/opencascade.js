FROM ubuntu:18.04

RUN apt update -y
RUN apt install -y build-essential python3.8 python3-pip git cmake bash curl npm

RUN python3.8 -m pip install patch requests CppHeaderParser

WORKDIR /emscripten/
RUN git clone https://github.com/emscripten-core/emsdk.git .
RUN \
  ./emsdk install 2.0.1 && \
  ./emsdk activate 2.0.1

SHELL ["/bin/bash", "-c"]

RUN npm install -g yarn
ENV NVM_DIR /usr/local/nvm
RUN \
  mkdir -p /usr/local/nvm && \
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
ENV NODE_VERSION v10
RUN \
  source $NVM_DIR/nvm.sh && \
  nvm install $NODE_VERSION && \
  nvm use --delete-prefix $NODE_VERSION
ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH


WORKDIR /clang/
RUN python3.8 -m pip install -Iv clang==10.0.1
RUN apt-get update && apt-get install -y \
 xz-utils \
 curl \
 && rm -rf /var/lib/apt/lists/*
RUN curl -SL https://github.com/llvm/llvm-project/releases/download/llvmorg-10.0.0/clang+llvm-10.0.0-x86_64-linux-gnu-ubuntu-18.04.tar.xz \
 | tar -xJC . && \
 mv clang+llvm-10.0.0-x86_64-linux-gnu-ubuntu-18.04 clang_10 && \
 PATH=/clang/clang_10/bin:$PATH && \
 LD_LIBRARY_PATH=/clang/clang_10/lib:$LD_LIBRARY_PATH
RUN PATH=/clang/clang_10/lib:$PATH
RUN LD_LIBRARY_PATH=/clang/clang_10/lib:$LD_LIBRARY_PATHLD_LIBRARY_PATH
RUN \
  cd clang_10/lib && \
  ln -s libclang.so.10 libclang-10.so

WORKDIR /opencascade/
COPY . .

ENTRYPOINT \
  source /emscripten/emsdk_env.sh &&\
  # python3.8 make.py && \
  python3.8 make.py wasm && \
  yarn && yarn generateTypes