'use strict';

var sax = require('sax');

module.exports = function(html, cb) {
  var parser = sax.parser(false);
  var tree = {};
  var currentKey = [];
  
  parser.onopentag = function(node) {
    if (node.isSelfClosing) return;
    currentKey.push(node.name.toLowerCase());
    tree[currentKey.join('|')] = 'open';
  };

  parser.onclosetag = function(node) {
    tree[currentKey.join('|')] = 'closed';
    currentKey = [];
  };

  parser.onend = function() {
    var leftOpen = 0;
    for (var key in tree) {
      if (tree[key] == 'open') {
        var el = key.split('|').pop();
        html += '</'+el+'>';
        leftOpen++;
      };
    };
    cb(null, html, leftOpen);
  };

  parser.write(html).close();
};
