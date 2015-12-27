var pgwrapper = require('./pgwrapper');
var tableName = 'person';
var memberTableName = 'member';

exports.createPerson = function(person, cb) {
    var client = pgwrapper.createClient();
    
    client.connect(function(err) {
        if(err) return cb(err);
        
        exports.personExists(person, function(err, res) {
            if(err) return cb(err);
            if(res) return cb("Error creating a new person.  Person already exists.");
            var personColumns = pgwrapper.createColumnString('email', 'fname', 'lname');
            var personValues = pgwrapper.createColumnString('(\'' + person.email + '\',\'' + person.fname + '\',\'' + person.fname + '\')');
        
            var query = pgwrapper.createInsertQuery(tableName, personColumns, personValues);
            console.log(query);
        
            client.query(query, function(err, result) {
                if(err) return cb(err);
            
                console.log(result);
                client.end();
                cb(undefined, 'Query completed successfully');
            });
        });
        
    });
};

exports.personExists = function(person, cb) {
    var client = pgwrapper.createClient();
    
    client.connect(function(err) {
        return cb(err);
        
        var query = 'SELECT EXISTS(SELECT 1 FROM ' + tableName + 'WHERE email=' + person.email + ')';
        console.log(query);
        
        client.query(query, function(err, result) {
            if(err) {
                console.error('error determining if person exists', err);
                cb(err);
                return;
            }
            console.log(result);
            client.end();
            cb(undefined, result);
        });
    });
};

exports.createMember = function(member, cb) {
    var client = pgwrapper.createClient();
    
    client.connect(function(err) {
        return cb(err);
        
        if(memberExists) {
            
        }
        else {
            
        }
        
        var tableName = 'member';
        
        var personColumns
    });
};