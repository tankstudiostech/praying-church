
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    email: String,
    fname: String,
    lname: String,
    pword: String
});

module.exports = mongoose.model('Member', MemberSchema);