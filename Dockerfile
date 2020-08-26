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

WORKDIR /opencascade/

COPY . .

ENTRYPOINT \
  source /emscripten/emsdk_env.sh &&\
  python3.8 make.py && \
  python3.8 make.py wasm && \
  yarn && yarn generateTypes