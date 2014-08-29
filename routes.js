var User = require('./models/landing.js');
var http = require('http');

module.exports = function(app) {

app.get('/', function(req, res) {
	res.render('index'); 
});

app.post('/contact',function(req, res) {

	if (req.body.nombre === undefined) {
		console.log('missing parameter:first_name');
		return next("first_name not found")
	}
	if (req.body.email === undefined ) {
		console.log('missing parameter:email');
		return next("email not found")
	}
 	
	var user = new User({
		name:req.body.nombre,
		email:req.body.email

	});

	user.save(function(err) {
		if(!err) {
			console.log('New user has been created');		
			res.redirect("https://db.tt/G2kFpAIr");
			res.redirect('/');

		} else {
			console.log('ERROR: ' + err);
			res.redirect('/'); 
		}
	});		

});

app.get('*', function(req, res) {
	res.render('404'); 

});


}