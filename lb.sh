#!/bin/sh
yarn install
yarn build
lerna bootstrap
yarn dev