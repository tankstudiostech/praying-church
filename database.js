var pg = require('pg');
var connString = process.env.DATABASE_URL;

var client = new pg.Client(connString);
client.connect();