var shafile = require('../index');
var test = require('tape');
var path = require('path');

test("can sha file",function(t){
  shafile(path.join(__dirname,"file.txt"),function(err,sha){
    t.equals(sha,'3339d9b3bb76598782087d9f037ac53e405d7433','sha should be correct');
    t.end();
  });
});
