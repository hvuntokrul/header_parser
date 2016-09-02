var express = require('express');
var app = express();
var port = process.env.PORT || 8080; //for Heroku
//module to extract browser and os info from request //https://github.com/3rd-Eden/useragent
var useragent = require('useragent');

//answer to homepage requests
app.use('/', express.static(__dirname + '/public'));

//answer get requests to the api
app.get('/api/', function (req, res){
    //use module to extract os data
    var agent = useragent.parse(req.headers['user-agent']);
    //create reply as per spec
    var reply = {
        'ip_address' : req.headers['x-forwarded-for'],
        'language' : req.headers['accept-language'],
        'OS' : agent.os.family
    };
    
    res.json(reply);
});
app.get('/', function(req, res){
    
});
//start server
app.listen(port, function () {
  console.log('Header parser app listening on port ' + port);
});
