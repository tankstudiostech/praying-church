var Member = require('../models/member');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');
var md5 = require('md5');

module.exports = function(router, app) {
    
    router.post('/authenticate', function(req, res) {
        Member.findOne({
            email: req.body.email,
        }, function(err, member) {
           if(err) throw err;
            
            if(!member) {
                res.json({success: false, message: 'Authentication failed.  User not found.'});
            } else if(member.pword != md5(req.body.pword)) {
                res.json({success: false, message: 'Authentication failed.  Wrong password.'});
            } else {
                var token = jwt.sign(member, app.get(config.secret), {
                    expiresInMinutes: 1440
                });
                
                res.json({
                    success: true, message: 'Authentication successful!', token: token
                });
            }
        });
    });
};