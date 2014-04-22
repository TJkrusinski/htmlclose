'use strict';

var assert = require('assert');
var htmlclose = require('..');
var longhtml = require('fs').readFileSync(__dirname+'/foo.html').toString();

describe('htmlclose()', function(){
  it('closes open html tags in a string', function(d){
    var html = '<div class="foo"><span>this is a div</span>';
    htmlclose(html, function(err, str){
      assert.equal(err, null);
      assert.equal(str, '<div class="foo"><span>this is a div</span></div>'); 
      d();
    });
  });
});

describe('htmlclose()', function(){
  it('closes open html tags in a string', function(d){
    htmlclose(longhtml, function(err, str, open){
      assert.equal(err, null);
      assert.equal(open, 1);
      d();
    });
  });
});
