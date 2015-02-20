var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var helloService = require('./helloworld');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req,res){
    res.send('Home');
});


app.post('/HelloWorld', function(req,res) {
    var s = new helloService();
    s.post(req, res);
});


var server = app.listen(9090, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Ls-seed Backend listening at http://%s:%s', host, port);
});