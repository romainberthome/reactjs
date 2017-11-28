var express = require("express"),
    passport = require("passport"),
    GoogleStrategy = require("passport-google-oauth20").Strategy,
    app     = express();


passport.use(new GoogleStrategy());

app.get('/', function(req, res){
    res.send('Hi there');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server started');
});
