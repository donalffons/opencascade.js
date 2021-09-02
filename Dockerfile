FROM emscripten/emsdk:2.0.29

RUN \
  apt update -y && \
  apt install -y \
    bash \
    build-essential \
    cmake \
    curl \
    git \
    libffi-dev \
    libgdbm-dev \
    libncurses5-dev \
    libnss3-dev \
    libreadline-dev \
    libsqlite3-dev \
    libssl-dev \
    libbz2-dev \
    npm \
    python3 \
    python3-pip \
    python3-setuptools \
    zlib1g-dev

RUN pip install libclang

WORKDIR /rapidjson/
RUN \
  git clone https://github.com/Tencent/rapidjson.git .

ENV OCCT_COMMIT_HASH_FULL fecb042498514186bd37fa621cdcf09eb61899a3
ENV OCCT_COMMIT_HASH fecb042
WORKDIR /occt/
RUN \
  curl "https://git.dev.opencascade.org/gitweb/?p=occt.git;a=snapshot;h=${OCCT_COMMIT_HASH_FULL};sf=tgz" -o occt.tar.gz && \
  tar -xvf occt.tar.gz

RUN \
  mkdir /opencascade.js/ && \
  mkdir /opencascade.js/build/ && \
  mkdir /opencascade.js/dist/

WORKDIR /opencascade.js/
COPY src ./src

RUN /opencascade.js/src/applyPatches.py
RUN /opencascade.js/src/compileSources.py
RUN /opencascade.js/src/generateBindings.py
RUN /opencascade.js/src/compileBindings.py

RUN \
  chmod -R 777 /opencascade.js/ && \
  chmod -R 777 /occt

WORKDIR /src/

ENTRYPOINT [ "/opencascade.js/src/run.sh" ]
