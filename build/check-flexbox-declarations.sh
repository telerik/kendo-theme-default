#!/bin/bash

# Usage: check-flexbox-declarations directory

grep -ri 'flex:\s*[[:digit:]];' $1

if [ $? -eq 0 ]
then
  (>&2 echo -e "\n\\033[0;31mERROR: flexbox declarations listed above will fail in IE")
  exit 1
fi
