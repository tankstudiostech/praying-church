var Member = require('../models/member');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');
var md5 = require('md5');

module.exports = function(router) {
    router.post('/authenticate', function(req, res) {
        Member.findOne({
            email: req.body.email,
        }, function(err, member) {
           if(err) throw err;
            
            if(!member) {
                res.json({err: true, message: 'Authentication failed.  User not found.'});
            } else if(member.pword != md5(req.body.pword)) {
                res.json({err: true, message: 'Authentication failed.  Wrong password.'});
            } else {
                console.log(config.secret);
                var token = jwt.sign(member, config.secret, {
                    expiresIn: config.tokenExpiration
                });
                
                res.json({
                    err: false, message: 'Authentication successful!', token: token
                });
            }
        });
    });
    
    router.use(function(req, res, next) {
        if(config.bypassAuth) return next();
        
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        
        if(token) {
            jwt.verify(token, config.secret, function(err, decoded) {
                if(err) return res.json({err: true, message: 'Failed to authenticate token.'});
                else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(403).send({
                err: true, message: 'No token provided.'
            })
        }
    });
};