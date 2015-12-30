var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var md5 = require('md5');
var config = require('.config/config');
var mongoose = require ('mongoose');
mongoose.connect(config.mongoCn);
var Person = require('./app/models/person');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();    
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/persons')
    .post(function(req, res) {
        var person = new Person();
        person.email = req.body.email;
        person.fname = req.body.fname;
        person.lname = req.body.lname;
        
        person.save(function(err) {
            if(err) res.send(err);
            
            res.json({message: 'Person created!'});
        })
    })
    .get(function(req, res) {
        Person.find(function(err, persons) {
            if(err) res.send(err);
            
            res.json(persons);
        })
    });

router.route('/persons/:personId')
    .get(function(req, res) {
        Person.findById(req.params.personId, function(err, person) {
            if(err) res.send(err);
            
            res.json(person);
        });  
    })
    .put(function(req, res) {
        Person.findById(req.params.personId, function(err, person) {
            if(err) res.send(err);
            
            person.email = req.body.email;
            person.fname = req.body.fname;
            person.lname = req.body.lname;
            
            person.save(function(err) {
                if(err) res.send(err);
                
                res.json({message: 'Person updated!'});
            });
        });
    })
    .delete(function(req, res) {
        Person.remove({
            _id: req.params.personId
        }, function(err, person) {
            if(err) res.send(err);
            
            res.json({message: 'Successfully deleted'})
        });
    });
    
app.use('/api', router);

app.listen(config.port);
console.log('Listening at port: ' + config.port);