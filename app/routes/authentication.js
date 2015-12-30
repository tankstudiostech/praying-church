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
                res.json({err: true, message: 'Authentication failed.  User not found.'});
            } else if(false) {
                console.log(member.pword);
                console.log(req.body.pword);
                res.json({err: true, message: 'Authentication failed.  Wrong password.'});
            } else {
                console.log(config.secret);
                var token = jwt.sign(member, app.get(config.secret), {
                    expiresIn: 1440 * 60
                });
                
                res.json({
                    err: false, message: 'Authentication successful!', token: token
                });
            }
        });
    });
    
    router.use(function(req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        
        if(token) {
            jwt.verify(token, app.get(config.secret), function(err, decoded) {
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