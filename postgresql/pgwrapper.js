var config = require('../config');
var pg = require('pg');

exports.createClient = function() {
    return new pg.Client(config.pgConnString);   
};

exports.createColumnString = function() {
    var columns = '(';
    for(var i in arguments) {
        columns += arguments[i] + ',';
    }
    //Removes trailing and leading commas
    columns = columns.replace(/(^,)|(,$)/g, "");
    columns += ')';
    return columns;
};

exports.createCreateTableQuery = function(tableName, columnString) {
    var query = 'CREATE TABLE ' + tableName + ' ' + columnString + ';';
    return query;
};

exports.createInsertQuery = function(tableName, columnString, valueString) {
    var query = 'INSERT INTO ' + tableName + ' ' + columnString + ' VALUES ' + valueString + ';';
    return query;  
};