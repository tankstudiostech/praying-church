var pg = require('pg');
var pgwrapper = require('../pgwrapper');
 
var client = pgwrapper.createClient();

client.connect(function(err) {
    if(err) return console.error('error running query', err);
    
    createPersonTablePromise(client).then(function() {
        return createMemberTablePromise(client);
    })
    .then(function() {
        console.log('User tables created successfully');  
    })
    .catch(function(error) {
        handleError(client);
    });
});

var createPersonTablePromise = function(client) {
    return new Promise(function(resolve, reject) {
        var tableName = 'person';
        var id = 'id SERIAL PRIMARY KEY NOT NULL';
        var email = 'email TEXT UNIQUE NOT NULL';
        var fname = 'fname TEXT NOT NULL';
        var lname = 'lname TEXT NOT NULL';
        
        var columns = pgwrapper.createColumnString(id, email, fname, lname);
        var query = pgwrapper.createCreateTableQuery(tableName, columns);
        
        client.query(query, function(err, result) {
            if(err) {
                console.error('Error creating person table', err);
                reject(Error(err));
            }
            else {
                resolve();
            }
        });
    });
};

var createMemberTablePromise = function(client) {
    return new Promise(function(resolve, reject) {
        var tableName = 'member';
        var id = 'id INT PRIMARY KEY NOT NULL REFERENCES person (id)';
        var role = 'role SMALLINT NOT NULL';
        var password = 'password TEXT NOT NULL';
        
        var columns = pgwrapper.createColumnString(id, role, password);
        var query = pgwrapper.createCreateTableQuery(tableName, columns);
        
        client.query(query, function(err, result) {
            if(err) {
                console.error('Error creating member table', err);
                reject(Error(err));
            }
            else {
                resolve();
            }
        });
    });  
};

var handleError = function(client) {
    client.end(); 
};