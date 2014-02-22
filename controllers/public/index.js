(function () {
  var path = require('path');
  
  function __require (controller) {
	return require(path.join(__dirname, controller));
  }
  
  module.exports = {
    MainController : __require('MainController.js')
  };
}).call(this);