var assert = require('assert');
describe('react-fcctest', function() {
  it('should check for fCC Test Suite script', function() {
    var url = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    if (!url) {
      var scripts = document.getElementsByTagName('script');
      for (var i = scripts.length; i--;) {
          if (scripts[i].src == url) return true;
      }
      return false;
    };
  });
});