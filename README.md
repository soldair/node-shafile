
[![Build Status](https://secure.travis-ci.org/soldair/node-shafile.png)](http://travis-ci.org/soldair/node-shafile)

shafile
=======

async sha file.

i got tired of writing this in different places.

```js

var shafile = require('shafile')';

shafile('/path/to/file',function(err,shasumhex){
  console.log(shasumhex);
  // prints something like 691e7f544180e5e8fd5f66e33d81ce029ed32d8a
});

```
