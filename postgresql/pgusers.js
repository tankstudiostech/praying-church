var pgwrapper = require('./pgwrapper');
var tableName = 'person';
var memberTableName = 'member';

exports.createPerson = function(person, cb) {
    var client = pgwrapper.createClient();
    
    client.connect(function(err) {
        if(err) return cb(err);
        
        exports.personExists(person, function(res) {
            if(res.err) return cb(res);
            if(res.personExists) return cb({err: true, message: 'Error creating a new person.  Person already exists.'});
            
            var personColumns = pgwrapper.createColumnString('email', 'fname', 'lname');
            var personValues = pgwrapper.createColumnString('\'' + person.email + '\'', '\'' + person.fname + '\'', '\'' + person.lname + '\'');
        
            var query = pgwrapper.createInsertQuery(tableName, personColumns, personValues);
            query += 'SELECT id FROM ' + tableName + ' where email=\'' + person.email +'\';';
            console.log(query);
        
            client.query(query, function(err, result) {
                if(err) return cb({err: true, message: err});
            
                console.log(result.rows[0].id);
                client.end();
                cb(result);
            });
        });
        
    });
};

exports.personExists = function(person, cb) {
    var client = pgwrapper.createClient();
    client.connect(function(err) {
        if(err) return cb({err: true, message: err});
        
        var query = 'SELECT EXISTS(SELECT 1 FROM ' + tableName + ' WHERE email=\'' + person.email + '\')';
        console.log(query);
        
        client.query(query, function(err, result) {
            if(err) {
                console.error('error determining if person exists', err);
                cb(err);
                return;
            }
            console.log(result);
            client.end();
            cb({err: false, personExists: result});
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