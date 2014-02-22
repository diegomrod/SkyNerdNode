(function () {
  function MainController () {}
  
  MainController.prototype.Index = function (req, res) {
    res.end("Testando!");
  };
  
  module.exports = MainController;
}).call(this);