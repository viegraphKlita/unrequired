var getUsed = require('./get-used.js');
var getAll = require('./get-all.js');

//
const unrequired = function(input) {
  var all = getAll(input);
  var used = getUsed(input);

  //turn used into a key-value lookup
  var lookup = used.reduce(function(h, str) {
    h[str] = true;
    return h;
  }, {});

  var diff = all.filter(function(str) {
    return lookup[str] !== true;
  });

  return {
    all: all,
    used: used,
    unused: diff
  }
}
module.exports = unrequired
