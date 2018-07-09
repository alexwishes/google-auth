#!/bin/bash

if [ $# -gt 0 ]; then
    num=$1
else
    num=8
fi

node_modules/pm2/bin/pm2 delete googleAuth
node_modules/pm2/bin/pm2 start index.js -i $num --name googleAuth
