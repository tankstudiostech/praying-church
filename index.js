var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var md5 = require('md5');
var config = require('./config');
var person = require('./app/models/person');
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
    createPerson(function(result) {
        res.send(result.message); 
    });
});

var createPerson = function(cb) {
    var newguy = new person.Person('newemail', 'fname', 'lname');
    pgusers.createPerson(newguy, function(res) {
        if(res.err) return cb(res);
        console.log(res);
        cb({err: false, message: newguy.fullName() + ' has been created!'});    
    });
};

var server = app.listen(port);
console.log('Listening at port: ' + port);