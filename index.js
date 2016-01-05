var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config/config');
var mongoose = require ('mongoose');
mongoose.connect(config.mongoCn);

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

var router = express.Router();

require('./app/routes/authentication.js')(router);
require('./app/routes/member.js')(router);

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();    
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.use(express.static('node_modules'));
app.use(express.static('public'));

app.listen(config.port);
console.log('Listening at port: ' + config.port);