var passport = require("passport"),
    GoogleStrategy = require("passport-google-oauth20").Strategy,
    keys = require("../config/keys");

    
var User = require("../models/User");

passport.serializeUser(function(user, done){
   done(null, user.id); 
});

passport.deserializeUser(function(id, done){
    User.findById(id)
    .then(function(user){
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: process.env.CALLBACKURL || 'https://react-js-romainberthome.c9users.io/auth/google/callback'
        }, function(accessToken, refreshToken, profile, done){
            User.findOne({ googleId: profile.id})
            .then(function(existingUser){
                if(existingUser){
                  done(null, existingUser);  
                } else{
                   new User({ googleId: profile.id}).save()
                   .then(function(user){
                       done(null, user);
                   });
                }
            })
    })
);



