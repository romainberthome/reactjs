var express = require("express"),
    app     = express();
    
app.get('/', function(req, res){
    res.send('Hi there');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server started');
});
