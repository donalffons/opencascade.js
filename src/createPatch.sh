cd /occt/
rm -rf original/ || true
mkdir original
tar -xvf occt.tar.gz -C original/
cd /occt/original/occt-$OCCT_COMMIT_HASH/

diff -ruN /occt/original/occt-$OCCT_COMMIT_HASH/ /occt/occt-$OCCT_COMMIT_HASH/ > /opencascade.js/src_build/patches/newPatch.patch
