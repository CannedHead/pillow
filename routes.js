var User = require('./models/landing.js');
var userPillowTalk  = require('./models/pillowClient.js');
var userPillowWorkshop  = require('./models/pillowClient.js');
var userPillowWorkshopRegister  = require('./models/registro.js');
var http = require('http');


module.exports = function(app) {

app.get('/', function(req, res) {
	res.render('index'); 
});

app.get('/pillow-talk', function(req, res) {
	res.render('landings/talk'); 
});

app.get('/pillow-workshop', function(req, res) {
	res.render('landings/workshop'); 
});


app.get('/pillow-workshop-registro', function(req, res) {
	res.render('landings/registro'); 
});

//---------------------- DB CRM ----------------------
app.get('/db', function(req, res) {
	res.render('db/login'); 
});

app.get('/db/dash', function(req, res) {
	res.render('db/dashboard'); 
});

app.get('/db/new', function(req, res) {
	res.render('db/new'); 
});




//---------------------- Camp Routes ----------------------
app.get('/imagine2014antioquia', function(req, res) {
	res.render('med'); 
});


app.get('/libertapp', function(req, res) {
    res.render('libertapp');
        
});


app.get('/tourist', function(req, res) {
    res.render('tourist',{
        title: 'tourist'
    });
});


app.get('/servicios', function(req, res) {
    res.render('servicios',{
        title: 'Servicios'
    });
});

app.get('/hv', function(req, res) {
    res.render('hv',{
        title: 'hv'
    });
});

app.get('/fly', function(req, res) {
    res.render('fly',{
        title: 'Fly'
    });
});


app.get('/sexxi', function(req, res) {
    res.render('sexxi',{
        title: 'sexxi'
    });
});

app.get('/pub', function(req, res) {
    res.render('pub',{
        title: 'pub'
    });
});

app.get('/cof', function(req, res) {
    res.render('cof',{
        title: 'cof'
    });
});

app.get('/jai', function(req, res) {
    res.render('jai',{
        title: 'jai'
    });
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




app.post('/registroWorkshop',function(req, res) {

	if (req.body.nombre === undefined) {
		console.log('missing parameter:nombre');
		return next("first_name not found")
	}

	if (req.body.apellido === undefined) {
		console.log('missing parameter:apellido');
		return next("apellido not found")
	}

	if (req.body.email === undefined ) {
		console.log('missing parameter:email');
		return next("email not found")
	}

	
	if (req.body.ejeComercial === undefined ) {
		console.log('missing parameter:ejeComercial');
		return next("ejeComercial not found")
	}
	if (req.body.subEje === undefined ) {
		console.log('missing parameter:subEje');
		return next("subEje not found")
	}
	if (req.body.origen === undefined ) {
		console.log('missing parameter:origen');
		return next("origen not found")
	}

	if (req.body.origen === undefined ) {
		console.log('missing parameter:origen');
		return next("status not found")
	}
	var user = new userPillowWorkshopRegister ({
		nombre:req.body.nombre,
		apellido:req.body.apellido,
		email:req.body.email,
		ejeComercial:req.body.ejeComercial,
		subEje:req.body.subEje,
		origen:req.body.origen,
		Status:req.body.Status

	});

	user.save(function(err) {
		if(!err) {
			console.log('New user has been created');		
			res.redirect('/pillow-workshop-registro');

		} else {
			console.log('ERROR: ' + err);
			res.redirect('/'); 
		}
	});		

});





app.post('/pillowTalk',function(req, res) {

	if (req.body.nombre === undefined) {
		console.log('missing parameter:nombre');
		return next("first_name not found")
	}

	if (req.body.apellido === undefined) {
		console.log('missing parameter:apellido');
		return next("apellido not found")
	}

	if (req.body.email === undefined ) {
		console.log('missing parameter:email');
		return next("email not found")
	}

	if (req.body.phone === undefined ) {
		console.log('missing parameter:phone');
		return next("phone not found")
	}
	if (req.body.ejeComercial === undefined ) {
		console.log('missing parameter:ejeComercial');
		return next("ejeComercial not found")
	}
	if (req.body.subEje === undefined ) {
		console.log('missing parameter:subEje');
		return next("subEje not found")
	}
	if (req.body.origen === undefined ) {
		console.log('missing parameter:origen');
		return next("origen not found")
	}

	if (req.body.origen === undefined ) {
		console.log('missing parameter:origen');
		return next("status not found")
	}

 	
	var user = new userPillowTalk({
		nombre:req.body.nombre,
		apellido:req.body.apellido,
		email:req.body.email,
		phone:req.body.phone,
		ejeComercial:req.body.ejeComercial,
		subEje:req.body.subEje,
		origen:req.body.origen,
		Status:req.body.Status

	});

	user.save(function(err) {
		if(!err) {
			console.log('New user has been created');		
			res.redirect("/pillow-talk");

		} else {
			console.log('ERROR: ' + err);
			res.redirect('/'); 
		}
	});		

});


app.post('/pillowWorkshop',function(req, res) {

	if (req.body.nombre === undefined) {
		console.log('missing parameter:nombre');
		return next("first_name not found")
	}

	if (req.body.apellido === undefined) {
		console.log('missing parameter:apellido');
		return next("apellido not found")
	}

	if (req.body.email === undefined ) {
		console.log('missing parameter:email');
		return next("email not found")
	}

	if (req.body.phone === undefined ) {
		console.log('missing parameter:phone');
		return next("phone not found")
	}
	if (req.body.ejeComercial === undefined ) {
		console.log('missing parameter:ejeComercial');
		return next("ejeComercial not found")
	}
	if (req.body.subEje === undefined ) {
		console.log('missing parameter:subEje');
		return next("subEje not found")
	}
	if (req.body.origen === undefined ) {
		console.log('missing parameter:origen');
		return next("origen not found")
	}

	if (req.body.origen === undefined ) {
		console.log('missing parameter:origen');
		return next("status not found")
	}

 	
	var user = new userPillowWorkshop({
		nombre:req.body.nombre,
		apellido:req.body.apellido,
		email:req.body.email,
		phone:req.body.phone,
		ejeComercial:req.body.ejeComercial,
		subEje:req.body.subEje,
		origen:req.body.origen,
		Status:req.body.Status

	});

	user.save(function(err) {
		if(!err) {
			console.log('New user has been created');		
			res.redirect("/pillow-workshop");

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




