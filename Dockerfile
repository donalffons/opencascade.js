FROM emscripten/emsdk:2.0.10

RUN apt update -y
RUN apt install -y build-essential python3 python-pip git cmake bash curl npm

WORKDIR /python/
RUN \
  apt install -y \
    build-essential \
    zlib1g-dev \
    libncurses5-dev \
    libgdbm-dev \
    libnss3-dev \
    libssl-dev \
    libsqlite3-dev \
    libreadline-dev \
    libffi-dev \
    curl \
    libbz2-dev \
    python3-setuptools

WORKDIR /clang/
RUN curl -SL https://github.com/llvm/llvm-project/releases/download/llvmorg-11.0.0/clang+llvm-11.0.0-x86_64-linux-gnu-ubuntu-20.04.tar.xz \
 | tar -xJC . && \
 mv clang+llvm-11.0.0-x86_64-linux-gnu-ubuntu-20.04 clang_11 && \
 PATH=/clang/clang_11/bin:$PATH && \
 LD_LIBRARY_PATH=/clang/clang_11/lib:$LD_LIBRARY_PATH
RUN PATH=/clang/clang_11/lib:$PATH
RUN LD_LIBRARY_PATH=/clang/clang_11/lib:$LD_LIBRARY_PATHLD_LIBRARY_PATH
RUN \
  cd clang_11/lib && \
  ln -s libclang.so.11 libclang-11.so

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

RUN \
  apt install -y gnupg && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt update && apt install -y yarn

# WORKDIR /vtk/
# RUN \
#   git clone https://gitlab.kitware.com/vtk/vtk.git . && \
#   git submodule update --init --recursive && \
#   mkdir build && \
#   cd build && \
#   emcmake cmake \
#     -DBUILD_SHARED_LIBS:BOOL=OFF \
#     -DCMAKE_BUILD_TYPE:STRING=Release \
#     -DVTK_ENABLE_LOGGING:BOOL=OFF \
#     -DVTK_ENABLE_WRAPPING:BOOL=OFF \
#     -DVTK_LEGACY_REMOVE:BOOL=ON \
#     -DVTK_OPENGL_USE_GLES:BOOL=ON \
#     -DVTK_USE_SDL2:BOOL=ON \
#     -DVTK_NO_PLATFORM_SOCKETS:BOOL=ON \
#     -DVTK_MODULE_ENABLE_VTK_hdf5:STRING=NO \
#     .. \
#     && \
#   emmake make -j12

# WORKDIR /glfw/
# RUN \
#   apt install -y libx11-dev libxcursor-dev libxrandr-dev libxinerama-dev libxi-dev && \
#   git clone https://github.com/glfw/glfw.git . && \
#   sed -i 's/find_package(X11 REQUIRED)//g' CMakeLists.txt && \
#   mkdir build && \
#   cd build && \
#   emcmake cmake \
#     -DX11_Xrandr_INCLUDE_PATH=" " \
#     -DX11_Xinerama_INCLUDE_PATH=" " \
#     -DX11_Xkb_INCLUDE_PATH=" " \
#     -DX11_Xcursor_INCLUDE_PATH=" " \
#     -DX11_Xi_INCLUDE_PATH=" " \
#     -DX11_Xshape_INCLUDE_PATH=" " \
#     -DBUILD_SHARED_LIBS=OFF \
#     -DGLFW_BUILD_EXAMPLES=OFF \
#     -DGLFW_BUILD_TESTS=OFF \
#     -DGLFW_BUILD_DOCS=OFF \
#     -DGLFW_VULKAN_STATIC=OFF \
#     .. && \
#   cp /usr/include/X11 /emsdk/upstream/emscripten/system/include -r && \
#   emmake make

WORKDIR /rapidjson/
RUN \
  git clone https://github.com/Tencent/rapidjson.git .

WORKDIR /occt/
RUN \
  curl "https://git.dev.opencascade.org/gitweb/?p=occt.git;a=snapshot;h=628c0211d53c7fe1036a85e7a7b2b067c9c50f7a;sf=tgz" -o occt.tar.gz && \
  tar -xvf occt.tar.gz && \
  cd occt-628c021/

RUN \
  curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash && \
  apt-get install git-lfs && \
  git lfs install

RUN \
  apt remove libgcc-8-dev -y && \
  echo "deb http://ftp.us.debian.org/debian testing main contrib non-free" >> /etc/apt/sources.list && \
  apt update -y && \
  apt install build-essential -y && \
  pip3 install clang

RUN \
  mkdir /opencascade.js/ && \
  mkdir /opencascade.js/build/
WORKDIR /opencascade.js/src/

ENTRYPOINT [ "./main.py" ]
