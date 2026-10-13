cmake_minimum_required(VERSION 3.20)
project(ocjs_native_bench CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if(NOT CMAKE_BUILD_TYPE)
  set(CMAKE_BUILD_TYPE Release)
endif()

# OpenCASCADE_DIR must be passed in:
#   -DOpenCASCADE_DIR=<install-prefix>/lib/cmake/opencascade
find_package(OpenCASCADE REQUIRED CONFIG)

message(STATUS "OpenCASCADE version: ${OpenCASCADE_VERSION}")
message(STATUS "OpenCASCADE include dir: ${OpenCASCADE_INCLUDE_DIR}")
message(STATUS "OpenCASCADE library dir: ${OpenCASCADE_LIBRARY_DIR}")

add_executable(bench
  main.cpp
  samples.cpp
)

target_include_directories(bench PRIVATE ${OpenCASCADE_INCLUDE_DIR})
target_link_directories(bench PRIVATE ${OpenCASCADE_LIBRARY_DIR})

# Link only the libraries our 10 samples actually need (transitively pulls others).
target_link_libraries(bench PRIVATE
  TKernel
  TKMath
  TKBRep
  TKG2d
  TKG3d
  TKGeomBase
  TKGeomAlgo
  TKBO
  TKBool
  TKPrim
  TKTopAlgo
  TKShHealing
  TKFillet
  TKOffset
  TKMesh
)

target_compile_options(bench PRIVATE -O3 -fexceptions)
