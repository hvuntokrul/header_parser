var express = require('express');
var app = express();
var port = process.env.PORT || 8080; //for Heroku

//answer to homepage requests
app.use('/', express.static(__dirname + '/public'));



//answer get requests with supplied parameters
app.get('/api/', function (req, res){
    var reply = {
        'ip address' : req.headers['x-forwarded-for'],
        'language' : req.headers['accept-language'],
        'browser' : req.headers['user-agent']
        
    };
    //req.headers.user-agent (browser)
    //req.headers.accept-language (lang)
    // req.headers.x-forwarded-for (ip)
    var rrrr = req;
    //console.log(req);
    res.json(reply);
    
});
//start server
app.listen(port, function () {
  console.log('Header parser app listening on port ' + port);
});