var Member = require('../models/member');
var md5 = require('md5');

module.exports = function(router) {
    router.route('/members')
    .post(function(req, res) {
        var member = new Member();
        
        member = updateMemberFromReq(member, req);
        
        memberExists(member, function(existsRes) {
            console.log(existsRes);
            if(existsRes.err) return res.json(existsRes);
            if(existsRes.result) return res.json({err: true, message: 'A member already exists with the email ' + member.email});
        
            member.save(function(err) {
                if(err) res.json({err: true, message: err});
                
                res.json({err: false, message: 'Member created!'});
            });
        });
    })
    .get(function(req, res) {
        Member.find(function(err, members) {
            if(err) res.json({err: true, message: err});
            
            res.json({err: false, members: members});
        })
    });

router.route('/members/:memberId')
    .get(function(req, res) {
        Member.findById(req.params.memberId, function(err, member) {
            if(err) res.json({err: true, message: err});
            if(!member) res.json({err: true, message: 'Could not find member by id ' + req.params.memberId});
            
            res.json({err: false, member: member});
        });  
    })
    .put(function(req, res) {
        Member.findById(req.params.memberId, function(err, member) {
            if(err) res.json({err: true, message: err});
            if(!member) res.json({err: true, message: 'Could not find member by id ' + req.params.memberId});
            
            member = updateMemberFromReq(member, req);
            
            member.save(function(err) {
                if(err) res.json({err: true, message: err});
                
                res.json({err: false, message: 'Member updated!'});
            });
        });
    })
    .delete(function(req, res) {
        Member.remove({
            _id: req.params.memberId
        }, function(err, member) {
            if(err) res.json({err: true, message: err});
            
            res.json({err: false, message: 'Successfully deleted'})
        });
    });
    
    var updateMemberFromReq = function(member, req) {
        member.email = req.body.email;
        member.fname = req.body.fname;
        member.lname = req.body.lname;
        member.pword = md5(req.body.pword);
        member.role = req.body.role;
        
        return member;
    };
    
    var memberExists = function(member, cb) {
        Member.find({email: member.email}).limit(1).exec(function(err, result) {
            if(err) return cb({err: true, message: err});
            cb({err: false, result: result.length > 0});
        });
    };
};