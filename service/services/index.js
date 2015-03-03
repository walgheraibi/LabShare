var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var helloService = require('./helloworld');
//var userService = require('./Users');
var stemService = require('./stemcells2');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req,res){
    res.send('Home');
});

app.post('/HelloWorld', function(req,res) {
    var s = new helloService();
    s.post(req, res);
});

app.get('/stemcells1', function(req,res) {
    var s = new stemService();
    s.stemcellServices(req, res);
});


app.get('/users', function(request, response){
    var users = new userService();
    users.getUsers(request, response);
});

app.get('/user', function(request, response){
    var users = new userService();
    users.getUser(request, response);
});

app.post('/user', function(request, response){
    var users = new userService();
    users.addUser(request, response)
});

app.delete('/user', function(request, response){
    var users = new userService();
    users.deleteUser(request, response)
});

var server = app.listen(9090, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Ls-seed Backend listening at http://%s:%s', host, port);
});