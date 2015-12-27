var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var md5 = require('md5');
var config = require('./config');
var user = require('./app/models/user');
var pgusers = require('./postgresql/pgusers');
var port = process.env.PORT || 5000;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

//var db = require('./database.js');
app.get('/', function(req, res) {
    res.send('Hello World! You are awesome!'); 
});

app.get('/createuser', function(req, res) {
    createUser(function(err, message) {
       if(err) res.send(err);
       else res.send(message); 
    });
});

var createUser = function(cb) {
    var newguy = new user.User('email', 'fname', 'lname', md5('pword'));
    pgusers.insert(newguy, function(err, res) {
        if(err) return cb(err);
        cb(undefined, newguy.fullName() + ' has been created!');    
    });
};

var server = app.listen(port);
console.log('Listening at port: ' + port);