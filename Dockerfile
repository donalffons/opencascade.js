FROM emscripten/emsdk:2.0.4

RUN apt update -y
RUN apt install -y build-essential python3 python3-pip git cmake bash curl npm

WORKDIR /python/
RUN apt install -y build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl libbz2-dev
RUN curl -O https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tar.xz
RUN tar -xf Python-3.8.2.tar.xz
RUN \
  cd Python-3.8.2 && \
  ./configure --enable-optimizations && \
  make -j 12 && make altinstall

RUN python3.8 -m pip install patch requests

WORKDIR /clang/
RUN python3.8 -m pip install -Iv clang==10.0.1
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

RUN apt install -y libncurses5 libncurses6 libncurses5-dev libncursesw5-dev

RUN apt install -y git autoconf gperf libtool gettext autopoint pkg-config
WORKDIR /freetype/
RUN \
  git clone https://git.savannah.nongnu.org/git/freetype/freetype2.git .

WORKDIR /expat/
RUN \
  git clone https://github.com/libexpat/libexpat.git . && \
  git checkout R_2_2_10
WORKDIR /expat/expat/
RUN \
  ./buildconf.sh && \
  emconfigure ./configure --enable-static=yes --enable-shared=no && \
  emmake make

WORKDIR /fontconfig/
RUN \
  git clone https://gitlab.freedesktop.org/fontconfig/fontconfig.git .
RUN \
  CFLAGS="-D__linux__ -I/freetype/include" LDFLAGS="-s USE_FREETYPE=1" FREETYPE_CFLAGS=" " FREETYPE_LIBS=" " emconfigure ./autogen.sh --with-expat-includes=/expat/expat/lib/ --with-expat-lib=/expat/expat/lib/.libs/ --enable-static=yes --enable-shared=no && \
  emmake make

RUN apt install -y fontconfig

WORKDIR /opencascade/
COPY . .

ENTRYPOINT ["./run.sh"]
