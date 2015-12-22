var express = require('express');
var app = express();
var db = require('./database.js');
app.get('/', function(req, res) {
    res.send('Hello World!'); 
});

var server = app.listen(process.env.PORT || 5000);