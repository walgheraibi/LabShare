var hello = require('../lib/HelloWorld');

var HelloWorld = function HelloWorld() {
    console.log("creating new helloworld service");
    this.post = function (req, res) {
        console.log("handling post");
        console.log("reg body: " + req.body);
        var name = req.body.name;

        hello(name, function (err, data) {
            res.json(data);
        });
    }
};

module.exports = HelloWorld;