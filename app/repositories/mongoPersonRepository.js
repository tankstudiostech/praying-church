var personObjects = require('../models/person');
var MongoClient = require('mongodb').MongoClient;
var config = require('../../config');
var url = config.mongoCn;

var db = null;

MongoClient.connect(url, function(err, database) {
    if(err) {
        console.log('Could not connect to mongo db instance at url: ' + url +
        '. Shutting down.');
        process.exit();
    }
    db = database;
});

exports.createPerson = function(person, cb) {
    db.collection('persons').insertOne(person, function(err, result) {
        if(err) return cb({err: true, message: err});
        cb({err: false, result: result});
    });
};

exports.findByEmail = function(email, cb) {
    db.collection('persons').findOne( {'email': email}, function(err, res) {
        if(err) return cb({err: true, message: err});
        if(!res) return cb({err: true, message: 'Could not find person with email \'' + email + '\'.'});
        else cb(res);
    });
};

exports.updatePerson = function(person, cb) {
    exports.findByEmail(person.eamil, function(res) {
        if(res.err) cb(res);
    });
};