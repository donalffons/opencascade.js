cd /occt/
rm -rf original/ || true
mkdir original
tar -xvf occt.tar.gz -C original/
cd /occt/original/occt-628c021/

diff -ruN /occt/original/occt-628c021/ /occt/occt-628c021/ > /opencascade.js/src_build/patches/newPatch.patch
