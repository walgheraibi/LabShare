var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var helloService = require('./helloworld');
var samplesService = require('./samples');
var cors = require('cors');

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

app.get('/samples', function(request, response){
    var samples = new samplesService();
    samples.getsamples(request, response);
});
var server = app.listen(9090, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Ls-seed Backend listening at http://%s:%s', host, port);
});