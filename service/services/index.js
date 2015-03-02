var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var helloService = require('./helloworld');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', helloService); //mount our HelloWorld


var server = app.listen(9090, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Ls-seed Backend listening at http://%s:%s', host, port);
});