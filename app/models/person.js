
exports.Person = function(email, fname, lname)
{
    this.email = email;
    this.fname = fname;
    this.lname = lname;
    this.fullName = function() {
        return this.fname + ' ' + this.lname;  
    }
};

exports.Member = function(email, fname, lname, pword, role) {
    this.email = email;
    this.fname = fname;
    this.lname = lname;
    this.password = pword;
    this.role = role;
}

exports.Member.__proto__ = exports.Person;