var express = require('express');
var app = express();
var mongoose = require('mongoose');

//Load config files
var config = require(__dirname + '/config/config.json');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));
app.use(app.router);


/**
* Routes
*/
require('./routes')(app);



app.listen(app.get('port'));
console.log('Listening on port 3000');

//Initialize database: mongodb
mongoose.connect(config.connection, function(err, res) {
    if(err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});