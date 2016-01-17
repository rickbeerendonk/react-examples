#!/bin/bash
# First:
# npm install

./node_modules/.bin/babel site/src/ --out-dir site/lib/ --watch --source-maps
