console.log(':)');
var pg = require('pg');
var connString = process.env.DATABASE_URL;

var client = new pg.Client(connString);
client.connect(function(err) {
    if(err) return console.error('error running query', err);
    
    client.query('SELECT NOW() AS "theTime"', function(err, result) {
        if(err) return console.error('error running query', err);
        console.log(result.rows[0].theTime);
        client.end();
    });
});