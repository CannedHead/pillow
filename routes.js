var User = require('./models/landing.js');
var Taller = require('./models/taller.js');
var http = require('http');


module.exports = function(app) {

app.get('/', function(req, res) {
	res.render('index'); 
});

app.get('/Taller_oct4', function(req, res) {
	res.render('landing'); 
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


app.post('/taller',function(req, res) {

	if (req.body.nombre === undefined) {
		console.log('missing parameter:first_name');
		return next("first_name not found")
	}
	if (req.body.email === undefined ) {
		console.log('missing parameter:email');
		return next("email not found")
	}
 	if (req.body.phone === undefined ) {
		console.log('missing parameter:phone');
		return next("Phone not found")
	}


	var taller = new Taller({
		name:req.body.nombre,
		email:req.body.email,
		phone:req.body.phone
	});


	taller.save(function(err) {
		if(!err) {
			console.log('New userTaller has been created');		
			res.redirect('/Taller_oct4');

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




