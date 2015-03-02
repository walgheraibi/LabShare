/**
 * Created by weaamalgheraibi on 2/24/15.
 */

var cells = require('.lib/stemcells1');

var stemcells1 = function stemcells1() {
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

module.exports = stemcells1;