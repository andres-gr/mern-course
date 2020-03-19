#/bin/bash

echo "Updating generated files..."

files=$(find $PWD/src/api-v1 -name '*.ts' -type f)

for file in $files; do
  perl -pi -e 'print "/* eslint-disable */\n" if $. == 1' $file
  perl -pi -e 'print "// \@ts-nocheck\n" if $. == 1' $file
done

echo "Done!"

exit 0
