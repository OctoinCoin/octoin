#!/bin/bash

base_host="arm-linux-gnueabihf aarch64-linux-gnu x86_64-pc-linux-gnu i686-w64-mingw32 x86_64-w64-mingw32 x86_64-apple-darwin11"

if [[ "$#" -eq "0" || "$base_host" != *$1*  ]]
 then
    echo "Usage: $0 host-platform-triplet [flags]" 
    echo
    echo "   host-platform-triplet: "
    echo "   * arm-linux-gnueabihf   for   Linux ARM 32 bit  "
    echo "   * aarch64-linux-gnu     for   Linux ARM 64 bit  "
    echo "   * x86_64-pc-linux-gnu   for   Linux x86 64 bit  "
    echo "   * i686-w64-mingw32      for   Win32  "
    echo "   * x86_64-w64-mingw32    for   Win64  "
    echo "   * x86_64-apple-darwin11 for   MacOSX "

    exit 1 
fi

HOST=$1

cd ./depends/
make HOST=$HOST -j$nproc
cd ..

if [ `ls ./depends/translations | wc -l` -eq 0 ]; then
	mkdir ./depends/translations
	cp ./depends/$HOST/translations/qt_*.qm ./depends/translations
	cp ./depends/$HOST/translations/qtbase_*.qm ./depends/translations
fi

shift
./configure --prefix=`pwd`/depends/$HOST $@ --enable-qt-translations
make clean

echo 
echo "Done, use the \"make\" command to build the project." 

exit 0
