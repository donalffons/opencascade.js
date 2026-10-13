#!/usr/bin/env bash
# Retain only the LLVM 17 headers consumed by the bindgen parse pass.

set -euo pipefail

llvm_dir="${1:-deps/llvm-17}"
test -d "$llvm_dir/include"
test -d "$llvm_dir/lib/clang/17/include"

find "$llvm_dir" -mindepth 1 -maxdepth 1 \
  ! -name include \
  ! -name lib \
  -exec rm -rf {} +
find "$llvm_dir/lib" -mindepth 1 -maxdepth 1 \
  ! -name clang \
  -exec rm -rf {} +
find "$llvm_dir/lib/clang" -mindepth 1 -maxdepth 1 \
  ! -name 17 \
  -exec rm -rf {} +
find "$llvm_dir/lib/clang/17" -mindepth 1 -maxdepth 1 \
  ! -name include \
  -exec rm -rf {} +
