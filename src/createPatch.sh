OCCT_COMMIT_HASH=$(echo ${OCCT_COMMIT_HASH_FULL} | cut -c 1-7)
rm -rf /occt-original || true
mkdir /occt-original
cd /occt-original
tar -xvf /occt/occt.tar.gz -C .
mv /occt-original/occt-$OCCT_COMMIT_HASH/* .
mv /occt-original/occt-$OCCT_COMMIT_HASH/.* . || true

diff -ruN /occt-original/ /occt/ > /opencascade.js/src/patches/newPatch.patch
