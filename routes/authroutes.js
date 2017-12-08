var express = require("express"),
    router     = express.Router(),
    passport = require("passport");

router.get('/auth/google', passport.authenticate('google',{
    scope: ['profile', 'email']
})
);

router.get('/auth/google/callback', passport.authenticate('google'));

router.get('/api/current_user', function(req, res){
   res.send(req.user); 
});

router.get('/api/logout', function(req, res) {
    req.logout();
    res.send(req.user);
});

module.exports = router;