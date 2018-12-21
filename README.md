# find-file-recursively-up
[![Build Status](https://travis-ci.com/mateodelnorte/find-file-recursively-up.svg?branch=master)](https://travis-ci.com/mateodelnorte/find-file-recursively-up)

returns the path at which a provided filename exists, checking the current directory and any parent folders recursively up. 

## Usage
```
const find = require('find-file-recursively-up');

find('.meta', (err, foundPath) {
  // returns null '/Users/mateodelnorte/development/meta/.meta'
});
```
Yields undefined if no file found on path to /:
```
> DEBUG="*" node
 require('find-file-recursively-up')('.metaasdf', console.log)

  loop:find-file-recursively-up looking for .metaasdf at /Users/mateodelnorte/development/meta/plugins/loop-things/.metaasdf +0ms
  loop:find-file-recursively-up looking for .metaasdf at /Users/mateodelnorte/development/meta/plugins/.metaasdf +1ms
  loop:find-file-recursively-up looking for .metaasdf at /Users/mateodelnorte/development/meta/.metaasdf +1ms
  loop:find-file-recursively-up looking for .metaasdf at /Users/mateodelnorte/development/.metaasdf +0ms
  loop:find-file-recursively-up looking for .metaasdf at /Users/mateodelnorte/.metaasdf +0ms
  loop:find-file-recursively-up looking for .metaasdf at /Users/.metaasdf +0ms
  loop:find-file-recursively-up looking for .metaasdf at /.metaasdf +0ms

undefined
```