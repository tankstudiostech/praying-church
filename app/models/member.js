
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
    email: String,
    fname: String,
    lname: String,
    pword: String,
    role: Number
});

module.exports = mongoose.model('Member', memberSchema);