FROM phusion/baseimage:bionic-1.0.0

CMD ["/sbin/my_init"]

RUN apt update -y
RUN apt install -y build-essential python3.8 python3-pip git cmake bash curl npm

RUN python3.8 -m pip install patch requests CppHeaderParser

WORKDIR /emscripten/
RUN git clone https://github.com/emscripten-core/emsdk.git .
RUN \
  ./emsdk install 2.0.4 && \
  ./emsdk activate 2.0.4

SHELL ["/bin/bash", "-c"]

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

RUN apt-get update -y && apt-get install -y libtinfo5

WORKDIR /opencascade/
COPY . .

RUN add-apt-repository ppa:ubuntu-toolchain-r/test
RUN apt update -y && apt upgrade -y && apt install -y gcc-10

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
ENV KILL_PROCESS_TIMEOUT=300
ENV KILL_ALL_PROCESSES_TIMEOUT=300

ENTRYPOINT \
  source /emscripten/emsdk_env.sh && \
  python3.8 make.py wasm
