var express = require("express"),
    app     = express(),
    mongoose = require("mongoose"),
    cookieSession = require("cookie-session"),
    passport = require("passport");

var keys = require("./config/keys");

require("./models/User");   
require("./services/passport");

var authRoutes = require("./routes/authroutes");

app.use(
    cookieSession({
       maxAge: 30*24*60*60*1000,
       keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

var url = process.env.DATABASEURL || "mongodb://localhost/emaily" ; 
mongoose.connect(url);

app.get('/', function(req, res){
    res.send('Hi there');
});

app.use("/",authRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server started');
});
