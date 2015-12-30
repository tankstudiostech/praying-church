var Member = require('../models/member');
var md5 = require('md5');

module.exports = function(router) {
    router.route('/members')
    .post(function(req, res) {
        var member = new Member();
        member.email = req.body.email;
        member.fname = req.body.fname;
        member.lname = req.body.lname;
        
        member.save(function(err) {
            if(err) res.json({err: true, message: err});
            
            res.json({err: false, message: 'Member created!'});
        })
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
            member.email = req.body.email;
            member.fname = req.body.fname;
            member.lname = req.body.lname;
            member.pword = md5(req.body.pword);
            member.role = req.body.role;
            
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
};