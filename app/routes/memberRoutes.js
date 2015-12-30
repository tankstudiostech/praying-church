var Member = require('../models/member');

module.exports = function(router) {
    router.route('/members')
    .post(function(req, res) {
        var member = new Member();
        member.email = req.body.email;
        member.fname = req.body.fname;
        member.lname = req.body.lname;
        
        member.save(function(err) {
            if(err) res.send(err);
            
            res.json({message: 'Member created!'});
        })
    })
    .get(function(req, res) {
        Member.find(function(err, members) {
            if(err) res.send(err);
            
            res.json(members);
        })
    });

router.route('/members/:memberId')
    .get(function(req, res) {
        Member.findById(req.params.memberId, function(err, member) {
            if(err) res.send(err);
            
            res.json(member);
        });  
    })
    .put(function(req, res) {
        Member.findById(req.params.memberId, function(err, member) {
            if(err) res.send(err);
            
            member.email = req.body.email;
            member.fname = req.body.fname;
            member.lname = req.body.lname;
            
            member.save(function(err) {
                if(err) res.send(err);
                
                res.json({message: 'Member updated!'});
            });
        });
    })
    .delete(function(req, res) {
        Member.remove({
            _id: req.params.memberId
        }, function(err, member) {
            if(err) res.send(err);
            
            res.json({message: 'Successfully deleted'})
        });
    });
};