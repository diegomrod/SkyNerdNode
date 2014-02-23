(function () {
  function MainController () {}
  
  MainController.prototype.data = {
    "title" : "Home"
  };
  
  MainController.prototype.Index = function (req, res) {
    //var user_data = new Profile().getProfile(session.id); // Implementar
    //var Timeline = new TimelineController()				// Implementar
	//var posts = Timeline.buildFromList(session.user.id)	// Implementar
	
	res.render('public/feed.jade', this.data);
  };
  
  module.exports = MainController;
}).call(this);